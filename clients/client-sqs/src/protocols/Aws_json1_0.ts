// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  _json,
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  take,
  withBaseException,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ChangeMessageVisibilityBatchRequest,
  ChangeMessageVisibilityBatchRequestEntry,
  ChangeMessageVisibilityRequest,
  CreateQueueRequest,
  DeleteMessageBatchRequest,
  DeleteMessageBatchRequestEntry,
  DeleteMessageRequest,
  DeleteQueueRequest,
  EmptyBatchRequest,
  GetQueueAttributesRequest,
  GetQueueUrlRequest,
  InvalidAddress,
  InvalidAttributeName,
  InvalidAttributeValue,
  InvalidBatchEntryId,
  InvalidIdFormat,
  InvalidMessageContents,
  InvalidSecurity,
  KmsAccessDenied,
  KmsDisabled,
  KmsInvalidKeyUsage,
  KmsInvalidState,
  KmsNotFound,
  KmsOptInRequired,
  KmsThrottled,
  ListDeadLetterSourceQueuesRequest,
  ListQueuesRequest,
  ListQueueTagsRequest,
  Message,
  MessageAttributeValue,
  MessageNotInflight,
  MessageSystemAttributeNameForSends,
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
  RequestThrottled,
  SendMessageBatchRequest,
  SendMessageBatchRequestEntry,
  SendMessageRequest,
  SetQueueAttributesRequest,
  TagQueueRequest,
  TooManyEntriesInBatchRequest,
  UnsupportedOperation,
  UntagQueueRequest,
} from "../models/models_0";
import { SQSServiceException as __BaseException } from "../models/SQSServiceException";

/**
 * serializeAws_json1_0AddPermissionCommand
 */
export const se_AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ChangeMessageVisibilityCommand
 */
