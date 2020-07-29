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
import { ListQueueTagsCommandInput, ListQueueTagsCommandOutput } from "../commands/ListQueueTagsCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "../commands/ListQueuesCommand";
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
  ListQueueTagsRequest,
  ListQueueTagsResult,
  ListQueuesRequest,
  ListQueuesResult,
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
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
    "Content-Type": "application/x-www-form-urlencoded",
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
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      response = {
        ...(await deserializeAws_queryOverLimitResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryChangeMessageVisibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MessageNotInflight":
    case "com.amazonaws.sqs#MessageNotInflight":
      response = {
        ...(await deserializeAws_queryMessageNotInflightResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      response = {
        ...(await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryChangeMessageVisibilityBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryChangeMessageVisibilityBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryChangeMessageVisibilityBatchResult(data.ChangeMessageVisibilityBatchResult, context);
  const response: ChangeMessageVisibilityBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ChangeMessageVisibilityBatchResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      response = {
        ...(await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      response = {
        ...(await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      response = {
        ...(await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      response = {
        ...(await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQueueCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateQueueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateQueueResult(data.CreateQueueResult, context);
  const response: CreateQueueCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateQueueResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "QueueDeletedRecently":
    case "com.amazonaws.sqs#QueueDeletedRecently":
      response = {
        ...(await deserializeAws_queryQueueDeletedRecentlyResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueueNameExists":
    case "com.amazonaws.sqs#QueueNameExists":
      response = {
        ...(await deserializeAws_queryQueueNameExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidIdFormat":
    case "com.amazonaws.sqs#InvalidIdFormat":
      response = {
        ...(await deserializeAws_queryInvalidIdFormatResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReceiptHandleIsInvalid":
    case "com.amazonaws.sqs#ReceiptHandleIsInvalid":
      response = {
        ...(await deserializeAws_queryReceiptHandleIsInvalidResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMessageBatchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteMessageBatchResult(data.DeleteMessageBatchResult, context);
  const response: DeleteMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMessageBatchResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      response = {
        ...(await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      response = {
        ...(await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      response = {
        ...(await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      response = {
        ...(await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueueCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetQueueAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetQueueAttributesResult(data.GetQueueAttributesResult, context);
  const response: GetQueueAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueueAttributesResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      response = {
        ...(await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetQueueUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueueUrlCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetQueueUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetQueueUrlResult(data.GetQueueUrlResult, context);
  const response: GetQueueUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueueUrlResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      response = {
        ...(await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListDeadLetterSourceQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListDeadLetterSourceQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDeadLetterSourceQueuesResult(data.ListDeadLetterSourceQueuesResult, context);
  const response: ListDeadLetterSourceQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeadLetterSourceQueuesResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      response = {
        ...(await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListQueuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListQueuesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListQueuesResult(data.ListQueuesResult, context);
  const response: ListQueuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQueuesResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListQueueTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueueTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListQueueTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListQueueTagsResult(data.ListQueueTagsResult, context);
  const response: ListQueueTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQueueTagsResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPurgeQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurgeQueueCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "PurgeQueueInProgress":
    case "com.amazonaws.sqs#PurgeQueueInProgress":
      response = {
        ...(await deserializeAws_queryPurgeQueueInProgressResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "QueueDoesNotExist":
    case "com.amazonaws.sqs#QueueDoesNotExist":
      response = {
        ...(await deserializeAws_queryQueueDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryReceiveMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReceiveMessageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryReceiveMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryReceiveMessageResult(data.ReceiveMessageResult, context);
  const response: ReceiveMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReceiveMessageResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OverLimit":
    case "com.amazonaws.sqs#OverLimit":
      response = {
        ...(await deserializeAws_queryOverLimitResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySendMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendMessageResult(data.SendMessageResult, context);
  const response: SendMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendMessageResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMessageContents":
    case "com.amazonaws.sqs#InvalidMessageContents":
      response = {
        ...(await deserializeAws_queryInvalidMessageContentsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      response = {
        ...(await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySendMessageBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessageBatchCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySendMessageBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySendMessageBatchResult(data.SendMessageBatchResult, context);
  const response: SendMessageBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendMessageBatchResult",
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sqs#BatchEntryIdsNotDistinct":
      response = {
        ...(await deserializeAws_queryBatchEntryIdsNotDistinctResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BatchRequestTooLong":
    case "com.amazonaws.sqs#BatchRequestTooLong":
      response = {
        ...(await deserializeAws_queryBatchRequestTooLongResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EmptyBatchRequest":
    case "com.amazonaws.sqs#EmptyBatchRequest":
      response = {
        ...(await deserializeAws_queryEmptyBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidBatchEntryId":
    case "com.amazonaws.sqs#InvalidBatchEntryId":
      response = {
        ...(await deserializeAws_queryInvalidBatchEntryIdResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sqs#TooManyEntriesInBatchRequest":
      response = {
        ...(await deserializeAws_queryTooManyEntriesInBatchRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.sqs#UnsupportedOperation":
      response = {
        ...(await deserializeAws_queryUnsupportedOperationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetQueueAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetQueueAttributesCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAttributeName":
    case "com.amazonaws.sqs#InvalidAttributeName":
      response = {
        ...(await deserializeAws_queryInvalidAttributeNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagQueueCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUntagQueueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagQueueCommandOutput> => {
  if (output.statusCode >= 400) {
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryBatchEntryIdsNotDistinctResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinct> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchEntryIdsNotDistinct(body.Error, context);
  const contents: BatchEntryIdsNotDistinct = {
    name: "BatchEntryIdsNotDistinct",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryBatchRequestTooLongResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchRequestTooLong> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchRequestTooLong(body.Error, context);
  const contents: BatchRequestTooLong = {
    name: "BatchRequestTooLong",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryEmptyBatchRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEmptyBatchRequest(body.Error, context);
  const contents: EmptyBatchRequest = {
    name: "EmptyBatchRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidAttributeNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAttributeName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAttributeName(body.Error, context);
  const contents: InvalidAttributeName = {
    name: "InvalidAttributeName",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidBatchEntryIdResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBatchEntryId> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidBatchEntryId(body.Error, context);
  const contents: InvalidBatchEntryId = {
    name: "InvalidBatchEntryId",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidIdFormatResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdFormat> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidIdFormat(body.Error, context);
  const contents: InvalidIdFormat = {
    name: "InvalidIdFormat",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidMessageContentsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMessageContents> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidMessageContents(body.Error, context);
  const contents: InvalidMessageContents = {
    name: "InvalidMessageContents",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMessageNotInflightResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MessageNotInflight> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMessageNotInflight(body.Error, context);
  const contents: MessageNotInflight = {
    name: "MessageNotInflight",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryOverLimitResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OverLimit> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOverLimit(body.Error, context);
  const contents: OverLimit = {
    name: "OverLimit",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPurgeQueueInProgressResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PurgeQueueInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPurgeQueueInProgress(body.Error, context);
  const contents: PurgeQueueInProgress = {
    name: "PurgeQueueInProgress",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryQueueDeletedRecentlyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDeletedRecently> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueDeletedRecently(body.Error, context);
  const contents: QueueDeletedRecently = {
    name: "QueueDeletedRecently",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryQueueDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueDoesNotExist(body.Error, context);
  const contents: QueueDoesNotExist = {
    name: "QueueDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryQueueNameExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueueNameExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryQueueNameExists(body.Error, context);
  const contents: QueueNameExists = {
    name: "QueueNameExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryReceiptHandleIsInvalidResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReceiptHandleIsInvalid> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReceiptHandleIsInvalid(body.Error, context);
  const contents: ReceiptHandleIsInvalid = {
    name: "ReceiptHandleIsInvalid",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryTooManyEntriesInBatchRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyEntriesInBatchRequest(body.Error, context);
  const contents: TooManyEntriesInBatchRequest = {
    name: "TooManyEntriesInBatchRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryUnsupportedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnsupportedOperation(body.Error, context);
  const contents: UnsupportedOperation = {
    name: "UnsupportedOperation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryActionNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAddPermissionRequest = (input: AddPermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AWSAccountIds !== undefined) {
    const memberEntries = serializeAws_queryAWSAccountIdList(input.AWSAccountIds, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Actions !== undefined) {
    const memberEntries = serializeAws_queryActionNameList(input.Actions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.Label !== undefined) {
    entries["Label"] = input.Label;
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryAttributeNameList = (input: (QueueAttributeName | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAWSAccountIdList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryBinaryList = (input: Uint8Array[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.Entries !== undefined) {
    const memberEntries = serializeAws_queryChangeMessageVisibilityBatchRequestEntryList(input.Entries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ChangeMessageVisibilityBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryChangeMessageVisibilityBatchRequestEntry = (
  input: ChangeMessageVisibilityBatchRequestEntry,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Id !== undefined) {
    entries["Id"] = input.Id;
  }
  if (input.ReceiptHandle !== undefined) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  if (input.VisibilityTimeout !== undefined) {
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
  for (let entry of input) {
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
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiptHandle !== undefined) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  if (input.VisibilityTimeout !== undefined) {
    entries["VisibilityTimeout"] = input.VisibilityTimeout;
  }
  return entries;
};

const serializeAws_queryCreateQueueRequest = (input: CreateQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueName !== undefined) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.tags !== undefined) {
    const memberEntries = serializeAws_queryTagMap(input.tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tag.${key.substring(key.indexOf(".") + 1)}`;
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
  if (input.Entries !== undefined) {
    const memberEntries = serializeAws_queryDeleteMessageBatchRequestEntryList(input.Entries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DeleteMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryDeleteMessageBatchRequestEntry = (
  input: DeleteMessageBatchRequestEntry,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Id !== undefined) {
    entries["Id"] = input.Id;
  }
  if (input.ReceiptHandle !== undefined) {
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
  for (let entry of input) {
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
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiptHandle !== undefined) {
    entries["ReceiptHandle"] = input.ReceiptHandle;
  }
  return entries;
};

const serializeAws_queryDeleteQueueRequest = (input: DeleteQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryGetQueueAttributesRequest = (
  input: GetQueueAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AttributeNames !== undefined) {
    const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryGetQueueUrlRequest = (input: GetQueueUrlRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueName !== undefined) {
    entries["QueueName"] = input.QueueName;
  }
  if (input.QueueOwnerAWSAccountId !== undefined) {
    entries["QueueOwnerAWSAccountId"] = input.QueueOwnerAWSAccountId;
  }
  return entries;
};

const serializeAws_queryListDeadLetterSourceQueuesRequest = (
  input: ListDeadLetterSourceQueuesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryListQueuesRequest = (input: ListQueuesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueNamePrefix !== undefined) {
    entries["QueueNamePrefix"] = input.QueueNamePrefix;
  }
  return entries;
};

const serializeAws_queryListQueueTagsRequest = (input: ListQueueTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryMessageAttributeNameList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryMessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.BinaryListValues !== undefined) {
    const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryValue !== undefined) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.DataType !== undefined) {
    entries["DataType"] = input.DataType;
  }
  if (input.StringListValues !== undefined) {
    const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.StringValue !== undefined) {
    entries["StringValue"] = input.StringValue;
  }
  return entries;
};

const serializeAws_queryMessageBodyAttributeMap = (
  input: { [key: string]: MessageAttributeValue },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach((key) => {
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
  input: { [key: string]: MessageSystemAttributeValue },
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach((key) => {
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
  if (input.BinaryListValues !== undefined) {
    const memberEntries = serializeAws_queryBinaryList(input.BinaryListValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `BinaryListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.BinaryValue !== undefined) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  if (input.DataType !== undefined) {
    entries["DataType"] = input.DataType;
  }
  if (input.StringListValues !== undefined) {
    const memberEntries = serializeAws_queryStringList(input.StringListValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StringListValue.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.StringValue !== undefined) {
    entries["StringValue"] = input.StringValue;
  }
  return entries;
};

const serializeAws_queryPurgeQueueRequest = (input: PurgeQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryQueueAttributeMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach((key) => {
    entries[`entry.${counter}.Name`] = key;
    entries[`entry.${counter}.Value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryReceiveMessageRequest = (input: ReceiveMessageRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AttributeNames !== undefined) {
    const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MaxNumberOfMessages !== undefined) {
    entries["MaxNumberOfMessages"] = input.MaxNumberOfMessages;
  }
  if (input.MessageAttributeNames !== undefined) {
    const memberEntries = serializeAws_queryMessageAttributeNameList(input.MessageAttributeNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributeName.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.ReceiveRequestAttemptId !== undefined) {
    entries["ReceiveRequestAttemptId"] = input.ReceiveRequestAttemptId;
  }
  if (input.VisibilityTimeout !== undefined) {
    entries["VisibilityTimeout"] = input.VisibilityTimeout;
  }
  if (input.WaitTimeSeconds !== undefined) {
    entries["WaitTimeSeconds"] = input.WaitTimeSeconds;
  }
  return entries;
};

const serializeAws_queryRemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Label !== undefined) {
    entries["Label"] = input.Label;
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_querySendMessageBatchRequest = (input: SendMessageBatchRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Entries !== undefined) {
    const memberEntries = serializeAws_querySendMessageBatchRequestEntryList(input.Entries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SendMessageBatchRequestEntry.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_querySendMessageBatchRequestEntry = (
  input: SendMessageBatchRequestEntry,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DelaySeconds !== undefined) {
    entries["DelaySeconds"] = input.DelaySeconds;
  }
  if (input.Id !== undefined) {
    entries["Id"] = input.Id;
  }
  if (input.MessageAttributes !== undefined) {
    const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageBody !== undefined) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.MessageDeduplicationId !== undefined) {
    entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
  }
  if (input.MessageGroupId !== undefined) {
    entries["MessageGroupId"] = input.MessageGroupId;
  }
  if (input.MessageSystemAttributes !== undefined) {
    const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySendMessageBatchRequestEntryList = (
  input: SendMessageBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.DelaySeconds !== undefined) {
    entries["DelaySeconds"] = input.DelaySeconds;
  }
  if (input.MessageAttributes !== undefined) {
    const memberEntries = serializeAws_queryMessageBodyAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.MessageBody !== undefined) {
    entries["MessageBody"] = input.MessageBody;
  }
  if (input.MessageDeduplicationId !== undefined) {
    entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
  }
  if (input.MessageGroupId !== undefined) {
    entries["MessageGroupId"] = input.MessageGroupId;
  }
  if (input.MessageSystemAttributes !== undefined) {
    const memberEntries = serializeAws_queryMessageBodySystemAttributeMap(input.MessageSystemAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageSystemAttribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_querySetQueueAttributesRequest = (
  input: SetQueueAttributesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Attributes !== undefined) {
    const memberEntries = serializeAws_queryQueueAttributeMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attribute.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  return entries;
};

const serializeAws_queryStringList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`StringListValue.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input).forEach((key) => {
    entries[`entry.${counter}.Key`] = key;
    entries[`entry.${counter}.Value`] = input[key];
    counter++;
  });
  return entries;
};

const serializeAws_queryTagQueueRequest = (input: TagQueueRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.Tags !== undefined) {
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
  if (input.QueueUrl !== undefined) {
    entries["QueueUrl"] = input.QueueUrl;
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
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
  let contents: any = {
    __type: "BatchEntryIdsNotDistinct",
  };
  return contents;
};

const deserializeAws_queryBatchRequestTooLong = (output: any, context: __SerdeContext): BatchRequestTooLong => {
  let contents: any = {
    __type: "BatchRequestTooLong",
  };
  return contents;
};

const deserializeAws_queryBatchResultErrorEntry = (output: any, context: __SerdeContext): BatchResultErrorEntry => {
  let contents: any = {
    __type: "BatchResultErrorEntry",
    Code: undefined,
    Id: undefined,
    Message: undefined,
    SenderFault: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["SenderFault"] !== undefined) {
    contents.SenderFault = output["SenderFault"] == "true";
  }
  return contents;
};

const deserializeAws_queryBatchResultErrorEntryList = (
  output: any,
  context: __SerdeContext
): BatchResultErrorEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_queryBatchResultErrorEntry(entry, context));
};

const deserializeAws_queryBinaryList = (output: any, context: __SerdeContext): Uint8Array[] => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_queryChangeMessageVisibilityBatchResult = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResult => {
  let contents: any = {
    __type: "ChangeMessageVisibilityBatchResult",
    Failed: undefined,
    Successful: undefined,
  };
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  }
  if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  if (output.ChangeMessageVisibilityBatchResultEntry === "") {
    contents.Successful = [];
  }
  if (output["ChangeMessageVisibilityBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_queryChangeMessageVisibilityBatchResultEntryList(
      __getArrayIfSingleItem(output["ChangeMessageVisibilityBatchResultEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryChangeMessageVisibilityBatchResultEntry = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry => {
  let contents: any = {
    __type: "ChangeMessageVisibilityBatchResultEntry",
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_queryChangeMessageVisibilityBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): ChangeMessageVisibilityBatchResultEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryChangeMessageVisibilityBatchResultEntry(entry, context)
  );
};

const deserializeAws_queryCreateQueueResult = (output: any, context: __SerdeContext): CreateQueueResult => {
  let contents: any = {
    __type: "CreateQueueResult",
    QueueUrl: undefined,
  };
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = output["QueueUrl"];
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResult = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResult => {
  let contents: any = {
    __type: "DeleteMessageBatchResult",
    Failed: undefined,
    Successful: undefined,
  };
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  }
  if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  if (output.DeleteMessageBatchResultEntry === "") {
    contents.Successful = [];
  }
  if (output["DeleteMessageBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_queryDeleteMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["DeleteMessageBatchResultEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResultEntry = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResultEntry => {
  let contents: any = {
    __type: "DeleteMessageBatchResultEntry",
    Id: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  return contents;
};

const deserializeAws_queryDeleteMessageBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): DeleteMessageBatchResultEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_queryDeleteMessageBatchResultEntry(entry, context));
};

const deserializeAws_queryEmptyBatchRequest = (output: any, context: __SerdeContext): EmptyBatchRequest => {
  let contents: any = {
    __type: "EmptyBatchRequest",
  };
  return contents;
};

const deserializeAws_queryGetQueueAttributesResult = (
  output: any,
  context: __SerdeContext
): GetQueueAttributesResult => {
  let contents: any = {
    __type: "GetQueueAttributesResult",
    Attributes: undefined,
  };
  if (output.Attribute === "") {
    contents.Attributes = {};
  }
  if (output["Attribute"] !== undefined) {
    contents.Attributes = deserializeAws_queryQueueAttributeMap(__getArrayIfSingleItem(output["Attribute"]), context);
  }
  return contents;
};

const deserializeAws_queryGetQueueUrlResult = (output: any, context: __SerdeContext): GetQueueUrlResult => {
  let contents: any = {
    __type: "GetQueueUrlResult",
    QueueUrl: undefined,
  };
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrl = output["QueueUrl"];
  }
  return contents;
};

const deserializeAws_queryInvalidAttributeName = (output: any, context: __SerdeContext): InvalidAttributeName => {
  let contents: any = {
    __type: "InvalidAttributeName",
  };
  return contents;
};

const deserializeAws_queryInvalidBatchEntryId = (output: any, context: __SerdeContext): InvalidBatchEntryId => {
  let contents: any = {
    __type: "InvalidBatchEntryId",
  };
  return contents;
};

const deserializeAws_queryInvalidIdFormat = (output: any, context: __SerdeContext): InvalidIdFormat => {
  let contents: any = {
    __type: "InvalidIdFormat",
  };
  return contents;
};

const deserializeAws_queryInvalidMessageContents = (output: any, context: __SerdeContext): InvalidMessageContents => {
  let contents: any = {
    __type: "InvalidMessageContents",
  };
  return contents;
};

const deserializeAws_queryListDeadLetterSourceQueuesResult = (
  output: any,
  context: __SerdeContext
): ListDeadLetterSourceQueuesResult => {
  let contents: any = {
    __type: "ListDeadLetterSourceQueuesResult",
    queueUrls: undefined,
  };
  if (output.QueueUrl === "") {
    contents.queueUrls = [];
  }
  if (output["QueueUrl"] !== undefined) {
    contents.queueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  return contents;
};

const deserializeAws_queryListQueuesResult = (output: any, context: __SerdeContext): ListQueuesResult => {
  let contents: any = {
    __type: "ListQueuesResult",
    QueueUrls: undefined,
  };
  if (output.QueueUrl === "") {
    contents.QueueUrls = [];
  }
  if (output["QueueUrl"] !== undefined) {
    contents.QueueUrls = deserializeAws_queryQueueUrlList(__getArrayIfSingleItem(output["QueueUrl"]), context);
  }
  return contents;
};

const deserializeAws_queryListQueueTagsResult = (output: any, context: __SerdeContext): ListQueueTagsResult => {
  let contents: any = {
    __type: "ListQueueTagsResult",
    Tags: undefined,
  };
  if (output.Tag === "") {
    contents.Tags = {};
  }
  if (output["Tag"] !== undefined) {
    contents.Tags = deserializeAws_queryTagMap(__getArrayIfSingleItem(output["Tag"]), context);
  }
  return contents;
};

const deserializeAws_queryMessage = (output: any, context: __SerdeContext): Message => {
  let contents: any = {
    __type: "Message",
    Attributes: undefined,
    Body: undefined,
    MD5OfBody: undefined,
    MD5OfMessageAttributes: undefined,
    MessageAttributes: undefined,
    MessageId: undefined,
    ReceiptHandle: undefined,
  };
  if (output.Attribute === "") {
    contents.Attributes = {};
  }
  if (output["Attribute"] !== undefined) {
    contents.Attributes = deserializeAws_queryMessageSystemAttributeMap(
      __getArrayIfSingleItem(output["Attribute"]),
      context
    );
  }
  if (output["Body"] !== undefined) {
    contents.Body = output["Body"];
  }
  if (output["MD5OfBody"] !== undefined) {
    contents.MD5OfBody = output["MD5OfBody"];
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
  }
  if (output.MessageAttribute === "") {
    contents.MessageAttributes = {};
  }
  if (output["MessageAttribute"] !== undefined) {
    contents.MessageAttributes = deserializeAws_queryMessageBodyAttributeMap(
      __getArrayIfSingleItem(output["MessageAttribute"]),
      context
    );
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = output["MessageId"];
  }
  if (output["ReceiptHandle"] !== undefined) {
    contents.ReceiptHandle = output["ReceiptHandle"];
  }
  return contents;
};

const deserializeAws_queryMessageAttributeValue = (output: any, context: __SerdeContext): MessageAttributeValue => {
  let contents: any = {
    __type: "MessageAttributeValue",
    BinaryListValues: undefined,
    BinaryValue: undefined,
    DataType: undefined,
    StringListValues: undefined,
    StringValue: undefined,
  };
  if (output.BinaryListValue === "") {
    contents.BinaryListValues = [];
  }
  if (output["BinaryListValue"] !== undefined) {
    contents.BinaryListValues = deserializeAws_queryBinaryList(
      __getArrayIfSingleItem(output["BinaryListValue"]),
      context
    );
  }
  if (output["BinaryValue"] !== undefined) {
    contents.BinaryValue = context.base64Decoder(output["BinaryValue"]);
  }
  if (output["DataType"] !== undefined) {
    contents.DataType = output["DataType"];
  }
  if (output.StringListValue === "") {
    contents.StringListValues = [];
  }
  if (output["StringListValue"] !== undefined) {
    contents.StringListValues = deserializeAws_queryStringList(
      __getArrayIfSingleItem(output["StringListValue"]),
      context
    );
  }
  if (output["StringValue"] !== undefined) {
    contents.StringValue = output["StringValue"];
  }
  return contents;
};

const deserializeAws_queryMessageBodyAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: MessageAttributeValue } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["Name"]]: deserializeAws_queryMessageAttributeValue(pair["Value"], context),
    }),
    {}
  );
};

const deserializeAws_queryMessageList = (output: any, context: __SerdeContext): Message[] => {
  return (output || []).map((entry: any) => deserializeAws_queryMessage(entry, context));
};

const deserializeAws_queryMessageNotInflight = (output: any, context: __SerdeContext): MessageNotInflight => {
  let contents: any = {
    __type: "MessageNotInflight",
  };
  return contents;
};

const deserializeAws_queryMessageSystemAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["Name"]]: pair["Value"],
    }),
    {}
  );
};

const deserializeAws_queryOverLimit = (output: any, context: __SerdeContext): OverLimit => {
  let contents: any = {
    __type: "OverLimit",
  };
  return contents;
};

const deserializeAws_queryPurgeQueueInProgress = (output: any, context: __SerdeContext): PurgeQueueInProgress => {
  let contents: any = {
    __type: "PurgeQueueInProgress",
  };
  return contents;
};

const deserializeAws_queryQueueAttributeMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["Name"]]: pair["Value"],
    }),
    {}
  );
};

const deserializeAws_queryQueueDeletedRecently = (output: any, context: __SerdeContext): QueueDeletedRecently => {
  let contents: any = {
    __type: "QueueDeletedRecently",
  };
  return contents;
};

const deserializeAws_queryQueueDoesNotExist = (output: any, context: __SerdeContext): QueueDoesNotExist => {
  let contents: any = {
    __type: "QueueDoesNotExist",
  };
  return contents;
};

const deserializeAws_queryQueueNameExists = (output: any, context: __SerdeContext): QueueNameExists => {
  let contents: any = {
    __type: "QueueNameExists",
  };
  return contents;
};

const deserializeAws_queryQueueUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryReceiptHandleIsInvalid = (output: any, context: __SerdeContext): ReceiptHandleIsInvalid => {
  let contents: any = {
    __type: "ReceiptHandleIsInvalid",
  };
  return contents;
};

const deserializeAws_queryReceiveMessageResult = (output: any, context: __SerdeContext): ReceiveMessageResult => {
  let contents: any = {
    __type: "ReceiveMessageResult",
    Messages: undefined,
  };
  if (output.Message === "") {
    contents.Messages = [];
  }
  if (output["Message"] !== undefined) {
    contents.Messages = deserializeAws_queryMessageList(__getArrayIfSingleItem(output["Message"]), context);
  }
  return contents;
};

const deserializeAws_querySendMessageBatchResult = (output: any, context: __SerdeContext): SendMessageBatchResult => {
  let contents: any = {
    __type: "SendMessageBatchResult",
    Failed: undefined,
    Successful: undefined,
  };
  if (output.BatchResultErrorEntry === "") {
    contents.Failed = [];
  }
  if (output["BatchResultErrorEntry"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["BatchResultErrorEntry"]),
      context
    );
  }
  if (output.SendMessageBatchResultEntry === "") {
    contents.Successful = [];
  }
  if (output["SendMessageBatchResultEntry"] !== undefined) {
    contents.Successful = deserializeAws_querySendMessageBatchResultEntryList(
      __getArrayIfSingleItem(output["SendMessageBatchResultEntry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySendMessageBatchResultEntry = (
  output: any,
  context: __SerdeContext
): SendMessageBatchResultEntry => {
  let contents: any = {
    __type: "SendMessageBatchResultEntry",
    Id: undefined,
    MD5OfMessageAttributes: undefined,
    MD5OfMessageBody: undefined,
    MD5OfMessageSystemAttributes: undefined,
    MessageId: undefined,
    SequenceNumber: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
  }
  if (output["MD5OfMessageBody"] !== undefined) {
    contents.MD5OfMessageBody = output["MD5OfMessageBody"];
  }
  if (output["MD5OfMessageSystemAttributes"] !== undefined) {
    contents.MD5OfMessageSystemAttributes = output["MD5OfMessageSystemAttributes"];
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = output["MessageId"];
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = output["SequenceNumber"];
  }
  return contents;
};

const deserializeAws_querySendMessageBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): SendMessageBatchResultEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_querySendMessageBatchResultEntry(entry, context));
};

const deserializeAws_querySendMessageResult = (output: any, context: __SerdeContext): SendMessageResult => {
  let contents: any = {
    __type: "SendMessageResult",
    MD5OfMessageAttributes: undefined,
    MD5OfMessageBody: undefined,
    MD5OfMessageSystemAttributes: undefined,
    MessageId: undefined,
    SequenceNumber: undefined,
  };
  if (output["MD5OfMessageAttributes"] !== undefined) {
    contents.MD5OfMessageAttributes = output["MD5OfMessageAttributes"];
  }
  if (output["MD5OfMessageBody"] !== undefined) {
    contents.MD5OfMessageBody = output["MD5OfMessageBody"];
  }
  if (output["MD5OfMessageSystemAttributes"] !== undefined) {
    contents.MD5OfMessageSystemAttributes = output["MD5OfMessageSystemAttributes"];
  }
  if (output["MessageId"] !== undefined) {
    contents.MessageId = output["MessageId"];
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = output["SequenceNumber"];
  }
  return contents;
};

const deserializeAws_queryStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryTagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["Key"]]: pair["Value"],
    }),
    {}
  );
};

const deserializeAws_queryTooManyEntriesInBatchRequest = (
  output: any,
  context: __SerdeContext
): TooManyEntriesInBatchRequest => {
  let contents: any = {
    __type: "TooManyEntriesInBatchRequest",
  };
  return contents;
};

const deserializeAws_queryUnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
  let contents: any = {
    __type: "UnsupportedOperation",
  };
  return contents;
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

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
