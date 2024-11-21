// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateChannelCommandInput, AssociateChannelCommandOutput } from "../commands/AssociateChannelCommand";
import { CreateEventRuleCommandInput, CreateEventRuleCommandOutput } from "../commands/CreateEventRuleCommand";
import {
  CreateNotificationConfigurationCommandInput,
  CreateNotificationConfigurationCommandOutput,
} from "../commands/CreateNotificationConfigurationCommand";
import { DeleteEventRuleCommandInput, DeleteEventRuleCommandOutput } from "../commands/DeleteEventRuleCommand";
import {
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
} from "../commands/DeleteNotificationConfigurationCommand";
import {
  DeregisterNotificationHubCommandInput,
  DeregisterNotificationHubCommandOutput,
} from "../commands/DeregisterNotificationHubCommand";
import {
  DisassociateChannelCommandInput,
  DisassociateChannelCommandOutput,
} from "../commands/DisassociateChannelCommand";
import { GetEventRuleCommandInput, GetEventRuleCommandOutput } from "../commands/GetEventRuleCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "../commands/GetNotificationConfigurationCommand";
import {
  GetNotificationEventCommandInput,
  GetNotificationEventCommandOutput,
} from "../commands/GetNotificationEventCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListEventRulesCommandInput, ListEventRulesCommandOutput } from "../commands/ListEventRulesCommand";
import {
  ListNotificationConfigurationsCommandInput,
  ListNotificationConfigurationsCommandOutput,
} from "../commands/ListNotificationConfigurationsCommand";
import {
  ListNotificationEventsCommandInput,
  ListNotificationEventsCommandOutput,
} from "../commands/ListNotificationEventsCommand";
import {
  ListNotificationHubsCommandInput,
  ListNotificationHubsCommandOutput,
} from "../commands/ListNotificationHubsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterNotificationHubCommandInput,
  RegisterNotificationHubCommandOutput,
} from "../commands/RegisterNotificationHubCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEventRuleCommandInput, UpdateEventRuleCommandOutput } from "../commands/UpdateEventRuleCommand";
import {
  UpdateNotificationConfigurationCommandInput,
  UpdateNotificationConfigurationCommandOutput,
} from "../commands/UpdateNotificationConfigurationCommand";
import {
  AccessDeniedException,
  ConflictException,
  EventRuleStructure,
  InternalServerException,
  NotificationConfigurationStructure,
  NotificationEventOverview,
  NotificationEventSchema,
  NotificationHubOverview,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SourceEventMetadata,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { NotificationsServiceException as __BaseException } from "../models/NotificationsServiceException";

/**
 * serializeAws_restJson1AssociateChannelCommand
 */
export const se_AssociateChannelCommand = async (
  input: AssociateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channels/associate/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      notificationConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEventRuleCommand
 */
export const se_CreateEventRuleCommand = async (
  input: CreateEventRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-rules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventPattern: [],
      eventType: [],
      notificationConfigurationArn: [],
      regions: (_) => _json(_),
      source: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNotificationConfigurationCommand
 */
export const se_CreateNotificationConfigurationCommand = async (
  input: CreateNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notification-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationDuration: [],
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventRuleCommand
 */
export const se_DeleteEventRuleCommand = async (
  input: DeleteEventRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-rules/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNotificationConfigurationCommand
 */
export const se_DeleteNotificationConfigurationCommand = async (
  input: DeleteNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterNotificationHubCommand
 */
export const se_DeregisterNotificationHubCommand = async (
  input: DeregisterNotificationHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-hubs/{notificationHubRegion}");
  b.p("notificationHubRegion", () => input.notificationHubRegion!, "{notificationHubRegion}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateChannelCommand
 */
export const se_DisassociateChannelCommand = async (
  input: DisassociateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channels/disassociate/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      notificationConfigurationArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventRuleCommand
 */
export const se_GetEventRuleCommand = async (
  input: GetEventRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-rules/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNotificationConfigurationCommand
 */
export const se_GetNotificationConfigurationCommand = async (
  input: GetNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNotificationEventCommand
 */
export const se_GetNotificationEventCommand = async (
  input: GetNotificationEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-events/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_l]: [, input[_l]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channels");
  const query: any = map({
    [_nCA]: [, __expectNonNull(input[_nCA]!, `notificationConfigurationArn`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventRulesCommand
 */
export const se_ListEventRulesCommand = async (
  input: ListEventRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-rules");
  const query: any = map({
    [_nCA]: [, __expectNonNull(input[_nCA]!, `notificationConfigurationArn`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationConfigurationsCommand
 */
export const se_ListNotificationConfigurationsCommand = async (
  input: ListNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-configurations");
  const query: any = map({
    [_eRS]: [, input[_eRS]!],
    [_cA]: [, input[_cA]!],
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationEventsCommand
 */
export const se_ListNotificationEventsCommand = async (
  input: ListNotificationEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-events");
  const query: any = map({
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_l]: [, input[_l]!],
    [_so]: [, input[_so]!],
    [_iCE]: [() => input.includeChildEvents !== void 0, () => input[_iCE]!.toString()],
    [_aNEA]: [, input[_aNEA]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNotificationHubsCommand
 */
export const se_ListNotificationHubsCommand = async (
  input: ListNotificationHubsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/notification-hubs");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterNotificationHubCommand
 */
export const se_RegisterNotificationHubCommand = async (
  input: RegisterNotificationHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notification-hubs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      notificationHubRegion: [],
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventRuleCommand
 */
export const se_UpdateEventRuleCommand = async (
  input: UpdateEventRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-rules/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventPattern: [],
      regions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const se_UpdateNotificationConfigurationCommand = async (
  input: UpdateNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/notification-configurations/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregationDuration: [],
      description: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateChannelCommand
 */
export const de_AssociateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateChannelCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventRuleCommand
 */
export const de_CreateEventRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    notificationConfigurationArn: __expectString,
    statusSummaryByRegion: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNotificationConfigurationCommand
 */
export const de_CreateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventRuleCommand
 */
export const de_DeleteEventRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteNotificationConfigurationCommand
 */
export const de_DeleteNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeregisterNotificationHubCommand
 */
export const de_DeregisterNotificationHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterNotificationHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    notificationHubRegion: __expectString,
    statusSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateChannelCommand
 */
export const de_DisassociateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateChannelCommandOutput> => {
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
 * deserializeAws_restJson1GetEventRuleCommand
 */
export const de_GetEventRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventPattern: __expectString,
    eventType: __expectString,
    managedRules: _json,
    notificationConfigurationArn: __expectString,
    regions: _json,
    source: __expectString,
    statusSummaryByRegion: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNotificationConfigurationCommand
 */
export const de_GetNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregationDuration: __expectString,
    arn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNotificationEventCommand
 */
export const de_GetNotificationEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    content: (_) => de_NotificationEventSchema(_, context),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    notificationConfigurationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channels: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventRulesCommand
 */
export const de_ListEventRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventRules: (_) => de_EventRules(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationConfigurationsCommand
 */
export const de_ListNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notificationConfigurations: (_) => de_NotificationConfigurations(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationEventsCommand
 */
export const de_ListNotificationEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notificationEvents: (_) => de_NotificationEvents(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationHubsCommand
 */
export const de_ListNotificationHubsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationHubsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    notificationHubs: (_) => de_NotificationHubs(_, context),
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
 * deserializeAws_restJson1RegisterNotificationHubCommand
 */
export const de_RegisterNotificationHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterNotificationHubCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastActivationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    notificationHubRegion: __expectString,
    statusSummary: _json,
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateEventRuleCommand
 */
export const de_UpdateEventRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    notificationConfigurationArn: __expectString,
    statusSummaryByRegion: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNotificationConfigurationCommand
 */
export const de_UpdateNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "com.amazonaws.notifications#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.notifications#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.notifications#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.notifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.notifications#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.notifications#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.notifications#ValidationException":
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
    resourceId: __expectString,
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
    resourceId: __expectString,
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
    resourceId: __expectString,
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Regions omitted.

// se_TagMap omitted.

// de_Channels omitted.

// de_Dimension omitted.

// de_Dimensions omitted.

/**
 * deserializeAws_restJson1EventRules
 */
const de_EventRules = (output: any, context: __SerdeContext): EventRuleStructure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventRuleStructure(entry, context);
    });
  return retVal;
};

// de_EventRuleStatusSummary omitted.

/**
 * deserializeAws_restJson1EventRuleStructure
 */
const de_EventRuleStructure = (output: any, context: __SerdeContext): EventRuleStructure => {
  return take(output, {
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventPattern: __expectString,
    eventType: __expectString,
    managedRules: _json,
    notificationConfigurationArn: __expectString,
    regions: _json,
    source: __expectString,
    statusSummaryByRegion: _json,
  }) as any;
};

// de_ManagedRuleArns omitted.

// de_Media omitted.

// de_MediaElement omitted.

// de_MessageComponents omitted.

// de_MessageComponentsSummary omitted.

/**
 * deserializeAws_restJson1NotificationConfigurations
 */
const de_NotificationConfigurations = (output: any, context: __SerdeContext): NotificationConfigurationStructure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationConfigurationStructure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationConfigurationStructure
 */
const de_NotificationConfigurationStructure = (
  output: any,
  context: __SerdeContext
): NotificationConfigurationStructure => {
  return take(output, {
    aggregationDuration: __expectString,
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NotificationEventOverview
 */
const de_NotificationEventOverview = (output: any, context: __SerdeContext): NotificationEventOverview => {
  return take(output, {
    aggregateNotificationEventArn: __expectString,
    aggregationEventType: __expectString,
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    notificationConfigurationArn: __expectString,
    notificationEvent: _json,
    relatedAccount: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NotificationEvents
 */
const de_NotificationEvents = (output: any, context: __SerdeContext): NotificationEventOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationEventOverview(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationEventSchema
 */
const de_NotificationEventSchema = (output: any, context: __SerdeContext): NotificationEventSchema => {
  return take(output, {
    aggregateNotificationEventArn: __expectString,
    aggregationEventType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventStatus: __expectString,
    id: __expectString,
    media: _json,
    messageComponents: _json,
    notificationType: __expectString,
    schemaVersion: __expectString,
    sourceEventDetailUrl: __expectString,
    sourceEventDetailUrlDisplayText: __expectString,
    sourceEventMetadata: (_: any) => de_SourceEventMetadata(_, context),
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    textParts: _json,
  }) as any;
};

// de_NotificationEventSummary omitted.

/**
 * deserializeAws_restJson1NotificationHubOverview
 */
const de_NotificationHubOverview = (output: any, context: __SerdeContext): NotificationHubOverview => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastActivationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    notificationHubRegion: __expectString,
    statusSummary: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1NotificationHubs
 */
const de_NotificationHubs = (output: any, context: __SerdeContext): NotificationHubOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotificationHubOverview(entry, context);
    });
  return retVal;
};

// de_NotificationHubStatusSummary omitted.

// de_Regions omitted.

// de_Resource omitted.

// de_Resources omitted.

/**
 * deserializeAws_restJson1SourceEventMetadata
 */
const de_SourceEventMetadata = (output: any, context: __SerdeContext): SourceEventMetadata => {
  return take(output, {
    eventOccurrenceTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventOriginRegion: __expectString,
    eventType: __expectString,
    eventTypeVersion: __expectString,
    relatedAccount: __expectString,
    relatedResources: _json,
    source: __expectString,
    sourceEventId: __expectString,
  }) as any;
};

// de_SourceEventMetadataSummary omitted.

// de_StatusSummaryByRegion omitted.

// de_TagMap omitted.

// de_Tags omitted.

// de_TextByLocale omitted.

// de_TextParts omitted.

// de_TextPartValue omitted.

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

const _aNEA = "aggregateNotificationEventArn";
const _cA = "channelArn";
const _eRS = "eventRuleSource";
const _eT = "endTime";
const _iCE = "includeChildEvents";
const _l = "locale";
const _mR = "maxResults";
const _nCA = "notificationConfigurationArn";
const _nT = "nextToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "status";
const _sT = "startTime";
const _so = "source";
const _tK = "tagKeys";
