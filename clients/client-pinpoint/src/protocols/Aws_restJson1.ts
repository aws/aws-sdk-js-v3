// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "../commands/CreateEmailTemplateCommand";
import { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "../commands/CreateExportJobCommand";
import { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "../commands/CreateImportJobCommand";
import {
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
} from "../commands/CreateInAppTemplateCommand";
import { CreateJourneyCommandInput, CreateJourneyCommandOutput } from "../commands/CreateJourneyCommand";
import { CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput } from "../commands/CreatePushTemplateCommand";
import {
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
} from "../commands/CreateRecommenderConfigurationCommand";
import { CreateSegmentCommandInput, CreateSegmentCommandOutput } from "../commands/CreateSegmentCommand";
import { CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput } from "../commands/CreateSmsTemplateCommand";
import {
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
} from "../commands/CreateVoiceTemplateCommand";
import { DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput } from "../commands/DeleteAdmChannelCommand";
import { DeleteApnsChannelCommandInput, DeleteApnsChannelCommandOutput } from "../commands/DeleteApnsChannelCommand";
import {
  DeleteApnsSandboxChannelCommandInput,
  DeleteApnsSandboxChannelCommandOutput,
} from "../commands/DeleteApnsSandboxChannelCommand";
import {
  DeleteApnsVoipChannelCommandInput,
  DeleteApnsVoipChannelCommandOutput,
} from "../commands/DeleteApnsVoipChannelCommand";
import {
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
} from "../commands/DeleteApnsVoipSandboxChannelCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import { DeleteBaiduChannelCommandInput, DeleteBaiduChannelCommandOutput } from "../commands/DeleteBaiduChannelCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import { DeleteEmailChannelCommandInput, DeleteEmailChannelCommandOutput } from "../commands/DeleteEmailChannelCommand";
import {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "../commands/DeleteEmailTemplateCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "../commands/DeleteEventStreamCommand";
import { DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput } from "../commands/DeleteGcmChannelCommand";
import {
  DeleteInAppTemplateCommandInput,
  DeleteInAppTemplateCommandOutput,
} from "../commands/DeleteInAppTemplateCommand";
import { DeleteJourneyCommandInput, DeleteJourneyCommandOutput } from "../commands/DeleteJourneyCommand";
import { DeletePushTemplateCommandInput, DeletePushTemplateCommandOutput } from "../commands/DeletePushTemplateCommand";
import {
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
} from "../commands/DeleteRecommenderConfigurationCommand";
import { DeleteSegmentCommandInput, DeleteSegmentCommandOutput } from "../commands/DeleteSegmentCommand";
import { DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput } from "../commands/DeleteSmsChannelCommand";
import { DeleteSmsTemplateCommandInput, DeleteSmsTemplateCommandOutput } from "../commands/DeleteSmsTemplateCommand";
import {
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
} from "../commands/DeleteUserEndpointsCommand";
import { DeleteVoiceChannelCommandInput, DeleteVoiceChannelCommandOutput } from "../commands/DeleteVoiceChannelCommand";
import {
  DeleteVoiceTemplateCommandInput,
  DeleteVoiceTemplateCommandOutput,
} from "../commands/DeleteVoiceTemplateCommand";
import { GetAdmChannelCommandInput, GetAdmChannelCommandOutput } from "../commands/GetAdmChannelCommand";
import { GetApnsChannelCommandInput, GetApnsChannelCommandOutput } from "../commands/GetApnsChannelCommand";
import {
  GetApnsSandboxChannelCommandInput,
  GetApnsSandboxChannelCommandOutput,
} from "../commands/GetApnsSandboxChannelCommand";
import { GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput } from "../commands/GetApnsVoipChannelCommand";
import {
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
} from "../commands/GetApnsVoipSandboxChannelCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "../commands/GetAppCommand";
import {
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
} from "../commands/GetApplicationDateRangeKpiCommand";
import {
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
} from "../commands/GetApplicationSettingsCommand";
import { GetAppsCommandInput, GetAppsCommandOutput } from "../commands/GetAppsCommand";
import { GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput } from "../commands/GetBaiduChannelCommand";
import {
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
} from "../commands/GetCampaignActivitiesCommand";
import { GetCampaignCommandInput, GetCampaignCommandOutput } from "../commands/GetCampaignCommand";
import {
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
} from "../commands/GetCampaignDateRangeKpiCommand";
import { GetCampaignsCommandInput, GetCampaignsCommandOutput } from "../commands/GetCampaignsCommand";
import { GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput } from "../commands/GetCampaignVersionCommand";
import {
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "../commands/GetCampaignVersionsCommand";
import { GetChannelsCommandInput, GetChannelsCommandOutput } from "../commands/GetChannelsCommand";
import { GetEmailChannelCommandInput, GetEmailChannelCommandOutput } from "../commands/GetEmailChannelCommand";
import { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "../commands/GetEmailTemplateCommand";
import { GetEndpointCommandInput, GetEndpointCommandOutput } from "../commands/GetEndpointCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "../commands/GetEventStreamCommand";
import { GetExportJobCommandInput, GetExportJobCommandOutput } from "../commands/GetExportJobCommand";
import { GetExportJobsCommandInput, GetExportJobsCommandOutput } from "../commands/GetExportJobsCommand";
import { GetGcmChannelCommandInput, GetGcmChannelCommandOutput } from "../commands/GetGcmChannelCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "../commands/GetImportJobCommand";
import { GetImportJobsCommandInput, GetImportJobsCommandOutput } from "../commands/GetImportJobsCommand";
import { GetInAppMessagesCommandInput, GetInAppMessagesCommandOutput } from "../commands/GetInAppMessagesCommand";
import { GetInAppTemplateCommandInput, GetInAppTemplateCommandOutput } from "../commands/GetInAppTemplateCommand";
import { GetJourneyCommandInput, GetJourneyCommandOutput } from "../commands/GetJourneyCommand";
import {
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
} from "../commands/GetJourneyDateRangeKpiCommand";
import {
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
} from "../commands/GetJourneyExecutionActivityMetricsCommand";
import {
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
} from "../commands/GetJourneyExecutionMetricsCommand";
import {
  GetJourneyRunExecutionActivityMetricsCommandInput,
  GetJourneyRunExecutionActivityMetricsCommandOutput,
} from "../commands/GetJourneyRunExecutionActivityMetricsCommand";
import {
  GetJourneyRunExecutionMetricsCommandInput,
  GetJourneyRunExecutionMetricsCommandOutput,
} from "../commands/GetJourneyRunExecutionMetricsCommand";
import { GetJourneyRunsCommandInput, GetJourneyRunsCommandOutput } from "../commands/GetJourneyRunsCommand";
import { GetPushTemplateCommandInput, GetPushTemplateCommandOutput } from "../commands/GetPushTemplateCommand";
import {
  GetRecommenderConfigurationCommandInput,
  GetRecommenderConfigurationCommandOutput,
} from "../commands/GetRecommenderConfigurationCommand";
import {
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
} from "../commands/GetRecommenderConfigurationsCommand";
import { GetSegmentCommandInput, GetSegmentCommandOutput } from "../commands/GetSegmentCommand";
import {
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
} from "../commands/GetSegmentExportJobsCommand";
import {
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
} from "../commands/GetSegmentImportJobsCommand";
import { GetSegmentsCommandInput, GetSegmentsCommandOutput } from "../commands/GetSegmentsCommand";
import { GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput } from "../commands/GetSegmentVersionCommand";
import { GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput } from "../commands/GetSegmentVersionsCommand";
import { GetSmsChannelCommandInput, GetSmsChannelCommandOutput } from "../commands/GetSmsChannelCommand";
import { GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput } from "../commands/GetSmsTemplateCommand";
import { GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput } from "../commands/GetUserEndpointsCommand";
import { GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput } from "../commands/GetVoiceChannelCommand";
import { GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput } from "../commands/GetVoiceTemplateCommand";
import { ListJourneysCommandInput, ListJourneysCommandOutput } from "../commands/ListJourneysCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import {
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "../commands/PhoneNumberValidateCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { PutEventStreamCommandInput, PutEventStreamCommandOutput } from "../commands/PutEventStreamCommand";
import { RemoveAttributesCommandInput, RemoveAttributesCommandOutput } from "../commands/RemoveAttributesCommand";
import { SendMessagesCommandInput, SendMessagesCommandOutput } from "../commands/SendMessagesCommand";
import { SendOTPMessageCommandInput, SendOTPMessageCommandOutput } from "../commands/SendOTPMessageCommand";
import { SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput } from "../commands/SendUsersMessagesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput } from "../commands/UpdateAdmChannelCommand";
import { UpdateApnsChannelCommandInput, UpdateApnsChannelCommandOutput } from "../commands/UpdateApnsChannelCommand";
import {
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
} from "../commands/UpdateApnsSandboxChannelCommand";
import {
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
} from "../commands/UpdateApnsVoipChannelCommand";
import {
  UpdateApnsVoipSandboxChannelCommandInput,
  UpdateApnsVoipSandboxChannelCommandOutput,
} from "../commands/UpdateApnsVoipSandboxChannelCommand";
import {
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "../commands/UpdateApplicationSettingsCommand";
import { UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput } from "../commands/UpdateBaiduChannelCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "../commands/UpdateCampaignCommand";
import { UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput } from "../commands/UpdateEmailChannelCommand";
import {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "../commands/UpdateEmailTemplateCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import {
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
} from "../commands/UpdateEndpointsBatchCommand";
import { UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput } from "../commands/UpdateGcmChannelCommand";
import {
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
} from "../commands/UpdateInAppTemplateCommand";
import { UpdateJourneyCommandInput, UpdateJourneyCommandOutput } from "../commands/UpdateJourneyCommand";
import { UpdateJourneyStateCommandInput, UpdateJourneyStateCommandOutput } from "../commands/UpdateJourneyStateCommand";
import { UpdatePushTemplateCommandInput, UpdatePushTemplateCommandOutput } from "../commands/UpdatePushTemplateCommand";
import {
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
} from "../commands/UpdateRecommenderConfigurationCommand";
import { UpdateSegmentCommandInput, UpdateSegmentCommandOutput } from "../commands/UpdateSegmentCommand";
import { UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput } from "../commands/UpdateSmsChannelCommand";
import { UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput } from "../commands/UpdateSmsTemplateCommand";
import {
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
} from "../commands/UpdateTemplateActiveVersionCommand";
import { UpdateVoiceChannelCommandInput, UpdateVoiceChannelCommandOutput } from "../commands/UpdateVoiceChannelCommand";
import {
  UpdateVoiceTemplateCommandInput,
  UpdateVoiceTemplateCommandOutput,
} from "../commands/UpdateVoiceTemplateCommand";
import { VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput } from "../commands/VerifyOTPMessageCommand";
import {
  __EndpointTypesElement,
  __TimezoneEstimationMethodsElement,
  Activity,
  AddressConfiguration,
  ADMChannelRequest,
  ADMMessage,
  AndroidPushNotificationTemplate,
  APNSChannelRequest,
  APNSMessage,
  APNSPushNotificationTemplate,
  APNSSandboxChannelRequest,
  APNSVoipChannelRequest,
  APNSVoipSandboxChannelRequest,
  ApplicationDateRangeKpiResponse,
  ApplicationResponse,
  ApplicationSettingsJourneyLimits,
  ApplicationsResponse,
  AttributeDimension,
  BadRequestException,
  BaiduChannelRequest,
  BaiduMessage,
  CampaignCustomMessage,
  CampaignDateRangeKpiResponse,
  CampaignEmailMessage,
  CampaignEventFilter,
  CampaignHook,
  CampaignInAppMessage,
  CampaignLimits,
  CampaignResponse,
  CampaignSmsMessage,
  CampaignsResponse,
  ClosedDays,
  ClosedDaysRule,
  Condition,
  ConditionalSplitActivity,
  ConflictException,
  ContactCenterActivity,
  CreateApplicationRequest,
  CreateRecommenderConfigurationShape,
  CustomDeliveryConfiguration,
  CustomMessageActivity,
  DefaultButtonConfiguration,
  DefaultMessage,
  DefaultPushNotificationMessage,
  DefaultPushNotificationTemplate,
  DirectMessageConfiguration,
  EmailChannelRequest,
  EmailMessage,
  EmailMessageActivity,
  EmailTemplateRequest,
  EmailTemplateResponse,
  EndpointBatchItem,
  EndpointBatchRequest,
  EndpointDemographic,
  EndpointLocation,
  EndpointRequest,
  EndpointResponse,
  EndpointSendConfiguration,
  EndpointsResponse,
  EndpointUser,
  Event,
  EventCondition,
  EventDimensions,
  EventFilter,
  EventsBatch,
  EventsRequest,
  EventStartCondition,
  ExportJobRequest,
  ForbiddenException,
  GCMChannelRequest,
  GCMMessage,
  GPSCoordinates,
  GPSPointDimension,
  HoldoutActivity,
  ImportJobRequest,
  InAppMessageBodyConfig,
  InAppMessageButton,
  InAppMessageContent,
  InAppMessageHeaderConfig,
  InAppTemplateRequest,
  InternalServerErrorException,
  JourneyChannelSettings,
  JourneyCustomMessage,
  JourneyEmailMessage,
  JourneyLimits,
  JourneyPushMessage,
  JourneyResponse,
  JourneySchedule,
  JourneySMSMessage,
  JourneyTimeframeCap,
  Message,
  MessageConfiguration,
  MethodNotAllowedException,
  MetricDimension,
  MultiConditionalBranch,
  MultiConditionalSplitActivity,
  NotFoundException,
  OpenHours,
  OpenHoursRule,
  OverrideButtonConfiguration,
  PayloadTooLargeException,
  PublicEndpoint,
  PushMessageActivity,
  PushNotificationTemplateRequest,
  QuietTime,
  RandomSplitActivity,
  RandomSplitEntry,
  RawEmail,
  RecencyDimension,
  Schedule,
  SegmentBehaviors,
  SegmentCondition,
  SegmentDemographics,
  SegmentDimensions,
  SegmentGroup,
  SegmentGroupList,
  SegmentLocation,
  SegmentReference,
  SegmentResponse,
  Session,
  SetDimension,
  SimpleCondition,
  SimpleEmail,
  SimpleEmailPart,
  SMSMessage,
  SMSMessageActivity,
  SMSTemplateRequest,
  StartCondition,
  Template,
  TemplateConfiguration,
  TooManyRequestsException,
  TreatmentResource,
  VoiceMessage,
  VoiceTemplateRequest,
  WaitActivity,
  WaitTime,
  WriteCampaignRequest,
  WriteJourneyRequest,
  WriteSegmentRequest,
  WriteTreatmentResource,
} from "../models/models_0";
import {
  InAppCampaignSchedule,
  InAppMessageCampaign,
  InAppMessagesResponse,
  InAppTemplateResponse,
  JourneyDateRangeKpiResponse,
  JourneysResponse,
  JourneyStateRequest,
  MessageRequest,
  NumberValidateRequest,
  PushNotificationTemplateResponse,
  SegmentsResponse,
  SendOTPMessageRequestParameters,
  SendUsersMessageRequest,
  SMSChannelRequest,
  SMSTemplateResponse,
  TagsModel,
  TemplateActiveVersionRequest,
  TemplateResponse,
  TemplatesResponse,
  UpdateAttributesRequest,
  UpdateRecommenderConfigurationShape,
  VerifyOTPMessageRequestParameters,
  VoiceChannelRequest,
  VoiceTemplateResponse,
  WriteApplicationSettingsRequest,
  WriteEventStream,
} from "../models/models_1";
import { PinpointServiceException as __BaseException } from "../models/PinpointServiceException";

/**
 * serializeAws_restJson1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps";
  let body: any;
  if (input.CreateApplicationRequest !== undefined) {
    body = se_CreateApplicationRequest(input.CreateApplicationRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/campaigns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = se_WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateEmailTemplateCommand
 */
export const se_CreateEmailTemplateCommand = async (
  input: CreateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = se_EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateExportJobCommand
 */
export const se_CreateExportJobCommand = async (
  input: CreateExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/jobs/export";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.ExportJobRequest !== undefined) {
    body = _json(input.ExportJobRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateImportJobCommand
 */
export const se_CreateImportJobCommand = async (
  input: CreateImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/jobs/import";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.ImportJobRequest !== undefined) {
    body = _json(input.ImportJobRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateInAppTemplateCommand
 */
export const se_CreateInAppTemplateCommand = async (
  input: CreateInAppTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/inapp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  if (input.InAppTemplateRequest !== undefined) {
    body = se_InAppTemplateRequest(input.InAppTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateJourneyCommand
 */
export const se_CreateJourneyCommand = async (
  input: CreateJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/journeys";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = se_WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreatePushTemplateCommand
 */
export const se_CreatePushTemplateCommand = async (
  input: CreatePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/push";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = se_PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateRecommenderConfigurationCommand
 */
export const se_CreateRecommenderConfigurationCommand = async (
  input: CreateRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/recommenders";
  let body: any;
  if (input.CreateRecommenderConfiguration !== undefined) {
    body = _json(input.CreateRecommenderConfiguration);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateSegmentCommand
 */
export const se_CreateSegmentCommand = async (
  input: CreateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/segments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = se_WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateSmsTemplateCommand
 */
export const se_CreateSmsTemplateCommand = async (
  input: CreateSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = se_SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1CreateVoiceTemplateCommand
 */
export const se_CreateVoiceTemplateCommand = async (
  input: CreateVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = se_VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1DeleteAdmChannelCommand
 */
export const se_DeleteAdmChannelCommand = async (
  input: DeleteAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/adm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApnsChannelCommand
 */
export const se_DeleteApnsChannelCommand = async (
  input: DeleteApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/apns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApnsSandboxChannelCommand
 */
export const se_DeleteApnsSandboxChannelCommand = async (
  input: DeleteApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApnsVoipChannelCommand
 */
export const se_DeleteApnsVoipChannelCommand = async (
  input: DeleteApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand
 */
export const se_DeleteApnsVoipSandboxChannelCommand = async (
  input: DeleteApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBaiduChannelCommand
 */
export const se_DeleteBaiduChannelCommand = async (
  input: DeleteBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/baidu";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteEmailChannelCommand
 */
export const se_DeleteEmailChannelCommand = async (
  input: DeleteEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteEmailTemplateCommand
 */
export const se_DeleteEmailTemplateCommand = async (
  input: DeleteEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteEventStreamCommand
 */
export const se_DeleteEventStreamCommand = async (
  input: DeleteEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/eventstream";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteGcmChannelCommand
 */
export const se_DeleteGcmChannelCommand = async (
  input: DeleteGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/gcm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInAppTemplateCommand
 */
export const se_DeleteInAppTemplateCommand = async (
  input: DeleteInAppTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/inapp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1DeleteJourneyCommand
 */
export const se_DeleteJourneyCommand = async (
  input: DeleteJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePushTemplateCommand
 */
export const se_DeletePushTemplateCommand = async (
  input: DeletePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/push";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1DeleteRecommenderConfigurationCommand
 */
export const se_DeleteRecommenderConfigurationCommand = async (
  input: DeleteRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/recommenders/{RecommenderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecommenderId",
    () => input.RecommenderId!,
    "{RecommenderId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSegmentCommand
 */
export const se_DeleteSegmentCommand = async (
  input: DeleteSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSmsChannelCommand
 */
export const se_DeleteSmsChannelCommand = async (
  input: DeleteSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSmsTemplateCommand
 */
export const se_DeleteSmsTemplateCommand = async (
  input: DeleteSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1DeleteUserEndpointsCommand
 */
export const se_DeleteUserEndpointsCommand = async (
  input: DeleteUserEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/users/{UserId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVoiceChannelCommand
 */
export const se_DeleteVoiceChannelCommand = async (
  input: DeleteVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVoiceTemplateCommand
 */
export const se_DeleteVoiceTemplateCommand = async (
  input: DeleteVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1GetAdmChannelCommand
 */
export const se_GetAdmChannelCommand = async (
  input: GetAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/adm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetApnsChannelCommand
 */
export const se_GetApnsChannelCommand = async (
  input: GetApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/apns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetApnsSandboxChannelCommand
 */
export const se_GetApnsSandboxChannelCommand = async (
  input: GetApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetApnsVoipChannelCommand
 */
export const se_GetApnsVoipChannelCommand = async (
  input: GetApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetApnsVoipSandboxChannelCommand
 */
export const se_GetApnsVoipSandboxChannelCommand = async (
  input: GetApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetAppCommand
 */
export const se_GetAppCommand = async (input: GetAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetApplicationDateRangeKpiCommand
 */
export const se_GetApplicationDateRangeKpiCommand = async (
  input: GetApplicationDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "KpiName", () => input.KpiName!, "{KpiName}", false);
  const query: any = map({
    "end-time": [() => input.EndTime !== void 0, () => (input.EndTime!.toISOString().split(".")[0] + "Z").toString()],
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
    "start-time": [
      () => input.StartTime !== void 0,
      () => (input.StartTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
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
 * serializeAws_restJson1GetApplicationSettingsCommand
 */
export const se_GetApplicationSettingsCommand = async (
  input: GetApplicationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetAppsCommand
 */
export const se_GetAppsCommand = async (
  input: GetAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps";
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetBaiduChannelCommand
 */
export const se_GetBaiduChannelCommand = async (
  input: GetBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/baidu";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetCampaignCommand
 */
export const se_GetCampaignCommand = async (
  input: GetCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
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
 * serializeAws_restJson1GetCampaignActivitiesCommand
 */
export const se_GetCampaignActivitiesCommand = async (
  input: GetCampaignActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetCampaignDateRangeKpiCommand
 */
export const se_GetCampaignDateRangeKpiCommand = async (
  input: GetCampaignDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "KpiName", () => input.KpiName!, "{KpiName}", false);
  const query: any = map({
    "end-time": [() => input.EndTime !== void 0, () => (input.EndTime!.toISOString().split(".")[0] + "Z").toString()],
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
    "start-time": [
      () => input.StartTime !== void 0,
      () => (input.StartTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
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
 * serializeAws_restJson1GetCampaignsCommand
 */
export const se_GetCampaignsCommand = async (
  input: GetCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/campaigns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetCampaignVersionCommand
 */
export const se_GetCampaignVersionCommand = async (
  input: GetCampaignVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Version", () => input.Version!, "{Version}", false);
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
 * serializeAws_restJson1GetCampaignVersionsCommand
 */
export const se_GetCampaignVersionsCommand = async (
  input: GetCampaignVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetChannelsCommand
 */
export const se_GetChannelsCommand = async (
  input: GetChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetEmailChannelCommand
 */
export const se_GetEmailChannelCommand = async (
  input: GetEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetEmailTemplateCommand
 */
export const se_GetEmailTemplateCommand = async (
  input: GetEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1GetEndpointCommand
 */
export const se_GetEndpointCommand = async (
  input: GetEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
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
 * serializeAws_restJson1GetEventStreamCommand
 */
export const se_GetEventStreamCommand = async (
  input: GetEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/eventstream";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetExportJobCommand
 */
export const se_GetExportJobCommand = async (
  input: GetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/jobs/export/{JobId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1GetExportJobsCommand
 */
export const se_GetExportJobsCommand = async (
  input: GetExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/jobs/export";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetGcmChannelCommand
 */
export const se_GetGcmChannelCommand = async (
  input: GetGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/gcm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetImportJobCommand
 */
export const se_GetImportJobCommand = async (
  input: GetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/jobs/import/{JobId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JobId", () => input.JobId!, "{JobId}", false);
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
 * serializeAws_restJson1GetImportJobsCommand
 */
export const se_GetImportJobsCommand = async (
  input: GetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/jobs/import";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetInAppMessagesCommand
 */
export const se_GetInAppMessagesCommand = async (
  input: GetInAppMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/endpoints/{EndpointId}/inappmessages";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
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
 * serializeAws_restJson1GetInAppTemplateCommand
 */
export const se_GetInAppTemplateCommand = async (
  input: GetInAppTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/inapp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1GetJourneyCommand
 */
export const se_GetJourneyCommand = async (
  input: GetJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
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
 * serializeAws_restJson1GetJourneyDateRangeKpiCommand
 */
export const se_GetJourneyDateRangeKpiCommand = async (
  input: GetJourneyDateRangeKpiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "KpiName", () => input.KpiName!, "{KpiName}", false);
  const query: any = map({
    "end-time": [() => input.EndTime !== void 0, () => (input.EndTime!.toISOString().split(".")[0] + "Z").toString()],
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
    "start-time": [
      () => input.StartTime !== void 0,
      () => (input.StartTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
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
 * serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand
 */
export const se_GetJourneyExecutionActivityMetricsCommand = async (
  input: GetJourneyExecutionActivityMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "JourneyActivityId",
    () => input.JourneyActivityId!,
    "{JourneyActivityId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
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
 * serializeAws_restJson1GetJourneyExecutionMetricsCommand
 */
export const se_GetJourneyExecutionMetricsCommand = async (
  input: GetJourneyExecutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
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
 * serializeAws_restJson1GetJourneyRunExecutionActivityMetricsCommand
 */
export const se_GetJourneyRunExecutionActivityMetricsCommand = async (
  input: GetJourneyRunExecutionActivityMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/activities/{JourneyActivityId}/execution-metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "JourneyActivityId",
    () => input.JourneyActivityId!,
    "{JourneyActivityId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RunId", () => input.RunId!, "{RunId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
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
 * serializeAws_restJson1GetJourneyRunExecutionMetricsCommand
 */
export const se_GetJourneyRunExecutionMetricsCommand = async (
  input: GetJourneyRunExecutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs/{RunId}/execution-metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "RunId", () => input.RunId!, "{RunId}", false);
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
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
 * serializeAws_restJson1GetJourneyRunsCommand
 */
export const se_GetJourneyRunsCommand = async (
  input: GetJourneyRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/runs";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetPushTemplateCommand
 */
export const se_GetPushTemplateCommand = async (
  input: GetPushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/push";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1GetRecommenderConfigurationCommand
 */
export const se_GetRecommenderConfigurationCommand = async (
  input: GetRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/recommenders/{RecommenderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecommenderId",
    () => input.RecommenderId!,
    "{RecommenderId}",
    false
  );
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
 * serializeAws_restJson1GetRecommenderConfigurationsCommand
 */
export const se_GetRecommenderConfigurationsCommand = async (
  input: GetRecommenderConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/recommenders";
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetSegmentCommand
 */
export const se_GetSegmentCommand = async (
  input: GetSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
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
 * serializeAws_restJson1GetSegmentExportJobsCommand
 */
export const se_GetSegmentExportJobsCommand = async (
  input: GetSegmentExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetSegmentImportJobsCommand
 */
export const se_GetSegmentImportJobsCommand = async (
  input: GetSegmentImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetSegmentsCommand
 */
export const se_GetSegmentsCommand = async (
  input: GetSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/segments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetSegmentVersionCommand
 */
export const se_GetSegmentVersionCommand = async (
  input: GetSegmentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Version", () => input.Version!, "{Version}", false);
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
 * serializeAws_restJson1GetSegmentVersionsCommand
 */
export const se_GetSegmentVersionsCommand = async (
  input: GetSegmentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1GetSmsChannelCommand
 */
export const se_GetSmsChannelCommand = async (
  input: GetSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetSmsTemplateCommand
 */
export const se_GetSmsTemplateCommand = async (
  input: GetSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1GetUserEndpointsCommand
 */
export const se_GetUserEndpointsCommand = async (
  input: GetUserEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/users/{UserId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "UserId", () => input.UserId!, "{UserId}", false);
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
 * serializeAws_restJson1GetVoiceChannelCommand
 */
export const se_GetVoiceChannelCommand = async (
  input: GetVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
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
 * serializeAws_restJson1GetVoiceTemplateCommand
 */
export const se_GetVoiceTemplateCommand = async (
  input: GetVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    version: [, input.Version!],
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
 * serializeAws_restJson1ListJourneysCommand
 */
export const se_ListJourneysCommand = async (
  input: ListJourneysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/journeys";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  const query: any = map({
    "page-size": [, input.PageSize!],
    token: [, input.Token!],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates";
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
    prefix: [, input.Prefix!],
    "template-type": [, input.TemplateType!],
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
 * serializeAws_restJson1ListTemplateVersionsCommand
 */
export const se_ListTemplateVersionsCommand = async (
  input: ListTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/templates/{TemplateName}/{TemplateType}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateType",
    () => input.TemplateType!,
    "{TemplateType}",
    false
  );
  const query: any = map({
    "next-token": [, input.NextToken!],
    "page-size": [, input.PageSize!],
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
 * serializeAws_restJson1PhoneNumberValidateCommand
 */
export const se_PhoneNumberValidateCommand = async (
  input: PhoneNumberValidateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/phone/number/validate";
  let body: any;
  if (input.NumberValidateRequest !== undefined) {
    body = _json(input.NumberValidateRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1PutEventsCommand
 */
export const se_PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/events";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.EventsRequest !== undefined) {
    body = se_EventsRequest(input.EventsRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1PutEventStreamCommand
 */
export const se_PutEventStreamCommand = async (
  input: PutEventStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/eventstream";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.WriteEventStream !== undefined) {
    body = _json(input.WriteEventStream);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1RemoveAttributesCommand
 */
export const se_RemoveAttributesCommand = async (
  input: RemoveAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/attributes/{AttributeType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AttributeType",
    () => input.AttributeType!,
    "{AttributeType}",
    false
  );
  let body: any;
  if (input.UpdateAttributesRequest !== undefined) {
    body = _json(input.UpdateAttributesRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SendMessagesCommand
 */
export const se_SendMessagesCommand = async (
  input: SendMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/messages";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.MessageRequest !== undefined) {
    body = se_MessageRequest(input.MessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1SendOTPMessageCommand
 */
export const se_SendOTPMessageCommand = async (
  input: SendOTPMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/otp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.SendOTPMessageRequestParameters !== undefined) {
    body = _json(input.SendOTPMessageRequestParameters);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1SendUsersMessagesCommand
 */
export const se_SendUsersMessagesCommand = async (
  input: SendUsersMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/users-messages";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.SendUsersMessageRequest !== undefined) {
    body = se_SendUsersMessageRequest(input.SendUsersMessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  if (input.TagsModel !== undefined) {
    body = se_TagsModel(input.TagsModel, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateAdmChannelCommand
 */
export const se_UpdateAdmChannelCommand = async (
  input: UpdateAdmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/adm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.ADMChannelRequest !== undefined) {
    body = _json(input.ADMChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApnsChannelCommand
 */
export const se_UpdateApnsChannelCommand = async (
  input: UpdateApnsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/apns";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.APNSChannelRequest !== undefined) {
    body = _json(input.APNSChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApnsSandboxChannelCommand
 */
export const se_UpdateApnsSandboxChannelCommand = async (
  input: UpdateApnsSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.APNSSandboxChannelRequest !== undefined) {
    body = _json(input.APNSSandboxChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApnsVoipChannelCommand
 */
export const se_UpdateApnsVoipChannelCommand = async (
  input: UpdateApnsVoipChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.APNSVoipChannelRequest !== undefined) {
    body = _json(input.APNSVoipChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand
 */
export const se_UpdateApnsVoipSandboxChannelCommand = async (
  input: UpdateApnsVoipSandboxChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.APNSVoipSandboxChannelRequest !== undefined) {
    body = _json(input.APNSVoipSandboxChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateApplicationSettingsCommand
 */
export const se_UpdateApplicationSettingsCommand = async (
  input: UpdateApplicationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/settings";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.WriteApplicationSettingsRequest !== undefined) {
    body = _json(input.WriteApplicationSettingsRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBaiduChannelCommand
 */
export const se_UpdateBaiduChannelCommand = async (
  input: UpdateBaiduChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/baidu";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.BaiduChannelRequest !== undefined) {
    body = _json(input.BaiduChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateCampaignCommand
 */
export const se_UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "CampaignId", () => input.CampaignId!, "{CampaignId}", false);
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = se_WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEmailChannelCommand
 */
export const se_UpdateEmailChannelCommand = async (
  input: UpdateEmailChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.EmailChannelRequest !== undefined) {
    body = _json(input.EmailChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEmailTemplateCommand
 */
export const se_UpdateEmailTemplateCommand = async (
  input: UpdateEmailTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/email";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    "create-new-version": [() => input.CreateNewVersion !== void 0, () => input.CreateNewVersion!.toString()],
    version: [, input.Version!],
  });
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = se_EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "EndpointId", () => input.EndpointId!, "{EndpointId}", false);
  let body: any;
  if (input.EndpointRequest !== undefined) {
    body = se_EndpointRequest(input.EndpointRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEndpointsBatchCommand
 */
export const se_UpdateEndpointsBatchCommand = async (
  input: UpdateEndpointsBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/endpoints";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.EndpointBatchRequest !== undefined) {
    body = se_EndpointBatchRequest(input.EndpointBatchRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGcmChannelCommand
 */
export const se_UpdateGcmChannelCommand = async (
  input: UpdateGcmChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/gcm";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.GCMChannelRequest !== undefined) {
    body = _json(input.GCMChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateInAppTemplateCommand
 */
export const se_UpdateInAppTemplateCommand = async (
  input: UpdateInAppTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/inapp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    "create-new-version": [() => input.CreateNewVersion !== void 0, () => input.CreateNewVersion!.toString()],
    version: [, input.Version!],
  });
  let body: any;
  if (input.InAppTemplateRequest !== undefined) {
    body = se_InAppTemplateRequest(input.InAppTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateJourneyCommand
 */
export const se_UpdateJourneyCommand = async (
  input: UpdateJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = se_WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateJourneyStateCommand
 */
export const se_UpdateJourneyStateCommand = async (
  input: UpdateJourneyStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "JourneyId", () => input.JourneyId!, "{JourneyId}", false);
  let body: any;
  if (input.JourneyStateRequest !== undefined) {
    body = _json(input.JourneyStateRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePushTemplateCommand
 */
export const se_UpdatePushTemplateCommand = async (
  input: UpdatePushTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/push";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    "create-new-version": [() => input.CreateNewVersion !== void 0, () => input.CreateNewVersion!.toString()],
    version: [, input.Version!],
  });
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = se_PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateRecommenderConfigurationCommand
 */
export const se_UpdateRecommenderConfigurationCommand = async (
  input: UpdateRecommenderConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/recommenders/{RecommenderId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecommenderId",
    () => input.RecommenderId!,
    "{RecommenderId}",
    false
  );
  let body: any;
  if (input.UpdateRecommenderConfiguration !== undefined) {
    body = _json(input.UpdateRecommenderConfiguration);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSegmentCommand
 */
export const se_UpdateSegmentCommand = async (
  input: UpdateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SegmentId", () => input.SegmentId!, "{SegmentId}", false);
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = se_WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSmsChannelCommand
 */
export const se_UpdateSmsChannelCommand = async (
  input: UpdateSmsChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.SMSChannelRequest !== undefined) {
    body = _json(input.SMSChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSmsTemplateCommand
 */
export const se_UpdateSmsTemplateCommand = async (
  input: UpdateSmsTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/sms";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    "create-new-version": [() => input.CreateNewVersion !== void 0, () => input.CreateNewVersion!.toString()],
    version: [, input.Version!],
  });
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = se_SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTemplateActiveVersionCommand
 */
export const se_UpdateTemplateActiveVersionCommand = async (
  input: UpdateTemplateActiveVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/templates/{TemplateName}/{TemplateType}/active-version";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateType",
    () => input.TemplateType!,
    "{TemplateType}",
    false
  );
  let body: any;
  if (input.TemplateActiveVersionRequest !== undefined) {
    body = _json(input.TemplateActiveVersionRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVoiceChannelCommand
 */
export const se_UpdateVoiceChannelCommand = async (
  input: UpdateVoiceChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/channels/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.VoiceChannelRequest !== undefined) {
    body = _json(input.VoiceChannelRequest);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVoiceTemplateCommand
 */
export const se_UpdateVoiceTemplateCommand = async (
  input: UpdateVoiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/templates/{TemplateName}/voice";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "TemplateName",
    () => input.TemplateName!,
    "{TemplateName}",
    false
  );
  const query: any = map({
    "create-new-version": [() => input.CreateNewVersion !== void 0, () => input.CreateNewVersion!.toString()],
    version: [, input.Version!],
  });
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = se_VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1VerifyOTPMessageCommand
 */
export const se_VerifyOTPMessageCommand = async (
  input: VerifyOTPMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/apps/{ApplicationId}/verify-otp";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ApplicationId",
    () => input.ApplicationId!,
    "{ApplicationId}",
    false
  );
  let body: any;
  if (input.VerifyOTPMessageRequestParameters !== undefined) {
    body = _json(input.VerifyOTPMessageRequestParameters);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * deserializeAws_restJson1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = de_ApplicationResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateCampaignCommand
 */
export const de_CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = de_CampaignResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCampaignCommandError
 */
const de_CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateEmailTemplateCommand
 */
export const de_CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEmailTemplateCommandError
 */
const de_CreateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateExportJobCommand
 */
export const de_CreateExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateExportJobCommandError
 */
const de_CreateExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateImportJobCommand
 */
export const de_CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateImportJobCommandError
 */
const de_CreateImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateInAppTemplateCommand
 */
export const de_CreateInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInAppTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplateCreateMessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInAppTemplateCommandError
 */
const de_CreateInAppTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInAppTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateJourneyCommand
 */
export const de_CreateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = de_JourneyResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJourneyCommandError
 */
const de_CreateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreatePushTemplateCommand
 */
export const de_CreatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreatePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePushTemplateCommandError
 */
const de_CreatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateRecommenderConfigurationCommand
 */
export const de_CreateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRecommenderConfigurationCommandError
 */
const de_CreateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSegmentCommand
 */
export const de_CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = de_SegmentResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSegmentCommandError
 */
const de_CreateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSmsTemplateCommand
 */
export const de_CreateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSmsTemplateCommandError
 */
const de_CreateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateVoiceTemplateCommand
 */
export const de_CreateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVoiceTemplateCommandError
 */
const de_CreateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAdmChannelCommand
 */
export const de_DeleteAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAdmChannelCommandError
 */
const de_DeleteAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApnsChannelCommand
 */
export const de_DeleteApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApnsChannelCommandError
 */
const de_DeleteApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApnsSandboxChannelCommand
 */
export const de_DeleteApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApnsSandboxChannelCommandError
 */
const de_DeleteApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApnsVoipChannelCommand
 */
export const de_DeleteApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApnsVoipChannelCommandError
 */
const de_DeleteApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand
 */
export const de_DeleteApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError
 */
const de_DeleteApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = de_ApplicationResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteBaiduChannelCommand
 */
export const de_DeleteBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBaiduChannelCommandError
 */
const de_DeleteBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteCampaignCommand
 */
export const de_DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = de_CampaignResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCampaignCommandError
 */
const de_DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEmailChannelCommand
 */
export const de_DeleteEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailChannelCommandError
 */
const de_DeleteEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEmailTemplateCommand
 */
export const de_DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEmailTemplateCommandError
 */
const de_DeleteEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointResponse = de_EndpointResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEventStreamCommand
 */
export const de_DeleteEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventStreamCommandError
 */
const de_DeleteEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteGcmChannelCommand
 */
export const de_DeleteGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGcmChannelCommandError
 */
const de_DeleteGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInAppTemplateCommand
 */
export const de_DeleteInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInAppTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInAppTemplateCommandError
 */
const de_DeleteInAppTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInAppTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteJourneyCommand
 */
export const de_DeleteJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = de_JourneyResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteJourneyCommandError
 */
const de_DeleteJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeletePushTemplateCommand
 */
export const de_DeletePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePushTemplateCommandError
 */
const de_DeletePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRecommenderConfigurationCommand
 */
export const de_DeleteRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecommenderConfigurationCommandError
 */
const de_DeleteRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSegmentCommand
 */
export const de_DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = de_SegmentResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSegmentCommandError
 */
const de_DeleteSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSmsChannelCommand
 */
export const de_DeleteSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSmsChannelCommandError
 */
const de_DeleteSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSmsTemplateCommand
 */
export const de_DeleteSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSmsTemplateCommandError
 */
const de_DeleteSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteUserEndpointsCommand
 */
export const de_DeleteUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointsResponse = de_EndpointsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUserEndpointsCommandError
 */
const de_DeleteUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteVoiceChannelCommand
 */
export const de_DeleteVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceChannelCommandError
 */
const de_DeleteVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteVoiceTemplateCommand
 */
export const de_DeleteVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVoiceTemplateCommandError
 */
const de_DeleteVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAdmChannelCommand
 */
export const de_GetAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetAdmChannelCommandError
 */
const de_GetAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApnsChannelCommand
 */
export const de_GetApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetApnsChannelCommandError
 */
const de_GetApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApnsSandboxChannelCommand
 */
export const de_GetApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetApnsSandboxChannelCommandError
 */
const de_GetApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApnsVoipChannelCommand
 */
export const de_GetApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetApnsVoipChannelCommandError
 */
const de_GetApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApnsVoipSandboxChannelCommand
 */
export const de_GetApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError
 */
const de_GetApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAppCommand
 */
export const de_GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = de_ApplicationResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppCommandError
 */
const de_GetAppCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApplicationDateRangeKpiCommand
 */
export const de_GetApplicationDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationDateRangeKpiResponse = de_ApplicationDateRangeKpiResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationDateRangeKpiCommandError
 */
const de_GetApplicationDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetApplicationSettingsCommand
 */
export const de_GetApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetApplicationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationSettingsResource = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationSettingsCommandError
 */
const de_GetApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAppsCommand
 */
export const de_GetAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationsResponse = de_ApplicationsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAppsCommandError
 */
const de_GetAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetBaiduChannelCommand
 */
export const de_GetBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetBaiduChannelCommandError
 */
const de_GetBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignCommand
 */
export const de_GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = de_CampaignResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignCommandError
 */
const de_GetCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignActivitiesCommand
 */
export const de_GetCampaignActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignActivitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ActivitiesResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignActivitiesCommandError
 */
const de_GetCampaignActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignDateRangeKpiCommand
 */
export const de_GetCampaignDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignDateRangeKpiResponse = de_CampaignDateRangeKpiResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignDateRangeKpiCommandError
 */
const de_GetCampaignDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignsCommand
 */
export const de_GetCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignsResponse = de_CampaignsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignsCommandError
 */
const de_GetCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignVersionCommand
 */
export const de_GetCampaignVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = de_CampaignResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignVersionCommandError
 */
const de_GetCampaignVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCampaignVersionsCommand
 */
export const de_GetCampaignVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCampaignVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignsResponse = de_CampaignsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCampaignVersionsCommandError
 */
const de_GetCampaignVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetChannelsCommand
 */
export const de_GetChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ChannelsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetChannelsCommandError
 */
const de_GetChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEmailChannelCommand
 */
export const de_GetEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailChannelCommandError
 */
const de_GetEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEmailTemplateCommand
 */
export const de_GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailTemplateResponse = de_EmailTemplateResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetEmailTemplateCommandError
 */
const de_GetEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEndpointCommand
 */
export const de_GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointResponse = de_EndpointResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetEndpointCommandError
 */
const de_GetEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEventStreamCommand
 */
export const de_GetEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventStreamCommandError
 */
const de_GetEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetExportJobCommand
 */
export const de_GetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetExportJobCommandError
 */
const de_GetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetExportJobsCommand
 */
export const de_GetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetExportJobsCommandError
 */
const de_GetExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetGcmChannelCommand
 */
export const de_GetGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetGcmChannelCommandError
 */
const de_GetGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImportJobCommand
 */
export const de_GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportJobCommandError
 */
const de_GetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImportJobsCommand
 */
export const de_GetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportJobsCommandError
 */
const de_GetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInAppMessagesCommand
 */
export const de_GetInAppMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInAppMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InAppMessagesResponse = de_InAppMessagesResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetInAppMessagesCommandError
 */
const de_GetInAppMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInAppTemplateCommand
 */
export const de_GetInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InAppTemplateResponse = de_InAppTemplateResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetInAppTemplateCommandError
 */
const de_GetInAppTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyCommand
 */
export const de_GetJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = de_JourneyResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyCommandError
 */
const de_GetJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyDateRangeKpiCommand
 */
export const de_GetJourneyDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyDateRangeKpiResponse = de_JourneyDateRangeKpiResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyDateRangeKpiCommandError
 */
const de_GetJourneyDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand
 */
export const de_GetJourneyExecutionActivityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyExecutionActivityMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyExecutionActivityMetricsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError
 */
const de_GetJourneyExecutionActivityMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyExecutionMetricsCommand
 */
export const de_GetJourneyExecutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyExecutionMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyExecutionMetricsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyExecutionMetricsCommandError
 */
const de_GetJourneyExecutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyRunExecutionActivityMetricsCommand
 */
export const de_GetJourneyRunExecutionActivityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunExecutionActivityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyRunExecutionActivityMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyRunExecutionActivityMetricsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyRunExecutionActivityMetricsCommandError
 */
const de_GetJourneyRunExecutionActivityMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunExecutionActivityMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyRunExecutionMetricsCommand
 */
export const de_GetJourneyRunExecutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunExecutionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyRunExecutionMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyRunExecutionMetricsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyRunExecutionMetricsCommandError
 */
const de_GetJourneyRunExecutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunExecutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetJourneyRunsCommand
 */
export const de_GetJourneyRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJourneyRunsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyRunsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetJourneyRunsCommandError
 */
const de_GetJourneyRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPushTemplateCommand
 */
export const de_GetPushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PushNotificationTemplateResponse = de_PushNotificationTemplateResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetPushTemplateCommandError
 */
const de_GetPushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRecommenderConfigurationCommand
 */
export const de_GetRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommenderConfigurationCommandError
 */
const de_GetRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRecommenderConfigurationsCommand
 */
export const de_GetRecommenderConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommenderConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ListRecommenderConfigurationsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommenderConfigurationsCommandError
 */
const de_GetRecommenderConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentCommand
 */
export const de_GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = de_SegmentResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentCommandError
 */
const de_GetSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentExportJobsCommand
 */
export const de_GetSegmentExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentExportJobsCommandError
 */
const de_GetSegmentExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentImportJobsCommand
 */
export const de_GetSegmentImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentImportJobsCommandError
 */
const de_GetSegmentImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentsCommand
 */
export const de_GetSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentsResponse = de_SegmentsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentsCommandError
 */
const de_GetSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentVersionCommand
 */
export const de_GetSegmentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = de_SegmentResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentVersionCommandError
 */
const de_GetSegmentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentVersionsCommand
 */
export const de_GetSegmentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentsResponse = de_SegmentsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentVersionsCommandError
 */
const de_GetSegmentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSmsChannelCommand
 */
export const de_GetSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetSmsChannelCommandError
 */
const de_GetSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSmsTemplateCommand
 */
export const de_GetSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSTemplateResponse = de_SMSTemplateResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetSmsTemplateCommandError
 */
const de_GetSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetUserEndpointsCommand
 */
export const de_GetUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointsResponse = de_EndpointsResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetUserEndpointsCommandError
 */
const de_GetUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetVoiceChannelCommand
 */
export const de_GetVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceChannelCommandError
 */
const de_GetVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetVoiceTemplateCommand
 */
export const de_GetVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceTemplateResponse = de_VoiceTemplateResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetVoiceTemplateCommandError
 */
const de_GetVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListJourneysCommand
 */
export const de_ListJourneysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJourneysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneysResponse = de_JourneysResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListJourneysCommandError
 */
const de_ListJourneysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TagsModel = de_TagsModel(data, context);
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplatesResponse = de_TemplatesResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommandError
 */
const de_ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTemplateVersionsCommand
 */
export const de_ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplateVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplateVersionsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplateVersionsCommandError
 */
const de_ListTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PhoneNumberValidateCommand
 */
export const de_PhoneNumberValidateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PhoneNumberValidateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.NumberValidateResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1PhoneNumberValidateCommandError
 */
const de_PhoneNumberValidateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutEventsCommand
 */
export const de_PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_PutEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventsResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1PutEventsCommandError
 */
const de_PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutEventStreamCommand
 */
export const de_PutEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1PutEventStreamCommandError
 */
const de_PutEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RemoveAttributesCommand
 */
export const de_RemoveAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.AttributesResource = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveAttributesCommandError
 */
const de_RemoveAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendMessagesCommand
 */
export const de_SendMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1SendMessagesCommandError
 */
const de_SendMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendOTPMessageCommand
 */
export const de_SendOTPMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendOTPMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendOTPMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1SendOTPMessageCommandError
 */
const de_SendOTPMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendOTPMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendUsersMessagesCommand
 */
export const de_SendUsersMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendUsersMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SendUsersMessageResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1SendUsersMessagesCommandError
 */
const de_SendUsersMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
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
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_restJson1UpdateAdmChannelCommand
 */
export const de_UpdateAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAdmChannelCommandError
 */
const de_UpdateAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApnsChannelCommand
 */
export const de_UpdateApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApnsChannelCommandError
 */
const de_UpdateApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApnsSandboxChannelCommand
 */
export const de_UpdateApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApnsSandboxChannelCommandError
 */
const de_UpdateApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApnsVoipChannelCommand
 */
export const de_UpdateApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApnsVoipChannelCommandError
 */
const de_UpdateApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand
 */
export const de_UpdateApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError
 */
const de_UpdateApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateApplicationSettingsCommand
 */
export const de_UpdateApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateApplicationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationSettingsResource = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationSettingsCommandError
 */
const de_UpdateApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateBaiduChannelCommand
 */
export const de_UpdateBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBaiduChannelCommandError
 */
const de_UpdateBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateCampaignCommand
 */
export const de_UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = de_CampaignResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCampaignCommandError
 */
const de_UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEmailChannelCommand
 */
export const de_UpdateEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailChannelCommandError
 */
const de_UpdateEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEmailTemplateCommand
 */
export const de_UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEmailTemplateCommandError
 */
const de_UpdateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEndpointCommandError
 */
const de_UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEndpointsBatchCommand
 */
export const de_UpdateEndpointsBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateEndpointsBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEndpointsBatchCommandError
 */
const de_UpdateEndpointsBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateGcmChannelCommand
 */
export const de_UpdateGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGcmChannelCommandError
 */
const de_UpdateGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInAppTemplateCommand
 */
export const de_UpdateInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInAppTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInAppTemplateCommandError
 */
const de_UpdateInAppTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInAppTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateJourneyCommand
 */
export const de_UpdateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = de_JourneyResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateJourneyCommandError
 */
const de_UpdateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpoint#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateJourneyStateCommand
 */
export const de_UpdateJourneyStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateJourneyStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = de_JourneyResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateJourneyStateCommandError
 */
const de_UpdateJourneyStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePushTemplateCommand
 */
export const de_UpdatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdatePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePushTemplateCommandError
 */
const de_UpdatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateRecommenderConfigurationCommand
 */
export const de_UpdateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecommenderConfigurationCommandError
 */
const de_UpdateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSegmentCommand
 */
export const de_UpdateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = de_SegmentResponse(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSegmentCommandError
 */
const de_UpdateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSmsChannelCommand
 */
export const de_UpdateSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSmsChannelCommandError
 */
const de_UpdateSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateSmsTemplateCommand
 */
export const de_UpdateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSmsTemplateCommandError
 */
const de_UpdateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTemplateActiveVersionCommand
 */
export const de_UpdateTemplateActiveVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTemplateActiveVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplateActiveVersionCommandError
 */
const de_UpdateTemplateActiveVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateVoiceChannelCommand
 */
export const de_UpdateVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceChannelCommandError
 */
const de_UpdateVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateVoiceTemplateCommand
 */
export const de_UpdateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVoiceTemplateCommandError
 */
const de_UpdateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1VerifyOTPMessageCommand
 */
export const de_VerifyOTPMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyOTPMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifyOTPMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VerificationResponse = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyOTPMessageCommandError
 */
const de_VerifyOTPMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyOTPMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await de_MethodNotAllowedExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await de_PayloadTooLargeExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
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
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MethodNotAllowedExceptionRes
 */
const de_MethodNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MethodNotAllowedException({
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
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PayloadTooLargeExceptionRes
 */
const de_PayloadTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PayloadTooLargeException({
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
    Message: __expectString,
    RequestID: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Activity
 */
const se_Activity = (input: Activity, context: __SerdeContext): any => {
  return take(input, {
    CUSTOM: _json,
    ConditionalSplit: (_) => se_ConditionalSplitActivity(_, context),
    ContactCenter: _json,
    Description: [],
    EMAIL: _json,
    Holdout: _json,
    MultiCondition: (_) => se_MultiConditionalSplitActivity(_, context),
    PUSH: _json,
    RandomSplit: _json,
    SMS: _json,
    Wait: _json,
  });
};

// se_AddressConfiguration omitted.

// se_ADMChannelRequest omitted.

// se_ADMMessage omitted.

// se_AndroidPushNotificationTemplate omitted.

// se_APNSChannelRequest omitted.

// se_APNSMessage omitted.

// se_APNSPushNotificationTemplate omitted.

// se_APNSSandboxChannelRequest omitted.

// se_APNSVoipChannelRequest omitted.

// se_APNSVoipSandboxChannelRequest omitted.

// se_ApplicationSettingsJourneyLimits omitted.

// se_AttributeDimension omitted.

// se_BaiduChannelRequest omitted.

// se_BaiduMessage omitted.

// se_CampaignCustomMessage omitted.

// se_CampaignEmailMessage omitted.

/**
 * serializeAws_restJson1CampaignEventFilter
 */
const se_CampaignEventFilter = (input: CampaignEventFilter, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: (_) => se_EventDimensions(_, context),
    FilterType: [],
  });
};

// se_CampaignHook omitted.

// se_CampaignInAppMessage omitted.

// se_CampaignLimits omitted.

// se_CampaignSmsMessage omitted.

// se_ClosedDays omitted.

// se_ClosedDaysRule omitted.

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return take(input, {
    Conditions: (_) => se_ListOfSimpleCondition(_, context),
    Operator: [],
  });
};

/**
 * serializeAws_restJson1ConditionalSplitActivity
 */
const se_ConditionalSplitActivity = (input: ConditionalSplitActivity, context: __SerdeContext): any => {
  return take(input, {
    Condition: (_) => se_Condition(_, context),
    EvaluationWaitTime: _json,
    FalseActivity: [],
    TrueActivity: [],
  });
};

// se_ContactCenterActivity omitted.

/**
 * serializeAws_restJson1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return take(input, {
    Name: [],
    tags: [, _json, `tags`],
  });
};

// se_CreateRecommenderConfigurationShape omitted.

// se_CustomDeliveryConfiguration omitted.

// se_CustomMessageActivity omitted.

// se_DefaultButtonConfiguration omitted.

// se_DefaultMessage omitted.

// se_DefaultPushNotificationMessage omitted.

// se_DefaultPushNotificationTemplate omitted.

/**
 * serializeAws_restJson1DirectMessageConfiguration
 */
const se_DirectMessageConfiguration = (input: DirectMessageConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ADMMessage: _json,
    APNSMessage: _json,
    BaiduMessage: _json,
    DefaultMessage: _json,
    DefaultPushNotificationMessage: _json,
    EmailMessage: (_) => se_EmailMessage(_, context),
    GCMMessage: _json,
    SMSMessage: _json,
    VoiceMessage: _json,
  });
};

// se_EmailChannelRequest omitted.

/**
 * serializeAws_restJson1EmailMessage
 */
const se_EmailMessage = (input: EmailMessage, context: __SerdeContext): any => {
  return take(input, {
    Body: [],
    FeedbackForwardingAddress: [],
    FromAddress: [],
    RawEmail: (_) => se_RawEmail(_, context),
    ReplyToAddresses: _json,
    SimpleEmail: _json,
    Substitutions: _json,
  });
};

// se_EmailMessageActivity omitted.

/**
 * serializeAws_restJson1EmailTemplateRequest
 */
const se_EmailTemplateRequest = (input: EmailTemplateRequest, context: __SerdeContext): any => {
  return take(input, {
    DefaultSubstitutions: [],
    HtmlPart: [],
    RecommenderId: [],
    Subject: [],
    TemplateDescription: [],
    TextPart: [],
    tags: [, _json, `tags`],
  });
};

/**
 * serializeAws_restJson1EndpointBatchItem
 */
const se_EndpointBatchItem = (input: EndpointBatchItem, context: __SerdeContext): any => {
  return take(input, {
    Address: [],
    Attributes: _json,
    ChannelType: [],
    Demographic: _json,
    EffectiveDate: [],
    EndpointStatus: [],
    Id: [],
    Location: (_) => se_EndpointLocation(_, context),
    Metrics: (_) => se_MapOf__double(_, context),
    OptOut: [],
    RequestId: [],
    User: _json,
  });
};

/**
 * serializeAws_restJson1EndpointBatchRequest
 */
const se_EndpointBatchRequest = (input: EndpointBatchRequest, context: __SerdeContext): any => {
  return take(input, {
    Item: (_) => se_ListOfEndpointBatchItem(_, context),
  });
};

// se_EndpointDemographic omitted.

/**
 * serializeAws_restJson1EndpointLocation
 */
const se_EndpointLocation = (input: EndpointLocation, context: __SerdeContext): any => {
  return take(input, {
    City: [],
    Country: [],
    Latitude: __serializeFloat,
    Longitude: __serializeFloat,
    PostalCode: [],
    Region: [],
  });
};

/**
 * serializeAws_restJson1EndpointRequest
 */
const se_EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return take(input, {
    Address: [],
    Attributes: _json,
    ChannelType: [],
    Demographic: _json,
    EffectiveDate: [],
    EndpointStatus: [],
    Location: (_) => se_EndpointLocation(_, context),
    Metrics: (_) => se_MapOf__double(_, context),
    OptOut: [],
    RequestId: [],
    User: _json,
  });
};

// se_EndpointSendConfiguration omitted.

// se_EndpointUser omitted.

/**
 * serializeAws_restJson1Event
 */
const se_Event = (input: Event, context: __SerdeContext): any => {
  return take(input, {
    AppPackageName: [],
    AppTitle: [],
    AppVersionCode: [],
    Attributes: _json,
    ClientSdkVersion: [],
    EventType: [],
    Metrics: (_) => se_MapOf__double(_, context),
    SdkName: [],
    Session: _json,
    Timestamp: [],
  });
};

/**
 * serializeAws_restJson1EventCondition
 */
const se_EventCondition = (input: EventCondition, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: (_) => se_EventDimensions(_, context),
    MessageActivity: [],
  });
};

/**
 * serializeAws_restJson1EventDimensions
 */
const se_EventDimensions = (input: EventDimensions, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    EventType: _json,
    Metrics: (_) => se_MapOfMetricDimension(_, context),
  });
};

/**
 * serializeAws_restJson1EventFilter
 */
const se_EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: (_) => se_EventDimensions(_, context),
    FilterType: [],
  });
};

/**
 * serializeAws_restJson1EventsBatch
 */
const se_EventsBatch = (input: EventsBatch, context: __SerdeContext): any => {
  return take(input, {
    Endpoint: (_) => se_PublicEndpoint(_, context),
    Events: (_) => se_MapOfEvent(_, context),
  });
};

/**
 * serializeAws_restJson1EventsRequest
 */
const se_EventsRequest = (input: EventsRequest, context: __SerdeContext): any => {
  return take(input, {
    BatchItem: (_) => se_MapOfEventsBatch(_, context),
  });
};

/**
 * serializeAws_restJson1EventStartCondition
 */
const se_EventStartCondition = (input: EventStartCondition, context: __SerdeContext): any => {
  return take(input, {
    EventFilter: (_) => se_EventFilter(_, context),
    SegmentId: [],
  });
};

// se_ExportJobRequest omitted.

// se_GCMChannelRequest omitted.

// se_GCMMessage omitted.

/**
 * serializeAws_restJson1GPSCoordinates
 */
const se_GPSCoordinates = (input: GPSCoordinates, context: __SerdeContext): any => {
  return take(input, {
    Latitude: __serializeFloat,
    Longitude: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1GPSPointDimension
 */
const se_GPSPointDimension = (input: GPSPointDimension, context: __SerdeContext): any => {
  return take(input, {
    Coordinates: (_) => se_GPSCoordinates(_, context),
    RangeInKilometers: __serializeFloat,
  });
};

// se_HoldoutActivity omitted.

// se_ImportJobRequest omitted.

// se_InAppMessageBodyConfig omitted.

// se_InAppMessageButton omitted.

// se_InAppMessageContent omitted.

// se_InAppMessageHeaderConfig omitted.

/**
 * serializeAws_restJson1InAppTemplateRequest
 */
const se_InAppTemplateRequest = (input: InAppTemplateRequest, context: __SerdeContext): any => {
  return take(input, {
    Content: _json,
    CustomConfig: _json,
    Layout: [],
    TemplateDescription: [],
    tags: [, _json, `tags`],
  });
};

// se_JourneyChannelSettings omitted.

// se_JourneyCustomMessage omitted.

// se_JourneyEmailMessage omitted.

// se_JourneyLimits omitted.

// se_JourneyPushMessage omitted.

/**
 * serializeAws_restJson1JourneySchedule
 */
const se_JourneySchedule = (input: JourneySchedule, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.toISOString().split(".")[0] + "Z",
    StartTime: (_) => _.toISOString().split(".")[0] + "Z",
    Timezone: [],
  });
};

// se_JourneySMSMessage omitted.

// se_JourneyStateRequest omitted.

// se_JourneyTimeframeCap omitted.

// se_ListOf__EndpointTypesElement omitted.

// se_ListOf__string omitted.

// se_ListOf__TimezoneEstimationMethodsElement omitted.

// se_ListOfClosedDaysRules omitted.

/**
 * serializeAws_restJson1ListOfEndpointBatchItem
 */
const se_ListOfEndpointBatchItem = (input: EndpointBatchItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EndpointBatchItem(entry, context);
    });
};

// se_ListOfInAppMessageContent omitted.

/**
 * serializeAws_restJson1ListOfMultiConditionalBranch
 */
const se_ListOfMultiConditionalBranch = (input: MultiConditionalBranch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MultiConditionalBranch(entry, context);
    });
};

// se_ListOfOpenHoursRules omitted.

// se_ListOfRandomSplitEntry omitted.

/**
 * serializeAws_restJson1ListOfSegmentDimensions
 */
const se_ListOfSegmentDimensions = (input: SegmentDimensions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SegmentDimensions(entry, context);
    });
};

/**
 * serializeAws_restJson1ListOfSegmentGroup
 */
const se_ListOfSegmentGroup = (input: SegmentGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SegmentGroup(entry, context);
    });
};

// se_ListOfSegmentReference omitted.

/**
 * serializeAws_restJson1ListOfSimpleCondition
 */
const se_ListOfSimpleCondition = (input: SimpleCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SimpleCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1ListOfWriteTreatmentResource
 */
const se_ListOfWriteTreatmentResource = (input: WriteTreatmentResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WriteTreatmentResource(entry, context);
    });
};

/**
 * serializeAws_restJson1MapOf__double
 */
const se_MapOf__double = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __serializeFloat(value);
    return acc;
  }, {});
};

// se_MapOf__string omitted.

/**
 * serializeAws_restJson1MapOfActivity
 */
const se_MapOfActivity = (input: Record<string, Activity>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Activity(value, context);
    return acc;
  }, {});
};

// se_MapOfAddressConfiguration omitted.

// se_MapOfAttributeDimension omitted.

// se_MapOfEndpointSendConfiguration omitted.

/**
 * serializeAws_restJson1MapOfEvent
 */
const se_MapOfEvent = (input: Record<string, Event>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Event(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MapOfEventsBatch
 */
const se_MapOfEventsBatch = (input: Record<string, EventsBatch>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_EventsBatch(value, context);
    return acc;
  }, {});
};

// se_MapOfListOf__string omitted.

// se_MapOfListOfOpenHoursRules omitted.

/**
 * serializeAws_restJson1MapOfMetricDimension
 */
const se_MapOfMetricDimension = (input: Record<string, MetricDimension>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_MetricDimension(value, context);
    return acc;
  }, {});
};

// se_Message omitted.

// se_MessageConfiguration omitted.

/**
 * serializeAws_restJson1MessageRequest
 */
const se_MessageRequest = (input: MessageRequest, context: __SerdeContext): any => {
  return take(input, {
    Addresses: _json,
    Context: _json,
    Endpoints: _json,
    MessageConfiguration: (_) => se_DirectMessageConfiguration(_, context),
    TemplateConfiguration: _json,
    TraceId: [],
  });
};

/**
 * serializeAws_restJson1MetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return take(input, {
    ComparisonOperator: [],
    Value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1MultiConditionalBranch
 */
const se_MultiConditionalBranch = (input: MultiConditionalBranch, context: __SerdeContext): any => {
  return take(input, {
    Condition: (_) => se_SimpleCondition(_, context),
    NextActivity: [],
  });
};

/**
 * serializeAws_restJson1MultiConditionalSplitActivity
 */
const se_MultiConditionalSplitActivity = (input: MultiConditionalSplitActivity, context: __SerdeContext): any => {
  return take(input, {
    Branches: (_) => se_ListOfMultiConditionalBranch(_, context),
    DefaultActivity: [],
    EvaluationWaitTime: _json,
  });
};

// se_NumberValidateRequest omitted.

// se_OpenHours omitted.

// se_OpenHoursRule omitted.

// se_OverrideButtonConfiguration omitted.

/**
 * serializeAws_restJson1PublicEndpoint
 */
const se_PublicEndpoint = (input: PublicEndpoint, context: __SerdeContext): any => {
  return take(input, {
    Address: [],
    Attributes: _json,
    ChannelType: [],
    Demographic: _json,
    EffectiveDate: [],
    EndpointStatus: [],
    Location: (_) => se_EndpointLocation(_, context),
    Metrics: (_) => se_MapOf__double(_, context),
    OptOut: [],
    RequestId: [],
    User: _json,
  });
};

// se_PushMessageActivity omitted.

/**
 * serializeAws_restJson1PushNotificationTemplateRequest
 */
const se_PushNotificationTemplateRequest = (input: PushNotificationTemplateRequest, context: __SerdeContext): any => {
  return take(input, {
    ADM: _json,
    APNS: _json,
    Baidu: _json,
    Default: _json,
    DefaultSubstitutions: [],
    GCM: _json,
    RecommenderId: [],
    TemplateDescription: [],
    tags: [, _json, `tags`],
  });
};

// se_QuietTime omitted.

// se_RandomSplitActivity omitted.

// se_RandomSplitEntry omitted.

/**
 * serializeAws_restJson1RawEmail
 */
const se_RawEmail = (input: RawEmail, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
  });
};

// se_RecencyDimension omitted.

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return take(input, {
    EndTime: [],
    EventFilter: (_) => se_CampaignEventFilter(_, context),
    Frequency: [],
    IsLocalTime: [],
    QuietTime: _json,
    StartTime: [],
    Timezone: [],
  });
};

// se_SegmentBehaviors omitted.

// se_SegmentCondition omitted.

// se_SegmentDemographics omitted.

/**
 * serializeAws_restJson1SegmentDimensions
 */
const se_SegmentDimensions = (input: SegmentDimensions, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    Behavior: _json,
    Demographic: _json,
    Location: (_) => se_SegmentLocation(_, context),
    Metrics: (_) => se_MapOfMetricDimension(_, context),
    UserAttributes: _json,
  });
};

/**
 * serializeAws_restJson1SegmentGroup
 */
const se_SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: (_) => se_ListOfSegmentDimensions(_, context),
    SourceSegments: _json,
    SourceType: [],
    Type: [],
  });
};

/**
 * serializeAws_restJson1SegmentGroupList
 */
const se_SegmentGroupList = (input: SegmentGroupList, context: __SerdeContext): any => {
  return take(input, {
    Groups: (_) => se_ListOfSegmentGroup(_, context),
    Include: [],
  });
};

/**
 * serializeAws_restJson1SegmentLocation
 */
const se_SegmentLocation = (input: SegmentLocation, context: __SerdeContext): any => {
  return take(input, {
    Country: _json,
    GPSPoint: (_) => se_GPSPointDimension(_, context),
  });
};

// se_SegmentReference omitted.

// se_SendOTPMessageRequestParameters omitted.

/**
 * serializeAws_restJson1SendUsersMessageRequest
 */
const se_SendUsersMessageRequest = (input: SendUsersMessageRequest, context: __SerdeContext): any => {
  return take(input, {
    Context: _json,
    MessageConfiguration: (_) => se_DirectMessageConfiguration(_, context),
    TemplateConfiguration: _json,
    TraceId: [],
    Users: _json,
  });
};

// se_Session omitted.

// se_SetDimension omitted.

/**
 * serializeAws_restJson1SimpleCondition
 */
const se_SimpleCondition = (input: SimpleCondition, context: __SerdeContext): any => {
  return take(input, {
    EventCondition: (_) => se_EventCondition(_, context),
    SegmentCondition: _json,
    segmentDimensions: [, (_) => se_SegmentDimensions(_, context), `SegmentDimensions`],
  });
};

// se_SimpleEmail omitted.

// se_SimpleEmailPart omitted.

// se_SMSChannelRequest omitted.

// se_SMSMessage omitted.

// se_SMSMessageActivity omitted.

/**
 * serializeAws_restJson1SMSTemplateRequest
 */
const se_SMSTemplateRequest = (input: SMSTemplateRequest, context: __SerdeContext): any => {
  return take(input, {
    Body: [],
    DefaultSubstitutions: [],
    RecommenderId: [],
    TemplateDescription: [],
    tags: [, _json, `tags`],
  });
};

/**
 * serializeAws_restJson1StartCondition
 */
const se_StartCondition = (input: StartCondition, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    EventStartCondition: (_) => se_EventStartCondition(_, context),
    SegmentStartCondition: _json,
  });
};

/**
 * serializeAws_restJson1TagsModel
 */
const se_TagsModel = (input: TagsModel, context: __SerdeContext): any => {
  return take(input, {
    tags: [, _json, `tags`],
  });
};

// se_Template omitted.

// se_TemplateActiveVersionRequest omitted.

// se_TemplateConfiguration omitted.

// se_UpdateAttributesRequest omitted.

// se_UpdateRecommenderConfigurationShape omitted.

// se_VerifyOTPMessageRequestParameters omitted.

// se_VoiceChannelRequest omitted.

// se_VoiceMessage omitted.

/**
 * serializeAws_restJson1VoiceTemplateRequest
 */
const se_VoiceTemplateRequest = (input: VoiceTemplateRequest, context: __SerdeContext): any => {
  return take(input, {
    Body: [],
    DefaultSubstitutions: [],
    LanguageCode: [],
    TemplateDescription: [],
    VoiceId: [],
    tags: [, _json, `tags`],
  });
};

// se_WaitActivity omitted.

// se_WaitTime omitted.

// se_WriteApplicationSettingsRequest omitted.

/**
 * serializeAws_restJson1WriteCampaignRequest
 */
const se_WriteCampaignRequest = (input: WriteCampaignRequest, context: __SerdeContext): any => {
  return take(input, {
    AdditionalTreatments: (_) => se_ListOfWriteTreatmentResource(_, context),
    CustomDeliveryConfiguration: _json,
    Description: [],
    HoldoutPercent: [],
    Hook: _json,
    IsPaused: [],
    Limits: _json,
    MessageConfiguration: _json,
    Name: [],
    Priority: [],
    Schedule: (_) => se_Schedule(_, context),
    SegmentId: [],
    SegmentVersion: [],
    TemplateConfiguration: _json,
    TreatmentDescription: [],
    TreatmentName: [],
    tags: [, _json, `tags`],
  });
};

// se_WriteEventStream omitted.

/**
 * serializeAws_restJson1WriteJourneyRequest
 */
const se_WriteJourneyRequest = (input: WriteJourneyRequest, context: __SerdeContext): any => {
  return take(input, {
    Activities: (_) => se_MapOfActivity(_, context),
    ClosedDays: _json,
    CreationDate: [],
    JourneyChannelSettings: _json,
    LastModifiedDate: [],
    Limits: _json,
    LocalTime: [],
    Name: [],
    OpenHours: _json,
    QuietTime: _json,
    RefreshFrequency: [],
    RefreshOnSegmentUpdate: [],
    Schedule: (_) => se_JourneySchedule(_, context),
    SendingSchedule: [],
    StartActivity: [],
    StartCondition: (_) => se_StartCondition(_, context),
    State: [],
    TimezoneEstimationMethods: _json,
    WaitForQuietTime: [],
  });
};

/**
 * serializeAws_restJson1WriteSegmentRequest
 */
const se_WriteSegmentRequest = (input: WriteSegmentRequest, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: (_) => se_SegmentDimensions(_, context),
    Name: [],
    SegmentGroups: (_) => se_SegmentGroupList(_, context),
    tags: [, _json, `tags`],
  });
};

/**
 * serializeAws_restJson1WriteTreatmentResource
 */
const se_WriteTreatmentResource = (input: WriteTreatmentResource, context: __SerdeContext): any => {
  return take(input, {
    CustomDeliveryConfiguration: _json,
    MessageConfiguration: _json,
    Schedule: (_) => se_Schedule(_, context),
    SizePercent: [],
    TemplateConfiguration: _json,
    TreatmentDescription: [],
    TreatmentName: [],
  });
};

// de_ActivitiesResponse omitted.

/**
 * deserializeAws_restJson1Activity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  return take(output, {
    CUSTOM: _json,
    ConditionalSplit: (_: any) => de_ConditionalSplitActivity(_, context),
    ContactCenter: _json,
    Description: __expectString,
    EMAIL: _json,
    Holdout: _json,
    MultiCondition: (_: any) => de_MultiConditionalSplitActivity(_, context),
    PUSH: _json,
    RandomSplit: _json,
    SMS: _json,
    Wait: _json,
  }) as any;
};

// de_ActivityResponse omitted.

// de_ADMChannelResponse omitted.

// de_AndroidPushNotificationTemplate omitted.

// de_APNSChannelResponse omitted.

// de_APNSPushNotificationTemplate omitted.

// de_APNSSandboxChannelResponse omitted.

// de_APNSVoipChannelResponse omitted.

// de_APNSVoipSandboxChannelResponse omitted.

/**
 * deserializeAws_restJson1ApplicationDateRangeKpiResponse
 */
const de_ApplicationDateRangeKpiResponse = (output: any, context: __SerdeContext): ApplicationDateRangeKpiResponse => {
  return take(output, {
    ApplicationId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    KpiName: __expectString,
    KpiResult: _json,
    NextToken: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationResponse
 */
const de_ApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse => {
  return take(output, {
    Arn: __expectString,
    CreationDate: __expectString,
    Id: __expectString,
    Name: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

// de_ApplicationSettingsJourneyLimits omitted.

// de_ApplicationSettingsResource omitted.

/**
 * deserializeAws_restJson1ApplicationsResponse
 */
const de_ApplicationsResponse = (output: any, context: __SerdeContext): ApplicationsResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfApplicationResponse(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_AttributeDimension omitted.

// de_AttributesResource omitted.

// de_BaiduChannelResponse omitted.

// de_BaseKpiResult omitted.

// de_CampaignCustomMessage omitted.

/**
 * deserializeAws_restJson1CampaignDateRangeKpiResponse
 */
const de_CampaignDateRangeKpiResponse = (output: any, context: __SerdeContext): CampaignDateRangeKpiResponse => {
  return take(output, {
    ApplicationId: __expectString,
    CampaignId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    KpiName: __expectString,
    KpiResult: _json,
    NextToken: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_CampaignEmailMessage omitted.

/**
 * deserializeAws_restJson1CampaignEventFilter
 */
const de_CampaignEventFilter = (output: any, context: __SerdeContext): CampaignEventFilter => {
  return take(output, {
    Dimensions: (_: any) => de_EventDimensions(_, context),
    FilterType: __expectString,
  }) as any;
};

// de_CampaignHook omitted.

// de_CampaignInAppMessage omitted.

// de_CampaignLimits omitted.

/**
 * deserializeAws_restJson1CampaignResponse
 */
const de_CampaignResponse = (output: any, context: __SerdeContext): CampaignResponse => {
  return take(output, {
    AdditionalTreatments: (_: any) => de_ListOfTreatmentResource(_, context),
    ApplicationId: __expectString,
    Arn: __expectString,
    CreationDate: __expectString,
    CustomDeliveryConfiguration: _json,
    DefaultState: _json,
    Description: __expectString,
    HoldoutPercent: __expectInt32,
    Hook: _json,
    Id: __expectString,
    IsPaused: __expectBoolean,
    LastModifiedDate: __expectString,
    Limits: _json,
    MessageConfiguration: _json,
    Name: __expectString,
    Priority: __expectInt32,
    Schedule: (_: any) => de_Schedule(_, context),
    SegmentId: __expectString,
    SegmentVersion: __expectInt32,
    State: _json,
    TemplateConfiguration: _json,
    TreatmentDescription: __expectString,
    TreatmentName: __expectString,
    Version: __expectInt32,
    tags: [, _json, `tags`],
  }) as any;
};

// de_CampaignSmsMessage omitted.

/**
 * deserializeAws_restJson1CampaignsResponse
 */
const de_CampaignsResponse = (output: any, context: __SerdeContext): CampaignsResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfCampaignResponse(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_CampaignState omitted.

// de_ChannelResponse omitted.

// de_ChannelsResponse omitted.

// de_ClosedDays omitted.

// de_ClosedDaysRule omitted.

/**
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return take(output, {
    Conditions: (_: any) => de_ListOfSimpleCondition(_, context),
    Operator: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ConditionalSplitActivity
 */
const de_ConditionalSplitActivity = (output: any, context: __SerdeContext): ConditionalSplitActivity => {
  return take(output, {
    Condition: (_: any) => de_Condition(_, context),
    EvaluationWaitTime: _json,
    FalseActivity: __expectString,
    TrueActivity: __expectString,
  }) as any;
};

// de_ContactCenterActivity omitted.

// de_CreateTemplateMessageBody omitted.

// de_CustomDeliveryConfiguration omitted.

// de_CustomMessageActivity omitted.

// de_DefaultButtonConfiguration omitted.

// de_DefaultPushNotificationTemplate omitted.

// de_EmailChannelResponse omitted.

// de_EmailMessageActivity omitted.

/**
 * deserializeAws_restJson1EmailTemplateResponse
 */
const de_EmailTemplateResponse = (output: any, context: __SerdeContext): EmailTemplateResponse => {
  return take(output, {
    Arn: __expectString,
    CreationDate: __expectString,
    DefaultSubstitutions: __expectString,
    HtmlPart: __expectString,
    LastModifiedDate: __expectString,
    RecommenderId: __expectString,
    Subject: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    TextPart: __expectString,
    Version: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

// de_EndpointDemographic omitted.

// de_EndpointItemResponse omitted.

/**
 * deserializeAws_restJson1EndpointLocation
 */
const de_EndpointLocation = (output: any, context: __SerdeContext): EndpointLocation => {
  return take(output, {
    City: __expectString,
    Country: __expectString,
    Latitude: __limitedParseDouble,
    Longitude: __limitedParseDouble,
    PostalCode: __expectString,
    Region: __expectString,
  }) as any;
};

// de_EndpointMessageResult omitted.

/**
 * deserializeAws_restJson1EndpointResponse
 */
const de_EndpointResponse = (output: any, context: __SerdeContext): EndpointResponse => {
  return take(output, {
    Address: __expectString,
    ApplicationId: __expectString,
    Attributes: _json,
    ChannelType: __expectString,
    CohortId: __expectString,
    CreationDate: __expectString,
    Demographic: _json,
    EffectiveDate: __expectString,
    EndpointStatus: __expectString,
    Id: __expectString,
    Location: (_: any) => de_EndpointLocation(_, context),
    Metrics: (_: any) => de_MapOf__double(_, context),
    OptOut: __expectString,
    RequestId: __expectString,
    User: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EndpointsResponse
 */
const de_EndpointsResponse = (output: any, context: __SerdeContext): EndpointsResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfEndpointResponse(_, context),
  }) as any;
};

// de_EndpointUser omitted.

/**
 * deserializeAws_restJson1EventCondition
 */
const de_EventCondition = (output: any, context: __SerdeContext): EventCondition => {
  return take(output, {
    Dimensions: (_: any) => de_EventDimensions(_, context),
    MessageActivity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventDimensions
 */
const de_EventDimensions = (output: any, context: __SerdeContext): EventDimensions => {
  return take(output, {
    Attributes: _json,
    EventType: _json,
    Metrics: (_: any) => de_MapOfMetricDimension(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1EventFilter
 */
const de_EventFilter = (output: any, context: __SerdeContext): EventFilter => {
  return take(output, {
    Dimensions: (_: any) => de_EventDimensions(_, context),
    FilterType: __expectString,
  }) as any;
};

// de_EventItemResponse omitted.

// de_EventsResponse omitted.

/**
 * deserializeAws_restJson1EventStartCondition
 */
const de_EventStartCondition = (output: any, context: __SerdeContext): EventStartCondition => {
  return take(output, {
    EventFilter: (_: any) => de_EventFilter(_, context),
    SegmentId: __expectString,
  }) as any;
};

// de_EventStream omitted.

// de_ExportJobResource omitted.

// de_ExportJobResponse omitted.

// de_ExportJobsResponse omitted.

// de_GCMChannelResponse omitted.

/**
 * deserializeAws_restJson1GPSCoordinates
 */
const de_GPSCoordinates = (output: any, context: __SerdeContext): GPSCoordinates => {
  return take(output, {
    Latitude: __limitedParseDouble,
    Longitude: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1GPSPointDimension
 */
const de_GPSPointDimension = (output: any, context: __SerdeContext): GPSPointDimension => {
  return take(output, {
    Coordinates: (_: any) => de_GPSCoordinates(_, context),
    RangeInKilometers: __limitedParseDouble,
  }) as any;
};

// de_HoldoutActivity omitted.

// de_ImportJobResource omitted.

// de_ImportJobResponse omitted.

// de_ImportJobsResponse omitted.

/**
 * deserializeAws_restJson1InAppCampaignSchedule
 */
const de_InAppCampaignSchedule = (output: any, context: __SerdeContext): InAppCampaignSchedule => {
  return take(output, {
    EndDate: __expectString,
    EventFilter: (_: any) => de_CampaignEventFilter(_, context),
    QuietTime: _json,
  }) as any;
};

// de_InAppMessage omitted.

// de_InAppMessageBodyConfig omitted.

// de_InAppMessageButton omitted.

/**
 * deserializeAws_restJson1InAppMessageCampaign
 */
const de_InAppMessageCampaign = (output: any, context: __SerdeContext): InAppMessageCampaign => {
  return take(output, {
    CampaignId: __expectString,
    DailyCap: __expectInt32,
    InAppMessage: _json,
    Priority: __expectInt32,
    Schedule: (_: any) => de_InAppCampaignSchedule(_, context),
    SessionCap: __expectInt32,
    TotalCap: __expectInt32,
    TreatmentId: __expectString,
  }) as any;
};

// de_InAppMessageContent omitted.

// de_InAppMessageHeaderConfig omitted.

/**
 * deserializeAws_restJson1InAppMessagesResponse
 */
const de_InAppMessagesResponse = (output: any, context: __SerdeContext): InAppMessagesResponse => {
  return take(output, {
    InAppMessageCampaigns: (_: any) => de_ListOfInAppMessageCampaign(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1InAppTemplateResponse
 */
const de_InAppTemplateResponse = (output: any, context: __SerdeContext): InAppTemplateResponse => {
  return take(output, {
    Arn: __expectString,
    Content: _json,
    CreationDate: __expectString,
    CustomConfig: _json,
    LastModifiedDate: __expectString,
    Layout: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    Version: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

// de_ItemResponse omitted.

// de_JourneyChannelSettings omitted.

// de_JourneyCustomMessage omitted.

/**
 * deserializeAws_restJson1JourneyDateRangeKpiResponse
 */
const de_JourneyDateRangeKpiResponse = (output: any, context: __SerdeContext): JourneyDateRangeKpiResponse => {
  return take(output, {
    ApplicationId: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    JourneyId: __expectString,
    KpiName: __expectString,
    KpiResult: _json,
    NextToken: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_JourneyEmailMessage omitted.

// de_JourneyExecutionActivityMetricsResponse omitted.

// de_JourneyExecutionMetricsResponse omitted.

// de_JourneyLimits omitted.

// de_JourneyPushMessage omitted.

/**
 * deserializeAws_restJson1JourneyResponse
 */
const de_JourneyResponse = (output: any, context: __SerdeContext): JourneyResponse => {
  return take(output, {
    Activities: (_: any) => de_MapOfActivity(_, context),
    ApplicationId: __expectString,
    ClosedDays: _json,
    CreationDate: __expectString,
    Id: __expectString,
    JourneyChannelSettings: _json,
    LastModifiedDate: __expectString,
    Limits: _json,
    LocalTime: __expectBoolean,
    Name: __expectString,
    OpenHours: _json,
    QuietTime: _json,
    RefreshFrequency: __expectString,
    RefreshOnSegmentUpdate: __expectBoolean,
    Schedule: (_: any) => de_JourneySchedule(_, context),
    SendingSchedule: __expectBoolean,
    StartActivity: __expectString,
    StartCondition: (_: any) => de_StartCondition(_, context),
    State: __expectString,
    TimezoneEstimationMethods: _json,
    WaitForQuietTime: __expectBoolean,
    tags: [, _json, `tags`],
  }) as any;
};

// de_JourneyRunExecutionActivityMetricsResponse omitted.

// de_JourneyRunExecutionMetricsResponse omitted.

// de_JourneyRunResponse omitted.

// de_JourneyRunsResponse omitted.

/**
 * deserializeAws_restJson1JourneySchedule
 */
const de_JourneySchedule = (output: any, context: __SerdeContext): JourneySchedule => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Timezone: __expectString,
  }) as any;
};

// de_JourneySMSMessage omitted.

/**
 * deserializeAws_restJson1JourneysResponse
 */
const de_JourneysResponse = (output: any, context: __SerdeContext): JourneysResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfJourneyResponse(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_JourneyTimeframeCap omitted.

// de_ListOf__EndpointTypesElement omitted.

// de_ListOf__string omitted.

// de_ListOf__TimezoneEstimationMethodsElement omitted.

// de_ListOfActivityResponse omitted.

/**
 * deserializeAws_restJson1ListOfApplicationResponse
 */
const de_ListOfApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfCampaignResponse
 */
const de_ListOfCampaignResponse = (output: any, context: __SerdeContext): CampaignResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CampaignResponse(entry, context);
    });
  return retVal;
};

// de_ListOfClosedDaysRules omitted.

/**
 * deserializeAws_restJson1ListOfEndpointResponse
 */
const de_ListOfEndpointResponse = (output: any, context: __SerdeContext): EndpointResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointResponse(entry, context);
    });
  return retVal;
};

// de_ListOfExportJobResponse omitted.

// de_ListOfImportJobResponse omitted.

/**
 * deserializeAws_restJson1ListOfInAppMessageCampaign
 */
const de_ListOfInAppMessageCampaign = (output: any, context: __SerdeContext): InAppMessageCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InAppMessageCampaign(entry, context);
    });
  return retVal;
};

// de_ListOfInAppMessageContent omitted.

/**
 * deserializeAws_restJson1ListOfJourneyResponse
 */
const de_ListOfJourneyResponse = (output: any, context: __SerdeContext): JourneyResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JourneyResponse(entry, context);
    });
  return retVal;
};

// de_ListOfJourneyRunResponse omitted.

/**
 * deserializeAws_restJson1ListOfMultiConditionalBranch
 */
const de_ListOfMultiConditionalBranch = (output: any, context: __SerdeContext): MultiConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MultiConditionalBranch(entry, context);
    });
  return retVal;
};

// de_ListOfOpenHoursRules omitted.

// de_ListOfRandomSplitEntry omitted.

// de_ListOfRecommenderConfigurationResponse omitted.

// de_ListOfResultRow omitted.

// de_ListOfResultRowValue omitted.

/**
 * deserializeAws_restJson1ListOfSegmentDimensions
 */
const de_ListOfSegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SegmentDimensions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfSegmentGroup
 */
const de_ListOfSegmentGroup = (output: any, context: __SerdeContext): SegmentGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SegmentGroup(entry, context);
    });
  return retVal;
};

// de_ListOfSegmentReference omitted.

/**
 * deserializeAws_restJson1ListOfSegmentResponse
 */
const de_ListOfSegmentResponse = (output: any, context: __SerdeContext): SegmentResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SegmentResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfSimpleCondition
 */
const de_ListOfSimpleCondition = (output: any, context: __SerdeContext): SimpleCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SimpleCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfTemplateResponse
 */
const de_ListOfTemplateResponse = (output: any, context: __SerdeContext): TemplateResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateResponse(entry, context);
    });
  return retVal;
};

// de_ListOfTemplateVersionResponse omitted.

/**
 * deserializeAws_restJson1ListOfTreatmentResource
 */
const de_ListOfTreatmentResource = (output: any, context: __SerdeContext): TreatmentResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TreatmentResource(entry, context);
    });
  return retVal;
};

// de_ListRecommenderConfigurationsResponse omitted.

/**
 * deserializeAws_restJson1MapOf__double
 */
const de_MapOf__double = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

// de_MapOf__integer omitted.

// de_MapOf__string omitted.

/**
 * deserializeAws_restJson1MapOfActivity
 */
const de_MapOfActivity = (output: any, context: __SerdeContext): Record<string, Activity> => {
  return Object.entries(output).reduce((acc: Record<string, Activity>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Activity(value, context);
    return acc;
  }, {});
};

// de_MapOfAttributeDimension omitted.

// de_MapOfChannelResponse omitted.

// de_MapOfEndpointMessageResult omitted.

// de_MapOfEventItemResponse omitted.

// de_MapOfItemResponse omitted.

// de_MapOfListOf__string omitted.

// de_MapOfListOfOpenHoursRules omitted.

// de_MapOfMapOfEndpointMessageResult omitted.

// de_MapOfMessageResult omitted.

/**
 * deserializeAws_restJson1MapOfMetricDimension
 */
const de_MapOfMetricDimension = (output: any, context: __SerdeContext): Record<string, MetricDimension> => {
  return Object.entries(output).reduce((acc: Record<string, MetricDimension>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MetricDimension(value, context);
    return acc;
  }, {});
};

// de_Message omitted.

// de_MessageBody omitted.

// de_MessageConfiguration omitted.

// de_MessageResponse omitted.

// de_MessageResult omitted.

/**
 * deserializeAws_restJson1MetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return take(output, {
    ComparisonOperator: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MultiConditionalBranch
 */
const de_MultiConditionalBranch = (output: any, context: __SerdeContext): MultiConditionalBranch => {
  return take(output, {
    Condition: (_: any) => de_SimpleCondition(_, context),
    NextActivity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MultiConditionalSplitActivity
 */
const de_MultiConditionalSplitActivity = (output: any, context: __SerdeContext): MultiConditionalSplitActivity => {
  return take(output, {
    Branches: (_: any) => de_ListOfMultiConditionalBranch(_, context),
    DefaultActivity: __expectString,
    EvaluationWaitTime: _json,
  }) as any;
};

// de_NumberValidateResponse omitted.

// de_OpenHours omitted.

// de_OpenHoursRule omitted.

// de_OverrideButtonConfiguration omitted.

// de_PushMessageActivity omitted.

/**
 * deserializeAws_restJson1PushNotificationTemplateResponse
 */
const de_PushNotificationTemplateResponse = (
  output: any,
  context: __SerdeContext
): PushNotificationTemplateResponse => {
  return take(output, {
    ADM: _json,
    APNS: _json,
    Arn: __expectString,
    Baidu: _json,
    CreationDate: __expectString,
    Default: _json,
    DefaultSubstitutions: __expectString,
    GCM: _json,
    LastModifiedDate: __expectString,
    RecommenderId: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    Version: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

// de_QuietTime omitted.

// de_RandomSplitActivity omitted.

// de_RandomSplitEntry omitted.

// de_RecencyDimension omitted.

// de_RecommenderConfigurationResponse omitted.

// de_ResultRow omitted.

// de_ResultRowValue omitted.

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return take(output, {
    EndTime: __expectString,
    EventFilter: (_: any) => de_CampaignEventFilter(_, context),
    Frequency: __expectString,
    IsLocalTime: __expectBoolean,
    QuietTime: _json,
    StartTime: __expectString,
    Timezone: __expectString,
  }) as any;
};

// de_SegmentBehaviors omitted.

// de_SegmentCondition omitted.

// de_SegmentDemographics omitted.

/**
 * deserializeAws_restJson1SegmentDimensions
 */
const de_SegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions => {
  return take(output, {
    Attributes: _json,
    Behavior: _json,
    Demographic: _json,
    Location: (_: any) => de_SegmentLocation(_, context),
    Metrics: (_: any) => de_MapOfMetricDimension(_, context),
    UserAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentGroup
 */
const de_SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return take(output, {
    Dimensions: (_: any) => de_ListOfSegmentDimensions(_, context),
    SourceSegments: _json,
    SourceType: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentGroupList
 */
const de_SegmentGroupList = (output: any, context: __SerdeContext): SegmentGroupList => {
  return take(output, {
    Groups: (_: any) => de_ListOfSegmentGroup(_, context),
    Include: __expectString,
  }) as any;
};

// de_SegmentImportResource omitted.

/**
 * deserializeAws_restJson1SegmentLocation
 */
const de_SegmentLocation = (output: any, context: __SerdeContext): SegmentLocation => {
  return take(output, {
    Country: _json,
    GPSPoint: (_: any) => de_GPSPointDimension(_, context),
  }) as any;
};

// de_SegmentReference omitted.

/**
 * deserializeAws_restJson1SegmentResponse
 */
const de_SegmentResponse = (output: any, context: __SerdeContext): SegmentResponse => {
  return take(output, {
    ApplicationId: __expectString,
    Arn: __expectString,
    CreationDate: __expectString,
    Dimensions: (_: any) => de_SegmentDimensions(_, context),
    Id: __expectString,
    ImportDefinition: _json,
    LastModifiedDate: __expectString,
    Name: __expectString,
    SegmentGroups: (_: any) => de_SegmentGroupList(_, context),
    SegmentType: __expectString,
    Version: __expectInt32,
    tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentsResponse
 */
const de_SegmentsResponse = (output: any, context: __SerdeContext): SegmentsResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfSegmentResponse(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_SendUsersMessageResponse omitted.

// de_SetDimension omitted.

/**
 * deserializeAws_restJson1SimpleCondition
 */
const de_SimpleCondition = (output: any, context: __SerdeContext): SimpleCondition => {
  return take(output, {
    EventCondition: (_: any) => de_EventCondition(_, context),
    SegmentCondition: _json,
    SegmentDimensions: [, (_: any) => de_SegmentDimensions(_, context), `segmentDimensions`],
  }) as any;
};

// de_SMSChannelResponse omitted.

// de_SMSMessageActivity omitted.

/**
 * deserializeAws_restJson1SMSTemplateResponse
 */
const de_SMSTemplateResponse = (output: any, context: __SerdeContext): SMSTemplateResponse => {
  return take(output, {
    Arn: __expectString,
    Body: __expectString,
    CreationDate: __expectString,
    DefaultSubstitutions: __expectString,
    LastModifiedDate: __expectString,
    RecommenderId: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    Version: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1StartCondition
 */
const de_StartCondition = (output: any, context: __SerdeContext): StartCondition => {
  return take(output, {
    Description: __expectString,
    EventStartCondition: (_: any) => de_EventStartCondition(_, context),
    SegmentStartCondition: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TagsModel
 */
const de_TagsModel = (output: any, context: __SerdeContext): TagsModel => {
  return take(output, {
    tags: [, _json, `tags`],
  }) as any;
};

// de_Template omitted.

// de_TemplateConfiguration omitted.

// de_TemplateCreateMessageBody omitted.

/**
 * deserializeAws_restJson1TemplateResponse
 */
const de_TemplateResponse = (output: any, context: __SerdeContext): TemplateResponse => {
  return take(output, {
    Arn: __expectString,
    CreationDate: __expectString,
    DefaultSubstitutions: __expectString,
    LastModifiedDate: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    Version: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1TemplatesResponse
 */
const de_TemplatesResponse = (output: any, context: __SerdeContext): TemplatesResponse => {
  return take(output, {
    Item: (_: any) => de_ListOfTemplateResponse(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_TemplateVersionResponse omitted.

// de_TemplateVersionsResponse omitted.

/**
 * deserializeAws_restJson1TreatmentResource
 */
const de_TreatmentResource = (output: any, context: __SerdeContext): TreatmentResource => {
  return take(output, {
    CustomDeliveryConfiguration: _json,
    Id: __expectString,
    MessageConfiguration: _json,
    Schedule: (_: any) => de_Schedule(_, context),
    SizePercent: __expectInt32,
    State: _json,
    TemplateConfiguration: _json,
    TreatmentDescription: __expectString,
    TreatmentName: __expectString,
  }) as any;
};

// de_VerificationResponse omitted.

// de_VoiceChannelResponse omitted.

/**
 * deserializeAws_restJson1VoiceTemplateResponse
 */
const de_VoiceTemplateResponse = (output: any, context: __SerdeContext): VoiceTemplateResponse => {
  return take(output, {
    Arn: __expectString,
    Body: __expectString,
    CreationDate: __expectString,
    DefaultSubstitutions: __expectString,
    LanguageCode: __expectString,
    LastModifiedDate: __expectString,
    TemplateDescription: __expectString,
    TemplateName: __expectString,
    TemplateType: __expectString,
    Version: __expectString,
    VoiceId: __expectString,
    tags: [, _json, `tags`],
  }) as any;
};

// de_WaitActivity omitted.

// de_WaitTime omitted.

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
