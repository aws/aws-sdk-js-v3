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
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
} from "../commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
} from "../commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
} from "../commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
} from "../commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
} from "../commands/AddApplicationReferenceDataSourceCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
} from "../commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
} from "../commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
} from "../commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
} from "../commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "../commands/DescribeApplicationCommand";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "../commands/DiscoverInputSchemaCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "../commands/StartApplicationCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "../commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { KinesisAnalyticsServiceException as __BaseException } from "../models/KinesisAnalyticsServiceException";
import {
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationCloudWatchLoggingOptionResponse,
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationResponse,
  AddApplicationInputRequest,
  AddApplicationInputResponse,
  AddApplicationOutputRequest,
  AddApplicationOutputResponse,
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
  ApplicationDetail,
  ApplicationSummary,
  ApplicationUpdate,
  CloudWatchLoggingOption,
  CloudWatchLoggingOptionDescription,
  CloudWatchLoggingOptionUpdate,
  CodeValidationException,
  ConcurrentModificationException,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CSVMappingParameters,
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
  DeleteApplicationOutputRequest,
  DeleteApplicationOutputResponse,
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DestinationSchema,
  DiscoverInputSchemaRequest,
  DiscoverInputSchemaResponse,
  Input,
  InputConfiguration,
  InputDescription,
  InputLambdaProcessor,
  InputLambdaProcessorDescription,
  InputLambdaProcessorUpdate,
  InputParallelism,
  InputParallelismUpdate,
  InputProcessingConfiguration,
  InputProcessingConfigurationDescription,
  InputProcessingConfigurationUpdate,
  InputSchemaUpdate,
  InputStartingPositionConfiguration,
  InputUpdate,
  InvalidApplicationConfigurationException,
  InvalidArgumentException,
  JSONMappingParameters,
  KinesisFirehoseInput,
  KinesisFirehoseInputDescription,
  KinesisFirehoseInputUpdate,
  KinesisFirehoseOutput,
  KinesisFirehoseOutputDescription,
  KinesisFirehoseOutputUpdate,
  KinesisStreamsInput,
  KinesisStreamsInputDescription,
  KinesisStreamsInputUpdate,
  KinesisStreamsOutput,
  KinesisStreamsOutputDescription,
  KinesisStreamsOutputUpdate,
  LambdaOutput,
  LambdaOutputDescription,
  LambdaOutputUpdate,
  LimitExceededException,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MappingParameters,
  Output,
  OutputDescription,
  OutputUpdate,
  RecordColumn,
  RecordFormat,
  ReferenceDataSource,
  ReferenceDataSourceDescription,
  ReferenceDataSourceUpdate,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceProvisionedThroughputExceededException,
  S3Configuration,
  S3ReferenceDataSource,
  S3ReferenceDataSourceDescription,
  S3ReferenceDataSourceUpdate,
  ServiceUnavailableException,
  SourceSchema,
  StartApplicationRequest,
  StartApplicationResponse,
  StopApplicationRequest,
  StopApplicationResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UnableToDetectSchemaException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
} from "../models/models_0";

