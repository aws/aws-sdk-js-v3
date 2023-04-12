// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
} from "../commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
} from "../commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
} from "../commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
} from "../commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
} from "../commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommandInput, PutRecordBatchCommandOutput } from "../commands/PutRecordBatchCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput,
} from "../commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
} from "../commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput } from "../commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
} from "../commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
import { FirehoseServiceException as __BaseException } from "../models/FirehoseServiceException";
import {
  _Record,
  AmazonOpenSearchServerlessBufferingHints,
  AmazonOpenSearchServerlessDestinationConfiguration,
  AmazonOpenSearchServerlessDestinationDescription,
  AmazonOpenSearchServerlessDestinationUpdate,
  AmazonOpenSearchServerlessRetryOptions,
  AmazonopensearchserviceBufferingHints,
  AmazonopensearchserviceDestinationConfiguration,
  AmazonopensearchserviceDestinationDescription,
  AmazonopensearchserviceDestinationUpdate,
  AmazonopensearchserviceRetryOptions,
  BufferingHints,
  CloudWatchLoggingOptions,
  ConcurrentModificationException,
  CopyCommand,
  CreateDeliveryStreamInput,
  CreateDeliveryStreamOutput,
  DataFormatConversionConfiguration,
  DeleteDeliveryStreamInput,
  DeleteDeliveryStreamOutput,
  DeliveryStreamDescription,
  DeliveryStreamEncryptionConfiguration,
  DeliveryStreamEncryptionConfigurationInput,
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
  Deserializer,
  DestinationDescription,
  DynamicPartitioningConfiguration,
  ElasticsearchBufferingHints,
  ElasticsearchDestinationConfiguration,
  ElasticsearchDestinationDescription,
  ElasticsearchDestinationUpdate,
  ElasticsearchRetryOptions,
  EncryptionConfiguration,
  ExtendedS3DestinationConfiguration,
  ExtendedS3DestinationDescription,
  ExtendedS3DestinationUpdate,
  FailureDescription,
  HiveJsonSerDe,
  HttpEndpointBufferingHints,
  HttpEndpointCommonAttribute,
  HttpEndpointConfiguration,
  HttpEndpointDescription,
  HttpEndpointDestinationConfiguration,
  HttpEndpointDestinationDescription,
  HttpEndpointDestinationUpdate,
  HttpEndpointRequestConfiguration,
  HttpEndpointRetryOptions,
  InputFormatConfiguration,
  InvalidArgumentException,
  InvalidKMSResourceException,
  KinesisStreamSourceConfiguration,
  KinesisStreamSourceDescription,
  KMSEncryptionConfig,
  LimitExceededException,
  ListDeliveryStreamsInput,
  ListDeliveryStreamsOutput,
  ListTagsForDeliveryStreamInput,
  ListTagsForDeliveryStreamOutput,
  OpenXJsonSerDe,
  OrcSerDe,
  OutputFormatConfiguration,
  ParquetSerDe,
  ProcessingConfiguration,
  Processor,
  ProcessorParameter,
  PutRecordBatchInput,
  PutRecordBatchOutput,
  PutRecordBatchResponseEntry,
  PutRecordInput,
  PutRecordOutput,
  RedshiftDestinationConfiguration,
  RedshiftDestinationDescription,
  RedshiftDestinationUpdate,
  RedshiftRetryOptions,
  ResourceInUseException,
  ResourceNotFoundException,
  RetryOptions,
  S3DestinationConfiguration,
  S3DestinationDescription,
  S3DestinationUpdate,
  SchemaConfiguration,
  Serializer,
  ServiceUnavailableException,
  SourceDescription,
  SplunkDestinationConfiguration,
  SplunkDestinationDescription,
  SplunkDestinationUpdate,
  SplunkRetryOptions,
  StartDeliveryStreamEncryptionInput,
  StartDeliveryStreamEncryptionOutput,
  StopDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionOutput,
  Tag,
  TagDeliveryStreamInput,
  TagDeliveryStreamOutput,
  UntagDeliveryStreamInput,
  UntagDeliveryStreamOutput,
  UpdateDestinationInput,
  UpdateDestinationOutput,
  VpcConfiguration,
  VpcConfigurationDescription,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateDeliveryStreamCommand
 */
export const se_CreateDeliveryStreamCommand = async (
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeliveryStream");
  let body: any;
  body = JSON.stringify(se_CreateDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliveryStreamCommand
 */
export const se_DeleteDeliveryStreamCommand = async (
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliveryStream");
  let body: any;
  body = JSON.stringify(se_DeleteDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveryStreamCommand
 */
export const se_DescribeDeliveryStreamCommand = async (
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveryStream");
  let body: any;
  body = JSON.stringify(se_DescribeDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeliveryStreamsCommand
 */
export const se_ListDeliveryStreamsCommand = async (
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeliveryStreams");
  let body: any;
  body = JSON.stringify(se_ListDeliveryStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export const se_ListTagsForDeliveryStreamCommand = async (
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForDeliveryStream");
  let body: any;
  body = JSON.stringify(se_ListTagsForDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRecordCommand
 */
export const se_PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecord");
  let body: any;
  body = JSON.stringify(se_PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRecordBatchCommand
 */
export const se_PutRecordBatchCommand = async (
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecordBatch");
  let body: any;
  body = JSON.stringify(se_PutRecordBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export const se_StartDeliveryStreamEncryptionCommand = async (
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDeliveryStreamEncryption");
  let body: any;
  body = JSON.stringify(se_StartDeliveryStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export const se_StopDeliveryStreamEncryptionCommand = async (
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDeliveryStreamEncryption");
  let body: any;
  body = JSON.stringify(se_StopDeliveryStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagDeliveryStreamCommand
 */
export const se_TagDeliveryStreamCommand = async (
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagDeliveryStream");
  let body: any;
  body = JSON.stringify(se_TagDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagDeliveryStreamCommand
 */
export const se_UntagDeliveryStreamCommand = async (
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagDeliveryStream");
  let body: any;
  body = JSON.stringify(se_UntagDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDestination");
  let body: any;
  body = JSON.stringify(se_UpdateDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateDeliveryStreamCommand
 */
export const de_CreateDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDeliveryStreamOutput(data, context);
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDeliveryStreamCommandError
 */
const de_CreateDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteDeliveryStreamCommand
 */
export const de_DeleteDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDeliveryStreamOutput(data, context);
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDeliveryStreamCommandError
 */
const de_DeleteDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DescribeDeliveryStreamCommand
 */
export const de_DescribeDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeliveryStreamOutput(data, context);
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDeliveryStreamCommandError
 */
const de_DescribeDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListDeliveryStreamsCommand
 */
export const de_ListDeliveryStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeliveryStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeliveryStreamsOutput(data, context);
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDeliveryStreamsCommandError
 */
const de_ListDeliveryStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
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

/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export const de_ListTagsForDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForDeliveryStreamOutput(data, context);
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamCommandError
 */
const de_ListTagsForDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1PutRecordCommand
 */
export const de_PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRecordOutput(data, context);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRecordCommandError
 */
const de_PutRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1PutRecordBatchCommand
 */
export const de_PutRecordBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRecordBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRecordBatchOutput(data, context);
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRecordBatchCommandError
 */
const de_PutRecordBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export const de_StartDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDeliveryStreamEncryptionOutput(data, context);
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError
 */
const de_StartDeliveryStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export const de_StopDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopDeliveryStreamEncryptionOutput(data, context);
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError
 */
const de_StopDeliveryStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1TagDeliveryStreamCommand
 */
export const de_TagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagDeliveryStreamOutput(data, context);
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagDeliveryStreamCommandError
 */
const de_TagDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UntagDeliveryStreamCommand
 */
export const de_UntagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagDeliveryStreamOutput(data, context);
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagDeliveryStreamCommandError
 */
const de_UntagDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDestinationOutput(data, context);
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDestinationCommandError
 */
const de_UpdateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidArgumentException(body, context);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKMSResourceExceptionRes
 */
const de_InvalidKMSResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKMSResourceException(body, context);
  const exception = new InvalidKMSResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
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
  const deserialized: any = de_ResourceInUseException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AmazonOpenSearchServerlessBufferingHints
 */
const se_AmazonOpenSearchServerlessBufferingHints = (
  input: AmazonOpenSearchServerlessBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds != null && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != null && { SizeInMBs: input.SizeInMBs }),
  };
};

/**
 * serializeAws_json1_1AmazonOpenSearchServerlessDestinationConfiguration
 */
const se_AmazonOpenSearchServerlessDestinationConfiguration = (
  input: AmazonOpenSearchServerlessDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_AmazonOpenSearchServerlessBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CollectionEndpoint != null && { CollectionEndpoint: input.CollectionEndpoint }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && {
      RetryOptions: se_AmazonOpenSearchServerlessRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_1AmazonOpenSearchServerlessDestinationUpdate
 */
const se_AmazonOpenSearchServerlessDestinationUpdate = (
  input: AmazonOpenSearchServerlessDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_AmazonOpenSearchServerlessBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CollectionEndpoint != null && { CollectionEndpoint: input.CollectionEndpoint }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && {
      RetryOptions: se_AmazonOpenSearchServerlessRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
  };
};

/**
 * serializeAws_json1_1AmazonOpenSearchServerlessRetryOptions
 */
const se_AmazonOpenSearchServerlessRetryOptions = (
  input: AmazonOpenSearchServerlessRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1AmazonopensearchserviceBufferingHints
 */
const se_AmazonopensearchserviceBufferingHints = (
  input: AmazonopensearchserviceBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds != null && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != null && { SizeInMBs: input.SizeInMBs }),
  };
};

/**
 * serializeAws_json1_1AmazonopensearchserviceDestinationConfiguration
 */
const se_AmazonopensearchserviceDestinationConfiguration = (
  input: AmazonopensearchserviceDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_AmazonopensearchserviceBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != null && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != null && { DomainARN: input.DomainARN }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != null && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && {
      RetryOptions: se_AmazonopensearchserviceRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_1AmazonopensearchserviceDestinationUpdate
 */
const se_AmazonopensearchserviceDestinationUpdate = (
  input: AmazonopensearchserviceDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_AmazonopensearchserviceBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != null && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != null && { DomainARN: input.DomainARN }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != null && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && {
      RetryOptions: se_AmazonopensearchserviceRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1AmazonopensearchserviceRetryOptions
 */
const se_AmazonopensearchserviceRetryOptions = (
  input: AmazonopensearchserviceRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1BufferingHints
 */
const se_BufferingHints = (input: BufferingHints, context: __SerdeContext): any => {
  return {
    ...(input.IntervalInSeconds != null && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != null && { SizeInMBs: input.SizeInMBs }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLoggingOptions
 */
const se_CloudWatchLoggingOptions = (input: CloudWatchLoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.LogGroupName != null && { LogGroupName: input.LogGroupName }),
    ...(input.LogStreamName != null && { LogStreamName: input.LogStreamName }),
  };
};

/**
 * serializeAws_json1_1ColumnToJsonKeyMappings
 */
const se_ColumnToJsonKeyMappings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1CopyCommand
 */
const se_CopyCommand = (input: CopyCommand, context: __SerdeContext): any => {
  return {
    ...(input.CopyOptions != null && { CopyOptions: input.CopyOptions }),
    ...(input.DataTableColumns != null && { DataTableColumns: input.DataTableColumns }),
    ...(input.DataTableName != null && { DataTableName: input.DataTableName }),
  };
};

/**
 * serializeAws_json1_1CreateDeliveryStreamInput
 */
const se_CreateDeliveryStreamInput = (input: CreateDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.AmazonOpenSearchServerlessDestinationConfiguration != null && {
      AmazonOpenSearchServerlessDestinationConfiguration: se_AmazonOpenSearchServerlessDestinationConfiguration(
        input.AmazonOpenSearchServerlessDestinationConfiguration,
        context
      ),
    }),
    ...(input.AmazonopensearchserviceDestinationConfiguration != null && {
      AmazonopensearchserviceDestinationConfiguration: se_AmazonopensearchserviceDestinationConfiguration(
        input.AmazonopensearchserviceDestinationConfiguration,
        context
      ),
    }),
    ...(input.DeliveryStreamEncryptionConfigurationInput != null && {
      DeliveryStreamEncryptionConfigurationInput: se_DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DeliveryStreamType != null && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ElasticsearchDestinationConfiguration != null && {
      ElasticsearchDestinationConfiguration: se_ElasticsearchDestinationConfiguration(
        input.ElasticsearchDestinationConfiguration,
        context
      ),
    }),
    ...(input.ExtendedS3DestinationConfiguration != null && {
      ExtendedS3DestinationConfiguration: se_ExtendedS3DestinationConfiguration(
        input.ExtendedS3DestinationConfiguration,
        context
      ),
    }),
    ...(input.HttpEndpointDestinationConfiguration != null && {
      HttpEndpointDestinationConfiguration: se_HttpEndpointDestinationConfiguration(
        input.HttpEndpointDestinationConfiguration,
        context
      ),
    }),
    ...(input.KinesisStreamSourceConfiguration != null && {
      KinesisStreamSourceConfiguration: se_KinesisStreamSourceConfiguration(
        input.KinesisStreamSourceConfiguration,
        context
      ),
    }),
    ...(input.RedshiftDestinationConfiguration != null && {
      RedshiftDestinationConfiguration: se_RedshiftDestinationConfiguration(
        input.RedshiftDestinationConfiguration,
        context
      ),
    }),
    ...(input.S3DestinationConfiguration != null && {
      S3DestinationConfiguration: se_S3DestinationConfiguration(input.S3DestinationConfiguration, context),
    }),
    ...(input.SplunkDestinationConfiguration != null && {
      SplunkDestinationConfiguration: se_SplunkDestinationConfiguration(input.SplunkDestinationConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DataFormatConversionConfiguration
 */
const se_DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.InputFormatConfiguration != null && {
      InputFormatConfiguration: se_InputFormatConfiguration(input.InputFormatConfiguration, context),
    }),
    ...(input.OutputFormatConfiguration != null && {
      OutputFormatConfiguration: se_OutputFormatConfiguration(input.OutputFormatConfiguration, context),
    }),
    ...(input.SchemaConfiguration != null && {
      SchemaConfiguration: se_SchemaConfiguration(input.SchemaConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteDeliveryStreamInput
 */
const se_DeleteDeliveryStreamInput = (input: DeleteDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.AllowForceDelete != null && { AllowForceDelete: input.AllowForceDelete }),
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

/**
 * serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput
 */
const se_DeliveryStreamEncryptionConfigurationInput = (
  input: DeliveryStreamEncryptionConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyARN != null && { KeyARN: input.KeyARN }),
    ...(input.KeyType != null && { KeyType: input.KeyType }),
  };
};

/**
 * serializeAws_json1_1DescribeDeliveryStreamInput
 */
const se_DescribeDeliveryStreamInput = (input: DescribeDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartDestinationId != null && {
      ExclusiveStartDestinationId: input.ExclusiveStartDestinationId,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

/**
 * serializeAws_json1_1Deserializer
 */
const se_Deserializer = (input: Deserializer, context: __SerdeContext): any => {
  return {
    ...(input.HiveJsonSerDe != null && { HiveJsonSerDe: se_HiveJsonSerDe(input.HiveJsonSerDe, context) }),
    ...(input.OpenXJsonSerDe != null && { OpenXJsonSerDe: se_OpenXJsonSerDe(input.OpenXJsonSerDe, context) }),
  };
};

/**
 * serializeAws_json1_1DynamicPartitioningConfiguration
 */
const se_DynamicPartitioningConfiguration = (input: DynamicPartitioningConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.RetryOptions != null && { RetryOptions: se_RetryOptions(input.RetryOptions, context) }),
  };
};

/**
 * serializeAws_json1_1ElasticsearchBufferingHints
 */
const se_ElasticsearchBufferingHints = (input: ElasticsearchBufferingHints, context: __SerdeContext): any => {
  return {
    ...(input.IntervalInSeconds != null && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != null && { SizeInMBs: input.SizeInMBs }),
  };
};

/**
 * serializeAws_json1_1ElasticsearchDestinationConfiguration
 */
const se_ElasticsearchDestinationConfiguration = (
  input: ElasticsearchDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != null && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != null && { DomainARN: input.DomainARN }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != null && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_ElasticsearchRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_1ElasticsearchDestinationUpdate
 */
const se_ElasticsearchDestinationUpdate = (input: ElasticsearchDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != null && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != null && { DomainARN: input.DomainARN }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != null && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_ElasticsearchRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
  };
};

/**
 * serializeAws_json1_1ElasticsearchRetryOptions
 */
const se_ElasticsearchRetryOptions = (input: ElasticsearchRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KMSEncryptionConfig != null && {
      KMSEncryptionConfig: se_KMSEncryptionConfig(input.KMSEncryptionConfig, context),
    }),
    ...(input.NoEncryptionConfig != null && { NoEncryptionConfig: input.NoEncryptionConfig }),
  };
};

/**
 * serializeAws_json1_1ExtendedS3DestinationConfiguration
 */
const se_ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != null && { BufferingHints: se_BufferingHints(input.BufferingHints, context) }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != null && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration != null && {
      DataFormatConversionConfiguration: se_DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.DynamicPartitioningConfiguration != null && {
      DynamicPartitioningConfiguration: se_DynamicPartitioningConfiguration(
        input.DynamicPartitioningConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != null && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration != null && {
      S3BackupConfiguration: se_S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
  };
};

/**
 * serializeAws_json1_1ExtendedS3DestinationUpdate
 */
const se_ExtendedS3DestinationUpdate = (input: ExtendedS3DestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != null && { BufferingHints: se_BufferingHints(input.BufferingHints, context) }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != null && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration != null && {
      DataFormatConversionConfiguration: se_DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.DynamicPartitioningConfiguration != null && {
      DynamicPartitioningConfiguration: se_DynamicPartitioningConfiguration(
        input.DynamicPartitioningConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != null && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate != null && { S3BackupUpdate: se_S3DestinationUpdate(input.S3BackupUpdate, context) }),
  };
};

/**
 * serializeAws_json1_1HiveJsonSerDe
 */
const se_HiveJsonSerDe = (input: HiveJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.TimestampFormats != null && {
      TimestampFormats: se_ListOfNonEmptyStrings(input.TimestampFormats, context),
    }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointBufferingHints
 */
const se_HttpEndpointBufferingHints = (input: HttpEndpointBufferingHints, context: __SerdeContext): any => {
  return {
    ...(input.IntervalInSeconds != null && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != null && { SizeInMBs: input.SizeInMBs }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointCommonAttribute
 */
const se_HttpEndpointCommonAttribute = (input: HttpEndpointCommonAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointCommonAttributesList
 */
const se_HttpEndpointCommonAttributesList = (input: HttpEndpointCommonAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpEndpointCommonAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1HttpEndpointConfiguration
 */
const se_HttpEndpointConfiguration = (input: HttpEndpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessKey != null && { AccessKey: input.AccessKey }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointDestinationConfiguration
 */
const se_HttpEndpointDestinationConfiguration = (
  input: HttpEndpointDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration != null && {
      EndpointConfiguration: se_HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration != null && {
      RequestConfiguration: se_HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_HttpEndpointRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointDestinationUpdate
 */
const se_HttpEndpointDestinationUpdate = (input: HttpEndpointDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BufferingHints != null && {
      BufferingHints: se_HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration != null && {
      EndpointConfiguration: se_HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration != null && {
      RequestConfiguration: se_HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_HttpEndpointRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointRequestConfiguration
 */
const se_HttpEndpointRequestConfiguration = (input: HttpEndpointRequestConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CommonAttributes != null && {
      CommonAttributes: se_HttpEndpointCommonAttributesList(input.CommonAttributes, context),
    }),
    ...(input.ContentEncoding != null && { ContentEncoding: input.ContentEncoding }),
  };
};

/**
 * serializeAws_json1_1HttpEndpointRetryOptions
 */
const se_HttpEndpointRetryOptions = (input: HttpEndpointRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1InputFormatConfiguration
 */
const se_InputFormatConfiguration = (input: InputFormatConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Deserializer != null && { Deserializer: se_Deserializer(input.Deserializer, context) }),
  };
};

/**
 * serializeAws_json1_1KinesisStreamSourceConfiguration
 */
const se_KinesisStreamSourceConfiguration = (input: KinesisStreamSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KinesisStreamARN != null && { KinesisStreamARN: input.KinesisStreamARN }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

/**
 * serializeAws_json1_1KMSEncryptionConfig
 */
const se_KMSEncryptionConfig = (input: KMSEncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.AWSKMSKeyARN != null && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
  };
};

/**
 * serializeAws_json1_1ListDeliveryStreamsInput
 */
const se_ListDeliveryStreamsInput = (input: ListDeliveryStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamType != null && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ExclusiveStartDeliveryStreamName != null && {
      ExclusiveStartDeliveryStreamName: input.ExclusiveStartDeliveryStreamName,
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

/**
 * serializeAws_json1_1ListOfNonEmptyStrings
 */
const se_ListOfNonEmptyStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace
 */
const se_ListOfNonEmptyStringsWithoutWhitespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsForDeliveryStreamInput
 */
const se_ListTagsForDeliveryStreamInput = (input: ListTagsForDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartTagKey != null && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
  };
};

/**
 * serializeAws_json1_1OpenXJsonSerDe
 */
const se_OpenXJsonSerDe = (input: OpenXJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.CaseInsensitive != null && { CaseInsensitive: input.CaseInsensitive }),
    ...(input.ColumnToJsonKeyMappings != null && {
      ColumnToJsonKeyMappings: se_ColumnToJsonKeyMappings(input.ColumnToJsonKeyMappings, context),
    }),
    ...(input.ConvertDotsInJsonKeysToUnderscores != null && {
      ConvertDotsInJsonKeysToUnderscores: input.ConvertDotsInJsonKeysToUnderscores,
    }),
  };
};

/**
 * serializeAws_json1_1OrcSerDe
 */
const se_OrcSerDe = (input: OrcSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes != null && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.BloomFilterColumns != null && {
      BloomFilterColumns: se_ListOfNonEmptyStringsWithoutWhitespace(input.BloomFilterColumns, context),
    }),
    ...(input.BloomFilterFalsePositiveProbability != null && {
      BloomFilterFalsePositiveProbability: __serializeFloat(input.BloomFilterFalsePositiveProbability),
    }),
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.DictionaryKeyThreshold != null && {
      DictionaryKeyThreshold: __serializeFloat(input.DictionaryKeyThreshold),
    }),
    ...(input.EnablePadding != null && { EnablePadding: input.EnablePadding }),
    ...(input.FormatVersion != null && { FormatVersion: input.FormatVersion }),
    ...(input.PaddingTolerance != null && { PaddingTolerance: __serializeFloat(input.PaddingTolerance) }),
    ...(input.RowIndexStride != null && { RowIndexStride: input.RowIndexStride }),
    ...(input.StripeSizeBytes != null && { StripeSizeBytes: input.StripeSizeBytes }),
  };
};

/**
 * serializeAws_json1_1OutputFormatConfiguration
 */
const se_OutputFormatConfiguration = (input: OutputFormatConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Serializer != null && { Serializer: se_Serializer(input.Serializer, context) }),
  };
};

/**
 * serializeAws_json1_1ParquetSerDe
 */
const se_ParquetSerDe = (input: ParquetSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes != null && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.EnableDictionaryCompression != null && {
      EnableDictionaryCompression: input.EnableDictionaryCompression,
    }),
    ...(input.MaxPaddingBytes != null && { MaxPaddingBytes: input.MaxPaddingBytes }),
    ...(input.PageSizeBytes != null && { PageSizeBytes: input.PageSizeBytes }),
    ...(input.WriterVersion != null && { WriterVersion: input.WriterVersion }),
  };
};

/**
 * serializeAws_json1_1ProcessingConfiguration
 */
const se_ProcessingConfiguration = (input: ProcessingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Processors != null && { Processors: se_ProcessorList(input.Processors, context) }),
  };
};

/**
 * serializeAws_json1_1Processor
 */
const se_Processor = (input: Processor, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != null && { Parameters: se_ProcessorParameterList(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1ProcessorList
 */
const se_ProcessorList = (input: Processor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Processor(entry, context);
    });
};

/**
 * serializeAws_json1_1ProcessorParameter
 */
const se_ProcessorParameter = (input: ProcessorParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_json1_1ProcessorParameterList
 */
const se_ProcessorParameterList = (input: ProcessorParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProcessorParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1PutRecordBatchInput
 */
const se_PutRecordBatchInput = (input: PutRecordBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Records != null && { Records: se_PutRecordBatchRequestEntryList(input.Records, context) }),
  };
};

/**
 * serializeAws_json1_1PutRecordBatchRequestEntryList
 */
const se_PutRecordBatchRequestEntryList = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se__Record(entry, context);
    });
};

/**
 * serializeAws_json1_1PutRecordInput
 */
const se_PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Record != null && { Record: se__Record(input.Record, context) }),
  };
};

/**
 * serializeAws_json1_1_Record
 */
const se__Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
  };
};

/**
 * serializeAws_json1_1RedshiftDestinationConfiguration
 */
const se_RedshiftDestinationConfiguration = (input: RedshiftDestinationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL != null && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand != null && { CopyCommand: se_CopyCommand(input.CopyCommand, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_RedshiftRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration != null && {
      S3BackupConfiguration: se_S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1RedshiftDestinationUpdate
 */
const se_RedshiftDestinationUpdate = (input: RedshiftDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL != null && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand != null && { CopyCommand: se_CopyCommand(input.CopyCommand, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_RedshiftRetryOptions(input.RetryOptions, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate != null && { S3BackupUpdate: se_S3DestinationUpdate(input.S3BackupUpdate, context) }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1RedshiftRetryOptions
 */
const se_RedshiftRetryOptions = (input: RedshiftRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1RetryOptions
 */
const se_RetryOptions = (input: RetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1S3DestinationConfiguration
 */
const se_S3DestinationConfiguration = (input: S3DestinationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != null && { BufferingHints: se_BufferingHints(input.BufferingHints, context) }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != null && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != null && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

/**
 * serializeAws_json1_1S3DestinationUpdate
 */
const se_S3DestinationUpdate = (input: S3DestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != null && { BufferingHints: se_BufferingHints(input.BufferingHints, context) }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != null && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != null && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

/**
 * serializeAws_json1_1SchemaConfiguration
 */
const se_SchemaConfiguration = (input: SchemaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Serializer
 */
const se_Serializer = (input: Serializer, context: __SerdeContext): any => {
  return {
    ...(input.OrcSerDe != null && { OrcSerDe: se_OrcSerDe(input.OrcSerDe, context) }),
    ...(input.ParquetSerDe != null && { ParquetSerDe: se_ParquetSerDe(input.ParquetSerDe, context) }),
  };
};

/**
 * serializeAws_json1_1SplunkDestinationConfiguration
 */
const se_SplunkDestinationConfiguration = (input: SplunkDestinationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds != null && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint != null && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType != null && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken != null && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_SplunkRetryOptions(input.RetryOptions, context) }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

/**
 * serializeAws_json1_1SplunkDestinationUpdate
 */
const se_SplunkDestinationUpdate = (input: SplunkDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds != null && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint != null && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType != null && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken != null && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration != null && {
      ProcessingConfiguration: se_ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != null && { RetryOptions: se_SplunkRetryOptions(input.RetryOptions, context) }),
    ...(input.S3BackupMode != null && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update != null && { S3Update: se_S3DestinationUpdate(input.S3Update, context) }),
  };
};

/**
 * serializeAws_json1_1SplunkRetryOptions
 */
const se_SplunkRetryOptions = (input: SplunkRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != null && { DurationInSeconds: input.DurationInSeconds }),
  };
};

/**
 * serializeAws_json1_1StartDeliveryStreamEncryptionInput
 */
const se_StartDeliveryStreamEncryptionInput = (
  input: StartDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamEncryptionConfigurationInput != null && {
      DeliveryStreamEncryptionConfigurationInput: se_DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

/**
 * serializeAws_json1_1StopDeliveryStreamEncryptionInput
 */
const se_StopDeliveryStreamEncryptionInput = (
  input: StopDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

/**
 * serializeAws_json1_1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagDeliveryStreamInput
 */
const se_TagDeliveryStreamInput = (input: TagDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Tags != null && { Tags: se_TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TagDeliveryStreamInputTagList
 */
const se_TagDeliveryStreamInputTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UntagDeliveryStreamInput
 */
const se_UntagDeliveryStreamInput = (input: UntagDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDestinationInput
 */
const se_UpdateDestinationInput = (input: UpdateDestinationInput, context: __SerdeContext): any => {
  return {
    ...(input.AmazonOpenSearchServerlessDestinationUpdate != null && {
      AmazonOpenSearchServerlessDestinationUpdate: se_AmazonOpenSearchServerlessDestinationUpdate(
        input.AmazonOpenSearchServerlessDestinationUpdate,
        context
      ),
    }),
    ...(input.AmazonopensearchserviceDestinationUpdate != null && {
      AmazonopensearchserviceDestinationUpdate: se_AmazonopensearchserviceDestinationUpdate(
        input.AmazonopensearchserviceDestinationUpdate,
        context
      ),
    }),
    ...(input.CurrentDeliveryStreamVersionId != null && {
      CurrentDeliveryStreamVersionId: input.CurrentDeliveryStreamVersionId,
    }),
    ...(input.DeliveryStreamName != null && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DestinationId != null && { DestinationId: input.DestinationId }),
    ...(input.ElasticsearchDestinationUpdate != null && {
      ElasticsearchDestinationUpdate: se_ElasticsearchDestinationUpdate(input.ElasticsearchDestinationUpdate, context),
    }),
    ...(input.ExtendedS3DestinationUpdate != null && {
      ExtendedS3DestinationUpdate: se_ExtendedS3DestinationUpdate(input.ExtendedS3DestinationUpdate, context),
    }),
    ...(input.HttpEndpointDestinationUpdate != null && {
      HttpEndpointDestinationUpdate: se_HttpEndpointDestinationUpdate(input.HttpEndpointDestinationUpdate, context),
    }),
    ...(input.RedshiftDestinationUpdate != null && {
      RedshiftDestinationUpdate: se_RedshiftDestinationUpdate(input.RedshiftDestinationUpdate, context),
    }),
    ...(input.S3DestinationUpdate != null && {
      S3DestinationUpdate: se_S3DestinationUpdate(input.S3DestinationUpdate, context),
    }),
    ...(input.SplunkDestinationUpdate != null && {
      SplunkDestinationUpdate: se_SplunkDestinationUpdate(input.SplunkDestinationUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1VpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdList(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_json1_1AmazonOpenSearchServerlessBufferingHints
 */
const de_AmazonOpenSearchServerlessBufferingHints = (
  output: any,
  context: __SerdeContext
): AmazonOpenSearchServerlessBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

/**
 * deserializeAws_json1_1AmazonOpenSearchServerlessDestinationDescription
 */
const de_AmazonOpenSearchServerlessDestinationDescription = (
  output: any,
  context: __SerdeContext
): AmazonOpenSearchServerlessDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != null
        ? de_AmazonOpenSearchServerlessBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CollectionEndpoint: __expectString(output.CollectionEndpoint),
    IndexName: __expectString(output.IndexName),
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != null ? de_AmazonOpenSearchServerlessRetryOptions(output.RetryOptions, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != null
        ? de_VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AmazonOpenSearchServerlessRetryOptions
 */
const de_AmazonOpenSearchServerlessRetryOptions = (
  output: any,
  context: __SerdeContext
): AmazonOpenSearchServerlessRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1AmazonopensearchserviceBufferingHints
 */
const de_AmazonopensearchserviceBufferingHints = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

/**
 * deserializeAws_json1_1AmazonopensearchserviceDestinationDescription
 */
const de_AmazonopensearchserviceDestinationDescription = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != null
        ? de_AmazonopensearchserviceBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterEndpoint: __expectString(output.ClusterEndpoint),
    DomainARN: __expectString(output.DomainARN),
    IndexName: __expectString(output.IndexName),
    IndexRotationPeriod: __expectString(output.IndexRotationPeriod),
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != null ? de_AmazonopensearchserviceRetryOptions(output.RetryOptions, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != null
        ? de_VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AmazonopensearchserviceRetryOptions
 */
const de_AmazonopensearchserviceRetryOptions = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1BufferingHints
 */
const de_BufferingHints = (output: any, context: __SerdeContext): BufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLoggingOptions
 */
const de_CloudWatchLoggingOptions = (output: any, context: __SerdeContext): CloudWatchLoggingOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    LogGroupName: __expectString(output.LogGroupName),
    LogStreamName: __expectString(output.LogStreamName),
  } as any;
};

/**
 * deserializeAws_json1_1ColumnToJsonKeyMappings
 */
const de_ColumnToJsonKeyMappings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CopyCommand
 */
const de_CopyCommand = (output: any, context: __SerdeContext): CopyCommand => {
  return {
    CopyOptions: __expectString(output.CopyOptions),
    DataTableColumns: __expectString(output.DataTableColumns),
    DataTableName: __expectString(output.DataTableName),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDeliveryStreamOutput
 */
const de_CreateDeliveryStreamOutput = (output: any, context: __SerdeContext): CreateDeliveryStreamOutput => {
  return {
    DeliveryStreamARN: __expectString(output.DeliveryStreamARN),
  } as any;
};

/**
 * deserializeAws_json1_1DataFormatConversionConfiguration
 */
const de_DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    InputFormatConfiguration:
      output.InputFormatConfiguration != null
        ? de_InputFormatConfiguration(output.InputFormatConfiguration, context)
        : undefined,
    OutputFormatConfiguration:
      output.OutputFormatConfiguration != null
        ? de_OutputFormatConfiguration(output.OutputFormatConfiguration, context)
        : undefined,
    SchemaConfiguration:
      output.SchemaConfiguration != null ? de_SchemaConfiguration(output.SchemaConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDeliveryStreamOutput
 */
const de_DeleteDeliveryStreamOutput = (output: any, context: __SerdeContext): DeleteDeliveryStreamOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeliveryStreamDescription
 */
const de_DeliveryStreamDescription = (output: any, context: __SerdeContext): DeliveryStreamDescription => {
  return {
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    DeliveryStreamARN: __expectString(output.DeliveryStreamARN),
    DeliveryStreamEncryptionConfiguration:
      output.DeliveryStreamEncryptionConfiguration != null
        ? de_DeliveryStreamEncryptionConfiguration(output.DeliveryStreamEncryptionConfiguration, context)
        : undefined,
    DeliveryStreamName: __expectString(output.DeliveryStreamName),
    DeliveryStreamStatus: __expectString(output.DeliveryStreamStatus),
    DeliveryStreamType: __expectString(output.DeliveryStreamType),
    Destinations: output.Destinations != null ? de_DestinationDescriptionList(output.Destinations, context) : undefined,
    FailureDescription:
      output.FailureDescription != null ? de_FailureDescription(output.FailureDescription, context) : undefined,
    HasMoreDestinations: __expectBoolean(output.HasMoreDestinations),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Source: output.Source != null ? de_SourceDescription(output.Source, context) : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeliveryStreamEncryptionConfiguration
 */
const de_DeliveryStreamEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): DeliveryStreamEncryptionConfiguration => {
  return {
    FailureDescription:
      output.FailureDescription != null ? de_FailureDescription(output.FailureDescription, context) : undefined,
    KeyARN: __expectString(output.KeyARN),
    KeyType: __expectString(output.KeyType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeliveryStreamNameList
 */
const de_DeliveryStreamNameList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1DescribeDeliveryStreamOutput
 */
const de_DescribeDeliveryStreamOutput = (output: any, context: __SerdeContext): DescribeDeliveryStreamOutput => {
  return {
    DeliveryStreamDescription:
      output.DeliveryStreamDescription != null
        ? de_DeliveryStreamDescription(output.DeliveryStreamDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Deserializer
 */
const de_Deserializer = (output: any, context: __SerdeContext): Deserializer => {
  return {
    HiveJsonSerDe: output.HiveJsonSerDe != null ? de_HiveJsonSerDe(output.HiveJsonSerDe, context) : undefined,
    OpenXJsonSerDe: output.OpenXJsonSerDe != null ? de_OpenXJsonSerDe(output.OpenXJsonSerDe, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationDescription
 */
const de_DestinationDescription = (output: any, context: __SerdeContext): DestinationDescription => {
  return {
    AmazonOpenSearchServerlessDestinationDescription:
      output.AmazonOpenSearchServerlessDestinationDescription != null
        ? de_AmazonOpenSearchServerlessDestinationDescription(
            output.AmazonOpenSearchServerlessDestinationDescription,
            context
          )
        : undefined,
    AmazonopensearchserviceDestinationDescription:
      output.AmazonopensearchserviceDestinationDescription != null
        ? de_AmazonopensearchserviceDestinationDescription(
            output.AmazonopensearchserviceDestinationDescription,
            context
          )
        : undefined,
    DestinationId: __expectString(output.DestinationId),
    ElasticsearchDestinationDescription:
      output.ElasticsearchDestinationDescription != null
        ? de_ElasticsearchDestinationDescription(output.ElasticsearchDestinationDescription, context)
        : undefined,
    ExtendedS3DestinationDescription:
      output.ExtendedS3DestinationDescription != null
        ? de_ExtendedS3DestinationDescription(output.ExtendedS3DestinationDescription, context)
        : undefined,
    HttpEndpointDestinationDescription:
      output.HttpEndpointDestinationDescription != null
        ? de_HttpEndpointDestinationDescription(output.HttpEndpointDestinationDescription, context)
        : undefined,
    RedshiftDestinationDescription:
      output.RedshiftDestinationDescription != null
        ? de_RedshiftDestinationDescription(output.RedshiftDestinationDescription, context)
        : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    SplunkDestinationDescription:
      output.SplunkDestinationDescription != null
        ? de_SplunkDestinationDescription(output.SplunkDestinationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationDescriptionList
 */
const de_DestinationDescriptionList = (output: any, context: __SerdeContext): DestinationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DestinationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DynamicPartitioningConfiguration
 */
const de_DynamicPartitioningConfiguration = (
  output: any,
  context: __SerdeContext
): DynamicPartitioningConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    RetryOptions: output.RetryOptions != null ? de_RetryOptions(output.RetryOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ElasticsearchBufferingHints
 */
const de_ElasticsearchBufferingHints = (output: any, context: __SerdeContext): ElasticsearchBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

/**
 * deserializeAws_json1_1ElasticsearchDestinationDescription
 */
const de_ElasticsearchDestinationDescription = (
  output: any,
  context: __SerdeContext
): ElasticsearchDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != null ? de_ElasticsearchBufferingHints(output.BufferingHints, context) : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterEndpoint: __expectString(output.ClusterEndpoint),
    DomainARN: __expectString(output.DomainARN),
    IndexName: __expectString(output.IndexName),
    IndexRotationPeriod: __expectString(output.IndexRotationPeriod),
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions: output.RetryOptions != null ? de_ElasticsearchRetryOptions(output.RetryOptions, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != null
        ? de_VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ElasticsearchRetryOptions
 */
const de_ElasticsearchRetryOptions = (output: any, context: __SerdeContext): ElasticsearchRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    KMSEncryptionConfig:
      output.KMSEncryptionConfig != null ? de_KMSEncryptionConfig(output.KMSEncryptionConfig, context) : undefined,
    NoEncryptionConfig: __expectString(output.NoEncryptionConfig),
  } as any;
};

/**
 * deserializeAws_json1_1ExtendedS3DestinationDescription
 */
const de_ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    BufferingHints: output.BufferingHints != null ? de_BufferingHints(output.BufferingHints, context) : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat: __expectString(output.CompressionFormat),
    DataFormatConversionConfiguration:
      output.DataFormatConversionConfiguration != null
        ? de_DataFormatConversionConfiguration(output.DataFormatConversionConfiguration, context)
        : undefined,
    DynamicPartitioningConfiguration:
      output.DynamicPartitioningConfiguration != null
        ? de_DynamicPartitioningConfiguration(output.DynamicPartitioningConfiguration, context)
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix: __expectString(output.ErrorOutputPrefix),
    Prefix: __expectString(output.Prefix),
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupDescription:
      output.S3BackupDescription != null ? de_S3DestinationDescription(output.S3BackupDescription, context) : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
  } as any;
};

/**
 * deserializeAws_json1_1FailureDescription
 */
const de_FailureDescription = (output: any, context: __SerdeContext): FailureDescription => {
  return {
    Details: __expectString(output.Details),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1HiveJsonSerDe
 */
const de_HiveJsonSerDe = (output: any, context: __SerdeContext): HiveJsonSerDe => {
  return {
    TimestampFormats:
      output.TimestampFormats != null ? de_ListOfNonEmptyStrings(output.TimestampFormats, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointBufferingHints
 */
const de_HttpEndpointBufferingHints = (output: any, context: __SerdeContext): HttpEndpointBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointCommonAttribute
 */
const de_HttpEndpointCommonAttribute = (output: any, context: __SerdeContext): HttpEndpointCommonAttribute => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeValue: __expectString(output.AttributeValue),
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointCommonAttributesList
 */
const de_HttpEndpointCommonAttributesList = (output: any, context: __SerdeContext): HttpEndpointCommonAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpEndpointCommonAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HttpEndpointDescription
 */
const de_HttpEndpointDescription = (output: any, context: __SerdeContext): HttpEndpointDescription => {
  return {
    Name: __expectString(output.Name),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointDestinationDescription
 */
const de_HttpEndpointDestinationDescription = (
  output: any,
  context: __SerdeContext
): HttpEndpointDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != null ? de_HttpEndpointBufferingHints(output.BufferingHints, context) : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    EndpointConfiguration:
      output.EndpointConfiguration != null
        ? de_HttpEndpointDescription(output.EndpointConfiguration, context)
        : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RequestConfiguration:
      output.RequestConfiguration != null
        ? de_HttpEndpointRequestConfiguration(output.RequestConfiguration, context)
        : undefined,
    RetryOptions: output.RetryOptions != null ? de_HttpEndpointRetryOptions(output.RetryOptions, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointRequestConfiguration
 */
const de_HttpEndpointRequestConfiguration = (
  output: any,
  context: __SerdeContext
): HttpEndpointRequestConfiguration => {
  return {
    CommonAttributes:
      output.CommonAttributes != null
        ? de_HttpEndpointCommonAttributesList(output.CommonAttributes, context)
        : undefined,
    ContentEncoding: __expectString(output.ContentEncoding),
  } as any;
};

/**
 * deserializeAws_json1_1HttpEndpointRetryOptions
 */
const de_HttpEndpointRetryOptions = (output: any, context: __SerdeContext): HttpEndpointRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1InputFormatConfiguration
 */
const de_InputFormatConfiguration = (output: any, context: __SerdeContext): InputFormatConfiguration => {
  return {
    Deserializer: output.Deserializer != null ? de_Deserializer(output.Deserializer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArgumentException
 */
const de_InvalidArgumentException = (output: any, context: __SerdeContext): InvalidArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKMSResourceException
 */
const de_InvalidKMSResourceException = (output: any, context: __SerdeContext): InvalidKMSResourceException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisStreamSourceDescription
 */
const de_KinesisStreamSourceDescription = (output: any, context: __SerdeContext): KinesisStreamSourceDescription => {
  return {
    DeliveryStartTimestamp:
      output.DeliveryStartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeliveryStartTimestamp)))
        : undefined,
    KinesisStreamARN: __expectString(output.KinesisStreamARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1KMSEncryptionConfig
 */
const de_KMSEncryptionConfig = (output: any, context: __SerdeContext): KMSEncryptionConfig => {
  return {
    AWSKMSKeyARN: __expectString(output.AWSKMSKeyARN),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeliveryStreamsOutput
 */
const de_ListDeliveryStreamsOutput = (output: any, context: __SerdeContext): ListDeliveryStreamsOutput => {
  return {
    DeliveryStreamNames:
      output.DeliveryStreamNames != null ? de_DeliveryStreamNameList(output.DeliveryStreamNames, context) : undefined,
    HasMoreDeliveryStreams: __expectBoolean(output.HasMoreDeliveryStreams),
  } as any;
};

/**
 * deserializeAws_json1_1ListOfNonEmptyStrings
 */
const de_ListOfNonEmptyStrings = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace
 */
const de_ListOfNonEmptyStringsWithoutWhitespace = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamOutput
 */
const de_ListTagsForDeliveryStreamOutput = (output: any, context: __SerdeContext): ListTagsForDeliveryStreamOutput => {
  return {
    HasMoreTags: __expectBoolean(output.HasMoreTags),
    Tags: output.Tags != null ? de_ListTagsForDeliveryStreamOutputTagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList
 */
const de_ListTagsForDeliveryStreamOutputTagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenXJsonSerDe
 */
const de_OpenXJsonSerDe = (output: any, context: __SerdeContext): OpenXJsonSerDe => {
  return {
    CaseInsensitive: __expectBoolean(output.CaseInsensitive),
    ColumnToJsonKeyMappings:
      output.ColumnToJsonKeyMappings != null
        ? de_ColumnToJsonKeyMappings(output.ColumnToJsonKeyMappings, context)
        : undefined,
    ConvertDotsInJsonKeysToUnderscores: __expectBoolean(output.ConvertDotsInJsonKeysToUnderscores),
  } as any;
};

/**
 * deserializeAws_json1_1OrcSerDe
 */
const de_OrcSerDe = (output: any, context: __SerdeContext): OrcSerDe => {
  return {
    BlockSizeBytes: __expectInt32(output.BlockSizeBytes),
    BloomFilterColumns:
      output.BloomFilterColumns != null
        ? de_ListOfNonEmptyStringsWithoutWhitespace(output.BloomFilterColumns, context)
        : undefined,
    BloomFilterFalsePositiveProbability: __limitedParseDouble(output.BloomFilterFalsePositiveProbability),
    Compression: __expectString(output.Compression),
    DictionaryKeyThreshold: __limitedParseDouble(output.DictionaryKeyThreshold),
    EnablePadding: __expectBoolean(output.EnablePadding),
    FormatVersion: __expectString(output.FormatVersion),
    PaddingTolerance: __limitedParseDouble(output.PaddingTolerance),
    RowIndexStride: __expectInt32(output.RowIndexStride),
    StripeSizeBytes: __expectInt32(output.StripeSizeBytes),
  } as any;
};

/**
 * deserializeAws_json1_1OutputFormatConfiguration
 */
const de_OutputFormatConfiguration = (output: any, context: __SerdeContext): OutputFormatConfiguration => {
  return {
    Serializer: output.Serializer != null ? de_Serializer(output.Serializer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ParquetSerDe
 */
const de_ParquetSerDe = (output: any, context: __SerdeContext): ParquetSerDe => {
  return {
    BlockSizeBytes: __expectInt32(output.BlockSizeBytes),
    Compression: __expectString(output.Compression),
    EnableDictionaryCompression: __expectBoolean(output.EnableDictionaryCompression),
    MaxPaddingBytes: __expectInt32(output.MaxPaddingBytes),
    PageSizeBytes: __expectInt32(output.PageSizeBytes),
    WriterVersion: __expectString(output.WriterVersion),
  } as any;
};

/**
 * deserializeAws_json1_1ProcessingConfiguration
 */
const de_ProcessingConfiguration = (output: any, context: __SerdeContext): ProcessingConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Processors: output.Processors != null ? de_ProcessorList(output.Processors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Processor
 */
const de_Processor = (output: any, context: __SerdeContext): Processor => {
  return {
    Parameters: output.Parameters != null ? de_ProcessorParameterList(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ProcessorList
 */
const de_ProcessorList = (output: any, context: __SerdeContext): Processor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Processor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessorParameter
 */
const de_ProcessorParameter = (output: any, context: __SerdeContext): ProcessorParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

/**
 * deserializeAws_json1_1ProcessorParameterList
 */
const de_ProcessorParameterList = (output: any, context: __SerdeContext): ProcessorParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProcessorParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutRecordBatchOutput
 */
const de_PutRecordBatchOutput = (output: any, context: __SerdeContext): PutRecordBatchOutput => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    FailedPutCount: __expectInt32(output.FailedPutCount),
    RequestResponses:
      output.RequestResponses != null
        ? de_PutRecordBatchResponseEntryList(output.RequestResponses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordBatchResponseEntry
 */
const de_PutRecordBatchResponseEntry = (output: any, context: __SerdeContext): PutRecordBatchResponseEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    RecordId: __expectString(output.RecordId),
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordBatchResponseEntryList
 */
const de_PutRecordBatchResponseEntryList = (output: any, context: __SerdeContext): PutRecordBatchResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PutRecordBatchResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutRecordOutput
 */
const de_PutRecordOutput = (output: any, context: __SerdeContext): PutRecordOutput => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    RecordId: __expectString(output.RecordId),
  } as any;
};

/**
 * deserializeAws_json1_1RedshiftDestinationDescription
 */
const de_RedshiftDestinationDescription = (output: any, context: __SerdeContext): RedshiftDestinationDescription => {
  return {
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterJDBCURL: __expectString(output.ClusterJDBCURL),
    CopyCommand: output.CopyCommand != null ? de_CopyCommand(output.CopyCommand, context) : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions: output.RetryOptions != null ? de_RedshiftRetryOptions(output.RetryOptions, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupDescription:
      output.S3BackupDescription != null ? de_S3DestinationDescription(output.S3BackupDescription, context) : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1RedshiftRetryOptions
 */
const de_RedshiftRetryOptions = (output: any, context: __SerdeContext): RedshiftRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RetryOptions
 */
const de_RetryOptions = (output: any, context: __SerdeContext): RetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1S3DestinationDescription
 */
const de_S3DestinationDescription = (output: any, context: __SerdeContext): S3DestinationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    BufferingHints: output.BufferingHints != null ? de_BufferingHints(output.BufferingHints, context) : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat: __expectString(output.CompressionFormat),
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix: __expectString(output.ErrorOutputPrefix),
    Prefix: __expectString(output.Prefix),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaConfiguration
 */
const de_SchemaConfiguration = (output: any, context: __SerdeContext): SchemaConfiguration => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Region: __expectString(output.Region),
    RoleARN: __expectString(output.RoleARN),
    TableName: __expectString(output.TableName),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1Serializer
 */
const de_Serializer = (output: any, context: __SerdeContext): Serializer => {
  return {
    OrcSerDe: output.OrcSerDe != null ? de_OrcSerDe(output.OrcSerDe, context) : undefined,
    ParquetSerDe: output.ParquetSerDe != null ? de_ParquetSerDe(output.ParquetSerDe, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1SourceDescription
 */
const de_SourceDescription = (output: any, context: __SerdeContext): SourceDescription => {
  return {
    KinesisStreamSourceDescription:
      output.KinesisStreamSourceDescription != null
        ? de_KinesisStreamSourceDescription(output.KinesisStreamSourceDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SplunkDestinationDescription
 */
const de_SplunkDestinationDescription = (output: any, context: __SerdeContext): SplunkDestinationDescription => {
  return {
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != null
        ? de_CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    HECAcknowledgmentTimeoutInSeconds: __expectInt32(output.HECAcknowledgmentTimeoutInSeconds),
    HECEndpoint: __expectString(output.HECEndpoint),
    HECEndpointType: __expectString(output.HECEndpointType),
    HECToken: __expectString(output.HECToken),
    ProcessingConfiguration:
      output.ProcessingConfiguration != null
        ? de_ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions: output.RetryOptions != null ? de_SplunkRetryOptions(output.RetryOptions, context) : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != null
        ? de_S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SplunkRetryOptions
 */
const de_SplunkRetryOptions = (output: any, context: __SerdeContext): SplunkRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1StartDeliveryStreamEncryptionOutput
 */
const de_StartDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StartDeliveryStreamEncryptionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StopDeliveryStreamEncryptionOutput
 */
const de_StopDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StopDeliveryStreamEncryptionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagDeliveryStreamOutput
 */
const de_TagDeliveryStreamOutput = (output: any, context: __SerdeContext): TagDeliveryStreamOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UntagDeliveryStreamOutput
 */
const de_UntagDeliveryStreamOutput = (output: any, context: __SerdeContext): UntagDeliveryStreamOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDestinationOutput
 */
const de_UpdateDestinationOutput = (output: any, context: __SerdeContext): UpdateDestinationOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1VpcConfigurationDescription
 */
const de_VpcConfigurationDescription = (output: any, context: __SerdeContext): VpcConfigurationDescription => {
  return {
    RoleARN: __expectString(output.RoleARN),
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIdList(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIdList(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
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
    "x-amz-target": `Firehose_20150804.${operation}`,
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
