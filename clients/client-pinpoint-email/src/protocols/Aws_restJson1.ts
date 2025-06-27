// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  CreateDedicatedIpPoolCommandInput,
  CreateDedicatedIpPoolCommandOutput,
} from "../commands/CreateDedicatedIpPoolCommand";
import {
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
} from "../commands/CreateDeliverabilityTestReportCommand";
import {
  CreateEmailIdentityCommandInput,
  CreateEmailIdentityCommandOutput,
} from "../commands/CreateEmailIdentityCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  DeleteDedicatedIpPoolCommandInput,
  DeleteDedicatedIpPoolCommandOutput,
} from "../commands/DeleteDedicatedIpPoolCommand";
import {
  DeleteEmailIdentityCommandInput,
  DeleteEmailIdentityCommandOutput,
} from "../commands/DeleteEmailIdentityCommand";
import { GetAccountCommandInput, GetAccountCommandOutput } from "../commands/GetAccountCommand";
import {
  GetBlacklistReportsCommandInput,
  GetBlacklistReportsCommandOutput,
} from "../commands/GetBlacklistReportsCommand";
import {
  GetConfigurationSetCommandInput,
  GetConfigurationSetCommandOutput,
} from "../commands/GetConfigurationSetCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import { GetDedicatedIpCommandInput, GetDedicatedIpCommandOutput } from "../commands/GetDedicatedIpCommand";
import { GetDedicatedIpsCommandInput, GetDedicatedIpsCommandOutput } from "../commands/GetDedicatedIpsCommand";
import {
  GetDeliverabilityDashboardOptionsCommandInput,
  GetDeliverabilityDashboardOptionsCommandOutput,
} from "../commands/GetDeliverabilityDashboardOptionsCommand";
import {
  GetDeliverabilityTestReportCommandInput,
  GetDeliverabilityTestReportCommandOutput,
} from "../commands/GetDeliverabilityTestReportCommand";
import {
  GetDomainDeliverabilityCampaignCommandInput,
  GetDomainDeliverabilityCampaignCommandOutput,
} from "../commands/GetDomainDeliverabilityCampaignCommand";
import {
  GetDomainStatisticsReportCommandInput,
  GetDomainStatisticsReportCommandOutput,
} from "../commands/GetDomainStatisticsReportCommand";
import { GetEmailIdentityCommandInput, GetEmailIdentityCommandOutput } from "../commands/GetEmailIdentityCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import {
  ListDedicatedIpPoolsCommandInput,
  ListDedicatedIpPoolsCommandOutput,
} from "../commands/ListDedicatedIpPoolsCommand";
import {
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import {
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import {
  ListEmailIdentitiesCommandInput,
  ListEmailIdentitiesCommandOutput,
} from "../commands/ListEmailIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutAccountDedicatedIpWarmupAttributesCommandInput,
  PutAccountDedicatedIpWarmupAttributesCommandOutput,
} from "../commands/PutAccountDedicatedIpWarmupAttributesCommand";
import {
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
} from "../commands/PutAccountSendingAttributesCommand";
import {
  PutConfigurationSetDeliveryOptionsCommandInput,
  PutConfigurationSetDeliveryOptionsCommandOutput,
} from "../commands/PutConfigurationSetDeliveryOptionsCommand";
import {
  PutConfigurationSetReputationOptionsCommandInput,
  PutConfigurationSetReputationOptionsCommandOutput,
} from "../commands/PutConfigurationSetReputationOptionsCommand";
import {
  PutConfigurationSetSendingOptionsCommandInput,
  PutConfigurationSetSendingOptionsCommandOutput,
} from "../commands/PutConfigurationSetSendingOptionsCommand";
import {
  PutConfigurationSetTrackingOptionsCommandInput,
  PutConfigurationSetTrackingOptionsCommandOutput,
} from "../commands/PutConfigurationSetTrackingOptionsCommand";
import {
  PutDedicatedIpInPoolCommandInput,
  PutDedicatedIpInPoolCommandOutput,
} from "../commands/PutDedicatedIpInPoolCommand";
import {
  PutDedicatedIpWarmupAttributesCommandInput,
  PutDedicatedIpWarmupAttributesCommandOutput,
} from "../commands/PutDedicatedIpWarmupAttributesCommand";
import {
  PutDeliverabilityDashboardOptionCommandInput,
  PutDeliverabilityDashboardOptionCommandOutput,
} from "../commands/PutDeliverabilityDashboardOptionCommand";
import {
  PutEmailIdentityDkimAttributesCommandInput,
  PutEmailIdentityDkimAttributesCommandOutput,
} from "../commands/PutEmailIdentityDkimAttributesCommand";
import {
  PutEmailIdentityFeedbackAttributesCommandInput,
  PutEmailIdentityFeedbackAttributesCommandOutput,
} from "../commands/PutEmailIdentityFeedbackAttributesCommand";
import {
  PutEmailIdentityMailFromAttributesCommandInput,
  PutEmailIdentityMailFromAttributesCommandOutput,
} from "../commands/PutEmailIdentityMailFromAttributesCommand";
import { SendEmailCommandInput, SendEmailCommandOutput } from "../commands/SendEmailCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  AccountSuspendedException,
  AlreadyExistsException,
  BadRequestException,
  BlacklistEntry,
  Body,
  CloudWatchDestination,
  CloudWatchDimensionConfiguration,
  ConcurrentModificationException,
  Content,
  DailyVolume,
  DeliverabilityTestReport,
  DeliveryOptions,
  Destination,
  DomainDeliverabilityCampaign,
  DomainDeliverabilityTrackingOption,
  DomainIspPlacement,
  EmailContent,
  EventDestinationDefinition,
  EventType,
  InboxPlacementTrackingOption,
  IspPlacement,
  KinesisFirehoseDestination,
  LimitExceededException,
  MailFromDomainNotVerifiedException,
  Message,
  MessageRejected,
  MessageTag,
  NotFoundException,
  OverallVolume,
  PinpointDestination,
  PlacementStatistics,
  RawMessage,
  ReputationOptions,
  SendingOptions,
  SendingPausedException,
  SendQuota,
  SnsDestination,
  Tag,
  Template,
  TooManyRequestsException,
  TrackingOptions,
} from "../models/models_0";
import { PinpointEmailServiceException as __BaseException } from "../models/PinpointEmailServiceException";

