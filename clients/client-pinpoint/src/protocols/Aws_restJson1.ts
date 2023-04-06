// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ActivitiesResponse,
  Activity,
  ActivityResponse,
  AddressConfiguration,
  ADMChannelRequest,
  ADMChannelResponse,
  ADMMessage,
  AndroidPushNotificationTemplate,
  APNSChannelRequest,
  APNSChannelResponse,
  APNSMessage,
  APNSPushNotificationTemplate,
  APNSSandboxChannelRequest,
  APNSSandboxChannelResponse,
  APNSVoipChannelRequest,
  APNSVoipChannelResponse,
  APNSVoipSandboxChannelRequest,
  APNSVoipSandboxChannelResponse,
  ApplicationDateRangeKpiResponse,
  ApplicationResponse,
  ApplicationSettingsResource,
  ApplicationsResponse,
  AttributeDimension,
  AttributesResource,
  BadRequestException,
  BaiduChannelRequest,
  BaiduChannelResponse,
  BaiduMessage,
  BaseKpiResult,
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
  CampaignState,
  ChannelResponse,
  ChannelsResponse,
  ClosedDays,
  ClosedDaysRule,
  Condition,
  ConditionalSplitActivity,
  ConflictException,
  ContactCenterActivity,
  CreateApplicationRequest,
  CreateRecommenderConfigurationShape,
  CreateTemplateMessageBody,
  CustomDeliveryConfiguration,
  CustomMessageActivity,
  DayOfWeek,
  DefaultButtonConfiguration,
  DefaultMessage,
  DefaultPushNotificationMessage,
  DefaultPushNotificationTemplate,
  DirectMessageConfiguration,
  EmailChannelRequest,
  EmailChannelResponse,
  EmailMessage,
  EmailMessageActivity,
  EmailTemplateRequest,
  EmailTemplateResponse,
  EndpointBatchItem,
  EndpointBatchRequest,
  EndpointDemographic,
  EndpointItemResponse,
  EndpointLocation,
  EndpointMessageResult,
  EndpointRequest,
  EndpointResponse,
  EndpointSendConfiguration,
  EndpointsResponse,
  EndpointUser,
  Event,
  EventCondition,
  EventDimensions,
  EventFilter,
  EventItemResponse,
  EventsBatch,
  EventsRequest,
  EventsResponse,
  EventStartCondition,
  EventStream,
  ExportJobRequest,
  ExportJobResource,
  ExportJobResponse,
  ExportJobsResponse,
  ForbiddenException,
  GCMChannelRequest,
  GCMChannelResponse,
  GCMMessage,
  GPSCoordinates,
  GPSPointDimension,
  HoldoutActivity,
  ImportJobRequest,
  ImportJobResource,
  ImportJobResponse,
  InAppMessageBodyConfig,
  InAppMessageButton,
  InAppMessageContent,
  InAppMessageHeaderConfig,
  InAppTemplateRequest,
  InternalServerErrorException,
  ItemResponse,
  JourneyChannelSettings,
  JourneyCustomMessage,
  JourneyEmailMessage,
  JourneyLimits,
  JourneyPushMessage,
  JourneyResponse,
  JourneySchedule,
  JourneySMSMessage,
  Message,
  MessageBody,
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
  RecommenderConfigurationResponse,
  ResultRow,
  ResultRowValue,
  Schedule,
  SegmentBehaviors,
  SegmentCondition,
  SegmentDemographics,
  SegmentDimensions,
  SegmentGroup,
  SegmentGroupList,
  SegmentImportResource,
  SegmentLocation,
  SegmentReference,
  SegmentResponse,
  Session,
  SetDimension,
  SimpleCondition,
  SimpleEmail,
  SimpleEmailPart,
  SMSChannelResponse,
  SMSMessage,
  SMSMessageActivity,
  SMSTemplateRequest,
  StartCondition,
  Template,
  TemplateConfiguration,
  TemplateCreateMessageBody,
  TooManyRequestsException,
  TreatmentResource,
  VoiceChannelResponse,
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
  ImportJobsResponse,
  InAppCampaignSchedule,
  InAppMessage,
  InAppMessageCampaign,
  InAppMessagesResponse,
  InAppTemplateResponse,
  JourneyDateRangeKpiResponse,
  JourneyExecutionActivityMetricsResponse,
  JourneyExecutionMetricsResponse,
  JourneysResponse,
  JourneyStateRequest,
  ListRecommenderConfigurationsResponse,
  MessageRequest,
  MessageResponse,
  MessageResult,
  NumberValidateRequest,
  NumberValidateResponse,
  PushNotificationTemplateResponse,
  SegmentsResponse,
  SendOTPMessageRequestParameters,
  SendUsersMessageRequest,
  SendUsersMessageResponse,
  SMSChannelRequest,
  SMSTemplateResponse,
  TagsModel,
  TemplateActiveVersionRequest,
  TemplateResponse,
  TemplatesResponse,
  TemplateVersionResponse,
  TemplateVersionsResponse,
  UpdateAttributesRequest,
  UpdateRecommenderConfigurationShape,
  VerificationResponse,
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
    body = se_ExportJobRequest(input.ExportJobRequest, context);
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
    body = se_ImportJobRequest(input.ImportJobRequest, context);
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
    body = se_CreateRecommenderConfigurationShape(input.CreateRecommenderConfiguration, context);
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
    body = se_NumberValidateRequest(input.NumberValidateRequest, context);
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
    body = se_WriteEventStream(input.WriteEventStream, context);
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
    body = se_UpdateAttributesRequest(input.UpdateAttributesRequest, context);
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
    body = se_SendOTPMessageRequestParameters(input.SendOTPMessageRequestParameters, context);
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
    body = se_ADMChannelRequest(input.ADMChannelRequest, context);
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
    body = se_APNSChannelRequest(input.APNSChannelRequest, context);
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
    body = se_APNSSandboxChannelRequest(input.APNSSandboxChannelRequest, context);
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
    body = se_APNSVoipChannelRequest(input.APNSVoipChannelRequest, context);
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
    body = se_APNSVoipSandboxChannelRequest(input.APNSVoipSandboxChannelRequest, context);
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
    body = se_WriteApplicationSettingsRequest(input.WriteApplicationSettingsRequest, context);
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
    body = se_BaiduChannelRequest(input.BaiduChannelRequest, context);
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
    body = se_EmailChannelRequest(input.EmailChannelRequest, context);
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
    body = se_GCMChannelRequest(input.GCMChannelRequest, context);
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
    body = se_JourneyStateRequest(input.JourneyStateRequest, context);
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
    body = se_UpdateRecommenderConfigurationShape(input.UpdateRecommenderConfiguration, context);
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
    body = se_SMSChannelRequest(input.SMSChannelRequest, context);
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
    body = se_TemplateActiveVersionRequest(input.TemplateActiveVersionRequest, context);
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
    body = se_VoiceChannelRequest(input.VoiceChannelRequest, context);
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
    body = se_VerifyOTPMessageRequestParameters(input.VerifyOTPMessageRequestParameters, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.CreateTemplateMessageBody = de_CreateTemplateMessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ExportJobResponse = de_ExportJobResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ImportJobResponse = de_ImportJobResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.TemplateCreateMessageBody = de_TemplateCreateMessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.CreateTemplateMessageBody = de_CreateTemplateMessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.RecommenderConfigurationResponse = de_RecommenderConfigurationResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.CreateTemplateMessageBody = de_CreateTemplateMessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.CreateTemplateMessageBody = de_CreateTemplateMessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ADMChannelResponse = de_ADMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSChannelResponse = de_APNSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSSandboxChannelResponse = de_APNSSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipChannelResponse = de_APNSVoipChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipSandboxChannelResponse = de_APNSVoipSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.BaiduChannelResponse = de_BaiduChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EmailChannelResponse = de_EmailChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EventStream = de_EventStream(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.GCMChannelResponse = de_GCMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.RecommenderConfigurationResponse = de_RecommenderConfigurationResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.SMSChannelResponse = de_SMSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.VoiceChannelResponse = de_VoiceChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ADMChannelResponse = de_ADMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSChannelResponse = de_APNSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSSandboxChannelResponse = de_APNSSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipChannelResponse = de_APNSVoipChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipSandboxChannelResponse = de_APNSVoipSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ApplicationSettingsResource = de_ApplicationSettingsResource(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.BaiduChannelResponse = de_BaiduChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ActivitiesResponse = de_ActivitiesResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ChannelsResponse = de_ChannelsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EmailChannelResponse = de_EmailChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EventStream = de_EventStream(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ExportJobResponse = de_ExportJobResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ExportJobsResponse = de_ExportJobsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.GCMChannelResponse = de_GCMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ImportJobResponse = de_ImportJobResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ImportJobsResponse = de_ImportJobsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.JourneyExecutionActivityMetricsResponse = de_JourneyExecutionActivityMetricsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.JourneyExecutionMetricsResponse = de_JourneyExecutionMetricsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.RecommenderConfigurationResponse = de_RecommenderConfigurationResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ListRecommenderConfigurationsResponse = de_ListRecommenderConfigurationsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ExportJobsResponse = de_ExportJobsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ImportJobsResponse = de_ImportJobsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.SMSChannelResponse = de_SMSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.VoiceChannelResponse = de_VoiceChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.TemplateVersionsResponse = de_TemplateVersionsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.NumberValidateResponse = de_NumberValidateResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EventsResponse = de_EventsResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EventStream = de_EventStream(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.AttributesResource = de_AttributesResource(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageResponse = de_MessageResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageResponse = de_MessageResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.SendUsersMessageResponse = de_SendUsersMessageResponse(data, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
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
  contents.ADMChannelResponse = de_ADMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSChannelResponse = de_APNSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSSandboxChannelResponse = de_APNSSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipChannelResponse = de_APNSVoipChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.APNSVoipSandboxChannelResponse = de_APNSVoipSandboxChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.ApplicationSettingsResource = de_ApplicationSettingsResource(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.BaiduChannelResponse = de_BaiduChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.EmailChannelResponse = de_EmailChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.GCMChannelResponse = de_GCMChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.RecommenderConfigurationResponse = de_RecommenderConfigurationResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.SMSChannelResponse = de_SMSChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.VoiceChannelResponse = de_VoiceChannelResponse(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.MessageBody = de_MessageBody(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.VerificationResponse = de_VerificationResponse(data, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.RequestID != null) {
    contents.RequestID = __expectString(data.RequestID);
  }
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
  return {
    ...(input.CUSTOM != null && { CUSTOM: se_CustomMessageActivity(input.CUSTOM, context) }),
    ...(input.ConditionalSplit != null && {
      ConditionalSplit: se_ConditionalSplitActivity(input.ConditionalSplit, context),
    }),
    ...(input.ContactCenter != null && { ContactCenter: se_ContactCenterActivity(input.ContactCenter, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EMAIL != null && { EMAIL: se_EmailMessageActivity(input.EMAIL, context) }),
    ...(input.Holdout != null && { Holdout: se_HoldoutActivity(input.Holdout, context) }),
    ...(input.MultiCondition != null && {
      MultiCondition: se_MultiConditionalSplitActivity(input.MultiCondition, context),
    }),
    ...(input.PUSH != null && { PUSH: se_PushMessageActivity(input.PUSH, context) }),
    ...(input.RandomSplit != null && { RandomSplit: se_RandomSplitActivity(input.RandomSplit, context) }),
    ...(input.SMS != null && { SMS: se_SMSMessageActivity(input.SMS, context) }),
    ...(input.Wait != null && { Wait: se_WaitActivity(input.Wait, context) }),
  };
};

/**
 * serializeAws_restJson1AddressConfiguration
 */
const se_AddressConfiguration = (input: AddressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BodyOverride != null && { BodyOverride: input.BodyOverride }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Context != null && { Context: se_MapOf__string(input.Context, context) }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.TitleOverride != null && { TitleOverride: input.TitleOverride }),
  };
};

/**
 * serializeAws_restJson1ADMChannelRequest
 */
const se_ADMChannelRequest = (input: ADMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientSecret != null && { ClientSecret: input.ClientSecret }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1ADMMessage
 */
const se_ADMMessage = (input: ADMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.ConsolidationKey != null && { ConsolidationKey: input.ConsolidationKey }),
    ...(input.Data != null && { Data: se_MapOf__string(input.Data, context) }),
    ...(input.ExpiresAfter != null && { ExpiresAfter: input.ExpiresAfter }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.MD5 != null && { MD5: input.MD5 }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1AndroidPushNotificationTemplate
 */
const se_AndroidPushNotificationTemplate = (input: AndroidPushNotificationTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1APNSChannelRequest
 */
const se_APNSChannelRequest = (input: APNSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod != null && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.TokenKey != null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId != null && { TokenKeyId: input.TokenKeyId }),
  };
};

/**
 * serializeAws_restJson1APNSMessage
 */
const se_APNSMessage = (input: APNSMessage, context: __SerdeContext): any => {
  return {
    ...(input.APNSPushType != null && { APNSPushType: input.APNSPushType }),
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Badge != null && { Badge: input.Badge }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.CollapseId != null && { CollapseId: input.CollapseId }),
    ...(input.Data != null && { Data: se_MapOf__string(input.Data, context) }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.PreferredAuthenticationMethod != null && {
      PreferredAuthenticationMethod: input.PreferredAuthenticationMethod,
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.ThreadId != null && { ThreadId: input.ThreadId }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1APNSPushNotificationTemplate
 */
const se_APNSPushNotificationTemplate = (input: APNSPushNotificationTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1APNSSandboxChannelRequest
 */
const se_APNSSandboxChannelRequest = (input: APNSSandboxChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod != null && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.TokenKey != null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId != null && { TokenKeyId: input.TokenKeyId }),
  };
};

/**
 * serializeAws_restJson1APNSVoipChannelRequest
 */
const se_APNSVoipChannelRequest = (input: APNSVoipChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod != null && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.TokenKey != null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId != null && { TokenKeyId: input.TokenKeyId }),
  };
};

/**
 * serializeAws_restJson1APNSVoipSandboxChannelRequest
 */
const se_APNSVoipSandboxChannelRequest = (input: APNSVoipSandboxChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId != null && { BundleId: input.BundleId }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod != null && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.TokenKey != null && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId != null && { TokenKeyId: input.TokenKeyId }),
  };
};

/**
 * serializeAws_restJson1AttributeDimension
 */
const se_AttributeDimension = (input: AttributeDimension, context: __SerdeContext): any => {
  return {
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
    ...(input.Values != null && { Values: se_ListOf__string(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1BaiduChannelRequest
 */
const se_BaiduChannelRequest = (input: BaiduChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey != null && { ApiKey: input.ApiKey }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
  };
};

/**
 * serializeAws_restJson1BaiduMessage
 */
const se_BaiduMessage = (input: BaiduMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Data != null && { Data: se_MapOf__string(input.Data, context) }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1CampaignCustomMessage
 */
const se_CampaignCustomMessage = (input: CampaignCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: input.Data }),
  };
};

/**
 * serializeAws_restJson1CampaignEmailMessage
 */
const se_CampaignEmailMessage = (input: CampaignEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.HtmlBody != null && { HtmlBody: input.HtmlBody }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_restJson1CampaignEventFilter
 */
const se_CampaignEventFilter = (input: CampaignEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType != null && { FilterType: input.FilterType }),
  };
};

/**
 * serializeAws_restJson1CampaignHook
 */
const se_CampaignHook = (input: CampaignHook, context: __SerdeContext): any => {
  return {
    ...(input.LambdaFunctionName != null && { LambdaFunctionName: input.LambdaFunctionName }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.WebUrl != null && { WebUrl: input.WebUrl }),
  };
};

/**
 * serializeAws_restJson1CampaignInAppMessage
 */
const se_CampaignInAppMessage = (input: CampaignInAppMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Content != null && { Content: se_ListOfInAppMessageContent(input.Content, context) }),
    ...(input.CustomConfig != null && { CustomConfig: se_MapOf__string(input.CustomConfig, context) }),
    ...(input.Layout != null && { Layout: input.Layout }),
  };
};

/**
 * serializeAws_restJson1CampaignLimits
 */
const se_CampaignLimits = (input: CampaignLimits, context: __SerdeContext): any => {
  return {
    ...(input.Daily != null && { Daily: input.Daily }),
    ...(input.MaximumDuration != null && { MaximumDuration: input.MaximumDuration }),
    ...(input.MessagesPerSecond != null && { MessagesPerSecond: input.MessagesPerSecond }),
    ...(input.Session != null && { Session: input.Session }),
    ...(input.Total != null && { Total: input.Total }),
  };
};

/**
 * serializeAws_restJson1CampaignSmsMessage
 */
const se_CampaignSmsMessage = (input: CampaignSmsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

/**
 * serializeAws_restJson1ClosedDays
 */
const se_ClosedDays = (input: ClosedDays, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM != null && { CUSTOM: se_ListOfClosedDaysRules(input.CUSTOM, context) }),
    ...(input.EMAIL != null && { EMAIL: se_ListOfClosedDaysRules(input.EMAIL, context) }),
    ...(input.PUSH != null && { PUSH: se_ListOfClosedDaysRules(input.PUSH, context) }),
    ...(input.SMS != null && { SMS: se_ListOfClosedDaysRules(input.SMS, context) }),
    ...(input.VOICE != null && { VOICE: se_ListOfClosedDaysRules(input.VOICE, context) }),
  };
};

/**
 * serializeAws_restJson1ClosedDaysRule
 */
const se_ClosedDaysRule = (input: ClosedDaysRule, context: __SerdeContext): any => {
  return {
    ...(input.EndDateTime != null && { EndDateTime: input.EndDateTime }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StartDateTime != null && { StartDateTime: input.StartDateTime }),
  };
};

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Conditions != null && { Conditions: se_ListOfSimpleCondition(input.Conditions, context) }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

/**
 * serializeAws_restJson1ConditionalSplitActivity
 */
const se_ConditionalSplitActivity = (input: ConditionalSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: se_Condition(input.Condition, context) }),
    ...(input.EvaluationWaitTime != null && { EvaluationWaitTime: se_WaitTime(input.EvaluationWaitTime, context) }),
    ...(input.FalseActivity != null && { FalseActivity: input.FalseActivity }),
    ...(input.TrueActivity != null && { TrueActivity: input.TrueActivity }),
  };
};

/**
 * serializeAws_restJson1ContactCenterActivity
 */
const se_ContactCenterActivity = (input: ContactCenterActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
  };
};

/**
 * serializeAws_restJson1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1CreateRecommenderConfigurationShape
 */
const se_CreateRecommenderConfigurationShape = (
  input: CreateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_MapOf__string(input.Attributes, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecommendationProviderIdType != null && {
      RecommendationProviderIdType: input.RecommendationProviderIdType,
    }),
    ...(input.RecommendationProviderRoleArn != null && {
      RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
    }),
    ...(input.RecommendationProviderUri != null && { RecommendationProviderUri: input.RecommendationProviderUri }),
    ...(input.RecommendationTransformerUri != null && {
      RecommendationTransformerUri: input.RecommendationTransformerUri,
    }),
    ...(input.RecommendationsDisplayName != null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
    ...(input.RecommendationsPerMessage != null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
  };
};

/**
 * serializeAws_restJson1CustomDeliveryConfiguration
 */
const se_CustomDeliveryConfiguration = (input: CustomDeliveryConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryUri != null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes != null && {
      EndpointTypes: se_ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
  };
};

/**
 * serializeAws_restJson1CustomMessageActivity
 */
const se_CustomMessageActivity = (input: CustomMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryUri != null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes != null && {
      EndpointTypes: se_ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
    ...(input.MessageConfig != null && { MessageConfig: se_JourneyCustomMessage(input.MessageConfig, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

/**
 * serializeAws_restJson1DefaultButtonConfiguration
 */
const se_DefaultButtonConfiguration = (input: DefaultButtonConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BackgroundColor != null && { BackgroundColor: input.BackgroundColor }),
    ...(input.BorderRadius != null && { BorderRadius: input.BorderRadius }),
    ...(input.ButtonAction != null && { ButtonAction: input.ButtonAction }),
    ...(input.Link != null && { Link: input.Link }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

/**
 * serializeAws_restJson1DefaultMessage
 */
const se_DefaultMessage = (input: DefaultMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
  };
};

/**
 * serializeAws_restJson1DefaultPushNotificationMessage
 */
const se_DefaultPushNotificationMessage = (input: DefaultPushNotificationMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Data != null && { Data: se_MapOf__string(input.Data, context) }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1DefaultPushNotificationTemplate
 */
const se_DefaultPushNotificationTemplate = (input: DefaultPushNotificationTemplate, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1DirectMessageConfiguration
 */
const se_DirectMessageConfiguration = (input: DirectMessageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ADMMessage != null && { ADMMessage: se_ADMMessage(input.ADMMessage, context) }),
    ...(input.APNSMessage != null && { APNSMessage: se_APNSMessage(input.APNSMessage, context) }),
    ...(input.BaiduMessage != null && { BaiduMessage: se_BaiduMessage(input.BaiduMessage, context) }),
    ...(input.DefaultMessage != null && { DefaultMessage: se_DefaultMessage(input.DefaultMessage, context) }),
    ...(input.DefaultPushNotificationMessage != null && {
      DefaultPushNotificationMessage: se_DefaultPushNotificationMessage(input.DefaultPushNotificationMessage, context),
    }),
    ...(input.EmailMessage != null && { EmailMessage: se_EmailMessage(input.EmailMessage, context) }),
    ...(input.GCMMessage != null && { GCMMessage: se_GCMMessage(input.GCMMessage, context) }),
    ...(input.SMSMessage != null && { SMSMessage: se_SMSMessage(input.SMSMessage, context) }),
    ...(input.VoiceMessage != null && { VoiceMessage: se_VoiceMessage(input.VoiceMessage, context) }),
  };
};

/**
 * serializeAws_restJson1EmailChannelRequest
 */
const se_EmailChannelRequest = (input: EmailChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSet != null && { ConfigurationSet: input.ConfigurationSet }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.Identity != null && { Identity: input.Identity }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1EmailMessage
 */
const se_EmailMessage = (input: EmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.FeedbackForwardingAddress != null && { FeedbackForwardingAddress: input.FeedbackForwardingAddress }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.RawEmail != null && { RawEmail: se_RawEmail(input.RawEmail, context) }),
    ...(input.ReplyToAddresses != null && { ReplyToAddresses: se_ListOf__string(input.ReplyToAddresses, context) }),
    ...(input.SimpleEmail != null && { SimpleEmail: se_SimpleEmail(input.SimpleEmail, context) }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
  };
};

/**
 * serializeAws_restJson1EmailMessageActivity
 */
const se_EmailMessageActivity = (input: EmailMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && { MessageConfig: se_JourneyEmailMessage(input.MessageConfig, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

/**
 * serializeAws_restJson1EmailTemplateRequest
 */
const se_EmailTemplateRequest = (input: EmailTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.HtmlPart != null && { HtmlPart: input.HtmlPart }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.TextPart != null && { TextPart: input.TextPart }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointBatchItem
 */
const se_EndpointBatchItem = (input: EndpointBatchItem, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && { Attributes: se_MapOfListOf__string(input.Attributes, context) }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && { Demographic: se_EndpointDemographic(input.Demographic, context) }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Location != null && { Location: se_EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: se_MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: se_EndpointUser(input.User, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointBatchRequest
 */
const se_EndpointBatchRequest = (input: EndpointBatchRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item != null && { Item: se_ListOfEndpointBatchItem(input.Item, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointDemographic
 */
const se_EndpointDemographic = (input: EndpointDemographic, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion != null && { AppVersion: input.AppVersion }),
    ...(input.Locale != null && { Locale: input.Locale }),
    ...(input.Make != null && { Make: input.Make }),
    ...(input.Model != null && { Model: input.Model }),
    ...(input.ModelVersion != null && { ModelVersion: input.ModelVersion }),
    ...(input.Platform != null && { Platform: input.Platform }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

/**
 * serializeAws_restJson1EndpointLocation
 */
const se_EndpointLocation = (input: EndpointLocation, context: __SerdeContext): any => {
  return {
    ...(input.City != null && { City: input.City }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.Latitude != null && { Latitude: __serializeFloat(input.Latitude) }),
    ...(input.Longitude != null && { Longitude: __serializeFloat(input.Longitude) }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_restJson1EndpointRequest
 */
const se_EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && { Attributes: se_MapOfListOf__string(input.Attributes, context) }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && { Demographic: se_EndpointDemographic(input.Demographic, context) }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location != null && { Location: se_EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: se_MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: se_EndpointUser(input.User, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointSendConfiguration
 */
const se_EndpointSendConfiguration = (input: EndpointSendConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BodyOverride != null && { BodyOverride: input.BodyOverride }),
    ...(input.Context != null && { Context: se_MapOf__string(input.Context, context) }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.TitleOverride != null && { TitleOverride: input.TitleOverride }),
  };
};

/**
 * serializeAws_restJson1EndpointUser
 */
const se_EndpointUser = (input: EndpointUser, context: __SerdeContext): any => {
  return {
    ...(input.UserAttributes != null && { UserAttributes: se_MapOfListOf__string(input.UserAttributes, context) }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_restJson1Event
 */
const se_Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.AppPackageName != null && { AppPackageName: input.AppPackageName }),
    ...(input.AppTitle != null && { AppTitle: input.AppTitle }),
    ...(input.AppVersionCode != null && { AppVersionCode: input.AppVersionCode }),
    ...(input.Attributes != null && { Attributes: se_MapOf__string(input.Attributes, context) }),
    ...(input.ClientSdkVersion != null && { ClientSdkVersion: input.ClientSdkVersion }),
    ...(input.EventType != null && { EventType: input.EventType }),
    ...(input.Metrics != null && { Metrics: se_MapOf__double(input.Metrics, context) }),
    ...(input.SdkName != null && { SdkName: input.SdkName }),
    ...(input.Session != null && { Session: se_Session(input.Session, context) }),
    ...(input.Timestamp != null && { Timestamp: input.Timestamp }),
  };
};

/**
 * serializeAws_restJson1EventCondition
 */
const se_EventCondition = (input: EventCondition, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_EventDimensions(input.Dimensions, context) }),
    ...(input.MessageActivity != null && { MessageActivity: input.MessageActivity }),
  };
};

/**
 * serializeAws_restJson1EventDimensions
 */
const se_EventDimensions = (input: EventDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_MapOfAttributeDimension(input.Attributes, context) }),
    ...(input.EventType != null && { EventType: se_SetDimension(input.EventType, context) }),
    ...(input.Metrics != null && { Metrics: se_MapOfMetricDimension(input.Metrics, context) }),
  };
};

/**
 * serializeAws_restJson1EventFilter
 */
const se_EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType != null && { FilterType: input.FilterType }),
  };
};

/**
 * serializeAws_restJson1EventsBatch
 */
const se_EventsBatch = (input: EventsBatch, context: __SerdeContext): any => {
  return {
    ...(input.Endpoint != null && { Endpoint: se_PublicEndpoint(input.Endpoint, context) }),
    ...(input.Events != null && { Events: se_MapOfEvent(input.Events, context) }),
  };
};

/**
 * serializeAws_restJson1EventsRequest
 */
const se_EventsRequest = (input: EventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BatchItem != null && { BatchItem: se_MapOfEventsBatch(input.BatchItem, context) }),
  };
};

/**
 * serializeAws_restJson1EventStartCondition
 */
const se_EventStartCondition = (input: EventStartCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventFilter != null && { EventFilter: se_EventFilter(input.EventFilter, context) }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
  };
};

/**
 * serializeAws_restJson1ExportJobRequest
 */
const se_ExportJobRequest = (input: ExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3UrlPrefix != null && { S3UrlPrefix: input.S3UrlPrefix }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion != null && { SegmentVersion: input.SegmentVersion }),
  };
};

/**
 * serializeAws_restJson1GCMChannelRequest
 */
const se_GCMChannelRequest = (input: GCMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey != null && { ApiKey: input.ApiKey }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1GCMMessage
 */
const se_GCMMessage = (input: GCMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.CollapseKey != null && { CollapseKey: input.CollapseKey }),
    ...(input.Data != null && { Data: se_MapOf__string(input.Data, context) }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.RestrictedPackageName != null && { RestrictedPackageName: input.RestrictedPackageName }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1GPSCoordinates
 */
const se_GPSCoordinates = (input: GPSCoordinates, context: __SerdeContext): any => {
  return {
    ...(input.Latitude != null && { Latitude: __serializeFloat(input.Latitude) }),
    ...(input.Longitude != null && { Longitude: __serializeFloat(input.Longitude) }),
  };
};

/**
 * serializeAws_restJson1GPSPointDimension
 */
const se_GPSPointDimension = (input: GPSPointDimension, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates != null && { Coordinates: se_GPSCoordinates(input.Coordinates, context) }),
    ...(input.RangeInKilometers != null && { RangeInKilometers: __serializeFloat(input.RangeInKilometers) }),
  };
};

/**
 * serializeAws_restJson1HoldoutActivity
 */
const se_HoldoutActivity = (input: HoldoutActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.Percentage != null && { Percentage: input.Percentage }),
  };
};

/**
 * serializeAws_restJson1ImportJobRequest
 */
const se_ImportJobRequest = (input: ImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefineSegment != null && { DefineSegment: input.DefineSegment }),
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.RegisterEndpoints != null && { RegisterEndpoints: input.RegisterEndpoints }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3Url != null && { S3Url: input.S3Url }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
    ...(input.SegmentName != null && { SegmentName: input.SegmentName }),
  };
};

/**
 * serializeAws_restJson1InAppMessageBodyConfig
 */
const se_InAppMessageBodyConfig = (input: InAppMessageBodyConfig, context: __SerdeContext): any => {
  return {
    ...(input.Alignment != null && { Alignment: input.Alignment }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

/**
 * serializeAws_restJson1InAppMessageButton
 */
const se_InAppMessageButton = (input: InAppMessageButton, context: __SerdeContext): any => {
  return {
    ...(input.Android != null && { Android: se_OverrideButtonConfiguration(input.Android, context) }),
    ...(input.DefaultConfig != null && { DefaultConfig: se_DefaultButtonConfiguration(input.DefaultConfig, context) }),
    ...(input.IOS != null && { IOS: se_OverrideButtonConfiguration(input.IOS, context) }),
    ...(input.Web != null && { Web: se_OverrideButtonConfiguration(input.Web, context) }),
  };
};

/**
 * serializeAws_restJson1InAppMessageContent
 */
const se_InAppMessageContent = (input: InAppMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.BackgroundColor != null && { BackgroundColor: input.BackgroundColor }),
    ...(input.BodyConfig != null && { BodyConfig: se_InAppMessageBodyConfig(input.BodyConfig, context) }),
    ...(input.HeaderConfig != null && { HeaderConfig: se_InAppMessageHeaderConfig(input.HeaderConfig, context) }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.PrimaryBtn != null && { PrimaryBtn: se_InAppMessageButton(input.PrimaryBtn, context) }),
    ...(input.SecondaryBtn != null && { SecondaryBtn: se_InAppMessageButton(input.SecondaryBtn, context) }),
  };
};

/**
 * serializeAws_restJson1InAppMessageHeaderConfig
 */
const se_InAppMessageHeaderConfig = (input: InAppMessageHeaderConfig, context: __SerdeContext): any => {
  return {
    ...(input.Alignment != null && { Alignment: input.Alignment }),
    ...(input.Header != null && { Header: input.Header }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

/**
 * serializeAws_restJson1InAppTemplateRequest
 */
const se_InAppTemplateRequest = (input: InAppTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: se_ListOfInAppMessageContent(input.Content, context) }),
    ...(input.CustomConfig != null && { CustomConfig: se_MapOf__string(input.CustomConfig, context) }),
    ...(input.Layout != null && { Layout: input.Layout }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1JourneyChannelSettings
 */
const se_JourneyChannelSettings = (input: JourneyChannelSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectCampaignArn != null && { ConnectCampaignArn: input.ConnectCampaignArn }),
    ...(input.ConnectCampaignExecutionRoleArn != null && {
      ConnectCampaignExecutionRoleArn: input.ConnectCampaignExecutionRoleArn,
    }),
  };
};

/**
 * serializeAws_restJson1JourneyCustomMessage
 */
const se_JourneyCustomMessage = (input: JourneyCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: input.Data }),
  };
};

/**
 * serializeAws_restJson1JourneyEmailMessage
 */
const se_JourneyEmailMessage = (input: JourneyEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
  };
};

/**
 * serializeAws_restJson1JourneyLimits
 */
const se_JourneyLimits = (input: JourneyLimits, context: __SerdeContext): any => {
  return {
    ...(input.DailyCap != null && { DailyCap: input.DailyCap }),
    ...(input.EndpointReentryCap != null && { EndpointReentryCap: input.EndpointReentryCap }),
    ...(input.EndpointReentryInterval != null && { EndpointReentryInterval: input.EndpointReentryInterval }),
    ...(input.MessagesPerSecond != null && { MessagesPerSecond: input.MessagesPerSecond }),
  };
};

/**
 * serializeAws_restJson1JourneyPushMessage
 */
const se_JourneyPushMessage = (input: JourneyPushMessage, context: __SerdeContext): any => {
  return {
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
  };
};

/**
 * serializeAws_restJson1JourneySchedule
 */
const se_JourneySchedule = (input: JourneySchedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime.toISOString().split(".")[0] + "Z" }),
    ...(input.StartTime != null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

/**
 * serializeAws_restJson1JourneySMSMessage
 */
const se_JourneySMSMessage = (input: JourneySMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

/**
 * serializeAws_restJson1JourneyStateRequest
 */
const se_JourneyStateRequest = (input: JourneyStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_restJson1ListOf__EndpointTypesElement
 */
const se_ListOf__EndpointTypesElement = (input: (__EndpointTypesElement | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOf__string
 */
const se_ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListOfClosedDaysRules
 */
const se_ListOfClosedDaysRules = (input: ClosedDaysRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ClosedDaysRule(entry, context);
    });
};

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

/**
 * serializeAws_restJson1ListOfInAppMessageContent
 */
const se_ListOfInAppMessageContent = (input: InAppMessageContent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InAppMessageContent(entry, context);
    });
};

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

/**
 * serializeAws_restJson1ListOfOpenHoursRules
 */
const se_ListOfOpenHoursRules = (input: OpenHoursRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpenHoursRule(entry, context);
    });
};

