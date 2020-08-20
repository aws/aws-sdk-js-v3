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
import {
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
  KMSEncryptionConfig,
  KinesisStreamSourceConfiguration,
  KinesisStreamSourceDescription,
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
  _Record,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateDeliveryStreamCommand = async (
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.CreateDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.DeleteDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.DescribeDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.ListDeliveryStreams",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.ListTagsForDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.PutRecord",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.PutRecordBatch",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.StartDeliveryStreamEncryption",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.StopDeliveryStreamEncryption",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.TagDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.UntagDeliveryStream",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Firehose_20150804.UpdateDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeliveryStreamOutput(data, context);
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeliveryStreamOutput(data, context);
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryStreamOutput(data, context);
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListDeliveryStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeliveryStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeliveryStreamsOutput(data, context);
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeliveryStreamsOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDeliveryStreamOutput(data, context);
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordOutput(data, context);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRecordBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordBatchOutput(data, context);
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordBatchOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDeliveryStreamEncryptionOutput(data, context);
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeliveryStreamEncryptionOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeliveryStreamEncryptionOutput(data, context);
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDeliveryStreamEncryptionOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagDeliveryStreamOutput(data, context);
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagDeliveryStreamOutput(data, context);
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagDeliveryStreamOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDestinationOutput(data, context);
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDestinationOutput",
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidKMSResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSResourceException(body, context);
  const contents: InvalidKMSResourceException = {
    name: "InvalidKMSResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1BufferingHints = (input: BufferingHints, context: __SerdeContext): any => {
  return {
    ...(input.IntervalInSeconds !== undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs !== undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.LogGroupName !== undefined && { LogGroupName: input.LogGroupName }),
    ...(input.LogStreamName !== undefined && { LogStreamName: input.LogStreamName }),
  };
};

const serializeAws_json1_1ColumnToJsonKeyMappings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1CopyCommand = (input: CopyCommand, context: __SerdeContext): any => {
  return {
    ...(input.CopyOptions !== undefined && { CopyOptions: input.CopyOptions }),
    ...(input.DataTableColumns !== undefined && { DataTableColumns: input.DataTableColumns }),
    ...(input.DataTableName !== undefined && { DataTableName: input.DataTableName }),
  };
};

const serializeAws_json1_1CreateDeliveryStreamInput = (
  input: CreateDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamEncryptionConfigurationInput !== undefined && {
      DeliveryStreamEncryptionConfigurationInput: serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DeliveryStreamType !== undefined && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ElasticsearchDestinationConfiguration !== undefined && {
      ElasticsearchDestinationConfiguration: serializeAws_json1_1ElasticsearchDestinationConfiguration(
        input.ElasticsearchDestinationConfiguration,
        context
      ),
    }),
    ...(input.ExtendedS3DestinationConfiguration !== undefined && {
      ExtendedS3DestinationConfiguration: serializeAws_json1_1ExtendedS3DestinationConfiguration(
        input.ExtendedS3DestinationConfiguration,
        context
      ),
    }),
    ...(input.HttpEndpointDestinationConfiguration !== undefined && {
      HttpEndpointDestinationConfiguration: serializeAws_json1_1HttpEndpointDestinationConfiguration(
        input.HttpEndpointDestinationConfiguration,
        context
      ),
    }),
    ...(input.KinesisStreamSourceConfiguration !== undefined && {
      KinesisStreamSourceConfiguration: serializeAws_json1_1KinesisStreamSourceConfiguration(
        input.KinesisStreamSourceConfiguration,
        context
      ),
    }),
    ...(input.RedshiftDestinationConfiguration !== undefined && {
      RedshiftDestinationConfiguration: serializeAws_json1_1RedshiftDestinationConfiguration(
        input.RedshiftDestinationConfiguration,
        context
      ),
    }),
    ...(input.S3DestinationConfiguration !== undefined && {
      S3DestinationConfiguration: serializeAws_json1_1S3DestinationConfiguration(
        input.S3DestinationConfiguration,
        context
      ),
    }),
    ...(input.SplunkDestinationConfiguration !== undefined && {
      SplunkDestinationConfiguration: serializeAws_json1_1SplunkDestinationConfiguration(
        input.SplunkDestinationConfiguration,
        context
      ),
    }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.InputFormatConfiguration !== undefined && {
      InputFormatConfiguration: serializeAws_json1_1InputFormatConfiguration(input.InputFormatConfiguration, context),
    }),
    ...(input.OutputFormatConfiguration !== undefined && {
      OutputFormatConfiguration: serializeAws_json1_1OutputFormatConfiguration(
        input.OutputFormatConfiguration,
        context
      ),
    }),
    ...(input.SchemaConfiguration !== undefined && {
      SchemaConfiguration: serializeAws_json1_1SchemaConfiguration(input.SchemaConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DeleteDeliveryStreamInput = (
  input: DeleteDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowForceDelete !== undefined && { AllowForceDelete: input.AllowForceDelete }),
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput = (
  input: DeliveryStreamEncryptionConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyARN !== undefined && { KeyARN: input.KeyARN }),
    ...(input.KeyType !== undefined && { KeyType: input.KeyType }),
  };
};

const serializeAws_json1_1DescribeDeliveryStreamInput = (
  input: DescribeDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartDestinationId !== undefined && {
      ExclusiveStartDestinationId: input.ExclusiveStartDestinationId,
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1Deserializer = (input: Deserializer, context: __SerdeContext): any => {
  return {
    ...(input.HiveJsonSerDe !== undefined && {
      HiveJsonSerDe: serializeAws_json1_1HiveJsonSerDe(input.HiveJsonSerDe, context),
    }),
    ...(input.OpenXJsonSerDe !== undefined && {
      OpenXJsonSerDe: serializeAws_json1_1OpenXJsonSerDe(input.OpenXJsonSerDe, context),
    }),
  };
};

const serializeAws_json1_1ElasticsearchBufferingHints = (
  input: ElasticsearchBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds !== undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs !== undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1ElasticsearchDestinationConfiguration = (
  input: ElasticsearchDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint !== undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN !== undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod !== undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.TypeName !== undefined && { TypeName: input.TypeName }),
    ...(input.VpcConfiguration !== undefined && {
      VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1ElasticsearchDestinationUpdate = (
  input: ElasticsearchDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1ElasticsearchBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterEndpoint !== undefined && { ClusterEndpoint: input.ClusterEndpoint }),
    ...(input.DomainARN !== undefined && { DomainARN: input.DomainARN }),
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.IndexRotationPeriod !== undefined && { IndexRotationPeriod: input.IndexRotationPeriod }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1ElasticsearchRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3Update !== undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
    ...(input.TypeName !== undefined && { TypeName: input.TypeName }),
  };
};

const serializeAws_json1_1ElasticsearchRetryOptions = (
  input: ElasticsearchRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds !== undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KMSEncryptionConfig !== undefined && {
      KMSEncryptionConfig: serializeAws_json1_1KMSEncryptionConfig(input.KMSEncryptionConfig, context),
    }),
    ...(input.NoEncryptionConfig !== undefined && { NoEncryptionConfig: input.NoEncryptionConfig }),
  };
};

const serializeAws_json1_1ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat !== undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration !== undefined && {
      DataFormatConversionConfiguration: serializeAws_json1_1DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix !== undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration !== undefined && {
      S3BackupConfiguration: serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
  };
};

const serializeAws_json1_1ExtendedS3DestinationUpdate = (
  input: ExtendedS3DestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat !== undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.DataFormatConversionConfiguration !== undefined && {
      DataFormatConversionConfiguration: serializeAws_json1_1DataFormatConversionConfiguration(
        input.DataFormatConversionConfiguration,
        context
      ),
    }),
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix !== undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate !== undefined && {
      S3BackupUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context),
    }),
  };
};

const serializeAws_json1_1HiveJsonSerDe = (input: HiveJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.TimestampFormats !== undefined && {
      TimestampFormats: serializeAws_json1_1ListOfNonEmptyStrings(input.TimestampFormats, context),
    }),
  };
};

