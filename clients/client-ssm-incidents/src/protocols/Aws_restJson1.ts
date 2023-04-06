// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateReplicationSetCommandInput,
  CreateReplicationSetCommandOutput,
} from "../commands/CreateReplicationSetCommand";
import { CreateResponsePlanCommandInput, CreateResponsePlanCommandOutput } from "../commands/CreateResponsePlanCommand";
import {
  CreateTimelineEventCommandInput,
  CreateTimelineEventCommandOutput,
} from "../commands/CreateTimelineEventCommand";
import {
  DeleteIncidentRecordCommandInput,
  DeleteIncidentRecordCommandOutput,
} from "../commands/DeleteIncidentRecordCommand";
import {
  DeleteReplicationSetCommandInput,
  DeleteReplicationSetCommandOutput,
} from "../commands/DeleteReplicationSetCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteResponsePlanCommandInput, DeleteResponsePlanCommandOutput } from "../commands/DeleteResponsePlanCommand";
import {
  DeleteTimelineEventCommandInput,
  DeleteTimelineEventCommandOutput,
} from "../commands/DeleteTimelineEventCommand";
import { GetIncidentRecordCommandInput, GetIncidentRecordCommandOutput } from "../commands/GetIncidentRecordCommand";
import { GetReplicationSetCommandInput, GetReplicationSetCommandOutput } from "../commands/GetReplicationSetCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import { GetResponsePlanCommandInput, GetResponsePlanCommandOutput } from "../commands/GetResponsePlanCommand";
import { GetTimelineEventCommandInput, GetTimelineEventCommandOutput } from "../commands/GetTimelineEventCommand";
import {
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "../commands/ListIncidentRecordsCommand";
import { ListRelatedItemsCommandInput, ListRelatedItemsCommandOutput } from "../commands/ListRelatedItemsCommand";
import {
  ListReplicationSetsCommandInput,
  ListReplicationSetsCommandOutput,
} from "../commands/ListReplicationSetsCommand";
import { ListResponsePlansCommandInput, ListResponsePlansCommandOutput } from "../commands/ListResponsePlansCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTimelineEventsCommandInput, ListTimelineEventsCommandOutput } from "../commands/ListTimelineEventsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { StartIncidentCommandInput, StartIncidentCommandOutput } from "../commands/StartIncidentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDeletionProtectionCommandInput,
  UpdateDeletionProtectionCommandOutput,
} from "../commands/UpdateDeletionProtectionCommand";
import {
  UpdateIncidentRecordCommandInput,
  UpdateIncidentRecordCommandOutput,
} from "../commands/UpdateIncidentRecordCommand";
import { UpdateRelatedItemsCommandInput, UpdateRelatedItemsCommandOutput } from "../commands/UpdateRelatedItemsCommand";
import {
  UpdateReplicationSetCommandInput,
  UpdateReplicationSetCommandOutput,
} from "../commands/UpdateReplicationSetCommand";
import { UpdateResponsePlanCommandInput, UpdateResponsePlanCommandOutput } from "../commands/UpdateResponsePlanCommand";
import {
  UpdateTimelineEventCommandInput,
  UpdateTimelineEventCommandOutput,
} from "../commands/UpdateTimelineEventCommand";
import {
  AccessDeniedException,
  Action,
  AddRegionAction,
  AttributeValueList,
  AutomationExecution,
  ChatChannel,
  Condition,
  ConflictException,
  DeleteRegionAction,
  DynamicSsmParameterValue,
  EmptyChatChannel,
  EventReference,
  EventSummary,
  Filter,
  IncidentRecord,
  IncidentRecordSource,
  IncidentRecordSummary,
  IncidentTemplate,
  Integration,
  InternalServerException,
  ItemIdentifier,
  ItemValue,
  NotificationTargetItem,
  PagerDutyConfiguration,
  PagerDutyIncidentConfiguration,
  PagerDutyIncidentDetail,
  RegionInfo,
  RegionMapInputValue,
  RelatedItem,
  RelatedItemsUpdate,
  ReplicationSet,
  ResourceNotFoundException,
  ResourcePolicy,
  ResponsePlanSummary,
  ServiceQuotaExceededException,
  SsmAutomation,
  ThrottlingException,
  TimelineEvent,
  TriggerDetails,
  UpdateReplicationSetAction,
  ValidationException,
} from "../models/models_0";
import { SSMIncidentsServiceException as __BaseException } from "../models/SSMIncidentsServiceException";

/**
 * serializeAws_restJson1CreateReplicationSetCommand
 */
