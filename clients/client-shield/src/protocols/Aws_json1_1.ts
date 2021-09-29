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
  Contributor,
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
  DisableProactiveEngagementRequest,
  DisableProactiveEngagementResponse,
  DisassociateDRTLogBucketRequest,
  DisassociateDRTLogBucketResponse,
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleResponse,
  DisassociateHealthCheckRequest,
  DisassociateHealthCheckResponse,
  EmergencyContact,
  EnableProactiveEngagementRequest,
  EnableProactiveEngagementResponse,
  GetSubscriptionStateRequest,
  GetSubscriptionStateResponse,
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
  Protection,
  ProtectionGroup,
  ProtectionGroupArbitraryPatternLimits,
  ProtectionGroupLimits,
  ProtectionGroupPatternTypeLimits,
  ProtectionLimits,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
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
  UpdateEmergencyContactSettingsRequest,
  UpdateEmergencyContactSettingsResponse,
  UpdateProtectionGroupRequest,
  UpdateProtectionGroupResponse,
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse,
  ValidationExceptionField,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateDRTLogBucketCommand = async (
  input: AssociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.AssociateDRTLogBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDRTLogBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDRTRoleCommand = async (
  input: AssociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.AssociateDRTRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDRTRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateHealthCheckCommand = async (
  input: AssociateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.AssociateHealthCheck",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateHealthCheckRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateProactiveEngagementDetailsCommand = async (
  input: AssociateProactiveEngagementDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.AssociateProactiveEngagementDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateProactiveEngagementDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProtectionCommand = async (
  input: CreateProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.CreateProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProtectionGroupCommand = async (
  input: CreateProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.CreateProtectionGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProtectionGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubscriptionCommand = async (
  input: CreateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.CreateSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProtectionCommand = async (
  input: DeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DeleteProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProtectionGroupCommand = async (
  input: DeleteProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DeleteProtectionGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProtectionGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriptionCommand = async (
  input: DeleteSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DeleteSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAttackCommand = async (
  input: DescribeAttackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeAttack",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAttackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAttackStatisticsCommand = async (
  input: DescribeAttackStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeAttackStatistics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAttackStatisticsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDRTAccessCommand = async (
  input: DescribeDRTAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeDRTAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDRTAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (
  input: DescribeEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeEmergencyContactSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEmergencyContactSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProtectionCommand = async (
  input: DescribeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeProtection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProtectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProtectionGroupCommand = async (
  input: DescribeProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeProtectionGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProtectionGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscriptionCommand = async (
  input: DescribeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DescribeSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableProactiveEngagementCommand = async (
  input: DisableProactiveEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DisableProactiveEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableProactiveEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDRTLogBucketCommand = async (
  input: DisassociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DisassociateDRTLogBucket",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDRTLogBucketRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDRTRoleCommand = async (
  input: DisassociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DisassociateDRTRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDRTRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateHealthCheckCommand = async (
  input: DisassociateHealthCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.DisassociateHealthCheck",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateHealthCheckRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableProactiveEngagementCommand = async (
  input: EnableProactiveEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.EnableProactiveEngagement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableProactiveEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSubscriptionStateCommand = async (
  input: GetSubscriptionStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.GetSubscriptionState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSubscriptionStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAttacksCommand = async (
  input: ListAttacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.ListAttacks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAttacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProtectionGroupsCommand = async (
  input: ListProtectionGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.ListProtectionGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProtectionGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProtectionsCommand = async (
  input: ListProtectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.ListProtections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProtectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesInProtectionGroupCommand = async (
  input: ListResourcesInProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.ListResourcesInProtectionGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesInProtectionGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (
  input: UpdateEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.UpdateEmergencyContactSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEmergencyContactSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProtectionGroupCommand = async (
  input: UpdateProtectionGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.UpdateProtectionGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProtectionGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubscriptionCommand = async (
  input: UpdateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShield_20160616.UpdateSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDRTLogBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDRTLogBucketResponse(data, context);
  const response: AssociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDRTRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDRTRoleResponse(data, context);
  const response: AssociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateHealthCheckResponse(data, context);
  const response: AssociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProactiveEngagementDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateProactiveEngagementDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateProactiveEngagementDetailsResponse(data, context);
  const response: AssociateProactiveEngagementDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateProactiveEngagementDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProactiveEngagementDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProtectionResponse(data, context);
  const response: CreateProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProtectionGroupResponse(data, context);
  const response: CreateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubscriptionResponse(data, context);
  const response: CreateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProtectionResponse(data, context);
  const response: DeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProtectionGroupResponse(data, context);
  const response: DeleteProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubscriptionResponse(data, context);
  const response: DeleteSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAttackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAttackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAttackResponse(data, context);
  const response: DescribeAttackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAttackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.shield#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeAttackStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAttackStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAttackStatisticsResponse(data, context);
  const response: DescribeAttackStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAttackStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeDRTAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDRTAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDRTAccessResponse(data, context);
  const response: DescribeDRTAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDRTAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEmergencyContactSettingsResponse(data, context);
  const response: DescribeEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProtectionResponse(data, context);
  const response: DescribeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProtectionGroupResponse(data, context);
  const response: DescribeProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscriptionResponse(data, context);
  const response: DescribeSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableProactiveEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProactiveEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableProactiveEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableProactiveEngagementResponse(data, context);
  const response: DisableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableProactiveEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProactiveEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDRTLogBucketCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDRTLogBucketResponse(data, context);
  const response: DisassociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDRTRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDRTRoleResponse(data, context);
  const response: DisassociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisassociateHealthCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateHealthCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateHealthCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateHealthCheckResponse(data, context);
  const response: DisassociateHealthCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateHealthCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateHealthCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableProactiveEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProactiveEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableProactiveEngagementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableProactiveEngagementResponse(data, context);
  const response: EnableProactiveEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableProactiveEngagementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProactiveEngagementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetSubscriptionStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSubscriptionStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSubscriptionStateResponse(data, context);
  const response: GetSubscriptionStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSubscriptionStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListAttacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAttacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAttacksResponse(data, context);
  const response: ListAttacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAttacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListProtectionGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProtectionGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProtectionGroupsResponse(data, context);
  const response: ListProtectionGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProtectionGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListProtectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProtectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProtectionsResponse(data, context);
  const response: ListProtectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProtectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListResourcesInProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesInProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesInProtectionGroupResponse(data, context);
  const response: ListResourcesInProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesInProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesInProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEmergencyContactSettingsResponse(data, context);
  const response: UpdateEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateProtectionGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectionGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProtectionGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProtectionGroupResponse(data, context);
  const response: UpdateProtectionGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProtectionGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProtectionGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubscriptionResponse(data, context);
  const response: UpdateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
  const contents: AccessDeniedForDependencyException = {
    name: "AccessDeniedForDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(body, context);
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceException(body, context);
  const contents: InvalidResourceException = {
    name: "InvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitsExceededException(body, context);
  const contents: LimitsExceededException = {
    name: "LimitsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LockedSubscriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockedSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LockedSubscriptionException(body, context);
  const contents: LockedSubscriptionException = {
    name: "LockedSubscriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoAssociatedRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAssociatedRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAssociatedRoleException(body, context);
  const contents: NoAssociatedRoleException = {
    name: "NoAssociatedRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OptimisticLockExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OptimisticLockException(body, context);
  const contents: OptimisticLockException = {
    name: "OptimisticLockException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateDRTLogBucketRequest = (
  input: AssociateDRTLogBucketRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogBucket !== undefined && input.LogBucket !== null && { LogBucket: input.LogBucket }),
  };
};

const serializeAws_json1_1AssociateDRTRoleRequest = (input: AssociateDRTRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1AssociateHealthCheckRequest = (
  input: AssociateHealthCheckRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthCheckArn !== undefined &&
      input.HealthCheckArn !== null && { HealthCheckArn: input.HealthCheckArn }),
    ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
  };
};

const serializeAws_json1_1AssociateProactiveEngagementDetailsRequest = (
  input: AssociateProactiveEngagementDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmergencyContactList !== undefined &&
      input.EmergencyContactList !== null && {
        EmergencyContactList: serializeAws_json1_1EmergencyContactList(input.EmergencyContactList, context),
      }),
  };
};

const serializeAws_json1_1CreateProtectionGroupRequest = (
  input: CreateProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aggregation !== undefined && input.Aggregation !== null && { Aggregation: input.Aggregation }),
    ...(input.Members !== undefined &&
      input.Members !== null && { Members: serializeAws_json1_1ProtectionGroupMembers(input.Members, context) }),
    ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    ...(input.ProtectionGroupId !== undefined &&
      input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateProtectionRequest = (input: CreateProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSubscriptionRequest = (
  input: CreateSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteProtectionGroupRequest = (
  input: DeleteProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProtectionGroupId !== undefined &&
      input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
  };
};

const serializeAws_json1_1DeleteProtectionRequest = (input: DeleteProtectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
  };
};

const serializeAws_json1_1DeleteSubscriptionRequest = (
  input: DeleteSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeAttackRequest = (input: DescribeAttackRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttackId !== undefined && input.AttackId !== null && { AttackId: input.AttackId }),
  };
};

const serializeAws_json1_1DescribeAttackStatisticsRequest = (
  input: DescribeAttackStatisticsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeDRTAccessRequest = (
  input: DescribeDRTAccessRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeEmergencyContactSettingsRequest = (
  input: DescribeEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeProtectionGroupRequest = (
  input: DescribeProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProtectionGroupId !== undefined &&
      input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
  };
};

const serializeAws_json1_1DescribeProtectionRequest = (
  input: DescribeProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeSubscriptionRequest = (
  input: DescribeSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisableProactiveEngagementRequest = (
  input: DisableProactiveEngagementRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisassociateDRTLogBucketRequest = (
  input: DisassociateDRTLogBucketRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogBucket !== undefined && input.LogBucket !== null && { LogBucket: input.LogBucket }),
  };
};

const serializeAws_json1_1DisassociateDRTRoleRequest = (
  input: DisassociateDRTRoleRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisassociateHealthCheckRequest = (
  input: DisassociateHealthCheckRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthCheckArn !== undefined &&
      input.HealthCheckArn !== null && { HealthCheckArn: input.HealthCheckArn }),
    ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
  };
};

const serializeAws_json1_1EmergencyContact = (input: EmergencyContact, context: __SerdeContext): any => {
  return {
    ...(input.ContactNotes !== undefined && input.ContactNotes !== null && { ContactNotes: input.ContactNotes }),
    ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_json1_1EmergencyContactList = (input: EmergencyContact[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EmergencyContact(entry, context);
    });
};

const serializeAws_json1_1EnableProactiveEngagementRequest = (
  input: EnableProactiveEngagementRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetSubscriptionStateRequest = (
  input: GetSubscriptionStateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListAttacksRequest = (input: ListAttacksRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: serializeAws_json1_1TimeRange(input.EndTime, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArns !== undefined &&
      input.ResourceArns !== null && {
        ResourceArns: serializeAws_json1_1ResourceArnFilterList(input.ResourceArns, context),
      }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: serializeAws_json1_1TimeRange(input.StartTime, context) }),
  };
};

const serializeAws_json1_1ListProtectionGroupsRequest = (
  input: ListProtectionGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListProtectionsRequest = (input: ListProtectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourcesInProtectionGroupRequest = (
  input: ListResourcesInProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ProtectionGroupId !== undefined &&
      input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ProtectionGroupMembers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ResourceArnFilterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.FromInclusive !== undefined &&
      input.FromInclusive !== null && { FromInclusive: Math.round(input.FromInclusive.getTime() / 1000) }),
    ...(input.ToExclusive !== undefined &&
      input.ToExclusive !== null && { ToExclusive: Math.round(input.ToExclusive.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateEmergencyContactSettingsRequest = (
  input: UpdateEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmergencyContactList !== undefined &&
      input.EmergencyContactList !== null && {
        EmergencyContactList: serializeAws_json1_1EmergencyContactList(input.EmergencyContactList, context),
      }),
  };
};

const serializeAws_json1_1UpdateProtectionGroupRequest = (
  input: UpdateProtectionGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aggregation !== undefined && input.Aggregation !== null && { Aggregation: input.Aggregation }),
    ...(input.Members !== undefined &&
      input.Members !== null && { Members: serializeAws_json1_1ProtectionGroupMembers(input.Members, context) }),
    ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
    ...(input.ProtectionGroupId !== undefined &&
      input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1UpdateSubscriptionRequest = (
  input: UpdateSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoRenew !== undefined && input.AutoRenew !== null && { AutoRenew: input.AutoRenew }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AssociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTLogBucketResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTRoleResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateHealthCheckResponse = (
  output: any,
  context: __SerdeContext
): AssociateHealthCheckResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateProactiveEngagementDetailsResponse = (
  output: any,
  context: __SerdeContext
): AssociateProactiveEngagementDetailsResponse => {
  return {} as any;
};

const deserializeAws_json1_1AttackDetail = (output: any, context: __SerdeContext): AttackDetail => {
  return {
    AttackCounters:
      output.AttackCounters !== undefined && output.AttackCounters !== null
        ? deserializeAws_json1_1SummarizedCounterList(output.AttackCounters, context)
        : undefined,
    AttackId: __expectString(output.AttackId),
    AttackProperties:
      output.AttackProperties !== undefined && output.AttackProperties !== null
        ? deserializeAws_json1_1AttackProperties(output.AttackProperties, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    Mitigations:
      output.Mitigations !== undefined && output.Mitigations !== null
        ? deserializeAws_json1_1MitigationList(output.Mitigations, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    SubResources:
      output.SubResources !== undefined && output.SubResources !== null
        ? deserializeAws_json1_1SubResourceSummaryList(output.SubResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttackProperties = (output: any, context: __SerdeContext): AttackProperty[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttackProperty(entry, context);
    });
};

const deserializeAws_json1_1AttackProperty = (output: any, context: __SerdeContext): AttackProperty => {
  return {
    AttackLayer: __expectString(output.AttackLayer),
    AttackPropertyIdentifier: __expectString(output.AttackPropertyIdentifier),
    TopContributors:
      output.TopContributors !== undefined && output.TopContributors !== null
        ? deserializeAws_json1_1TopContributors(output.TopContributors, context)
        : undefined,
    Total: __expectLong(output.Total),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1AttackStatisticsDataItem = (
  output: any,
  context: __SerdeContext
): AttackStatisticsDataItem => {
  return {
    AttackCount: __expectLong(output.AttackCount),
    AttackVolume:
      output.AttackVolume !== undefined && output.AttackVolume !== null
        ? deserializeAws_json1_1AttackVolume(output.AttackVolume, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttackStatisticsDataList = (
  output: any,
  context: __SerdeContext
): AttackStatisticsDataItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttackStatisticsDataItem(entry, context);
    });
};

const deserializeAws_json1_1AttackSummaries = (output: any, context: __SerdeContext): AttackSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttackSummary(entry, context);
    });
};

const deserializeAws_json1_1AttackSummary = (output: any, context: __SerdeContext): AttackSummary => {
  return {
    AttackId: __expectString(output.AttackId),
    AttackVectors:
      output.AttackVectors !== undefined && output.AttackVectors !== null
        ? deserializeAws_json1_1AttackVectorDescriptionList(output.AttackVectors, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttackVectorDescription = (
  output: any,
  context: __SerdeContext
): AttackVectorDescription => {
  return {
    VectorType: __expectString(output.VectorType),
  } as any;
};

const deserializeAws_json1_1AttackVectorDescriptionList = (
  output: any,
  context: __SerdeContext
): AttackVectorDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttackVectorDescription(entry, context);
    });
};

const deserializeAws_json1_1AttackVolume = (output: any, context: __SerdeContext): AttackVolume => {
  return {
    BitsPerSecond:
      output.BitsPerSecond !== undefined && output.BitsPerSecond !== null
        ? deserializeAws_json1_1AttackVolumeStatistics(output.BitsPerSecond, context)
        : undefined,
    PacketsPerSecond:
      output.PacketsPerSecond !== undefined && output.PacketsPerSecond !== null
        ? deserializeAws_json1_1AttackVolumeStatistics(output.PacketsPerSecond, context)
        : undefined,
    RequestsPerSecond:
      output.RequestsPerSecond !== undefined && output.RequestsPerSecond !== null
        ? deserializeAws_json1_1AttackVolumeStatistics(output.RequestsPerSecond, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttackVolumeStatistics = (output: any, context: __SerdeContext): AttackVolumeStatistics => {
  return {
    Max: __limitedParseDouble(output.Max),
  } as any;
};

const deserializeAws_json1_1Contributor = (output: any, context: __SerdeContext): Contributor => {
  return {
    Name: __expectString(output.Name),
    Value: __expectLong(output.Value),
  } as any;
};

const deserializeAws_json1_1CreateProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateProtectionGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateProtectionResponse = (
  output: any,
  context: __SerdeContext
): CreateProtectionResponse => {
  return {
    ProtectionId: __expectString(output.ProtectionId),
  } as any;
};

const deserializeAws_json1_1CreateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteProtectionGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProtectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteProtectionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAttackResponse = (output: any, context: __SerdeContext): DescribeAttackResponse => {
  return {
    Attack:
      output.Attack !== undefined && output.Attack !== null
        ? deserializeAws_json1_1AttackDetail(output.Attack, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAttackStatisticsResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttackStatisticsResponse => {
  return {
    DataItems:
      output.DataItems !== undefined && output.DataItems !== null
        ? deserializeAws_json1_1AttackStatisticsDataList(output.DataItems, context)
        : undefined,
    TimeRange:
      output.TimeRange !== undefined && output.TimeRange !== null
        ? deserializeAws_json1_1TimeRange(output.TimeRange, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDRTAccessResponse = (
  output: any,
  context: __SerdeContext
): DescribeDRTAccessResponse => {
  return {
    LogBucketList:
      output.LogBucketList !== undefined && output.LogBucketList !== null
        ? deserializeAws_json1_1LogBucketList(output.LogBucketList, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1DescribeEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmergencyContactSettingsResponse => {
  return {
    EmergencyContactList:
      output.EmergencyContactList !== undefined && output.EmergencyContactList !== null
        ? deserializeAws_json1_1EmergencyContactList(output.EmergencyContactList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeProtectionGroupResponse => {
  return {
    ProtectionGroup:
      output.ProtectionGroup !== undefined && output.ProtectionGroup !== null
        ? deserializeAws_json1_1ProtectionGroup(output.ProtectionGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProtectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeProtectionResponse => {
  return {
    Protection:
      output.Protection !== undefined && output.Protection !== null
        ? deserializeAws_json1_1Protection(output.Protection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionResponse => {
  return {
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_json1_1Subscription(output.Subscription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisableProactiveEngagementResponse = (
  output: any,
  context: __SerdeContext
): DisableProactiveEngagementResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTLogBucketResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTRoleResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateHealthCheckResponse = (
  output: any,
  context: __SerdeContext
): DisassociateHealthCheckResponse => {
  return {} as any;
};

const deserializeAws_json1_1EmergencyContact = (output: any, context: __SerdeContext): EmergencyContact => {
  return {
    ContactNotes: __expectString(output.ContactNotes),
    EmailAddress: __expectString(output.EmailAddress),
    PhoneNumber: __expectString(output.PhoneNumber),
  } as any;
};

const deserializeAws_json1_1EmergencyContactList = (output: any, context: __SerdeContext): EmergencyContact[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EmergencyContact(entry, context);
    });
};

const deserializeAws_json1_1EnableProactiveEngagementResponse = (
  output: any,
  context: __SerdeContext
): EnableProactiveEngagementResponse => {
  return {} as any;
};

const deserializeAws_json1_1GetSubscriptionStateResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionStateResponse => {
  return {
    SubscriptionState: __expectString(output.SubscriptionState),
  } as any;
};

const deserializeAws_json1_1HealthCheckIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    fields:
      output.fields !== undefined && output.fields !== null
        ? deserializeAws_json1_1ValidationExceptionFieldList(output.fields, context)
        : undefined,
    message: __expectString(output.message),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Limit = (output: any, context: __SerdeContext): Limit => {
  return {
    Max: __expectLong(output.Max),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Limits = (output: any, context: __SerdeContext): Limit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Limit(entry, context);
    });
};

const deserializeAws_json1_1LimitsExceededException = (
  output: any,
  context: __SerdeContext
): LimitsExceededException => {
  return {
    Limit: __expectLong(output.Limit),
    Type: __expectString(output.Type),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListAttacksResponse = (output: any, context: __SerdeContext): ListAttacksResponse => {
  return {
    AttackSummaries:
      output.AttackSummaries !== undefined && output.AttackSummaries !== null
        ? deserializeAws_json1_1AttackSummaries(output.AttackSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListProtectionGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListProtectionGroupsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProtectionGroups:
      output.ProtectionGroups !== undefined && output.ProtectionGroups !== null
        ? deserializeAws_json1_1ProtectionGroups(output.ProtectionGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListProtectionsResponse = (
  output: any,
  context: __SerdeContext
): ListProtectionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Protections:
      output.Protections !== undefined && output.Protections !== null
        ? deserializeAws_json1_1Protections(output.Protections, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourcesInProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesInProtectionGroupResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceArns:
      output.ResourceArns !== undefined && output.ResourceArns !== null
        ? deserializeAws_json1_1ResourceArnList(output.ResourceArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LockedSubscriptionException = (
  output: any,
  context: __SerdeContext
): LockedSubscriptionException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LogBucketList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Mitigation = (output: any, context: __SerdeContext): Mitigation => {
  return {
    MitigationName: __expectString(output.MitigationName),
  } as any;
};

const deserializeAws_json1_1MitigationList = (output: any, context: __SerdeContext): Mitigation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Mitigation(entry, context);
    });
};

const deserializeAws_json1_1NoAssociatedRoleException = (
  output: any,
  context: __SerdeContext
): NoAssociatedRoleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OptimisticLockException = (
  output: any,
  context: __SerdeContext
): OptimisticLockException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Protection = (output: any, context: __SerdeContext): Protection => {
  return {
    HealthCheckIds:
      output.HealthCheckIds !== undefined && output.HealthCheckIds !== null
        ? deserializeAws_json1_1HealthCheckIds(output.HealthCheckIds, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    ProtectionArn: __expectString(output.ProtectionArn),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_json1_1ProtectionGroup = (output: any, context: __SerdeContext): ProtectionGroup => {
  return {
    Aggregation: __expectString(output.Aggregation),
    Members:
      output.Members !== undefined && output.Members !== null
        ? deserializeAws_json1_1ProtectionGroupMembers(output.Members, context)
        : undefined,
    Pattern: __expectString(output.Pattern),
    ProtectionGroupArn: __expectString(output.ProtectionGroupArn),
    ProtectionGroupId: __expectString(output.ProtectionGroupId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ProtectionGroupArbitraryPatternLimits = (
  output: any,
  context: __SerdeContext
): ProtectionGroupArbitraryPatternLimits => {
  return {
    MaxMembers: __expectLong(output.MaxMembers),
  } as any;
};

const deserializeAws_json1_1ProtectionGroupLimits = (output: any, context: __SerdeContext): ProtectionGroupLimits => {
  return {
    MaxProtectionGroups: __expectLong(output.MaxProtectionGroups),
    PatternTypeLimits:
      output.PatternTypeLimits !== undefined && output.PatternTypeLimits !== null
        ? deserializeAws_json1_1ProtectionGroupPatternTypeLimits(output.PatternTypeLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProtectionGroupMembers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ProtectionGroupPatternTypeLimits = (
  output: any,
  context: __SerdeContext
): ProtectionGroupPatternTypeLimits => {
  return {
    ArbitraryPatternLimits:
      output.ArbitraryPatternLimits !== undefined && output.ArbitraryPatternLimits !== null
        ? deserializeAws_json1_1ProtectionGroupArbitraryPatternLimits(output.ArbitraryPatternLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProtectionGroups = (output: any, context: __SerdeContext): ProtectionGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProtectionGroup(entry, context);
    });
};

const deserializeAws_json1_1ProtectionLimits = (output: any, context: __SerdeContext): ProtectionLimits => {
  return {
    ProtectedResourceTypeLimits:
      output.ProtectedResourceTypeLimits !== undefined && output.ProtectedResourceTypeLimits !== null
        ? deserializeAws_json1_1Limits(output.ProtectedResourceTypeLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Protections = (output: any, context: __SerdeContext): Protection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Protection(entry, context);
    });
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1ResourceArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_json1_1SubResourceSummary = (output: any, context: __SerdeContext): SubResourceSummary => {
  return {
    AttackVectors:
      output.AttackVectors !== undefined && output.AttackVectors !== null
        ? deserializeAws_json1_1SummarizedAttackVectorList(output.AttackVectors, context)
        : undefined,
    Counters:
      output.Counters !== undefined && output.Counters !== null
        ? deserializeAws_json1_1SummarizedCounterList(output.Counters, context)
        : undefined,
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SubResourceSummaryList = (output: any, context: __SerdeContext): SubResourceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubResourceSummary(entry, context);
    });
};

const deserializeAws_json1_1Subscription = (output: any, context: __SerdeContext): Subscription => {
  return {
    AutoRenew: __expectString(output.AutoRenew),
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime)))
        : undefined,
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_json1_1Limits(output.Limits, context)
        : undefined,
    ProactiveEngagementStatus: __expectString(output.ProactiveEngagementStatus),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    SubscriptionArn: __expectString(output.SubscriptionArn),
    SubscriptionLimits:
      output.SubscriptionLimits !== undefined && output.SubscriptionLimits !== null
        ? deserializeAws_json1_1SubscriptionLimits(output.SubscriptionLimits, context)
        : undefined,
    TimeCommitmentInSeconds: __expectLong(output.TimeCommitmentInSeconds),
  } as any;
};

const deserializeAws_json1_1SubscriptionLimits = (output: any, context: __SerdeContext): SubscriptionLimits => {
  return {
    ProtectionGroupLimits:
      output.ProtectionGroupLimits !== undefined && output.ProtectionGroupLimits !== null
        ? deserializeAws_json1_1ProtectionGroupLimits(output.ProtectionGroupLimits, context)
        : undefined,
    ProtectionLimits:
      output.ProtectionLimits !== undefined && output.ProtectionLimits !== null
        ? deserializeAws_json1_1ProtectionLimits(output.ProtectionLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SummarizedAttackVector = (output: any, context: __SerdeContext): SummarizedAttackVector => {
  return {
    VectorCounters:
      output.VectorCounters !== undefined && output.VectorCounters !== null
        ? deserializeAws_json1_1SummarizedCounterList(output.VectorCounters, context)
        : undefined,
    VectorType: __expectString(output.VectorType),
  } as any;
};

const deserializeAws_json1_1SummarizedAttackVectorList = (
  output: any,
  context: __SerdeContext
): SummarizedAttackVector[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SummarizedAttackVector(entry, context);
    });
};

const deserializeAws_json1_1SummarizedCounter = (output: any, context: __SerdeContext): SummarizedCounter => {
  return {
    Average: __limitedParseDouble(output.Average),
    Max: __limitedParseDouble(output.Max),
    N: __expectInt32(output.N),
    Name: __expectString(output.Name),
    Sum: __limitedParseDouble(output.Sum),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_json1_1SummarizedCounterList = (output: any, context: __SerdeContext): SummarizedCounter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SummarizedCounter(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return {
    FromInclusive:
      output.FromInclusive !== undefined && output.FromInclusive !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FromInclusive)))
        : undefined,
    ToExclusive:
      output.ToExclusive !== undefined && output.ToExclusive !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ToExclusive)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1TopContributors = (output: any, context: __SerdeContext): Contributor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Contributor(entry, context);
    });
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateEmergencyContactSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateProtectionGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateProtectionGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriptionResponse => {
  return {} as any;
};

const deserializeAws_json1_1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationExceptionField(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
