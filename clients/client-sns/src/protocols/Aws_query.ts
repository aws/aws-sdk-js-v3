// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTime as __parseRfc3339DateTime,
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

export const serializeAws_queryAddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddPermissionInput(input, context),
    Action: "AddPermission",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (
  input: CheckIfPhoneNumberIsOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCheckIfPhoneNumberIsOptedOutInput(input, context),
    Action: "CheckIfPhoneNumberIsOptedOut",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryConfirmSubscriptionCommand = async (
  input: ConfirmSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryConfirmSubscriptionInput(input, context),
    Action: "ConfirmSubscription",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePlatformApplicationCommand = async (
  input: CreatePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePlatformApplicationInput(input, context),
    Action: "CreatePlatformApplication",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePlatformEndpointCommand = async (
  input: CreatePlatformEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePlatformEndpointInput(input, context),
    Action: "CreatePlatformEndpoint",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateSMSSandboxPhoneNumberCommand = async (
  input: CreateSMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateSMSSandboxPhoneNumberInput(input, context),
    Action: "CreateSMSSandboxPhoneNumber",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateTopicCommand = async (
  input: CreateTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateTopicInput(input, context),
    Action: "CreateTopic",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteEndpointInput(input, context),
    Action: "DeleteEndpoint",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePlatformApplicationCommand = async (
  input: DeletePlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePlatformApplicationInput(input, context),
    Action: "DeletePlatformApplication",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSMSSandboxPhoneNumberCommand = async (
  input: DeleteSMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSMSSandboxPhoneNumberInput(input, context),
    Action: "DeleteSMSSandboxPhoneNumber",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteTopicCommand = async (
  input: DeleteTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteTopicInput(input, context),
    Action: "DeleteTopic",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetDataProtectionPolicyCommand = async (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetDataProtectionPolicyInput(input, context),
    Action: "GetDataProtectionPolicy",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetEndpointAttributesCommand = async (
  input: GetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetEndpointAttributesInput(input, context),
    Action: "GetEndpointAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetPlatformApplicationAttributesCommand = async (
  input: GetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPlatformApplicationAttributesInput(input, context),
    Action: "GetPlatformApplicationAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSMSAttributesCommand = async (
  input: GetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSMSAttributesInput(input, context),
    Action: "GetSMSAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSMSSandboxAccountStatusCommand = async (
  input: GetSMSSandboxAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSMSSandboxAccountStatusInput(input, context),
    Action: "GetSMSSandboxAccountStatus",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSubscriptionAttributesCommand = async (
  input: GetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSubscriptionAttributesInput(input, context),
    Action: "GetSubscriptionAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetTopicAttributesCommand = async (
  input: GetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetTopicAttributesInput(input, context),
    Action: "GetTopicAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListEndpointsByPlatformApplicationCommand = async (
  input: ListEndpointsByPlatformApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListEndpointsByPlatformApplicationInput(input, context),
    Action: "ListEndpointsByPlatformApplication",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListOriginationNumbersCommand = async (
  input: ListOriginationNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListOriginationNumbersRequest(input, context),
    Action: "ListOriginationNumbers",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPhoneNumbersOptedOutCommand = async (
  input: ListPhoneNumbersOptedOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPhoneNumbersOptedOutInput(input, context),
    Action: "ListPhoneNumbersOptedOut",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPlatformApplicationsCommand = async (
  input: ListPlatformApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPlatformApplicationsInput(input, context),
    Action: "ListPlatformApplications",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSMSSandboxPhoneNumbersCommand = async (
  input: ListSMSSandboxPhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSMSSandboxPhoneNumbersInput(input, context),
    Action: "ListSMSSandboxPhoneNumbers",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSubscriptionsCommand = async (
  input: ListSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSubscriptionsInput(input, context),
    Action: "ListSubscriptions",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSubscriptionsByTopicCommand = async (
  input: ListSubscriptionsByTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSubscriptionsByTopicInput(input, context),
    Action: "ListSubscriptionsByTopic",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceRequest(input, context),
    Action: "ListTagsForResource",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTopicsCommand = async (
  input: ListTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTopicsInput(input, context),
    Action: "ListTopics",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryOptInPhoneNumberCommand = async (
  input: OptInPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryOptInPhoneNumberInput(input, context),
    Action: "OptInPhoneNumber",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPublishCommand = async (
  input: PublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPublishInput(input, context),
    Action: "Publish",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPublishBatchCommand = async (
  input: PublishBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPublishBatchInput(input, context),
    Action: "PublishBatch",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutDataProtectionPolicyCommand = async (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutDataProtectionPolicyInput(input, context),
    Action: "PutDataProtectionPolicy",
    Version: "2010-03-31",
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
    ...serializeAws_queryRemovePermissionInput(input, context),
    Action: "RemovePermission",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetEndpointAttributesCommand = async (
  input: SetEndpointAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetEndpointAttributesInput(input, context),
    Action: "SetEndpointAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetPlatformApplicationAttributesCommand = async (
  input: SetPlatformApplicationAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetPlatformApplicationAttributesInput(input, context),
    Action: "SetPlatformApplicationAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSMSAttributesCommand = async (
  input: SetSMSAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSMSAttributesInput(input, context),
    Action: "SetSMSAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSubscriptionAttributesCommand = async (
  input: SetSubscriptionAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSubscriptionAttributesInput(input, context),
    Action: "SetSubscriptionAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetTopicAttributesCommand = async (
  input: SetTopicAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetTopicAttributesInput(input, context),
    Action: "SetTopicAttributes",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySubscribeCommand = async (
  input: SubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySubscribeInput(input, context),
    Action: "Subscribe",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagResourceRequest(input, context),
    Action: "TagResource",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUnsubscribeCommand = async (
  input: UnsubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUnsubscribeInput(input, context),
    Action: "Unsubscribe",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagResourceRequest(input, context),
    Action: "UntagResource",
    Version: "2010-03-31",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryVerifySMSSandboxPhoneNumberCommand = async (
  input: VerifySMSSandboxPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryVerifySMSSandboxPhoneNumberInput(input, context),
    Action: "VerifySMSSandboxPhoneNumber",
    Version: "2010-03-31",
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
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse(data.CheckIfPhoneNumberIsOptedOutResult, context);
  const response: CheckIfPhoneNumberIsOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryConfirmSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryConfirmSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryConfirmSubscriptionResponse(data.ConfirmSubscriptionResult, context);
  const response: ConfirmSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryConfirmSubscriptionCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
    case "SubscriptionLimitExceeded":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      throw await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryCreatePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreatePlatformApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePlatformApplicationResponse(data.CreatePlatformApplicationResult, context);
  const response: CreatePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePlatformApplicationCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryCreatePlatformEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlatformEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreatePlatformEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateEndpointResponse(data.CreatePlatformEndpointResult, context);
  const response: CreatePlatformEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePlatformEndpointCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateSMSSandboxPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateSMSSandboxPhoneNumberResult(data.CreateSMSSandboxPhoneNumberResult, context);
  const response: CreateSMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateSMSSandboxPhoneNumberCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "OptedOut":
    case "com.amazonaws.sns#OptedOutException":
      throw await deserializeAws_queryOptedOutExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
    case "UserError":
    case "com.amazonaws.sns#UserErrorException":
      throw await deserializeAws_queryUserErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryCreateTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryCreateTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateTopicResponse(data.CreateTopicResult, context);
  const response: CreateTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateTopicCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context);
    case "TopicLimitExceeded":
    case "com.amazonaws.sns#TopicLimitExceededException":
      throw await deserializeAws_queryTopicLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteEndpointCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteEndpointCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryDeletePlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeletePlatformApplicationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePlatformApplicationCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteSMSSandboxPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteSMSSandboxPhoneNumberResult(data.DeleteSMSSandboxPhoneNumberResult, context);
  const response: DeleteSMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSMSSandboxPhoneNumberCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
    case "UserError":
    case "com.amazonaws.sns#UserErrorException":
      throw await deserializeAws_queryUserErrorExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryDeleteTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteTopicCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteTopicCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetDataProtectionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetDataProtectionPolicyResponse(data.GetDataProtectionPolicyResult, context);
  const response: GetDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetDataProtectionPolicyCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetEndpointAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetEndpointAttributesResponse(data.GetEndpointAttributesResult, context);
  const response: GetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetEndpointAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetPlatformApplicationAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetPlatformApplicationAttributesResponse(
    data.GetPlatformApplicationAttributesResult,
    context
  );
  const response: GetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetPlatformApplicationAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSMSAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSMSAttributesResponse(data.GetSMSAttributesResult, context);
  const response: GetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSMSAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetSMSSandboxAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSMSSandboxAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSMSSandboxAccountStatusResult(data.GetSMSSandboxAccountStatusResult, context);
  const response: GetSMSSandboxAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSMSSandboxAccountStatusCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetSubscriptionAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSubscriptionAttributesResponse(data.GetSubscriptionAttributesResult, context);
  const response: GetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSubscriptionAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryGetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetTopicAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetTopicAttributesResponse(data.GetTopicAttributesResult, context);
  const response: GetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetTopicAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListEndpointsByPlatformApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListEndpointsByPlatformApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListEndpointsByPlatformApplicationResponse(
    data.ListEndpointsByPlatformApplicationResult,
    context
  );
  const response: ListEndpointsByPlatformApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListEndpointsByPlatformApplicationCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListOriginationNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOriginationNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListOriginationNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListOriginationNumbersResult(data.ListOriginationNumbersResult, context);
  const response: ListOriginationNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListOriginationNumbersCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await deserializeAws_queryValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListPhoneNumbersOptedOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListPhoneNumbersOptedOutCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPhoneNumbersOptedOutResponse(data.ListPhoneNumbersOptedOutResult, context);
  const response: ListPhoneNumbersOptedOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPhoneNumbersOptedOutCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListPlatformApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlatformApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListPlatformApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPlatformApplicationsResponse(data.ListPlatformApplicationsResult, context);
  const response: ListPlatformApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPlatformApplicationsCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListSMSSandboxPhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListSMSSandboxPhoneNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSMSSandboxPhoneNumbersResult(data.ListSMSSandboxPhoneNumbersResult, context);
  const response: ListSMSSandboxPhoneNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSMSSandboxPhoneNumbersCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSubscriptionsResponse(data.ListSubscriptionsResult, context);
  const response: ListSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSubscriptionsCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListSubscriptionsByTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListSubscriptionsByTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSubscriptionsByTopicResponse(data.ListSubscriptionsByTopicResult, context);
  const response: ListSubscriptionsByTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSubscriptionsByTopicCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTagsForResourceResponse(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryListTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTopicsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTopicsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTopicsResponse(data.ListTopicsResult, context);
  const response: ListTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTopicsCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryOptInPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptInPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryOptInPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryOptInPhoneNumberResponse(data.OptInPhoneNumberResult, context);
  const response: OptInPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryOptInPhoneNumberCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryPublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPublishCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPublishResponse(data.PublishResult, context);
  const response: PublishCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPublishCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "EndpointDisabled":
    case "com.amazonaws.sns#EndpointDisabledException":
      throw await deserializeAws_queryEndpointDisabledExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "KMSAccessDenied":
    case "com.amazonaws.sns#KMSAccessDeniedException":
      throw await deserializeAws_queryKMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabled":
    case "com.amazonaws.sns#KMSDisabledException":
      throw await deserializeAws_queryKMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidState":
    case "com.amazonaws.sns#KMSInvalidStateException":
      throw await deserializeAws_queryKMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFound":
    case "com.amazonaws.sns#KMSNotFoundException":
      throw await deserializeAws_queryKMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.sns#KMSOptInRequired":
      throw await deserializeAws_queryKMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottling":
    case "com.amazonaws.sns#KMSThrottlingException":
      throw await deserializeAws_queryKMSThrottlingExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
    case "ParameterValueInvalid":
    case "com.amazonaws.sns#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PlatformApplicationDisabled":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      throw await deserializeAws_queryPlatformApplicationDisabledExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await deserializeAws_queryValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryPublishBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPublishBatchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPublishBatchResponse(data.PublishBatchResult, context);
  const response: PublishBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPublishBatchCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "BatchEntryIdsNotDistinct":
    case "com.amazonaws.sns#BatchEntryIdsNotDistinctException":
      throw await deserializeAws_queryBatchEntryIdsNotDistinctExceptionResponse(parsedOutput, context);
    case "BatchRequestTooLong":
    case "com.amazonaws.sns#BatchRequestTooLongException":
      throw await deserializeAws_queryBatchRequestTooLongExceptionResponse(parsedOutput, context);
    case "EmptyBatchRequest":
    case "com.amazonaws.sns#EmptyBatchRequestException":
      throw await deserializeAws_queryEmptyBatchRequestExceptionResponse(parsedOutput, context);
    case "EndpointDisabled":
    case "com.amazonaws.sns#EndpointDisabledException":
      throw await deserializeAws_queryEndpointDisabledExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidBatchEntryId":
    case "com.amazonaws.sns#InvalidBatchEntryIdException":
      throw await deserializeAws_queryInvalidBatchEntryIdExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "KMSAccessDenied":
    case "com.amazonaws.sns#KMSAccessDeniedException":
      throw await deserializeAws_queryKMSAccessDeniedExceptionResponse(parsedOutput, context);
    case "KMSDisabled":
    case "com.amazonaws.sns#KMSDisabledException":
      throw await deserializeAws_queryKMSDisabledExceptionResponse(parsedOutput, context);
    case "KMSInvalidState":
    case "com.amazonaws.sns#KMSInvalidStateException":
      throw await deserializeAws_queryKMSInvalidStateExceptionResponse(parsedOutput, context);
    case "KMSNotFound":
    case "com.amazonaws.sns#KMSNotFoundException":
      throw await deserializeAws_queryKMSNotFoundExceptionResponse(parsedOutput, context);
    case "KMSOptInRequired":
    case "com.amazonaws.sns#KMSOptInRequired":
      throw await deserializeAws_queryKMSOptInRequiredResponse(parsedOutput, context);
    case "KMSThrottling":
    case "com.amazonaws.sns#KMSThrottlingException":
      throw await deserializeAws_queryKMSThrottlingExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
    case "ParameterValueInvalid":
    case "com.amazonaws.sns#InvalidParameterValueException":
      throw await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context);
    case "PlatformApplicationDisabled":
    case "com.amazonaws.sns#PlatformApplicationDisabledException":
      throw await deserializeAws_queryPlatformApplicationDisabledExceptionResponse(parsedOutput, context);
    case "TooManyEntriesInBatchRequest":
    case "com.amazonaws.sns#TooManyEntriesInBatchRequestException":
      throw await deserializeAws_queryTooManyEntriesInBatchRequestExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sns#ValidationException":
      throw await deserializeAws_queryValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryPutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutDataProtectionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutDataProtectionPolicyCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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
  switch (errorCode) {
    case "AuthorizationError":
    case "com.amazonaws.sns#AuthorizationErrorException":
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySetEndpointAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetEndpointAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetEndpointAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetEndpointAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetEndpointAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySetPlatformApplicationAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPlatformApplicationAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetPlatformApplicationAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetPlatformApplicationAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetPlatformApplicationAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySetSMSAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSMSAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetSMSAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySetSMSAttributesResponse(data.SetSMSAttributesResult, context);
  const response: SetSMSAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSMSAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySetSubscriptionAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSubscriptionAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetSubscriptionAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSubscriptionAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSubscriptionAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySetTopicAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTopicAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetTopicAttributesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetTopicAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetTopicAttributesCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_querySubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySubscribeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySubscribeResponse(data.SubscribeResult, context);
  const response: SubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySubscribeCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "FilterPolicyLimitExceeded":
    case "com.amazonaws.sns#FilterPolicyLimitExceededException":
      throw await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
    case "SubscriptionLimitExceeded":
    case "com.amazonaws.sns#SubscriptionLimitExceededException":
      throw await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryTagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagResourceResponse(data.TagResourceResult, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagResourceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryUnsubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUnsubscribeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnsubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUnsubscribeCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSecurity":
    case "com.amazonaws.sns#InvalidSecurityException":
      throw await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context);
    case "NotFound":
    case "com.amazonaws.sns#NotFoundException":
      throw await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryUntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUntagResourceResponse(data.UntagResourceResult, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagResourceCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "ConcurrentAccess":
    case "com.amazonaws.sns#ConcurrentAccessException":
      throw await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "StaleTag":
    case "com.amazonaws.sns#StaleTagException":
      throw await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context);
    case "TagLimitExceeded":
    case "com.amazonaws.sns#TagLimitExceededException":
      throw await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context);
    case "TagPolicy":
    case "com.amazonaws.sns#TagPolicyException":
      throw await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_queryVerifySMSSandboxPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryVerifySMSSandboxPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryVerifySMSSandboxPhoneNumberResult(data.VerifySMSSandboxPhoneNumberResult, context);
  const response: VerifySMSSandboxPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryVerifySMSSandboxPhoneNumberCommandError = async (
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
      throw await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context);
    case "InternalError":
    case "com.amazonaws.sns#InternalErrorException":
      throw await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context);
    case "InvalidParameter":
    case "com.amazonaws.sns#InvalidParameterException":
      throw await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sns#ResourceNotFoundException":
      throw await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context);
    case "Throttled":
    case "com.amazonaws.sns#ThrottledException":
      throw await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context);
    case "VerificationException":
    case "com.amazonaws.sns#VerificationException":
      throw await deserializeAws_queryVerificationExceptionResponse(parsedOutput, context);
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

const deserializeAws_queryAuthorizationErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthorizationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryAuthorizationErrorException(body.Error, context);
  const exception = new AuthorizationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBatchEntryIdsNotDistinctExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchEntryIdsNotDistinctException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchEntryIdsNotDistinctException(body.Error, context);
  const exception = new BatchEntryIdsNotDistinctException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryBatchRequestTooLongExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchRequestTooLongException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryBatchRequestTooLongException(body.Error, context);
  const exception = new BatchRequestTooLongException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryConcurrentAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConcurrentAccessException(body.Error, context);
  const exception = new ConcurrentAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEmptyBatchRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmptyBatchRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEmptyBatchRequestException(body.Error, context);
  const exception = new EmptyBatchRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryEndpointDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EndpointDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEndpointDisabledException(body.Error, context);
  const exception = new EndpointDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryFilterPolicyLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FilterPolicyLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryFilterPolicyLimitExceededException(body.Error, context);
  const exception = new FilterPolicyLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalErrorException(body.Error, context);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidBatchEntryIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidBatchEntryIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidBatchEntryIdException(body.Error, context);
  const exception = new InvalidBatchEntryIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterException(body.Error, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(body.Error, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryInvalidSecurityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidSecurityException(body.Error, context);
  const exception = new InvalidSecurityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSAccessDeniedException(body.Error, context);
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSDisabledException(body.Error, context);
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSInvalidStateException(body.Error, context);
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSNotFoundException(body.Error, context);
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSOptInRequiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSOptInRequired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSOptInRequired(body.Error, context);
  const exception = new KMSOptInRequired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryKMSThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKMSThrottlingException(body.Error, context);
  const exception = new KMSThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNotFoundException(body.Error, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryOptedOutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptedOutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryOptedOutException(body.Error, context);
  const exception = new OptedOutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryPlatformApplicationDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PlatformApplicationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPlatformApplicationDisabledException(body.Error, context);
  const exception = new PlatformApplicationDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryStaleTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StaleTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryStaleTagException(body.Error, context);
  const exception = new StaleTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_querySubscriptionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubscriptionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_querySubscriptionLimitExceededException(body.Error, context);
  const exception = new SubscriptionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagLimitExceededException(body.Error, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTagPolicyException(body.Error, context);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryThrottledException(body.Error, context);
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTooManyEntriesInBatchRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyEntriesInBatchRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTooManyEntriesInBatchRequestException(body.Error, context);
  const exception = new TooManyEntriesInBatchRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryTopicLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TopicLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryTopicLimitExceededException(body.Error, context);
  const exception = new TopicLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryUserErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUserErrorException(body.Error, context);
  const exception = new UserErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryValidationException(body.Error, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_queryVerificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VerificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryVerificationException(body.Error, context);
  const exception = new VerificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_queryActionsList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryAddPermissionInput = (input: AddPermissionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.AWSAccountId != null) {
    const memberEntries = serializeAws_queryDelegatesList(input.AWSAccountId, context);
    if (input.AWSAccountId?.length === 0) {
      entries.AWSAccountId = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AWSAccountId.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionName != null) {
    const memberEntries = serializeAws_queryActionsList(input.ActionName, context);
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

const serializeAws_queryCheckIfPhoneNumberIsOptedOutInput = (
  input: CheckIfPhoneNumberIsOptedOutInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.phoneNumber != null) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

const serializeAws_queryConfirmSubscriptionInput = (input: ConfirmSubscriptionInput, context: __SerdeContext): any => {
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

const serializeAws_queryCreatePlatformApplicationInput = (
  input: CreatePlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Platform != null) {
    entries["Platform"] = input.Platform;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreatePlatformEndpointInput = (
  input: CreatePlatformEndpointInput,
  context: __SerdeContext
): any => {
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
    const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateSMSSandboxPhoneNumberInput = (
  input: CreateSMSSandboxPhoneNumberInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.LanguageCode != null) {
    entries["LanguageCode"] = input.LanguageCode;
  }
  return entries;
};

const serializeAws_queryCreateTopicInput = (input: CreateTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryTopicAttributesMap(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryDelegatesList = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryDeleteEndpointInput = (input: DeleteEndpointInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

const serializeAws_queryDeletePlatformApplicationInput = (
  input: DeletePlatformApplicationInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_queryDeleteSMSSandboxPhoneNumberInput = (
  input: DeleteSMSSandboxPhoneNumberInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  return entries;
};

const serializeAws_queryDeleteTopicInput = (input: DeleteTopicInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryGetDataProtectionPolicyInput = (
  input: GetDataProtectionPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

const serializeAws_queryGetEndpointAttributesInput = (
  input: GetEndpointAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  return entries;
};

const serializeAws_queryGetPlatformApplicationAttributesInput = (
  input: GetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  return entries;
};

const serializeAws_queryGetSMSAttributesInput = (input: GetSMSAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.attributes != null) {
    const memberEntries = serializeAws_queryListString(input.attributes, context);
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

const serializeAws_queryGetSMSSandboxAccountStatusInput = (
  input: GetSMSSandboxAccountStatusInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryGetSubscriptionAttributesInput = (
  input: GetSubscriptionAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SubscriptionArn != null) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

const serializeAws_queryGetTopicAttributesInput = (input: GetTopicAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  return entries;
};

const serializeAws_queryListEndpointsByPlatformApplicationInput = (
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

const serializeAws_queryListOriginationNumbersRequest = (
  input: ListOriginationNumbersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryListPhoneNumbersOptedOutInput = (
  input: ListPhoneNumbersOptedOutInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.nextToken != null) {
    entries["nextToken"] = input.nextToken;
  }
  return entries;
};

const serializeAws_queryListPlatformApplicationsInput = (
  input: ListPlatformApplicationsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListSMSSandboxPhoneNumbersInput = (
  input: ListSMSSandboxPhoneNumbersInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryListString = (input: string[], context: __SerdeContext): any => {
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

const serializeAws_queryListSubscriptionsByTopicInput = (
  input: ListSubscriptionsByTopicInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListSubscriptionsInput = (input: ListSubscriptionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  return entries;
};

const serializeAws_queryListTopicsInput = (input: ListTopicsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryMapStringToString = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

const serializeAws_queryMessageAttributeMap = (
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

const serializeAws_queryMessageAttributeValue = (input: MessageAttributeValue, context: __SerdeContext): any => {
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

const serializeAws_queryOptInPhoneNumberInput = (input: OptInPhoneNumberInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.phoneNumber != null) {
    entries["phoneNumber"] = input.phoneNumber;
  }
  return entries;
};

const serializeAws_queryPublishBatchInput = (input: PublishBatchInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.PublishBatchRequestEntries != null) {
    const memberEntries = serializeAws_queryPublishBatchRequestEntryList(input.PublishBatchRequestEntries, context);
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

const serializeAws_queryPublishBatchRequestEntry = (input: PublishBatchRequestEntry, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryMessageAttributeMap(input.MessageAttributes, context);
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

const serializeAws_queryPublishBatchRequestEntryList = (
  input: PublishBatchRequestEntry[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryPublishBatchRequestEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryPublishInput = (input: PublishInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_queryMessageAttributeMap(input.MessageAttributes, context);
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

const serializeAws_queryPutDataProtectionPolicyInput = (
  input: PutDataProtectionPolicyInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.DataProtectionPolicy != null) {
    entries["DataProtectionPolicy"] = input.DataProtectionPolicy;
  }
  return entries;
};

const serializeAws_queryRemovePermissionInput = (input: RemovePermissionInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TopicArn != null) {
    entries["TopicArn"] = input.TopicArn;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  return entries;
};

const serializeAws_querySetEndpointAttributesInput = (
  input: SetEndpointAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndpointArn != null) {
    entries["EndpointArn"] = input.EndpointArn;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetPlatformApplicationAttributesInput = (
  input: SetPlatformApplicationAttributesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PlatformApplicationArn != null) {
    entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
  }
  if (input.Attributes != null) {
    const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSMSAttributesInput = (input: SetSMSAttributesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.attributes != null) {
    const memberEntries = serializeAws_queryMapStringToString(input.attributes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_querySetSubscriptionAttributesInput = (
  input: SetSubscriptionAttributesInput,
  context: __SerdeContext
): any => {
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

const serializeAws_querySetTopicAttributesInput = (input: SetTopicAttributesInput, context: __SerdeContext): any => {
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

const serializeAws_querySubscribeInput = (input: SubscribeInput, context: __SerdeContext): any => {
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
    const memberEntries = serializeAws_querySubscriptionAttributesMap(input.Attributes, context);
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

const serializeAws_querySubscriptionAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags != null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
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

const serializeAws_queryTopicAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key];
      counter++;
    });
  return entries;
};

const serializeAws_queryUnsubscribeInput = (input: UnsubscribeInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SubscriptionArn != null) {
    entries["SubscriptionArn"] = input.SubscriptionArn;
  }
  return entries;
};

const serializeAws_queryUntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceArn != null) {
    entries["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys != null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
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

const serializeAws_queryVerifySMSSandboxPhoneNumberInput = (
  input: VerifySMSSandboxPhoneNumberInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PhoneNumber != null) {
    entries["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.OneTimePassword != null) {
    entries["OneTimePassword"] = input.OneTimePassword;
  }
  return entries;
};

const deserializeAws_queryAuthorizationErrorException = (
  output: any,
  context: __SerdeContext
): AuthorizationErrorException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBatchEntryIdsNotDistinctException = (
  output: any,
  context: __SerdeContext
): BatchEntryIdsNotDistinctException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBatchRequestTooLongException = (
  output: any,
  context: __SerdeContext
): BatchRequestTooLongException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryBatchResultErrorEntry = (output: any, context: __SerdeContext): BatchResultErrorEntry => {
  const contents: any = {
    Id: undefined,
    Code: undefined,
    Message: undefined,
    SenderFault: undefined,
  };
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

const deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse = (
  output: any,
  context: __SerdeContext
): CheckIfPhoneNumberIsOptedOutResponse => {
  const contents: any = {
    isOptedOut: undefined,
  };
  if (output["isOptedOut"] !== undefined) {
    contents.isOptedOut = __parseBoolean(output["isOptedOut"]);
  }
  return contents;
};

const deserializeAws_queryConcurrentAccessException = (
  output: any,
  context: __SerdeContext
): ConcurrentAccessException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryConfirmSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): ConfirmSubscriptionResponse => {
  const contents: any = {
    SubscriptionArn: undefined,
  };
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
  }
  return contents;
};

const deserializeAws_queryCreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  const contents: any = {
    EndpointArn: undefined,
  };
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = __expectString(output["EndpointArn"]);
  }
  return contents;
};

const deserializeAws_queryCreatePlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreatePlatformApplicationResponse => {
  const contents: any = {
    PlatformApplicationArn: undefined,
  };
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
  }
  return contents;
};

const deserializeAws_queryCreateSMSSandboxPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): CreateSMSSandboxPhoneNumberResult => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryCreateTopicResponse = (output: any, context: __SerdeContext): CreateTopicResponse => {
  const contents: any = {
    TopicArn: undefined,
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  return contents;
};

const deserializeAws_queryDeleteSMSSandboxPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): DeleteSMSSandboxPhoneNumberResult => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryEmptyBatchRequestException = (
  output: any,
  context: __SerdeContext
): EmptyBatchRequestException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryEndpoint = (output: any, context: __SerdeContext): Endpoint => {
  const contents: any = {
    EndpointArn: undefined,
    Attributes: undefined,
  };
  if (output["EndpointArn"] !== undefined) {
    contents.EndpointArn = __expectString(output["EndpointArn"]);
  }
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEndpointDisabledException = (
  output: any,
  context: __SerdeContext
): EndpointDisabledException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryFilterPolicyLimitExceededException = (
  output: any,
  context: __SerdeContext
): FilterPolicyLimitExceededException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryGetDataProtectionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetDataProtectionPolicyResponse => {
  const contents: any = {
    DataProtectionPolicy: undefined,
  };
  if (output["DataProtectionPolicy"] !== undefined) {
    contents.DataProtectionPolicy = __expectString(output["DataProtectionPolicy"]);
  }
  return contents;
};

const deserializeAws_queryGetEndpointAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetEndpointAttributesResponse => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetPlatformApplicationAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetPlatformApplicationAttributesResponse => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetSMSAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetSMSAttributesResponse => {
  const contents: any = {
    attributes: undefined,
  };
  if (output.attributes === "") {
    contents.attributes = {};
  } else if (output["attributes"] !== undefined && output["attributes"]["entry"] !== undefined) {
    contents.attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetSMSSandboxAccountStatusResult = (
  output: any,
  context: __SerdeContext
): GetSMSSandboxAccountStatusResult => {
  const contents: any = {
    IsInSandbox: undefined,
  };
  if (output["IsInSandbox"] !== undefined) {
    contents.IsInSandbox = __parseBoolean(output["IsInSandbox"]);
  }
  return contents;
};

const deserializeAws_queryGetSubscriptionAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionAttributesResponse => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_querySubscriptionAttributesMap(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetTopicAttributesResponse = (
  output: any,
  context: __SerdeContext
): GetTopicAttributesResponse => {
  const contents: any = {
    Attributes: undefined,
  };
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_queryTopicAttributesMap(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryInternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidBatchEntryIdException = (
  output: any,
  context: __SerdeContext
): InvalidBatchEntryIdException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidSecurityException = (
  output: any,
  context: __SerdeContext
): InvalidSecurityException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSAccessDeniedException = (
  output: any,
  context: __SerdeContext
): KMSAccessDeniedException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSDisabledException = (output: any, context: __SerdeContext): KMSDisabledException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSInvalidStateException = (
  output: any,
  context: __SerdeContext
): KMSInvalidStateException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSNotFoundException = (output: any, context: __SerdeContext): KMSNotFoundException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSOptInRequired = (output: any, context: __SerdeContext): KMSOptInRequired => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryKMSThrottlingException = (output: any, context: __SerdeContext): KMSThrottlingException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryListEndpointsByPlatformApplicationResponse = (
  output: any,
  context: __SerdeContext
): ListEndpointsByPlatformApplicationResponse => {
  const contents: any = {
    Endpoints: undefined,
    NextToken: undefined,
  };
  if (output.Endpoints === "") {
    contents.Endpoints = [];
  } else if (output["Endpoints"] !== undefined && output["Endpoints"]["member"] !== undefined) {
    contents.Endpoints = deserializeAws_queryListOfEndpoints(
      __getArrayIfSingleItem(output["Endpoints"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListOfEndpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryEndpoint(entry, context);
    });
};

const deserializeAws_queryListOfPlatformApplications = (
  output: any,
  context: __SerdeContext
): PlatformApplication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPlatformApplication(entry, context);
    });
};

const deserializeAws_queryListOriginationNumbersResult = (
  output: any,
  context: __SerdeContext
): ListOriginationNumbersResult => {
  const contents: any = {
    NextToken: undefined,
    PhoneNumbers: undefined,
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.PhoneNumbers === "") {
    contents.PhoneNumbers = [];
  } else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
    contents.PhoneNumbers = deserializeAws_queryPhoneNumberInformationList(
      __getArrayIfSingleItem(output["PhoneNumbers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListPhoneNumbersOptedOutResponse = (
  output: any,
  context: __SerdeContext
): ListPhoneNumbersOptedOutResponse => {
  const contents: any = {
    phoneNumbers: undefined,
    nextToken: undefined,
  };
  if (output.phoneNumbers === "") {
    contents.phoneNumbers = [];
  } else if (output["phoneNumbers"] !== undefined && output["phoneNumbers"]["member"] !== undefined) {
    contents.phoneNumbers = deserializeAws_queryPhoneNumberList(
      __getArrayIfSingleItem(output["phoneNumbers"]["member"]),
      context
    );
  }
  if (output["nextToken"] !== undefined) {
    contents.nextToken = __expectString(output["nextToken"]);
  }
  return contents;
};

const deserializeAws_queryListPlatformApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListPlatformApplicationsResponse => {
  const contents: any = {
    PlatformApplications: undefined,
    NextToken: undefined,
  };
  if (output.PlatformApplications === "") {
    contents.PlatformApplications = [];
  } else if (output["PlatformApplications"] !== undefined && output["PlatformApplications"]["member"] !== undefined) {
    contents.PlatformApplications = deserializeAws_queryListOfPlatformApplications(
      __getArrayIfSingleItem(output["PlatformApplications"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListSMSSandboxPhoneNumbersResult = (
  output: any,
  context: __SerdeContext
): ListSMSSandboxPhoneNumbersResult => {
  const contents: any = {
    PhoneNumbers: undefined,
    NextToken: undefined,
  };
  if (output.PhoneNumbers === "") {
    contents.PhoneNumbers = [];
  } else if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
    contents.PhoneNumbers = deserializeAws_querySMSSandboxPhoneNumberList(
      __getArrayIfSingleItem(output["PhoneNumbers"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListSubscriptionsByTopicResponse = (
  output: any,
  context: __SerdeContext
): ListSubscriptionsByTopicResponse => {
  const contents: any = {
    Subscriptions: undefined,
    NextToken: undefined,
  };
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  } else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
    contents.Subscriptions = deserializeAws_querySubscriptionsList(
      __getArrayIfSingleItem(output["Subscriptions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListSubscriptionsResponse = (
  output: any,
  context: __SerdeContext
): ListSubscriptionsResponse => {
  const contents: any = {
    Subscriptions: undefined,
    NextToken: undefined,
  };
  if (output.Subscriptions === "") {
    contents.Subscriptions = [];
  } else if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
    contents.Subscriptions = deserializeAws_querySubscriptionsList(
      __getArrayIfSingleItem(output["Subscriptions"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  const contents: any = {
    Tags: undefined,
  };
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryListTopicsResponse = (output: any, context: __SerdeContext): ListTopicsResponse => {
  const contents: any = {
    Topics: undefined,
    NextToken: undefined,
  };
  if (output.Topics === "") {
    contents.Topics = [];
  } else if (output["Topics"] !== undefined && output["Topics"]["member"] !== undefined) {
    contents.Topics = deserializeAws_queryTopicsList(__getArrayIfSingleItem(output["Topics"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryMapStringToString = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryNotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryNumberCapabilityList = (
  output: any,
  context: __SerdeContext
): (NumberCapability | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryOptedOutException = (output: any, context: __SerdeContext): OptedOutException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryOptInPhoneNumberResponse = (
  output: any,
  context: __SerdeContext
): OptInPhoneNumberResponse => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryPhoneNumberInformation = (output: any, context: __SerdeContext): PhoneNumberInformation => {
  const contents: any = {
    CreatedAt: undefined,
    PhoneNumber: undefined,
    Status: undefined,
    Iso2CountryCode: undefined,
    RouteType: undefined,
    NumberCapabilities: undefined,
  };
  if (output["CreatedAt"] !== undefined) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTime(output["CreatedAt"]));
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
    contents.NumberCapabilities = deserializeAws_queryNumberCapabilityList(
      __getArrayIfSingleItem(output["NumberCapabilities"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPhoneNumberInformationList = (
  output: any,
  context: __SerdeContext
): PhoneNumberInformation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPhoneNumberInformation(entry, context);
    });
};

const deserializeAws_queryPhoneNumberList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryPlatformApplication = (output: any, context: __SerdeContext): PlatformApplication => {
  const contents: any = {
    PlatformApplicationArn: undefined,
    Attributes: undefined,
  };
  if (output["PlatformApplicationArn"] !== undefined) {
    contents.PlatformApplicationArn = __expectString(output["PlatformApplicationArn"]);
  }
  if (output.Attributes === "") {
    contents.Attributes = {};
  } else if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
    contents.Attributes = deserializeAws_queryMapStringToString(
      __getArrayIfSingleItem(output["Attributes"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPlatformApplicationDisabledException = (
  output: any,
  context: __SerdeContext
): PlatformApplicationDisabledException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryPublishBatchResponse = (output: any, context: __SerdeContext): PublishBatchResponse => {
  const contents: any = {
    Successful: undefined,
    Failed: undefined,
  };
  if (output.Successful === "") {
    contents.Successful = [];
  } else if (output["Successful"] !== undefined && output["Successful"]["member"] !== undefined) {
    contents.Successful = deserializeAws_queryPublishBatchResultEntryList(
      __getArrayIfSingleItem(output["Successful"]["member"]),
      context
    );
  }
  if (output.Failed === "") {
    contents.Failed = [];
  } else if (output["Failed"] !== undefined && output["Failed"]["member"] !== undefined) {
    contents.Failed = deserializeAws_queryBatchResultErrorEntryList(
      __getArrayIfSingleItem(output["Failed"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPublishBatchResultEntry = (output: any, context: __SerdeContext): PublishBatchResultEntry => {
  const contents: any = {
    Id: undefined,
    MessageId: undefined,
    SequenceNumber: undefined,
  };
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

const deserializeAws_queryPublishBatchResultEntryList = (
  output: any,
  context: __SerdeContext
): PublishBatchResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryPublishBatchResultEntry(entry, context);
    });
};

const deserializeAws_queryPublishResponse = (output: any, context: __SerdeContext): PublishResponse => {
  const contents: any = {
    MessageId: undefined,
    SequenceNumber: undefined,
  };
  if (output["MessageId"] !== undefined) {
    contents.MessageId = __expectString(output["MessageId"]);
  }
  if (output["SequenceNumber"] !== undefined) {
    contents.SequenceNumber = __expectString(output["SequenceNumber"]);
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySetSMSAttributesResponse = (
  output: any,
  context: __SerdeContext
): SetSMSAttributesResponse => {
  const contents: any = {};
  return contents;
};

const deserializeAws_querySMSSandboxPhoneNumber = (output: any, context: __SerdeContext): SMSSandboxPhoneNumber => {
  const contents: any = {
    PhoneNumber: undefined,
    Status: undefined,
  };
  if (output["PhoneNumber"] !== undefined) {
    contents.PhoneNumber = __expectString(output["PhoneNumber"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_querySMSSandboxPhoneNumberList = (
  output: any,
  context: __SerdeContext
): SMSSandboxPhoneNumber[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySMSSandboxPhoneNumber(entry, context);
    });
};

const deserializeAws_queryStaleTagException = (output: any, context: __SerdeContext): StaleTagException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscribeResponse = (output: any, context: __SerdeContext): SubscribeResponse => {
  const contents: any = {
    SubscriptionArn: undefined,
  };
  if (output["SubscriptionArn"] !== undefined) {
    contents.SubscriptionArn = __expectString(output["SubscriptionArn"]);
  }
  return contents;
};

const deserializeAws_querySubscription = (output: any, context: __SerdeContext): Subscription => {
  const contents: any = {
    SubscriptionArn: undefined,
    Owner: undefined,
    Protocol: undefined,
    Endpoint: undefined,
    TopicArn: undefined,
  };
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

const deserializeAws_querySubscriptionAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_querySubscriptionLimitExceededException = (
  output: any,
  context: __SerdeContext
): SubscriptionLimitExceededException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_querySubscriptionsList = (output: any, context: __SerdeContext): Subscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_querySubscription(entry, context);
    });
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryThrottledException = (output: any, context: __SerdeContext): ThrottledException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTooManyEntriesInBatchRequestException = (
  output: any,
  context: __SerdeContext
): TooManyEntriesInBatchRequestException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTopic = (output: any, context: __SerdeContext): Topic => {
  const contents: any = {
    TopicArn: undefined,
  };
  if (output["TopicArn"] !== undefined) {
    contents.TopicArn = __expectString(output["TopicArn"]);
  }
  return contents;
};

const deserializeAws_queryTopicAttributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

const deserializeAws_queryTopicLimitExceededException = (
  output: any,
  context: __SerdeContext
): TopicLimitExceededException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryTopicsList = (output: any, context: __SerdeContext): Topic[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return deserializeAws_queryTopic(entry, context);
    });
};

const deserializeAws_queryUntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  const contents: any = {};
  return contents;
};

const deserializeAws_queryUserErrorException = (output: any, context: __SerdeContext): UserErrorException => {
  const contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryValidationException = (output: any, context: __SerdeContext): ValidationException => {
  const contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryVerificationException = (output: any, context: __SerdeContext): VerificationException => {
  const contents: any = {
    Message: undefined,
    Status: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  return contents;
};

const deserializeAws_queryVerifySMSSandboxPhoneNumberResult = (
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
