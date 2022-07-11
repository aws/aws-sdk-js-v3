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

export const serializeAws_json1_1CreateDeliveryStreamCommand = async (
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.CreateDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDeliveryStreamCommand = async (
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.DeleteDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDeliveryStreamCommand = async (
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.DescribeDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeliveryStreamsCommand = async (
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.ListDeliveryStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeliveryStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForDeliveryStreamCommand = async (
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.ListTagsForDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.PutRecord",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRecordBatchCommand = async (
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.PutRecordBatch",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDeliveryStreamEncryptionCommand = async (
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.StartDeliveryStreamEncryption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDeliveryStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDeliveryStreamEncryptionCommand = async (
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.StopDeliveryStreamEncryption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopDeliveryStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagDeliveryStreamCommand = async (
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.TagDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagDeliveryStreamCommand = async (
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.UntagDeliveryStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Firehose_20150804.UpdateDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeliveryStreamOutput(data, context);
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeliveryStreamOutput(data, context);
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryStreamOutput(data, context);
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDeliveryStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeliveryStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeliveryStreamsOutput(data, context);
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeliveryStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_1ListTagsForDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDeliveryStreamOutput(data, context);
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordOutput(data, context);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRecordBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRecordBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordBatchOutput(data, context);
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRecordBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDeliveryStreamEncryptionOutput(data, context);
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeliveryStreamEncryptionOutput(data, context);
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagDeliveryStreamOutput(data, context);
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagDeliveryStreamOutput(data, context);
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagDeliveryStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDestinationOutput(data, context);
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InvalidKMSResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSResourceException(body, context);
  const exception = new InvalidKMSResourceException({
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

const serializeAws_json1_1AmazonopensearchserviceBufferingHints = (
  input: AmazonopensearchserviceBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds != undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1AmazonopensearchserviceDestinationConfiguration = (
  input: AmazonopensearchserviceDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1AmazonopensearchserviceBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName != undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1AmazonopensearchserviceRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.TypeName != undefined && { TypeName: input.TypeName }),
    ...(input.VpcConfiguration != undefined && {
      VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1AmazonopensearchserviceDestinationUpdate = (
  input: AmazonopensearchserviceDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1AmazonopensearchserviceBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName != undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1AmazonopensearchserviceRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3Update != undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
    ...(input.TypeName != undefined && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1AmazonopensearchserviceRetryOptions = (
  input: AmazonopensearchserviceRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1BufferingHints = (input: BufferingHints, context: __SerdeContext): any => {
  return {
    ...(input.IntervalInSeconds != undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != undefined && { Enabled: input.Enabled }),
    ...(input.LogGroupName != undefined && { LogGroupName: input.LogGroupName }),
    ...(input.LogStreamName != undefined && { LogStreamName: input.LogStreamName }),
  };
};

const serializeAws_json1_1ColumnToJsonKeyMappings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1CopyCommand = (input: CopyCommand, context: __SerdeContext): any => {
  return {
    ...(input.CopyOptions != undefined && { CopyOptions: input.CopyOptions }),
    ...(input.DataTableColumns != undefined && { DataTableColumns: input.DataTableColumns }),
    ...(input.DataTableName != undefined && { DataTableName: input.DataTableName }),
  };
};

const serializeAws_json1_1CreateDeliveryStreamInput = (
  input: CreateDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonopensearchserviceDestinationConfiguration != undefined && {
      AmazonopensearchserviceDestinationConfiguration:
        serializeAws_json1_1AmazonopensearchserviceDestinationConfiguration(
          input.AmazonopensearchserviceDestinationConfiguration,
          context
        ),
    }),
    ...(input.DeliveryStreamEncryptionConfigurationInput != undefined && {
      DeliveryStreamEncryptionConfigurationInput: serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DeliveryStreamType != undefined && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ElasticsearchDestinationConfiguration != undefined && {
      ElasticsearchDestinationConfiguration: serializeAws_json1_1ElasticsearchDestinationConfiguration(
        input.ElasticsearchDestinationConfiguration,
        context
      ),
    }),
    ...(input.ExtendedS3DestinationConfiguration != undefined && {
      ExtendedS3DestinationConfiguration: serializeAws_json1_1ExtendedS3DestinationConfiguration(
        input.ExtendedS3DestinationConfiguration,
        context
      ),
    }),
    ...(input.HttpEndpointDestinationConfiguration != undefined && {
      HttpEndpointDestinationConfiguration: serializeAws_json1_1HttpEndpointDestinationConfiguration(
        input.HttpEndpointDestinationConfiguration,
        context
      ),
    }),
    ...(input.KinesisStreamSourceConfiguration != undefined && {
      KinesisStreamSourceConfiguration: serializeAws_json1_1KinesisStreamSourceConfiguration(
        input.KinesisStreamSourceConfiguration,
        context
      ),
    }),
    ...(input.RedshiftDestinationConfiguration != undefined && {
      RedshiftDestinationConfiguration: serializeAws_json1_1RedshiftDestinationConfiguration(
        input.RedshiftDestinationConfiguration,
        context
      ),
    }),
    ...(input.S3DestinationConfiguration != undefined && {
      S3DestinationConfiguration: serializeAws_json1_1S3DestinationConfiguration(
        input.S3DestinationConfiguration,
        context
      ),
    }),
    ...(input.SplunkDestinationConfiguration != undefined && {
      SplunkDestinationConfiguration: serializeAws_json1_1SplunkDestinationConfiguration(
        input.SplunkDestinationConfiguration,
        context
      ),
    }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != undefined && { Enabled: input.Enabled }),
    ...(input.InputFormatConfiguration != undefined && {
      InputFormatConfiguration: serializeAws_json1_1InputFormatConfiguration(input.InputFormatConfiguration, context),
    }),
    ...(input.OutputFormatConfiguration != undefined && {
      OutputFormatConfiguration: serializeAws_json1_1OutputFormatConfiguration(
        input.OutputFormatConfiguration,
        context
      ),
    }),
    ...(input.SchemaConfiguration != undefined && {
      SchemaConfiguration: serializeAws_json1_1SchemaConfiguration(input.SchemaConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DeleteDeliveryStreamInput = (
  input: DeleteDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowForceDelete != undefined && { AllowForceDelete: input.AllowForceDelete }),
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput = (
  input: DeliveryStreamEncryptionConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyARN != undefined && { KeyARN: input.KeyARN }),
    ...(input.KeyType != undefined && { KeyType: input.KeyType }),
  };
};

const serializeAws_json1_1DescribeDeliveryStreamInput = (
  input: DescribeDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartDestinationId != undefined && {
      ExclusiveStartDestinationId: input.ExclusiveStartDestinationId,
    }),
    ...(input.Limit != undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1Deserializer = (input: Deserializer, context: __SerdeContext): any => {
  return {
    ...(input.HiveJsonSerDe != undefined && {
      HiveJsonSerDe: serializeAws_json1_1HiveJsonSerDe(input.HiveJsonSerDe, context),
    }),
    ...(input.OpenXJsonSerDe != undefined && {
      OpenXJsonSerDe: serializeAws_json1_1OpenXJsonSerDe(input.OpenXJsonSerDe, context),
    }),
  };
};

const serializeAws_json1_1DynamicPartitioningConfiguration = (
  input: DynamicPartitioningConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != undefined && { Enabled: input.Enabled }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1RetryOptions(input.RetryOptions, context),
    }),
  };
};

const serializeAws_json1_1ElasticsearchBufferingHints = (
  input: ElasticsearchBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds != undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1ElasticsearchDestinationConfiguration = (
  input: ElasticsearchDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName != undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.TypeName != undefined && { TypeName: input.TypeName }),
    ...(input.VpcConfiguration != undefined && {
      VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1ElasticsearchDestinationUpdate = (
  input: ElasticsearchDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint != undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN != undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName != undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod != undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3Update != undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
    ...(input.TypeName != undefined && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1ElasticsearchRetryOptions = (
  input: ElasticsearchRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KMSEncryptionConfig != undefined && {
      KMSEncryptionConfig: serializeAws_json1_1KMSEncryptionConfig(input.KMSEncryptionConfig, context),
    }),
    ...(input.NoEncryptionConfig != undefined && { NoEncryptionConfig: input.NoEncryptionConfig }),
  };
};

const serializeAws_json1_1ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN != undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration != undefined && {
      DataFormatConversionConfiguration: serializeAws_json1_1DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.DynamicPartitioningConfiguration != undefined && {
      DynamicPartitioningConfiguration: serializeAws_json1_1DynamicPartitioningConfiguration(
        input.DynamicPartitioningConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration != undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != undefined && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration != undefined && {
      S3BackupConfiguration: serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
  };
};

const serializeAws_json1_1ExtendedS3DestinationUpdate = (
  input: ExtendedS3DestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN != undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration != undefined && {
      DataFormatConversionConfiguration: serializeAws_json1_1DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.DynamicPartitioningConfiguration != undefined && {
      DynamicPartitioningConfiguration: serializeAws_json1_1DynamicPartitioningConfiguration(
        input.DynamicPartitioningConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration != undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != undefined && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate != undefined && {
      S3BackupUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context),
    }),
  };
};

const serializeAws_json1_1HiveJsonSerDe = (input: HiveJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.TimestampFormats != undefined && {
      TimestampFormats: serializeAws_json1_1ListOfNonEmptyStrings(input.TimestampFormats, context),
    }),
  };
};

const serializeAws_json1_1HttpEndpointBufferingHints = (
  input: HttpEndpointBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds != undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs != undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1HttpEndpointCommonAttribute = (
  input: HttpEndpointCommonAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != undefined && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue != undefined && { AttributeValue: input.AttributeValue }),
  };
};

const serializeAws_json1_1HttpEndpointCommonAttributesList = (
  input: HttpEndpointCommonAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1HttpEndpointCommonAttribute(entry, context);
    });
};

const serializeAws_json1_1HttpEndpointConfiguration = (
  input: HttpEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey != undefined && { AccessKey: input.AccessKey }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.Url != undefined && { Url: input.Url }),
  };
};

const serializeAws_json1_1HttpEndpointDestinationConfiguration = (
  input: HttpEndpointDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration != undefined && {
      EndpointConfiguration: serializeAws_json1_1HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration != undefined && {
      RequestConfiguration: serializeAws_json1_1HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1HttpEndpointRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_1HttpEndpointDestinationUpdate = (
  input: HttpEndpointDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration != undefined && {
      EndpointConfiguration: serializeAws_json1_1HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration != undefined && {
      RequestConfiguration: serializeAws_json1_1HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1HttpEndpointRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update != undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
  };
};

const serializeAws_json1_1HttpEndpointRequestConfiguration = (
  input: HttpEndpointRequestConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommonAttributes != undefined && {
      CommonAttributes: serializeAws_json1_1HttpEndpointCommonAttributesList(input.CommonAttributes, context),
    }),
    ...(input.ContentEncoding != undefined && { ContentEncoding: input.ContentEncoding }),
  };
};

const serializeAws_json1_1HttpEndpointRetryOptions = (
  input: HttpEndpointRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1InputFormatConfiguration = (
  input: InputFormatConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Deserializer != undefined && {
      Deserializer: serializeAws_json1_1Deserializer(input.Deserializer, context),
    }),
  };
};

const serializeAws_json1_1KinesisStreamSourceConfiguration = (
  input: KinesisStreamSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KinesisStreamARN != undefined && { KinesisStreamARN: input.KinesisStreamARN }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KMSEncryptionConfig = (input: KMSEncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.AWSKMSKeyARN != undefined && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
  };
};

const serializeAws_json1_1ListDeliveryStreamsInput = (
  input: ListDeliveryStreamsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamType != undefined && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ExclusiveStartDeliveryStreamName != undefined && {
      ExclusiveStartDeliveryStreamName: input.ExclusiveStartDeliveryStreamName,
    }),
    ...(input.Limit != undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1ListOfNonEmptyStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListTagsForDeliveryStreamInput = (
  input: ListTagsForDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartTagKey != undefined && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
    ...(input.Limit != undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1OpenXJsonSerDe = (input: OpenXJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.CaseInsensitive != undefined && { CaseInsensitive: input.CaseInsensitive }),
    ...(input.ColumnToJsonKeyMappings != undefined && {
      ColumnToJsonKeyMappings: serializeAws_json1_1ColumnToJsonKeyMappings(input.ColumnToJsonKeyMappings, context),
    }),
    ...(input.ConvertDotsInJsonKeysToUnderscores != undefined && {
      ConvertDotsInJsonKeysToUnderscores: input.ConvertDotsInJsonKeysToUnderscores,
    }),
  };
};

const serializeAws_json1_1OrcSerDe = (input: OrcSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes != undefined && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.BloomFilterColumns != undefined && {
      BloomFilterColumns: serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(input.BloomFilterColumns, context),
    }),
    ...(input.BloomFilterFalsePositiveProbability != undefined && {
      BloomFilterFalsePositiveProbability: __serializeFloat(input.BloomFilterFalsePositiveProbability),
    }),
    ...(input.Compression != undefined && { Compression: input.Compression }),
    ...(input.DictionaryKeyThreshold != undefined && {
      DictionaryKeyThreshold: __serializeFloat(input.DictionaryKeyThreshold),
    }),
    ...(input.EnablePadding != undefined && { EnablePadding: input.EnablePadding }),
    ...(input.FormatVersion != undefined && { FormatVersion: input.FormatVersion }),
    ...(input.PaddingTolerance != undefined && { PaddingTolerance: __serializeFloat(input.PaddingTolerance) }),
    ...(input.RowIndexStride != undefined && { RowIndexStride: input.RowIndexStride }),
    ...(input.StripeSizeBytes != undefined && { StripeSizeBytes: input.StripeSizeBytes }),
  };
};

const serializeAws_json1_1OutputFormatConfiguration = (
  input: OutputFormatConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Serializer != undefined && { Serializer: serializeAws_json1_1Serializer(input.Serializer, context) }),
  };
};

const serializeAws_json1_1ParquetSerDe = (input: ParquetSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes != undefined && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.Compression != undefined && { Compression: input.Compression }),
    ...(input.EnableDictionaryCompression != undefined && {
      EnableDictionaryCompression: input.EnableDictionaryCompression,
    }),
    ...(input.MaxPaddingBytes != undefined && { MaxPaddingBytes: input.MaxPaddingBytes }),
    ...(input.PageSizeBytes != undefined && { PageSizeBytes: input.PageSizeBytes }),
    ...(input.WriterVersion != undefined && { WriterVersion: input.WriterVersion }),
  };
};

const serializeAws_json1_1ProcessingConfiguration = (input: ProcessingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != undefined && { Enabled: input.Enabled }),
    ...(input.Processors != undefined && { Processors: serializeAws_json1_1ProcessorList(input.Processors, context) }),
  };
};

const serializeAws_json1_1Processor = (input: Processor, context: __SerdeContext): any => {
  return {
    ...(input.Parameters != undefined && {
      Parameters: serializeAws_json1_1ProcessorParameterList(input.Parameters, context),
    }),
    ...(input.Type != undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1ProcessorList = (input: Processor[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Processor(entry, context);
    });
};

const serializeAws_json1_1ProcessorParameter = (input: ProcessorParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != undefined && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != undefined && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ProcessorParameterList = (input: ProcessorParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ProcessorParameter(entry, context);
    });
};

const serializeAws_json1_1PutRecordBatchInput = (input: PutRecordBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Records != undefined && {
      Records: serializeAws_json1_1PutRecordBatchRequestEntryList(input.Records, context),
    }),
  };
};

const serializeAws_json1_1PutRecordBatchRequestEntryList = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1_Record(entry, context);
    });
};

const serializeAws_json1_1PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Record != undefined && { Record: serializeAws_json1_1_Record(input.Record, context) }),
  };
};

const serializeAws_json1_1_Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.Data != undefined && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_json1_1RedshiftDestinationConfiguration = (
  input: RedshiftDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL != undefined && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand != undefined && { CopyCommand: serializeAws_json1_1CopyCommand(input.CopyCommand, context) }),
    ...(input.Password != undefined && { Password: input.Password }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration != undefined && {
      S3BackupConfiguration: serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.Username != undefined && { Username: input.Username }),
  };
};