export const se_ChangeMessageVisibilityCommand = async (
  input: ChangeMessageVisibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ChangeMessageVisibility");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ChangeMessageVisibilityBatchCommand
 */
export const se_ChangeMessageVisibilityBatchCommand = async (
  input: ChangeMessageVisibilityBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ChangeMessageVisibilityBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateQueueCommand
 */
export const se_CreateQueueCommand = async (
  input: CreateQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteMessageCommand
 */
export const se_DeleteMessageCommand = async (
  input: DeleteMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMessage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteMessageBatchCommand
 */
export const se_DeleteMessageBatchCommand = async (
  input: DeleteMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMessageBatch");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteQueueCommand
 */
export const se_DeleteQueueCommand = async (
  input: DeleteQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetQueueAttributesCommand
 */
export const se_GetQueueAttributesCommand = async (
  input: GetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueueAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetQueueUrlCommand
 */
export const se_GetQueueUrlCommand = async (
  input: GetQueueUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueueUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDeadLetterSourceQueuesCommand
 */
export const se_ListDeadLetterSourceQueuesCommand = async (
  input: ListDeadLetterSourceQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeadLetterSourceQueues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListQueuesCommand
 */
export const se_ListQueuesCommand = async (
  input: ListQueuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQueues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListQueueTagsCommand
 */
export const se_ListQueueTagsCommand = async (
  input: ListQueueTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQueueTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PurgeQueueCommand
 */
export const se_PurgeQueueCommand = async (
  input: PurgeQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PurgeQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ReceiveMessageCommand
 */
export const se_ReceiveMessageCommand = async (
  input: ReceiveMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReceiveMessage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemovePermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendMessageCommand
 */
export const se_SendMessageCommand = async (
  input: SendMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendMessage");
  let body: any;
  body = JSON.stringify(se_SendMessageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendMessageBatchCommand
 */
export const se_SendMessageBatchCommand = async (
  input: SendMessageBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendMessageBatch");
  let body: any;
  body = JSON.stringify(se_SendMessageBatchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetQueueAttributesCommand
 */
export const se_SetQueueAttributesCommand = async (
  input: SetQueueAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetQueueAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagQueueCommand
 */
export const se_TagQueueCommand = async (
  input: TagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagQueueCommand
 */
export const se_UntagQueueCommand = async (
  input: UntagQueueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagQueue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AddPermissionCommand
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
 * deserializeAws_json1_0AddPermissionCommandError
 */
const de_AddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      throw await de_OverLimitRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ChangeMessageVisibilityCommand
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
 * deserializeAws_json1_0ChangeMessageVisibilityCommandError
 */
const de_ChangeMessageVisibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MessageNotInflight":
    case "com.amazonaws.sqs#MessageNotInflight":
      throw await de_MessageNotInflightRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await de_ReceiptHandleIsInvalidRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ChangeMessageVisibilityBatchCommand
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
  contents = _json(data);
  const response: ChangeMessageVisibilityBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ChangeMessageVisibilityBatchCommandError
 */
const de_ChangeMessageVisibilityBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateQueueCommand
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
  contents = _json(data);
  const response: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateQueueCommandError
 */
const de_CreateQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      throw await de_InvalidAttributeNameRes(parsedOutput, context);
    case "InvalidAttributeValue":
    case "com.amazonaws.sqs#InvalidAttributeValue":
      throw await de_InvalidAttributeValueRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDeletedRecently":
    case "com.amazonaws.sqs#QueueDeletedRecently":
      throw await de_QueueDeletedRecentlyRes(parsedOutput, context);
    case "QueueNameExists":
    case "com.amazonaws.sqs#QueueNameExists":
      throw await de_QueueNameExistsRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteMessageCommand
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
 * deserializeAws_json1_0DeleteMessageCommandError
 */
const de_DeleteMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIdFormat":
    case "com.amazonaws.sqs#InvalidIdFormat":
      throw await de_InvalidIdFormatRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      throw await de_ReceiptHandleIsInvalidRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteMessageBatchCommand
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
  contents = _json(data);
  const response: DeleteMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteMessageBatchCommandError
 */
const de_DeleteMessageBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteQueueCommand
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
 * deserializeAws_json1_0DeleteQueueCommandError
 */
const de_DeleteQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetQueueAttributesCommand
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
  contents = _json(data);
  const response: GetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetQueueAttributesCommandError
 */
const de_GetQueueAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      throw await de_InvalidAttributeNameRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetQueueUrlCommand
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
  contents = _json(data);
  const response: GetQueueUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetQueueUrlCommandError
 */
const de_GetQueueUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListDeadLetterSourceQueuesCommand
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
  contents = _json(data);
  const response: ListDeadLetterSourceQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDeadLetterSourceQueuesCommandError
 */
const de_ListDeadLetterSourceQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListQueuesCommand
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
  contents = _json(data);
  const response: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListQueuesCommandError
 */
const de_ListQueuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListQueueTagsCommand
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
  contents = _json(data);
  const response: ListQueueTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListQueueTagsCommandError
 */
const de_ListQueueTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0PurgeQueueCommand
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
 * deserializeAws_json1_0PurgeQueueCommandError
 */
const de_PurgeQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurgeQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "PurgeQueueInProgress":
    case "com.amazonaws.sqs#PurgeQueueInProgress":
      throw await de_PurgeQueueInProgressRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0ReceiveMessageCommand
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
  contents = de_ReceiveMessageResult(data, context);
  const response: ReceiveMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ReceiveMessageCommandError
 */
const de_ReceiveMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReceiveMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "KmsAccessDenied":
    case "com.amazonaws.sqs#KmsAccessDenied":
      throw await de_KmsAccessDeniedRes(parsedOutput, context);
    case "KmsDisabled":
    case "com.amazonaws.sqs#KmsDisabled":
      throw await de_KmsDisabledRes(parsedOutput, context);
    case "KmsInvalidKeyUsage":
    case "com.amazonaws.sqs#KmsInvalidKeyUsage":
      throw await de_KmsInvalidKeyUsageRes(parsedOutput, context);
    case "KmsInvalidState":
    case "com.amazonaws.sqs#KmsInvalidState":
      throw await de_KmsInvalidStateRes(parsedOutput, context);
    case "KmsNotFound":
    case "com.amazonaws.sqs#KmsNotFound":
      throw await de_KmsNotFoundRes(parsedOutput, context);
    case "KmsOptInRequired":
    case "com.amazonaws.sqs#KmsOptInRequired":
      throw await de_KmsOptInRequiredRes(parsedOutput, context);
    case "KmsThrottled":
    case "com.amazonaws.sqs#KmsThrottled":
      throw await de_KmsThrottledRes(parsedOutput, context);
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      throw await de_OverLimitRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0RemovePermissionCommand
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
 * deserializeAws_json1_0RemovePermissionCommandError
 */
const de_RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0SendMessageCommand
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
  contents = _json(data);
  const response: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendMessageCommandError
 */
const de_SendMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMessageContents":
    case "com.amazonaws.sqs#InvalidMessageContents":
      throw await de_InvalidMessageContentsRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "KmsAccessDenied":
    case "com.amazonaws.sqs#KmsAccessDenied":
      throw await de_KmsAccessDeniedRes(parsedOutput, context);
    case "KmsDisabled":
    case "com.amazonaws.sqs#KmsDisabled":
      throw await de_KmsDisabledRes(parsedOutput, context);
    case "KmsInvalidKeyUsage":
    case "com.amazonaws.sqs#KmsInvalidKeyUsage":
      throw await de_KmsInvalidKeyUsageRes(parsedOutput, context);
    case "KmsInvalidState":
    case "com.amazonaws.sqs#KmsInvalidState":
      throw await de_KmsInvalidStateRes(parsedOutput, context);
    case "KmsNotFound":
    case "com.amazonaws.sqs#KmsNotFound":
      throw await de_KmsNotFoundRes(parsedOutput, context);
    case "KmsOptInRequired":
    case "com.amazonaws.sqs#KmsOptInRequired":
      throw await de_KmsOptInRequiredRes(parsedOutput, context);
    case "KmsThrottled":
    case "com.amazonaws.sqs#KmsThrottled":
      throw await de_KmsThrottledRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0SendMessageBatchCommand
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
  contents = _json(data);
  const response: SendMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendMessageBatchCommandError
 */
const de_SendMessageBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      throw await de_BatchEntryIdsNotDistinctRes(parsedOutput, context);
    case "BatchRequestTooLong":
    case "com.amazonaws.sqs#BatchRequestTooLong":
      throw await de_BatchRequestTooLongRes(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      throw await de_EmptyBatchRequestRes(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      throw await de_InvalidBatchEntryIdRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "KmsAccessDenied":
    case "com.amazonaws.sqs#KmsAccessDenied":
      throw await de_KmsAccessDeniedRes(parsedOutput, context);
    case "KmsDisabled":
    case "com.amazonaws.sqs#KmsDisabled":
      throw await de_KmsDisabledRes(parsedOutput, context);
    case "KmsInvalidKeyUsage":
    case "com.amazonaws.sqs#KmsInvalidKeyUsage":
      throw await de_KmsInvalidKeyUsageRes(parsedOutput, context);
    case "KmsInvalidState":
    case "com.amazonaws.sqs#KmsInvalidState":
      throw await de_KmsInvalidStateRes(parsedOutput, context);
    case "KmsNotFound":
    case "com.amazonaws.sqs#KmsNotFound":
      throw await de_KmsNotFoundRes(parsedOutput, context);
    case "KmsOptInRequired":
    case "com.amazonaws.sqs#KmsOptInRequired":
      throw await de_KmsOptInRequiredRes(parsedOutput, context);
    case "KmsThrottled":
    case "com.amazonaws.sqs#KmsThrottled":
      throw await de_KmsThrottledRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      throw await de_TooManyEntriesInBatchRequestRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0SetQueueAttributesCommand
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
 * deserializeAws_json1_0SetQueueAttributesCommandError
 */
const de_SetQueueAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetQueueAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      throw await de_InvalidAttributeNameRes(parsedOutput, context);
    case "InvalidAttributeValue":
    case "com.amazonaws.sqs#InvalidAttributeValue":
      throw await de_InvalidAttributeValueRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      throw await de_OverLimitRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0TagQueueCommand
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
 * deserializeAws_json1_0TagQueueCommandError
 */
const de_TagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0UntagQueueCommand
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
 * deserializeAws_json1_0UntagQueueCommandError
 */
const de_UntagQueueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  populateBodyWithQueryCompatibility(parsedOutput, output.headers);
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddress":
    case "com.amazonaws.sqs#InvalidAddress":
      throw await de_InvalidAddressRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sqs#InvalidSecurity":
      throw await de_InvalidSecurityRes(parsedOutput, context);
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      throw await de_QueueDoesNotExistRes(parsedOutput, context);
    case "RequestThrottled":
    case "com.amazonaws.sqs#RequestThrottled":
      throw await de_RequestThrottledRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
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
 * deserializeAws_json1_0BatchEntryIdsNotDistinctRes
 */
const de_BatchEntryIdsNotDistinctRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinct> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BatchEntryIdsNotDistinct({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0BatchRequestTooLongRes
 */
const de_BatchRequestTooLongRes = async (parsedOutput: any, context: __SerdeContext): Promise<BatchRequestTooLong> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BatchRequestTooLong({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0EmptyBatchRequestRes
 */
const de_EmptyBatchRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<EmptyBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EmptyBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidAddressRes
 */
const de_InvalidAddressRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidAddress> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidAddress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidAttributeNameRes
 */
const de_InvalidAttributeNameRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttributeName> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidAttributeName({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidAttributeValueRes
 */
const de_InvalidAttributeValueRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttributeValue> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidAttributeValue({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidBatchEntryIdRes
 */
const de_InvalidBatchEntryIdRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidBatchEntryId> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidBatchEntryId({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidIdFormatRes
 */
const de_InvalidIdFormatRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidIdFormat> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidIdFormat({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidMessageContentsRes
 */
const de_InvalidMessageContentsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMessageContents> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidMessageContents({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidSecurityRes
 */
const de_InvalidSecurityRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSecurity> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSecurity({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsAccessDeniedRes
 */
const de_KmsAccessDeniedRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsAccessDenied> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsAccessDenied({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsDisabledRes
 */
const de_KmsDisabledRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsDisabled> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsDisabled({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsInvalidKeyUsageRes
 */
const de_KmsInvalidKeyUsageRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsInvalidKeyUsage> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsInvalidKeyUsage({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsInvalidStateRes
 */
const de_KmsInvalidStateRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsInvalidState> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsInvalidState({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsNotFoundRes
 */
const de_KmsNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsOptInRequiredRes
 */
const de_KmsOptInRequiredRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsOptInRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0KmsThrottledRes
 */
const de_KmsThrottledRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsThrottled> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new KmsThrottled({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0MessageNotInflightRes
 */
const de_MessageNotInflightRes = async (parsedOutput: any, context: __SerdeContext): Promise<MessageNotInflight> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MessageNotInflight({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0OverLimitRes
 */
const de_OverLimitRes = async (parsedOutput: any, context: __SerdeContext): Promise<OverLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OverLimit({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0PurgeQueueInProgressRes
 */
const de_PurgeQueueInProgressRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PurgeQueueInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PurgeQueueInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0QueueDeletedRecentlyRes
 */
const de_QueueDeletedRecentlyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDeletedRecently> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new QueueDeletedRecently({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0QueueDoesNotExistRes
 */
const de_QueueDoesNotExistRes = async (parsedOutput: any, context: __SerdeContext): Promise<QueueDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new QueueDoesNotExist({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0QueueNameExistsRes
 */
const de_QueueNameExistsRes = async (parsedOutput: any, context: __SerdeContext): Promise<QueueNameExists> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new QueueNameExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ReceiptHandleIsInvalidRes
 */
const de_ReceiptHandleIsInvalidRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReceiptHandleIsInvalid> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ReceiptHandleIsInvalid({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RequestThrottledRes
 */
const de_RequestThrottledRes = async (parsedOutput: any, context: __SerdeContext): Promise<RequestThrottled> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RequestThrottled({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TooManyEntriesInBatchRequestRes
 */
const de_TooManyEntriesInBatchRequestRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyEntriesInBatchRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnsupportedOperationRes
 */
const de_UnsupportedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionNameList omitted.

// se_AddPermissionRequest omitted.

// se_AttributeNameList omitted.

// se_AWSAccountIdList omitted.

/**
 * serializeAws_json1_0BinaryList
 */
const se_BinaryList = (input: Uint8Array[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return context.base64Encoder(entry);
    });
};

// se_ChangeMessageVisibilityBatchRequest omitted.

// se_ChangeMessageVisibilityBatchRequestEntry omitted.

// se_ChangeMessageVisibilityBatchRequestEntryList omitted.

// se_ChangeMessageVisibilityRequest omitted.

// se_CreateQueueRequest omitted.

// se_DeleteMessageBatchRequest omitted.

// se_DeleteMessageBatchRequestEntry omitted.

// se_DeleteMessageBatchRequestEntryList omitted.

// se_DeleteMessageRequest omitted.

// se_DeleteQueueRequest omitted.

// se_GetQueueAttributesRequest omitted.

// se_GetQueueUrlRequest omitted.

// se_ListDeadLetterSourceQueuesRequest omitted.

// se_ListQueuesRequest omitted.

// se_ListQueueTagsRequest omitted.

// se_MessageAttributeNameList omitted.

/**
 * serializeAws_json1_0MessageAttributeValue
 */
const se_MessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  return take(input, {
    BinaryListValues: (_) => se_BinaryList(_, context),
    BinaryValue: context.base64Encoder,
    DataType: [],
    StringListValues: _json,
    StringValue: [],
  });
};

/**
 * serializeAws_json1_0MessageBodyAttributeMap
 */
const se_MessageBodyAttributeMap = (input: Record<string, MessageAttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MessageAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0MessageBodySystemAttributeMap
 */
const se_MessageBodySystemAttributeMap = (
  input: Record<string, MessageSystemAttributeValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [MessageSystemAttributeNameForSends | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_MessageSystemAttributeValue(value, context);
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_0MessageSystemAttributeValue
 */
const se_MessageSystemAttributeValue = (input: MessageSystemAttributeValue, context: __SerdeContext): any => {
  return take(input, {
    BinaryListValues: (_) => se_BinaryList(_, context),
    BinaryValue: context.base64Encoder,
    DataType: [],
    StringListValues: _json,
    StringValue: [],
  });
};

// se_PurgeQueueRequest omitted.

// se_QueueAttributeMap omitted.

// se_ReceiveMessageRequest omitted.

// se_RemovePermissionRequest omitted.

/**
 * serializeAws_json1_0SendMessageBatchRequest
 */
const se_SendMessageBatchRequest = (input: SendMessageBatchRequest, context: __SerdeContext): any => {
  return take(input, {
    Entries: (_) => se_SendMessageBatchRequestEntryList(_, context),
    QueueUrl: [],
  });
};

/**
 * serializeAws_json1_0SendMessageBatchRequestEntry
 */
const se_SendMessageBatchRequestEntry = (input: SendMessageBatchRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    DelaySeconds: [],
    Id: [],
    MessageAttributes: (_) => se_MessageBodyAttributeMap(_, context),
    MessageBody: [],
    MessageDeduplicationId: [],
    MessageGroupId: [],
    MessageSystemAttributes: (_) => se_MessageBodySystemAttributeMap(_, context),
  });
};

/**
 * serializeAws_json1_0SendMessageBatchRequestEntryList
 */
const se_SendMessageBatchRequestEntryList = (input: SendMessageBatchRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SendMessageBatchRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_0SendMessageRequest
 */
const se_SendMessageRequest = (input: SendMessageRequest, context: __SerdeContext): any => {
  return take(input, {
    DelaySeconds: [],
    MessageAttributes: (_) => se_MessageBodyAttributeMap(_, context),
    MessageBody: [],
    MessageDeduplicationId: [],
    MessageGroupId: [],
    MessageSystemAttributes: (_) => se_MessageBodySystemAttributeMap(_, context),
    QueueUrl: [],
  });
};

// se_SetQueueAttributesRequest omitted.

// se_StringList omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_TagQueueRequest omitted.

// se_UntagQueueRequest omitted.

// de_BatchEntryIdsNotDistinct omitted.

// de_BatchRequestTooLong omitted.

// de_BatchResultErrorEntry omitted.

// de_BatchResultErrorEntryList omitted.

/**
 * deserializeAws_json1_0BinaryList
 */
const de_BinaryList = (output: any, context: __SerdeContext): Uint8Array[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return context.base64Decoder(entry);
    });
  return retVal;
};

// de_ChangeMessageVisibilityBatchResult omitted.

// de_ChangeMessageVisibilityBatchResultEntry omitted.

// de_ChangeMessageVisibilityBatchResultEntryList omitted.

// de_CreateQueueResult omitted.

// de_DeleteMessageBatchResult omitted.

// de_DeleteMessageBatchResultEntry omitted.

// de_DeleteMessageBatchResultEntryList omitted.

// de_EmptyBatchRequest omitted.

// de_GetQueueAttributesResult omitted.

// de_GetQueueUrlResult omitted.

// de_InvalidAddress omitted.

// de_InvalidAttributeName omitted.

// de_InvalidAttributeValue omitted.

// de_InvalidBatchEntryId omitted.

// de_InvalidIdFormat omitted.

// de_InvalidMessageContents omitted.

// de_InvalidSecurity omitted.

// de_KmsAccessDenied omitted.

// de_KmsDisabled omitted.

// de_KmsInvalidKeyUsage omitted.

// de_KmsInvalidState omitted.

// de_KmsNotFound omitted.

// de_KmsOptInRequired omitted.

// de_KmsThrottled omitted.

// de_ListDeadLetterSourceQueuesResult omitted.

// de_ListQueuesResult omitted.

// de_ListQueueTagsResult omitted.

/**
 * deserializeAws_json1_0Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return take(output, {
    Attributes: _json,
    Body: __expectString,
    MD5OfBody: __expectString,
    MD5OfMessageAttributes: __expectString,
    MessageAttributes: (_: any) => de_MessageBodyAttributeMap(_, context),
    MessageId: __expectString,
    ReceiptHandle: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0MessageAttributeValue
 */
const de_MessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  return take(output, {
    BinaryListValues: (_: any) => de_BinaryList(_, context),
    BinaryValue: context.base64Decoder,
    DataType: __expectString,
    StringListValues: _json,
    StringValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0MessageBodyAttributeMap
 */
const de_MessageBodyAttributeMap = (output: any, context: __SerdeContext): Record<string, MessageAttributeValue> => {
  return Object.entries(output).reduce((acc: Record<string, MessageAttributeValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MessageAttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0MessageList
 */
const de_MessageList = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Message(entry, context);
    });
  return retVal;
};

// de_MessageNotInflight omitted.

// de_MessageSystemAttributeMap omitted.

// de_OverLimit omitted.

// de_PurgeQueueInProgress omitted.

// de_QueueAttributeMap omitted.

// de_QueueDeletedRecently omitted.

// de_QueueDoesNotExist omitted.

// de_QueueNameExists omitted.

// de_QueueUrlList omitted.

// de_ReceiptHandleIsInvalid omitted.

/**
 * deserializeAws_json1_0ReceiveMessageResult
 */
const de_ReceiveMessageResult = (output: any, context: __SerdeContext): ReceiveMessageResult => {
  return take(output, {
    Messages: (_: any) => de_MessageList(_, context),
  }) as any;
};

// de_RequestThrottled omitted.

// de_SendMessageBatchResult omitted.

// de_SendMessageBatchResultEntry omitted.

// de_SendMessageBatchResultEntryList omitted.

// de_SendMessageResult omitted.

// de_StringList omitted.

// de_TagMap omitted.

// de_TooManyEntriesInBatchRequest omitted.

// de_UnsupportedOperation omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AmazonSQS.${operation}`,
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

const populateBodyWithQueryCompatibility = (parsedOutput: any, headers: __HeaderBag) => {
  const queryErrorHeader = headers["x-amzn-query-error"];
  if (parsedOutput.body !== undefined && queryErrorHeader != null) {
    const codeAndType = queryErrorHeader.split(";");
    parsedOutput.body.Code = codeAndType[0];
    parsedOutput.body.Type = codeAndType[1];
  }
};
