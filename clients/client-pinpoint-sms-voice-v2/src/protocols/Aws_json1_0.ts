// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
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

import {
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "../commands/AssociateOriginationIdentityCommand";
import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateEventDestinationCommandInput,
  CreateEventDestinationCommandOutput,
} from "../commands/CreateEventDestinationCommand";
import { CreateOptOutListCommandInput, CreateOptOutListCommandOutput } from "../commands/CreateOptOutListCommand";
import { CreatePoolCommandInput, CreatePoolCommandOutput } from "../commands/CreatePoolCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteDefaultMessageTypeCommandInput,
  DeleteDefaultMessageTypeCommandOutput,
} from "../commands/DeleteDefaultMessageTypeCommand";
import {
  DeleteDefaultSenderIdCommandInput,
  DeleteDefaultSenderIdCommandOutput,
} from "../commands/DeleteDefaultSenderIdCommand";
import {
  DeleteEventDestinationCommandInput,
  DeleteEventDestinationCommandOutput,
} from "../commands/DeleteEventDestinationCommand";
import { DeleteKeywordCommandInput, DeleteKeywordCommandOutput } from "../commands/DeleteKeywordCommand";
import {
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "../commands/DeleteOptedOutNumberCommand";
import { DeleteOptOutListCommandInput, DeleteOptOutListCommandOutput } from "../commands/DeleteOptOutListCommand";
import { DeletePoolCommandInput, DeletePoolCommandOutput } from "../commands/DeletePoolCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "../commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVoiceMessageSpendLimitOverrideCommandInput,
  DeleteVoiceMessageSpendLimitOverrideCommandOutput,
} from "../commands/DeleteVoiceMessageSpendLimitOverrideCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import {
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
} from "../commands/DescribeConfigurationSetsCommand";
import { DescribeKeywordsCommandInput, DescribeKeywordsCommandOutput } from "../commands/DescribeKeywordsCommand";
import {
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
} from "../commands/DescribeOptedOutNumbersCommand";
import {
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "../commands/DescribeOptOutListsCommand";
import {
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "../commands/DescribePhoneNumbersCommand";
import { DescribePoolsCommandInput, DescribePoolsCommandOutput } from "../commands/DescribePoolsCommand";
import { DescribeSenderIdsCommandInput, DescribeSenderIdsCommandOutput } from "../commands/DescribeSenderIdsCommand";
import {
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "../commands/DescribeSpendLimitsCommand";
import {
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "../commands/DisassociateOriginationIdentityCommand";
import {
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "../commands/ListPoolOriginationIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutKeywordCommandInput, PutKeywordCommandOutput } from "../commands/PutKeywordCommand";
import { PutOptedOutNumberCommandInput, PutOptedOutNumberCommandOutput } from "../commands/PutOptedOutNumberCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "../commands/ReleasePhoneNumberCommand";
import { RequestPhoneNumberCommandInput, RequestPhoneNumberCommandOutput } from "../commands/RequestPhoneNumberCommand";
import { SendTextMessageCommandInput, SendTextMessageCommandOutput } from "../commands/SendTextMessageCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "../commands/SendVoiceMessageCommand";
import {
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "../commands/SetDefaultMessageTypeCommand";
import { SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput } from "../commands/SetDefaultSenderIdCommand";
import {
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "../commands/SetTextMessageSpendLimitOverrideCommand";
import {
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "../commands/SetVoiceMessageSpendLimitOverrideCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "../commands/UpdateEventDestinationCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import { UpdatePoolCommandInput, UpdatePoolCommandOutput } from "../commands/UpdatePoolCommand";
import {
  AccessDeniedException,
  AccountAttribute,
  AccountLimit,
  AssociateOriginationIdentityRequest,
  AssociateOriginationIdentityResult,
  CloudWatchLogsDestination,
  ConfigurationSetFilter,
  ConfigurationSetInformation,
  ConflictException,
  CreateConfigurationSetRequest,
  CreateConfigurationSetResult,
  CreateEventDestinationRequest,
  CreateEventDestinationResult,
  CreateOptOutListRequest,
  CreateOptOutListResult,
  CreatePoolRequest,
  CreatePoolResult,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResult,
  DeleteDefaultMessageTypeRequest,
  DeleteDefaultMessageTypeResult,
  DeleteDefaultSenderIdRequest,
  DeleteDefaultSenderIdResult,
  DeleteEventDestinationRequest,
  DeleteEventDestinationResult,
  DeleteKeywordRequest,
  DeleteKeywordResult,
  DeleteOptedOutNumberRequest,
  DeleteOptedOutNumberResult,
  DeleteOptOutListRequest,
  DeleteOptOutListResult,
  DeletePoolRequest,
  DeletePoolResult,
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteTextMessageSpendLimitOverrideResult,
  DeleteVoiceMessageSpendLimitOverrideRequest,
  DeleteVoiceMessageSpendLimitOverrideResult,
  DescribeAccountAttributesRequest,
  DescribeAccountAttributesResult,
  DescribeAccountLimitsRequest,
  DescribeAccountLimitsResult,
  DescribeConfigurationSetsRequest,
  DescribeConfigurationSetsResult,
  DescribeKeywordsRequest,
  DescribeKeywordsResult,
  DescribeOptedOutNumbersRequest,
  DescribeOptedOutNumbersResult,
  DescribeOptOutListsRequest,
  DescribeOptOutListsResult,
  DescribePhoneNumbersRequest,
  DescribePhoneNumbersResult,
  DescribePoolsRequest,
  DescribePoolsResult,
  DescribeSenderIdsRequest,
  DescribeSenderIdsResult,
  DescribeSpendLimitsRequest,
  DescribeSpendLimitsResult,
  DestinationCountryParameterKey,
  DisassociateOriginationIdentityRequest,
  DisassociateOriginationIdentityResult,
  EventDestination,
  EventType,
  InternalServerException,
  KeywordFilter,
  KeywordInformation,
  KinesisFirehoseDestination,
  ListPoolOriginationIdentitiesRequest,
  ListPoolOriginationIdentitiesResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  MessageType,
  NumberCapability,
  OptedOutFilter,
  OptedOutNumberInformation,
  OptOutListInformation,
  OriginationIdentityMetadata,
  PhoneNumberFilter,
  PhoneNumberInformation,
  PoolFilter,
  PoolInformation,
  PoolOriginationIdentitiesFilter,
  PutKeywordRequest,
  PutKeywordResult,
  PutOptedOutNumberRequest,
  PutOptedOutNumberResult,
  ReleasePhoneNumberRequest,
  ReleasePhoneNumberResult,
  RequestPhoneNumberRequest,
  RequestPhoneNumberResult,
  ResourceNotFoundException,
  SenderIdAndCountry,
  SenderIdFilter,
  SenderIdInformation,
  SendTextMessageRequest,
  SendTextMessageResult,
  SendVoiceMessageRequest,
  SendVoiceMessageResult,
  ServiceQuotaExceededException,
  SetDefaultMessageTypeRequest,
  SetDefaultMessageTypeResult,
  SetDefaultSenderIdRequest,
  SetDefaultSenderIdResult,
  SetTextMessageSpendLimitOverrideRequest,
  SetTextMessageSpendLimitOverrideResult,
  SetVoiceMessageSpendLimitOverrideRequest,
  SetVoiceMessageSpendLimitOverrideResult,
  SnsDestination,
  SpendLimit,
  Tag,
  TagResourceRequest,
  TagResourceResult,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResult,
  UpdateEventDestinationRequest,
  UpdateEventDestinationResult,
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResult,
  UpdatePoolRequest,
  UpdatePoolResult,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { PinpointSMSVoiceV2ServiceException as __BaseException } from "../models/PinpointSMSVoiceV2ServiceException";

/**
 * serializeAws_json1_0AssociateOriginationIdentityCommand
 */
export const se_AssociateOriginationIdentityCommand = async (
  input: AssociateOriginationIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateOriginationIdentity");
  let body: any;
  body = JSON.stringify(se_AssociateOriginationIdentityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConfigurationSet");
  let body: any;
  body = JSON.stringify(se_CreateConfigurationSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEventDestinationCommand
 */
export const se_CreateEventDestinationCommand = async (
  input: CreateEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEventDestination");
  let body: any;
  body = JSON.stringify(se_CreateEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateOptOutListCommand
 */
export const se_CreateOptOutListCommand = async (
  input: CreateOptOutListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOptOutList");
  let body: any;
  body = JSON.stringify(se_CreateOptOutListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePoolCommand
 */
export const se_CreatePoolCommand = async (
  input: CreatePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePool");
  let body: any;
  body = JSON.stringify(se_CreatePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConfigurationSet");
  let body: any;
  body = JSON.stringify(se_DeleteConfigurationSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDefaultMessageTypeCommand
 */
export const se_DeleteDefaultMessageTypeCommand = async (
  input: DeleteDefaultMessageTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDefaultMessageType");
  let body: any;
  body = JSON.stringify(se_DeleteDefaultMessageTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDefaultSenderIdCommand
 */
export const se_DeleteDefaultSenderIdCommand = async (
  input: DeleteDefaultSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDefaultSenderId");
  let body: any;
  body = JSON.stringify(se_DeleteDefaultSenderIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEventDestinationCommand
 */
export const se_DeleteEventDestinationCommand = async (
  input: DeleteEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventDestination");
  let body: any;
  body = JSON.stringify(se_DeleteEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteKeywordCommand
 */
export const se_DeleteKeywordCommand = async (
  input: DeleteKeywordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKeyword");
  let body: any;
  body = JSON.stringify(se_DeleteKeywordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteOptedOutNumberCommand
 */
export const se_DeleteOptedOutNumberCommand = async (
  input: DeleteOptedOutNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOptedOutNumber");
  let body: any;
  body = JSON.stringify(se_DeleteOptedOutNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteOptOutListCommand
 */
export const se_DeleteOptOutListCommand = async (
  input: DeleteOptOutListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOptOutList");
  let body: any;
  body = JSON.stringify(se_DeleteOptOutListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePoolCommand
 */
export const se_DeletePoolCommand = async (
  input: DeletePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePool");
  let body: any;
  body = JSON.stringify(se_DeletePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand
 */
export const se_DeleteTextMessageSpendLimitOverrideCommand = async (
  input: DeleteTextMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTextMessageSpendLimitOverride");
  let body: any;
  body = JSON.stringify(se_DeleteTextMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommand
 */
export const se_DeleteVoiceMessageSpendLimitOverrideCommand = async (
  input: DeleteVoiceMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVoiceMessageSpendLimitOverride");
  let body: any;
  body = JSON.stringify(se_DeleteVoiceMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountAttributes");
  let body: any;
  body = JSON.stringify(se_DescribeAccountAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeAccountLimitsCommand
 */
export const se_DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountLimits");
  let body: any;
  body = JSON.stringify(se_DescribeAccountLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeConfigurationSetsCommand
 */
export const se_DescribeConfigurationSetsCommand = async (
  input: DescribeConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationSets");
  let body: any;
  body = JSON.stringify(se_DescribeConfigurationSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeKeywordsCommand
 */
export const se_DescribeKeywordsCommand = async (
  input: DescribeKeywordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeKeywords");
  let body: any;
  body = JSON.stringify(se_DescribeKeywordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeOptedOutNumbersCommand
 */
export const se_DescribeOptedOutNumbersCommand = async (
  input: DescribeOptedOutNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOptedOutNumbers");
  let body: any;
  body = JSON.stringify(se_DescribeOptedOutNumbersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeOptOutListsCommand
 */
export const se_DescribeOptOutListsCommand = async (
  input: DescribeOptOutListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOptOutLists");
  let body: any;
  body = JSON.stringify(se_DescribeOptOutListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribePhoneNumbersCommand
 */
export const se_DescribePhoneNumbersCommand = async (
  input: DescribePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePhoneNumbers");
  let body: any;
  body = JSON.stringify(se_DescribePhoneNumbersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribePoolsCommand
 */
export const se_DescribePoolsCommand = async (
  input: DescribePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePools");
  let body: any;
  body = JSON.stringify(se_DescribePoolsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSenderIdsCommand
 */
export const se_DescribeSenderIdsCommand = async (
  input: DescribeSenderIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSenderIds");
  let body: any;
  body = JSON.stringify(se_DescribeSenderIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeSpendLimitsCommand
 */
export const se_DescribeSpendLimitsCommand = async (
  input: DescribeSpendLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSpendLimits");
  let body: any;
  body = JSON.stringify(se_DescribeSpendLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateOriginationIdentityCommand
 */
export const se_DisassociateOriginationIdentityCommand = async (
  input: DisassociateOriginationIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateOriginationIdentity");
  let body: any;
  body = JSON.stringify(se_DisassociateOriginationIdentityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPoolOriginationIdentitiesCommand
 */
export const se_ListPoolOriginationIdentitiesCommand = async (
  input: ListPoolOriginationIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPoolOriginationIdentities");
  let body: any;
  body = JSON.stringify(se_ListPoolOriginationIdentitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutKeywordCommand
 */
export const se_PutKeywordCommand = async (
  input: PutKeywordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutKeyword");
  let body: any;
  body = JSON.stringify(se_PutKeywordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutOptedOutNumberCommand
 */
export const se_PutOptedOutNumberCommand = async (
  input: PutOptedOutNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutOptedOutNumber");
  let body: any;
  body = JSON.stringify(se_PutOptedOutNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ReleasePhoneNumberCommand
 */
export const se_ReleasePhoneNumberCommand = async (
  input: ReleasePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReleasePhoneNumber");
  let body: any;
  body = JSON.stringify(se_ReleasePhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RequestPhoneNumberCommand
 */
export const se_RequestPhoneNumberCommand = async (
  input: RequestPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RequestPhoneNumber");
  let body: any;
  body = JSON.stringify(se_RequestPhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendTextMessageCommand
 */
export const se_SendTextMessageCommand = async (
  input: SendTextMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendTextMessage");
  let body: any;
  body = JSON.stringify(se_SendTextMessageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendVoiceMessageCommand
 */
export const se_SendVoiceMessageCommand = async (
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendVoiceMessage");
  let body: any;
  body = JSON.stringify(se_SendVoiceMessageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetDefaultMessageTypeCommand
 */
export const se_SetDefaultMessageTypeCommand = async (
  input: SetDefaultMessageTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetDefaultMessageType");
  let body: any;
  body = JSON.stringify(se_SetDefaultMessageTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetDefaultSenderIdCommand
 */
export const se_SetDefaultSenderIdCommand = async (
  input: SetDefaultSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetDefaultSenderId");
  let body: any;
  body = JSON.stringify(se_SetDefaultSenderIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetTextMessageSpendLimitOverrideCommand
 */
export const se_SetTextMessageSpendLimitOverrideCommand = async (
  input: SetTextMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetTextMessageSpendLimitOverride");
  let body: any;
  body = JSON.stringify(se_SetTextMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand
 */
export const se_SetVoiceMessageSpendLimitOverrideCommand = async (
  input: SetVoiceMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetVoiceMessageSpendLimitOverride");
  let body: any;
  body = JSON.stringify(se_SetVoiceMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEventDestinationCommand
 */
export const se_UpdateEventDestinationCommand = async (
  input: UpdateEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEventDestination");
  let body: any;
  body = JSON.stringify(se_UpdateEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePhoneNumberCommand
 */
export const se_UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePhoneNumber");
  let body: any;
  body = JSON.stringify(se_UpdatePhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePoolCommand
 */
export const se_UpdatePoolCommand = async (
  input: UpdatePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePool");
  let body: any;
  body = JSON.stringify(se_UpdatePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateOriginationIdentityCommand
 */
export const de_AssociateOriginationIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOriginationIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateOriginationIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateOriginationIdentityResult(data, context);
  const response: AssociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0AssociateOriginationIdentityCommandError
 */
const de_AssociateOriginationIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOriginationIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConfigurationSetResult(data, context);
  const response: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateConfigurationSetCommandError
 */
const de_CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0CreateEventDestinationCommand
 */
export const de_CreateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventDestinationResult(data, context);
  const response: CreateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateEventDestinationCommandError
 */
const de_CreateEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0CreateOptOutListCommand
 */
export const de_CreateOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOptOutListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOptOutListResult(data, context);
  const response: CreateOptOutListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateOptOutListCommandError
 */
const de_CreateOptOutListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptOutListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0CreatePoolCommand
 */
export const de_CreatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePoolResult(data, context);
  const response: CreatePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreatePoolCommandError
 */
const de_CreatePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConfigurationSetResult(data, context);
  const response: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteConfigurationSetCommandError
 */
const de_DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteDefaultMessageTypeCommand
 */
export const de_DeleteDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDefaultMessageTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDefaultMessageTypeResult(data, context);
  const response: DeleteDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteDefaultMessageTypeCommandError
 */
const de_DeleteDefaultMessageTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultMessageTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteDefaultSenderIdCommand
 */
export const de_DeleteDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDefaultSenderIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDefaultSenderIdResult(data, context);
  const response: DeleteDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteDefaultSenderIdCommandError
 */
const de_DeleteDefaultSenderIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultSenderIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteEventDestinationCommand
 */
export const de_DeleteEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventDestinationResult(data, context);
  const response: DeleteEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteEventDestinationCommandError
 */
const de_DeleteEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteKeywordCommand
 */
export const de_DeleteKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteKeywordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteKeywordResult(data, context);
  const response: DeleteKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteKeywordCommandError
 */
const de_DeleteKeywordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeywordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteOptedOutNumberCommand
 */
export const de_DeleteOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOptedOutNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteOptedOutNumberResult(data, context);
  const response: DeleteOptedOutNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteOptedOutNumberCommandError
 */
const de_DeleteOptedOutNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptedOutNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteOptOutListCommand
 */
export const de_DeleteOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOptOutListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteOptOutListResult(data, context);
  const response: DeleteOptOutListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteOptOutListCommandError
 */
const de_DeleteOptOutListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptOutListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeletePoolCommand
 */
export const de_DeletePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePoolResult(data, context);
  const response: DeletePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeletePoolCommandError
 */
const de_DeletePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand
 */
export const de_DeleteTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTextMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTextMessageSpendLimitOverrideResult(data, context);
  const response: DeleteTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommandError
 */
const de_DeleteTextMessageSpendLimitOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommand
 */
export const de_DeleteVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVoiceMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVoiceMessageSpendLimitOverrideResult(data, context);
  const response: DeleteVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommandError
 */
const de_DeleteVoiceMessageSpendLimitOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAttributesResult(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountLimitsResult(data, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeAccountLimitsCommandError
 */
const de_DescribeAccountLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeConfigurationSetsCommand
 */
export const de_DescribeConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConfigurationSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConfigurationSetsResult(data, context);
  const response: DescribeConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeConfigurationSetsCommandError
 */
const de_DescribeConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeKeywordsCommand
 */
export const de_DescribeKeywordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeywordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeKeywordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeKeywordsResult(data, context);
  const response: DescribeKeywordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeKeywordsCommandError
 */
const de_DescribeKeywordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeywordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeOptedOutNumbersCommand
 */
export const de_DescribeOptedOutNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptedOutNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOptedOutNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOptedOutNumbersResult(data, context);
  const response: DescribeOptedOutNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeOptedOutNumbersCommandError
 */
const de_DescribeOptedOutNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptedOutNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeOptOutListsCommand
 */
export const de_DescribeOptOutListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptOutListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOptOutListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOptOutListsResult(data, context);
  const response: DescribeOptOutListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeOptOutListsCommandError
 */
const de_DescribeOptOutListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptOutListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribePhoneNumbersCommand
 */
export const de_DescribePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePhoneNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePhoneNumbersResult(data, context);
  const response: DescribePhoneNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribePhoneNumbersCommandError
 */
const de_DescribePhoneNumbersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumbersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribePoolsCommand
 */
export const de_DescribePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePoolsResult(data, context);
  const response: DescribePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribePoolsCommandError
 */
const de_DescribePoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeSenderIdsCommand
 */
export const de_DescribeSenderIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSenderIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSenderIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSenderIdsResult(data, context);
  const response: DescribeSenderIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeSenderIdsCommandError
 */
const de_DescribeSenderIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSenderIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DescribeSpendLimitsCommand
 */
export const de_DescribeSpendLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpendLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSpendLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSpendLimitsResult(data, context);
  const response: DescribeSpendLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeSpendLimitsCommandError
 */
const de_DescribeSpendLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpendLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0DisassociateOriginationIdentityCommand
 */
export const de_DisassociateOriginationIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOriginationIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateOriginationIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateOriginationIdentityResult(data, context);
  const response: DisassociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DisassociateOriginationIdentityCommandError
 */
const de_DisassociateOriginationIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOriginationIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0ListPoolOriginationIdentitiesCommand
 */
export const de_ListPoolOriginationIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoolOriginationIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoolOriginationIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoolOriginationIdentitiesResult(data, context);
  const response: ListPoolOriginationIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListPoolOriginationIdentitiesCommandError
 */
const de_ListPoolOriginationIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoolOriginationIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
  contents = de_ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0PutKeywordCommand
 */
export const de_PutKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutKeywordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutKeywordResult(data, context);
  const response: PutKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutKeywordCommandError
 */
const de_PutKeywordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeywordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0PutOptedOutNumberCommand
 */
export const de_PutOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutOptedOutNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutOptedOutNumberResult(data, context);
  const response: PutOptedOutNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PutOptedOutNumberCommandError
 */
const de_PutOptedOutNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOptedOutNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0ReleasePhoneNumberCommand
 */
export const de_ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReleasePhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReleasePhoneNumberResult(data, context);
  const response: ReleasePhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ReleasePhoneNumberCommandError
 */
const de_ReleasePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0RequestPhoneNumberCommand
 */
export const de_RequestPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RequestPhoneNumberResult(data, context);
  const response: RequestPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RequestPhoneNumberCommandError
 */
const de_RequestPhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestPhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SendTextMessageCommand
 */
export const de_SendTextMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTextMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendTextMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendTextMessageResult(data, context);
  const response: SendTextMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SendTextMessageCommandError
 */
const de_SendTextMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTextMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SendVoiceMessageCommand
 */
export const de_SendVoiceMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendVoiceMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendVoiceMessageResult(data, context);
  const response: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SendVoiceMessageCommandError
 */
const de_SendVoiceMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SetDefaultMessageTypeCommand
 */
export const de_SetDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetDefaultMessageTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetDefaultMessageTypeResult(data, context);
  const response: SetDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SetDefaultMessageTypeCommandError
 */
const de_SetDefaultMessageTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultMessageTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SetDefaultSenderIdCommand
 */
export const de_SetDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetDefaultSenderIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetDefaultSenderIdResult(data, context);
  const response: SetDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SetDefaultSenderIdCommandError
 */
const de_SetDefaultSenderIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultSenderIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommand
 */
export const de_SetTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTextMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetTextMessageSpendLimitOverrideResult(data, context);
  const response: SetTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommandError
 */
const de_SetTextMessageSpendLimitOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTextMessageSpendLimitOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand
 */
export const de_SetVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetVoiceMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetVoiceMessageSpendLimitOverrideResult(data, context);
  const response: SetVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommandError
 */
const de_SetVoiceMessageSpendLimitOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
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
  contents = de_TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0UntagResourceCommand
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
  contents = de_UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0UpdateEventDestinationCommand
 */
export const de_UpdateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEventDestinationResult(data, context);
  const response: UpdateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateEventDestinationCommandError
 */
const de_UpdateEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePhoneNumberResult(data, context);
  const response: UpdatePhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdatePhoneNumberCommandError
 */
const de_UpdatePhoneNumberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0UpdatePoolCommand
 */
export const de_UpdatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePoolResult(data, context);
  const response: UpdatePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdatePoolCommandError
 */
const de_UpdatePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.pinpointsmsvoicev2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
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
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
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
 * serializeAws_json1_0AssociateOriginationIdentityRequest
 */
const se_AssociateOriginationIdentityRequest = (
  input: AssociateOriginationIdentityRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

/**
 * serializeAws_json1_0CloudWatchLogsDestination
 */
const se_CloudWatchLogsDestination = (input: CloudWatchLogsDestination, context: __SerdeContext): any => {
  return {
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
  };
};

/**
 * serializeAws_json1_0ConfigurationSetFilter
 */
const se_ConfigurationSetFilter = (input: ConfigurationSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0ConfigurationSetFilterList
 */
const se_ConfigurationSetFilterList = (input: ConfigurationSetFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfigurationSetFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0ConfigurationSetNameList
 */
const se_ConfigurationSetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ContextMap
 */
const se_ContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0CreateConfigurationSetRequest
 */
const se_CreateConfigurationSetRequest = (input: CreateConfigurationSetRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateEventDestinationRequest
 */
const se_CreateEventDestinationRequest = (input: CreateEventDestinationRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CloudWatchLogsDestination != null && {
      CloudWatchLogsDestination: se_CloudWatchLogsDestination(input.CloudWatchLogsDestination, context),
    }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
    }),
    ...(input.MatchingEventTypes != null && {
      MatchingEventTypes: se_EventTypeList(input.MatchingEventTypes, context),
    }),
    ...(input.SnsDestination != null && { SnsDestination: se_SnsDestination(input.SnsDestination, context) }),
  };
};

/**
 * serializeAws_json1_0CreateOptOutListRequest
 */
const se_CreateOptOutListRequest = (input: CreateOptOutListRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreatePoolRequest
 */
const se_CreatePoolRequest = (input: CreatePoolRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0DeleteConfigurationSetRequest
 */
const se_DeleteConfigurationSetRequest = (input: DeleteConfigurationSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

/**
 * serializeAws_json1_0DeleteDefaultMessageTypeRequest
 */
const se_DeleteDefaultMessageTypeRequest = (input: DeleteDefaultMessageTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

/**
 * serializeAws_json1_0DeleteDefaultSenderIdRequest
 */
const se_DeleteDefaultSenderIdRequest = (input: DeleteDefaultSenderIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

/**
 * serializeAws_json1_0DeleteEventDestinationRequest
 */
const se_DeleteEventDestinationRequest = (input: DeleteEventDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
  };
};

/**
 * serializeAws_json1_0DeleteKeywordRequest
 */
const se_DeleteKeywordRequest = (input: DeleteKeywordRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

/**
 * serializeAws_json1_0DeleteOptedOutNumberRequest
 */
const se_DeleteOptedOutNumberRequest = (input: DeleteOptedOutNumberRequest, context: __SerdeContext): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumber != null && { OptedOutNumber: input.OptedOutNumber }),
  };
};

/**
 * serializeAws_json1_0DeleteOptOutListRequest
 */
const se_DeleteOptOutListRequest = (input: DeleteOptOutListRequest, context: __SerdeContext): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
  };
};

/**
 * serializeAws_json1_0DeletePoolRequest
 */
const se_DeletePoolRequest = (input: DeletePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

/**
 * serializeAws_json1_0DeleteTextMessageSpendLimitOverrideRequest
 */
const se_DeleteTextMessageSpendLimitOverrideRequest = (
  input: DeleteTextMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideRequest
 */
const se_DeleteVoiceMessageSpendLimitOverrideRequest = (
  input: DeleteVoiceMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_0DescribeAccountAttributesRequest
 */
const se_DescribeAccountAttributesRequest = (input: DescribeAccountAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0DescribeAccountLimitsRequest
 */
const se_DescribeAccountLimitsRequest = (input: DescribeAccountLimitsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0DescribeConfigurationSetsRequest
 */
const se_DescribeConfigurationSetsRequest = (input: DescribeConfigurationSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetNames != null && {
      ConfigurationSetNames: se_ConfigurationSetNameList(input.ConfigurationSetNames, context),
    }),
    ...(input.Filters != null && { Filters: se_ConfigurationSetFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0DescribeKeywordsRequest
 */
const se_DescribeKeywordsRequest = (input: DescribeKeywordsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_KeywordFilterList(input.Filters, context) }),
    ...(input.Keywords != null && { Keywords: se_KeywordList(input.Keywords, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

/**
 * serializeAws_json1_0DescribeOptedOutNumbersRequest
 */
const se_DescribeOptedOutNumbersRequest = (input: DescribeOptedOutNumbersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_OptedOutFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumbers != null && { OptedOutNumbers: se_OptedOutNumberList(input.OptedOutNumbers, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeOptOutListsRequest
 */
const se_DescribeOptOutListsRequest = (input: DescribeOptOutListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OptOutListNames != null && { OptOutListNames: se_OptOutListNameList(input.OptOutListNames, context) }),
  };
};

/**
 * serializeAws_json1_0DescribePhoneNumbersRequest
 */
const se_DescribePhoneNumbersRequest = (input: DescribePhoneNumbersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PhoneNumberFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PhoneNumberIds != null && { PhoneNumberIds: se_PhoneNumberIdList(input.PhoneNumberIds, context) }),
  };
};

/**
 * serializeAws_json1_0DescribePoolsRequest
 */
const se_DescribePoolsRequest = (input: DescribePoolsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_PoolFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PoolIds != null && { PoolIds: se_PoolIdList(input.PoolIds, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeSenderIdsRequest
 */
const se_DescribeSenderIdsRequest = (input: DescribeSenderIdsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_SenderIdFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SenderIds != null && { SenderIds: se_SenderIdList(input.SenderIds, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeSpendLimitsRequest
 */
const se_DescribeSpendLimitsRequest = (input: DescribeSpendLimitsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0DestinationCountryParameters
 */
const se_DestinationCountryParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [DestinationCountryParameterKey | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_0DisassociateOriginationIdentityRequest
 */
const se_DisassociateOriginationIdentityRequest = (
  input: DisassociateOriginationIdentityRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

/**
 * serializeAws_json1_0EventTypeList
 */
const se_EventTypeList = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0FilterValueList
 */
const se_FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0KeywordFilter
 */
const se_KeywordFilter = (input: KeywordFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0KeywordFilterList
 */
const se_KeywordFilterList = (input: KeywordFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_KeywordFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0KeywordList
 */
const se_KeywordList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0KinesisFirehoseDestination
 */
const se_KinesisFirehoseDestination = (input: KinesisFirehoseDestination, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStreamArn != null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

/**
 * serializeAws_json1_0ListPoolOriginationIdentitiesRequest
 */
const se_ListPoolOriginationIdentitiesRequest = (
  input: ListPoolOriginationIdentitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_PoolOriginationIdentitiesFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0NonEmptyTagList
 */
const se_NonEmptyTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0NumberCapabilityList
 */
const se_NumberCapabilityList = (input: (NumberCapability | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0OptedOutFilter
 */
const se_OptedOutFilter = (input: OptedOutFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0OptedOutFilterList
 */
const se_OptedOutFilterList = (input: OptedOutFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OptedOutFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0OptedOutNumberList
 */
const se_OptedOutNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0OptOutListNameList
 */
const se_OptOutListNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0PhoneNumberFilter
 */
const se_PhoneNumberFilter = (input: PhoneNumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0PhoneNumberFilterList
 */
const se_PhoneNumberFilterList = (input: PhoneNumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PhoneNumberFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0PhoneNumberIdList
 */
const se_PhoneNumberIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0PoolFilter
 */
const se_PoolFilter = (input: PoolFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0PoolFilterList
 */
const se_PoolFilterList = (input: PoolFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PoolFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0PoolIdList
 */
const se_PoolIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0PoolOriginationIdentitiesFilter
 */
const se_PoolOriginationIdentitiesFilter = (input: PoolOriginationIdentitiesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0PoolOriginationIdentitiesFilterList
 */
const se_PoolOriginationIdentitiesFilterList = (
  input: PoolOriginationIdentitiesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PoolOriginationIdentitiesFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0PutKeywordRequest
 */
const se_PutKeywordRequest = (input: PutKeywordRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.KeywordAction != null && { KeywordAction: input.KeywordAction }),
    ...(input.KeywordMessage != null && { KeywordMessage: input.KeywordMessage }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

/**
 * serializeAws_json1_0PutOptedOutNumberRequest
 */
const se_PutOptedOutNumberRequest = (input: PutOptedOutNumberRequest, context: __SerdeContext): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumber != null && { OptedOutNumber: input.OptedOutNumber }),
  };
};

/**
 * serializeAws_json1_0ReleasePhoneNumberRequest
 */
const se_ReleasePhoneNumberRequest = (input: ReleasePhoneNumberRequest, context: __SerdeContext): any => {
  return {
    ...(input.PhoneNumberId != null && { PhoneNumberId: input.PhoneNumberId }),
  };
};

/**
 * serializeAws_json1_0RequestPhoneNumberRequest
 */
const se_RequestPhoneNumberRequest = (input: RequestPhoneNumberRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.NumberCapabilities != null && {
      NumberCapabilities: se_NumberCapabilityList(input.NumberCapabilities, context),
    }),
    ...(input.NumberType != null && { NumberType: input.NumberType }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.RegistrationId != null && { RegistrationId: input.RegistrationId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0SenderIdAndCountry
 */
const se_SenderIdAndCountry = (input: SenderIdAndCountry, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
  };
};

/**
 * serializeAws_json1_0SenderIdFilter
 */
const se_SenderIdFilter = (input: SenderIdFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_0SenderIdFilterList
 */
const se_SenderIdFilterList = (input: SenderIdFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SenderIdFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0SenderIdList
 */
const se_SenderIdList = (input: SenderIdAndCountry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SenderIdAndCountry(entry, context);
    });
};

/**
 * serializeAws_json1_0SendTextMessageRequest
 */
const se_SendTextMessageRequest = (input: SendTextMessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Context != null && { Context: se_ContextMap(input.Context, context) }),
    ...(input.DestinationCountryParameters != null && {
      DestinationCountryParameters: se_DestinationCountryParameters(input.DestinationCountryParameters, context),
    }),
    ...(input.DestinationPhoneNumber != null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.MaxPrice != null && { MaxPrice: input.MaxPrice }),
    ...(input.MessageBody != null && { MessageBody: input.MessageBody }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
  };
};

/**
 * serializeAws_json1_0SendVoiceMessageRequest
 */
const se_SendVoiceMessageRequest = (input: SendVoiceMessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Context != null && { Context: se_ContextMap(input.Context, context) }),
    ...(input.DestinationPhoneNumber != null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.MaxPricePerMinute != null && { MaxPricePerMinute: input.MaxPricePerMinute }),
    ...(input.MessageBody != null && { MessageBody: input.MessageBody }),
    ...(input.MessageBodyTextType != null && { MessageBodyTextType: input.MessageBodyTextType }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  };
};

/**
 * serializeAws_json1_0SetDefaultMessageTypeRequest
 */
const se_SetDefaultMessageTypeRequest = (input: SetDefaultMessageTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
  };
};

/**
 * serializeAws_json1_0SetDefaultSenderIdRequest
 */
const se_SetDefaultSenderIdRequest = (input: SetDefaultSenderIdRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
  };
};

/**
 * serializeAws_json1_0SetTextMessageSpendLimitOverrideRequest
 */
const se_SetTextMessageSpendLimitOverrideRequest = (
  input: SetTextMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonthlyLimit != null && { MonthlyLimit: input.MonthlyLimit }),
  };
};

/**
 * serializeAws_json1_0SetVoiceMessageSpendLimitOverrideRequest
 */
const se_SetVoiceMessageSpendLimitOverrideRequest = (
  input: SetVoiceMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonthlyLimit != null && { MonthlyLimit: input.MonthlyLimit }),
  };
};

/**
 * serializeAws_json1_0SnsDestination
 */
const se_SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_NonEmptyTagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateEventDestinationRequest
 */
const se_UpdateEventDestinationRequest = (input: UpdateEventDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsDestination != null && {
      CloudWatchLogsDestination: se_CloudWatchLogsDestination(input.CloudWatchLogsDestination, context),
    }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: se_KinesisFirehoseDestination(input.KinesisFirehoseDestination, context),
    }),
    ...(input.MatchingEventTypes != null && {
      MatchingEventTypes: se_EventTypeList(input.MatchingEventTypes, context),
    }),
    ...(input.SnsDestination != null && { SnsDestination: se_SnsDestination(input.SnsDestination, context) }),
  };
};

/**
 * serializeAws_json1_0UpdatePhoneNumberRequest
 */
const se_UpdatePhoneNumberRequest = (input: UpdatePhoneNumberRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.PhoneNumberId != null && { PhoneNumberId: input.PhoneNumberId }),
    ...(input.SelfManagedOptOutsEnabled != null && { SelfManagedOptOutsEnabled: input.SelfManagedOptOutsEnabled }),
    ...(input.TwoWayChannelArn != null && { TwoWayChannelArn: input.TwoWayChannelArn }),
    ...(input.TwoWayEnabled != null && { TwoWayEnabled: input.TwoWayEnabled }),
  };
};

/**
 * serializeAws_json1_0UpdatePoolRequest
 */
const se_UpdatePoolRequest = (input: UpdatePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.SelfManagedOptOutsEnabled != null && { SelfManagedOptOutsEnabled: input.SelfManagedOptOutsEnabled }),
    ...(input.SharedRoutesEnabled != null && { SharedRoutesEnabled: input.SharedRoutesEnabled }),
    ...(input.TwoWayChannelArn != null && { TwoWayChannelArn: input.TwoWayChannelArn }),
    ...(input.TwoWayEnabled != null && { TwoWayEnabled: input.TwoWayEnabled }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_0AccountAttribute
 */
const de_AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0AccountAttributeList
 */
const de_AccountAttributeList = (output: any, context: __SerdeContext): AccountAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AccountLimit
 */
const de_AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  return {
    Max: __expectLong(output.Max),
    Name: __expectString(output.Name),
    Used: __expectLong(output.Used),
  } as any;
};

/**
 * deserializeAws_json1_0AccountLimitList
 */
const de_AccountLimitList = (output: any, context: __SerdeContext): AccountLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0AssociateOriginationIdentityResult
 */
const de_AssociateOriginationIdentityResult = (
  output: any,
  context: __SerdeContext
): AssociateOriginationIdentityResult => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
  } as any;
};

/**
 * deserializeAws_json1_0CloudWatchLogsDestination
 */
const de_CloudWatchLogsDestination = (output: any, context: __SerdeContext): CloudWatchLogsDestination => {
  return {
    IamRoleArn: __expectString(output.IamRoleArn),
    LogGroupArn: __expectString(output.LogGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_0ConfigurationSetInformation
 */
const de_ConfigurationSetInformation = (output: any, context: __SerdeContext): ConfigurationSetInformation => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DefaultMessageType: __expectString(output.DefaultMessageType),
    DefaultSenderId: __expectString(output.DefaultSenderId),
    EventDestinations:
      output.EventDestinations != null ? de_EventDestinationList(output.EventDestinations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ConfigurationSetInformationList
 */
const de_ConfigurationSetInformationList = (output: any, context: __SerdeContext): ConfigurationSetInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationSetInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_0CreateConfigurationSetResult
 */
const de_CreateConfigurationSetResult = (output: any, context: __SerdeContext): CreateConfigurationSetResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateEventDestinationResult
 */
const de_CreateEventDestinationResult = (output: any, context: __SerdeContext): CreateEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null ? de_EventDestination(output.EventDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateOptOutListResult
 */
const de_CreateOptOutListResult = (output: any, context: __SerdeContext): CreateOptOutListResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreatePoolResult
 */
const de_CreatePoolResult = (output: any, context: __SerdeContext): CreatePoolResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    MessageType: __expectString(output.MessageType),
    OptOutListName: __expectString(output.OptOutListName),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    SharedRoutesEnabled: __expectBoolean(output.SharedRoutesEnabled),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteConfigurationSetResult
 */
const de_DeleteConfigurationSetResult = (output: any, context: __SerdeContext): DeleteConfigurationSetResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DefaultMessageType: __expectString(output.DefaultMessageType),
    DefaultSenderId: __expectString(output.DefaultSenderId),
    EventDestinations:
      output.EventDestinations != null ? de_EventDestinationList(output.EventDestinations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteDefaultMessageTypeResult
 */
const de_DeleteDefaultMessageTypeResult = (output: any, context: __SerdeContext): DeleteDefaultMessageTypeResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    MessageType: __expectString(output.MessageType),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteDefaultSenderIdResult
 */
const de_DeleteDefaultSenderIdResult = (output: any, context: __SerdeContext): DeleteDefaultSenderIdResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    SenderId: __expectString(output.SenderId),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteEventDestinationResult
 */
const de_DeleteEventDestinationResult = (output: any, context: __SerdeContext): DeleteEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null ? de_EventDestination(output.EventDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteKeywordResult
 */
const de_DeleteKeywordResult = (output: any, context: __SerdeContext): DeleteKeywordResult => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteOptedOutNumberResult
 */
const de_DeleteOptedOutNumberResult = (output: any, context: __SerdeContext): DeleteOptedOutNumberResult => {
  return {
    EndUserOptedOut: __expectBoolean(output.EndUserOptedOut),
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    OptedOutNumber: __expectString(output.OptedOutNumber),
    OptedOutTimestamp:
      output.OptedOutTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OptedOutTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteOptOutListResult
 */
const de_DeleteOptOutListResult = (output: any, context: __SerdeContext): DeleteOptOutListResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
  } as any;
};

/**
 * deserializeAws_json1_0DeletePoolResult
 */
const de_DeletePoolResult = (output: any, context: __SerdeContext): DeletePoolResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    MessageType: __expectString(output.MessageType),
    OptOutListName: __expectString(output.OptOutListName),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    SharedRoutesEnabled: __expectBoolean(output.SharedRoutesEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideResult
 */
const de_DeleteTextMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): DeleteTextMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideResult
 */
const de_DeleteVoiceMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): DeleteVoiceMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeAccountAttributesResult
 */
const de_DescribeAccountAttributesResult = (output: any, context: __SerdeContext): DescribeAccountAttributesResult => {
  return {
    AccountAttributes:
      output.AccountAttributes != null ? de_AccountAttributeList(output.AccountAttributes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeAccountLimitsResult
 */
const de_DescribeAccountLimitsResult = (output: any, context: __SerdeContext): DescribeAccountLimitsResult => {
  return {
    AccountLimits: output.AccountLimits != null ? de_AccountLimitList(output.AccountLimits, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeConfigurationSetsResult
 */
const de_DescribeConfigurationSetsResult = (output: any, context: __SerdeContext): DescribeConfigurationSetsResult => {
  return {
    ConfigurationSets:
      output.ConfigurationSets != null
        ? de_ConfigurationSetInformationList(output.ConfigurationSets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeKeywordsResult
 */
const de_DescribeKeywordsResult = (output: any, context: __SerdeContext): DescribeKeywordsResult => {
  return {
    Keywords: output.Keywords != null ? de_KeywordInformationList(output.Keywords, context) : undefined,
    NextToken: __expectString(output.NextToken),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeOptedOutNumbersResult
 */
const de_DescribeOptedOutNumbersResult = (output: any, context: __SerdeContext): DescribeOptedOutNumbersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    OptedOutNumbers:
      output.OptedOutNumbers != null ? de_OptedOutNumberInformationList(output.OptedOutNumbers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeOptOutListsResult
 */
const de_DescribeOptOutListsResult = (output: any, context: __SerdeContext): DescribeOptOutListsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OptOutLists: output.OptOutLists != null ? de_OptOutListInformationList(output.OptOutLists, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribePhoneNumbersResult
 */
const de_DescribePhoneNumbersResult = (output: any, context: __SerdeContext): DescribePhoneNumbersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    PhoneNumbers: output.PhoneNumbers != null ? de_PhoneNumberInformationList(output.PhoneNumbers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribePoolsResult
 */
const de_DescribePoolsResult = (output: any, context: __SerdeContext): DescribePoolsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pools: output.Pools != null ? de_PoolInformationList(output.Pools, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeSenderIdsResult
 */
const de_DescribeSenderIdsResult = (output: any, context: __SerdeContext): DescribeSenderIdsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SenderIds: output.SenderIds != null ? de_SenderIdInformationList(output.SenderIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeSpendLimitsResult
 */
const de_DescribeSpendLimitsResult = (output: any, context: __SerdeContext): DescribeSpendLimitsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SpendLimits: output.SpendLimits != null ? de_SpendLimitList(output.SpendLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DisassociateOriginationIdentityResult
 */
const de_DisassociateOriginationIdentityResult = (
  output: any,
  context: __SerdeContext
): DisassociateOriginationIdentityResult => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
  } as any;
};

/**
 * deserializeAws_json1_0EventDestination
 */
const de_EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchLogsDestination:
      output.CloudWatchLogsDestination != null
        ? de_CloudWatchLogsDestination(output.CloudWatchLogsDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    EventDestinationName: __expectString(output.EventDestinationName),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination != null
        ? de_KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes != null ? de_EventTypeList(output.MatchingEventTypes, context) : undefined,
    SnsDestination: output.SnsDestination != null ? de_SnsDestination(output.SnsDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EventDestinationList
 */
const de_EventDestinationList = (output: any, context: __SerdeContext): EventDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EventTypeList
 */
const de_EventTypeList = (output: any, context: __SerdeContext): (EventType | string)[] => {
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
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_0KeywordInformation
 */
const de_KeywordInformation = (output: any, context: __SerdeContext): KeywordInformation => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
  } as any;
};

/**
 * deserializeAws_json1_0KeywordInformationList
 */
const de_KeywordInformationList = (output: any, context: __SerdeContext): KeywordInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeywordInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0KinesisFirehoseDestination
 */
const de_KinesisFirehoseDestination = (output: any, context: __SerdeContext): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_0ListPoolOriginationIdentitiesResult
 */
const de_ListPoolOriginationIdentitiesResult = (
  output: any,
  context: __SerdeContext
): ListPoolOriginationIdentitiesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OriginationIdentities:
      output.OriginationIdentities != null
        ? de_OriginationIdentityMetadataList(output.OriginationIdentities, context)
        : undefined,
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResult
 */
const de_ListTagsForResourceResult = (output: any, context: __SerdeContext): ListTagsForResourceResult => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MessageTypeList
 */
const de_MessageTypeList = (output: any, context: __SerdeContext): (MessageType | string)[] => {
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
 * deserializeAws_json1_0NumberCapabilityList
 */
const de_NumberCapabilityList = (output: any, context: __SerdeContext): (NumberCapability | string)[] => {
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
 * deserializeAws_json1_0OptedOutNumberInformation
 */
const de_OptedOutNumberInformation = (output: any, context: __SerdeContext): OptedOutNumberInformation => {
  return {
    EndUserOptedOut: __expectBoolean(output.EndUserOptedOut),
    OptedOutNumber: __expectString(output.OptedOutNumber),
    OptedOutTimestamp:
      output.OptedOutTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OptedOutTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0OptedOutNumberInformationList
 */
const de_OptedOutNumberInformationList = (output: any, context: __SerdeContext): OptedOutNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OptedOutNumberInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OptOutListInformation
 */
const de_OptOutListInformation = (output: any, context: __SerdeContext): OptOutListInformation => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
  } as any;
};

/**
 * deserializeAws_json1_0OptOutListInformationList
 */
const de_OptOutListInformationList = (output: any, context: __SerdeContext): OptOutListInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OptOutListInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OriginationIdentityMetadata
 */
const de_OriginationIdentityMetadata = (output: any, context: __SerdeContext): OriginationIdentityMetadata => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    NumberCapabilities:
      output.NumberCapabilities != null ? de_NumberCapabilityList(output.NumberCapabilities, context) : undefined,
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

/**
 * deserializeAws_json1_0OriginationIdentityMetadataList
 */
const de_OriginationIdentityMetadataList = (output: any, context: __SerdeContext): OriginationIdentityMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OriginationIdentityMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PhoneNumberInformation
 */
const de_PhoneNumberInformation = (output: any, context: __SerdeContext): PhoneNumberInformation => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageType: __expectString(output.MessageType),
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    NumberCapabilities:
      output.NumberCapabilities != null ? de_NumberCapabilityList(output.NumberCapabilities, context) : undefined,
    NumberType: __expectString(output.NumberType),
    OptOutListName: __expectString(output.OptOutListName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0PhoneNumberInformationList
 */
const de_PhoneNumberInformationList = (output: any, context: __SerdeContext): PhoneNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PhoneNumberInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PoolInformation
 */
const de_PoolInformation = (output: any, context: __SerdeContext): PoolInformation => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    MessageType: __expectString(output.MessageType),
    OptOutListName: __expectString(output.OptOutListName),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    SharedRoutesEnabled: __expectBoolean(output.SharedRoutesEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0PoolInformationList
 */
const de_PoolInformationList = (output: any, context: __SerdeContext): PoolInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PoolInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PutKeywordResult
 */
const de_PutKeywordResult = (output: any, context: __SerdeContext): PutKeywordResult => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

/**
 * deserializeAws_json1_0PutOptedOutNumberResult
 */
const de_PutOptedOutNumberResult = (output: any, context: __SerdeContext): PutOptedOutNumberResult => {
  return {
    EndUserOptedOut: __expectBoolean(output.EndUserOptedOut),
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    OptedOutNumber: __expectString(output.OptedOutNumber),
    OptedOutTimestamp:
      output.OptedOutTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OptedOutTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReleasePhoneNumberResult
 */
const de_ReleasePhoneNumberResult = (output: any, context: __SerdeContext): ReleasePhoneNumberResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageType: __expectString(output.MessageType),
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    NumberCapabilities:
      output.NumberCapabilities != null ? de_NumberCapabilityList(output.NumberCapabilities, context) : undefined,
    NumberType: __expectString(output.NumberType),
    OptOutListName: __expectString(output.OptOutListName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0RequestPhoneNumberResult
 */
const de_RequestPhoneNumberResult = (output: any, context: __SerdeContext): RequestPhoneNumberResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageType: __expectString(output.MessageType),
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    NumberCapabilities:
      output.NumberCapabilities != null ? de_NumberCapabilityList(output.NumberCapabilities, context) : undefined,
    NumberType: __expectString(output.NumberType),
    OptOutListName: __expectString(output.OptOutListName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_0SenderIdInformation
 */
const de_SenderIdInformation = (output: any, context: __SerdeContext): SenderIdInformation => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageTypes: output.MessageTypes != null ? de_MessageTypeList(output.MessageTypes, context) : undefined,
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    SenderId: __expectString(output.SenderId),
    SenderIdArn: __expectString(output.SenderIdArn),
  } as any;
};

/**
 * deserializeAws_json1_0SenderIdInformationList
 */
const de_SenderIdInformationList = (output: any, context: __SerdeContext): SenderIdInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SenderIdInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SendTextMessageResult
 */
const de_SendTextMessageResult = (output: any, context: __SerdeContext): SendTextMessageResult => {
  return {
    MessageId: __expectString(output.MessageId),
  } as any;
};

/**
 * deserializeAws_json1_0SendVoiceMessageResult
 */
const de_SendVoiceMessageResult = (output: any, context: __SerdeContext): SendVoiceMessageResult => {
  return {
    MessageId: __expectString(output.MessageId),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_0SetDefaultMessageTypeResult
 */
const de_SetDefaultMessageTypeResult = (output: any, context: __SerdeContext): SetDefaultMessageTypeResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    MessageType: __expectString(output.MessageType),
  } as any;
};

/**
 * deserializeAws_json1_0SetDefaultSenderIdResult
 */
const de_SetDefaultSenderIdResult = (output: any, context: __SerdeContext): SetDefaultSenderIdResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    SenderId: __expectString(output.SenderId),
  } as any;
};

/**
 * deserializeAws_json1_0SetTextMessageSpendLimitOverrideResult
 */
const de_SetTextMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): SetTextMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

/**
 * deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideResult
 */
const de_SetVoiceMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): SetVoiceMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

/**
 * deserializeAws_json1_0SnsDestination
 */
const de_SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

/**
 * deserializeAws_json1_0SpendLimit
 */
const de_SpendLimit = (output: any, context: __SerdeContext): SpendLimit => {
  return {
    EnforcedLimit: __expectLong(output.EnforcedLimit),
    MaxLimit: __expectLong(output.MaxLimit),
    Name: __expectString(output.Name),
    Overridden: __expectBoolean(output.Overridden),
  } as any;
};

/**
 * deserializeAws_json1_0SpendLimitList
 */
const de_SpendLimitList = (output: any, context: __SerdeContext): SpendLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SpendLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResult
 */
const de_TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResult
 */
const de_UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateEventDestinationResult
 */
const de_UpdateEventDestinationResult = (output: any, context: __SerdeContext): UpdateEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null ? de_EventDestination(output.EventDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdatePhoneNumberResult
 */
const de_UpdatePhoneNumberResult = (output: any, context: __SerdeContext): UpdatePhoneNumberResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageType: __expectString(output.MessageType),
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    NumberCapabilities:
      output.NumberCapabilities != null ? de_NumberCapabilityList(output.NumberCapabilities, context) : undefined,
    NumberType: __expectString(output.NumberType),
    OptOutListName: __expectString(output.OptOutListName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0UpdatePoolResult
 */
const de_UpdatePoolResult = (output: any, context: __SerdeContext): UpdatePoolResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    DeletionProtectionEnabled: __expectBoolean(output.DeletionProtectionEnabled),
    MessageType: __expectString(output.MessageType),
    OptOutListName: __expectString(output.OptOutListName),
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    SharedRoutesEnabled: __expectBoolean(output.SharedRoutesEnabled),
    Status: __expectString(output.Status),
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Fields: output.Fields != null ? de_ValidationExceptionFieldList(output.Fields, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `PinpointSMSVoiceV2.${operation}`,
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
