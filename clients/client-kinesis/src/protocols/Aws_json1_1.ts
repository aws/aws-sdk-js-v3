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

/**
 * serializeAws_json1_1AddTagsToStreamCommand
 */
export const se_AddTagsToStreamCommand = async (
  input: AddTagsToStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToStream");
  let body: any;
  body = JSON.stringify(se_AddTagsToStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStreamCommand
 */
export const se_CreateStreamCommand = async (
  input: CreateStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStream");
  let body: any;
  body = JSON.stringify(se_CreateStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DecreaseStreamRetentionPeriodCommand
 */
export const se_DecreaseStreamRetentionPeriodCommand = async (
  input: DecreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DecreaseStreamRetentionPeriod");
  let body: any;
  body = JSON.stringify(se_DecreaseStreamRetentionPeriodInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStreamCommand
 */
export const se_DeleteStreamCommand = async (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStream");
  let body: any;
  body = JSON.stringify(se_DeleteStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterStreamConsumerCommand
 */
export const se_DeregisterStreamConsumerCommand = async (
  input: DeregisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterStreamConsumer");
  let body: any;
  body = JSON.stringify(se_DeregisterStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLimitsCommand
 */
export const se_DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLimits");
  let body: any;
  body = JSON.stringify(se_DescribeLimitsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStreamCommand
 */
export const se_DescribeStreamCommand = async (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStream");
  let body: any;
  body = JSON.stringify(se_DescribeStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStreamConsumerCommand
 */
export const se_DescribeStreamConsumerCommand = async (
  input: DescribeStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStreamConsumer");
  let body: any;
  body = JSON.stringify(se_DescribeStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStreamSummaryCommand
 */
export const se_DescribeStreamSummaryCommand = async (
  input: DescribeStreamSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStreamSummary");
  let body: any;
  body = JSON.stringify(se_DescribeStreamSummaryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableEnhancedMonitoringCommand
 */
export const se_DisableEnhancedMonitoringCommand = async (
  input: DisableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableEnhancedMonitoring");
  let body: any;
  body = JSON.stringify(se_DisableEnhancedMonitoringInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableEnhancedMonitoringCommand
 */
export const se_EnableEnhancedMonitoringCommand = async (
  input: EnableEnhancedMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableEnhancedMonitoring");
  let body: any;
  body = JSON.stringify(se_EnableEnhancedMonitoringInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRecordsCommand
 */
export const se_GetRecordsCommand = async (
  input: GetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecords");
  let body: any;
  body = JSON.stringify(se_GetRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetShardIteratorCommand
 */
export const se_GetShardIteratorCommand = async (
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetShardIterator");
  let body: any;
  body = JSON.stringify(se_GetShardIteratorInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1IncreaseStreamRetentionPeriodCommand
 */
export const se_IncreaseStreamRetentionPeriodCommand = async (
  input: IncreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IncreaseStreamRetentionPeriod");
  let body: any;
  body = JSON.stringify(se_IncreaseStreamRetentionPeriodInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListShardsCommand
 */
export const se_ListShardsCommand = async (
  input: ListShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListShards");
  let body: any;
  body = JSON.stringify(se_ListShardsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStreamConsumersCommand
 */
export const se_ListStreamConsumersCommand = async (
  input: ListStreamConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStreamConsumers");
  let body: any;
  body = JSON.stringify(se_ListStreamConsumersInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStreamsCommand
 */
export const se_ListStreamsCommand = async (
  input: ListStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStreams");
  let body: any;
  body = JSON.stringify(se_ListStreamsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForStreamCommand
 */
export const se_ListTagsForStreamCommand = async (
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForStream");
  let body: any;
  body = JSON.stringify(se_ListTagsForStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeShardsCommand
 */
export const se_MergeShardsCommand = async (
  input: MergeShardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MergeShards");
  let body: any;
  body = JSON.stringify(se_MergeShardsInput(input, context));
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
 * serializeAws_json1_1PutRecordsCommand
 */
export const se_PutRecordsCommand = async (
  input: PutRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecords");
  let body: any;
  body = JSON.stringify(se_PutRecordsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterStreamConsumerCommand
 */
export const se_RegisterStreamConsumerCommand = async (
  input: RegisterStreamConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterStreamConsumer");
  let body: any;
  body = JSON.stringify(se_RegisterStreamConsumerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromStreamCommand
 */
export const se_RemoveTagsFromStreamCommand = async (
  input: RemoveTagsFromStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromStream");
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SplitShardCommand
 */
export const se_SplitShardCommand = async (
  input: SplitShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SplitShard");
  let body: any;
  body = JSON.stringify(se_SplitShardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartStreamEncryptionCommand
 */
export const se_StartStreamEncryptionCommand = async (
  input: StartStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartStreamEncryption");
  let body: any;
  body = JSON.stringify(se_StartStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopStreamEncryptionCommand
 */
export const se_StopStreamEncryptionCommand = async (
  input: StopStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopStreamEncryption");
  let body: any;
  body = JSON.stringify(se_StopStreamEncryptionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubscribeToShardCommand
 */
export const se_SubscribeToShardCommand = async (
  input: SubscribeToShardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubscribeToShard");
  let body: any;
  body = JSON.stringify(se_SubscribeToShardInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateShardCountCommand
 */
export const se_UpdateShardCountCommand = async (
  input: UpdateShardCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateShardCount");
  let body: any;
  body = JSON.stringify(se_UpdateShardCountInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStreamModeCommand
 */
export const se_UpdateStreamModeCommand = async (
  input: UpdateStreamModeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStreamMode");
  let body: any;
  body = JSON.stringify(se_UpdateStreamModeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsToStreamCommand
 */
export const de_AddTagsToStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddTagsToStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToStreamCommandError
 */
const de_AddTagsToStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreateStreamCommand
 */
export const de_CreateStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateStreamCommandError
 */
const de_CreateStreamCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
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
 * deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand
 */
export const de_DecreaseStreamRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecreaseStreamRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DecreaseStreamRetentionPeriodCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DecreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DecreaseStreamRetentionPeriodCommandError
 */
const de_DecreaseStreamRetentionPeriodCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteStreamCommand
 */
export const de_DeleteStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteStreamCommandError
 */
const de_DeleteStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeregisterStreamConsumerCommand
 */
export const de_DeregisterStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterStreamConsumerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterStreamConsumerCommandError
 */
const de_DeregisterStreamConsumerCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeLimitsCommand
 */
export const de_DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLimitsCommandError
 */
const de_DescribeLimitsCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeStreamCommand
 */
export const de_DescribeStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStreamOutput(data, context);
  const response: DescribeStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStreamCommandError
 */
const de_DescribeStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeStreamConsumerCommand
 */
export const de_DescribeStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStreamConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStreamConsumerOutput(data, context);
  const response: DescribeStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStreamConsumerCommandError
 */
const de_DescribeStreamConsumerCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeStreamSummaryCommand
 */
export const de_DescribeStreamSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStreamSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStreamSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStreamSummaryOutput(data, context);
  const response: DescribeStreamSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStreamSummaryCommandError
 */
const de_DescribeStreamSummaryCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1DisableEnhancedMonitoringCommand
 */
export const de_DisableEnhancedMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableEnhancedMonitoringCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableEnhancedMonitoringCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnhancedMonitoringOutput(data, context);
  const response: DisableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableEnhancedMonitoringCommandError
 */
const de_DisableEnhancedMonitoringCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1EnableEnhancedMonitoringCommand
 */
export const de_EnableEnhancedMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableEnhancedMonitoringCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableEnhancedMonitoringCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnhancedMonitoringOutput(data, context);
  const response: EnableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableEnhancedMonitoringCommandError
 */
const de_EnableEnhancedMonitoringCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetRecordsCommand
 */
export const de_GetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecordsOutput(data, context);
  const response: GetRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRecordsCommandError
 */
const de_GetRecordsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredIteratorException":
    case "com.amazonaws.kinesis#ExpiredIteratorException":
      throw await de_ExpiredIteratorExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await de_KMSOptInRequiredRes(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetShardIteratorCommand
 */
export const de_GetShardIteratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetShardIteratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetShardIteratorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetShardIteratorOutput(data, context);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetShardIteratorCommandError
 */
const de_GetShardIteratorCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand
 */
export const de_IncreaseStreamRetentionPeriodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IncreaseStreamRetentionPeriodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IncreaseStreamRetentionPeriodCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: IncreaseStreamRetentionPeriodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1IncreaseStreamRetentionPeriodCommandError
 */
const de_IncreaseStreamRetentionPeriodCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListShardsCommand
 */
export const de_ListShardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListShardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListShardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListShardsOutput(data, context);
  const response: ListShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListShardsCommandError
 */
const de_ListShardsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredNextTokenException":
    case "com.amazonaws.kinesis#ExpiredNextTokenException":
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListStreamConsumersCommand
 */
export const de_ListStreamConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamConsumersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStreamConsumersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStreamConsumersOutput(data, context);
  const response: ListStreamConsumersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStreamConsumersCommandError
 */
const de_ListStreamConsumersCommandError = async (
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
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListStreamsCommand
 */
export const de_ListStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStreamsOutput(data, context);
  const response: ListStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStreamsCommandError
 */
const de_ListStreamsCommandError = async (
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
      throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForStreamCommand
 */
export const de_ListTagsForStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForStreamOutput(data, context);
  const response: ListTagsForStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForStreamCommandError
 */
const de_ListTagsForStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1MergeShardsCommand
 */
export const de_MergeShardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeShardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergeShardsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: MergeShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1MergeShardsCommandError
 */
const de_MergeShardsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.kinesis#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await de_KMSOptInRequiredRes(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutRecordsCommand
 */
export const de_PutRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRecordsOutput(data, context);
  const response: PutRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRecordsCommandError
 */
const de_PutRecordsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await de_KMSOptInRequiredRes(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1RegisterStreamConsumerCommand
 */
export const de_RegisterStreamConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterStreamConsumerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterStreamConsumerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterStreamConsumerOutput(data, context);
  const response: RegisterStreamConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterStreamConsumerCommandError
 */
const de_RegisterStreamConsumerCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1RemoveTagsFromStreamCommand
 */
export const de_RemoveTagsFromStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromStreamCommandError
 */
const de_RemoveTagsFromStreamCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1SplitShardCommand
 */
export const de_SplitShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SplitShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SplitShardCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SplitShardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SplitShardCommandError
 */
const de_SplitShardCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartStreamEncryptionCommand
 */
export const de_StartStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartStreamEncryptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartStreamEncryptionCommandError
 */
const de_StartStreamEncryptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.kinesis#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.kinesis#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.kinesis#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.kinesis#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.kinesis#KMSOptInRequired":
      throw await de_KMSOptInRequiredRes(parsedOutput, context);
    case "KMSThrottlingException":
    case "com.amazonaws.kinesis#KMSThrottlingException":
      throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1StopStreamEncryptionCommand
 */
export const de_StopStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopStreamEncryptionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopStreamEncryptionCommandError
 */
const de_StopStreamEncryptionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1SubscribeToShardCommand
 */
export const de_SubscribeToShardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<SubscribeToShardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubscribeToShardCommandError(output, context);
  }
  const contents = { EventStream: de_SubscribeToShardEventStream(output.body, context) };
  const response: SubscribeToShardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SubscribeToShardCommandError
 */
const de_SubscribeToShardCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateShardCountCommand
 */
export const de_UpdateShardCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateShardCountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateShardCountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateShardCountOutput(data, context);
  const response: UpdateShardCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateShardCountCommandError
 */
const de_UpdateShardCountCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kinesis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateStreamModeCommand
 */
export const de_UpdateStreamModeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStreamModeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStreamModeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateStreamModeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateStreamModeCommandError
 */
const de_UpdateStreamModeCommandError = async (
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
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesis#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesis#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis#ResourceNotFoundException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredIteratorExceptionRes
 */
const de_ExpiredIteratorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExpiredIteratorException(body, context);
  const exception = new ExpiredIteratorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredNextTokenExceptionRes
 */
const de_ExpiredNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExpiredNextTokenException(body, context);
  const exception = new ExpiredNextTokenException({
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
 * deserializeAws_json1_1KMSAccessDeniedExceptionRes
 */
const de_KMSAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSAccessDeniedException(body, context);
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSDisabledExceptionRes
 */
const de_KMSDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSDisabledException(body, context);
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSInvalidStateExceptionRes
 */
const de_KMSInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSInvalidStateException(body, context);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSNotFoundExceptionRes
 */
const de_KMSNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSNotFoundException(body, context);
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSOptInRequiredRes
 */
const de_KMSOptInRequiredRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSOptInRequired(body, context);
  const exception = new KMSOptInRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSThrottlingExceptionRes
 */
const de_KMSThrottlingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSThrottlingException(body, context);
  const exception = new KMSThrottlingException({
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
 * deserializeAws_json1_1ProvisionedThroughputExceededExceptionRes
 */
const de_ProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
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
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SubscribeToShardEventStream
 */
const de_SubscribeToShardEventStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<SubscribeToShardEventStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["SubscribeToShardEvent"] != null) {
      return {
        SubscribeToShardEvent: await de_SubscribeToShardEvent_event(event["SubscribeToShardEvent"], context),
      };
    }
    if (event["ResourceNotFoundException"] != null) {
      return {
        ResourceNotFoundException: await de_ResourceNotFoundException_event(
          event["ResourceNotFoundException"],
          context
        ),
      };
    }
    if (event["ResourceInUseException"] != null) {
      return {
        ResourceInUseException: await de_ResourceInUseException_event(event["ResourceInUseException"], context),
      };
    }
    if (event["KMSDisabledException"] != null) {
      return {
        KMSDisabledException: await de_KMSDisabledException_event(event["KMSDisabledException"], context),
      };
    }
    if (event["KMSInvalidStateException"] != null) {
      return {
        KMSInvalidStateException: await de_KMSInvalidStateException_event(event["KMSInvalidStateException"], context),
      };
    }
    if (event["KMSAccessDeniedException"] != null) {
      return {
        KMSAccessDeniedException: await de_KMSAccessDeniedException_event(event["KMSAccessDeniedException"], context),
      };
    }
    if (event["KMSNotFoundException"] != null) {
      return {
        KMSNotFoundException: await de_KMSNotFoundException_event(event["KMSNotFoundException"], context),
      };
    }
    if (event["KMSOptInRequired"] != null) {
      return {
        KMSOptInRequired: await de_KMSOptInRequired_event(event["KMSOptInRequired"], context),
      };
    }
    if (event["KMSThrottlingException"] != null) {
      return {
        KMSThrottlingException: await de_KMSThrottlingException_event(event["KMSThrottlingException"], context),
      };
    }
    if (event["InternalFailureException"] != null) {
      return {
        InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalFailureExceptionRes(parsedOutput, context);
};
const de_KMSAccessDeniedException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSAccessDeniedExceptionRes(parsedOutput, context);
};
const de_KMSDisabledException_event = async (output: any, context: __SerdeContext): Promise<KMSDisabledException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSDisabledExceptionRes(parsedOutput, context);
};
const de_KMSInvalidStateException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSInvalidStateExceptionRes(parsedOutput, context);
};
const de_KMSNotFoundException_event = async (output: any, context: __SerdeContext): Promise<KMSNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSNotFoundExceptionRes(parsedOutput, context);
};
const de_KMSOptInRequired_event = async (output: any, context: __SerdeContext): Promise<KMSOptInRequired> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSOptInRequiredRes(parsedOutput, context);
};
const de_KMSThrottlingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_KMSThrottlingExceptionRes(parsedOutput, context);
};
const de_ResourceInUseException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ResourceInUseExceptionRes(parsedOutput, context);
};
const de_ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ResourceNotFoundExceptionRes(parsedOutput, context);
};
const de_SubscribeToShardEvent_event = async (output: any, context: __SerdeContext): Promise<SubscribeToShardEvent> => {
  const contents: SubscribeToShardEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_SubscribeToShardEvent(data, context));
  return contents;
};
/**
 * deserializeAws_json1_1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalFailureException(body, context);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsToStreamInput
 */
const se_AddTagsToStreamInput = (input: AddTagsToStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateStreamInput
 */
const se_CreateStreamInput = (input: CreateStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
    ...(input.StreamModeDetails != null && {
      StreamModeDetails: se_StreamModeDetails(input.StreamModeDetails, context),
    }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1DecreaseStreamRetentionPeriodInput
 */
const se_DecreaseStreamRetentionPeriodInput = (
  input: DecreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1DeleteStreamInput
 */
const se_DeleteStreamInput = (input: DeleteStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.EnforceConsumerDeletion != null && { EnforceConsumerDeletion: input.EnforceConsumerDeletion }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1DeregisterStreamConsumerInput
 */
const se_DeregisterStreamConsumerInput = (input: DeregisterStreamConsumerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

/**
 * serializeAws_json1_1DescribeLimitsInput
 */
const se_DescribeLimitsInput = (input: DescribeLimitsInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeStreamConsumerInput
 */
const se_DescribeStreamConsumerInput = (input: DescribeStreamConsumerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

/**
 * serializeAws_json1_1DescribeStreamInput
 */
const se_DescribeStreamInput = (input: DescribeStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1DescribeStreamSummaryInput
 */
const se_DescribeStreamSummaryInput = (input: DescribeStreamSummaryInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1DisableEnhancedMonitoringInput
 */
const se_DisableEnhancedMonitoringInput = (input: DisableEnhancedMonitoringInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardLevelMetrics != null && { ShardLevelMetrics: se_MetricsNameList(input.ShardLevelMetrics, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1EnableEnhancedMonitoringInput
 */
const se_EnableEnhancedMonitoringInput = (input: EnableEnhancedMonitoringInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardLevelMetrics != null && { ShardLevelMetrics: se_MetricsNameList(input.ShardLevelMetrics, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1GetRecordsInput
 */
const se_GetRecordsInput = (input: GetRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.ShardIterator != null && { ShardIterator: input.ShardIterator }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

/**
 * serializeAws_json1_1GetShardIteratorInput
 */
const se_GetShardIteratorInput = (input: GetShardIteratorInput, context: __SerdeContext): any => {
  return {
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.ShardIteratorType != null && { ShardIteratorType: input.ShardIteratorType }),
    ...(input.StartingSequenceNumber != null && { StartingSequenceNumber: input.StartingSequenceNumber }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1IncreaseStreamRetentionPeriodInput
 */
const se_IncreaseStreamRetentionPeriodInput = (
  input: IncreaseStreamRetentionPeriodInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1ListShardsInput
 */
const se_ListShardsInput = (input: ListShardsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartShardId != null && { ExclusiveStartShardId: input.ExclusiveStartShardId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ShardFilter != null && { ShardFilter: se_ShardFilter(input.ShardFilter, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamCreationTimestamp != null && {
      StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
    }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1ListStreamConsumersInput
 */
const se_ListStreamConsumersInput = (input: ListStreamConsumersInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamCreationTimestamp != null && {
      StreamCreationTimestamp: Math.round(input.StreamCreationTimestamp.getTime() / 1000),
    }),
  };
};

/**
 * serializeAws_json1_1ListStreamsInput
 */
const se_ListStreamsInput = (input: ListStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartStreamName != null && { ExclusiveStartStreamName: input.ExclusiveStartStreamName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForStreamInput
 */
const se_ListTagsForStreamInput = (input: ListTagsForStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.ExclusiveStartTagKey != null && { ExclusiveStartTagKey: input.ExclusiveStartTagKey }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1MergeShardsInput
 */
const se_MergeShardsInput = (input: MergeShardsInput, context: __SerdeContext): any => {
  return {
    ...(input.AdjacentShardToMerge != null && { AdjacentShardToMerge: input.AdjacentShardToMerge }),
    ...(input.ShardToMerge != null && { ShardToMerge: input.ShardToMerge }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1MetricsNameList
 */
const se_MetricsNameList = (input: (MetricsName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutRecordInput
 */
const se_PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
    ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
    ...(input.SequenceNumberForOrdering != null && { SequenceNumberForOrdering: input.SequenceNumberForOrdering }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1PutRecordsInput
 */
const se_PutRecordsInput = (input: PutRecordsInput, context: __SerdeContext): any => {
  return {
    ...(input.Records != null && { Records: se_PutRecordsRequestEntryList(input.Records, context) }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1PutRecordsRequestEntry
 */
const se_PutRecordsRequestEntry = (input: PutRecordsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
    ...(input.ExplicitHashKey != null && { ExplicitHashKey: input.ExplicitHashKey }),
    ...(input.PartitionKey != null && { PartitionKey: input.PartitionKey }),
  };
};

/**
 * serializeAws_json1_1PutRecordsRequestEntryList
 */
const se_PutRecordsRequestEntryList = (input: PutRecordsRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutRecordsRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1RegisterStreamConsumerInput
 */
const se_RegisterStreamConsumerInput = (input: RegisterStreamConsumerInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsumerName != null && { ConsumerName: input.ConsumerName }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromStreamInput
 */
const se_RemoveTagsFromStreamInput = (input: RemoveTagsFromStreamInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ShardFilter
 */
const se_ShardFilter = (input: ShardFilter, context: __SerdeContext): any => {
  return {
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1SplitShardInput
 */
const se_SplitShardInput = (input: SplitShardInput, context: __SerdeContext): any => {
  return {
    ...(input.NewStartingHashKey != null && { NewStartingHashKey: input.NewStartingHashKey }),
    ...(input.ShardToSplit != null && { ShardToSplit: input.ShardToSplit }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1StartingPosition
 */
const se_StartingPosition = (input: StartingPosition, context: __SerdeContext): any => {
  return {
    ...(input.SequenceNumber != null && { SequenceNumber: input.SequenceNumber }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1StartStreamEncryptionInput
 */
const se_StartStreamEncryptionInput = (input: StartStreamEncryptionInput, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1StopStreamEncryptionInput
 */
const se_StopStreamEncryptionInput = (input: StopStreamEncryptionInput, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

/**
 * serializeAws_json1_1StreamModeDetails
 */
const se_StreamModeDetails = (input: StreamModeDetails, context: __SerdeContext): any => {
  return {
    ...(input.StreamMode != null && { StreamMode: input.StreamMode }),
  };
};

/**
 * serializeAws_json1_1SubscribeToShardInput
 */
const se_SubscribeToShardInput = (input: SubscribeToShardInput, context: __SerdeContext): any => {
  return {
    ...(input.ConsumerARN != null && { ConsumerARN: input.ConsumerARN }),
    ...(input.ShardId != null && { ShardId: input.ShardId }),
    ...(input.StartingPosition != null && { StartingPosition: se_StartingPosition(input.StartingPosition, context) }),
  };
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
 * serializeAws_json1_1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UpdateShardCountInput
 */
const se_UpdateShardCountInput = (input: UpdateShardCountInput, context: __SerdeContext): any => {
  return {
    ...(input.ScalingType != null && { ScalingType: input.ScalingType }),
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
    ...(input.TargetShardCount != null && { TargetShardCount: input.TargetShardCount }),
  };
};

/**
 * serializeAws_json1_1UpdateStreamModeInput
 */
const se_UpdateStreamModeInput = (input: UpdateStreamModeInput, context: __SerdeContext): any => {
  return {
    ...(input.StreamARN != null && { StreamARN: input.StreamARN }),
    ...(input.StreamModeDetails != null && {
      StreamModeDetails: se_StreamModeDetails(input.StreamModeDetails, context),
    }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ChildShard
 */
const de_ChildShard = (output: any, context: __SerdeContext): ChildShard => {
  return {
    HashKeyRange: output.HashKeyRange != null ? de_HashKeyRange(output.HashKeyRange, context) : undefined,
    ParentShards: output.ParentShards != null ? de_ShardIdList(output.ParentShards, context) : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

/**
 * deserializeAws_json1_1ChildShardList
 */
const de_ChildShardList = (output: any, context: __SerdeContext): ChildShard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChildShard(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Consumer
 */
const de_Consumer = (output: any, context: __SerdeContext): Consumer => {
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

/**
 * deserializeAws_json1_1ConsumerDescription
 */
const de_ConsumerDescription = (output: any, context: __SerdeContext): ConsumerDescription => {
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

/**
 * deserializeAws_json1_1ConsumerList
 */
const de_ConsumerList = (output: any, context: __SerdeContext): Consumer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Consumer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeLimitsOutput
 */
const de_DescribeLimitsOutput = (output: any, context: __SerdeContext): DescribeLimitsOutput => {
  return {
    OnDemandStreamCount: __expectInt32(output.OnDemandStreamCount),
    OnDemandStreamCountLimit: __expectInt32(output.OnDemandStreamCountLimit),
    OpenShardCount: __expectInt32(output.OpenShardCount),
    ShardLimit: __expectInt32(output.ShardLimit),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStreamConsumerOutput
 */
const de_DescribeStreamConsumerOutput = (output: any, context: __SerdeContext): DescribeStreamConsumerOutput => {
  return {
    ConsumerDescription:
      output.ConsumerDescription != null ? de_ConsumerDescription(output.ConsumerDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStreamOutput
 */
const de_DescribeStreamOutput = (output: any, context: __SerdeContext): DescribeStreamOutput => {
  return {
    StreamDescription:
      output.StreamDescription != null ? de_StreamDescription(output.StreamDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStreamSummaryOutput
 */
const de_DescribeStreamSummaryOutput = (output: any, context: __SerdeContext): DescribeStreamSummaryOutput => {
  return {
    StreamDescriptionSummary:
      output.StreamDescriptionSummary != null
        ? de_StreamDescriptionSummary(output.StreamDescriptionSummary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnhancedMetrics
 */
const de_EnhancedMetrics = (output: any, context: __SerdeContext): EnhancedMetrics => {
  return {
    ShardLevelMetrics:
      output.ShardLevelMetrics != null ? de_MetricsNameList(output.ShardLevelMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnhancedMonitoringList
 */
const de_EnhancedMonitoringList = (output: any, context: __SerdeContext): EnhancedMetrics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnhancedMetrics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnhancedMonitoringOutput
 */
const de_EnhancedMonitoringOutput = (output: any, context: __SerdeContext): EnhancedMonitoringOutput => {
  return {
    CurrentShardLevelMetrics:
      output.CurrentShardLevelMetrics != null
        ? de_MetricsNameList(output.CurrentShardLevelMetrics, context)
        : undefined,
    DesiredShardLevelMetrics:
      output.DesiredShardLevelMetrics != null
        ? de_MetricsNameList(output.DesiredShardLevelMetrics, context)
        : undefined,
    StreamARN: __expectString(output.StreamARN),
    StreamName: __expectString(output.StreamName),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredIteratorException
 */
const de_ExpiredIteratorException = (output: any, context: __SerdeContext): ExpiredIteratorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredNextTokenException
 */
const de_ExpiredNextTokenException = (output: any, context: __SerdeContext): ExpiredNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GetRecordsOutput
 */
const de_GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return {
    ChildShards: output.ChildShards != null ? de_ChildShardList(output.ChildShards, context) : undefined,
    MillisBehindLatest: __expectLong(output.MillisBehindLatest),
    NextShardIterator: __expectString(output.NextShardIterator),
    Records: output.Records != null ? de_RecordList(output.Records, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetShardIteratorOutput
 */
const de_GetShardIteratorOutput = (output: any, context: __SerdeContext): GetShardIteratorOutput => {
  return {
    ShardIterator: __expectString(output.ShardIterator),
  } as any;
};

/**
 * deserializeAws_json1_1HashKeyRange
 */
const de_HashKeyRange = (output: any, context: __SerdeContext): HashKeyRange => {
  return {
    EndingHashKey: __expectString(output.EndingHashKey),
    StartingHashKey: __expectString(output.StartingHashKey),
  } as any;
};

/**
 * deserializeAws_json1_1InternalFailureException
 */
const de_InternalFailureException = (output: any, context: __SerdeContext): InternalFailureException => {
  return {
    message: __expectString(output.message),
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
 * deserializeAws_json1_1KMSAccessDeniedException
 */
const de_KMSAccessDeniedException = (output: any, context: __SerdeContext): KMSAccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSDisabledException
 */
const de_KMSDisabledException = (output: any, context: __SerdeContext): KMSDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSInvalidStateException
 */
const de_KMSInvalidStateException = (output: any, context: __SerdeContext): KMSInvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSNotFoundException
 */
const de_KMSNotFoundException = (output: any, context: __SerdeContext): KMSNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSOptInRequired
 */
const de_KMSOptInRequired = (output: any, context: __SerdeContext): KMSOptInRequired => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KMSThrottlingException
 */
const de_KMSThrottlingException = (output: any, context: __SerdeContext): KMSThrottlingException => {
  return {
    message: __expectString(output.message),
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
 * deserializeAws_json1_1ListShardsOutput
 */
const de_ListShardsOutput = (output: any, context: __SerdeContext): ListShardsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Shards: output.Shards != null ? de_ShardList(output.Shards, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStreamConsumersOutput
 */
const de_ListStreamConsumersOutput = (output: any, context: __SerdeContext): ListStreamConsumersOutput => {
  return {
    Consumers: output.Consumers != null ? de_ConsumerList(output.Consumers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListStreamsOutput
 */
const de_ListStreamsOutput = (output: any, context: __SerdeContext): ListStreamsOutput => {
  return {
    HasMoreStreams: __expectBoolean(output.HasMoreStreams),
    NextToken: __expectString(output.NextToken),
    StreamNames: output.StreamNames != null ? de_StreamNameList(output.StreamNames, context) : undefined,
    StreamSummaries: output.StreamSummaries != null ? de_StreamSummaryList(output.StreamSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForStreamOutput
 */
const de_ListTagsForStreamOutput = (output: any, context: __SerdeContext): ListTagsForStreamOutput => {
  return {
    HasMoreTags: __expectBoolean(output.HasMoreTags),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricsNameList
 */
const de_MetricsNameList = (output: any, context: __SerdeContext): (MetricsName | string)[] => {
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
 * deserializeAws_json1_1ProvisionedThroughputExceededException
 */
const de_ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordOutput
 */
const de_PutRecordOutput = (output: any, context: __SerdeContext): PutRecordOutput => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    SequenceNumber: __expectString(output.SequenceNumber),
    ShardId: __expectString(output.ShardId),
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordsOutput
 */
const de_PutRecordsOutput = (output: any, context: __SerdeContext): PutRecordsOutput => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    FailedRecordCount: __expectInt32(output.FailedRecordCount),
    Records: output.Records != null ? de_PutRecordsResultEntryList(output.Records, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordsResultEntry
 */
const de_PutRecordsResultEntry = (output: any, context: __SerdeContext): PutRecordsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    SequenceNumber: __expectString(output.SequenceNumber),
    ShardId: __expectString(output.ShardId),
  } as any;
};

/**
 * deserializeAws_json1_1PutRecordsResultEntryList
 */
const de_PutRecordsResultEntryList = (output: any, context: __SerdeContext): PutRecordsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PutRecordsResultEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
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

/**
 * deserializeAws_json1_1RecordList
 */
const de_RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegisterStreamConsumerOutput
 */
const de_RegisterStreamConsumerOutput = (output: any, context: __SerdeContext): RegisterStreamConsumerOutput => {
  return {
    Consumer: output.Consumer != null ? de_Consumer(output.Consumer, context) : undefined,
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
 * deserializeAws_json1_1SequenceNumberRange
 */
const de_SequenceNumberRange = (output: any, context: __SerdeContext): SequenceNumberRange => {
  return {
    EndingSequenceNumber: __expectString(output.EndingSequenceNumber),
    StartingSequenceNumber: __expectString(output.StartingSequenceNumber),
  } as any;
};

/**
 * deserializeAws_json1_1Shard
 */
const de_Shard = (output: any, context: __SerdeContext): Shard => {
  return {
    AdjacentParentShardId: __expectString(output.AdjacentParentShardId),
    HashKeyRange: output.HashKeyRange != null ? de_HashKeyRange(output.HashKeyRange, context) : undefined,
    ParentShardId: __expectString(output.ParentShardId),
    SequenceNumberRange:
      output.SequenceNumberRange != null ? de_SequenceNumberRange(output.SequenceNumberRange, context) : undefined,
    ShardId: __expectString(output.ShardId),
  } as any;
};

/**
 * deserializeAws_json1_1ShardIdList
 */
const de_ShardIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ShardList
 */
const de_ShardList = (output: any, context: __SerdeContext): Shard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Shard(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StreamDescription
 */
const de_StreamDescription = (output: any, context: __SerdeContext): StreamDescription => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedMonitoring:
      output.EnhancedMonitoring != null ? de_EnhancedMonitoringList(output.EnhancedMonitoring, context) : undefined,
    HasMoreShards: __expectBoolean(output.HasMoreShards),
    KeyId: __expectString(output.KeyId),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
    Shards: output.Shards != null ? de_ShardList(output.Shards, context) : undefined,
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null ? de_StreamModeDetails(output.StreamModeDetails, context) : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StreamDescriptionSummary
 */
const de_StreamDescriptionSummary = (output: any, context: __SerdeContext): StreamDescriptionSummary => {
  return {
    ConsumerCount: __expectInt32(output.ConsumerCount),
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedMonitoring:
      output.EnhancedMonitoring != null ? de_EnhancedMonitoringList(output.EnhancedMonitoring, context) : undefined,
    KeyId: __expectString(output.KeyId),
    OpenShardCount: __expectInt32(output.OpenShardCount),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null ? de_StreamModeDetails(output.StreamModeDetails, context) : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StreamModeDetails
 */
const de_StreamModeDetails = (output: any, context: __SerdeContext): StreamModeDetails => {
  return {
    StreamMode: __expectString(output.StreamMode),
  } as any;
};

/**
 * deserializeAws_json1_1StreamNameList
 */
const de_StreamNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1StreamSummary
 */
const de_StreamSummary = (output: any, context: __SerdeContext): StreamSummary => {
  return {
    StreamARN: __expectString(output.StreamARN),
    StreamCreationTimestamp:
      output.StreamCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StreamCreationTimestamp)))
        : undefined,
    StreamModeDetails:
      output.StreamModeDetails != null ? de_StreamModeDetails(output.StreamModeDetails, context) : undefined,
    StreamName: __expectString(output.StreamName),
    StreamStatus: __expectString(output.StreamStatus),
  } as any;
};

/**
 * deserializeAws_json1_1StreamSummaryList
 */
const de_StreamSummaryList = (output: any, context: __SerdeContext): StreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StreamSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubscribeToShardEvent
 */
const de_SubscribeToShardEvent = (output: any, context: __SerdeContext): SubscribeToShardEvent => {
  return {
    ChildShards: output.ChildShards != null ? de_ChildShardList(output.ChildShards, context) : undefined,
    ContinuationSequenceNumber: __expectString(output.ContinuationSequenceNumber),
    MillisBehindLatest: __expectLong(output.MillisBehindLatest),
    Records: output.Records != null ? de_RecordList(output.Records, context) : undefined,
  } as any;
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
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1UpdateShardCountOutput
 */
const de_UpdateShardCountOutput = (output: any, context: __SerdeContext): UpdateShardCountOutput => {
  return {
    CurrentShardCount: __expectInt32(output.CurrentShardCount),
    StreamARN: __expectString(output.StreamARN),
    StreamName: __expectString(output.StreamName),
    TargetShardCount: __expectInt32(output.TargetShardCount),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Kinesis_20131202.${operation}`,
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
