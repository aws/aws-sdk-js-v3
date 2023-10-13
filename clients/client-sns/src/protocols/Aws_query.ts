// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
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
import { XMLParser } from "fast-xml-parser";

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
    Action: "AddPermission",
    Version: "2010-03-31",
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
    Action: "CheckIfPhoneNumberIsOptedOut",
    Version: "2010-03-31",
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
    Action: "ConfirmSubscription",
    Version: "2010-03-31",
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
    Action: "CreatePlatformApplication",
    Version: "2010-03-31",
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
    Action: "CreatePlatformEndpoint",
    Version: "2010-03-31",
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
    Action: "CreateSMSSandboxPhoneNumber",
    Version: "2010-03-31",
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
    Action: "CreateTopic",
    Version: "2010-03-31",
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
    Action: "DeleteEndpoint",
    Version: "2010-03-31",
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
    Action: "DeletePlatformApplication",
    Version: "2010-03-31",
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
    Action: "DeleteSMSSandboxPhoneNumber",
    Version: "2010-03-31",
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
    Action: "DeleteTopic",
    Version: "2010-03-31",
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
    Action: "GetDataProtectionPolicy",
    Version: "2010-03-31",
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
    Action: "GetEndpointAttributes",
    Version: "2010-03-31",
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
    Action: "GetPlatformApplicationAttributes",
    Version: "2010-03-31",
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
    Action: "GetSMSAttributes",
    Version: "2010-03-31",
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
    Action: "GetSMSSandboxAccountStatus",
    Version: "2010-03-31",
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
    Action: "GetSubscriptionAttributes",
    Version: "2010-03-31",
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
    Action: "GetTopicAttributes",
    Version: "2010-03-31",
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
    Action: "ListEndpointsByPlatformApplication",
    Version: "2010-03-31",
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
    Action: "ListOriginationNumbers",
    Version: "2010-03-31",
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
    Action: "ListPhoneNumbersOptedOut",
    Version: "2010-03-31",
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
    Action: "ListPlatformApplications",
    Version: "2010-03-31",
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
    Action: "ListSMSSandboxPhoneNumbers",
    Version: "2010-03-31",
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
    Action: "ListSubscriptions",
    Version: "2010-03-31",
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
    Action: "ListSubscriptionsByTopic",
    Version: "2010-03-31",
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
    Action: "ListTagsForResource",
    Version: "2010-03-31",
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
    Action: "ListTopics",
    Version: "2010-03-31",
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
    Action: "OptInPhoneNumber",
    Version: "2010-03-31",
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
    Action: "Publish",
    Version: "2010-03-31",
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
    Action: "PublishBatch",
    Version: "2010-03-31",
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
    Action: "PutDataProtectionPolicy",
    Version: "2010-03-31",
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
    Action: "RemovePermission",
    Version: "2010-03-31",
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
    Action: "SetEndpointAttributes",
    Version: "2010-03-31",
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
    Action: "SetPlatformApplicationAttributes",
    Version: "2010-03-31",
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
    Action: "SetSMSAttributes",
    Version: "2010-03-31",
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
    Action: "SetSubscriptionAttributes",
    Version: "2010-03-31",
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
    Action: "SetTopicAttributes",
    Version: "2010-03-31",
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
    Action: "Subscribe",
    Version: "2010-03-31",
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
    Action: "TagResource",
    Version: "2010-03-31",
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
    Action: "Unsubscribe",
    Version: "2010-03-31",
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
    Action: "UntagResource",
    Version: "2010-03-31",
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
    Action: "VerifySMSSandboxPhoneNumber",
    Version: "2010-03-31",
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
 * deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand
 */
export const de_CheckIfPhoneNumberIsOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckIfPhoneNumberIsOptedOutCommandError(output, context);
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
 * deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError
 */
const de_CheckIfPhoneNumberIsOptedOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryConfirmSubscriptionCommand
 */
export const de_ConfirmSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmSubscriptionCommandError(output, context);
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
 * deserializeAws_queryConfirmSubscriptionCommandError
 */
const de_ConfirmSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SubscriptionLimitExceeded":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      throw await de_SubscriptionLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreatePlatformApplicationCommand
 */
export const de_CreatePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePlatformApplicationCommandError(output, context);
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
 * deserializeAws_queryCreatePlatformApplicationCommandError
 */
const de_CreatePlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
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
 * deserializeAws_queryCreatePlatformEndpointCommand
 */
