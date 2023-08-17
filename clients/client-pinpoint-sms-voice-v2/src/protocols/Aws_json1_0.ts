// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AssociateOriginationIdentityRequest,
  CloudWatchLogsDestination,
  ConfigurationSetFilter,
  ConfigurationSetInformation,
  ConflictException,
  CreateConfigurationSetRequest,
  CreateConfigurationSetResult,
  CreateEventDestinationRequest,
  CreateOptOutListRequest,
  CreateOptOutListResult,
  CreatePoolRequest,
  CreatePoolResult,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResult,
  DeleteDefaultMessageTypeRequest,
  DeleteDefaultSenderIdRequest,
  DeleteEventDestinationRequest,
  DeleteKeywordRequest,
  DeleteOptedOutNumberRequest,
  DeleteOptedOutNumberResult,
  DeleteOptOutListRequest,
  DeleteOptOutListResult,
  DeletePoolRequest,
  DeletePoolResult,
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteVoiceMessageSpendLimitOverrideRequest,
  DescribeAccountAttributesRequest,
  DescribeAccountLimitsRequest,
  DescribeConfigurationSetsRequest,
  DescribeConfigurationSetsResult,
  DescribeKeywordsRequest,
  DescribeOptedOutNumbersRequest,
  DescribeOptedOutNumbersResult,
  DescribeOptOutListsRequest,
  DescribeOptOutListsResult,
  DescribePhoneNumbersRequest,
  DescribePhoneNumbersResult,
  DescribePoolsRequest,
  DescribePoolsResult,
  DescribeSenderIdsRequest,
  DescribeSpendLimitsRequest,
  DisassociateOriginationIdentityRequest,
  EventType,
  InternalServerException,
  KeywordFilter,
  KinesisFirehoseDestination,
  ListPoolOriginationIdentitiesRequest,
  ListTagsForResourceRequest,
  NumberCapability,
  OptedOutFilter,
  OptedOutNumberInformation,
  OptOutListInformation,
  PhoneNumberFilter,
  PhoneNumberInformation,
  PoolFilter,
  PoolInformation,
  PoolOriginationIdentitiesFilter,
  PutKeywordRequest,
  PutOptedOutNumberRequest,
  PutOptedOutNumberResult,
  ReleasePhoneNumberRequest,
  ReleasePhoneNumberResult,
  RequestPhoneNumberRequest,
  RequestPhoneNumberResult,
  ResourceNotFoundException,
  SenderIdAndCountry,
  SenderIdFilter,
  SendTextMessageRequest,
  SendVoiceMessageRequest,
  ServiceQuotaExceededException,
  SetDefaultMessageTypeRequest,
  SetDefaultSenderIdRequest,
  SetTextMessageSpendLimitOverrideRequest,
  SetVoiceMessageSpendLimitOverrideRequest,
  SnsDestination,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateEventDestinationRequest,
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResult,
  UpdatePoolRequest,
  UpdatePoolResult,
  ValidationException,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeKeywordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeSenderIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeSpendLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPoolOriginationIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendTextMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IsoCountryCode: [],
    OriginationIdentity: [],
    PoolId: [],
  });
};

// se_CloudWatchLogsDestination omitted.

// se_ConfigurationSetFilter omitted.

// se_ConfigurationSetFilterList omitted.

// se_ConfigurationSetNameList omitted.

// se_ContextMap omitted.

/**
 * serializeAws_json1_0CreateConfigurationSetRequest
 */
const se_CreateConfigurationSetRequest = (input: CreateConfigurationSetRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ConfigurationSetName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateEventDestinationRequest
 */
const se_CreateEventDestinationRequest = (input: CreateEventDestinationRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CloudWatchLogsDestination: _json,
    ConfigurationSetName: [],
    EventDestinationName: [],
    KinesisFirehoseDestination: _json,
    MatchingEventTypes: _json,
    SnsDestination: _json,
  });
};

/**
 * serializeAws_json1_0CreateOptOutListRequest
 */
const se_CreateOptOutListRequest = (input: CreateOptOutListRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    OptOutListName: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreatePoolRequest
 */
const se_CreatePoolRequest = (input: CreatePoolRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeletionProtectionEnabled: [],
    IsoCountryCode: [],
    MessageType: [],
    OriginationIdentity: [],
    Tags: _json,
  });
};

// se_DeleteConfigurationSetRequest omitted.

// se_DeleteDefaultMessageTypeRequest omitted.