const serializeAws_json1_1RedshiftDestinationUpdate = (
  input: RedshiftDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL != undefined && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand != undefined && { CopyCommand: serializeAws_json1_1CopyCommand(input.CopyCommand, context) }),
    ...(input.Password != undefined && { Password: input.Password }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate != undefined && {
      S3BackupUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context),
    }),
    ...(input.S3Update != undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
    ...(input.Username != undefined && { Username: input.Username }),
  };
};

const serializeAws_json1_1RedshiftRetryOptions = (input: RedshiftRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1RetryOptions = (input: RetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN != undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration != undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != undefined && { Prefix: input.Prefix }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1S3DestinationUpdate = (input: S3DestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints != undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat != undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration != undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix != undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix != undefined && { Prefix: input.Prefix }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1SchemaConfiguration = (input: SchemaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != undefined && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != undefined && { DatabaseName: input.DatabaseName }),
    ...(input.Region != undefined && { Region: input.Region }),
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.TableName != undefined && { TableName: input.TableName }),
    ...(input.VersionId != undefined && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Serializer = (input: Serializer, context: __SerdeContext): any => {
  return {
    ...(input.OrcSerDe != undefined && { OrcSerDe: serializeAws_json1_1OrcSerDe(input.OrcSerDe, context) }),
    ...(input.ParquetSerDe != undefined && {
      ParquetSerDe: serializeAws_json1_1ParquetSerDe(input.ParquetSerDe, context),
    }),
  };
};

const serializeAws_json1_1SplunkDestinationConfiguration = (
  input: SplunkDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds != undefined && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint != undefined && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType != undefined && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken != undefined && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context),
    }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration != undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_1SplunkDestinationUpdate = (input: SplunkDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions != undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds != undefined && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint != undefined && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType != undefined && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken != undefined && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration != undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions != undefined && {
      RetryOptions: serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context),
    }),
    ...(input.S3BackupMode != undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update != undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
  };
};