/**
 * serializeAws_restJson1ListOfRandomSplitEntry
 */
const se_ListOfRandomSplitEntry = (input: RandomSplitEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RandomSplitEntry(entry, context);
    });
};

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

/**
 * serializeAws_restJson1ListOfSegmentReference
 */
const se_ListOfSegmentReference = (input: SegmentReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SegmentReference(entry, context);
    });
};

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

/**
 * serializeAws_restJson1MapOf__string
 */
const se_MapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

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

/**
 * serializeAws_restJson1MapOfAddressConfiguration
 */
const se_MapOfAddressConfiguration = (input: Record<string, AddressConfiguration>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AddressConfiguration(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MapOfAttributeDimension
 */
const se_MapOfAttributeDimension = (input: Record<string, AttributeDimension>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeDimension(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MapOfEndpointSendConfiguration
 */
const se_MapOfEndpointSendConfiguration = (
  input: Record<string, EndpointSendConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_EndpointSendConfiguration(value, context);
    return acc;
  }, {});
};

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

/**
 * serializeAws_restJson1MapOfListOf__string
 */
const se_MapOfListOf__string = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ListOf__string(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MapOfListOfOpenHoursRules
 */
const se_MapOfListOfOpenHoursRules = (input: Record<string, OpenHoursRule[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [DayOfWeek | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ListOfOpenHoursRules(value, context);
    return acc;
  }, {});
};

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

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageSmallIconUrl != null && { ImageSmallIconUrl: input.ImageSmallIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.JsonBody != null && { JsonBody: input.JsonBody }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_restJson1MessageConfiguration
 */
const se_MessageConfiguration = (input: MessageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ADMMessage != null && { ADMMessage: se_Message(input.ADMMessage, context) }),
    ...(input.APNSMessage != null && { APNSMessage: se_Message(input.APNSMessage, context) }),
    ...(input.BaiduMessage != null && { BaiduMessage: se_Message(input.BaiduMessage, context) }),
    ...(input.CustomMessage != null && { CustomMessage: se_CampaignCustomMessage(input.CustomMessage, context) }),
    ...(input.DefaultMessage != null && { DefaultMessage: se_Message(input.DefaultMessage, context) }),
    ...(input.EmailMessage != null && { EmailMessage: se_CampaignEmailMessage(input.EmailMessage, context) }),
    ...(input.GCMMessage != null && { GCMMessage: se_Message(input.GCMMessage, context) }),
    ...(input.InAppMessage != null && { InAppMessage: se_CampaignInAppMessage(input.InAppMessage, context) }),
    ...(input.SMSMessage != null && { SMSMessage: se_CampaignSmsMessage(input.SMSMessage, context) }),
  };
};

/**
 * serializeAws_restJson1MessageRequest
 */
const se_MessageRequest = (input: MessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && { Addresses: se_MapOfAddressConfiguration(input.Addresses, context) }),
    ...(input.Context != null && { Context: se_MapOf__string(input.Context, context) }),
    ...(input.Endpoints != null && { Endpoints: se_MapOfEndpointSendConfiguration(input.Endpoints, context) }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: se_DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: se_TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId != null && { TraceId: input.TraceId }),
  };
};

