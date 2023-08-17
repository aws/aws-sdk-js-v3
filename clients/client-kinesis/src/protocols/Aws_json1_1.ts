// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  Consumer,
  ConsumerDescription,
  CreateStreamInput,
  DecreaseStreamRetentionPeriodInput,
  DeleteStreamInput,
  DeregisterStreamConsumerInput,
  DescribeLimitsInput,
  DescribeStreamConsumerInput,
  DescribeStreamConsumerOutput,
  DescribeStreamInput,
  DescribeStreamOutput,
  DescribeStreamSummaryInput,
  DescribeStreamSummaryOutput,
  DisableEnhancedMonitoringInput,
  EnableEnhancedMonitoringInput,
  ExpiredIteratorException,
  ExpiredNextTokenException,
  GetRecordsInput,
  GetRecordsOutput,
  GetShardIteratorInput,
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
  ListStreamConsumersInput,
  ListStreamConsumersOutput,
  ListStreamsInput,
  ListStreamsOutput,
  ListTagsForStreamInput,
  MergeShardsInput,
  MetricsName,
  ProvisionedThroughputExceededException,
  PutRecordInput,
  PutRecordsInput,
  PutRecordsRequestEntry,
  RegisterStreamConsumerInput,
  RegisterStreamConsumerOutput,
  RemoveTagsFromStreamInput,
  ResourceInUseException,
  ResourceNotFoundException,
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
  UpdateShardCountInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableEnhancedMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetShardIteratorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListShardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateShardCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
 * deserializeAws_json1_1ExpiredIteratorExceptionRes
 */
const de_ExpiredIteratorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredIteratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsToStreamInput omitted.

// se_CreateStreamInput omitted.

// se_DecreaseStreamRetentionPeriodInput omitted.

// se_DeleteStreamInput omitted.

// se_DeregisterStreamConsumerInput omitted.

// se_DescribeLimitsInput omitted.

// se_DescribeStreamConsumerInput omitted.

// se_DescribeStreamInput omitted.

// se_DescribeStreamSummaryInput omitted.

// se_DisableEnhancedMonitoringInput omitted.

// se_EnableEnhancedMonitoringInput omitted.

// se_GetRecordsInput omitted.

/**
 * serializeAws_json1_1GetShardIteratorInput
 */
const se_GetShardIteratorInput = (input: GetShardIteratorInput, context: __SerdeContext): any => {
  return take(input, {
    ShardId: [],
    ShardIteratorType: [],
    StartingSequenceNumber: [],
    StreamARN: [],
    StreamName: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_IncreaseStreamRetentionPeriodInput omitted.

/**
 * serializeAws_json1_1ListShardsInput
 */
const se_ListShardsInput = (input: ListShardsInput, context: __SerdeContext): any => {
  return take(input, {
    ExclusiveStartShardId: [],
    MaxResults: [],
    NextToken: [],
    ShardFilter: (_) => se_ShardFilter(_, context),
    StreamARN: [],
    StreamCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
    StreamName: [],
  });
};

/**
 * serializeAws_json1_1ListStreamConsumersInput
 */
const se_ListStreamConsumersInput = (input: ListStreamConsumersInput, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    StreamARN: [],
    StreamCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListStreamsInput omitted.

// se_ListTagsForStreamInput omitted.

// se_MergeShardsInput omitted.

// se_MetricsNameList omitted.

/**
 * serializeAws_json1_1PutRecordInput
 */
const se_PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
    ExplicitHashKey: [],
    PartitionKey: [],
    SequenceNumberForOrdering: [],
    StreamARN: [],
    StreamName: [],
  });
};

/**
 * serializeAws_json1_1PutRecordsInput
 */
const se_PutRecordsInput = (input: PutRecordsInput, context: __SerdeContext): any => {
  return take(input, {
    Records: (_) => se_PutRecordsRequestEntryList(_, context),
    StreamARN: [],
    StreamName: [],
  });
};

/**
 * serializeAws_json1_1PutRecordsRequestEntry
 */
const se_PutRecordsRequestEntry = (input: PutRecordsRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
    ExplicitHashKey: [],
    PartitionKey: [],
  });
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