export const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputCommand = async (
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.AddApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationOutputCommand = async (
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.AddApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.AddApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (
  input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationOutputCommand = async (
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DescribeApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverInputSchemaCommand = async (
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.DiscoverInputSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.ListApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.StartApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.StopApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20150814.TagResource",
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
    "x-amz-target": "KinesisAnalytics_20150814.UntagResource",
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
    "x-amz-target": "KinesisAnalytics_20150814.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: AddApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddApplicationInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationInputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
  const response: AddApplicationInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalytics#CodeValidationException":
      throw await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(data, context);
  const response: AddApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
  const response: AddApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(data, context);
  const response: AddApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalytics#CodeValidationException":
      throw await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalytics#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalytics#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: DeleteApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(data, context);
  const response: DeleteApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationOutputResponse(data, context);
  const response: DeleteApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(data, context);
  const response: DeleteApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DiscoverInputSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
  const response: DiscoverInputSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DiscoverInputSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceProvisionedThroughputExceededException":
    case "com.amazonaws.kinesisanalytics#ResourceProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kinesisanalytics#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnableToDetectSchemaException":
    case "com.amazonaws.kinesisanalytics#UnableToDetectSchemaException":
      throw await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartApplicationResponse(data, context);
  const response: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalytics#InvalidApplicationConfigurationException":
      throw await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopApplicationResponse(data, context);
  const response: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalytics#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalytics#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalytics#CodeValidationException":
      throw await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalytics#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalytics#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalytics#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalytics#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalytics#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1CodeValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CodeValidationException(body, context);
  const exception = new CodeValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApplicationConfigurationException(body, context);
  const exception = new InvalidApplicationConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
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

const deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(body, context);
  const exception = new ResourceProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
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

const deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnableToDetectSchemaException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnableToDetectSchemaException(body, context);
  const exception = new UnableToDetectSchemaException({
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

const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = (
  input: AddApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOption != null && {
      CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
    }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (
  input: AddApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.InputId != null && { InputId: input.InputId }),
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1AddApplicationInputRequest = (
  input: AddApplicationInputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.Input != null && { Input: serializeAws_json1_1Input(input.Input, context) }),
  };
};

const serializeAws_json1_1AddApplicationOutputRequest = (
  input: AddApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.Output != null && { Output: serializeAws_json1_1Output(input.Output, context) }),
  };
};

const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (
  input: AddApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.ReferenceDataSource != null && {
      ReferenceDataSource: serializeAws_json1_1ReferenceDataSource(input.ReferenceDataSource, context),
    }),
  };
};

const serializeAws_json1_1ApplicationUpdate = (input: ApplicationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationCodeUpdate != null && { ApplicationCodeUpdate: input.ApplicationCodeUpdate }),
    ...(input.CloudWatchLoggingOptionUpdates != null && {
      CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(
        input.CloudWatchLoggingOptionUpdates,
        context
      ),
    }),
    ...(input.InputUpdates != null && { InputUpdates: serializeAws_json1_1InputUpdates(input.InputUpdates, context) }),
    ...(input.OutputUpdates != null && {
      OutputUpdates: serializeAws_json1_1OutputUpdates(input.OutputUpdates, context),
    }),
    ...(input.ReferenceDataSourceUpdates != null && {
      ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(
        input.ReferenceDataSourceUpdates,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOption = (input: CloudWatchLoggingOption, context: __SerdeContext): any => {
  return {
    ...(input.LogStreamARN != null && { LogStreamARN: input.LogStreamARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CloudWatchLoggingOption(entry, context);
    });
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (
  input: CloudWatchLoggingOptionUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptionId != null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.LogStreamARNUpdate != null && { LogStreamARNUpdate: input.LogStreamARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (
  input: CloudWatchLoggingOptionUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context);
    });
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationCode != null && { ApplicationCode: input.ApplicationCode }),
    ...(input.ApplicationDescription != null && { ApplicationDescription: input.ApplicationDescription }),
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.Inputs != null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) }),
    ...(input.Outputs != null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CSVMappingParameters = (input: CSVMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnDelimiter != null && { RecordColumnDelimiter: input.RecordColumnDelimiter }),
    ...(input.RecordRowDelimiter != null && { RecordRowDelimiter: input.RecordRowDelimiter }),
  };
};

const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (
  input: DeleteApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptionId != null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (
  input: DeleteApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.InputId != null && { InputId: input.InputId }),
  };
};

const serializeAws_json1_1DeleteApplicationOutputRequest = (
  input: DeleteApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.OutputId != null && { OutputId: input.OutputId }),
  };
};

const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (
  input: DeleteApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
  };
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CreateTimestamp != null && { CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
  };
};

const serializeAws_json1_1DestinationSchema = (input: DestinationSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordFormatType != null && { RecordFormatType: input.RecordFormatType }),
  };
};

