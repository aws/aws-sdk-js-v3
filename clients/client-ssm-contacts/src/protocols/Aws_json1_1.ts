// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
import { CreateRotationCommandInput, CreateRotationCommandOutput } from "../commands/CreateRotationCommand";
import {
  CreateRotationOverrideCommandInput,
  CreateRotationOverrideCommandOutput,
} from "../commands/CreateRotationOverrideCommand";
import {
  DeactivateContactChannelCommandInput,
  DeactivateContactChannelCommandOutput,
} from "../commands/DeactivateContactChannelCommand";
import {
  DeleteContactChannelCommandInput,
  DeleteContactChannelCommandOutput,
} from "../commands/DeleteContactChannelCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "../commands/DeleteContactCommand";
import { DeleteRotationCommandInput, DeleteRotationCommandOutput } from "../commands/DeleteRotationCommand";
import {
  DeleteRotationOverrideCommandInput,
  DeleteRotationOverrideCommandOutput,
} from "../commands/DeleteRotationOverrideCommand";
import { DescribeEngagementCommandInput, DescribeEngagementCommandOutput } from "../commands/DescribeEngagementCommand";
import { DescribePageCommandInput, DescribePageCommandOutput } from "../commands/DescribePageCommand";
import { GetContactChannelCommandInput, GetContactChannelCommandOutput } from "../commands/GetContactChannelCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "../commands/GetContactCommand";
import { GetContactPolicyCommandInput, GetContactPolicyCommandOutput } from "../commands/GetContactPolicyCommand";
import { GetRotationCommandInput, GetRotationCommandOutput } from "../commands/GetRotationCommand";
import {
  GetRotationOverrideCommandInput,
  GetRotationOverrideCommandOutput,
} from "../commands/GetRotationOverrideCommand";
import {
  ListContactChannelsCommandInput,
  ListContactChannelsCommandOutput,
} from "../commands/ListContactChannelsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import { ListEngagementsCommandInput, ListEngagementsCommandOutput } from "../commands/ListEngagementsCommand";
import { ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput } from "../commands/ListPageReceiptsCommand";
import {
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput,
} from "../commands/ListPageResolutionsCommand";
import { ListPagesByContactCommandInput, ListPagesByContactCommandOutput } from "../commands/ListPagesByContactCommand";
import {
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "../commands/ListPagesByEngagementCommand";
import {
  ListPreviewRotationShiftsCommandInput,
  ListPreviewRotationShiftsCommandOutput,
} from "../commands/ListPreviewRotationShiftsCommand";
import {
  ListRotationOverridesCommandInput,
  ListRotationOverridesCommandOutput,
} from "../commands/ListRotationOverridesCommand";
import { ListRotationsCommandInput, ListRotationsCommandOutput } from "../commands/ListRotationsCommand";
import { ListRotationShiftsCommandInput, ListRotationShiftsCommandOutput } from "../commands/ListRotationShiftsCommand";
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
import { UpdateRotationCommandInput, UpdateRotationCommandOutput } from "../commands/UpdateRotationCommand";
import {
  AcceptPageRequest,
  AccessDeniedException,
  ActivateContactChannelRequest,
  ChannelTargetInfo,
  ConflictException,
  ContactChannelAddress,
  ContactTargetInfo,
  CoverageTime,
  CreateContactChannelRequest,
  CreateContactRequest,
  CreateRotationOverrideRequest,
  CreateRotationRequest,
  DataEncryptionException,
  DeactivateContactChannelRequest,
  DeleteContactChannelRequest,
  DeleteContactRequest,
  DeleteRotationOverrideRequest,
  DeleteRotationRequest,
  DescribeEngagementRequest,
  DescribeEngagementResult,
  DescribePageRequest,
  DescribePageResult,
  Engagement,
  GetContactChannelRequest,
  GetContactPolicyRequest,
  GetContactRequest,
  GetRotationOverrideRequest,
  GetRotationOverrideResult,
  GetRotationRequest,
  GetRotationResult,
  HandOffTime,
  InternalServerException,
  ListContactChannelsRequest,
  ListContactsRequest,
  ListEngagementsRequest,
  ListEngagementsResult,
  ListPageReceiptsRequest,
  ListPageReceiptsResult,
  ListPageResolutionsRequest,
  ListPagesByContactRequest,
  ListPagesByContactResult,
  ListPagesByEngagementRequest,
  ListPagesByEngagementResult,
  ListPreviewRotationShiftsRequest,
  ListPreviewRotationShiftsResult,
  ListRotationOverridesRequest,
  ListRotationOverridesResult,
  ListRotationShiftsRequest,
  ListRotationShiftsResult,
  ListRotationsRequest,
  ListRotationsResult,
  ListTagsForResourceRequest,
  MonthlySetting,
  Page,
  Plan,
  PreviewOverride,
  PutContactPolicyRequest,
  Receipt,
  RecurrenceSettings,
  ResourceNotFoundException,
  Rotation,
  RotationOverride,
  RotationShift,
  SendActivationCodeRequest,
  ServiceQuotaExceededException,
  Stage,
  StartEngagementRequest,
  StopEngagementRequest,
  Tag,
  TagResourceRequest,
  Target,
  ThrottlingException,
  TimeRange,
  UntagResourceRequest,
  UpdateContactChannelRequest,
  UpdateContactRequest,
  UpdateRotationRequest,
  ValidationException,
  WeeklySetting,
} from "../models/models_0";
import { SSMContactsServiceException as __BaseException } from "../models/SSMContactsServiceException";

/**
 * serializeAws_json1_1AcceptPageCommand
 */
export const se_AcceptPageCommand = async (
  input: AcceptPageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptPage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ActivateContactChannelCommand
 */
export const se_ActivateContactChannelCommand = async (
  input: ActivateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ActivateContactChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactCommand
 */
export const se_CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContact");
  let body: any;
  body = JSON.stringify(se_CreateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactChannelCommand
 */
export const se_CreateContactChannelCommand = async (
  input: CreateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContactChannel");
  let body: any;
  body = JSON.stringify(se_CreateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRotationCommand
 */
export const se_CreateRotationCommand = async (
  input: CreateRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRotation");
  let body: any;
  body = JSON.stringify(se_CreateRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRotationOverrideCommand
 */
export const se_CreateRotationOverrideCommand = async (
  input: CreateRotationOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRotationOverride");
  let body: any;
  body = JSON.stringify(se_CreateRotationOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeactivateContactChannelCommand
 */
export const se_DeactivateContactChannelCommand = async (
  input: DeactivateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeactivateContactChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactCommand
 */
export const se_DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactChannelCommand
 */
export const se_DeleteContactChannelCommand = async (
  input: DeleteContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContactChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRotationCommand
 */
export const se_DeleteRotationCommand = async (
  input: DeleteRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRotation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRotationOverrideCommand
 */
export const se_DeleteRotationOverrideCommand = async (
  input: DeleteRotationOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRotationOverride");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEngagementCommand
 */
export const se_DescribeEngagementCommand = async (
  input: DescribeEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePageCommand
 */
export const se_DescribePageCommand = async (
  input: DescribePageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactCommand
 */
export const se_GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactChannelCommand
 */
export const se_GetContactChannelCommand = async (
  input: GetContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContactChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactPolicyCommand
 */
export const se_GetContactPolicyCommand = async (
  input: GetContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetContactPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRotationCommand
 */
export const se_GetRotationCommand = async (
  input: GetRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRotation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRotationOverrideCommand
 */
export const se_GetRotationOverrideCommand = async (
  input: GetRotationOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRotationOverride");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContactChannelsCommand
 */
export const se_ListContactChannelsCommand = async (
  input: ListContactChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContactChannels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContactsCommand
 */
export const se_ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContacts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEngagementsCommand
 */
export const se_ListEngagementsCommand = async (
  input: ListEngagementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagements");
  let body: any;
  body = JSON.stringify(se_ListEngagementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPageReceiptsCommand
 */
export const se_ListPageReceiptsCommand = async (
  input: ListPageReceiptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPageReceipts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPageResolutionsCommand
 */
export const se_ListPageResolutionsCommand = async (
  input: ListPageResolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPageResolutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPagesByContactCommand
 */
export const se_ListPagesByContactCommand = async (
  input: ListPagesByContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPagesByContact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPagesByEngagementCommand
 */
export const se_ListPagesByEngagementCommand = async (
  input: ListPagesByEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPagesByEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPreviewRotationShiftsCommand
 */
export const se_ListPreviewRotationShiftsCommand = async (
  input: ListPreviewRotationShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPreviewRotationShifts");
  let body: any;
  body = JSON.stringify(se_ListPreviewRotationShiftsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRotationOverridesCommand
 */
export const se_ListRotationOverridesCommand = async (
  input: ListRotationOverridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRotationOverrides");
  let body: any;
  body = JSON.stringify(se_ListRotationOverridesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRotationsCommand
 */
export const se_ListRotationsCommand = async (
  input: ListRotationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRotations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRotationShiftsCommand
 */
export const se_ListRotationShiftsCommand = async (
  input: ListRotationShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRotationShifts");
  let body: any;
  body = JSON.stringify(se_ListRotationShiftsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
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
 * serializeAws_json1_1PutContactPolicyCommand
 */
export const se_PutContactPolicyCommand = async (
  input: PutContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutContactPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendActivationCodeCommand
 */
export const se_SendActivationCodeCommand = async (
  input: SendActivationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendActivationCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEngagementCommand
 */
export const se_StartEngagementCommand = async (
  input: StartEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEngagement");
  let body: any;
  body = JSON.stringify(se_StartEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEngagementCommand
 */
export const se_StopEngagementCommand = async (
  input: StopEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
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
 * serializeAws_json1_1UntagResourceCommand
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
 * serializeAws_json1_1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContactChannelCommand
 */
export const se_UpdateContactChannelCommand = async (
  input: UpdateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContactChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRotationCommand
 */
export const se_UpdateRotationCommand = async (
  input: UpdateRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRotation");
  let body: any;
  body = JSON.stringify(se_UpdateRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptPageCommand
 */
export const de_AcceptPageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptPageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptPageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AcceptPageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AcceptPageCommandError
 */
const de_AcceptPageCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ActivateContactChannelCommand
 */
export const de_ActivateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ActivateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ActivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ActivateContactChannelCommandError
 */
const de_ActivateContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1CreateContactCommand
 */
export const de_CreateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateContactCommandError
 */
const de_CreateContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1CreateContactChannelCommand
 */
export const de_CreateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateContactChannelCommandError
 */
const de_CreateContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1CreateRotationCommand
 */
export const de_CreateRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRotationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRotationCommandError
 */
const de_CreateRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1CreateRotationOverrideCommand
 */
export const de_CreateRotationOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRotationOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRotationOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRotationOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRotationOverrideCommandError
 */
const de_CreateRotationOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRotationOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DeactivateContactChannelCommand
 */
export const de_DeactivateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeactivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeactivateContactChannelCommandError
 */
const de_DeactivateContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DeleteContactCommand
 */
export const de_DeleteContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteContactCommandError
 */
const de_DeleteContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DeleteContactChannelCommand
 */
export const de_DeleteContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteContactChannelCommandError
 */
const de_DeleteContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DeleteRotationCommand
 */
export const de_DeleteRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRotationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRotationCommandError
 */
const de_DeleteRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DeleteRotationOverrideCommand
 */
export const de_DeleteRotationOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRotationOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRotationOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRotationOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRotationOverrideCommandError
 */
const de_DeleteRotationOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRotationOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DescribeEngagementCommand
 */
export const de_DescribeEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEngagementResult(data, context);
  const response: DescribeEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEngagementCommandError
 */
const de_DescribeEngagementCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1DescribePageCommand
 */
export const de_DescribePageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePageResult(data, context);
  const response: DescribePageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePageCommandError
 */
const de_DescribePageCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1GetContactCommand
 */
export const de_GetContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetContactCommandError
 */
const de_GetContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1GetContactChannelCommand
 */
export const de_GetContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetContactChannelCommandError
 */
const de_GetContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1GetContactPolicyCommand
 */
export const de_GetContactPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetContactPolicyCommandError
 */
const de_GetContactPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1GetRotationCommand
 */
export const de_GetRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRotationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRotationResult(data, context);
  const response: GetRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRotationCommandError
 */
const de_GetRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1GetRotationOverrideCommand
 */
export const de_GetRotationOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRotationOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRotationOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRotationOverrideResult(data, context);
  const response: GetRotationOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRotationOverrideCommandError
 */
const de_GetRotationOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRotationOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListContactChannelsCommand
 */
export const de_ListContactChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactChannelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContactChannelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListContactChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListContactChannelsCommandError
 */
const de_ListContactChannelsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListContactsCommand
 */
export const de_ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListContactsCommandError
 */
const de_ListContactsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListEngagementsCommand
 */
export const de_ListEngagementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEngagementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementsResult(data, context);
  const response: ListEngagementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEngagementsCommandError
 */
const de_ListEngagementsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListPageReceiptsCommand
 */
export const de_ListPageReceiptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPageReceiptsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPageReceiptsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPageReceiptsResult(data, context);
  const response: ListPageReceiptsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPageReceiptsCommandError
 */
const de_ListPageReceiptsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListPageResolutionsCommand
 */
export const de_ListPageResolutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPageResolutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPageResolutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPageResolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPageResolutionsCommandError
 */
const de_ListPageResolutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPageResolutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListPagesByContactCommand
 */
export const de_ListPagesByContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPagesByContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPagesByContactResult(data, context);
  const response: ListPagesByContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPagesByContactCommandError
 */
const de_ListPagesByContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListPagesByEngagementCommand
 */
export const de_ListPagesByEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPagesByEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPagesByEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPagesByEngagementResult(data, context);
  const response: ListPagesByEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPagesByEngagementCommandError
 */
const de_ListPagesByEngagementCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListPreviewRotationShiftsCommand
 */
export const de_ListPreviewRotationShiftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPreviewRotationShiftsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPreviewRotationShiftsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPreviewRotationShiftsResult(data, context);
  const response: ListPreviewRotationShiftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPreviewRotationShiftsCommandError
 */
const de_ListPreviewRotationShiftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPreviewRotationShiftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListRotationOverridesCommand
 */
export const de_ListRotationOverridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationOverridesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRotationOverridesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRotationOverridesResult(data, context);
  const response: ListRotationOverridesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRotationOverridesCommandError
 */
const de_ListRotationOverridesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationOverridesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListRotationsCommand
 */
export const de_ListRotationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRotationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRotationsResult(data, context);
  const response: ListRotationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRotationsCommandError
 */
const de_ListRotationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListRotationShiftsCommand
 */
export const de_ListRotationShiftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationShiftsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRotationShiftsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRotationShiftsResult(data, context);
  const response: ListRotationShiftsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRotationShiftsCommandError
 */
const de_ListRotationShiftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRotationShiftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1ListTagsForResourceCommand
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1PutContactPolicyCommand
 */
export const de_PutContactPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContactPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutContactPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutContactPolicyCommandError
 */
const de_PutContactPolicyCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1SendActivationCodeCommand
 */
export const de_SendActivationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendActivationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendActivationCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendActivationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendActivationCodeCommandError
 */
const de_SendActivationCodeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1StartEngagementCommand
 */
export const de_StartEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEngagementCommandError
 */
const de_StartEngagementCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1StopEngagementCommand
 */
export const de_StopEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEngagementCommandError
 */
const de_StopEngagementCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1TagResourceCommand
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
 * deserializeAws_json1_1TagResourceCommandError
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
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1UntagResourceCommand
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
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1UpdateContactCommand
 */
export const de_UpdateContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContactCommandError
 */
const de_UpdateContactCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmcontacts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1UpdateContactChannelCommand
 */
export const de_UpdateContactChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContactChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContactChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContactChannelCommandError
 */
const de_UpdateContactChannelCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DataEncryptionException":
    case "com.amazonaws.ssmcontacts#DataEncryptionException":
      throw await de_DataEncryptionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1UpdateRotationCommand
 */
export const de_UpdateRotationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRotationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRotationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateRotationCommandError
 */
const de_UpdateRotationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRotationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmcontacts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmcontacts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmcontacts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmcontacts#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmcontacts#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmcontacts#ValidationException":
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
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
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1DataEncryptionExceptionRes
 */
const de_DataEncryptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DataEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
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
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
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
 * deserializeAws_json1_1ThrottlingExceptionRes
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
 * deserializeAws_json1_1ValidationExceptionRes
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

// se_AcceptPageRequest omitted.

// se_ActivateContactChannelRequest omitted.

// se_ChannelTargetInfo omitted.

// se_ContactChannelAddress omitted.

// se_ContactTargetInfo omitted.

// se_CoverageTime omitted.

// se_CoverageTimes omitted.

/**
 * serializeAws_json1_1CreateContactChannelRequest
 */
const se_CreateContactChannelRequest = (input: CreateContactChannelRequest, context: __SerdeContext): any => {
  return take(input, {
    ContactId: [],
    DeferActivation: [],
    DeliveryAddress: _json,
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Type: [],
  });
};

/**
 * serializeAws_json1_1CreateContactRequest
 */
const se_CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return take(input, {
    Alias: [],
    DisplayName: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Plan: _json,
    Tags: _json,
    Type: [],
  });
};

/**
 * serializeAws_json1_1CreateRotationOverrideRequest
 */
const se_CreateRotationOverrideRequest = (input: CreateRotationOverrideRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    IdempotencyToken: [],
    NewContactIds: _json,
    RotationId: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1CreateRotationRequest
 */
const se_CreateRotationRequest = (input: CreateRotationRequest, context: __SerdeContext): any => {
  return take(input, {
    ContactIds: _json,
    IdempotencyToken: [],
    Name: [],
    Recurrence: _json,
    StartTime: (_) => Math.round(_.getTime() / 1000),
    Tags: _json,
    TimeZoneId: [],
  });
};

// se_DailySettings omitted.

// se_DeactivateContactChannelRequest omitted.

// se_DeleteContactChannelRequest omitted.

// se_DeleteContactRequest omitted.

// se_DeleteRotationOverrideRequest omitted.

// se_DeleteRotationRequest omitted.

// se_DescribeEngagementRequest omitted.

// se_DescribePageRequest omitted.

// se_GetContactChannelRequest omitted.

// se_GetContactPolicyRequest omitted.

// se_GetContactRequest omitted.

// se_GetRotationOverrideRequest omitted.

// se_GetRotationRequest omitted.

// se_HandOffTime omitted.

// se_ListContactChannelsRequest omitted.

// se_ListContactsRequest omitted.

/**
 * serializeAws_json1_1ListEngagementsRequest
 */
const se_ListEngagementsRequest = (input: ListEngagementsRequest, context: __SerdeContext): any => {
  return take(input, {
    IncidentId: [],
    MaxResults: [],
    NextToken: [],
    TimeRangeValue: (_) => se_TimeRange(_, context),
  });
};

// se_ListPageReceiptsRequest omitted.

// se_ListPageResolutionsRequest omitted.

// se_ListPagesByContactRequest omitted.

// se_ListPagesByEngagementRequest omitted.

/**
 * serializeAws_json1_1ListPreviewRotationShiftsRequest
 */
const se_ListPreviewRotationShiftsRequest = (input: ListPreviewRotationShiftsRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    Members: _json,
    NextToken: [],
    Overrides: (_) => se_OverrideList(_, context),
    Recurrence: _json,
    RotationStartTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
    TimeZoneId: [],
  });
};

/**
 * serializeAws_json1_1ListRotationOverridesRequest
 */
const se_ListRotationOverridesRequest = (input: ListRotationOverridesRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    RotationId: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1ListRotationShiftsRequest
 */
const se_ListRotationShiftsRequest = (input: ListRotationShiftsRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    RotationId: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListRotationsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MonthlySetting omitted.

// se_MonthlySettings omitted.

/**
 * serializeAws_json1_1OverrideList
 */
const se_OverrideList = (input: PreviewOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PreviewOverride(entry, context);
    });
};

// se_Plan omitted.

/**
 * serializeAws_json1_1PreviewOverride
 */
const se_PreviewOverride = (input: PreviewOverride, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    NewMembers: _json,
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_PutContactPolicyRequest omitted.

// se_RecurrenceSettings omitted.

// se_RotationContactsArnList omitted.

// se_RotationOverrideContactsArnList omitted.

// se_RotationOverridePreviewMemberList omitted.

// se_RotationPreviewMemberList omitted.

// se_SendActivationCodeRequest omitted.

// se_ShiftCoveragesMap omitted.

// se_SsmContactsArnList omitted.

// se_Stage omitted.

// se_StagesList omitted.

/**
 * serializeAws_json1_1StartEngagementRequest
 */
const se_StartEngagementRequest = (input: StartEngagementRequest, context: __SerdeContext): any => {
  return take(input, {
    ContactId: [],
    Content: [],
    IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    IncidentId: [],
    PublicContent: [],
    PublicSubject: [],
    Sender: [],
    Subject: [],
  });
};

// se_StopEngagementRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagResourceRequest omitted.

// se_TagsList omitted.

// se_Target omitted.

// se_TargetsList omitted.

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateContactChannelRequest omitted.

// se_UpdateContactRequest omitted.

/**
 * serializeAws_json1_1UpdateRotationRequest
 */
const se_UpdateRotationRequest = (input: UpdateRotationRequest, context: __SerdeContext): any => {
  return take(input, {
    ContactIds: _json,
    Recurrence: _json,
    RotationId: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
    TimeZoneId: [],
  });
};

// se_WeeklySetting omitted.

// se_WeeklySettings omitted.

// de_AcceptPageResult omitted.

// de_AccessDeniedException omitted.

// de_ActivateContactChannelResult omitted.

// de_ChannelTargetInfo omitted.

// de_ConflictException omitted.

// de_Contact omitted.

// de_ContactChannel omitted.

// de_ContactChannelAddress omitted.

// de_ContactChannelList omitted.

// de_ContactsList omitted.

// de_ContactTargetInfo omitted.

// de_CoverageTime omitted.

// de_CoverageTimes omitted.

// de_CreateContactChannelResult omitted.

// de_CreateContactResult omitted.

// de_CreateRotationOverrideResult omitted.

// de_CreateRotationResult omitted.

// de_DailySettings omitted.

// de_DataEncryptionException omitted.

// de_DeactivateContactChannelResult omitted.

// de_DeleteContactChannelResult omitted.

// de_DeleteContactResult omitted.

// de_DeleteRotationOverrideResult omitted.

// de_DeleteRotationResult omitted.

// de_DependentEntity omitted.

// de_DependentEntityList omitted.

/**
 * deserializeAws_json1_1DescribeEngagementResult
 */
const de_DescribeEngagementResult = (output: any, context: __SerdeContext): DescribeEngagementResult => {
  return take(output, {
    ContactArn: __expectString,
    Content: __expectString,
    EngagementArn: __expectString,
    IncidentId: __expectString,
    PublicContent: __expectString,
    PublicSubject: __expectString,
    Sender: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePageResult
 */
const de_DescribePageResult = (output: any, context: __SerdeContext): DescribePageResult => {
  return take(output, {
    ContactArn: __expectString,
    Content: __expectString,
    DeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EngagementArn: __expectString,
    IncidentId: __expectString,
    PageArn: __expectString,
    PublicContent: __expectString,
    PublicSubject: __expectString,
    ReadTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Sender: __expectString,
    SentTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Engagement
 */
const de_Engagement = (output: any, context: __SerdeContext): Engagement => {
  return take(output, {
    ContactArn: __expectString,
    EngagementArn: __expectString,
    IncidentId: __expectString,
    Sender: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StopTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EngagementsList
 */
const de_EngagementsList = (output: any, context: __SerdeContext): Engagement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Engagement(entry, context);
    });
  return retVal;
};

// de_GetContactChannelResult omitted.

// de_GetContactPolicyResult omitted.

// de_GetContactResult omitted.

/**
 * deserializeAws_json1_1GetRotationOverrideResult
 */
const de_GetRotationOverrideResult = (output: any, context: __SerdeContext): GetRotationOverrideResult => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NewContactIds: _json,
    RotationArn: __expectString,
    RotationOverrideId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRotationResult
 */
const de_GetRotationResult = (output: any, context: __SerdeContext): GetRotationResult => {
  return take(output, {
    ContactIds: _json,
    Name: __expectString,
    Recurrence: _json,
    RotationArn: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TimeZoneId: __expectString,
  }) as any;
};

// de_HandOffTime omitted.

// de_InternalServerException omitted.

// de_ListContactChannelsResult omitted.

// de_ListContactsResult omitted.

/**
 * deserializeAws_json1_1ListEngagementsResult
 */
const de_ListEngagementsResult = (output: any, context: __SerdeContext): ListEngagementsResult => {
  return take(output, {
    Engagements: (_: any) => de_EngagementsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPageReceiptsResult
 */
const de_ListPageReceiptsResult = (output: any, context: __SerdeContext): ListPageReceiptsResult => {
  return take(output, {
    NextToken: __expectString,
    Receipts: (_: any) => de_ReceiptsList(_, context),
  }) as any;
};

// de_ListPageResolutionsResult omitted.

/**
 * deserializeAws_json1_1ListPagesByContactResult
 */
const de_ListPagesByContactResult = (output: any, context: __SerdeContext): ListPagesByContactResult => {
  return take(output, {
    NextToken: __expectString,
    Pages: (_: any) => de_PagesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPagesByEngagementResult
 */
const de_ListPagesByEngagementResult = (output: any, context: __SerdeContext): ListPagesByEngagementResult => {
  return take(output, {
    NextToken: __expectString,
    Pages: (_: any) => de_PagesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPreviewRotationShiftsResult
 */
const de_ListPreviewRotationShiftsResult = (output: any, context: __SerdeContext): ListPreviewRotationShiftsResult => {
  return take(output, {
    NextToken: __expectString,
    RotationShifts: (_: any) => de_RotationShifts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRotationOverridesResult
 */
const de_ListRotationOverridesResult = (output: any, context: __SerdeContext): ListRotationOverridesResult => {
  return take(output, {
    NextToken: __expectString,
    RotationOverrides: (_: any) => de_RotationOverrides(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRotationShiftsResult
 */
const de_ListRotationShiftsResult = (output: any, context: __SerdeContext): ListRotationShiftsResult => {
  return take(output, {
    NextToken: __expectString,
    RotationShifts: (_: any) => de_RotationShifts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRotationsResult
 */
const de_ListRotationsResult = (output: any, context: __SerdeContext): ListRotationsResult => {
  return take(output, {
    NextToken: __expectString,
    Rotations: (_: any) => de_Rotations(_, context),
  }) as any;
};

// de_ListTagsForResourceResult omitted.

// de_MonthlySetting omitted.

// de_MonthlySettings omitted.

/**
 * deserializeAws_json1_1Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
  return take(output, {
    ContactArn: __expectString,
    DeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EngagementArn: __expectString,
    IncidentId: __expectString,
    PageArn: __expectString,
    ReadTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Sender: __expectString,
    SentTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PagesList
 */
const de_PagesList = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Page(entry, context);
    });
  return retVal;
};

// de_Plan omitted.

// de_PutContactPolicyResult omitted.

/**
 * deserializeAws_json1_1Receipt
 */
const de_Receipt = (output: any, context: __SerdeContext): Receipt => {
  return take(output, {
    ContactChannelArn: __expectString,
    ReceiptInfo: __expectString,
    ReceiptTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReceiptType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReceiptsList
 */
const de_ReceiptsList = (output: any, context: __SerdeContext): Receipt[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Receipt(entry, context);
    });
  return retVal;
};

// de_RecurrenceSettings omitted.

// de_ResolutionContact omitted.

// de_ResolutionList omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1Rotation
 */
const de_Rotation = (output: any, context: __SerdeContext): Rotation => {
  return take(output, {
    ContactIds: _json,
    Name: __expectString,
    Recurrence: _json,
    RotationArn: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TimeZoneId: __expectString,
  }) as any;
};

// de_RotationContactsArnList omitted.

/**
 * deserializeAws_json1_1RotationOverride
 */
const de_RotationOverride = (output: any, context: __SerdeContext): RotationOverride => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NewContactIds: _json,
    RotationOverrideId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1RotationOverrides
 */
const de_RotationOverrides = (output: any, context: __SerdeContext): RotationOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RotationOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Rotations
 */
const de_Rotations = (output: any, context: __SerdeContext): Rotation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Rotation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RotationShift
 */
const de_RotationShift = (output: any, context: __SerdeContext): RotationShift => {
  return take(output, {
    ContactIds: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ShiftDetails: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RotationShifts
 */
const de_RotationShifts = (output: any, context: __SerdeContext): RotationShift[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RotationShift(entry, context);
    });
  return retVal;
};

// de_SendActivationCodeResult omitted.

// de_ServiceQuotaExceededException omitted.

// de_ShiftCoveragesMap omitted.

// de_ShiftDetails omitted.

// de_SsmContactsArnList omitted.

// de_Stage omitted.

// de_StagesList omitted.

// de_StartEngagementResult omitted.

// de_StopEngagementResult omitted.

// de_Tag omitted.

// de_TagResourceResult omitted.

// de_TagsList omitted.

// de_Target omitted.

// de_TargetsList omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResult omitted.

// de_UpdateContactChannelResult omitted.

// de_UpdateContactResult omitted.

// de_UpdateRotationResult omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_WeeklySetting omitted.

// de_WeeklySettings omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `SSMContacts.${operation}`,
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