// se_RegisterStreamConsumerInput omitted.

// se_RemoveTagsFromStreamInput omitted.

/**
 * serializeAws_json1_1ShardFilter
 */
const se_ShardFilter = (input: ShardFilter, context: __SerdeContext): any => {
  return take(input, {
    ShardId: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    Type: [],
  });
};

// se_SplitShardInput omitted.

/**
 * serializeAws_json1_1StartingPosition
 */
const se_StartingPosition = (input: StartingPosition, context: __SerdeContext): any => {
  return take(input, {
    SequenceNumber: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    Type: [],
  });
};

// se_StartStreamEncryptionInput omitted.

// se_StopStreamEncryptionInput omitted.

// se_StreamModeDetails omitted.

/**
 * serializeAws_json1_1SubscribeToShardInput
 */
const se_SubscribeToShardInput = (input: SubscribeToShardInput, context: __SerdeContext): any => {
  return take(input, {
    ConsumerARN: [],
    ShardId: [],
    StartingPosition: (_) => se_StartingPosition(_, context),
  });
};

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_UpdateShardCountInput omitted.

// se_UpdateStreamModeInput omitted.

// de_AccessDeniedException omitted.

// de_ChildShard omitted.

// de_ChildShardList omitted.

/**
 * deserializeAws_json1_1Consumer
 */
