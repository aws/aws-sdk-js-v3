// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
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
  AssociateProtectConfigurationCommandInput,
  AssociateProtectConfigurationCommandOutput,
} from "../commands/AssociateProtectConfigurationCommand";
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
  CreateProtectConfigurationCommandInput,
  CreateProtectConfigurationCommandOutput,
} from "../commands/CreateProtectConfigurationCommand";
import {
  CreateRegistrationAssociationCommandInput,
  CreateRegistrationAssociationCommandOutput,
} from "../commands/CreateRegistrationAssociationCommand";
import {
  CreateRegistrationAttachmentCommandInput,
  CreateRegistrationAttachmentCommandOutput,
} from "../commands/CreateRegistrationAttachmentCommand";
import { CreateRegistrationCommandInput, CreateRegistrationCommandOutput } from "../commands/CreateRegistrationCommand";
import {
  CreateRegistrationVersionCommandInput,
  CreateRegistrationVersionCommandOutput,
} from "../commands/CreateRegistrationVersionCommand";
import {
  CreateVerifiedDestinationNumberCommandInput,
  CreateVerifiedDestinationNumberCommandOutput,
} from "../commands/CreateVerifiedDestinationNumberCommand";
import {
  DeleteAccountDefaultProtectConfigurationCommandInput,
  DeleteAccountDefaultProtectConfigurationCommandOutput,
} from "../commands/DeleteAccountDefaultProtectConfigurationCommand";
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
  DeleteMediaMessageSpendLimitOverrideCommandInput,
  DeleteMediaMessageSpendLimitOverrideCommandOutput,
} from "../commands/DeleteMediaMessageSpendLimitOverrideCommand";
import {
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "../commands/DeleteOptedOutNumberCommand";
import { DeleteOptOutListCommandInput, DeleteOptOutListCommandOutput } from "../commands/DeleteOptOutListCommand";
import { DeletePoolCommandInput, DeletePoolCommandOutput } from "../commands/DeletePoolCommand";
import {
  DeleteProtectConfigurationCommandInput,
  DeleteProtectConfigurationCommandOutput,
} from "../commands/DeleteProtectConfigurationCommand";
import {
  DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
  DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "../commands/DeleteProtectConfigurationRuleSetNumberOverrideCommand";
import {
  DeleteRegistrationAttachmentCommandInput,
  DeleteRegistrationAttachmentCommandOutput,
} from "../commands/DeleteRegistrationAttachmentCommand";
import { DeleteRegistrationCommandInput, DeleteRegistrationCommandOutput } from "../commands/DeleteRegistrationCommand";
import {
  DeleteRegistrationFieldValueCommandInput,
  DeleteRegistrationFieldValueCommandOutput,
} from "../commands/DeleteRegistrationFieldValueCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "../commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVerifiedDestinationNumberCommandInput,
  DeleteVerifiedDestinationNumberCommandOutput,
} from "../commands/DeleteVerifiedDestinationNumberCommand";
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
import {
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput,
} from "../commands/DescribeProtectConfigurationsCommand";
import {
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput,
} from "../commands/DescribeRegistrationAttachmentsCommand";
import {
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationFieldDefinitionsCommand";
import {
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "../commands/DescribeRegistrationFieldValuesCommand";
import {
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput,
} from "../commands/DescribeRegistrationsCommand";
import {
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationSectionDefinitionsCommand";
import {
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "../commands/DescribeRegistrationTypeDefinitionsCommand";
import {
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput,
} from "../commands/DescribeRegistrationVersionsCommand";
import { DescribeSenderIdsCommandInput, DescribeSenderIdsCommandOutput } from "../commands/DescribeSenderIdsCommand";
import {
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "../commands/DescribeSpendLimitsCommand";
import {
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput,
} from "../commands/DescribeVerifiedDestinationNumbersCommand";
import {
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "../commands/DisassociateOriginationIdentityCommand";
import {
  DisassociateProtectConfigurationCommandInput,
  DisassociateProtectConfigurationCommandOutput,
} from "../commands/DisassociateProtectConfigurationCommand";
import {
  DiscardRegistrationVersionCommandInput,
  DiscardRegistrationVersionCommandOutput,
} from "../commands/DiscardRegistrationVersionCommand";
import {
  GetProtectConfigurationCountryRuleSetCommandInput,
  GetProtectConfigurationCountryRuleSetCommandOutput,
} from "../commands/GetProtectConfigurationCountryRuleSetCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import {
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "../commands/ListPoolOriginationIdentitiesCommand";
import {
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
} from "../commands/ListProtectConfigurationRuleSetNumberOverridesCommand";
import {
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput,
} from "../commands/ListRegistrationAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutKeywordCommandInput, PutKeywordCommandOutput } from "../commands/PutKeywordCommand";
import { PutMessageFeedbackCommandInput, PutMessageFeedbackCommandOutput } from "../commands/PutMessageFeedbackCommand";
import { PutOptedOutNumberCommandInput, PutOptedOutNumberCommandOutput } from "../commands/PutOptedOutNumberCommand";
import {
  PutProtectConfigurationRuleSetNumberOverrideCommandInput,
  PutProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "../commands/PutProtectConfigurationRuleSetNumberOverrideCommand";
import {
  PutRegistrationFieldValueCommandInput,
  PutRegistrationFieldValueCommandOutput,
} from "../commands/PutRegistrationFieldValueCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "../commands/ReleasePhoneNumberCommand";
import { ReleaseSenderIdCommandInput, ReleaseSenderIdCommandOutput } from "../commands/ReleaseSenderIdCommand";
import { RequestPhoneNumberCommandInput, RequestPhoneNumberCommandOutput } from "../commands/RequestPhoneNumberCommand";
import { RequestSenderIdCommandInput, RequestSenderIdCommandOutput } from "../commands/RequestSenderIdCommand";
import {
  SendDestinationNumberVerificationCodeCommandInput,
  SendDestinationNumberVerificationCodeCommandOutput,
} from "../commands/SendDestinationNumberVerificationCodeCommand";
import { SendMediaMessageCommandInput, SendMediaMessageCommandOutput } from "../commands/SendMediaMessageCommand";
import { SendTextMessageCommandInput, SendTextMessageCommandOutput } from "../commands/SendTextMessageCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "../commands/SendVoiceMessageCommand";
import {
  SetAccountDefaultProtectConfigurationCommandInput,
  SetAccountDefaultProtectConfigurationCommandOutput,
} from "../commands/SetAccountDefaultProtectConfigurationCommand";
import {
  SetDefaultMessageFeedbackEnabledCommandInput,
  SetDefaultMessageFeedbackEnabledCommandOutput,
} from "../commands/SetDefaultMessageFeedbackEnabledCommand";
import {
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "../commands/SetDefaultMessageTypeCommand";
import { SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput } from "../commands/SetDefaultSenderIdCommand";
import {
  SetMediaMessageSpendLimitOverrideCommandInput,
  SetMediaMessageSpendLimitOverrideCommandOutput,
} from "../commands/SetMediaMessageSpendLimitOverrideCommand";
import {
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "../commands/SetTextMessageSpendLimitOverrideCommand";
import {
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "../commands/SetVoiceMessageSpendLimitOverrideCommand";
import {
  SubmitRegistrationVersionCommandInput,
  SubmitRegistrationVersionCommandOutput,
} from "../commands/SubmitRegistrationVersionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "../commands/UpdateEventDestinationCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "../commands/UpdatePhoneNumberCommand";
import { UpdatePoolCommandInput, UpdatePoolCommandOutput } from "../commands/UpdatePoolCommand";
import {
  UpdateProtectConfigurationCommandInput,
  UpdateProtectConfigurationCommandOutput,
} from "../commands/UpdateProtectConfigurationCommand";
import {
  UpdateProtectConfigurationCountryRuleSetCommandInput,
  UpdateProtectConfigurationCountryRuleSetCommandOutput,
} from "../commands/UpdateProtectConfigurationCountryRuleSetCommand";
import { UpdateSenderIdCommandInput, UpdateSenderIdCommandOutput } from "../commands/UpdateSenderIdCommand";
import {
  VerifyDestinationNumberCommandInput,
  VerifyDestinationNumberCommandOutput,
} from "../commands/VerifyDestinationNumberCommand";
import {
  AccessDeniedException,
  AssociateOriginationIdentityRequest,
  AssociateProtectConfigurationRequest,
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
  CreateProtectConfigurationRequest,
  CreateProtectConfigurationResult,
  CreateRegistrationAssociationRequest,
  CreateRegistrationAttachmentRequest,
  CreateRegistrationAttachmentResult,
  CreateRegistrationRequest,
  CreateRegistrationResult,
  CreateRegistrationVersionRequest,
  CreateRegistrationVersionResult,
  CreateVerifiedDestinationNumberRequest,
  CreateVerifiedDestinationNumberResult,
  DeleteAccountDefaultProtectConfigurationRequest,
  DeleteConfigurationSetRequest,
  DeleteConfigurationSetResult,
  DeleteDefaultMessageTypeRequest,
  DeleteDefaultSenderIdRequest,
  DeleteEventDestinationRequest,
  DeleteKeywordRequest,
  DeleteMediaMessageSpendLimitOverrideRequest,
  DeleteOptedOutNumberRequest,
  DeleteOptedOutNumberResult,
  DeleteOptOutListRequest,
  DeleteOptOutListResult,
  DeletePoolRequest,
  DeletePoolResult,
  DeleteProtectConfigurationRequest,
  DeleteProtectConfigurationResult,
  DeleteProtectConfigurationRuleSetNumberOverrideRequest,
  DeleteProtectConfigurationRuleSetNumberOverrideResult,
  DeleteRegistrationAttachmentRequest,
  DeleteRegistrationAttachmentResult,
  DeleteRegistrationFieldValueRequest,
  DeleteRegistrationRequest,
  DeleteRegistrationResult,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResult,
  DeleteTextMessageSpendLimitOverrideRequest,
  DeleteVerifiedDestinationNumberRequest,
  DeleteVerifiedDestinationNumberResult,
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
  DescribeProtectConfigurationsRequest,
  DescribeProtectConfigurationsResult,
  DescribeRegistrationAttachmentsRequest,
  DescribeRegistrationAttachmentsResult,
  DescribeRegistrationFieldDefinitionsRequest,
  DescribeRegistrationFieldValuesRequest,
  DescribeRegistrationSectionDefinitionsRequest,
  DescribeRegistrationsRequest,
  DescribeRegistrationsResult,
  DescribeRegistrationTypeDefinitionsRequest,
  DescribeRegistrationVersionsRequest,
  DescribeRegistrationVersionsResult,
  DescribeSenderIdsRequest,
  DescribeSpendLimitsRequest,
  DescribeVerifiedDestinationNumbersRequest,
  DescribeVerifiedDestinationNumbersResult,
  DestinationCountryParameterKey,
  DisassociateOriginationIdentityRequest,
  DisassociateProtectConfigurationRequest,
  DiscardRegistrationVersionRequest,
  DiscardRegistrationVersionResult,
  EventType,
  GetProtectConfigurationCountryRuleSetRequest,
  GetResourcePolicyRequest,
  GetResourcePolicyResult,
  InternalServerException,
  KeywordFilter,
  KinesisFirehoseDestination,
  ListPoolOriginationIdentitiesRequest,
  ListProtectConfigurationRuleSetNumberOverridesRequest,
  ListProtectConfigurationRuleSetNumberOverridesResult,
  ListRegistrationAssociationsRequest,
  ListTagsForResourceRequest,
  MessageType,
  NumberCapability,
  OptedOutFilter,
  OptedOutNumberInformation,
  OptOutListInformation,
  PhoneNumberFilter,
  PhoneNumberInformation,
  PoolFilter,
  PoolInformation,
  PoolOriginationIdentitiesFilter,
  ProtectConfigurationCountryRuleSetInformation,
  ProtectConfigurationFilter,
  ProtectConfigurationInformation,
  ProtectConfigurationRuleSetNumberOverride,
  ProtectConfigurationRuleSetNumberOverrideFilterItem,
  PutKeywordRequest,
  PutMessageFeedbackRequest,
  PutOptedOutNumberRequest,
  PutOptedOutNumberResult,
  PutProtectConfigurationRuleSetNumberOverrideRequest,
  PutProtectConfigurationRuleSetNumberOverrideResult,
  PutRegistrationFieldValueRequest,
  PutResourcePolicyRequest,
  PutResourcePolicyResult,
  RegistrationAssociationFilter,
  RegistrationAttachmentFilter,
  RegistrationAttachmentsInformation,
  RegistrationFilter,
  RegistrationInformation,
  RegistrationTypeFilter,
  RegistrationVersionFilter,
  RegistrationVersionInformation,
  RegistrationVersionStatusHistory,
  ReleasePhoneNumberRequest,
  ReleasePhoneNumberResult,
  ReleaseSenderIdRequest,
  RequestPhoneNumberRequest,
  RequestPhoneNumberResult,
  RequestSenderIdRequest,
  ResourceNotFoundException,
  SendDestinationNumberVerificationCodeRequest,
  SenderIdAndCountry,
  SenderIdFilter,
  SendMediaMessageRequest,
  SendTextMessageRequest,
  SendVoiceMessageRequest,
  ServiceQuotaExceededException,
  SetAccountDefaultProtectConfigurationRequest,
  SetDefaultMessageFeedbackEnabledRequest,
  SetDefaultMessageTypeRequest,
  SetDefaultSenderIdRequest,
  SetMediaMessageSpendLimitOverrideRequest,
  SetTextMessageSpendLimitOverrideRequest,
  SetVoiceMessageSpendLimitOverrideRequest,
  SnsDestination,
  SubmitRegistrationVersionRequest,
  SubmitRegistrationVersionResult,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateEventDestinationRequest,
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResult,
  UpdatePoolRequest,
  UpdatePoolResult,
  UpdateProtectConfigurationCountryRuleSetRequest,
  UpdateProtectConfigurationRequest,
  UpdateProtectConfigurationResult,
  UpdateSenderIdRequest,
  ValidationException,
  VerifiedDestinationNumberFilter,
  VerifiedDestinationNumberInformation,
  VerifyDestinationNumberRequest,
  VerifyDestinationNumberResult,
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
 * serializeAws_json1_0AssociateProtectConfigurationCommand
 */
export const se_AssociateProtectConfigurationCommand = async (
  input: AssociateProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0CreateProtectConfigurationCommand
 */
export const se_CreateProtectConfigurationCommand = async (
  input: CreateProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProtectConfiguration");
  let body: any;
  body = JSON.stringify(se_CreateProtectConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRegistrationCommand
 */
export const se_CreateRegistrationCommand = async (
  input: CreateRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegistration");
  let body: any;
  body = JSON.stringify(se_CreateRegistrationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRegistrationAssociationCommand
 */
export const se_CreateRegistrationAssociationCommand = async (
  input: CreateRegistrationAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegistrationAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRegistrationAttachmentCommand
 */
export const se_CreateRegistrationAttachmentCommand = async (
  input: CreateRegistrationAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegistrationAttachment");
  let body: any;
  body = JSON.stringify(se_CreateRegistrationAttachmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRegistrationVersionCommand
 */
export const se_CreateRegistrationVersionCommand = async (
  input: CreateRegistrationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRegistrationVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVerifiedDestinationNumberCommand
 */
export const se_CreateVerifiedDestinationNumberCommand = async (
  input: CreateVerifiedDestinationNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVerifiedDestinationNumber");
  let body: any;
  body = JSON.stringify(se_CreateVerifiedDestinationNumberRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAccountDefaultProtectConfigurationCommand
 */
export const se_DeleteAccountDefaultProtectConfigurationCommand = async (
  input: DeleteAccountDefaultProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccountDefaultProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0DeleteMediaMessageSpendLimitOverrideCommand
 */
export const se_DeleteMediaMessageSpendLimitOverrideCommand = async (
  input: DeleteMediaMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMediaMessageSpendLimitOverride");
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
 * serializeAws_json1_0DeleteProtectConfigurationCommand
 */
export const se_DeleteProtectConfigurationCommand = async (
  input: DeleteProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteProtectConfigurationRuleSetNumberOverrideCommand
 */
export const se_DeleteProtectConfigurationRuleSetNumberOverrideCommand = async (
  input: DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProtectConfigurationRuleSetNumberOverride");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRegistrationCommand
 */
export const se_DeleteRegistrationCommand = async (
  input: DeleteRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegistration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRegistrationAttachmentCommand
 */
export const se_DeleteRegistrationAttachmentCommand = async (
  input: DeleteRegistrationAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegistrationAttachment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRegistrationFieldValueCommand
 */
export const se_DeleteRegistrationFieldValueCommand = async (
  input: DeleteRegistrationFieldValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRegistrationFieldValue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
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
 * serializeAws_json1_0DeleteVerifiedDestinationNumberCommand
 */
export const se_DeleteVerifiedDestinationNumberCommand = async (
  input: DeleteVerifiedDestinationNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVerifiedDestinationNumber");
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
 * serializeAws_json1_0DescribeProtectConfigurationsCommand
 */
export const se_DescribeProtectConfigurationsCommand = async (
  input: DescribeProtectConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProtectConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationAttachmentsCommand
 */
export const se_DescribeRegistrationAttachmentsCommand = async (
  input: DescribeRegistrationAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationAttachments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationFieldDefinitionsCommand
 */
export const se_DescribeRegistrationFieldDefinitionsCommand = async (
  input: DescribeRegistrationFieldDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationFieldDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationFieldValuesCommand
 */
export const se_DescribeRegistrationFieldValuesCommand = async (
  input: DescribeRegistrationFieldValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationFieldValues");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationsCommand
 */
export const se_DescribeRegistrationsCommand = async (
  input: DescribeRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationSectionDefinitionsCommand
 */
export const se_DescribeRegistrationSectionDefinitionsCommand = async (
  input: DescribeRegistrationSectionDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationSectionDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationTypeDefinitionsCommand
 */
export const se_DescribeRegistrationTypeDefinitionsCommand = async (
  input: DescribeRegistrationTypeDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationTypeDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeRegistrationVersionsCommand
 */
export const se_DescribeRegistrationVersionsCommand = async (
  input: DescribeRegistrationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegistrationVersions");
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
 * serializeAws_json1_0DescribeVerifiedDestinationNumbersCommand
 */
export const se_DescribeVerifiedDestinationNumbersCommand = async (
  input: DescribeVerifiedDestinationNumbersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVerifiedDestinationNumbers");
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
 * serializeAws_json1_0DisassociateProtectConfigurationCommand
 */
export const se_DisassociateProtectConfigurationCommand = async (
  input: DisassociateProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DiscardRegistrationVersionCommand
 */
export const se_DiscardRegistrationVersionCommand = async (
  input: DiscardRegistrationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DiscardRegistrationVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetProtectConfigurationCountryRuleSetCommand
 */
export const se_GetProtectConfigurationCountryRuleSetCommand = async (
  input: GetProtectConfigurationCountryRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProtectConfigurationCountryRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0ListProtectConfigurationRuleSetNumberOverridesCommand
 */
export const se_ListProtectConfigurationRuleSetNumberOverridesCommand = async (
  input: ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProtectConfigurationRuleSetNumberOverrides");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRegistrationAssociationsCommand
 */
export const se_ListRegistrationAssociationsCommand = async (
  input: ListRegistrationAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRegistrationAssociations");
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
 * serializeAws_json1_0PutMessageFeedbackCommand
 */
export const se_PutMessageFeedbackCommand = async (
  input: PutMessageFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutMessageFeedback");
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
 * serializeAws_json1_0PutProtectConfigurationRuleSetNumberOverrideCommand
 */
export const se_PutProtectConfigurationRuleSetNumberOverrideCommand = async (
  input: PutProtectConfigurationRuleSetNumberOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutProtectConfigurationRuleSetNumberOverride");
  let body: any;
  body = JSON.stringify(se_PutProtectConfigurationRuleSetNumberOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutRegistrationFieldValueCommand
 */
export const se_PutRegistrationFieldValueCommand = async (
  input: PutRegistrationFieldValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRegistrationFieldValue");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
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
 * serializeAws_json1_0ReleaseSenderIdCommand
 */
export const se_ReleaseSenderIdCommand = async (
  input: ReleaseSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReleaseSenderId");
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
 * serializeAws_json1_0RequestSenderIdCommand
 */
export const se_RequestSenderIdCommand = async (
  input: RequestSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RequestSenderId");
  let body: any;
  body = JSON.stringify(se_RequestSenderIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendDestinationNumberVerificationCodeCommand
 */
export const se_SendDestinationNumberVerificationCodeCommand = async (
  input: SendDestinationNumberVerificationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendDestinationNumberVerificationCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SendMediaMessageCommand
 */
export const se_SendMediaMessageCommand = async (
  input: SendMediaMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendMediaMessage");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0SetAccountDefaultProtectConfigurationCommand
 */
export const se_SetAccountDefaultProtectConfigurationCommand = async (
  input: SetAccountDefaultProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetAccountDefaultProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SetDefaultMessageFeedbackEnabledCommand
 */
export const se_SetDefaultMessageFeedbackEnabledCommand = async (
  input: SetDefaultMessageFeedbackEnabledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetDefaultMessageFeedbackEnabled");
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
 * serializeAws_json1_0SetMediaMessageSpendLimitOverrideCommand
 */
export const se_SetMediaMessageSpendLimitOverrideCommand = async (
  input: SetMediaMessageSpendLimitOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetMediaMessageSpendLimitOverride");
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
 * serializeAws_json1_0SubmitRegistrationVersionCommand
 */
export const se_SubmitRegistrationVersionCommand = async (
  input: SubmitRegistrationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitRegistrationVersion");
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
 * serializeAws_json1_0UpdateProtectConfigurationCommand
 */
export const se_UpdateProtectConfigurationCommand = async (
  input: UpdateProtectConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProtectConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateProtectConfigurationCountryRuleSetCommand
 */
export const se_UpdateProtectConfigurationCountryRuleSetCommand = async (
  input: UpdateProtectConfigurationCountryRuleSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProtectConfigurationCountryRuleSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateSenderIdCommand
 */
export const se_UpdateSenderIdCommand = async (
  input: UpdateSenderIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSenderId");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0VerifyDestinationNumberCommand
 */
export const se_VerifyDestinationNumberCommand = async (
  input: VerifyDestinationNumberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("VerifyDestinationNumber");
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
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0AssociateProtectConfigurationCommand
 */
export const de_AssociateProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0CreateEventDestinationCommand
 */
export const de_CreateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0CreateOptOutListCommand
 */
export const de_CreateOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0CreatePoolCommand
 */
export const de_CreatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0CreateProtectConfigurationCommand
 */
export const de_CreateProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProtectConfigurationResult(data, context);
  const response: CreateProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRegistrationCommand
 */
export const de_CreateRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRegistrationResult(data, context);
  const response: CreateRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRegistrationAssociationCommand
 */
export const de_CreateRegistrationAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistrationAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRegistrationAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRegistrationAttachmentCommand
 */
export const de_CreateRegistrationAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistrationAttachmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRegistrationAttachmentResult(data, context);
  const response: CreateRegistrationAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRegistrationVersionCommand
 */
export const de_CreateRegistrationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistrationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRegistrationVersionResult(data, context);
  const response: CreateRegistrationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateVerifiedDestinationNumberCommand
 */
export const de_CreateVerifiedDestinationNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVerifiedDestinationNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVerifiedDestinationNumberResult(data, context);
  const response: CreateVerifiedDestinationNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAccountDefaultProtectConfigurationCommand
 */
export const de_DeleteAccountDefaultProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountDefaultProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAccountDefaultProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteDefaultMessageTypeCommand
 */
export const de_DeleteDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteDefaultSenderIdCommand
 */
export const de_DeleteDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteEventDestinationCommand
 */
export const de_DeleteEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteKeywordCommand
 */
export const de_DeleteKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteMediaMessageSpendLimitOverrideCommand
 */
export const de_DeleteMediaMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMediaMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteMediaMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteOptedOutNumberCommand
 */
export const de_DeleteOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteOptOutListCommand
 */
export const de_DeleteOptOutListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOptOutListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeletePoolCommand
 */
export const de_DeletePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteProtectConfigurationCommand
 */
export const de_DeleteProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProtectConfigurationResult(data, context);
  const response: DeleteProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteProtectConfigurationRuleSetNumberOverrideCommand
 */
export const de_DeleteProtectConfigurationRuleSetNumberOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteProtectConfigurationRuleSetNumberOverrideResult(data, context);
  const response: DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRegistrationCommand
 */
export const de_DeleteRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRegistrationResult(data, context);
  const response: DeleteRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRegistrationAttachmentCommand
 */
export const de_DeleteRegistrationAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistrationAttachmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRegistrationAttachmentResult(data, context);
  const response: DeleteRegistrationAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRegistrationFieldValueCommand
 */
export const de_DeleteRegistrationFieldValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistrationFieldValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRegistrationFieldValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResult(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTextMessageSpendLimitOverrideCommand
 */
export const de_DeleteTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DeleteVerifiedDestinationNumberCommand
 */
export const de_DeleteVerifiedDestinationNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVerifiedDestinationNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVerifiedDestinationNumberResult(data, context);
  const response: DeleteVerifiedDestinationNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteVoiceMessageSpendLimitOverrideCommand
 */
export const de_DeleteVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeAccountLimitsCommand
 */
export const de_DescribeAccountLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeConfigurationSetsCommand
 */
export const de_DescribeConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeKeywordsCommand
 */
export const de_DescribeKeywordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeywordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeOptedOutNumbersCommand
 */
export const de_DescribeOptedOutNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptedOutNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeOptOutListsCommand
 */
export const de_DescribeOptOutListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOptOutListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribePhoneNumbersCommand
 */
export const de_DescribePhoneNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePhoneNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribePoolsCommand
 */
export const de_DescribePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeProtectConfigurationsCommand
 */
export const de_DescribeProtectConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProtectConfigurationsResult(data, context);
  const response: DescribeProtectConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationAttachmentsCommand
 */
export const de_DescribeRegistrationAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationAttachmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegistrationAttachmentsResult(data, context);
  const response: DescribeRegistrationAttachmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationFieldDefinitionsCommand
 */
export const de_DescribeRegistrationFieldDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationFieldDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRegistrationFieldDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationFieldValuesCommand
 */
export const de_DescribeRegistrationFieldValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationFieldValuesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRegistrationFieldValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationsCommand
 */
export const de_DescribeRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegistrationsResult(data, context);
  const response: DescribeRegistrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationSectionDefinitionsCommand
 */
export const de_DescribeRegistrationSectionDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationSectionDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRegistrationSectionDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationTypeDefinitionsCommand
 */
export const de_DescribeRegistrationTypeDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationTypeDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRegistrationTypeDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeRegistrationVersionsCommand
 */
export const de_DescribeRegistrationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistrationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegistrationVersionsResult(data, context);
  const response: DescribeRegistrationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeSenderIdsCommand
 */
export const de_DescribeSenderIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSenderIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeSpendLimitsCommand
 */
export const de_DescribeSpendLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpendLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DescribeVerifiedDestinationNumbersCommand
 */
export const de_DescribeVerifiedDestinationNumbersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVerifiedDestinationNumbersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVerifiedDestinationNumbersResult(data, context);
  const response: DescribeVerifiedDestinationNumbersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateOriginationIdentityCommand
 */
export const de_DisassociateOriginationIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOriginationIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0DisassociateProtectConfigurationCommand
 */
export const de_DisassociateProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DiscardRegistrationVersionCommand
 */
export const de_DiscardRegistrationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscardRegistrationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DiscardRegistrationVersionResult(data, context);
  const response: DiscardRegistrationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetProtectConfigurationCountryRuleSetCommand
 */
export const de_GetProtectConfigurationCountryRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectConfigurationCountryRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetProtectConfigurationCountryRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResult(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPoolOriginationIdentitiesCommand
 */
export const de_ListPoolOriginationIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoolOriginationIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ListProtectConfigurationRuleSetNumberOverridesCommand
 */
export const de_ListProtectConfigurationRuleSetNumberOverridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectConfigurationRuleSetNumberOverridesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProtectConfigurationRuleSetNumberOverridesResult(data, context);
  const response: ListProtectConfigurationRuleSetNumberOverridesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRegistrationAssociationsCommand
 */
export const de_ListRegistrationAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistrationAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRegistrationAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutKeywordCommand
 */
export const de_PutKeywordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutKeywordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0PutMessageFeedbackCommand
 */
export const de_PutMessageFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMessageFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutMessageFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutOptedOutNumberCommand
 */
export const de_PutOptedOutNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOptedOutNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0PutProtectConfigurationRuleSetNumberOverrideCommand
 */
export const de_PutProtectConfigurationRuleSetNumberOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProtectConfigurationRuleSetNumberOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutProtectConfigurationRuleSetNumberOverrideResult(data, context);
  const response: PutProtectConfigurationRuleSetNumberOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutRegistrationFieldValueCommand
 */
export const de_PutRegistrationFieldValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRegistrationFieldValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRegistrationFieldValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResult(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ReleasePhoneNumberCommand
 */
export const de_ReleasePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleasePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0ReleaseSenderIdCommand
 */
export const de_ReleaseSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ReleaseSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RequestPhoneNumberCommand
 */
export const de_RequestPhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestPhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0RequestSenderIdCommand
 */
export const de_RequestSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RequestSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendDestinationNumberVerificationCodeCommand
 */
export const de_SendDestinationNumberVerificationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDestinationNumberVerificationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendDestinationNumberVerificationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendMediaMessageCommand
 */
export const de_SendMediaMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMediaMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendMediaMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SendTextMessageCommand
 */
export const de_SendTextMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTextMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SendVoiceMessageCommand
 */
export const de_SendVoiceMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SetAccountDefaultProtectConfigurationCommand
 */
export const de_SetAccountDefaultProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAccountDefaultProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetAccountDefaultProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SetDefaultMessageFeedbackEnabledCommand
 */
export const de_SetDefaultMessageFeedbackEnabledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultMessageFeedbackEnabledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetDefaultMessageFeedbackEnabledCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SetDefaultMessageTypeCommand
 */
export const de_SetDefaultMessageTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultMessageTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SetDefaultSenderIdCommand
 */
export const de_SetDefaultSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SetMediaMessageSpendLimitOverrideCommand
 */
export const de_SetMediaMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetMediaMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetMediaMessageSpendLimitOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0SetTextMessageSpendLimitOverrideCommand
 */
export const de_SetTextMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTextMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SetVoiceMessageSpendLimitOverrideCommand
 */
export const de_SetVoiceMessageSpendLimitOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVoiceMessageSpendLimitOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0SubmitRegistrationVersionCommand
 */
export const de_SubmitRegistrationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitRegistrationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SubmitRegistrationVersionResult(data, context);
  const response: SubmitRegistrationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEventDestinationCommand
 */
export const de_UpdateEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdatePhoneNumberCommand
 */
export const de_UpdatePhoneNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePhoneNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdatePoolCommand
 */
export const de_UpdatePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_0UpdateProtectConfigurationCommand
 */
export const de_UpdateProtectConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProtectConfigurationResult(data, context);
  const response: UpdateProtectConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateProtectConfigurationCountryRuleSetCommand
 */
export const de_UpdateProtectConfigurationCountryRuleSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectConfigurationCountryRuleSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProtectConfigurationCountryRuleSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateSenderIdCommand
 */
export const de_UpdateSenderIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSenderIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSenderIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0VerifyDestinationNumberCommand
 */
export const de_VerifyDestinationNumberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDestinationNumberCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyDestinationNumberResult(data, context);
  const response: VerifyDestinationNumberCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      }) as never;
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

// se_AssociateProtectConfigurationRequest omitted.

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

/**
 * serializeAws_json1_0CreateProtectConfigurationRequest
 */
const se_CreateProtectConfigurationRequest = (
  input: CreateProtectConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeletionProtectionEnabled: [],
    Tags: _json,
  });
};

// se_CreateRegistrationAssociationRequest omitted.

/**
 * serializeAws_json1_0CreateRegistrationAttachmentRequest
 */
const se_CreateRegistrationAttachmentRequest = (
  input: CreateRegistrationAttachmentRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AttachmentBody: context.base64Encoder,
    AttachmentUrl: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateRegistrationRequest
 */
const se_CreateRegistrationRequest = (input: CreateRegistrationRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RegistrationType: [],
    Tags: _json,
  });
};

// se_CreateRegistrationVersionRequest omitted.

/**
 * serializeAws_json1_0CreateVerifiedDestinationNumberRequest
 */
const se_CreateVerifiedDestinationNumberRequest = (
  input: CreateVerifiedDestinationNumberRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DestinationPhoneNumber: [],
    Tags: _json,
  });
};

// se_DeleteAccountDefaultProtectConfigurationRequest omitted.

// se_DeleteConfigurationSetRequest omitted.

// se_DeleteDefaultMessageTypeRequest omitted.

// se_DeleteDefaultSenderIdRequest omitted.

// se_DeleteEventDestinationRequest omitted.

// se_DeleteKeywordRequest omitted.

// se_DeleteMediaMessageSpendLimitOverrideRequest omitted.

// se_DeleteOptedOutNumberRequest omitted.

// se_DeleteOptOutListRequest omitted.

// se_DeletePoolRequest omitted.

// se_DeleteProtectConfigurationRequest omitted.

// se_DeleteProtectConfigurationRuleSetNumberOverrideRequest omitted.

// se_DeleteRegistrationAttachmentRequest omitted.

// se_DeleteRegistrationFieldValueRequest omitted.

// se_DeleteRegistrationRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteTextMessageSpendLimitOverrideRequest omitted.

// se_DeleteVerifiedDestinationNumberRequest omitted.

// se_DeleteVoiceMessageSpendLimitOverrideRequest omitted.

// se_DescribeAccountAttributesRequest omitted.

// se_DescribeAccountLimitsRequest omitted.

// se_DescribeConfigurationSetsRequest omitted.

// se_DescribeKeywordsRequest omitted.

// se_DescribeOptedOutNumbersRequest omitted.

// se_DescribeOptOutListsRequest omitted.

// se_DescribePhoneNumbersRequest omitted.

// se_DescribePoolsRequest omitted.

// se_DescribeProtectConfigurationsRequest omitted.

// se_DescribeRegistrationAttachmentsRequest omitted.

// se_DescribeRegistrationFieldDefinitionsRequest omitted.

// se_DescribeRegistrationFieldValuesRequest omitted.

// se_DescribeRegistrationSectionDefinitionsRequest omitted.

// se_DescribeRegistrationsRequest omitted.

// se_DescribeRegistrationTypeDefinitionsRequest omitted.

// se_DescribeRegistrationVersionsRequest omitted.

// se_DescribeSenderIdsRequest omitted.

// se_DescribeSpendLimitsRequest omitted.

// se_DescribeVerifiedDestinationNumbersRequest omitted.

// se_DestinationCountryParameters omitted.

// se_DestinationPhoneNumberList omitted.

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

// se_DisassociateProtectConfigurationRequest omitted.

// se_DiscardRegistrationVersionRequest omitted.

// se_EventTypeList omitted.

// se_FieldPathList omitted.

// se_FilterValueList omitted.

// se_GetProtectConfigurationCountryRuleSetRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_KeywordFilter omitted.

// se_KeywordFilterList omitted.

// se_KeywordList omitted.

// se_KinesisFirehoseDestination omitted.

// se_ListPoolOriginationIdentitiesRequest omitted.

// se_ListProtectConfigurationRuleSetNumberOverrideFilter omitted.

// se_ListProtectConfigurationRuleSetNumberOverridesRequest omitted.

// se_ListRegistrationAssociationsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MediaUrlList omitted.

// se_MessageTypeList omitted.

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

// se_ProtectConfigurationCountryRuleSet omitted.

// se_ProtectConfigurationCountryRuleSetInformation omitted.

// se_ProtectConfigurationFilter omitted.

// se_ProtectConfigurationFilterList omitted.

// se_ProtectConfigurationIdList omitted.

// se_ProtectConfigurationRuleSetNumberOverrideFilterItem omitted.

// se_PutKeywordRequest omitted.

// se_PutMessageFeedbackRequest omitted.

// se_PutOptedOutNumberRequest omitted.

/**
 * serializeAws_json1_0PutProtectConfigurationRuleSetNumberOverrideRequest
 */
const se_PutProtectConfigurationRuleSetNumberOverrideRequest = (
  input: PutProtectConfigurationRuleSetNumberOverrideRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Action: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DestinationPhoneNumber: [],
    ExpirationTimestamp: (_) => _.getTime() / 1_000,
    ProtectConfigurationId: [],
  });
};

// se_PutRegistrationFieldValueRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_RegistrationAssociationFilter omitted.

// se_RegistrationAssociationFilterList omitted.

// se_RegistrationAttachmentFilter omitted.

// se_RegistrationAttachmentFilterList omitted.

// se_RegistrationAttachmentIdList omitted.

// se_RegistrationFilter omitted.

// se_RegistrationFilterList omitted.

// se_RegistrationIdList omitted.

// se_RegistrationTypeFilter omitted.

// se_RegistrationTypeFilterList omitted.

// se_RegistrationTypeList omitted.

// se_RegistrationVersionFilter omitted.

// se_RegistrationVersionFilterList omitted.

// se_RegistrationVersionNumberList omitted.

// se_ReleasePhoneNumberRequest omitted.

// se_ReleaseSenderIdRequest omitted.

/**
 * serializeAws_json1_0RequestPhoneNumberRequest
 */
const se_RequestPhoneNumberRequest = (input: RequestPhoneNumberRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeletionProtectionEnabled: [],
    InternationalSendingEnabled: [],
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

/**
 * serializeAws_json1_0RequestSenderIdRequest
 */
const se_RequestSenderIdRequest = (input: RequestSenderIdRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeletionProtectionEnabled: [],
    IsoCountryCode: [],
    MessageTypes: _json,
    SenderId: [],
    Tags: _json,
  });
};

// se_SectionPathList omitted.

// se_SelectChoiceList omitted.

// se_SendDestinationNumberVerificationCodeRequest omitted.

// se_SenderIdAndCountry omitted.

// se_SenderIdFilter omitted.

// se_SenderIdFilterList omitted.

// se_SenderIdList omitted.

// se_SendMediaMessageRequest omitted.

// se_SendTextMessageRequest omitted.

// se_SendVoiceMessageRequest omitted.

// se_SetAccountDefaultProtectConfigurationRequest omitted.

// se_SetDefaultMessageFeedbackEnabledRequest omitted.

// se_SetDefaultMessageTypeRequest omitted.

// se_SetDefaultSenderIdRequest omitted.

// se_SetMediaMessageSpendLimitOverrideRequest omitted.

// se_SetTextMessageSpendLimitOverrideRequest omitted.

// se_SetVoiceMessageSpendLimitOverrideRequest omitted.

// se_SnsDestination omitted.

// se_SubmitRegistrationVersionRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateEventDestinationRequest omitted.

// se_UpdatePhoneNumberRequest omitted.

// se_UpdatePoolRequest omitted.

// se_UpdateProtectConfigurationCountryRuleSetRequest omitted.

// se_UpdateProtectConfigurationRequest omitted.

// se_UpdateSenderIdRequest omitted.

// se_VerifiedDestinationNumberFilter omitted.

// se_VerifiedDestinationNumberFilterList omitted.

// se_VerifiedDestinationNumberIdList omitted.

// se_VerifyDestinationNumberRequest omitted.

// de_AccessDeniedException omitted.

// de_AccountAttribute omitted.

// de_AccountAttributeList omitted.

// de_AccountLimit omitted.

// de_AccountLimitList omitted.

// de_AssociateOriginationIdentityResult omitted.

// de_AssociateProtectConfigurationResult omitted.

// de_CloudWatchLogsDestination omitted.

/**
 * deserializeAws_json1_0ConfigurationSetInformation
 */
const de_ConfigurationSetInformation = (output: any, context: __SerdeContext): ConfigurationSetInformation => {
  return take(output, {
    ConfigurationSetArn: __expectString,
    ConfigurationSetName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultMessageFeedbackEnabled: __expectBoolean,
    DefaultMessageType: __expectString,
    DefaultSenderId: __expectString,
    EventDestinations: _json,
    ProtectConfigurationId: __expectString,
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
    TwoWayChannelRole: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateProtectConfigurationResult
 */
const de_CreateProtectConfigurationResult = (
  output: any,
  context: __SerdeContext
): CreateProtectConfigurationResult => {
  return take(output, {
    AccountDefault: __expectBoolean,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
    Tags: _json,
  }) as any;
};

// de_CreateRegistrationAssociationResult omitted.

/**
 * deserializeAws_json1_0CreateRegistrationAttachmentResult
 */
const de_CreateRegistrationAttachmentResult = (
  output: any,
  context: __SerdeContext
): CreateRegistrationAttachmentResult => {
  return take(output, {
    AttachmentStatus: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegistrationAttachmentArn: __expectString,
    RegistrationAttachmentId: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateRegistrationResult
 */
const de_CreateRegistrationResult = (output: any, context: __SerdeContext): CreateRegistrationResult => {
  return take(output, {
    AdditionalAttributes: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentVersionNumber: __expectLong,
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationStatus: __expectString,
    RegistrationType: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateRegistrationVersionResult
 */
const de_CreateRegistrationVersionResult = (output: any, context: __SerdeContext): CreateRegistrationVersionResult => {
  return take(output, {
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationVersionStatus: __expectString,
    RegistrationVersionStatusHistory: (_: any) => de_RegistrationVersionStatusHistory(_, context),
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_0CreateVerifiedDestinationNumberResult
 */
const de_CreateVerifiedDestinationNumberResult = (
  output: any,
  context: __SerdeContext
): CreateVerifiedDestinationNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    Status: __expectString,
    Tags: _json,
    VerifiedDestinationNumberArn: __expectString,
    VerifiedDestinationNumberId: __expectString,
  }) as any;
};

// de_DeleteAccountDefaultProtectConfigurationResult omitted.

/**
 * deserializeAws_json1_0DeleteConfigurationSetResult
 */
const de_DeleteConfigurationSetResult = (output: any, context: __SerdeContext): DeleteConfigurationSetResult => {
  return take(output, {
    ConfigurationSetArn: __expectString,
    ConfigurationSetName: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultMessageFeedbackEnabled: __expectBoolean,
    DefaultMessageType: __expectString,
    DefaultSenderId: __expectString,
    EventDestinations: _json,
  }) as any;
};

// de_DeleteDefaultMessageTypeResult omitted.

// de_DeleteDefaultSenderIdResult omitted.

// de_DeleteEventDestinationResult omitted.

// de_DeleteKeywordResult omitted.

// de_DeleteMediaMessageSpendLimitOverrideResult omitted.

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
    TwoWayChannelRole: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteProtectConfigurationResult
 */
const de_DeleteProtectConfigurationResult = (
  output: any,
  context: __SerdeContext
): DeleteProtectConfigurationResult => {
  return take(output, {
    AccountDefault: __expectBoolean,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteProtectConfigurationRuleSetNumberOverrideResult
 */
const de_DeleteProtectConfigurationRuleSetNumberOverrideResult = (
  output: any,
  context: __SerdeContext
): DeleteProtectConfigurationRuleSetNumberOverrideResult => {
  return take(output, {
    Action: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsoCountryCode: __expectString,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteRegistrationAttachmentResult
 */
const de_DeleteRegistrationAttachmentResult = (
  output: any,
  context: __SerdeContext
): DeleteRegistrationAttachmentResult => {
  return take(output, {
    AttachmentStatus: __expectString,
    AttachmentUploadErrorReason: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegistrationAttachmentArn: __expectString,
    RegistrationAttachmentId: __expectString,
  }) as any;
};

// de_DeleteRegistrationFieldValueResult omitted.

/**
 * deserializeAws_json1_0DeleteRegistrationResult
 */
const de_DeleteRegistrationResult = (output: any, context: __SerdeContext): DeleteRegistrationResult => {
  return take(output, {
    AdditionalAttributes: _json,
    ApprovedVersionNumber: __expectLong,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentVersionNumber: __expectLong,
    LatestDeniedVersionNumber: __expectLong,
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationStatus: __expectString,
    RegistrationType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteResourcePolicyResult
 */
const de_DeleteResourcePolicyResult = (output: any, context: __SerdeContext): DeleteResourcePolicyResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Policy: __expectString,
    ResourceArn: __expectString,
  }) as any;
};

// de_DeleteTextMessageSpendLimitOverrideResult omitted.

/**
 * deserializeAws_json1_0DeleteVerifiedDestinationNumberResult
 */
const de_DeleteVerifiedDestinationNumberResult = (
  output: any,
  context: __SerdeContext
): DeleteVerifiedDestinationNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    VerifiedDestinationNumberArn: __expectString,
    VerifiedDestinationNumberId: __expectString,
  }) as any;
};

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

/**
 * deserializeAws_json1_0DescribeProtectConfigurationsResult
 */
const de_DescribeProtectConfigurationsResult = (
  output: any,
  context: __SerdeContext
): DescribeProtectConfigurationsResult => {
  return take(output, {
    NextToken: __expectString,
    ProtectConfigurations: (_: any) => de_ProtectConfigurationInformationList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeRegistrationAttachmentsResult
 */
const de_DescribeRegistrationAttachmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeRegistrationAttachmentsResult => {
  return take(output, {
    NextToken: __expectString,
    RegistrationAttachments: (_: any) => de_RegistrationAttachmentsInformationList(_, context),
  }) as any;
};

// de_DescribeRegistrationFieldDefinitionsResult omitted.

// de_DescribeRegistrationFieldValuesResult omitted.

// de_DescribeRegistrationSectionDefinitionsResult omitted.

/**
 * deserializeAws_json1_0DescribeRegistrationsResult
 */
const de_DescribeRegistrationsResult = (output: any, context: __SerdeContext): DescribeRegistrationsResult => {
  return take(output, {
    NextToken: __expectString,
    Registrations: (_: any) => de_RegistrationInformationList(_, context),
  }) as any;
};

// de_DescribeRegistrationTypeDefinitionsResult omitted.

/**
 * deserializeAws_json1_0DescribeRegistrationVersionsResult
 */
const de_DescribeRegistrationVersionsResult = (
  output: any,
  context: __SerdeContext
): DescribeRegistrationVersionsResult => {
  return take(output, {
    NextToken: __expectString,
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationVersions: (_: any) => de_RegistrationVersionInformationList(_, context),
  }) as any;
};

// de_DescribeSenderIdsResult omitted.

// de_DescribeSpendLimitsResult omitted.

/**
 * deserializeAws_json1_0DescribeVerifiedDestinationNumbersResult
 */
const de_DescribeVerifiedDestinationNumbersResult = (
  output: any,
  context: __SerdeContext
): DescribeVerifiedDestinationNumbersResult => {
  return take(output, {
    NextToken: __expectString,
    VerifiedDestinationNumbers: (_: any) => de_VerifiedDestinationNumberInformationList(_, context),
  }) as any;
};

// de_DisassociateOriginationIdentityResult omitted.

// de_DisassociateProtectConfigurationResult omitted.

/**
 * deserializeAws_json1_0DiscardRegistrationVersionResult
 */
const de_DiscardRegistrationVersionResult = (
  output: any,
  context: __SerdeContext
): DiscardRegistrationVersionResult => {
  return take(output, {
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationVersionStatus: __expectString,
    RegistrationVersionStatusHistory: (_: any) => de_RegistrationVersionStatusHistory(_, context),
    VersionNumber: __expectLong,
  }) as any;
};

// de_EventDestination omitted.

// de_EventDestinationList omitted.

// de_EventTypeList omitted.

// de_GetProtectConfigurationCountryRuleSetResult omitted.

/**
 * deserializeAws_json1_0GetResourcePolicyResult
 */
const de_GetResourcePolicyResult = (output: any, context: __SerdeContext): GetResourcePolicyResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Policy: __expectString,
    ResourceArn: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

// de_KeywordInformation omitted.

// de_KeywordInformationList omitted.

// de_KinesisFirehoseDestination omitted.

// de_ListPoolOriginationIdentitiesResult omitted.

/**
 * deserializeAws_json1_0ListProtectConfigurationRuleSetNumberOverridesResult
 */
const de_ListProtectConfigurationRuleSetNumberOverridesResult = (
  output: any,
  context: __SerdeContext
): ListProtectConfigurationRuleSetNumberOverridesResult => {
  return take(output, {
    NextToken: __expectString,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
    RuleSetNumberOverrides: (_: any) => de_ProtectConfigurationRuleSetNumberOverrideList(_, context),
  }) as any;
};

// de_ListRegistrationAssociationsResult omitted.

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
    InternationalSendingEnabled: __expectBoolean,
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
    RegistrationId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayChannelRole: __expectString,
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
    TwoWayChannelRole: __expectString,
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

// de_ProtectConfigurationCountryRuleSet omitted.

// de_ProtectConfigurationCountryRuleSetInformation omitted.

/**
 * deserializeAws_json1_0ProtectConfigurationInformation
 */
const de_ProtectConfigurationInformation = (output: any, context: __SerdeContext): ProtectConfigurationInformation => {
  return take(output, {
    AccountDefault: __expectBoolean,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ProtectConfigurationInformationList
 */
const de_ProtectConfigurationInformationList = (
  output: any,
  context: __SerdeContext
): ProtectConfigurationInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectConfigurationInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProtectConfigurationRuleSetNumberOverride
 */
const de_ProtectConfigurationRuleSetNumberOverride = (
  output: any,
  context: __SerdeContext
): ProtectConfigurationRuleSetNumberOverride => {
  return take(output, {
    Action: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsoCountryCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ProtectConfigurationRuleSetNumberOverrideList
 */
const de_ProtectConfigurationRuleSetNumberOverrideList = (
  output: any,
  context: __SerdeContext
): ProtectConfigurationRuleSetNumberOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectConfigurationRuleSetNumberOverride(entry, context);
    });
  return retVal;
};

// de_PutKeywordResult omitted.

// de_PutMessageFeedbackResult omitted.

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
 * deserializeAws_json1_0PutProtectConfigurationRuleSetNumberOverrideResult
 */
const de_PutProtectConfigurationRuleSetNumberOverrideResult = (
  output: any,
  context: __SerdeContext
): PutProtectConfigurationRuleSetNumberOverrideResult => {
  return take(output, {
    Action: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsoCountryCode: __expectString,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
  }) as any;
};

// de_PutRegistrationFieldValueResult omitted.

/**
 * deserializeAws_json1_0PutResourcePolicyResult
 */
const de_PutResourcePolicyResult = (output: any, context: __SerdeContext): PutResourcePolicyResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Policy: __expectString,
    ResourceArn: __expectString,
  }) as any;
};

// de_RegistrationAssociationMetadata omitted.

// de_RegistrationAssociationMetadataList omitted.

/**
 * deserializeAws_json1_0RegistrationAttachmentsInformation
 */
const de_RegistrationAttachmentsInformation = (
  output: any,
  context: __SerdeContext
): RegistrationAttachmentsInformation => {
  return take(output, {
    AttachmentStatus: __expectString,
    AttachmentUploadErrorReason: __expectString,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegistrationAttachmentArn: __expectString,
    RegistrationAttachmentId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RegistrationAttachmentsInformationList
 */
const de_RegistrationAttachmentsInformationList = (
  output: any,
  context: __SerdeContext
): RegistrationAttachmentsInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegistrationAttachmentsInformation(entry, context);
    });
  return retVal;
};

// de_RegistrationDeniedReasonInformation omitted.

// de_RegistrationDeniedReasonInformationList omitted.

// de_RegistrationFieldDefinition omitted.

// de_RegistrationFieldDefinitionList omitted.

// de_RegistrationFieldDisplayHints omitted.

// de_RegistrationFieldValueInformation omitted.

// de_RegistrationFieldValueInformationList omitted.

/**
 * deserializeAws_json1_0RegistrationInformation
 */
const de_RegistrationInformation = (output: any, context: __SerdeContext): RegistrationInformation => {
  return take(output, {
    AdditionalAttributes: _json,
    ApprovedVersionNumber: __expectLong,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentVersionNumber: __expectLong,
    LatestDeniedVersionNumber: __expectLong,
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationStatus: __expectString,
    RegistrationType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RegistrationInformationList
 */
const de_RegistrationInformationList = (output: any, context: __SerdeContext): RegistrationInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegistrationInformation(entry, context);
    });
  return retVal;
};

// de_RegistrationSectionDefinition omitted.

// de_RegistrationSectionDefinitionList omitted.

// de_RegistrationSectionDisplayHints omitted.

// de_RegistrationTypeDefinition omitted.

// de_RegistrationTypeDefinitionList omitted.

// de_RegistrationTypeDisplayHints omitted.

/**
 * deserializeAws_json1_0RegistrationVersionInformation
 */
const de_RegistrationVersionInformation = (output: any, context: __SerdeContext): RegistrationVersionInformation => {
  return take(output, {
    DeniedReasons: _json,
    RegistrationVersionStatus: __expectString,
    RegistrationVersionStatusHistory: (_: any) => de_RegistrationVersionStatusHistory(_, context),
    VersionNumber: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_0RegistrationVersionInformationList
 */
const de_RegistrationVersionInformationList = (
  output: any,
  context: __SerdeContext
): RegistrationVersionInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegistrationVersionInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RegistrationVersionStatusHistory
 */
const de_RegistrationVersionStatusHistory = (
  output: any,
  context: __SerdeContext
): RegistrationVersionStatusHistory => {
  return take(output, {
    ApprovedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ArchivedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeniedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DiscardedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DraftTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequiresAuthenticationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReviewingTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RevokedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SubmittedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
    RegistrationId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayChannelRole: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_ReleaseSenderIdResult omitted.

/**
 * deserializeAws_json1_0RequestPhoneNumberResult
 */
const de_RequestPhoneNumberResult = (output: any, context: __SerdeContext): RequestPhoneNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    InternationalSendingEnabled: __expectBoolean,
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
    RegistrationId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    Tags: _json,
    TwoWayChannelArn: __expectString,
    TwoWayChannelRole: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_RequestSenderIdResult omitted.

// de_ResourceNotFoundException omitted.

// de_SelectChoiceList omitted.

// de_SelectOptionDescription omitted.

// de_SelectOptionDescriptionsList omitted.

// de_SelectValidation omitted.

// de_SendDestinationNumberVerificationCodeResult omitted.

// de_SenderIdInformation omitted.

// de_SenderIdInformationList omitted.

// de_SendMediaMessageResult omitted.

// de_SendTextMessageResult omitted.

// de_SendVoiceMessageResult omitted.

// de_ServiceQuotaExceededException omitted.

// de_SetAccountDefaultProtectConfigurationResult omitted.

// de_SetDefaultMessageFeedbackEnabledResult omitted.

// de_SetDefaultMessageTypeResult omitted.

// de_SetDefaultSenderIdResult omitted.

// de_SetMediaMessageSpendLimitOverrideResult omitted.

// de_SetTextMessageSpendLimitOverrideResult omitted.

// de_SetVoiceMessageSpendLimitOverrideResult omitted.

// de_SnsDestination omitted.

// de_SpendLimit omitted.

// de_SpendLimitList omitted.

// de_StringList omitted.

// de_StringMap omitted.

/**
 * deserializeAws_json1_0SubmitRegistrationVersionResult
 */
const de_SubmitRegistrationVersionResult = (output: any, context: __SerdeContext): SubmitRegistrationVersionResult => {
  return take(output, {
    RegistrationArn: __expectString,
    RegistrationId: __expectString,
    RegistrationVersionStatus: __expectString,
    RegistrationVersionStatusHistory: (_: any) => de_RegistrationVersionStatusHistory(_, context),
    VersionNumber: __expectLong,
  }) as any;
};

// de_SupportedAssociation omitted.

// de_SupportedAssociationList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResult omitted.

// de_TextValidation omitted.

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
    InternationalSendingEnabled: __expectBoolean,
    IsoCountryCode: __expectString,
    MessageType: __expectString,
    MonthlyLeasingPrice: __expectString,
    NumberCapabilities: _json,
    NumberType: __expectString,
    OptOutListName: __expectString,
    PhoneNumber: __expectString,
    PhoneNumberArn: __expectString,
    PhoneNumberId: __expectString,
    RegistrationId: __expectString,
    SelfManagedOptOutsEnabled: __expectBoolean,
    Status: __expectString,
    TwoWayChannelArn: __expectString,
    TwoWayChannelRole: __expectString,
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
    TwoWayChannelRole: __expectString,
    TwoWayEnabled: __expectBoolean,
  }) as any;
};

// de_UpdateProtectConfigurationCountryRuleSetResult omitted.

/**
 * deserializeAws_json1_0UpdateProtectConfigurationResult
 */
const de_UpdateProtectConfigurationResult = (
  output: any,
  context: __SerdeContext
): UpdateProtectConfigurationResult => {
  return take(output, {
    AccountDefault: __expectBoolean,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionProtectionEnabled: __expectBoolean,
    ProtectConfigurationArn: __expectString,
    ProtectConfigurationId: __expectString,
  }) as any;
};

// de_UpdateSenderIdResult omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

/**
 * deserializeAws_json1_0VerifiedDestinationNumberInformation
 */
const de_VerifiedDestinationNumberInformation = (
  output: any,
  context: __SerdeContext
): VerifiedDestinationNumberInformation => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    Status: __expectString,
    VerifiedDestinationNumberArn: __expectString,
    VerifiedDestinationNumberId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0VerifiedDestinationNumberInformationList
 */
const de_VerifiedDestinationNumberInformationList = (
  output: any,
  context: __SerdeContext
): VerifiedDestinationNumberInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VerifiedDestinationNumberInformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VerifyDestinationNumberResult
 */
const de_VerifyDestinationNumberResult = (output: any, context: __SerdeContext): VerifyDestinationNumberResult => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationPhoneNumber: __expectString,
    Status: __expectString,
    VerifiedDestinationNumberArn: __expectString,
    VerifiedDestinationNumberId: __expectString,
  }) as any;
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `PinpointSMSVoiceV2.${operation}`,
  };
}
