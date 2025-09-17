// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AddPermissionCommandInput, AddPermissionCommandOutput } from "../commands/AddPermissionCommand";
import {
  CheckIfPhoneNumberIsOptedOutCommandInput,
  CheckIfPhoneNumberIsOptedOutCommandOutput,
} from "../commands/CheckIfPhoneNumberIsOptedOutCommand";
import {
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
} from "../commands/ConfirmSubscriptionCommand";
import {
  CreatePlatformApplicationCommandInput,
  CreatePlatformApplicationCommandOutput,
} from "../commands/CreatePlatformApplicationCommand";
import {
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
} from "../commands/CreatePlatformEndpointCommand";
import {
  CreateSMSSandboxPhoneNumberCommandInput,
  CreateSMSSandboxPhoneNumberCommandOutput,
} from "../commands/CreateSMSSandboxPhoneNumberCommand";
import { CreateTopicCommandInput, CreateTopicCommandOutput } from "../commands/CreateTopicCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeletePlatformApplicationCommandInput,
  DeletePlatformApplicationCommandOutput,
} from "../commands/DeletePlatformApplicationCommand";
import {
  DeleteSMSSandboxPhoneNumberCommandInput,
  DeleteSMSSandboxPhoneNumberCommandOutput,
} from "../commands/DeleteSMSSandboxPhoneNumberCommand";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "../commands/DeleteTopicCommand";
import {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "../commands/GetDataProtectionPolicyCommand";
import {
  GetEndpointAttributesCommandInput,
  GetEndpointAttributesCommandOutput,
} from "../commands/GetEndpointAttributesCommand";
import {
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
} from "../commands/GetPlatformApplicationAttributesCommand";
import { GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput } from "../commands/GetSMSAttributesCommand";
import {
  GetSMSSandboxAccountStatusCommandInput,
  GetSMSSandboxAccountStatusCommandOutput,
} from "../commands/GetSMSSandboxAccountStatusCommand";
import {
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
} from "../commands/GetSubscriptionAttributesCommand";
import { GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput } from "../commands/GetTopicAttributesCommand";
import {
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "../commands/ListEndpointsByPlatformApplicationCommand";
import {
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
} from "../commands/ListOriginationNumbersCommand";
import {
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
} from "../commands/ListPhoneNumbersOptedOutCommand";
import {
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
} from "../commands/ListPlatformApplicationsCommand";
import {
  ListSMSSandboxPhoneNumbersCommandInput,
  ListSMSSandboxPhoneNumbersCommandOutput,
} from "../commands/ListSMSSandboxPhoneNumbersCommand";
import {
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "../commands/ListSubscriptionsByTopicCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "../commands/ListSubscriptionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput } from "../commands/OptInPhoneNumberCommand";
import { PublishBatchCommandInput, PublishBatchCommandOutput } from "../commands/PublishBatchCommand";
import { PublishCommandInput, PublishCommandOutput } from "../commands/PublishCommand";
import {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "../commands/PutDataProtectionPolicyCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import {
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
} from "../commands/SetEndpointAttributesCommand";
import {
  SetPlatformApplicationAttributesCommandInput,
  SetPlatformApplicationAttributesCommandOutput,
} from "../commands/SetPlatformApplicationAttributesCommand";
import { SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput } from "../commands/SetSMSAttributesCommand";
import {
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
} from "../commands/SetSubscriptionAttributesCommand";
import { SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput } from "../commands/SetTopicAttributesCommand";
import { SubscribeCommandInput, SubscribeCommandOutput } from "../commands/SubscribeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "../commands/UnsubscribeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  VerifySMSSandboxPhoneNumberCommandInput,
  VerifySMSSandboxPhoneNumberCommandOutput,
} from "../commands/VerifySMSSandboxPhoneNumberCommand";
import {
  AddPermissionInput,
  AuthorizationErrorException,
  BatchEntryIdsNotDistinctException,
  BatchRequestTooLongException,
  BatchResultErrorEntry,
  CheckIfPhoneNumberIsOptedOutInput,
  CheckIfPhoneNumberIsOptedOutResponse,
  ConcurrentAccessException,
  ConfirmSubscriptionInput,
  ConfirmSubscriptionResponse,
  CreateEndpointResponse,
  CreatePlatformApplicationInput,
  CreatePlatformApplicationResponse,
  CreatePlatformEndpointInput,
  CreateSMSSandboxPhoneNumberInput,
  CreateSMSSandboxPhoneNumberResult,
  CreateTopicInput,
  CreateTopicResponse,
  DeleteEndpointInput,
  DeletePlatformApplicationInput,
  DeleteSMSSandboxPhoneNumberInput,
  DeleteSMSSandboxPhoneNumberResult,
  DeleteTopicInput,
  EmptyBatchRequestException,
  Endpoint,
  EndpointDisabledException,
  FilterPolicyLimitExceededException,
  GetDataProtectionPolicyInput,
  GetDataProtectionPolicyResponse,
  GetEndpointAttributesInput,
  GetEndpointAttributesResponse,
  GetPlatformApplicationAttributesInput,
  GetPlatformApplicationAttributesResponse,
  GetSMSAttributesInput,
  GetSMSAttributesResponse,
  GetSMSSandboxAccountStatusInput,
  GetSMSSandboxAccountStatusResult,
  GetSubscriptionAttributesInput,
  GetSubscriptionAttributesResponse,
  GetTopicAttributesInput,
  GetTopicAttributesResponse,
  InternalErrorException,
  InvalidBatchEntryIdException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidSecurityException,
  InvalidStateException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  KMSOptInRequired,
  KMSThrottlingException,
  ListEndpointsByPlatformApplicationInput,
  ListEndpointsByPlatformApplicationResponse,
  ListOriginationNumbersRequest,
  ListOriginationNumbersResult,
  ListPhoneNumbersOptedOutInput,
  ListPhoneNumbersOptedOutResponse,
  ListPlatformApplicationsInput,
  ListPlatformApplicationsResponse,
  ListSMSSandboxPhoneNumbersInput,
  ListSMSSandboxPhoneNumbersResult,
  ListSubscriptionsByTopicInput,
  ListSubscriptionsByTopicResponse,
  ListSubscriptionsInput,
  ListSubscriptionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTopicsInput,
  ListTopicsResponse,
  MessageAttributeValue,
  NotFoundException,
  NumberCapability,
  OptedOutException,
  OptInPhoneNumberInput,
  OptInPhoneNumberResponse,
  PhoneNumberInformation,
  PlatformApplication,
  PlatformApplicationDisabledException,
  PublishBatchInput,
  PublishBatchRequestEntry,
  PublishBatchResponse,
  PublishBatchResultEntry,
  PublishInput,
  PublishResponse,
  PutDataProtectionPolicyInput,
  RemovePermissionInput,
  ReplayLimitExceededException,
  ResourceNotFoundException,
  SetEndpointAttributesInput,
  SetPlatformApplicationAttributesInput,
  SetSMSAttributesInput,
  SetSMSAttributesResponse,
  SetSubscriptionAttributesInput,
  SetTopicAttributesInput,
  SMSSandboxPhoneNumber,
  StaleTagException,
  SubscribeInput,
  SubscribeResponse,
  Subscription,
  SubscriptionLimitExceededException,
  Tag,
  TagLimitExceededException,
  TagPolicyException,
  TagResourceRequest,
  TagResourceResponse,
  ThrottledException,
  TooManyEntriesInBatchRequestException,
  Topic,
  TopicLimitExceededException,
  UnsubscribeInput,
  UntagResourceRequest,
  UntagResourceResponse,
  UserErrorException,
  ValidationException,
  VerificationException,
  VerifySMSSandboxPhoneNumberInput,
  VerifySMSSandboxPhoneNumberResult,
} from "../models/models_0";
import { SNSServiceException as __BaseException } from "../models/SNSServiceException";

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
    ...se_AddPermissionInput(input, context),
    [_A]: _AP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand
 */
export const se_CheckIfPhoneNumberIsOptedOutCommand = async (
  input: CheckIfPhoneNumberIsOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CheckIfPhoneNumberIsOptedOutInput(input, context),
    [_A]: _CIPNIOO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryConfirmSubscriptionCommand
 */
export const se_ConfirmSubscriptionCommand = async (
  input: ConfirmSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ConfirmSubscriptionInput(input, context),
    [_A]: _CS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreatePlatformApplicationCommand
 */
export const se_CreatePlatformApplicationCommand = async (
  input: CreatePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreatePlatformApplicationInput(input, context),
    [_A]: _CPA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreatePlatformEndpointCommand
 */
export const se_CreatePlatformEndpointCommand = async (
  input: CreatePlatformEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreatePlatformEndpointInput(input, context),
    [_A]: _CPE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateSMSSandboxPhoneNumberCommand
 */
export const se_CreateSMSSandboxPhoneNumberCommand = async (
  input: CreateSMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateSMSSandboxPhoneNumberInput(input, context),
    [_A]: _CSMSSPN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateTopicCommand
 */
export const se_CreateTopicCommand = async (
  input: CreateTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateTopicInput(input, context),
    [_A]: _CT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteEndpointInput(input, context),
    [_A]: _DE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePlatformApplicationCommand
 */
export const se_DeletePlatformApplicationCommand = async (
  input: DeletePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeletePlatformApplicationInput(input, context),
    [_A]: _DPA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSMSSandboxPhoneNumberCommand
 */
export const se_DeleteSMSSandboxPhoneNumberCommand = async (
  input: DeleteSMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSMSSandboxPhoneNumberInput(input, context),
    [_A]: _DSMSSPN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteTopicCommand
 */
export const se_DeleteTopicCommand = async (
  input: DeleteTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteTopicInput(input, context),
    [_A]: _DT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetDataProtectionPolicyCommand
 */
export const se_GetDataProtectionPolicyCommand = async (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetDataProtectionPolicyInput(input, context),
    [_A]: _GDPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetEndpointAttributesCommand
 */
export const se_GetEndpointAttributesCommand = async (
  input: GetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetEndpointAttributesInput(input, context),
    [_A]: _GEA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetPlatformApplicationAttributesCommand
 */
export const se_GetPlatformApplicationAttributesCommand = async (
  input: GetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetPlatformApplicationAttributesInput(input, context),
    [_A]: _GPAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSMSAttributesCommand
 */
export const se_GetSMSAttributesCommand = async (
  input: GetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSMSAttributesInput(input, context),
    [_A]: _GSMSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSMSSandboxAccountStatusCommand
 */
export const se_GetSMSSandboxAccountStatusCommand = async (
  input: GetSMSSandboxAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSMSSandboxAccountStatusInput(input, context),
    [_A]: _GSMSSAS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSubscriptionAttributesCommand
 */
export const se_GetSubscriptionAttributesCommand = async (
  input: GetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSubscriptionAttributesInput(input, context),
    [_A]: _GSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetTopicAttributesCommand
 */
export const se_GetTopicAttributesCommand = async (
  input: GetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetTopicAttributesInput(input, context),
    [_A]: _GTA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListEndpointsByPlatformApplicationCommand
 */
export const se_ListEndpointsByPlatformApplicationCommand = async (
  input: ListEndpointsByPlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListEndpointsByPlatformApplicationInput(input, context),
    [_A]: _LEBPA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListOriginationNumbersCommand
 */
export const se_ListOriginationNumbersCommand = async (
  input: ListOriginationNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListOriginationNumbersRequest(input, context),
    [_A]: _LON,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPhoneNumbersOptedOutCommand
 */
export const se_ListPhoneNumbersOptedOutCommand = async (
  input: ListPhoneNumbersOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPhoneNumbersOptedOutInput(input, context),
    [_A]: _LPNOO,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPlatformApplicationsCommand
 */
export const se_ListPlatformApplicationsCommand = async (
  input: ListPlatformApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPlatformApplicationsInput(input, context),
    [_A]: _LPA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSMSSandboxPhoneNumbersCommand
 */
export const se_ListSMSSandboxPhoneNumbersCommand = async (
  input: ListSMSSandboxPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSMSSandboxPhoneNumbersInput(input, context),
    [_A]: _LSMSSPN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSubscriptionsCommand
 */
export const se_ListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSubscriptionsInput(input, context),
    [_A]: _LS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSubscriptionsByTopicCommand
 */
export const se_ListSubscriptionsByTopicCommand = async (
  input: ListSubscriptionsByTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSubscriptionsByTopicInput(input, context),
    [_A]: _LSBT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTagsForResourceRequest(input, context),
    [_A]: _LTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTopicsCommand
 */
export const se_ListTopicsCommand = async (
  input: ListTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTopicsInput(input, context),
    [_A]: _LT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryOptInPhoneNumberCommand
 */
export const se_OptInPhoneNumberCommand = async (
  input: OptInPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_OptInPhoneNumberInput(input, context),
    [_A]: _OIPN,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPublishCommand
 */
export const se_PublishCommand = async (
  input: PublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PublishInput(input, context),
    [_A]: _P,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPublishBatchCommand
 */
export const se_PublishBatchCommand = async (
  input: PublishBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PublishBatchInput(input, context),
    [_A]: _PB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutDataProtectionPolicyCommand
 */
export const se_PutDataProtectionPolicyCommand = async (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutDataProtectionPolicyInput(input, context),
    [_A]: _PDPP,
    [_V]: _,
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
    ...se_RemovePermissionInput(input, context),
    [_A]: _RP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetEndpointAttributesCommand
 */
export const se_SetEndpointAttributesCommand = async (
  input: SetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetEndpointAttributesInput(input, context),
    [_A]: _SEA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetPlatformApplicationAttributesCommand
 */
export const se_SetPlatformApplicationAttributesCommand = async (
  input: SetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetPlatformApplicationAttributesInput(input, context),
    [_A]: _SPAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSMSAttributesCommand
 */
export const se_SetSMSAttributesCommand = async (
  input: SetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSMSAttributesInput(input, context),
    [_A]: _SSMSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSubscriptionAttributesCommand
 */
export const se_SetSubscriptionAttributesCommand = async (
  input: SetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSubscriptionAttributesInput(input, context),
    [_A]: _SSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetTopicAttributesCommand
 */
export const se_SetTopicAttributesCommand = async (
  input: SetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetTopicAttributesInput(input, context),
    [_A]: _STA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySubscribeCommand
 */
export const se_SubscribeCommand = async (
  input: SubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SubscribeInput(input, context),
    [_A]: _S,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagResourceRequest(input, context),
    [_A]: _TR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUnsubscribeCommand
 */
export const se_UnsubscribeCommand = async (
  input: UnsubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UnsubscribeInput(input, context),
    [_A]: _U,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagResourceRequest(input, context),
    [_A]: _UR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryVerifySMSSandboxPhoneNumberCommand
 */
export const se_VerifySMSSandboxPhoneNumberCommand = async (
  input: VerifySMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_VerifySMSSandboxPhoneNumberInput(input, context),
    [_A]: _VSMSSPN,
    [_V]: _,
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
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand
 */
export const de_CheckIfPhoneNumberIsOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckIfPhoneNumberIsOptedOutResponse(data.CheckIfPhoneNumberIsOptedOutResult, context);
  const response: CheckIfPhoneNumberIsOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryConfirmSubscriptionCommand
 */
export const de_ConfirmSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmSubscriptionResponse(data.ConfirmSubscriptionResult, context);
  const response: ConfirmSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreatePlatformApplicationCommand
 */
export const de_CreatePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePlatformApplicationResponse(data.CreatePlatformApplicationResult, context);
  const response: CreatePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreatePlatformEndpointCommand
 */
export const de_CreatePlatformEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointResponse(data.CreatePlatformEndpointResult, context);
  const response: CreatePlatformEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSMSSandboxPhoneNumberCommand
 */
export const de_CreateSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSMSSandboxPhoneNumberResult(data.CreateSMSSandboxPhoneNumberResult, context);
  const response: CreateSMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateTopicCommand
 */
export const de_CreateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTopicResponse(data.CreateTopicResult, context);
  const response: CreateTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePlatformApplicationCommand
 */
export const de_DeletePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand
 */
export const de_DeleteSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSMSSandboxPhoneNumberResult(data.DeleteSMSSandboxPhoneNumberResult, context);
  const response: DeleteSMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTopicCommand
 */
export const de_DeleteTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryGetDataProtectionPolicyCommand
 */
export const de_GetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataProtectionPolicyResponse(data.GetDataProtectionPolicyResult, context);
  const response: GetDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetEndpointAttributesCommand
 */
export const de_GetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEndpointAttributesResponse(data.GetEndpointAttributesResult, context);
  const response: GetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetPlatformApplicationAttributesCommand
 */
export const de_GetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPlatformApplicationAttributesResponse(data.GetPlatformApplicationAttributesResult, context);
  const response: GetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSMSAttributesCommand
 */
export const de_GetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSMSAttributesResponse(data.GetSMSAttributesResult, context);
  const response: GetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSMSSandboxAccountStatusCommand
 */
export const de_GetSMSSandboxAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSMSSandboxAccountStatusResult(data.GetSMSSandboxAccountStatusResult, context);
  const response: GetSMSSandboxAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSubscriptionAttributesCommand
 */
export const de_GetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSubscriptionAttributesResponse(data.GetSubscriptionAttributesResult, context);
  const response: GetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetTopicAttributesCommand
 */
export const de_GetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTopicAttributesResponse(data.GetTopicAttributesResult, context);
  const response: GetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListEndpointsByPlatformApplicationCommand
 */
export const de_ListEndpointsByPlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsByPlatformApplicationResponse(data.ListEndpointsByPlatformApplicationResult, context);
  const response: ListEndpointsByPlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListOriginationNumbersCommand
 */
export const de_ListOriginationNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginationNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOriginationNumbersResult(data.ListOriginationNumbersResult, context);
  const response: ListOriginationNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPhoneNumbersOptedOutCommand
 */
export const de_ListPhoneNumbersOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPhoneNumbersOptedOutResponse(data.ListPhoneNumbersOptedOutResult, context);
  const response: ListPhoneNumbersOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPlatformApplicationsCommand
 */
export const de_ListPlatformApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPlatformApplicationsResponse(data.ListPlatformApplicationsResult, context);
  const response: ListPlatformApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSMSSandboxPhoneNumbersCommand
 */
export const de_ListSMSSandboxPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSMSSandboxPhoneNumbersResult(data.ListSMSSandboxPhoneNumbersResult, context);
  const response: ListSMSSandboxPhoneNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSubscriptionsCommand
 */
export const de_ListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSubscriptionsResponse(data.ListSubscriptionsResult, context);
  const response: ListSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSubscriptionsByTopicCommand
 */
export const de_ListSubscriptionsByTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSubscriptionsByTopicResponse(data.ListSubscriptionsByTopicResult, context);
  const response: ListSubscriptionsByTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTopicsCommand
 */
export const de_ListTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTopicsResponse(data.ListTopicsResult, context);
  const response: ListTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryOptInPhoneNumberCommand
 */
export const de_OptInPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_OptInPhoneNumberResponse(data.OptInPhoneNumberResult, context);
  const response: OptInPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPublishCommand
 */
export const de_PublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PublishResponse(data.PublishResult, context);
  const response: PublishCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPublishBatchCommand
 */
export const de_PublishBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PublishBatchResponse(data.PublishBatchResult, context);
  const response: PublishBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutDataProtectionPolicyCommand
 */
export const de_PutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetEndpointAttributesCommand
 */
export const de_SetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetPlatformApplicationAttributesCommand
 */
export const de_SetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetSMSAttributesCommand
 */
export const de_SetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetSMSAttributesResponse(data.SetSMSAttributesResult, context);
  const response: SetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetSubscriptionAttributesCommand
 */
export const de_SetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetTopicAttributesCommand
 */
export const de_SetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySubscribeCommand
 */
export const de_SubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SubscribeResponse(data.SubscribeResult, context);
  const response: SubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data.TagResourceResult, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUnsubscribeCommand
 */
export const de_UnsubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data.UntagResourceResult, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryVerifySMSSandboxPhoneNumberCommand
 */
export const de_VerifySMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifySMSSandboxPhoneNumberResult(data.VerifySMSSandboxPhoneNumberResult, context);
  const response: VerifySMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
    case "ReplayLimitExceeded":
    case "com.amazonaws.sns#ReplayLimitExceededException":
      throw await de_ReplayLimitExceededExceptionRes(parsedOutput, context);
    case "SubscriptionLimitExceeded":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      throw await de_SubscriptionLimitExceededExceptionRes(parsedOutput, context);
    case "OptedOut":
    case "com.amazonaws.sns#OptedOutException":
      throw await de_OptedOutExceptionRes(parsedOutput, context);
    case "UserError":
    case "com.amazonaws.sns#UserErrorException":
      throw await de_UserErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await de_StaleTagExceptionRes(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TopicLimitExceeded":
    case "com.amazonaws.sns#TopicLimitExceededException":
      throw await de_TopicLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "InvalidState":
    case "com.amazonaws.sns#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "EndpointDisabled":
    case "com.amazonaws.sns#EndpointDisabledException":
      throw await de_EndpointDisabledExceptionRes(parsedOutput, context);
    case "KMSAccessDenied":
    case "com.amazonaws.sns#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabled":
    case "com.amazonaws.sns#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidState":
    case "com.amazonaws.sns#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFound":
    case "com.amazonaws.sns#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.sns#KMSOptInRequired":
      throw await de_KMSOptInRequiredRes(parsedOutput, context);
    case "KMSThrottling":
    case "com.amazonaws.sns#KMSThrottlingException":
      throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
    case "ParameterValueInvalid":
    case "com.amazonaws.sns#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PlatformApplicationDisabled":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      throw await de_PlatformApplicationDisabledExceptionRes(parsedOutput, context);
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sns#BatchEntryIdsNotDistinctException":
      throw await de_BatchEntryIdsNotDistinctExceptionRes(parsedOutput, context);
    case "BatchRequestTooLong":
    case "com.amazonaws.sns#BatchRequestTooLongException":
      throw await de_BatchRequestTooLongExceptionRes(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sns#EmptyBatchRequestException":
      throw await de_EmptyBatchRequestExceptionRes(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sns#InvalidBatchEntryIdException":
      throw await de_InvalidBatchEntryIdExceptionRes(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sns#TooManyEntriesInBatchRequestException":
      throw await de_TooManyEntriesInBatchRequestExceptionRes(parsedOutput, context);
    case "VerificationException":
    case "com.amazonaws.sns#VerificationException":
      throw await de_VerificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_queryAuthorizationErrorExceptionRes
 */
const de_AuthorizationErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthorizationErrorException(body.Error, context);
  const exception = new AuthorizationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBatchEntryIdsNotDistinctExceptionRes
 */
const de_BatchEntryIdsNotDistinctExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinctException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchEntryIdsNotDistinctException(body.Error, context);
  const exception = new BatchEntryIdsNotDistinctException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryBatchRequestTooLongExceptionRes
 */
const de_BatchRequestTooLongExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchRequestTooLongException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchRequestTooLongException(body.Error, context);
  const exception = new BatchRequestTooLongException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConcurrentAccessExceptionRes
 */
const de_ConcurrentAccessExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentAccessException(body.Error, context);
  const exception = new ConcurrentAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEmptyBatchRequestExceptionRes
 */
const de_EmptyBatchRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyBatchRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EmptyBatchRequestException(body.Error, context);
  const exception = new EmptyBatchRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEndpointDisabledExceptionRes
 */
const de_EndpointDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EndpointDisabledException(body.Error, context);
  const exception = new EndpointDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryFilterPolicyLimitExceededExceptionRes
 */
const de_FilterPolicyLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterPolicyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FilterPolicyLimitExceededException(body.Error, context);
  const exception = new FilterPolicyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalErrorException(body.Error, context);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidBatchEntryIdExceptionRes
 */
const de_InvalidBatchEntryIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBatchEntryIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidBatchEntryIdException(body.Error, context);
  const exception = new InvalidBatchEntryIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body.Error, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body.Error, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidSecurityExceptionRes
 */
const de_InvalidSecurityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSecurityException(body.Error, context);
  const exception = new InvalidSecurityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStateException(body.Error, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSAccessDeniedExceptionRes
 */
const de_KMSAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSAccessDeniedException(body.Error, context);
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSDisabledExceptionRes
 */
const de_KMSDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSDisabledException(body.Error, context);
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSInvalidStateExceptionRes
 */
const de_KMSInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSInvalidStateException(body.Error, context);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSNotFoundExceptionRes
 */
const de_KMSNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSNotFoundException(body.Error, context);
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSOptInRequiredRes
 */
const de_KMSOptInRequiredRes = async (parsedOutput: any, context: __SerdeContext): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSOptInRequired(body.Error, context);
  const exception = new KMSOptInRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKMSThrottlingExceptionRes
 */
const de_KMSThrottlingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSThrottlingException(body.Error, context);
  const exception = new KMSThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body.Error, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOptedOutExceptionRes
 */
const de_OptedOutExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<OptedOutException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OptedOutException(body.Error, context);
  const exception = new OptedOutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPlatformApplicationDisabledExceptionRes
 */
const de_PlatformApplicationDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformApplicationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PlatformApplicationDisabledException(body.Error, context);
  const exception = new PlatformApplicationDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReplayLimitExceededExceptionRes
 */
const de_ReplayLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplayLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplayLimitExceededException(body.Error, context);
  const exception = new ReplayLimitExceededException({
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
 * deserializeAws_queryStaleTagExceptionRes
 */
const de_StaleTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<StaleTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_StaleTagException(body.Error, context);
  const exception = new StaleTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_querySubscriptionLimitExceededExceptionRes
 */
const de_SubscriptionLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SubscriptionLimitExceededException(body.Error, context);
  const exception = new SubscriptionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTagLimitExceededExceptionRes
 */
const de_TagLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagLimitExceededException(body.Error, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTagPolicyExceptionRes
 */
const de_TagPolicyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagPolicyException(body.Error, context);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottledException(body.Error, context);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTooManyEntriesInBatchRequestExceptionRes
 */
const de_TooManyEntriesInBatchRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyEntriesInBatchRequestException(body.Error, context);
  const exception = new TooManyEntriesInBatchRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryTopicLimitExceededExceptionRes
 */
const de_TopicLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TopicLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TopicLimitExceededException(body.Error, context);
  const exception = new TopicLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUserErrorExceptionRes
 */
const de_UserErrorExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<UserErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserErrorException(body.Error, context);
  const exception = new UserErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body.Error, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryVerificationExceptionRes
 */
const de_VerificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VerificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_VerificationException(body.Error, context);
  const exception = new VerificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryActionsList
 */
const se_ActionsList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryAddPermissionInput
 */
const se_AddPermissionInput = (input: AddPermissionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  if (input[_AWSAI] != null) {
    const memberEntries = se_DelegatesList(input[_AWSAI], context);
    if (input[_AWSAI]?.length === 0) {
      entries.AWSAccountId = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AN] != null) {
    const memberEntries = se_ActionsList(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.ActionName = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionName.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCheckIfPhoneNumberIsOptedOutInput
 */
const se_CheckIfPhoneNumberIsOptedOutInput = (
  input: CheckIfPhoneNumberIsOptedOutInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_pN] != null) {
    entries[_pN] = input[_pN];
  }
  return entries;
};

/**
 * serializeAws_queryConfirmSubscriptionInput
 */
const se_ConfirmSubscriptionInput = (input: ConfirmSubscriptionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_AOU] != null) {
    entries[_AOU] = input[_AOU];
  }
  return entries;
};

/**
 * serializeAws_queryCreatePlatformApplicationInput
 */
const se_CreatePlatformApplicationInput = (input: CreatePlatformApplicationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Pl] != null) {
    entries[_Pl] = input[_Pl];
  }
  if (input[_At] != null) {
    const memberEntries = se_MapStringToString(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreatePlatformEndpointInput
 */
const se_CreatePlatformEndpointInput = (input: CreatePlatformEndpointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PAA] != null) {
    entries[_PAA] = input[_PAA];
  }
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  if (input[_CUD] != null) {
    entries[_CUD] = input[_CUD];
  }
  if (input[_At] != null) {
    const memberEntries = se_MapStringToString(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateSMSSandboxPhoneNumberInput
 */
const se_CreateSMSSandboxPhoneNumberInput = (input: CreateSMSSandboxPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_LC] != null) {
    entries[_LC] = input[_LC];
  }
  return entries;
};

/**
 * serializeAws_queryCreateTopicInput
 */
const se_CreateTopicInput = (input: CreateTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_At] != null) {
    const memberEntries = se_TopicAttributesMap(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_DPP] != null) {
    entries[_DPP] = input[_DPP];
  }
  return entries;
};

/**
 * serializeAws_queryDelegatesList
 */
const se_DelegatesList = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryDeleteEndpointInput
 */
const se_DeleteEndpointInput = (input: DeleteEndpointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
};

/**
 * serializeAws_queryDeletePlatformApplicationInput
 */
const se_DeletePlatformApplicationInput = (input: DeletePlatformApplicationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PAA] != null) {
    entries[_PAA] = input[_PAA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSMSSandboxPhoneNumberInput
 */
const se_DeleteSMSSandboxPhoneNumberInput = (input: DeleteSMSSandboxPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTopicInput
 */
const se_DeleteTopicInput = (input: DeleteTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  return entries;
};

/**
 * serializeAws_queryGetDataProtectionPolicyInput
 */
const se_GetDataProtectionPolicyInput = (input: GetDataProtectionPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  return entries;
};

/**
 * serializeAws_queryGetEndpointAttributesInput
 */
const se_GetEndpointAttributesInput = (input: GetEndpointAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  return entries;
};

/**
 * serializeAws_queryGetPlatformApplicationAttributesInput
 */
const se_GetPlatformApplicationAttributesInput = (
  input: GetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_PAA] != null) {
    entries[_PAA] = input[_PAA];
  }
  return entries;
};

/**
 * serializeAws_queryGetSMSAttributesInput
 */
const se_GetSMSAttributesInput = (input: GetSMSAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_a] != null) {
    const memberEntries = se_ListString(input[_a], context);
    if (input[_a]?.length === 0) {
      entries.attributes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetSMSSandboxAccountStatusInput
 */
const se_GetSMSSandboxAccountStatusInput = (input: GetSMSSandboxAccountStatusInput, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryGetSubscriptionAttributesInput
 */
const se_GetSubscriptionAttributesInput = (input: GetSubscriptionAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  return entries;
};

/**
 * serializeAws_queryGetTopicAttributesInput
 */
const se_GetTopicAttributesInput = (input: GetTopicAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  return entries;
};

/**
 * serializeAws_queryListEndpointsByPlatformApplicationInput
 */
const se_ListEndpointsByPlatformApplicationInput = (
  input: ListEndpointsByPlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_PAA] != null) {
    entries[_PAA] = input[_PAA];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListOriginationNumbersRequest
 */
const se_ListOriginationNumbersRequest = (input: ListOriginationNumbersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryListPhoneNumbersOptedOutInput
 */
const se_ListPhoneNumbersOptedOutInput = (input: ListPhoneNumbersOptedOutInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_nT] != null) {
    entries[_nT] = input[_nT];
  }
  return entries;
};

/**
 * serializeAws_queryListPlatformApplicationsInput
 */
const se_ListPlatformApplicationsInput = (input: ListPlatformApplicationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListSMSSandboxPhoneNumbersInput
 */
const se_ListSMSSandboxPhoneNumbersInput = (input: ListSMSSandboxPhoneNumbersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
};

/**
 * serializeAws_queryListString
 */
const se_ListString = (input: string[], context: __SerdeContext): any => {
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
 * serializeAws_queryListSubscriptionsByTopicInput
 */
const se_ListSubscriptionsByTopicInput = (input: ListSubscriptionsByTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListSubscriptionsInput
 */
const se_ListSubscriptionsInput = (input: ListSubscriptionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  return entries;
};

/**
 * serializeAws_queryListTopicsInput
 */
const se_ListTopicsInput = (input: ListTopicsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryMapStringToString
 */
const se_MapStringToString = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryMessageAttributeMap
 */
const se_MessageAttributeMap = (input: Record<string, MessageAttributeValue>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.Name`] = key;
      const memberEntries = se_MessageAttributeValue(input[key as keyof typeof input]!, context);
      Object.entries(memberEntries).forEach(([key, value]) => {
        entries[`entry.${counter}.Value.${key}`] = value;
      });
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryMessageAttributeValue
 */
const se_MessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DTa] != null) {
    entries[_DTa] = input[_DTa];
  }
  if (input[_SV] != null) {
    entries[_SV] = input[_SV];
  }
  if (input[_BV] != null) {
    entries[_BV] = context.base64Encoder(input[_BV]);
  }
  return entries;
};

/**
 * serializeAws_queryOptInPhoneNumberInput
 */
const se_OptInPhoneNumberInput = (input: OptInPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_pN] != null) {
    entries[_pN] = input[_pN];
  }
  return entries;
};

/**
 * serializeAws_queryPublishBatchInput
 */
const se_PublishBatchInput = (input: PublishBatchInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_PBRE] != null) {
    const memberEntries = se_PublishBatchRequestEntryList(input[_PBRE], context);
    if (input[_PBRE]?.length === 0) {
      entries.PublishBatchRequestEntries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PublishBatchRequestEntries.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPublishBatchRequestEntry
 */
const se_PublishBatchRequestEntry = (input: PublishBatchRequestEntry, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Su] != null) {
    entries[_Su] = input[_Su];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MA] != null) {
    const memberEntries = se_MessageAttributeMap(input[_MA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MDI] != null) {
    entries[_MDI] = input[_MDI];
  }
  if (input[_MGI] != null) {
    entries[_MGI] = input[_MGI];
  }
  return entries;
};

/**
 * serializeAws_queryPublishBatchRequestEntryList
 */
const se_PublishBatchRequestEntryList = (input: PublishBatchRequestEntry[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_PublishBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryPublishInput
 */
const se_PublishInput = (input: PublishInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_TAa] != null) {
    entries[_TAa] = input[_TAa];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Su] != null) {
    entries[_Su] = input[_Su];
  }
  if (input[_MS] != null) {
    entries[_MS] = input[_MS];
  }
  if (input[_MA] != null) {
    const memberEntries = se_MessageAttributeMap(input[_MA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MDI] != null) {
    entries[_MDI] = input[_MDI];
  }
  if (input[_MGI] != null) {
    entries[_MGI] = input[_MGI];
  }
  return entries;
};

/**
 * serializeAws_queryPutDataProtectionPolicyInput
 */
const se_PutDataProtectionPolicyInput = (input: PutDataProtectionPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_DPP] != null) {
    entries[_DPP] = input[_DPP];
  }
  return entries;
};

/**
 * serializeAws_queryRemovePermissionInput
 */
const se_RemovePermissionInput = (input: RemovePermissionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  return entries;
};

/**
 * serializeAws_querySetEndpointAttributesInput
 */
const se_SetEndpointAttributesInput = (input: SetEndpointAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_EA] != null) {
    entries[_EA] = input[_EA];
  }
  if (input[_At] != null) {
    const memberEntries = se_MapStringToString(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetPlatformApplicationAttributesInput
 */
const se_SetPlatformApplicationAttributesInput = (
  input: SetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_PAA] != null) {
    entries[_PAA] = input[_PAA];
  }
  if (input[_At] != null) {
    const memberEntries = se_MapStringToString(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetSMSAttributesInput
 */
const se_SetSMSAttributesInput = (input: SetSMSAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_a] != null) {
    const memberEntries = se_MapStringToString(input[_a], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querySetSubscriptionAttributesInput
 */
const se_SetSubscriptionAttributesInput = (input: SetSubscriptionAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  if (input[_ANt] != null) {
    entries[_ANt] = input[_ANt];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  return entries;
};

/**
 * serializeAws_querySetTopicAttributesInput
 */
const se_SetTopicAttributesInput = (input: SetTopicAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_ANt] != null) {
    entries[_ANt] = input[_ANt];
  }
  if (input[_AV] != null) {
    entries[_AV] = input[_AV];
  }
  return entries;
};

/**
 * serializeAws_querySubscribeInput
 */
const se_SubscribeInput = (input: SubscribeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TA] != null) {
    entries[_TA] = input[_TA];
  }
  if (input[_Pr] != null) {
    entries[_Pr] = input[_Pr];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  if (input[_At] != null) {
    const memberEntries = se_SubscriptionAttributesMap(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RSA] != null) {
    entries[_RSA] = input[_RSA];
  }
  return entries;
};

/**
 * serializeAws_querySubscriptionAttributesMap
 */
const se_SubscriptionAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
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
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTopicAttributesMap
 */
const se_TopicAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryUnsubscribeInput
 */
const se_UnsubscribeInput = (input: UnsubscribeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SA] != null) {
    entries[_SA] = input[_SA];
  }
  return entries;
};

/**
 * serializeAws_queryUntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryVerifySMSSandboxPhoneNumberInput
 */
const se_VerifySMSSandboxPhoneNumberInput = (input: VerifySMSSandboxPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_OTP] != null) {
    entries[_OTP] = input[_OTP];
  }
  return entries;
};

/**
 * deserializeAws_queryAuthorizationErrorException
 */
const de_AuthorizationErrorException = (output: any, context: __SerdeContext): AuthorizationErrorException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchEntryIdsNotDistinctException
 */
const de_BatchEntryIdsNotDistinctException = (
  output: any,
  context: __SerdeContext
): BatchEntryIdsNotDistinctException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchRequestTooLongException
 */
const de_BatchRequestTooLongException = (output: any, context: __SerdeContext): BatchRequestTooLongException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchResultErrorEntry
 */
const de_BatchResultErrorEntry = (output: any, context: __SerdeContext): BatchResultErrorEntry => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_SF] != null) {
    contents[_SF] = __parseBoolean(output[_SF]);
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
 * deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse
 */
const de_CheckIfPhoneNumberIsOptedOutResponse = (
  output: any,
  context: __SerdeContext
): CheckIfPhoneNumberIsOptedOutResponse => {
  const contents: any = {};
  if (output[_iOO] != null) {
    contents[_iOO] = __parseBoolean(output[_iOO]);
  }
  return contents;
};

/**
 * deserializeAws_queryConcurrentAccessException
 */
const de_ConcurrentAccessException = (output: any, context: __SerdeContext): ConcurrentAccessException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfirmSubscriptionResponse
 */
const de_ConfirmSubscriptionResponse = (output: any, context: __SerdeContext): ConfirmSubscriptionResponse => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEndpointResponse
 */
const de_CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  const contents: any = {};
  if (output[_EA] != null) {
    contents[_EA] = __expectString(output[_EA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePlatformApplicationResponse
 */
const de_CreatePlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreatePlatformApplicationResponse => {
  const contents: any = {};
  if (output[_PAA] != null) {
    contents[_PAA] = __expectString(output[_PAA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSMSSandboxPhoneNumberResult
 */
const de_CreateSMSSandboxPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): CreateSMSSandboxPhoneNumberResult => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryCreateTopicResponse
 */
const de_CreateTopicResponse = (output: any, context: __SerdeContext): CreateTopicResponse => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteSMSSandboxPhoneNumberResult
 */
const de_DeleteSMSSandboxPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): DeleteSMSSandboxPhoneNumberResult => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryEmptyBatchRequestException
 */
const de_EmptyBatchRequestException = (output: any, context: __SerdeContext): EmptyBatchRequestException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output[_EA] != null) {
    contents[_EA] = __expectString(output[_EA]);
  }
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_MapStringToString(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointDisabledException
 */
const de_EndpointDisabledException = (output: any, context: __SerdeContext): EndpointDisabledException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryFilterPolicyLimitExceededException
 */
const de_FilterPolicyLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterPolicyLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetDataProtectionPolicyResponse
 */
const de_GetDataProtectionPolicyResponse = (output: any, context: __SerdeContext): GetDataProtectionPolicyResponse => {
  const contents: any = {};
  if (output[_DPP] != null) {
    contents[_DPP] = __expectString(output[_DPP]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetEndpointAttributesResponse
 */
const de_GetEndpointAttributesResponse = (output: any, context: __SerdeContext): GetEndpointAttributesResponse => {
  const contents: any = {};
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_MapStringToString(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetPlatformApplicationAttributesResponse
 */
const de_GetPlatformApplicationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetPlatformApplicationAttributesResponse => {
  const contents: any = {};
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_MapStringToString(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSMSAttributesResponse
 */
const de_GetSMSAttributesResponse = (output: any, context: __SerdeContext): GetSMSAttributesResponse => {
  const contents: any = {};
  if (String(output.attributes).trim() === "") {
    contents[_a] = {};
  } else if (output[_a] != null && output[_a][_e] != null) {
    contents[_a] = de_MapStringToString(__getArrayIfSingleItem(output[_a][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSMSSandboxAccountStatusResult
 */
const de_GetSMSSandboxAccountStatusResult = (
  output: any,
  context: __SerdeContext
): GetSMSSandboxAccountStatusResult => {
  const contents: any = {};
  if (output[_IIS] != null) {
    contents[_IIS] = __parseBoolean(output[_IIS]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSubscriptionAttributesResponse
 */
const de_GetSubscriptionAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionAttributesResponse => {
  const contents: any = {};
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_SubscriptionAttributesMap(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTopicAttributesResponse
 */
const de_GetTopicAttributesResponse = (output: any, context: __SerdeContext): GetTopicAttributesResponse => {
  const contents: any = {};
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_TopicAttributesMap(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryInternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidBatchEntryIdException
 */
const de_InvalidBatchEntryIdException = (output: any, context: __SerdeContext): InvalidBatchEntryIdException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSecurityException
 */
const de_InvalidSecurityException = (output: any, context: __SerdeContext): InvalidSecurityException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSAccessDeniedException
 */
const de_KMSAccessDeniedException = (output: any, context: __SerdeContext): KMSAccessDeniedException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSDisabledException
 */
const de_KMSDisabledException = (output: any, context: __SerdeContext): KMSDisabledException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSInvalidStateException
 */
const de_KMSInvalidStateException = (output: any, context: __SerdeContext): KMSInvalidStateException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSNotFoundException
 */
const de_KMSNotFoundException = (output: any, context: __SerdeContext): KMSNotFoundException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSOptInRequired
 */
const de_KMSOptInRequired = (output: any, context: __SerdeContext): KMSOptInRequired => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSThrottlingException
 */
const de_KMSThrottlingException = (output: any, context: __SerdeContext): KMSThrottlingException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryListEndpointsByPlatformApplicationResponse
 */
const de_ListEndpointsByPlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointsByPlatformApplicationResponse => {
  const contents: any = {};
  if (String(output.Endpoints).trim() === "") {
    contents[_En] = [];
  } else if (output[_En] != null && output[_En][_me] != null) {
    contents[_En] = de_ListOfEndpoints(__getArrayIfSingleItem(output[_En][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListOfEndpoints
 */
const de_ListOfEndpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Endpoint(entry, context);
    });
};

/**
 * deserializeAws_queryListOfPlatformApplications
 */
const de_ListOfPlatformApplications = (output: any, context: __SerdeContext): PlatformApplication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PlatformApplication(entry, context);
    });
};

/**
 * deserializeAws_queryListOriginationNumbersResult
 */
const de_ListOriginationNumbersResult = (output: any, context: __SerdeContext): ListOriginationNumbersResult => {
  const contents: any = {};
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (String(output.PhoneNumbers).trim() === "") {
    contents[_PNh] = [];
  } else if (output[_PNh] != null && output[_PNh][_me] != null) {
    contents[_PNh] = de_PhoneNumberInformationList(__getArrayIfSingleItem(output[_PNh][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListPhoneNumbersOptedOutResponse
 */
const de_ListPhoneNumbersOptedOutResponse = (
  output: any,
  context: __SerdeContext
): ListPhoneNumbersOptedOutResponse => {
  const contents: any = {};
  if (String(output.phoneNumbers).trim() === "") {
    contents[_pNh] = [];
  } else if (output[_pNh] != null && output[_pNh][_me] != null) {
    contents[_pNh] = de_PhoneNumberList(__getArrayIfSingleItem(output[_pNh][_me]), context);
  }
  if (output[_nT] != null) {
    contents[_nT] = __expectString(output[_nT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPlatformApplicationsResponse
 */
const de_ListPlatformApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListPlatformApplicationsResponse => {
  const contents: any = {};
  if (String(output.PlatformApplications).trim() === "") {
    contents[_PA] = [];
  } else if (output[_PA] != null && output[_PA][_me] != null) {
    contents[_PA] = de_ListOfPlatformApplications(__getArrayIfSingleItem(output[_PA][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSMSSandboxPhoneNumbersResult
 */
const de_ListSMSSandboxPhoneNumbersResult = (
  output: any,
  context: __SerdeContext
): ListSMSSandboxPhoneNumbersResult => {
  const contents: any = {};
  if (String(output.PhoneNumbers).trim() === "") {
    contents[_PNh] = [];
  } else if (output[_PNh] != null && output[_PNh][_me] != null) {
    contents[_PNh] = de_SMSSandboxPhoneNumberList(__getArrayIfSingleItem(output[_PNh][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSubscriptionsByTopicResponse
 */
const de_ListSubscriptionsByTopicResponse = (
  output: any,
  context: __SerdeContext
): ListSubscriptionsByTopicResponse => {
  const contents: any = {};
  if (String(output.Subscriptions).trim() === "") {
    contents[_Sub] = [];
  } else if (output[_Sub] != null && output[_Sub][_me] != null) {
    contents[_Sub] = de_SubscriptionsList(__getArrayIfSingleItem(output[_Sub][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSubscriptionsResponse
 */
const de_ListSubscriptionsResponse = (output: any, context: __SerdeContext): ListSubscriptionsResponse => {
  const contents: any = {};
  if (String(output.Subscriptions).trim() === "") {
    contents[_Sub] = [];
  } else if (output[_Sub] != null && output[_Sub][_me] != null) {
    contents[_Sub] = de_SubscriptionsList(__getArrayIfSingleItem(output[_Sub][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_me] != null) {
    contents[_Ta] = de_TagList(__getArrayIfSingleItem(output[_Ta][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListTopicsResponse
 */
const de_ListTopicsResponse = (output: any, context: __SerdeContext): ListTopicsResponse => {
  const contents: any = {};
  if (String(output.Topics).trim() === "") {
    contents[_To] = [];
  } else if (output[_To] != null && output[_To][_me] != null) {
    contents[_To] = de_TopicsList(__getArrayIfSingleItem(output[_To][_me]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryMapStringToString
 */
const de_MapStringToString = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryNotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryNumberCapabilityList
 */
const de_NumberCapabilityList = (output: any, context: __SerdeContext): NumberCapability[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryOptedOutException
 */
const de_OptedOutException = (output: any, context: __SerdeContext): OptedOutException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOptInPhoneNumberResponse
 */
const de_OptInPhoneNumberResponse = (output: any, context: __SerdeContext): OptInPhoneNumberResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPhoneNumberInformation
 */
const de_PhoneNumberInformation = (output: any, context: __SerdeContext): PhoneNumberInformation => {
  const contents: any = {};
  if (output[_CA] != null) {
    contents[_CA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CA]));
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ICC] != null) {
    contents[_ICC] = __expectString(output[_ICC]);
  }
  if (output[_RT] != null) {
    contents[_RT] = __expectString(output[_RT]);
  }
  if (String(output.NumberCapabilities).trim() === "") {
    contents[_NC] = [];
  } else if (output[_NC] != null && output[_NC][_me] != null) {
    contents[_NC] = de_NumberCapabilityList(__getArrayIfSingleItem(output[_NC][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPhoneNumberInformationList
 */
const de_PhoneNumberInformationList = (output: any, context: __SerdeContext): PhoneNumberInformation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberInformation(entry, context);
    });
};

/**
 * deserializeAws_queryPhoneNumberList
 */
const de_PhoneNumberList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryPlatformApplication
 */
const de_PlatformApplication = (output: any, context: __SerdeContext): PlatformApplication => {
  const contents: any = {};
  if (output[_PAA] != null) {
    contents[_PAA] = __expectString(output[_PAA]);
  }
  if (String(output.Attributes).trim() === "") {
    contents[_At] = {};
  } else if (output[_At] != null && output[_At][_e] != null) {
    contents[_At] = de_MapStringToString(__getArrayIfSingleItem(output[_At][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPlatformApplicationDisabledException
 */
const de_PlatformApplicationDisabledException = (
  output: any,
  context: __SerdeContext
): PlatformApplicationDisabledException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPublishBatchResponse
 */
const de_PublishBatchResponse = (output: any, context: __SerdeContext): PublishBatchResponse => {
  const contents: any = {};
  if (String(output.Successful).trim() === "") {
    contents[_Suc] = [];
  } else if (output[_Suc] != null && output[_Suc][_me] != null) {
    contents[_Suc] = de_PublishBatchResultEntryList(__getArrayIfSingleItem(output[_Suc][_me]), context);
  }
  if (String(output.Failed).trim() === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_me] != null) {
    contents[_F] = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output[_F][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPublishBatchResultEntry
 */
const de_PublishBatchResultEntry = (output: any, context: __SerdeContext): PublishBatchResultEntry => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_MI] != null) {
    contents[_MI] = __expectString(output[_MI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  return contents;
};

/**
 * deserializeAws_queryPublishBatchResultEntryList
 */
const de_PublishBatchResultEntryList = (output: any, context: __SerdeContext): PublishBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PublishBatchResultEntry(entry, context);
    });
};

/**
 * deserializeAws_queryPublishResponse
 */
const de_PublishResponse = (output: any, context: __SerdeContext): PublishResponse => {
  const contents: any = {};
  if (output[_MI] != null) {
    contents[_MI] = __expectString(output[_MI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  return contents;
};

/**
 * deserializeAws_queryReplayLimitExceededException
 */
const de_ReplayLimitExceededException = (output: any, context: __SerdeContext): ReplayLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySetSMSAttributesResponse
 */
const de_SetSMSAttributesResponse = (output: any, context: __SerdeContext): SetSMSAttributesResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_querySMSSandboxPhoneNumber
 */
const de_SMSSandboxPhoneNumber = (output: any, context: __SerdeContext): SMSSandboxPhoneNumber => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_querySMSSandboxPhoneNumberList
 */
const de_SMSSandboxPhoneNumberList = (output: any, context: __SerdeContext): SMSSandboxPhoneNumber[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SMSSandboxPhoneNumber(entry, context);
    });
};

/**
 * deserializeAws_queryStaleTagException
 */
const de_StaleTagException = (output: any, context: __SerdeContext): StaleTagException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscribeResponse
 */
const de_SubscribeResponse = (output: any, context: __SerdeContext): SubscribeResponse => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  const contents: any = {};
  if (output[_SA] != null) {
    contents[_SA] = __expectString(output[_SA]);
  }
  if (output[_O] != null) {
    contents[_O] = __expectString(output[_O]);
  }
  if (output[_Pr] != null) {
    contents[_Pr] = __expectString(output[_Pr]);
  }
  if (output[_E] != null) {
    contents[_E] = __expectString(output[_E]);
  }
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionAttributesMap
 */
const de_SubscriptionAttributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_querySubscriptionLimitExceededException
 */
const de_SubscriptionLimitExceededException = (
  output: any,
  context: __SerdeContext
): SubscriptionLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscriptionsList
 */
const de_SubscriptionsList = (output: any, context: __SerdeContext): Subscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Subscription(entry, context);
    });
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagLimitExceededException
 */
const de_TagLimitExceededException = (output: any, context: __SerdeContext): TagLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTagPolicyException
 */
const de_TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryThrottledException
 */
const de_ThrottledException = (output: any, context: __SerdeContext): ThrottledException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTooManyEntriesInBatchRequestException
 */
const de_TooManyEntriesInBatchRequestException = (
  output: any,
  context: __SerdeContext
): TooManyEntriesInBatchRequestException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTopic
 */
const de_Topic = (output: any, context: __SerdeContext): Topic => {
  const contents: any = {};
  if (output[_TA] != null) {
    contents[_TA] = __expectString(output[_TA]);
  }
  return contents;
};

/**
 * deserializeAws_queryTopicAttributesMap
 */
const de_TopicAttributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryTopicLimitExceededException
 */
const de_TopicLimitExceededException = (output: any, context: __SerdeContext): TopicLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryTopicsList
 */
const de_TopicsList = (output: any, context: __SerdeContext): Topic[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Topic(entry, context);
    });
};

/**
 * deserializeAws_queryUntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUserErrorException
 */
const de_UserErrorException = (output: any, context: __SerdeContext): UserErrorException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryVerificationException
 */
const de_VerificationException = (output: any, context: __SerdeContext): VerificationException => {
  const contents: any = {};
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryVerifySMSSandboxPhoneNumberResult
 */
const de_VerifySMSSandboxPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): VerifySMSSandboxPhoneNumberResult => {
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

const _ = "2010-03-31";
const _A = "Action";
const _AN = "ActionName";
const _ANt = "AttributeName";
const _AOU = "AuthenticateOnUnsubscribe";
const _AP = "AddPermission";
const _AV = "AttributeValue";
const _AWSAI = "AWSAccountId";
const _At = "Attributes";
const _BV = "BinaryValue";
const _C = "Code";
const _CA = "CreatedAt";
const _CIPNIOO = "CheckIfPhoneNumberIsOptedOut";
const _CPA = "CreatePlatformApplication";
const _CPE = "CreatePlatformEndpoint";
const _CS = "ConfirmSubscription";
const _CSMSSPN = "CreateSMSSandboxPhoneNumber";
const _CT = "CreateTopic";
const _CUD = "CustomUserData";
const _DE = "DeleteEndpoint";
const _DPA = "DeletePlatformApplication";
const _DPP = "DataProtectionPolicy";
const _DSMSSPN = "DeleteSMSSandboxPhoneNumber";
const _DT = "DeleteTopic";
const _DTa = "DataType";
const _E = "Endpoint";
const _EA = "EndpointArn";
const _En = "Endpoints";
const _F = "Failed";
const _GDPP = "GetDataProtectionPolicy";
const _GEA = "GetEndpointAttributes";
const _GPAA = "GetPlatformApplicationAttributes";
const _GSA = "GetSubscriptionAttributes";
const _GSMSA = "GetSMSAttributes";
const _GSMSSAS = "GetSMSSandboxAccountStatus";
const _GTA = "GetTopicAttributes";
const _I = "Id";
const _ICC = "Iso2CountryCode";
const _IIS = "IsInSandbox";
const _K = "Key";
const _L = "Label";
const _LC = "LanguageCode";
const _LEBPA = "ListEndpointsByPlatformApplication";
const _LON = "ListOriginationNumbers";
const _LPA = "ListPlatformApplications";
const _LPNOO = "ListPhoneNumbersOptedOut";
const _LS = "ListSubscriptions";
const _LSBT = "ListSubscriptionsByTopic";
const _LSMSSPN = "ListSMSSandboxPhoneNumbers";
const _LT = "ListTopics";
const _LTFR = "ListTagsForResource";
const _M = "Message";
const _MA = "MessageAttributes";
const _MDI = "MessageDeduplicationId";
const _MGI = "MessageGroupId";
const _MI = "MessageId";
const _MR = "MaxResults";
const _MS = "MessageStructure";
const _N = "Name";
const _NC = "NumberCapabilities";
const _NT = "NextToken";
const _O = "Owner";
const _OIPN = "OptInPhoneNumber";
const _OTP = "OneTimePassword";
const _P = "Publish";
const _PA = "PlatformApplications";
const _PAA = "PlatformApplicationArn";
const _PB = "PublishBatch";
const _PBRE = "PublishBatchRequestEntries";
const _PDPP = "PutDataProtectionPolicy";
const _PN = "PhoneNumber";
const _PNh = "PhoneNumbers";
const _Pl = "Platform";
const _Pr = "Protocol";
const _RA = "ResourceArn";
const _RP = "RemovePermission";
const _RSA = "ReturnSubscriptionArn";
const _RT = "RouteType";
const _S = "Subscribe";
const _SA = "SubscriptionArn";
const _SEA = "SetEndpointAttributes";
const _SF = "SenderFault";
const _SN = "SequenceNumber";
const _SPAA = "SetPlatformApplicationAttributes";
const _SSA = "SetSubscriptionAttributes";
const _SSMSA = "SetSMSAttributes";
const _STA = "SetTopicAttributes";
const _SV = "StringValue";
const _St = "Status";
const _Su = "Subject";
const _Sub = "Subscriptions";
const _Suc = "Successful";
const _T = "Token";
const _TA = "TopicArn";
const _TAa = "TargetArn";
const _TK = "TagKeys";
const _TR = "TagResource";
const _Ta = "Tags";
const _To = "Topics";
const _U = "Unsubscribe";
const _UR = "UntagResource";
const _V = "Version";
const _VSMSSPN = "VerifySMSSandboxPhoneNumber";
const _Va = "Value";
const _a = "attributes";
const _e = "entry";
const _iOO = "isOptedOut";
const _m = "message";
const _me = "member";
const _nT = "nextToken";
const _pN = "phoneNumber";
const _pNh = "phoneNumbers";

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