export const de_CreatePlatformEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePlatformEndpointCommandError(output, context);
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
 * deserializeAws_queryCreatePlatformEndpointCommandError
 */
const de_CreatePlatformEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
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
 * deserializeAws_queryCreateSMSSandboxPhoneNumberCommand
 */
export const de_CreateSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSMSSandboxPhoneNumberCommandError(output, context);
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
 * deserializeAws_queryCreateSMSSandboxPhoneNumberCommandError
 */
const de_CreateSMSSandboxPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
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
    case "OptedOut":
    case "com.amazonaws.sns#OptedOutException":
      throw await de_OptedOutExceptionRes(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "UserError":
    case "com.amazonaws.sns#UserErrorException":
      throw await de_UserErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryCreateTopicCommand
 */
export const de_CreateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTopicCommandError(output, context);
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
 * deserializeAws_queryCreateTopicCommandError
 */
const de_CreateTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
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
 * deserializeAws_queryDeletePlatformApplicationCommand
 */
export const de_DeletePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePlatformApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePlatformApplicationCommandError
 */
const de_DeletePlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
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
 * deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand
 */
export const de_DeleteSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSMSSandboxPhoneNumberCommandError(output, context);
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
 * deserializeAws_queryDeleteSMSSandboxPhoneNumberCommandError
 */
const de_DeleteSMSSandboxPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
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
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "UserError":
    case "com.amazonaws.sns#UserErrorException":
      throw await de_UserErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryDeleteTopicCommand
 */
export const de_DeleteTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTopicCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteTopicCommandError
 */
const de_DeleteTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await de_StaleTagExceptionRes(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetDataProtectionPolicyCommand
 */
export const de_GetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataProtectionPolicyCommandError(output, context);
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
 * deserializeAws_queryGetDataProtectionPolicyCommandError
 */
const de_GetDataProtectionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
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
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetEndpointAttributesCommand
 */
export const de_GetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEndpointAttributesCommandError(output, context);
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
 * deserializeAws_queryGetEndpointAttributesCommandError
 */
const de_GetEndpointAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
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
 * deserializeAws_queryGetPlatformApplicationAttributesCommand
 */
export const de_GetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPlatformApplicationAttributesCommandError(output, context);
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
 * deserializeAws_queryGetPlatformApplicationAttributesCommandError
 */
const de_GetPlatformApplicationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
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
 * deserializeAws_queryGetSMSAttributesCommand
 */
export const de_GetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSMSAttributesCommandError(output, context);
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
 * deserializeAws_queryGetSMSAttributesCommandError
 */
const de_GetSMSAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetSMSSandboxAccountStatusCommand
 */
export const de_GetSMSSandboxAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSMSSandboxAccountStatusCommandError(output, context);
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
 * deserializeAws_queryGetSMSSandboxAccountStatusCommandError
 */
const de_GetSMSSandboxAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryGetSubscriptionAttributesCommand
 */
export const de_GetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSubscriptionAttributesCommandError(output, context);
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
 * deserializeAws_queryGetSubscriptionAttributesCommandError
 */
const de_GetSubscriptionAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
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
 * deserializeAws_queryGetTopicAttributesCommand
 */
export const de_GetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTopicAttributesCommandError(output, context);
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
 * deserializeAws_queryGetTopicAttributesCommandError
 */
const de_GetTopicAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
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
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListEndpointsByPlatformApplicationCommand
 */
export const de_ListEndpointsByPlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointsByPlatformApplicationCommandError(output, context);
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
 * deserializeAws_queryListEndpointsByPlatformApplicationCommandError
 */
const de_ListEndpointsByPlatformApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
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
 * deserializeAws_queryListOriginationNumbersCommand
 */
export const de_ListOriginationNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginationNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOriginationNumbersCommandError(output, context);
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
 * deserializeAws_queryListOriginationNumbersCommandError
 */
const de_ListOriginationNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginationNumbersCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListPhoneNumbersOptedOutCommand
 */
export const de_ListPhoneNumbersOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPhoneNumbersOptedOutCommandError(output, context);
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
 * deserializeAws_queryListPhoneNumbersOptedOutCommandError
 */
const de_ListPhoneNumbersOptedOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListPlatformApplicationsCommand
 */
export const de_ListPlatformApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPlatformApplicationsCommandError(output, context);
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
 * deserializeAws_queryListPlatformApplicationsCommandError
 */
const de_ListPlatformApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
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
 * deserializeAws_queryListSMSSandboxPhoneNumbersCommand
 */
export const de_ListSMSSandboxPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSMSSandboxPhoneNumbersCommandError(output, context);
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
 * deserializeAws_queryListSMSSandboxPhoneNumbersCommandError
 */
const de_ListSMSSandboxPhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
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
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListSubscriptionsCommand
 */
export const de_ListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSubscriptionsCommandError(output, context);
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
 * deserializeAws_queryListSubscriptionsCommandError
 */
const de_ListSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
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
 * deserializeAws_queryListSubscriptionsByTopicCommand
 */
export const de_ListSubscriptionsByTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSubscriptionsByTopicCommandError(output, context);
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
 * deserializeAws_queryListSubscriptionsByTopicCommandError
 */
const de_ListSubscriptionsByTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
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
 * deserializeAws_queryListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_queryListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryListTopicsCommand
 */
export const de_ListTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTopicsCommandError(output, context);
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
 * deserializeAws_queryListTopicsCommandError
 */
const de_ListTopicsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
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
 * deserializeAws_queryOptInPhoneNumberCommand
 */
export const de_OptInPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_OptInPhoneNumberCommandError(output, context);
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
 * deserializeAws_queryOptInPhoneNumberCommandError
 */
const de_OptInPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryPublishCommand
 */
export const de_PublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PublishCommandError(output, context);
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
 * deserializeAws_queryPublishCommandError
 */
const de_PublishCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "EndpointDisabled":
    case "com.amazonaws.sns#EndpointDisabledException":
      throw await de_EndpointDisabledExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
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
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ParameterValueInvalid":
    case "com.amazonaws.sns#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PlatformApplicationDisabled":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      throw await de_PlatformApplicationDisabledExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryPublishBatchCommand
 */
export const de_PublishBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PublishBatchCommandError(output, context);
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
 * deserializeAws_queryPublishBatchCommandError
 */
const de_PublishBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sns#BatchEntryIdsNotDistinctException":
      throw await de_BatchEntryIdsNotDistinctExceptionRes(parsedOutput, context);
    case "BatchRequestTooLong":
    case "com.amazonaws.sns#BatchRequestTooLongException":
      throw await de_BatchRequestTooLongExceptionRes(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sns#EmptyBatchRequestException":
      throw await de_EmptyBatchRequestExceptionRes(parsedOutput, context);
    case "EndpointDisabled":
    case "com.amazonaws.sns#EndpointDisabledException":
      throw await de_EndpointDisabledExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sns#InvalidBatchEntryIdException":
      throw await de_InvalidBatchEntryIdExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
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
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ParameterValueInvalid":
    case "com.amazonaws.sns#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PlatformApplicationDisabled":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      throw await de_PlatformApplicationDisabledExceptionRes(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sns#TooManyEntriesInBatchRequestException":
      throw await de_TooManyEntriesInBatchRequestExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryPutDataProtectionPolicyCommand
 */
export const de_PutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDataProtectionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutDataProtectionPolicyCommandError
 */
const de_PutDataProtectionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
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
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySetEndpointAttributesCommand
 */
export const de_SetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetEndpointAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetEndpointAttributesCommandError
 */
const de_SetEndpointAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
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
 * deserializeAws_querySetPlatformApplicationAttributesCommand
 */
export const de_SetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetPlatformApplicationAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetPlatformApplicationAttributesCommandError
 */
const de_SetPlatformApplicationAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
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
 * deserializeAws_querySetSMSAttributesCommand
 */
export const de_SetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSMSAttributesCommandError(output, context);
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
 * deserializeAws_querySetSMSAttributesCommandError
 */
const de_SetSMSAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
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
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySetSubscriptionAttributesCommand
 */
export const de_SetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSubscriptionAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetSubscriptionAttributesCommandError
 */
const de_SetSubscriptionAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySetTopicAttributesCommand
 */
export const de_SetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTopicAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetTopicAttributesCommandError
 */
const de_SetTopicAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
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
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_querySubscribeCommand
 */
export const de_SubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubscribeCommandError(output, context);
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
 * deserializeAws_querySubscribeCommandError
 */
const de_SubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await de_FilterPolicyLimitExceededExceptionRes(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "SubscriptionLimitExceeded":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      throw await de_SubscriptionLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
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
 * deserializeAws_queryTagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await de_StaleTagExceptionRes(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUnsubscribeCommand
 */
export const de_UnsubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnsubscribeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUnsubscribeCommandError
 */
const de_UnsubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
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
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await de_InvalidSecurityExceptionRes(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
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
 * deserializeAws_queryUntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await de_AuthorizationErrorExceptionRes(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await de_StaleTagExceptionRes(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_queryVerifySMSSandboxPhoneNumberCommand
 */
export const de_VerifySMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifySMSSandboxPhoneNumberCommandError(output, context);
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
 * deserializeAws_queryVerifySMSSandboxPhoneNumberCommandError
 */
const de_VerifySMSSandboxPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
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
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "VerificationException":
    case "com.amazonaws.sns#VerificationException":
      throw await de_VerificationExceptionRes(parsedOutput, context);
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
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.AWSAccountId != null) {
    const memberEntries = se_DelegatesList(input.AWSAccountId, context);
    if (input.AWSAccountId?.length === 0) {
      entries.AWSAccountId = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionName != null) {
    const memberEntries = se_ActionsList(input.ActionName, context);
    if (input.ActionName?.length === 0) {
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
  if (input.phoneNumber != null) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

/**
 * serializeAws_queryConfirmSubscriptionInput
 */
const se_ConfirmSubscriptionInput = (input: ConfirmSubscriptionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Token != null) {
    entries["Token"] = input.Token;
  }
  if (input.AuthenticateOnUnsubscribe != null) {
    entries["AuthenticateOnUnsubscribe"] = input.AuthenticateOnUnsubscribe;
  }
  return entries;
};

/**
 * serializeAws_queryCreatePlatformApplicationInput
 */
const se_CreatePlatformApplicationInput = (input: CreatePlatformApplicationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Platform != null) {
    entries["Platform"] = input.Platform;
  }
  if (input.Attributes != null) {
    const memberEntries = se_MapStringToString(input.Attributes, context);
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
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  if (input.Token != null) {
    entries["Token"] = input.Token;
  }
  if (input.CustomUserData != null) {
    entries["CustomUserData"] = input.CustomUserData;
  }
  if (input.Attributes != null) {
    const memberEntries = se_MapStringToString(input.Attributes, context);
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
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.LanguageCode != null) {
    entries["LanguageCode"] = input.LanguageCode;
  }
  return entries;
};

/**
 * serializeAws_queryCreateTopicInput
 */
const se_CreateTopicInput = (input: CreateTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Attributes != null) {
    const memberEntries = se_TopicAttributesMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.DataProtectionPolicy != null) {
    entries["DataProtectionPolicy"] = input.DataProtectionPolicy;
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
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeletePlatformApplicationInput
 */
const se_DeletePlatformApplicationInput = (input: DeletePlatformApplicationInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSMSSandboxPhoneNumberInput
 */
const se_DeleteSMSSandboxPhoneNumberInput = (input: DeleteSMSSandboxPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteTopicInput
 */
const se_DeleteTopicInput = (input: DeleteTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetDataProtectionPolicyInput
 */
const se_GetDataProtectionPolicyInput = (input: GetDataProtectionPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetEndpointAttributesInput
 */
const se_GetEndpointAttributesInput = (input: GetEndpointAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
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
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetSMSAttributesInput
 */
const se_GetSMSAttributesInput = (input: GetSMSAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.attributes != null) {
    const memberEntries = se_ListString(input.attributes, context);
    if (input.attributes?.length === 0) {
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
  if (input.SubscriptionArn != null) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetTopicAttributesInput
 */
const se_GetTopicAttributesInput = (input: GetTopicAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
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
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListOriginationNumbersRequest
 */
const se_ListOriginationNumbersRequest = (input: ListOriginationNumbersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListPhoneNumbersOptedOutInput
 */
const se_ListPhoneNumbersOptedOutInput = (input: ListPhoneNumbersOptedOutInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.nextToken != null) {
    entries["nextToken"] = input.nextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListPlatformApplicationsInput
 */
const se_ListPlatformApplicationsInput = (input: ListPlatformApplicationsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListSMSSandboxPhoneNumbersInput
 */
const se_ListSMSSandboxPhoneNumbersInput = (input: ListSMSSandboxPhoneNumbersInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
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
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListSubscriptionsInput
 */
const se_ListSubscriptionsInput = (input: ListSubscriptionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

/**
 * serializeAws_queryListTopicsInput
 */
const se_ListTopicsInput = (input: ListTopicsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
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
      entries[`entry.${counter}.value`] = input[key as keyof typeof input];
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
      const memberEntries = se_MessageAttributeValue(input[key as keyof typeof input], context);
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
  if (input.DataType != null) {
    entries["DataType"] = input.DataType;
  }
  if (input.StringValue != null) {
    entries["StringValue"] = input.StringValue;
  }
  if (input.BinaryValue != null) {
    entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
  }
  return entries;
};

/**
 * serializeAws_queryOptInPhoneNumberInput
 */
const se_OptInPhoneNumberInput = (input: OptInPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.phoneNumber != null) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

/**
 * serializeAws_queryPublishBatchInput
 */
const se_PublishBatchInput = (input: PublishBatchInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.PublishBatchRequestEntries != null) {
    const memberEntries = se_PublishBatchRequestEntryList(input.PublishBatchRequestEntries, context);
    if (input.PublishBatchRequestEntries?.length === 0) {
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
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.Message != null) {
    entries["Message"] = input.Message;
  }
  if (input.Subject != null) {
    entries["Subject"] = input.Subject;
  }
  if (input.MessageStructure != null) {
    entries["MessageStructure"] = input.MessageStructure;
  }
  if (input.MessageAttributes != null) {
    const memberEntries = se_MessageAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributes.${key}`;
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
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.TargetArn != null) {
    entries["TargetArn"] = input.TargetArn;
  }
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.Message != null) {
    entries["Message"] = input.Message;
  }
  if (input.Subject != null) {
    entries["Subject"] = input.Subject;
  }
  if (input.MessageStructure != null) {
    entries["MessageStructure"] = input.MessageStructure;
  }
  if (input.MessageAttributes != null) {
    const memberEntries = se_MessageAttributeMap(input.MessageAttributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MessageAttributes.${key}`;
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
 * serializeAws_queryPutDataProtectionPolicyInput
 */
const se_PutDataProtectionPolicyInput = (input: PutDataProtectionPolicyInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.DataProtectionPolicy != null) {
    entries["DataProtectionPolicy"] = input.DataProtectionPolicy;
  }
  return entries;
};

/**
 * serializeAws_queryRemovePermissionInput
 */
const se_RemovePermissionInput = (input: RemovePermissionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  return entries;
};

/**
 * serializeAws_querySetEndpointAttributesInput
 */
const se_SetEndpointAttributesInput = (input: SetEndpointAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  if (input.Attributes != null) {
    const memberEntries = se_MapStringToString(input.Attributes, context);
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
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  if (input.Attributes != null) {
    const memberEntries = se_MapStringToString(input.Attributes, context);
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
  if (input.attributes != null) {
    const memberEntries = se_MapStringToString(input.attributes, context);
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
  if (input.SubscriptionArn != null) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  if (input.AttributeName != null) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue != null) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  return entries;
};

/**
 * serializeAws_querySetTopicAttributesInput
 */
const se_SetTopicAttributesInput = (input: SetTopicAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.AttributeName != null) {
    entries["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue != null) {
    entries["AttributeValue"] = input.AttributeValue;
  }
  return entries;
};

/**
 * serializeAws_querySubscribeInput
 */
const se_SubscribeInput = (input: SubscribeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Protocol != null) {
    entries["Protocol"] = input.Protocol;
  }
  if (input.Endpoint != null) {
    entries["Endpoint"] = input.Endpoint;
  }
  if (input.Attributes != null) {
    const memberEntries = se_SubscriptionAttributesMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ReturnSubscriptionArn != null) {
    entries["ReturnSubscriptionArn"] = input.ReturnSubscriptionArn;
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
      entries[`entry.${counter}.value`] = input[key as keyof typeof input];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
      entries[`entry.${counter}.value`] = input[key as keyof typeof input];
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryUnsubscribeInput
 */
const se_UnsubscribeInput = (input: UnsubscribeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionArn != null) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

/**
 * serializeAws_queryUntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.OneTimePassword != null) {
    entries["OneTimePassword"] = input.OneTimePassword;
  }
  return entries;
};

/**
 * deserializeAws_queryAuthorizationErrorException
 */
const de_AuthorizationErrorException = (output: any, context: __SerdeContext): AuthorizationErrorException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryBatchRequestTooLongException
 */
const de_BatchRequestTooLongException = (output: any, context: __SerdeContext): BatchRequestTooLongException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
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
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["SenderFault"] !== undefined) {
    contents.SenderFault = __parseBoolean(output["SenderFault"]);
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
  if (output["isOptedOut"] !== undefined) {
    contents.isOptedOut = __parseBoolean(output["isOptedOut"]);
  }
  return contents;
};

/**
 * deserializeAws_queryConcurrentAccessException
 */
const de_ConcurrentAccessException = (output: any, context: __SerdeContext): ConcurrentAccessException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryConfirmSubscriptionResponse
 */
const de_ConfirmSubscriptionResponse = (output: any, context: __SerdeContext): ConfirmSubscriptionResponse => {
  const contents: any = {};
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateEndpointResponse
 */
const de_CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  const contents: any = {};
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = __expectString(output["EndpointArn"]);
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
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
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
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {};
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = __expectString(output["EndpointArn"]);
  }
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEndpointDisabledException
 */
const de_EndpointDisabledException = (output: any, context: __SerdeContext): EndpointDisabledException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetDataProtectionPolicyResponse
 */
const de_GetDataProtectionPolicyResponse = (output: any, context: __SerdeContext): GetDataProtectionPolicyResponse => {
  const contents: any = {};
  if (output["DataProtectionPolicy"] !== undefined) {
    contents.DataProtectionPolicy = __expectString(output["DataProtectionPolicy"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetEndpointAttributesResponse
 */
const de_GetEndpointAttributesResponse = (output: any, context: __SerdeContext): GetEndpointAttributesResponse => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
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
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSMSAttributesResponse
 */
const de_GetSMSAttributesResponse = (output: any, context: __SerdeContext): GetSMSAttributesResponse => {
  const contents: any = {};
  if (output.attributes === "") {
    contents.attributes = {};
  } else if (output["attributes"] !== undefined && output["attributes"]["entry"] !== undefined) {
    contents.attributes = de_MapStringToString(__getArrayIfSingleItem(output["attributes"]["entry"]), context);
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
  if (output["IsInSandbox"] !== undefined) {
    contents.IsInSandbox = __parseBoolean(output["IsInSandbox"]);
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
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_SubscriptionAttributesMap(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetTopicAttributesResponse
 */
const de_GetTopicAttributesResponse = (output: any, context: __SerdeContext): GetTopicAttributesResponse => {
  const contents: any = {};
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_TopicAttributesMap(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryInternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidBatchEntryIdException
 */
const de_InvalidBatchEntryIdException = (output: any, context: __SerdeContext): InvalidBatchEntryIdException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidSecurityException
 */
const de_InvalidSecurityException = (output: any, context: __SerdeContext): InvalidSecurityException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSAccessDeniedException
 */
const de_KMSAccessDeniedException = (output: any, context: __SerdeContext): KMSAccessDeniedException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSDisabledException
 */
const de_KMSDisabledException = (output: any, context: __SerdeContext): KMSDisabledException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSInvalidStateException
 */
const de_KMSInvalidStateException = (output: any, context: __SerdeContext): KMSInvalidStateException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSNotFoundException
 */
const de_KMSNotFoundException = (output: any, context: __SerdeContext): KMSNotFoundException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSOptInRequired
 */
const de_KMSOptInRequired = (output: any, context: __SerdeContext): KMSOptInRequired => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKMSThrottlingException
 */
const de_KMSThrottlingException = (output: any, context: __SerdeContext): KMSThrottlingException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output.Endpoints === "") {
    contents.Endpoints = [];
  } else if (output["Endpoints"] !== undefined && output["Endpoints"]["member"] !== undefined) {
    contents.Endpoints = de_ListOfEndpoints(__getArrayIfSingleItem(output["Endpoints"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.PhoneNumbers === "") {
    contents.PhoneNumbers = [];
  } else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
    contents.PhoneNumbers = de_PhoneNumberInformationList(
      __getArrayIfSingleItem(output["PhoneNumbers"]["member"]),
      context
    );
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
  if (output.phoneNumbers === "") {
    contents.phoneNumbers = [];
  } else if (output["phoneNumbers"] !== undefined && output["phoneNumbers"]["member"] !== undefined) {
    contents.phoneNumbers = de_PhoneNumberList(__getArrayIfSingleItem(output["phoneNumbers"]["member"]), context);
  }
  if (output["nextToken"] !== undefined) {
    contents.nextToken = __expectString(output["nextToken"]);
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
  if (output.PlatformApplications === "") {
    contents.PlatformApplications = [];
  } else if (output["PlatformApplications"] !== undefined && output["PlatformApplications"]["member"] !== undefined) {
    contents.PlatformApplications = de_ListOfPlatformApplications(
      __getArrayIfSingleItem(output["PlatformApplications"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output.PhoneNumbers === "") {
    contents.PhoneNumbers = [];
  } else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
    contents.PhoneNumbers = de_SMSSandboxPhoneNumberList(
      __getArrayIfSingleItem(output["PhoneNumbers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  } else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
    contents.Subscriptions = de_SubscriptionsList(__getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSubscriptionsResponse
 */
const de_ListSubscriptionsResponse = (output: any, context: __SerdeContext): ListSubscriptionsResponse => {
  const contents: any = {};
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  } else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
    contents.Subscriptions = de_SubscriptionsList(__getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListTopicsResponse
 */
const de_ListTopicsResponse = (output: any, context: __SerdeContext): ListTopicsResponse => {
  const contents: any = {};
  if (output.Topics === "") {
    contents.Topics = [];
  } else if (output["Topics"] !== undefined && output["Topics"]["member"] !== undefined) {
    contents.Topics = de_TopicsList(__getArrayIfSingleItem(output["Topics"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["CreatedAt"] !== undefined) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreatedAt"]));
  }
  if (output["PhoneNumber"] !== undefined) {
    contents.PhoneNumber = __expectString(output["PhoneNumber"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Iso2CountryCode"] !== undefined) {
    contents.Iso2CountryCode = __expectString(output["Iso2CountryCode"]);
  }
  if (output["RouteType"] !== undefined) {
    contents.RouteType = __expectString(output["RouteType"]);
  }
  if (output.NumberCapabilities === "") {
    contents.NumberCapabilities = [];
  } else if (output["NumberCapabilities"] !== undefined && output["NumberCapabilities"]["member"] !== undefined) {
    contents.NumberCapabilities = de_NumberCapabilityList(
      __getArrayIfSingleItem(output["NumberCapabilities"]["member"]),
      context
    );
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
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
  }
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = de_MapStringToString(__getArrayIfSingleItem(output["Attributes"]["entry"]), context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPublishBatchResponse
 */
const de_PublishBatchResponse = (output: any, context: __SerdeContext): PublishBatchResponse => {
  const contents: any = {};
  if (output.Successful === "") {
    contents.Successful = [];
  } else if (output["Successful"] !== undefined && output["Successful"]["member"] !== undefined) {
    contents.Successful = de_PublishBatchResultEntryList(
      __getArrayIfSingleItem(output["Successful"]["member"]),
      context
    );
  }
  if (output.Failed === "") {
    contents.Failed = [];
  } else if (output["Failed"] !== undefined && output["Failed"]["member"] !== undefined) {
    contents.Failed = de_BatchResultErrorEntryList(__getArrayIfSingleItem(output["Failed"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPublishBatchResultEntry
 */
const de_PublishBatchResultEntry = (output: any, context: __SerdeContext): PublishBatchResultEntry => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
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
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = __expectString(output["SequenceNumber"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["PhoneNumber"] !== undefined) {
    contents.PhoneNumber = __expectString(output["PhoneNumber"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscribeResponse
 */
const de_SubscribeResponse = (output: any, context: __SerdeContext): SubscribeResponse => {
  const contents: any = {};
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
  }
  return contents;
};

/**
 * deserializeAws_querySubscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  const contents: any = {};
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
  }
  if (output["Owner"] !== undefined) {
    contents.Owner = __expectString(output["Owner"]);
  }
  if (output["Protocol"] !== undefined) {
    contents.Protocol = __expectString(output["Protocol"]);
  }
  if (output["Endpoint"] !== undefined) {
    contents.Endpoint = __expectString(output["Endpoint"]);
  }
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagLimitExceededException
 */
const de_TagLimitExceededException = (output: any, context: __SerdeContext): TagLimitExceededException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryTopic
 */
const de_Topic = (output: any, context: __SerdeContext): Topic => {
  const contents: any = {};
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryVerificationException
 */
const de_VerificationException = (output: any, context: __SerdeContext): VerificationException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
