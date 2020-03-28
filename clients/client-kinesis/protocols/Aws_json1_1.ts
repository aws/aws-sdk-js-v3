import {
  AddTagsToStreamCommandInput,
  AddTagsToStreamCommandOutput
} from "../commands/AddTagsToStreamCommand";
import {
  CreateStreamCommandInput,
  CreateStreamCommandOutput
} from "../commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput
} from "../commands/DecreaseStreamRetentionPeriodCommand";
import {
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput
} from "../commands/DeleteStreamCommand";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput
} from "../commands/DeregisterStreamConsumerCommand";
import {
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput
} from "../commands/DescribeLimitsCommand";
import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput
} from "../commands/DescribeStreamCommand";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput
} from "../commands/DescribeStreamConsumerCommand";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput
} from "../commands/DescribeStreamSummaryCommand";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput
} from "../commands/DisableEnhancedMonitoringCommand";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput
} from "../commands/EnableEnhancedMonitoringCommand";
import {
  GetRecordsCommandInput,
  GetRecordsCommandOutput
} from "../commands/GetRecordsCommand";
import {
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput
} from "../commands/GetShardIteratorCommand";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput
} from "../commands/IncreaseStreamRetentionPeriodCommand";
import {
  ListShardsCommandInput,
  ListShardsCommandOutput
} from "../commands/ListShardsCommand";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput
} from "../commands/ListStreamConsumersCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput
} from "../commands/ListStreamsCommand";
import {
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput
} from "../commands/ListTagsForStreamCommand";
import {
  MergeShardsCommandInput,
  MergeShardsCommandOutput
} from "../commands/MergeShardsCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput
} from "../commands/PutRecordCommand";
import {
  PutRecordsCommandInput,
  PutRecordsCommandOutput
} from "../commands/PutRecordsCommand";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput
} from "../commands/RegisterStreamConsumerCommand";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput
} from "../commands/RemoveTagsFromStreamCommand";
import {
  SplitShardCommandInput,
  SplitShardCommandOutput
} from "../commands/SplitShardCommand";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput
} from "../commands/StartStreamEncryptionCommand";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput
} from "../commands/StopStreamEncryptionCommand";
import {
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput
} from "../commands/SubscribeToShardCommand";
import {
  UpdateShardCountCommandInput,
  UpdateShardCountCommandOutput
} from "../commands/UpdateShardCountCommand";
import {
  AddTagsToStreamInput,
  Consumer,
  ConsumerDescription,
  CreateStreamInput,
  DecreaseStreamRetentionPeriodInput,
  DeleteStreamInput,
  DeregisterStreamConsumerInput,
  DescribeLimitsInput,
  DescribeLimitsOutput,
  DescribeStreamConsumerInput,
  DescribeStreamConsumerOutput,
  DescribeStreamInput,
  DescribeStreamOutput,
  DescribeStreamSummaryInput,
  DescribeStreamSummaryOutput,
  DisableEnhancedMonitoringInput,
  EnableEnhancedMonitoringInput,
  EnhancedMetrics,
  EnhancedMonitoringOutput,
  ExpiredIteratorException,
  ExpiredNextTokenException,
  GetRecordsInput,
  GetRecordsOutput,
  GetShardIteratorInput,
  GetShardIteratorOutput,
  HashKeyRange,
  IncreaseStreamRetentionPeriodInput,
  InternalFailureException,
  InvalidArgumentException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  LimitExceededException,
  ListShardsInput,
  ListShardsOutput,
  ListStreamConsumersInput,
  ListStreamConsumersOutput,
  ListStreamsInput,
  ListStreamsOutput,
  ListTagsForStreamInput,
  ListTagsForStreamOutput,
  MergeShardsInput,
  MetricsName,
  ProvisionedThroughputExceededException,
  PutRecordInput,
  PutRecordOutput,
  PutRecordsInput,
  PutRecordsOutput,
  PutRecordsRequestEntry,
  PutRecordsResultEntry,
  RegisterStreamConsumerInput,
  RegisterStreamConsumerOutput,
  RemoveTagsFromStreamInput,
  ResourceInUseException,
  ResourceNotFoundException,
  SequenceNumberRange,
  Shard,
  SplitShardInput,
  StartStreamEncryptionInput,
  StartingPosition,
  StopStreamEncryptionInput,
  StreamDescription,
  StreamDescriptionSummary,
  SubscribeToShardEvent,
  SubscribeToShardEventStream,
  SubscribeToShardInput,
  SubscribeToShardOutput,
  Tag,
  UpdateShardCountInput,
  UpdateShardCountOutput,
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

export async function serializeAws_json1_1AddTagsToStreamCommand(
  input: AddTagsToStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.AddTagsToStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateStreamCommand(
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.CreateStream";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DecreaseStreamRetentionPeriodCommand(
  input: DecreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DecreaseStreamRetentionPeriod";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DecreaseStreamRetentionPeriodInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteStreamCommand(
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DeleteStream";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterStreamConsumerCommand(
  input: DeregisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DeregisterStreamConsumer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterStreamConsumerInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeLimitsCommand(
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DescribeLimits";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLimitsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStreamCommand(
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStreamConsumerCommand(
  input: DescribeStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStreamConsumer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStreamConsumerInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeStreamSummaryCommand(
  input: DescribeStreamSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DescribeStreamSummary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeStreamSummaryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableEnhancedMonitoringCommand(
  input: DisableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.DisableEnhancedMonitoring";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableEnhancedMonitoringInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableEnhancedMonitoringCommand(
  input: EnableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.EnableEnhancedMonitoring";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableEnhancedMonitoringInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRecordsCommand(
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.GetRecords";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetShardIteratorCommand(
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.GetShardIterator";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetShardIteratorInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1IncreaseStreamRetentionPeriodCommand(
  input: IncreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.IncreaseStreamRetentionPeriod";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1IncreaseStreamRetentionPeriodInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListShardsCommand(
  input: ListShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.ListShards";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListShardsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListStreamConsumersCommand(
  input: ListStreamConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.ListStreamConsumers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListStreamConsumersInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListStreamsCommand(
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.ListStreams";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForStreamCommand(
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.ListTagsForStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1MergeShardsCommand(
  input: MergeShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.MergeShards";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeShardsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutRecordCommand(
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.PutRecord";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutRecordsCommand(
  input: PutRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.PutRecords";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterStreamConsumerCommand(
  input: RegisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.RegisterStreamConsumer";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterStreamConsumerInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsFromStreamCommand(
  input: RemoveTagsFromStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.RemoveTagsFromStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromStreamInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SplitShardCommand(
  input: SplitShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.SplitShard";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SplitShardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartStreamEncryptionCommand(
  input: StartStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.StartStreamEncryption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartStreamEncryptionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopStreamEncryptionCommand(
  input: StopStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.StopStreamEncryption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopStreamEncryptionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SubscribeToShardCommand(
  input: SubscribeToShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.SubscribeToShard";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubscribeToShardInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateShardCountCommand(
  input: UpdateShardCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Kinesis_20131202.UpdateShardCount";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateShardCountInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddTagsToStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddTagsToStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToStreamCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1CreateStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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

export async function deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseStreamRetentionPeriodCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DecreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseStreamRetentionPeriodCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DeleteStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> {
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
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DeregisterStreamConsumerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterStreamConsumerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterStreamConsumerCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeregisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterStreamConsumerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterStreamConsumerCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DescribeLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLimitsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> {
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
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1DescribeStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> {
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
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DescribeStreamConsumerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamConsumerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStreamConsumerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamConsumerOutput(data, context);
  const response: DescribeStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamConsumerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeStreamConsumerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamConsumerCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DescribeStreamSummaryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamSummaryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeStreamSummaryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamSummaryOutput(data, context);
  const response: DescribeStreamSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStreamSummaryOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeStreamSummaryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamSummaryCommandOutput> {
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
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DisableEnhancedMonitoringCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableEnhancedMonitoringCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableEnhancedMonitoringCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
  const response: DisableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnhancedMonitoringOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableEnhancedMonitoringCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableEnhancedMonitoringCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1EnableEnhancedMonitoringCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableEnhancedMonitoringCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableEnhancedMonitoringCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
  const response: EnableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnhancedMonitoringOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableEnhancedMonitoringCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableEnhancedMonitoringCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1GetRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecordsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> {
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
    case "ExpiredIteratorException":
    case "com.amazonaws.kinesis.v20131202#ExpiredIteratorException":
      response = {
        ...(await deserializeAws_json1_1ExpiredIteratorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
      response = {
        ...(await deserializeAws_json1_1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
      response = {
        ...(await deserializeAws_json1_1KMSOptInRequiredResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
      response = {
        ...(await deserializeAws_json1_1KMSThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1GetShardIteratorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetShardIteratorOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetShardIteratorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseStreamRetentionPeriodCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: IncreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseStreamRetentionPeriodCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1ListShardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShardsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListShardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListShardsOutput(data, context);
  const response: ListShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListShardsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListShardsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShardsCommandOutput> {
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
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis.v20131202#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1ListStreamConsumersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamConsumersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListStreamConsumersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamConsumersOutput(data, context);
  const response: ListStreamConsumersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamConsumersOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListStreamConsumersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamConsumersCommandOutput> {
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
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis.v20131202#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1ListStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStreamsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> {
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
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1ListTagsForStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForStreamOutput(data, context);
  const response: ListTagsForStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForStreamOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1MergeShardsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeShardsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MergeShardsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: MergeShardsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1MergeShardsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeShardsCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
      response = {
        ...(await deserializeAws_json1_1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
      response = {
        ...(await deserializeAws_json1_1KMSOptInRequiredResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
      response = {
        ...(await deserializeAws_json1_1KMSThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1PutRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordsOutput(data, context);
  const response: PutRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRecordsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordsCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
      response = {
        ...(await deserializeAws_json1_1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
      response = {
        ...(await deserializeAws_json1_1KMSOptInRequiredResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
      response = {
        ...(await deserializeAws_json1_1KMSThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1RegisterStreamConsumerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterStreamConsumerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterStreamConsumerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterStreamConsumerOutput(data, context);
  const response: RegisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterStreamConsumerOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterStreamConsumerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterStreamConsumerCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1RemoveTagsFromStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromStreamCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveTagsFromStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromStreamCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1SplitShardCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SplitShardCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SplitShardCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SplitShardCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SplitShardCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SplitShardCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1StartStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartStreamEncryptionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: StartStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamEncryptionCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.kinesis.v20131202#KMSDisabledException":
      response = {
        ...(await deserializeAws_json1_1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis.v20131202#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_json1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis.v20131202#KMSNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis.v20131202#KMSOptInRequired":
      response = {
        ...(await deserializeAws_json1_1KMSOptInRequiredResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis.v20131202#KMSThrottlingException":
      response = {
        ...(await deserializeAws_json1_1KMSThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1StopStreamEncryptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamEncryptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopStreamEncryptionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: StopStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopStreamEncryptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamEncryptionCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1SubscribeToShardCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToShardCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubscribeToShardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SubscribeToShardOutput(data, context);
  const response: SubscribeToShardCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubscribeToShardOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubscribeToShardCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToShardCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

export async function deserializeAws_json1_1UpdateShardCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShardCountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateShardCountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateShardCountOutput(data, context);
  const response: UpdateShardCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateShardCountOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateShardCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShardCountCommandOutput> {
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
    case "com.amazonaws.kinesis.v20131202#InvalidArgumentException":
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
    case "com.amazonaws.kinesis.v20131202#LimitExceededException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceInUseException":
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
    case "com.amazonaws.kinesis.v20131202#ResourceNotFoundException":
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

const deserializeAws_json1_1ExpiredIteratorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredIteratorException(
    body,
    context
  );
  const contents: ExpiredIteratorException = {
    name: "ExpiredIteratorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(
    body,
    context
  );
  const contents: ExpiredNextTokenException = {
    name: "ExpiredNextTokenException",
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

const deserializeAws_json1_1KMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSAccessDeniedException(
    body,
    context
  );
  const contents: KMSAccessDeniedException = {
    name: "KMSAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSDisabledException(
    body,
    context
  );
  const contents: KMSDisabledException = {
    name: "KMSDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(
    body,
    context
  );
  const contents: KMSInvalidStateException = {
    name: "KMSInvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSNotFoundException(
    body,
    context
  );
  const contents: KMSNotFoundException = {
    name: "KMSNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSOptInRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSOptInRequired(
    body,
    context
  );
  const contents: KMSOptInRequired = {
    name: "KMSOptInRequired",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSThrottlingException(
    body,
    context
  );
  const contents: KMSThrottlingException = {
    name: "KMSThrottlingException",
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

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(
    body,
    context
  );
  const contents: ProvisionedThroughputExceededException = {
    name: "ProvisionedThroughputExceededException",
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

const serializeAws_json1_1AddTagsToStreamInput = (
  input: AddTagsToStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagMap(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateStreamInput = (
  input: CreateStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ShardCount !== undefined) {
    bodyParams["ShardCount"] = input.ShardCount;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DecreaseStreamRetentionPeriodInput = (
  input: DecreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RetentionPeriodHours !== undefined) {
    bodyParams["RetentionPeriodHours"] = input.RetentionPeriodHours;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteStreamInput = (
  input: DeleteStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EnforceConsumerDeletion !== undefined) {
    bodyParams["EnforceConsumerDeletion"] = input.EnforceConsumerDeletion;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterStreamConsumerInput = (
  input: DeregisterStreamConsumerInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConsumerARN !== undefined) {
    bodyParams["ConsumerARN"] = input.ConsumerARN;
  }
  if (input.ConsumerName !== undefined) {
    bodyParams["ConsumerName"] = input.ConsumerName;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeLimitsInput = (
  input: DescribeLimitsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeStreamConsumerInput = (
  input: DescribeStreamConsumerInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConsumerARN !== undefined) {
    bodyParams["ConsumerARN"] = input.ConsumerARN;
  }
  if (input.ConsumerName !== undefined) {
    bodyParams["ConsumerName"] = input.ConsumerName;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStreamInput = (
  input: DescribeStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartShardId !== undefined) {
    bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeStreamSummaryInput = (
  input: DescribeStreamSummaryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableEnhancedMonitoringInput = (
  input: DisableEnhancedMonitoringInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ShardLevelMetrics !== undefined) {
    bodyParams["ShardLevelMetrics"] = serializeAws_json1_1MetricsNameList(
      input.ShardLevelMetrics,
      context
    );
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableEnhancedMonitoringInput = (
  input: EnableEnhancedMonitoringInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ShardLevelMetrics !== undefined) {
    bodyParams["ShardLevelMetrics"] = serializeAws_json1_1MetricsNameList(
      input.ShardLevelMetrics,
      context
    );
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRecordsInput = (
  input: GetRecordsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.ShardIterator !== undefined) {
    bodyParams["ShardIterator"] = input.ShardIterator;
  }
  return bodyParams;
};

const serializeAws_json1_1GetShardIteratorInput = (
  input: GetShardIteratorInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ShardId !== undefined) {
    bodyParams["ShardId"] = input.ShardId;
  }
  if (input.ShardIteratorType !== undefined) {
    bodyParams["ShardIteratorType"] = input.ShardIteratorType;
  }
  if (input.StartingSequenceNumber !== undefined) {
    bodyParams["StartingSequenceNumber"] = input.StartingSequenceNumber;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1IncreaseStreamRetentionPeriodInput = (
  input: IncreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RetentionPeriodHours !== undefined) {
    bodyParams["RetentionPeriodHours"] = input.RetentionPeriodHours;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListShardsInput = (
  input: ListShardsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartShardId !== undefined) {
    bodyParams["ExclusiveStartShardId"] = input.ExclusiveStartShardId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StreamCreationTimestamp !== undefined) {
    bodyParams["StreamCreationTimestamp"] = Math.round(
      input.StreamCreationTimestamp.getTime() / 1000
    );
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1ListStreamConsumersInput = (
  input: ListStreamConsumersInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  if (input.StreamCreationTimestamp !== undefined) {
    bodyParams["StreamCreationTimestamp"] = Math.round(
      input.StreamCreationTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListStreamsInput = (
  input: ListStreamsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartStreamName !== undefined) {
    bodyParams["ExclusiveStartStreamName"] = input.ExclusiveStartStreamName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForStreamInput = (
  input: ListTagsForStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ExclusiveStartTagKey !== undefined) {
    bodyParams["ExclusiveStartTagKey"] = input.ExclusiveStartTagKey;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1MergeShardsInput = (
  input: MergeShardsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdjacentShardToMerge !== undefined) {
    bodyParams["AdjacentShardToMerge"] = input.AdjacentShardToMerge;
  }
  if (input.ShardToMerge !== undefined) {
    bodyParams["ShardToMerge"] = input.ShardToMerge;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricsNameList = (
  input: Array<MetricsName | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1PutRecordInput = (
  input: PutRecordInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["Data"] = context.base64Encoder(input.Data);
  }
  if (input.ExplicitHashKey !== undefined) {
    bodyParams["ExplicitHashKey"] = input.ExplicitHashKey;
  }
  if (input.PartitionKey !== undefined) {
    bodyParams["PartitionKey"] = input.PartitionKey;
  }
  if (input.SequenceNumberForOrdering !== undefined) {
    bodyParams["SequenceNumberForOrdering"] = input.SequenceNumberForOrdering;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutRecordsInput = (
  input: PutRecordsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Records !== undefined) {
    bodyParams["Records"] = serializeAws_json1_1PutRecordsRequestEntryList(
      input.Records,
      context
    );
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutRecordsRequestEntry = (
  input: PutRecordsRequestEntry,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["Data"] = context.base64Encoder(input.Data);
  }
  if (input.ExplicitHashKey !== undefined) {
    bodyParams["ExplicitHashKey"] = input.ExplicitHashKey;
  }
  if (input.PartitionKey !== undefined) {
    bodyParams["PartitionKey"] = input.PartitionKey;
  }
  return bodyParams;
};

const serializeAws_json1_1PutRecordsRequestEntryList = (
  input: Array<PutRecordsRequestEntry>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PutRecordsRequestEntry(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RegisterStreamConsumerInput = (
  input: RegisterStreamConsumerInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConsumerName !== undefined) {
    bodyParams["ConsumerName"] = input.ConsumerName;
  }
  if (input.StreamARN !== undefined) {
    bodyParams["StreamARN"] = input.StreamARN;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsFromStreamInput = (
  input: RemoveTagsFromStreamInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SplitShardInput = (
  input: SplitShardInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NewStartingHashKey !== undefined) {
    bodyParams["NewStartingHashKey"] = input.NewStartingHashKey;
  }
  if (input.ShardToSplit !== undefined) {
    bodyParams["ShardToSplit"] = input.ShardToSplit;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartStreamEncryptionInput = (
  input: StartStreamEncryptionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionType !== undefined) {
    bodyParams["EncryptionType"] = input.EncryptionType;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartingPosition = (
  input: StartingPosition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SequenceNumber !== undefined) {
    bodyParams["SequenceNumber"] = input.SequenceNumber;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1StopStreamEncryptionInput = (
  input: StopStreamEncryptionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionType !== undefined) {
    bodyParams["EncryptionType"] = input.EncryptionType;
  }
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1SubscribeToShardInput = (
  input: SubscribeToShardInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConsumerARN !== undefined) {
    bodyParams["ConsumerARN"] = input.ConsumerARN;
  }
  if (input.ShardId !== undefined) {
    bodyParams["ShardId"] = input.ShardId;
  }
  if (input.StartingPosition !== undefined) {
    bodyParams["StartingPosition"] = serializeAws_json1_1StartingPosition(
      input.StartingPosition,
      context
    );
  }
  return bodyParams;
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

const serializeAws_json1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UpdateShardCountInput = (
  input: UpdateShardCountInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ScalingType !== undefined) {
    bodyParams["ScalingType"] = input.ScalingType;
  }
  if (input.StreamName !== undefined) {
    bodyParams["StreamName"] = input.StreamName;
  }
  if (input.TargetShardCount !== undefined) {
    bodyParams["TargetShardCount"] = input.TargetShardCount;
  }
  return bodyParams;
};

const deserializeAws_json1_1Consumer = (
  output: any,
  context: __SerdeContext
): Consumer => {
  let contents: any = {
    __type: "Consumer",
    ConsumerARN: undefined,
    ConsumerCreationTimestamp: undefined,
    ConsumerName: undefined,
    ConsumerStatus: undefined
  };
  if (output.ConsumerARN !== undefined && output.ConsumerARN !== null) {
    contents.ConsumerARN = output.ConsumerARN;
  }
  if (
    output.ConsumerCreationTimestamp !== undefined &&
    output.ConsumerCreationTimestamp !== null
  ) {
    contents.ConsumerCreationTimestamp = new Date(
      Math.round(output.ConsumerCreationTimestamp * 1000)
    );
  }
  if (output.ConsumerName !== undefined && output.ConsumerName !== null) {
    contents.ConsumerName = output.ConsumerName;
  }
  if (output.ConsumerStatus !== undefined && output.ConsumerStatus !== null) {
    contents.ConsumerStatus = output.ConsumerStatus;
  }
  return contents;
};

const deserializeAws_json1_1ConsumerDescription = (
  output: any,
  context: __SerdeContext
): ConsumerDescription => {
  let contents: any = {
    __type: "ConsumerDescription",
    ConsumerARN: undefined,
    ConsumerCreationTimestamp: undefined,
    ConsumerName: undefined,
    ConsumerStatus: undefined,
    StreamARN: undefined
  };
  if (output.ConsumerARN !== undefined && output.ConsumerARN !== null) {
    contents.ConsumerARN = output.ConsumerARN;
  }
  if (
    output.ConsumerCreationTimestamp !== undefined &&
    output.ConsumerCreationTimestamp !== null
  ) {
    contents.ConsumerCreationTimestamp = new Date(
      Math.round(output.ConsumerCreationTimestamp * 1000)
    );
  }
  if (output.ConsumerName !== undefined && output.ConsumerName !== null) {
    contents.ConsumerName = output.ConsumerName;
  }
  if (output.ConsumerStatus !== undefined && output.ConsumerStatus !== null) {
    contents.ConsumerStatus = output.ConsumerStatus;
  }
  if (output.StreamARN !== undefined && output.StreamARN !== null) {
    contents.StreamARN = output.StreamARN;
  }
  return contents;
};

const deserializeAws_json1_1ConsumerList = (
  output: any,
  context: __SerdeContext
): Array<Consumer> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Consumer(entry, context)
  );
};

const deserializeAws_json1_1DescribeLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeLimitsOutput => {
  let contents: any = {
    __type: "DescribeLimitsOutput",
    OpenShardCount: undefined,
    ShardLimit: undefined
  };
  if (output.OpenShardCount !== undefined && output.OpenShardCount !== null) {
    contents.OpenShardCount = output.OpenShardCount;
  }
  if (output.ShardLimit !== undefined && output.ShardLimit !== null) {
    contents.ShardLimit = output.ShardLimit;
  }
  return contents;
};

const deserializeAws_json1_1DescribeStreamConsumerOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamConsumerOutput => {
  let contents: any = {
    __type: "DescribeStreamConsumerOutput",
    ConsumerDescription: undefined
  };
  if (
    output.ConsumerDescription !== undefined &&
    output.ConsumerDescription !== null
  ) {
    contents.ConsumerDescription = deserializeAws_json1_1ConsumerDescription(
      output.ConsumerDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeStreamOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamOutput => {
  let contents: any = {
    __type: "DescribeStreamOutput",
    StreamDescription: undefined
  };
  if (
    output.StreamDescription !== undefined &&
    output.StreamDescription !== null
  ) {
    contents.StreamDescription = deserializeAws_json1_1StreamDescription(
      output.StreamDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeStreamSummaryOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamSummaryOutput => {
  let contents: any = {
    __type: "DescribeStreamSummaryOutput",
    StreamDescriptionSummary: undefined
  };
  if (
    output.StreamDescriptionSummary !== undefined &&
    output.StreamDescriptionSummary !== null
  ) {
    contents.StreamDescriptionSummary = deserializeAws_json1_1StreamDescriptionSummary(
      output.StreamDescriptionSummary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EnhancedMetrics = (
  output: any,
  context: __SerdeContext
): EnhancedMetrics => {
  let contents: any = {
    __type: "EnhancedMetrics",
    ShardLevelMetrics: undefined
  };
  if (
    output.ShardLevelMetrics !== undefined &&
    output.ShardLevelMetrics !== null
  ) {
    contents.ShardLevelMetrics = deserializeAws_json1_1MetricsNameList(
      output.ShardLevelMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EnhancedMonitoringList = (
  output: any,
  context: __SerdeContext
): Array<EnhancedMetrics> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnhancedMetrics(entry, context)
  );
};

const deserializeAws_json1_1EnhancedMonitoringOutput = (
  output: any,
  context: __SerdeContext
): EnhancedMonitoringOutput => {
  let contents: any = {
    __type: "EnhancedMonitoringOutput",
    CurrentShardLevelMetrics: undefined,
    DesiredShardLevelMetrics: undefined,
    StreamName: undefined
  };
  if (
    output.CurrentShardLevelMetrics !== undefined &&
    output.CurrentShardLevelMetrics !== null
  ) {
    contents.CurrentShardLevelMetrics = deserializeAws_json1_1MetricsNameList(
      output.CurrentShardLevelMetrics,
      context
    );
  }
  if (
    output.DesiredShardLevelMetrics !== undefined &&
    output.DesiredShardLevelMetrics !== null
  ) {
    contents.DesiredShardLevelMetrics = deserializeAws_json1_1MetricsNameList(
      output.DesiredShardLevelMetrics,
      context
    );
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  return contents;
};

const deserializeAws_json1_1ExpiredIteratorException = (
  output: any,
  context: __SerdeContext
): ExpiredIteratorException => {
  let contents: any = {
    __type: "ExpiredIteratorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  let contents: any = {
    __type: "ExpiredNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1GetRecordsOutput = (
  output: any,
  context: __SerdeContext
): GetRecordsOutput => {
  let contents: any = {
    __type: "GetRecordsOutput",
    MillisBehindLatest: undefined,
    NextShardIterator: undefined,
    Records: undefined
  };
  if (
    output.MillisBehindLatest !== undefined &&
    output.MillisBehindLatest !== null
  ) {
    contents.MillisBehindLatest = output.MillisBehindLatest;
  }
  if (
    output.NextShardIterator !== undefined &&
    output.NextShardIterator !== null
  ) {
    contents.NextShardIterator = output.NextShardIterator;
  }
  if (output.Records !== undefined && output.Records !== null) {
    contents.Records = deserializeAws_json1_1RecordList(
      output.Records,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetShardIteratorOutput = (
  output: any,
  context: __SerdeContext
): GetShardIteratorOutput => {
  let contents: any = {
    __type: "GetShardIteratorOutput",
    ShardIterator: undefined
  };
  if (output.ShardIterator !== undefined && output.ShardIterator !== null) {
    contents.ShardIterator = output.ShardIterator;
  }
  return contents;
};

const deserializeAws_json1_1HashKeyRange = (
  output: any,
  context: __SerdeContext
): HashKeyRange => {
  let contents: any = {
    __type: "HashKeyRange",
    EndingHashKey: undefined,
    StartingHashKey: undefined
  };
  if (output.EndingHashKey !== undefined && output.EndingHashKey !== null) {
    contents.EndingHashKey = output.EndingHashKey;
  }
  if (output.StartingHashKey !== undefined && output.StartingHashKey !== null) {
    contents.StartingHashKey = output.StartingHashKey;
  }
  return contents;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  let contents: any = {
    __type: "InternalFailureException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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

const deserializeAws_json1_1KMSAccessDeniedException = (
  output: any,
  context: __SerdeContext
): KMSAccessDeniedException => {
  let contents: any = {
    __type: "KMSAccessDeniedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSDisabledException = (
  output: any,
  context: __SerdeContext
): KMSDisabledException => {
  let contents: any = {
    __type: "KMSDisabledException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  let contents: any = {
    __type: "KMSInvalidStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSNotFoundException = (
  output: any,
  context: __SerdeContext
): KMSNotFoundException => {
  let contents: any = {
    __type: "KMSNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSOptInRequired = (
  output: any,
  context: __SerdeContext
): KMSOptInRequired => {
  let contents: any = {
    __type: "KMSOptInRequired",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1KMSThrottlingException = (
  output: any,
  context: __SerdeContext
): KMSThrottlingException => {
  let contents: any = {
    __type: "KMSThrottlingException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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

const deserializeAws_json1_1ListShardsOutput = (
  output: any,
  context: __SerdeContext
): ListShardsOutput => {
  let contents: any = {
    __type: "ListShardsOutput",
    NextToken: undefined,
    Shards: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Shards !== undefined && output.Shards !== null) {
    contents.Shards = deserializeAws_json1_1ShardList(output.Shards, context);
  }
  return contents;
};

const deserializeAws_json1_1ListStreamConsumersOutput = (
  output: any,
  context: __SerdeContext
): ListStreamConsumersOutput => {
  let contents: any = {
    __type: "ListStreamConsumersOutput",
    Consumers: undefined,
    NextToken: undefined
  };
  if (output.Consumers !== undefined && output.Consumers !== null) {
    contents.Consumers = deserializeAws_json1_1ConsumerList(
      output.Consumers,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListStreamsOutput = (
  output: any,
  context: __SerdeContext
): ListStreamsOutput => {
  let contents: any = {
    __type: "ListStreamsOutput",
    HasMoreStreams: undefined,
    StreamNames: undefined
  };
  if (output.HasMoreStreams !== undefined && output.HasMoreStreams !== null) {
    contents.HasMoreStreams = output.HasMoreStreams;
  }
  if (output.StreamNames !== undefined && output.StreamNames !== null) {
    contents.StreamNames = deserializeAws_json1_1StreamNameList(
      output.StreamNames,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForStreamOutput => {
  let contents: any = {
    __type: "ListTagsForStreamOutput",
    HasMoreTags: undefined,
    Tags: undefined
  };
  if (output.HasMoreTags !== undefined && output.HasMoreTags !== null) {
    contents.HasMoreTags = output.HasMoreTags;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1MetricsNameList = (
  output: any,
  context: __SerdeContext
): Array<MetricsName | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  let contents: any = {
    __type: "ProvisionedThroughputExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PutRecordOutput = (
  output: any,
  context: __SerdeContext
): PutRecordOutput => {
  let contents: any = {
    __type: "PutRecordOutput",
    EncryptionType: undefined,
    SequenceNumber: undefined,
    ShardId: undefined
  };
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
    contents.SequenceNumber = output.SequenceNumber;
  }
  if (output.ShardId !== undefined && output.ShardId !== null) {
    contents.ShardId = output.ShardId;
  }
  return contents;
};

const deserializeAws_json1_1PutRecordsOutput = (
  output: any,
  context: __SerdeContext
): PutRecordsOutput => {
  let contents: any = {
    __type: "PutRecordsOutput",
    EncryptionType: undefined,
    FailedRecordCount: undefined,
    Records: undefined
  };
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (
    output.FailedRecordCount !== undefined &&
    output.FailedRecordCount !== null
  ) {
    contents.FailedRecordCount = output.FailedRecordCount;
  }
  if (output.Records !== undefined && output.Records !== null) {
    contents.Records = deserializeAws_json1_1PutRecordsResultEntryList(
      output.Records,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutRecordsResultEntry = (
  output: any,
  context: __SerdeContext
): PutRecordsResultEntry => {
  let contents: any = {
    __type: "PutRecordsResultEntry",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    SequenceNumber: undefined,
    ShardId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
    contents.SequenceNumber = output.SequenceNumber;
  }
  if (output.ShardId !== undefined && output.ShardId !== null) {
    contents.ShardId = output.ShardId;
  }
  return contents;
};

const deserializeAws_json1_1PutRecordsResultEntryList = (
  output: any,
  context: __SerdeContext
): Array<PutRecordsResultEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutRecordsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  let contents: any = {
    __type: "Record",
    ApproximateArrivalTimestamp: undefined,
    Data: undefined,
    EncryptionType: undefined,
    PartitionKey: undefined,
    SequenceNumber: undefined
  };
  if (
    output.ApproximateArrivalTimestamp !== undefined &&
    output.ApproximateArrivalTimestamp !== null
  ) {
    contents.ApproximateArrivalTimestamp = new Date(
      Math.round(output.ApproximateArrivalTimestamp * 1000)
    );
  }
  if (output.Data !== undefined && output.Data !== null) {
    contents.Data = context.base64Decoder(output.Data);
  }
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (output.PartitionKey !== undefined && output.PartitionKey !== null) {
    contents.PartitionKey = output.PartitionKey;
  }
  if (output.SequenceNumber !== undefined && output.SequenceNumber !== null) {
    contents.SequenceNumber = output.SequenceNumber;
  }
  return contents;
};

const deserializeAws_json1_1RecordList = (
  output: any,
  context: __SerdeContext
): Array<_Record> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1_Record(entry, context)
  );
};

const deserializeAws_json1_1RegisterStreamConsumerOutput = (
  output: any,
  context: __SerdeContext
): RegisterStreamConsumerOutput => {
  let contents: any = {
    __type: "RegisterStreamConsumerOutput",
    Consumer: undefined
  };
  if (output.Consumer !== undefined && output.Consumer !== null) {
    contents.Consumer = deserializeAws_json1_1Consumer(
      output.Consumer,
      context
    );
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

const deserializeAws_json1_1SequenceNumberRange = (
  output: any,
  context: __SerdeContext
): SequenceNumberRange => {
  let contents: any = {
    __type: "SequenceNumberRange",
    EndingSequenceNumber: undefined,
    StartingSequenceNumber: undefined
  };
  if (
    output.EndingSequenceNumber !== undefined &&
    output.EndingSequenceNumber !== null
  ) {
    contents.EndingSequenceNumber = output.EndingSequenceNumber;
  }
  if (
    output.StartingSequenceNumber !== undefined &&
    output.StartingSequenceNumber !== null
  ) {
    contents.StartingSequenceNumber = output.StartingSequenceNumber;
  }
  return contents;
};

const deserializeAws_json1_1Shard = (
  output: any,
  context: __SerdeContext
): Shard => {
  let contents: any = {
    __type: "Shard",
    AdjacentParentShardId: undefined,
    HashKeyRange: undefined,
    ParentShardId: undefined,
    SequenceNumberRange: undefined,
    ShardId: undefined
  };
  if (
    output.AdjacentParentShardId !== undefined &&
    output.AdjacentParentShardId !== null
  ) {
    contents.AdjacentParentShardId = output.AdjacentParentShardId;
  }
  if (output.HashKeyRange !== undefined && output.HashKeyRange !== null) {
    contents.HashKeyRange = deserializeAws_json1_1HashKeyRange(
      output.HashKeyRange,
      context
    );
  }
  if (output.ParentShardId !== undefined && output.ParentShardId !== null) {
    contents.ParentShardId = output.ParentShardId;
  }
  if (
    output.SequenceNumberRange !== undefined &&
    output.SequenceNumberRange !== null
  ) {
    contents.SequenceNumberRange = deserializeAws_json1_1SequenceNumberRange(
      output.SequenceNumberRange,
      context
    );
  }
  if (output.ShardId !== undefined && output.ShardId !== null) {
    contents.ShardId = output.ShardId;
  }
  return contents;
};

const deserializeAws_json1_1ShardList = (
  output: any,
  context: __SerdeContext
): Array<Shard> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Shard(entry, context)
  );
};

const deserializeAws_json1_1StreamDescription = (
  output: any,
  context: __SerdeContext
): StreamDescription => {
  let contents: any = {
    __type: "StreamDescription",
    EncryptionType: undefined,
    EnhancedMonitoring: undefined,
    HasMoreShards: undefined,
    KeyId: undefined,
    RetentionPeriodHours: undefined,
    Shards: undefined,
    StreamARN: undefined,
    StreamCreationTimestamp: undefined,
    StreamName: undefined,
    StreamStatus: undefined
  };
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (
    output.EnhancedMonitoring !== undefined &&
    output.EnhancedMonitoring !== null
  ) {
    contents.EnhancedMonitoring = deserializeAws_json1_1EnhancedMonitoringList(
      output.EnhancedMonitoring,
      context
    );
  }
  if (output.HasMoreShards !== undefined && output.HasMoreShards !== null) {
    contents.HasMoreShards = output.HasMoreShards;
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (
    output.RetentionPeriodHours !== undefined &&
    output.RetentionPeriodHours !== null
  ) {
    contents.RetentionPeriodHours = output.RetentionPeriodHours;
  }
  if (output.Shards !== undefined && output.Shards !== null) {
    contents.Shards = deserializeAws_json1_1ShardList(output.Shards, context);
  }
  if (output.StreamARN !== undefined && output.StreamARN !== null) {
    contents.StreamARN = output.StreamARN;
  }
  if (
    output.StreamCreationTimestamp !== undefined &&
    output.StreamCreationTimestamp !== null
  ) {
    contents.StreamCreationTimestamp = new Date(
      Math.round(output.StreamCreationTimestamp * 1000)
    );
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
    contents.StreamStatus = output.StreamStatus;
  }
  return contents;
};

const deserializeAws_json1_1StreamDescriptionSummary = (
  output: any,
  context: __SerdeContext
): StreamDescriptionSummary => {
  let contents: any = {
    __type: "StreamDescriptionSummary",
    ConsumerCount: undefined,
    EncryptionType: undefined,
    EnhancedMonitoring: undefined,
    KeyId: undefined,
    OpenShardCount: undefined,
    RetentionPeriodHours: undefined,
    StreamARN: undefined,
    StreamCreationTimestamp: undefined,
    StreamName: undefined,
    StreamStatus: undefined
  };
  if (output.ConsumerCount !== undefined && output.ConsumerCount !== null) {
    contents.ConsumerCount = output.ConsumerCount;
  }
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (
    output.EnhancedMonitoring !== undefined &&
    output.EnhancedMonitoring !== null
  ) {
    contents.EnhancedMonitoring = deserializeAws_json1_1EnhancedMonitoringList(
      output.EnhancedMonitoring,
      context
    );
  }
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.OpenShardCount !== undefined && output.OpenShardCount !== null) {
    contents.OpenShardCount = output.OpenShardCount;
  }
  if (
    output.RetentionPeriodHours !== undefined &&
    output.RetentionPeriodHours !== null
  ) {
    contents.RetentionPeriodHours = output.RetentionPeriodHours;
  }
  if (output.StreamARN !== undefined && output.StreamARN !== null) {
    contents.StreamARN = output.StreamARN;
  }
  if (
    output.StreamCreationTimestamp !== undefined &&
    output.StreamCreationTimestamp !== null
  ) {
    contents.StreamCreationTimestamp = new Date(
      Math.round(output.StreamCreationTimestamp * 1000)
    );
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  if (output.StreamStatus !== undefined && output.StreamStatus !== null) {
    contents.StreamStatus = output.StreamStatus;
  }
  return contents;
};

const deserializeAws_json1_1StreamNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SubscribeToShardEvent = (
  output: any,
  context: __SerdeContext
): SubscribeToShardEvent => {
  let contents: any = {
    __type: "SubscribeToShardEvent",
    ContinuationSequenceNumber: undefined,
    MillisBehindLatest: undefined,
    Records: undefined
  };
  if (
    output.ContinuationSequenceNumber !== undefined &&
    output.ContinuationSequenceNumber !== null
  ) {
    contents.ContinuationSequenceNumber = output.ContinuationSequenceNumber;
  }
  if (
    output.MillisBehindLatest !== undefined &&
    output.MillisBehindLatest !== null
  ) {
    contents.MillisBehindLatest = output.MillisBehindLatest;
  }
  if (output.Records !== undefined && output.Records !== null) {
    contents.Records = deserializeAws_json1_1RecordList(
      output.Records,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SubscribeToShardEventStream = (
  output: any,
  context: __SerdeContext
): SubscribeToShardEventStream => {
  if (
    output.InternalFailureException !== undefined &&
    output.InternalFailureException !== null
  ) {
    return {
      InternalFailureException: deserializeAws_json1_1InternalFailureException(
        output.InternalFailureException,
        context
      )
    };
  }
  if (
    output.KMSAccessDeniedException !== undefined &&
    output.KMSAccessDeniedException !== null
  ) {
    return {
      KMSAccessDeniedException: deserializeAws_json1_1KMSAccessDeniedException(
        output.KMSAccessDeniedException,
        context
      )
    };
  }
  if (
    output.KMSDisabledException !== undefined &&
    output.KMSDisabledException !== null
  ) {
    return {
      KMSDisabledException: deserializeAws_json1_1KMSDisabledException(
        output.KMSDisabledException,
        context
      )
    };
  }
  if (
    output.KMSInvalidStateException !== undefined &&
    output.KMSInvalidStateException !== null
  ) {
    return {
      KMSInvalidStateException: deserializeAws_json1_1KMSInvalidStateException(
        output.KMSInvalidStateException,
        context
      )
    };
  }
  if (
    output.KMSNotFoundException !== undefined &&
    output.KMSNotFoundException !== null
  ) {
    return {
      KMSNotFoundException: deserializeAws_json1_1KMSNotFoundException(
        output.KMSNotFoundException,
        context
      )
    };
  }
  if (
    output.KMSOptInRequired !== undefined &&
    output.KMSOptInRequired !== null
  ) {
    return {
      KMSOptInRequired: deserializeAws_json1_1KMSOptInRequired(
        output.KMSOptInRequired,
        context
      )
    };
  }
  if (
    output.KMSThrottlingException !== undefined &&
    output.KMSThrottlingException !== null
  ) {
    return {
      KMSThrottlingException: deserializeAws_json1_1KMSThrottlingException(
        output.KMSThrottlingException,
        context
      )
    };
  }
  if (
    output.ResourceInUseException !== undefined &&
    output.ResourceInUseException !== null
  ) {
    return {
      ResourceInUseException: deserializeAws_json1_1ResourceInUseException(
        output.ResourceInUseException,
        context
      )
    };
  }
  if (
    output.ResourceNotFoundException !== undefined &&
    output.ResourceNotFoundException !== null
  ) {
    return {
      ResourceNotFoundException: deserializeAws_json1_1ResourceNotFoundException(
        output.ResourceNotFoundException,
        context
      )
    };
  }
  if (
    output.SubscribeToShardEvent !== undefined &&
    output.SubscribeToShardEvent !== null
  ) {
    return {
      SubscribeToShardEvent: deserializeAws_json1_1SubscribeToShardEvent(
        output.SubscribeToShardEvent,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_json1_1SubscribeToShardOutput = (
  output: any,
  context: __SerdeContext
): SubscribeToShardOutput => {
  let contents: any = {
    __type: "SubscribeToShardOutput",
    EventStream: undefined
  };
  if (output.EventStream !== undefined && output.EventStream !== null) {
    contents.EventStream = deserializeAws_json1_1SubscribeToShardEventStream(
      output.EventStream,
      context
    );
  }
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

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1UpdateShardCountOutput = (
  output: any,
  context: __SerdeContext
): UpdateShardCountOutput => {
  let contents: any = {
    __type: "UpdateShardCountOutput",
    CurrentShardCount: undefined,
    StreamName: undefined,
    TargetShardCount: undefined
  };
  if (
    output.CurrentShardCount !== undefined &&
    output.CurrentShardCount !== null
  ) {
    contents.CurrentShardCount = output.CurrentShardCount;
  }
  if (output.StreamName !== undefined && output.StreamName !== null) {
    contents.StreamName = output.StreamName;
  }
  if (
    output.TargetShardCount !== undefined &&
    output.TargetShardCount !== null
  ) {
    contents.TargetShardCount = output.TargetShardCount;
  }
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
