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
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import {
  DeleteCampaignChannelSubtypeConfigCommandInput,
  DeleteCampaignChannelSubtypeConfigCommandOutput,
} from "../commands/DeleteCampaignChannelSubtypeConfigCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import {
  DeleteCampaignCommunicationLimitsCommandInput,
  DeleteCampaignCommunicationLimitsCommandOutput,
} from "../commands/DeleteCampaignCommunicationLimitsCommand";
import {
  DeleteCampaignCommunicationTimeCommandInput,
  DeleteCampaignCommunicationTimeCommandOutput,
} from "../commands/DeleteCampaignCommunicationTimeCommand";
import {
  DeleteConnectInstanceConfigCommandInput,
  DeleteConnectInstanceConfigCommandOutput,
} from "../commands/DeleteConnectInstanceConfigCommand";
import {
  DeleteConnectInstanceIntegrationCommandInput,
  DeleteConnectInstanceIntegrationCommandOutput,
} from "../commands/DeleteConnectInstanceIntegrationCommand";
import {
  DeleteInstanceOnboardingJobCommandInput,
  DeleteInstanceOnboardingJobCommandOutput,
} from "../commands/DeleteInstanceOnboardingJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "../commands/DescribeCampaignCommand";
import {
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
} from "../commands/GetCampaignStateBatchCommand";
import { GetCampaignStateCommandInput, GetCampaignStateCommandOutput } from "../commands/GetCampaignStateCommand";
import {
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
} from "../commands/GetConnectInstanceConfigCommand";
import {
  GetInstanceCommunicationLimitsCommandInput,
  GetInstanceCommunicationLimitsCommandOutput,
} from "../commands/GetInstanceCommunicationLimitsCommand";
import {
  GetInstanceOnboardingJobStatusCommandInput,
  GetInstanceOnboardingJobStatusCommandOutput,
} from "../commands/GetInstanceOnboardingJobStatusCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "../commands/ListCampaignsCommand";
import {
  ListConnectInstanceIntegrationsCommandInput,
  ListConnectInstanceIntegrationsCommandOutput,
} from "../commands/ListConnectInstanceIntegrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PauseCampaignCommandInput, PauseCampaignCommandOutput } from "../commands/PauseCampaignCommand";
import {
  PutConnectInstanceIntegrationCommandInput,
  PutConnectInstanceIntegrationCommandOutput,
} from "../commands/PutConnectInstanceIntegrationCommand";
import {
  PutInstanceCommunicationLimitsCommandInput,
  PutInstanceCommunicationLimitsCommandOutput,
} from "../commands/PutInstanceCommunicationLimitsCommand";
import {
  PutOutboundRequestBatchCommandInput,
  PutOutboundRequestBatchCommandOutput,
} from "../commands/PutOutboundRequestBatchCommand";
import {
  PutProfileOutboundRequestBatchCommandInput,
  PutProfileOutboundRequestBatchCommandOutput,
} from "../commands/PutProfileOutboundRequestBatchCommand";
import { ResumeCampaignCommandInput, ResumeCampaignCommandOutput } from "../commands/ResumeCampaignCommand";
import { StartCampaignCommandInput, StartCampaignCommandOutput } from "../commands/StartCampaignCommand";
import {
  StartInstanceOnboardingJobCommandInput,
  StartInstanceOnboardingJobCommandOutput,
} from "../commands/StartInstanceOnboardingJobCommand";
import { StopCampaignCommandInput, StopCampaignCommandOutput } from "../commands/StopCampaignCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCampaignChannelSubtypeConfigCommandInput,
  UpdateCampaignChannelSubtypeConfigCommandOutput,
} from "../commands/UpdateCampaignChannelSubtypeConfigCommand";
import {
  UpdateCampaignCommunicationLimitsCommandInput,
  UpdateCampaignCommunicationLimitsCommandOutput,
} from "../commands/UpdateCampaignCommunicationLimitsCommand";
import {
  UpdateCampaignCommunicationTimeCommandInput,
  UpdateCampaignCommunicationTimeCommandOutput,
} from "../commands/UpdateCampaignCommunicationTimeCommand";
import {
  UpdateCampaignFlowAssociationCommandInput,
  UpdateCampaignFlowAssociationCommandOutput,
} from "../commands/UpdateCampaignFlowAssociationCommand";
import { UpdateCampaignNameCommandInput, UpdateCampaignNameCommandOutput } from "../commands/UpdateCampaignNameCommand";
import {
  UpdateCampaignScheduleCommandInput,
  UpdateCampaignScheduleCommandOutput,
} from "../commands/UpdateCampaignScheduleCommand";
import {
  UpdateCampaignSourceCommandInput,
  UpdateCampaignSourceCommandOutput,
} from "../commands/UpdateCampaignSourceCommand";
import { ConnectCampaignsV2ServiceException as __BaseException } from "../models/ConnectCampaignsV2ServiceException";
import {
  AccessDeniedException,
  AgentAction,
  AgentlessConfig,
  AnswerMachineDetectionConfig,
  Campaign,
  CampaignFilters,
  CampaignSummary,
  ChannelSubtypeConfig,
  ChannelSubtypeParameters,
  CommunicationLimit,
  CommunicationLimits,
  CommunicationLimitsConfig,
  CommunicationTimeConfig,
  ConflictException,
  CustomerProfilesIntegrationConfig,
  CustomerProfilesIntegrationIdentifier,
  DayOfWeek,
  EmailChannelSubtypeConfig,
  EmailChannelSubtypeParameters,
  EmailOutboundConfig,
  EmailOutboundMode,
  EncryptionConfig,
  EventTrigger,
  EventType,
  InstanceCommunicationLimitsConfig,
  InstanceIdFilter,
  IntegrationConfig,
  IntegrationIdentifier,
  InternalServerException,
  InvalidCampaignStateException,
  InvalidStateException,
  LocalTimeZoneConfig,
  LocalTimeZoneDetectionType,
  OpenHours,
  OutboundRequest,
  PredictiveConfig,
  PreviewConfig,
  ProfileOutboundRequest,
  ProgressiveConfig,
  QConnectIntegrationConfig,
  QConnectIntegrationIdentifier,
  ResourceNotFoundException,
  RestrictedPeriod,
  RestrictedPeriods,
  Schedule,
  ServiceQuotaExceededException,
  SmsChannelSubtypeConfig,
  SmsChannelSubtypeParameters,
  SmsOutboundConfig,
  SmsOutboundMode,
  Source,
  TelephonyChannelSubtypeConfig,
  TelephonyChannelSubtypeParameters,
  TelephonyOutboundConfig,
  TelephonyOutboundMode,
  ThrottlingException,
  TimeoutConfig,
  TimeRange,
  TimeWindow,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns");
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelSubtypeConfig: (_) => se_ChannelSubtypeConfig(_, context),
      communicationLimitsOverride: (_) => _json(_),
      communicationTimeConfig: (_) => _json(_),
      connectCampaignFlowArn: [],
      connectInstanceId: [],
      name: [],
      schedule: (_) => se_Schedule(_, context),
      source: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCampaignChannelSubtypeConfigCommand
 */
export const se_DeleteCampaignChannelSubtypeConfigCommand = async (
  input: DeleteCampaignChannelSubtypeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/channel-subtype-config");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_cS]: [, __expectNonNull(input[_cS]!, `channelSubtype`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCampaignCommunicationLimitsCommand
 */
export const se_DeleteCampaignCommunicationLimitsCommand = async (
  input: DeleteCampaignCommunicationLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/communication-limits");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_c]: [, __expectNonNull(input[_c]!, `config`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCampaignCommunicationTimeCommand
 */
export const se_DeleteCampaignCommunicationTimeCommand = async (
  input: DeleteCampaignCommunicationTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/communication-time");
  b.p("id", () => input.id!, "{id}", false);
  const query: any = map({
    [_c]: [, __expectNonNull(input[_c]!, `config`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectInstanceConfigCommand
 */
export const se_DeleteConnectInstanceConfigCommand = async (
  input: DeleteConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/config");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  const query: any = map({
    [_cDP]: [, input[_cDP]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectInstanceIntegrationCommand
 */
export const se_DeleteConnectInstanceIntegrationCommand = async (
  input: DeleteConnectInstanceIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/connect-instance/{connectInstanceId}/integrations/delete");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      integrationIdentifier: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInstanceOnboardingJobCommand
 */
export const se_DeleteInstanceOnboardingJobCommand = async (
  input: DeleteInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCampaignCommand
 */
export const se_DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCampaignStateCommand
 */
export const se_GetCampaignStateCommand = async (
  input: GetCampaignStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/state");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCampaignStateBatchCommand
 */
export const se_GetCampaignStateBatchCommand = async (
  input: GetCampaignStateBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns-state");
  let body: any;
  body = JSON.stringify(
    take(input, {
      campaignIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectInstanceConfigCommand
 */
export const se_GetConnectInstanceConfigCommand = async (
  input: GetConnectInstanceConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/config");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInstanceCommunicationLimitsCommand
 */
export const se_GetInstanceCommunicationLimitsCommand = async (
  input: GetInstanceCommunicationLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/communication-limits");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInstanceOnboardingJobStatusCommand
 */
export const se_GetInstanceOnboardingJobStatusCommand = async (
  input: GetInstanceOnboardingJobStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCampaignsCommand
 */
export const se_ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns-summary");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectInstanceIntegrationsCommand
 */
export const se_ListConnectInstanceIntegrationsCommand = async (
  input: ListConnectInstanceIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/connect-instance/{connectInstanceId}/integrations");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
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
  b.bp("/v2/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PauseCampaignCommand
 */
export const se_PauseCampaignCommand = async (
  input: PauseCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/pause");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConnectInstanceIntegrationCommand
 */
export const se_PutConnectInstanceIntegrationCommand = async (
  input: PutConnectInstanceIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/connect-instance/{connectInstanceId}/integrations");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      integrationConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutInstanceCommunicationLimitsCommand
 */
export const se_PutInstanceCommunicationLimitsCommand = async (
  input: PutInstanceCommunicationLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/connect-instance/{connectInstanceId}/communication-limits");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      communicationLimitsConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutOutboundRequestBatchCommand
 */
export const se_PutOutboundRequestBatchCommand = async (
  input: PutOutboundRequestBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/outbound-requests");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      outboundRequests: (_) => se_OutboundRequestList(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutProfileOutboundRequestBatchCommand
 */
export const se_PutProfileOutboundRequestBatchCommand = async (
  input: PutProfileOutboundRequestBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/profile-outbound-requests");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      profileOutboundRequests: (_) => se_ProfileOutboundRequestList(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResumeCampaignCommand
 */
export const se_ResumeCampaignCommand = async (
  input: ResumeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/resume");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCampaignCommand
 */
export const se_StartCampaignCommand = async (
  input: StartCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/start");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartInstanceOnboardingJobCommand
 */
export const se_StartInstanceOnboardingJobCommand = async (
  input: StartInstanceOnboardingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/connect-instance/{connectInstanceId}/onboarding");
  b.p("connectInstanceId", () => input.connectInstanceId!, "{connectInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopCampaignCommand
 */
export const se_StopCampaignCommand = async (
  input: StopCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v2/campaigns/{id}/stop");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
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
  b.bp("/v2/tags/{arn}");
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
  b.bp("/v2/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignChannelSubtypeConfigCommand
 */
export const se_UpdateCampaignChannelSubtypeConfigCommand = async (
  input: UpdateCampaignChannelSubtypeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/channel-subtype-config");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      channelSubtypeConfig: (_) => se_ChannelSubtypeConfig(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignCommunicationLimitsCommand
 */
export const se_UpdateCampaignCommunicationLimitsCommand = async (
  input: UpdateCampaignCommunicationLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/communication-limits");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      communicationLimitsOverride: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignCommunicationTimeCommand
 */
export const se_UpdateCampaignCommunicationTimeCommand = async (
  input: UpdateCampaignCommunicationTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/communication-time");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      communicationTimeConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignFlowAssociationCommand
 */
export const se_UpdateCampaignFlowAssociationCommand = async (
  input: UpdateCampaignFlowAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/flow");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      connectCampaignFlowArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignNameCommand
 */
export const se_UpdateCampaignNameCommand = async (
  input: UpdateCampaignNameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/name");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignScheduleCommand
 */
export const se_UpdateCampaignScheduleCommand = async (
  input: UpdateCampaignScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/schedule");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      schedule: (_) => se_Schedule(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCampaignSourceCommand
 */
export const se_UpdateCampaignSourceCommand = async (
  input: UpdateCampaignSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v2/campaigns/{id}/source");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      source: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateCampaignCommand
 */
export const de_CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    id: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCampaignCommand
 */
export const de_DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCampaignChannelSubtypeConfigCommand
 */
export const de_DeleteCampaignChannelSubtypeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignChannelSubtypeConfigCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCampaignCommunicationLimitsCommand
 */
export const de_DeleteCampaignCommunicationLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommunicationLimitsCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCampaignCommunicationTimeCommand
 */
export const de_DeleteCampaignCommunicationTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommunicationTimeCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConnectInstanceConfigCommand
 */
export const de_DeleteConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectInstanceConfigCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConnectInstanceIntegrationCommand
 */
export const de_DeleteConnectInstanceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectInstanceIntegrationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteInstanceOnboardingJobCommand
 */
export const de_DeleteInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceOnboardingJobCommandOutput> => {
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
 * deserializeAws_restJson1DescribeCampaignCommand
 */
export const de_DescribeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    campaign: (_) => de_Campaign(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignStateCommand
 */
export const de_GetCampaignStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    state: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignStateBatchCommand
 */
export const de_GetCampaignStateBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignStateBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedRequests: _json,
    successfulRequests: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectInstanceConfigCommand
 */
export const de_GetConnectInstanceConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectInstanceConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInstanceCommunicationLimitsCommand
 */
export const de_GetInstanceCommunicationLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommunicationLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    communicationLimitsConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInstanceOnboardingJobStatusCommand
 */
export const de_GetInstanceOnboardingJobStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceOnboardingJobStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceOnboardingJobStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCampaignsCommand
 */
export const de_ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    campaignSummaryList: (_) => de_CampaignSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectInstanceIntegrationsCommand
 */
export const de_ListConnectInstanceIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectInstanceIntegrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    integrationSummaryList: _json,
    nextToken: __expectString,
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
 * deserializeAws_restJson1PauseCampaignCommand
 */
export const de_PauseCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseCampaignCommandOutput> => {
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
 * deserializeAws_restJson1PutConnectInstanceIntegrationCommand
 */
export const de_PutConnectInstanceIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConnectInstanceIntegrationCommandOutput> => {
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
 * deserializeAws_restJson1PutInstanceCommunicationLimitsCommand
 */
export const de_PutInstanceCommunicationLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInstanceCommunicationLimitsCommandOutput> => {
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
 * deserializeAws_restJson1PutOutboundRequestBatchCommand
 */
export const de_PutOutboundRequestBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutOutboundRequestBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedRequests: _json,
    successfulRequests: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutProfileOutboundRequestBatchCommand
 */
export const de_PutProfileOutboundRequestBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProfileOutboundRequestBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedRequests: _json,
    successfulRequests: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResumeCampaignCommand
 */
export const de_ResumeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeCampaignCommandOutput> => {
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
 * deserializeAws_restJson1StartCampaignCommand
 */
export const de_StartCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCampaignCommandOutput> => {
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
 * deserializeAws_restJson1StartInstanceOnboardingJobCommand
 */
export const de_StartInstanceOnboardingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInstanceOnboardingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    connectInstanceOnboardingJobStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopCampaignCommand
 */
export const de_StopCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCampaignCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignChannelSubtypeConfigCommand
 */
export const de_UpdateCampaignChannelSubtypeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignChannelSubtypeConfigCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignCommunicationLimitsCommand
 */
export const de_UpdateCampaignCommunicationLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommunicationLimitsCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignCommunicationTimeCommand
 */
export const de_UpdateCampaignCommunicationTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommunicationTimeCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignFlowAssociationCommand
 */
export const de_UpdateCampaignFlowAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignFlowAssociationCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignNameCommand
 */
export const de_UpdateCampaignNameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignNameCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignScheduleCommand
 */
export const de_UpdateCampaignScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignScheduleCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCampaignSourceCommand
 */
export const de_UpdateCampaignSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignSourceCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.connectcampaignsv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcampaignsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcampaignsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcampaignsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcampaignsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcampaignsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcampaignsv2#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InvalidCampaignStateException":
    case "com.amazonaws.connectcampaignsv2#InvalidCampaignStateException":
      throw await de_InvalidCampaignStateExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.connectcampaignsv2#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
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
 * deserializeAws_restJson1InvalidCampaignStateExceptionRes
 */
const de_InvalidCampaignStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCampaignStateException> => {
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    state: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidCampaignStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidStateException({
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
  const contents: any = map({
    [_xAET]: [, parsedOutput.headers[_xae]],
  });
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

// se_AgentActions omitted.

// se_AgentlessConfig omitted.

// se_AnswerMachineDetectionConfig omitted.

// se_Attributes omitted.

// se_CampaignFilters omitted.

// se_CampaignIdList omitted.

/**
 * serializeAws_restJson1ChannelSubtypeConfig
 */
const se_ChannelSubtypeConfig = (input: ChannelSubtypeConfig, context: __SerdeContext): any => {
  return take(input, {
    email: (_) => se_EmailChannelSubtypeConfig(_, context),
    sms: (_) => se_SmsChannelSubtypeConfig(_, context),
    telephony: (_) => se_TelephonyChannelSubtypeConfig(_, context),
  });
};

// se_ChannelSubtypeParameters omitted.

// se_CommunicationLimit omitted.

// se_CommunicationLimitList omitted.

// se_CommunicationLimits omitted.

// se_CommunicationLimitsConfig omitted.

// se_CommunicationTimeConfig omitted.

// se_CustomerProfilesIntegrationConfig omitted.

// se_CustomerProfilesIntegrationIdentifier omitted.

// se_DailyHours omitted.

/**
 * serializeAws_restJson1EmailChannelSubtypeConfig
 */
const se_EmailChannelSubtypeConfig = (input: EmailChannelSubtypeConfig, context: __SerdeContext): any => {
  return take(input, {
    capacity: __serializeFloat,
    defaultOutboundConfig: _json,
    outboundMode: _json,
  });
};

// se_EmailChannelSubtypeParameters omitted.

// se_EmailOutboundConfig omitted.

// se_EmailOutboundMode omitted.

// se_EncryptionConfig omitted.

// se_EventTrigger omitted.

// se_InstanceCommunicationLimitsConfig omitted.

// se_InstanceIdFilter omitted.

// se_IntegrationConfig omitted.

// se_IntegrationIdentifier omitted.

// se_LocalTimeZoneConfig omitted.

// se_LocalTimeZoneDetection omitted.

// se_ObjectTypeNamesMap omitted.

// se_OpenHours omitted.

/**
 * serializeAws_restJson1OutboundRequest
 */
const se_OutboundRequest = (input: OutboundRequest, context: __SerdeContext): any => {
  return take(input, {
    channelSubtypeParameters: _json,
    clientToken: [],
    expirationTime: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1OutboundRequestList
 */
const se_OutboundRequestList = (input: OutboundRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutboundRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1PredictiveConfig
 */
const se_PredictiveConfig = (input: PredictiveConfig, context: __SerdeContext): any => {
  return take(input, {
    bandwidthAllocation: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1PreviewConfig
 */
const se_PreviewConfig = (input: PreviewConfig, context: __SerdeContext): any => {
  return take(input, {
    agentActions: _json,
    bandwidthAllocation: __serializeFloat,
    timeoutConfig: _json,
  });
};

/**
 * serializeAws_restJson1ProfileOutboundRequest
 */
const se_ProfileOutboundRequest = (input: ProfileOutboundRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [],
    expirationTime: __serializeDateTime,
    profileId: [],
  });
};

/**
 * serializeAws_restJson1ProfileOutboundRequestList
 */
const se_ProfileOutboundRequestList = (input: ProfileOutboundRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProfileOutboundRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1ProgressiveConfig
 */
const se_ProgressiveConfig = (input: ProgressiveConfig, context: __SerdeContext): any => {
  return take(input, {
    bandwidthAllocation: __serializeFloat,
  });
};

// se_QConnectIntegrationConfig omitted.

// se_QConnectIntegrationIdentifier omitted.

// se_RestrictedPeriod omitted.

// se_RestrictedPeriodList omitted.

// se_RestrictedPeriods omitted.

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return take(input, {
    endTime: __serializeDateTime,
    refreshFrequency: [],
    startTime: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1SmsChannelSubtypeConfig
 */
const se_SmsChannelSubtypeConfig = (input: SmsChannelSubtypeConfig, context: __SerdeContext): any => {
  return take(input, {
    capacity: __serializeFloat,
    defaultOutboundConfig: _json,
    outboundMode: _json,
  });
};

// se_SmsChannelSubtypeParameters omitted.

// se_SmsOutboundConfig omitted.

// se_SmsOutboundMode omitted.

// se_Source omitted.

// se_TagMap omitted.

/**
 * serializeAws_restJson1TelephonyChannelSubtypeConfig
 */
const se_TelephonyChannelSubtypeConfig = (input: TelephonyChannelSubtypeConfig, context: __SerdeContext): any => {
  return take(input, {
    capacity: __serializeFloat,
    connectQueueId: [],
    defaultOutboundConfig: _json,
    outboundMode: (_) => se_TelephonyOutboundMode(_, context),
  });
};

// se_TelephonyChannelSubtypeParameters omitted.

// se_TelephonyOutboundConfig omitted.

/**
 * serializeAws_restJson1TelephonyOutboundMode
 */
const se_TelephonyOutboundMode = (input: TelephonyOutboundMode, context: __SerdeContext): any => {
  return TelephonyOutboundMode.visit(input, {
    agentless: (value) => ({ agentless: _json(value) }),
    predictive: (value) => ({ predictive: se_PredictiveConfig(value, context) }),
    preview: (value) => ({ preview: se_PreviewConfig(value, context) }),
    progressive: (value) => ({ progressive: se_ProgressiveConfig(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_TimeoutConfig omitted.

// se_TimeRange omitted.

// se_TimeRangeList omitted.

// se_TimeWindow omitted.

// de_AgentActions omitted.

// de_AgentlessConfig omitted.

// de_AnswerMachineDetectionConfig omitted.

/**
 * deserializeAws_restJson1Campaign
 */
const de_Campaign = (output: any, context: __SerdeContext): Campaign => {
  return take(output, {
    arn: __expectString,
    channelSubtypeConfig: (_: any) => de_ChannelSubtypeConfig(_, context),
    communicationLimitsOverride: _json,
    communicationTimeConfig: _json,
    connectCampaignFlowArn: __expectString,
    connectInstanceId: __expectString,
    id: __expectString,
    name: __expectString,
    schedule: (_: any) => de_Schedule(_, context),
    source: (_: any) => _json(__expectUnion(_)),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CampaignSummary
 */
const de_CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return take(output, {
    arn: __expectString,
    channelSubtypes: _json,
    connectCampaignFlowArn: __expectString,
    connectInstanceId: __expectString,
    id: __expectString,
    name: __expectString,
    schedule: (_: any) => de_Schedule(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1CampaignSummaryList
 */
const de_CampaignSummaryList = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CampaignSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChannelSubtypeConfig
 */
const de_ChannelSubtypeConfig = (output: any, context: __SerdeContext): ChannelSubtypeConfig => {
  return take(output, {
    email: (_: any) => de_EmailChannelSubtypeConfig(_, context),
    sms: (_: any) => de_SmsChannelSubtypeConfig(_, context),
    telephony: (_: any) => de_TelephonyChannelSubtypeConfig(_, context),
  }) as any;
};

// de_ChannelSubtypeList omitted.

// de_CommunicationLimit omitted.

// de_CommunicationLimitList omitted.

// de_CommunicationLimits omitted.

// de_CommunicationLimitsConfig omitted.

// de_CommunicationTimeConfig omitted.

// de_CustomerProfilesIntegrationSummary omitted.

// de_DailyHours omitted.

/**
 * deserializeAws_restJson1EmailChannelSubtypeConfig
 */
const de_EmailChannelSubtypeConfig = (output: any, context: __SerdeContext): EmailChannelSubtypeConfig => {
  return take(output, {
    capacity: __limitedParseDouble,
    defaultOutboundConfig: _json,
    outboundMode: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

// de_EmailOutboundConfig omitted.

// de_EmailOutboundMode omitted.

// de_EncryptionConfig omitted.

// de_EventTrigger omitted.

// de_FailedCampaignStateResponse omitted.

// de_FailedCampaignStateResponseList omitted.

// de_FailedProfileOutboundRequest omitted.

// de_FailedProfileOutboundRequestList omitted.

// de_FailedRequest omitted.

// de_FailedRequestList omitted.

// de_InstanceCommunicationLimitsConfig omitted.

// de_InstanceConfig omitted.

// de_InstanceOnboardingJobStatus omitted.

// de_IntegrationSummary omitted.

// de_IntegrationSummaryList omitted.

// de_LocalTimeZoneConfig omitted.

// de_LocalTimeZoneDetection omitted.

// de_ObjectTypeNamesMap omitted.

// de_OpenHours omitted.

/**
 * deserializeAws_restJson1PredictiveConfig
 */
const de_PredictiveConfig = (output: any, context: __SerdeContext): PredictiveConfig => {
  return take(output, {
    bandwidthAllocation: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PreviewConfig
 */
const de_PreviewConfig = (output: any, context: __SerdeContext): PreviewConfig => {
  return take(output, {
    agentActions: _json,
    bandwidthAllocation: __limitedParseDouble,
    timeoutConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ProgressiveConfig
 */
const de_ProgressiveConfig = (output: any, context: __SerdeContext): ProgressiveConfig => {
  return take(output, {
    bandwidthAllocation: __limitedParseDouble,
  }) as any;
};

// de_QConnectIntegrationSummary omitted.

// de_RestrictedPeriod omitted.

// de_RestrictedPeriodList omitted.

// de_RestrictedPeriods omitted.

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    refreshFrequency: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1SmsChannelSubtypeConfig
 */
const de_SmsChannelSubtypeConfig = (output: any, context: __SerdeContext): SmsChannelSubtypeConfig => {
  return take(output, {
    capacity: __limitedParseDouble,
    defaultOutboundConfig: _json,
    outboundMode: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

// de_SmsOutboundConfig omitted.

// de_SmsOutboundMode omitted.

// de_Source omitted.

// de_SuccessfulCampaignStateResponse omitted.

// de_SuccessfulCampaignStateResponseList omitted.

// de_SuccessfulProfileOutboundRequest omitted.

// de_SuccessfulProfileOutboundRequestList omitted.

// de_SuccessfulRequest omitted.

// de_SuccessfulRequestList omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TelephonyChannelSubtypeConfig
 */
const de_TelephonyChannelSubtypeConfig = (output: any, context: __SerdeContext): TelephonyChannelSubtypeConfig => {
  return take(output, {
    capacity: __limitedParseDouble,
    connectQueueId: __expectString,
    defaultOutboundConfig: _json,
    outboundMode: (_: any) => de_TelephonyOutboundMode(__expectUnion(_), context),
  }) as any;
};

// de_TelephonyOutboundConfig omitted.

/**
 * deserializeAws_restJson1TelephonyOutboundMode
 */
const de_TelephonyOutboundMode = (output: any, context: __SerdeContext): TelephonyOutboundMode => {
  if (output.agentless != null) {
    return {
      agentless: _json(output.agentless),
    };
  }
  if (output.predictive != null) {
    return {
      predictive: de_PredictiveConfig(output.predictive, context),
    };
  }
  if (output.preview != null) {
    return {
      preview: de_PreviewConfig(output.preview, context),
    };
  }
  if (output.progressive != null) {
    return {
      progressive: de_ProgressiveConfig(output.progressive, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_TimeoutConfig omitted.

// de_TimeRange omitted.

// de_TimeRangeList omitted.

// de_TimeWindow omitted.

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

const _c = "config";
const _cDP = "campaignDeletionPolicy";
const _cS = "channelSubtype";
const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
const _xAET = "xAmzErrorType";
const _xae = "x-amzn-errortype";