const serializeAws_json1_1DiscoverInputSchemaRequest = (
  input: DiscoverInputSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      ),
    }),
    ...(input.InputStartingPositionConfiguration != null && {
      InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      ),
    }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3Configuration != null && {
      S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_1Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.InputParallelism != null && {
      InputParallelism: serializeAws_json1_1InputParallelism(input.InputParallelism, context),
    }),
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      ),
    }),
    ...(input.InputSchema != null && { InputSchema: serializeAws_json1_1SourceSchema(input.InputSchema, context) }),
    ...(input.KinesisFirehoseInput != null && {
      KinesisFirehoseInput: serializeAws_json1_1KinesisFirehoseInput(input.KinesisFirehoseInput, context),
    }),
    ...(input.KinesisStreamsInput != null && {
      KinesisStreamsInput: serializeAws_json1_1KinesisStreamsInput(input.KinesisStreamsInput, context),
    }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
  };
};

const serializeAws_json1_1InputConfiguration = (input: InputConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.InputStartingPositionConfiguration != null && {
      InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1InputConfigurations = (input: InputConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InputConfiguration(entry, context);
    });
};

const serializeAws_json1_1InputLambdaProcessor = (input: InputLambdaProcessor, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1InputLambdaProcessorUpdate = (
  input: InputLambdaProcessorUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1InputParallelism = (input: InputParallelism, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
  };
};

const serializeAws_json1_1InputParallelismUpdate = (input: InputParallelismUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CountUpdate != null && { CountUpdate: input.CountUpdate }),
  };
};

const serializeAws_json1_1InputProcessingConfiguration = (
  input: InputProcessingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessor != null && {
      InputLambdaProcessor: serializeAws_json1_1InputLambdaProcessor(input.InputLambdaProcessor, context),
    }),
  };
};

const serializeAws_json1_1InputProcessingConfigurationUpdate = (
  input: InputProcessingConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessorUpdate != null && {
      InputLambdaProcessorUpdate: serializeAws_json1_1InputLambdaProcessorUpdate(
        input.InputLambdaProcessorUpdate,
        context
      ),
    }),
  };
};

const serializeAws_json1_1Inputs = (input: Input[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Input(entry, context);
    });
};

const serializeAws_json1_1InputSchemaUpdate = (input: InputSchemaUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnUpdates != null && {
      RecordColumnUpdates: serializeAws_json1_1RecordColumns(input.RecordColumnUpdates, context),
    }),
    ...(input.RecordEncodingUpdate != null && { RecordEncodingUpdate: input.RecordEncodingUpdate }),
    ...(input.RecordFormatUpdate != null && {
      RecordFormatUpdate: serializeAws_json1_1RecordFormat(input.RecordFormatUpdate, context),
    }),
  };
};

const serializeAws_json1_1InputStartingPositionConfiguration = (
  input: InputStartingPositionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputStartingPosition != null && { InputStartingPosition: input.InputStartingPosition }),
  };
};

const serializeAws_json1_1InputUpdate = (input: InputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.InputId != null && { InputId: input.InputId }),
    ...(input.InputParallelismUpdate != null && {
      InputParallelismUpdate: serializeAws_json1_1InputParallelismUpdate(input.InputParallelismUpdate, context),
    }),
    ...(input.InputProcessingConfigurationUpdate != null && {
      InputProcessingConfigurationUpdate: serializeAws_json1_1InputProcessingConfigurationUpdate(
        input.InputProcessingConfigurationUpdate,
        context
      ),
    }),
    ...(input.InputSchemaUpdate != null && {
      InputSchemaUpdate: serializeAws_json1_1InputSchemaUpdate(input.InputSchemaUpdate, context),
    }),
    ...(input.KinesisFirehoseInputUpdate != null && {
      KinesisFirehoseInputUpdate: serializeAws_json1_1KinesisFirehoseInputUpdate(
        input.KinesisFirehoseInputUpdate,
        context
      ),
    }),
    ...(input.KinesisStreamsInputUpdate != null && {
      KinesisStreamsInputUpdate: serializeAws_json1_1KinesisStreamsInputUpdate(
        input.KinesisStreamsInputUpdate,
        context
      ),
    }),
    ...(input.NamePrefixUpdate != null && { NamePrefixUpdate: input.NamePrefixUpdate }),
  };
};

