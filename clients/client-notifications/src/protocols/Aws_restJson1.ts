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
import {
  AssociateManagedNotificationAccountContactCommandInput,
  AssociateManagedNotificationAccountContactCommandOutput,
} from "../commands/AssociateManagedNotificationAccountContactCommand";
import {
  AssociateManagedNotificationAdditionalChannelCommandInput,
  AssociateManagedNotificationAdditionalChannelCommandOutput,
} from "../commands/AssociateManagedNotificationAdditionalChannelCommand";
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
  DisableNotificationsAccessForOrganizationCommandInput,
  DisableNotificationsAccessForOrganizationCommandOutput,
} from "../commands/DisableNotificationsAccessForOrganizationCommand";
import {
  DisassociateChannelCommandInput,
  DisassociateChannelCommandOutput,
} from "../commands/DisassociateChannelCommand";
import {
  DisassociateManagedNotificationAccountContactCommandInput,
  DisassociateManagedNotificationAccountContactCommandOutput,
} from "../commands/DisassociateManagedNotificationAccountContactCommand";
import {
  DisassociateManagedNotificationAdditionalChannelCommandInput,
  DisassociateManagedNotificationAdditionalChannelCommandOutput,
} from "../commands/DisassociateManagedNotificationAdditionalChannelCommand";
import {
  EnableNotificationsAccessForOrganizationCommandInput,
  EnableNotificationsAccessForOrganizationCommandOutput,
} from "../commands/EnableNotificationsAccessForOrganizationCommand";
import { GetEventRuleCommandInput, GetEventRuleCommandOutput } from "../commands/GetEventRuleCommand";
import {
  GetManagedNotificationChildEventCommandInput,
  GetManagedNotificationChildEventCommandOutput,
} from "../commands/GetManagedNotificationChildEventCommand";
import {
  GetManagedNotificationConfigurationCommandInput,
  GetManagedNotificationConfigurationCommandOutput,
} from "../commands/GetManagedNotificationConfigurationCommand";
import {
  GetManagedNotificationEventCommandInput,
  GetManagedNotificationEventCommandOutput,
} from "../commands/GetManagedNotificationEventCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "../commands/GetNotificationConfigurationCommand";
import {
  GetNotificationEventCommandInput,
  GetNotificationEventCommandOutput,
} from "../commands/GetNotificationEventCommand";
import {
  GetNotificationsAccessForOrganizationCommandInput,
  GetNotificationsAccessForOrganizationCommandOutput,
} from "../commands/GetNotificationsAccessForOrganizationCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import { ListEventRulesCommandInput, ListEventRulesCommandOutput } from "../commands/ListEventRulesCommand";
import {
  ListManagedNotificationChannelAssociationsCommandInput,
  ListManagedNotificationChannelAssociationsCommandOutput,
} from "../commands/ListManagedNotificationChannelAssociationsCommand";
import {
  ListManagedNotificationChildEventsCommandInput,
  ListManagedNotificationChildEventsCommandOutput,
} from "../commands/ListManagedNotificationChildEventsCommand";
import {
  ListManagedNotificationConfigurationsCommandInput,
  ListManagedNotificationConfigurationsCommandOutput,
} from "../commands/ListManagedNotificationConfigurationsCommand";
import {
  ListManagedNotificationEventsCommandInput,
  ListManagedNotificationEventsCommandOutput,
} from "../commands/ListManagedNotificationEventsCommand";
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
  ManagedNotificationChildEvent,
  ManagedNotificationChildEventOverview,
  ManagedNotificationEvent,
  ManagedNotificationEventOverview,
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
 * serializeAws_restJson1AssociateManagedNotificationAccountContactCommand
 */