const de_Consumer = (output: any, context: __SerdeContext): Consumer => {
  return take(output, {
    ConsumerARN: __expectString,
    ConsumerCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ConsumerName: __expectString,
    ConsumerStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConsumerDescription
 */
const de_ConsumerDescription = (output: any, context: __SerdeContext): ConsumerDescription => {
  return take(output, {
    ConsumerARN: __expectString,
    ConsumerCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ConsumerName: __expectString,
    ConsumerStatus: __expectString,
    StreamARN: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ConsumerList
 */
const de_ConsumerList = (output: any, context: __SerdeContext): Consumer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Consumer(entry, context);
    });
  return retVal;
};

// de_DescribeLimitsOutput omitted.

/**
 * deserializeAws_json1_1DescribeStreamConsumerOutput
 */
const de_DescribeStreamConsumerOutput = (output: any, context: __SerdeContext): DescribeStreamConsumerOutput => {
  return take(output, {
    ConsumerDescription: (_: any) => de_ConsumerDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStreamOutput
 */
const de_DescribeStreamOutput = (output: any, context: __SerdeContext): DescribeStreamOutput => {
  return take(output, {
    StreamDescription: (_: any) => de_StreamDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStreamSummaryOutput
 */
const de_DescribeStreamSummaryOutput = (output: any, context: __SerdeContext): DescribeStreamSummaryOutput => {
  return take(output, {
    StreamDescriptionSummary: (_: any) => de_StreamDescriptionSummary(_, context),
  }) as any;
};

// de_EnhancedMetrics omitted.

// de_EnhancedMonitoringList omitted.

// de_EnhancedMonitoringOutput omitted.

// de_ExpiredIteratorException omitted.

// de_ExpiredNextTokenException omitted.

/**
 * deserializeAws_json1_1GetRecordsOutput
 */
const de_GetRecordsOutput = (output: any, context: __SerdeContext): GetRecordsOutput => {
  return take(output, {
    ChildShards: _json,
    MillisBehindLatest: __expectLong,
    NextShardIterator: __expectString,
    Records: (_: any) => de_RecordList(_, context),
  }) as any;
};

// de_GetShardIteratorOutput omitted.

// de_HashKeyRange omitted.

// de_InternalFailureException omitted.

// de_InvalidArgumentException omitted.

// de_KMSAccessDeniedException omitted.

// de_KMSDisabledException omitted.

// de_KMSInvalidStateException omitted.

// de_KMSNotFoundException omitted.

// de_KMSOptInRequired omitted.

// de_KMSThrottlingException omitted.

// de_LimitExceededException omitted.

// de_ListShardsOutput omitted.

/**
 * deserializeAws_json1_1ListStreamConsumersOutput
 */
const de_ListStreamConsumersOutput = (output: any, context: __SerdeContext): ListStreamConsumersOutput => {
  return take(output, {
    Consumers: (_: any) => de_ConsumerList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListStreamsOutput
 */
const de_ListStreamsOutput = (output: any, context: __SerdeContext): ListStreamsOutput => {
  return take(output, {
    HasMoreStreams: __expectBoolean,
    NextToken: __expectString,
    StreamNames: _json,
    StreamSummaries: (_: any) => de_StreamSummaryList(_, context),
  }) as any;
};

// de_ListTagsForStreamOutput omitted.

// de_MetricsNameList omitted.

// de_ProvisionedThroughputExceededException omitted.

// de_PutRecordOutput omitted.

// de_PutRecordsOutput omitted.

// de_PutRecordsResultEntry omitted.

// de_PutRecordsResultEntryList omitted.

/**
 * deserializeAws_json1_1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return take(output, {
    ApproximateArrivalTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Data: context.base64Decoder,
    EncryptionType: __expectString,
    PartitionKey: __expectString,
    SequenceNumber: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecordList
 */
const de_RecordList = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegisterStreamConsumerOutput
 */
const de_RegisterStreamConsumerOutput = (output: any, context: __SerdeContext): RegisterStreamConsumerOutput => {
  return take(output, {
    Consumer: (_: any) => de_Consumer(_, context),
  }) as any;
};

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_SequenceNumberRange omitted.

// de_Shard omitted.

// de_ShardIdList omitted.

// de_ShardList omitted.

/**
 * deserializeAws_json1_1StreamDescription
 */
const de_StreamDescription = (output: any, context: __SerdeContext): StreamDescription => {
  return take(output, {
    EncryptionType: __expectString,
    EnhancedMonitoring: _json,
    HasMoreShards: __expectBoolean,
    KeyId: __expectString,
    RetentionPeriodHours: __expectInt32,
    Shards: _json,
    StreamARN: __expectString,
    StreamCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamModeDetails: _json,
    StreamName: __expectString,
    StreamStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StreamDescriptionSummary
 */
const de_StreamDescriptionSummary = (output: any, context: __SerdeContext): StreamDescriptionSummary => {
  return take(output, {
    ConsumerCount: __expectInt32,
    EncryptionType: __expectString,
    EnhancedMonitoring: _json,
    KeyId: __expectString,
    OpenShardCount: __expectInt32,
    RetentionPeriodHours: __expectInt32,
    StreamARN: __expectString,
    StreamCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamModeDetails: _json,
    StreamName: __expectString,
    StreamStatus: __expectString,
  }) as any;
};

// de_StreamModeDetails omitted.

// de_StreamNameList omitted.

/**
 * deserializeAws_json1_1StreamSummary
 */
const de_StreamSummary = (output: any, context: __SerdeContext): StreamSummary => {
  return take(output, {
    StreamARN: __expectString,
    StreamCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StreamModeDetails: _json,
    StreamName: __expectString,
    StreamStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StreamSummaryList
 */
const de_StreamSummaryList = (output: any, context: __SerdeContext): StreamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StreamSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubscribeToShardEvent
 */
const de_SubscribeToShardEvent = (output: any, context: __SerdeContext): SubscribeToShardEvent => {
  return take(output, {
    ChildShards: _json,
    ContinuationSequenceNumber: __expectString,
    MillisBehindLatest: __expectLong,
    Records: (_: any) => de_RecordList(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_UpdateShardCountOutput omitted.

// de_ValidationException omitted.

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