/**
 * serializeAws_restJson1MetricDimension
 */
const se_MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

/**
 * serializeAws_restJson1MultiConditionalBranch
 */
const se_MultiConditionalBranch = (input: MultiConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: se_SimpleCondition(input.Condition, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
  };
};

/**
 * serializeAws_restJson1MultiConditionalSplitActivity
 */
const se_MultiConditionalSplitActivity = (input: MultiConditionalSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Branches != null && { Branches: se_ListOfMultiConditionalBranch(input.Branches, context) }),
    ...(input.DefaultActivity != null && { DefaultActivity: input.DefaultActivity }),
    ...(input.EvaluationWaitTime != null && { EvaluationWaitTime: se_WaitTime(input.EvaluationWaitTime, context) }),
  };
};

/**
 * serializeAws_restJson1NumberValidateRequest
 */
const se_NumberValidateRequest = (input: NumberValidateRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

/**
 * serializeAws_restJson1OpenHours
 */
const se_OpenHours = (input: OpenHours, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM != null && { CUSTOM: se_MapOfListOfOpenHoursRules(input.CUSTOM, context) }),
    ...(input.EMAIL != null && { EMAIL: se_MapOfListOfOpenHoursRules(input.EMAIL, context) }),
    ...(input.PUSH != null && { PUSH: se_MapOfListOfOpenHoursRules(input.PUSH, context) }),
    ...(input.SMS != null && { SMS: se_MapOfListOfOpenHoursRules(input.SMS, context) }),
    ...(input.VOICE != null && { VOICE: se_MapOfListOfOpenHoursRules(input.VOICE, context) }),
  };
};

/**
 * serializeAws_restJson1OpenHoursRule
 */
const se_OpenHoursRule = (input: OpenHoursRule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
  };
};

/**
 * serializeAws_restJson1OverrideButtonConfiguration
 */
const se_OverrideButtonConfiguration = (input: OverrideButtonConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ButtonAction != null && { ButtonAction: input.ButtonAction }),
    ...(input.Link != null && { Link: input.Link }),
  };
};

/**
 * serializeAws_restJson1PublicEndpoint
 */
const se_PublicEndpoint = (input: PublicEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && { Attributes: se_MapOfListOf__string(input.Attributes, context) }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && { Demographic: se_EndpointDemographic(input.Demographic, context) }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location != null && { Location: se_EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: se_MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: se_EndpointUser(input.User, context) }),
  };
};

/**
 * serializeAws_restJson1PushMessageActivity
 */
