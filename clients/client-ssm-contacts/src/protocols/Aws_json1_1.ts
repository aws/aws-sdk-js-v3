// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AcceptPageCommandInput, AcceptPageCommandOutput } from "../commands/AcceptPageCommand";
import {
  ActivateContactChannelCommandInput,
  ActivateContactChannelCommandOutput,
} from "../commands/ActivateContactChannelCommand";
import {
  CreateContactChannelCommandInput,
  CreateContactChannelCommandOutput,
} from "../commands/CreateContactChannelCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "../commands/CreateContactCommand";
import {
  DeactivateContactChannelCommandInput,
  DeactivateContactChannelCommandOutput,
} from "../commands/DeactivateContactChannelCommand";
import {
  DeleteContactChannelCommandInput,
  DeleteContactChannelCommandOutput,
} from "../commands/DeleteContactChannelCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "../commands/DeleteContactCommand";
import { DescribeEngagementCommandInput, DescribeEngagementCommandOutput } from "../commands/DescribeEngagementCommand";
import { DescribePageCommandInput, DescribePageCommandOutput } from "../commands/DescribePageCommand";
import { GetContactChannelCommandInput, GetContactChannelCommandOutput } from "../commands/GetContactChannelCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "../commands/GetContactCommand";
import { GetContactPolicyCommandInput, GetContactPolicyCommandOutput } from "../commands/GetContactPolicyCommand";
import {
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
} from "../commands/ListContactChannelsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import { ListEngagementsCommandInput, ListEngagementsCommandOutput } from "../commands/ListEngagementsCommand";
import { ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput } from "../commands/ListPageReceiptsCommand";
import { ListPagesByContactCommandInput, ListPagesByContactCommandOutput } from "../commands/ListPagesByContactCommand";
import {
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "../commands/ListPagesByEngagementCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutContactPolicyCommandInput, PutContactPolicyCommandOutput } from "../commands/PutContactPolicyCommand";
import { SendActivationCodeCommandInput, SendActivationCodeCommandOutput } from "../commands/SendActivationCodeCommand";
import { StartEngagementCommandInput, StartEngagementCommandOutput } from "../commands/StartEngagementCommand";
import { StopEngagementCommandInput, StopEngagementCommandOutput } from "../commands/StopEngagementCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateContactChannelCommandInput,
  UpdateContactChannelCommandOutput,
} from "../commands/UpdateContactChannelCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "../commands/UpdateContactCommand";
import {
  AcceptPageRequest,
  AcceptPageResult,
  AccessDeniedException,
  ActivateContactChannelRequest,
  ActivateContactChannelResult,
  ChannelTargetInfo,
  ConflictException,
  Contact,
  ContactChannel,
  ContactChannelAddress,
  ContactTargetInfo,
  CreateContactChannelRequest,
  CreateContactChannelResult,
  CreateContactRequest,
  CreateContactResult,
  DataEncryptionException,
  DeactivateContactChannelRequest,
  DeactivateContactChannelResult,
  DeleteContactChannelRequest,
  DeleteContactChannelResult,
  DeleteContactRequest,
  DeleteContactResult,
  DescribeEngagementRequest,
  DescribeEngagementResult,
  DescribePageRequest,
  DescribePageResult,
  Engagement,
  GetContactChannelRequest,
  GetContactChannelResult,
  GetContactPolicyRequest,
  GetContactPolicyResult,
  GetContactRequest,
  GetContactResult,
  InternalServerException,
  ListContactChannelsRequest,
  ListContactChannelsResult,
  ListContactsRequest,
  ListContactsResult,
  ListEngagementsRequest,
  ListEngagementsResult,
  ListPageReceiptsRequest,
  ListPageReceiptsResult,
  ListPagesByContactRequest,
  ListPagesByContactResult,
  ListPagesByEngagementRequest,
  ListPagesByEngagementResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  Page,
  Plan,
  PutContactPolicyRequest,
  PutContactPolicyResult,
  Receipt,
  ResourceNotFoundException,
  SendActivationCodeRequest,
  SendActivationCodeResult,
  ServiceQuotaExceededException,
  Stage,
  StartEngagementRequest,
  StartEngagementResult,
  StopEngagementRequest,
  StopEngagementResult,
  Tag,
  TagResourceRequest,
  TagResourceResult,
  Target,
  ThrottlingException,
  TimeRange,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateContactChannelRequest,
  UpdateContactChannelResult,
  UpdateContactRequest,
  UpdateContactResult,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { SSMContactsServiceException as __BaseException } from "../models/SSMContactsServiceException";

export const serializeAws_json1_1AcceptPageCommand = async (
  input: AcceptPageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.AcceptPage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptPageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ActivateContactChannelCommand = async (
  input: ActivateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ActivateContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ActivateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateContactChannelCommand = async (
  input: CreateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivateContactChannelCommand = async (
  input: DeactivateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeactivateContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeactivateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteContactChannelCommand = async (
  input: DeleteContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEngagementCommand = async (
  input: DescribeEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DescribeEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePageCommand = async (
  input: DescribePageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DescribePage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactChannelCommand = async (
  input: GetContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactPolicyCommand = async (
  input: GetContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContactPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListContactChannelsCommand = async (
  input: ListContactChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListContactChannels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListContactChannelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListContacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListContactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEngagementsCommand = async (
  input: ListEngagementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListEngagements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEngagementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPageReceiptsCommand = async (
  input: ListPageReceiptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPageReceipts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPageReceiptsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPagesByContactCommand = async (
  input: ListPagesByContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPagesByContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPagesByContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPagesByEngagementCommand = async (
  input: ListPagesByEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPagesByEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPagesByEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutContactPolicyCommand = async (
  input: PutContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.PutContactPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutContactPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendActivationCodeCommand = async (
  input: SendActivationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.SendActivationCode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendActivationCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartEngagementCommand = async (
  input: StartEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.StartEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopEngagementCommand = async (
  input: StopEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.StopEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UpdateContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateContactChannelCommand = async (
  input: UpdateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UpdateContactChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptPageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptPageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptPageResult(data, context);
  const response: AcceptPageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptPageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ActivateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ActivateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ActivateContactChannelResult(data, context);
  const response: ActivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContactResult(data, context);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1CreateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateContactChannelResult(data, context);
  const response: CreateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1DeactivateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeactivateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeactivateContactChannelResult(data, context);
  const response: DeactivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivateContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContactResult(data, context);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1DeleteContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteContactChannelResult(data, context);
  const response: DeleteContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1DescribeEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEngagementResult(data, context);
  const response: DescribeEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1DescribePageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePageResult(data, context);
  const response: DescribePageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactResult(data, context);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1GetContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactChannelResult(data, context);
  const response: GetContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1GetContactPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactPolicyResult(data, context);
  const response: GetContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListContactChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactChannelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListContactChannelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContactChannelsResult(data, context);
  const response: ListContactChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListContactChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListContactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListContactsResult(data, context);
  const response: ListContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListEngagementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEngagementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEngagementsResult(data, context);
  const response: ListEngagementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEngagementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListPageReceiptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPageReceiptsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPageReceiptsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPageReceiptsResult(data, context);
  const response: ListPageReceiptsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPageReceiptsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPageReceiptsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListPagesByContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPagesByContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPagesByContactResult(data, context);
  const response: ListPagesByContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPagesByContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListPagesByEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPagesByEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPagesByEngagementResult(data, context);
  const response: ListPagesByEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPagesByEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1PutContactPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContactPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutContactPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutContactPolicyResult(data, context);
  const response: PutContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutContactPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContactPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1SendActivationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendActivationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendActivationCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendActivationCodeResult(data, context);
  const response: SendActivationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendActivationCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendActivationCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1StartEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartEngagementResult(data, context);
  const response: StartEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1StopEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopEngagementResult(data, context);
  const response: StopEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContactResult(data, context);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

export const deserializeAws_json1_1UpdateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateContactChannelResult(data, context);
  const response: UpdateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateContactChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await deserializeAws_json1_1DataEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataEncryptionException(body, context);
  const exception = new DataEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
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

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
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

const serializeAws_json1_1AcceptPageRequest = (input: AcceptPageRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceptCode != null && { AcceptCode: input.AcceptCode }),
    ...(input.AcceptCodeValidation != null && { AcceptCodeValidation: input.AcceptCodeValidation }),
    ...(input.AcceptType != null && { AcceptType: input.AcceptType }),
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.Note != null && { Note: input.Note }),
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

const serializeAws_json1_1ActivateContactChannelRequest = (
  input: ActivateContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActivationCode != null && { ActivationCode: input.ActivationCode }),
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

const serializeAws_json1_1ChannelTargetInfo = (input: ChannelTargetInfo, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.RetryIntervalInMinutes != null && { RetryIntervalInMinutes: input.RetryIntervalInMinutes }),
  };
};

const serializeAws_json1_1ContactChannelAddress = (input: ContactChannelAddress, context: __SerdeContext): any => {
  return {
    ...(input.SimpleAddress != null && { SimpleAddress: input.SimpleAddress }),
  };
};

const serializeAws_json1_1ContactTargetInfo = (input: ContactTargetInfo, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.IsEssential != null && { IsEssential: input.IsEssential }),
  };
};

const serializeAws_json1_1CreateContactChannelRequest = (
  input: CreateContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.DeferActivation != null && { DeferActivation: input.DeferActivation }),
    ...(input.DeliveryAddress != null && {
      DeliveryAddress: serializeAws_json1_1ContactChannelAddress(input.DeliveryAddress, context),
    }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Plan != null && { Plan: serializeAws_json1_1Plan(input.Plan, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DeactivateContactChannelRequest = (
  input: DeactivateContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

const serializeAws_json1_1DeleteContactChannelRequest = (
  input: DeleteContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

const serializeAws_json1_1DeleteContactRequest = (input: DeleteContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
  };
};

const serializeAws_json1_1DescribeEngagementRequest = (
  input: DescribeEngagementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
  };
};

const serializeAws_json1_1DescribePageRequest = (input: DescribePageRequest, context: __SerdeContext): any => {
  return {
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

const serializeAws_json1_1GetContactChannelRequest = (
  input: GetContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

const serializeAws_json1_1GetContactPolicyRequest = (input: GetContactPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

const serializeAws_json1_1GetContactRequest = (input: GetContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
  };
};

const serializeAws_json1_1ListContactChannelsRequest = (
  input: ListContactChannelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListContactsRequest = (input: ListContactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasPrefix != null && { AliasPrefix: input.AliasPrefix }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ListEngagementsRequest = (input: ListEngagementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncidentId != null && { IncidentId: input.IncidentId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimeRangeValue != null && {
      TimeRangeValue: serializeAws_json1_1TimeRange(input.TimeRangeValue, context),
    }),
  };
};

const serializeAws_json1_1ListPageReceiptsRequest = (input: ListPageReceiptsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

const serializeAws_json1_1ListPagesByContactRequest = (
  input: ListPagesByContactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPagesByEngagementRequest = (
  input: ListPagesByEngagementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1Plan = (input: Plan, context: __SerdeContext): any => {
  return {
    ...(input.Stages != null && { Stages: serializeAws_json1_1StagesList(input.Stages, context) }),
  };
};

const serializeAws_json1_1PutContactPolicyRequest = (input: PutContactPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

const serializeAws_json1_1SendActivationCodeRequest = (
  input: SendActivationCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

const serializeAws_json1_1Stage = (input: Stage, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes != null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Targets != null && { Targets: serializeAws_json1_1TargetsList(input.Targets, context) }),
  };
};

const serializeAws_json1_1StagesList = (input: Stage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Stage(entry, context);
    });
};

const serializeAws_json1_1StartEngagementRequest = (input: StartEngagementRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.Content != null && { Content: input.Content }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.IncidentId != null && { IncidentId: input.IncidentId }),
    ...(input.PublicContent != null && { PublicContent: input.PublicContent }),
    ...(input.PublicSubject != null && { PublicSubject: input.PublicSubject }),
    ...(input.Sender != null && { Sender: input.Sender }),
    ...(input.Subject != null && { Subject: input.Subject }),
  };
};

const serializeAws_json1_1StopEngagementRequest = (input: StopEngagementRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagsList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.ChannelTargetInfo != null && {
      ChannelTargetInfo: serializeAws_json1_1ChannelTargetInfo(input.ChannelTargetInfo, context),
    }),
    ...(input.ContactTargetInfo != null && {
      ContactTargetInfo: serializeAws_json1_1ContactTargetInfo(input.ContactTargetInfo, context),
    }),
  };
};

const serializeAws_json1_1TargetsList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateContactChannelRequest = (
  input: UpdateContactChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.DeliveryAddress != null && {
      DeliveryAddress: serializeAws_json1_1ContactChannelAddress(input.DeliveryAddress, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateContactRequest = (input: UpdateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Plan != null && { Plan: serializeAws_json1_1Plan(input.Plan, context) }),
  };
};

const deserializeAws_json1_1AcceptPageResult = (output: any, context: __SerdeContext): AcceptPageResult => {
  return {} as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ActivateContactChannelResult = (
  output: any,
  context: __SerdeContext
): ActivateContactChannelResult => {
  return {} as any;
};

const deserializeAws_json1_1ChannelTargetInfo = (output: any, context: __SerdeContext): ChannelTargetInfo => {
  return {
    ContactChannelId: __expectString(output.ContactChannelId),
    RetryIntervalInMinutes: __expectInt32(output.RetryIntervalInMinutes),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    Alias: __expectString(output.Alias),
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ContactChannel = (output: any, context: __SerdeContext): ContactChannel => {
  return {
    ActivationStatus: __expectString(output.ActivationStatus),
    ContactArn: __expectString(output.ContactArn),
    ContactChannelArn: __expectString(output.ContactChannelArn),
    DeliveryAddress:
      output.DeliveryAddress != null
        ? deserializeAws_json1_1ContactChannelAddress(output.DeliveryAddress, context)
        : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ContactChannelAddress = (output: any, context: __SerdeContext): ContactChannelAddress => {
  return {
    SimpleAddress: __expectString(output.SimpleAddress),
  } as any;
};

const deserializeAws_json1_1ContactChannelList = (output: any, context: __SerdeContext): ContactChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContactChannel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContactsList = (output: any, context: __SerdeContext): Contact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Contact(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ContactTargetInfo = (output: any, context: __SerdeContext): ContactTargetInfo => {
  return {
    ContactId: __expectString(output.ContactId),
    IsEssential: __expectBoolean(output.IsEssential),
  } as any;
};

const deserializeAws_json1_1CreateContactChannelResult = (
  output: any,
  context: __SerdeContext
): CreateContactChannelResult => {
  return {
    ContactChannelArn: __expectString(output.ContactChannelArn),
  } as any;
};

const deserializeAws_json1_1CreateContactResult = (output: any, context: __SerdeContext): CreateContactResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
  } as any;
};

const deserializeAws_json1_1DataEncryptionException = (
  output: any,
  context: __SerdeContext
): DataEncryptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeactivateContactChannelResult = (
  output: any,
  context: __SerdeContext
): DeactivateContactChannelResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteContactChannelResult = (
  output: any,
  context: __SerdeContext
): DeleteContactChannelResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteContactResult = (output: any, context: __SerdeContext): DeleteContactResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeEngagementResult = (
  output: any,
  context: __SerdeContext
): DescribeEngagementResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
    Content: __expectString(output.Content),
    EngagementArn: __expectString(output.EngagementArn),
    IncidentId: __expectString(output.IncidentId),
    PublicContent: __expectString(output.PublicContent),
    PublicSubject: __expectString(output.PublicSubject),
    Sender: __expectString(output.Sender),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    StopTime:
      output.StopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopTime))) : undefined,
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_json1_1DescribePageResult = (output: any, context: __SerdeContext): DescribePageResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
    Content: __expectString(output.Content),
    DeliveryTime:
      output.DeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeliveryTime)))
        : undefined,
    EngagementArn: __expectString(output.EngagementArn),
    IncidentId: __expectString(output.IncidentId),
    PageArn: __expectString(output.PageArn),
    PublicContent: __expectString(output.PublicContent),
    PublicSubject: __expectString(output.PublicSubject),
    ReadTime:
      output.ReadTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadTime))) : undefined,
    Sender: __expectString(output.Sender),
    SentTime:
      output.SentTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SentTime))) : undefined,
    Subject: __expectString(output.Subject),
  } as any;
};

const deserializeAws_json1_1Engagement = (output: any, context: __SerdeContext): Engagement => {
  return {
    ContactArn: __expectString(output.ContactArn),
    EngagementArn: __expectString(output.EngagementArn),
    IncidentId: __expectString(output.IncidentId),
    Sender: __expectString(output.Sender),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    StopTime:
      output.StopTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1EngagementsList = (output: any, context: __SerdeContext): Engagement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Engagement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetContactChannelResult = (
  output: any,
  context: __SerdeContext
): GetContactChannelResult => {
  return {
    ActivationStatus: __expectString(output.ActivationStatus),
    ContactArn: __expectString(output.ContactArn),
    ContactChannelArn: __expectString(output.ContactChannelArn),
    DeliveryAddress:
      output.DeliveryAddress != null
        ? deserializeAws_json1_1ContactChannelAddress(output.DeliveryAddress, context)
        : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GetContactPolicyResult = (output: any, context: __SerdeContext): GetContactPolicyResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1GetContactResult = (output: any, context: __SerdeContext): GetContactResult => {
  return {
    Alias: __expectString(output.Alias),
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    Plan: output.Plan != null ? deserializeAws_json1_1Plan(output.Plan, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1ListContactChannelsResult = (
  output: any,
  context: __SerdeContext
): ListContactChannelsResult => {
  return {
    ContactChannels:
      output.ContactChannels != null
        ? deserializeAws_json1_1ContactChannelList(output.ContactChannels, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListContactsResult = (output: any, context: __SerdeContext): ListContactsResult => {
  return {
    Contacts: output.Contacts != null ? deserializeAws_json1_1ContactsList(output.Contacts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEngagementsResult = (output: any, context: __SerdeContext): ListEngagementsResult => {
  return {
    Engagements:
      output.Engagements != null ? deserializeAws_json1_1EngagementsList(output.Engagements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPageReceiptsResult = (output: any, context: __SerdeContext): ListPageReceiptsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Receipts: output.Receipts != null ? deserializeAws_json1_1ReceiptsList(output.Receipts, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListPagesByContactResult = (
  output: any,
  context: __SerdeContext
): ListPagesByContactResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pages: output.Pages != null ? deserializeAws_json1_1PagesList(output.Pages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListPagesByEngagementResult = (
  output: any,
  context: __SerdeContext
): ListPagesByEngagementResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pages: output.Pages != null ? deserializeAws_json1_1PagesList(output.Pages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResult = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResult => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagsList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Page = (output: any, context: __SerdeContext): Page => {
  return {
    ContactArn: __expectString(output.ContactArn),
    DeliveryTime:
      output.DeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeliveryTime)))
        : undefined,
    EngagementArn: __expectString(output.EngagementArn),
    IncidentId: __expectString(output.IncidentId),
    PageArn: __expectString(output.PageArn),
    ReadTime:
      output.ReadTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReadTime))) : undefined,
    Sender: __expectString(output.Sender),
    SentTime:
      output.SentTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SentTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1PagesList = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Page(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Plan = (output: any, context: __SerdeContext): Plan => {
  return {
    Stages: output.Stages != null ? deserializeAws_json1_1StagesList(output.Stages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutContactPolicyResult = (output: any, context: __SerdeContext): PutContactPolicyResult => {
  return {} as any;
};

const deserializeAws_json1_1Receipt = (output: any, context: __SerdeContext): Receipt => {
  return {
    ContactChannelArn: __expectString(output.ContactChannelArn),
    ReceiptInfo: __expectString(output.ReceiptInfo),
    ReceiptTime:
      output.ReceiptTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReceiptTime)))
        : undefined,
    ReceiptType: __expectString(output.ReceiptType),
  } as any;
};

const deserializeAws_json1_1ReceiptsList = (output: any, context: __SerdeContext): Receipt[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Receipt(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1SendActivationCodeResult = (
  output: any,
  context: __SerdeContext
): SendActivationCodeResult => {
  return {} as any;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

const deserializeAws_json1_1Stage = (output: any, context: __SerdeContext): Stage => {
  return {
    DurationInMinutes: __expectInt32(output.DurationInMinutes),
    Targets: output.Targets != null ? deserializeAws_json1_1TargetsList(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StagesList = (output: any, context: __SerdeContext): Stage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Stage(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartEngagementResult = (output: any, context: __SerdeContext): StartEngagementResult => {
  return {
    EngagementArn: __expectString(output.EngagementArn),
  } as any;
};

const deserializeAws_json1_1StopEngagementResult = (output: any, context: __SerdeContext): StopEngagementResult => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1TagsList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    ChannelTargetInfo:
      output.ChannelTargetInfo != null
        ? deserializeAws_json1_1ChannelTargetInfo(output.ChannelTargetInfo, context)
        : undefined,
    ContactTargetInfo:
      output.ContactTargetInfo != null
        ? deserializeAws_json1_1ContactTargetInfo(output.ContactTargetInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetsList = (output: any, context: __SerdeContext): Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Target(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

const deserializeAws_json1_1UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateContactChannelResult = (
  output: any,
  context: __SerdeContext
): UpdateContactChannelResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateContactResult = (output: any, context: __SerdeContext): UpdateContactResult => {
  return {} as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Fields:
      output.Fields != null ? deserializeAws_json1_1ValidationExceptionFieldList(output.Fields, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationExceptionField(entry, context);
    });
  return retVal;
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
