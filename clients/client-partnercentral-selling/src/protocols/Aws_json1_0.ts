// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
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
  AcceptEngagementInvitationCommandInput,
  AcceptEngagementInvitationCommandOutput,
} from "../commands/AcceptEngagementInvitationCommand";
import { AssignOpportunityCommandInput, AssignOpportunityCommandOutput } from "../commands/AssignOpportunityCommand";
import {
  AssociateOpportunityCommandInput,
  AssociateOpportunityCommandOutput,
} from "../commands/AssociateOpportunityCommand";
import { CreateEngagementCommandInput, CreateEngagementCommandOutput } from "../commands/CreateEngagementCommand";
import {
  CreateEngagementInvitationCommandInput,
  CreateEngagementInvitationCommandOutput,
} from "../commands/CreateEngagementInvitationCommand";
import { CreateOpportunityCommandInput, CreateOpportunityCommandOutput } from "../commands/CreateOpportunityCommand";
import {
  CreateResourceSnapshotCommandInput,
  CreateResourceSnapshotCommandOutput,
} from "../commands/CreateResourceSnapshotCommand";
import {
  CreateResourceSnapshotJobCommandInput,
  CreateResourceSnapshotJobCommandOutput,
} from "../commands/CreateResourceSnapshotJobCommand";
import {
  DeleteResourceSnapshotJobCommandInput,
  DeleteResourceSnapshotJobCommandOutput,
} from "../commands/DeleteResourceSnapshotJobCommand";
import {
  DisassociateOpportunityCommandInput,
  DisassociateOpportunityCommandOutput,
} from "../commands/DisassociateOpportunityCommand";
import {
  GetAwsOpportunitySummaryCommandInput,
  GetAwsOpportunitySummaryCommandOutput,
} from "../commands/GetAwsOpportunitySummaryCommand";
import { GetEngagementCommandInput, GetEngagementCommandOutput } from "../commands/GetEngagementCommand";
import {
  GetEngagementInvitationCommandInput,
  GetEngagementInvitationCommandOutput,
} from "../commands/GetEngagementInvitationCommand";
import { GetOpportunityCommandInput, GetOpportunityCommandOutput } from "../commands/GetOpportunityCommand";
import {
  GetResourceSnapshotCommandInput,
  GetResourceSnapshotCommandOutput,
} from "../commands/GetResourceSnapshotCommand";
import {
  GetResourceSnapshotJobCommandInput,
  GetResourceSnapshotJobCommandOutput,
} from "../commands/GetResourceSnapshotJobCommand";
import {
  GetSellingSystemSettingsCommandInput,
  GetSellingSystemSettingsCommandOutput,
} from "../commands/GetSellingSystemSettingsCommand";
import {
  ListEngagementByAcceptingInvitationTasksCommandInput,
  ListEngagementByAcceptingInvitationTasksCommandOutput,
} from "../commands/ListEngagementByAcceptingInvitationTasksCommand";
import {
  ListEngagementFromOpportunityTasksCommandInput,
  ListEngagementFromOpportunityTasksCommandOutput,
} from "../commands/ListEngagementFromOpportunityTasksCommand";
import {
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "../commands/ListEngagementInvitationsCommand";
import {
  ListEngagementMembersCommandInput,
  ListEngagementMembersCommandOutput,
} from "../commands/ListEngagementMembersCommand";
import {
  ListEngagementResourceAssociationsCommandInput,
  ListEngagementResourceAssociationsCommandOutput,
} from "../commands/ListEngagementResourceAssociationsCommand";
import { ListEngagementsCommandInput, ListEngagementsCommandOutput } from "../commands/ListEngagementsCommand";
import { ListOpportunitiesCommandInput, ListOpportunitiesCommandOutput } from "../commands/ListOpportunitiesCommand";
import {
  ListResourceSnapshotJobsCommandInput,
  ListResourceSnapshotJobsCommandOutput,
} from "../commands/ListResourceSnapshotJobsCommand";
import {
  ListResourceSnapshotsCommandInput,
  ListResourceSnapshotsCommandOutput,
} from "../commands/ListResourceSnapshotsCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "../commands/ListSolutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutSellingSystemSettingsCommandInput,
  PutSellingSystemSettingsCommandOutput,
} from "../commands/PutSellingSystemSettingsCommand";
import {
  RejectEngagementInvitationCommandInput,
  RejectEngagementInvitationCommandOutput,
} from "../commands/RejectEngagementInvitationCommand";
import {
  StartEngagementByAcceptingInvitationTaskCommandInput,
  StartEngagementByAcceptingInvitationTaskCommandOutput,
} from "../commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  StartEngagementFromOpportunityTaskCommandInput,
  StartEngagementFromOpportunityTaskCommandOutput,
} from "../commands/StartEngagementFromOpportunityTaskCommand";
import {
  StartResourceSnapshotJobCommandInput,
  StartResourceSnapshotJobCommandOutput,
} from "../commands/StartResourceSnapshotJobCommand";
import {
  StopResourceSnapshotJobCommandInput,
  StopResourceSnapshotJobCommandOutput,
} from "../commands/StopResourceSnapshotJobCommand";
import { SubmitOpportunityCommandInput, SubmitOpportunityCommandOutput } from "../commands/SubmitOpportunityCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateOpportunityCommandInput, UpdateOpportunityCommandOutput } from "../commands/UpdateOpportunityCommand";
import {
  AcceptEngagementInvitationRequest,
  AccessDeniedException,
  Account,
  AccountReceiver,
  Address,
  AssigneeContact,
  AssignOpportunityRequest,
  AssociateOpportunityRequest,
  AwsOpportunityLifeCycle,
  AwsSubmission,
  Channel,
  ConflictException,
  Contact,
  CreateEngagementInvitationRequest,
  CreateEngagementRequest,
  CreateOpportunityRequest,
  CreateOpportunityResponse,
  CreateResourceSnapshotJobRequest,
  CreateResourceSnapshotRequest,
  Customer,
  CustomerProjectsContext,
  DeleteResourceSnapshotJobRequest,
  DeliveryModel,
  DisassociateOpportunityRequest,
  EngagementContextDetails,
  EngagementContextPayload,
  EngagementCustomer,
  EngagementCustomerProjectDetails,
  EngagementInvitationPayloadType,
  EngagementInvitationSummary,
  EngagementSort,
  EngagementSummary,
  ExpectedCustomerSpend,
  GetAwsOpportunitySummaryRequest,
  GetAwsOpportunitySummaryResponse,
  GetEngagementInvitationRequest,
  GetEngagementInvitationResponse,
  GetEngagementRequest,
  GetEngagementResponse,
  GetOpportunityRequest,
  GetOpportunityResponse,
  GetResourceSnapshotJobRequest,
  GetResourceSnapshotJobResponse,
  GetResourceSnapshotRequest,
  GetResourceSnapshotResponse,
  GetSellingSystemSettingsRequest,
  InternalServerException,
  Invitation,
  InvitationStatus,
  LastModifiedDate,
  LifeCycle,
  ListEngagementByAcceptingInvitationTasksRequest,
  ListEngagementByAcceptingInvitationTasksResponse,
  ListEngagementByAcceptingInvitationTaskSummary,
  ListEngagementFromOpportunityTasksRequest,
  ListEngagementFromOpportunityTasksResponse,
  ListEngagementFromOpportunityTaskSummary,
  ListEngagementInvitationsRequest,
  ListEngagementInvitationsResponse,
  ListEngagementMembersRequest,
  ListEngagementResourceAssociationsRequest,
  ListEngagementsRequest,
  ListEngagementsResponse,
  ListOpportunitiesRequest,
  ListOpportunitiesResponse,
  ListResourceSnapshotJobsRequest,
  ListResourceSnapshotsRequest,
  ListSolutionsRequest,
  ListSolutionsResponse,
  ListTagsForResourceRequest,
  ListTasksSortBase,
  Marketing,
  MonetaryValue,
  NextStepsHistory,
  OpportunityEngagementInvitationSort,
  OpportunityInvitationPayload,
  OpportunitySort,
  OpportunitySummary,
  Payload,
  PrimaryNeedFromAws,
  ProfileNextStepsHistory,
  Project,
  ProjectDetails,
  PutSellingSystemSettingsRequest,
  Receiver,
  ReceiverResponsibility,
  RejectEngagementInvitationRequest,
  ResourceNotFoundException,
  ReviewStatus,
  SalesActivity,
  SenderContact,
  ServiceQuotaExceededException,
  SoftwareRevenue,
  SolutionBase,
  SolutionSort,
  SolutionStatus,
  SortObject,
  Stage,
  StartEngagementByAcceptingInvitationTaskRequest,
  StartEngagementByAcceptingInvitationTaskResponse,
  StartEngagementFromOpportunityTaskRequest,
  StartEngagementFromOpportunityTaskResponse,
  StartResourceSnapshotJobRequest,
  StopResourceSnapshotJobRequest,
  SubmitOpportunityRequest,
  Tag,
  TagResourceRequest,
  TaskStatus,
  ThrottlingException,
  UntagResourceRequest,
  UpdateOpportunityRequest,
  UpdateOpportunityResponse,
  ValidationException,
} from "../models/models_0";
import { PartnerCentralSellingServiceException as __BaseException } from "../models/PartnerCentralSellingServiceException";