const serializeAws_json1_1HttpEndpointBufferingHints = (
  input: HttpEndpointBufferingHints,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntervalInSeconds !== undefined && { IntervalInSeconds: input.IntervalInSeconds }),
    ...(input.SizeInMBs !== undefined && { SizeInMBs: input.SizeInMBs }),
  };
};

const serializeAws_json1_1HttpEndpointCommonAttribute = (
  input: HttpEndpointCommonAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue !== undefined && { AttributeValue: input.AttributeValue }),
  };
};

const serializeAws_json1_1HttpEndpointCommonAttributesList = (
  input: HttpEndpointCommonAttribute[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1HttpEndpointCommonAttribute(entry, context));
};

const serializeAws_json1_1HttpEndpointConfiguration = (
  input: HttpEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessKey !== undefined && { AccessKey: input.AccessKey }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_json1_1HttpEndpointDestinationConfiguration = (
  input: HttpEndpointDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration !== undefined && {
      EndpointConfiguration: serializeAws_json1_1HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration !== undefined && {
      RequestConfiguration: serializeAws_json1_1HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1HttpEndpointRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_1HttpEndpointDestinationUpdate = (
  input: HttpEndpointDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1HttpEndpointBufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.EndpointConfiguration !== undefined && {
      EndpointConfiguration: serializeAws_json1_1HttpEndpointConfiguration(input.EndpointConfiguration, context),
    }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RequestConfiguration !== undefined && {
      RequestConfiguration: serializeAws_json1_1HttpEndpointRequestConfiguration(input.RequestConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1HttpEndpointRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update !== undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
  };
};

const serializeAws_json1_1HttpEndpointRequestConfiguration = (
  input: HttpEndpointRequestConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommonAttributes !== undefined && {
      CommonAttributes: serializeAws_json1_1HttpEndpointCommonAttributesList(input.CommonAttributes, context),
    }),
    ...(input.ContentEncoding !== undefined && { ContentEncoding: input.ContentEncoding }),
  };
};

const serializeAws_json1_1HttpEndpointRetryOptions = (
  input: HttpEndpointRetryOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.DurationInSeconds !== undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1InputFormatConfiguration = (
  input: InputFormatConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Deserializer !== undefined && {
      Deserializer: serializeAws_json1_1Deserializer(input.Deserializer, context),
    }),
  };
};

const serializeAws_json1_1KinesisStreamSourceConfiguration = (
  input: KinesisStreamSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KinesisStreamARN !== undefined && { KinesisStreamARN: input.KinesisStreamARN }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1KMSEncryptionConfig = (input: KMSEncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.AWSKMSKeyARN !== undefined && { AWSKMSKeyARN: input.AWSKMSKeyARN }),
  };
};

const serializeAws_json1_1ListDeliveryStreamsInput = (
  input: ListDeliveryStreamsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamType !== undefined && { DeliveryStreamType: input.DeliveryStreamType }),
    ...(input.ExclusiveStartDeliveryStreamName !== undefined && {
      ExclusiveStartDeliveryStreamName: input.ExclusiveStartDeliveryStreamName,
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1ListOfNonEmptyStrings = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ListTagsForDeliveryStreamInput = (
  input: ListTagsForDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.ExclusiveStartTagKey !== undefined && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
  };
};

const serializeAws_json1_1OpenXJsonSerDe = (input: OpenXJsonSerDe, context: __SerdeContext): any => {
  return {
    ...(input.CaseInsensitive !== undefined && { CaseInsensitive: input.CaseInsensitive }),
    ...(input.ColumnToJsonKeyMappings !== undefined && {
      ColumnToJsonKeyMappings: serializeAws_json1_1ColumnToJsonKeyMappings(input.ColumnToJsonKeyMappings, context),
    }),
    ...(input.ConvertDotsInJsonKeysToUnderscores !== undefined && {
      ConvertDotsInJsonKeysToUnderscores: input.ConvertDotsInJsonKeysToUnderscores,
    }),
  };
};

const serializeAws_json1_1OrcSerDe = (input: OrcSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes !== undefined && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.BloomFilterColumns !== undefined && {
      BloomFilterColumns: serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(input.BloomFilterColumns, context),
    }),
    ...(input.BloomFilterFalsePositiveProbability !== undefined && {
      BloomFilterFalsePositiveProbability: input.BloomFilterFalsePositiveProbability,
    }),
    ...(input.Compression !== undefined && { Compression: input.Compression }),
    ...(input.DictionaryKeyThreshold !== undefined && { DictionaryKeyThreshold: input.DictionaryKeyThreshold }),
    ...(input.EnablePadding !== undefined && { EnablePadding: input.EnablePadding }),
    ...(input.FormatVersion !== undefined && { FormatVersion: input.FormatVersion }),
    ...(input.PaddingTolerance !== undefined && { PaddingTolerance: input.PaddingTolerance }),
    ...(input.RowIndexStride !== undefined && { RowIndexStride: input.RowIndexStride }),
    ...(input.StripeSizeBytes !== undefined && { StripeSizeBytes: input.StripeSizeBytes }),
  };
};