// se_DeleteDefaultSenderIdRequest omitted.

// se_DeleteEventDestinationRequest omitted.

// se_DeleteKeywordRequest omitted.

// se_DeleteOptedOutNumberRequest omitted.

// se_DeleteOptOutListRequest omitted.

// se_DeletePoolRequest omitted.

// se_DeleteTextMessageSpendLimitOverrideRequest omitted.

// se_DeleteVoiceMessageSpendLimitOverrideRequest omitted.

// se_DescribeAccountAttributesRequest omitted.

// se_DescribeAccountLimitsRequest omitted.

// se_DescribeConfigurationSetsRequest omitted.

// se_DescribeKeywordsRequest omitted.

// se_DescribeOptedOutNumbersRequest omitted.

// se_DescribeOptOutListsRequest omitted.

// se_DescribePhoneNumbersRequest omitted.

// se_DescribePoolsRequest omitted.

// se_DescribeSenderIdsRequest omitted.

// se_DescribeSpendLimitsRequest omitted.

// se_DestinationCountryParameters omitted.

/**
 * serializeAws_json1_0DisassociateOriginationIdentityRequest
 */
const se_DisassociateOriginationIdentityRequest = (
  input: DisassociateOriginationIdentityRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IsoCountryCode: [],
    OriginationIdentity: [],
    PoolId: [],
  });
};

// se_EventTypeList omitted.

// se_FilterValueList omitted.

// se_KeywordFilter omitted.

// se_KeywordFilterList omitted.

// se_KeywordList omitted.

// se_KinesisFirehoseDestination omitted.

// se_ListPoolOriginationIdentitiesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_NonEmptyTagList omitted.

// se_NumberCapabilityList omitted.

// se_OptedOutFilter omitted.

// se_OptedOutFilterList omitted.

// se_OptedOutNumberList omitted.

// se_OptOutListNameList omitted.

// se_PhoneNumberFilter omitted.

// se_PhoneNumberFilterList omitted.

// se_PhoneNumberIdList omitted.

// se_PoolFilter omitted.

// se_PoolFilterList omitted.

// se_PoolIdList omitted.

// se_PoolOriginationIdentitiesFilter omitted.

// se_PoolOriginationIdentitiesFilterList omitted.

// se_PutKeywordRequest omitted.

// se_PutOptedOutNumberRequest omitted.

// se_ReleasePhoneNumberRequest omitted.

/**
 * serializeAws_json1_0RequestPhoneNumberRequest
 */
const se_RequestPhoneNumberRequest = (input: RequestPhoneNumberRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeletionProtectionEnabled: [],
    IsoCountryCode: [],
    MessageType: [],
    NumberCapabilities: _json,
    NumberType: [],
    OptOutListName: [],
    PoolId: [],
    RegistrationId: [],
    Tags: _json,
  });
};

// se_SenderIdAndCountry omitted.

// se_SenderIdFilter omitted.

// se_SenderIdFilterList omitted.

// se_SenderIdList omitted.

// se_SendTextMessageRequest omitted.

// se_SendVoiceMessageRequest omitted.

// se_SetDefaultMessageTypeRequest omitted.

// se_SetDefaultSenderIdRequest omitted.

// se_SetTextMessageSpendLimitOverrideRequest omitted.

// se_SetVoiceMessageSpendLimitOverrideRequest omitted.

// se_SnsDestination omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateEventDestinationRequest omitted.

// se_UpdatePhoneNumberRequest omitted.

// se_UpdatePoolRequest omitted.

// de_AccessDeniedException omitted.

// de_AccountAttribute omitted.

// de_AccountAttributeList omitted.

// de_AccountLimit omitted.

// de_AccountLimitList omitted.

// de_AssociateOriginationIdentityResult omitted.

// de_CloudWatchLogsDestination omitted.

/**
 * deserializeAws_json1_0ConfigurationSetInformation
 */
