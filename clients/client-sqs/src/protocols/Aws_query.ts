// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { XMLParser } from "fast-xml-parser";

import { AddPermissionCommandInput, AddPermissionCommandOutput } from "../commands/AddPermissionCommand";
import {
  CancelMessageMoveTaskCommandInput,
  CancelMessageMoveTaskCommandOutput,
} from "../commands/CancelMessageMoveTaskCommand";
import {
  ChangeMessageVisibilityBatchCommandInput,
  ChangeMessageVisibilityBatchCommandOutput,
} from "../commands/ChangeMessageVisibilityBatchCommand";
import {
  ChangeMessageVisibilityCommandInput,
  ChangeMessageVisibilityCommandOutput,
} from "../commands/ChangeMessageVisibilityCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "../commands/CreateQueueCommand";
import { DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput } from "../commands/DeleteMessageBatchCommand";
import { DeleteMessageCommandInput, DeleteMessageCommandOutput } from "../commands/DeleteMessageCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "../commands/DeleteQueueCommand";
import { GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput } from "../commands/GetQueueAttributesCommand";
import { GetQueueUrlCommandInput, GetQueueUrlCommandOutput } from "../commands/GetQueueUrlCommand";
import {
  ListDeadLetterSourceQueuesCommandInput,
  ListDeadLetterSourceQueuesCommandOutput,
} from "../commands/ListDeadLetterSourceQueuesCommand";
import {
  ListMessageMoveTasksCommandInput,
  ListMessageMoveTasksCommandOutput,
} from "../commands/ListMessageMoveTasksCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListQueueTagsCommandInput, ListQueueTagsCommandOutput } from "../commands/ListQueueTagsCommand";
import { PurgeQueueCommandInput, PurgeQueueCommandOutput } from "../commands/PurgeQueueCommand";
import { ReceiveMessageCommandInput, ReceiveMessageCommandOutput } from "../commands/ReceiveMessageCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { SendMessageBatchCommandInput, SendMessageBatchCommandOutput } from "../commands/SendMessageBatchCommand";
import { SendMessageCommandInput, SendMessageCommandOutput } from "../commands/SendMessageCommand";
import { SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput } from "../commands/SetQueueAttributesCommand";
import {
  StartMessageMoveTaskCommandInput,
  StartMessageMoveTaskCommandOutput,
} from "../commands/StartMessageMoveTaskCommand";
import { TagQueueCommandInput, TagQueueCommandOutput } from "../commands/TagQueueCommand";
import { UntagQueueCommandInput, UntagQueueCommandOutput } from "../commands/UntagQueueCommand";
import {
  AddPermissionRequest,
  BatchEntryIdsNotDistinct,
  BatchRequestTooLong,
  BatchResultErrorEntry,
  CancelMessageMoveTaskRequest,
  CancelMessageMoveTaskResult,
  ChangeMessageVisibilityBatchRequest,
  ChangeMessageVisibilityBatchRequestEntry,
  ChangeMessageVisibilityBatchResult,
  ChangeMessageVisibilityBatchResultEntry,
  ChangeMessageVisibilityRequest,
  CreateQueueRequest,
  CreateQueueResult,
  DeleteMessageBatchRequest,
  DeleteMessageBatchRequestEntry,
  DeleteMessageBatchResult,
  DeleteMessageBatchResultEntry,
  DeleteMessageRequest,
  DeleteQueueRequest,
  EmptyBatchRequest,
  GetQueueAttributesRequest,
  GetQueueAttributesResult,
  GetQueueUrlRequest,
  GetQueueUrlResult,
  InvalidAttributeName,
  InvalidBatchEntryId,
  InvalidIdFormat,
  InvalidMessageContents,
  ListDeadLetterSourceQueuesRequest,
  ListDeadLetterSourceQueuesResult,
  ListMessageMoveTasksRequest,
  ListMessageMoveTasksResult,
  ListMessageMoveTasksResultEntry,
  ListQueuesRequest,
  ListQueuesResult,
  ListQueueTagsRequest,
  ListQueueTagsResult,
  Message,
  MessageAttributeValue,
  MessageNotInflight,
  MessageSystemAttributeValue,
  OverLimit,
  PurgeQueueInProgress,
  PurgeQueueRequest,
  QueueAttributeName,
  QueueDeletedRecently,
  QueueDoesNotExist,
  QueueNameExists,
  ReceiptHandleIsInvalid,
  ReceiveMessageRequest,
  ReceiveMessageResult,
  RemovePermissionRequest,
  ResourceNotFoundException,
  SendMessageBatchRequest,
  SendMessageBatchRequestEntry,
  SendMessageBatchResult,
  SendMessageBatchResultEntry,
  SendMessageRequest,
  SendMessageResult,
  SetQueueAttributesRequest,
  StartMessageMoveTaskRequest,
  StartMessageMoveTaskResult,
  TagQueueRequest,
  TooManyEntriesInBatchRequest,
  UnsupportedOperation,
  UntagQueueRequest,
} from "../models/models_0";
import { SQSServiceException as __BaseException } from "../models/SQSServiceException";

/**
 * serializeAws_queryAddPermissionCommand
 */
export const se_AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddPermissionRequest(input, context),
    Action: "AddPermission",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCancelMessageMoveTaskCommand
 */
