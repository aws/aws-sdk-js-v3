// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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

import {
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "../commands/AssociateDRTLogBucketCommand";
import { AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput } from "../commands/AssociateDRTRoleCommand";
import {
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "../commands/AssociateHealthCheckCommand";
import {
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "../commands/AssociateProactiveEngagementDetailsCommand";
import { CreateProtectionCommandInput, CreateProtectionCommandOutput } from "../commands/CreateProtectionCommand";
import {
  CreateProtectionGroupCommandInput,
  CreateProtectionGroupCommandOutput,
} from "../commands/CreateProtectionGroupCommand";
import { CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput } from "../commands/CreateSubscriptionCommand";
import { DeleteProtectionCommandInput, DeleteProtectionCommandOutput } from "../commands/DeleteProtectionCommand";
import {
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
} from "../commands/DeleteProtectionGroupCommand";
import { DeleteSubscriptionCommandInput, DeleteSubscriptionCommandOutput } from "../commands/DeleteSubscriptionCommand";
import { DescribeAttackCommandInput, DescribeAttackCommandOutput } from "../commands/DescribeAttackCommand";
import {
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
} from "../commands/DescribeAttackStatisticsCommand";
import { DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput } from "../commands/DescribeDRTAccessCommand";
import {
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "../commands/DescribeEmergencyContactSettingsCommand";
import { DescribeProtectionCommandInput, DescribeProtectionCommandOutput } from "../commands/DescribeProtectionCommand";
import {
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
} from "../commands/DescribeProtectionGroupCommand";
import {
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "../commands/DescribeSubscriptionCommand";
import {
  DisableApplicationLayerAutomaticResponseCommandInput,
  DisableApplicationLayerAutomaticResponseCommandOutput,
} from "../commands/DisableApplicationLayerAutomaticResponseCommand";
import {
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "../commands/DisableProactiveEngagementCommand";
import {
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "../commands/DisassociateDRTLogBucketCommand";
import {
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "../commands/DisassociateDRTRoleCommand";
import {
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "../commands/DisassociateHealthCheckCommand";
import {
  EnableApplicationLayerAutomaticResponseCommandInput,
  EnableApplicationLayerAutomaticResponseCommandOutput,
} from "../commands/EnableApplicationLayerAutomaticResponseCommand";
import {
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "../commands/EnableProactiveEngagementCommand";
import {
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "../commands/GetSubscriptionStateCommand";
import { ListAttacksCommandInput, ListAttacksCommandOutput } from "../commands/ListAttacksCommand";
import {
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "../commands/ListProtectionGroupsCommand";
import { ListProtectionsCommandInput, ListProtectionsCommandOutput } from "../commands/ListProtectionsCommand";
import {
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "../commands/ListResourcesInProtectionGroupCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateApplicationLayerAutomaticResponseCommandInput,
  UpdateApplicationLayerAutomaticResponseCommandOutput,
} from "../commands/UpdateApplicationLayerAutomaticResponseCommand";
import {
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "../commands/UpdateEmergencyContactSettingsCommand";
import {
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
} from "../commands/UpdateProtectionGroupCommand";
import { UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput } from "../commands/UpdateSubscriptionCommand";
import {
  AccessDeniedException,
  AccessDeniedForDependencyException,
  AssociateDRTLogBucketRequest,
  AssociateDRTRoleRequest,
  AssociateHealthCheckRequest,
  AssociateProactiveEngagementDetailsRequest,
  AttackDetail,
  AttackStatisticsDataItem,
  AttackSummary,
  AttackVolume,
  AttackVolumeStatistics,
  BlockAction,
  CountAction,
  CreateProtectionGroupRequest,
  CreateProtectionRequest,
  CreateSubscriptionRequest,
  DeleteProtectionGroupRequest,
  DeleteProtectionRequest,
  DeleteSubscriptionRequest,
  DescribeAttackRequest,
  DescribeAttackResponse,
  DescribeAttackStatisticsRequest,
  DescribeAttackStatisticsResponse,
  DescribeDRTAccessRequest,
  DescribeEmergencyContactSettingsRequest,
  DescribeProtectionGroupRequest,
  DescribeProtectionRequest,
  DescribeSubscriptionRequest,
  DescribeSubscriptionResponse,
  DisableApplicationLayerAutomaticResponseRequest,
  DisableProactiveEngagementRequest,
  DisassociateDRTLogBucketRequest,
  DisassociateDRTRoleRequest,
  DisassociateHealthCheckRequest,
  EmergencyContact,
  EnableApplicationLayerAutomaticResponseRequest,
  EnableProactiveEngagementRequest,
  GetSubscriptionStateRequest,
  InclusionProtectionFilters,
  InclusionProtectionGroupFilters,
  InternalErrorException,
  InvalidOperationException,
  InvalidPaginationTokenException,
  InvalidParameterException,
  InvalidResourceException,
  LimitsExceededException,
  ListAttacksRequest,
  ListAttacksResponse,
  ListProtectionGroupsRequest,
  ListProtectionsRequest,
  ListResourcesInProtectionGroupRequest,
  ListTagsForResourceRequest,
  LockedSubscriptionException,
  NoAssociatedRoleException,
  OptimisticLockException,
  ProtectedResourceType,
  ProtectionGroupAggregation,
  ProtectionGroupPattern,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResponseAction,
  SubResourceSummary,
  Subscription,
  SummarizedAttackVector,
  SummarizedCounter,
  Tag,
  TagResourceRequest,
  TimeRange,
  UntagResourceRequest,
  UpdateApplicationLayerAutomaticResponseRequest,
  UpdateEmergencyContactSettingsRequest,
  UpdateProtectionGroupRequest,
  UpdateSubscriptionRequest,
} from "../models/models_0";
import { ShieldServiceException as __BaseException } from "../models/ShieldServiceException";

/**
 * serializeAws_json1_1AssociateDRTLogBucketCommand
 */
export const se_AssociateDRTLogBucketCommand = async (
  input: AssociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDRTLogBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDRTRoleCommand
 */
export const se_AssociateDRTRoleCommand = async (
  input: AssociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDRTRole");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateHealthCheckCommand
 */
export const se_AssociateHealthCheckCommand = async (
  input: AssociateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateHealthCheck");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateProactiveEngagementDetailsCommand
 */
export const se_AssociateProactiveEngagementDetailsCommand = async (
  input: AssociateProactiveEngagementDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateProactiveEngagementDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProtectionCommand
 */
export const se_CreateProtectionCommand = async (
  input: CreateProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProtectionGroupCommand
 */
export const se_CreateProtectionGroupCommand = async (
  input: CreateProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProtectionGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSubscriptionCommand
 */
export const se_CreateSubscriptionCommand = async (
  input: CreateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProtectionCommand
 */
export const se_DeleteProtectionCommand = async (
  input: DeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProtectionGroupCommand
 */
export const se_DeleteProtectionGroupCommand = async (
  input: DeleteProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProtectionGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSubscriptionCommand
 */
export const se_DeleteSubscriptionCommand = async (
  input: DeleteSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAttackCommand
 */
export const se_DescribeAttackCommand = async (
  input: DescribeAttackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAttack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAttackStatisticsCommand
 */
export const se_DescribeAttackStatisticsCommand = async (
  input: DescribeAttackStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAttackStatistics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDRTAccessCommand
 */
export const se_DescribeDRTAccessCommand = async (
  input: DescribeDRTAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDRTAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEmergencyContactSettingsCommand
 */
export const se_DescribeEmergencyContactSettingsCommand = async (
  input: DescribeEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEmergencyContactSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProtectionCommand
 */
export const se_DescribeProtectionCommand = async (
  input: DescribeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProtection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProtectionGroupCommand
 */
export const se_DescribeProtectionGroupCommand = async (
  input: DescribeProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProtectionGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscriptionCommand
 */
export const se_DescribeSubscriptionCommand = async (
  input: DescribeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand
 */
export const se_DisableApplicationLayerAutomaticResponseCommand = async (
  input: DisableApplicationLayerAutomaticResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableApplicationLayerAutomaticResponse");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableProactiveEngagementCommand
 */
export const se_DisableProactiveEngagementCommand = async (
  input: DisableProactiveEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableProactiveEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDRTLogBucketCommand
 */
export const se_DisassociateDRTLogBucketCommand = async (
  input: DisassociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDRTLogBucket");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDRTRoleCommand
 */
export const se_DisassociateDRTRoleCommand = async (
  input: DisassociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDRTRole");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateHealthCheckCommand
 */
export const se_DisassociateHealthCheckCommand = async (
  input: DisassociateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateHealthCheck");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand
 */
export const se_EnableApplicationLayerAutomaticResponseCommand = async (
  input: EnableApplicationLayerAutomaticResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableApplicationLayerAutomaticResponse");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableProactiveEngagementCommand
 */
export const se_EnableProactiveEngagementCommand = async (
  input: EnableProactiveEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableProactiveEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSubscriptionStateCommand
 */
export const se_GetSubscriptionStateCommand = async (
  input: GetSubscriptionStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSubscriptionState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAttacksCommand
 */
export const se_ListAttacksCommand = async (
  input: ListAttacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAttacks");
  let body: any;
  body = JSON.stringify(se_ListAttacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProtectionGroupsCommand
 */
export const se_ListProtectionGroupsCommand = async (
  input: ListProtectionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProtectionGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProtectionsCommand
 */
export const se_ListProtectionsCommand = async (
  input: ListProtectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProtections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesInProtectionGroupCommand
 */
export const se_ListResourcesInProtectionGroupCommand = async (
  input: ListResourcesInProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourcesInProtectionGroup");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand
 */
export const se_UpdateApplicationLayerAutomaticResponseCommand = async (
  input: UpdateApplicationLayerAutomaticResponseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplicationLayerAutomaticResponse");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEmergencyContactSettingsCommand
 */
export const se_UpdateEmergencyContactSettingsCommand = async (
  input: UpdateEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEmergencyContactSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProtectionGroupCommand
 */
export const se_UpdateProtectionGroupCommand = async (
  input: UpdateProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProtectionGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSubscriptionCommand
 */
export const se_UpdateSubscriptionCommand = async (
  input: UpdateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateDRTLogBucketCommand
 */
export const de_AssociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDRTLogBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateDRTLogBucketCommandError
 */
const de_AssociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      throw await de_AccessDeniedForDependencyExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      throw await de_LimitsExceededExceptionRes(parsedOutput, context);
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      throw await de_NoAssociatedRoleExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateDRTRoleCommand
 */
export const de_AssociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDRTRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateDRTRoleCommandError
 */
const de_AssociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      throw await de_AccessDeniedForDependencyExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateHealthCheckCommand
 */
export const de_AssociateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateHealthCheckCommandError
 */
const de_AssociateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      throw await de_LimitsExceededExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand
 */
export const de_AssociateProactiveEngagementDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProactiveEngagementDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateProactiveEngagementDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateProactiveEngagementDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateProactiveEngagementDetailsCommandError
 */
const de_AssociateProactiveEngagementDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProactiveEngagementDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateProtectionCommand
 */
export const de_CreateProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProtectionCommandError
 */
const de_CreateProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      throw await de_LimitsExceededExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateProtectionGroupCommand
 */
export const de_CreateProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProtectionGroupCommandError
 */
const de_CreateProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      throw await de_LimitsExceededExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSubscriptionCommand
 */
export const de_CreateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSubscriptionCommandError
 */
const de_CreateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteProtectionCommand
 */
export const de_DeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProtectionCommandError
 */
const de_DeleteProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteProtectionGroupCommand
 */
export const de_DeleteProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProtectionGroupCommandError
 */
const de_DeleteProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSubscriptionCommand
 */
export const de_DeleteSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSubscriptionCommandError
 */
const de_DeleteSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      throw await de_LockedSubscriptionExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAttackCommand
 */
export const de_DescribeAttackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAttackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAttackResponse(data, context);
  const response: DescribeAttackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAttackCommandError
 */
const de_DescribeAttackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.shield#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAttackStatisticsCommand
 */
export const de_DescribeAttackStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAttackStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAttackStatisticsResponse(data, context);
  const response: DescribeAttackStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAttackStatisticsCommandError
 */
const de_DescribeAttackStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeDRTAccessCommand
 */
export const de_DescribeDRTAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDRTAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDRTAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDRTAccessCommandError
 */
const de_DescribeDRTAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEmergencyContactSettingsCommand
 */
export const de_DescribeEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEmergencyContactSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError
 */
const de_DescribeEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeProtectionCommand
 */
export const de_DescribeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProtectionCommandError
 */
const de_DescribeProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeProtectionGroupCommand
 */
export const de_DescribeProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProtectionGroupCommandError
 */
const de_DescribeProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSubscriptionCommand
 */
export const de_DescribeSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSubscriptionResponse(data, context);
  const response: DescribeSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSubscriptionCommandError
 */
const de_DescribeSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableApplicationLayerAutomaticResponseCommand
 */
export const de_DisableApplicationLayerAutomaticResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableApplicationLayerAutomaticResponseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableApplicationLayerAutomaticResponseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisableApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableApplicationLayerAutomaticResponseCommandError
 */
const de_DisableApplicationLayerAutomaticResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableApplicationLayerAutomaticResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableProactiveEngagementCommand
 */
export const de_DisableProactiveEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProactiveEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableProactiveEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableProactiveEngagementCommandError
 */
const de_DisableProactiveEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProactiveEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateDRTLogBucketCommand
 */
export const de_DisassociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDRTLogBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateDRTLogBucketCommandError
 */
const de_DisassociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      throw await de_AccessDeniedForDependencyExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      throw await de_NoAssociatedRoleExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateDRTRoleCommand
 */
export const de_DisassociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDRTRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateDRTRoleCommandError
 */
const de_DisassociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateHealthCheckCommand
 */
export const de_DisassociateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateHealthCheckCommandError
 */
const de_DisassociateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableApplicationLayerAutomaticResponseCommand
 */
export const de_EnableApplicationLayerAutomaticResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableApplicationLayerAutomaticResponseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableApplicationLayerAutomaticResponseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EnableApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableApplicationLayerAutomaticResponseCommandError
 */
const de_EnableApplicationLayerAutomaticResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableApplicationLayerAutomaticResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      throw await de_LimitsExceededExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableProactiveEngagementCommand
 */
export const de_EnableProactiveEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProactiveEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableProactiveEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EnableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableProactiveEngagementCommandError
 */
const de_EnableProactiveEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProactiveEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSubscriptionStateCommand
 */
export const de_GetSubscriptionStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSubscriptionStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSubscriptionStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSubscriptionStateCommandError
 */
const de_GetSubscriptionStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAttacksCommand
 */
export const de_ListAttacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAttacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAttacksResponse(data, context);
  const response: ListAttacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAttacksCommandError
 */
const de_ListAttacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListProtectionGroupsCommand
 */
export const de_ListProtectionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProtectionGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProtectionGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProtectionGroupsCommandError
 */
const de_ListProtectionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListProtectionsCommand
 */
export const de_ListProtectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProtectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProtectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProtectionsCommandError
 */
const de_ListProtectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListResourcesInProtectionGroupCommand
 */
export const de_ListResourcesInProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesInProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourcesInProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourcesInProtectionGroupCommandError
 */
const de_ListResourcesInProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommand
 */
export const de_UpdateApplicationLayerAutomaticResponseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationLayerAutomaticResponseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationLayerAutomaticResponseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApplicationLayerAutomaticResponseCommandError
 */
const de_UpdateApplicationLayerAutomaticResponseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationLayerAutomaticResponseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEmergencyContactSettingsCommand
 */
export const de_UpdateEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEmergencyContactSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError
 */
const de_UpdateEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateProtectionGroupCommand
 */
export const de_UpdateProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProtectionGroupCommandError
 */
const de_UpdateProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSubscriptionCommand
 */
export const de_UpdateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSubscriptionCommandError
 */
const de_UpdateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      throw await de_LockedSubscriptionExceptionRes(parsedOutput, context);
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      throw await de_OptimisticLockExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedForDependencyExceptionRes
 */
const de_AccessDeniedForDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedForDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidResourceExceptionRes
 */
const de_InvalidResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitsExceededExceptionRes
 */
const de_LimitsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LockedSubscriptionExceptionRes
 */
const de_LockedSubscriptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockedSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LockedSubscriptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAssociatedRoleExceptionRes
 */
const de_NoAssociatedRoleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAssociatedRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NoAssociatedRoleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OptimisticLockExceptionRes
 */
const de_OptimisticLockExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OptimisticLockException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistsException({
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

// se_AssociateDRTLogBucketRequest omitted.

// se_AssociateDRTRoleRequest omitted.

// se_AssociateHealthCheckRequest omitted.

// se_AssociateProactiveEngagementDetailsRequest omitted.

// se_BlockAction omitted.

// se_CountAction omitted.

// se_CreateProtectionGroupRequest omitted.

// se_CreateProtectionRequest omitted.

// se_CreateSubscriptionRequest omitted.

// se_DeleteProtectionGroupRequest omitted.

// se_DeleteProtectionRequest omitted.

// se_DeleteSubscriptionRequest omitted.

// se_DescribeAttackRequest omitted.

// se_DescribeAttackStatisticsRequest omitted.

// se_DescribeDRTAccessRequest omitted.

// se_DescribeEmergencyContactSettingsRequest omitted.

// se_DescribeProtectionGroupRequest omitted.

// se_DescribeProtectionRequest omitted.

// se_DescribeSubscriptionRequest omitted.

// se_DisableApplicationLayerAutomaticResponseRequest omitted.

// se_DisableProactiveEngagementRequest omitted.

// se_DisassociateDRTLogBucketRequest omitted.

// se_DisassociateDRTRoleRequest omitted.

// se_DisassociateHealthCheckRequest omitted.

// se_EmergencyContact omitted.

// se_EmergencyContactList omitted.

// se_EnableApplicationLayerAutomaticResponseRequest omitted.

// se_EnableProactiveEngagementRequest omitted.

// se_GetSubscriptionStateRequest omitted.

// se_InclusionProtectionFilters omitted.

// se_InclusionProtectionGroupFilters omitted.

/**
 * serializeAws_json1_1ListAttacksRequest
 */
const se_ListAttacksRequest = (input: ListAttacksRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => se_TimeRange(_, context),
    MaxResults: [],
    NextToken: [],
    ResourceArns: _json,
    StartTime: (_) => se_TimeRange(_, context),
  });
};

// se_ListProtectionGroupsRequest omitted.

// se_ListProtectionsRequest omitted.

// se_ListResourcesInProtectionGroupRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ProtectedResourceTypeFilters omitted.

// se_ProtectionGroupAggregationFilters omitted.

// se_ProtectionGroupIdFilters omitted.

// se_ProtectionGroupMembers omitted.

// se_ProtectionGroupPatternFilters omitted.

// se_ProtectionNameFilters omitted.

// se_ResourceArnFilterList omitted.

// se_ResourceArnFilters omitted.

// se_ResponseAction omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return take(input, {
    FromInclusive: (_) => Math.round(_.getTime() / 1000),
    ToExclusive: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateApplicationLayerAutomaticResponseRequest omitted.

// se_UpdateEmergencyContactSettingsRequest omitted.

// se_UpdateProtectionGroupRequest omitted.

// se_UpdateSubscriptionRequest omitted.

// de_AccessDeniedException omitted.

// de_AccessDeniedForDependencyException omitted.

// de_ApplicationLayerAutomaticResponseConfiguration omitted.

// de_AssociateDRTLogBucketResponse omitted.

// de_AssociateDRTRoleResponse omitted.

// de_AssociateHealthCheckResponse omitted.

// de_AssociateProactiveEngagementDetailsResponse omitted.

/**
 * deserializeAws_json1_1AttackDetail
 */
const de_AttackDetail = (output: any, context: __SerdeContext): AttackDetail => {
  return take(output, {
    AttackCounters: (_: any) => de_SummarizedCounterList(_, context),
    AttackId: __expectString,
    AttackProperties: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Mitigations: _json,
    ResourceArn: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SubResources: (_: any) => de_SubResourceSummaryList(_, context),
  }) as any;
};

// de_AttackProperties omitted.

// de_AttackProperty omitted.

/**
 * deserializeAws_json1_1AttackStatisticsDataItem
 */
const de_AttackStatisticsDataItem = (output: any, context: __SerdeContext): AttackStatisticsDataItem => {
  return take(output, {
    AttackCount: __expectLong,
    AttackVolume: (_: any) => de_AttackVolume(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AttackStatisticsDataList
 */
const de_AttackStatisticsDataList = (output: any, context: __SerdeContext): AttackStatisticsDataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttackStatisticsDataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttackSummaries
 */
const de_AttackSummaries = (output: any, context: __SerdeContext): AttackSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttackSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttackSummary
 */
const de_AttackSummary = (output: any, context: __SerdeContext): AttackSummary => {
  return take(output, {
    AttackId: __expectString,
    AttackVectors: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AttackVectorDescription omitted.

// de_AttackVectorDescriptionList omitted.

/**
 * deserializeAws_json1_1AttackVolume
 */
const de_AttackVolume = (output: any, context: __SerdeContext): AttackVolume => {
  return take(output, {
    BitsPerSecond: (_: any) => de_AttackVolumeStatistics(_, context),
    PacketsPerSecond: (_: any) => de_AttackVolumeStatistics(_, context),
    RequestsPerSecond: (_: any) => de_AttackVolumeStatistics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AttackVolumeStatistics
 */
const de_AttackVolumeStatistics = (output: any, context: __SerdeContext): AttackVolumeStatistics => {
  return take(output, {
    Max: __limitedParseDouble,
  }) as any;
};

// de_BlockAction omitted.

// de_Contributor omitted.

// de_CountAction omitted.

// de_CreateProtectionGroupResponse omitted.

// de_CreateProtectionResponse omitted.

// de_CreateSubscriptionResponse omitted.

// de_DeleteProtectionGroupResponse omitted.

// de_DeleteProtectionResponse omitted.

// de_DeleteSubscriptionResponse omitted.

/**
 * deserializeAws_json1_1DescribeAttackResponse
 */
const de_DescribeAttackResponse = (output: any, context: __SerdeContext): DescribeAttackResponse => {
  return take(output, {
    Attack: (_: any) => de_AttackDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAttackStatisticsResponse
 */
const de_DescribeAttackStatisticsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttackStatisticsResponse => {
  return take(output, {
    DataItems: (_: any) => de_AttackStatisticsDataList(_, context),
    TimeRange: (_: any) => de_TimeRange(_, context),
  }) as any;
};

// de_DescribeDRTAccessResponse omitted.

// de_DescribeEmergencyContactSettingsResponse omitted.

// de_DescribeProtectionGroupResponse omitted.

// de_DescribeProtectionResponse omitted.

/**
 * deserializeAws_json1_1DescribeSubscriptionResponse
 */
const de_DescribeSubscriptionResponse = (output: any, context: __SerdeContext): DescribeSubscriptionResponse => {
  return take(output, {
    Subscription: (_: any) => de_Subscription(_, context),
  }) as any;
};

// de_DisableApplicationLayerAutomaticResponseResponse omitted.

// de_DisableProactiveEngagementResponse omitted.

// de_DisassociateDRTLogBucketResponse omitted.

// de_DisassociateDRTRoleResponse omitted.

// de_DisassociateHealthCheckResponse omitted.

// de_EmergencyContact omitted.

// de_EmergencyContactList omitted.

// de_EnableApplicationLayerAutomaticResponseResponse omitted.

// de_EnableProactiveEngagementResponse omitted.

// de_GetSubscriptionStateResponse omitted.

// de_HealthCheckIds omitted.

// de_InternalErrorException omitted.

// de_InvalidOperationException omitted.

// de_InvalidPaginationTokenException omitted.

// de_InvalidParameterException omitted.

// de_InvalidResourceException omitted.

// de_Limit omitted.

// de_Limits omitted.

// de_LimitsExceededException omitted.

/**
 * deserializeAws_json1_1ListAttacksResponse
 */
const de_ListAttacksResponse = (output: any, context: __SerdeContext): ListAttacksResponse => {
  return take(output, {
    AttackSummaries: (_: any) => de_AttackSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListProtectionGroupsResponse omitted.

// de_ListProtectionsResponse omitted.

// de_ListResourcesInProtectionGroupResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_LockedSubscriptionException omitted.

// de_LogBucketList omitted.

// de_Mitigation omitted.

// de_MitigationList omitted.

// de_NoAssociatedRoleException omitted.

// de_OptimisticLockException omitted.

// de_Protection omitted.

// de_ProtectionGroup omitted.

// de_ProtectionGroupArbitraryPatternLimits omitted.

// de_ProtectionGroupLimits omitted.

// de_ProtectionGroupMembers omitted.

// de_ProtectionGroupPatternTypeLimits omitted.

// de_ProtectionGroups omitted.

// de_ProtectionLimits omitted.

// de_Protections omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceArnList omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseAction omitted.

/**
 * deserializeAws_json1_1SubResourceSummary
 */
const de_SubResourceSummary = (output: any, context: __SerdeContext): SubResourceSummary => {
  return take(output, {
    AttackVectors: (_: any) => de_SummarizedAttackVectorList(_, context),
    Counters: (_: any) => de_SummarizedCounterList(_, context),
    Id: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SubResourceSummaryList
 */
const de_SubResourceSummaryList = (output: any, context: __SerdeContext): SubResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return take(output, {
    AutoRenew: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Limits: _json,
    ProactiveEngagementStatus: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SubscriptionArn: __expectString,
    SubscriptionLimits: _json,
    TimeCommitmentInSeconds: __expectLong,
  }) as any;
};

// de_SubscriptionLimits omitted.

/**
 * deserializeAws_json1_1SummarizedAttackVector
 */
const de_SummarizedAttackVector = (output: any, context: __SerdeContext): SummarizedAttackVector => {
  return take(output, {
    VectorCounters: (_: any) => de_SummarizedCounterList(_, context),
    VectorType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SummarizedAttackVectorList
 */
const de_SummarizedAttackVectorList = (output: any, context: __SerdeContext): SummarizedAttackVector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SummarizedAttackVector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SummarizedCounter
 */
const de_SummarizedCounter = (output: any, context: __SerdeContext): SummarizedCounter => {
  return take(output, {
    Average: __limitedParseDouble,
    Max: __limitedParseDouble,
    N: __expectInt32,
    Name: __expectString,
    Sum: __limitedParseDouble,
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SummarizedCounterList
 */
const de_SummarizedCounterList = (output: any, context: __SerdeContext): SummarizedCounter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SummarizedCounter(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1TimeRange
 */
const de_TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return take(output, {
    FromInclusive: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ToExclusive: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TopContributors omitted.

// de_UntagResourceResponse omitted.

// de_UpdateApplicationLayerAutomaticResponseResponse omitted.

// de_UpdateEmergencyContactSettingsResponse omitted.

// de_UpdateProtectionGroupResponse omitted.

// de_UpdateSubscriptionResponse omitted.

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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSShield_20160616.${operation}`,
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