export const se_AssociateManagedNotificationAccountContactCommand = async (
  input: AssociateManagedNotificationAccountContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contacts/associate-managed-notification/{contactIdentifier}");
  b.p("contactIdentifier", () => input.contactIdentifier!, "{contactIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      managedNotificationConfigurationArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateManagedNotificationAdditionalChannelCommand
 */
export const se_AssociateManagedNotificationAdditionalChannelCommand = async (
  input: AssociateManagedNotificationAdditionalChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channels/associate-managed-notification/{channelArn}");
  b.p("channelArn", () => input.channelArn!, "{channelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      managedNotificationConfigurationArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
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
 * serializeAws_restJson1DisableNotificationsAccessForOrganizationCommand
 */
export const se_DisableNotificationsAccessForOrganizationCommand = async (
  input: DisableNotificationsAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/organization/access");
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
 * serializeAws_restJson1DisassociateManagedNotificationAccountContactCommand
 */
export const se_DisassociateManagedNotificationAccountContactCommand = async (
  input: DisassociateManagedNotificationAccountContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contacts/disassociate-managed-notification/{contactIdentifier}");
  b.p("contactIdentifier", () => input.contactIdentifier!, "{contactIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      managedNotificationConfigurationArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateManagedNotificationAdditionalChannelCommand
 */
export const se_DisassociateManagedNotificationAdditionalChannelCommand = async (
  input: DisassociateManagedNotificationAdditionalChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/channels/disassociate-managed-notification/{channelArn}");
  b.p("channelArn", () => input.channelArn!, "{channelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      managedNotificationConfigurationArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableNotificationsAccessForOrganizationCommand
 */
export const se_EnableNotificationsAccessForOrganizationCommand = async (
  input: EnableNotificationsAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/organization/access");
  let body: any;
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
 * serializeAws_restJson1GetManagedNotificationChildEventCommand
 */
export const se_GetManagedNotificationChildEventCommand = async (
  input: GetManagedNotificationChildEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-notification-child-events/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_l]: [, input[_l]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedNotificationConfigurationCommand
 */
export const se_GetManagedNotificationConfigurationCommand = async (
  input: GetManagedNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-notification-configurations/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedNotificationEventCommand
 */
export const se_GetManagedNotificationEventCommand = async (
  input: GetManagedNotificationEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-notification-events/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_l]: [, input[_l]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
 * serializeAws_restJson1GetNotificationsAccessForOrganizationCommand
 */
export const se_GetNotificationsAccessForOrganizationCommand = async (
  input: GetNotificationsAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/organization/access");
  let body: any;
  b.m("GET").h(headers).b(body);
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
 * serializeAws_restJson1ListManagedNotificationChannelAssociationsCommand
 */
export const se_ListManagedNotificationChannelAssociationsCommand = async (
  input: ListManagedNotificationChannelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/channels/list-managed-notification-channel-associations");
  const query: any = map({
    [_mNCA]: [, __expectNonNull(input[_mNCA]!, `managedNotificationConfigurationArn`)],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedNotificationChildEventsCommand
 */
export const se_ListManagedNotificationChildEventsCommand = async (
  input: ListManagedNotificationChildEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/list-managed-notification-child-events/{aggregateManagedNotificationEventArn}");
  b.p(
    "aggregateManagedNotificationEventArn",
    () => input.aggregateManagedNotificationEventArn!,
    "{aggregateManagedNotificationEventArn}",
    false
  );
  const query: any = map({
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_l]: [, input[_l]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_rA]: [, input[_rA]!],
    [_oUI]: [, input[_oUI]!],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedNotificationConfigurationsCommand
 */
export const se_ListManagedNotificationConfigurationsCommand = async (
  input: ListManagedNotificationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-notification-configurations");
  const query: any = map({
    [_cI]: [, input[_cI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedNotificationEventsCommand
 */
export const se_ListManagedNotificationEventsCommand = async (
  input: ListManagedNotificationEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managed-notification-events");
  const query: any = map({
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_l]: [, input[_l]!],
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_oUI]: [, input[_oUI]!],
    [_rA]: [, input[_rA]!],
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
    [_st]: [, input[_st]!],
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
    [_s]: [, input[_s]!],
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
 * deserializeAws_restJson1AssociateManagedNotificationAccountContactCommand
 */
export const de_AssociateManagedNotificationAccountContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateManagedNotificationAccountContactCommandOutput> => {
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
 * deserializeAws_restJson1AssociateManagedNotificationAdditionalChannelCommand
 */
export const de_AssociateManagedNotificationAdditionalChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateManagedNotificationAdditionalChannelCommandOutput> => {
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
 * deserializeAws_restJson1DisableNotificationsAccessForOrganizationCommand
 */
export const de_DisableNotificationsAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableNotificationsAccessForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateManagedNotificationAccountContactCommand
 */
export const de_DisassociateManagedNotificationAccountContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateManagedNotificationAccountContactCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateManagedNotificationAdditionalChannelCommand
 */
export const de_DisassociateManagedNotificationAdditionalChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateManagedNotificationAdditionalChannelCommandOutput> => {
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
 * deserializeAws_restJson1EnableNotificationsAccessForOrganizationCommand
 */
export const de_EnableNotificationsAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableNotificationsAccessForOrganizationCommandOutput> => {
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
 * deserializeAws_restJson1GetManagedNotificationChildEventCommand
 */
export const de_GetManagedNotificationChildEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedNotificationChildEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    content: (_) => de_ManagedNotificationChildEvent(_, context),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    managedNotificationConfigurationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedNotificationConfigurationCommand
 */
export const de_GetManagedNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    category: __expectString,
    description: __expectString,
    name: __expectString,
    subCategory: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedNotificationEventCommand
 */
export const de_GetManagedNotificationEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedNotificationEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    content: (_) => de_ManagedNotificationEvent(_, context),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    managedNotificationConfigurationArn: __expectString,
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
 * deserializeAws_restJson1GetNotificationsAccessForOrganizationCommand
 */
export const de_GetNotificationsAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationsAccessForOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    notificationsAccessForOrganization: _json,
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
 * deserializeAws_restJson1ListManagedNotificationChannelAssociationsCommand
 */
export const de_ListManagedNotificationChannelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedNotificationChannelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    channelAssociations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedNotificationChildEventsCommand
 */
export const de_ListManagedNotificationChildEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedNotificationChildEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    managedNotificationChildEvents: (_) => de_ManagedNotificationChildEvents(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedNotificationConfigurationsCommand
 */
export const de_ListManagedNotificationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedNotificationConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    managedNotificationConfigurations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedNotificationEventsCommand
 */
export const de_ListManagedNotificationEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedNotificationEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    managedNotificationEvents: (_) => de_ManagedNotificationEvents(_, context),
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

// de_AggregatedNotificationRegions omitted.

// de_AggregationDetail omitted.

// de_AggregationKey omitted.

// de_AggregationKeys omitted.

// de_AggregationSummary omitted.

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

// de_ManagedNotificationChannelAssociations omitted.

// de_ManagedNotificationChannelAssociationSummary omitted.

/**
 * deserializeAws_restJson1ManagedNotificationChildEvent
 */
const de_ManagedNotificationChildEvent = (output: any, context: __SerdeContext): ManagedNotificationChildEvent => {
  return take(output, {
    aggregateManagedNotificationEventArn: __expectString,
    aggregationDetail: _json,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventStatus: __expectString,
    id: __expectString,
    messageComponents: _json,
    notificationType: __expectString,
    organizationalUnitId: __expectString,
    schemaVersion: __expectString,
    sourceEventDetailUrl: __expectString,
    sourceEventDetailUrlDisplayText: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    textParts: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedNotificationChildEventOverview
 */
const de_ManagedNotificationChildEventOverview = (
  output: any,
  context: __SerdeContext
): ManagedNotificationChildEventOverview => {
  return take(output, {
    aggregateManagedNotificationEventArn: __expectString,
    arn: __expectString,
    childEvent: _json,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    managedNotificationConfigurationArn: __expectString,
    organizationalUnitId: __expectString,
    relatedAccount: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedNotificationChildEvents
 */
const de_ManagedNotificationChildEvents = (
  output: any,
  context: __SerdeContext
): ManagedNotificationChildEventOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedNotificationChildEventOverview(entry, context);
    });
  return retVal;
};

// de_ManagedNotificationChildEventSummary omitted.

// de_ManagedNotificationConfigurations omitted.

// de_ManagedNotificationConfigurationStructure omitted.

/**
 * deserializeAws_restJson1ManagedNotificationEvent
 */
const de_ManagedNotificationEvent = (output: any, context: __SerdeContext): ManagedNotificationEvent => {
  return take(output, {
    aggregationEventType: __expectString,
    aggregationSummary: _json,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    eventStatus: __expectString,
    id: __expectString,
    messageComponents: _json,
    notificationType: __expectString,
    organizationalUnitId: __expectString,
    schemaVersion: __expectString,
    sourceEventDetailUrl: __expectString,
    sourceEventDetailUrlDisplayText: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    textParts: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedNotificationEventOverview
 */
const de_ManagedNotificationEventOverview = (
  output: any,
  context: __SerdeContext
): ManagedNotificationEventOverview => {
  return take(output, {
    aggregatedNotificationRegions: _json,
    aggregationEventType: __expectString,
    aggregationSummary: _json,
    arn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    managedNotificationConfigurationArn: __expectString,
    notificationEvent: _json,
    organizationalUnitId: __expectString,
    relatedAccount: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ManagedNotificationEvents
 */
const de_ManagedNotificationEvents = (output: any, context: __SerdeContext): ManagedNotificationEventOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedNotificationEventOverview(entry, context);
    });
  return retVal;
};

// de_ManagedNotificationEventSummary omitted.

// de_ManagedRuleArns omitted.

// de_ManagedSourceEventMetadataSummary omitted.

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
    aggregationSummary: _json,
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
    aggregationSummary: _json,
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

// de_NotificationsAccessForOrganization omitted.

// de_Regions omitted.

// de_Resource omitted.

// de_Resources omitted.

// de_SampleAggregationDimensionValues omitted.

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

// de_SummarizationDimensionDetail omitted.

// de_SummarizationDimensionDetails omitted.

// de_SummarizationDimensionOverview omitted.

// de_SummarizationDimensionOverviews omitted.

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
const _cI = "channelIdentifier";
const _eRS = "eventRuleSource";
const _eT = "endTime";
const _iCE = "includeChildEvents";
const _l = "locale";
const _mNCA = "managedNotificationConfigurationArn";
const _mR = "maxResults";
const _nCA = "notificationConfigurationArn";
const _nT = "nextToken";
const _oUI = "organizationalUnitId";
const _rA = "relatedAccount";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "source";
const _sT = "startTime";
const _st = "status";
const _tK = "tagKeys";
