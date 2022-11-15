// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { XMLParser } from "fast-xml-parser";

import { AddPermissionCommandInput, AddPermissionCommandOutput } from "../commands/AddPermissionCommand";
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
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
import { ListQueueTagsCommandInput, ListQueueTagsCommandOutput } from "../commands/ListQueueTagsCommand";
import { PurgeQueueCommandInput, PurgeQueueCommandOutput } from "../commands/PurgeQueueCommand";
import { ReceiveMessageCommandInput, ReceiveMessageCommandOutput } from "../commands/ReceiveMessageCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { SendMessageBatchCommandInput, SendMessageBatchCommandOutput } from "../commands/SendMessageBatchCommand";
import { SendMessageCommandInput, SendMessageCommandOutput } from "../commands/SendMessageCommand";
import { SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput } from "../commands/SetQueueAttributesCommand";
import { TagQueueCommandInput, TagQueueCommandOutput } from "../commands/TagQueueCommand";
import { UntagQueueCommandInput, UntagQueueCommandOutput } from "../commands/UntagQueueCommand";
import {
  AddPermissionRequest,
  BatchEntryIdsNotDistinct,
  BatchRequestTooLong,
  BatchResultErrorEntry,
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
  SendMessageBatchRequest,
  SendMessageBatchRequestEntry,
  SendMessageBatchResult,
  SendMessageBatchResultEntry,
  SendMessageRequest,
  SendMessageResult,
  SetQueueAttributesRequest,
  TagQueueRequest,
  TooManyEntriesInBatchRequest,
  UnsupportedOperation,
  UntagQueueRequest,
} from "../models/models_0";
import { SQSServiceException as __BaseException } from "../models/SQSServiceException";

