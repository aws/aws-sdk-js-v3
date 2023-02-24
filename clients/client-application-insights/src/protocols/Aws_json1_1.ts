// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import {
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
} from "../commands/UpdateComponentConfigurationCommand";
import { UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput } from "../commands/UpdateLogPatternCommand";
import { ApplicationInsightsServiceException as __BaseException } from "../models/ApplicationInsightsServiceException";
import {
  AccessDeniedException,
  ApplicationComponent,
  ApplicationInfo,
  BadRequestException,
  ConfigurationEvent,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateComponentRequest,
  CreateComponentResponse,
  CreateLogPatternRequest,
  CreateLogPatternResponse,
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteComponentRequest,
  DeleteComponentResponse,
  DeleteLogPatternRequest,
  DeleteLogPatternResponse,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRecommendationResponse,
  DescribeComponentConfigurationRequest,
  DescribeComponentConfigurationResponse,
  DescribeComponentRequest,
  DescribeComponentResponse,
  DescribeLogPatternRequest,
  DescribeLogPatternResponse,
  DescribeObservationRequest,
  DescribeObservationResponse,
  DescribeProblemObservationsRequest,
  DescribeProblemObservationsResponse,
  DescribeProblemRequest,
  DescribeProblemResponse,
  FeedbackKey,
  FeedbackValue,
  InternalServerException,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListComponentsRequest,
  ListComponentsResponse,
  ListConfigurationHistoryRequest,
  ListConfigurationHistoryResponse,
  ListLogPatternSetsRequest,
  ListLogPatternSetsResponse,
  ListLogPatternsRequest,
  ListLogPatternsResponse,
  ListProblemsRequest,
  ListProblemsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LogPattern,
  Observation,
  Problem,
  RelatedObservations,
  ResourceInUseException,
  ResourceNotFoundException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TagsAlreadyExistException,
  Tier,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateComponentConfigurationRequest,
  UpdateComponentConfigurationResponse,
  UpdateComponentRequest,
  UpdateComponentResponse,
  UpdateLogPatternRequest,
  UpdateLogPatternResponse,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogPatternCommand = async (
  input: CreateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.CreateLogPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogPatternCommand = async (
  input: DeleteLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DeleteLogPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComponentCommand = async (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComponentConfigurationCommand = async (
  input: DescribeComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponentConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = async (
  input: DescribeComponentConfigurationRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLogPatternCommand = async (
  input: DescribeLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeLogPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeObservationCommand = async (
  input: DescribeObservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeObservation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeObservationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProblemCommand = async (
  input: DescribeProblemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeProblem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProblemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProblemObservationsCommand = async (
  input: DescribeProblemObservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.DescribeProblemObservations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProblemObservationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListComponents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListComponentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConfigurationHistoryCommand = async (
  input: ListConfigurationHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListConfigurationHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConfigurationHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLogPatternsCommand = async (
  input: ListLogPatternsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListLogPatterns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLogPatternsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLogPatternSetsCommand = async (
  input: ListLogPatternSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListLogPatternSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLogPatternSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProblemsCommand = async (
  input: ListProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListProblems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProblemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateComponentConfigurationCommand = async (
  input: UpdateComponentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateComponentConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateComponentConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLogPatternCommand = async (
  input: UpdateLogPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "EC2WindowsBarleyService.UpdateLogPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLogPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagsAlreadyExistException":
    case "com.amazonaws.applicationinsights#TagsAlreadyExistException":
      throw await deserializeAws_json1_1TagsAlreadyExistExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateComponentResponse(data, context);
  const response: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateComponentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLogPatternResponse(data, context);
  const response: CreateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogPatternCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteComponentResponse(data, context);
  const response: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteComponentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLogPatternResponse(data, context);
  const response: DeleteLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogPatternCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.applicationinsights#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentResponse(data, context);
  const response: DescribeComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComponentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComponentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationResponse(data, context);
  const response: DescribeComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComponentConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentConfigurationRecommendationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse(data, context);
  const response: DescribeComponentConfigurationRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogPatternResponse(data, context);
  const response: DescribeLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLogPatternCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeObservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeObservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeObservationResponse(data, context);
  const response: DescribeObservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeObservationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProblemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProblemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProblemResponse(data, context);
  const response: DescribeProblemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProblemCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProblemObservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProblemObservationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProblemObservationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProblemObservationsResponse(data, context);
  const response: DescribeProblemObservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProblemObservationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComponentsResponse(data, context);
  const response: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListComponentsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListConfigurationHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConfigurationHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConfigurationHistoryResponse(data, context);
  const response: ListConfigurationHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConfigurationHistoryCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLogPatternsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLogPatternsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogPatternsResponse(data, context);
  const response: ListLogPatternsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLogPatternsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListLogPatternSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogPatternSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLogPatternSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogPatternSetsResponse(data, context);
  const response: ListLogPatternSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLogPatternSetsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProblemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProblemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProblemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProblemsResponse(data, context);
  const response: ListProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProblemsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.applicationinsights#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateComponentResponse(data, context);
  const response: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateComponentCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateComponentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateComponentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateComponentConfigurationResponse(data, context);
  const response: UpdateComponentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateComponentConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateLogPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLogPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLogPatternResponse(data, context);
  const response: UpdateLogPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLogPatternCommandError = async (
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
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.applicationinsights#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.applicationinsights#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.applicationinsights#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(body, context);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
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

const deserializeAws_json1_1TagsAlreadyExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsAlreadyExistException(body, context);
  const exception = new TagsAlreadyExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoConfigEnabled != null && { AutoConfigEnabled: input.AutoConfigEnabled }),
    ...(input.AutoCreate != null && { AutoCreate: input.AutoCreate }),
    ...(input.CWEMonitorEnabled != null && { CWEMonitorEnabled: input.CWEMonitorEnabled }),
    ...(input.GroupingType != null && { GroupingType: input.GroupingType }),
    ...(input.OpsCenterEnabled != null && { OpsCenterEnabled: input.OpsCenterEnabled }),
    ...(input.OpsItemSNSTopicArn != null && { OpsItemSNSTopicArn: input.OpsItemSNSTopicArn }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateComponentRequest = (input: CreateComponentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.ResourceList != null && { ResourceList: serializeAws_json1_1ResourceList(input.ResourceList, context) }),
  };
};

const serializeAws_json1_1CreateLogPatternRequest = (input: CreateLogPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
    ...(input.PatternName != null && { PatternName: input.PatternName }),
    ...(input.PatternSetName != null && { PatternSetName: input.PatternSetName }),
    ...(input.Rank != null && { Rank: input.Rank }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DeleteComponentRequest = (input: DeleteComponentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DeleteLogPatternRequest = (input: DeleteLogPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.PatternName != null && { PatternName: input.PatternName }),
    ...(input.PatternSetName != null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DescribeComponentConfigurationRecommendationRequest = (
  input: DescribeComponentConfigurationRecommendationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tier != null && { Tier: input.Tier }),
  };
};

const serializeAws_json1_1DescribeComponentConfigurationRequest = (
  input: DescribeComponentConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DescribeComponentRequest = (
  input: DescribeComponentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DescribeLogPatternRequest = (
  input: DescribeLogPatternRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PatternName != null && { PatternName: input.PatternName }),
    ...(input.PatternSetName != null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1DescribeObservationRequest = (
  input: DescribeObservationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservationId != null && { ObservationId: input.ObservationId }),
  };
};

const serializeAws_json1_1DescribeProblemObservationsRequest = (
  input: DescribeProblemObservationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProblemId != null && { ProblemId: input.ProblemId }),
  };
};

const serializeAws_json1_1DescribeProblemRequest = (input: DescribeProblemRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProblemId != null && { ProblemId: input.ProblemId }),
  };
};

const serializeAws_json1_1ListApplicationsRequest = (input: ListApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListComponentsRequest = (input: ListComponentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1ListConfigurationHistoryRequest = (
  input: ListConfigurationHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventStatus != null && { EventStatus: input.EventStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListLogPatternSetsRequest = (
  input: ListLogPatternSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1ListLogPatternsRequest = (input: ListLogPatternsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PatternSetName != null && { PatternSetName: input.PatternSetName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1ListProblemsRequest = (input: ListProblemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoConfigEnabled != null && { AutoConfigEnabled: input.AutoConfigEnabled }),
    ...(input.CWEMonitorEnabled != null && { CWEMonitorEnabled: input.CWEMonitorEnabled }),
    ...(input.OpsCenterEnabled != null && { OpsCenterEnabled: input.OpsCenterEnabled }),
    ...(input.OpsItemSNSTopicArn != null && { OpsItemSNSTopicArn: input.OpsItemSNSTopicArn }),
    ...(input.RemoveSNSTopic != null && { RemoveSNSTopic: input.RemoveSNSTopic }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const serializeAws_json1_1UpdateComponentConfigurationRequest = (
  input: UpdateComponentConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoConfigEnabled != null && { AutoConfigEnabled: input.AutoConfigEnabled }),
    ...(input.ComponentConfiguration != null && { ComponentConfiguration: input.ComponentConfiguration }),
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.Monitor != null && { Monitor: input.Monitor }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.Tier != null && { Tier: input.Tier }),
  };
};

const serializeAws_json1_1UpdateComponentRequest = (input: UpdateComponentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.NewComponentName != null && { NewComponentName: input.NewComponentName }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
    ...(input.ResourceList != null && { ResourceList: serializeAws_json1_1ResourceList(input.ResourceList, context) }),
  };
};

const serializeAws_json1_1UpdateLogPatternRequest = (input: UpdateLogPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
    ...(input.PatternName != null && { PatternName: input.PatternName }),
    ...(input.PatternSetName != null && { PatternSetName: input.PatternSetName }),
    ...(input.Rank != null && { Rank: input.Rank }),
    ...(input.ResourceGroupName != null && { ResourceGroupName: input.ResourceGroupName }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ApplicationComponent = (output: any, context: __SerdeContext): ApplicationComponent => {
  return {
    ComponentName: __expectString(output.ComponentName),
    ComponentRemarks: __expectString(output.ComponentRemarks),
    DetectedWorkload:
      output.DetectedWorkload != null
        ? deserializeAws_json1_1DetectedWorkload(output.DetectedWorkload, context)
        : undefined,
    Monitor: __expectBoolean(output.Monitor),
    OsType: __expectString(output.OsType),
    ResourceType: __expectString(output.ResourceType),
    Tier: __expectString(output.Tier),
  } as any;
};

const deserializeAws_json1_1ApplicationComponentList = (
  output: any,
  context: __SerdeContext
): ApplicationComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ApplicationInfo = (output: any, context: __SerdeContext): ApplicationInfo => {
  return {
    AutoConfigEnabled: __expectBoolean(output.AutoConfigEnabled),
    CWEMonitorEnabled: __expectBoolean(output.CWEMonitorEnabled),
    DiscoveryType: __expectString(output.DiscoveryType),
    LifeCycle: __expectString(output.LifeCycle),
    OpsCenterEnabled: __expectBoolean(output.OpsCenterEnabled),
    OpsItemSNSTopicArn: __expectString(output.OpsItemSNSTopicArn),
    Remarks: __expectString(output.Remarks),
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1ApplicationInfoList = (output: any, context: __SerdeContext): ApplicationInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConfigurationEvent = (output: any, context: __SerdeContext): ConfigurationEvent => {
  return {
    EventDetail: __expectString(output.EventDetail),
    EventResourceName: __expectString(output.EventResourceName),
    EventResourceType: __expectString(output.EventResourceType),
    EventStatus: __expectString(output.EventStatus),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    MonitoredResourceARN: __expectString(output.MonitoredResourceARN),
  } as any;
};

const deserializeAws_json1_1ConfigurationEventList = (output: any, context: __SerdeContext): ConfigurationEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfigurationEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    ApplicationInfo:
      output.ApplicationInfo != null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateComponentResponse = (
  output: any,
  context: __SerdeContext
): CreateComponentResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateLogPatternResponse = (
  output: any,
  context: __SerdeContext
): CreateLogPatternResponse => {
  return {
    LogPattern: output.LogPattern != null ? deserializeAws_json1_1LogPattern(output.LogPattern, context) : undefined,
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteComponentResponse = (
  output: any,
  context: __SerdeContext
): DeleteComponentResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteLogPatternResponse = (
  output: any,
  context: __SerdeContext
): DeleteLogPatternResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  return {
    ApplicationInfo:
      output.ApplicationInfo != null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeComponentConfigurationRecommendationResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentConfigurationRecommendationResponse => {
  return {
    ComponentConfiguration: __expectString(output.ComponentConfiguration),
  } as any;
};

const deserializeAws_json1_1DescribeComponentConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentConfigurationResponse => {
  return {
    ComponentConfiguration: __expectString(output.ComponentConfiguration),
    Monitor: __expectBoolean(output.Monitor),
    Tier: __expectString(output.Tier),
  } as any;
};

const deserializeAws_json1_1DescribeComponentResponse = (
  output: any,
  context: __SerdeContext
): DescribeComponentResponse => {
  return {
    ApplicationComponent:
      output.ApplicationComponent != null
        ? deserializeAws_json1_1ApplicationComponent(output.ApplicationComponent, context)
        : undefined,
    ResourceList:
      output.ResourceList != null ? deserializeAws_json1_1ResourceList(output.ResourceList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLogPatternResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogPatternResponse => {
  return {
    LogPattern: output.LogPattern != null ? deserializeAws_json1_1LogPattern(output.LogPattern, context) : undefined,
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1DescribeObservationResponse = (
  output: any,
  context: __SerdeContext
): DescribeObservationResponse => {
  return {
    Observation:
      output.Observation != null ? deserializeAws_json1_1Observation(output.Observation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProblemObservationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeProblemObservationsResponse => {
  return {
    RelatedObservations:
      output.RelatedObservations != null
        ? deserializeAws_json1_1RelatedObservations(output.RelatedObservations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProblemResponse = (
  output: any,
  context: __SerdeContext
): DescribeProblemResponse => {
  return {
    Problem: output.Problem != null ? deserializeAws_json1_1Problem(output.Problem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetectedWorkload = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, string>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, string>>, [key, value]: [Tier | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_json1_1WorkloadMetaData(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1Feedback = (
  output: any,
  context: __SerdeContext
): Record<string, FeedbackValue | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, FeedbackValue | string>, [key, value]: [FeedbackKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  return {
    ApplicationInfoList:
      output.ApplicationInfoList != null
        ? deserializeAws_json1_1ApplicationInfoList(output.ApplicationInfoList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListComponentsResponse = (output: any, context: __SerdeContext): ListComponentsResponse => {
  return {
    ApplicationComponentList:
      output.ApplicationComponentList != null
        ? deserializeAws_json1_1ApplicationComponentList(output.ApplicationComponentList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListConfigurationHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListConfigurationHistoryResponse => {
  return {
    EventList:
      output.EventList != null ? deserializeAws_json1_1ConfigurationEventList(output.EventList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLogPatternSetsResponse = (
  output: any,
  context: __SerdeContext
): ListLogPatternSetsResponse => {
  return {
    LogPatternSets:
      output.LogPatternSets != null
        ? deserializeAws_json1_1LogPatternSetList(output.LogPatternSets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1ListLogPatternsResponse = (
  output: any,
  context: __SerdeContext
): ListLogPatternsResponse => {
  return {
    LogPatterns:
      output.LogPatterns != null ? deserializeAws_json1_1LogPatternList(output.LogPatterns, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1ListProblemsResponse = (output: any, context: __SerdeContext): ListProblemsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProblemList:
      output.ProblemList != null ? deserializeAws_json1_1ProblemList(output.ProblemList, context) : undefined,
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogPattern = (output: any, context: __SerdeContext): LogPattern => {
  return {
    Pattern: __expectString(output.Pattern),
    PatternName: __expectString(output.PatternName),
    PatternSetName: __expectString(output.PatternSetName),
    Rank: __expectInt32(output.Rank),
  } as any;
};

const deserializeAws_json1_1LogPatternList = (output: any, context: __SerdeContext): LogPattern[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogPattern(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LogPatternSetList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Observation = (output: any, context: __SerdeContext): Observation => {
  return {
    CloudWatchEventDetailType: __expectString(output.CloudWatchEventDetailType),
    CloudWatchEventId: __expectString(output.CloudWatchEventId),
    CloudWatchEventSource: __expectString(output.CloudWatchEventSource),
    CodeDeployApplication: __expectString(output.CodeDeployApplication),
    CodeDeployDeploymentGroup: __expectString(output.CodeDeployDeploymentGroup),
    CodeDeployDeploymentId: __expectString(output.CodeDeployDeploymentId),
    CodeDeployInstanceGroupId: __expectString(output.CodeDeployInstanceGroupId),
    CodeDeployState: __expectString(output.CodeDeployState),
    EbsCause: __expectString(output.EbsCause),
    EbsEvent: __expectString(output.EbsEvent),
    EbsRequestId: __expectString(output.EbsRequestId),
    EbsResult: __expectString(output.EbsResult),
    Ec2State: __expectString(output.Ec2State),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    HealthEventArn: __expectString(output.HealthEventArn),
    HealthEventDescription: __expectString(output.HealthEventDescription),
    HealthEventTypeCategory: __expectString(output.HealthEventTypeCategory),
    HealthEventTypeCode: __expectString(output.HealthEventTypeCode),
    HealthService: __expectString(output.HealthService),
    Id: __expectString(output.Id),
    LineTime:
      output.LineTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LineTime))) : undefined,
    LogFilter: __expectString(output.LogFilter),
    LogGroup: __expectString(output.LogGroup),
    LogText: __expectString(output.LogText),
    MetricName: __expectString(output.MetricName),
    MetricNamespace: __expectString(output.MetricNamespace),
    RdsEventCategories: __expectString(output.RdsEventCategories),
    RdsEventMessage: __expectString(output.RdsEventMessage),
    S3EventName: __expectString(output.S3EventName),
    SourceARN: __expectString(output.SourceARN),
    SourceType: __expectString(output.SourceType),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    StatesArn: __expectString(output.StatesArn),
    StatesExecutionArn: __expectString(output.StatesExecutionArn),
    StatesInput: __expectString(output.StatesInput),
    StatesStatus: __expectString(output.StatesStatus),
    Unit: __expectString(output.Unit),
    Value: __limitedParseDouble(output.Value),
    XRayErrorPercent: __expectInt32(output.XRayErrorPercent),
    XRayFaultPercent: __expectInt32(output.XRayFaultPercent),
    XRayNodeName: __expectString(output.XRayNodeName),
    XRayNodeType: __expectString(output.XRayNodeType),
    XRayRequestAverageLatency: __expectLong(output.XRayRequestAverageLatency),
    XRayRequestCount: __expectInt32(output.XRayRequestCount),
    XRayThrottlePercent: __expectInt32(output.XRayThrottlePercent),
  } as any;
};

const deserializeAws_json1_1ObservationList = (output: any, context: __SerdeContext): Observation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Observation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Problem = (output: any, context: __SerdeContext): Problem => {
  return {
    AffectedResource: __expectString(output.AffectedResource),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Feedback: output.Feedback != null ? deserializeAws_json1_1Feedback(output.Feedback, context) : undefined,
    Id: __expectString(output.Id),
    Insights: __expectString(output.Insights),
    LastRecurrenceTime:
      output.LastRecurrenceTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRecurrenceTime)))
        : undefined,
    RecurringCount: __expectLong(output.RecurringCount),
    ResourceGroupName: __expectString(output.ResourceGroupName),
    SeverityLevel: __expectString(output.SeverityLevel),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_json1_1ProblemList = (output: any, context: __SerdeContext): Problem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Problem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RelatedObservations = (output: any, context: __SerdeContext): RelatedObservations => {
  return {
    ObservationList:
      output.ObservationList != null
        ? deserializeAws_json1_1ObservationList(output.ObservationList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TagsAlreadyExistException = (
  output: any,
  context: __SerdeContext
): TagsAlreadyExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  return {
    ApplicationInfo:
      output.ApplicationInfo != null
        ? deserializeAws_json1_1ApplicationInfo(output.ApplicationInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateComponentConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateComponentConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateComponentResponse = (
  output: any,
  context: __SerdeContext
): UpdateComponentResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLogPatternResponse = (
  output: any,
  context: __SerdeContext
): UpdateLogPatternResponse => {
  return {
    LogPattern: output.LogPattern != null ? deserializeAws_json1_1LogPattern(output.LogPattern, context) : undefined,
    ResourceGroupName: __expectString(output.ResourceGroupName),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WorkloadMetaData = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
