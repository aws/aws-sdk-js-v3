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
  CoverageTime,
  CreateContactChannelRequest,
  CreateContactChannelResult,
  CreateContactRequest,
  CreateContactResult,
  CreateRotationOverrideRequest,
  CreateRotationOverrideResult,
  CreateRotationRequest,
  CreateRotationResult,
  DataEncryptionException,
  DayOfWeek,
  DeactivateContactChannelRequest,
  DeactivateContactChannelResult,
  DeleteContactChannelRequest,
  DeleteContactChannelResult,
  DeleteContactRequest,
  DeleteContactResult,
  DeleteRotationOverrideRequest,
  DeleteRotationOverrideResult,
  DeleteRotationRequest,
  DeleteRotationResult,
  DependentEntity,
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
  GetRotationOverrideRequest,
  GetRotationOverrideResult,
  GetRotationRequest,
  GetRotationResult,
  HandOffTime,
  InternalServerException,
  ListContactChannelsRequest,
  ListContactChannelsResult,
  ListContactsRequest,
  ListContactsResult,
  ListEngagementsRequest,
  ListEngagementsResult,
  ListPageReceiptsRequest,
  ListPageReceiptsResult,
  ListPageResolutionsRequest,
  ListPageResolutionsResult,
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
  ListTagsForResourceResult,
  MonthlySetting,
  Page,
  Plan,
  PreviewOverride,
  PutContactPolicyRequest,
  PutContactPolicyResult,
  Receipt,
  RecurrenceSettings,
  ResolutionContact,
  ResourceNotFoundException,
  Rotation,
  RotationOverride,
  RotationShift,
  SendActivationCodeRequest,
  SendActivationCodeResult,
  ServiceQuotaExceededException,
  ShiftDetails,
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
  UpdateRotationRequest,
  UpdateRotationResult,
  ValidationException,
  ValidationExceptionField,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.AcceptPage",
  };
  let body: any;
  body = JSON.stringify(se_AcceptPageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ActivateContactChannelCommand
 */
export const se_ActivateContactChannelCommand = async (
  input: ActivateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ActivateContactChannel",
  };
  let body: any;
  body = JSON.stringify(se_ActivateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContactCommand
 */
export const se_CreateContactCommand = async (
  input: CreateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateContact",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateContactChannel",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateRotation",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.CreateRotationOverride",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeactivateContactChannel",
  };
  let body: any;
  body = JSON.stringify(se_DeactivateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactCommand
 */
export const se_DeleteContactCommand = async (
  input: DeleteContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteContact",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContactChannelCommand
 */
export const se_DeleteContactChannelCommand = async (
  input: DeleteContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteContactChannel",
  };
  let body: any;
  body = JSON.stringify(se_DeleteContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRotationCommand
 */
export const se_DeleteRotationCommand = async (
  input: DeleteRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteRotation",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRotationOverrideCommand
 */
export const se_DeleteRotationOverrideCommand = async (
  input: DeleteRotationOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DeleteRotationOverride",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRotationOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEngagementCommand
 */
export const se_DescribeEngagementCommand = async (
  input: DescribeEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DescribeEngagement",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePageCommand
 */
export const se_DescribePageCommand = async (
  input: DescribePageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.DescribePage",
  };
  let body: any;
  body = JSON.stringify(se_DescribePageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactCommand
 */
export const se_GetContactCommand = async (
  input: GetContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContact",
  };
  let body: any;
  body = JSON.stringify(se_GetContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactChannelCommand
 */
export const se_GetContactChannelCommand = async (
  input: GetContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContactChannel",
  };
  let body: any;
  body = JSON.stringify(se_GetContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactPolicyCommand
 */
export const se_GetContactPolicyCommand = async (
  input: GetContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetContactPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetContactPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRotationCommand
 */
export const se_GetRotationCommand = async (
  input: GetRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetRotation",
  };
  let body: any;
  body = JSON.stringify(se_GetRotationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRotationOverrideCommand
 */
export const se_GetRotationOverrideCommand = async (
  input: GetRotationOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.GetRotationOverride",
  };
  let body: any;
  body = JSON.stringify(se_GetRotationOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContactChannelsCommand
 */
export const se_ListContactChannelsCommand = async (
  input: ListContactChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListContactChannels",
  };
  let body: any;
  body = JSON.stringify(se_ListContactChannelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContactsCommand
 */
export const se_ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListContacts",
  };
  let body: any;
  body = JSON.stringify(se_ListContactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEngagementsCommand
 */
export const se_ListEngagementsCommand = async (
  input: ListEngagementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListEngagements",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPageReceipts",
  };
  let body: any;
  body = JSON.stringify(se_ListPageReceiptsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPageResolutionsCommand
 */
export const se_ListPageResolutionsCommand = async (
  input: ListPageResolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPageResolutions",
  };
  let body: any;
  body = JSON.stringify(se_ListPageResolutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPagesByContactCommand
 */
export const se_ListPagesByContactCommand = async (
  input: ListPagesByContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPagesByContact",
  };
  let body: any;
  body = JSON.stringify(se_ListPagesByContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPagesByEngagementCommand
 */
export const se_ListPagesByEngagementCommand = async (
  input: ListPagesByEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPagesByEngagement",
  };
  let body: any;
  body = JSON.stringify(se_ListPagesByEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPreviewRotationShiftsCommand
 */
export const se_ListPreviewRotationShiftsCommand = async (
  input: ListPreviewRotationShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListPreviewRotationShifts",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListRotationOverrides",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListRotations",
  };
  let body: any;
  body = JSON.stringify(se_ListRotationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRotationShiftsCommand
 */
export const se_ListRotationShiftsCommand = async (
  input: ListRotationShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListRotationShifts",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutContactPolicyCommand
 */
export const se_PutContactPolicyCommand = async (
  input: PutContactPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.PutContactPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutContactPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendActivationCodeCommand
 */
export const se_SendActivationCodeCommand = async (
  input: SendActivationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.SendActivationCode",
  };
  let body: any;
  body = JSON.stringify(se_SendActivationCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEngagementCommand
 */
export const se_StartEngagementCommand = async (
  input: StartEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.StartEngagement",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.StopEngagement",
  };
  let body: any;
  body = JSON.stringify(se_StopEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContactCommand
 */
export const se_UpdateContactCommand = async (
  input: UpdateContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UpdateContact",
  };
  let body: any;
  body = JSON.stringify(se_UpdateContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContactChannelCommand
 */
export const se_UpdateContactChannelCommand = async (
  input: UpdateContactChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UpdateContactChannel",
  };
  let body: any;
  body = JSON.stringify(se_UpdateContactChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRotationCommand
 */
export const se_UpdateRotationCommand = async (
  input: UpdateRotationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SSMContacts.UpdateRotation",
  };
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
  contents = de_AcceptPageResult(data, context);
  const response: AcceptPageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ActivateContactChannelResult(data, context);
  const response: ActivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateContactResult(data, context);
  const response: CreateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateContactChannelResult(data, context);
  const response: CreateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateRotationResult(data, context);
  const response: CreateRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateRotationOverrideResult(data, context);
  const response: CreateRotationOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeactivateContactChannelResult(data, context);
  const response: DeactivateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteContactResult(data, context);
  const response: DeleteContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteContactChannelResult(data, context);
  const response: DeleteContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRotationResult(data, context);
  const response: DeleteRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRotationOverrideResult(data, context);
  const response: DeleteRotationOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetContactResult(data, context);
  const response: GetContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetContactChannelResult(data, context);
  const response: GetContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetContactPolicyResult(data, context);
  const response: GetContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListContactChannelsResult(data, context);
  const response: ListContactChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListContactsResult(data, context);
  const response: ListContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListPageResolutionsResult(data, context);
  const response: ListPageResolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutContactPolicyResult(data, context);
  const response: PutContactPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_SendActivationCodeResult(data, context);
  const response: SendActivationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartEngagementResult(data, context);
  const response: StartEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopEngagementResult(data, context);
  const response: StopEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResult(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResult(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateContactResult(data, context);
  const response: UpdateContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateContactChannelResult(data, context);
  const response: UpdateContactChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateRotationResult(data, context);
  const response: UpdateRotationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_DataEncryptionException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptPageRequest
 */
const se_AcceptPageRequest = (input: AcceptPageRequest, context: __SerdeContext): any => {
  return {
    ...(input.AcceptCode != null && { AcceptCode: input.AcceptCode }),
    ...(input.AcceptCodeValidation != null && { AcceptCodeValidation: input.AcceptCodeValidation }),
    ...(input.AcceptType != null && { AcceptType: input.AcceptType }),
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.Note != null && { Note: input.Note }),
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

/**
 * serializeAws_json1_1ActivateContactChannelRequest
 */
const se_ActivateContactChannelRequest = (input: ActivateContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActivationCode != null && { ActivationCode: input.ActivationCode }),
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

/**
 * serializeAws_json1_1ChannelTargetInfo
 */
const se_ChannelTargetInfo = (input: ChannelTargetInfo, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.RetryIntervalInMinutes != null && { RetryIntervalInMinutes: input.RetryIntervalInMinutes }),
  };
};

/**
 * serializeAws_json1_1ContactChannelAddress
 */
const se_ContactChannelAddress = (input: ContactChannelAddress, context: __SerdeContext): any => {
  return {
    ...(input.SimpleAddress != null && { SimpleAddress: input.SimpleAddress }),
  };
};

/**
 * serializeAws_json1_1ContactTargetInfo
 */
const se_ContactTargetInfo = (input: ContactTargetInfo, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.IsEssential != null && { IsEssential: input.IsEssential }),
  };
};

/**
 * serializeAws_json1_1CoverageTime
 */
const se_CoverageTime = (input: CoverageTime, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: se_HandOffTime(input.End, context) }),
    ...(input.Start != null && { Start: se_HandOffTime(input.Start, context) }),
  };
};

/**
 * serializeAws_json1_1CoverageTimes
 */
const se_CoverageTimes = (input: CoverageTime[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CoverageTime(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateContactChannelRequest
 */
const se_CreateContactChannelRequest = (input: CreateContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.DeferActivation != null && { DeferActivation: input.DeferActivation }),
    ...(input.DeliveryAddress != null && { DeliveryAddress: se_ContactChannelAddress(input.DeliveryAddress, context) }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateContactRequest
 */
const se_CreateContactRequest = (input: CreateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.Plan != null && { Plan: se_Plan(input.Plan, context) }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateRotationOverrideRequest
 */
const se_CreateRotationOverrideRequest = (input: CreateRotationOverrideRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.NewContactIds != null && {
      NewContactIds: se_RotationOverrideContactsArnList(input.NewContactIds, context),
    }),
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1CreateRotationRequest
 */
const se_CreateRotationRequest = (input: CreateRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactIds != null && { ContactIds: se_RotationContactsArnList(input.ContactIds, context) }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Recurrence != null && { Recurrence: se_RecurrenceSettings(input.Recurrence, context) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
    ...(input.TimeZoneId != null && { TimeZoneId: input.TimeZoneId }),
  };
};

/**
 * serializeAws_json1_1DailySettings
 */
const se_DailySettings = (input: HandOffTime[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HandOffTime(entry, context);
    });
};

/**
 * serializeAws_json1_1DeactivateContactChannelRequest
 */
const se_DeactivateContactChannelRequest = (input: DeactivateContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

/**
 * serializeAws_json1_1DeleteContactChannelRequest
 */
const se_DeleteContactChannelRequest = (input: DeleteContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

/**
 * serializeAws_json1_1DeleteContactRequest
 */
const se_DeleteContactRequest = (input: DeleteContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
  };
};

/**
 * serializeAws_json1_1DeleteRotationOverrideRequest
 */
const se_DeleteRotationOverrideRequest = (input: DeleteRotationOverrideRequest, context: __SerdeContext): any => {
  return {
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.RotationOverrideId != null && { RotationOverrideId: input.RotationOverrideId }),
  };
};

/**
 * serializeAws_json1_1DeleteRotationRequest
 */
const se_DeleteRotationRequest = (input: DeleteRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.RotationId != null && { RotationId: input.RotationId }),
  };
};

/**
 * serializeAws_json1_1DescribeEngagementRequest
 */
const se_DescribeEngagementRequest = (input: DescribeEngagementRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
  };
};

/**
 * serializeAws_json1_1DescribePageRequest
 */
const se_DescribePageRequest = (input: DescribePageRequest, context: __SerdeContext): any => {
  return {
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

/**
 * serializeAws_json1_1GetContactChannelRequest
 */
const se_GetContactChannelRequest = (input: GetContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

/**
 * serializeAws_json1_1GetContactPolicyRequest
 */
const se_GetContactPolicyRequest = (input: GetContactPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
  };
};

/**
 * serializeAws_json1_1GetContactRequest
 */
const se_GetContactRequest = (input: GetContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
  };
};

/**
 * serializeAws_json1_1GetRotationOverrideRequest
 */
const se_GetRotationOverrideRequest = (input: GetRotationOverrideRequest, context: __SerdeContext): any => {
  return {
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.RotationOverrideId != null && { RotationOverrideId: input.RotationOverrideId }),
  };
};

/**
 * serializeAws_json1_1GetRotationRequest
 */
const se_GetRotationRequest = (input: GetRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.RotationId != null && { RotationId: input.RotationId }),
  };
};

/**
 * serializeAws_json1_1HandOffTime
 */
const se_HandOffTime = (input: HandOffTime, context: __SerdeContext): any => {
  return {
    ...(input.HourOfDay != null && { HourOfDay: input.HourOfDay }),
    ...(input.MinuteOfHour != null && { MinuteOfHour: input.MinuteOfHour }),
  };
};

/**
 * serializeAws_json1_1ListContactChannelsRequest
 */
const se_ListContactChannelsRequest = (input: ListContactChannelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListContactsRequest
 */
const se_ListContactsRequest = (input: ListContactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AliasPrefix != null && { AliasPrefix: input.AliasPrefix }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1ListEngagementsRequest
 */
const se_ListEngagementsRequest = (input: ListEngagementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncidentId != null && { IncidentId: input.IncidentId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimeRangeValue != null && { TimeRangeValue: se_TimeRange(input.TimeRangeValue, context) }),
  };
};

/**
 * serializeAws_json1_1ListPageReceiptsRequest
 */
const se_ListPageReceiptsRequest = (input: ListPageReceiptsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

/**
 * serializeAws_json1_1ListPageResolutionsRequest
 */
const se_ListPageResolutionsRequest = (input: ListPageResolutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageId != null && { PageId: input.PageId }),
  };
};

/**
 * serializeAws_json1_1ListPagesByContactRequest
 */
const se_ListPagesByContactRequest = (input: ListPagesByContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPagesByEngagementRequest
 */
const se_ListPagesByEngagementRequest = (input: ListPagesByEngagementRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPreviewRotationShiftsRequest
 */
const se_ListPreviewRotationShiftsRequest = (input: ListPreviewRotationShiftsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Members != null && { Members: se_RotationPreviewMemberList(input.Members, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Overrides != null && { Overrides: se_OverrideList(input.Overrides, context) }),
    ...(input.Recurrence != null && { Recurrence: se_RecurrenceSettings(input.Recurrence, context) }),
    ...(input.RotationStartTime != null && { RotationStartTime: Math.round(input.RotationStartTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.TimeZoneId != null && { TimeZoneId: input.TimeZoneId }),
  };
};

/**
 * serializeAws_json1_1ListRotationOverridesRequest
 */
const se_ListRotationOverridesRequest = (input: ListRotationOverridesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListRotationShiftsRequest
 */
const se_ListRotationShiftsRequest = (input: ListRotationShiftsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListRotationsRequest
 */
const se_ListRotationsRequest = (input: ListRotationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RotationNamePrefix != null && { RotationNamePrefix: input.RotationNamePrefix }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1MonthlySetting
 */
const se_MonthlySetting = (input: MonthlySetting, context: __SerdeContext): any => {
  return {
    ...(input.DayOfMonth != null && { DayOfMonth: input.DayOfMonth }),
    ...(input.HandOffTime != null && { HandOffTime: se_HandOffTime(input.HandOffTime, context) }),
  };
};

/**
 * serializeAws_json1_1MonthlySettings
 */
const se_MonthlySettings = (input: MonthlySetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MonthlySetting(entry, context);
    });
};

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

/**
 * serializeAws_json1_1Plan
 */
const se_Plan = (input: Plan, context: __SerdeContext): any => {
  return {
    ...(input.RotationIds != null && { RotationIds: se_SsmContactsArnList(input.RotationIds, context) }),
    ...(input.Stages != null && { Stages: se_StagesList(input.Stages, context) }),
  };
};

/**
 * serializeAws_json1_1PreviewOverride
 */
const se_PreviewOverride = (input: PreviewOverride, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.NewMembers != null && { NewMembers: se_RotationOverridePreviewMemberList(input.NewMembers, context) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1PutContactPolicyRequest
 */
const se_PutContactPolicyRequest = (input: PutContactPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactArn != null && { ContactArn: input.ContactArn }),
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

/**
 * serializeAws_json1_1RecurrenceSettings
 */
const se_RecurrenceSettings = (input: RecurrenceSettings, context: __SerdeContext): any => {
  return {
    ...(input.DailySettings != null && { DailySettings: se_DailySettings(input.DailySettings, context) }),
    ...(input.MonthlySettings != null && { MonthlySettings: se_MonthlySettings(input.MonthlySettings, context) }),
    ...(input.NumberOfOnCalls != null && { NumberOfOnCalls: input.NumberOfOnCalls }),
    ...(input.RecurrenceMultiplier != null && { RecurrenceMultiplier: input.RecurrenceMultiplier }),
    ...(input.ShiftCoverages != null && { ShiftCoverages: se_ShiftCoveragesMap(input.ShiftCoverages, context) }),
    ...(input.WeeklySettings != null && { WeeklySettings: se_WeeklySettings(input.WeeklySettings, context) }),
  };
};

/**
 * serializeAws_json1_1RotationContactsArnList
 */
const se_RotationContactsArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RotationOverrideContactsArnList
 */
const se_RotationOverrideContactsArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RotationOverridePreviewMemberList
 */
const se_RotationOverridePreviewMemberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RotationPreviewMemberList
 */
const se_RotationPreviewMemberList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SendActivationCodeRequest
 */
const se_SendActivationCodeRequest = (input: SendActivationCodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
  };
};

/**
 * serializeAws_json1_1ShiftCoveragesMap
 */
const se_ShiftCoveragesMap = (input: Record<string, CoverageTime[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [DayOfWeek | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CoverageTimes(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1SsmContactsArnList
 */
const se_SsmContactsArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Stage
 */
const se_Stage = (input: Stage, context: __SerdeContext): any => {
  return {
    ...(input.DurationInMinutes != null && { DurationInMinutes: input.DurationInMinutes }),
    ...(input.Targets != null && { Targets: se_TargetsList(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1StagesList
 */
const se_StagesList = (input: Stage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Stage(entry, context);
    });
};

/**
 * serializeAws_json1_1StartEngagementRequest
 */
const se_StartEngagementRequest = (input: StartEngagementRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1StopEngagementRequest
 */
const se_StopEngagementRequest = (input: StopEngagementRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngagementId != null && { EngagementId: input.EngagementId }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TagsList
 */
const se_TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.ChannelTargetInfo != null && {
      ChannelTargetInfo: se_ChannelTargetInfo(input.ChannelTargetInfo, context),
    }),
    ...(input.ContactTargetInfo != null && {
      ContactTargetInfo: se_ContactTargetInfo(input.ContactTargetInfo, context),
    }),
  };
};

/**
 * serializeAws_json1_1TargetsList
 */
const se_TargetsList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Target(entry, context);
    });
};

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateContactChannelRequest
 */
const se_UpdateContactChannelRequest = (input: UpdateContactChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactChannelId != null && { ContactChannelId: input.ContactChannelId }),
    ...(input.DeliveryAddress != null && { DeliveryAddress: se_ContactChannelAddress(input.DeliveryAddress, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateContactRequest
 */
const se_UpdateContactRequest = (input: UpdateContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactId != null && { ContactId: input.ContactId }),
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Plan != null && { Plan: se_Plan(input.Plan, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRotationRequest
 */
const se_UpdateRotationRequest = (input: UpdateRotationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ContactIds != null && { ContactIds: se_RotationContactsArnList(input.ContactIds, context) }),
    ...(input.Recurrence != null && { Recurrence: se_RecurrenceSettings(input.Recurrence, context) }),
    ...(input.RotationId != null && { RotationId: input.RotationId }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.TimeZoneId != null && { TimeZoneId: input.TimeZoneId }),
  };
};

/**
 * serializeAws_json1_1WeeklySetting
 */
const se_WeeklySetting = (input: WeeklySetting, context: __SerdeContext): any => {
  return {
    ...(input.DayOfWeek != null && { DayOfWeek: input.DayOfWeek }),
    ...(input.HandOffTime != null && { HandOffTime: se_HandOffTime(input.HandOffTime, context) }),
  };
};

/**
 * serializeAws_json1_1WeeklySettings
 */
const se_WeeklySettings = (input: WeeklySetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WeeklySetting(entry, context);
    });
};

/**
 * deserializeAws_json1_1AcceptPageResult
 */
const de_AcceptPageResult = (output: any, context: __SerdeContext): AcceptPageResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ActivateContactChannelResult
 */
const de_ActivateContactChannelResult = (output: any, context: __SerdeContext): ActivateContactChannelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ChannelTargetInfo
 */
const de_ChannelTargetInfo = (output: any, context: __SerdeContext): ChannelTargetInfo => {
  return {
    ContactChannelId: __expectString(output.ContactChannelId),
    RetryIntervalInMinutes: __expectInt32(output.RetryIntervalInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    DependentEntities:
      output.DependentEntities != null ? de_DependentEntityList(output.DependentEntities, context) : undefined,
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1Contact
 */
const de_Contact = (output: any, context: __SerdeContext): Contact => {
  return {
    Alias: __expectString(output.Alias),
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ContactChannel
 */
const de_ContactChannel = (output: any, context: __SerdeContext): ContactChannel => {
  return {
    ActivationStatus: __expectString(output.ActivationStatus),
    ContactArn: __expectString(output.ContactArn),
    ContactChannelArn: __expectString(output.ContactChannelArn),
    DeliveryAddress:
      output.DeliveryAddress != null ? de_ContactChannelAddress(output.DeliveryAddress, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ContactChannelAddress
 */
const de_ContactChannelAddress = (output: any, context: __SerdeContext): ContactChannelAddress => {
  return {
    SimpleAddress: __expectString(output.SimpleAddress),
  } as any;
};

/**
 * deserializeAws_json1_1ContactChannelList
 */
const de_ContactChannelList = (output: any, context: __SerdeContext): ContactChannel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactChannel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContactsList
 */
const de_ContactsList = (output: any, context: __SerdeContext): Contact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Contact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContactTargetInfo
 */
const de_ContactTargetInfo = (output: any, context: __SerdeContext): ContactTargetInfo => {
  return {
    ContactId: __expectString(output.ContactId),
    IsEssential: __expectBoolean(output.IsEssential),
  } as any;
};

/**
 * deserializeAws_json1_1CoverageTime
 */
const de_CoverageTime = (output: any, context: __SerdeContext): CoverageTime => {
  return {
    End: output.End != null ? de_HandOffTime(output.End, context) : undefined,
    Start: output.Start != null ? de_HandOffTime(output.Start, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CoverageTimes
 */
const de_CoverageTimes = (output: any, context: __SerdeContext): CoverageTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoverageTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateContactChannelResult
 */
const de_CreateContactChannelResult = (output: any, context: __SerdeContext): CreateContactChannelResult => {
  return {
    ContactChannelArn: __expectString(output.ContactChannelArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateContactResult
 */
const de_CreateContactResult = (output: any, context: __SerdeContext): CreateContactResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRotationOverrideResult
 */
const de_CreateRotationOverrideResult = (output: any, context: __SerdeContext): CreateRotationOverrideResult => {
  return {
    RotationOverrideId: __expectString(output.RotationOverrideId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRotationResult
 */
const de_CreateRotationResult = (output: any, context: __SerdeContext): CreateRotationResult => {
  return {
    RotationArn: __expectString(output.RotationArn),
  } as any;
};

/**
 * deserializeAws_json1_1DailySettings
 */
const de_DailySettings = (output: any, context: __SerdeContext): HandOffTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HandOffTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataEncryptionException
 */
const de_DataEncryptionException = (output: any, context: __SerdeContext): DataEncryptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeactivateContactChannelResult
 */
const de_DeactivateContactChannelResult = (output: any, context: __SerdeContext): DeactivateContactChannelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteContactChannelResult
 */
const de_DeleteContactChannelResult = (output: any, context: __SerdeContext): DeleteContactChannelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteContactResult
 */
const de_DeleteContactResult = (output: any, context: __SerdeContext): DeleteContactResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRotationOverrideResult
 */
const de_DeleteRotationOverrideResult = (output: any, context: __SerdeContext): DeleteRotationOverrideResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRotationResult
 */
const de_DeleteRotationResult = (output: any, context: __SerdeContext): DeleteRotationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DependentEntity
 */
const de_DependentEntity = (output: any, context: __SerdeContext): DependentEntity => {
  return {
    DependentResourceIds:
      output.DependentResourceIds != null ? de_SsmContactsArnList(output.DependentResourceIds, context) : undefined,
    RelationType: __expectString(output.RelationType),
  } as any;
};

/**
 * deserializeAws_json1_1DependentEntityList
 */
const de_DependentEntityList = (output: any, context: __SerdeContext): DependentEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DependentEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeEngagementResult
 */
const de_DescribeEngagementResult = (output: any, context: __SerdeContext): DescribeEngagementResult => {
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

/**
 * deserializeAws_json1_1DescribePageResult
 */
const de_DescribePageResult = (output: any, context: __SerdeContext): DescribePageResult => {
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

/**
 * deserializeAws_json1_1Engagement
 */
const de_Engagement = (output: any, context: __SerdeContext): Engagement => {
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

/**
 * deserializeAws_json1_1EngagementsList
 */
const de_EngagementsList = (output: any, context: __SerdeContext): Engagement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Engagement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetContactChannelResult
 */
const de_GetContactChannelResult = (output: any, context: __SerdeContext): GetContactChannelResult => {
  return {
    ActivationStatus: __expectString(output.ActivationStatus),
    ContactArn: __expectString(output.ContactArn),
    ContactChannelArn: __expectString(output.ContactChannelArn),
    DeliveryAddress:
      output.DeliveryAddress != null ? de_ContactChannelAddress(output.DeliveryAddress, context) : undefined,
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GetContactPolicyResult
 */
const de_GetContactPolicyResult = (output: any, context: __SerdeContext): GetContactPolicyResult => {
  return {
    ContactArn: __expectString(output.ContactArn),
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1GetContactResult
 */
const de_GetContactResult = (output: any, context: __SerdeContext): GetContactResult => {
  return {
    Alias: __expectString(output.Alias),
    ContactArn: __expectString(output.ContactArn),
    DisplayName: __expectString(output.DisplayName),
    Plan: output.Plan != null ? de_Plan(output.Plan, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GetRotationOverrideResult
 */
const de_GetRotationOverrideResult = (output: any, context: __SerdeContext): GetRotationOverrideResult => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    NewContactIds: output.NewContactIds != null ? de_SsmContactsArnList(output.NewContactIds, context) : undefined,
    RotationArn: __expectString(output.RotationArn),
    RotationOverrideId: __expectString(output.RotationOverrideId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRotationResult
 */
const de_GetRotationResult = (output: any, context: __SerdeContext): GetRotationResult => {
  return {
    ContactIds: output.ContactIds != null ? de_RotationContactsArnList(output.ContactIds, context) : undefined,
    Name: __expectString(output.Name),
    Recurrence: output.Recurrence != null ? de_RecurrenceSettings(output.Recurrence, context) : undefined,
    RotationArn: __expectString(output.RotationArn),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TimeZoneId: __expectString(output.TimeZoneId),
  } as any;
};

/**
 * deserializeAws_json1_1HandOffTime
 */
const de_HandOffTime = (output: any, context: __SerdeContext): HandOffTime => {
  return {
    HourOfDay: __expectInt32(output.HourOfDay),
    MinuteOfHour: __expectInt32(output.MinuteOfHour),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1ListContactChannelsResult
 */
const de_ListContactChannelsResult = (output: any, context: __SerdeContext): ListContactChannelsResult => {
  return {
    ContactChannels:
      output.ContactChannels != null ? de_ContactChannelList(output.ContactChannels, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListContactsResult
 */
const de_ListContactsResult = (output: any, context: __SerdeContext): ListContactsResult => {
  return {
    Contacts: output.Contacts != null ? de_ContactsList(output.Contacts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEngagementsResult
 */
const de_ListEngagementsResult = (output: any, context: __SerdeContext): ListEngagementsResult => {
  return {
    Engagements: output.Engagements != null ? de_EngagementsList(output.Engagements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPageReceiptsResult
 */
const de_ListPageReceiptsResult = (output: any, context: __SerdeContext): ListPageReceiptsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Receipts: output.Receipts != null ? de_ReceiptsList(output.Receipts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPageResolutionsResult
 */
const de_ListPageResolutionsResult = (output: any, context: __SerdeContext): ListPageResolutionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    PageResolutions: output.PageResolutions != null ? de_ResolutionList(output.PageResolutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPagesByContactResult
 */
const de_ListPagesByContactResult = (output: any, context: __SerdeContext): ListPagesByContactResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pages: output.Pages != null ? de_PagesList(output.Pages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPagesByEngagementResult
 */
const de_ListPagesByEngagementResult = (output: any, context: __SerdeContext): ListPagesByEngagementResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Pages: output.Pages != null ? de_PagesList(output.Pages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPreviewRotationShiftsResult
 */
const de_ListPreviewRotationShiftsResult = (output: any, context: __SerdeContext): ListPreviewRotationShiftsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    RotationShifts: output.RotationShifts != null ? de_RotationShifts(output.RotationShifts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRotationOverridesResult
 */
const de_ListRotationOverridesResult = (output: any, context: __SerdeContext): ListRotationOverridesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    RotationOverrides:
      output.RotationOverrides != null ? de_RotationOverrides(output.RotationOverrides, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRotationShiftsResult
 */
const de_ListRotationShiftsResult = (output: any, context: __SerdeContext): ListRotationShiftsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    RotationShifts: output.RotationShifts != null ? de_RotationShifts(output.RotationShifts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRotationsResult
 */
const de_ListRotationsResult = (output: any, context: __SerdeContext): ListRotationsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Rotations: output.Rotations != null ? de_Rotations(output.Rotations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResult
 */
const de_ListTagsForResourceResult = (output: any, context: __SerdeContext): ListTagsForResourceResult => {
  return {
    Tags: output.Tags != null ? de_TagsList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MonthlySetting
 */
const de_MonthlySetting = (output: any, context: __SerdeContext): MonthlySetting => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    HandOffTime: output.HandOffTime != null ? de_HandOffTime(output.HandOffTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MonthlySettings
 */
const de_MonthlySettings = (output: any, context: __SerdeContext): MonthlySetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MonthlySetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Page
 */
const de_Page = (output: any, context: __SerdeContext): Page => {
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

/**
 * deserializeAws_json1_1PagesList
 */
const de_PagesList = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Page(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Plan
 */
const de_Plan = (output: any, context: __SerdeContext): Plan => {
  return {
    RotationIds: output.RotationIds != null ? de_SsmContactsArnList(output.RotationIds, context) : undefined,
    Stages: output.Stages != null ? de_StagesList(output.Stages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutContactPolicyResult
 */
const de_PutContactPolicyResult = (output: any, context: __SerdeContext): PutContactPolicyResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Receipt
 */
const de_Receipt = (output: any, context: __SerdeContext): Receipt => {
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

/**
 * deserializeAws_json1_1ReceiptsList
 */
const de_ReceiptsList = (output: any, context: __SerdeContext): Receipt[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Receipt(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecurrenceSettings
 */
const de_RecurrenceSettings = (output: any, context: __SerdeContext): RecurrenceSettings => {
  return {
    DailySettings: output.DailySettings != null ? de_DailySettings(output.DailySettings, context) : undefined,
    MonthlySettings: output.MonthlySettings != null ? de_MonthlySettings(output.MonthlySettings, context) : undefined,
    NumberOfOnCalls: __expectInt32(output.NumberOfOnCalls),
    RecurrenceMultiplier: __expectInt32(output.RecurrenceMultiplier),
    ShiftCoverages: output.ShiftCoverages != null ? de_ShiftCoveragesMap(output.ShiftCoverages, context) : undefined,
    WeeklySettings: output.WeeklySettings != null ? de_WeeklySettings(output.WeeklySettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResolutionContact
 */
const de_ResolutionContact = (output: any, context: __SerdeContext): ResolutionContact => {
  return {
    ContactArn: __expectString(output.ContactArn),
    StageIndex: __expectInt32(output.StageIndex),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ResolutionList
 */
const de_ResolutionList = (output: any, context: __SerdeContext): ResolutionContact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolutionContact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1Rotation
 */
const de_Rotation = (output: any, context: __SerdeContext): Rotation => {
  return {
    ContactIds: output.ContactIds != null ? de_SsmContactsArnList(output.ContactIds, context) : undefined,
    Name: __expectString(output.Name),
    Recurrence: output.Recurrence != null ? de_RecurrenceSettings(output.Recurrence, context) : undefined,
    RotationArn: __expectString(output.RotationArn),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    TimeZoneId: __expectString(output.TimeZoneId),
  } as any;
};

/**
 * deserializeAws_json1_1RotationContactsArnList
 */
const de_RotationContactsArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RotationOverride
 */
const de_RotationOverride = (output: any, context: __SerdeContext): RotationOverride => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    NewContactIds: output.NewContactIds != null ? de_SsmContactsArnList(output.NewContactIds, context) : undefined,
    RotationOverrideId: __expectString(output.RotationOverrideId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RotationOverrides
 */
const de_RotationOverrides = (output: any, context: __SerdeContext): RotationOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_Rotation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RotationShift
 */
const de_RotationShift = (output: any, context: __SerdeContext): RotationShift => {
  return {
    ContactIds: output.ContactIds != null ? de_SsmContactsArnList(output.ContactIds, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ShiftDetails: output.ShiftDetails != null ? de_ShiftDetails(output.ShiftDetails, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RotationShifts
 */
const de_RotationShifts = (output: any, context: __SerdeContext): RotationShift[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RotationShift(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SendActivationCodeResult
 */
const de_SendActivationCodeResult = (output: any, context: __SerdeContext): SendActivationCodeResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

/**
 * deserializeAws_json1_1ShiftCoveragesMap
 */
const de_ShiftCoveragesMap = (output: any, context: __SerdeContext): Record<string, CoverageTime[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, CoverageTime[]>, [key, value]: [DayOfWeek | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_CoverageTimes(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1ShiftDetails
 */
const de_ShiftDetails = (output: any, context: __SerdeContext): ShiftDetails => {
  return {
    OverriddenContactIds:
      output.OverriddenContactIds != null ? de_SsmContactsArnList(output.OverriddenContactIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SsmContactsArnList
 */
const de_SsmContactsArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Stage
 */
const de_Stage = (output: any, context: __SerdeContext): Stage => {
  return {
    DurationInMinutes: __expectInt32(output.DurationInMinutes),
    Targets: output.Targets != null ? de_TargetsList(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StagesList
 */
const de_StagesList = (output: any, context: __SerdeContext): Stage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Stage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartEngagementResult
 */
const de_StartEngagementResult = (output: any, context: __SerdeContext): StartEngagementResult => {
  return {
    EngagementArn: __expectString(output.EngagementArn),
  } as any;
};

/**
 * deserializeAws_json1_1StopEngagementResult
 */
const de_StopEngagementResult = (output: any, context: __SerdeContext): StopEngagementResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResult
 */
const de_TagResourceResult = (output: any, context: __SerdeContext): TagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TagsList
 */
const de_TagsList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1Target
 */
const de_Target = (output: any, context: __SerdeContext): Target => {
  return {
    ChannelTargetInfo:
      output.ChannelTargetInfo != null ? de_ChannelTargetInfo(output.ChannelTargetInfo, context) : undefined,
    ContactTargetInfo:
      output.ContactTargetInfo != null ? de_ContactTargetInfo(output.ContactTargetInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetsList
 */
const de_TargetsList = (output: any, context: __SerdeContext): Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Target(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    RetryAfterSeconds: __expectInt32(output.RetryAfterSeconds),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResult
 */
const de_UntagResourceResult = (output: any, context: __SerdeContext): UntagResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateContactChannelResult
 */
const de_UpdateContactChannelResult = (output: any, context: __SerdeContext): UpdateContactChannelResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateContactResult
 */
const de_UpdateContactResult = (output: any, context: __SerdeContext): UpdateContactResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateRotationResult
 */
const de_UpdateRotationResult = (output: any, context: __SerdeContext): UpdateRotationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Fields: output.Fields != null ? de_ValidationExceptionFieldList(output.Fields, context) : undefined,
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationExceptionFieldList
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

/**
 * deserializeAws_json1_1WeeklySetting
 */
const de_WeeklySetting = (output: any, context: __SerdeContext): WeeklySetting => {
  return {
    DayOfWeek: __expectString(output.DayOfWeek),
    HandOffTime: output.HandOffTime != null ? de_HandOffTime(output.HandOffTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WeeklySettings
 */
const de_WeeklySettings = (output: any, context: __SerdeContext): WeeklySetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WeeklySetting(entry, context);
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