const se_PushMessageActivity = (input: PushMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && { MessageConfig: se_JourneyPushMessage(input.MessageConfig, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

/**
 * serializeAws_restJson1PushNotificationTemplateRequest
 */
const se_PushNotificationTemplateRequest = (input: PushNotificationTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ADM != null && { ADM: se_AndroidPushNotificationTemplate(input.ADM, context) }),
    ...(input.APNS != null && { APNS: se_APNSPushNotificationTemplate(input.APNS, context) }),
    ...(input.Baidu != null && { Baidu: se_AndroidPushNotificationTemplate(input.Baidu, context) }),
    ...(input.Default != null && { Default: se_DefaultPushNotificationTemplate(input.Default, context) }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.GCM != null && { GCM: se_AndroidPushNotificationTemplate(input.GCM, context) }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1QuietTime
 */
const se_QuietTime = (input: QuietTime, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
  };
};

/**
 * serializeAws_restJson1RandomSplitActivity
 */
const se_RandomSplitActivity = (input: RandomSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Branches != null && { Branches: se_ListOfRandomSplitEntry(input.Branches, context) }),
  };
};

/**
 * serializeAws_restJson1RandomSplitEntry
 */
const se_RandomSplitEntry = (input: RandomSplitEntry, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.Percentage != null && { Percentage: input.Percentage }),
  };
};

/**
 * serializeAws_restJson1RawEmail
 */
const se_RawEmail = (input: RawEmail, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
  };
};

/**
 * serializeAws_restJson1RecencyDimension
 */
const se_RecencyDimension = (input: RecencyDimension, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.RecencyType != null && { RecencyType: input.RecencyType }),
  };
};

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime }),
    ...(input.EventFilter != null && { EventFilter: se_CampaignEventFilter(input.EventFilter, context) }),
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.IsLocalTime != null && { IsLocalTime: input.IsLocalTime }),
    ...(input.QuietTime != null && { QuietTime: se_QuietTime(input.QuietTime, context) }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

/**
 * serializeAws_restJson1SegmentBehaviors
 */
const se_SegmentBehaviors = (input: SegmentBehaviors, context: __SerdeContext): any => {
  return {
    ...(input.Recency != null && { Recency: se_RecencyDimension(input.Recency, context) }),
  };
};

/**
 * serializeAws_restJson1SegmentCondition
 */
const se_SegmentCondition = (input: SegmentCondition, context: __SerdeContext): any => {
  return {
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
  };
};

/**
 * serializeAws_restJson1SegmentDemographics
 */
const se_SegmentDemographics = (input: SegmentDemographics, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion != null && { AppVersion: se_SetDimension(input.AppVersion, context) }),
    ...(input.Channel != null && { Channel: se_SetDimension(input.Channel, context) }),
    ...(input.DeviceType != null && { DeviceType: se_SetDimension(input.DeviceType, context) }),
    ...(input.Make != null && { Make: se_SetDimension(input.Make, context) }),
    ...(input.Model != null && { Model: se_SetDimension(input.Model, context) }),
    ...(input.Platform != null && { Platform: se_SetDimension(input.Platform, context) }),
  };
};

/**
 * serializeAws_restJson1SegmentDimensions
 */
const se_SegmentDimensions = (input: SegmentDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_MapOfAttributeDimension(input.Attributes, context) }),
    ...(input.Behavior != null && { Behavior: se_SegmentBehaviors(input.Behavior, context) }),
    ...(input.Demographic != null && { Demographic: se_SegmentDemographics(input.Demographic, context) }),
    ...(input.Location != null && { Location: se_SegmentLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: se_MapOfMetricDimension(input.Metrics, context) }),
    ...(input.UserAttributes != null && { UserAttributes: se_MapOfAttributeDimension(input.UserAttributes, context) }),
  };
};

/**
 * serializeAws_restJson1SegmentGroup
 */
const se_SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_ListOfSegmentDimensions(input.Dimensions, context) }),
    ...(input.SourceSegments != null && { SourceSegments: se_ListOfSegmentReference(input.SourceSegments, context) }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1SegmentGroupList
 */
const se_SegmentGroupList = (input: SegmentGroupList, context: __SerdeContext): any => {
  return {
    ...(input.Groups != null && { Groups: se_ListOfSegmentGroup(input.Groups, context) }),
    ...(input.Include != null && { Include: input.Include }),
  };
};

/**
 * serializeAws_restJson1SegmentLocation
 */
const se_SegmentLocation = (input: SegmentLocation, context: __SerdeContext): any => {
  return {
    ...(input.Country != null && { Country: se_SetDimension(input.Country, context) }),
    ...(input.GPSPoint != null && { GPSPoint: se_GPSPointDimension(input.GPSPoint, context) }),
  };
};

/**
 * serializeAws_restJson1SegmentReference
 */
const se_SegmentReference = (input: SegmentReference, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_restJson1SendOTPMessageRequestParameters
 */
const se_SendOTPMessageRequestParameters = (input: SendOTPMessageRequestParameters, context: __SerdeContext): any => {
  return {
    ...(input.AllowedAttempts != null && { AllowedAttempts: input.AllowedAttempts }),
    ...(input.BrandName != null && { BrandName: input.BrandName }),
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.CodeLength != null && { CodeLength: input.CodeLength }),
    ...(input.DestinationIdentity != null && { DestinationIdentity: input.DestinationIdentity }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.OriginationIdentity != null && { OriginationIdentity: input.OriginationIdentity }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
    ...(input.ValidityPeriod != null && { ValidityPeriod: input.ValidityPeriod }),
  };
};

/**
 * serializeAws_restJson1SendUsersMessageRequest
 */
const se_SendUsersMessageRequest = (input: SendUsersMessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Context != null && { Context: se_MapOf__string(input.Context, context) }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: se_DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: se_TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId != null && { TraceId: input.TraceId }),
    ...(input.Users != null && { Users: se_MapOfEndpointSendConfiguration(input.Users, context) }),
  };
};

/**
 * serializeAws_restJson1Session
 */
const se_Session = (input: Session, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.StartTimestamp != null && { StartTimestamp: input.StartTimestamp }),
    ...(input.StopTimestamp != null && { StopTimestamp: input.StopTimestamp }),
  };
};

/**
 * serializeAws_restJson1SetDimension
 */
const se_SetDimension = (input: SetDimension, context: __SerdeContext): any => {
  return {
    ...(input.DimensionType != null && { DimensionType: input.DimensionType }),
    ...(input.Values != null && { Values: se_ListOf__string(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1SimpleCondition
 */
const se_SimpleCondition = (input: SimpleCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventCondition != null && { EventCondition: se_EventCondition(input.EventCondition, context) }),
    ...(input.SegmentCondition != null && { SegmentCondition: se_SegmentCondition(input.SegmentCondition, context) }),
    ...(input.SegmentDimensions != null && {
      segmentDimensions: se_SegmentDimensions(input.SegmentDimensions, context),
    }),
  };
};

/**
 * serializeAws_restJson1SimpleEmail
 */
const se_SimpleEmail = (input: SimpleEmail, context: __SerdeContext): any => {
  return {
    ...(input.HtmlPart != null && { HtmlPart: se_SimpleEmailPart(input.HtmlPart, context) }),
    ...(input.Subject != null && { Subject: se_SimpleEmailPart(input.Subject, context) }),
    ...(input.TextPart != null && { TextPart: se_SimpleEmailPart(input.TextPart, context) }),
  };
};

/**
 * serializeAws_restJson1SimpleEmailPart
 */
const se_SimpleEmailPart = (input: SimpleEmailPart, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.Data != null && { Data: input.Data }),
  };
};

/**
 * serializeAws_restJson1SMSChannelRequest
 */
const se_SMSChannelRequest = (input: SMSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.ShortCode != null && { ShortCode: input.ShortCode }),
  };
};

/**
 * serializeAws_restJson1SMSMessage
 */