export const serializeAws_queryAddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddPermissionRequest(input, context),
    Action: "AddPermission",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryChangeMessageVisibilityCommand = async (
  input: ChangeMessageVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryChangeMessageVisibilityRequest(input, context),
    Action: "ChangeMessageVisibility",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryChangeMessageVisibilityBatchCommand = async (
  input: ChangeMessageVisibilityBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryChangeMessageVisibilityBatchRequest(input, context),
    Action: "ChangeMessageVisibilityBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateQueueRequest(input, context),
    Action: "CreateQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteMessageCommand = async (
  input: DeleteMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteMessageRequest(input, context),
    Action: "DeleteMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteMessageBatchCommand = async (
  input: DeleteMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteMessageBatchRequest(input, context),
    Action: "DeleteMessageBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteQueueRequest(input, context),
    Action: "DeleteQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetQueueAttributesCommand = async (
  input: GetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetQueueAttributesRequest(input, context),
    Action: "GetQueueAttributes",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetQueueUrlCommand = async (
  input: GetQueueUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetQueueUrlRequest(input, context),
    Action: "GetQueueUrl",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListDeadLetterSourceQueuesCommand = async (
  input: ListDeadLetterSourceQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListDeadLetterSourceQueuesRequest(input, context),
    Action: "ListDeadLetterSourceQueues",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListQueuesRequest(input, context),
    Action: "ListQueues",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListQueueTagsCommand = async (
  input: ListQueueTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListQueueTagsRequest(input, context),
    Action: "ListQueueTags",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPurgeQueueCommand = async (
  input: PurgeQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPurgeQueueRequest(input, context),
    Action: "PurgeQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryReceiveMessageCommand = async (
  input: ReceiveMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryReceiveMessageRequest(input, context),
    Action: "ReceiveMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemovePermissionRequest(input, context),
    Action: "RemovePermission",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendMessageRequest(input, context),
    Action: "SendMessage",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySendMessageBatchCommand = async (
  input: SendMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySendMessageBatchRequest(input, context),
    Action: "SendMessageBatch",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetQueueAttributesCommand = async (
  input: SetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetQueueAttributesRequest(input, context),
    Action: "SetQueueAttributes",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagQueueCommand = async (
  input: TagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagQueueRequest(input, context),
    Action: "TagQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagQueueCommand = async (
  input: UntagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagQueueRequest(input, context),
    Action: "UntagQueue",
    Version: "2012-11-05",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryAddPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddPermissionCommandError = async (
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
      throw await deserializeAws_queryOverLimitResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryChangeMessageVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryChangeMessageVisibilityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ChangeMessageVisibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryChangeMessageVisibilityCommandError = async (
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
      throw await deserializeAws_queryMessageNotInflightResponse(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryChangeMessageVisibilityBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryChangeMessageVisibilityBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryChangeMessageVisibilityBatchResult(data.ChangeMessageVisibilityBatchResult, context);
  const response: ChangeMessageVisibilityBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryChangeMessageVisibilityBatchCommandError = async (
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
      throw await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryCreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateQueueResult(data.CreateQueueResult, context);
  const response: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateQueueCommandError = async (
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
      throw await deserializeAws_queryQueueDeletedRecentlyResponse(parsedOutput, context);
    case "QueueAlreadyExists":
    case "com.amazonaws.sqs#QueueNameExists":
      throw await deserializeAws_queryQueueNameExistsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteMessageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteMessageCommandError = async (
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
      throw await deserializeAws_queryInvalidIdFormatResponse(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteMessageBatchResult(data.DeleteMessageBatchResult, context);
  const response: DeleteMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteMessageBatchCommandError = async (
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
      throw await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryDeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryGetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetQueueAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetQueueAttributesResult(data.GetQueueAttributesResult, context);
  const response: GetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetQueueAttributesCommandError = async (
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
      throw await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryGetQueueUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetQueueUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetQueueUrlResult(data.GetQueueUrlResult, context);
  const response: GetQueueUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetQueueUrlCommandError = async (
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
      throw await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListDeadLetterSourceQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListDeadLetterSourceQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDeadLetterSourceQueuesResult(data.ListDeadLetterSourceQueuesResult, context);
  const response: ListDeadLetterSourceQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListDeadLetterSourceQueuesCommandError = async (
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
      throw await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListQueuesResult(data.ListQueuesResult, context);
  const response: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryListQueueTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListQueueTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListQueueTagsResult(data.ListQueueTagsResult, context);
  const response: ListQueueTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListQueueTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryPurgeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurgeQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPurgeQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PurgeQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPurgeQueueCommandError = async (
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
      throw await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.PurgeQueueInProgress":
    case "com.amazonaws.sqs#PurgeQueueInProgress":
      throw await deserializeAws_queryPurgeQueueInProgressResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryReceiveMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReceiveMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryReceiveMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReceiveMessageResult(data.ReceiveMessageResult, context);
  const response: ReceiveMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryReceiveMessageCommandError = async (
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
      throw await deserializeAws_queryOverLimitResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryRemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryRemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_querySendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendMessageResult(data.SendMessageResult, context);
  const response: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendMessageCommandError = async (
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
      throw await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context);
    case "InvalidMessageContents":
    case "com.amazonaws.sqs#InvalidMessageContents":
      throw await deserializeAws_queryInvalidMessageContentsResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySendMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySendMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendMessageBatchResult(data.SendMessageBatchResult, context);
  const response: SendMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySendMessageBatchCommandError = async (
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
      throw await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.BatchRequestTooLong":
    case "com.amazonaws.sqs#BatchRequestTooLong":
      throw await deserializeAws_queryBatchRequestTooLongResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context);
    case "AWS.SimpleQueueService.UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_querySetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetQueueAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetQueueAttributesCommandError = async (
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
      throw await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_queryTagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTagQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_queryUntagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUntagQueueCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

const deserializeAws_queryBatchEntryIdsNotDistinctResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinct> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchEntryIdsNotDistinct(body.Error, context);
  const exception = new BatchEntryIdsNotDistinct({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBatchRequestTooLongResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchRequestTooLong> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchRequestTooLong(body.Error, context);
  const exception = new BatchRequestTooLong({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEmptyBatchRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEmptyBatchRequest(body.Error, context);
  const exception = new EmptyBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidAttributeNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttributeName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAttributeName(body.Error, context);
  const exception = new InvalidAttributeName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidBatchEntryIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBatchEntryId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidBatchEntryId(body.Error, context);
  const exception = new InvalidBatchEntryId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidIdFormatResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdFormat> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidIdFormat(body.Error, context);
  const exception = new InvalidIdFormat({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidMessageContentsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMessageContents> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidMessageContents(body.Error, context);
  const exception = new InvalidMessageContents({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryMessageNotInflightResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageNotInflight> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMessageNotInflight(body.Error, context);
  const exception = new MessageNotInflight({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOverLimitResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOverLimit(body.Error, context);
  const exception = new OverLimit({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPurgeQueueInProgressResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PurgeQueueInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPurgeQueueInProgress(body.Error, context);
  const exception = new PurgeQueueInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryQueueDeletedRecentlyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDeletedRecently> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueDeletedRecently(body.Error, context);
  const exception = new QueueDeletedRecently({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryQueueDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueDoesNotExist(body.Error, context);
  const exception = new QueueDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryQueueNameExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueNameExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueNameExists(body.Error, context);
  const exception = new QueueNameExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryReceiptHandleIsInvalidResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReceiptHandleIsInvalid> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReceiptHandleIsInvalid(body.Error, context);
  const exception = new ReceiptHandleIsInvalid({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyEntriesInBatchRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyEntriesInBatchRequest(body.Error, context);
  const exception = new TooManyEntriesInBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUnsupportedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedOperation(body.Error, context);
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryActionNameList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAddPermissionRequest = (input: AddPermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.AWSAccountIds != null) {
    const memberEntries = serializeAws_queryAWSAccountIdList(input.AWSAccountIds, context);
    if (input.AWSAccountIds?.length === 0) {
      entries.AWSAccountId = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Actions != null) {
    const memberEntries = serializeAws_queryActionNameList(input.Actions, context);
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

const serializeAws_queryAttributeNameList = (input: (QueueAttributeName | string)[], context: __SerdeContext): any => {
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

const serializeAws_queryAWSAccountIdList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryBinaryList = (input: Uint8Array[], context: __SerdeContext): any => {
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

const serializeAws_queryChangeMessageVisibilityBatchRequest = (
  input: ChangeMessageVisibilityBatchRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntryList(input.Entries, context);
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

const serializeAws_queryChangeMessageVisibilityBatchRequestEntry = (
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

const serializeAws_queryChangeMessageVisibilityBatchRequestEntryList = (
  input: ChangeMessageVisibilityBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryChangeMessageVisibilityRequest = (
  input: ChangeMessageVisibilityRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_queryCreateQueueRequest = (input: CreateQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueName != null) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.tags != null) {
    const memberEntries = serializeAws_queryTagMap(input.tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteMessageBatchRequest = (
  input: DeleteMessageBatchRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = serializeAws_queryDeleteMessageBatchRequestEntryList(input.Entries, context);
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

const serializeAws_queryDeleteMessageBatchRequestEntry = (
  input: DeleteMessageBatchRequestEntry,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  return entries;
};

const serializeAws_queryDeleteMessageBatchRequestEntryList = (
  input: DeleteMessageBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryDeleteMessageBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDeleteMessageRequest = (input: DeleteMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiptHandle != null) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  return entries;
};

const serializeAws_queryDeleteQueueRequest = (input: DeleteQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryGetQueueAttributesRequest = (
  input: GetQueueAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.AttributeNames != null) {
    const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
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

const serializeAws_queryGetQueueUrlRequest = (input: GetQueueUrlRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueName != null) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.QueueOwnerAWSAccountId != null) {
    entries["QueueOwnerAWSAccountId"] = input.QueueOwnerAWSAccountId;
  }
  return entries;
};

const serializeAws_queryListDeadLetterSourceQueuesRequest = (
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

const serializeAws_queryListQueuesRequest = (input: ListQueuesRequest, context: __SerdeContext): any => {
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

const serializeAws_queryListQueueTagsRequest = (input: ListQueueTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryMessageAttributeNameList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryMessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StringValue != null) {
    entries["StringValue"] = input.StringValue;
  }
  if (input.BinaryValue != null) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.StringListValues != null) {
    const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
    if (input.StringListValues?.length === 0) {
      entries.StringListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryListValues != null) {
    const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
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

const serializeAws_queryMessageBodyAttributeMap = (
  input: Record<string, MessageAttributeValue>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      const memberEntries = serializeAws_queryMessageAttributeValue(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.Value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

const serializeAws_queryMessageBodySystemAttributeMap = (
  input: Record<string, MessageSystemAttributeValue>,
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      const memberEntries = serializeAws_queryMessageSystemAttributeValue(input[key], context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.Value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

const serializeAws_queryMessageSystemAttributeValue = (
  input: MessageSystemAttributeValue,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.StringValue != null) {
    entries["StringValue"] = input.StringValue;
  }
  if (input.BinaryValue != null) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.StringListValues != null) {
    const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
    if (input.StringListValues?.length === 0) {
      entries.StringListValue = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryListValues != null) {
    const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
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

const serializeAws_queryPurgeQueueRequest = (input: PurgeQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryQueueAttributeMap = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_queryReceiveMessageRequest = (input: ReceiveMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.AttributeNames != null) {
    const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
    if (input.AttributeNames?.length === 0) {
      entries.AttributeName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageAttributeNames != null) {
    const memberEntries = serializeAws_queryMessageAttributeNameList(input.MessageAttributeNames, context);
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

const serializeAws_queryRemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  return entries;
};

const serializeAws_querySendMessageBatchRequest = (input: SendMessageBatchRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Entries != null) {
    const memberEntries = serializeAws_querySendMessageBatchRequestEntryList(input.Entries, context);
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

const serializeAws_querySendMessageBatchRequestEntry = (
  input: SendMessageBatchRequestEntry,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageSystemAttributes != null) {
    const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
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

const serializeAws_querySendMessageBatchRequestEntryList = (
  input: SendMessageBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_querySendMessageBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_querySendMessageRequest = (input: SendMessageRequest, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageSystemAttributes != null) {
    const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
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

const serializeAws_querySetQueueAttributesRequest = (
  input: SetQueueAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryStringList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTagKeyList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
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

const serializeAws_queryTagQueueRequest = (input: TagQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagMap(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUntagQueueRequest = (input: UntagQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl != null) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
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

const deserializeAws_queryBatchEntryIdsNotDistinct = (
  output: any,
  context: __SerdeContext
): BatchEntryIdsNotDistinct => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryBatchRequestTooLong = (output: any, context: __SerdeContext): BatchRequestTooLong => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryBatchResultErrorEntry = (output: any, context: __SerdeContext): BatchResultErrorEntry => {
  const contents: any = {
    Id: undefined,
    SenderFault: undefined,
    Code: undefined,
    Message: undefined,
  };
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

const deserializeAws_queryBatchResultErrorEntryList = (
  output: any,
  context: __SerdeContext
): BatchResultErrorEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryBatchResultErrorEntry(entry, context);
    });
};

const deserializeAws_queryBinaryList = (output: any, context: __SerdeContext): Uint8Array[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return context.base64Decoder(entry);
    });
};

const deserializeAws_queryChangeMessageVisibilityBatchResult = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResult => {
  const contents: any = {
    Successful: undefined,
    Failed: undefined,
  };
  if (output.ChangeMessageVisibilityBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["ChangeMessageVisibilityBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_queryChangeMessageVisibilityBatchResultEntryList(
      __getArrayIfSingleItem(output["ChangeMessageVisibilityBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryChangeMessageVisibilityBatchResultEntry = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry => {
  const contents: any = {
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

const deserializeAws_queryChangeMessageVisibilityBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryChangeMessageVisibilityBatchResultEntry(entry, context);
    });
};

const deserializeAws_queryCreateQueueResult = (output: any, context: __SerdeContext): CreateQueueResult => {
  const contents: any = {
    QueueUrl: undefined,
  };
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = __expectString(output["QueueUrl"]);
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResult = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResult => {
  const contents: any = {
    Successful: undefined,
    Failed: undefined,
  };
  if (output.DeleteMessageBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["DeleteMessageBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_queryDeleteMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["DeleteMessageBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResultEntry = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResultEntry => {
  const contents: any = {
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryDeleteMessageBatchResultEntry(entry, context);
    });
};

const deserializeAws_queryEmptyBatchRequest = (output: any, context: __SerdeContext): EmptyBatchRequest => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryGetQueueAttributesResult = (
  output: any,
  context: __SerdeContext
): GetQueueAttributesResult => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attribute === "") {
    contents.Attributes = {};
  } else if (output["Attribute"] !== undefined) {
    contents.Attributes = deserializeAws_queryQueueAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
  }
  return contents;
};

const deserializeAws_queryGetQueueUrlResult = (output: any, context: __SerdeContext): GetQueueUrlResult => {
  const contents: any = {
    QueueUrl: undefined,
  };
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = __expectString(output["QueueUrl"]);
  }
  return contents;
};

const deserializeAws_queryInvalidAttributeName = (output: any, context: __SerdeContext): InvalidAttributeName => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryInvalidBatchEntryId = (output: any, context: __SerdeContext): InvalidBatchEntryId => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryInvalidIdFormat = (output: any, context: __SerdeContext): InvalidIdFormat => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryInvalidMessageContents = (output: any, context: __SerdeContext): InvalidMessageContents => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryListDeadLetterSourceQueuesResult = (
  output: any,
  context: __SerdeContext
): ListDeadLetterSourceQueuesResult => {
  const contents: any = {
    queueUrls: undefined,
    NextToken: undefined,
  };
  if (output.QueueUrl === "") {
    contents.queueUrls = [];
  } else if (output["QueueUrl"] !== undefined) {
    contents.queueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListQueuesResult = (output: any, context: __SerdeContext): ListQueuesResult => {
  const contents: any = {
    NextToken: undefined,
    QueueUrls: undefined,
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.QueueUrl === "") {
    contents.QueueUrls = [];
  } else if (output["QueueUrl"] !== undefined) {
    contents.QueueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  return contents;
};

const deserializeAws_queryListQueueTagsResult = (output: any, context: __SerdeContext): ListQueueTagsResult => {
  const contents: any = {
    Tags: undefined,
  };
  if (output.Tag === "") {
    contents.Tags = {};
  } else if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagMap(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryMessage = (output: any, context: __SerdeContext): Message => {
  const contents: any = {
    MessageId: undefined,
    ReceiptHandle: undefined,
    MD5OfBody: undefined,
    Body: undefined,
    Attributes: undefined,
    MD5OfMessageAttributes: undefined,
    MessageAttributes: undefined,
  };
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
    contents.Attributes = deserializeAws_queryMessageSystemAttributeMap(
      __getArrayIfSingleItem(output["Attribute"]),
      context
    );
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = __expectString(output["MD5OfMessageAttributes"]);
  }
  if (output.MessageAttribute === "") {
    contents.MessageAttributes = {};
  } else if (output["MessageAttribute"] !== undefined) {
    contents.MessageAttributes = deserializeAws_queryMessageBodyAttributeMap(
      __getArrayIfSingleItem(output["MessageAttribute"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  const contents: any = {
    StringValue: undefined,
    BinaryValue: undefined,
    StringListValues: undefined,
    BinaryListValues: undefined,
    DataType: undefined,
  };
  if (output["StringValue"] !== undefined) {
    contents.StringValue = __expectString(output["StringValue"]);
  }
  if (output["BinaryValue"] !== undefined) {
    contents.BinaryValue = context.base64Decoder(output["BinaryValue"]);
  }
  if (output.StringListValue === "") {
    contents.StringListValues = [];
  } else if (output["StringListValue"] !== undefined) {
    contents.StringListValues = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StringListValue"]),
      context
    );
  }
  if (output.BinaryListValue === "") {
    contents.BinaryListValues = [];
  } else if (output["BinaryListValue"] !== undefined) {
    contents.BinaryListValues = deserializeAws_queryBinaryList(
      __getArrayIfSingleItem(output["BinaryListValue"]),
      context
    );
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = __expectString(output["DataType"]);
  }
  return contents;
};

const deserializeAws_queryMessageBodyAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, MessageAttributeValue> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = deserializeAws_queryMessageAttributeValue(pair["Value"], context);
    return acc;
  }, {});
};

const deserializeAws_queryMessageList = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryMessage(entry, context);
    });
};

const deserializeAws_queryMessageNotInflight = (output: any, context: __SerdeContext): MessageNotInflight => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryMessageSystemAttributeMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryOverLimit = (output: any, context: __SerdeContext): OverLimit => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryPurgeQueueInProgress = (output: any, context: __SerdeContext): PurgeQueueInProgress => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryQueueAttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Name"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryQueueDeletedRecently = (output: any, context: __SerdeContext): QueueDeletedRecently => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryQueueDoesNotExist = (output: any, context: __SerdeContext): QueueDoesNotExist => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryQueueNameExists = (output: any, context: __SerdeContext): QueueNameExists => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryQueueUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryReceiptHandleIsInvalid = (output: any, context: __SerdeContext): ReceiptHandleIsInvalid => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryReceiveMessageResult = (output: any, context: __SerdeContext): ReceiveMessageResult => {
  const contents: any = {
    Messages: undefined,
  };
  if (output.Message === "") {
    contents.Messages = [];
  } else if (output["Message"] !== undefined) {
    contents.Messages = deserializeAws_queryMessageList(__getArrayIfSingleItem(output["Message"]), context);
  }
  return contents;
};

const deserializeAws_querySendMessageBatchResult = (output: any, context: __SerdeContext): SendMessageBatchResult => {
  const contents: any = {
    Successful: undefined,
    Failed: undefined,
  };
  if (output.SendMessageBatchResultEntry === "") {
    contents.Successful = [];
  } else if (output["SendMessageBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_querySendMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["SendMessageBatchResultEntry"]),
      context
    );
  }
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  } else if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySendMessageBatchResultEntry = (
  output: any,
  context: __SerdeContext
): SendMessageBatchResultEntry => {
  const contents: any = {
    Id: undefined,
    MessageId: undefined,
    MD5OfMessageBody: undefined,
    MD5OfMessageAttributes: undefined,
    MD5OfMessageSystemAttributes: undefined,
    SequenceNumber: undefined,
  };
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

const deserializeAws_querySendMessageBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): SendMessageBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySendMessageBatchResultEntry(entry, context);
    });
};

const deserializeAws_querySendMessageResult = (output: any, context: __SerdeContext): SendMessageResult => {
  const contents: any = {
    MD5OfMessageBody: undefined,
    MD5OfMessageAttributes: undefined,
    MD5OfMessageSystemAttributes: undefined,
    MessageId: undefined,
    SequenceNumber: undefined,
  };
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

const deserializeAws_queryStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["Value"] === null) {
      return acc;
    }
    acc[pair["Key"]] = __expectString(pair["Value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryTooManyEntriesInBatchRequest = (
  output: any,
  context: __SerdeContext
): TooManyEntriesInBatchRequest => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryUnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
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
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
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
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