const serializeAws_json1_1OutputFormatConfiguration = (
  input: OutputFormatConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Serializer !== undefined && { Serializer: serializeAws_json1_1Serializer(input.Serializer, context) }),
  };
};

const serializeAws_json1_1ParquetSerDe = (input: ParquetSerDe, context: __SerdeContext): any => {
  return {
    ...(input.BlockSizeBytes !== undefined && { BlockSizeBytes: input.BlockSizeBytes }),
    ...(input.Compression !== undefined && { Compression: input.Compression }),
    ...(input.EnableDictionaryCompression !== undefined && {
      EnableDictionaryCompression: input.EnableDictionaryCompression,
    }),
    ...(input.MaxPaddingBytes !== undefined && { MaxPaddingBytes: input.MaxPaddingBytes }),
    ...(input.PageSizeBytes !== undefined && { PageSizeBytes: input.PageSizeBytes }),
    ...(input.WriterVersion !== undefined && { WriterVersion: input.WriterVersion }),
  };
};

const serializeAws_json1_1ProcessingConfiguration = (input: ProcessingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.Processors !== undefined && { Processors: serializeAws_json1_1ProcessorList(input.Processors, context) }),
  };
};

const serializeAws_json1_1Processor = (input: Processor, context: __SerdeContext): any => {
  return {
    ...(input.Parameters !== undefined && {
      Parameters: serializeAws_json1_1ProcessorParameterList(input.Parameters, context),
    }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1ProcessorList = (input: Processor[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Processor(entry, context));
};

const serializeAws_json1_1ProcessorParameter = (input: ProcessorParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName !== undefined && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue !== undefined && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_json1_1ProcessorParameterList = (input: ProcessorParameter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1ProcessorParameter(entry, context));
};

const serializeAws_json1_1PutRecordBatchInput = (input: PutRecordBatchInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Records !== undefined && {
      Records: serializeAws_json1_1PutRecordBatchRequestEntryList(input.Records, context),
    }),
  };
};

const serializeAws_json1_1PutRecordBatchRequestEntryList = (input: _Record[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1_Record(entry, context));
};

const serializeAws_json1_1PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Record !== undefined && { Record: serializeAws_json1_1_Record(input.Record, context) }),
  };
};

const serializeAws_json1_1_Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_json1_1RedshiftDestinationConfiguration = (
  input: RedshiftDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL !== undefined && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand !== undefined && {
      CopyCommand: serializeAws_json1_1CopyCommand(input.CopyCommand, context),
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupConfiguration !== undefined && {
      S3BackupConfiguration: serializeAws_json1_1S3DestinationConfiguration(input.S3BackupConfiguration, context),
    }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
    ...(input.Username !== undefined && { Username: input.Username }),
  };
};

const serializeAws_json1_1RedshiftDestinationUpdate = (
  input: RedshiftDestinationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.ClusterJDBCURL !== undefined && { ClusterJDBCURL: input.ClusterJDBCURL }),
    ...(input.CopyCommand !== undefined && {
      CopyCommand: serializeAws_json1_1CopyCommand(input.CopyCommand, context),
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1RedshiftRetryOptions(input.RetryOptions, context),
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3BackupUpdate !== undefined && {
      S3BackupUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3BackupUpdate, context),
    }),
    ...(input.S3Update !== undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
    ...(input.Username !== undefined && { Username: input.Username }),
  };
};

const serializeAws_json1_1RedshiftRetryOptions = (input: RedshiftRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds !== undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat !== undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix !== undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1S3DestinationUpdate = (input: S3DestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.BufferingHints !== undefined && {
      BufferingHints: serializeAws_json1_1BufferingHints(input.BufferingHints, context),
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.CompressionFormat !== undefined && { CompressionFormat: input.CompressionFormat }),
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ErrorOutputPrefix !== undefined && { ErrorOutputPrefix: input.ErrorOutputPrefix }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1SchemaConfiguration = (input: SchemaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && { DatabaseName: input.DatabaseName }),
    ...(input.Region !== undefined && { Region: input.Region }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.VersionId !== undefined && { VersionId: input.VersionId }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Serializer = (input: Serializer, context: __SerdeContext): any => {
  return {
    ...(input.OrcSerDe !== undefined && { OrcSerDe: serializeAws_json1_1OrcSerDe(input.OrcSerDe, context) }),
    ...(input.ParquetSerDe !== undefined && {
      ParquetSerDe: serializeAws_json1_1ParquetSerDe(input.ParquetSerDe, context),
    }),
  };
};

const serializeAws_json1_1SplunkDestinationConfiguration = (
  input: SplunkDestinationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds !== undefined && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint !== undefined && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType !== undefined && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken !== undefined && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context),
    }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3DestinationConfiguration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_1SplunkDestinationUpdate = (input: SplunkDestinationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.HECAcknowledgmentTimeoutInSeconds !== undefined && {
      HECAcknowledgmentTimeoutInSeconds: input.HECAcknowledgmentTimeoutInSeconds,
    }),
    ...(input.HECEndpoint !== undefined && { HECEndpoint: input.HECEndpoint }),
    ...(input.HECEndpointType !== undefined && { HECEndpointType: input.HECEndpointType }),
    ...(input.HECToken !== undefined && { HECToken: input.HECToken }),
    ...(input.ProcessingConfiguration !== undefined && {
      ProcessingConfiguration: serializeAws_json1_1ProcessingConfiguration(input.ProcessingConfiguration, context),
    }),
    ...(input.RetryOptions !== undefined && {
      RetryOptions: serializeAws_json1_1SplunkRetryOptions(input.RetryOptions, context),
    }),
    ...(input.S3BackupMode !== undefined && { S3BackupMode: input.S3BackupMode }),
    ...(input.S3Update !== undefined && { S3Update: serializeAws_json1_1S3DestinationUpdate(input.S3Update, context) }),
  };
};

const serializeAws_json1_1SplunkRetryOptions = (input: SplunkRetryOptions, context: __SerdeContext): any => {
  return {
    ...(input.DurationInSeconds !== undefined && { DurationInSeconds: input.DurationInSeconds }),
  };
};