export const se_CancelMessageMoveTaskCommand = async (
  input: CancelMessageMoveTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CancelMessageMoveTaskRequest(input, context),
    Action: "CancelMessageMoveTask",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryChangeMessageVisibilityCommand
 */
export const se_ChangeMessageVisibilityCommand = async (
  input: ChangeMessageVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ChangeMessageVisibilityRequest(input, context),
    Action: "ChangeMessageVisibility",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryChangeMessageVisibilityBatchCommand
 */
export const se_ChangeMessageVisibilityBatchCommand = async (
  input: ChangeMessageVisibilityBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ChangeMessageVisibilityBatchRequest(input, context),
    Action: "ChangeMessageVisibilityBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateQueueRequest(input, context),
    Action: "CreateQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteMessageCommand
 */
export const se_DeleteMessageCommand = async (
  input: DeleteMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteMessageRequest(input, context),
    Action: "DeleteMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteMessageBatchCommand
 */
export const se_DeleteMessageBatchCommand = async (
  input: DeleteMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteMessageBatchRequest(input, context),
    Action: "DeleteMessageBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteQueueRequest(input, context),
    Action: "DeleteQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetQueueAttributesCommand
 */
export const se_GetQueueAttributesCommand = async (
  input: GetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetQueueAttributesRequest(input, context),
    Action: "GetQueueAttributes",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetQueueUrlCommand
 */
export const se_GetQueueUrlCommand = async (
  input: GetQueueUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetQueueUrlRequest(input, context),
    Action: "GetQueueUrl",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListDeadLetterSourceQueuesCommand
 */
export const se_ListDeadLetterSourceQueuesCommand = async (
  input: ListDeadLetterSourceQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListDeadLetterSourceQueuesRequest(input, context),
    Action: "ListDeadLetterSourceQueues",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListMessageMoveTasksCommand
 */
export const se_ListMessageMoveTasksCommand = async (
  input: ListMessageMoveTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListMessageMoveTasksRequest(input, context),
    Action: "ListMessageMoveTasks",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListQueuesRequest(input, context),
    Action: "ListQueues",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListQueueTagsCommand
 */
export const se_ListQueueTagsCommand = async (
  input: ListQueueTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListQueueTagsRequest(input, context),
    Action: "ListQueueTags",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPurgeQueueCommand
 */
export const se_PurgeQueueCommand = async (
  input: PurgeQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PurgeQueueRequest(input, context),
    Action: "PurgeQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryReceiveMessageCommand
 */
export const se_ReceiveMessageCommand = async (
  input: ReceiveMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ReceiveMessageRequest(input, context),
    Action: "ReceiveMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemovePermissionRequest(input, context),
    Action: "RemovePermission",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendMessageCommand
 */
export const se_SendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendMessageRequest(input, context),
    Action: "SendMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySendMessageBatchCommand
 */
export const se_SendMessageBatchCommand = async (
  input: SendMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SendMessageBatchRequest(input, context),
    Action: "SendMessageBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetQueueAttributesCommand
 */
export const se_SetQueueAttributesCommand = async (
  input: SetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetQueueAttributesRequest(input, context),
    Action: "SetQueueAttributes",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartMessageMoveTaskCommand
 */
export const se_StartMessageMoveTaskCommand = async (
  input: StartMessageMoveTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartMessageMoveTaskRequest(input, context),
    Action: "StartMessageMoveTask",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagQueueCommand
 */
export const se_TagQueueCommand = async (
  input: TagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagQueueRequest(input, context),
    Action: "TagQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagQueueCommand
 */
export const se_UntagQueueCommand = async (
  input: UntagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagQueueRequest(input, context),
    Action: "UntagQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddPermissionCommand
 */
export const de_AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddPermissionCommandError
 */
const de_AddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      throw await de_OverLimitRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCancelMessageMoveTaskCommand
 */
export const de_CancelMessageMoveTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMessageMoveTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelMessageMoveTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelMessageMoveTaskResult(data.CancelMessageMoveTaskResult, context);
  const response: CancelMessageMoveTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCancelMessageMoveTaskCommandError
 */
const de_CancelMessageMoveTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMessageMoveTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sqs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryChangeMessageVisibilityCommand
 */
export const de_ChangeMessageVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ChangeMessageVisibilityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ChangeMessageVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryChangeMessageVisibilityCommandError
 */
const de_ChangeMessageVisibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.MessageNotInflight":
    case "com.amazonaws.sqs#MessageNotInflight":
      throw await de_MessageNotInflightRes(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await de_ReceiptHandleIsInvalidRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryChangeMessageVisibilityBatchCommand
 */
export const de_ChangeMessageVisibilityBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ChangeMessageVisibilityBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ChangeMessageVisibilityBatchResult(data.ChangeMessageVisibilityBatchResult, context);
  const response: ChangeMessageVisibilityBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryChangeMessageVisibilityBatchCommandError
 */
const de_ChangeMessageVisibilityBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateQueueCommand
 */
export const de_CreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateQueueResult(data.CreateQueueResult, context);
  const response: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateQueueCommandError
 */
const de_CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.QueueDeletedRecently":
    case "com.amazonaws.sqs#QueueDeletedRecently":
      throw await de_QueueDeletedRecentlyRes(parsedOutput, context);
    case "QueueAlreadyExists":
    case "com.amazonaws.sqs#QueueNameExists":
      throw await de_QueueNameExistsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteMessageCommand
 */
export const de_DeleteMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMessageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteMessageCommandError
 */
const de_DeleteMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIdFormat":
    case "com.amazonaws.sqs#InvalidIdFormat":
      throw await de_InvalidIdFormatRes(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await de_ReceiptHandleIsInvalidRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteMessageBatchCommand
 */
export const de_DeleteMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMessageBatchResult(data.DeleteMessageBatchResult, context);
  const response: DeleteMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteMessageBatchCommandError
 */
const de_DeleteMessageBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteQueueCommand
 */
export const de_DeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteQueueCommandError
 */
const de_DeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryGetQueueAttributesCommand
 */
export const de_GetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueueAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueueAttributesResult(data.GetQueueAttributesResult, context);
  const response: GetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetQueueAttributesCommandError
 */
const de_GetQueueAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      throw await de_InvalidAttributeNameRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetQueueUrlCommand
 */
export const de_GetQueueUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueueUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueueUrlResult(data.GetQueueUrlResult, context);
  const response: GetQueueUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetQueueUrlCommandError
 */
const de_GetQueueUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.NonExistentQueue":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListDeadLetterSourceQueuesCommand
 */
export const de_ListDeadLetterSourceQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeadLetterSourceQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeadLetterSourceQueuesResult(data.ListDeadLetterSourceQueuesResult, context);
  const response: ListDeadLetterSourceQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListDeadLetterSourceQueuesCommandError
 */
const de_ListDeadLetterSourceQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.NonExistentQueue":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListMessageMoveTasksCommand
 */
export const de_ListMessageMoveTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMessageMoveTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMessageMoveTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMessageMoveTasksResult(data.ListMessageMoveTasksResult, context);
  const response: ListMessageMoveTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListMessageMoveTasksCommandError
 */
const de_ListMessageMoveTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMessageMoveTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sqs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListQueuesCommand
 */
export const de_ListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQueuesResult(data.ListQueuesResult, context);
  const response: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListQueuesCommandError
 */
const de_ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListQueueTagsCommand
 */
export const de_ListQueueTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQueueTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQueueTagsResult(data.ListQueueTagsResult, context);
  const response: ListQueueTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListQueueTagsCommandError
 */
const de_ListQueueTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryPurgeQueueCommand
 */
export const de_PurgeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurgeQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurgeQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PurgeQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPurgeQueueCommandError
 */
const de_PurgeQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurgeQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.NonExistentQueue":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "AWS.SimpleQueueService.PurgeQueueInProgress":
    case "com.amazonaws.sqs#PurgeQueueInProgress":
      throw await de_PurgeQueueInProgressRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryReceiveMessageCommand
 */
export const de_ReceiveMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReceiveMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReceiveMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReceiveMessageResult(data.ReceiveMessageResult, context);
  const response: ReceiveMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryReceiveMessageCommandError
 */
const de_ReceiveMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReceiveMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      throw await de_OverLimitRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemovePermissionCommandError
 */
const de_RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_querySendMessageCommand
 */
export const de_SendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendMessageResult(data.SendMessageResult, context);
  const response: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendMessageCommandError
 */
const de_SendMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "InvalidMessageContents":
    case "com.amazonaws.sqs#InvalidMessageContents":
      throw await de_InvalidMessageContentsRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySendMessageBatchCommand
 */
export const de_SendMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendMessageBatchResult(data.SendMessageBatchResult, context);
  const response: SendMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySendMessageBatchCommandError
 */
const de_SendMessageBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "AWS.SimpleQueueService.BatchRequestTooLong":
    case "com.amazonaws.sqs#BatchRequestTooLong":
      throw await de_BatchRequestTooLongRes(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetQueueAttributesCommand
 */
export const de_SetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetQueueAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetQueueAttributesCommandError
 */
const de_SetQueueAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetQueueAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      throw await de_InvalidAttributeNameRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryStartMessageMoveTaskCommand
 */
export const de_StartMessageMoveTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMessageMoveTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMessageMoveTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMessageMoveTaskResult(data.StartMessageMoveTaskResult, context);
  const response: StartMessageMoveTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStartMessageMoveTaskCommandError
 */
const de_StartMessageMoveTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMessageMoveTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sqs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagQueueCommand
 */
export const de_TagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagQueueCommandError
 */
const de_TagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryUntagQueueCommand
 */
export const de_UntagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagQueueCommandError
 */
const de_UntagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryBatchEntryIdsNotDistinctRes
 */
const de_BatchEntryIdsNotDistinctRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinct> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchEntryIdsNotDistinct(body.Error, context);
  const exception = new BatchEntryIdsNotDistinct({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBatchRequestTooLongRes
 */
const de_BatchRequestTooLongRes = async (parsedOutput: any, context: __SerdeContext): Promise<BatchRequestTooLong> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchRequestTooLong(body.Error, context);
  const exception = new BatchRequestTooLong({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEmptyBatchRequestRes
 */
const de_EmptyBatchRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<EmptyBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EmptyBatchRequest(body.Error, context);
  const exception = new EmptyBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidAttributeNameRes
 */
const de_InvalidAttributeNameRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttributeName> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAttributeName(body.Error, context);
  const exception = new InvalidAttributeName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidBatchEntryIdRes
 */
const de_InvalidBatchEntryIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidBatchEntryId> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBatchEntryId(body.Error, context);
  const exception = new InvalidBatchEntryId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidIdFormatRes
 */
const de_InvalidIdFormatRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidIdFormat> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIdFormat(body.Error, context);
  const exception = new InvalidIdFormat({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidMessageContentsRes
 */
const de_InvalidMessageContentsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMessageContents> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidMessageContents(body.Error, context);
  const exception = new InvalidMessageContents({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMessageNotInflightRes
 */
const de_MessageNotInflightRes = async (parsedOutput: any, context: __SerdeContext): Promise<MessageNotInflight> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MessageNotInflight(body.Error, context);
  const exception = new MessageNotInflight({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOverLimitRes
 */
const de_OverLimitRes = async (parsedOutput: any, context: __SerdeContext): Promise<OverLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OverLimit(body.Error, context);
  const exception = new OverLimit({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPurgeQueueInProgressRes
 */
const de_PurgeQueueInProgressRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PurgeQueueInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PurgeQueueInProgress(body.Error, context);
  const exception = new PurgeQueueInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryQueueDeletedRecentlyRes
 */
const de_QueueDeletedRecentlyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDeletedRecently> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QueueDeletedRecently(body.Error, context);
  const exception = new QueueDeletedRecently({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryQueueDoesNotExistRes
 */
const de_QueueDoesNotExistRes = async (parsedOutput: any, context: __SerdeContext): Promise<QueueDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QueueDoesNotExist(body.Error, context);
  const exception = new QueueDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryQueueNameExistsRes
 */
const de_QueueNameExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<QueueNameExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QueueNameExists(body.Error, context);
  const exception = new QueueNameExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReceiptHandleIsInvalidRes
 */
const de_ReceiptHandleIsInvalidRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReceiptHandleIsInvalid> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReceiptHandleIsInvalid(body.Error, context);
  const exception = new ReceiptHandleIsInvalid({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyEntriesInBatchRequestRes
 */
const de_TooManyEntriesInBatchRequestRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyEntriesInBatchRequest(body.Error, context);
  const exception = new TooManyEntriesInBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnsupportedOperationRes
 */
const de_UnsupportedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperation(body.Error, context);
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryActionNameList
 */
const se_ActionNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAddPermissionRequest
 */
const se_AddPermissionRequest = (input: AddPermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.AWSAccountIds != null) {
    const memberEntries = se_AWSAccountIdList(input.AWSAccountIds, context);
    if (input.AWSAccountIds?.length === 0) {
      entries.AWSAccountId = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Actions != null) {
    const memberEntries = se_ActionNameList(input.Actions, context);
    if (input.Actions?.length === 0) {
      entries.ActionName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryAttributeNameList
 */
const se_AttributeNameList = (input: (QueueAttributeName | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAWSAccountIdList
 */
const se_AWSAccountIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryBinaryList
 */
const se_BinaryList = (input: Uint8Array[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`BinaryListValue.${counter}`] = context.base64Encoder(entry);
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCancelMessageMoveTaskRequest
 */
const se_CancelMessageMoveTaskRequest = (input: CancelMessageMoveTaskRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TaskHandle != null) {
    entries["TaskHandle"] = input.TaskHandle;
  }
  return entries;
};

/**
 * serializeAws_queryChangeMessageVisibilityBatchRequest
 */
const se_ChangeMessageVisibilityBatchRequest = (
  input: ChangeMessageVisibilityBatchRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = se_ChangeMessageVisibilityBatchRequestEntryList(input.Entries, context);
    if (input.Entries?.length === 0) {
      entries.ChangeMessageVisibilityBatchRequestEntry = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ChangeMessageVisibilityBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryChangeMessageVisibilityBatchRequestEntry
 */
const se_ChangeMessageVisibilityBatchRequestEntry = (
  input: ChangeMessageVisibilityBatchRequestEntry,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  if (input.VisibilityTimeout != null) {
    entries["VisibilityTimeout"] = input.VisibilityTimeout;
  }
  return entries;
};

/**
 * serializeAws_queryChangeMessageVisibilityBatchRequestEntryList
 */
const se_ChangeMessageVisibilityBatchRequestEntryList = (
  input: ChangeMessageVisibilityBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ChangeMessageVisibilityBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryChangeMessageVisibilityRequest
 */
const se_ChangeMessageVisibilityRequest = (input: ChangeMessageVisibilityRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  if (input.VisibilityTimeout != null) {
    entries["VisibilityTimeout"] = input.VisibilityTimeout;
  }
  return entries;
};

/**
 * serializeAws_queryCreateQueueRequest
 */
const se_CreateQueueRequest = (input: CreateQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueName != null) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.tags != null) {
    const memberEntries = se_TagMap(input.tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Attributes != null) {
    const memberEntries = se_QueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteMessageBatchRequest
 */
const se_DeleteMessageBatchRequest = (input: DeleteMessageBatchRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = se_DeleteMessageBatchRequestEntryList(input.Entries, context);
    if (input.Entries?.length === 0) {
      entries.DeleteMessageBatchRequestEntry = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeleteMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteMessageBatchRequestEntry
 */
const se_DeleteMessageBatchRequestEntry = (input: DeleteMessageBatchRequestEntry, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteMessageBatchRequestEntryList
 */
const se_DeleteMessageBatchRequestEntryList = (
  input: DeleteMessageBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_DeleteMessageBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteMessageRequest
 */
const se_DeleteMessageRequest = (input: DeleteMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteQueueRequest
 */
const se_DeleteQueueRequest = (input: DeleteQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

/**
 * serializeAws_queryGetQueueAttributesRequest
 */
const se_GetQueueAttributesRequest = (input: GetQueueAttributesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.AttributeNames != null) {
    const memberEntries = se_AttributeNameList(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
      entries.AttributeName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetQueueUrlRequest
 */
const se_GetQueueUrlRequest = (input: GetQueueUrlRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueName != null) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.QueueOwnerAWSAccountId != null) {
    entries["QueueOwnerAWSAccountId"] = input.QueueOwnerAWSAccountId;
  }
  return entries;
};

/**
 * serializeAws_queryListDeadLetterSourceQueuesRequest
 */
const se_ListDeadLetterSourceQueuesRequest = (
  input: ListDeadLetterSourceQueuesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListMessageMoveTasksRequest
 */
const se_ListMessageMoveTasksRequest = (input: ListMessageMoveTasksRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListQueuesRequest
 */
const se_ListQueuesRequest = (input: ListQueuesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueNamePrefix != null) {
    entries["QueueNamePrefix"] = input.QueueNamePrefix;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListQueueTagsRequest
 */
const se_ListQueueTagsRequest = (input: ListQueueTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

/**
 * serializeAws_queryMessageAttributeNameList
 */
const se_MessageAttributeNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMessageAttributeValue
 */
const se_MessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringValue != null) {
    entries["StringValue"] = input.StringValue;
  }
  if (input.BinaryValue != null) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.StringListValues != null) {
    const memberEntries = se_StringList(input.StringListValues, context);
    if (input.StringListValues?.length === 0) {
      entries.StringListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryListValues != null) {
    const memberEntries = se_BinaryList(input.BinaryListValues, context);
    if (input.BinaryListValues?.length === 0) {
      entries.BinaryListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.DataType != null) {
    entries["DataType"] = input.DataType;
  }
  return entries;
};

/**
 * serializeAws_queryMessageBodyAttributeMap
 */
const se_MessageBodyAttributeMap = (input: Record<string, MessageAttributeValue>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      const memberEntries = se_MessageAttributeValue(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.Value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryMessageBodySystemAttributeMap
 */
const se_MessageBodySystemAttributeMap = (
  input: Record<string, MessageSystemAttributeValue>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      const memberEntries = se_MessageSystemAttributeValue(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.Value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryMessageSystemAttributeValue
 */
const se_MessageSystemAttributeValue = (input: MessageSystemAttributeValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringValue != null) {
    entries["StringValue"] = input.StringValue;
  }
  if (input.BinaryValue != null) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.StringListValues != null) {
    const memberEntries = se_StringList(input.StringListValues, context);
    if (input.StringListValues?.length === 0) {
      entries.StringListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryListValues != null) {
    const memberEntries = se_BinaryList(input.BinaryListValues, context);
    if (input.BinaryListValues?.length === 0) {
      entries.BinaryListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.DataType != null) {
    entries["DataType"] = input.DataType;
  }
  return entries;
};

/**
 * serializeAws_queryPurgeQueueRequest
 */
const se_PurgeQueueRequest = (input: PurgeQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

/**
 * serializeAws_queryQueueAttributeMap
 */
const se_QueueAttributeMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      entries[`entry.${counter}.Value`] = input[key];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryReceiveMessageRequest
 */
const se_ReceiveMessageRequest = (input: ReceiveMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.AttributeNames != null) {
    const memberEntries = se_AttributeNameList(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
      entries.AttributeName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageAttributeNames != null) {
    const memberEntries = se_MessageAttributeNameList(input.MessageAttributeNames, context);
    if (input.MessageAttributeNames?.length === 0) {
      entries.MessageAttributeName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MaxNumberOfMessages != null) {
    entries["MaxNumberOfMessages"] = input.MaxNumberOfMessages;
  }
  if (input.VisibilityTimeout != null) {
    entries["VisibilityTimeout"] = input.VisibilityTimeout;
  }
  if (input.WaitTimeSeconds != null) {
    entries["WaitTimeSeconds"] = input.WaitTimeSeconds;
  }
  if (input.ReceiveRequestAttemptId != null) {
    entries["ReceiveRequestAttemptId"] = input.ReceiveRequestAttemptId;
  }
  return entries;
};

/**
 * serializeAws_queryRemovePermissionRequest
 */
const se_RemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  return entries;
};

/**
 * serializeAws_querySendMessageBatchRequest
 */
const se_SendMessageBatchRequest = (input: SendMessageBatchRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = se_SendMessageBatchRequestEntryList(input.Entries, context);
    if (input.Entries?.length === 0) {
      entries.SendMessageBatchRequestEntry = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SendMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySendMessageBatchRequestEntry
 */
const se_SendMessageBatchRequestEntry = (input: SendMessageBatchRequestEntry, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.MessageBody != null) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.DelaySeconds != null) {
    entries["DelaySeconds"] = input.DelaySeconds;
  }
  if (input.MessageAttributes != null) {
    const memberEntries = se_MessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageSystemAttributes != null) {
    const memberEntries = se_MessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageDeduplicationId != null) {
    entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
  }
  if (input.MessageGroupId != null) {
    entries["MessageGroupId"] = input.MessageGroupId;
  }
  return entries;
};

/**
 * serializeAws_querySendMessageBatchRequestEntryList
 */
const se_SendMessageBatchRequestEntryList = (input: SendMessageBatchRequestEntry[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_SendMessageBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySendMessageRequest
 */
const se_SendMessageRequest = (input: SendMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.MessageBody != null) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.DelaySeconds != null) {
    entries["DelaySeconds"] = input.DelaySeconds;
  }
  if (input.MessageAttributes != null) {
    const memberEntries = se_MessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageSystemAttributes != null) {
    const memberEntries = se_MessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageDeduplicationId != null) {
    entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
  }
  if (input.MessageGroupId != null) {
    entries["MessageGroupId"] = input.MessageGroupId;
  }
  return entries;
};

/**
 * serializeAws_querySetQueueAttributesRequest
 */
const se_SetQueueAttributesRequest = (input: SetQueueAttributesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Attributes != null) {
    const memberEntries = se_QueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryStartMessageMoveTaskRequest
 */
const se_StartMessageMoveTaskRequest = (input: StartMessageMoveTaskRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SourceArn != null) {
    entries["SourceArn"] = input.SourceArn;
  }
  if (input.DestinationArn != null) {
    entries["DestinationArn"] = input.DestinationArn;
  }
  if (input.MaxNumberOfMessagesPerSecond != null) {
    entries["MaxNumberOfMessagesPerSecond"] = input.MaxNumberOfMessagesPerSecond;
  }
  return entries;
};

/**
 * serializeAws_queryStringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`StringListValue.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Key`] = key;
      entries[`entry.${counter}.Value`] = input[key];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryTagQueueRequest
 */
const se_TagQueueRequest = (input: TagQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagMap(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagQueueRequest
 */
const se_UntagQueueRequest = (input: UntagQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
      entries.TagKey = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKey.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * deserializeAws_queryBatchEntryIdsNotDistinct
 */
const de_BatchEntryIdsNotDistinct = (output: any, context: __SerdeContext): BatchEntryIdsNotDistinct => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryBatchRequestTooLong
 */
const de_BatchRequestTooLong = (output: any, context: __SerdeContext): BatchRequestTooLong => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryBatchResultErrorEntry
 */
const de_BatchResultErrorEntry = (output: any, context: __SerdeContext): BatchResultErrorEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["SenderFault"] !== undefined) {
    contents.SenderFault = __parseBoolean(output["SenderFault"]);
  }
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchResultErrorEntryList
 */
const de_BatchResultErrorEntryList = (output: any, context: __SerdeContext): BatchResultErrorEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchResultErrorEntry(entry, context);
    });
};

/**
 * deserializeAws_queryBinaryList
 */
const de_BinaryList = (output: any, context: __SerdeContext): Uint8Array[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return context.base64Decoder(entry);
    });
};

/**
 * deserializeAws_queryCancelMessageMoveTaskResult
 */
const de_CancelMessageMoveTaskResult = (output: any, context: __SerdeContext): CancelMessageMoveTaskResult => {
  const contents: any = {};
  if (output["ApproximateNumberOfMessagesMoved"] !== undefined) {
    contents.ApproximateNumberOfMessagesMoved = __strictParseLong(output["ApproximateNumberOfMessagesMoved"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryChangeMessageVisibilityBatchResult
 */
const de_ChangeMessageVisibilityBatchResult = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResult => {
  const contents: any = {};
  if (output.ChangeMessageVisibilityBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["ChangeMessageVisibilityBatchResultEntry"] !== undefined) {
    contents.Successful = de_ChangeMessageVisibilityBatchResultEntryList(
      __getArrayIfSingleItem(output["ChangeMessageVisibilityBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeMessageVisibilityBatchResultEntry
 */
const de_ChangeMessageVisibilityBatchResultEntry = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

/**
 * deserializeAws_queryChangeMessageVisibilityBatchResultEntryList
 */
const de_ChangeMessageVisibilityBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeMessageVisibilityBatchResultEntry(entry, context);
    });
};

/**
 * deserializeAws_queryCreateQueueResult
 */
const de_CreateQueueResult = (output: any, context: __SerdeContext): CreateQueueResult => {
  const contents: any = {};
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = __expectString(output["QueueUrl"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteMessageBatchResult
 */
const de_DeleteMessageBatchResult = (output: any, context: __SerdeContext): DeleteMessageBatchResult => {
  const contents: any = {};
  if (output.DeleteMessageBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["DeleteMessageBatchResultEntry"] !== undefined) {
    contents.Successful = de_DeleteMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["DeleteMessageBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteMessageBatchResultEntry
 */
const de_DeleteMessageBatchResultEntry = (output: any, context: __SerdeContext): DeleteMessageBatchResultEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteMessageBatchResultEntryList
 */
const de_DeleteMessageBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeleteMessageBatchResultEntry(entry, context);
    });
};

/**
 * deserializeAws_queryEmptyBatchRequest
 */
const de_EmptyBatchRequest = (output: any, context: __SerdeContext): EmptyBatchRequest => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryGetQueueAttributesResult
 */
const de_GetQueueAttributesResult = (output: any, context: __SerdeContext): GetQueueAttributesResult => {
  const contents: any = {};
  if (output.Attribute === "") {
    contents.Attributes = {};
  } else if (output["Attribute"] !== undefined) {
    contents.Attributes = de_QueueAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetQueueUrlResult
 */
const de_GetQueueUrlResult = (output: any, context: __SerdeContext): GetQueueUrlResult => {
  const contents: any = {};
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = __expectString(output["QueueUrl"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidAttributeName
 */
const de_InvalidAttributeName = (output: any, context: __SerdeContext): InvalidAttributeName => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryInvalidBatchEntryId
 */
const de_InvalidBatchEntryId = (output: any, context: __SerdeContext): InvalidBatchEntryId => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryInvalidIdFormat
 */
const de_InvalidIdFormat = (output: any, context: __SerdeContext): InvalidIdFormat => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryInvalidMessageContents
 */
const de_InvalidMessageContents = (output: any, context: __SerdeContext): InvalidMessageContents => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryListDeadLetterSourceQueuesResult
 */
const de_ListDeadLetterSourceQueuesResult = (
  output: any,
  context: __SerdeContext
): ListDeadLetterSourceQueuesResult => {
  const contents: any = {};
  if (output.QueueUrl === "") {
    contents.queueUrls = [];
  } else if (output["QueueUrl"] !== undefined) {
    contents.queueUrls = de_QueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMessageMoveTasksResult
 */
const de_ListMessageMoveTasksResult = (output: any, context: __SerdeContext): ListMessageMoveTasksResult => {
  const contents: any = {};
  if (output.ListMessageMoveTasksResultEntry === "") {
    contents.Results = [];
  } else if (output["ListMessageMoveTasksResultEntry"] !== undefined) {
    contents.Results = de_ListMessageMoveTasksResultEntryList(
      __getArrayIfSingleItem(output["ListMessageMoveTasksResultEntry"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryListMessageMoveTasksResultEntry
 */
const de_ListMessageMoveTasksResultEntry = (output: any, context: __SerdeContext): ListMessageMoveTasksResultEntry => {
  const contents: any = {};
  if (output["TaskHandle"] !== undefined) {
    contents.TaskHandle = __expectString(output["TaskHandle"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SourceArn"] !== undefined) {
    contents.SourceArn = __expectString(output["SourceArn"]);
  }
  if (output["DestinationArn"] !== undefined) {
    contents.DestinationArn = __expectString(output["DestinationArn"]);
  }
  if (output["MaxNumberOfMessagesPerSecond"] !== undefined) {
    contents.MaxNumberOfMessagesPerSecond = __strictParseInt32(output["MaxNumberOfMessagesPerSecond"]) as number;
  }
  if (output["ApproximateNumberOfMessagesMoved"] !== undefined) {
    contents.ApproximateNumberOfMessagesMoved = __strictParseLong(output["ApproximateNumberOfMessagesMoved"]) as number;
  }
  if (output["ApproximateNumberOfMessagesToMove"] !== undefined) {
    contents.ApproximateNumberOfMessagesToMove = __strictParseLong(
      output["ApproximateNumberOfMessagesToMove"]
    ) as number;
  }
  if (output["FailureReason"] !== undefined) {
    contents.FailureReason = __expectString(output["FailureReason"]);
  }
  if (output["StartedTimestamp"] !== undefined) {
    contents.StartedTimestamp = __strictParseLong(output["StartedTimestamp"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryListMessageMoveTasksResultEntryList
 */
const de_ListMessageMoveTasksResultEntryList = (
  output: any,
  context: __SerdeContext
): ListMessageMoveTasksResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListMessageMoveTasksResultEntry(entry, context);
    });
};

/**
 * deserializeAws_queryListQueuesResult
 */
const de_ListQueuesResult = (output: any, context: __SerdeContext): ListQueuesResult => {
  const contents: any = {};
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.QueueUrl === "") {
    contents.QueueUrls = [];
  } else if (output["QueueUrl"] !== undefined) {
    contents.QueueUrls = de_QueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListQueueTagsResult
 */
const de_ListQueueTagsResult = (output: any, context: __SerdeContext): ListQueueTagsResult => {
  const contents: any = {};
  if (output.Tag === "") {
    contents.Tags = {};
  } else if (output["Tag"] !== undefined) {
    contents.Tags = de_TagMap(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMessage
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  const contents: any = {};
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  if (output["ReceiptHandle"] !== undefined) {
    contents.ReceiptHandle = __expectString(output["ReceiptHandle"]);
  }
  if (output["MD5OfBody"] !== undefined) {
    contents.MD5OfBody = __expectString(output["MD5OfBody"]);
  }
  if (output["Body"] !== undefined) {
    contents.Body = __expectString(output["Body"]);
  }
  if (output.Attribute === "") {
    contents.Attributes = {};
  } else if (output["Attribute"] !== undefined) {
    contents.Attributes = de_MessageSystemAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = __expectString(output["MD5OfMessageAttributes"]);
  }
  if (output.MessageAttribute === "") {
    contents.MessageAttributes = {};
  } else if (output["MessageAttribute"] !== undefined) {
    contents.MessageAttributes = de_MessageBodyAttributeMap(
      __getArrayIfSingleItem(output["MessageAttribute"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryMessageAttributeValue
 */
const de_MessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  const contents: any = {};
  if (output["StringValue"] !== undefined) {
    contents.StringValue = __expectString(output["StringValue"]);
  }
  if (output["BinaryValue"] !== undefined) {
    contents.BinaryValue = context.base64Decoder(output["BinaryValue"]);
  }
  if (output.StringListValue === "") {
    contents.StringListValues = [];
  } else if (output["StringListValue"] !== undefined) {
    contents.StringListValues = de_StringList(__getArrayIfSingleItem(output["StringListValue"]), context);
  }
  if (output.BinaryListValue === "") {
    contents.BinaryListValues = [];
  } else if (output["BinaryListValue"] !== undefined) {
    contents.BinaryListValues = de_BinaryList(__getArrayIfSingleItem(output["BinaryListValue"]), context);
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = __expectString(output["DataType"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMessageBodyAttributeMap
 */
const de_MessageBodyAttributeMap = (output: any, context: __SerdeContext): Record<string, MessageAttributeValue> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = de_MessageAttributeValue(pair["Value"], context);
    return acc;
  }, {});
};

/**
 * deserializeAws_queryMessageList
 */
const de_MessageList = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Message(entry, context);
    });
};

/**
 * deserializeAws_queryMessageNotInflight
 */
const de_MessageNotInflight = (output: any, context: __SerdeContext): MessageNotInflight => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryMessageSystemAttributeMap
 */
const de_MessageSystemAttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryOverLimit
 */
const de_OverLimit = (output: any, context: __SerdeContext): OverLimit => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPurgeQueueInProgress
 */
const de_PurgeQueueInProgress = (output: any, context: __SerdeContext): PurgeQueueInProgress => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryQueueAttributeMap
 */
const de_QueueAttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryQueueDeletedRecently
 */
const de_QueueDeletedRecently = (output: any, context: __SerdeContext): QueueDeletedRecently => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryQueueDoesNotExist
 */
const de_QueueDoesNotExist = (output: any, context: __SerdeContext): QueueDoesNotExist => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryQueueNameExists
 */
const de_QueueNameExists = (output: any, context: __SerdeContext): QueueNameExists => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryQueueUrlList
 */
const de_QueueUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryReceiptHandleIsInvalid
 */
const de_ReceiptHandleIsInvalid = (output: any, context: __SerdeContext): ReceiptHandleIsInvalid => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryReceiveMessageResult
 */
const de_ReceiveMessageResult = (output: any, context: __SerdeContext): ReceiveMessageResult => {
  const contents: any = {};
  if (output.Message === "") {
    contents.Messages = [];
  } else if (output["Message"] !== undefined) {
    contents.Messages = de_MessageList(__getArrayIfSingleItem(output["Message"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySendMessageBatchResult
 */
const de_SendMessageBatchResult = (output: any, context: __SerdeContext): SendMessageBatchResult => {
  const contents: any = {};
  if (output.SendMessageBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["SendMessageBatchResultEntry"] !== undefined) {
    contents.Successful = de_SendMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["SendMessageBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output["BatchResultErrorEntry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySendMessageBatchResultEntry
 */
const de_SendMessageBatchResultEntry = (output: any, context: __SerdeContext): SendMessageBatchResultEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  if (output["MD5OfMessageBody"] !== undefined) {
    contents.MD5OfMessageBody = __expectString(output["MD5OfMessageBody"]);
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = __expectString(output["MD5OfMessageAttributes"]);
  }
  if (output["MD5OfMessageSystemAttributes"] !== undefined) {
    contents.MD5OfMessageSystemAttributes = __expectString(output["MD5OfMessageSystemAttributes"]);
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = __expectString(output["SequenceNumber"]);
  }
  return contents;
};

/**
 * deserializeAws_querySendMessageBatchResultEntryList
 */
const de_SendMessageBatchResultEntryList = (output: any, context: __SerdeContext): SendMessageBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SendMessageBatchResultEntry(entry, context);
    });
};

/**
 * deserializeAws_querySendMessageResult
 */
const de_SendMessageResult = (output: any, context: __SerdeContext): SendMessageResult => {
  const contents: any = {};
  if (output["MD5OfMessageBody"] !== undefined) {
    contents.MD5OfMessageBody = __expectString(output["MD5OfMessageBody"]);
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = __expectString(output["MD5OfMessageAttributes"]);
  }
  if (output["MD5OfMessageSystemAttributes"] !== undefined) {
    contents.MD5OfMessageSystemAttributes = __expectString(output["MD5OfMessageSystemAttributes"]);
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = __expectString(output["SequenceNumber"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartMessageMoveTaskResult
 */
const de_StartMessageMoveTaskResult = (output: any, context: __SerdeContext): StartMessageMoveTaskResult => {
  const contents: any = {};
  if (output["TaskHandle"] !== undefined) {
    contents.TaskHandle = __expectString(output["TaskHandle"]);
  }
  return contents;
};

/**
 * deserializeAws_queryStringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Key"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryTooManyEntriesInBatchRequest
 */
const de_TooManyEntriesInBatchRequest = (output: any, context: __SerdeContext): TooManyEntriesInBatchRequest => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUnsupportedOperation
 */
const de_UnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
  const contents: any = {};
  return contents;
};

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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
