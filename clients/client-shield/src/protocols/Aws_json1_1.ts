// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ApplicationLayerAutomaticResponseConfiguration,
  AssociateDRTLogBucketRequest,
  AssociateDRTLogBucketResponse,
  AssociateDRTRoleRequest,
  AssociateDRTRoleResponse,
  AssociateHealthCheckRequest,
  AssociateHealthCheckResponse,
  AssociateProactiveEngagementDetailsRequest,
  AssociateProactiveEngagementDetailsResponse,
  AttackDetail,
  AttackProperty,
  AttackStatisticsDataItem,
  AttackSummary,
  AttackVectorDescription,
  AttackVolume,
  AttackVolumeStatistics,
  BlockAction,
  Contributor,
  CountAction,
  CreateProtectionGroupRequest,
  CreateProtectionGroupResponse,
  CreateProtectionRequest,
  CreateProtectionResponse,
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  DeleteProtectionGroupRequest,
  DeleteProtectionGroupResponse,
  DeleteProtectionRequest,
  DeleteProtectionResponse,
  DeleteSubscriptionRequest,
  DeleteSubscriptionResponse,
  DescribeAttackRequest,
  DescribeAttackResponse,
  DescribeAttackStatisticsRequest,
  DescribeAttackStatisticsResponse,
  DescribeDRTAccessRequest,
  DescribeDRTAccessResponse,
  DescribeEmergencyContactSettingsRequest,
  DescribeEmergencyContactSettingsResponse,
  DescribeProtectionGroupRequest,
  DescribeProtectionGroupResponse,
  DescribeProtectionRequest,
  DescribeProtectionResponse,
  DescribeSubscriptionRequest,
  DescribeSubscriptionResponse,
  DisableApplicationLayerAutomaticResponseRequest,
  DisableApplicationLayerAutomaticResponseResponse,
  DisableProactiveEngagementRequest,
  DisableProactiveEngagementResponse,
  DisassociateDRTLogBucketRequest,
  DisassociateDRTLogBucketResponse,
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleResponse,
  DisassociateHealthCheckRequest,
  DisassociateHealthCheckResponse,
  EmergencyContact,
  EnableApplicationLayerAutomaticResponseRequest,
  EnableApplicationLayerAutomaticResponseResponse,
  EnableProactiveEngagementRequest,
  EnableProactiveEngagementResponse,
  GetSubscriptionStateRequest,
  GetSubscriptionStateResponse,
  InclusionProtectionFilters,
  InclusionProtectionGroupFilters,
  InternalErrorException,
  InvalidOperationException,
  InvalidPaginationTokenException,
  InvalidParameterException,
  InvalidResourceException,
  Limit,
  LimitsExceededException,
  ListAttacksRequest,
  ListAttacksResponse,
  ListProtectionGroupsRequest,
  ListProtectionGroupsResponse,
  ListProtectionsRequest,
  ListProtectionsResponse,
  ListResourcesInProtectionGroupRequest,
  ListResourcesInProtectionGroupResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LockedSubscriptionException,
  Mitigation,
  NoAssociatedRoleException,
  OptimisticLockException,
  ProtectedResourceType,
  Protection,
  ProtectionGroup,
  ProtectionGroupAggregation,
  ProtectionGroupArbitraryPatternLimits,
  ProtectionGroupLimits,
  ProtectionGroupPattern,
  ProtectionGroupPatternTypeLimits,
  ProtectionLimits,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResponseAction,
  SubResourceSummary,
  Subscription,
  SubscriptionLimits,
  SummarizedAttackVector,
  SummarizedCounter,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TimeRange,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationLayerAutomaticResponseRequest,
  UpdateApplicationLayerAutomaticResponseResponse,
  UpdateEmergencyContactSettingsRequest,
  UpdateEmergencyContactSettingsResponse,
  UpdateProtectionGroupRequest,
  UpdateProtectionGroupResponse,
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  ValidationExceptionField,
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
  body = JSON.stringify(se_AssociateDRTLogBucketRequest(input, context));
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
  body = JSON.stringify(se_AssociateDRTRoleRequest(input, context));
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
  body = JSON.stringify(se_AssociateHealthCheckRequest(input, context));
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
  body = JSON.stringify(se_AssociateProactiveEngagementDetailsRequest(input, context));
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
  body = JSON.stringify(se_CreateProtectionRequest(input, context));
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
  body = JSON.stringify(se_CreateProtectionGroupRequest(input, context));
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
  body = JSON.stringify(se_CreateSubscriptionRequest(input, context));
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
  body = JSON.stringify(se_DeleteProtectionRequest(input, context));
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
  body = JSON.stringify(se_DeleteProtectionGroupRequest(input, context));
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
  body = JSON.stringify(se_DeleteSubscriptionRequest(input, context));
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
  body = JSON.stringify(se_DescribeAttackRequest(input, context));
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
  body = JSON.stringify(se_DescribeAttackStatisticsRequest(input, context));
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
  body = JSON.stringify(se_DescribeDRTAccessRequest(input, context));
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
  body = JSON.stringify(se_DescribeEmergencyContactSettingsRequest(input, context));
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
  body = JSON.stringify(se_DescribeProtectionRequest(input, context));
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
  body = JSON.stringify(se_DescribeProtectionGroupRequest(input, context));
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
  body = JSON.stringify(se_DescribeSubscriptionRequest(input, context));
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
  body = JSON.stringify(se_DisableApplicationLayerAutomaticResponseRequest(input, context));
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
  body = JSON.stringify(se_DisableProactiveEngagementRequest(input, context));
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
  body = JSON.stringify(se_DisassociateDRTLogBucketRequest(input, context));
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
  body = JSON.stringify(se_DisassociateDRTRoleRequest(input, context));
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
  body = JSON.stringify(se_DisassociateHealthCheckRequest(input, context));
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
  body = JSON.stringify(se_EnableApplicationLayerAutomaticResponseRequest(input, context));
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
  body = JSON.stringify(se_EnableProactiveEngagementRequest(input, context));
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
  body = JSON.stringify(se_GetSubscriptionStateRequest(input, context));
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
  body = JSON.stringify(se_ListProtectionGroupsRequest(input, context));
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
  body = JSON.stringify(se_ListProtectionsRequest(input, context));
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
  body = JSON.stringify(se_ListResourcesInProtectionGroupRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
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
  body = JSON.stringify(se_UpdateApplicationLayerAutomaticResponseRequest(input, context));
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
  body = JSON.stringify(se_UpdateEmergencyContactSettingsRequest(input, context));
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
  body = JSON.stringify(se_UpdateProtectionGroupRequest(input, context));
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
  body = JSON.stringify(se_UpdateSubscriptionRequest(input, context));
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
  contents = de_AssociateDRTLogBucketResponse(data, context);
  const response: AssociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AssociateDRTRoleResponse(data, context);
  const response: AssociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AssociateHealthCheckResponse(data, context);
  const response: AssociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AssociateProactiveEngagementDetailsResponse(data, context);
  const response: AssociateProactiveEngagementDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateProtectionResponse(data, context);
  const response: CreateProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateProtectionGroupResponse(data, context);
  const response: CreateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateSubscriptionResponse(data, context);
  const response: CreateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteProtectionResponse(data, context);
  const response: DeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteProtectionGroupResponse(data, context);
  const response: DeleteProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteSubscriptionResponse(data, context);
  const response: DeleteSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeDRTAccessResponse(data, context);
  const response: DescribeDRTAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeEmergencyContactSettingsResponse(data, context);
  const response: DescribeEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeProtectionResponse(data, context);
  const response: DescribeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeProtectionGroupResponse(data, context);
  const response: DescribeProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisableApplicationLayerAutomaticResponseResponse(data, context);
  const response: DisableApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisableProactiveEngagementResponse(data, context);
  const response: DisableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateDRTLogBucketResponse(data, context);
  const response: DisassociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateDRTRoleResponse(data, context);
  const response: DisassociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateHealthCheckResponse(data, context);
  const response: DisassociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_EnableApplicationLayerAutomaticResponseResponse(data, context);
  const response: EnableApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_EnableProactiveEngagementResponse(data, context);
  const response: EnableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetSubscriptionStateResponse(data, context);
  const response: GetSubscriptionStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListProtectionGroupsResponse(data, context);
  const response: ListProtectionGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListProtectionsResponse(data, context);
  const response: ListProtectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListResourcesInProtectionGroupResponse(data, context);
  const response: ListResourcesInProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  contents = de_ListTagsForResourceResponse(data, context);
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
  contents = de_TagResourceResponse(data, context);
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
  contents = de_UntagResourceResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateApplicationLayerAutomaticResponseResponse(data, context);
  const response: UpdateApplicationLayerAutomaticResponseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateEmergencyContactSettingsResponse(data, context);
  const response: UpdateEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateProtectionGroupResponse(data, context);
  const response: UpdateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateSubscriptionResponse(data, context);
  const response: UpdateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
 * deserializeAws_json1_1AccessDeniedForDependencyExceptionRes
 */
const de_AccessDeniedForDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedForDependencyException(body, context);
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
  const deserialized: any = de_InternalErrorException(body, context);
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
  const deserialized: any = de_InvalidOperationException(body, context);
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
  const deserialized: any = de_InvalidPaginationTokenException(body, context);
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
  const deserialized: any = de_InvalidParameterException(body, context);
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
  const deserialized: any = de_InvalidResourceException(body, context);
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
  const deserialized: any = de_LimitsExceededException(body, context);
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
  const deserialized: any = de_LockedSubscriptionException(body, context);
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
  const deserialized: any = de_NoAssociatedRoleException(body, context);
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
  const deserialized: any = de_OptimisticLockException(body, context);
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
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateDRTLogBucketRequest
 */
const se_AssociateDRTLogBucketRequest = (input: AssociateDRTLogBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.LogBucket != null && { LogBucket: input.LogBucket }),
  };
};

