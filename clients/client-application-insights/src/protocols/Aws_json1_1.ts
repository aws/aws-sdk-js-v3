// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddWorkloadCommandInput, AddWorkloadCommandOutput } from "../commands/AddWorkloadCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import { CreateLogPatternCommandInput, CreateLogPatternCommandOutput } from "../commands/CreateLogPatternCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput } from "../commands/DeleteLogPatternCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "../commands/DescribeApplicationCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "../commands/DescribeComponentCommand";
import {
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput,
} from "../commands/DescribeComponentConfigurationCommand";
import {
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput,
} from "../commands/DescribeComponentConfigurationRecommendationCommand";
import { DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput } from "../commands/DescribeLogPatternCommand";
import {
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput,
} from "../commands/DescribeObservationCommand";
import { DescribeProblemCommandInput, DescribeProblemCommandOutput } from "../commands/DescribeProblemCommand";
import {
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput,
} from "../commands/DescribeProblemObservationsCommand";
import { DescribeWorkloadCommandInput, DescribeWorkloadCommandOutput } from "../commands/DescribeWorkloadCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "../commands/ListConfigurationHistoryCommand";
import { ListLogPatternsCommandInput, ListLogPatternsCommandOutput } from "../commands/ListLogPatternsCommand";
import { ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput } from "../commands/ListLogPatternSetsCommand";
import { ListProblemsCommandInput, ListProblemsCommandOutput } from "../commands/ListProblemsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { RemoveWorkloadCommandInput, RemoveWorkloadCommandOutput } from "../commands/RemoveWorkloadCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import {
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
} from "../commands/UpdateComponentConfigurationCommand";
import { UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput } from "../commands/UpdateLogPatternCommand";
import { UpdateProblemCommandInput, UpdateProblemCommandOutput } from "../commands/UpdateProblemCommand";
import { UpdateWorkloadCommandInput, UpdateWorkloadCommandOutput } from "../commands/UpdateWorkloadCommand";
import { ApplicationInsightsServiceException as __BaseException } from "../models/ApplicationInsightsServiceException";
import {
  AccessDeniedException,
  AddWorkloadRequest,
  BadRequestException,
  ConfigurationEvent,
  CreateApplicationRequest,
  CreateComponentRequest,
  CreateLogPatternRequest,
  DeleteApplicationRequest,
  DeleteComponentRequest,
  DeleteLogPatternRequest,
  DescribeApplicationRequest,
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRequest,
  DescribeComponentRequest,
  DescribeLogPatternRequest,
  DescribeObservationRequest,
  DescribeObservationResponse,
  DescribeProblemObservationsRequest,
  DescribeProblemObservationsResponse,
  DescribeProblemRequest,
  DescribeProblemResponse,
  DescribeWorkloadRequest,
  InternalServerException,
  ListApplicationsRequest,
  ListComponentsRequest,
  ListConfigurationHistoryRequest,
  ListConfigurationHistoryResponse,
  ListLogPatternSetsRequest,
  ListLogPatternsRequest,
  ListProblemsRequest,
  ListProblemsResponse,
  ListTagsForResourceRequest,
  ListWorkloadsRequest,
  Observation,
  Problem,
  RelatedObservations,
  RemoveWorkloadRequest,
  ResourceInUseException,
  ResourceNotFoundException,
  Tag,
  TagResourceRequest,
  TagsAlreadyExistException,
  TooManyTagsException,
  UntagResourceRequest,
  UpdateApplicationRequest,
  UpdateComponentConfigurationRequest,
  UpdateComponentRequest,
  UpdateLogPatternRequest,
  UpdateProblemRequest,
  UpdateWorkloadRequest,
  ValidationException,
  WorkloadConfiguration,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddWorkloadCommand
 */
export const se_AddWorkloadCommand = async (
  input: AddWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddWorkload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogPatternCommand
 */
export const se_CreateLogPatternCommand = async (
  input: CreateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLogPattern");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogPatternCommand
 */
export const se_DeleteLogPatternCommand = async (
  input: DeleteLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLogPattern");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationCommand
 */
export const se_DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComponentCommand
 */
export const se_DescribeComponentCommand = async (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComponentConfigurationCommand
 */
export const se_DescribeComponentConfigurationCommand = async (
  input: DescribeComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeComponentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand
 */
export const se_DescribeComponentConfigurationRecommendationCommand = async (
  input: DescribeComponentConfigurationRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeComponentConfigurationRecommendation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLogPatternCommand
 */
export const se_DescribeLogPatternCommand = async (
  input: DescribeLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLogPattern");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeObservationCommand
 */
export const se_DescribeObservationCommand = async (
  input: DescribeObservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeObservation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProblemCommand
 */
export const se_DescribeProblemCommand = async (
  input: DescribeProblemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProblem");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProblemObservationsCommand
 */
export const se_DescribeProblemObservationsCommand = async (
  input: DescribeProblemObservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProblemObservations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkloadCommand
 */
export const se_DescribeWorkloadCommand = async (
  input: DescribeWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComponents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConfigurationHistoryCommand
 */
export const se_ListConfigurationHistoryCommand = async (
  input: ListConfigurationHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConfigurationHistory");
  let body: any;
  body = JSON.stringify(se_ListConfigurationHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogPatternsCommand
 */
export const se_ListLogPatternsCommand = async (
  input: ListLogPatternsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogPatterns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogPatternSetsCommand
 */
export const se_ListLogPatternSetsCommand = async (
  input: ListLogPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogPatternSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProblemsCommand
 */
export const se_ListProblemsCommand = async (
  input: ListProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProblems");
  let body: any;
  body = JSON.stringify(se_ListProblemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkloadsCommand
 */
export const se_ListWorkloadsCommand = async (
  input: ListWorkloadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkloads");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveWorkloadCommand
 */
export const se_RemoveWorkloadCommand = async (
  input: RemoveWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveWorkload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateComponentCommand
 */
export const se_UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateComponentConfigurationCommand
 */
export const se_UpdateComponentConfigurationCommand = async (
  input: UpdateComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateComponentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLogPatternCommand
 */
export const se_UpdateLogPatternCommand = async (
  input: UpdateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLogPattern");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProblemCommand
 */
export const se_UpdateProblemCommand = async (
  input: UpdateProblemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProblem");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkloadCommand
 */
export const se_UpdateWorkloadCommand = async (
  input: UpdateWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddWorkloadCommand
 */
export const de_AddWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkloadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddWorkloadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddWorkloadCommandError
 */
const de_AddWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.applicationinsights#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagsAlreadyExistException":
    case "com.amazonaws.applicationinsights#TagsAlreadyExistException":
      throw await de_TagsAlreadyExistExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1CreateComponentCommand
 */
export const de_CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateComponentCommandError
 */
const de_CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1CreateLogPatternCommand
 */
export const de_CreateLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLogPatternCommandError
 */
const de_CreateLogPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.applicationinsights#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteComponentCommandError
 */
const de_DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DeleteLogPatternCommand
 */
export const de_DeleteLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLogPatternCommandError
 */
const de_DeleteLogPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.applicationinsights#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeApplicationCommand
 */
export const de_DescribeApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationCommandError
 */
const de_DescribeApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeComponentCommand
 */
export const de_DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeComponentCommandError
 */
const de_DescribeComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeComponentConfigurationCommand
 */
export const de_DescribeComponentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComponentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeComponentConfigurationCommandError
 */
const de_DescribeComponentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand
 */
export const de_DescribeComponentConfigurationRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeComponentConfigurationRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeComponentConfigurationRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError
 */
const de_DescribeComponentConfigurationRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeLogPatternCommand
 */
export const de_DescribeLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLogPatternCommandError
 */
const de_DescribeLogPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeObservationCommand
 */
export const de_DescribeObservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeObservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeObservationResponse(data, context);
  const response: DescribeObservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeObservationCommandError
 */
const de_DescribeObservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeProblemCommand
 */
export const de_DescribeProblemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProblemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProblemResponse(data, context);
  const response: DescribeProblemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProblemCommandError
 */
const de_DescribeProblemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeProblemObservationsCommand
 */
export const de_DescribeProblemObservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemObservationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProblemObservationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProblemObservationsResponse(data, context);
  const response: DescribeProblemObservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProblemObservationsCommandError
 */
const de_DescribeProblemObservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemObservationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1DescribeWorkloadCommand
 */
export const de_DescribeWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkloadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkloadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkloadCommandError
 */
const de_DescribeWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListComponentsCommandError
 */
const de_ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListConfigurationHistoryCommand
 */
export const de_ListConfigurationHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConfigurationHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConfigurationHistoryResponse(data, context);
  const response: ListConfigurationHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListConfigurationHistoryCommandError
 */
const de_ListConfigurationHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListLogPatternsCommand
 */
export const de_ListLogPatternsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLogPatternsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLogPatternsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLogPatternsCommandError
 */
const de_ListLogPatternsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListLogPatternSetsCommand
 */
export const de_ListLogPatternSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLogPatternSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLogPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLogPatternSetsCommandError
 */
const de_ListLogPatternSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListProblemsCommand
 */
export const de_ListProblemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProblemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProblemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProblemsResponse(data, context);
  const response: ListProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProblemsCommandError
 */
const de_ListProblemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProblemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1ListWorkloadsCommand
 */
export const de_ListWorkloadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkloadsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListWorkloadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkloadsCommandError
 */
const de_ListWorkloadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1RemoveWorkloadCommand
 */
export const de_RemoveWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveWorkloadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveWorkloadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveWorkloadCommandError
 */
const de_RemoveWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.applicationinsights#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateComponentCommand
 */
export const de_UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateComponentCommandError
 */
const de_UpdateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateComponentConfigurationCommand
 */
export const de_UpdateComponentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateComponentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateComponentConfigurationCommandError
 */
const de_UpdateComponentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateLogPatternCommand
 */
export const de_UpdateLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLogPatternCommandError
 */
const de_UpdateLogPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateProblemCommand
 */
export const de_UpdateProblemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProblemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProblemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProblemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProblemCommandError
 */
const de_UpdateProblemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProblemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1UpdateWorkloadCommand
 */
export const de_UpdateWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkloadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWorkloadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkloadCommandError
 */
const de_UpdateWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagsAlreadyExistExceptionRes
 */
const de_TagsAlreadyExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagsAlreadyExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddWorkloadRequest omitted.

// se_CreateApplicationRequest omitted.

// se_CreateComponentRequest omitted.

// se_CreateLogPatternRequest omitted.

// se_DeleteApplicationRequest omitted.

// se_DeleteComponentRequest omitted.

// se_DeleteLogPatternRequest omitted.

// se_DescribeApplicationRequest omitted.

// se_DescribeComponentConfigurationRecommendationRequest omitted.

// se_DescribeComponentConfigurationRequest omitted.

// se_DescribeComponentRequest omitted.

// se_DescribeLogPatternRequest omitted.

// se_DescribeObservationRequest omitted.

// se_DescribeProblemObservationsRequest omitted.

// se_DescribeProblemRequest omitted.

// se_DescribeWorkloadRequest omitted.

// se_ListApplicationsRequest omitted.

// se_ListComponentsRequest omitted.

/**
 * serializeAws_json1_1ListConfigurationHistoryRequest
 */
const se_ListConfigurationHistoryRequest = (input: ListConfigurationHistoryRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    EventStatus: [],
    MaxResults: [],
    NextToken: [],
    ResourceGroupName: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListLogPatternSetsRequest omitted.

// se_ListLogPatternsRequest omitted.

/**
 * serializeAws_json1_1ListProblemsRequest
 */
const se_ListProblemsRequest = (input: ListProblemsRequest, context: __SerdeContext): any => {
  return take(input, {
    AccountId: [],
    ComponentName: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    ResourceGroupName: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
    Visibility: [],
  });
};

// se_ListTagsForResourceRequest omitted.

// se_ListWorkloadsRequest omitted.

// se_RemoveWorkloadRequest omitted.

// se_ResourceList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateApplicationRequest omitted.

// se_UpdateComponentConfigurationRequest omitted.

// se_UpdateComponentRequest omitted.

// se_UpdateLogPatternRequest omitted.

// se_UpdateProblemRequest omitted.

// se_UpdateWorkloadRequest omitted.

// se_WorkloadConfiguration omitted.

// de_AccessDeniedException omitted.

// de_AddWorkloadResponse omitted.

// de_ApplicationComponent omitted.

// de_ApplicationComponentList omitted.

// de_ApplicationInfo omitted.

// de_ApplicationInfoList omitted.

// de_BadRequestException omitted.

/**
 * deserializeAws_json1_1ConfigurationEvent
 */
const de_ConfigurationEvent = (output: any, context: __SerdeContext): ConfigurationEvent => {
  return take(output, {
    AccountId: __expectString,
    EventDetail: __expectString,
    EventResourceName: __expectString,
    EventResourceType: __expectString,
    EventStatus: __expectString,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoredResourceARN: __expectString,
    ResourceGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConfigurationEventList
 */
const de_ConfigurationEventList = (output: any, context: __SerdeContext): ConfigurationEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationEvent(entry, context);
    });
  return retVal;
};

// de_CreateApplicationResponse omitted.

// de_CreateComponentResponse omitted.

// de_CreateLogPatternResponse omitted.

// de_DeleteApplicationResponse omitted.

// de_DeleteComponentResponse omitted.

// de_DeleteLogPatternResponse omitted.

// de_DescribeApplicationResponse omitted.

// de_DescribeComponentConfigurationRecommendationResponse omitted.

// de_DescribeComponentConfigurationResponse omitted.

// de_DescribeComponentResponse omitted.

// de_DescribeLogPatternResponse omitted.

/**
 * deserializeAws_json1_1DescribeObservationResponse
 */
const de_DescribeObservationResponse = (output: any, context: __SerdeContext): DescribeObservationResponse => {
  return take(output, {
    Observation: (_: any) => de_Observation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProblemObservationsResponse
 */
const de_DescribeProblemObservationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProblemObservationsResponse => {
  return take(output, {
    RelatedObservations: (_: any) => de_RelatedObservations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProblemResponse
 */
const de_DescribeProblemResponse = (output: any, context: __SerdeContext): DescribeProblemResponse => {
  return take(output, {
    Problem: (_: any) => de_Problem(_, context),
  }) as any;
};

// de_DescribeWorkloadResponse omitted.

// de_DetectedWorkload omitted.

// de_Feedback omitted.

// de_InternalServerException omitted.

// de_ListApplicationsResponse omitted.

// de_ListComponentsResponse omitted.

/**
 * deserializeAws_json1_1ListConfigurationHistoryResponse
 */
const de_ListConfigurationHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationHistoryResponse => {
  return take(output, {
    EventList: (_: any) => de_ConfigurationEventList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListLogPatternSetsResponse omitted.

// de_ListLogPatternsResponse omitted.

/**
 * deserializeAws_json1_1ListProblemsResponse
 */
const de_ListProblemsResponse = (output: any, context: __SerdeContext): ListProblemsResponse => {
  return take(output, {
    AccountId: __expectString,
    NextToken: __expectString,
    ProblemList: (_: any) => de_ProblemList(_, context),
    ResourceGroupName: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ListWorkloadsResponse omitted.

// de_LogPattern omitted.

// de_LogPatternList omitted.

// de_LogPatternSetList omitted.

/**
 * deserializeAws_json1_1Observation
 */
const de_Observation = (output: any, context: __SerdeContext): Observation => {
  return take(output, {
    CloudWatchEventDetailType: __expectString,
    CloudWatchEventId: __expectString,
    CloudWatchEventSource: __expectString,
    CodeDeployApplication: __expectString,
    CodeDeployDeploymentGroup: __expectString,
    CodeDeployDeploymentId: __expectString,
    CodeDeployInstanceGroupId: __expectString,
    CodeDeployState: __expectString,
    EbsCause: __expectString,
    EbsEvent: __expectString,
    EbsRequestId: __expectString,
    EbsResult: __expectString,
    Ec2State: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HealthEventArn: __expectString,
    HealthEventDescription: __expectString,
    HealthEventTypeCategory: __expectString,
    HealthEventTypeCode: __expectString,
    HealthService: __expectString,
    Id: __expectString,
    LineTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogFilter: __expectString,
    LogGroup: __expectString,
    LogText: __expectString,
    MetricName: __expectString,
    MetricNamespace: __expectString,
    RdsEventCategories: __expectString,
    RdsEventMessage: __expectString,
    S3EventName: __expectString,
    SourceARN: __expectString,
    SourceType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StatesArn: __expectString,
    StatesExecutionArn: __expectString,
    StatesInput: __expectString,
    StatesStatus: __expectString,
    Unit: __expectString,
    Value: __limitedParseDouble,
    XRayErrorPercent: __expectInt32,
    XRayFaultPercent: __expectInt32,
    XRayNodeName: __expectString,
    XRayNodeType: __expectString,
    XRayRequestAverageLatency: __expectLong,
    XRayRequestCount: __expectInt32,
    XRayThrottlePercent: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ObservationList
 */
const de_ObservationList = (output: any, context: __SerdeContext): Observation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Observation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Problem
 */
const de_Problem = (output: any, context: __SerdeContext): Problem => {
  return take(output, {
    AccountId: __expectString,
    AffectedResource: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Feedback: _json,
    Id: __expectString,
    Insights: __expectString,
    LastRecurrenceTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RecurringCount: __expectLong,
    ResolutionMethod: __expectString,
    ResourceGroupName: __expectString,
    SeverityLevel: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Title: __expectString,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProblemList
 */
const de_ProblemList = (output: any, context: __SerdeContext): Problem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Problem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RelatedObservations
 */
const de_RelatedObservations = (output: any, context: __SerdeContext): RelatedObservations => {
  return take(output, {
    ObservationList: (_: any) => de_ObservationList(_, context),
  }) as any;
};

// de_RemoveWorkloadResponse omitted.

// de_ResourceInUseException omitted.

// de_ResourceList omitted.

// de_ResourceNotFoundException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TagsAlreadyExistException omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateApplicationResponse omitted.

// de_UpdateComponentConfigurationResponse omitted.

// de_UpdateComponentResponse omitted.

// de_UpdateLogPatternResponse omitted.

// de_UpdateProblemResponse omitted.

// de_UpdateWorkloadResponse omitted.

// de_ValidationException omitted.

// de_Workload omitted.

// de_WorkloadConfiguration omitted.

// de_WorkloadList omitted.

// de_WorkloadMetaData omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `EC2WindowsBarleyService.${operation}`,
  };
}

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
