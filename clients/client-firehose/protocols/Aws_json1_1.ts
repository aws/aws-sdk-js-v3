import {
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput
} from "../commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput
} from "../commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput
} from "../commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput
} from "../commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput
} from "../commands/ListTagsForDeliveryStreamCommand";
import {
  PutRecordBatchCommandInput,
  PutRecordBatchCommandOutput
} from "../commands/PutRecordBatchCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput
} from "../commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput
} from "../commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput
} from "../commands/StopDeliveryStreamEncryptionCommand";
import {
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput
} from "../commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput
} from "../commands/UntagDeliveryStreamCommand";
import {
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput
} from "../commands/UpdateDestinationCommand";
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
  _Record
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateDeliveryStreamCommand(
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.CreateDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDeliveryStreamCommand(
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.DeleteDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDeliveryStreamCommand(
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.DescribeDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeliveryStreamsCommand(
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.ListDeliveryStreams";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeliveryStreamsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForDeliveryStreamCommand(
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.ListTagsForDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutRecordCommand(
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.PutRecord";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutRecordBatchCommand(
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.PutRecordBatch";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutRecordBatchInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartDeliveryStreamEncryptionCommand(
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.StartDeliveryStreamEncryption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartDeliveryStreamEncryptionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopDeliveryStreamEncryptionCommand(
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.StopDeliveryStreamEncryption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopDeliveryStreamEncryptionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagDeliveryStreamCommand(
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.TagDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TagDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagDeliveryStreamCommand(
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.UntagDeliveryStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagDeliveryStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDestinationCommand(
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Firehose_20150804.UpdateDestination";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDestinationInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDeliveryStreamOutput(data, context);
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDeliveryStreamOutput(data, context);
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDeliveryStreamOutput(data, context);
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListDeliveryStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeliveryStreamsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeliveryStreamsOutput(data, context);
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeliveryStreamsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDeliveryStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListTagsForDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDeliveryStreamOutput(
    data,
    context
  );
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutRecordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordOutput(data, context);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRecordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1PutRecordBatchCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordBatchOutput(data, context);
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordBatchOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRecordBatchCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose.v20150804#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDeliveryStreamEncryptionOutput(
    data,
    context
  );
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDeliveryStreamEncryptionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDeliveryStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose.v20150804#InvalidKMSResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopDeliveryStreamEncryptionOutput(
    data,
    context
  );
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDeliveryStreamEncryptionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopDeliveryStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1TagDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagDeliveryStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagDeliveryStreamOutput(data, context);
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UntagDeliveryStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagDeliveryStreamCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagDeliveryStreamOutput(data, context);
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagDeliveryStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagDeliveryStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.firehose.v20150804#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDestinationOutput(data, context);
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDestinationOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose.v20150804#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.firehose.v20150804#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.firehose.v20150804#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose.v20150804#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    body,
    context
  );
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKMSResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSResourceException(
    body,
    context
  );
  const contents: InvalidKMSResourceException = {
    name: "InvalidKMSResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BufferingHints = (
  input: BufferingHints,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IntervalInSeconds !== undefined) {
    bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
  }
  if (input.SizeInMBs !== undefined) {
    bodyParams["SizeInMBs"] = input.SizeInMBs;
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.LogGroupName !== undefined) {
    bodyParams["LogGroupName"] = input.LogGroupName;
  }
  if (input.LogStreamName !== undefined) {
    bodyParams["LogStreamName"] = input.LogStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1ColumnToJsonKeyMappings = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1CopyCommand = (
  input: CopyCommand,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CopyOptions !== undefined) {
    bodyParams["CopyOptions"] = input.CopyOptions;
  }
  if (input.DataTableColumns !== undefined) {
    bodyParams["DataTableColumns"] = input.DataTableColumns;
  }
  if (input.DataTableName !== undefined) {
    bodyParams["DataTableName"] = input.DataTableName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDeliveryStreamInput = (
  input: CreateDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
    bodyParams[
      "DeliveryStreamEncryptionConfigurationInput"
    ] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
      input.DeliveryStreamEncryptionConfigurationInput,
      context
    );
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.DeliveryStreamType !== undefined) {
    bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
  }
  if (input.ElasticsearchDestinationConfiguration !== undefined) {
    bodyParams[
      "ElasticsearchDestinationConfiguration"
    ] = serializeAws_json1_1ElasticsearchDestinationConfiguration(
      input.ElasticsearchDestinationConfiguration,
      context
    );
  }
  if (input.ExtendedS3DestinationConfiguration !== undefined) {
    bodyParams[
      "ExtendedS3DestinationConfiguration"
    ] = serializeAws_json1_1ExtendedS3DestinationConfiguration(
      input.ExtendedS3DestinationConfiguration,
      context
    );
  }
  if (input.KinesisStreamSourceConfiguration !== undefined) {
    bodyParams[
      "KinesisStreamSourceConfiguration"
    ] = serializeAws_json1_1KinesisStreamSourceConfiguration(
      input.KinesisStreamSourceConfiguration,
      context
    );
  }
  if (input.RedshiftDestinationConfiguration !== undefined) {
    bodyParams[
      "RedshiftDestinationConfiguration"
    ] = serializeAws_json1_1RedshiftDestinationConfiguration(
      input.RedshiftDestinationConfiguration,
      context
    );
  }
  if (input.S3DestinationConfiguration !== undefined) {
    bodyParams[
      "S3DestinationConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3DestinationConfiguration,
      context
    );
  }
  if (input.SplunkDestinationConfiguration !== undefined) {
    bodyParams[
      "SplunkDestinationConfiguration"
    ] = serializeAws_json1_1SplunkDestinationConfiguration(
      input.SplunkDestinationConfiguration,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(
      input.Tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.InputFormatConfiguration !== undefined) {
    bodyParams[
      "InputFormatConfiguration"
    ] = serializeAws_json1_1InputFormatConfiguration(
      input.InputFormatConfiguration,
      context
    );
  }
  if (input.OutputFormatConfiguration !== undefined) {
    bodyParams[
      "OutputFormatConfiguration"
    ] = serializeAws_json1_1OutputFormatConfiguration(
      input.OutputFormatConfiguration,
      context
    );
  }
  if (input.SchemaConfiguration !== undefined) {
    bodyParams["SchemaConfiguration"] = serializeAws_json1_1SchemaConfiguration(
      input.SchemaConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDeliveryStreamInput = (
  input: DeleteDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowForceDelete !== undefined) {
    bodyParams["AllowForceDelete"] = input.AllowForceDelete;
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput = (
  input: DeliveryStreamEncryptionConfigurationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyARN !== undefined) {
    bodyParams["KeyARN"] = input.KeyARN;
  }
  if (input.KeyType !== undefined) {
    bodyParams["KeyType"] = input.KeyType;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDeliveryStreamInput = (
  input: DescribeDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.ExclusiveStartDestinationId !== undefined) {
    bodyParams["ExclusiveStartDestinationId"] =
      input.ExclusiveStartDestinationId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1Deserializer = (
  input: Deserializer,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.HiveJsonSerDe !== undefined) {
    bodyParams["HiveJsonSerDe"] = serializeAws_json1_1HiveJsonSerDe(
      input.HiveJsonSerDe,
      context
    );
  }
  if (input.OpenXJsonSerDe !== undefined) {
    bodyParams["OpenXJsonSerDe"] = serializeAws_json1_1OpenXJsonSerDe(
      input.OpenXJsonSerDe,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchBufferingHints = (
  input: ElasticsearchBufferingHints,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IntervalInSeconds !== undefined) {
    bodyParams["IntervalInSeconds"] = input.IntervalInSeconds;
  }
  if (input.SizeInMBs !== undefined) {
    bodyParams["SizeInMBs"] = input.SizeInMBs;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchDestinationConfiguration = (
  input: ElasticsearchDestinationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BufferingHints !== undefined) {
    bodyParams[
      "BufferingHints"
    ] = serializeAws_json1_1ElasticsearchBufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterEndpoint !== undefined) {
    bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
  }
  if (input.DomainARN !== undefined) {
    bodyParams["DomainARN"] = input.DomainARN;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.IndexRotationPeriod !== undefined) {
    bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  if (input.TypeName !== undefined) {
    bodyParams["TypeName"] = input.TypeName;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchDestinationUpdate = (
  input: ElasticsearchDestinationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BufferingHints !== undefined) {
    bodyParams[
      "BufferingHints"
    ] = serializeAws_json1_1ElasticsearchBufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterEndpoint !== undefined) {
    bodyParams["ClusterEndpoint"] = input.ClusterEndpoint;
  }
  if (input.DomainARN !== undefined) {
    bodyParams["DomainARN"] = input.DomainARN;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.IndexRotationPeriod !== undefined) {
    bodyParams["IndexRotationPeriod"] = input.IndexRotationPeriod;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1ElasticsearchRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  if (input.TypeName !== undefined) {
    bodyParams["TypeName"] = input.TypeName;
  }
  return bodyParams;
};

const serializeAws_json1_1ElasticsearchRetryOptions = (
  input: ElasticsearchRetryOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionConfiguration = (
  input: EncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KMSEncryptionConfig !== undefined) {
    bodyParams["KMSEncryptionConfig"] = serializeAws_json1_1KMSEncryptionConfig(
      input.KMSEncryptionConfig,
      context
    );
  }
  if (input.NoEncryptionConfig !== undefined) {
    bodyParams["NoEncryptionConfig"] = input.NoEncryptionConfig;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.DataFormatConversionConfiguration !== undefined) {
    bodyParams[
      "DataFormatConversionConfiguration"
    ] = serializeAws_json1_1DataFormatConversionConfiguration(
      input.DataFormatConversionConfiguration,
      context
    );
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupConfiguration !== undefined) {
    bodyParams[
      "S3BackupConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3BackupConfiguration,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtendedS3DestinationUpdate = (
  input: ExtendedS3DestinationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.DataFormatConversionConfiguration !== undefined) {
    bodyParams[
      "DataFormatConversionConfiguration"
    ] = serializeAws_json1_1DataFormatConversionConfiguration(
      input.DataFormatConversionConfiguration,
      context
    );
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3BackupUpdate !== undefined) {
    bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3BackupUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HiveJsonSerDe = (
  input: HiveJsonSerDe,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TimestampFormats !== undefined) {
    bodyParams["TimestampFormats"] = serializeAws_json1_1ListOfNonEmptyStrings(
      input.TimestampFormats,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputFormatConfiguration = (
  input: InputFormatConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Deserializer !== undefined) {
    bodyParams["Deserializer"] = serializeAws_json1_1Deserializer(
      input.Deserializer,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1KMSEncryptionConfig = (
  input: KMSEncryptionConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AWSKMSKeyARN !== undefined) {
    bodyParams["AWSKMSKeyARN"] = input.AWSKMSKeyARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamSourceConfiguration = (
  input: KinesisStreamSourceConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KinesisStreamARN !== undefined) {
    bodyParams["KinesisStreamARN"] = input.KinesisStreamARN;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeliveryStreamsInput = (
  input: ListDeliveryStreamsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamType !== undefined) {
    bodyParams["DeliveryStreamType"] = input.DeliveryStreamType;
  }
  if (input.ExclusiveStartDeliveryStreamName !== undefined) {
    bodyParams["ExclusiveStartDeliveryStreamName"] =
      input.ExclusiveStartDeliveryStreamName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfNonEmptyStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListTagsForDeliveryStreamInput = (
  input: ListTagsForDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.ExclusiveStartTagKey !== undefined) {
    bodyParams["ExclusiveStartTagKey"] = input.ExclusiveStartTagKey;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1OpenXJsonSerDe = (
  input: OpenXJsonSerDe,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CaseInsensitive !== undefined) {
    bodyParams["CaseInsensitive"] = input.CaseInsensitive;
  }
  if (input.ColumnToJsonKeyMappings !== undefined) {
    bodyParams[
      "ColumnToJsonKeyMappings"
    ] = serializeAws_json1_1ColumnToJsonKeyMappings(
      input.ColumnToJsonKeyMappings,
      context
    );
  }
  if (input.ConvertDotsInJsonKeysToUnderscores !== undefined) {
    bodyParams["ConvertDotsInJsonKeysToUnderscores"] =
      input.ConvertDotsInJsonKeysToUnderscores;
  }
  return bodyParams;
};

const serializeAws_json1_1OrcSerDe = (
  input: OrcSerDe,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlockSizeBytes !== undefined) {
    bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
  }
  if (input.BloomFilterColumns !== undefined) {
    bodyParams[
      "BloomFilterColumns"
    ] = serializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(
      input.BloomFilterColumns,
      context
    );
  }
  if (input.BloomFilterFalsePositiveProbability !== undefined) {
    bodyParams["BloomFilterFalsePositiveProbability"] =
      input.BloomFilterFalsePositiveProbability;
  }
  if (input.Compression !== undefined) {
    bodyParams["Compression"] = input.Compression;
  }
  if (input.DictionaryKeyThreshold !== undefined) {
    bodyParams["DictionaryKeyThreshold"] = input.DictionaryKeyThreshold;
  }
  if (input.EnablePadding !== undefined) {
    bodyParams["EnablePadding"] = input.EnablePadding;
  }
  if (input.FormatVersion !== undefined) {
    bodyParams["FormatVersion"] = input.FormatVersion;
  }
  if (input.PaddingTolerance !== undefined) {
    bodyParams["PaddingTolerance"] = input.PaddingTolerance;
  }
  if (input.RowIndexStride !== undefined) {
    bodyParams["RowIndexStride"] = input.RowIndexStride;
  }
  if (input.StripeSizeBytes !== undefined) {
    bodyParams["StripeSizeBytes"] = input.StripeSizeBytes;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputFormatConfiguration = (
  input: OutputFormatConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Serializer !== undefined) {
    bodyParams["Serializer"] = serializeAws_json1_1Serializer(
      input.Serializer,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ParquetSerDe = (
  input: ParquetSerDe,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BlockSizeBytes !== undefined) {
    bodyParams["BlockSizeBytes"] = input.BlockSizeBytes;
  }
  if (input.Compression !== undefined) {
    bodyParams["Compression"] = input.Compression;
  }
  if (input.EnableDictionaryCompression !== undefined) {
    bodyParams["EnableDictionaryCompression"] =
      input.EnableDictionaryCompression;
  }
  if (input.MaxPaddingBytes !== undefined) {
    bodyParams["MaxPaddingBytes"] = input.MaxPaddingBytes;
  }
  if (input.PageSizeBytes !== undefined) {
    bodyParams["PageSizeBytes"] = input.PageSizeBytes;
  }
  if (input.WriterVersion !== undefined) {
    bodyParams["WriterVersion"] = input.WriterVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessingConfiguration = (
  input: ProcessingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.Processors !== undefined) {
    bodyParams["Processors"] = serializeAws_json1_1ProcessorList(
      input.Processors,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Processor = (
  input: Processor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Parameters !== undefined) {
    bodyParams["Parameters"] = serializeAws_json1_1ProcessorParameterList(
      input.Parameters,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessorList = (
  input: Array<Processor>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Processor(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ProcessorParameter = (
  input: ProcessorParameter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ParameterName !== undefined) {
    bodyParams["ParameterName"] = input.ParameterName;
  }
  if (input.ParameterValue !== undefined) {
    bodyParams["ParameterValue"] = input.ParameterValue;
  }
  return bodyParams;
};

const serializeAws_json1_1ProcessorParameterList = (
  input: Array<ProcessorParameter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ProcessorParameter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PutRecordBatchInput = (
  input: PutRecordBatchInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Records !== undefined) {
    bodyParams["Records"] = serializeAws_json1_1PutRecordBatchRequestEntryList(
      input.Records,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutRecordBatchRequestEntryList = (
  input: Array<_Record>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1_Record(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PutRecordInput = (
  input: PutRecordInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Record !== undefined) {
    bodyParams["Record"] = serializeAws_json1_1_Record(input.Record, context);
  }
  return bodyParams;
};

const serializeAws_json1_1_Record = (
  input: _Record,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["Data"] = context.base64Encoder(input.Data);
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDestinationConfiguration = (
  input: RedshiftDestinationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterJDBCURL !== undefined) {
    bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
  }
  if (input.CopyCommand !== undefined) {
    bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(
      input.CopyCommand,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupConfiguration !== undefined) {
    bodyParams[
      "S3BackupConfiguration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3BackupConfiguration,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftDestinationUpdate = (
  input: RedshiftDestinationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.ClusterJDBCURL !== undefined) {
    bodyParams["ClusterJDBCURL"] = input.ClusterJDBCURL;
  }
  if (input.CopyCommand !== undefined) {
    bodyParams["CopyCommand"] = serializeAws_json1_1CopyCommand(
      input.CopyCommand,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1RedshiftRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3BackupUpdate !== undefined) {
    bodyParams["S3BackupUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3BackupUpdate,
      context
    );
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  if (input.Username !== undefined) {
    bodyParams["Username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_json1_1RedshiftRetryOptions = (
  input: RedshiftRetryOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DestinationConfiguration = (
  input: S3DestinationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DestinationUpdate = (
  input: S3DestinationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.BufferingHints !== undefined) {
    bodyParams["BufferingHints"] = serializeAws_json1_1BufferingHints(
      input.BufferingHints,
      context
    );
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.CompressionFormat !== undefined) {
    bodyParams["CompressionFormat"] = input.CompressionFormat;
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.ErrorOutputPrefix !== undefined) {
    bodyParams["ErrorOutputPrefix"] = input.ErrorOutputPrefix;
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  return bodyParams;
};

const serializeAws_json1_1SchemaConfiguration = (
  input: SchemaConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams["CatalogId"] = input.CatalogId;
  }
  if (input.DatabaseName !== undefined) {
    bodyParams["DatabaseName"] = input.DatabaseName;
  }
  if (input.Region !== undefined) {
    bodyParams["Region"] = input.Region;
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.VersionId !== undefined) {
    bodyParams["VersionId"] = input.VersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1Serializer = (
  input: Serializer,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrcSerDe !== undefined) {
    bodyParams["OrcSerDe"] = serializeAws_json1_1OrcSerDe(
      input.OrcSerDe,
      context
    );
  }
  if (input.ParquetSerDe !== undefined) {
    bodyParams["ParquetSerDe"] = serializeAws_json1_1ParquetSerDe(
      input.ParquetSerDe,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkDestinationConfiguration = (
  input: SplunkDestinationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
    bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
      input.HECAcknowledgmentTimeoutInSeconds;
  }
  if (input.HECEndpoint !== undefined) {
    bodyParams["HECEndpoint"] = input.HECEndpoint;
  }
  if (input.HECEndpointType !== undefined) {
    bodyParams["HECEndpointType"] = input.HECEndpointType;
  }
  if (input.HECToken !== undefined) {
    bodyParams["HECToken"] = input.HECToken;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DestinationConfiguration(
      input.S3Configuration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkDestinationUpdate = (
  input: SplunkDestinationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.HECAcknowledgmentTimeoutInSeconds !== undefined) {
    bodyParams["HECAcknowledgmentTimeoutInSeconds"] =
      input.HECAcknowledgmentTimeoutInSeconds;
  }
  if (input.HECEndpoint !== undefined) {
    bodyParams["HECEndpoint"] = input.HECEndpoint;
  }
  if (input.HECEndpointType !== undefined) {
    bodyParams["HECEndpointType"] = input.HECEndpointType;
  }
  if (input.HECToken !== undefined) {
    bodyParams["HECToken"] = input.HECToken;
  }
  if (input.ProcessingConfiguration !== undefined) {
    bodyParams[
      "ProcessingConfiguration"
    ] = serializeAws_json1_1ProcessingConfiguration(
      input.ProcessingConfiguration,
      context
    );
  }
  if (input.RetryOptions !== undefined) {
    bodyParams["RetryOptions"] = serializeAws_json1_1SplunkRetryOptions(
      input.RetryOptions,
      context
    );
  }
  if (input.S3BackupMode !== undefined) {
    bodyParams["S3BackupMode"] = input.S3BackupMode;
  }
  if (input.S3Update !== undefined) {
    bodyParams["S3Update"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3Update,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplunkRetryOptions = (
  input: SplunkRetryOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DurationInSeconds !== undefined) {
    bodyParams["DurationInSeconds"] = input.DurationInSeconds;
  }
  return bodyParams;
};

const serializeAws_json1_1StartDeliveryStreamEncryptionInput = (
  input: StartDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamEncryptionConfigurationInput !== undefined) {
    bodyParams[
      "DeliveryStreamEncryptionConfigurationInput"
    ] = serializeAws_json1_1DeliveryStreamEncryptionConfigurationInput(
      input.DeliveryStreamEncryptionConfigurationInput,
      context
    );
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDeliveryStreamEncryptionInput = (
  input: StopDeliveryStreamEncryptionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagDeliveryStreamInput = (
  input: TagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagDeliveryStreamInputTagList(
      input.Tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TagDeliveryStreamInputTagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UntagDeliveryStreamInput = (
  input: UntagDeliveryStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDestinationInput = (
  input: UpdateDestinationInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CurrentDeliveryStreamVersionId !== undefined) {
    bodyParams["CurrentDeliveryStreamVersionId"] =
      input.CurrentDeliveryStreamVersionId;
  }
  if (input.DeliveryStreamName !== undefined) {
    bodyParams["DeliveryStreamName"] = input.DeliveryStreamName;
  }
  if (input.DestinationId !== undefined) {
    bodyParams["DestinationId"] = input.DestinationId;
  }
  if (input.ElasticsearchDestinationUpdate !== undefined) {
    bodyParams[
      "ElasticsearchDestinationUpdate"
    ] = serializeAws_json1_1ElasticsearchDestinationUpdate(
      input.ElasticsearchDestinationUpdate,
      context
    );
  }
  if (input.ExtendedS3DestinationUpdate !== undefined) {
    bodyParams[
      "ExtendedS3DestinationUpdate"
    ] = serializeAws_json1_1ExtendedS3DestinationUpdate(
      input.ExtendedS3DestinationUpdate,
      context
    );
  }
  if (input.RedshiftDestinationUpdate !== undefined) {
    bodyParams[
      "RedshiftDestinationUpdate"
    ] = serializeAws_json1_1RedshiftDestinationUpdate(
      input.RedshiftDestinationUpdate,
      context
    );
  }
  if (input.S3DestinationUpdate !== undefined) {
    bodyParams["S3DestinationUpdate"] = serializeAws_json1_1S3DestinationUpdate(
      input.S3DestinationUpdate,
      context
    );
  }
  if (input.SplunkDestinationUpdate !== undefined) {
    bodyParams[
      "SplunkDestinationUpdate"
    ] = serializeAws_json1_1SplunkDestinationUpdate(
      input.SplunkDestinationUpdate,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1BufferingHints = (
  output: any,
  context: __SerdeContext
): BufferingHints => {
  let contents: any = {
    __type: "BufferingHints",
    IntervalInSeconds: undefined,
    SizeInMBs: undefined
  };
  if (
    output.IntervalInSeconds !== undefined &&
    output.IntervalInSeconds !== null
  ) {
    contents.IntervalInSeconds = output.IntervalInSeconds;
  }
  if (output.SizeInMBs !== undefined && output.SizeInMBs !== null) {
    contents.SizeInMBs = output.SizeInMBs;
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchLoggingOptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptions => {
  let contents: any = {
    __type: "CloudWatchLoggingOptions",
    Enabled: undefined,
    LogGroupName: undefined,
    LogStreamName: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.LogGroupName !== undefined && output.LogGroupName !== null) {
    contents.LogGroupName = output.LogGroupName;
  }
  if (output.LogStreamName !== undefined && output.LogStreamName !== null) {
    contents.LogStreamName = output.LogStreamName;
  }
  return contents;
};

const deserializeAws_json1_1ColumnToJsonKeyMappings = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CopyCommand = (
  output: any,
  context: __SerdeContext
): CopyCommand => {
  let contents: any = {
    __type: "CopyCommand",
    CopyOptions: undefined,
    DataTableColumns: undefined,
    DataTableName: undefined
  };
  if (output.CopyOptions !== undefined && output.CopyOptions !== null) {
    contents.CopyOptions = output.CopyOptions;
  }
  if (
    output.DataTableColumns !== undefined &&
    output.DataTableColumns !== null
  ) {
    contents.DataTableColumns = output.DataTableColumns;
  }
  if (output.DataTableName !== undefined && output.DataTableName !== null) {
    contents.DataTableName = output.DataTableName;
  }
  return contents;
};

const deserializeAws_json1_1CreateDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): CreateDeliveryStreamOutput => {
  let contents: any = {
    __type: "CreateDeliveryStreamOutput",
    DeliveryStreamARN: undefined
  };
  if (
    output.DeliveryStreamARN !== undefined &&
    output.DeliveryStreamARN !== null
  ) {
    contents.DeliveryStreamARN = output.DeliveryStreamARN;
  }
  return contents;
};

const deserializeAws_json1_1DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  let contents: any = {
    __type: "DataFormatConversionConfiguration",
    Enabled: undefined,
    InputFormatConfiguration: undefined,
    OutputFormatConfiguration: undefined,
    SchemaConfiguration: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (
    output.InputFormatConfiguration !== undefined &&
    output.InputFormatConfiguration !== null
  ) {
    contents.InputFormatConfiguration = deserializeAws_json1_1InputFormatConfiguration(
      output.InputFormatConfiguration,
      context
    );
  }
  if (
    output.OutputFormatConfiguration !== undefined &&
    output.OutputFormatConfiguration !== null
  ) {
    contents.OutputFormatConfiguration = deserializeAws_json1_1OutputFormatConfiguration(
      output.OutputFormatConfiguration,
      context
    );
  }
  if (
    output.SchemaConfiguration !== undefined &&
    output.SchemaConfiguration !== null
  ) {
    contents.SchemaConfiguration = deserializeAws_json1_1SchemaConfiguration(
      output.SchemaConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DeleteDeliveryStreamOutput => {
  let contents: any = {
    __type: "DeleteDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeliveryStreamDescription = (
  output: any,
  context: __SerdeContext
): DeliveryStreamDescription => {
  let contents: any = {
    __type: "DeliveryStreamDescription",
    CreateTimestamp: undefined,
    DeliveryStreamARN: undefined,
    DeliveryStreamEncryptionConfiguration: undefined,
    DeliveryStreamName: undefined,
    DeliveryStreamStatus: undefined,
    DeliveryStreamType: undefined,
    Destinations: undefined,
    FailureDescription: undefined,
    HasMoreDestinations: undefined,
    LastUpdateTimestamp: undefined,
    Source: undefined,
    VersionId: undefined
  };
  if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
    contents.CreateTimestamp = new Date(
      Math.round(output.CreateTimestamp * 1000)
    );
  }
  if (
    output.DeliveryStreamARN !== undefined &&
    output.DeliveryStreamARN !== null
  ) {
    contents.DeliveryStreamARN = output.DeliveryStreamARN;
  }
  if (
    output.DeliveryStreamEncryptionConfiguration !== undefined &&
    output.DeliveryStreamEncryptionConfiguration !== null
  ) {
    contents.DeliveryStreamEncryptionConfiguration = deserializeAws_json1_1DeliveryStreamEncryptionConfiguration(
      output.DeliveryStreamEncryptionConfiguration,
      context
    );
  }
  if (
    output.DeliveryStreamName !== undefined &&
    output.DeliveryStreamName !== null
  ) {
    contents.DeliveryStreamName = output.DeliveryStreamName;
  }
  if (
    output.DeliveryStreamStatus !== undefined &&
    output.DeliveryStreamStatus !== null
  ) {
    contents.DeliveryStreamStatus = output.DeliveryStreamStatus;
  }
  if (
    output.DeliveryStreamType !== undefined &&
    output.DeliveryStreamType !== null
  ) {
    contents.DeliveryStreamType = output.DeliveryStreamType;
  }
  if (output.Destinations !== undefined && output.Destinations !== null) {
    contents.Destinations = deserializeAws_json1_1DestinationDescriptionList(
      output.Destinations,
      context
    );
  }
  if (
    output.FailureDescription !== undefined &&
    output.FailureDescription !== null
  ) {
    contents.FailureDescription = deserializeAws_json1_1FailureDescription(
      output.FailureDescription,
      context
    );
  }
  if (
    output.HasMoreDestinations !== undefined &&
    output.HasMoreDestinations !== null
  ) {
    contents.HasMoreDestinations = output.HasMoreDestinations;
  }
  if (
    output.LastUpdateTimestamp !== undefined &&
    output.LastUpdateTimestamp !== null
  ) {
    contents.LastUpdateTimestamp = new Date(
      Math.round(output.LastUpdateTimestamp * 1000)
    );
  }
  if (output.Source !== undefined && output.Source !== null) {
    contents.Source = deserializeAws_json1_1SourceDescription(
      output.Source,
      context
    );
  }
  if (output.VersionId !== undefined && output.VersionId !== null) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_json1_1DeliveryStreamEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): DeliveryStreamEncryptionConfiguration => {
  let contents: any = {
    __type: "DeliveryStreamEncryptionConfiguration",
    FailureDescription: undefined,
    KeyARN: undefined,
    KeyType: undefined,
    Status: undefined
  };
  if (
    output.FailureDescription !== undefined &&
    output.FailureDescription !== null
  ) {
    contents.FailureDescription = deserializeAws_json1_1FailureDescription(
      output.FailureDescription,
      context
    );
  }
  if (output.KeyARN !== undefined && output.KeyARN !== null) {
    contents.KeyARN = output.KeyARN;
  }
  if (output.KeyType !== undefined && output.KeyType !== null) {
    contents.KeyType = output.KeyType;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DeliveryStreamNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DescribeDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeDeliveryStreamOutput => {
  let contents: any = {
    __type: "DescribeDeliveryStreamOutput",
    DeliveryStreamDescription: undefined
  };
  if (
    output.DeliveryStreamDescription !== undefined &&
    output.DeliveryStreamDescription !== null
  ) {
    contents.DeliveryStreamDescription = deserializeAws_json1_1DeliveryStreamDescription(
      output.DeliveryStreamDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Deserializer = (
  output: any,
  context: __SerdeContext
): Deserializer => {
  let contents: any = {
    __type: "Deserializer",
    HiveJsonSerDe: undefined,
    OpenXJsonSerDe: undefined
  };
  if (output.HiveJsonSerDe !== undefined && output.HiveJsonSerDe !== null) {
    contents.HiveJsonSerDe = deserializeAws_json1_1HiveJsonSerDe(
      output.HiveJsonSerDe,
      context
    );
  }
  if (output.OpenXJsonSerDe !== undefined && output.OpenXJsonSerDe !== null) {
    contents.OpenXJsonSerDe = deserializeAws_json1_1OpenXJsonSerDe(
      output.OpenXJsonSerDe,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationDescription = (
  output: any,
  context: __SerdeContext
): DestinationDescription => {
  let contents: any = {
    __type: "DestinationDescription",
    DestinationId: undefined,
    ElasticsearchDestinationDescription: undefined,
    ExtendedS3DestinationDescription: undefined,
    RedshiftDestinationDescription: undefined,
    S3DestinationDescription: undefined,
    SplunkDestinationDescription: undefined
  };
  if (output.DestinationId !== undefined && output.DestinationId !== null) {
    contents.DestinationId = output.DestinationId;
  }
  if (
    output.ElasticsearchDestinationDescription !== undefined &&
    output.ElasticsearchDestinationDescription !== null
  ) {
    contents.ElasticsearchDestinationDescription = deserializeAws_json1_1ElasticsearchDestinationDescription(
      output.ElasticsearchDestinationDescription,
      context
    );
  }
  if (
    output.ExtendedS3DestinationDescription !== undefined &&
    output.ExtendedS3DestinationDescription !== null
  ) {
    contents.ExtendedS3DestinationDescription = deserializeAws_json1_1ExtendedS3DestinationDescription(
      output.ExtendedS3DestinationDescription,
      context
    );
  }
  if (
    output.RedshiftDestinationDescription !== undefined &&
    output.RedshiftDestinationDescription !== null
  ) {
    contents.RedshiftDestinationDescription = deserializeAws_json1_1RedshiftDestinationDescription(
      output.RedshiftDestinationDescription,
      context
    );
  }
  if (
    output.S3DestinationDescription !== undefined &&
    output.S3DestinationDescription !== null
  ) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (
    output.SplunkDestinationDescription !== undefined &&
    output.SplunkDestinationDescription !== null
  ) {
    contents.SplunkDestinationDescription = deserializeAws_json1_1SplunkDestinationDescription(
      output.SplunkDestinationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<DestinationDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DestinationDescription(entry, context)
  );
};

const deserializeAws_json1_1ElasticsearchBufferingHints = (
  output: any,
  context: __SerdeContext
): ElasticsearchBufferingHints => {
  let contents: any = {
    __type: "ElasticsearchBufferingHints",
    IntervalInSeconds: undefined,
    SizeInMBs: undefined
  };
  if (
    output.IntervalInSeconds !== undefined &&
    output.IntervalInSeconds !== null
  ) {
    contents.IntervalInSeconds = output.IntervalInSeconds;
  }
  if (output.SizeInMBs !== undefined && output.SizeInMBs !== null) {
    contents.SizeInMBs = output.SizeInMBs;
  }
  return contents;
};

const deserializeAws_json1_1ElasticsearchDestinationDescription = (
  output: any,
  context: __SerdeContext
): ElasticsearchDestinationDescription => {
  let contents: any = {
    __type: "ElasticsearchDestinationDescription",
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    ClusterEndpoint: undefined,
    DomainARN: undefined,
    IndexName: undefined,
    IndexRotationPeriod: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    RoleARN: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined,
    TypeName: undefined
  };
  if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
    contents.BufferingHints = deserializeAws_json1_1ElasticsearchBufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (
    output.CloudWatchLoggingOptions !== undefined &&
    output.CloudWatchLoggingOptions !== null
  ) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.ClusterEndpoint !== undefined && output.ClusterEndpoint !== null) {
    contents.ClusterEndpoint = output.ClusterEndpoint;
  }
  if (output.DomainARN !== undefined && output.DomainARN !== null) {
    contents.DomainARN = output.DomainARN;
  }
  if (output.IndexName !== undefined && output.IndexName !== null) {
    contents.IndexName = output.IndexName;
  }
  if (
    output.IndexRotationPeriod !== undefined &&
    output.IndexRotationPeriod !== null
  ) {
    contents.IndexRotationPeriod = output.IndexRotationPeriod;
  }
  if (
    output.ProcessingConfiguration !== undefined &&
    output.ProcessingConfiguration !== null
  ) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
    contents.RetryOptions = deserializeAws_json1_1ElasticsearchRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (
    output.S3DestinationDescription !== undefined &&
    output.S3DestinationDescription !== null
  ) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (output.TypeName !== undefined && output.TypeName !== null) {
    contents.TypeName = output.TypeName;
  }
  return contents;
};

const deserializeAws_json1_1ElasticsearchRetryOptions = (
  output: any,
  context: __SerdeContext
): ElasticsearchRetryOptions => {
  let contents: any = {
    __type: "ElasticsearchRetryOptions",
    DurationInSeconds: undefined
  };
  if (
    output.DurationInSeconds !== undefined &&
    output.DurationInSeconds !== null
  ) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  let contents: any = {
    __type: "EncryptionConfiguration",
    KMSEncryptionConfig: undefined,
    NoEncryptionConfig: undefined
  };
  if (
    output.KMSEncryptionConfig !== undefined &&
    output.KMSEncryptionConfig !== null
  ) {
    contents.KMSEncryptionConfig = deserializeAws_json1_1KMSEncryptionConfig(
      output.KMSEncryptionConfig,
      context
    );
  }
  if (
    output.NoEncryptionConfig !== undefined &&
    output.NoEncryptionConfig !== null
  ) {
    contents.NoEncryptionConfig = output.NoEncryptionConfig;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  let contents: any = {
    __type: "ExtendedS3DestinationDescription",
    BucketARN: undefined,
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    CompressionFormat: undefined,
    DataFormatConversionConfiguration: undefined,
    EncryptionConfiguration: undefined,
    ErrorOutputPrefix: undefined,
    Prefix: undefined,
    ProcessingConfiguration: undefined,
    RoleARN: undefined,
    S3BackupDescription: undefined,
    S3BackupMode: undefined
  };
  if (output.BucketARN !== undefined && output.BucketARN !== null) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
    contents.BufferingHints = deserializeAws_json1_1BufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (
    output.CloudWatchLoggingOptions !== undefined &&
    output.CloudWatchLoggingOptions !== null
  ) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (
    output.CompressionFormat !== undefined &&
    output.CompressionFormat !== null
  ) {
    contents.CompressionFormat = output.CompressionFormat;
  }
  if (
    output.DataFormatConversionConfiguration !== undefined &&
    output.DataFormatConversionConfiguration !== null
  ) {
    contents.DataFormatConversionConfiguration = deserializeAws_json1_1DataFormatConversionConfiguration(
      output.DataFormatConversionConfiguration,
      context
    );
  }
  if (
    output.EncryptionConfiguration !== undefined &&
    output.EncryptionConfiguration !== null
  ) {
    contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (
    output.ErrorOutputPrefix !== undefined &&
    output.ErrorOutputPrefix !== null
  ) {
    contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
  }
  if (output.Prefix !== undefined && output.Prefix !== null) {
    contents.Prefix = output.Prefix;
  }
  if (
    output.ProcessingConfiguration !== undefined &&
    output.ProcessingConfiguration !== null
  ) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (
    output.S3BackupDescription !== undefined &&
    output.S3BackupDescription !== null
  ) {
    contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3BackupDescription,
      context
    );
  }
  if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  return contents;
};

const deserializeAws_json1_1FailureDescription = (
  output: any,
  context: __SerdeContext
): FailureDescription => {
  let contents: any = {
    __type: "FailureDescription",
    Details: undefined,
    Type: undefined
  };
  if (output.Details !== undefined && output.Details !== null) {
    contents.Details = output.Details;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1HiveJsonSerDe = (
  output: any,
  context: __SerdeContext
): HiveJsonSerDe => {
  let contents: any = {
    __type: "HiveJsonSerDe",
    TimestampFormats: undefined
  };
  if (
    output.TimestampFormats !== undefined &&
    output.TimestampFormats !== null
  ) {
    contents.TimestampFormats = deserializeAws_json1_1ListOfNonEmptyStrings(
      output.TimestampFormats,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): InputFormatConfiguration => {
  let contents: any = {
    __type: "InputFormatConfiguration",
    Deserializer: undefined
  };
  if (output.Deserializer !== undefined && output.Deserializer !== null) {
    contents.Deserializer = deserializeAws_json1_1Deserializer(
      output.Deserializer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  let contents: any = {
    __type: "InvalidArgumentException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKMSResourceException = (
  output: any,
  context: __SerdeContext
): InvalidKMSResourceException => {
  let contents: any = {
    __type: "InvalidKMSResourceException",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSEncryptionConfig = (
  output: any,
  context: __SerdeContext
): KMSEncryptionConfig => {
  let contents: any = {
    __type: "KMSEncryptionConfig",
    AWSKMSKeyARN: undefined
  };
  if (output.AWSKMSKeyARN !== undefined && output.AWSKMSKeyARN !== null) {
    contents.AWSKMSKeyARN = output.AWSKMSKeyARN;
  }
  return contents;
};

const deserializeAws_json1_1KinesisStreamSourceDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamSourceDescription => {
  let contents: any = {
    __type: "KinesisStreamSourceDescription",
    DeliveryStartTimestamp: undefined,
    KinesisStreamARN: undefined,
    RoleARN: undefined
  };
  if (
    output.DeliveryStartTimestamp !== undefined &&
    output.DeliveryStartTimestamp !== null
  ) {
    contents.DeliveryStartTimestamp = new Date(
      Math.round(output.DeliveryStartTimestamp * 1000)
    );
  }
  if (
    output.KinesisStreamARN !== undefined &&
    output.KinesisStreamARN !== null
  ) {
    contents.KinesisStreamARN = output.KinesisStreamARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListDeliveryStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListDeliveryStreamsOutput => {
  let contents: any = {
    __type: "ListDeliveryStreamsOutput",
    DeliveryStreamNames: undefined,
    HasMoreDeliveryStreams: undefined
  };
  if (
    output.DeliveryStreamNames !== undefined &&
    output.DeliveryStreamNames !== null
  ) {
    contents.DeliveryStreamNames = deserializeAws_json1_1DeliveryStreamNameList(
      output.DeliveryStreamNames,
      context
    );
  }
  if (
    output.HasMoreDeliveryStreams !== undefined &&
    output.HasMoreDeliveryStreams !== null
  ) {
    contents.HasMoreDeliveryStreams = output.HasMoreDeliveryStreams;
  }
  return contents;
};

const deserializeAws_json1_1ListOfNonEmptyStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForDeliveryStreamOutput => {
  let contents: any = {
    __type: "ListTagsForDeliveryStreamOutput",
    HasMoreTags: undefined,
    Tags: undefined
  };
  if (output.HasMoreTags !== undefined && output.HasMoreTags !== null) {
    contents.HasMoreTags = output.HasMoreTags;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList(
      output.Tags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForDeliveryStreamOutputTagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1OpenXJsonSerDe = (
  output: any,
  context: __SerdeContext
): OpenXJsonSerDe => {
  let contents: any = {
    __type: "OpenXJsonSerDe",
    CaseInsensitive: undefined,
    ColumnToJsonKeyMappings: undefined,
    ConvertDotsInJsonKeysToUnderscores: undefined
  };
  if (output.CaseInsensitive !== undefined && output.CaseInsensitive !== null) {
    contents.CaseInsensitive = output.CaseInsensitive;
  }
  if (
    output.ColumnToJsonKeyMappings !== undefined &&
    output.ColumnToJsonKeyMappings !== null
  ) {
    contents.ColumnToJsonKeyMappings = deserializeAws_json1_1ColumnToJsonKeyMappings(
      output.ColumnToJsonKeyMappings,
      context
    );
  }
  if (
    output.ConvertDotsInJsonKeysToUnderscores !== undefined &&
    output.ConvertDotsInJsonKeysToUnderscores !== null
  ) {
    contents.ConvertDotsInJsonKeysToUnderscores =
      output.ConvertDotsInJsonKeysToUnderscores;
  }
  return contents;
};

const deserializeAws_json1_1OrcSerDe = (
  output: any,
  context: __SerdeContext
): OrcSerDe => {
  let contents: any = {
    __type: "OrcSerDe",
    BlockSizeBytes: undefined,
    BloomFilterColumns: undefined,
    BloomFilterFalsePositiveProbability: undefined,
    Compression: undefined,
    DictionaryKeyThreshold: undefined,
    EnablePadding: undefined,
    FormatVersion: undefined,
    PaddingTolerance: undefined,
    RowIndexStride: undefined,
    StripeSizeBytes: undefined
  };
  if (output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null) {
    contents.BlockSizeBytes = output.BlockSizeBytes;
  }
  if (
    output.BloomFilterColumns !== undefined &&
    output.BloomFilterColumns !== null
  ) {
    contents.BloomFilterColumns = deserializeAws_json1_1ListOfNonEmptyStringsWithoutWhitespace(
      output.BloomFilterColumns,
      context
    );
  }
  if (
    output.BloomFilterFalsePositiveProbability !== undefined &&
    output.BloomFilterFalsePositiveProbability !== null
  ) {
    contents.BloomFilterFalsePositiveProbability =
      output.BloomFilterFalsePositiveProbability;
  }
  if (output.Compression !== undefined && output.Compression !== null) {
    contents.Compression = output.Compression;
  }
  if (
    output.DictionaryKeyThreshold !== undefined &&
    output.DictionaryKeyThreshold !== null
  ) {
    contents.DictionaryKeyThreshold = output.DictionaryKeyThreshold;
  }
  if (output.EnablePadding !== undefined && output.EnablePadding !== null) {
    contents.EnablePadding = output.EnablePadding;
  }
  if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
    contents.FormatVersion = output.FormatVersion;
  }
  if (
    output.PaddingTolerance !== undefined &&
    output.PaddingTolerance !== null
  ) {
    contents.PaddingTolerance = output.PaddingTolerance;
  }
  if (output.RowIndexStride !== undefined && output.RowIndexStride !== null) {
    contents.RowIndexStride = output.RowIndexStride;
  }
  if (output.StripeSizeBytes !== undefined && output.StripeSizeBytes !== null) {
    contents.StripeSizeBytes = output.StripeSizeBytes;
  }
  return contents;
};

const deserializeAws_json1_1OutputFormatConfiguration = (
  output: any,
  context: __SerdeContext
): OutputFormatConfiguration => {
  let contents: any = {
    __type: "OutputFormatConfiguration",
    Serializer: undefined
  };
  if (output.Serializer !== undefined && output.Serializer !== null) {
    contents.Serializer = deserializeAws_json1_1Serializer(
      output.Serializer,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ParquetSerDe = (
  output: any,
  context: __SerdeContext
): ParquetSerDe => {
  let contents: any = {
    __type: "ParquetSerDe",
    BlockSizeBytes: undefined,
    Compression: undefined,
    EnableDictionaryCompression: undefined,
    MaxPaddingBytes: undefined,
    PageSizeBytes: undefined,
    WriterVersion: undefined
  };
  if (output.BlockSizeBytes !== undefined && output.BlockSizeBytes !== null) {
    contents.BlockSizeBytes = output.BlockSizeBytes;
  }
  if (output.Compression !== undefined && output.Compression !== null) {
    contents.Compression = output.Compression;
  }
  if (
    output.EnableDictionaryCompression !== undefined &&
    output.EnableDictionaryCompression !== null
  ) {
    contents.EnableDictionaryCompression = output.EnableDictionaryCompression;
  }
  if (output.MaxPaddingBytes !== undefined && output.MaxPaddingBytes !== null) {
    contents.MaxPaddingBytes = output.MaxPaddingBytes;
  }
  if (output.PageSizeBytes !== undefined && output.PageSizeBytes !== null) {
    contents.PageSizeBytes = output.PageSizeBytes;
  }
  if (output.WriterVersion !== undefined && output.WriterVersion !== null) {
    contents.WriterVersion = output.WriterVersion;
  }
  return contents;
};

const deserializeAws_json1_1ProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): ProcessingConfiguration => {
  let contents: any = {
    __type: "ProcessingConfiguration",
    Enabled: undefined,
    Processors: undefined
  };
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (output.Processors !== undefined && output.Processors !== null) {
    contents.Processors = deserializeAws_json1_1ProcessorList(
      output.Processors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Processor = (
  output: any,
  context: __SerdeContext
): Processor => {
  let contents: any = {
    __type: "Processor",
    Parameters: undefined,
    Type: undefined
  };
  if (output.Parameters !== undefined && output.Parameters !== null) {
    contents.Parameters = deserializeAws_json1_1ProcessorParameterList(
      output.Parameters,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ProcessorList = (
  output: any,
  context: __SerdeContext
): Array<Processor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Processor(entry, context)
  );
};

const deserializeAws_json1_1ProcessorParameter = (
  output: any,
  context: __SerdeContext
): ProcessorParameter => {
  let contents: any = {
    __type: "ProcessorParameter",
    ParameterName: undefined,
    ParameterValue: undefined
  };
  if (output.ParameterName !== undefined && output.ParameterName !== null) {
    contents.ParameterName = output.ParameterName;
  }
  if (output.ParameterValue !== undefined && output.ParameterValue !== null) {
    contents.ParameterValue = output.ParameterValue;
  }
  return contents;
};

const deserializeAws_json1_1ProcessorParameterList = (
  output: any,
  context: __SerdeContext
): Array<ProcessorParameter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ProcessorParameter(entry, context)
  );
};

const deserializeAws_json1_1PutRecordBatchOutput = (
  output: any,
  context: __SerdeContext
): PutRecordBatchOutput => {
  let contents: any = {
    __type: "PutRecordBatchOutput",
    Encrypted: undefined,
    FailedPutCount: undefined,
    RequestResponses: undefined
  };
  if (output.Encrypted !== undefined && output.Encrypted !== null) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.FailedPutCount !== undefined && output.FailedPutCount !== null) {
    contents.FailedPutCount = output.FailedPutCount;
  }
  if (
    output.RequestResponses !== undefined &&
    output.RequestResponses !== null
  ) {
    contents.RequestResponses = deserializeAws_json1_1PutRecordBatchResponseEntryList(
      output.RequestResponses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutRecordBatchResponseEntry = (
  output: any,
  context: __SerdeContext
): PutRecordBatchResponseEntry => {
  let contents: any = {
    __type: "PutRecordBatchResponseEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    RecordId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.RecordId !== undefined && output.RecordId !== null) {
    contents.RecordId = output.RecordId;
  }
  return contents;
};

const deserializeAws_json1_1PutRecordBatchResponseEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutRecordBatchResponseEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutRecordBatchResponseEntry(entry, context)
  );
};

const deserializeAws_json1_1PutRecordOutput = (
  output: any,
  context: __SerdeContext
): PutRecordOutput => {
  let contents: any = {
    __type: "PutRecordOutput",
    Encrypted: undefined,
    RecordId: undefined
  };
  if (output.Encrypted !== undefined && output.Encrypted !== null) {
    contents.Encrypted = output.Encrypted;
  }
  if (output.RecordId !== undefined && output.RecordId !== null) {
    contents.RecordId = output.RecordId;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftDestinationDescription = (
  output: any,
  context: __SerdeContext
): RedshiftDestinationDescription => {
  let contents: any = {
    __type: "RedshiftDestinationDescription",
    CloudWatchLoggingOptions: undefined,
    ClusterJDBCURL: undefined,
    CopyCommand: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    RoleARN: undefined,
    S3BackupDescription: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined,
    Username: undefined
  };
  if (
    output.CloudWatchLoggingOptions !== undefined &&
    output.CloudWatchLoggingOptions !== null
  ) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (output.ClusterJDBCURL !== undefined && output.ClusterJDBCURL !== null) {
    contents.ClusterJDBCURL = output.ClusterJDBCURL;
  }
  if (output.CopyCommand !== undefined && output.CopyCommand !== null) {
    contents.CopyCommand = deserializeAws_json1_1CopyCommand(
      output.CopyCommand,
      context
    );
  }
  if (
    output.ProcessingConfiguration !== undefined &&
    output.ProcessingConfiguration !== null
  ) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
    contents.RetryOptions = deserializeAws_json1_1RedshiftRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (
    output.S3BackupDescription !== undefined &&
    output.S3BackupDescription !== null
  ) {
    contents.S3BackupDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3BackupDescription,
      context
    );
  }
  if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (
    output.S3DestinationDescription !== undefined &&
    output.S3DestinationDescription !== null
  ) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  if (output.Username !== undefined && output.Username !== null) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_json1_1RedshiftRetryOptions = (
  output: any,
  context: __SerdeContext
): RedshiftRetryOptions => {
  let contents: any = {
    __type: "RedshiftRetryOptions",
    DurationInSeconds: undefined
  };
  if (
    output.DurationInSeconds !== undefined &&
    output.DurationInSeconds !== null
  ) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1S3DestinationDescription = (
  output: any,
  context: __SerdeContext
): S3DestinationDescription => {
  let contents: any = {
    __type: "S3DestinationDescription",
    BucketARN: undefined,
    BufferingHints: undefined,
    CloudWatchLoggingOptions: undefined,
    CompressionFormat: undefined,
    EncryptionConfiguration: undefined,
    ErrorOutputPrefix: undefined,
    Prefix: undefined,
    RoleARN: undefined
  };
  if (output.BucketARN !== undefined && output.BucketARN !== null) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.BufferingHints !== undefined && output.BufferingHints !== null) {
    contents.BufferingHints = deserializeAws_json1_1BufferingHints(
      output.BufferingHints,
      context
    );
  }
  if (
    output.CloudWatchLoggingOptions !== undefined &&
    output.CloudWatchLoggingOptions !== null
  ) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (
    output.CompressionFormat !== undefined &&
    output.CompressionFormat !== null
  ) {
    contents.CompressionFormat = output.CompressionFormat;
  }
  if (
    output.EncryptionConfiguration !== undefined &&
    output.EncryptionConfiguration !== null
  ) {
    contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (
    output.ErrorOutputPrefix !== undefined &&
    output.ErrorOutputPrefix !== null
  ) {
    contents.ErrorOutputPrefix = output.ErrorOutputPrefix;
  }
  if (output.Prefix !== undefined && output.Prefix !== null) {
    contents.Prefix = output.Prefix;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1SchemaConfiguration = (
  output: any,
  context: __SerdeContext
): SchemaConfiguration => {
  let contents: any = {
    __type: "SchemaConfiguration",
    CatalogId: undefined,
    DatabaseName: undefined,
    Region: undefined,
    RoleARN: undefined,
    TableName: undefined,
    VersionId: undefined
  };
  if (output.CatalogId !== undefined && output.CatalogId !== null) {
    contents.CatalogId = output.CatalogId;
  }
  if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Region !== undefined && output.Region !== null) {
    contents.Region = output.Region;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  if (output.VersionId !== undefined && output.VersionId !== null) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_json1_1Serializer = (
  output: any,
  context: __SerdeContext
): Serializer => {
  let contents: any = {
    __type: "Serializer",
    OrcSerDe: undefined,
    ParquetSerDe: undefined
  };
  if (output.OrcSerDe !== undefined && output.OrcSerDe !== null) {
    contents.OrcSerDe = deserializeAws_json1_1OrcSerDe(
      output.OrcSerDe,
      context
    );
  }
  if (output.ParquetSerDe !== undefined && output.ParquetSerDe !== null) {
    contents.ParquetSerDe = deserializeAws_json1_1ParquetSerDe(
      output.ParquetSerDe,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SourceDescription = (
  output: any,
  context: __SerdeContext
): SourceDescription => {
  let contents: any = {
    __type: "SourceDescription",
    KinesisStreamSourceDescription: undefined
  };
  if (
    output.KinesisStreamSourceDescription !== undefined &&
    output.KinesisStreamSourceDescription !== null
  ) {
    contents.KinesisStreamSourceDescription = deserializeAws_json1_1KinesisStreamSourceDescription(
      output.KinesisStreamSourceDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SplunkDestinationDescription = (
  output: any,
  context: __SerdeContext
): SplunkDestinationDescription => {
  let contents: any = {
    __type: "SplunkDestinationDescription",
    CloudWatchLoggingOptions: undefined,
    HECAcknowledgmentTimeoutInSeconds: undefined,
    HECEndpoint: undefined,
    HECEndpointType: undefined,
    HECToken: undefined,
    ProcessingConfiguration: undefined,
    RetryOptions: undefined,
    S3BackupMode: undefined,
    S3DestinationDescription: undefined
  };
  if (
    output.CloudWatchLoggingOptions !== undefined &&
    output.CloudWatchLoggingOptions !== null
  ) {
    contents.CloudWatchLoggingOptions = deserializeAws_json1_1CloudWatchLoggingOptions(
      output.CloudWatchLoggingOptions,
      context
    );
  }
  if (
    output.HECAcknowledgmentTimeoutInSeconds !== undefined &&
    output.HECAcknowledgmentTimeoutInSeconds !== null
  ) {
    contents.HECAcknowledgmentTimeoutInSeconds =
      output.HECAcknowledgmentTimeoutInSeconds;
  }
  if (output.HECEndpoint !== undefined && output.HECEndpoint !== null) {
    contents.HECEndpoint = output.HECEndpoint;
  }
  if (output.HECEndpointType !== undefined && output.HECEndpointType !== null) {
    contents.HECEndpointType = output.HECEndpointType;
  }
  if (output.HECToken !== undefined && output.HECToken !== null) {
    contents.HECToken = output.HECToken;
  }
  if (
    output.ProcessingConfiguration !== undefined &&
    output.ProcessingConfiguration !== null
  ) {
    contents.ProcessingConfiguration = deserializeAws_json1_1ProcessingConfiguration(
      output.ProcessingConfiguration,
      context
    );
  }
  if (output.RetryOptions !== undefined && output.RetryOptions !== null) {
    contents.RetryOptions = deserializeAws_json1_1SplunkRetryOptions(
      output.RetryOptions,
      context
    );
  }
  if (output.S3BackupMode !== undefined && output.S3BackupMode !== null) {
    contents.S3BackupMode = output.S3BackupMode;
  }
  if (
    output.S3DestinationDescription !== undefined &&
    output.S3DestinationDescription !== null
  ) {
    contents.S3DestinationDescription = deserializeAws_json1_1S3DestinationDescription(
      output.S3DestinationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SplunkRetryOptions = (
  output: any,
  context: __SerdeContext
): SplunkRetryOptions => {
  let contents: any = {
    __type: "SplunkRetryOptions",
    DurationInSeconds: undefined
  };
  if (
    output.DurationInSeconds !== undefined &&
    output.DurationInSeconds !== null
  ) {
    contents.DurationInSeconds = output.DurationInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1StartDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StartDeliveryStreamEncryptionOutput => {
  let contents: any = {
    __type: "StartDeliveryStreamEncryptionOutput"
  };
  return contents;
};

const deserializeAws_json1_1StopDeliveryStreamEncryptionOutput = (
  output: any,
  context: __SerdeContext
): StopDeliveryStreamEncryptionOutput => {
  let contents: any = {
    __type: "StopDeliveryStreamEncryptionOutput"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): TagDeliveryStreamOutput => {
  let contents: any = {
    __type: "TagDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1UntagDeliveryStreamOutput = (
  output: any,
  context: __SerdeContext
): UntagDeliveryStreamOutput => {
  let contents: any = {
    __type: "UntagDeliveryStreamOutput"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDestinationOutput = (
  output: any,
  context: __SerdeContext
): UpdateDestinationOutput => {
  let contents: any = {
    __type: "UpdateDestinationOutput"
  };
  return contents;
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
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