const serializeAws_json1_1SplunkRetryOptions = (input: SplunkRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds != undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1StartDeliveryStreamEncryptionInput = (
  input: StartDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamEncryptionConfigurationInput != undefined && {
      DeliveryStreamEncryptionConfigurationInput: serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1StopDeliveryStreamEncryptionInput = (
  input: StopDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.Value != undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagDeliveryStreamInput = (input: TagDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagDeliveryStreamInputTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UntagDeliveryStreamInput = (
  input: UntagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.TagKeys != undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDestinationInput = (input: UpdateDestinationInput, context: __SerdeContext): any => {
  return {
    ...(input.AmazonopensearchserviceDestinationUpdate != undefined && {
      AmazonopensearchserviceDestinationUpdate: serializeAws_json1_1AmazonopensearchserviceDestinationUpdate(
        input.AmazonopensearchserviceDestinationUpdate,
        context
      ),
    }),
    ...(input.CurrentDeliveryStreamVersionId != undefined && {
      CurrentDeliveryStreamVersionId: input.CurrentDeliveryStreamVersionId,
    }),
    ...(input.DeliveryStreamName != undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DestinationId != undefined && { DestinationId: input.DestinationId }),
    ...(input.ElasticsearchDestinationUpdate != undefined && {
      ElasticsearchDestinationUpdate: serializeAws_json1_1ElasticsearchDestinationUpdate(
        input.ElasticsearchDestinationUpdate,
        context
      ),
    }),
    ...(input.ExtendedS3DestinationUpdate != undefined && {
      ExtendedS3DestinationUpdate: serializeAws_json1_1ExtendedS3DestinationUpdate(
        input.ExtendedS3DestinationUpdate,
        context
      ),
    }),
    ...(input.HttpEndpointDestinationUpdate != undefined && {
      HttpEndpointDestinationUpdate: serializeAws_json1_1HttpEndpointDestinationUpdate(
        input.HttpEndpointDestinationUpdate,
        context
      ),
    }),
    ...(input.RedshiftDestinationUpdate != undefined && {
      RedshiftDestinationUpdate: serializeAws_json1_1RedshiftDestinationUpdate(
        input.RedshiftDestinationUpdate,
        context
      ),
    }),
    ...(input.S3DestinationUpdate != undefined && {
      S3DestinationUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3DestinationUpdate, context),
    }),
    ...(input.SplunkDestinationUpdate != undefined && {
      SplunkDestinationUpdate: serializeAws_json1_1SplunkDestinationUpdate(input.SplunkDestinationUpdate, context),
    }),
  };
};

const serializeAws_json1_1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RoleARN != undefined && { RoleARN: input.RoleARN }),
    ...(input.SecurityGroupIds != undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != undefined && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const deserializeAws_json1_1AmazonopensearchserviceBufferingHints = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

const deserializeAws_json1_1AmazonopensearchserviceDestinationDescription = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != undefined
        ? deserializeAws_json1_1AmazonopensearchserviceBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterEndpoint: __expectString(output.ClusterEndpoint),
    DomainARN: __expectString(output.DomainARN),
    IndexName: __expectString(output.IndexName),
    IndexRotationPeriod: __expectString(output.IndexRotationPeriod),
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != undefined
        ? deserializeAws_json1_1AmazonopensearchserviceRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != undefined
        ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AmazonopensearchserviceRetryOptions = (
  output: any,
  context: __SerdeContext
): AmazonopensearchserviceRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

const deserializeAws_json1_1BufferingHints = (output: any, context: __SerdeContext): BufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    LogGroupName: __expectString(output.LogGroupName),
    LogStreamName: __expectString(output.LogStreamName),
  } as any;
};

const deserializeAws_json1_1ColumnToJsonKeyMappings = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CopyCommand = (output: any, context: __SerdeContext): CopyCommand => {
  return {
    CopyOptions: __expectString(output.CopyOptions),
    DataTableColumns: __expectString(output.DataTableColumns),
    DataTableName: __expectString(output.DataTableName),
  } as any;
};

const deserializeAws_json1_1CreateDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): CreateDeliveryStreamOutput => {
  return {
    DeliveryStreamARN: __expectString(output.DeliveryStreamARN),
  } as any;
};

const deserializeAws_json1_1DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    InputFormatConfiguration:
      output.InputFormatConfiguration != undefined
        ? deserializeAws_json1_1InputFormatConfiguration(output.InputFormatConfiguration, context)
        : undefined,
    OutputFormatConfiguration:
      output.OutputFormatConfiguration != undefined
        ? deserializeAws_json1_1OutputFormatConfiguration(output.OutputFormatConfiguration, context)
        : undefined,
    SchemaConfiguration:
      output.SchemaConfiguration != undefined
        ? deserializeAws_json1_1SchemaConfiguration(output.SchemaConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeliveryStreamOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeliveryStreamDescription = (
  output: any,
  context: __SerdeContext
): DeliveryStreamDescription => {
  return {
    CreateTimestamp:
      output.CreateTimestamp != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    DeliveryStreamARN: __expectString(output.DeliveryStreamARN),
    DeliveryStreamEncryptionConfiguration:
      output.DeliveryStreamEncryptionConfiguration != undefined
        ? deserializeAws_json1_1DeliveryStreamEncryptionConfiguration(
            output.DeliveryStreamEncryptionConfiguration,
            context
          )
        : undefined,
    DeliveryStreamName: __expectString(output.DeliveryStreamName),
    DeliveryStreamStatus: __expectString(output.DeliveryStreamStatus),
    DeliveryStreamType: __expectString(output.DeliveryStreamType),
    Destinations:
      output.Destinations != undefined
        ? deserializeAws_json1_1DestinationDescriptionList(output.Destinations, context)
        : undefined,
    FailureDescription:
      output.FailureDescription != undefined
        ? deserializeAws_json1_1FailureDescription(output.FailureDescription, context)
        : undefined,
    HasMoreDestinations: __expectBoolean(output.HasMoreDestinations),
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    Source: output.Source != undefined ? deserializeAws_json1_1SourceDescription(output.Source, context) : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1DeliveryStreamEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): DeliveryStreamEncryptionConfiguration => {
  return {
    FailureDescription:
      output.FailureDescription != undefined
        ? deserializeAws_json1_1FailureDescription(output.FailureDescription, context)
        : undefined,
    KeyARN: __expectString(output.KeyARN),
    KeyType: __expectString(output.KeyType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeliveryStreamNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DescribeDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryStreamOutput => {
  return {
    DeliveryStreamDescription:
      output.DeliveryStreamDescription != undefined
        ? deserializeAws_json1_1DeliveryStreamDescription(output.DeliveryStreamDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Deserializer = (output: any, context: __SerdeContext): Deserializer => {
  return {
    HiveJsonSerDe:
      output.HiveJsonSerDe != undefined
        ? deserializeAws_json1_1HiveJsonSerDe(output.HiveJsonSerDe, context)
        : undefined,
    OpenXJsonSerDe:
      output.OpenXJsonSerDe != undefined
        ? deserializeAws_json1_1OpenXJsonSerDe(output.OpenXJsonSerDe, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationDescription = (output: any, context: __SerdeContext): DestinationDescription => {
  return {
    AmazonopensearchserviceDestinationDescription:
      output.AmazonopensearchserviceDestinationDescription != undefined
        ? deserializeAws_json1_1AmazonopensearchserviceDestinationDescription(
            output.AmazonopensearchserviceDestinationDescription,
            context
          )
        : undefined,
    DestinationId: __expectString(output.DestinationId),
    ElasticsearchDestinationDescription:
      output.ElasticsearchDestinationDescription != undefined
        ? deserializeAws_json1_1ElasticsearchDestinationDescription(output.ElasticsearchDestinationDescription, context)
        : undefined,
    ExtendedS3DestinationDescription:
      output.ExtendedS3DestinationDescription != undefined
        ? deserializeAws_json1_1ExtendedS3DestinationDescription(output.ExtendedS3DestinationDescription, context)
        : undefined,
    HttpEndpointDestinationDescription:
      output.HttpEndpointDestinationDescription != undefined
        ? deserializeAws_json1_1HttpEndpointDestinationDescription(output.HttpEndpointDestinationDescription, context)
        : undefined,
    RedshiftDestinationDescription:
      output.RedshiftDestinationDescription != undefined
        ? deserializeAws_json1_1RedshiftDestinationDescription(output.RedshiftDestinationDescription, context)
        : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    SplunkDestinationDescription:
      output.SplunkDestinationDescription != undefined
        ? deserializeAws_json1_1SplunkDestinationDescription(output.SplunkDestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationDescriptionList = (
  output: any,
  context: __SerdeContext
): DestinationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DestinationDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DynamicPartitioningConfiguration = (
  output: any,
  context: __SerdeContext
): DynamicPartitioningConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    RetryOptions:
      output.RetryOptions != undefined ? deserializeAws_json1_1RetryOptions(output.RetryOptions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ElasticsearchBufferingHints = (
  output: any,
  context: __SerdeContext
): ElasticsearchBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

const deserializeAws_json1_1ElasticsearchDestinationDescription = (
  output: any,
  context: __SerdeContext
): ElasticsearchDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != undefined
        ? deserializeAws_json1_1ElasticsearchBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterEndpoint: __expectString(output.ClusterEndpoint),
    DomainARN: __expectString(output.DomainARN),
    IndexName: __expectString(output.IndexName),
    IndexRotationPeriod: __expectString(output.IndexRotationPeriod),
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != undefined
        ? deserializeAws_json1_1ElasticsearchRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    TypeName: __expectString(output.TypeName),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != undefined
        ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ElasticsearchRetryOptions = (
  output: any,
  context: __SerdeContext
): ElasticsearchRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    KMSEncryptionConfig:
      output.KMSEncryptionConfig != undefined
        ? deserializeAws_json1_1KMSEncryptionConfig(output.KMSEncryptionConfig, context)
        : undefined,
    NoEncryptionConfig: __expectString(output.NoEncryptionConfig),
  } as any;
};

const deserializeAws_json1_1ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    BufferingHints:
      output.BufferingHints != undefined
        ? deserializeAws_json1_1BufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat: __expectString(output.CompressionFormat),
    DataFormatConversionConfiguration:
      output.DataFormatConversionConfiguration != undefined
        ? deserializeAws_json1_1DataFormatConversionConfiguration(output.DataFormatConversionConfiguration, context)
        : undefined,
    DynamicPartitioningConfiguration:
      output.DynamicPartitioningConfiguration != undefined
        ? deserializeAws_json1_1DynamicPartitioningConfiguration(output.DynamicPartitioningConfiguration, context)
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != undefined
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix: __expectString(output.ErrorOutputPrefix),
    Prefix: __expectString(output.Prefix),
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupDescription:
      output.S3BackupDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context)
        : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
  } as any;
};

const deserializeAws_json1_1FailureDescription = (output: any, context: __SerdeContext): FailureDescription => {
  return {
    Details: __expectString(output.Details),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1HiveJsonSerDe = (output: any, context: __SerdeContext): HiveJsonSerDe => {
  return {
    TimestampFormats:
      output.TimestampFormats != undefined
        ? deserializeAws_json1_1ListOfNonEmptyStrings(output.TimestampFormats, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointBufferingHints = (
  output: any,
  context: __SerdeContext
): HttpEndpointBufferingHints => {
  return {
    IntervalInSeconds: __expectInt32(output.IntervalInSeconds),
    SizeInMBs: __expectInt32(output.SizeInMBs),
  } as any;
};

const deserializeAws_json1_1HttpEndpointCommonAttribute = (
  output: any,
  context: __SerdeContext
): HttpEndpointCommonAttribute => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeValue: __expectString(output.AttributeValue),
  } as any;
};

const deserializeAws_json1_1HttpEndpointCommonAttributesList = (
  output: any,
  context: __SerdeContext
): HttpEndpointCommonAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HttpEndpointCommonAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1HttpEndpointDescription = (
  output: any,
  context: __SerdeContext
): HttpEndpointDescription => {
  return {
    Name: __expectString(output.Name),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1HttpEndpointDestinationDescription = (
  output: any,
  context: __SerdeContext
): HttpEndpointDestinationDescription => {
  return {
    BufferingHints:
      output.BufferingHints != undefined
        ? deserializeAws_json1_1HttpEndpointBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    EndpointConfiguration:
      output.EndpointConfiguration != undefined
        ? deserializeAws_json1_1HttpEndpointDescription(output.EndpointConfiguration, context)
        : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RequestConfiguration:
      output.RequestConfiguration != undefined
        ? deserializeAws_json1_1HttpEndpointRequestConfiguration(output.RequestConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != undefined
        ? deserializeAws_json1_1HttpEndpointRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointRequestConfiguration = (
  output: any,
  context: __SerdeContext
): HttpEndpointRequestConfiguration => {
  return {
    CommonAttributes:
      output.CommonAttributes != undefined
        ? deserializeAws_json1_1HttpEndpointCommonAttributesList(output.CommonAttributes, context)
        : undefined,
    ContentEncoding: __expectString(output.ContentEncoding),
  } as any;
};

const deserializeAws_json1_1HttpEndpointRetryOptions = (
  output: any,
  context: __SerdeContext
): HttpEndpointRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

const deserializeAws_json1_1InputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): InputFormatConfiguration => {
  return {
    Deserializer:
      output.Deserializer != undefined ? deserializeAws_json1_1Deserializer(output.Deserializer, context) : undefined,
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

const deserializeAws_json1_1InvalidKMSResourceException = (
  output: any,
  context: __SerdeContext
): InvalidKMSResourceException => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KinesisStreamSourceDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamSourceDescription => {
  return {
    DeliveryStartTimestamp:
      output.DeliveryStartTimestamp != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeliveryStartTimestamp)))
        : undefined,
    KinesisStreamARN: __expectString(output.KinesisStreamARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KMSEncryptionConfig = (output: any, context: __SerdeContext): KMSEncryptionConfig => {
  return {
    AWSKMSKeyARN: __expectString(output.AWSKMSKeyARN),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListDeliveryStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListDeliveryStreamsOutput => {
  return {
    DeliveryStreamNames:
      output.DeliveryStreamNames != undefined
        ? deserializeAws_json1_1DeliveryStreamNameList(output.DeliveryStreamNames, context)
        : undefined,
    HasMoreDeliveryStreams: __expectBoolean(output.HasMoreDeliveryStreams),
  } as any;
};

const deserializeAws_json1_1ListOfNonEmptyStrings = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1ListTagsForDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForDeliveryStreamOutput => {
  return {
    HasMoreTags: __expectBoolean(output.HasMoreTags),
    Tags:
      output.Tags != undefined
        ? deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1OpenXJsonSerDe = (output: any, context: __SerdeContext): OpenXJsonSerDe => {
  return {
    CaseInsensitive: __expectBoolean(output.CaseInsensitive),
    ColumnToJsonKeyMappings:
      output.ColumnToJsonKeyMappings != undefined
        ? deserializeAws_json1_1ColumnToJsonKeyMappings(output.ColumnToJsonKeyMappings, context)
        : undefined,
    ConvertDotsInJsonKeysToUnderscores: __expectBoolean(output.ConvertDotsInJsonKeysToUnderscores),
  } as any;
};

const deserializeAws_json1_1OrcSerDe = (output: any, context: __SerdeContext): OrcSerDe => {
  return {
    BlockSizeBytes: __expectInt32(output.BlockSizeBytes),
    BloomFilterColumns:
      output.BloomFilterColumns != undefined
        ? deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(output.BloomFilterColumns, context)
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

const deserializeAws_json1_1OutputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): OutputFormatConfiguration => {
  return {
    Serializer:
      output.Serializer != undefined ? deserializeAws_json1_1Serializer(output.Serializer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ParquetSerDe = (output: any, context: __SerdeContext): ParquetSerDe => {
  return {
    BlockSizeBytes: __expectInt32(output.BlockSizeBytes),
    Compression: __expectString(output.Compression),
    EnableDictionaryCompression: __expectBoolean(output.EnableDictionaryCompression),
    MaxPaddingBytes: __expectInt32(output.MaxPaddingBytes),
    PageSizeBytes: __expectInt32(output.PageSizeBytes),
    WriterVersion: __expectString(output.WriterVersion),
  } as any;
};

const deserializeAws_json1_1ProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): ProcessingConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Processors:
      output.Processors != undefined ? deserializeAws_json1_1ProcessorList(output.Processors, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Processor = (output: any, context: __SerdeContext): Processor => {
  return {
    Parameters:
      output.Parameters != undefined
        ? deserializeAws_json1_1ProcessorParameterList(output.Parameters, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ProcessorList = (output: any, context: __SerdeContext): Processor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Processor(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ProcessorParameter = (output: any, context: __SerdeContext): ProcessorParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

const deserializeAws_json1_1ProcessorParameterList = (output: any, context: __SerdeContext): ProcessorParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProcessorParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutRecordBatchOutput = (output: any, context: __SerdeContext): PutRecordBatchOutput => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    FailedPutCount: __expectInt32(output.FailedPutCount),
    RequestResponses:
      output.RequestResponses != undefined
        ? deserializeAws_json1_1PutRecordBatchResponseEntryList(output.RequestResponses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRecordBatchResponseEntry = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    RecordId: __expectString(output.RecordId),
  } as any;
};

const deserializeAws_json1_1PutRecordBatchResponseEntryList = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutRecordOutput = (output: any, context: __SerdeContext): PutRecordOutput => {
  return {
    Encrypted: __expectBoolean(output.Encrypted),
    RecordId: __expectString(output.RecordId),
  } as any;
};

const deserializeAws_json1_1RedshiftDestinationDescription = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationDescription => {
  return {
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterJDBCURL: __expectString(output.ClusterJDBCURL),
    CopyCommand:
      output.CopyCommand != undefined ? deserializeAws_json1_1CopyCommand(output.CopyCommand, context) : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != undefined
        ? deserializeAws_json1_1RedshiftRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    S3BackupDescription:
      output.S3BackupDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context)
        : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1RedshiftRetryOptions = (output: any, context: __SerdeContext): RedshiftRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
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

const deserializeAws_json1_1RetryOptions = (output: any, context: __SerdeContext): RetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

const deserializeAws_json1_1S3DestinationDescription = (
  output: any,
  context: __SerdeContext
): S3DestinationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    BufferingHints:
      output.BufferingHints != undefined
        ? deserializeAws_json1_1BufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat: __expectString(output.CompressionFormat),
    EncryptionConfiguration:
      output.EncryptionConfiguration != undefined
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix: __expectString(output.ErrorOutputPrefix),
    Prefix: __expectString(output.Prefix),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1SchemaConfiguration = (output: any, context: __SerdeContext): SchemaConfiguration => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Region: __expectString(output.Region),
    RoleARN: __expectString(output.RoleARN),
    TableName: __expectString(output.TableName),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Serializer = (output: any, context: __SerdeContext): Serializer => {
  return {
    OrcSerDe: output.OrcSerDe != undefined ? deserializeAws_json1_1OrcSerDe(output.OrcSerDe, context) : undefined,
    ParquetSerDe:
      output.ParquetSerDe != undefined ? deserializeAws_json1_1ParquetSerDe(output.ParquetSerDe, context) : undefined,
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

const deserializeAws_json1_1SourceDescription = (output: any, context: __SerdeContext): SourceDescription => {
  return {
    KinesisStreamSourceDescription:
      output.KinesisStreamSourceDescription != undefined
        ? deserializeAws_json1_1KinesisStreamSourceDescription(output.KinesisStreamSourceDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SplunkDestinationDescription = (
  output: any,
  context: __SerdeContext
): SplunkDestinationDescription => {
  return {
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions != undefined
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    HECAcknowledgmentTimeoutInSeconds: __expectInt32(output.HECAcknowledgmentTimeoutInSeconds),
    HECEndpoint: __expectString(output.HECEndpoint),
    HECEndpointType: __expectString(output.HECEndpointType),
    HECToken: __expectString(output.HECToken),
    ProcessingConfiguration:
      output.ProcessingConfiguration != undefined
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions != undefined
        ? deserializeAws_json1_1SplunkRetryOptions(output.RetryOptions, context)
        : undefined,
    S3BackupMode: __expectString(output.S3BackupMode),
    S3DestinationDescription:
      output.S3DestinationDescription != undefined
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SplunkRetryOptions = (output: any, context: __SerdeContext): SplunkRetryOptions => {
  return {
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
  } as any;
};

const deserializeAws_json1_1StartDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StartDeliveryStreamEncryptionOutput => {
  return {} as any;
};

const deserializeAws_json1_1StopDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StopDeliveryStreamEncryptionOutput => {
  return {} as any;
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): TagDeliveryStreamOutput => {
  return {} as any;
};

const deserializeAws_json1_1UntagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): UntagDeliveryStreamOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDestinationOutput = (
  output: any,
  context: __SerdeContext
): UpdateDestinationOutput => {
  return {} as any;
};

const deserializeAws_json1_1VpcConfigurationDescription = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription => {
  return {
    RoleARN: __expectString(output.RoleARN),
    SecurityGroupIds:
      output.SecurityGroupIds != undefined
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds != undefined ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