const serializeAws_json1_1InputUpdates = (input: InputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InputUpdate(entry, context);
    });
};

const serializeAws_json1_1JSONMappingParameters = (input: JSONMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordRowPath != null && { RecordRowPath: input.RecordRowPath }),
  };
};

const serializeAws_json1_1KinesisFirehoseInput = (input: KinesisFirehoseInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KinesisFirehoseInputUpdate = (
  input: KinesisFirehoseInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1KinesisFirehoseOutput = (input: KinesisFirehoseOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KinesisFirehoseOutputUpdate = (
  input: KinesisFirehoseOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1KinesisStreamsInput = (input: KinesisStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KinesisStreamsInputUpdate = (
  input: KinesisStreamsInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1KinesisStreamsOutput = (input: KinesisStreamsOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KinesisStreamsOutputUpdate = (
  input: KinesisStreamsOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1LambdaOutput = (input: LambdaOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1LambdaOutputUpdate = (input: LambdaOutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
    ...(input.RoleARNUpdate != null && { RoleARNUpdate: input.RoleARNUpdate }),
  };
};

const serializeAws_json1_1ListApplicationsRequest = (input: ListApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartApplicationName != null && {
      ExclusiveStartApplicationName: input.ExclusiveStartApplicationName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
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

const serializeAws_json1_1MappingParameters = (input: MappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.CSVMappingParameters != null && {
      CSVMappingParameters: serializeAws_json1_1CSVMappingParameters(input.CSVMappingParameters, context),
    }),
    ...(input.JSONMappingParameters != null && {
      JSONMappingParameters: serializeAws_json1_1JSONMappingParameters(input.JSONMappingParameters, context),
    }),
  };
};

const serializeAws_json1_1Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchema != null && {
      DestinationSchema: serializeAws_json1_1DestinationSchema(input.DestinationSchema, context),
    }),
    ...(input.KinesisFirehoseOutput != null && {
      KinesisFirehoseOutput: serializeAws_json1_1KinesisFirehoseOutput(input.KinesisFirehoseOutput, context),
    }),
    ...(input.KinesisStreamsOutput != null && {
      KinesisStreamsOutput: serializeAws_json1_1KinesisStreamsOutput(input.KinesisStreamsOutput, context),
    }),
    ...(input.LambdaOutput != null && { LambdaOutput: serializeAws_json1_1LambdaOutput(input.LambdaOutput, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1Outputs = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Output(entry, context);
    });
};

const serializeAws_json1_1OutputUpdate = (input: OutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchemaUpdate != null && {
      DestinationSchemaUpdate: serializeAws_json1_1DestinationSchema(input.DestinationSchemaUpdate, context),
    }),
    ...(input.KinesisFirehoseOutputUpdate != null && {
      KinesisFirehoseOutputUpdate: serializeAws_json1_1KinesisFirehoseOutputUpdate(
        input.KinesisFirehoseOutputUpdate,
        context
      ),
    }),
    ...(input.KinesisStreamsOutputUpdate != null && {
      KinesisStreamsOutputUpdate: serializeAws_json1_1KinesisStreamsOutputUpdate(
        input.KinesisStreamsOutputUpdate,
        context
      ),
    }),
    ...(input.LambdaOutputUpdate != null && {
      LambdaOutputUpdate: serializeAws_json1_1LambdaOutputUpdate(input.LambdaOutputUpdate, context),
    }),
    ...(input.NameUpdate != null && { NameUpdate: input.NameUpdate }),
    ...(input.OutputId != null && { OutputId: input.OutputId }),
  };
};

const serializeAws_json1_1OutputUpdates = (input: OutputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OutputUpdate(entry, context);
    });
};

const serializeAws_json1_1RecordColumn = (input: RecordColumn, context: __SerdeContext): any => {
  return {
    ...(input.Mapping != null && { Mapping: input.Mapping }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SqlType != null && { SqlType: input.SqlType }),
  };
};

const serializeAws_json1_1RecordColumns = (input: RecordColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RecordColumn(entry, context);
    });
};

const serializeAws_json1_1RecordFormat = (input: RecordFormat, context: __SerdeContext): any => {
  return {
    ...(input.MappingParameters != null && {
      MappingParameters: serializeAws_json1_1MappingParameters(input.MappingParameters, context),
    }),
    ...(input.RecordFormatType != null && { RecordFormatType: input.RecordFormatType }),
  };
};

const serializeAws_json1_1ReferenceDataSource = (input: ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceSchema != null && {
      ReferenceSchema: serializeAws_json1_1SourceSchema(input.ReferenceSchema, context),
    }),
    ...(input.S3ReferenceDataSource != null && {
      S3ReferenceDataSource: serializeAws_json1_1S3ReferenceDataSource(input.S3ReferenceDataSource, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1ReferenceDataSourceUpdate = (
  input: ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.ReferenceSchemaUpdate != null && {
      ReferenceSchemaUpdate: serializeAws_json1_1SourceSchema(input.ReferenceSchemaUpdate, context),
    }),
    ...(input.S3ReferenceDataSourceUpdate != null && {
      S3ReferenceDataSourceUpdate: serializeAws_json1_1S3ReferenceDataSourceUpdate(
        input.S3ReferenceDataSourceUpdate,
        context
      ),
    }),
    ...(input.TableNameUpdate != null && { TableNameUpdate: input.TableNameUpdate }),
  };
};

const serializeAws_json1_1ReferenceDataSourceUpdates = (
  input: ReferenceDataSourceUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ReferenceDataSourceUpdate(entry, context);
    });
};