export const se_CreateReplicationSetCommand = async (
  input: CreateReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createReplicationSet";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.regions != null && { regions: se_RegionMapInput(input.regions, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResponsePlanCommand
 */
export const se_CreateResponsePlanCommand = async (
  input: CreateResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createResponsePlan";
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && { actions: se_ActionsList(input.actions, context) }),
    ...(input.chatChannel != null && { chatChannel: se_ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.engagements != null && { engagements: se_EngagementSet(input.engagements, context) }),
    ...(input.incidentTemplate != null && { incidentTemplate: se_IncidentTemplate(input.incidentTemplate, context) }),
    ...(input.integrations != null && { integrations: se_Integrations(input.integrations, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTimelineEventCommand
 */
export const se_CreateTimelineEventCommand = async (
  input: CreateTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createTimelineEvent";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.eventData != null && { eventData: input.eventData }),
    ...(input.eventReferences != null && { eventReferences: se_EventReferenceList(input.eventReferences, context) }),
    ...(input.eventTime != null && { eventTime: Math.round(input.eventTime.getTime() / 1000) }),
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteIncidentRecordCommand
 */
export const se_DeleteIncidentRecordCommand = async (
  input: DeleteIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteIncidentRecord";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteReplicationSetCommand
 */
export const se_DeleteReplicationSetCommand = async (
  input: DeleteReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteReplicationSet";
  const query: any = map({
    arn: [, __expectNonNull(input.arn!, `arn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteResourcePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.policyId != null && { policyId: input.policyId }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResponsePlanCommand
 */
export const se_DeleteResponsePlanCommand = async (
  input: DeleteResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteResponsePlan";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTimelineEventCommand
 */
export const se_DeleteTimelineEventCommand = async (
  input: DeleteTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteTimelineEvent";
  let body: any;
  body = JSON.stringify({
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetIncidentRecordCommand
 */
export const se_GetIncidentRecordCommand = async (
  input: GetIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getIncidentRecord";
  const query: any = map({
    arn: [, __expectNonNull(input.arn!, `arn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetReplicationSetCommand
 */
export const se_GetReplicationSetCommand = async (
  input: GetReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getReplicationSet";
  const query: any = map({
    arn: [, __expectNonNull(input.arn!, `arn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getResourcePolicies";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResponsePlanCommand
 */
export const se_GetResponsePlanCommand = async (
  input: GetResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getResponsePlan";
  const query: any = map({
    arn: [, __expectNonNull(input.arn!, `arn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetTimelineEventCommand
 */
export const se_GetTimelineEventCommand = async (
  input: GetTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getTimelineEvent";
  const query: any = map({
    incidentRecordArn: [, __expectNonNull(input.incidentRecordArn!, `incidentRecordArn`)],
    eventId: [, __expectNonNull(input.eventId!, `eventId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListIncidentRecordsCommand
 */
export const se_ListIncidentRecordsCommand = async (
  input: ListIncidentRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listIncidentRecords";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListRelatedItemsCommand
 */
export const se_ListRelatedItemsCommand = async (
  input: ListRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listRelatedItems";
  let body: any;
  body = JSON.stringify({
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListReplicationSetsCommand
 */
export const se_ListReplicationSetsCommand = async (
  input: ListReplicationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listReplicationSets";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListResponsePlansCommand
 */
export const se_ListResponsePlansCommand = async (
  input: ListResponsePlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listResponsePlans";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTimelineEventsCommand
 */
export const se_ListTimelineEventsCommand = async (
  input: ListTimelineEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listTimelineEvents";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/putResourcePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.policy != null && { policy: input.policy }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartIncidentCommand
 */
export const se_StartIncidentCommand = async (
  input: StartIncidentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/startIncident";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.impact != null && { impact: input.impact }),
    ...(input.relatedItems != null && { relatedItems: se_RelatedItemList(input.relatedItems, context) }),
    ...(input.responsePlanArn != null && { responsePlanArn: input.responsePlanArn }),
    ...(input.title != null && { title: input.title }),
    ...(input.triggerDetails != null && { triggerDetails: se_TriggerDetails(input.triggerDetails, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDeletionProtectionCommand
 */
export const se_UpdateDeletionProtectionCommand = async (
  input: UpdateDeletionProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateDeletionProtection";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deletionProtected != null && { deletionProtected: input.deletionProtected }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateIncidentRecordCommand
 */
export const se_UpdateIncidentRecordCommand = async (
  input: UpdateIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateIncidentRecord";
  let body: any;
  body = JSON.stringify({
    ...(input.arn != null && { arn: input.arn }),
    ...(input.chatChannel != null && { chatChannel: se_ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.impact != null && { impact: input.impact }),
    ...(input.notificationTargets != null && {
      notificationTargets: se_NotificationTargetSet(input.notificationTargets, context),
    }),
    ...(input.status != null && { status: input.status }),
    ...(input.summary != null && { summary: input.summary }),
    ...(input.title != null && { title: input.title }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateRelatedItemsCommand
 */
export const se_UpdateRelatedItemsCommand = async (
  input: UpdateRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateRelatedItems";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
    ...(input.relatedItemsUpdate != null && {
      relatedItemsUpdate: se_RelatedItemsUpdate(input.relatedItemsUpdate, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateReplicationSetCommand
 */
export const se_UpdateReplicationSetCommand = async (
  input: UpdateReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateReplicationSet";
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && { actions: se_UpdateActionList(input.actions, context) }),
    ...(input.arn != null && { arn: input.arn }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResponsePlanCommand
 */
export const se_UpdateResponsePlanCommand = async (
  input: UpdateResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateResponsePlan";
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && { actions: se_ActionsList(input.actions, context) }),
    ...(input.arn != null && { arn: input.arn }),
    ...(input.chatChannel != null && { chatChannel: se_ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.engagements != null && { engagements: se_EngagementSet(input.engagements, context) }),
    ...(input.incidentTemplateDedupeString != null && {
      incidentTemplateDedupeString: input.incidentTemplateDedupeString,
    }),
    ...(input.incidentTemplateImpact != null && { incidentTemplateImpact: input.incidentTemplateImpact }),
    ...(input.incidentTemplateNotificationTargets != null && {
      incidentTemplateNotificationTargets: se_NotificationTargetSet(input.incidentTemplateNotificationTargets, context),
    }),
    ...(input.incidentTemplateSummary != null && { incidentTemplateSummary: input.incidentTemplateSummary }),
    ...(input.incidentTemplateTags != null && {
      incidentTemplateTags: se_TagMapUpdate(input.incidentTemplateTags, context),
    }),
    ...(input.incidentTemplateTitle != null && { incidentTemplateTitle: input.incidentTemplateTitle }),
    ...(input.integrations != null && { integrations: se_Integrations(input.integrations, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTimelineEventCommand
 */
export const se_UpdateTimelineEventCommand = async (
  input: UpdateTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateTimelineEvent";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.eventData != null && { eventData: input.eventData }),
    ...(input.eventId != null && { eventId: input.eventId }),
    ...(input.eventReferences != null && { eventReferences: se_EventReferenceList(input.eventReferences, context) }),
    ...(input.eventTime != null && { eventTime: Math.round(input.eventTime.getTime() / 1000) }),
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.incidentRecordArn != null && { incidentRecordArn: input.incidentRecordArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateReplicationSetCommand
 */
export const de_CreateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateReplicationSetCommandError
 */
const de_CreateReplicationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1CreateResponsePlanCommand
 */
export const de_CreateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponsePlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResponsePlanCommandError
 */
const de_CreateResponsePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponsePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1CreateTimelineEventCommand
 */
export const de_CreateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTimelineEventCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventId != null) {
    contents.eventId = __expectString(data.eventId);
  }
  if (data.incidentRecordArn != null) {
    contents.incidentRecordArn = __expectString(data.incidentRecordArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTimelineEventCommandError
 */
const de_CreateTimelineEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTimelineEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1DeleteIncidentRecordCommand
 */
export const de_DeleteIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIncidentRecordCommandError
 */
const de_DeleteIncidentRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIncidentRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1DeleteReplicationSetCommand
 */
export const de_DeleteReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReplicationSetCommandError
 */
const de_DeleteReplicationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1DeleteResponsePlanCommand
 */
export const de_DeleteResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResponsePlanCommandError
 */
const de_DeleteResponsePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponsePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1DeleteTimelineEventCommand
 */
export const de_DeleteTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTimelineEventCommandError
 */
const de_DeleteTimelineEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimelineEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1GetIncidentRecordCommand
 */
export const de_GetIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIncidentRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.incidentRecord != null) {
    contents.incidentRecord = de_IncidentRecord(data.incidentRecord, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetIncidentRecordCommandError
 */
const de_GetIncidentRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIncidentRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1GetReplicationSetCommand
 */
export const de_GetReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.replicationSet != null) {
    contents.replicationSet = de_ReplicationSet(data.replicationSet, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetReplicationSetCommandError
 */
const de_GetReplicationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1GetResourcePoliciesCommand
 */
export const de_GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourcePolicies != null) {
    contents.resourcePolicies = de_ResourcePolicyList(data.resourcePolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePoliciesCommandError
 */
const de_GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1GetResponsePlanCommand
 */
export const de_GetResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponsePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actions != null) {
    contents.actions = de_ActionsList(data.actions, context);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.chatChannel != null) {
    contents.chatChannel = de_ChatChannel(__expectUnion(data.chatChannel), context);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.engagements != null) {
    contents.engagements = de_EngagementSet(data.engagements, context);
  }
  if (data.incidentTemplate != null) {
    contents.incidentTemplate = de_IncidentTemplate(data.incidentTemplate, context);
  }
  if (data.integrations != null) {
    contents.integrations = de_Integrations(data.integrations, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResponsePlanCommandError
 */
const de_GetResponsePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponsePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1GetTimelineEventCommand
 */
export const de_GetTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimelineEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.event != null) {
    contents.event = de_TimelineEvent(data.event, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTimelineEventCommandError
 */
const de_GetTimelineEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimelineEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListIncidentRecordsCommand
 */
export const de_ListIncidentRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncidentRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIncidentRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.incidentRecordSummaries != null) {
    contents.incidentRecordSummaries = de_IncidentRecordSummaryList(data.incidentRecordSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIncidentRecordsCommandError
 */
const de_ListIncidentRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncidentRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListRelatedItemsCommand
 */
export const de_ListRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.relatedItems != null) {
    contents.relatedItems = de_RelatedItemList(data.relatedItems, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRelatedItemsCommandError
 */
const de_ListRelatedItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelatedItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListReplicationSetsCommand
 */
export const de_ListReplicationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplicationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReplicationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.replicationSetArns != null) {
    contents.replicationSetArns = de_ReplicationSetArnList(data.replicationSetArns, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListReplicationSetsCommandError
 */
const de_ListReplicationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplicationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListResponsePlansCommand
 */
export const de_ListResponsePlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponsePlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResponsePlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.responsePlanSummaries != null) {
    contents.responsePlanSummaries = de_ResponsePlanSummaryList(data.responsePlanSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResponsePlansCommandError
 */
const de_ListResponsePlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponsePlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1ListTimelineEventsCommand
 */
export const de_ListTimelineEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimelineEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTimelineEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventSummaries != null) {
    contents.eventSummaries = de_EventSummaryList(data.eventSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTimelineEventsCommandError
 */
const de_ListTimelineEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimelineEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policyId != null) {
    contents.policyId = __expectString(data.policyId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1StartIncidentCommand
 */
export const de_StartIncidentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIncidentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartIncidentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.incidentRecordArn != null) {
    contents.incidentRecordArn = __expectString(data.incidentRecordArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartIncidentCommandError
 */
const de_StartIncidentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIncidentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateDeletionProtectionCommand
 */
export const de_UpdateDeletionProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeletionProtectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateDeletionProtectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeletionProtectionCommandError
 */
const de_UpdateDeletionProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeletionProtectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateIncidentRecordCommand
 */
export const de_UpdateIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIncidentRecordCommandError
 */
const de_UpdateIncidentRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIncidentRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateRelatedItemsCommand
 */
export const de_UpdateRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelatedItemsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRelatedItemsCommandError
 */
const de_UpdateRelatedItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelatedItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateReplicationSetCommand
 */
export const de_UpdateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationSetCommandError
 */
const de_UpdateReplicationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateResponsePlanCommand
 */
export const de_UpdateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResponsePlanCommandError
 */
const de_UpdateResponsePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponsePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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
 * deserializeAws_restJson1UpdateTimelineEventCommand
 */
export const de_UpdateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTimelineEventCommandError
 */
const de_UpdateTimelineEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimelineEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssmincidents#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.retryAfter != null) {
    contents.retryAfter = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.retryAfter)));
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return Action.visit(input, {
    ssmAutomation: (value) => ({ ssmAutomation: se_SsmAutomation(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ActionsList
 */
const se_ActionsList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Action(entry, context);
    });
};

/**
 * serializeAws_restJson1AddRegionAction
 */
const se_AddRegionAction = (input: AddRegionAction, context: __SerdeContext): any => {
  return {
    ...(input.regionName != null && { regionName: input.regionName }),
    ...(input.sseKmsKeyId != null && { sseKmsKeyId: input.sseKmsKeyId }),
  };
};

/**
 * serializeAws_restJson1AttributeValueList
 */
const se_AttributeValueList = (input: AttributeValueList, context: __SerdeContext): any => {
  return AttributeValueList.visit(input, {
    integerValues: (value) => ({ integerValues: se_IntegerList(value, context) }),
    stringValues: (value) => ({ stringValues: se_StringList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ChatbotSnsConfigurationSet
 */
const se_ChatbotSnsConfigurationSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ChatChannel
 */
const se_ChatChannel = (input: ChatChannel, context: __SerdeContext): any => {
  return ChatChannel.visit(input, {
    chatbotSns: (value) => ({ chatbotSns: se_ChatbotSnsConfigurationSet(value, context) }),
    empty: (value) => ({ empty: se_EmptyChatChannel(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return Condition.visit(input, {
    after: (value) => ({ after: Math.round(value.getTime() / 1000) }),
    before: (value) => ({ before: Math.round(value.getTime() / 1000) }),
    equals: (value) => ({ equals: se_AttributeValueList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1DeleteRegionAction
 */
const se_DeleteRegionAction = (input: DeleteRegionAction, context: __SerdeContext): any => {
  return {
    ...(input.regionName != null && { regionName: input.regionName }),
  };
};

/**
 * serializeAws_restJson1DynamicSsmParameters
 */
const se_DynamicSsmParameters = (input: Record<string, DynamicSsmParameterValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_DynamicSsmParameterValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1DynamicSsmParameterValue
 */
const se_DynamicSsmParameterValue = (input: DynamicSsmParameterValue, context: __SerdeContext): any => {
  return DynamicSsmParameterValue.visit(input, {
    variable: (value) => ({ variable: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1EmptyChatChannel
 */
const se_EmptyChatChannel = (input: EmptyChatChannel, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1EngagementSet
 */
const se_EngagementSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1EventReference
 */
const se_EventReference = (input: EventReference, context: __SerdeContext): any => {
  return EventReference.visit(input, {
    relatedItemId: (value) => ({ relatedItemId: value }),
    resource: (value) => ({ resource: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1EventReferenceList
 */
const se_EventReferenceList = (input: EventReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EventReference(entry, context);
    });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: se_Condition(input.condition, context) }),
    ...(input.key != null && { key: input.key }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1IncidentTemplate
 */
const se_IncidentTemplate = (input: IncidentTemplate, context: __SerdeContext): any => {
  return {
    ...(input.dedupeString != null && { dedupeString: input.dedupeString }),
    ...(input.impact != null && { impact: input.impact }),
    ...(input.incidentTags != null && { incidentTags: se_TagMap(input.incidentTags, context) }),
    ...(input.notificationTargets != null && {
      notificationTargets: se_NotificationTargetSet(input.notificationTargets, context),
    }),
    ...(input.summary != null && { summary: input.summary }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_restJson1IntegerList
 */
const se_IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Integration
 */
const se_Integration = (input: Integration, context: __SerdeContext): any => {
  return Integration.visit(input, {
    pagerDutyConfiguration: (value) => ({ pagerDutyConfiguration: se_PagerDutyConfiguration(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Integrations
 */
const se_Integrations = (input: Integration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Integration(entry, context);
    });
};

/**
 * serializeAws_restJson1ItemIdentifier
 */
const se_ItemIdentifier = (input: ItemIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: se_ItemValue(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1ItemValue
 */
const se_ItemValue = (input: ItemValue, context: __SerdeContext): any => {
  return ItemValue.visit(input, {
    arn: (value) => ({ arn: value }),
    metricDefinition: (value) => ({ metricDefinition: value }),
    pagerDutyIncidentDetail: (value) => ({ pagerDutyIncidentDetail: se_PagerDutyIncidentDetail(value, context) }),
    url: (value) => ({ url: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NotificationTargetItem
 */
const se_NotificationTargetItem = (input: NotificationTargetItem, context: __SerdeContext): any => {
  return NotificationTargetItem.visit(input, {
    snsTopicArn: (value) => ({ snsTopicArn: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1NotificationTargetSet
 */
const se_NotificationTargetSet = (input: NotificationTargetItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NotificationTargetItem(entry, context);
    });
};

/**
 * serializeAws_restJson1PagerDutyConfiguration
 */
const se_PagerDutyConfiguration = (input: PagerDutyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.pagerDutyIncidentConfiguration != null && {
      pagerDutyIncidentConfiguration: se_PagerDutyIncidentConfiguration(input.pagerDutyIncidentConfiguration, context),
    }),
    ...(input.secretId != null && { secretId: input.secretId }),
  };
};

/**
 * serializeAws_restJson1PagerDutyIncidentConfiguration
 */
const se_PagerDutyIncidentConfiguration = (input: PagerDutyIncidentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.serviceId != null && { serviceId: input.serviceId }),
  };
};

/**
 * serializeAws_restJson1PagerDutyIncidentDetail
 */
const se_PagerDutyIncidentDetail = (input: PagerDutyIncidentDetail, context: __SerdeContext): any => {
  return {
    ...(input.autoResolve != null && { autoResolve: input.autoResolve }),
    ...(input.id != null && { id: input.id }),
    ...(input.secretId != null && { secretId: input.secretId }),
  };
};

/**
 * serializeAws_restJson1RegionMapInput
 */
const se_RegionMapInput = (input: Record<string, RegionMapInputValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RegionMapInputValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RegionMapInputValue
 */
const se_RegionMapInputValue = (input: RegionMapInputValue, context: __SerdeContext): any => {
  return {
    ...(input.sseKmsKeyId != null && { sseKmsKeyId: input.sseKmsKeyId }),
  };
};

/**
 * serializeAws_restJson1RelatedItem
 */
const se_RelatedItem = (input: RelatedItem, context: __SerdeContext): any => {
  return {
    ...(input.generatedId != null && { generatedId: input.generatedId }),
    ...(input.identifier != null && { identifier: se_ItemIdentifier(input.identifier, context) }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_restJson1RelatedItemList
 */
const se_RelatedItemList = (input: RelatedItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RelatedItem(entry, context);
    });
};

/**
 * serializeAws_restJson1RelatedItemsUpdate
 */
const se_RelatedItemsUpdate = (input: RelatedItemsUpdate, context: __SerdeContext): any => {
  return RelatedItemsUpdate.visit(input, {
    itemToAdd: (value) => ({ itemToAdd: se_RelatedItem(value, context) }),
    itemToRemove: (value) => ({ itemToRemove: se_ItemIdentifier(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SsmAutomation
 */
const se_SsmAutomation = (input: SsmAutomation, context: __SerdeContext): any => {
  return {
    ...(input.documentName != null && { documentName: input.documentName }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.dynamicParameters != null && {
      dynamicParameters: se_DynamicSsmParameters(input.dynamicParameters, context),
    }),
    ...(input.parameters != null && { parameters: se_SsmParameters(input.parameters, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.targetAccount != null && { targetAccount: input.targetAccount }),
  };
};

/**
 * serializeAws_restJson1SsmParameters
 */
const se_SsmParameters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SsmParameterValues(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SsmParameterValues
 */
const se_SsmParameterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TagMapUpdate
 */
const se_TagMapUpdate = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TriggerDetails
 */
const se_TriggerDetails = (input: TriggerDetails, context: __SerdeContext): any => {
  return {
    ...(input.rawData != null && { rawData: input.rawData }),
    ...(input.source != null && { source: input.source }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.triggerArn != null && { triggerArn: input.triggerArn }),
  };
};

/**
 * serializeAws_restJson1UpdateActionList
 */
const se_UpdateActionList = (input: UpdateReplicationSetAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateReplicationSetAction(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdateReplicationSetAction
 */
const se_UpdateReplicationSetAction = (input: UpdateReplicationSetAction, context: __SerdeContext): any => {
  return UpdateReplicationSetAction.visit(input, {
    addRegionAction: (value) => ({ addRegionAction: se_AddRegionAction(value, context) }),
    deleteRegionAction: (value) => ({ deleteRegionAction: se_DeleteRegionAction(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  if (output.ssmAutomation != null) {
    return {
      ssmAutomation: de_SsmAutomation(output.ssmAutomation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ActionsList
 */
const de_ActionsList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Action(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutomationExecution
 */
const de_AutomationExecution = (output: any, context: __SerdeContext): AutomationExecution => {
  if (__expectString(output.ssmExecutionArn) !== undefined) {
    return { ssmExecutionArn: __expectString(output.ssmExecutionArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AutomationExecutionSet
 */
const de_AutomationExecutionSet = (output: any, context: __SerdeContext): AutomationExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutomationExecution(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChatbotSnsConfigurationSet
 */
const de_ChatbotSnsConfigurationSet = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ChatChannel
 */
const de_ChatChannel = (output: any, context: __SerdeContext): ChatChannel => {
  if (output.chatbotSns != null) {
    return {
      chatbotSns: de_ChatbotSnsConfigurationSet(output.chatbotSns, context),
    };
  }
  if (output.empty != null) {
    return {
      empty: de_EmptyChatChannel(output.empty, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1DynamicSsmParameters
 */
const de_DynamicSsmParameters = (output: any, context: __SerdeContext): Record<string, DynamicSsmParameterValue> => {
  return Object.entries(output).reduce((acc: Record<string, DynamicSsmParameterValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_DynamicSsmParameterValue(__expectUnion(value), context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DynamicSsmParameterValue
 */
const de_DynamicSsmParameterValue = (output: any, context: __SerdeContext): DynamicSsmParameterValue => {
  if (__expectString(output.variable) !== undefined) {
    return { variable: __expectString(output.variable) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1EmptyChatChannel
 */
const de_EmptyChatChannel = (output: any, context: __SerdeContext): EmptyChatChannel => {
  return {} as any;
};

/**
 * deserializeAws_restJson1EngagementSet
 */
const de_EngagementSet = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EventReference
 */
const de_EventReference = (output: any, context: __SerdeContext): EventReference => {
  if (__expectString(output.relatedItemId) !== undefined) {
    return { relatedItemId: __expectString(output.relatedItemId) as any };
  }
  if (__expectString(output.resource) !== undefined) {
    return { resource: __expectString(output.resource) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1EventReferenceList
 */
const de_EventReferenceList = (output: any, context: __SerdeContext): EventReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventReference(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventSummary
 */
const de_EventSummary = (output: any, context: __SerdeContext): EventSummary => {
  return {
    eventId: __expectString(output.eventId),
    eventReferences:
      output.eventReferences != null ? de_EventReferenceList(output.eventReferences, context) : undefined,
    eventTime:
      output.eventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventTime))) : undefined,
    eventType: __expectString(output.eventType),
    eventUpdatedTime:
      output.eventUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventUpdatedTime)))
        : undefined,
    incidentRecordArn: __expectString(output.incidentRecordArn),
  } as any;
};

/**
 * deserializeAws_restJson1EventSummaryList
 */
const de_EventSummaryList = (output: any, context: __SerdeContext): EventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IncidentRecord
 */
const de_IncidentRecord = (output: any, context: __SerdeContext): IncidentRecord => {
  return {
    arn: __expectString(output.arn),
    automationExecutions:
      output.automationExecutions != null ? de_AutomationExecutionSet(output.automationExecutions, context) : undefined,
    chatChannel: output.chatChannel != null ? de_ChatChannel(__expectUnion(output.chatChannel), context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dedupeString: __expectString(output.dedupeString),
    impact: __expectInt32(output.impact),
    incidentRecordSource:
      output.incidentRecordSource != null ? de_IncidentRecordSource(output.incidentRecordSource, context) : undefined,
    lastModifiedBy: __expectString(output.lastModifiedBy),
    lastModifiedTime:
      output.lastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTime)))
        : undefined,
    notificationTargets:
      output.notificationTargets != null ? de_NotificationTargetSet(output.notificationTargets, context) : undefined,
    resolvedTime:
      output.resolvedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resolvedTime)))
        : undefined,
    status: __expectString(output.status),
    summary: __expectString(output.summary),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1IncidentRecordSource
 */
const de_IncidentRecordSource = (output: any, context: __SerdeContext): IncidentRecordSource => {
  return {
    createdBy: __expectString(output.createdBy),
    invokedBy: __expectString(output.invokedBy),
    resourceArn: __expectString(output.resourceArn),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_restJson1IncidentRecordSummary
 */
const de_IncidentRecordSummary = (output: any, context: __SerdeContext): IncidentRecordSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    impact: __expectInt32(output.impact),
    incidentRecordSource:
      output.incidentRecordSource != null ? de_IncidentRecordSource(output.incidentRecordSource, context) : undefined,
    resolvedTime:
      output.resolvedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resolvedTime)))
        : undefined,
    status: __expectString(output.status),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1IncidentRecordSummaryList
 */
const de_IncidentRecordSummaryList = (output: any, context: __SerdeContext): IncidentRecordSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IncidentRecordSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IncidentTemplate
 */
const de_IncidentTemplate = (output: any, context: __SerdeContext): IncidentTemplate => {
  return {
    dedupeString: __expectString(output.dedupeString),
    impact: __expectInt32(output.impact),
    incidentTags: output.incidentTags != null ? de_TagMap(output.incidentTags, context) : undefined,
    notificationTargets:
      output.notificationTargets != null ? de_NotificationTargetSet(output.notificationTargets, context) : undefined,
    summary: __expectString(output.summary),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1Integration
 */
const de_Integration = (output: any, context: __SerdeContext): Integration => {
  if (output.pagerDutyConfiguration != null) {
    return {
      pagerDutyConfiguration: de_PagerDutyConfiguration(output.pagerDutyConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Integrations
 */
const de_Integrations = (output: any, context: __SerdeContext): Integration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Integration(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ItemIdentifier
 */
const de_ItemIdentifier = (output: any, context: __SerdeContext): ItemIdentifier => {
  return {
    type: __expectString(output.type),
    value: output.value != null ? de_ItemValue(__expectUnion(output.value), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ItemValue
 */
const de_ItemValue = (output: any, context: __SerdeContext): ItemValue => {
  if (__expectString(output.arn) !== undefined) {
    return { arn: __expectString(output.arn) as any };
  }
  if (__expectString(output.metricDefinition) !== undefined) {
    return { metricDefinition: __expectString(output.metricDefinition) as any };
  }
  if (output.pagerDutyIncidentDetail != null) {
    return {
      pagerDutyIncidentDetail: de_PagerDutyIncidentDetail(output.pagerDutyIncidentDetail, context),
    };
  }
  if (__expectString(output.url) !== undefined) {
    return { url: __expectString(output.url) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NotificationTargetItem
 */
const de_NotificationTargetItem = (output: any, context: __SerdeContext): NotificationTargetItem => {
  if (__expectString(output.snsTopicArn) !== undefined) {
    return { snsTopicArn: __expectString(output.snsTopicArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1NotificationTargetSet
 */
const de_NotificationTargetSet = (output: any, context: __SerdeContext): NotificationTargetItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotificationTargetItem(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PagerDutyConfiguration
 */
const de_PagerDutyConfiguration = (output: any, context: __SerdeContext): PagerDutyConfiguration => {
  return {
    name: __expectString(output.name),
    pagerDutyIncidentConfiguration:
      output.pagerDutyIncidentConfiguration != null
        ? de_PagerDutyIncidentConfiguration(output.pagerDutyIncidentConfiguration, context)
        : undefined,
    secretId: __expectString(output.secretId),
  } as any;
};

/**
 * deserializeAws_restJson1PagerDutyIncidentConfiguration
 */
const de_PagerDutyIncidentConfiguration = (output: any, context: __SerdeContext): PagerDutyIncidentConfiguration => {
  return {
    serviceId: __expectString(output.serviceId),
  } as any;
};

/**
 * deserializeAws_restJson1PagerDutyIncidentDetail
 */
const de_PagerDutyIncidentDetail = (output: any, context: __SerdeContext): PagerDutyIncidentDetail => {
  return {
    autoResolve: __expectBoolean(output.autoResolve),
    id: __expectString(output.id),
    secretId: __expectString(output.secretId),
  } as any;
};

/**
 * deserializeAws_restJson1RegionInfo
 */
const de_RegionInfo = (output: any, context: __SerdeContext): RegionInfo => {
  return {
    sseKmsKeyId: __expectString(output.sseKmsKeyId),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    statusUpdateDateTime:
      output.statusUpdateDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.statusUpdateDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RegionInfoMap
 */
const de_RegionInfoMap = (output: any, context: __SerdeContext): Record<string, RegionInfo> => {
  return Object.entries(output).reduce((acc: Record<string, RegionInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_RegionInfo(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RelatedItem
 */
const de_RelatedItem = (output: any, context: __SerdeContext): RelatedItem => {
  return {
    generatedId: __expectString(output.generatedId),
    identifier: output.identifier != null ? de_ItemIdentifier(output.identifier, context) : undefined,
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1RelatedItemList
 */
const de_RelatedItemList = (output: any, context: __SerdeContext): RelatedItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RelatedItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReplicationSet
 */
const de_ReplicationSet = (output: any, context: __SerdeContext): ReplicationSet => {
  return {
    arn: __expectString(output.arn),
    createdBy: __expectString(output.createdBy),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    deletionProtected: __expectBoolean(output.deletionProtected),
    lastModifiedBy: __expectString(output.lastModifiedBy),
    lastModifiedTime:
      output.lastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTime)))
        : undefined,
    regionMap: output.regionMap != null ? de_RegionInfoMap(output.regionMap, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationSetArnList
 */
const de_ReplicationSetArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    policyDocument: __expectString(output.policyDocument),
    policyId: __expectString(output.policyId),
    ramResourceShareRegion: __expectString(output.ramResourceShareRegion),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePolicyList
 */
const de_ResourcePolicyList = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourcePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponsePlanSummary
 */
const de_ResponsePlanSummary = (output: any, context: __SerdeContext): ResponsePlanSummary => {
  return {
    arn: __expectString(output.arn),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ResponsePlanSummaryList
 */
const de_ResponsePlanSummaryList = (output: any, context: __SerdeContext): ResponsePlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponsePlanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SsmAutomation
 */
const de_SsmAutomation = (output: any, context: __SerdeContext): SsmAutomation => {
  return {
    documentName: __expectString(output.documentName),
    documentVersion: __expectString(output.documentVersion),
    dynamicParameters:
      output.dynamicParameters != null ? de_DynamicSsmParameters(output.dynamicParameters, context) : undefined,
    parameters: output.parameters != null ? de_SsmParameters(output.parameters, context) : undefined,
    roleArn: __expectString(output.roleArn),
    targetAccount: __expectString(output.targetAccount),
  } as any;
};

/**
 * deserializeAws_restJson1SsmParameters
 */
const de_SsmParameters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SsmParameterValues(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SsmParameterValues
 */
const de_SsmParameterValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TimelineEvent
 */
const de_TimelineEvent = (output: any, context: __SerdeContext): TimelineEvent => {
  return {
    eventData: __expectString(output.eventData),
    eventId: __expectString(output.eventId),
    eventReferences:
      output.eventReferences != null ? de_EventReferenceList(output.eventReferences, context) : undefined,
    eventTime:
      output.eventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventTime))) : undefined,
    eventType: __expectString(output.eventType),
    eventUpdatedTime:
      output.eventUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventUpdatedTime)))
        : undefined,
    incidentRecordArn: __expectString(output.incidentRecordArn),
  } as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