/**
 * serializeAws_json1_1AssociateDRTRoleRequest
 */
const se_AssociateDRTRoleRequest = (input: AssociateDRTRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1AssociateHealthCheckRequest
 */
const se_AssociateHealthCheckRequest = (input: AssociateHealthCheckRequest, context: __SerdeContext): any => {
  return {
    ...(input.HealthCheckArn != null && { HealthCheckArn: input.HealthCheckArn }),
    ...(input.ProtectionId != null && { ProtectionId: input.ProtectionId }),
  };
};

/**
 * serializeAws_json1_1AssociateProactiveEngagementDetailsRequest
 */
const se_AssociateProactiveEngagementDetailsRequest = (
  input: AssociateProactiveEngagementDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmergencyContactList != null && {
      EmergencyContactList: se_EmergencyContactList(input.EmergencyContactList, context),
    }),
  };
};

/**
 * serializeAws_json1_1BlockAction
 */
const se_BlockAction = (input: BlockAction, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1CountAction
 */
const se_CountAction = (input: CountAction, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1CreateProtectionGroupRequest
 */
const se_CreateProtectionGroupRequest = (input: CreateProtectionGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregation != null && { Aggregation: input.Aggregation }),
    ...(input.Members != null && { Members: se_ProtectionGroupMembers(input.Members, context) }),
    ...(input.Pattern != null && { Pattern: input.Pattern }),
    ...(input.ProtectionGroupId != null && { ProtectionGroupId: input.ProtectionGroupId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateProtectionRequest
 */
const se_CreateProtectionRequest = (input: CreateProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSubscriptionRequest
 */
const se_CreateSubscriptionRequest = (input: CreateSubscriptionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DeleteProtectionGroupRequest
 */
const se_DeleteProtectionGroupRequest = (input: DeleteProtectionGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionGroupId != null && { ProtectionGroupId: input.ProtectionGroupId }),
  };
};

/**
 * serializeAws_json1_1DeleteProtectionRequest
 */
const se_DeleteProtectionRequest = (input: DeleteProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionId != null && { ProtectionId: input.ProtectionId }),
  };
};

/**
 * serializeAws_json1_1DeleteSubscriptionRequest
 */
const se_DeleteSubscriptionRequest = (input: DeleteSubscriptionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeAttackRequest
 */
const se_DescribeAttackRequest = (input: DescribeAttackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttackId != null && { AttackId: input.AttackId }),
  };
};

/**
 * serializeAws_json1_1DescribeAttackStatisticsRequest
 */
const se_DescribeAttackStatisticsRequest = (input: DescribeAttackStatisticsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeDRTAccessRequest
 */
const se_DescribeDRTAccessRequest = (input: DescribeDRTAccessRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeEmergencyContactSettingsRequest
 */
const se_DescribeEmergencyContactSettingsRequest = (
  input: DescribeEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeProtectionGroupRequest
 */
const se_DescribeProtectionGroupRequest = (input: DescribeProtectionGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionGroupId != null && { ProtectionGroupId: input.ProtectionGroupId }),
  };
};

/**
 * serializeAws_json1_1DescribeProtectionRequest
 */
const se_DescribeProtectionRequest = (input: DescribeProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionId != null && { ProtectionId: input.ProtectionId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DescribeSubscriptionRequest
 */
const se_DescribeSubscriptionRequest = (input: DescribeSubscriptionRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DisableApplicationLayerAutomaticResponseRequest
 */
const se_DisableApplicationLayerAutomaticResponseRequest = (
  input: DisableApplicationLayerAutomaticResponseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DisableProactiveEngagementRequest
 */
const se_DisableProactiveEngagementRequest = (
  input: DisableProactiveEngagementRequest,
  context: __SerdeContext
): any => {
  return {};
};

/**
 * serializeAws_json1_1DisassociateDRTLogBucketRequest
 */
const se_DisassociateDRTLogBucketRequest = (input: DisassociateDRTLogBucketRequest, context: __SerdeContext): any => {
  return {
    ...(input.LogBucket != null && { LogBucket: input.LogBucket }),
  };
};

/**
 * serializeAws_json1_1DisassociateDRTRoleRequest
 */
const se_DisassociateDRTRoleRequest = (input: DisassociateDRTRoleRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DisassociateHealthCheckRequest
 */
const se_DisassociateHealthCheckRequest = (input: DisassociateHealthCheckRequest, context: __SerdeContext): any => {
  return {
    ...(input.HealthCheckArn != null && { HealthCheckArn: input.HealthCheckArn }),
    ...(input.ProtectionId != null && { ProtectionId: input.ProtectionId }),
  };
};

/**
 * serializeAws_json1_1EmergencyContact
 */
const se_EmergencyContact = (input: EmergencyContact, context: __SerdeContext): any => {
  return {
    ...(input.ContactNotes != null && { ContactNotes: input.ContactNotes }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

/**
 * serializeAws_json1_1EmergencyContactList
 */
const se_EmergencyContactList = (input: EmergencyContact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EmergencyContact(entry, context);
    });
};

/**
 * serializeAws_json1_1EnableApplicationLayerAutomaticResponseRequest
 */
const se_EnableApplicationLayerAutomaticResponseRequest = (
  input: EnableApplicationLayerAutomaticResponseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: se_ResponseAction(input.Action, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1EnableProactiveEngagementRequest
 */
const se_EnableProactiveEngagementRequest = (input: EnableProactiveEngagementRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetSubscriptionStateRequest
 */
const se_GetSubscriptionStateRequest = (input: GetSubscriptionStateRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1InclusionProtectionFilters
 */
const se_InclusionProtectionFilters = (input: InclusionProtectionFilters, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionNames != null && { ProtectionNames: se_ProtectionNameFilters(input.ProtectionNames, context) }),
    ...(input.ResourceArns != null && { ResourceArns: se_ResourceArnFilters(input.ResourceArns, context) }),
    ...(input.ResourceTypes != null && {
      ResourceTypes: se_ProtectedResourceTypeFilters(input.ResourceTypes, context),
    }),
  };
};

/**
 * serializeAws_json1_1InclusionProtectionGroupFilters
 */
const se_InclusionProtectionGroupFilters = (input: InclusionProtectionGroupFilters, context: __SerdeContext): any => {
  return {
    ...(input.Aggregations != null && {
      Aggregations: se_ProtectionGroupAggregationFilters(input.Aggregations, context),
    }),
    ...(input.Patterns != null && { Patterns: se_ProtectionGroupPatternFilters(input.Patterns, context) }),
    ...(input.ProtectionGroupIds != null && {
      ProtectionGroupIds: se_ProtectionGroupIdFilters(input.ProtectionGroupIds, context),
    }),
    ...(input.ResourceTypes != null && {
      ResourceTypes: se_ProtectedResourceTypeFilters(input.ResourceTypes, context),
    }),
  };
};

/**
 * serializeAws_json1_1ListAttacksRequest
 */
const se_ListAttacksRequest = (input: ListAttacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: se_TimeRange(input.EndTime, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArns != null && { ResourceArns: se_ResourceArnFilterList(input.ResourceArns, context) }),
    ...(input.StartTime != null && { StartTime: se_TimeRange(input.StartTime, context) }),
  };
};

/**
 * serializeAws_json1_1ListProtectionGroupsRequest
 */
const se_ListProtectionGroupsRequest = (input: ListProtectionGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InclusionFilters != null && {
      InclusionFilters: se_InclusionProtectionGroupFilters(input.InclusionFilters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListProtectionsRequest
 */
const se_ListProtectionsRequest = (input: ListProtectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InclusionFilters != null && {
      InclusionFilters: se_InclusionProtectionFilters(input.InclusionFilters, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourcesInProtectionGroupRequest
 */
const se_ListResourcesInProtectionGroupRequest = (
  input: ListResourcesInProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProtectionGroupId != null && { ProtectionGroupId: input.ProtectionGroupId }),
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
 * serializeAws_json1_1ProtectedResourceTypeFilters
 */
const se_ProtectedResourceTypeFilters = (input: (ProtectedResourceType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectionGroupAggregationFilters
 */
const se_ProtectionGroupAggregationFilters = (
  input: (ProtectionGroupAggregation | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectionGroupIdFilters
 */
const se_ProtectionGroupIdFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectionGroupMembers
 */
const se_ProtectionGroupMembers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectionGroupPatternFilters
 */
const se_ProtectionGroupPatternFilters = (input: (ProtectionGroupPattern | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtectionNameFilters
 */
const se_ProtectionNameFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceArnFilterList
 */
const se_ResourceArnFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceArnFilters
 */
const se_ResourceArnFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResponseAction
 */
const se_ResponseAction = (input: ResponseAction, context: __SerdeContext): any => {
  return {
    ...(input.Block != null && { Block: se_BlockAction(input.Block, context) }),
    ...(input.Count != null && { Count: se_CountAction(input.Count, context) }),
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
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromInclusive != null && { FromInclusive: Math.round(input.FromInclusive.getTime() / 1000) }),
    ...(input.ToExclusive != null && { ToExclusive: Math.round(input.ToExclusive.getTime() / 1000) }),
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
 * serializeAws_json1_1UpdateApplicationLayerAutomaticResponseRequest
 */
const se_UpdateApplicationLayerAutomaticResponseRequest = (
  input: UpdateApplicationLayerAutomaticResponseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: se_ResponseAction(input.Action, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1UpdateEmergencyContactSettingsRequest
 */
const se_UpdateEmergencyContactSettingsRequest = (
  input: UpdateEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmergencyContactList != null && {
      EmergencyContactList: se_EmergencyContactList(input.EmergencyContactList, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateProtectionGroupRequest
 */
const se_UpdateProtectionGroupRequest = (input: UpdateProtectionGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Aggregation != null && { Aggregation: input.Aggregation }),
    ...(input.Members != null && { Members: se_ProtectionGroupMembers(input.Members, context) }),
    ...(input.Pattern != null && { Pattern: input.Pattern }),
    ...(input.ProtectionGroupId != null && { ProtectionGroupId: input.ProtectionGroupId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1UpdateSubscriptionRequest
 */
const se_UpdateSubscriptionRequest = (input: UpdateSubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoRenew != null && { AutoRenew: input.AutoRenew }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AccessDeniedForDependencyException
 */
const de_AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationLayerAutomaticResponseConfiguration
 */
const de_ApplicationLayerAutomaticResponseConfiguration = (
  output: any,
  context: __SerdeContext
): ApplicationLayerAutomaticResponseConfiguration => {
  return {
    Action: output.Action != null ? de_ResponseAction(output.Action, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateDRTLogBucketResponse
 */
const de_AssociateDRTLogBucketResponse = (output: any, context: __SerdeContext): AssociateDRTLogBucketResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateDRTRoleResponse
 */
const de_AssociateDRTRoleResponse = (output: any, context: __SerdeContext): AssociateDRTRoleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateHealthCheckResponse
 */
const de_AssociateHealthCheckResponse = (output: any, context: __SerdeContext): AssociateHealthCheckResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateProactiveEngagementDetailsResponse
 */
const de_AssociateProactiveEngagementDetailsResponse = (
  output: any,
  context: __SerdeContext
): AssociateProactiveEngagementDetailsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AttackDetail
 */
const de_AttackDetail = (output: any, context: __SerdeContext): AttackDetail => {
  return {
    AttackCounters:
      output.AttackCounters != null ? de_SummarizedCounterList(output.AttackCounters, context) : undefined,
    AttackId: __expectString(output.AttackId),
    AttackProperties:
      output.AttackProperties != null ? de_AttackProperties(output.AttackProperties, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Mitigations: output.Mitigations != null ? de_MitigationList(output.Mitigations, context) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    SubResources: output.SubResources != null ? de_SubResourceSummaryList(output.SubResources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttackProperties
 */
const de_AttackProperties = (output: any, context: __SerdeContext): AttackProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttackProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttackProperty
 */
const de_AttackProperty = (output: any, context: __SerdeContext): AttackProperty => {
  return {
    AttackLayer: __expectString(output.AttackLayer),
    AttackPropertyIdentifier: __expectString(output.AttackPropertyIdentifier),
    TopContributors: output.TopContributors != null ? de_TopContributors(output.TopContributors, context) : undefined,
    Total: __expectLong(output.Total),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1AttackStatisticsDataItem
 */
const de_AttackStatisticsDataItem = (output: any, context: __SerdeContext): AttackStatisticsDataItem => {
  return {
    AttackCount: __expectLong(output.AttackCount),
    AttackVolume: output.AttackVolume != null ? de_AttackVolume(output.AttackVolume, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttackStatisticsDataList
 */
const de_AttackStatisticsDataList = (output: any, context: __SerdeContext): AttackStatisticsDataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_AttackSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttackSummary
 */
const de_AttackSummary = (output: any, context: __SerdeContext): AttackSummary => {
  return {
    AttackId: __expectString(output.AttackId),
    AttackVectors:
      output.AttackVectors != null ? de_AttackVectorDescriptionList(output.AttackVectors, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttackVectorDescription
 */
const de_AttackVectorDescription = (output: any, context: __SerdeContext): AttackVectorDescription => {
  return {
    VectorType: __expectString(output.VectorType),
  } as any;
};

/**
 * deserializeAws_json1_1AttackVectorDescriptionList
 */
const de_AttackVectorDescriptionList = (output: any, context: __SerdeContext): AttackVectorDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttackVectorDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttackVolume
 */
const de_AttackVolume = (output: any, context: __SerdeContext): AttackVolume => {
  return {
    BitsPerSecond: output.BitsPerSecond != null ? de_AttackVolumeStatistics(output.BitsPerSecond, context) : undefined,
    PacketsPerSecond:
      output.PacketsPerSecond != null ? de_AttackVolumeStatistics(output.PacketsPerSecond, context) : undefined,
    RequestsPerSecond:
      output.RequestsPerSecond != null ? de_AttackVolumeStatistics(output.RequestsPerSecond, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttackVolumeStatistics
 */
const de_AttackVolumeStatistics = (output: any, context: __SerdeContext): AttackVolumeStatistics => {
  return {
    Max: __limitedParseDouble(output.Max),
  } as any;
};

/**
 * deserializeAws_json1_1BlockAction
 */
const de_BlockAction = (output: any, context: __SerdeContext): BlockAction => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Contributor
 */
const de_Contributor = (output: any, context: __SerdeContext): Contributor => {
  return {
    Name: __expectString(output.Name),
    Value: __expectLong(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1CountAction
 */
const de_CountAction = (output: any, context: __SerdeContext): CountAction => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateProtectionGroupResponse
 */
const de_CreateProtectionGroupResponse = (output: any, context: __SerdeContext): CreateProtectionGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateProtectionResponse
 */
const de_CreateProtectionResponse = (output: any, context: __SerdeContext): CreateProtectionResponse => {
  return {
    ProtectionId: __expectString(output.ProtectionId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSubscriptionResponse
 */
const de_CreateSubscriptionResponse = (output: any, context: __SerdeContext): CreateSubscriptionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProtectionGroupResponse
 */
const de_DeleteProtectionGroupResponse = (output: any, context: __SerdeContext): DeleteProtectionGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProtectionResponse
 */
const de_DeleteProtectionResponse = (output: any, context: __SerdeContext): DeleteProtectionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSubscriptionResponse
 */
const de_DeleteSubscriptionResponse = (output: any, context: __SerdeContext): DeleteSubscriptionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAttackResponse
 */
const de_DescribeAttackResponse = (output: any, context: __SerdeContext): DescribeAttackResponse => {
  return {
    Attack: output.Attack != null ? de_AttackDetail(output.Attack, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAttackStatisticsResponse
 */
const de_DescribeAttackStatisticsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttackStatisticsResponse => {
  return {
    DataItems: output.DataItems != null ? de_AttackStatisticsDataList(output.DataItems, context) : undefined,
    TimeRange: output.TimeRange != null ? de_TimeRange(output.TimeRange, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDRTAccessResponse
 */
const de_DescribeDRTAccessResponse = (output: any, context: __SerdeContext): DescribeDRTAccessResponse => {
  return {
    LogBucketList: output.LogBucketList != null ? de_LogBucketList(output.LogBucketList, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEmergencyContactSettingsResponse
 */
const de_DescribeEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmergencyContactSettingsResponse => {
  return {
    EmergencyContactList:
      output.EmergencyContactList != null ? de_EmergencyContactList(output.EmergencyContactList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProtectionGroupResponse
 */
const de_DescribeProtectionGroupResponse = (output: any, context: __SerdeContext): DescribeProtectionGroupResponse => {
  return {
    ProtectionGroup: output.ProtectionGroup != null ? de_ProtectionGroup(output.ProtectionGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProtectionResponse
 */
const de_DescribeProtectionResponse = (output: any, context: __SerdeContext): DescribeProtectionResponse => {
  return {
    Protection: output.Protection != null ? de_Protection(output.Protection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSubscriptionResponse
 */
const de_DescribeSubscriptionResponse = (output: any, context: __SerdeContext): DescribeSubscriptionResponse => {
  return {
    Subscription: output.Subscription != null ? de_Subscription(output.Subscription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisableApplicationLayerAutomaticResponseResponse
 */
const de_DisableApplicationLayerAutomaticResponseResponse = (
  output: any,
  context: __SerdeContext
): DisableApplicationLayerAutomaticResponseResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableProactiveEngagementResponse
 */
const de_DisableProactiveEngagementResponse = (
  output: any,
  context: __SerdeContext
): DisableProactiveEngagementResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateDRTLogBucketResponse
 */
const de_DisassociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTLogBucketResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateDRTRoleResponse
 */
const de_DisassociateDRTRoleResponse = (output: any, context: __SerdeContext): DisassociateDRTRoleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateHealthCheckResponse
 */
const de_DisassociateHealthCheckResponse = (output: any, context: __SerdeContext): DisassociateHealthCheckResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EmergencyContact
 */
const de_EmergencyContact = (output: any, context: __SerdeContext): EmergencyContact => {
  return {
    ContactNotes: __expectString(output.ContactNotes),
    EmailAddress: __expectString(output.EmailAddress),
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

/**
 * deserializeAws_json1_1EmergencyContactList
 */
const de_EmergencyContactList = (output: any, context: __SerdeContext): EmergencyContact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EmergencyContact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnableApplicationLayerAutomaticResponseResponse
 */
const de_EnableApplicationLayerAutomaticResponseResponse = (
  output: any,
  context: __SerdeContext
): EnableApplicationLayerAutomaticResponseResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EnableProactiveEngagementResponse
 */
const de_EnableProactiveEngagementResponse = (
  output: any,
  context: __SerdeContext
): EnableProactiveEngagementResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1GetSubscriptionStateResponse
 */
const de_GetSubscriptionStateResponse = (output: any, context: __SerdeContext): GetSubscriptionStateResponse => {
  return {
    SubscriptionState: __expectString(output.SubscriptionState),
  } as any;
};

/**
 * deserializeAws_json1_1HealthCheckIds
 */
const de_HealthCheckIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPaginationTokenException
 */
const de_InvalidPaginationTokenException = (output: any, context: __SerdeContext): InvalidPaginationTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    fields: output.fields != null ? de_ValidationExceptionFieldList(output.fields, context) : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidResourceException
 */
const de_InvalidResourceException = (output: any, context: __SerdeContext): InvalidResourceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Limit
 */
const de_Limit = (output: any, context: __SerdeContext): Limit => {
  return {
    Max: __expectLong(output.Max),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Limits
 */
const de_Limits = (output: any, context: __SerdeContext): Limit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Limit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitsExceededException
 */
const de_LimitsExceededException = (output: any, context: __SerdeContext): LimitsExceededException => {
  return {
    Limit: __expectLong(output.Limit),
    Type: __expectString(output.Type),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAttacksResponse
 */
const de_ListAttacksResponse = (output: any, context: __SerdeContext): ListAttacksResponse => {
  return {
    AttackSummaries: output.AttackSummaries != null ? de_AttackSummaries(output.AttackSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListProtectionGroupsResponse
 */
const de_ListProtectionGroupsResponse = (output: any, context: __SerdeContext): ListProtectionGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProtectionGroups:
      output.ProtectionGroups != null ? de_ProtectionGroups(output.ProtectionGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProtectionsResponse
 */
const de_ListProtectionsResponse = (output: any, context: __SerdeContext): ListProtectionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Protections: output.Protections != null ? de_Protections(output.Protections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourcesInProtectionGroupResponse
 */
const de_ListResourcesInProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesInProtectionGroupResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceArns: output.ResourceArns != null ? de_ResourceArnList(output.ResourceArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LockedSubscriptionException
 */
const de_LockedSubscriptionException = (output: any, context: __SerdeContext): LockedSubscriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LogBucketList
 */
const de_LogBucketList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Mitigation
 */
const de_Mitigation = (output: any, context: __SerdeContext): Mitigation => {
  return {
    MitigationName: __expectString(output.MitigationName),
  } as any;
};

/**
 * deserializeAws_json1_1MitigationList
 */
const de_MitigationList = (output: any, context: __SerdeContext): Mitigation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Mitigation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NoAssociatedRoleException
 */
const de_NoAssociatedRoleException = (output: any, context: __SerdeContext): NoAssociatedRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OptimisticLockException
 */
const de_OptimisticLockException = (output: any, context: __SerdeContext): OptimisticLockException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Protection
 */
const de_Protection = (output: any, context: __SerdeContext): Protection => {
  return {
    ApplicationLayerAutomaticResponseConfiguration:
      output.ApplicationLayerAutomaticResponseConfiguration != null
        ? de_ApplicationLayerAutomaticResponseConfiguration(
            output.ApplicationLayerAutomaticResponseConfiguration,
            context
          )
        : undefined,
    HealthCheckIds: output.HealthCheckIds != null ? de_HealthCheckIds(output.HealthCheckIds, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ProtectionArn: __expectString(output.ProtectionArn),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectionGroup
 */
const de_ProtectionGroup = (output: any, context: __SerdeContext): ProtectionGroup => {
  return {
    Aggregation: __expectString(output.Aggregation),
    Members: output.Members != null ? de_ProtectionGroupMembers(output.Members, context) : undefined,
    Pattern: __expectString(output.Pattern),
    ProtectionGroupArn: __expectString(output.ProtectionGroupArn),
    ProtectionGroupId: __expectString(output.ProtectionGroupId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectionGroupArbitraryPatternLimits
 */
const de_ProtectionGroupArbitraryPatternLimits = (
  output: any,
  context: __SerdeContext
): ProtectionGroupArbitraryPatternLimits => {
  return {
    MaxMembers: __expectLong(output.MaxMembers),
  } as any;
};

/**
 * deserializeAws_json1_1ProtectionGroupLimits
 */
const de_ProtectionGroupLimits = (output: any, context: __SerdeContext): ProtectionGroupLimits => {
  return {
    MaxProtectionGroups: __expectLong(output.MaxProtectionGroups),
    PatternTypeLimits:
      output.PatternTypeLimits != null
        ? de_ProtectionGroupPatternTypeLimits(output.PatternTypeLimits, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProtectionGroupMembers
 */
const de_ProtectionGroupMembers = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ProtectionGroupPatternTypeLimits
 */
const de_ProtectionGroupPatternTypeLimits = (
  output: any,
  context: __SerdeContext
): ProtectionGroupPatternTypeLimits => {
  return {
    ArbitraryPatternLimits:
      output.ArbitraryPatternLimits != null
        ? de_ProtectionGroupArbitraryPatternLimits(output.ArbitraryPatternLimits, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProtectionGroups
 */
const de_ProtectionGroups = (output: any, context: __SerdeContext): ProtectionGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectionGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProtectionLimits
 */
const de_ProtectionLimits = (output: any, context: __SerdeContext): ProtectionLimits => {
  return {
    ProtectedResourceTypeLimits:
      output.ProtectedResourceTypeLimits != null ? de_Limits(output.ProtectedResourceTypeLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Protections
 */
const de_Protections = (output: any, context: __SerdeContext): Protection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Protection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceArnList
 */
const de_ResourceArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResponseAction
 */
const de_ResponseAction = (output: any, context: __SerdeContext): ResponseAction => {
  return {
    Block: output.Block != null ? de_BlockAction(output.Block, context) : undefined,
    Count: output.Count != null ? de_CountAction(output.Count, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SubResourceSummary
 */
const de_SubResourceSummary = (output: any, context: __SerdeContext): SubResourceSummary => {
  return {
    AttackVectors:
      output.AttackVectors != null ? de_SummarizedAttackVectorList(output.AttackVectors, context) : undefined,
    Counters: output.Counters != null ? de_SummarizedCounterList(output.Counters, context) : undefined,
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SubResourceSummaryList
 */
const de_SubResourceSummaryList = (output: any, context: __SerdeContext): SubResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Subscription
 */
const de_Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    AutoRenew: __expectString(output.AutoRenew),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Limits: output.Limits != null ? de_Limits(output.Limits, context) : undefined,
    ProactiveEngagementStatus: __expectString(output.ProactiveEngagementStatus),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    SubscriptionArn: __expectString(output.SubscriptionArn),
    SubscriptionLimits:
      output.SubscriptionLimits != null ? de_SubscriptionLimits(output.SubscriptionLimits, context) : undefined,
    TimeCommitmentInSeconds: __expectLong(output.TimeCommitmentInSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1SubscriptionLimits
 */
const de_SubscriptionLimits = (output: any, context: __SerdeContext): SubscriptionLimits => {
  return {
    ProtectionGroupLimits:
      output.ProtectionGroupLimits != null
        ? de_ProtectionGroupLimits(output.ProtectionGroupLimits, context)
        : undefined,
    ProtectionLimits:
      output.ProtectionLimits != null ? de_ProtectionLimits(output.ProtectionLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SummarizedAttackVector
 */
const de_SummarizedAttackVector = (output: any, context: __SerdeContext): SummarizedAttackVector => {
  return {
    VectorCounters:
      output.VectorCounters != null ? de_SummarizedCounterList(output.VectorCounters, context) : undefined,
    VectorType: __expectString(output.VectorType),
  } as any;
};

/**
 * deserializeAws_json1_1SummarizedAttackVectorList
 */
const de_SummarizedAttackVectorList = (output: any, context: __SerdeContext): SummarizedAttackVector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SummarizedAttackVector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SummarizedCounter
 */
const de_SummarizedCounter = (output: any, context: __SerdeContext): SummarizedCounter => {
  return {
    Average: __limitedParseDouble(output.Average),
    Max: __limitedParseDouble(output.Max),
    N: __expectInt32(output.N),
    Name: __expectString(output.Name),
    Sum: __limitedParseDouble(output.Sum),
    Unit: __expectString(output.Unit),
  } as any;
};

/**
 * deserializeAws_json1_1SummarizedCounterList
 */
const de_SummarizedCounterList = (output: any, context: __SerdeContext): SummarizedCounter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SummarizedCounter(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_1TagList
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TimeRange
 */
const de_TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return {
    FromInclusive:
      output.FromInclusive != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FromInclusive)))
        : undefined,
    ToExclusive:
      output.ToExclusive != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ToExclusive)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TopContributors
 */
const de_TopContributors = (output: any, context: __SerdeContext): Contributor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Contributor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationLayerAutomaticResponseResponse
 */
const de_UpdateApplicationLayerAutomaticResponseResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationLayerAutomaticResponseResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateEmergencyContactSettingsResponse
 */
const de_UpdateEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateEmergencyContactSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateProtectionGroupResponse
 */
const de_UpdateProtectionGroupResponse = (output: any, context: __SerdeContext): UpdateProtectionGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateSubscriptionResponse
 */
const de_UpdateSubscriptionResponse = (output: any, context: __SerdeContext): UpdateSubscriptionResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
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
