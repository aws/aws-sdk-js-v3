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
  EventStreamSerdeContext as __EventStreamSerdeContext,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput } from "../commands/AddTagsToStreamCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "../commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "../commands/DecreaseStreamRetentionPeriodCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "../commands/DeleteStreamCommand";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
} from "../commands/DeregisterStreamConsumerCommand";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "../commands/DescribeLimitsCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "../commands/DescribeStreamCommand";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
} from "../commands/DescribeStreamConsumerCommand";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
} from "../commands/DescribeStreamSummaryCommand";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
} from "../commands/DisableEnhancedMonitoringCommand";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
} from "../commands/EnableEnhancedMonitoringCommand";
import { GetRecordsCommandInput, GetRecordsCommandOutput } from "../commands/GetRecordsCommand";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "../commands/GetShardIteratorCommand";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
} from "../commands/IncreaseStreamRetentionPeriodCommand";
import { ListShardsCommandInput, ListShardsCommandOutput } from "../commands/ListShardsCommand";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput } from "../commands/ListTagsForStreamCommand";
import { MergeShardsCommandInput, MergeShardsCommandOutput } from "../commands/MergeShardsCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import { PutRecordsCommandInput, PutRecordsCommandOutput } from "../commands/PutRecordsCommand";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
} from "../commands/RegisterStreamConsumerCommand";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
} from "../commands/RemoveTagsFromStreamCommand";
import { SplitShardCommandInput, SplitShardCommandOutput } from "../commands/SplitShardCommand";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
} from "../commands/StartStreamEncryptionCommand";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
} from "../commands/StopStreamEncryptionCommand";
import { SubscribeToShardCommandInput, SubscribeToShardCommandOutput } from "../commands/SubscribeToShardCommand";
import { UpdateShardCountCommandInput, UpdateShardCountCommandOutput } from "../commands/UpdateShardCountCommand";
import { UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput } from "../commands/UpdateStreamModeCommand";
import { KinesisServiceException as __BaseException } from "../models/KinesisServiceException";
import {
  _Record,
  AccessDeniedException,
  AddTagsToStreamInput,
  ChildShard,
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
  ShardFilter,
  SplitShardInput,
  StartingPosition,
  StartStreamEncryptionInput,
  StopStreamEncryptionInput,
  StreamDescription,
  StreamDescriptionSummary,
  StreamModeDetails,
  StreamSummary,
  SubscribeToShardEvent,
  SubscribeToShardEventStream,
  SubscribeToShardInput,
  Tag,
  UpdateShardCountInput,
  UpdateShardCountOutput,
  UpdateStreamModeInput,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_1AddTagsToStreamCommand = async (
  input: AddTagsToStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.AddTagsToStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStreamCommand = async (
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.CreateStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DecreaseStreamRetentionPeriodCommand = async (
  input: DecreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DecreaseStreamRetentionPeriod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DecreaseStreamRetentionPeriodInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStreamCommand = async (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DeleteStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterStreamConsumerCommand = async (
  input: DeregisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DeregisterStreamConsumer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DescribeLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLimitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DescribeStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStreamConsumerCommand = async (
  input: DescribeStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DescribeStreamConsumer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStreamSummaryCommand = async (
  input: DescribeStreamSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DescribeStreamSummary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStreamSummaryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableEnhancedMonitoringCommand = async (
  input: DisableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.DisableEnhancedMonitoring",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableEnhancedMonitoringInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableEnhancedMonitoringCommand = async (
  input: EnableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.EnableEnhancedMonitoring",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableEnhancedMonitoringInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.GetRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetShardIteratorCommand = async (
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.GetShardIterator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetShardIteratorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IncreaseStreamRetentionPeriodCommand = async (
  input: IncreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.IncreaseStreamRetentionPeriod",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IncreaseStreamRetentionPeriodInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListShardsCommand = async (
  input: ListShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.ListShards",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListShardsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStreamConsumersCommand = async (
  input: ListStreamConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.ListStreamConsumers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStreamConsumersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.ListStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForStreamCommand = async (
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.ListTagsForStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergeShardsCommand = async (
  input: MergeShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.MergeShards",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeShardsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.PutRecord",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRecordsCommand = async (
  input: PutRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.PutRecords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterStreamConsumerCommand = async (
  input: RegisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.RegisterStreamConsumer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromStreamCommand = async (
  input: RemoveTagsFromStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.RemoveTagsFromStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SplitShardCommand = async (
  input: SplitShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.SplitShard",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SplitShardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartStreamEncryptionCommand = async (
  input: StartStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.StartStreamEncryption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopStreamEncryptionCommand = async (
  input: StopStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.StopStreamEncryption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubscribeToShardCommand = async (
  input: SubscribeToShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.SubscribeToShard",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubscribeToShardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateShardCountCommand = async (
  input: UpdateShardCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.UpdateShardCount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateShardCountInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStreamModeCommand = async (
  input: UpdateStreamModeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Kinesis_20131202.UpdateStreamMode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStreamModeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseStreamRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DecreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseStreamRetentionPeriodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeregisterStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterStreamConsumerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterStreamConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterStreamConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStreamConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamConsumerOutput(data, context);
  const response: DescribeStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStreamConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeStreamSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStreamSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStreamSummaryOutput(data, context);
  const response: DescribeStreamSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStreamSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1DisableEnhancedMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableEnhancedMonitoringCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableEnhancedMonitoringCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
  const response: DisableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableEnhancedMonitoringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableEnhancedMonitoringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1EnableEnhancedMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableEnhancedMonitoringCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableEnhancedMonitoringCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnhancedMonitoringOutput(data, context);
  const response: EnableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableEnhancedMonitoringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableEnhancedMonitoringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredIteratorException":
    case "com.amazonaws.kinesis#ExpiredIteratorException":
      throw await deserializeAws_json1_1ExpiredIteratorExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetShardIteratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseStreamRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: IncreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseStreamRetentionPeriodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1ListShardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListShardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListShardsOutput(data, context);
  const response: ListShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListShardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1ListStreamConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamConsumersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStreamConsumersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamConsumersOutput(data, context);
  const response: ListStreamConsumersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStreamConsumersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamConsumersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis#ExpiredNextTokenException":
      throw await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForStreamOutput(data, context);
  const response: ListTagsForStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1MergeShardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeShardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MergeShardsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: MergeShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergeShardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeShardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1PutRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRecordsOutput(data, context);
  const response: PutRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1RegisterStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterStreamConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterStreamConsumerOutput(data, context);
  const response: RegisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterStreamConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterStreamConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1RemoveTagsFromStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1SplitShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SplitShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SplitShardCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SplitShardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SplitShardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SplitShardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
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

export const deserializeAws_json1_1StartStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartStreamEncryptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1StopStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopStreamEncryptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopStreamEncryptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamEncryptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1SubscribeToShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SubscribeToShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubscribeToShardCommandError(output, context);
  }
  const contents = { EventStream: deserializeAws_json1_1SubscribeToShardEventStream(output.body, context) };
  const response: SubscribeToShardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubscribeToShardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToShardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateShardCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShardCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateShardCountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateShardCountOutput(data, context);
  const response: UpdateShardCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateShardCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShardCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
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

export const deserializeAws_json1_1UpdateStreamModeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamModeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStreamModeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStreamModeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStreamModeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamModeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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

const deserializeAws_json1_1ExpiredIteratorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredIteratorException(body, context);
  const exception = new ExpiredIteratorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(body, context);
  const exception = new ExpiredNextTokenException({
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

const deserializeAws_json1_1KMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSAccessDeniedException(body, context);
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSDisabledException(body, context);
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSInvalidStateException(body, context);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSNotFoundException(body, context);
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSOptInRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSOptInRequired(body, context);
  const exception = new KMSOptInRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1KMSThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSThrottlingException(body, context);
  const exception = new KMSThrottlingException({
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

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
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

const deserializeAws_json1_1SubscribeToShardEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<SubscribeToShardEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["SubscribeToShardEvent"] != null) {
      return {
        SubscribeToShardEvent: await deserializeAws_json1_1SubscribeToShardEvent_event(
          event["SubscribeToShardEvent"],
          context
        ),
      };
    }
    if (event["ResourceNotFoundException"] != null) {
      return {
        ResourceNotFoundException: await deserializeAws_json1_1ResourceNotFoundException_event(
          event["ResourceNotFoundException"],
          context
        ),
      };
    }
    if (event["ResourceInUseException"] != null) {
      return {
        ResourceInUseException: await deserializeAws_json1_1ResourceInUseException_event(
          event["ResourceInUseException"],
          context
        ),
      };
    }
    if (event["KMSDisabledException"] != null) {
      return {
        KMSDisabledException: await deserializeAws_json1_1KMSDisabledException_event(
          event["KMSDisabledException"],
          context
        ),
      };
    }
    if (event["KMSInvalidStateException"] != null) {
      return {
        KMSInvalidStateException: await deserializeAws_json1_1KMSInvalidStateException_event(
          event["KMSInvalidStateException"],
          context
        ),
      };
    }
    if (event["KMSAccessDeniedException"] != null) {
      return {
        KMSAccessDeniedException: await deserializeAws_json1_1KMSAccessDeniedException_event(
          event["KMSAccessDeniedException"],
          context
        ),
      };
    }
    if (event["KMSNotFoundException"] != null) {
      return {
        KMSNotFoundException: await deserializeAws_json1_1KMSNotFoundException_event(
          event["KMSNotFoundException"],
          context
        ),
      };
    }
    if (event["KMSOptInRequired"] != null) {
      return {
        KMSOptInRequired: await deserializeAws_json1_1KMSOptInRequired_event(event["KMSOptInRequired"], context),
      };
    }
    if (event["KMSThrottlingException"] != null) {
      return {
        KMSThrottlingException: await deserializeAws_json1_1KMSThrottlingException_event(
          event["KMSThrottlingException"],
          context
        ),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await deserializeAws_json1_1InternalFailureException_event(
          event["InternalFailureException"],
          context
        ),
      };
    }
    return { $unknown: output };
  });
};
const deserializeAws_json1_1InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSAccessDeniedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSAccessDeniedExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSDisabledException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSDisabledExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSInvalidStateException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSInvalidStateExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSOptInRequired_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSOptInRequired> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSOptInRequiredResponse(parsedOutput, context);
};
const deserializeAws_json1_1KMSThrottlingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1KMSThrottlingExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1ResourceInUseException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
};
const deserializeAws_json1_1SubscribeToShardEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<SubscribeToShardEvent> => {
  const contents: SubscribeToShardEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, deserializeAws_json1_1SubscribeToShardEvent(data, context));
  return contents;
};
const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(body, context);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsToStreamInput = (input: AddTagsToStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagMap(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateStreamInput = (input: CreateStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
    ...(input.StreamModeDetails != null && {
      StreamModeDetails: serializeAws_json1_1StreamModeDetails(input.StreamModeDetails, context),
    }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1DecreaseStreamRetentionPeriodInput = (
  input: DecreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1DeleteStreamInput = (input: DeleteStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.EnforceConsumerDeletion != null && { EnforceConsumerDeletion: input.EnforceConsumerDeletion }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1DeregisterStreamConsumerInput = (
  input: DeregisterStreamConsumerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

const serializeAws_json1_1DescribeLimitsInput = (input: DescribeLimitsInput, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1DescribeStreamConsumerInput = (
  input: DescribeStreamConsumerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

const serializeAws_json1_1DescribeStreamInput = (input: DescribeStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1DescribeStreamSummaryInput = (
  input: DescribeStreamSummaryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1DisableEnhancedMonitoringInput = (
  input: DisableEnhancedMonitoringInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ShardLevelMetrics != null && {
      ShardLevelMetrics: serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context),
    }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1EnableEnhancedMonitoringInput = (
  input: EnableEnhancedMonitoringInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ShardLevelMetrics != null && {
      ShardLevelMetrics: serializeAws_json1_1MetricsNameList(input.ShardLevelMetrics, context),
    }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1GetRecordsInput = (input: GetRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ShardIterator != null && { ShardIterator: input.ShardIterator }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

const serializeAws_json1_1GetShardIteratorInput = (input: GetShardIteratorInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.ShardIteratorType != null && { ShardIteratorType: input.ShardIteratorType }),
    ...(input.StartingSequenceNumber != null && { StartingSequenceNumber: input.StartingSequenceNumber }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1IncreaseStreamRetentionPeriodInput = (
  input: IncreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1ListShardsInput = (input: ListShardsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShardFilter != null && { ShardFilter: serializeAws_json1_1ShardFilter(input.ShardFilter, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamCreationTimestamp != null && {
      StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
    }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1ListStreamConsumersInput = (
  input: ListStreamConsumersInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamCreationTimestamp != null && {
      StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
    }),
  };
};

const serializeAws_json1_1ListStreamsInput = (input: ListStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartStreamName != null && { ExclusiveStartStreamName: input.ExclusiveStartStreamName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForStreamInput = (input: ListTagsForStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartTagKey != null && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1MergeShardsInput = (input: MergeShardsInput, context: __SerdeContext): any => {
  return {
    ...(input.AdjacentShardToMerge != null && { AdjacentShardToMerge: input.AdjacentShardToMerge }),
    ...(input.ShardToMerge != null && { ShardToMerge: input.ShardToMerge }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1MetricsNameList = (input: (MetricsName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
    ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
    ...(input.SequenceNumberForOrdering != null && { SequenceNumberForOrdering: input.SequenceNumberForOrdering }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1PutRecordsInput = (input: PutRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Records != null && { Records: serializeAws_json1_1PutRecordsRequestEntryList(input.Records, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1PutRecordsRequestEntry = (input: PutRecordsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
    ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
  };
};

const serializeAws_json1_1PutRecordsRequestEntryList = (
  input: PutRecordsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PutRecordsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1RegisterStreamConsumerInput = (
  input: RegisterStreamConsumerInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

const serializeAws_json1_1RemoveTagsFromStreamInput = (
  input: RemoveTagsFromStreamInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1ShardFilter = (input: ShardFilter, context: __SerdeContext): any => {
  return {
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1SplitShardInput = (input: SplitShardInput, context: __SerdeContext): any => {
  return {
    ...(input.NewStartingHashKey != null && { NewStartingHashKey: input.NewStartingHashKey }),
    ...(input.ShardToSplit != null && { ShardToSplit: input.ShardToSplit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1StartingPosition = (input: StartingPosition, context: __SerdeContext): any => {
  return {
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1StartStreamEncryptionInput = (
  input: StartStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1StopStreamEncryptionInput = (
  input: StopStreamEncryptionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_json1_1StreamModeDetails = (input: StreamModeDetails, context: __SerdeContext): any => {
  return {
    ...(input.StreamMode != null && { StreamMode: input.StreamMode }),
  };
};

const serializeAws_json1_1SubscribeToShardInput = (input: SubscribeToShardInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.StartingPosition != null && {
      StartingPosition: serializeAws_json1_1StartingPosition(input.StartingPosition, context),
    }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1UpdateShardCountInput = (input: UpdateShardCountInput, context: __SerdeContext): any => {
  return {
    ...(input.ScalingType != null && { ScalingType: input.ScalingType }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.TargetShardCount != null && { TargetShardCount: input.TargetShardCount }),
  };
};

const serializeAws_json1_1UpdateStreamModeInput = (input: UpdateStreamModeInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamModeDetails != null && {
      StreamModeDetails: serializeAws_json1_1StreamModeDetails(input.StreamModeDetails, context),
    }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ChildShard = (output: any, context: __SerdeContext): ChildShard => {
  return {
    HashKeyRange:
      output.HashKeyRange != null ? deserializeAws_json1_1HashKeyRange(output.HashKeyRange, context) : undefined,
    ParentShards:
      output.ParentShards != null ? deserializeAws_json1_1ShardIdList(output.ParentShards, context) : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

const deserializeAws_json1_1ChildShardList = (output: any, context: __SerdeContext): ChildShard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ChildShard(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Consumer = (output: any, context: __SerdeContext): Consumer => {
  return {
    ConsumerARN: __expectString(output.ConsumerARN),
    ConsumerCreationTimestamp:
      output.ConsumerCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConsumerCreationTimestamp)))
        : undefined,
    ConsumerName: __expectString(output.ConsumerName),
    ConsumerStatus: __expectString(output.ConsumerStatus),
  } as any;
};

const deserializeAws_json1_1ConsumerDescription = (output: any, context: __SerdeContext): ConsumerDescription => {
  return {
    ConsumerARN: __expectString(output.ConsumerARN),
    ConsumerCreationTimestamp:
      output.ConsumerCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ConsumerCreationTimestamp)))
        : undefined,
    ConsumerName: __expectString(output.ConsumerName),
    ConsumerStatus: __expectString(output.ConsumerStatus),
    StreamARN: __expectString(output.StreamARN),
  } as any;
};

const deserializeAws_json1_1ConsumerList = (output: any, context: __SerdeContext): Consumer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Consumer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeLimitsOutput = (output: any, context: __SerdeContext): DescribeLimitsOutput => {
  return {
    OnDemandStreamCount: __expectInt32(output.OnDemandStreamCount),
    OnDemandStreamCountLimit: __expectInt32(output.OnDemandStreamCountLimit),
    OpenShardCount: __expectInt32(output.OpenShardCount),
    ShardLimit: __expectInt32(output.ShardLimit),
  } as any;
};

const deserializeAws_json1_1DescribeStreamConsumerOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamConsumerOutput => {
  return {
    ConsumerDescription:
      output.ConsumerDescription != null
        ? deserializeAws_json1_1ConsumerDescription(output.ConsumerDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStreamOutput = (output: any, context: __SerdeContext): DescribeStreamOutput => {
  return {
    StreamDescription:
      output.StreamDescription != null
        ? deserializeAws_json1_1StreamDescription(output.StreamDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStreamSummaryOutput = (
  output: any,
  context: __SerdeContext
): DescribeStreamSummaryOutput => {
  return {
    StreamDescriptionSummary:
      output.StreamDescriptionSummary != null
        ? deserializeAws_json1_1StreamDescriptionSummary(output.StreamDescriptionSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EnhancedMetrics = (output: any, context: __SerdeContext): EnhancedMetrics => {
  return {
    ShardLevelMetrics:
      output.ShardLevelMetrics != null
        ? deserializeAws_json1_1MetricsNameList(output.ShardLevelMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EnhancedMonitoringList = (output: any, context: __SerdeContext): EnhancedMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnhancedMetrics(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnhancedMonitoringOutput = (
  output: any,
  context: __SerdeContext
): EnhancedMonitoringOutput => {
  return {
    CurrentShardLevelMetrics:
      output.CurrentShardLevelMetrics != null
        ? deserializeAws_json1_1MetricsNameList(output.CurrentShardLevelMetrics, context)
        : undefined,
    DesiredShardLevelMetrics:
      output.DesiredShardLevelMetrics != null
        ? deserializeAws_json1_1MetricsNameList(output.DesiredShardLevelMetrics, context)
        : undefined,
    StreamARN: __expectString(output.StreamARN),
    StreamName: __expectString(output.StreamName),
  } as any;
};

const deserializeAws_json1_1ExpiredIteratorException = (
  output: any,
  context: __SerdeContext
): ExpiredIteratorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return {
    ChildShards:
      output.ChildShards != null ? deserializeAws_json1_1ChildShardList(output.ChildShards, context) : undefined,
    MillisBehindLatest: __expectLong(output.MillisBehindLatest),
    NextShardIterator: __expectString(output.NextShardIterator),
    Records: output.Records != null ? deserializeAws_json1_1RecordList(output.Records, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetShardIteratorOutput = (output: any, context: __SerdeContext): GetShardIteratorOutput => {
  return {
    ShardIterator: __expectString(output.ShardIterator),
  } as any;
};

const deserializeAws_json1_1HashKeyRange = (output: any, context: __SerdeContext): HashKeyRange => {
  return {
    EndingHashKey: __expectString(output.EndingHashKey),
    StartingHashKey: __expectString(output.StartingHashKey),
  } as any;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
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

const deserializeAws_json1_1KMSAccessDeniedException = (
  output: any,
  context: __SerdeContext
): KMSAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSDisabledException = (output: any, context: __SerdeContext): KMSDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSNotFoundException = (output: any, context: __SerdeContext): KMSNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSOptInRequired = (output: any, context: __SerdeContext): KMSOptInRequired => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KMSThrottlingException = (output: any, context: __SerdeContext): KMSThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListShardsOutput = (output: any, context: __SerdeContext): ListShardsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Shards: output.Shards != null ? deserializeAws_json1_1ShardList(output.Shards, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListStreamConsumersOutput = (
  output: any,
  context: __SerdeContext
): ListStreamConsumersOutput => {
  return {
    Consumers: output.Consumers != null ? deserializeAws_json1_1ConsumerList(output.Consumers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListStreamsOutput = (output: any, context: __SerdeContext): ListStreamsOutput => {
  return {
    HasMoreStreams: __expectBoolean(output.HasMoreStreams),
    NextToken: __expectString(output.NextToken),
    StreamNames:
      output.StreamNames != null ? deserializeAws_json1_1StreamNameList(output.StreamNames, context) : undefined,
    StreamSummaries:
      output.StreamSummaries != null
        ? deserializeAws_json1_1StreamSummaryList(output.StreamSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForStreamOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForStreamOutput => {
  return {
    HasMoreTags: __expectBoolean(output.HasMoreTags),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricsNameList = (output: any, context: __SerdeContext): (MetricsName | string)[] => {
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

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutRecordOutput = (output: any, context: __SerdeContext): PutRecordOutput => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    SequenceNumber: __expectString(output.SequenceNumber),
    ShardId: __expectString(output.ShardId),
  } as any;
};

const deserializeAws_json1_1PutRecordsOutput = (output: any, context: __SerdeContext): PutRecordsOutput => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    FailedRecordCount: __expectInt32(output.FailedRecordCount),
    Records:
      output.Records != null ? deserializeAws_json1_1PutRecordsResultEntryList(output.Records, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutRecordsResultEntry = (output: any, context: __SerdeContext): PutRecordsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    SequenceNumber: __expectString(output.SequenceNumber),
    ShardId: __expectString(output.ShardId),
  } as any;
};

const deserializeAws_json1_1PutRecordsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutRecordsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutRecordsResultEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    ApproximateArrivalTimestamp:
      output.ApproximateArrivalTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ApproximateArrivalTimestamp)))
        : undefined,
    Data: output.Data != null ? context.base64Decoder(output.Data) : undefined,
    EncryptionType: __expectString(output.EncryptionType),
    PartitionKey: __expectString(output.PartitionKey),
    SequenceNumber: __expectString(output.SequenceNumber),
  } as any;
};

const deserializeAws_json1_1RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1_Record(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RegisterStreamConsumerOutput = (
  output: any,
  context: __SerdeContext
): RegisterStreamConsumerOutput => {
  return {
    Consumer: output.Consumer != null ? deserializeAws_json1_1Consumer(output.Consumer, context) : undefined,
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

const deserializeAws_json1_1SequenceNumberRange = (output: any, context: __SerdeContext): SequenceNumberRange => {
  return {
    EndingSequenceNumber: __expectString(output.EndingSequenceNumber),
    StartingSequenceNumber: __expectString(output.StartingSequenceNumber),
  } as any;
};

const deserializeAws_json1_1Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    AdjacentParentShardId: __expectString(output.AdjacentParentShardId),
    HashKeyRange:
      output.HashKeyRange != null ? deserializeAws_json1_1HashKeyRange(output.HashKeyRange, context) : undefined,
    ParentShardId: __expectString(output.ParentShardId),
    SequenceNumberRange:
      output.SequenceNumberRange != null
        ? deserializeAws_json1_1SequenceNumberRange(output.SequenceNumberRange, context)
        : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

const deserializeAws_json1_1ShardIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ShardList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Shard(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StreamDescription = (output: any, context: __SerdeContext): StreamDescription => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedMonitoring:
      output.EnhancedMonitoring != null
        ? deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context)
        : undefined,
    HasMoreShards: __expectBoolean(output.HasMoreShards),
    KeyId: __expectString(output.KeyId),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
    Shards: output.Shards != null ? deserializeAws_json1_1ShardList(output.Shards, context) : undefined,
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null
        ? deserializeAws_json1_1StreamModeDetails(output.StreamModeDetails, context)
        : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

const deserializeAws_json1_1StreamDescriptionSummary = (
  output: any,
  context: __SerdeContext
): StreamDescriptionSummary => {
  return {
    ConsumerCount: __expectInt32(output.ConsumerCount),
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedMonitoring:
      output.EnhancedMonitoring != null
        ? deserializeAws_json1_1EnhancedMonitoringList(output.EnhancedMonitoring, context)
        : undefined,
    KeyId: __expectString(output.KeyId),
    OpenShardCount: __expectInt32(output.OpenShardCount),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null
        ? deserializeAws_json1_1StreamModeDetails(output.StreamModeDetails, context)
        : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

const deserializeAws_json1_1StreamModeDetails = (output: any, context: __SerdeContext): StreamModeDetails => {
  return {
    StreamMode: __expectString(output.StreamMode),
  } as any;
};

const deserializeAws_json1_1StreamNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1StreamSummary = (output: any, context: __SerdeContext): StreamSummary => {
  return {
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null
        ? deserializeAws_json1_1StreamModeDetails(output.StreamModeDetails, context)
        : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

const deserializeAws_json1_1StreamSummaryList = (output: any, context: __SerdeContext): StreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StreamSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubscribeToShardEvent = (output: any, context: __SerdeContext): SubscribeToShardEvent => {
  return {
    ChildShards:
      output.ChildShards != null ? deserializeAws_json1_1ChildShardList(output.ChildShards, context) : undefined,
    ContinuationSequenceNumber: __expectString(output.ContinuationSequenceNumber),
    MillisBehindLatest: __expectLong(output.MillisBehindLatest),
    Records: output.Records != null ? deserializeAws_json1_1RecordList(output.Records, context) : undefined,
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

const deserializeAws_json1_1UpdateShardCountOutput = (output: any, context: __SerdeContext): UpdateShardCountOutput => {
  return {
    CurrentShardCount: __expectInt32(output.CurrentShardCount),
    StreamARN: __expectString(output.StreamARN),
    StreamName: __expectString(output.StreamName),
    TargetShardCount: __expectInt32(output.TargetShardCount),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
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