const serializeAws_json1_1S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.FileKey != null && { FileKey: input.FileKey }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1S3ReferenceDataSource = (input: S3ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.FileKey != null && { FileKey: input.FileKey }),
    ...(input.ReferenceRoleARN != null && { ReferenceRoleARN: input.ReferenceRoleARN }),
  };
};

const serializeAws_json1_1S3ReferenceDataSourceUpdate = (
  input: S3ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARNUpdate != null && { BucketARNUpdate: input.BucketARNUpdate }),
    ...(input.FileKeyUpdate != null && { FileKeyUpdate: input.FileKeyUpdate }),
    ...(input.ReferenceRoleARNUpdate != null && { ReferenceRoleARNUpdate: input.ReferenceRoleARNUpdate }),
  };
};

const serializeAws_json1_1SourceSchema = (input: SourceSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumns != null && {
      RecordColumns: serializeAws_json1_1RecordColumns(input.RecordColumns, context),
    }),
    ...(input.RecordEncoding != null && { RecordEncoding: input.RecordEncoding }),
    ...(input.RecordFormat != null && { RecordFormat: serializeAws_json1_1RecordFormat(input.RecordFormat, context) }),
  };
};

const serializeAws_json1_1StartApplicationRequest = (input: StartApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.InputConfigurations != null && {
      InputConfigurations: serializeAws_json1_1InputConfigurations(input.InputConfigurations, context),
    }),
  };
};