const se_SMSMessage = (input: SMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

/**
 * serializeAws_restJson1SMSMessageActivity
 */
const se_SMSMessageActivity = (input: SMSMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && { MessageConfig: se_JourneySMSMessage(input.MessageConfig, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

/**
 * serializeAws_restJson1SMSTemplateRequest
 */
const se_SMSTemplateRequest = (input: SMSTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1StartCondition
 */
const se_StartCondition = (input: StartCondition, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventStartCondition != null && {
      EventStartCondition: se_EventStartCondition(input.EventStartCondition, context),
    }),
    ...(input.SegmentStartCondition != null && {
      SegmentStartCondition: se_SegmentCondition(input.SegmentStartCondition, context),
    }),
  };
};

/**
 * serializeAws_restJson1TagsModel
 */
const se_TagsModel = (input: TagsModel, context: __SerdeContext): any => {
  return {
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1Template
 */
const se_Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_restJson1TemplateActiveVersionRequest
 */
const se_TemplateActiveVersionRequest = (input: TemplateActiveVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_restJson1TemplateConfiguration
 */
const se_TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EmailTemplate != null && { EmailTemplate: se_Template(input.EmailTemplate, context) }),
    ...(input.PushTemplate != null && { PushTemplate: se_Template(input.PushTemplate, context) }),
    ...(input.SMSTemplate != null && { SMSTemplate: se_Template(input.SMSTemplate, context) }),
    ...(input.VoiceTemplate != null && { VoiceTemplate: se_Template(input.VoiceTemplate, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateAttributesRequest
 */
const se_UpdateAttributesRequest = (input: UpdateAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Blacklist != null && { Blacklist: se_ListOf__string(input.Blacklist, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateRecommenderConfigurationShape
 */
const se_UpdateRecommenderConfigurationShape = (
  input: UpdateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_MapOf__string(input.Attributes, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RecommendationProviderIdType != null && {
      RecommendationProviderIdType: input.RecommendationProviderIdType,
    }),
    ...(input.RecommendationProviderRoleArn != null && {
      RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
    }),
    ...(input.RecommendationProviderUri != null && { RecommendationProviderUri: input.RecommendationProviderUri }),
    ...(input.RecommendationTransformerUri != null && {
      RecommendationTransformerUri: input.RecommendationTransformerUri,
    }),
    ...(input.RecommendationsDisplayName != null && { RecommendationsDisplayName: input.RecommendationsDisplayName }),
    ...(input.RecommendationsPerMessage != null && { RecommendationsPerMessage: input.RecommendationsPerMessage }),
  };
};

/**
 * serializeAws_restJson1VerifyOTPMessageRequestParameters
 */
const se_VerifyOTPMessageRequestParameters = (
  input: VerifyOTPMessageRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationIdentity != null && { DestinationIdentity: input.DestinationIdentity }),
    ...(input.Otp != null && { Otp: input.Otp }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
  };
};

/**
 * serializeAws_restJson1VoiceChannelRequest
 */
const se_VoiceChannelRequest = (input: VoiceChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1VoiceMessage
 */
const se_VoiceMessage = (input: VoiceMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.Substitutions != null && { Substitutions: se_MapOfListOf__string(input.Substitutions, context) }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  };
};

/**
 * serializeAws_restJson1VoiceTemplateRequest
 */
const se_VoiceTemplateRequest = (input: VoiceTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1WaitActivity
 */
const se_WaitActivity = (input: WaitActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.WaitTime != null && { WaitTime: se_WaitTime(input.WaitTime, context) }),
  };
};

/**
 * serializeAws_restJson1WaitTime
 */
const se_WaitTime = (input: WaitTime, context: __SerdeContext): any => {
  return {
    ...(input.WaitFor != null && { WaitFor: input.WaitFor }),
    ...(input.WaitUntil != null && { WaitUntil: input.WaitUntil }),
  };
};

/**
 * serializeAws_restJson1WriteApplicationSettingsRequest
 */
const se_WriteApplicationSettingsRequest = (input: WriteApplicationSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CampaignHook != null && { CampaignHook: se_CampaignHook(input.CampaignHook, context) }),
    ...(input.CloudWatchMetricsEnabled != null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.EventTaggingEnabled != null && { EventTaggingEnabled: input.EventTaggingEnabled }),
    ...(input.Limits != null && { Limits: se_CampaignLimits(input.Limits, context) }),
    ...(input.QuietTime != null && { QuietTime: se_QuietTime(input.QuietTime, context) }),
  };
};

/**
 * serializeAws_restJson1WriteCampaignRequest
 */
const se_WriteCampaignRequest = (input: WriteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalTreatments != null && {
      AdditionalTreatments: se_ListOfWriteTreatmentResource(input.AdditionalTreatments, context),
    }),
    ...(input.CustomDeliveryConfiguration != null && {
      CustomDeliveryConfiguration: se_CustomDeliveryConfiguration(input.CustomDeliveryConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HoldoutPercent != null && { HoldoutPercent: input.HoldoutPercent }),
    ...(input.Hook != null && { Hook: se_CampaignHook(input.Hook, context) }),
    ...(input.IsPaused != null && { IsPaused: input.IsPaused }),
    ...(input.Limits != null && { Limits: se_CampaignLimits(input.Limits, context) }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: se_MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Schedule != null && { Schedule: se_Schedule(input.Schedule, context) }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion != null && { SegmentVersion: input.SegmentVersion }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: se_TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription != null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName != null && { TreatmentName: input.TreatmentName }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1WriteEventStream
 */
const se_WriteEventStream = (input: WriteEventStream, context: __SerdeContext): any => {
  return {
    ...(input.DestinationStreamArn != null && { DestinationStreamArn: input.DestinationStreamArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1WriteJourneyRequest
 */
const se_WriteJourneyRequest = (input: WriteJourneyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Activities != null && { Activities: se_MapOfActivity(input.Activities, context) }),
    ...(input.ClosedDays != null && { ClosedDays: se_ClosedDays(input.ClosedDays, context) }),
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.JourneyChannelSettings != null && {
      JourneyChannelSettings: se_JourneyChannelSettings(input.JourneyChannelSettings, context),
    }),
    ...(input.LastModifiedDate != null && { LastModifiedDate: input.LastModifiedDate }),
    ...(input.Limits != null && { Limits: se_JourneyLimits(input.Limits, context) }),
    ...(input.LocalTime != null && { LocalTime: input.LocalTime }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OpenHours != null && { OpenHours: se_OpenHours(input.OpenHours, context) }),
    ...(input.QuietTime != null && { QuietTime: se_QuietTime(input.QuietTime, context) }),
    ...(input.RefreshFrequency != null && { RefreshFrequency: input.RefreshFrequency }),
    ...(input.RefreshOnSegmentUpdate != null && { RefreshOnSegmentUpdate: input.RefreshOnSegmentUpdate }),
    ...(input.Schedule != null && { Schedule: se_JourneySchedule(input.Schedule, context) }),
    ...(input.SendingSchedule != null && { SendingSchedule: input.SendingSchedule }),
    ...(input.StartActivity != null && { StartActivity: input.StartActivity }),
    ...(input.StartCondition != null && { StartCondition: se_StartCondition(input.StartCondition, context) }),
    ...(input.State != null && { State: input.State }),
    ...(input.WaitForQuietTime != null && { WaitForQuietTime: input.WaitForQuietTime }),
  };
};

/**
 * serializeAws_restJson1WriteSegmentRequest
 */
const se_WriteSegmentRequest = (input: WriteSegmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_SegmentDimensions(input.Dimensions, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SegmentGroups != null && { SegmentGroups: se_SegmentGroupList(input.SegmentGroups, context) }),
    ...(input.tags != null && { tags: se_MapOf__string(input.tags, context) }),
  };
};

/**
 * serializeAws_restJson1WriteTreatmentResource
 */
const se_WriteTreatmentResource = (input: WriteTreatmentResource, context: __SerdeContext): any => {
  return {
    ...(input.CustomDeliveryConfiguration != null && {
      CustomDeliveryConfiguration: se_CustomDeliveryConfiguration(input.CustomDeliveryConfiguration, context),
    }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: se_MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Schedule != null && { Schedule: se_Schedule(input.Schedule, context) }),
    ...(input.SizePercent != null && { SizePercent: input.SizePercent }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: se_TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription != null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName != null && { TreatmentName: input.TreatmentName }),
  };
};

/**
 * deserializeAws_restJson1ActivitiesResponse
 */
const de_ActivitiesResponse = (output: any, context: __SerdeContext): ActivitiesResponse => {
  return {
    Item: output.Item != null ? de_ListOfActivityResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1Activity
 */
const de_Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    CUSTOM: output.CUSTOM != null ? de_CustomMessageActivity(output.CUSTOM, context) : undefined,
    ConditionalSplit:
      output.ConditionalSplit != null ? de_ConditionalSplitActivity(output.ConditionalSplit, context) : undefined,
    ContactCenter: output.ContactCenter != null ? de_ContactCenterActivity(output.ContactCenter, context) : undefined,
    Description: __expectString(output.Description),
    EMAIL: output.EMAIL != null ? de_EmailMessageActivity(output.EMAIL, context) : undefined,
    Holdout: output.Holdout != null ? de_HoldoutActivity(output.Holdout, context) : undefined,
    MultiCondition:
      output.MultiCondition != null ? de_MultiConditionalSplitActivity(output.MultiCondition, context) : undefined,
    PUSH: output.PUSH != null ? de_PushMessageActivity(output.PUSH, context) : undefined,
    RandomSplit: output.RandomSplit != null ? de_RandomSplitActivity(output.RandomSplit, context) : undefined,
    SMS: output.SMS != null ? de_SMSMessageActivity(output.SMS, context) : undefined,
    Wait: output.Wait != null ? de_WaitActivity(output.Wait, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ActivityResponse
 */
const de_ActivityResponse = (output: any, context: __SerdeContext): ActivityResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignId: __expectString(output.CampaignId),
    End: __expectString(output.End),
    Id: __expectString(output.Id),
    Result: __expectString(output.Result),
    ScheduledStart: __expectString(output.ScheduledStart),
    Start: __expectString(output.Start),
    State: __expectString(output.State),
    SuccessfulEndpointCount: __expectInt32(output.SuccessfulEndpointCount),
    TimezonesCompletedCount: __expectInt32(output.TimezonesCompletedCount),
    TimezonesTotalCount: __expectInt32(output.TimezonesTotalCount),
    TotalEndpointCount: __expectInt32(output.TotalEndpointCount),
    TreatmentId: __expectString(output.TreatmentId),
  } as any;
};

/**
 * deserializeAws_restJson1ADMChannelResponse
 */
const de_ADMChannelResponse = (output: any, context: __SerdeContext): ADMChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1AndroidPushNotificationTemplate
 */
const de_AndroidPushNotificationTemplate = (output: any, context: __SerdeContext): AndroidPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    ImageIconUrl: __expectString(output.ImageIconUrl),
    ImageUrl: __expectString(output.ImageUrl),
    RawContent: __expectString(output.RawContent),
    SmallImageIconUrl: __expectString(output.SmallImageIconUrl),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1APNSChannelResponse
 */
const de_APNSChannelResponse = (output: any, context: __SerdeContext): APNSChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1APNSPushNotificationTemplate
 */
const de_APNSPushNotificationTemplate = (output: any, context: __SerdeContext): APNSPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    MediaUrl: __expectString(output.MediaUrl),
    RawContent: __expectString(output.RawContent),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1APNSSandboxChannelResponse
 */
const de_APNSSandboxChannelResponse = (output: any, context: __SerdeContext): APNSSandboxChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1APNSVoipChannelResponse
 */
const de_APNSVoipChannelResponse = (output: any, context: __SerdeContext): APNSVoipChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1APNSVoipSandboxChannelResponse
 */
const de_APNSVoipSandboxChannelResponse = (output: any, context: __SerdeContext): APNSVoipSandboxChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    DefaultAuthenticationMethod: __expectString(output.DefaultAuthenticationMethod),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    HasTokenKey: __expectBoolean(output.HasTokenKey),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationDateRangeKpiResponse
 */
const de_ApplicationDateRangeKpiResponse = (output: any, context: __SerdeContext): ApplicationDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? de_BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationResponse
 */
const de_ApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationSettingsResource
 */
const de_ApplicationSettingsResource = (output: any, context: __SerdeContext): ApplicationSettingsResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignHook: output.CampaignHook != null ? de_CampaignHook(output.CampaignHook, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? de_CampaignLimits(output.Limits, context) : undefined,
    QuietTime: output.QuietTime != null ? de_QuietTime(output.QuietTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationsResponse
 */
const de_ApplicationsResponse = (output: any, context: __SerdeContext): ApplicationsResponse => {
  return {
    Item: output.Item != null ? de_ListOfApplicationResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1AttributeDimension
 */
const de_AttributeDimension = (output: any, context: __SerdeContext): AttributeDimension => {
  return {
    AttributeType: __expectString(output.AttributeType),
    Values: output.Values != null ? de_ListOf__string(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AttributesResource
 */
const de_AttributesResource = (output: any, context: __SerdeContext): AttributesResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    AttributeType: __expectString(output.AttributeType),
    Attributes: output.Attributes != null ? de_ListOf__string(output.Attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BaiduChannelResponse
 */
const de_BaiduChannelResponse = (output: any, context: __SerdeContext): BaiduChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Credential: __expectString(output.Credential),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1BaseKpiResult
 */
const de_BaseKpiResult = (output: any, context: __SerdeContext): BaseKpiResult => {
  return {
    Rows: output.Rows != null ? de_ListOfResultRow(output.Rows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CampaignCustomMessage
 */
const de_CampaignCustomMessage = (output: any, context: __SerdeContext): CampaignCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignDateRangeKpiResponse
 */
const de_CampaignDateRangeKpiResponse = (output: any, context: __SerdeContext): CampaignDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignId: __expectString(output.CampaignId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? de_BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CampaignEmailMessage
 */
const de_CampaignEmailMessage = (output: any, context: __SerdeContext): CampaignEmailMessage => {
  return {
    Body: __expectString(output.Body),
    FromAddress: __expectString(output.FromAddress),
    HtmlBody: __expectString(output.HtmlBody),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignEventFilter
 */
const de_CampaignEventFilter = (output: any, context: __SerdeContext): CampaignEventFilter => {
  return {
    Dimensions: output.Dimensions != null ? de_EventDimensions(output.Dimensions, context) : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignHook
 */
const de_CampaignHook = (output: any, context: __SerdeContext): CampaignHook => {
  return {
    LambdaFunctionName: __expectString(output.LambdaFunctionName),
    Mode: __expectString(output.Mode),
    WebUrl: __expectString(output.WebUrl),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignInAppMessage
 */
const de_CampaignInAppMessage = (output: any, context: __SerdeContext): CampaignInAppMessage => {
  return {
    Body: __expectString(output.Body),
    Content: output.Content != null ? de_ListOfInAppMessageContent(output.Content, context) : undefined,
    CustomConfig: output.CustomConfig != null ? de_MapOf__string(output.CustomConfig, context) : undefined,
    Layout: __expectString(output.Layout),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignLimits
 */
const de_CampaignLimits = (output: any, context: __SerdeContext): CampaignLimits => {
  return {
    Daily: __expectInt32(output.Daily),
    MaximumDuration: __expectInt32(output.MaximumDuration),
    MessagesPerSecond: __expectInt32(output.MessagesPerSecond),
    Session: __expectInt32(output.Session),
    Total: __expectInt32(output.Total),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignResponse
 */
const de_CampaignResponse = (output: any, context: __SerdeContext): CampaignResponse => {
  return {
    AdditionalTreatments:
      output.AdditionalTreatments != null
        ? de_ListOfTreatmentResource(output.AdditionalTreatments, context)
        : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration != null
        ? de_CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    DefaultState: output.DefaultState != null ? de_CampaignState(output.DefaultState, context) : undefined,
    Description: __expectString(output.Description),
    HoldoutPercent: __expectInt32(output.HoldoutPercent),
    Hook: output.Hook != null ? de_CampaignHook(output.Hook, context) : undefined,
    Id: __expectString(output.Id),
    IsPaused: __expectBoolean(output.IsPaused),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? de_CampaignLimits(output.Limits, context) : undefined,
    MessageConfiguration:
      output.MessageConfiguration != null ? de_MessageConfiguration(output.MessageConfiguration, context) : undefined,
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    Schedule: output.Schedule != null ? de_Schedule(output.Schedule, context) : undefined,
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectInt32(output.SegmentVersion),
    State: output.State != null ? de_CampaignState(output.State, context) : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? de_TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
    Version: __expectInt32(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CampaignSmsMessage
 */
const de_CampaignSmsMessage = (output: any, context: __SerdeContext): CampaignSmsMessage => {
  return {
    Body: __expectString(output.Body),
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignsResponse
 */
const de_CampaignsResponse = (output: any, context: __SerdeContext): CampaignsResponse => {
  return {
    Item: output.Item != null ? de_ListOfCampaignResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1CampaignState
 */
const de_CampaignState = (output: any, context: __SerdeContext): CampaignState => {
  return {
    CampaignStatus: __expectString(output.CampaignStatus),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelResponse
 */
const de_ChannelResponse = (output: any, context: __SerdeContext): ChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1ChannelsResponse
 */
const de_ChannelsResponse = (output: any, context: __SerdeContext): ChannelsResponse => {
  return {
    Channels: output.Channels != null ? de_MapOfChannelResponse(output.Channels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClosedDays
 */
const de_ClosedDays = (output: any, context: __SerdeContext): ClosedDays => {
  return {
    CUSTOM: output.CUSTOM != null ? de_ListOfClosedDaysRules(output.CUSTOM, context) : undefined,
    EMAIL: output.EMAIL != null ? de_ListOfClosedDaysRules(output.EMAIL, context) : undefined,
    PUSH: output.PUSH != null ? de_ListOfClosedDaysRules(output.PUSH, context) : undefined,
    SMS: output.SMS != null ? de_ListOfClosedDaysRules(output.SMS, context) : undefined,
    VOICE: output.VOICE != null ? de_ListOfClosedDaysRules(output.VOICE, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClosedDaysRule
 */
const de_ClosedDaysRule = (output: any, context: __SerdeContext): ClosedDaysRule => {
  return {
    EndDateTime: __expectString(output.EndDateTime),
    Name: __expectString(output.Name),
    StartDateTime: __expectString(output.StartDateTime),
  } as any;
};

/**
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Conditions: output.Conditions != null ? de_ListOfSimpleCondition(output.Conditions, context) : undefined,
    Operator: __expectString(output.Operator),
  } as any;
};

/**
 * deserializeAws_restJson1ConditionalSplitActivity
 */
const de_ConditionalSplitActivity = (output: any, context: __SerdeContext): ConditionalSplitActivity => {
  return {
    Condition: output.Condition != null ? de_Condition(output.Condition, context) : undefined,
    EvaluationWaitTime: output.EvaluationWaitTime != null ? de_WaitTime(output.EvaluationWaitTime, context) : undefined,
    FalseActivity: __expectString(output.FalseActivity),
    TrueActivity: __expectString(output.TrueActivity),
  } as any;
};

/**
 * deserializeAws_restJson1ContactCenterActivity
 */
const de_ContactCenterActivity = (output: any, context: __SerdeContext): ContactCenterActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
  } as any;
};

/**
 * deserializeAws_restJson1CreateTemplateMessageBody
 */
const de_CreateTemplateMessageBody = (output: any, context: __SerdeContext): CreateTemplateMessageBody => {
  return {
    Arn: __expectString(output.Arn),
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

/**
 * deserializeAws_restJson1CustomDeliveryConfiguration
 */
const de_CustomDeliveryConfiguration = (output: any, context: __SerdeContext): CustomDeliveryConfiguration => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes != null ? de_ListOf__EndpointTypesElement(output.EndpointTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomMessageActivity
 */
const de_CustomMessageActivity = (output: any, context: __SerdeContext): CustomMessageActivity => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes != null ? de_ListOf__EndpointTypesElement(output.EndpointTypes, context) : undefined,
    MessageConfig: output.MessageConfig != null ? de_JourneyCustomMessage(output.MessageConfig, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultButtonConfiguration
 */
const de_DefaultButtonConfiguration = (output: any, context: __SerdeContext): DefaultButtonConfiguration => {
  return {
    BackgroundColor: __expectString(output.BackgroundColor),
    BorderRadius: __expectInt32(output.BorderRadius),
    ButtonAction: __expectString(output.ButtonAction),
    Link: __expectString(output.Link),
    Text: __expectString(output.Text),
    TextColor: __expectString(output.TextColor),
  } as any;
};

/**
 * deserializeAws_restJson1DefaultPushNotificationTemplate
 */
const de_DefaultPushNotificationTemplate = (output: any, context: __SerdeContext): DefaultPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1EmailChannelResponse
 */
const de_EmailChannelResponse = (output: any, context: __SerdeContext): EmailChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    ConfigurationSet: __expectString(output.ConfigurationSet),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    FromAddress: __expectString(output.FromAddress),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    Identity: __expectString(output.Identity),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    MessagesPerSecond: __expectInt32(output.MessagesPerSecond),
    Platform: __expectString(output.Platform),
    RoleArn: __expectString(output.RoleArn),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1EmailMessageActivity
 */
const de_EmailMessageActivity = (output: any, context: __SerdeContext): EmailMessageActivity => {
  return {
    MessageConfig: output.MessageConfig != null ? de_JourneyEmailMessage(output.MessageConfig, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1EmailTemplateResponse
 */
const de_EmailTemplateResponse = (output: any, context: __SerdeContext): EmailTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    HtmlPart: __expectString(output.HtmlPart),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    Subject: __expectString(output.Subject),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    TextPart: __expectString(output.TextPart),
    Version: __expectString(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointDemographic
 */
const de_EndpointDemographic = (output: any, context: __SerdeContext): EndpointDemographic => {
  return {
    AppVersion: __expectString(output.AppVersion),
    Locale: __expectString(output.Locale),
    Make: __expectString(output.Make),
    Model: __expectString(output.Model),
    ModelVersion: __expectString(output.ModelVersion),
    Platform: __expectString(output.Platform),
    PlatformVersion: __expectString(output.PlatformVersion),
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointItemResponse
 */
const de_EndpointItemResponse = (output: any, context: __SerdeContext): EndpointItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointLocation
 */
const de_EndpointLocation = (output: any, context: __SerdeContext): EndpointLocation => {
  return {
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    Latitude: __limitedParseDouble(output.Latitude),
    Longitude: __limitedParseDouble(output.Longitude),
    PostalCode: __expectString(output.PostalCode),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointMessageResult
 */
const de_EndpointMessageResult = (output: any, context: __SerdeContext): EndpointMessageResult => {
  return {
    Address: __expectString(output.Address),
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectInt32(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointResponse
 */
const de_EndpointResponse = (output: any, context: __SerdeContext): EndpointResponse => {
  return {
    Address: __expectString(output.Address),
    ApplicationId: __expectString(output.ApplicationId),
    Attributes: output.Attributes != null ? de_MapOfListOf__string(output.Attributes, context) : undefined,
    ChannelType: __expectString(output.ChannelType),
    CohortId: __expectString(output.CohortId),
    CreationDate: __expectString(output.CreationDate),
    Demographic: output.Demographic != null ? de_EndpointDemographic(output.Demographic, context) : undefined,
    EffectiveDate: __expectString(output.EffectiveDate),
    EndpointStatus: __expectString(output.EndpointStatus),
    Id: __expectString(output.Id),
    Location: output.Location != null ? de_EndpointLocation(output.Location, context) : undefined,
    Metrics: output.Metrics != null ? de_MapOf__double(output.Metrics, context) : undefined,
    OptOut: __expectString(output.OptOut),
    RequestId: __expectString(output.RequestId),
    User: output.User != null ? de_EndpointUser(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointsResponse
 */
const de_EndpointsResponse = (output: any, context: __SerdeContext): EndpointsResponse => {
  return {
    Item: output.Item != null ? de_ListOfEndpointResponse(output.Item, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointUser
 */
const de_EndpointUser = (output: any, context: __SerdeContext): EndpointUser => {
  return {
    UserAttributes: output.UserAttributes != null ? de_MapOfListOf__string(output.UserAttributes, context) : undefined,
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_restJson1EventCondition
 */
const de_EventCondition = (output: any, context: __SerdeContext): EventCondition => {
  return {
    Dimensions: output.Dimensions != null ? de_EventDimensions(output.Dimensions, context) : undefined,
    MessageActivity: __expectString(output.MessageActivity),
  } as any;
};

/**
 * deserializeAws_restJson1EventDimensions
 */
const de_EventDimensions = (output: any, context: __SerdeContext): EventDimensions => {
  return {
    Attributes: output.Attributes != null ? de_MapOfAttributeDimension(output.Attributes, context) : undefined,
    EventType: output.EventType != null ? de_SetDimension(output.EventType, context) : undefined,
    Metrics: output.Metrics != null ? de_MapOfMetricDimension(output.Metrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventFilter
 */
const de_EventFilter = (output: any, context: __SerdeContext): EventFilter => {
  return {
    Dimensions: output.Dimensions != null ? de_EventDimensions(output.Dimensions, context) : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

/**
 * deserializeAws_restJson1EventItemResponse
 */
const de_EventItemResponse = (output: any, context: __SerdeContext): EventItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_restJson1EventsResponse
 */
const de_EventsResponse = (output: any, context: __SerdeContext): EventsResponse => {
  return {
    Results: output.Results != null ? de_MapOfItemResponse(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventStartCondition
 */
const de_EventStartCondition = (output: any, context: __SerdeContext): EventStartCondition => {
  return {
    EventFilter: output.EventFilter != null ? de_EventFilter(output.EventFilter, context) : undefined,
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

/**
 * deserializeAws_restJson1EventStream
 */
const de_EventStream = (output: any, context: __SerdeContext): EventStream => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    DestinationStreamArn: __expectString(output.DestinationStreamArn),
    ExternalId: __expectString(output.ExternalId),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1ExportJobResource
 */
const de_ExportJobResource = (output: any, context: __SerdeContext): ExportJobResource => {
  return {
    RoleArn: __expectString(output.RoleArn),
    S3UrlPrefix: __expectString(output.S3UrlPrefix),
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectInt32(output.SegmentVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ExportJobResponse
 */
const de_ExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectInt32(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition: output.Definition != null ? de_ExportJobResource(output.Definition, context) : undefined,
    FailedPieces: __expectInt32(output.FailedPieces),
    Failures: output.Failures != null ? de_ListOf__string(output.Failures, context) : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectInt32(output.TotalFailures),
    TotalPieces: __expectInt32(output.TotalPieces),
    TotalProcessed: __expectInt32(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ExportJobsResponse
 */
const de_ExportJobsResponse = (output: any, context: __SerdeContext): ExportJobsResponse => {
  return {
    Item: output.Item != null ? de_ListOfExportJobResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1GCMChannelResponse
 */
const de_GCMChannelResponse = (output: any, context: __SerdeContext): GCMChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Credential: __expectString(output.Credential),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1GPSCoordinates
 */
const de_GPSCoordinates = (output: any, context: __SerdeContext): GPSCoordinates => {
  return {
    Latitude: __limitedParseDouble(output.Latitude),
    Longitude: __limitedParseDouble(output.Longitude),
  } as any;
};

/**
 * deserializeAws_restJson1GPSPointDimension
 */
const de_GPSPointDimension = (output: any, context: __SerdeContext): GPSPointDimension => {
  return {
    Coordinates: output.Coordinates != null ? de_GPSCoordinates(output.Coordinates, context) : undefined,
    RangeInKilometers: __limitedParseDouble(output.RangeInKilometers),
  } as any;
};

/**
 * deserializeAws_restJson1HoldoutActivity
 */
const de_HoldoutActivity = (output: any, context: __SerdeContext): HoldoutActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectInt32(output.Percentage),
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobResource
 */
const de_ImportJobResource = (output: any, context: __SerdeContext): ImportJobResource => {
  return {
    DefineSegment: __expectBoolean(output.DefineSegment),
    ExternalId: __expectString(output.ExternalId),
    Format: __expectString(output.Format),
    RegisterEndpoints: __expectBoolean(output.RegisterEndpoints),
    RoleArn: __expectString(output.RoleArn),
    S3Url: __expectString(output.S3Url),
    SegmentId: __expectString(output.SegmentId),
    SegmentName: __expectString(output.SegmentName),
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobResponse
 */
const de_ImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectInt32(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition: output.Definition != null ? de_ImportJobResource(output.Definition, context) : undefined,
    FailedPieces: __expectInt32(output.FailedPieces),
    Failures: output.Failures != null ? de_ListOf__string(output.Failures, context) : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectInt32(output.TotalFailures),
    TotalPieces: __expectInt32(output.TotalPieces),
    TotalProcessed: __expectInt32(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobsResponse
 */
const de_ImportJobsResponse = (output: any, context: __SerdeContext): ImportJobsResponse => {
  return {
    Item: output.Item != null ? de_ListOfImportJobResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1InAppCampaignSchedule
 */
const de_InAppCampaignSchedule = (output: any, context: __SerdeContext): InAppCampaignSchedule => {
  return {
    EndDate: __expectString(output.EndDate),
    EventFilter: output.EventFilter != null ? de_CampaignEventFilter(output.EventFilter, context) : undefined,
    QuietTime: output.QuietTime != null ? de_QuietTime(output.QuietTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessage
 */
const de_InAppMessage = (output: any, context: __SerdeContext): InAppMessage => {
  return {
    Content: output.Content != null ? de_ListOfInAppMessageContent(output.Content, context) : undefined,
    CustomConfig: output.CustomConfig != null ? de_MapOf__string(output.CustomConfig, context) : undefined,
    Layout: __expectString(output.Layout),
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessageBodyConfig
 */
const de_InAppMessageBodyConfig = (output: any, context: __SerdeContext): InAppMessageBodyConfig => {
  return {
    Alignment: __expectString(output.Alignment),
    Body: __expectString(output.Body),
    TextColor: __expectString(output.TextColor),
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessageButton
 */
const de_InAppMessageButton = (output: any, context: __SerdeContext): InAppMessageButton => {
  return {
    Android: output.Android != null ? de_OverrideButtonConfiguration(output.Android, context) : undefined,
    DefaultConfig:
      output.DefaultConfig != null ? de_DefaultButtonConfiguration(output.DefaultConfig, context) : undefined,
    IOS: output.IOS != null ? de_OverrideButtonConfiguration(output.IOS, context) : undefined,
    Web: output.Web != null ? de_OverrideButtonConfiguration(output.Web, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessageCampaign
 */
const de_InAppMessageCampaign = (output: any, context: __SerdeContext): InAppMessageCampaign => {
  return {
    CampaignId: __expectString(output.CampaignId),
    DailyCap: __expectInt32(output.DailyCap),
    InAppMessage: output.InAppMessage != null ? de_InAppMessage(output.InAppMessage, context) : undefined,
    Priority: __expectInt32(output.Priority),
    Schedule: output.Schedule != null ? de_InAppCampaignSchedule(output.Schedule, context) : undefined,
    SessionCap: __expectInt32(output.SessionCap),
    TotalCap: __expectInt32(output.TotalCap),
    TreatmentId: __expectString(output.TreatmentId),
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessageContent
 */
const de_InAppMessageContent = (output: any, context: __SerdeContext): InAppMessageContent => {
  return {
    BackgroundColor: __expectString(output.BackgroundColor),
    BodyConfig: output.BodyConfig != null ? de_InAppMessageBodyConfig(output.BodyConfig, context) : undefined,
    HeaderConfig: output.HeaderConfig != null ? de_InAppMessageHeaderConfig(output.HeaderConfig, context) : undefined,
    ImageUrl: __expectString(output.ImageUrl),
    PrimaryBtn: output.PrimaryBtn != null ? de_InAppMessageButton(output.PrimaryBtn, context) : undefined,
    SecondaryBtn: output.SecondaryBtn != null ? de_InAppMessageButton(output.SecondaryBtn, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessageHeaderConfig
 */
const de_InAppMessageHeaderConfig = (output: any, context: __SerdeContext): InAppMessageHeaderConfig => {
  return {
    Alignment: __expectString(output.Alignment),
    Header: __expectString(output.Header),
    TextColor: __expectString(output.TextColor),
  } as any;
};

/**
 * deserializeAws_restJson1InAppMessagesResponse
 */
const de_InAppMessagesResponse = (output: any, context: __SerdeContext): InAppMessagesResponse => {
  return {
    InAppMessageCampaigns:
      output.InAppMessageCampaigns != null
        ? de_ListOfInAppMessageCampaign(output.InAppMessageCampaigns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InAppTemplateResponse
 */
const de_InAppTemplateResponse = (output: any, context: __SerdeContext): InAppTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Content: output.Content != null ? de_ListOfInAppMessageContent(output.Content, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    CustomConfig: output.CustomConfig != null ? de_MapOf__string(output.CustomConfig, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Layout: __expectString(output.Layout),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ItemResponse
 */
const de_ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    EndpointItemResponse:
      output.EndpointItemResponse != null ? de_EndpointItemResponse(output.EndpointItemResponse, context) : undefined,
    EventsItemResponse:
      output.EventsItemResponse != null ? de_MapOfEventItemResponse(output.EventsItemResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JourneyChannelSettings
 */
const de_JourneyChannelSettings = (output: any, context: __SerdeContext): JourneyChannelSettings => {
  return {
    ConnectCampaignArn: __expectString(output.ConnectCampaignArn),
    ConnectCampaignExecutionRoleArn: __expectString(output.ConnectCampaignExecutionRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1JourneyCustomMessage
 */
const de_JourneyCustomMessage = (output: any, context: __SerdeContext): JourneyCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

/**
 * deserializeAws_restJson1JourneyDateRangeKpiResponse
 */
const de_JourneyDateRangeKpiResponse = (output: any, context: __SerdeContext): JourneyDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    JourneyId: __expectString(output.JourneyId),
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? de_BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JourneyEmailMessage
 */
const de_JourneyEmailMessage = (output: any, context: __SerdeContext): JourneyEmailMessage => {
  return {
    FromAddress: __expectString(output.FromAddress),
  } as any;
};

/**
 * deserializeAws_restJson1JourneyExecutionActivityMetricsResponse
 */
const de_JourneyExecutionActivityMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionActivityMetricsResponse => {
  return {
    ActivityType: __expectString(output.ActivityType),
    ApplicationId: __expectString(output.ApplicationId),
    JourneyActivityId: __expectString(output.JourneyActivityId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics: output.Metrics != null ? de_MapOf__string(output.Metrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JourneyExecutionMetricsResponse
 */
const de_JourneyExecutionMetricsResponse = (output: any, context: __SerdeContext): JourneyExecutionMetricsResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics: output.Metrics != null ? de_MapOf__string(output.Metrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JourneyLimits
 */
const de_JourneyLimits = (output: any, context: __SerdeContext): JourneyLimits => {
  return {
    DailyCap: __expectInt32(output.DailyCap),
    EndpointReentryCap: __expectInt32(output.EndpointReentryCap),
    EndpointReentryInterval: __expectString(output.EndpointReentryInterval),
    MessagesPerSecond: __expectInt32(output.MessagesPerSecond),
  } as any;
};

/**
 * deserializeAws_restJson1JourneyPushMessage
 */
const de_JourneyPushMessage = (output: any, context: __SerdeContext): JourneyPushMessage => {
  return {
    TimeToLive: __expectString(output.TimeToLive),
  } as any;
};

/**
 * deserializeAws_restJson1JourneyResponse
 */
const de_JourneyResponse = (output: any, context: __SerdeContext): JourneyResponse => {
  return {
    Activities: output.Activities != null ? de_MapOfActivity(output.Activities, context) : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    ClosedDays: output.ClosedDays != null ? de_ClosedDays(output.ClosedDays, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    Id: __expectString(output.Id),
    JourneyChannelSettings:
      output.JourneyChannelSettings != null
        ? de_JourneyChannelSettings(output.JourneyChannelSettings, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? de_JourneyLimits(output.Limits, context) : undefined,
    LocalTime: __expectBoolean(output.LocalTime),
    Name: __expectString(output.Name),
    OpenHours: output.OpenHours != null ? de_OpenHours(output.OpenHours, context) : undefined,
    QuietTime: output.QuietTime != null ? de_QuietTime(output.QuietTime, context) : undefined,
    RefreshFrequency: __expectString(output.RefreshFrequency),
    RefreshOnSegmentUpdate: __expectBoolean(output.RefreshOnSegmentUpdate),
    Schedule: output.Schedule != null ? de_JourneySchedule(output.Schedule, context) : undefined,
    SendingSchedule: __expectBoolean(output.SendingSchedule),
    StartActivity: __expectString(output.StartActivity),
    StartCondition: output.StartCondition != null ? de_StartCondition(output.StartCondition, context) : undefined,
    State: __expectString(output.State),
    WaitForQuietTime: __expectBoolean(output.WaitForQuietTime),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JourneySchedule
 */
const de_JourneySchedule = (output: any, context: __SerdeContext): JourneySchedule => {
  return {
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_restJson1JourneySMSMessage
 */
const de_JourneySMSMessage = (output: any, context: __SerdeContext): JourneySMSMessage => {
  return {
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

/**
 * deserializeAws_restJson1JourneysResponse
 */
const de_JourneysResponse = (output: any, context: __SerdeContext): JourneysResponse => {
  return {
    Item: output.Item != null ? de_ListOfJourneyResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1ListOf__EndpointTypesElement
 */
const de_ListOf__EndpointTypesElement = (output: any, context: __SerdeContext): (__EndpointTypesElement | string)[] => {
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
 * deserializeAws_restJson1ListOf__string
 */
const de_ListOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ListOfActivityResponse
 */
const de_ListOfActivityResponse = (output: any, context: __SerdeContext): ActivityResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivityResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfApplicationResponse
 */
const de_ListOfApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_CampaignResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfClosedDaysRules
 */
const de_ListOfClosedDaysRules = (output: any, context: __SerdeContext): ClosedDaysRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClosedDaysRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfEndpointResponse
 */
const de_ListOfEndpointResponse = (output: any, context: __SerdeContext): EndpointResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfExportJobResponse
 */
const de_ListOfExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportJobResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfImportJobResponse
 */
const de_ListOfImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportJobResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfInAppMessageCampaign
 */
const de_ListOfInAppMessageCampaign = (output: any, context: __SerdeContext): InAppMessageCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InAppMessageCampaign(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfInAppMessageContent
 */
const de_ListOfInAppMessageContent = (output: any, context: __SerdeContext): InAppMessageContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InAppMessageContent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfJourneyResponse
 */
const de_ListOfJourneyResponse = (output: any, context: __SerdeContext): JourneyResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JourneyResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfMultiConditionalBranch
 */
const de_ListOfMultiConditionalBranch = (output: any, context: __SerdeContext): MultiConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiConditionalBranch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfOpenHoursRules
 */
const de_ListOfOpenHoursRules = (output: any, context: __SerdeContext): OpenHoursRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpenHoursRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfRandomSplitEntry
 */
const de_ListOfRandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RandomSplitEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfRecommenderConfigurationResponse
 */
const de_ListOfRecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommenderConfigurationResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfResultRow
 */
const de_ListOfResultRow = (output: any, context: __SerdeContext): ResultRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfResultRowValue
 */
const de_ListOfResultRowValue = (output: any, context: __SerdeContext): ResultRowValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultRowValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfSegmentDimensions
 */
const de_ListOfSegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_SegmentGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfSegmentReference
 */
const de_ListOfSegmentReference = (output: any, context: __SerdeContext): SegmentReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SegmentReference(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfSegmentResponse
 */
const de_ListOfSegmentResponse = (output: any, context: __SerdeContext): SegmentResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_TemplateResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfTemplateVersionResponse
 */
const de_ListOfTemplateVersionResponse = (output: any, context: __SerdeContext): TemplateVersionResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateVersionResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfTreatmentResource
 */
const de_ListOfTreatmentResource = (output: any, context: __SerdeContext): TreatmentResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TreatmentResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListRecommenderConfigurationsResponse
 */
const de_ListRecommenderConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListRecommenderConfigurationsResponse => {
  return {
    Item: output.Item != null ? de_ListOfRecommenderConfigurationResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

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

/**
 * deserializeAws_restJson1MapOf__integer
 */
const de_MapOf__integer = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOf__string
 */
const de_MapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

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

/**
 * deserializeAws_restJson1MapOfAttributeDimension
 */
const de_MapOfAttributeDimension = (output: any, context: __SerdeContext): Record<string, AttributeDimension> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeDimension>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AttributeDimension(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfChannelResponse
 */
const de_MapOfChannelResponse = (output: any, context: __SerdeContext): Record<string, ChannelResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ChannelResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ChannelResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfEndpointMessageResult
 */
const de_MapOfEndpointMessageResult = (output: any, context: __SerdeContext): Record<string, EndpointMessageResult> => {
  return Object.entries(output).reduce((acc: Record<string, EndpointMessageResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_EndpointMessageResult(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfEventItemResponse
 */
const de_MapOfEventItemResponse = (output: any, context: __SerdeContext): Record<string, EventItemResponse> => {
  return Object.entries(output).reduce((acc: Record<string, EventItemResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_EventItemResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfItemResponse
 */
const de_MapOfItemResponse = (output: any, context: __SerdeContext): Record<string, ItemResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ItemResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ItemResponse(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfListOf__string
 */
const de_MapOfListOf__string = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ListOf__string(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1MapOfListOfOpenHoursRules
 */
const de_MapOfListOfOpenHoursRules = (output: any, context: __SerdeContext): Record<string, OpenHoursRule[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, OpenHoursRule[]>, [key, value]: [DayOfWeek | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ListOfOpenHoursRules(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1MapOfMapOfEndpointMessageResult
 */
const de_MapOfMapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, EndpointMessageResult>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, EndpointMessageResult>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_MapOfEndpointMessageResult(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1MapOfMessageResult
 */
const de_MapOfMessageResult = (output: any, context: __SerdeContext): Record<string, MessageResult> => {
  return Object.entries(output).reduce((acc: Record<string, MessageResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_MessageResult(value, context);
    return acc;
  }, {});
};

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

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    ImageIconUrl: __expectString(output.ImageIconUrl),
    ImageSmallIconUrl: __expectString(output.ImageSmallIconUrl),
    ImageUrl: __expectString(output.ImageUrl),
    JsonBody: __expectString(output.JsonBody),
    MediaUrl: __expectString(output.MediaUrl),
    RawContent: __expectString(output.RawContent),
    SilentPush: __expectBoolean(output.SilentPush),
    TimeToLive: __expectInt32(output.TimeToLive),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_restJson1MessageBody
 */
const de_MessageBody = (output: any, context: __SerdeContext): MessageBody => {
  return {
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

/**
 * deserializeAws_restJson1MessageConfiguration
 */
const de_MessageConfiguration = (output: any, context: __SerdeContext): MessageConfiguration => {
  return {
    ADMMessage: output.ADMMessage != null ? de_Message(output.ADMMessage, context) : undefined,
    APNSMessage: output.APNSMessage != null ? de_Message(output.APNSMessage, context) : undefined,
    BaiduMessage: output.BaiduMessage != null ? de_Message(output.BaiduMessage, context) : undefined,
    CustomMessage: output.CustomMessage != null ? de_CampaignCustomMessage(output.CustomMessage, context) : undefined,
    DefaultMessage: output.DefaultMessage != null ? de_Message(output.DefaultMessage, context) : undefined,
    EmailMessage: output.EmailMessage != null ? de_CampaignEmailMessage(output.EmailMessage, context) : undefined,
    GCMMessage: output.GCMMessage != null ? de_Message(output.GCMMessage, context) : undefined,
    InAppMessage: output.InAppMessage != null ? de_CampaignInAppMessage(output.InAppMessage, context) : undefined,
    SMSMessage: output.SMSMessage != null ? de_CampaignSmsMessage(output.SMSMessage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessageResponse
 */
const de_MessageResponse = (output: any, context: __SerdeContext): MessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndpointResult:
      output.EndpointResult != null ? de_MapOfEndpointMessageResult(output.EndpointResult, context) : undefined,
    RequestId: __expectString(output.RequestId),
    Result: output.Result != null ? de_MapOfMessageResult(output.Result, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessageResult
 */
const de_MessageResult = (output: any, context: __SerdeContext): MessageResult => {
  return {
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectInt32(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDimension
 */
const de_MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1MultiConditionalBranch
 */
const de_MultiConditionalBranch = (output: any, context: __SerdeContext): MultiConditionalBranch => {
  return {
    Condition: output.Condition != null ? de_SimpleCondition(output.Condition, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
  } as any;
};

/**
 * deserializeAws_restJson1MultiConditionalSplitActivity
 */
const de_MultiConditionalSplitActivity = (output: any, context: __SerdeContext): MultiConditionalSplitActivity => {
  return {
    Branches: output.Branches != null ? de_ListOfMultiConditionalBranch(output.Branches, context) : undefined,
    DefaultActivity: __expectString(output.DefaultActivity),
    EvaluationWaitTime: output.EvaluationWaitTime != null ? de_WaitTime(output.EvaluationWaitTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NumberValidateResponse
 */
const de_NumberValidateResponse = (output: any, context: __SerdeContext): NumberValidateResponse => {
  return {
    Carrier: __expectString(output.Carrier),
    City: __expectString(output.City),
    CleansedPhoneNumberE164: __expectString(output.CleansedPhoneNumberE164),
    CleansedPhoneNumberNational: __expectString(output.CleansedPhoneNumberNational),
    Country: __expectString(output.Country),
    CountryCodeIso2: __expectString(output.CountryCodeIso2),
    CountryCodeNumeric: __expectString(output.CountryCodeNumeric),
    County: __expectString(output.County),
    OriginalCountryCodeIso2: __expectString(output.OriginalCountryCodeIso2),
    OriginalPhoneNumber: __expectString(output.OriginalPhoneNumber),
    PhoneType: __expectString(output.PhoneType),
    PhoneTypeCode: __expectInt32(output.PhoneTypeCode),
    Timezone: __expectString(output.Timezone),
    ZipCode: __expectString(output.ZipCode),
  } as any;
};

/**
 * deserializeAws_restJson1OpenHours
 */
const de_OpenHours = (output: any, context: __SerdeContext): OpenHours => {
  return {
    CUSTOM: output.CUSTOM != null ? de_MapOfListOfOpenHoursRules(output.CUSTOM, context) : undefined,
    EMAIL: output.EMAIL != null ? de_MapOfListOfOpenHoursRules(output.EMAIL, context) : undefined,
    PUSH: output.PUSH != null ? de_MapOfListOfOpenHoursRules(output.PUSH, context) : undefined,
    SMS: output.SMS != null ? de_MapOfListOfOpenHoursRules(output.SMS, context) : undefined,
    VOICE: output.VOICE != null ? de_MapOfListOfOpenHoursRules(output.VOICE, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OpenHoursRule
 */
const de_OpenHoursRule = (output: any, context: __SerdeContext): OpenHoursRule => {
  return {
    EndTime: __expectString(output.EndTime),
    StartTime: __expectString(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1OverrideButtonConfiguration
 */
const de_OverrideButtonConfiguration = (output: any, context: __SerdeContext): OverrideButtonConfiguration => {
  return {
    ButtonAction: __expectString(output.ButtonAction),
    Link: __expectString(output.Link),
  } as any;
};

/**
 * deserializeAws_restJson1PushMessageActivity
 */
const de_PushMessageActivity = (output: any, context: __SerdeContext): PushMessageActivity => {
  return {
    MessageConfig: output.MessageConfig != null ? de_JourneyPushMessage(output.MessageConfig, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1PushNotificationTemplateResponse
 */
const de_PushNotificationTemplateResponse = (
  output: any,
  context: __SerdeContext
): PushNotificationTemplateResponse => {
  return {
    ADM: output.ADM != null ? de_AndroidPushNotificationTemplate(output.ADM, context) : undefined,
    APNS: output.APNS != null ? de_APNSPushNotificationTemplate(output.APNS, context) : undefined,
    Arn: __expectString(output.Arn),
    Baidu: output.Baidu != null ? de_AndroidPushNotificationTemplate(output.Baidu, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    Default: output.Default != null ? de_DefaultPushNotificationTemplate(output.Default, context) : undefined,
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    GCM: output.GCM != null ? de_AndroidPushNotificationTemplate(output.GCM, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1QuietTime
 */
const de_QuietTime = (output: any, context: __SerdeContext): QuietTime => {
  return {
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

/**
 * deserializeAws_restJson1RandomSplitActivity
 */
const de_RandomSplitActivity = (output: any, context: __SerdeContext): RandomSplitActivity => {
  return {
    Branches: output.Branches != null ? de_ListOfRandomSplitEntry(output.Branches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RandomSplitEntry
 */
const de_RandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectInt32(output.Percentage),
  } as any;
};

/**
 * deserializeAws_restJson1RecencyDimension
 */
const de_RecencyDimension = (output: any, context: __SerdeContext): RecencyDimension => {
  return {
    Duration: __expectString(output.Duration),
    RecencyType: __expectString(output.RecencyType),
  } as any;
};

/**
 * deserializeAws_restJson1RecommenderConfigurationResponse
 */
const de_RecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse => {
  return {
    Attributes: output.Attributes != null ? de_MapOf__string(output.Attributes, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    RecommendationProviderIdType: __expectString(output.RecommendationProviderIdType),
    RecommendationProviderRoleArn: __expectString(output.RecommendationProviderRoleArn),
    RecommendationProviderUri: __expectString(output.RecommendationProviderUri),
    RecommendationTransformerUri: __expectString(output.RecommendationTransformerUri),
    RecommendationsDisplayName: __expectString(output.RecommendationsDisplayName),
    RecommendationsPerMessage: __expectInt32(output.RecommendationsPerMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ResultRow
 */
const de_ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    GroupedBys: output.GroupedBys != null ? de_ListOfResultRowValue(output.GroupedBys, context) : undefined,
    Values: output.Values != null ? de_ListOfResultRowValue(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResultRowValue
 */
const de_ResultRowValue = (output: any, context: __SerdeContext): ResultRowValue => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    EndTime: __expectString(output.EndTime),
    EventFilter: output.EventFilter != null ? de_CampaignEventFilter(output.EventFilter, context) : undefined,
    Frequency: __expectString(output.Frequency),
    IsLocalTime: __expectBoolean(output.IsLocalTime),
    QuietTime: output.QuietTime != null ? de_QuietTime(output.QuietTime, context) : undefined,
    StartTime: __expectString(output.StartTime),
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentBehaviors
 */
const de_SegmentBehaviors = (output: any, context: __SerdeContext): SegmentBehaviors => {
  return {
    Recency: output.Recency != null ? de_RecencyDimension(output.Recency, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SegmentCondition
 */
const de_SegmentCondition = (output: any, context: __SerdeContext): SegmentCondition => {
  return {
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentDemographics
 */
const de_SegmentDemographics = (output: any, context: __SerdeContext): SegmentDemographics => {
  return {
    AppVersion: output.AppVersion != null ? de_SetDimension(output.AppVersion, context) : undefined,
    Channel: output.Channel != null ? de_SetDimension(output.Channel, context) : undefined,
    DeviceType: output.DeviceType != null ? de_SetDimension(output.DeviceType, context) : undefined,
    Make: output.Make != null ? de_SetDimension(output.Make, context) : undefined,
    Model: output.Model != null ? de_SetDimension(output.Model, context) : undefined,
    Platform: output.Platform != null ? de_SetDimension(output.Platform, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SegmentDimensions
 */
const de_SegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions => {
  return {
    Attributes: output.Attributes != null ? de_MapOfAttributeDimension(output.Attributes, context) : undefined,
    Behavior: output.Behavior != null ? de_SegmentBehaviors(output.Behavior, context) : undefined,
    Demographic: output.Demographic != null ? de_SegmentDemographics(output.Demographic, context) : undefined,
    Location: output.Location != null ? de_SegmentLocation(output.Location, context) : undefined,
    Metrics: output.Metrics != null ? de_MapOfMetricDimension(output.Metrics, context) : undefined,
    UserAttributes:
      output.UserAttributes != null ? de_MapOfAttributeDimension(output.UserAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SegmentGroup
 */
const de_SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return {
    Dimensions: output.Dimensions != null ? de_ListOfSegmentDimensions(output.Dimensions, context) : undefined,
    SourceSegments:
      output.SourceSegments != null ? de_ListOfSegmentReference(output.SourceSegments, context) : undefined,
    SourceType: __expectString(output.SourceType),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentGroupList
 */
const de_SegmentGroupList = (output: any, context: __SerdeContext): SegmentGroupList => {
  return {
    Groups: output.Groups != null ? de_ListOfSegmentGroup(output.Groups, context) : undefined,
    Include: __expectString(output.Include),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentImportResource
 */
const de_SegmentImportResource = (output: any, context: __SerdeContext): SegmentImportResource => {
  return {
    ChannelCounts: output.ChannelCounts != null ? de_MapOf__integer(output.ChannelCounts, context) : undefined,
    ExternalId: __expectString(output.ExternalId),
    Format: __expectString(output.Format),
    RoleArn: __expectString(output.RoleArn),
    S3Url: __expectString(output.S3Url),
    Size: __expectInt32(output.Size),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentLocation
 */
const de_SegmentLocation = (output: any, context: __SerdeContext): SegmentLocation => {
  return {
    Country: output.Country != null ? de_SetDimension(output.Country, context) : undefined,
    GPSPoint: output.GPSPoint != null ? de_GPSPointDimension(output.GPSPoint, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SegmentReference
 */
const de_SegmentReference = (output: any, context: __SerdeContext): SegmentReference => {
  return {
    Id: __expectString(output.Id),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentResponse
 */
const de_SegmentResponse = (output: any, context: __SerdeContext): SegmentResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    Dimensions: output.Dimensions != null ? de_SegmentDimensions(output.Dimensions, context) : undefined,
    Id: __expectString(output.Id),
    ImportDefinition:
      output.ImportDefinition != null ? de_SegmentImportResource(output.ImportDefinition, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    SegmentGroups: output.SegmentGroups != null ? de_SegmentGroupList(output.SegmentGroups, context) : undefined,
    SegmentType: __expectString(output.SegmentType),
    Version: __expectInt32(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SegmentsResponse
 */
const de_SegmentsResponse = (output: any, context: __SerdeContext): SegmentsResponse => {
  return {
    Item: output.Item != null ? de_ListOfSegmentResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1SendUsersMessageResponse
 */
const de_SendUsersMessageResponse = (output: any, context: __SerdeContext): SendUsersMessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    RequestId: __expectString(output.RequestId),
    Result: output.Result != null ? de_MapOfMapOfEndpointMessageResult(output.Result, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SetDimension
 */
const de_SetDimension = (output: any, context: __SerdeContext): SetDimension => {
  return {
    DimensionType: __expectString(output.DimensionType),
    Values: output.Values != null ? de_ListOf__string(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimpleCondition
 */
const de_SimpleCondition = (output: any, context: __SerdeContext): SimpleCondition => {
  return {
    EventCondition: output.EventCondition != null ? de_EventCondition(output.EventCondition, context) : undefined,
    SegmentCondition:
      output.SegmentCondition != null ? de_SegmentCondition(output.SegmentCondition, context) : undefined,
    SegmentDimensions:
      output.segmentDimensions != null ? de_SegmentDimensions(output.segmentDimensions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SMSChannelResponse
 */
const de_SMSChannelResponse = (output: any, context: __SerdeContext): SMSChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    PromotionalMessagesPerSecond: __expectInt32(output.PromotionalMessagesPerSecond),
    SenderId: __expectString(output.SenderId),
    ShortCode: __expectString(output.ShortCode),
    TransactionalMessagesPerSecond: __expectInt32(output.TransactionalMessagesPerSecond),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1SMSMessageActivity
 */
const de_SMSMessageActivity = (output: any, context: __SerdeContext): SMSMessageActivity => {
  return {
    MessageConfig: output.MessageConfig != null ? de_JourneySMSMessage(output.MessageConfig, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1SMSTemplateResponse
 */
const de_SMSTemplateResponse = (output: any, context: __SerdeContext): SMSTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Body: __expectString(output.Body),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StartCondition
 */
const de_StartCondition = (output: any, context: __SerdeContext): StartCondition => {
  return {
    Description: __expectString(output.Description),
    EventStartCondition:
      output.EventStartCondition != null ? de_EventStartCondition(output.EventStartCondition, context) : undefined,
    SegmentStartCondition:
      output.SegmentStartCondition != null ? de_SegmentCondition(output.SegmentStartCondition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagsModel
 */
const de_TagsModel = (output: any, context: __SerdeContext): TagsModel => {
  return {
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Template
 */
const de_Template = (output: any, context: __SerdeContext): Template => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateConfiguration
 */
const de_TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return {
    EmailTemplate: output.EmailTemplate != null ? de_Template(output.EmailTemplate, context) : undefined,
    PushTemplate: output.PushTemplate != null ? de_Template(output.PushTemplate, context) : undefined,
    SMSTemplate: output.SMSTemplate != null ? de_Template(output.SMSTemplate, context) : undefined,
    VoiceTemplate: output.VoiceTemplate != null ? de_Template(output.VoiceTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TemplateCreateMessageBody
 */
const de_TemplateCreateMessageBody = (output: any, context: __SerdeContext): TemplateCreateMessageBody => {
  return {
    Arn: __expectString(output.Arn),
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateResponse
 */
const de_TemplateResponse = (output: any, context: __SerdeContext): TemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TemplatesResponse
 */
const de_TemplatesResponse = (output: any, context: __SerdeContext): TemplatesResponse => {
  return {
    Item: output.Item != null ? de_ListOfTemplateResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateVersionResponse
 */
const de_TemplateVersionResponse = (output: any, context: __SerdeContext): TemplateVersionResponse => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateVersionsResponse
 */
const de_TemplateVersionsResponse = (output: any, context: __SerdeContext): TemplateVersionsResponse => {
  return {
    Item: output.Item != null ? de_ListOfTemplateVersionResponse(output.Item, context) : undefined,
    Message: __expectString(output.Message),
    NextToken: __expectString(output.NextToken),
    RequestID: __expectString(output.RequestID),
  } as any;
};

/**
 * deserializeAws_restJson1TreatmentResource
 */
const de_TreatmentResource = (output: any, context: __SerdeContext): TreatmentResource => {
  return {
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration != null
        ? de_CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
    MessageConfiguration:
      output.MessageConfiguration != null ? de_MessageConfiguration(output.MessageConfiguration, context) : undefined,
    Schedule: output.Schedule != null ? de_Schedule(output.Schedule, context) : undefined,
    SizePercent: __expectInt32(output.SizePercent),
    State: output.State != null ? de_CampaignState(output.State, context) : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? de_TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
  } as any;
};

/**
 * deserializeAws_restJson1VerificationResponse
 */
const de_VerificationResponse = (output: any, context: __SerdeContext): VerificationResponse => {
  return {
    Valid: __expectBoolean(output.Valid),
  } as any;
};

/**
 * deserializeAws_restJson1VoiceChannelResponse
 */
const de_VoiceChannelResponse = (output: any, context: __SerdeContext): VoiceChannelResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CreationDate: __expectString(output.CreationDate),
    Enabled: __expectBoolean(output.Enabled),
    HasCredential: __expectBoolean(output.HasCredential),
    Id: __expectString(output.Id),
    IsArchived: __expectBoolean(output.IsArchived),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Platform: __expectString(output.Platform),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1VoiceTemplateResponse
 */
const de_VoiceTemplateResponse = (output: any, context: __SerdeContext): VoiceTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Body: __expectString(output.Body),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LanguageCode: __expectString(output.LanguageCode),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    VoiceId: __expectString(output.VoiceId),
    tags: output.tags != null ? de_MapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WaitActivity
 */
const de_WaitActivity = (output: any, context: __SerdeContext): WaitActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    WaitTime: output.WaitTime != null ? de_WaitTime(output.WaitTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WaitTime
 */
const de_WaitTime = (output: any, context: __SerdeContext): WaitTime => {
  return {
    WaitFor: __expectString(output.WaitFor),
    WaitUntil: __expectString(output.WaitUntil),
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