const de_ConfigurationSetInformation = (output: any, context: __SerdeContext): ConfigurationSetInformation => {
  return take(output, {
    ConfigurationSetArn: __expectString,
    ConfigurationSetName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultMessageType: __expectString,
    DefaultSenderId: __expectString,
    EventDestinations: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ConfigurationSetInformationList
 */
const de_ConfigurationSetInformationList = (output: any, context: __SerdeContext): ConfigurationSetInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfigurationSetInformation(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateConfigurationSetResult
 */
const de_CreateConfigurationSetResult = (output: any, context: __SerdeContext): CreateConfigurationSetResult => {
  return take(output, {
    ConfigurationSetArn: __expectString,
    ConfigurationSetName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

// de_CreateEventDestinationResult omitted.

/**
 * deserializeAws_json1_0CreateOptOutListResult
 */
const de_CreateOptOutListResult = (output: any, context: __SerdeContext): CreateOptOutListResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePoolResult
 */
const de_CreatePoolResult = (output: any, context: __SerdeContext): CreatePoolResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    MessageType: __expectString,
    OptOutListName: __expectString,
    PoolArn: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    SharedRoutesEnabled: __expectBoolean,
    Status: __expectString,
    Tags: _json,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteConfigurationSetResult
 */
const de_DeleteConfigurationSetResult = (output: any, context: __SerdeContext): DeleteConfigurationSetResult => {
  return take(output, {
    ConfigurationSetArn: __expectString,
    ConfigurationSetName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultMessageType: __expectString,
    DefaultSenderId: __expectString,
    EventDestinations: _json,
  }) as any;
};

// de_DeleteDefaultMessageTypeResult omitted.

// de_DeleteDefaultSenderIdResult omitted.

// de_DeleteEventDestinationResult omitted.

// de_DeleteKeywordResult omitted.

/**
 * deserializeAws_json1_0DeleteOptedOutNumberResult
 */
const de_DeleteOptedOutNumberResult = (output: any, context: __SerdeContext): DeleteOptedOutNumberResult => {
  return take(output, {
    EndUserOptedOut: __expectBoolean,
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
    OptedOutNumber: __expectString,
    OptedOutTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteOptOutListResult
 */
const de_DeleteOptOutListResult = (output: any, context: __SerdeContext): DeleteOptOutListResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DeletePoolResult
 */
const de_DeletePoolResult = (output: any, context: __SerdeContext): DeletePoolResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageType: __expectString,
    OptOutListName: __expectString,
    PoolArn: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    SharedRoutesEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_DeleteTextMessageSpendLimitOverrideResult omitted.

// de_DeleteVoiceMessageSpendLimitOverrideResult omitted.

// de_DescribeAccountAttributesResult omitted.

// de_DescribeAccountLimitsResult omitted.

/**
 * deserializeAws_json1_0DescribeConfigurationSetsResult
 */
const de_DescribeConfigurationSetsResult = (output: any, context: __SerdeContext): DescribeConfigurationSetsResult => {
  return take(output, {
    ConfigurationSets: (_: any) => de_ConfigurationSetInformationList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeKeywordsResult omitted.

/**
 * deserializeAws_json1_0DescribeOptedOutNumbersResult
 */
const de_DescribeOptedOutNumbersResult = (output: any, context: __SerdeContext): DescribeOptedOutNumbersResult => {
  return take(output, {
    NextToken: __expectString,
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
    OptedOutNumbers: (_: any) => de_OptedOutNumberInformationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeOptOutListsResult
 */
const de_DescribeOptOutListsResult = (output: any, context: __SerdeContext): DescribeOptOutListsResult => {
  return take(output, {
    NextToken: __expectString,
    OptOutLists: (_: any) => de_OptOutListInformationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribePhoneNumbersResult
 */
const de_DescribePhoneNumbersResult = (output: any, context: __SerdeContext): DescribePhoneNumbersResult => {
  return take(output, {
    NextToken: __expectString,
    PhoneNumbers: (_: any) => de_PhoneNumberInformationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribePoolsResult
 */
const de_DescribePoolsResult = (output: any, context: __SerdeContext): DescribePoolsResult => {
  return take(output, {
    NextToken: __expectString,
    Pools: (_: any) => de_PoolInformationList(_, context),
  }) as any;
};

// de_DescribeSenderIdsResult omitted.

// de_DescribeSpendLimitsResult omitted.

// de_DisassociateOriginationIdentityResult omitted.

// de_EventDestination omitted.

// de_EventDestinationList omitted.

// de_EventTypeList omitted.

// de_InternalServerException omitted.

// de_KeywordInformation omitted.

// de_KeywordInformationList omitted.

// de_KinesisFirehoseDestination omitted.

// de_ListPoolOriginationIdentitiesResult omitted.

// de_ListTagsForResourceResult omitted.

// de_MessageTypeList omitted.

// de_NumberCapabilityList omitted.

/**
 * deserializeAws_json1_0OptedOutNumberInformation
 */
const de_OptedOutNumberInformation = (output: any, context: __SerdeContext): OptedOutNumberInformation => {
  return take(output, {
    EndUserOptedOut: __expectBoolean,
    OptedOutNumber: __expectString,
    OptedOutTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0OptedOutNumberInformationList
 */
const de_OptedOutNumberInformationList = (output: any, context: __SerdeContext): OptedOutNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptedOutNumberInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OptOutListInformation
 */
const de_OptOutListInformation = (output: any, context: __SerdeContext): OptOutListInformation => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0OptOutListInformationList
 */
const de_OptOutListInformationList = (output: any, context: __SerdeContext): OptOutListInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OptOutListInformation(entry, context);
    });
  return retVal;
};

// de_OriginationIdentityMetadata omitted.

// de_OriginationIdentityMetadataList omitted.

/**
 * deserializeAws_json1_0PhoneNumberInformation
 */
const de_PhoneNumberInformation = (output: any, context: __SerdeContext): PhoneNumberInformation => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    IsoCountryCode: __expectString,
    MessageType: __expectString,
    MonthlyLeasingPrice: __expectString,
    NumberCapabilities: _json,
    NumberType: __expectString,
    OptOutListName: __expectString,
    PhoneNumber: __expectString,
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0PhoneNumberInformationList
 */
const de_PhoneNumberInformationList = (output: any, context: __SerdeContext): PhoneNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PhoneNumberInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PoolInformation
 */
const de_PoolInformation = (output: any, context: __SerdeContext): PoolInformation => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    MessageType: __expectString,
    OptOutListName: __expectString,
    PoolArn: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    SharedRoutesEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0PoolInformationList
 */
const de_PoolInformationList = (output: any, context: __SerdeContext): PoolInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PoolInformation(entry, context);
    });
  return retVal;
};

// de_PutKeywordResult omitted.

/**
 * deserializeAws_json1_0PutOptedOutNumberResult
 */
const de_PutOptedOutNumberResult = (output: any, context: __SerdeContext): PutOptedOutNumberResult => {
  return take(output, {
    EndUserOptedOut: __expectBoolean,
    OptOutListArn: __expectString,
    OptOutListName: __expectString,
    OptedOutNumber: __expectString,
    OptedOutTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ReleasePhoneNumberResult
 */
const de_ReleasePhoneNumberResult = (output: any, context: __SerdeContext): ReleasePhoneNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsoCountryCode: __expectString,
    MessageType: __expectString,
    MonthlyLeasingPrice: __expectString,
    NumberCapabilities: _json,
    NumberType: __expectString,
    OptOutListName: __expectString,
    PhoneNumber: __expectString,
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0RequestPhoneNumberResult
 */
const de_RequestPhoneNumberResult = (output: any, context: __SerdeContext): RequestPhoneNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    IsoCountryCode: __expectString,
    MessageType: __expectString,
    MonthlyLeasingPrice: __expectString,
    NumberCapabilities: _json,
    NumberType: __expectString,
    OptOutListName: __expectString,
    PhoneNumber: __expectString,
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    Tags: _json,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_ResourceNotFoundException omitted.

// de_SenderIdInformation omitted.

// de_SenderIdInformationList omitted.

// de_SendTextMessageResult omitted.

// de_SendVoiceMessageResult omitted.

// de_ServiceQuotaExceededException omitted.

// de_SetDefaultMessageTypeResult omitted.

// de_SetDefaultSenderIdResult omitted.

// de_SetTextMessageSpendLimitOverrideResult omitted.

// de_SetVoiceMessageSpendLimitOverrideResult omitted.

// de_SnsDestination omitted.

// de_SpendLimit omitted.

// de_SpendLimitList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResult omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResult omitted.

// de_UpdateEventDestinationResult omitted.

/**
 * deserializeAws_json1_0UpdatePhoneNumberResult
 */
const de_UpdatePhoneNumberResult = (output: any, context: __SerdeContext): UpdatePhoneNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    IsoCountryCode: __expectString,
    MessageType: __expectString,
    MonthlyLeasingPrice: __expectString,
    NumberCapabilities: _json,
    NumberType: __expectString,
    OptOutListName: __expectString,
    PhoneNumber: __expectString,
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePoolResult
 */
const de_UpdatePoolResult = (output: any, context: __SerdeContext): UpdatePoolResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    MessageType: __expectString,
    OptOutListName: __expectString,
    PoolArn: __expectString,
    PoolId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    SharedRoutesEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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