const serializeAws_json1_1StopApplicationRequest = (input: StopApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.ApplicationUpdate != null && {
      ApplicationUpdate: serializeAws_json1_1ApplicationUpdate(input.ApplicationUpdate, context),
    }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationCloudWatchLoggingOptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputProcessingConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1AddApplicationInputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputResponse => {
  return {} as any;
};

const deserializeAws_json1_1AddApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationOutputResponse => {
  return {} as any;
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationReferenceDataSourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ApplicationDetail = (output: any, context: __SerdeContext): ApplicationDetail => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationCode: __expectString(output.ApplicationCode),
    ApplicationDescription: __expectString(output.ApplicationDescription),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions != null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    InputDescriptions:
      output.InputDescriptions != null
        ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    OutputDescriptions:
      output.OutputDescriptions != null
        ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
        : undefined,
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions != null
        ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription => {
  return {
    CloudWatchLoggingOptionId: __expectString(output.CloudWatchLoggingOptionId),
    LogStreamARN: __expectString(output.LogStreamARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CodeValidationException = (
  output: any,
  context: __SerdeContext
): CodeValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    ApplicationSummary:
      output.ApplicationSummary != null
        ? deserializeAws_json1_1ApplicationSummary(output.ApplicationSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CSVMappingParameters = (output: any, context: __SerdeContext): CSVMappingParameters => {
  return {
    RecordColumnDelimiter: __expectString(output.RecordColumnDelimiter),
    RecordRowDelimiter: __expectString(output.RecordRowDelimiter),
  } as any;
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationCloudWatchLoggingOptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationInputProcessingConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationOutputResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationReferenceDataSourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail != null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationSchema = (output: any, context: __SerdeContext): DestinationSchema => {
  return {
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

const deserializeAws_json1_1DiscoverInputSchemaResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInputSchemaResponse => {
  return {
    InputSchema:
      output.InputSchema != null ? deserializeAws_json1_1SourceSchema(output.InputSchema, context) : undefined,
    ParsedInputRecords:
      output.ParsedInputRecords != null
        ? deserializeAws_json1_1ParsedInputRecords(output.ParsedInputRecords, context)
        : undefined,
    ProcessedInputRecords:
      output.ProcessedInputRecords != null
        ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords:
      output.RawInputRecords != null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InAppStreamNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InputDescription = (output: any, context: __SerdeContext): InputDescription => {
  return {
    InAppStreamNames:
      output.InAppStreamNames != null
        ? deserializeAws_json1_1InAppStreamNames(output.InAppStreamNames, context)
        : undefined,
    InputId: __expectString(output.InputId),
    InputParallelism:
      output.InputParallelism != null
        ? deserializeAws_json1_1InputParallelism(output.InputParallelism, context)
        : undefined,
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription != null
        ? deserializeAws_json1_1InputProcessingConfigurationDescription(
            output.InputProcessingConfigurationDescription,
            context
          )
        : undefined,
    InputSchema:
      output.InputSchema != null ? deserializeAws_json1_1SourceSchema(output.InputSchema, context) : undefined,
    InputStartingPositionConfiguration:
      output.InputStartingPositionConfiguration != null
        ? deserializeAws_json1_1InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context)
        : undefined,
    KinesisFirehoseInputDescription:
      output.KinesisFirehoseInputDescription != null
        ? deserializeAws_json1_1KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context)
        : undefined,
    KinesisStreamsInputDescription:
      output.KinesisStreamsInputDescription != null
        ? deserializeAws_json1_1KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context)
        : undefined,
    NamePrefix: __expectString(output.NamePrefix),
  } as any;
};

const deserializeAws_json1_1InputDescriptions = (output: any, context: __SerdeContext): InputDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InputDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InputLambdaProcessorDescription = (
  output: any,
  context: __SerdeContext
): InputLambdaProcessorDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1InputParallelism = (output: any, context: __SerdeContext): InputParallelism => {
  return {
    Count: __expectInt32(output.Count),
  } as any;
};

const deserializeAws_json1_1InputProcessingConfigurationDescription = (
  output: any,
  context: __SerdeContext
): InputProcessingConfigurationDescription => {
  return {
    InputLambdaProcessorDescription:
      output.InputLambdaProcessorDescription != null
        ? deserializeAws_json1_1InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputStartingPositionConfiguration = (
  output: any,
  context: __SerdeContext
): InputStartingPositionConfiguration => {
  return {
    InputStartingPosition: __expectString(output.InputStartingPosition),
  } as any;
};

const deserializeAws_json1_1InvalidApplicationConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1JSONMappingParameters = (output: any, context: __SerdeContext): JSONMappingParameters => {
  return {
    RecordRowPath: __expectString(output.RecordRowPath),
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisStreamsInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisStreamsOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1LambdaOutputDescription = (
  output: any,
  context: __SerdeContext
): LambdaOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  return {
    ApplicationSummaries:
      output.ApplicationSummaries != null
        ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
        : undefined,
    HasMoreApplications: __expectBoolean(output.HasMoreApplications),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MappingParameters = (output: any, context: __SerdeContext): MappingParameters => {
  return {
    CSVMappingParameters:
      output.CSVMappingParameters != null
        ? deserializeAws_json1_1CSVMappingParameters(output.CSVMappingParameters, context)
        : undefined,
    JSONMappingParameters:
      output.JSONMappingParameters != null
        ? deserializeAws_json1_1JSONMappingParameters(output.JSONMappingParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OutputDescription = (output: any, context: __SerdeContext): OutputDescription => {
  return {
    DestinationSchema:
      output.DestinationSchema != null
        ? deserializeAws_json1_1DestinationSchema(output.DestinationSchema, context)
        : undefined,
    KinesisFirehoseOutputDescription:
      output.KinesisFirehoseOutputDescription != null
        ? deserializeAws_json1_1KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context)
        : undefined,
    KinesisStreamsOutputDescription:
      output.KinesisStreamsOutputDescription != null
        ? deserializeAws_json1_1KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context)
        : undefined,
    LambdaOutputDescription:
      output.LambdaOutputDescription != null
        ? deserializeAws_json1_1LambdaOutputDescription(output.LambdaOutputDescription, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputId: __expectString(output.OutputId),
  } as any;
};

const deserializeAws_json1_1OutputDescriptions = (output: any, context: __SerdeContext): OutputDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OutputDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParsedInputRecord = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ParsedInputRecords = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParsedInputRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProcessedInputRecords = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RawInputRecords = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1RecordColumn = (output: any, context: __SerdeContext): RecordColumn => {
  return {
    Mapping: __expectString(output.Mapping),
    Name: __expectString(output.Name),
    SqlType: __expectString(output.SqlType),
  } as any;
};

const deserializeAws_json1_1RecordColumns = (output: any, context: __SerdeContext): RecordColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecordFormat = (output: any, context: __SerdeContext): RecordFormat => {
  return {
    MappingParameters:
      output.MappingParameters != null
        ? deserializeAws_json1_1MappingParameters(output.MappingParameters, context)
        : undefined,
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription => {
  return {
    ReferenceId: __expectString(output.ReferenceId),
    ReferenceSchema:
      output.ReferenceSchema != null ? deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context) : undefined,
    S3ReferenceDataSourceDescription:
      output.S3ReferenceDataSourceDescription != null
        ? deserializeAws_json1_1S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescriptions = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReferenceDataSourceDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ResourceProvisionedThroughputExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1S3ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): S3ReferenceDataSourceDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ReferenceRoleARN: __expectString(output.ReferenceRoleARN),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1SourceSchema = (output: any, context: __SerdeContext): SourceSchema => {
  return {
    RecordColumns:
      output.RecordColumns != null ? deserializeAws_json1_1RecordColumns(output.RecordColumns, context) : undefined,
    RecordEncoding: __expectString(output.RecordEncoding),
    RecordFormat:
      output.RecordFormat != null ? deserializeAws_json1_1RecordFormat(output.RecordFormat, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartApplicationResponse = (
  output: any,
  context: __SerdeContext
): StartApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopApplicationResponse = (
  output: any,
  context: __SerdeContext
): StopApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnableToDetectSchemaException = (
  output: any,
  context: __SerdeContext
): UnableToDetectSchemaException => {
  return {
    ProcessedInputRecords:
      output.ProcessedInputRecords != null
        ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords:
      output.RawInputRecords != null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  return {} as any;
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
