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

export const serializeAws_restJson1CreateReplicationSetCommand = async (
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
    ...(input.regions != null && { regions: serializeAws_restJson1RegionMapInput(input.regions, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateResponsePlanCommand = async (
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
    ...(input.actions != null && { actions: serializeAws_restJson1ActionsList(input.actions, context) }),
    ...(input.chatChannel != null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.engagements != null && { engagements: serializeAws_restJson1EngagementSet(input.engagements, context) }),
    ...(input.incidentTemplate != null && {
      incidentTemplate: serializeAws_restJson1IncidentTemplate(input.incidentTemplate, context),
    }),
    ...(input.integrations != null && {
      integrations: serializeAws_restJson1Integrations(input.integrations, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateTimelineEventCommand = async (
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
    ...(input.eventReferences != null && {
      eventReferences: serializeAws_restJson1EventReferenceList(input.eventReferences, context),
    }),
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

export const serializeAws_restJson1DeleteIncidentRecordCommand = async (
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

export const serializeAws_restJson1DeleteReplicationSetCommand = async (
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

export const serializeAws_restJson1DeleteResourcePolicyCommand = async (
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

export const serializeAws_restJson1DeleteResponsePlanCommand = async (
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

export const serializeAws_restJson1DeleteTimelineEventCommand = async (
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

export const serializeAws_restJson1GetIncidentRecordCommand = async (
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

export const serializeAws_restJson1GetReplicationSetCommand = async (
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

export const serializeAws_restJson1GetResourcePoliciesCommand = async (
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

export const serializeAws_restJson1GetResponsePlanCommand = async (
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

export const serializeAws_restJson1GetTimelineEventCommand = async (
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

export const serializeAws_restJson1ListIncidentRecordsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
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

export const serializeAws_restJson1ListRelatedItemsCommand = async (
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

export const serializeAws_restJson1ListReplicationSetsCommand = async (
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

export const serializeAws_restJson1ListResponsePlansCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTimelineEventsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
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

export const serializeAws_restJson1PutResourcePolicyCommand = async (
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

export const serializeAws_restJson1StartIncidentCommand = async (
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
    ...(input.relatedItems != null && {
      relatedItems: serializeAws_restJson1RelatedItemList(input.relatedItems, context),
    }),
    ...(input.responsePlanArn != null && { responsePlanArn: input.responsePlanArn }),
    ...(input.title != null && { title: input.title }),
    ...(input.triggerDetails != null && {
      triggerDetails: serializeAws_restJson1TriggerDetails(input.triggerDetails, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateDeletionProtectionCommand = async (
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

export const serializeAws_restJson1UpdateIncidentRecordCommand = async (
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
    ...(input.chatChannel != null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.impact != null && { impact: input.impact }),
    ...(input.notificationTargets != null && {
      notificationTargets: serializeAws_restJson1NotificationTargetSet(input.notificationTargets, context),
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

export const serializeAws_restJson1UpdateRelatedItemsCommand = async (
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
      relatedItemsUpdate: serializeAws_restJson1RelatedItemsUpdate(input.relatedItemsUpdate, context),
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

export const serializeAws_restJson1UpdateReplicationSetCommand = async (
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
    ...(input.actions != null && { actions: serializeAws_restJson1UpdateActionList(input.actions, context) }),
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

export const serializeAws_restJson1UpdateResponsePlanCommand = async (
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
    ...(input.actions != null && { actions: serializeAws_restJson1ActionsList(input.actions, context) }),
    ...(input.arn != null && { arn: input.arn }),
    ...(input.chatChannel != null && { chatChannel: serializeAws_restJson1ChatChannel(input.chatChannel, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.engagements != null && { engagements: serializeAws_restJson1EngagementSet(input.engagements, context) }),
    ...(input.incidentTemplateDedupeString != null && {
      incidentTemplateDedupeString: input.incidentTemplateDedupeString,
    }),
    ...(input.incidentTemplateImpact != null && { incidentTemplateImpact: input.incidentTemplateImpact }),
    ...(input.incidentTemplateNotificationTargets != null && {
      incidentTemplateNotificationTargets: serializeAws_restJson1NotificationTargetSet(
        input.incidentTemplateNotificationTargets,
        context
      ),
    }),
    ...(input.incidentTemplateSummary != null && { incidentTemplateSummary: input.incidentTemplateSummary }),
    ...(input.incidentTemplateTags != null && {
      incidentTemplateTags: serializeAws_restJson1TagMapUpdate(input.incidentTemplateTags, context),
    }),
    ...(input.incidentTemplateTitle != null && { incidentTemplateTitle: input.incidentTemplateTitle }),
    ...(input.integrations != null && {
      integrations: serializeAws_restJson1Integrations(input.integrations, context),
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

export const serializeAws_restJson1UpdateTimelineEventCommand = async (
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
    ...(input.eventReferences != null && {
      eventReferences: serializeAws_restJson1EventReferenceList(input.eventReferences, context),
    }),
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

export const deserializeAws_restJson1CreateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReplicationSetCommandError(output, context);
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

const deserializeAws_restJson1CreateReplicationSetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponsePlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResponsePlanCommandError(output, context);
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

const deserializeAws_restJson1CreateResponsePlanCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTimelineEventCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTimelineEventCommandError(output, context);
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

const deserializeAws_restJson1CreateTimelineEventCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIncidentRecordCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteReplicationSetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResponsePlanCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTimelineEventCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIncidentRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.incidentRecord != null) {
    contents.incidentRecord = deserializeAws_restJson1IncidentRecord(data.incidentRecord, context);
  }
  return contents;
};

const deserializeAws_restJson1GetIncidentRecordCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.replicationSet != null) {
    contents.replicationSet = deserializeAws_restJson1ReplicationSet(data.replicationSet, context);
  }
  return contents;
};

const deserializeAws_restJson1GetReplicationSetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourcePolicies != null) {
    contents.resourcePolicies = deserializeAws_restJson1ResourcePolicyList(data.resourcePolicies, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcePoliciesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponsePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actions != null) {
    contents.actions = deserializeAws_restJson1ActionsList(data.actions, context);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.chatChannel != null) {
    contents.chatChannel = deserializeAws_restJson1ChatChannel(__expectUnion(data.chatChannel), context);
  }
  if (data.displayName != null) {
    contents.displayName = __expectString(data.displayName);
  }
  if (data.engagements != null) {
    contents.engagements = deserializeAws_restJson1EngagementSet(data.engagements, context);
  }
  if (data.incidentTemplate != null) {
    contents.incidentTemplate = deserializeAws_restJson1IncidentTemplate(data.incidentTemplate, context);
  }
  if (data.integrations != null) {
    contents.integrations = deserializeAws_restJson1Integrations(data.integrations, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

const deserializeAws_restJson1GetResponsePlanCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimelineEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.event != null) {
    contents.event = deserializeAws_restJson1TimelineEvent(data.event, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTimelineEventCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListIncidentRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncidentRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIncidentRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.incidentRecordSummaries != null) {
    contents.incidentRecordSummaries = deserializeAws_restJson1IncidentRecordSummaryList(
      data.incidentRecordSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIncidentRecordsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.relatedItems != null) {
    contents.relatedItems = deserializeAws_restJson1RelatedItemList(data.relatedItems, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRelatedItemsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListReplicationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplicationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReplicationSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.replicationSetArns != null) {
    contents.replicationSetArns = deserializeAws_restJson1ReplicationSetArnList(data.replicationSetArns, context);
  }
  return contents;
};

const deserializeAws_restJson1ListReplicationSetsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResponsePlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponsePlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResponsePlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.responsePlanSummaries != null) {
    contents.responsePlanSummaries = deserializeAws_restJson1ResponsePlanSummaryList(
      data.responsePlanSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListResponsePlansCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTimelineEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimelineEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTimelineEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventSummaries != null) {
    contents.eventSummaries = deserializeAws_restJson1EventSummaryList(data.eventSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTimelineEventsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
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

const deserializeAws_restJson1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartIncidentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIncidentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartIncidentCommandError(output, context);
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

const deserializeAws_restJson1StartIncidentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDeletionProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeletionProtectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeletionProtectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDeletionProtectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIncidentRecordCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateIncidentRecordCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelatedItemsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRelatedItemsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReplicationSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateReplicationSetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResponsePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResponsePlanCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTimelineEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateTimelineEventCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssmincidents#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssmincidents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssmincidents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssmincidents#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return Action.visit(input, {
    ssmAutomation: (value) => ({ ssmAutomation: serializeAws_restJson1SsmAutomation(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ActionsList = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Action(entry, context);
    });
};

const serializeAws_restJson1AddRegionAction = (input: AddRegionAction, context: __SerdeContext): any => {
  return {
    ...(input.regionName != null && { regionName: input.regionName }),
    ...(input.sseKmsKeyId != null && { sseKmsKeyId: input.sseKmsKeyId }),
  };
};

const serializeAws_restJson1AttributeValueList = (input: AttributeValueList, context: __SerdeContext): any => {
  return AttributeValueList.visit(input, {
    integerValues: (value) => ({ integerValues: serializeAws_restJson1IntegerList(value, context) }),
    stringValues: (value) => ({ stringValues: serializeAws_restJson1StringList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ChatbotSnsConfigurationSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ChatChannel = (input: ChatChannel, context: __SerdeContext): any => {
  return ChatChannel.visit(input, {
    chatbotSns: (value) => ({ chatbotSns: serializeAws_restJson1ChatbotSnsConfigurationSet(value, context) }),
    empty: (value) => ({ empty: serializeAws_restJson1EmptyChatChannel(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return Condition.visit(input, {
    after: (value) => ({ after: Math.round(value.getTime() / 1000) }),
    before: (value) => ({ before: Math.round(value.getTime() / 1000) }),
    equals: (value) => ({ equals: serializeAws_restJson1AttributeValueList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DeleteRegionAction = (input: DeleteRegionAction, context: __SerdeContext): any => {
  return {
    ...(input.regionName != null && { regionName: input.regionName }),
  };
};

const serializeAws_restJson1DynamicSsmParameters = (
  input: Record<string, DynamicSsmParameterValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1DynamicSsmParameterValue(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1DynamicSsmParameterValue = (
  input: DynamicSsmParameterValue,
  context: __SerdeContext
): any => {
  return DynamicSsmParameterValue.visit(input, {
    variable: (value) => ({ variable: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1EmptyChatChannel = (input: EmptyChatChannel, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1EngagementSet = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1EventReference = (input: EventReference, context: __SerdeContext): any => {
  return EventReference.visit(input, {
    relatedItemId: (value) => ({ relatedItemId: value }),
    resource: (value) => ({ resource: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1EventReferenceList = (input: EventReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EventReference(entry, context);
    });
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: serializeAws_restJson1Condition(input.condition, context) }),
    ...(input.key != null && { key: input.key }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1IncidentTemplate = (input: IncidentTemplate, context: __SerdeContext): any => {
  return {
    ...(input.dedupeString != null && { dedupeString: input.dedupeString }),
    ...(input.impact != null && { impact: input.impact }),
    ...(input.incidentTags != null && { incidentTags: serializeAws_restJson1TagMap(input.incidentTags, context) }),
    ...(input.notificationTargets != null && {
      notificationTargets: serializeAws_restJson1NotificationTargetSet(input.notificationTargets, context),
    }),
    ...(input.summary != null && { summary: input.summary }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_restJson1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Integration = (input: Integration, context: __SerdeContext): any => {
  return Integration.visit(input, {
    pagerDutyConfiguration: (value) => ({
      pagerDutyConfiguration: serializeAws_restJson1PagerDutyConfiguration(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1Integrations = (input: Integration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Integration(entry, context);
    });
};

const serializeAws_restJson1ItemIdentifier = (input: ItemIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.value != null && { value: serializeAws_restJson1ItemValue(input.value, context) }),
  };
};

const serializeAws_restJson1ItemValue = (input: ItemValue, context: __SerdeContext): any => {
  return ItemValue.visit(input, {
    arn: (value) => ({ arn: value }),
    metricDefinition: (value) => ({ metricDefinition: value }),
    pagerDutyIncidentDetail: (value) => ({
      pagerDutyIncidentDetail: serializeAws_restJson1PagerDutyIncidentDetail(value, context),
    }),
    url: (value) => ({ url: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NotificationTargetItem = (input: NotificationTargetItem, context: __SerdeContext): any => {
  return NotificationTargetItem.visit(input, {
    snsTopicArn: (value) => ({ snsTopicArn: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NotificationTargetSet = (input: NotificationTargetItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NotificationTargetItem(entry, context);
    });
};

const serializeAws_restJson1PagerDutyConfiguration = (input: PagerDutyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.pagerDutyIncidentConfiguration != null && {
      pagerDutyIncidentConfiguration: serializeAws_restJson1PagerDutyIncidentConfiguration(
        input.pagerDutyIncidentConfiguration,
        context
      ),
    }),
    ...(input.secretId != null && { secretId: input.secretId }),
  };
};

const serializeAws_restJson1PagerDutyIncidentConfiguration = (
  input: PagerDutyIncidentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceId != null && { serviceId: input.serviceId }),
  };
};

const serializeAws_restJson1PagerDutyIncidentDetail = (
  input: PagerDutyIncidentDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.autoResolve != null && { autoResolve: input.autoResolve }),
    ...(input.id != null && { id: input.id }),
    ...(input.secretId != null && { secretId: input.secretId }),
  };
};

const serializeAws_restJson1RegionMapInput = (
  input: Record<string, RegionMapInputValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1RegionMapInputValue(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RegionMapInputValue = (input: RegionMapInputValue, context: __SerdeContext): any => {
  return {
    ...(input.sseKmsKeyId != null && { sseKmsKeyId: input.sseKmsKeyId }),
  };
};

const serializeAws_restJson1RelatedItem = (input: RelatedItem, context: __SerdeContext): any => {
  return {
    ...(input.generatedId != null && { generatedId: input.generatedId }),
    ...(input.identifier != null && { identifier: serializeAws_restJson1ItemIdentifier(input.identifier, context) }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_restJson1RelatedItemList = (input: RelatedItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RelatedItem(entry, context);
    });
};

const serializeAws_restJson1RelatedItemsUpdate = (input: RelatedItemsUpdate, context: __SerdeContext): any => {
  return RelatedItemsUpdate.visit(input, {
    itemToAdd: (value) => ({ itemToAdd: serializeAws_restJson1RelatedItem(value, context) }),
    itemToRemove: (value) => ({ itemToRemove: serializeAws_restJson1ItemIdentifier(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1SsmAutomation = (input: SsmAutomation, context: __SerdeContext): any => {
  return {
    ...(input.documentName != null && { documentName: input.documentName }),
    ...(input.documentVersion != null && { documentVersion: input.documentVersion }),
    ...(input.dynamicParameters != null && {
      dynamicParameters: serializeAws_restJson1DynamicSsmParameters(input.dynamicParameters, context),
    }),
    ...(input.parameters != null && { parameters: serializeAws_restJson1SsmParameters(input.parameters, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.targetAccount != null && { targetAccount: input.targetAccount }),
  };
};

const serializeAws_restJson1SsmParameters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1SsmParameterValues(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SsmParameterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagMapUpdate = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TriggerDetails = (input: TriggerDetails, context: __SerdeContext): any => {
  return {
    ...(input.rawData != null && { rawData: input.rawData }),
    ...(input.source != null && { source: input.source }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.triggerArn != null && { triggerArn: input.triggerArn }),
  };
};

const serializeAws_restJson1UpdateActionList = (input: UpdateReplicationSetAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateReplicationSetAction(entry, context);
    });
};

const serializeAws_restJson1UpdateReplicationSetAction = (
  input: UpdateReplicationSetAction,
  context: __SerdeContext
): any => {
  return UpdateReplicationSetAction.visit(input, {
    addRegionAction: (value) => ({ addRegionAction: serializeAws_restJson1AddRegionAction(value, context) }),
    deleteRegionAction: (value) => ({ deleteRegionAction: serializeAws_restJson1DeleteRegionAction(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  if (output.ssmAutomation != null) {
    return {
      ssmAutomation: deserializeAws_restJson1SsmAutomation(output.ssmAutomation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ActionsList = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Action(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1AutomationExecution = (output: any, context: __SerdeContext): AutomationExecution => {
  if (__expectString(output.ssmExecutionArn) !== undefined) {
    return { ssmExecutionArn: __expectString(output.ssmExecutionArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AutomationExecutionSet = (
  output: any,
  context: __SerdeContext
): AutomationExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutomationExecution(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1ChatbotSnsConfigurationSet = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ChatChannel = (output: any, context: __SerdeContext): ChatChannel => {
  if (output.chatbotSns != null) {
    return {
      chatbotSns: deserializeAws_restJson1ChatbotSnsConfigurationSet(output.chatbotSns, context),
    };
  }
  if (output.empty != null) {
    return {
      empty: deserializeAws_restJson1EmptyChatChannel(output.empty, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1DynamicSsmParameters = (
  output: any,
  context: __SerdeContext
): Record<string, DynamicSsmParameterValue> => {
  return Object.entries(output).reduce((acc: Record<string, DynamicSsmParameterValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1DynamicSsmParameterValue(__expectUnion(value), context);
    return acc;
  }, {});
};

const deserializeAws_restJson1DynamicSsmParameterValue = (
  output: any,
  context: __SerdeContext
): DynamicSsmParameterValue => {
  if (__expectString(output.variable) !== undefined) {
    return { variable: __expectString(output.variable) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1EmptyChatChannel = (output: any, context: __SerdeContext): EmptyChatChannel => {
  return {} as any;
};

const deserializeAws_restJson1EngagementSet = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EventReference = (output: any, context: __SerdeContext): EventReference => {
  if (__expectString(output.relatedItemId) !== undefined) {
    return { relatedItemId: __expectString(output.relatedItemId) as any };
  }
  if (__expectString(output.resource) !== undefined) {
    return { resource: __expectString(output.resource) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1EventReferenceList = (output: any, context: __SerdeContext): EventReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventReference(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1EventSummary = (output: any, context: __SerdeContext): EventSummary => {
  return {
    eventId: __expectString(output.eventId),
    eventReferences:
      output.eventReferences != null
        ? deserializeAws_restJson1EventReferenceList(output.eventReferences, context)
        : undefined,
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

const deserializeAws_restJson1EventSummaryList = (output: any, context: __SerdeContext): EventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IncidentRecord = (output: any, context: __SerdeContext): IncidentRecord => {
  return {
    arn: __expectString(output.arn),
    automationExecutions:
      output.automationExecutions != null
        ? deserializeAws_restJson1AutomationExecutionSet(output.automationExecutions, context)
        : undefined,
    chatChannel:
      output.chatChannel != null
        ? deserializeAws_restJson1ChatChannel(__expectUnion(output.chatChannel), context)
        : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    dedupeString: __expectString(output.dedupeString),
    impact: __expectInt32(output.impact),
    incidentRecordSource:
      output.incidentRecordSource != null
        ? deserializeAws_restJson1IncidentRecordSource(output.incidentRecordSource, context)
        : undefined,
    lastModifiedBy: __expectString(output.lastModifiedBy),
    lastModifiedTime:
      output.lastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedTime)))
        : undefined,
    notificationTargets:
      output.notificationTargets != null
        ? deserializeAws_restJson1NotificationTargetSet(output.notificationTargets, context)
        : undefined,
    resolvedTime:
      output.resolvedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resolvedTime)))
        : undefined,
    status: __expectString(output.status),
    summary: __expectString(output.summary),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1IncidentRecordSource = (output: any, context: __SerdeContext): IncidentRecordSource => {
  return {
    createdBy: __expectString(output.createdBy),
    invokedBy: __expectString(output.invokedBy),
    resourceArn: __expectString(output.resourceArn),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_restJson1IncidentRecordSummary = (output: any, context: __SerdeContext): IncidentRecordSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    impact: __expectInt32(output.impact),
    incidentRecordSource:
      output.incidentRecordSource != null
        ? deserializeAws_restJson1IncidentRecordSource(output.incidentRecordSource, context)
        : undefined,
    resolvedTime:
      output.resolvedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resolvedTime)))
        : undefined,
    status: __expectString(output.status),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1IncidentRecordSummaryList = (
  output: any,
  context: __SerdeContext
): IncidentRecordSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IncidentRecordSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IncidentTemplate = (output: any, context: __SerdeContext): IncidentTemplate => {
  return {
    dedupeString: __expectString(output.dedupeString),
    impact: __expectInt32(output.impact),
    incidentTags:
      output.incidentTags != null ? deserializeAws_restJson1TagMap(output.incidentTags, context) : undefined,
    notificationTargets:
      output.notificationTargets != null
        ? deserializeAws_restJson1NotificationTargetSet(output.notificationTargets, context)
        : undefined,
    summary: __expectString(output.summary),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1Integration = (output: any, context: __SerdeContext): Integration => {
  if (output.pagerDutyConfiguration != null) {
    return {
      pagerDutyConfiguration: deserializeAws_restJson1PagerDutyConfiguration(output.pagerDutyConfiguration, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Integrations = (output: any, context: __SerdeContext): Integration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Integration(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1ItemIdentifier = (output: any, context: __SerdeContext): ItemIdentifier => {
  return {
    type: __expectString(output.type),
    value: output.value != null ? deserializeAws_restJson1ItemValue(__expectUnion(output.value), context) : undefined,
  } as any;
};

const deserializeAws_restJson1ItemValue = (output: any, context: __SerdeContext): ItemValue => {
  if (__expectString(output.arn) !== undefined) {
    return { arn: __expectString(output.arn) as any };
  }
  if (__expectString(output.metricDefinition) !== undefined) {
    return { metricDefinition: __expectString(output.metricDefinition) as any };
  }
  if (output.pagerDutyIncidentDetail != null) {
    return {
      pagerDutyIncidentDetail: deserializeAws_restJson1PagerDutyIncidentDetail(output.pagerDutyIncidentDetail, context),
    };
  }
  if (__expectString(output.url) !== undefined) {
    return { url: __expectString(output.url) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NotificationTargetItem = (
  output: any,
  context: __SerdeContext
): NotificationTargetItem => {
  if (__expectString(output.snsTopicArn) !== undefined) {
    return { snsTopicArn: __expectString(output.snsTopicArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NotificationTargetSet = (
  output: any,
  context: __SerdeContext
): NotificationTargetItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationTargetItem(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1PagerDutyConfiguration = (
  output: any,
  context: __SerdeContext
): PagerDutyConfiguration => {
  return {
    name: __expectString(output.name),
    pagerDutyIncidentConfiguration:
      output.pagerDutyIncidentConfiguration != null
        ? deserializeAws_restJson1PagerDutyIncidentConfiguration(output.pagerDutyIncidentConfiguration, context)
        : undefined,
    secretId: __expectString(output.secretId),
  } as any;
};

const deserializeAws_restJson1PagerDutyIncidentConfiguration = (
  output: any,
  context: __SerdeContext
): PagerDutyIncidentConfiguration => {
  return {
    serviceId: __expectString(output.serviceId),
  } as any;
};

const deserializeAws_restJson1PagerDutyIncidentDetail = (
  output: any,
  context: __SerdeContext
): PagerDutyIncidentDetail => {
  return {
    autoResolve: __expectBoolean(output.autoResolve),
    id: __expectString(output.id),
    secretId: __expectString(output.secretId),
  } as any;
};

const deserializeAws_restJson1RegionInfo = (output: any, context: __SerdeContext): RegionInfo => {
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

const deserializeAws_restJson1RegionInfoMap = (output: any, context: __SerdeContext): Record<string, RegionInfo> => {
  return Object.entries(output).reduce((acc: Record<string, RegionInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1RegionInfo(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1RelatedItem = (output: any, context: __SerdeContext): RelatedItem => {
  return {
    generatedId: __expectString(output.generatedId),
    identifier:
      output.identifier != null ? deserializeAws_restJson1ItemIdentifier(output.identifier, context) : undefined,
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1RelatedItemList = (output: any, context: __SerdeContext): RelatedItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RelatedItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReplicationSet = (output: any, context: __SerdeContext): ReplicationSet => {
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
    regionMap: output.regionMap != null ? deserializeAws_restJson1RegionInfoMap(output.regionMap, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ReplicationSetArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    policyDocument: __expectString(output.policyDocument),
    policyId: __expectString(output.policyId),
    ramResourceShareRegion: __expectString(output.ramResourceShareRegion),
  } as any;
};

const deserializeAws_restJson1ResourcePolicyList = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourcePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResponsePlanSummary = (output: any, context: __SerdeContext): ResponsePlanSummary => {
  return {
    arn: __expectString(output.arn),
    displayName: __expectString(output.displayName),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ResponsePlanSummaryList = (
  output: any,
  context: __SerdeContext
): ResponsePlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponsePlanSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SsmAutomation = (output: any, context: __SerdeContext): SsmAutomation => {
  return {
    documentName: __expectString(output.documentName),
    documentVersion: __expectString(output.documentVersion),
    dynamicParameters:
      output.dynamicParameters != null
        ? deserializeAws_restJson1DynamicSsmParameters(output.dynamicParameters, context)
        : undefined,
    parameters:
      output.parameters != null ? deserializeAws_restJson1SsmParameters(output.parameters, context) : undefined,
    roleArn: __expectString(output.roleArn),
    targetAccount: __expectString(output.targetAccount),
  } as any;
};

const deserializeAws_restJson1SsmParameters = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1SsmParameterValues(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SsmParameterValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TimelineEvent = (output: any, context: __SerdeContext): TimelineEvent => {
  return {
    eventData: __expectString(output.eventData),
    eventId: __expectString(output.eventId),
    eventReferences:
      output.eventReferences != null
        ? deserializeAws_restJson1EventReferenceList(output.eventReferences, context)
        : undefined,
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
