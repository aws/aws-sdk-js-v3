// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchGetIncidentFindingsCommandInput,
  BatchGetIncidentFindingsCommandOutput,
} from "../commands/BatchGetIncidentFindingsCommand";
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
  ListIncidentFindingsCommandInput,
  ListIncidentFindingsCommandOutput,
} from "../commands/ListIncidentFindingsCommand";
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
  ChatChannel,
  CloudFormationStackUpdate,
  CodeDeployDeployment,
  Condition,
  ConflictException,
  DeleteRegionAction,
  DynamicSsmParameterValue,
  EmptyChatChannel,
  EventReference,
  EventSummary,
  Filter,
  Finding,
  FindingDetails,
  FindingSummary,
  IncidentRecord,
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
 * serializeAws_restJson1BatchGetIncidentFindingsCommand
 */
export const se_BatchGetIncidentFindingsCommand = async (
  input: BatchGetIncidentFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batchGetIncidentFindings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      findingIds: (_) => _json(_),
      incidentRecordArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateReplicationSetCommand
 */
export const se_CreateReplicationSetCommand = async (
  input: CreateReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createReplicationSet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      regions: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateResponsePlanCommand
 */
export const se_CreateResponsePlanCommand = async (
  input: CreateResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createResponsePlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      chatChannel: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      displayName: [],
      engagements: (_) => _json(_),
      incidentTemplate: (_) => _json(_),
      integrations: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTimelineEventCommand
 */
export const se_CreateTimelineEventCommand = async (
  input: CreateTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createTimelineEvent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      eventData: [],
      eventReferences: (_) => _json(_),
      eventTime: (_) => _.getTime() / 1_000,
      eventType: [],
      incidentRecordArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIncidentRecordCommand
 */
export const se_DeleteIncidentRecordCommand = async (
  input: DeleteIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteIncidentRecord");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteReplicationSetCommand
 */
export const se_DeleteReplicationSetCommand = async (
  input: DeleteReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/deleteReplicationSet");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `arn`)],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyId: [],
      resourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResponsePlanCommand
 */
export const se_DeleteResponsePlanCommand = async (
  input: DeleteResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteResponsePlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTimelineEventCommand
 */
export const se_DeleteTimelineEventCommand = async (
  input: DeleteTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteTimelineEvent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventId: [],
      incidentRecordArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIncidentRecordCommand
 */
export const se_GetIncidentRecordCommand = async (
  input: GetIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/getIncidentRecord");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `arn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetReplicationSetCommand
 */
export const se_GetReplicationSetCommand = async (
  input: GetReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/getReplicationSet");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `arn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getResourcePolicies");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResponsePlanCommand
 */
export const se_GetResponsePlanCommand = async (
  input: GetResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/getResponsePlan");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `arn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTimelineEventCommand
 */
export const se_GetTimelineEventCommand = async (
  input: GetTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/getTimelineEvent");
  const query: any = map({
    [_iRA]: [, __expectNonNull(input[_iRA]!, `incidentRecordArn`)],
    [_eI]: [, __expectNonNull(input[_eI]!, `eventId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIncidentFindingsCommand
 */
export const se_ListIncidentFindingsCommand = async (
  input: ListIncidentFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listIncidentFindings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      incidentRecordArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIncidentRecordsCommand
 */
export const se_ListIncidentRecordsCommand = async (
  input: ListIncidentRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listIncidentRecords");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => se_FilterList(_, context),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRelatedItemsCommand
 */
export const se_ListRelatedItemsCommand = async (
  input: ListRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listRelatedItems");
  let body: any;
  body = JSON.stringify(
    take(input, {
      incidentRecordArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListReplicationSetsCommand
 */
export const se_ListReplicationSetsCommand = async (
  input: ListReplicationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listReplicationSets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResponsePlansCommand
 */
export const se_ListResponsePlansCommand = async (
  input: ListResponsePlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listResponsePlans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTimelineEventsCommand
 */
export const se_ListTimelineEventsCommand = async (
  input: ListTimelineEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listTimelineEvents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => se_FilterList(_, context),
      incidentRecordArn: [],
      maxResults: [],
      nextToken: [],
      sortBy: [],
      sortOrder: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/putResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      policy: [],
      resourceArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartIncidentCommand
 */
export const se_StartIncidentCommand = async (
  input: StartIncidentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/startIncident");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      impact: [],
      relatedItems: (_) => _json(_),
      responsePlanArn: [],
      title: [],
      triggerDetails: (_) => se_TriggerDetails(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeletionProtectionCommand
 */
export const se_UpdateDeletionProtectionCommand = async (
  input: UpdateDeletionProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateDeletionProtection");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      deletionProtected: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIncidentRecordCommand
 */
export const se_UpdateIncidentRecordCommand = async (
  input: UpdateIncidentRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateIncidentRecord");
  let body: any;
  body = JSON.stringify(
    take(input, {
      arn: [],
      chatChannel: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      impact: [],
      notificationTargets: (_) => _json(_),
      status: [],
      summary: [],
      title: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRelatedItemsCommand
 */
export const se_UpdateRelatedItemsCommand = async (
  input: UpdateRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateRelatedItems");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      incidentRecordArn: [],
      relatedItemsUpdate: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReplicationSetCommand
 */
export const se_UpdateReplicationSetCommand = async (
  input: UpdateReplicationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateReplicationSet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      arn: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResponsePlanCommand
 */
export const se_UpdateResponsePlanCommand = async (
  input: UpdateResponsePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateResponsePlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      arn: [],
      chatChannel: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      displayName: [],
      engagements: (_) => _json(_),
      incidentTemplateDedupeString: [],
      incidentTemplateImpact: [],
      incidentTemplateNotificationTargets: (_) => _json(_),
      incidentTemplateSummary: [],
      incidentTemplateTags: (_) => _json(_),
      incidentTemplateTitle: [],
      integrations: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTimelineEventCommand
 */
export const se_UpdateTimelineEventCommand = async (
  input: UpdateTimelineEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateTimelineEvent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      eventData: [],
      eventId: [],
      eventReferences: (_) => _json(_),
      eventTime: (_) => _.getTime() / 1_000,
      eventType: [],
      incidentRecordArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetIncidentFindingsCommand
 */
export const de_BatchGetIncidentFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetIncidentFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    findings: (_) => de_FindingList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateReplicationSetCommand
 */
export const de_CreateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationSetCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateResponsePlanCommand
 */
export const de_CreateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResponsePlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTimelineEventCommand
 */
export const de_CreateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTimelineEventCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventId: __expectString,
    incidentRecordArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIncidentRecordCommand
 */
export const de_DeleteIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReplicationSetCommand
 */
export const de_DeleteReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResponsePlanCommand
 */
export const de_DeleteResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTimelineEventCommand
 */
export const de_DeleteTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetIncidentRecordCommand
 */
export const de_GetIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIncidentRecordCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    incidentRecord: (_) => de_IncidentRecord(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetReplicationSetCommand
 */
export const de_GetReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    replicationSet: (_) => de_ReplicationSet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePoliciesCommand
 */
export const de_GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    resourcePolicies: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResponsePlanCommand
 */
export const de_GetResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResponsePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actions: _json,
    arn: __expectString,
    chatChannel: (_) => _json(__expectUnion(_)),
    displayName: __expectString,
    engagements: _json,
    incidentTemplate: _json,
    integrations: _json,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTimelineEventCommand
 */
export const de_GetTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimelineEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    event: (_) => de_TimelineEvent(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIncidentFindingsCommand
 */
export const de_ListIncidentFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncidentFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findings: (_) => de_FindingSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIncidentRecordsCommand
 */
export const de_ListIncidentRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIncidentRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    incidentRecordSummaries: (_) => de_IncidentRecordSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRelatedItemsCommand
 */
export const de_ListRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    relatedItems: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReplicationSetsCommand
 */
export const de_ListReplicationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplicationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    replicationSetArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListResponsePlansCommand
 */
export const de_ListResponsePlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResponsePlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    responsePlanSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTimelineEventsCommand
 */
export const de_ListTimelineEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimelineEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventSummaries: (_) => de_EventSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartIncidentCommand
 */
export const de_StartIncidentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartIncidentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    incidentRecordArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeletionProtectionCommand
 */
export const de_UpdateDeletionProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeletionProtectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIncidentRecordCommand
 */
export const de_UpdateIncidentRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIncidentRecordCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRelatedItemsCommand
 */
export const de_UpdateRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRelatedItemsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReplicationSetCommand
 */
export const de_UpdateReplicationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResponsePlanCommand
 */
export const de_UpdateResponsePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResponsePlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTimelineEventCommand
 */
export const de_UpdateTimelineEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimelineEventCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ConflictException":
    case "com.amazonaws.ssmincidents#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssmincidents#ServiceQuotaExceededException":
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

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceIdentifier: __expectString,
    resourceType: __expectString,
    retryAfter: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceIdentifier: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceIdentifier: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Action omitted.

// se_ActionsList omitted.

// se_AddRegionAction omitted.

// se_AttributeValueList omitted.

// se_ChatbotSnsConfigurationSet omitted.

// se_ChatChannel omitted.

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return Condition.visit(input, {
    after: (value) => ({ after: value.getTime() / 1_000 }),
    before: (value) => ({ before: value.getTime() / 1_000 }),
    equals: (value) => ({ equals: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_DeleteRegionAction omitted.

// se_DynamicSsmParameters omitted.

// se_DynamicSsmParameterValue omitted.

// se_EmptyChatChannel omitted.

// se_EngagementSet omitted.

// se_EventReference omitted.

// se_EventReferenceList omitted.

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return take(input, {
    condition: (_) => se_Condition(_, context),
    key: [],
  });
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

// se_FindingIdList omitted.

// se_IncidentTemplate omitted.

// se_IntegerList omitted.

// se_Integration omitted.

// se_Integrations omitted.

// se_ItemIdentifier omitted.

// se_ItemValue omitted.

// se_NotificationTargetItem omitted.

// se_NotificationTargetSet omitted.

// se_PagerDutyConfiguration omitted.

// se_PagerDutyIncidentConfiguration omitted.

// se_PagerDutyIncidentDetail omitted.

// se_RegionMapInput omitted.

// se_RegionMapInputValue omitted.

// se_RelatedItem omitted.

// se_RelatedItemList omitted.

// se_RelatedItemsUpdate omitted.

// se_SsmAutomation omitted.

// se_SsmParameters omitted.

// se_SsmParameterValues omitted.

// se_StringList omitted.

// se_TagMap omitted.

// se_TagMapUpdate omitted.

/**
 * serializeAws_restJson1TriggerDetails
 */
const se_TriggerDetails = (input: TriggerDetails, context: __SerdeContext): any => {
  return take(input, {
    rawData: [],
    source: [],
    timestamp: (_) => _.getTime() / 1_000,
    triggerArn: [],
  });
};

// se_UpdateActionList omitted.

// se_UpdateReplicationSetAction omitted.

// de_Action omitted.

// de_ActionsList omitted.

// de_AutomationExecution omitted.

// de_AutomationExecutionSet omitted.

// de_BatchGetIncidentFindingsError omitted.

// de_BatchGetIncidentFindingsErrorList omitted.

// de_ChatbotSnsConfigurationSet omitted.

// de_ChatChannel omitted.

/**
 * deserializeAws_restJson1CloudFormationStackUpdate
 */
const de_CloudFormationStackUpdate = (output: any, context: __SerdeContext): CloudFormationStackUpdate => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stackArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1CodeDeployDeployment
 */
const de_CodeDeployDeployment = (output: any, context: __SerdeContext): CodeDeployDeployment => {
  return take(output, {
    deploymentGroupArn: __expectString,
    deploymentId: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DynamicSsmParameters omitted.

// de_DynamicSsmParameterValue omitted.

// de_EmptyChatChannel omitted.

// de_EngagementSet omitted.

// de_EventReference omitted.

// de_EventReferenceList omitted.

/**
 * deserializeAws_restJson1EventSummary
 */
const de_EventSummary = (output: any, context: __SerdeContext): EventSummary => {
  return take(output, {
    eventId: __expectString,
    eventReferences: _json,
    eventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventType: __expectString,
    eventUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    incidentRecordArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventSummaryList
 */
const de_EventSummaryList = (output: any, context: __SerdeContext): EventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Finding
 */
const de_Finding = (output: any, context: __SerdeContext): Finding => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    details: (_: any) => de_FindingDetails(__expectUnion(_), context),
    id: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1FindingDetails
 */
const de_FindingDetails = (output: any, context: __SerdeContext): FindingDetails => {
  if (output.cloudFormationStackUpdate != null) {
    return {
      cloudFormationStackUpdate: de_CloudFormationStackUpdate(output.cloudFormationStackUpdate, context),
    };
  }
  if (output.codeDeployDeployment != null) {
    return {
      codeDeployDeployment: de_CodeDeployDeployment(output.codeDeployDeployment, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1FindingList
 */
const de_FindingList = (output: any, context: __SerdeContext): Finding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Finding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingSummary
 */
const de_FindingSummary = (output: any, context: __SerdeContext): FindingSummary => {
  return take(output, {
    id: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1FindingSummaryList
 */
const de_FindingSummaryList = (output: any, context: __SerdeContext): FindingSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IncidentRecord
 */
const de_IncidentRecord = (output: any, context: __SerdeContext): IncidentRecord => {
  return take(output, {
    arn: __expectString,
    automationExecutions: _json,
    chatChannel: (_: any) => _json(__expectUnion(_)),
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dedupeString: __expectString,
    impact: __expectInt32,
    incidentRecordSource: _json,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    notificationTargets: _json,
    resolvedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    summary: __expectString,
    title: __expectString,
  }) as any;
};

// de_IncidentRecordSource omitted.

/**
 * deserializeAws_restJson1IncidentRecordSummary
 */
const de_IncidentRecordSummary = (output: any, context: __SerdeContext): IncidentRecordSummary => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    impact: __expectInt32,
    incidentRecordSource: _json,
    resolvedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IncidentRecordSummaryList
 */
const de_IncidentRecordSummaryList = (output: any, context: __SerdeContext): IncidentRecordSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IncidentRecordSummary(entry, context);
    });
  return retVal;
};

// de_IncidentTemplate omitted.

// de_Integration omitted.

// de_Integrations omitted.

// de_ItemIdentifier omitted.

// de_ItemValue omitted.

// de_NotificationTargetItem omitted.

// de_NotificationTargetSet omitted.

// de_PagerDutyConfiguration omitted.

// de_PagerDutyIncidentConfiguration omitted.

// de_PagerDutyIncidentDetail omitted.

/**
 * deserializeAws_restJson1RegionInfo
 */
const de_RegionInfo = (output: any, context: __SerdeContext): RegionInfo => {
  return take(output, {
    sseKmsKeyId: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    statusUpdateDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1RegionInfoMap
 */
const de_RegionInfoMap = (output: any, context: __SerdeContext): Record<string, RegionInfo> => {
  return Object.entries(output).reduce((acc: Record<string, RegionInfo>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_RegionInfo(value, context);
    return acc;
  }, {} as Record<string, RegionInfo>);
};

// de_RelatedItem omitted.

// de_RelatedItemList omitted.

/**
 * deserializeAws_restJson1ReplicationSet
 */
const de_ReplicationSet = (output: any, context: __SerdeContext): ReplicationSet => {
  return take(output, {
    arn: __expectString,
    createdBy: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletionProtected: __expectBoolean,
    lastModifiedBy: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    regionMap: (_: any) => de_RegionInfoMap(_, context),
    status: __expectString,
  }) as any;
};

// de_ReplicationSetArnList omitted.

// de_ResourcePolicy omitted.

// de_ResourcePolicyList omitted.

// de_ResponsePlanSummary omitted.

// de_ResponsePlanSummaryList omitted.

// de_SsmAutomation omitted.

// de_SsmParameters omitted.

// de_SsmParameterValues omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TimelineEvent
 */
const de_TimelineEvent = (output: any, context: __SerdeContext): TimelineEvent => {
  return take(output, {
    eventData: __expectString,
    eventId: __expectString,
    eventReferences: _json,
    eventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventType: __expectString,
    eventUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    incidentRecordArn: __expectString,
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

const _a = "arn";
const _eI = "eventId";
const _iRA = "incidentRecordArn";
const _rA = "resourceArn";
const _tK = "tagKeys";