const serializeAws_json1_1StartDeliveryStreamEncryptionInput = (
  input: StartDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamEncryptionConfigurationInput !== undefined && {
      DeliveryStreamEncryptionConfigurationInput: serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
        input.DeliveryStreamEncryptionConfigurationInput,
        context
      ),
    }),
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1StopDeliveryStreamEncryptionInput = (
  input: StopDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
  };
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagDeliveryStreamInput = (input: TagDeliveryStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagDeliveryStreamInputTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagDeliveryStreamInputTagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1UntagDeliveryStreamInput = (
  input: UntagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDestinationInput = (input: UpdateDestinationInput, context: __SerdeContext): any => {
  return {
    ...(input.CurrentDeliveryStreamVersionId !== undefined && {
      CurrentDeliveryStreamVersionId: input.CurrentDeliveryStreamVersionId,
    }),
    ...(input.DeliveryStreamName !== undefined && { DeliveryStreamName: input.DeliveryStreamName }),
    ...(input.DestinationId !== undefined && { DestinationId: input.DestinationId }),
    ...(input.ElasticsearchDestinationUpdate !== undefined && {
      ElasticsearchDestinationUpdate: serializeAws_json1_1ElasticsearchDestinationUpdate(
        input.ElasticsearchDestinationUpdate,
        context
      ),
    }),
    ...(input.ExtendedS3DestinationUpdate !== undefined && {
      ExtendedS3DestinationUpdate: serializeAws_json1_1ExtendedS3DestinationUpdate(
        input.ExtendedS3DestinationUpdate,
        context
      ),
    }),
    ...(input.HttpEndpointDestinationUpdate !== undefined && {
      HttpEndpointDestinationUpdate: serializeAws_json1_1HttpEndpointDestinationUpdate(
        input.HttpEndpointDestinationUpdate,
        context
      ),
    }),
    ...(input.RedshiftDestinationUpdate !== undefined && {
      RedshiftDestinationUpdate: serializeAws_json1_1RedshiftDestinationUpdate(
        input.RedshiftDestinationUpdate,
        context
      ),
    }),
    ...(input.S3DestinationUpdate !== undefined && {
      S3DestinationUpdate: serializeAws_json1_1S3DestinationUpdate(input.S3DestinationUpdate, context),
    }),
    ...(input.SplunkDestinationUpdate !== undefined && {
      SplunkDestinationUpdate: serializeAws_json1_1SplunkDestinationUpdate(input.SplunkDestinationUpdate, context),
    }),
  };
};

const serializeAws_json1_1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds !== undefined && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const deserializeAws_json1_1BufferingHints = (output: any, context: __SerdeContext): BufferingHints => {
  return {
    __type: "BufferingHints",
    IntervalInSeconds:
      output.IntervalInSeconds !== undefined && output.IntervalInSeconds !== null
        ? output.IntervalInSeconds
        : undefined,
    SizeInMBs: output.SizeInMBs !== undefined && output.SizeInMBs !== null ? output.SizeInMBs : undefined,
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptions => {
  return {
    __type: "CloudWatchLoggingOptions",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
    LogStreamName:
      output.LogStreamName !== undefined && output.LogStreamName !== null ? output.LogStreamName : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnToJsonKeyMappings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CopyCommand = (output: any, context: __SerdeContext): CopyCommand => {
  return {
    __type: "CopyCommand",
    CopyOptions: output.CopyOptions !== undefined && output.CopyOptions !== null ? output.CopyOptions : undefined,
    DataTableColumns:
      output.DataTableColumns !== undefined && output.DataTableColumns !== null ? output.DataTableColumns : undefined,
    DataTableName:
      output.DataTableName !== undefined && output.DataTableName !== null ? output.DataTableName : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): CreateDeliveryStreamOutput => {
  return {
    __type: "CreateDeliveryStreamOutput",
    DeliveryStreamARN:
      output.DeliveryStreamARN !== undefined && output.DeliveryStreamARN !== null
        ? output.DeliveryStreamARN
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  return {
    __type: "DataFormatConversionConfiguration",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    InputFormatConfiguration:
      output.InputFormatConfiguration !== undefined && output.InputFormatConfiguration !== null
        ? deserializeAws_json1_1InputFormatConfiguration(output.InputFormatConfiguration, context)
        : undefined,
    OutputFormatConfiguration:
      output.OutputFormatConfiguration !== undefined && output.OutputFormatConfiguration !== null
        ? deserializeAws_json1_1OutputFormatConfiguration(output.OutputFormatConfiguration, context)
        : undefined,
    SchemaConfiguration:
      output.SchemaConfiguration !== undefined && output.SchemaConfiguration !== null
        ? deserializeAws_json1_1SchemaConfiguration(output.SchemaConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeliveryStreamOutput => {
  return {
    __type: "DeleteDeliveryStreamOutput",
  } as any;
};

const deserializeAws_json1_1DeliveryStreamDescription = (
  output: any,
  context: __SerdeContext
): DeliveryStreamDescription => {
  return {
    __type: "DeliveryStreamDescription",
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    DeliveryStreamARN:
      output.DeliveryStreamARN !== undefined && output.DeliveryStreamARN !== null
        ? output.DeliveryStreamARN
        : undefined,
    DeliveryStreamEncryptionConfiguration:
      output.DeliveryStreamEncryptionConfiguration !== undefined &&
      output.DeliveryStreamEncryptionConfiguration !== null
        ? deserializeAws_json1_1DeliveryStreamEncryptionConfiguration(
            output.DeliveryStreamEncryptionConfiguration,
            context
          )
        : undefined,
    DeliveryStreamName:
      output.DeliveryStreamName !== undefined && output.DeliveryStreamName !== null
        ? output.DeliveryStreamName
        : undefined,
    DeliveryStreamStatus:
      output.DeliveryStreamStatus !== undefined && output.DeliveryStreamStatus !== null
        ? output.DeliveryStreamStatus
        : undefined,
    DeliveryStreamType:
      output.DeliveryStreamType !== undefined && output.DeliveryStreamType !== null
        ? output.DeliveryStreamType
        : undefined,
    Destinations:
      output.Destinations !== undefined && output.Destinations !== null
        ? deserializeAws_json1_1DestinationDescriptionList(output.Destinations, context)
        : undefined,
    FailureDescription:
      output.FailureDescription !== undefined && output.FailureDescription !== null
        ? deserializeAws_json1_1FailureDescription(output.FailureDescription, context)
        : undefined,
    HasMoreDestinations:
      output.HasMoreDestinations !== undefined && output.HasMoreDestinations !== null
        ? output.HasMoreDestinations
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    Source:
      output.Source !== undefined && output.Source !== null
        ? deserializeAws_json1_1SourceDescription(output.Source, context)
        : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  } as any;
};

const deserializeAws_json1_1DeliveryStreamEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): DeliveryStreamEncryptionConfiguration => {
  return {
    __type: "DeliveryStreamEncryptionConfiguration",
    FailureDescription:
      output.FailureDescription !== undefined && output.FailureDescription !== null
        ? deserializeAws_json1_1FailureDescription(output.FailureDescription, context)
        : undefined,
    KeyARN: output.KeyARN !== undefined && output.KeyARN !== null ? output.KeyARN : undefined,
    KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1DeliveryStreamNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DescribeDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryStreamOutput => {
  return {
    __type: "DescribeDeliveryStreamOutput",
    DeliveryStreamDescription:
      output.DeliveryStreamDescription !== undefined && output.DeliveryStreamDescription !== null
        ? deserializeAws_json1_1DeliveryStreamDescription(output.DeliveryStreamDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Deserializer = (output: any, context: __SerdeContext): Deserializer => {
  return {
    __type: "Deserializer",
    HiveJsonSerDe:
      output.HiveJsonSerDe !== undefined && output.HiveJsonSerDe !== null
        ? deserializeAws_json1_1HiveJsonSerDe(output.HiveJsonSerDe, context)
        : undefined,
    OpenXJsonSerDe:
      output.OpenXJsonSerDe !== undefined && output.OpenXJsonSerDe !== null
        ? deserializeAws_json1_1OpenXJsonSerDe(output.OpenXJsonSerDe, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationDescription = (output: any, context: __SerdeContext): DestinationDescription => {
  return {
    __type: "DestinationDescription",
    DestinationId:
      output.DestinationId !== undefined && output.DestinationId !== null ? output.DestinationId : undefined,
    ElasticsearchDestinationDescription:
      output.ElasticsearchDestinationDescription !== undefined && output.ElasticsearchDestinationDescription !== null
        ? deserializeAws_json1_1ElasticsearchDestinationDescription(output.ElasticsearchDestinationDescription, context)
        : undefined,
    ExtendedS3DestinationDescription:
      output.ExtendedS3DestinationDescription !== undefined && output.ExtendedS3DestinationDescription !== null
        ? deserializeAws_json1_1ExtendedS3DestinationDescription(output.ExtendedS3DestinationDescription, context)
        : undefined,
    HttpEndpointDestinationDescription:
      output.HttpEndpointDestinationDescription !== undefined && output.HttpEndpointDestinationDescription !== null
        ? deserializeAws_json1_1HttpEndpointDestinationDescription(output.HttpEndpointDestinationDescription, context)
        : undefined,
    RedshiftDestinationDescription:
      output.RedshiftDestinationDescription !== undefined && output.RedshiftDestinationDescription !== null
        ? deserializeAws_json1_1RedshiftDestinationDescription(output.RedshiftDestinationDescription, context)
        : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription !== undefined && output.S3DestinationDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    SplunkDestinationDescription:
      output.SplunkDestinationDescription !== undefined && output.SplunkDestinationDescription !== null
        ? deserializeAws_json1_1SplunkDestinationDescription(output.SplunkDestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationDescriptionList = (
  output: any,
  context: __SerdeContext
): DestinationDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DestinationDescription(entry, context));
};

const deserializeAws_json1_1ElasticsearchBufferingHints = (
  output: any,
  context: __SerdeContext
): ElasticsearchBufferingHints => {
  return {
    __type: "ElasticsearchBufferingHints",
    IntervalInSeconds:
      output.IntervalInSeconds !== undefined && output.IntervalInSeconds !== null
        ? output.IntervalInSeconds
        : undefined,
    SizeInMBs: output.SizeInMBs !== undefined && output.SizeInMBs !== null ? output.SizeInMBs : undefined,
  } as any;
};

const deserializeAws_json1_1ElasticsearchDestinationDescription = (
  output: any,
  context: __SerdeContext
): ElasticsearchDestinationDescription => {
  return {
    __type: "ElasticsearchDestinationDescription",
    BufferingHints:
      output.BufferingHints !== undefined && output.BufferingHints !== null
        ? deserializeAws_json1_1ElasticsearchBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterEndpoint:
      output.ClusterEndpoint !== undefined && output.ClusterEndpoint !== null ? output.ClusterEndpoint : undefined,
    DomainARN: output.DomainARN !== undefined && output.DomainARN !== null ? output.DomainARN : undefined,
    IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
    IndexRotationPeriod:
      output.IndexRotationPeriod !== undefined && output.IndexRotationPeriod !== null
        ? output.IndexRotationPeriod
        : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration !== undefined && output.ProcessingConfiguration !== null
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions !== undefined && output.RetryOptions !== null
        ? deserializeAws_json1_1ElasticsearchRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    S3BackupMode: output.S3BackupMode !== undefined && output.S3BackupMode !== null ? output.S3BackupMode : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription !== undefined && output.S3DestinationDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    TypeName: output.TypeName !== undefined && output.TypeName !== null ? output.TypeName : undefined,
    VpcConfigurationDescription:
      output.VpcConfigurationDescription !== undefined && output.VpcConfigurationDescription !== null
        ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ElasticsearchRetryOptions = (
  output: any,
  context: __SerdeContext
): ElasticsearchRetryOptions => {
  return {
    __type: "ElasticsearchRetryOptions",
    DurationInSeconds:
      output.DurationInSeconds !== undefined && output.DurationInSeconds !== null
        ? output.DurationInSeconds
        : undefined,
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    __type: "EncryptionConfiguration",
    KMSEncryptionConfig:
      output.KMSEncryptionConfig !== undefined && output.KMSEncryptionConfig !== null
        ? deserializeAws_json1_1KMSEncryptionConfig(output.KMSEncryptionConfig, context)
        : undefined,
    NoEncryptionConfig:
      output.NoEncryptionConfig !== undefined && output.NoEncryptionConfig !== null
        ? output.NoEncryptionConfig
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  return {
    __type: "ExtendedS3DestinationDescription",
    BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
    BufferingHints:
      output.BufferingHints !== undefined && output.BufferingHints !== null
        ? deserializeAws_json1_1BufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat:
      output.CompressionFormat !== undefined && output.CompressionFormat !== null
        ? output.CompressionFormat
        : undefined,
    DataFormatConversionConfiguration:
      output.DataFormatConversionConfiguration !== undefined && output.DataFormatConversionConfiguration !== null
        ? deserializeAws_json1_1DataFormatConversionConfiguration(output.DataFormatConversionConfiguration, context)
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix:
      output.ErrorOutputPrefix !== undefined && output.ErrorOutputPrefix !== null
        ? output.ErrorOutputPrefix
        : undefined,
    Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration !== undefined && output.ProcessingConfiguration !== null
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    S3BackupDescription:
      output.S3BackupDescription !== undefined && output.S3BackupDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context)
        : undefined,
    S3BackupMode: output.S3BackupMode !== undefined && output.S3BackupMode !== null ? output.S3BackupMode : undefined,
  } as any;
};

const deserializeAws_json1_1FailureDescription = (output: any, context: __SerdeContext): FailureDescription => {
  return {
    __type: "FailureDescription",
    Details: output.Details !== undefined && output.Details !== null ? output.Details : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1HiveJsonSerDe = (output: any, context: __SerdeContext): HiveJsonSerDe => {
  return {
    __type: "HiveJsonSerDe",
    TimestampFormats:
      output.TimestampFormats !== undefined && output.TimestampFormats !== null
        ? deserializeAws_json1_1ListOfNonEmptyStrings(output.TimestampFormats, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointBufferingHints = (
  output: any,
  context: __SerdeContext
): HttpEndpointBufferingHints => {
  return {
    __type: "HttpEndpointBufferingHints",
    IntervalInSeconds:
      output.IntervalInSeconds !== undefined && output.IntervalInSeconds !== null
        ? output.IntervalInSeconds
        : undefined,
    SizeInMBs: output.SizeInMBs !== undefined && output.SizeInMBs !== null ? output.SizeInMBs : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointCommonAttribute = (
  output: any,
  context: __SerdeContext
): HttpEndpointCommonAttribute => {
  return {
    __type: "HttpEndpointCommonAttribute",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
    AttributeValue:
      output.AttributeValue !== undefined && output.AttributeValue !== null ? output.AttributeValue : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointCommonAttributesList = (
  output: any,
  context: __SerdeContext
): HttpEndpointCommonAttribute[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1HttpEndpointCommonAttribute(entry, context));
};

const deserializeAws_json1_1HttpEndpointDescription = (
  output: any,
  context: __SerdeContext
): HttpEndpointDescription => {
  return {
    __type: "HttpEndpointDescription",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointDestinationDescription = (
  output: any,
  context: __SerdeContext
): HttpEndpointDestinationDescription => {
  return {
    __type: "HttpEndpointDestinationDescription",
    BufferingHints:
      output.BufferingHints !== undefined && output.BufferingHints !== null
        ? deserializeAws_json1_1HttpEndpointBufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    EndpointConfiguration:
      output.EndpointConfiguration !== undefined && output.EndpointConfiguration !== null
        ? deserializeAws_json1_1HttpEndpointDescription(output.EndpointConfiguration, context)
        : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration !== undefined && output.ProcessingConfiguration !== null
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RequestConfiguration:
      output.RequestConfiguration !== undefined && output.RequestConfiguration !== null
        ? deserializeAws_json1_1HttpEndpointRequestConfiguration(output.RequestConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions !== undefined && output.RetryOptions !== null
        ? deserializeAws_json1_1HttpEndpointRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    S3BackupMode: output.S3BackupMode !== undefined && output.S3BackupMode !== null ? output.S3BackupMode : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription !== undefined && output.S3DestinationDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointRequestConfiguration = (
  output: any,
  context: __SerdeContext
): HttpEndpointRequestConfiguration => {
  return {
    __type: "HttpEndpointRequestConfiguration",
    CommonAttributes:
      output.CommonAttributes !== undefined && output.CommonAttributes !== null
        ? deserializeAws_json1_1HttpEndpointCommonAttributesList(output.CommonAttributes, context)
        : undefined,
    ContentEncoding:
      output.ContentEncoding !== undefined && output.ContentEncoding !== null ? output.ContentEncoding : undefined,
  } as any;
};

const deserializeAws_json1_1HttpEndpointRetryOptions = (
  output: any,
  context: __SerdeContext
): HttpEndpointRetryOptions => {
  return {
    __type: "HttpEndpointRetryOptions",
    DurationInSeconds:
      output.DurationInSeconds !== undefined && output.DurationInSeconds !== null
        ? output.DurationInSeconds
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): InputFormatConfiguration => {
  return {
    __type: "InputFormatConfiguration",
    Deserializer:
      output.Deserializer !== undefined && output.Deserializer !== null
        ? deserializeAws_json1_1Deserializer(output.Deserializer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    __type: "InvalidArgumentException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidKMSResourceException = (
  output: any,
  context: __SerdeContext
): InvalidKMSResourceException => {
  return {
    __type: "InvalidKMSResourceException",
    code: output.code !== undefined && output.code !== null ? output.code : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KinesisStreamSourceDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamSourceDescription => {
  return {
    __type: "KinesisStreamSourceDescription",
    DeliveryStartTimestamp:
      output.DeliveryStartTimestamp !== undefined && output.DeliveryStartTimestamp !== null
        ? new Date(Math.round(output.DeliveryStartTimestamp * 1000))
        : undefined,
    KinesisStreamARN:
      output.KinesisStreamARN !== undefined && output.KinesisStreamARN !== null ? output.KinesisStreamARN : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
  } as any;
};

const deserializeAws_json1_1KMSEncryptionConfig = (output: any, context: __SerdeContext): KMSEncryptionConfig => {
  return {
    __type: "KMSEncryptionConfig",
    AWSKMSKeyARN: output.AWSKMSKeyARN !== undefined && output.AWSKMSKeyARN !== null ? output.AWSKMSKeyARN : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListDeliveryStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListDeliveryStreamsOutput => {
  return {
    __type: "ListDeliveryStreamsOutput",
    DeliveryStreamNames:
      output.DeliveryStreamNames !== undefined && output.DeliveryStreamNames !== null
        ? deserializeAws_json1_1DeliveryStreamNameList(output.DeliveryStreamNames, context)
        : undefined,
    HasMoreDeliveryStreams:
      output.HasMoreDeliveryStreams !== undefined && output.HasMoreDeliveryStreams !== null
        ? output.HasMoreDeliveryStreams
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOfNonEmptyStrings = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForDeliveryStreamOutput => {
  return {
    __type: "ListTagsForDeliveryStreamOutput",
    HasMoreTags: output.HasMoreTags !== undefined && output.HasMoreTags !== null ? output.HasMoreTags : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1OpenXJsonSerDe = (output: any, context: __SerdeContext): OpenXJsonSerDe => {
  return {
    __type: "OpenXJsonSerDe",
    CaseInsensitive:
      output.CaseInsensitive !== undefined && output.CaseInsensitive !== null ? output.CaseInsensitive : undefined,
    ColumnToJsonKeyMappings:
      output.ColumnToJsonKeyMappings !== undefined && output.ColumnToJsonKeyMappings !== null
        ? deserializeAws_json1_1ColumnToJsonKeyMappings(output.ColumnToJsonKeyMappings, context)
        : undefined,
    ConvertDotsInJsonKeysToUnderscores:
      output.ConvertDotsInJsonKeysToUnderscores !== undefined && output.ConvertDotsInJsonKeysToUnderscores !== null
        ? output.ConvertDotsInJsonKeysToUnderscores
        : undefined,
  } as any;
};

const deserializeAws_json1_1OrcSerDe = (output: any, context: __SerdeContext): OrcSerDe => {
  return {
    __type: "OrcSerDe",
    BlockSizeBytes:
      output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null ? output.BlockSizeBytes : undefined,
    BloomFilterColumns:
      output.BloomFilterColumns !== undefined && output.BloomFilterColumns !== null
        ? deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(output.BloomFilterColumns, context)
        : undefined,
    BloomFilterFalsePositiveProbability:
      output.BloomFilterFalsePositiveProbability !== undefined && output.BloomFilterFalsePositiveProbability !== null
        ? output.BloomFilterFalsePositiveProbability
        : undefined,
    Compression: output.Compression !== undefined && output.Compression !== null ? output.Compression : undefined,
    DictionaryKeyThreshold:
      output.DictionaryKeyThreshold !== undefined && output.DictionaryKeyThreshold !== null
        ? output.DictionaryKeyThreshold
        : undefined,
    EnablePadding:
      output.EnablePadding !== undefined && output.EnablePadding !== null ? output.EnablePadding : undefined,
    FormatVersion:
      output.FormatVersion !== undefined && output.FormatVersion !== null ? output.FormatVersion : undefined,
    PaddingTolerance:
      output.PaddingTolerance !== undefined && output.PaddingTolerance !== null ? output.PaddingTolerance : undefined,
    RowIndexStride:
      output.RowIndexStride !== undefined && output.RowIndexStride !== null ? output.RowIndexStride : undefined,
    StripeSizeBytes:
      output.StripeSizeBytes !== undefined && output.StripeSizeBytes !== null ? output.StripeSizeBytes : undefined,
  } as any;
};

const deserializeAws_json1_1OutputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): OutputFormatConfiguration => {
  return {
    __type: "OutputFormatConfiguration",
    Serializer:
      output.Serializer !== undefined && output.Serializer !== null
        ? deserializeAws_json1_1Serializer(output.Serializer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ParquetSerDe = (output: any, context: __SerdeContext): ParquetSerDe => {
  return {
    __type: "ParquetSerDe",
    BlockSizeBytes:
      output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null ? output.BlockSizeBytes : undefined,
    Compression: output.Compression !== undefined && output.Compression !== null ? output.Compression : undefined,
    EnableDictionaryCompression:
      output.EnableDictionaryCompression !== undefined && output.EnableDictionaryCompression !== null
        ? output.EnableDictionaryCompression
        : undefined,
    MaxPaddingBytes:
      output.MaxPaddingBytes !== undefined && output.MaxPaddingBytes !== null ? output.MaxPaddingBytes : undefined,
    PageSizeBytes:
      output.PageSizeBytes !== undefined && output.PageSizeBytes !== null ? output.PageSizeBytes : undefined,
    WriterVersion:
      output.WriterVersion !== undefined && output.WriterVersion !== null ? output.WriterVersion : undefined,
  } as any;
};

const deserializeAws_json1_1ProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): ProcessingConfiguration => {
  return {
    __type: "ProcessingConfiguration",
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    Processors:
      output.Processors !== undefined && output.Processors !== null
        ? deserializeAws_json1_1ProcessorList(output.Processors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Processor = (output: any, context: __SerdeContext): Processor => {
  return {
    __type: "Processor",
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ProcessorParameterList(output.Parameters, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1ProcessorList = (output: any, context: __SerdeContext): Processor[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Processor(entry, context));
};

const deserializeAws_json1_1ProcessorParameter = (output: any, context: __SerdeContext): ProcessorParameter => {
  return {
    __type: "ProcessorParameter",
    ParameterName:
      output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
    ParameterValue:
      output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
  } as any;
};

const deserializeAws_json1_1ProcessorParameterList = (output: any, context: __SerdeContext): ProcessorParameter[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProcessorParameter(entry, context));
};

const deserializeAws_json1_1PutRecordBatchOutput = (output: any, context: __SerdeContext): PutRecordBatchOutput => {
  return {
    __type: "PutRecordBatchOutput",
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    FailedPutCount:
      output.FailedPutCount !== undefined && output.FailedPutCount !== null ? output.FailedPutCount : undefined,
    RequestResponses:
      output.RequestResponses !== undefined && output.RequestResponses !== null
        ? deserializeAws_json1_1PutRecordBatchResponseEntryList(output.RequestResponses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutRecordBatchResponseEntry = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry => {
  return {
    __type: "PutRecordBatchResponseEntry",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    RecordId: output.RecordId !== undefined && output.RecordId !== null ? output.RecordId : undefined,
  } as any;
};

const deserializeAws_json1_1PutRecordBatchResponseEntryList = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context));
};

const deserializeAws_json1_1PutRecordOutput = (output: any, context: __SerdeContext): PutRecordOutput => {
  return {
    __type: "PutRecordOutput",
    Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
    RecordId: output.RecordId !== undefined && output.RecordId !== null ? output.RecordId : undefined,
  } as any;
};

const deserializeAws_json1_1RedshiftDestinationDescription = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationDescription => {
  return {
    __type: "RedshiftDestinationDescription",
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    ClusterJDBCURL:
      output.ClusterJDBCURL !== undefined && output.ClusterJDBCURL !== null ? output.ClusterJDBCURL : undefined,
    CopyCommand:
      output.CopyCommand !== undefined && output.CopyCommand !== null
        ? deserializeAws_json1_1CopyCommand(output.CopyCommand, context)
        : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration !== undefined && output.ProcessingConfiguration !== null
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions !== undefined && output.RetryOptions !== null
        ? deserializeAws_json1_1RedshiftRetryOptions(output.RetryOptions, context)
        : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    S3BackupDescription:
      output.S3BackupDescription !== undefined && output.S3BackupDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3BackupDescription, context)
        : undefined,
    S3BackupMode: output.S3BackupMode !== undefined && output.S3BackupMode !== null ? output.S3BackupMode : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription !== undefined && output.S3DestinationDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
    Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
  } as any;
};

const deserializeAws_json1_1RedshiftRetryOptions = (output: any, context: __SerdeContext): RedshiftRetryOptions => {
  return {
    __type: "RedshiftRetryOptions",
    DurationInSeconds:
      output.DurationInSeconds !== undefined && output.DurationInSeconds !== null
        ? output.DurationInSeconds
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1S3DestinationDescription = (
  output: any,
  context: __SerdeContext
): S3DestinationDescription => {
  return {
    __type: "S3DestinationDescription",
    BucketARN: output.BucketARN !== undefined && output.BucketARN !== null ? output.BucketARN : undefined,
    BufferingHints:
      output.BufferingHints !== undefined && output.BufferingHints !== null
        ? deserializeAws_json1_1BufferingHints(output.BufferingHints, context)
        : undefined,
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    CompressionFormat:
      output.CompressionFormat !== undefined && output.CompressionFormat !== null
        ? output.CompressionFormat
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ErrorOutputPrefix:
      output.ErrorOutputPrefix !== undefined && output.ErrorOutputPrefix !== null
        ? output.ErrorOutputPrefix
        : undefined,
    Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
  } as any;
};

const deserializeAws_json1_1SchemaConfiguration = (output: any, context: __SerdeContext): SchemaConfiguration => {
  return {
    __type: "SchemaConfiguration",
    CatalogId: output.CatalogId !== undefined && output.CatalogId !== null ? output.CatalogId : undefined,
    DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Serializer = (output: any, context: __SerdeContext): Serializer => {
  return {
    __type: "Serializer",
    OrcSerDe:
      output.OrcSerDe !== undefined && output.OrcSerDe !== null
        ? deserializeAws_json1_1OrcSerDe(output.OrcSerDe, context)
        : undefined,
    ParquetSerDe:
      output.ParquetSerDe !== undefined && output.ParquetSerDe !== null
        ? deserializeAws_json1_1ParquetSerDe(output.ParquetSerDe, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1SourceDescription = (output: any, context: __SerdeContext): SourceDescription => {
  return {
    __type: "SourceDescription",
    KinesisStreamSourceDescription:
      output.KinesisStreamSourceDescription !== undefined && output.KinesisStreamSourceDescription !== null
        ? deserializeAws_json1_1KinesisStreamSourceDescription(output.KinesisStreamSourceDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SplunkDestinationDescription = (
  output: any,
  context: __SerdeContext
): SplunkDestinationDescription => {
  return {
    __type: "SplunkDestinationDescription",
    CloudWatchLoggingOptions:
      output.CloudWatchLoggingOptions !== undefined && output.CloudWatchLoggingOptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptions(output.CloudWatchLoggingOptions, context)
        : undefined,
    HECAcknowledgmentTimeoutInSeconds:
      output.HECAcknowledgmentTimeoutInSeconds !== undefined && output.HECAcknowledgmentTimeoutInSeconds !== null
        ? output.HECAcknowledgmentTimeoutInSeconds
        : undefined,
    HECEndpoint: output.HECEndpoint !== undefined && output.HECEndpoint !== null ? output.HECEndpoint : undefined,
    HECEndpointType:
      output.HECEndpointType !== undefined && output.HECEndpointType !== null ? output.HECEndpointType : undefined,
    HECToken: output.HECToken !== undefined && output.HECToken !== null ? output.HECToken : undefined,
    ProcessingConfiguration:
      output.ProcessingConfiguration !== undefined && output.ProcessingConfiguration !== null
        ? deserializeAws_json1_1ProcessingConfiguration(output.ProcessingConfiguration, context)
        : undefined,
    RetryOptions:
      output.RetryOptions !== undefined && output.RetryOptions !== null
        ? deserializeAws_json1_1SplunkRetryOptions(output.RetryOptions, context)
        : undefined,
    S3BackupMode: output.S3BackupMode !== undefined && output.S3BackupMode !== null ? output.S3BackupMode : undefined,
    S3DestinationDescription:
      output.S3DestinationDescription !== undefined && output.S3DestinationDescription !== null
        ? deserializeAws_json1_1S3DestinationDescription(output.S3DestinationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SplunkRetryOptions = (output: any, context: __SerdeContext): SplunkRetryOptions => {
  return {
    __type: "SplunkRetryOptions",
    DurationInSeconds:
      output.DurationInSeconds !== undefined && output.DurationInSeconds !== null
        ? output.DurationInSeconds
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StartDeliveryStreamEncryptionOutput => {
  return {
    __type: "StartDeliveryStreamEncryptionOutput",
  } as any;
};

const deserializeAws_json1_1StopDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StopDeliveryStreamEncryptionOutput => {
  return {
    __type: "StopDeliveryStreamEncryptionOutput",
  } as any;
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): TagDeliveryStreamOutput => {
  return {
    __type: "TagDeliveryStreamOutput",
  } as any;
};

const deserializeAws_json1_1UntagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): UntagDeliveryStreamOutput => {
  return {
    __type: "UntagDeliveryStreamOutput",
  } as any;
};

const deserializeAws_json1_1UpdateDestinationOutput = (
  output: any,
  context: __SerdeContext
): UpdateDestinationOutput => {
  return {
    __type: "UpdateDestinationOutput",
  } as any;
};

const deserializeAws_json1_1VpcConfigurationDescription = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription => {
  return {
    __type: "VpcConfigurationDescription",
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