/**
 * serializeAws_json1_0AcceptEngagementInvitationCommand
 */
export const se_AcceptEngagementInvitationCommand = async (
  input: AcceptEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptEngagementInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0AssignOpportunityCommand
 */
export const se_AssignOpportunityCommand = async (
  input: AssignOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssignOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0AssociateOpportunityCommand
 */
export const se_AssociateOpportunityCommand = async (
  input: AssociateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEngagementCommand
 */
export const se_CreateEngagementCommand = async (
  input: CreateEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEngagement");
  let body: any;
  body = JSON.stringify(se_CreateEngagementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEngagementInvitationCommand
 */
export const se_CreateEngagementInvitationCommand = async (
  input: CreateEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEngagementInvitation");
  let body: any;
  body = JSON.stringify(se_CreateEngagementInvitationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateOpportunityCommand
 */
export const se_CreateOpportunityCommand = async (
  input: CreateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOpportunity");
  let body: any;
  body = JSON.stringify(se_CreateOpportunityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateResourceSnapshotCommand
 */
export const se_CreateResourceSnapshotCommand = async (
  input: CreateResourceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResourceSnapshot");
  let body: any;
  body = JSON.stringify(se_CreateResourceSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateResourceSnapshotJobCommand
 */
export const se_CreateResourceSnapshotJobCommand = async (
  input: CreateResourceSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResourceSnapshotJob");
  let body: any;
  body = JSON.stringify(se_CreateResourceSnapshotJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteResourceSnapshotJobCommand
 */
export const se_DeleteResourceSnapshotJobCommand = async (
  input: DeleteResourceSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceSnapshotJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateOpportunityCommand
 */
export const se_DisassociateOpportunityCommand = async (
  input: DisassociateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAwsOpportunitySummaryCommand
 */
export const se_GetAwsOpportunitySummaryCommand = async (
  input: GetAwsOpportunitySummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAwsOpportunitySummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEngagementCommand
 */
export const se_GetEngagementCommand = async (
  input: GetEngagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEngagement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEngagementInvitationCommand
 */
export const se_GetEngagementInvitationCommand = async (
  input: GetEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEngagementInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetOpportunityCommand
 */
export const se_GetOpportunityCommand = async (
  input: GetOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOpportunity");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourceSnapshotCommand
 */
export const se_GetResourceSnapshotCommand = async (
  input: GetResourceSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourceSnapshotJobCommand
 */
export const se_GetResourceSnapshotJobCommand = async (
  input: GetResourceSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceSnapshotJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSellingSystemSettingsCommand
 */
export const se_GetSellingSystemSettingsCommand = async (
  input: GetSellingSystemSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSellingSystemSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementByAcceptingInvitationTasksCommand
 */
export const se_ListEngagementByAcceptingInvitationTasksCommand = async (
  input: ListEngagementByAcceptingInvitationTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementByAcceptingInvitationTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementFromOpportunityTasksCommand
 */
export const se_ListEngagementFromOpportunityTasksCommand = async (
  input: ListEngagementFromOpportunityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementFromOpportunityTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementInvitationsCommand
 */
export const se_ListEngagementInvitationsCommand = async (
  input: ListEngagementInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementInvitations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementMembersCommand
 */
export const se_ListEngagementMembersCommand = async (
  input: ListEngagementMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementMembers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementResourceAssociationsCommand
 */
export const se_ListEngagementResourceAssociationsCommand = async (
  input: ListEngagementResourceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagementResourceAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEngagementsCommand
 */
export const se_ListEngagementsCommand = async (
  input: ListEngagementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngagements");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOpportunitiesCommand
 */
export const se_ListOpportunitiesCommand = async (
  input: ListOpportunitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpportunities");
  let body: any;
  body = JSON.stringify(se_ListOpportunitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListResourceSnapshotJobsCommand
 */
export const se_ListResourceSnapshotJobsCommand = async (
  input: ListResourceSnapshotJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceSnapshotJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListResourceSnapshotsCommand
 */
export const se_ListResourceSnapshotsCommand = async (
  input: ListResourceSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSolutionsCommand
 */
export const se_ListSolutionsCommand = async (
  input: ListSolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSolutions");
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
 * serializeAws_json1_0PutSellingSystemSettingsCommand
 */
export const se_PutSellingSystemSettingsCommand = async (
  input: PutSellingSystemSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSellingSystemSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RejectEngagementInvitationCommand
 */
export const se_RejectEngagementInvitationCommand = async (
  input: RejectEngagementInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectEngagementInvitation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartEngagementByAcceptingInvitationTaskCommand
 */
export const se_StartEngagementByAcceptingInvitationTaskCommand = async (
  input: StartEngagementByAcceptingInvitationTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEngagementByAcceptingInvitationTask");
  let body: any;
  body = JSON.stringify(se_StartEngagementByAcceptingInvitationTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartEngagementFromOpportunityTaskCommand
 */
export const se_StartEngagementFromOpportunityTaskCommand = async (
  input: StartEngagementFromOpportunityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEngagementFromOpportunityTask");
  let body: any;
  body = JSON.stringify(se_StartEngagementFromOpportunityTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartResourceSnapshotJobCommand
 */
export const se_StartResourceSnapshotJobCommand = async (
  input: StartResourceSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartResourceSnapshotJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopResourceSnapshotJobCommand
 */
export const se_StopResourceSnapshotJobCommand = async (
  input: StopResourceSnapshotJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopResourceSnapshotJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SubmitOpportunityCommand
 */
export const se_SubmitOpportunityCommand = async (
  input: SubmitOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitOpportunity");
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
 * serializeAws_json1_0UpdateOpportunityCommand
 */
export const se_UpdateOpportunityCommand = async (
  input: UpdateOpportunityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOpportunity");
  let body: any;
  body = JSON.stringify(se_UpdateOpportunityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AcceptEngagementInvitationCommand
 */
export const de_AcceptEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AcceptEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0AssignOpportunityCommand
 */
export const de_AssignOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssignOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssignOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0AssociateOpportunityCommand
 */
export const de_AssociateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEngagementCommand
 */
export const de_CreateEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEngagementInvitationCommand
 */
export const de_CreateEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateOpportunityCommand
 */
export const de_CreateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOpportunityResponse(data, context);
  const response: CreateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateResourceSnapshotCommand
 */
export const de_CreateResourceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResourceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateResourceSnapshotJobCommand
 */
export const de_CreateResourceSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSnapshotJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResourceSnapshotJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteResourceSnapshotJobCommand
 */
export const de_DeleteResourceSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSnapshotJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceSnapshotJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateOpportunityCommand
 */
export const de_DisassociateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAwsOpportunitySummaryCommand
 */
export const de_GetAwsOpportunitySummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAwsOpportunitySummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAwsOpportunitySummaryResponse(data, context);
  const response: GetAwsOpportunitySummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEngagementCommand
 */
export const de_GetEngagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEngagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEngagementResponse(data, context);
  const response: GetEngagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEngagementInvitationCommand
 */
export const de_GetEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEngagementInvitationResponse(data, context);
  const response: GetEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetOpportunityCommand
 */
export const de_GetOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpportunityResponse(data, context);
  const response: GetOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourceSnapshotCommand
 */
export const de_GetResourceSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceSnapshotResponse(data, context);
  const response: GetResourceSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourceSnapshotJobCommand
 */
export const de_GetResourceSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSnapshotJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceSnapshotJobResponse(data, context);
  const response: GetResourceSnapshotJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSellingSystemSettingsCommand
 */
export const de_GetSellingSystemSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSellingSystemSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSellingSystemSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementByAcceptingInvitationTasksCommand
 */
export const de_ListEngagementByAcceptingInvitationTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementByAcceptingInvitationTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementByAcceptingInvitationTasksResponse(data, context);
  const response: ListEngagementByAcceptingInvitationTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementFromOpportunityTasksCommand
 */
export const de_ListEngagementFromOpportunityTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementFromOpportunityTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementFromOpportunityTasksResponse(data, context);
  const response: ListEngagementFromOpportunityTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementInvitationsCommand
 */
export const de_ListEngagementInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementInvitationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementInvitationsResponse(data, context);
  const response: ListEngagementInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementMembersCommand
 */
export const de_ListEngagementMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListEngagementMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementResourceAssociationsCommand
 */
export const de_ListEngagementResourceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementResourceAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListEngagementResourceAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEngagementsCommand
 */
export const de_ListEngagementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngagementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngagementsResponse(data, context);
  const response: ListEngagementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListOpportunitiesCommand
 */
export const de_ListOpportunitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpportunitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpportunitiesResponse(data, context);
  const response: ListOpportunitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListResourceSnapshotJobsCommand
 */
export const de_ListResourceSnapshotJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSnapshotJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourceSnapshotJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListResourceSnapshotsCommand
 */
export const de_ListResourceSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourceSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSolutionsCommand
 */
export const de_ListSolutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSolutionsResponse(data, context);
  const response: ListSolutionsCommandOutput = {
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
 * deserializeAws_json1_0PutSellingSystemSettingsCommand
 */
export const de_PutSellingSystemSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSellingSystemSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutSellingSystemSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RejectEngagementInvitationCommand
 */
export const de_RejectEngagementInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectEngagementInvitationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RejectEngagementInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0StartEngagementByAcceptingInvitationTaskCommand
 */
export const de_StartEngagementByAcceptingInvitationTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementByAcceptingInvitationTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartEngagementByAcceptingInvitationTaskResponse(data, context);
  const response: StartEngagementByAcceptingInvitationTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartEngagementFromOpportunityTaskCommand
 */
export const de_StartEngagementFromOpportunityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEngagementFromOpportunityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartEngagementFromOpportunityTaskResponse(data, context);
  const response: StartEngagementFromOpportunityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartResourceSnapshotJobCommand
 */
export const de_StartResourceSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartResourceSnapshotJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartResourceSnapshotJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0StopResourceSnapshotJobCommand
 */
export const de_StopResourceSnapshotJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopResourceSnapshotJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopResourceSnapshotJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0SubmitOpportunityCommand
 */
export const de_SubmitOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubmitOpportunityCommandOutput = {
    $metadata: deserializeMetadata(output),
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
 * deserializeAws_json1_0UpdateOpportunityCommand
 */
export const de_UpdateOpportunityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpportunityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateOpportunityResponse(data, context);
  const response: UpdateOpportunityCommandOutput = {
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
    case "com.amazonaws.partnercentralselling#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.partnercentralselling#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.partnercentralselling#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.partnercentralselling#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.partnercentralselling#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.partnercentralselling#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.partnercentralselling#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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

// se_AcceptEngagementInvitationRequest omitted.

// se_Account omitted.

// se_AccountReceiver omitted.

// se_Address omitted.

// se_ApnPrograms omitted.

// se_AssigneeContact omitted.

// se_AssignOpportunityRequest omitted.

// se_AssociateOpportunityRequest omitted.

// se_AwsAccountIdOrAliasList omitted.

// se_AwsAccountList omitted.

// se_AwsSubmission omitted.

// se_Channels omitted.

// se_Contact omitted.

/**
 * serializeAws_json1_0CreateEngagementInvitationRequest
 */
const se_CreateEngagementInvitationRequest = (
  input: CreateEngagementInvitationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    EngagementIdentifier: [],
    Invitation: _json,
  });
};

/**
 * serializeAws_json1_0CreateEngagementRequest
 */
const se_CreateEngagementRequest = (input: CreateEngagementRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Contexts: _json,
    Description: [],
    Title: [],
  });
};

/**
 * serializeAws_json1_0CreateOpportunityRequest
 */
const se_CreateOpportunityRequest = (input: CreateOpportunityRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Customer: _json,
    LifeCycle: (_) => se_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: [],
    OpportunityTeam: _json,
    OpportunityType: [],
    Origin: [],
    PartnerOpportunityIdentifier: [],
    PrimaryNeedsFromAws: _json,
    Project: _json,
    SoftwareRevenue: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateResourceSnapshotJobRequest
 */
const se_CreateResourceSnapshotJobRequest = (input: CreateResourceSnapshotJobRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    EngagementIdentifier: [],
    ResourceIdentifier: [],
    ResourceSnapshotTemplateIdentifier: [],
    ResourceType: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateResourceSnapshotRequest
 */
const se_CreateResourceSnapshotRequest = (input: CreateResourceSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    EngagementIdentifier: [],
    ResourceIdentifier: [],
    ResourceSnapshotTemplateIdentifier: [],
    ResourceType: [],
  });
};

// se_Customer omitted.

// se_CustomerContactsList omitted.

// se_CustomerProjectsContext omitted.

// se_DeleteResourceSnapshotJobRequest omitted.

// se_DeliveryModels omitted.

// se_DisassociateOpportunityRequest omitted.

// se_EngagementContextDetails omitted.

// se_EngagementContextPayload omitted.

// se_EngagementContexts omitted.

// se_EngagementCustomer omitted.

// se_EngagementCustomerProjectDetails omitted.

// se_EngagementIdentifiers omitted.

// se_EngagementInvitationIdentifiers omitted.

// se_EngagementInvitationsPayloadType omitted.

// se_EngagementSort omitted.

// se_ExpectedCustomerSpend omitted.

// se_ExpectedCustomerSpendList omitted.

// se_FilterIdentifier omitted.

// se_FilterLifeCycleReviewStatus omitted.

// se_FilterLifeCycleStage omitted.

// se_FilterStatus omitted.

// se_GetAwsOpportunitySummaryRequest omitted.

// se_GetEngagementInvitationRequest omitted.

// se_GetEngagementRequest omitted.

// se_GetOpportunityRequest omitted.

// se_GetResourceSnapshotJobRequest omitted.

// se_GetResourceSnapshotRequest omitted.

// se_GetSellingSystemSettingsRequest omitted.

// se_Invitation omitted.

// se_InvitationStatusList omitted.

/**
 * serializeAws_json1_0LastModifiedDate
 */
const se_LastModifiedDate = (input: LastModifiedDate, context: __SerdeContext): any => {
  return take(input, {
    AfterLastModifiedDate: __serializeDateTime,
    BeforeLastModifiedDate: __serializeDateTime,
  });
};

/**
 * serializeAws_json1_0LifeCycle
 */
const se_LifeCycle = (input: LifeCycle, context: __SerdeContext): any => {
  return take(input, {
    ClosedLostReason: [],
    NextSteps: [],
    NextStepsHistory: (_) => se_NextStepsHistories(_, context),
    ReviewComments: [],
    ReviewStatus: [],
    ReviewStatusReason: [],
    Stage: [],
    TargetCloseDate: [],
  });
};

// se_ListEngagementByAcceptingInvitationTasksRequest omitted.

// se_ListEngagementFromOpportunityTasksRequest omitted.

// se_ListEngagementInvitationsRequest omitted.

// se_ListEngagementMembersRequest omitted.

// se_ListEngagementResourceAssociationsRequest omitted.

// se_ListEngagementsRequest omitted.

/**
 * serializeAws_json1_0ListOpportunitiesRequest
 */
const se_ListOpportunitiesRequest = (input: ListOpportunitiesRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    CustomerCompanyName: _json,
    Identifier: _json,
    LastModifiedDate: (_) => se_LastModifiedDate(_, context),
    LifeCycleReviewStatus: _json,
    LifeCycleStage: _json,
    MaxResults: [],
    NextToken: [],
    Sort: _json,
  });
};

// se_ListResourceSnapshotJobsRequest omitted.

// se_ListResourceSnapshotsRequest omitted.

// se_ListSolutionsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTasksSortBase omitted.

// se_Marketing omitted.

// se_MonetaryValue omitted.

/**
 * serializeAws_json1_0NextStepsHistories
 */
const se_NextStepsHistories = (input: NextStepsHistory[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NextStepsHistory(entry, context);
    });
};

/**
 * serializeAws_json1_0NextStepsHistory
 */
const se_NextStepsHistory = (input: NextStepsHistory, context: __SerdeContext): any => {
  return take(input, {
    Time: __serializeDateTime,
    Value: [],
  });
};

// se_OpportunityEngagementInvitationSort omitted.

// se_OpportunityIdentifiers omitted.

// se_OpportunityInvitationPayload omitted.

// se_OpportunitySort omitted.

// se_PartnerOpportunityTeamMembersList omitted.

// se_Payload omitted.

// se_PrimaryNeedsFromAws omitted.

// se_Project omitted.

// se_ProjectDetails omitted.

// se_PutSellingSystemSettingsRequest omitted.

// se_Receiver omitted.

// se_ReceiverResponsibilityList omitted.

// se_RejectEngagementInvitationRequest omitted.

// se_SalesActivities omitted.

// se_SenderContact omitted.

// se_SenderContactList omitted.

// se_SoftwareRevenue omitted.

// se_SolutionIdentifiers omitted.

// se_SolutionSort omitted.

// se_SortObject omitted.

/**
 * serializeAws_json1_0StartEngagementByAcceptingInvitationTaskRequest
 */
const se_StartEngagementByAcceptingInvitationTaskRequest = (
  input: StartEngagementByAcceptingInvitationTaskRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_0StartEngagementFromOpportunityTaskRequest
 */
const se_StartEngagementFromOpportunityTaskRequest = (
  input: StartEngagementFromOpportunityTaskRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AwsSubmission: _json,
    Catalog: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Identifier: [],
    Tags: _json,
  });
};

// se_StartResourceSnapshotJobRequest omitted.

// se_StopResourceSnapshotJobRequest omitted.

// se_StringList omitted.

// se_SubmitOpportunityRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TaskIdentifiers omitted.

// se_TaskStatuses omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateOpportunityRequest
 */
const se_UpdateOpportunityRequest = (input: UpdateOpportunityRequest, context: __SerdeContext): any => {
  return take(input, {
    Catalog: [],
    Customer: _json,
    Identifier: [],
    LastModifiedDate: __serializeDateTime,
    LifeCycle: (_) => se_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: [],
    OpportunityType: [],
    PartnerOpportunityIdentifier: [],
    PrimaryNeedsFromAws: _json,
    Project: _json,
    SoftwareRevenue: _json,
  });
};

// se_UseCases omitted.

// de_AccessDeniedException omitted.

// de_Account omitted.

// de_AccountReceiver omitted.

// de_AccountSummary omitted.

// de_Address omitted.

// de_AddressSummary omitted.

// de_ApnPrograms omitted.

// de_AwsMarketplaceOfferIdentifiers omitted.

// de_AwsOpportunityCustomer omitted.

// de_AwsOpportunityInsights omitted.

/**
 * deserializeAws_json1_0AwsOpportunityLifeCycle
 */
const de_AwsOpportunityLifeCycle = (output: any, context: __SerdeContext): AwsOpportunityLifeCycle => {
  return take(output, {
    ClosedLostReason: __expectString,
    NextSteps: __expectString,
    NextStepsHistory: (_: any) => de_ProfileNextStepsHistories(_, context),
    Stage: __expectString,
    TargetCloseDate: __expectString,
  }) as any;
};

// de_AwsOpportunityProject omitted.

// de_AwsOpportunityRelatedEntities omitted.

// de_AwsOpportunityTeamMembersList omitted.

// de_AwsProductIdentifiers omitted.

// de_AwsTeamMember omitted.

// de_Channels omitted.

// de_ConflictException omitted.

// de_Contact omitted.

// de_CreateEngagementInvitationResponse omitted.

// de_CreateEngagementResponse omitted.

/**
 * deserializeAws_json1_0CreateOpportunityResponse
 */
const de_CreateOpportunityResponse = (output: any, context: __SerdeContext): CreateOpportunityResponse => {
  return take(output, {
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PartnerOpportunityIdentifier: __expectString,
  }) as any;
};

// de_CreateResourceSnapshotJobResponse omitted.

// de_CreateResourceSnapshotResponse omitted.

// de_Customer omitted.

// de_CustomerContactsList omitted.

// de_CustomerProjectsContext omitted.

// de_CustomerSummary omitted.

// de_DeliveryModels omitted.

// de_EngagementContextDetails omitted.

// de_EngagementContextPayload omitted.

// de_EngagementContexts omitted.

// de_EngagementCustomer omitted.

// de_EngagementCustomerProjectDetails omitted.

/**
 * deserializeAws_json1_0EngagementInvitationSummaries
 */
const de_EngagementInvitationSummaries = (output: any, context: __SerdeContext): EngagementInvitationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EngagementInvitationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EngagementInvitationSummary
 */
const de_EngagementInvitationSummary = (output: any, context: __SerdeContext): EngagementInvitationSummary => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    EngagementId: __expectString,
    EngagementTitle: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    InvitationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ParticipantType: __expectString,
    PayloadType: __expectString,
    Receiver: (_: any) => _json(__expectUnion(_)),
    SenderAwsAccountId: __expectString,
    SenderCompanyName: __expectString,
    Status: __expectString,
  }) as any;
};

// de_EngagementMember omitted.

// de_EngagementMembers omitted.

// de_EngagementMemberSummaries omitted.

// de_EngagementMemberSummary omitted.

// de_EngagementResourceAssociationSummary omitted.

// de_EngagementResourceAssociationSummaryList omitted.

/**
 * deserializeAws_json1_0EngagementSummary
 */
const de_EngagementSummary = (output: any, context: __SerdeContext): EngagementSummary => {
  return take(output, {
    Arn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    CreatedBy: __expectString,
    Id: __expectString,
    MemberCount: __expectInt32,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EngagementSummaryList
 */
const de_EngagementSummaryList = (output: any, context: __SerdeContext): EngagementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EngagementSummary(entry, context);
    });
  return retVal;
};

// de_ExpectedCustomerSpend omitted.

// de_ExpectedCustomerSpendList omitted.

/**
 * deserializeAws_json1_0GetAwsOpportunitySummaryResponse
 */
const de_GetAwsOpportunitySummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAwsOpportunitySummaryResponse => {
  return take(output, {
    Catalog: __expectString,
    Customer: _json,
    Insights: _json,
    InvolvementType: __expectString,
    InvolvementTypeChangeReason: __expectString,
    LifeCycle: (_: any) => de_AwsOpportunityLifeCycle(_, context),
    OpportunityTeam: _json,
    Origin: __expectString,
    Project: _json,
    RelatedEntityIds: _json,
    RelatedOpportunityId: __expectString,
    Visibility: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEngagementInvitationResponse
 */
const de_GetEngagementInvitationResponse = (output: any, context: __SerdeContext): GetEngagementInvitationResponse => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    EngagementDescription: __expectString,
    EngagementId: __expectString,
    EngagementTitle: __expectString,
    ExistingMembers: _json,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    InvitationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    InvitationMessage: __expectString,
    Payload: (_: any) => _json(__expectUnion(_)),
    PayloadType: __expectString,
    Receiver: (_: any) => _json(__expectUnion(_)),
    RejectionReason: __expectString,
    SenderAwsAccountId: __expectString,
    SenderCompanyName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetEngagementResponse
 */
const de_GetEngagementResponse = (output: any, context: __SerdeContext): GetEngagementResponse => {
  return take(output, {
    Arn: __expectString,
    Contexts: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    CreatedBy: __expectString,
    Description: __expectString,
    Id: __expectString,
    MemberCount: __expectInt32,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetOpportunityResponse
 */
const de_GetOpportunityResponse = (output: any, context: __SerdeContext): GetOpportunityResponse => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Customer: _json,
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LifeCycle: (_: any) => de_LifeCycle(_, context),
    Marketing: _json,
    NationalSecurity: __expectString,
    OpportunityTeam: _json,
    OpportunityType: __expectString,
    PartnerOpportunityIdentifier: __expectString,
    PrimaryNeedsFromAws: _json,
    Project: _json,
    RelatedEntityIdentifiers: _json,
    SoftwareRevenue: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetResourceSnapshotJobResponse
 */
const de_GetResourceSnapshotJobResponse = (output: any, context: __SerdeContext): GetResourceSnapshotJobResponse => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EngagementId: __expectString,
    Id: __expectString,
    LastFailure: __expectString,
    LastSuccessfulExecutionDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ResourceArn: __expectString,
    ResourceId: __expectString,
    ResourceSnapshotTemplateName: __expectString,
    ResourceType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetResourceSnapshotResponse
 */
const de_GetResourceSnapshotResponse = (output: any, context: __SerdeContext): GetResourceSnapshotResponse => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    CreatedBy: __expectString,
    EngagementId: __expectString,
    Payload: (_: any) => _json(__expectUnion(_)),
    ResourceId: __expectString,
    ResourceSnapshotTemplateName: __expectString,
    ResourceType: __expectString,
    Revision: __expectInt32,
  }) as any;
};

// de_GetSellingSystemSettingsResponse omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0LifeCycle
 */
const de_LifeCycle = (output: any, context: __SerdeContext): LifeCycle => {
  return take(output, {
    ClosedLostReason: __expectString,
    NextSteps: __expectString,
    NextStepsHistory: (_: any) => de_NextStepsHistories(_, context),
    ReviewComments: __expectString,
    ReviewStatus: __expectString,
    ReviewStatusReason: __expectString,
    Stage: __expectString,
    TargetCloseDate: __expectString,
  }) as any;
};

// de_LifeCycleForView omitted.

// de_LifeCycleSummary omitted.

/**
 * deserializeAws_json1_0ListEngagementByAcceptingInvitationTasksResponse
 */
const de_ListEngagementByAcceptingInvitationTasksResponse = (
  output: any,
  context: __SerdeContext
): ListEngagementByAcceptingInvitationTasksResponse => {
  return take(output, {
    NextToken: __expectString,
    TaskSummaries: (_: any) => de_ListEngagementByAcceptingInvitationTaskSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListEngagementByAcceptingInvitationTaskSummaries
 */
const de_ListEngagementByAcceptingInvitationTaskSummaries = (
  output: any,
  context: __SerdeContext
): ListEngagementByAcceptingInvitationTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListEngagementByAcceptingInvitationTaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListEngagementByAcceptingInvitationTaskSummary
 */
const de_ListEngagementByAcceptingInvitationTaskSummary = (
  output: any,
  context: __SerdeContext
): ListEngagementByAcceptingInvitationTaskSummary => {
  return take(output, {
    EngagementInvitationId: __expectString,
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    ResourceSnapshotJobId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEngagementFromOpportunityTasksResponse
 */
const de_ListEngagementFromOpportunityTasksResponse = (
  output: any,
  context: __SerdeContext
): ListEngagementFromOpportunityTasksResponse => {
  return take(output, {
    NextToken: __expectString,
    TaskSummaries: (_: any) => de_ListEngagementFromOpportunityTaskSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListEngagementFromOpportunityTaskSummaries
 */
const de_ListEngagementFromOpportunityTaskSummaries = (
  output: any,
  context: __SerdeContext
): ListEngagementFromOpportunityTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListEngagementFromOpportunityTaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListEngagementFromOpportunityTaskSummary
 */
const de_ListEngagementFromOpportunityTaskSummary = (
  output: any,
  context: __SerdeContext
): ListEngagementFromOpportunityTaskSummary => {
  return take(output, {
    EngagementId: __expectString,
    EngagementInvitationId: __expectString,
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    ResourceSnapshotJobId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEngagementInvitationsResponse
 */
const de_ListEngagementInvitationsResponse = (
  output: any,
  context: __SerdeContext
): ListEngagementInvitationsResponse => {
  return take(output, {
    EngagementInvitationSummaries: (_: any) => de_EngagementInvitationSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListEngagementMembersResponse omitted.

// de_ListEngagementResourceAssociationsResponse omitted.

/**
 * deserializeAws_json1_0ListEngagementsResponse
 */
const de_ListEngagementsResponse = (output: any, context: __SerdeContext): ListEngagementsResponse => {
  return take(output, {
    EngagementSummaryList: (_: any) => de_EngagementSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListOpportunitiesResponse
 */
const de_ListOpportunitiesResponse = (output: any, context: __SerdeContext): ListOpportunitiesResponse => {
  return take(output, {
    NextToken: __expectString,
    OpportunitySummaries: (_: any) => de_OpportunitySummaries(_, context),
  }) as any;
};

// de_ListResourceSnapshotJobsResponse omitted.

// de_ListResourceSnapshotsResponse omitted.

/**
 * deserializeAws_json1_0ListSolutionsResponse
 */
const de_ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return take(output, {
    NextToken: __expectString,
    SolutionSummaries: (_: any) => de_SolutionList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_Marketing omitted.

// de_MonetaryValue omitted.

/**
 * deserializeAws_json1_0NextStepsHistories
 */
const de_NextStepsHistories = (output: any, context: __SerdeContext): NextStepsHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NextStepsHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0NextStepsHistory
 */
const de_NextStepsHistory = (output: any, context: __SerdeContext): NextStepsHistory => {
  return take(output, {
    Time: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Value: __expectString,
  }) as any;
};

// de_OpportunityInvitationPayload omitted.

/**
 * deserializeAws_json1_0OpportunitySummaries
 */
const de_OpportunitySummaries = (output: any, context: __SerdeContext): OpportunitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpportunitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OpportunitySummary
 */
const de_OpportunitySummary = (output: any, context: __SerdeContext): OpportunitySummary => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Customer: _json,
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    LifeCycle: _json,
    OpportunityType: __expectString,
    PartnerOpportunityIdentifier: __expectString,
    Project: _json,
  }) as any;
};

// de_OpportunitySummaryView omitted.

// de_PartnerOpportunityTeamMembersList omitted.

// de_Payload omitted.

// de_PrimaryNeedsFromAws omitted.

/**
 * deserializeAws_json1_0ProfileNextStepsHistories
 */
const de_ProfileNextStepsHistories = (output: any, context: __SerdeContext): ProfileNextStepsHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileNextStepsHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProfileNextStepsHistory
 */
const de_ProfileNextStepsHistory = (output: any, context: __SerdeContext): ProfileNextStepsHistory => {
  return take(output, {
    Time: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Value: __expectString,
  }) as any;
};

// de_Project omitted.

// de_ProjectDetails omitted.

// de_ProjectSummary omitted.

// de_ProjectView omitted.

// de_PutSellingSystemSettingsResponse omitted.

// de_Receiver omitted.

// de_ReceiverResponsibilityList omitted.

// de_RelatedEntityIdentifiers omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceSnapshotJobSummary omitted.

// de_ResourceSnapshotJobSummaryList omitted.

// de_ResourceSnapshotPayload omitted.

// de_ResourceSnapshotSummary omitted.

// de_ResourceSnapshotSummaryList omitted.

// de_SalesActivities omitted.

// de_SenderContact omitted.

// de_SenderContactList omitted.

// de_ServiceQuotaExceededException omitted.

// de_SoftwareRevenue omitted.

/**
 * deserializeAws_json1_0SolutionBase
 */
const de_SolutionBase = (output: any, context: __SerdeContext): SolutionBase => {
  return take(output, {
    Arn: __expectString,
    Catalog: __expectString,
    Category: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_SolutionIdentifiers omitted.

/**
 * deserializeAws_json1_0SolutionList
 */
const de_SolutionList = (output: any, context: __SerdeContext): SolutionBase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SolutionBase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0StartEngagementByAcceptingInvitationTaskResponse
 */
const de_StartEngagementByAcceptingInvitationTaskResponse = (
  output: any,
  context: __SerdeContext
): StartEngagementByAcceptingInvitationTaskResponse => {
  return take(output, {
    EngagementInvitationId: __expectString,
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    ResourceSnapshotJobId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0StartEngagementFromOpportunityTaskResponse
 */
const de_StartEngagementFromOpportunityTaskResponse = (
  output: any,
  context: __SerdeContext
): StartEngagementFromOpportunityTaskResponse => {
  return take(output, {
    EngagementId: __expectString,
    EngagementInvitationId: __expectString,
    Message: __expectString,
    OpportunityId: __expectString,
    ReasonCode: __expectString,
    ResourceSnapshotJobId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TaskArn: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateOpportunityResponse
 */
const de_UpdateOpportunityResponse = (output: any, context: __SerdeContext): UpdateOpportunityResponse => {
  return take(output, {
    Id: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_UseCases omitted.

// de_ValidationException omitted.

// de_ValidationExceptionError omitted.

// de_ValidationExceptionErrorList omitted.

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
    "x-amz-target": `AWSPartnerCentralSelling.${operation}`,
  };
}
