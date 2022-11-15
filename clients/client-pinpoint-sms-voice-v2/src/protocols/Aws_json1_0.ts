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

export const serializeAws_json1_0AssociateOriginationIdentityCommand = async (
  input: AssociateOriginationIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.AssociateOriginationIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateOriginationIdentityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.CreateConfigurationSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateConfigurationSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateEventDestinationCommand = async (
  input: CreateEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.CreateEventDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateOptOutListCommand = async (
  input: CreateOptOutListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.CreateOptOutList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateOptOutListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreatePoolCommand = async (
  input: CreatePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.CreatePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreatePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteConfigurationSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteConfigurationSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDefaultMessageTypeCommand = async (
  input: DeleteDefaultMessageTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteDefaultMessageType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDefaultMessageTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDefaultSenderIdCommand = async (
  input: DeleteDefaultSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteDefaultSenderId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDefaultSenderIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteEventDestinationCommand = async (
  input: DeleteEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteEventDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteKeywordCommand = async (
  input: DeleteKeywordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteKeyword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteKeywordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteOptedOutNumberCommand = async (
  input: DeleteOptedOutNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteOptedOutNumber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteOptedOutNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteOptOutListCommand = async (
  input: DeleteOptOutListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteOptOutList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteOptOutListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeletePoolCommand = async (
  input: DeletePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeletePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeletePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand = async (
  input: DeleteTextMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteTextMessageSpendLimitOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteTextMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommand = async (
  input: DeleteVoiceMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DeleteVoiceMessageSpendLimitOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeAccountAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeAccountAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeAccountLimitsCommand = async (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeAccountLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeAccountLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeConfigurationSetsCommand = async (
  input: DescribeConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeConfigurationSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeConfigurationSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeKeywordsCommand = async (
  input: DescribeKeywordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeKeywords",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeKeywordsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeOptedOutNumbersCommand = async (
  input: DescribeOptedOutNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeOptedOutNumbers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeOptedOutNumbersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeOptOutListsCommand = async (
  input: DescribeOptOutListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeOptOutLists",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeOptOutListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribePhoneNumbersCommand = async (
  input: DescribePhoneNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribePhoneNumbers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribePhoneNumbersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribePoolsCommand = async (
  input: DescribePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribePools",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribePoolsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeSenderIdsCommand = async (
  input: DescribeSenderIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeSenderIds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeSenderIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeSpendLimitsCommand = async (
  input: DescribeSpendLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DescribeSpendLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeSpendLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateOriginationIdentityCommand = async (
  input: DisassociateOriginationIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.DisassociateOriginationIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateOriginationIdentityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListPoolOriginationIdentitiesCommand = async (
  input: ListPoolOriginationIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.ListPoolOriginationIdentities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListPoolOriginationIdentitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutKeywordCommand = async (
  input: PutKeywordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.PutKeyword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutKeywordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutOptedOutNumberCommand = async (
  input: PutOptedOutNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.PutOptedOutNumber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutOptedOutNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ReleasePhoneNumberCommand = async (
  input: ReleasePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.ReleasePhoneNumber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ReleasePhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RequestPhoneNumberCommand = async (
  input: RequestPhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.RequestPhoneNumber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RequestPhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SendTextMessageCommand = async (
  input: SendTextMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SendTextMessage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendTextMessageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SendVoiceMessageCommand = async (
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SendVoiceMessage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendVoiceMessageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SetDefaultMessageTypeCommand = async (
  input: SetDefaultMessageTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SetDefaultMessageType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SetDefaultMessageTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SetDefaultSenderIdCommand = async (
  input: SetDefaultSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SetDefaultSenderId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SetDefaultSenderIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SetTextMessageSpendLimitOverrideCommand = async (
  input: SetTextMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SetTextMessageSpendLimitOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SetTextMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand = async (
  input: SetVoiceMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.SetVoiceMessageSpendLimitOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SetVoiceMessageSpendLimitOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEventDestinationCommand = async (
  input: UpdateEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.UpdateEventDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEventDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdatePhoneNumberCommand = async (
  input: UpdatePhoneNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.UpdatePhoneNumber",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdatePhoneNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdatePoolCommand = async (
  input: UpdatePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "PinpointSMSVoiceV2.UpdatePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdatePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateOriginationIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOriginationIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateOriginationIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateOriginationIdentityResult(data, context);
  const response: AssociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateOriginationIdentityCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateConfigurationSetResult(data, context);
  const response: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateConfigurationSetCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateEventDestinationResult(data, context);
  const response: CreateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateEventDestinationCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateOptOutListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateOptOutListResult(data, context);
  const response: CreateOptOutListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateOptOutListCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreatePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreatePoolResult(data, context);
  const response: CreatePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreatePoolCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteConfigurationSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteConfigurationSetResult(data, context);
  const response: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteConfigurationSetCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDefaultMessageTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteDefaultMessageTypeResult(data, context);
  const response: DeleteDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDefaultMessageTypeCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDefaultSenderIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteDefaultSenderIdResult(data, context);
  const response: DeleteDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDefaultSenderIdCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteEventDestinationResult(data, context);
  const response: DeleteEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteEventDestinationCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteKeywordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteKeywordResult(data, context);
  const response: DeleteKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteKeywordCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteOptedOutNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteOptedOutNumberResult(data, context);
  const response: DeleteOptedOutNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteOptedOutNumberCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteOptOutListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteOptOutListResult(data, context);
  const response: DeleteOptOutListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteOptOutListCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeletePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeletePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeletePoolResult(data, context);
  const response: DeletePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeletePoolCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideResult(data, context);
  const response: DeleteTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideResult(data, context);
  const response: DeleteVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeAccountAttributesResult(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeAccountAttributesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeAccountLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeAccountLimitsResult(data, context);
  const response: DescribeAccountLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeAccountLimitsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeConfigurationSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeConfigurationSetsResult(data, context);
  const response: DescribeConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeConfigurationSetsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeKeywordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeywordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeKeywordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeKeywordsResult(data, context);
  const response: DescribeKeywordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeKeywordsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeOptedOutNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptedOutNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeOptedOutNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeOptedOutNumbersResult(data, context);
  const response: DescribeOptedOutNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeOptedOutNumbersCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeOptOutListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptOutListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeOptOutListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeOptOutListsResult(data, context);
  const response: DescribeOptOutListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeOptOutListsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribePhoneNumbersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribePhoneNumbersResult(data, context);
  const response: DescribePhoneNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribePhoneNumbersCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribePoolsResult(data, context);
  const response: DescribePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribePoolsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeSenderIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSenderIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeSenderIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeSenderIdsResult(data, context);
  const response: DescribeSenderIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeSenderIdsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DescribeSpendLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpendLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeSpendLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeSpendLimitsResult(data, context);
  const response: DescribeSpendLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeSpendLimitsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DisassociateOriginationIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOriginationIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateOriginationIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateOriginationIdentityResult(data, context);
  const response: DisassociateOriginationIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateOriginationIdentityCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListPoolOriginationIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoolOriginationIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListPoolOriginationIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListPoolOriginationIdentitiesResult(data, context);
  const response: ListPoolOriginationIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListPoolOriginationIdentitiesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutKeywordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutKeywordResult(data, context);
  const response: PutKeywordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutKeywordCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0PutOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PutOptedOutNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutOptedOutNumberResult(data, context);
  const response: PutOptedOutNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutOptedOutNumberCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ReleasePhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ReleasePhoneNumberResult(data, context);
  const response: ReleasePhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ReleasePhoneNumberCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RequestPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RequestPhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RequestPhoneNumberResult(data, context);
  const response: RequestPhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RequestPhoneNumberCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SendTextMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTextMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendTextMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTextMessageResult(data, context);
  const response: SendTextMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendTextMessageCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SendVoiceMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendVoiceMessageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendVoiceMessageResult(data, context);
  const response: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendVoiceMessageCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SetDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SetDefaultMessageTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SetDefaultMessageTypeResult(data, context);
  const response: SetDefaultMessageTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SetDefaultMessageTypeCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SetDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SetDefaultSenderIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SetDefaultSenderIdResult(data, context);
  const response: SetDefaultSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SetDefaultSenderIdCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SetTextMessageSpendLimitOverrideResult(data, context);
  const response: SetTextMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideResult(data, context);
  const response: SetVoiceMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.pinpointsmsvoicev2#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEventDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEventDestinationResult(data, context);
  const response: UpdateEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEventDestinationCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdatePhoneNumberCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdatePhoneNumberResult(data, context);
  const response: UpdatePhoneNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdatePhoneNumberCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdatePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdatePoolResult(data, context);
  const response: UpdatePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdatePoolCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpointsmsvoicev2#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.pinpointsmsvoicev2#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.pinpointsmsvoicev2#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.pinpointsmsvoicev2#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.pinpointsmsvoicev2#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AssociateOriginationIdentityRequest = (
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

const serializeAws_json1_0CloudWatchLogsDestination = (
  input: CloudWatchLogsDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
  };
};

const serializeAws_json1_0ConfigurationSetFilter = (input: ConfigurationSetFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0ConfigurationSetFilterList = (
  input: ConfigurationSetFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ConfigurationSetFilter(entry, context);
    });
};

const serializeAws_json1_0ConfigurationSetNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0ContextMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_0CreateConfigurationSetRequest = (
  input: CreateConfigurationSetRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateEventDestinationRequest = (
  input: CreateEventDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.CloudWatchLogsDestination != null && {
      CloudWatchLogsDestination: serializeAws_json1_0CloudWatchLogsDestination(
        input.CloudWatchLogsDestination,
        context
      ),
    }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: serializeAws_json1_0KinesisFirehoseDestination(
        input.KinesisFirehoseDestination,
        context
      ),
    }),
    ...(input.MatchingEventTypes != null && {
      MatchingEventTypes: serializeAws_json1_0EventTypeList(input.MatchingEventTypes, context),
    }),
    ...(input.SnsDestination != null && {
      SnsDestination: serializeAws_json1_0SnsDestination(input.SnsDestination, context),
    }),
  };
};

const serializeAws_json1_0CreateOptOutListRequest = (input: CreateOptOutListRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreatePoolRequest = (input: CreatePoolRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0DeleteConfigurationSetRequest = (
  input: DeleteConfigurationSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

const serializeAws_json1_0DeleteDefaultMessageTypeRequest = (
  input: DeleteDefaultMessageTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

const serializeAws_json1_0DeleteDefaultSenderIdRequest = (
  input: DeleteDefaultSenderIdRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
  };
};

const serializeAws_json1_0DeleteEventDestinationRequest = (
  input: DeleteEventDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
  };
};

const serializeAws_json1_0DeleteKeywordRequest = (input: DeleteKeywordRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

const serializeAws_json1_0DeleteOptedOutNumberRequest = (
  input: DeleteOptedOutNumberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumber != null && { OptedOutNumber: input.OptedOutNumber }),
  };
};

const serializeAws_json1_0DeleteOptOutListRequest = (input: DeleteOptOutListRequest, context: __SerdeContext): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
  };
};

const serializeAws_json1_0DeletePoolRequest = (input: DeletePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

const serializeAws_json1_0DeleteTextMessageSpendLimitOverrideRequest = (
  input: DeleteTextMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideRequest = (
  input: DeleteVoiceMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DescribeAccountAttributesRequest = (
  input: DescribeAccountAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0DescribeAccountLimitsRequest = (
  input: DescribeAccountLimitsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0DescribeConfigurationSetsRequest = (
  input: DescribeConfigurationSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetNames != null && {
      ConfigurationSetNames: serializeAws_json1_0ConfigurationSetNameList(input.ConfigurationSetNames, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_0ConfigurationSetFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0DescribeKeywordsRequest = (input: DescribeKeywordsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_0KeywordFilterList(input.Filters, context) }),
    ...(input.Keywords != null && { Keywords: serializeAws_json1_0KeywordList(input.Keywords, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

const serializeAws_json1_0DescribeOptedOutNumbersRequest = (
  input: DescribeOptedOutNumbersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_0OptedOutFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumbers != null && {
      OptedOutNumbers: serializeAws_json1_0OptedOutNumberList(input.OptedOutNumbers, context),
    }),
  };
};

const serializeAws_json1_0DescribeOptOutListsRequest = (
  input: DescribeOptOutListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OptOutListNames != null && {
      OptOutListNames: serializeAws_json1_0OptOutListNameList(input.OptOutListNames, context),
    }),
  };
};

const serializeAws_json1_0DescribePhoneNumbersRequest = (
  input: DescribePhoneNumbersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_0PhoneNumberFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PhoneNumberIds != null && {
      PhoneNumberIds: serializeAws_json1_0PhoneNumberIdList(input.PhoneNumberIds, context),
    }),
  };
};

const serializeAws_json1_0DescribePoolsRequest = (input: DescribePoolsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_0PoolFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PoolIds != null && { PoolIds: serializeAws_json1_0PoolIdList(input.PoolIds, context) }),
  };
};

const serializeAws_json1_0DescribeSenderIdsRequest = (
  input: DescribeSenderIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_0SenderIdFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SenderIds != null && { SenderIds: serializeAws_json1_0SenderIdList(input.SenderIds, context) }),
  };
};

const serializeAws_json1_0DescribeSpendLimitsRequest = (
  input: DescribeSpendLimitsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0DestinationCountryParameters = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_0DisassociateOriginationIdentityRequest = (
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

const serializeAws_json1_0EventTypeList = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0FilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0KeywordFilter = (input: KeywordFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0KeywordFilterList = (input: KeywordFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0KeywordFilter(entry, context);
    });
};

const serializeAws_json1_0KeywordList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamArn != null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_json1_0ListPoolOriginationIdentitiesRequest = (
  input: ListPoolOriginationIdentitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && {
      Filters: serializeAws_json1_0PoolOriginationIdentitiesFilterList(input.Filters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0NonEmptyTagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0NumberCapabilityList = (
  input: (NumberCapability | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0OptedOutFilter = (input: OptedOutFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0OptedOutFilterList = (input: OptedOutFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0OptedOutFilter(entry, context);
    });
};

const serializeAws_json1_0OptedOutNumberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0OptOutListNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0PhoneNumberFilter = (input: PhoneNumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0PhoneNumberFilterList = (input: PhoneNumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0PhoneNumberFilter(entry, context);
    });
};

const serializeAws_json1_0PhoneNumberIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0PoolFilter = (input: PoolFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0PoolFilterList = (input: PoolFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0PoolFilter(entry, context);
    });
};

const serializeAws_json1_0PoolIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0PoolOriginationIdentitiesFilter = (
  input: PoolOriginationIdentitiesFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0PoolOriginationIdentitiesFilterList = (
  input: PoolOriginationIdentitiesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0PoolOriginationIdentitiesFilter(entry, context);
    });
};

const serializeAws_json1_0PutKeywordRequest = (input: PutKeywordRequest, context: __SerdeContext): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.KeywordAction != null && { KeywordAction: input.KeywordAction }),
    ...(input.KeywordMessage != null && { KeywordMessage: input.KeywordMessage }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
  };
};

const serializeAws_json1_0PutOptedOutNumberRequest = (
  input: PutOptedOutNumberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.OptedOutNumber != null && { OptedOutNumber: input.OptedOutNumber }),
  };
};

const serializeAws_json1_0ReleasePhoneNumberRequest = (
  input: ReleasePhoneNumberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PhoneNumberId != null && { PhoneNumberId: input.PhoneNumberId }),
  };
};

const serializeAws_json1_0RequestPhoneNumberRequest = (
  input: RequestPhoneNumberRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.NumberCapabilities != null && {
      NumberCapabilities: serializeAws_json1_0NumberCapabilityList(input.NumberCapabilities, context),
    }),
    ...(input.NumberType != null && { NumberType: input.NumberType }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.PoolId != null && { PoolId: input.PoolId }),
    ...(input.RegistrationId != null && { RegistrationId: input.RegistrationId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0SenderIdAndCountry = (input: SenderIdAndCountry, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
  };
};

const serializeAws_json1_0SenderIdFilter = (input: SenderIdFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_0FilterValueList(input.Values, context) }),
  };
};

const serializeAws_json1_0SenderIdFilterList = (input: SenderIdFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0SenderIdFilter(entry, context);
    });
};

const serializeAws_json1_0SenderIdList = (input: SenderIdAndCountry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0SenderIdAndCountry(entry, context);
    });
};

const serializeAws_json1_0SendTextMessageRequest = (input: SendTextMessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Context != null && { Context: serializeAws_json1_0ContextMap(input.Context, context) }),
    ...(input.DestinationCountryParameters != null && {
      DestinationCountryParameters: serializeAws_json1_0DestinationCountryParameters(
        input.DestinationCountryParameters,
        context
      ),
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

const serializeAws_json1_0SendVoiceMessageRequest = (input: SendVoiceMessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Context != null && { Context: serializeAws_json1_0ContextMap(input.Context, context) }),
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

const serializeAws_json1_0SetDefaultMessageTypeRequest = (
  input: SetDefaultMessageTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
  };
};

const serializeAws_json1_0SetDefaultSenderIdRequest = (
  input: SetDefaultSenderIdRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
  };
};

const serializeAws_json1_0SetTextMessageSpendLimitOverrideRequest = (
  input: SetTextMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonthlyLimit != null && { MonthlyLimit: input.MonthlyLimit }),
  };
};

const serializeAws_json1_0SetVoiceMessageSpendLimitOverrideRequest = (
  input: SetVoiceMessageSpendLimitOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MonthlyLimit != null && { MonthlyLimit: input.MonthlyLimit }),
  };
};

const serializeAws_json1_0SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0NonEmptyTagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateEventDestinationRequest = (
  input: UpdateEventDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsDestination != null && {
      CloudWatchLogsDestination: serializeAws_json1_0CloudWatchLogsDestination(
        input.CloudWatchLogsDestination,
        context
      ),
    }),
    ...(input.ConfigurationSetName != null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventDestinationName != null && { EventDestinationName: input.EventDestinationName }),
    ...(input.KinesisFirehoseDestination != null && {
      KinesisFirehoseDestination: serializeAws_json1_0KinesisFirehoseDestination(
        input.KinesisFirehoseDestination,
        context
      ),
    }),
    ...(input.MatchingEventTypes != null && {
      MatchingEventTypes: serializeAws_json1_0EventTypeList(input.MatchingEventTypes, context),
    }),
    ...(input.SnsDestination != null && {
      SnsDestination: serializeAws_json1_0SnsDestination(input.SnsDestination, context),
    }),
  };
};

const serializeAws_json1_0UpdatePhoneNumberRequest = (
  input: UpdatePhoneNumberRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeletionProtectionEnabled != null && { DeletionProtectionEnabled: input.DeletionProtectionEnabled }),
    ...(input.OptOutListName != null && { OptOutListName: input.OptOutListName }),
    ...(input.PhoneNumberId != null && { PhoneNumberId: input.PhoneNumberId }),
    ...(input.SelfManagedOptOutsEnabled != null && { SelfManagedOptOutsEnabled: input.SelfManagedOptOutsEnabled }),
    ...(input.TwoWayChannelArn != null && { TwoWayChannelArn: input.TwoWayChannelArn }),
    ...(input.TwoWayEnabled != null && { TwoWayEnabled: input.TwoWayEnabled }),
  };
};

const serializeAws_json1_0UpdatePoolRequest = (input: UpdatePoolRequest, context: __SerdeContext): any => {
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

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_0AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0AccountAttributeList = (output: any, context: __SerdeContext): AccountAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AccountAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  return {
    Max: __expectLong(output.Max),
    Name: __expectString(output.Name),
    Used: __expectLong(output.Used),
  } as any;
};

const deserializeAws_json1_0AccountLimitList = (output: any, context: __SerdeContext): AccountLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AccountLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0AssociateOriginationIdentityResult = (
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

const deserializeAws_json1_0CloudWatchLogsDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestination => {
  return {
    IamRoleArn: __expectString(output.IamRoleArn),
    LogGroupArn: __expectString(output.LogGroupArn),
  } as any;
};

const deserializeAws_json1_0ConfigurationSetInformation = (
  output: any,
  context: __SerdeContext
): ConfigurationSetInformation => {
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
      output.EventDestinations != null
        ? deserializeAws_json1_0EventDestinationList(output.EventDestinations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ConfigurationSetInformationList = (
  output: any,
  context: __SerdeContext
): ConfigurationSetInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ConfigurationSetInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_0CreateConfigurationSetResult = (
  output: any,
  context: __SerdeContext
): CreateConfigurationSetResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateEventDestinationResult = (
  output: any,
  context: __SerdeContext
): CreateEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null
        ? deserializeAws_json1_0EventDestination(output.EventDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateOptOutListResult = (output: any, context: __SerdeContext): CreateOptOutListResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreatePoolResult = (output: any, context: __SerdeContext): CreatePoolResult => {
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
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

const deserializeAws_json1_0DeleteConfigurationSetResult = (
  output: any,
  context: __SerdeContext
): DeleteConfigurationSetResult => {
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
      output.EventDestinations != null
        ? deserializeAws_json1_0EventDestinationList(output.EventDestinations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteDefaultMessageTypeResult = (
  output: any,
  context: __SerdeContext
): DeleteDefaultMessageTypeResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    MessageType: __expectString(output.MessageType),
  } as any;
};

const deserializeAws_json1_0DeleteDefaultSenderIdResult = (
  output: any,
  context: __SerdeContext
): DeleteDefaultSenderIdResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    SenderId: __expectString(output.SenderId),
  } as any;
};

const deserializeAws_json1_0DeleteEventDestinationResult = (
  output: any,
  context: __SerdeContext
): DeleteEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null
        ? deserializeAws_json1_0EventDestination(output.EventDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteKeywordResult = (output: any, context: __SerdeContext): DeleteKeywordResult => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

const deserializeAws_json1_0DeleteOptedOutNumberResult = (
  output: any,
  context: __SerdeContext
): DeleteOptedOutNumberResult => {
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

const deserializeAws_json1_0DeleteOptOutListResult = (output: any, context: __SerdeContext): DeleteOptOutListResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
  } as any;
};

const deserializeAws_json1_0DeletePoolResult = (output: any, context: __SerdeContext): DeletePoolResult => {
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

const deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): DeleteTextMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

const deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): DeleteVoiceMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

const deserializeAws_json1_0DescribeAccountAttributesResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResult => {
  return {
    AccountAttributes:
      output.AccountAttributes != null
        ? deserializeAws_json1_0AccountAttributeList(output.AccountAttributes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0DescribeAccountLimitsResult = (
  output: any,
  context: __SerdeContext
): DescribeAccountLimitsResult => {
  return {
    AccountLimits:
      output.AccountLimits != null ? deserializeAws_json1_0AccountLimitList(output.AccountLimits, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0DescribeConfigurationSetsResult = (
  output: any,
  context: __SerdeContext
): DescribeConfigurationSetsResult => {
  return {
    ConfigurationSets:
      output.ConfigurationSets != null
        ? deserializeAws_json1_0ConfigurationSetInformationList(output.ConfigurationSets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0DescribeKeywordsResult = (output: any, context: __SerdeContext): DescribeKeywordsResult => {
  return {
    Keywords:
      output.Keywords != null ? deserializeAws_json1_0KeywordInformationList(output.Keywords, context) : undefined,
    NextToken: __expectString(output.NextToken),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

const deserializeAws_json1_0DescribeOptedOutNumbersResult = (
  output: any,
  context: __SerdeContext
): DescribeOptedOutNumbersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
    OptedOutNumbers:
      output.OptedOutNumbers != null
        ? deserializeAws_json1_0OptedOutNumberInformationList(output.OptedOutNumbers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeOptOutListsResult = (
  output: any,
  context: __SerdeContext
): DescribeOptOutListsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OptOutLists:
      output.OptOutLists != null
        ? deserializeAws_json1_0OptOutListInformationList(output.OptOutLists, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribePhoneNumbersResult = (
  output: any,
  context: __SerdeContext
): DescribePhoneNumbersResult => {
  return {
    NextToken: __expectString(output.NextToken),
    PhoneNumbers:
      output.PhoneNumbers != null
        ? deserializeAws_json1_0PhoneNumberInformationList(output.PhoneNumbers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribePoolsResult = (output: any, context: __SerdeContext): DescribePoolsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pools: output.Pools != null ? deserializeAws_json1_0PoolInformationList(output.Pools, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeSenderIdsResult = (
  output: any,
  context: __SerdeContext
): DescribeSenderIdsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SenderIds:
      output.SenderIds != null ? deserializeAws_json1_0SenderIdInformationList(output.SenderIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeSpendLimitsResult = (
  output: any,
  context: __SerdeContext
): DescribeSpendLimitsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SpendLimits:
      output.SpendLimits != null ? deserializeAws_json1_0SpendLimitList(output.SpendLimits, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DisassociateOriginationIdentityResult = (
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

const deserializeAws_json1_0EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchLogsDestination:
      output.CloudWatchLogsDestination != null
        ? deserializeAws_json1_0CloudWatchLogsDestination(output.CloudWatchLogsDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    EventDestinationName: __expectString(output.EventDestinationName),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination != null
        ? deserializeAws_json1_0KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes != null
        ? deserializeAws_json1_0EventTypeList(output.MatchingEventTypes, context)
        : undefined,
    SnsDestination:
      output.SnsDestination != null ? deserializeAws_json1_0SnsDestination(output.SnsDestination, context) : undefined,
  } as any;
};

const deserializeAws_json1_0EventDestinationList = (output: any, context: __SerdeContext): EventDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EventDestination(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0EventTypeList = (output: any, context: __SerdeContext): (EventType | string)[] => {
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

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_0KeywordInformation = (output: any, context: __SerdeContext): KeywordInformation => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
  } as any;
};

const deserializeAws_json1_0KeywordInformationList = (output: any, context: __SerdeContext): KeywordInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0KeywordInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

const deserializeAws_json1_0ListPoolOriginationIdentitiesResult = (
  output: any,
  context: __SerdeContext
): ListPoolOriginationIdentitiesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    OriginationIdentities:
      output.OriginationIdentities != null
        ? deserializeAws_json1_0OriginationIdentityMetadataList(output.OriginationIdentities, context)
        : undefined,
    PoolArn: __expectString(output.PoolArn),
    PoolId: __expectString(output.PoolId),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResult = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResult => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0MessageTypeList = (output: any, context: __SerdeContext): (MessageType | string)[] => {
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

const deserializeAws_json1_0NumberCapabilityList = (
  output: any,
  context: __SerdeContext
): (NumberCapability | string)[] => {
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

const deserializeAws_json1_0OptedOutNumberInformation = (
  output: any,
  context: __SerdeContext
): OptedOutNumberInformation => {
  return {
    EndUserOptedOut: __expectBoolean(output.EndUserOptedOut),
    OptedOutNumber: __expectString(output.OptedOutNumber),
    OptedOutTimestamp:
      output.OptedOutTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OptedOutTimestamp)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0OptedOutNumberInformationList = (
  output: any,
  context: __SerdeContext
): OptedOutNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0OptedOutNumberInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0OptOutListInformation = (output: any, context: __SerdeContext): OptOutListInformation => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    OptOutListArn: __expectString(output.OptOutListArn),
    OptOutListName: __expectString(output.OptOutListName),
  } as any;
};

const deserializeAws_json1_0OptOutListInformationList = (
  output: any,
  context: __SerdeContext
): OptOutListInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0OptOutListInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0OriginationIdentityMetadata = (
  output: any,
  context: __SerdeContext
): OriginationIdentityMetadata => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    NumberCapabilities:
      output.NumberCapabilities != null
        ? deserializeAws_json1_0NumberCapabilityList(output.NumberCapabilities, context)
        : undefined,
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

const deserializeAws_json1_0OriginationIdentityMetadataList = (
  output: any,
  context: __SerdeContext
): OriginationIdentityMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0OriginationIdentityMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PhoneNumberInformation = (output: any, context: __SerdeContext): PhoneNumberInformation => {
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
      output.NumberCapabilities != null
        ? deserializeAws_json1_0NumberCapabilityList(output.NumberCapabilities, context)
        : undefined,
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

const deserializeAws_json1_0PhoneNumberInformationList = (
  output: any,
  context: __SerdeContext
): PhoneNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0PhoneNumberInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PoolInformation = (output: any, context: __SerdeContext): PoolInformation => {
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

const deserializeAws_json1_0PoolInformationList = (output: any, context: __SerdeContext): PoolInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0PoolInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PutKeywordResult = (output: any, context: __SerdeContext): PutKeywordResult => {
  return {
    Keyword: __expectString(output.Keyword),
    KeywordAction: __expectString(output.KeywordAction),
    KeywordMessage: __expectString(output.KeywordMessage),
    OriginationIdentity: __expectString(output.OriginationIdentity),
    OriginationIdentityArn: __expectString(output.OriginationIdentityArn),
  } as any;
};

const deserializeAws_json1_0PutOptedOutNumberResult = (
  output: any,
  context: __SerdeContext
): PutOptedOutNumberResult => {
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

const deserializeAws_json1_0ReleasePhoneNumberResult = (
  output: any,
  context: __SerdeContext
): ReleasePhoneNumberResult => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageType: __expectString(output.MessageType),
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    NumberCapabilities:
      output.NumberCapabilities != null
        ? deserializeAws_json1_0NumberCapabilityList(output.NumberCapabilities, context)
        : undefined,
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

const deserializeAws_json1_0RequestPhoneNumberResult = (
  output: any,
  context: __SerdeContext
): RequestPhoneNumberResult => {
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
      output.NumberCapabilities != null
        ? deserializeAws_json1_0NumberCapabilityList(output.NumberCapabilities, context)
        : undefined,
    NumberType: __expectString(output.NumberType),
    OptOutListName: __expectString(output.OptOutListName),
    PhoneNumber: __expectString(output.PhoneNumber),
    PhoneNumberArn: __expectString(output.PhoneNumberArn),
    PhoneNumberId: __expectString(output.PhoneNumberId),
    PoolId: __expectString(output.PoolId),
    SelfManagedOptOutsEnabled: __expectBoolean(output.SelfManagedOptOutsEnabled),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
    TwoWayChannelArn: __expectString(output.TwoWayChannelArn),
    TwoWayEnabled: __expectBoolean(output.TwoWayEnabled),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_0SenderIdInformation = (output: any, context: __SerdeContext): SenderIdInformation => {
  return {
    IsoCountryCode: __expectString(output.IsoCountryCode),
    MessageTypes:
      output.MessageTypes != null ? deserializeAws_json1_0MessageTypeList(output.MessageTypes, context) : undefined,
    MonthlyLeasingPrice: __expectString(output.MonthlyLeasingPrice),
    SenderId: __expectString(output.SenderId),
    SenderIdArn: __expectString(output.SenderIdArn),
  } as any;
};

const deserializeAws_json1_0SenderIdInformationList = (output: any, context: __SerdeContext): SenderIdInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SenderIdInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SendTextMessageResult = (output: any, context: __SerdeContext): SendTextMessageResult => {
  return {
    MessageId: __expectString(output.MessageId),
  } as any;
};

const deserializeAws_json1_0SendVoiceMessageResult = (output: any, context: __SerdeContext): SendVoiceMessageResult => {
  return {
    MessageId: __expectString(output.MessageId),
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_0SetDefaultMessageTypeResult = (
  output: any,
  context: __SerdeContext
): SetDefaultMessageTypeResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    MessageType: __expectString(output.MessageType),
  } as any;
};

const deserializeAws_json1_0SetDefaultSenderIdResult = (
  output: any,
  context: __SerdeContext
): SetDefaultSenderIdResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    SenderId: __expectString(output.SenderId),
  } as any;
};

const deserializeAws_json1_0SetTextMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): SetTextMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

const deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideResult = (
  output: any,
  context: __SerdeContext
): SetVoiceMessageSpendLimitOverrideResult => {
  return {
    MonthlyLimit: __expectLong(output.MonthlyLimit),
  } as any;
};

const deserializeAws_json1_0SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

const deserializeAws_json1_0SpendLimit = (output: any, context: __SerdeContext): SpendLimit => {
  return {
    EnforcedLimit: __expectLong(output.EnforcedLimit),
    MaxLimit: __expectLong(output.MaxLimit),
    Name: __expectString(output.Name),
    Overridden: __expectBoolean(output.Overridden),
  } as any;
};

const deserializeAws_json1_0SpendLimitList = (output: any, context: __SerdeContext): SpendLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SpendLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

const deserializeAws_json1_0UpdateEventDestinationResult = (
  output: any,
  context: __SerdeContext
): UpdateEventDestinationResult => {
  return {
    ConfigurationSetArn: __expectString(output.ConfigurationSetArn),
    ConfigurationSetName: __expectString(output.ConfigurationSetName),
    EventDestination:
      output.EventDestination != null
        ? deserializeAws_json1_0EventDestination(output.EventDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdatePhoneNumberResult = (
  output: any,
  context: __SerdeContext
): UpdatePhoneNumberResult => {
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
      output.NumberCapabilities != null
        ? deserializeAws_json1_0NumberCapabilityList(output.NumberCapabilities, context)
        : undefined,
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

const deserializeAws_json1_0UpdatePoolResult = (output: any, context: __SerdeContext): UpdatePoolResult => {
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

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Fields:
      output.Fields != null ? deserializeAws_json1_0ValidationExceptionFieldList(output.Fields, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_0ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ValidationExceptionField(entry, context);
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