/**
 * serializeAws_restJson1CreateConfigurationSetCommand
 */
export const se_CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      DeliveryOptions: (_) => _json(_),
      ReputationOptions: (_) => se_ReputationOptions(_, context),
      SendingOptions: (_) => _json(_),
      Tags: (_) => _json(_),
      TrackingOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const se_CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EventDestination: (_) => _json(_),
      EventDestinationName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const se_CreateDedicatedIpPoolCommand = async (
  input: CreateDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/dedicated-ip-pools");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PoolName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const se_CreateDeliverabilityTestReportCommand = async (
  input: CreateDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/deliverability-dashboard/test");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Content: (_) => se_EmailContent(_, context),
      FromEmailAddress: [],
      ReportName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEmailIdentityCommand
 */
export const se_CreateEmailIdentityCommand = async (
  input: CreateEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/identities");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmailIdentity: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigurationSetCommand
 */
export const se_DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const se_DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  b.p("EventDestinationName", () => input.EventDestinationName!, "{EventDestinationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const se_DeleteDedicatedIpPoolCommand = async (
  input: DeleteDedicatedIpPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/dedicated-ip-pools/{PoolName}");
  b.p("PoolName", () => input.PoolName!, "{PoolName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEmailIdentityCommand
 */
export const se_DeleteEmailIdentityCommand = async (
  input: DeleteEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/identities/{EmailIdentity}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountCommand
 */
export const se_GetAccountCommand = async (
  input: GetAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/account");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBlacklistReportsCommand
 */
export const se_GetBlacklistReportsCommand = async (
  input: GetBlacklistReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/blacklist-report");
  const query: any = map({
    [_BIN]: [__expectNonNull(input.BlacklistItemNames, `BlacklistItemNames`) != null, () => input[_BIN]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationSetCommand
 */
export const se_GetConfigurationSetCommand = async (
  input: GetConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const se_GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDedicatedIpCommand
 */
export const se_GetDedicatedIpCommand = async (
  input: GetDedicatedIpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/dedicated-ips/{Ip}");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDedicatedIpsCommand
 */
export const se_GetDedicatedIpsCommand = async (
  input: GetDedicatedIpsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/dedicated-ips");
  const query: any = map({
    [_PN]: [, input[_PN]!],
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const se_GetDeliverabilityDashboardOptionsCommand = async (
  input: GetDeliverabilityDashboardOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const se_GetDeliverabilityTestReportCommand = async (
  input: GetDeliverabilityTestReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/test-reports/{ReportId}");
  b.p("ReportId", () => input.ReportId!, "{ReportId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const se_GetDomainDeliverabilityCampaignCommand = async (
  input: GetDomainDeliverabilityCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/campaigns/{CampaignId}");
  b.p("CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const se_GetDomainStatisticsReportCommand = async (
  input: GetDomainStatisticsReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/statistics-report/{Domain}");
  b.p("Domain", () => input.Domain!, "{Domain}", false);
  const query: any = map({
    [_SD]: [__expectNonNull(input.StartDate, `StartDate`) != null, () => __serializeDateTime(input[_SD]!).toString()],
    [_ED]: [__expectNonNull(input.EndDate, `EndDate`) != null, () => __serializeDateTime(input[_ED]!).toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEmailIdentityCommand
 */
export const se_GetEmailIdentityCommand = async (
  input: GetEmailIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/identities/{EmailIdentity}");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfigurationSetsCommand
 */
export const se_ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/configuration-sets");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const se_ListDedicatedIpPoolsCommand = async (
  input: ListDedicatedIpPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/dedicated-ip-pools");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const se_ListDeliverabilityTestReportsCommand = async (
  input: ListDeliverabilityTestReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/test-reports");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const se_ListDomainDeliverabilityCampaignsCommand = async (
  input: ListDomainDeliverabilityCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns");
  b.p("SubscribedDomain", () => input.SubscribedDomain!, "{SubscribedDomain}", false);
  const query: any = map({
    [_SD]: [__expectNonNull(input.StartDate, `StartDate`) != null, () => __serializeDateTime(input[_SD]!).toString()],
    [_ED]: [__expectNonNull(input.EndDate, `EndDate`) != null, () => __serializeDateTime(input[_ED]!).toString()],
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEmailIdentitiesCommand
 */
export const se_ListEmailIdentitiesCommand = async (
  input: ListEmailIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/email/identities");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_PS]: [() => input.PageSize !== void 0, () => input[_PS]!.toString()],
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
  b.bp("/v1/email/tags");
  const query: any = map({
    [_RA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const se_PutAccountDedicatedIpWarmupAttributesCommand = async (
  input: PutAccountDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/account/dedicated-ips/warmup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoWarmupEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const se_PutAccountSendingAttributesCommand = async (
  input: PutAccountSendingAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/account/sending");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const se_PutConfigurationSetDeliveryOptionsCommand = async (
  input: PutConfigurationSetDeliveryOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/delivery-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingPoolName: [],
      TlsPolicy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const se_PutConfigurationSetReputationOptionsCommand = async (
  input: PutConfigurationSetReputationOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/reputation-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ReputationMetricsEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const se_PutConfigurationSetSendingOptionsCommand = async (
  input: PutConfigurationSetSendingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/sending");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SendingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const se_PutConfigurationSetTrackingOptionsCommand = async (
  input: PutConfigurationSetTrackingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/tracking-options");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomRedirectDomain: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const se_PutDedicatedIpInPoolCommand = async (
  input: PutDedicatedIpInPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/dedicated-ips/{Ip}/pool");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationPoolName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const se_PutDedicatedIpWarmupAttributesCommand = async (
  input: PutDedicatedIpWarmupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/dedicated-ips/{Ip}/warmup");
  b.p("Ip", () => input.Ip!, "{Ip}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      WarmupPercentage: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const se_PutDeliverabilityDashboardOptionCommand = async (
  input: PutDeliverabilityDashboardOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/deliverability-dashboard");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DashboardEnabled: [],
      SubscribedDomains: (_) => se_DomainDeliverabilityTrackingOptions(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const se_PutEmailIdentityDkimAttributesCommand = async (
  input: PutEmailIdentityDkimAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/identities/{EmailIdentity}/dkim");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      SigningEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const se_PutEmailIdentityFeedbackAttributesCommand = async (
  input: PutEmailIdentityFeedbackAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/identities/{EmailIdentity}/feedback");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EmailForwardingEnabled: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const se_PutEmailIdentityMailFromAttributesCommand = async (
  input: PutEmailIdentityMailFromAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/identities/{EmailIdentity}/mail-from");
  b.p("EmailIdentity", () => input.EmailIdentity!, "{EmailIdentity}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BehaviorOnMxFailure: [],
      MailFromDomain: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendEmailCommand
 */
export const se_SendEmailCommand = async (
  input: SendEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/outbound-emails");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationSetName: [],
      Content: (_) => se_EmailContent(_, context),
      Destination: (_) => _json(_),
      EmailTags: (_) => _json(_),
      FeedbackForwardingEmailAddress: [],
      FromEmailAddress: [],
      ReplyToAddresses: (_) => _json(_),
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
  b.bp("/v1/email/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
      Tags: (_) => _json(_),
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
  b.bp("/v1/email/tags");
  const query: any = map({
    [_RA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
    [_TK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const se_UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/email/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}");
  b.p("ConfigurationSetName", () => input.ConfigurationSetName!, "{ConfigurationSetName}", false);
  b.p("EventDestinationName", () => input.EventDestinationName!, "{EventDestinationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EventDestination: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateConfigurationSetCommand
 */
export const de_CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
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
 * deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand
 */
export const de_CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
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
 * deserializeAws_restJson1CreateDedicatedIpPoolCommand
 */
export const de_CreateDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDedicatedIpPoolCommandOutput> => {
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
 * deserializeAws_restJson1CreateDeliverabilityTestReportCommand
 */
export const de_CreateDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestStatus: __expectString,
    ReportId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailIdentityCommand
 */
export const de_CreateEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DkimAttributes: _json,
    IdentityType: __expectString,
    VerifiedForSendingStatus: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationSetCommand
 */
export const de_DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand
 */
export const de_DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDedicatedIpPoolCommand
 */
export const de_DeleteDedicatedIpPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDedicatedIpPoolCommandOutput> => {
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
 * deserializeAws_restJson1DeleteEmailIdentityCommand
 */
export const de_DeleteEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailIdentityCommandOutput> => {
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
 * deserializeAws_restJson1GetAccountCommand
 */
export const de_GetAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIpAutoWarmupEnabled: __expectBoolean,
    EnforcementStatus: __expectString,
    ProductionAccessEnabled: __expectBoolean,
    SendQuota: (_) => de_SendQuota(_, context),
    SendingEnabled: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBlacklistReportsCommand
 */
export const de_GetBlacklistReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlacklistReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlacklistReport: (_) => de_BlacklistReport(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetCommand
 */
export const de_GetConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfigurationSetName: __expectString,
    DeliveryOptions: _json,
    ReputationOptions: (_) => de_ReputationOptions(_, context),
    SendingOptions: _json,
    Tags: _json,
    TrackingOptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand
 */
export const de_GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventDestinations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpCommand
 */
export const de_GetDedicatedIpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIp: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDedicatedIpsCommand
 */
export const de_GetDedicatedIpsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDedicatedIpsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIps: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeliverabilityDashboardOptionsCommand
 */
export const de_GetDeliverabilityDashboardOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityDashboardOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountStatus: __expectString,
    ActiveSubscribedDomains: (_) => de_DomainDeliverabilityTrackingOptions(_, context),
    DashboardEnabled: __expectBoolean,
    PendingExpirationSubscribedDomains: (_) => de_DomainDeliverabilityTrackingOptions(_, context),
    SubscriptionExpiryDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeliverabilityTestReportCommand
 */
export const de_GetDeliverabilityTestReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverabilityTestReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestReport: (_) => de_DeliverabilityTestReport(_, context),
    IspPlacements: (_) => de_IspPlacements(_, context),
    Message: __expectString,
    OverallPlacement: (_) => de_PlacementStatistics(_, context),
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainDeliverabilityCampaignCommand
 */
export const de_GetDomainDeliverabilityCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDeliverabilityCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainDeliverabilityCampaign: (_) => de_DomainDeliverabilityCampaign(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainStatisticsReportCommand
 */
export const de_GetDomainStatisticsReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainStatisticsReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DailyVolumes: (_) => de_DailyVolumes(_, context),
    OverallVolume: (_) => de_OverallVolume(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailIdentityCommand
 */
export const de_GetEmailIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailIdentityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DkimAttributes: _json,
    FeedbackForwardingStatus: __expectBoolean,
    IdentityType: __expectString,
    MailFromAttributes: _json,
    Tags: _json,
    VerifiedForSendingStatus: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationSetsCommand
 */
export const de_ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConfigurationSets: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDedicatedIpPoolsCommand
 */
export const de_ListDedicatedIpPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDedicatedIpPoolsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DedicatedIpPools: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeliverabilityTestReportsCommand
 */
export const de_ListDeliverabilityTestReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeliverabilityTestReports: (_) => de_DeliverabilityTestReports(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainDeliverabilityCampaignsCommand
 */
export const de_ListDomainDeliverabilityCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainDeliverabilityCampaigns: (_) => de_DomainDeliverabilityCampaignList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEmailIdentitiesCommand
 */
export const de_ListEmailIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEmailIdentitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EmailIdentities: _json,
    NextToken: __expectString,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountDedicatedIpWarmupAttributesCommand
 */
export const de_PutAccountDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountDedicatedIpWarmupAttributesCommandOutput> => {
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
 * deserializeAws_restJson1PutAccountSendingAttributesCommand
 */
export const de_PutAccountSendingAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountSendingAttributesCommandOutput> => {
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
 * deserializeAws_restJson1PutConfigurationSetDeliveryOptionsCommand
 */
export const de_PutConfigurationSetDeliveryOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
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
 * deserializeAws_restJson1PutConfigurationSetReputationOptionsCommand
 */
export const de_PutConfigurationSetReputationOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetReputationOptionsCommandOutput> => {
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
 * deserializeAws_restJson1PutConfigurationSetSendingOptionsCommand
 */
export const de_PutConfigurationSetSendingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetSendingOptionsCommandOutput> => {
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
 * deserializeAws_restJson1PutConfigurationSetTrackingOptionsCommand
 */
export const de_PutConfigurationSetTrackingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfigurationSetTrackingOptionsCommandOutput> => {
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
 * deserializeAws_restJson1PutDedicatedIpInPoolCommand
 */
export const de_PutDedicatedIpInPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpInPoolCommandOutput> => {
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
 * deserializeAws_restJson1PutDedicatedIpWarmupAttributesCommand
 */
export const de_PutDedicatedIpWarmupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDedicatedIpWarmupAttributesCommandOutput> => {
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
 * deserializeAws_restJson1PutDeliverabilityDashboardOptionCommand
 */
export const de_PutDeliverabilityDashboardOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverabilityDashboardOptionCommandOutput> => {
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
 * deserializeAws_restJson1PutEmailIdentityDkimAttributesCommand
 */
export const de_PutEmailIdentityDkimAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityDkimAttributesCommandOutput> => {
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
 * deserializeAws_restJson1PutEmailIdentityFeedbackAttributesCommand
 */
export const de_PutEmailIdentityFeedbackAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityFeedbackAttributesCommandOutput> => {
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
 * deserializeAws_restJson1PutEmailIdentityMailFromAttributesCommand
 */
export const de_PutEmailIdentityMailFromAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailIdentityMailFromAttributesCommandOutput> => {
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
 * deserializeAws_restJson1SendEmailCommand
 */
export const de_SendEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendEmailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MessageId: __expectString,
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
 * deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand
 */
export const de_UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointemail#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.pinpointemail#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.pinpointemail#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.pinpointemail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpointemail#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointemail#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "AccountSuspendedException":
    case "com.amazonaws.pinpointemail#AccountSuspendedException":
      throw await de_AccountSuspendedExceptionRes(parsedOutput, context);
    case "MailFromDomainNotVerifiedException":
    case "com.amazonaws.pinpointemail#MailFromDomainNotVerifiedException":
      throw await de_MailFromDomainNotVerifiedExceptionRes(parsedOutput, context);
    case "MessageRejected":
    case "com.amazonaws.pinpointemail#MessageRejected":
      throw await de_MessageRejectedRes(parsedOutput, context);
    case "SendingPausedException":
    case "com.amazonaws.pinpointemail#SendingPausedException":
      throw await de_SendingPausedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AccountSuspendedExceptionRes
 */
const de_AccountSuspendedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountSuspendedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccountSuspendedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MailFromDomainNotVerifiedExceptionRes
 */
const de_MailFromDomainNotVerifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailFromDomainNotVerifiedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MailFromDomainNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MessageRejectedRes
 */
const de_MessageRejectedRes = async (parsedOutput: any, context: __SerdeContext): Promise<MessageRejected> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MessageRejected({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SendingPausedExceptionRes
 */
const de_SendingPausedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SendingPausedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SendingPausedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Body omitted.

// se_CloudWatchDestination omitted.

// se_CloudWatchDimensionConfiguration omitted.

// se_CloudWatchDimensionConfigurations omitted.

// se_Content omitted.

// se_DeliveryOptions omitted.

// se_Destination omitted.

/**
 * serializeAws_restJson1DomainDeliverabilityTrackingOption
 */
const se_DomainDeliverabilityTrackingOption = (
  input: DomainDeliverabilityTrackingOption,
  context: __SerdeContext
): any => {
  return take(input, {
    Domain: [],
    InboxPlacementTrackingOption: _json,
    SubscriptionStartDate: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1DomainDeliverabilityTrackingOptions
 */
const se_DomainDeliverabilityTrackingOptions = (
  input: DomainDeliverabilityTrackingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DomainDeliverabilityTrackingOption(entry, context);
    });
};

// se_EmailAddressList omitted.

/**
 * serializeAws_restJson1EmailContent
 */
const se_EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return take(input, {
    Raw: (_) => se_RawMessage(_, context),
    Simple: _json,
    Template: _json,
  });
};

// se_EventDestinationDefinition omitted.

// se_EventTypes omitted.

// se_InboxPlacementTrackingOption omitted.

// se_IspNameList omitted.

// se_KinesisFirehoseDestination omitted.

// se_Message omitted.

// se_MessageTag omitted.

// se_MessageTagList omitted.

// se_PinpointDestination omitted.

/**
 * serializeAws_restJson1RawMessage
 */
const se_RawMessage = (input: RawMessage, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
  });
};

/**
 * serializeAws_restJson1ReputationOptions
 */
const se_ReputationOptions = (input: ReputationOptions, context: __SerdeContext): any => {
  return take(input, {
    LastFreshStart: (_) => _.getTime() / 1_000,
    ReputationMetricsEnabled: [],
  });
};

// se_SendingOptions omitted.

// se_SnsDestination omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_Template omitted.

// se_TrackingOptions omitted.

/**
 * deserializeAws_restJson1BlacklistEntries
 */
const de_BlacklistEntries = (output: any, context: __SerdeContext): BlacklistEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BlacklistEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BlacklistEntry
 */
const de_BlacklistEntry = (output: any, context: __SerdeContext): BlacklistEntry => {
  return take(output, {
    Description: __expectString,
    ListingTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RblName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BlacklistReport
 */
const de_BlacklistReport = (output: any, context: __SerdeContext): Record<string, BlacklistEntry[]> => {
  return Object.entries(output).reduce((acc: Record<string, BlacklistEntry[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_BlacklistEntries(value, context);
    return acc;
  }, {} as Record<string, BlacklistEntry[]>);
};

// de_CloudWatchDestination omitted.

// de_CloudWatchDimensionConfiguration omitted.

// de_CloudWatchDimensionConfigurations omitted.

// de_ConfigurationSetNameList omitted.

/**
 * deserializeAws_restJson1DailyVolume
 */
const de_DailyVolume = (output: any, context: __SerdeContext): DailyVolume => {
  return take(output, {
    DomainIspPlacements: (_: any) => de_DomainIspPlacements(_, context),
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VolumeStatistics: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DailyVolumes
 */
const de_DailyVolumes = (output: any, context: __SerdeContext): DailyVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DailyVolume(entry, context);
    });
  return retVal;
};

// de_DedicatedIp omitted.

// de_DedicatedIpList omitted.

/**
 * deserializeAws_restJson1DeliverabilityTestReport
 */
const de_DeliverabilityTestReport = (output: any, context: __SerdeContext): DeliverabilityTestReport => {
  return take(output, {
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeliverabilityTestStatus: __expectString,
    FromEmailAddress: __expectString,
    ReportId: __expectString,
    ReportName: __expectString,
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeliverabilityTestReports
 */
const de_DeliverabilityTestReports = (output: any, context: __SerdeContext): DeliverabilityTestReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeliverabilityTestReport(entry, context);
    });
  return retVal;
};

// de_DeliveryOptions omitted.

// de_DkimAttributes omitted.

// de_DnsTokenList omitted.

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaign
 */
const de_DomainDeliverabilityCampaign = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign => {
  return take(output, {
    CampaignId: __expectString,
    DeleteRate: __limitedParseDouble,
    Esps: _json,
    FirstSeenDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FromAddress: __expectString,
    ImageUrl: __expectString,
    InboxCount: __expectLong,
    LastSeenDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectedVolume: __expectLong,
    ReadDeleteRate: __limitedParseDouble,
    ReadRate: __limitedParseDouble,
    SendingIps: _json,
    SpamCount: __expectLong,
    Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityCampaignList
 */
const de_DomainDeliverabilityCampaignList = (output: any, context: __SerdeContext): DomainDeliverabilityCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainDeliverabilityCampaign(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityTrackingOption
 */
const de_DomainDeliverabilityTrackingOption = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption => {
  return take(output, {
    Domain: __expectString,
    InboxPlacementTrackingOption: _json,
    SubscriptionStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DomainDeliverabilityTrackingOptions
 */
const de_DomainDeliverabilityTrackingOptions = (
  output: any,
  context: __SerdeContext
): DomainDeliverabilityTrackingOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainDeliverabilityTrackingOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainIspPlacement
 */
const de_DomainIspPlacement = (output: any, context: __SerdeContext): DomainIspPlacement => {
  return take(output, {
    InboxPercentage: __limitedParseDouble,
    InboxRawCount: __expectLong,
    IspName: __expectString,
    SpamPercentage: __limitedParseDouble,
    SpamRawCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainIspPlacements
 */
const de_DomainIspPlacements = (output: any, context: __SerdeContext): DomainIspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainIspPlacement(entry, context);
    });
  return retVal;
};

// de_Esps omitted.

// de_EventDestination omitted.

// de_EventDestinations omitted.

// de_EventTypes omitted.

// de_IdentityInfo omitted.

// de_IdentityInfoList omitted.

// de_InboxPlacementTrackingOption omitted.

// de_IpList omitted.

// de_IspNameList omitted.

/**
 * deserializeAws_restJson1IspPlacement
 */
const de_IspPlacement = (output: any, context: __SerdeContext): IspPlacement => {
  return take(output, {
    IspName: __expectString,
    PlacementStatistics: (_: any) => de_PlacementStatistics(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1IspPlacements
 */
const de_IspPlacements = (output: any, context: __SerdeContext): IspPlacement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IspPlacement(entry, context);
    });
  return retVal;
};

// de_KinesisFirehoseDestination omitted.

// de_ListOfDedicatedIpPools omitted.

// de_MailFromAttributes omitted.

/**
 * deserializeAws_restJson1OverallVolume
 */
const de_OverallVolume = (output: any, context: __SerdeContext): OverallVolume => {
  return take(output, {
    DomainIspPlacements: (_: any) => de_DomainIspPlacements(_, context),
    ReadRatePercent: __limitedParseDouble,
    VolumeStatistics: _json,
  }) as any;
};

// de_PinpointDestination omitted.

/**
 * deserializeAws_restJson1PlacementStatistics
 */
const de_PlacementStatistics = (output: any, context: __SerdeContext): PlacementStatistics => {
  return take(output, {
    DkimPercentage: __limitedParseDouble,
    InboxPercentage: __limitedParseDouble,
    MissingPercentage: __limitedParseDouble,
    SpamPercentage: __limitedParseDouble,
    SpfPercentage: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ReputationOptions
 */
const de_ReputationOptions = (output: any, context: __SerdeContext): ReputationOptions => {
  return take(output, {
    LastFreshStart: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReputationMetricsEnabled: __expectBoolean,
  }) as any;
};

// de_SendingOptions omitted.

/**
 * deserializeAws_restJson1SendQuota
 */
const de_SendQuota = (output: any, context: __SerdeContext): SendQuota => {
  return take(output, {
    Max24HourSend: __limitedParseDouble,
    MaxSendRate: __limitedParseDouble,
    SentLast24Hours: __limitedParseDouble,
  }) as any;
};

// de_SnsDestination omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TrackingOptions omitted.

// de_VolumeStatistics omitted.

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

const _BIN = "BlacklistItemNames";
const _ED = "EndDate";
const _NT = "NextToken";
const _PN = "PoolName";
const _PS = "PageSize";
const _RA = "ResourceArn";
const _SD = "StartDate";
const _TK = "TagKeys";
