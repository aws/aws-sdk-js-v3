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

export const serializeAws_restJson1CreateAppCommand = async (
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
    body = serializeAws_restJson1CreateApplicationRequest(input.CreateApplicationRequest, context);
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

export const serializeAws_restJson1CreateCampaignCommand = async (
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
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
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

export const serializeAws_restJson1CreateEmailTemplateCommand = async (
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
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
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

export const serializeAws_restJson1CreateExportJobCommand = async (
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
    body = serializeAws_restJson1ExportJobRequest(input.ExportJobRequest, context);
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

export const serializeAws_restJson1CreateImportJobCommand = async (
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
    body = serializeAws_restJson1ImportJobRequest(input.ImportJobRequest, context);
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

export const serializeAws_restJson1CreateInAppTemplateCommand = async (
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
    body = serializeAws_restJson1InAppTemplateRequest(input.InAppTemplateRequest, context);
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

export const serializeAws_restJson1CreateJourneyCommand = async (
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
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
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

export const serializeAws_restJson1CreatePushTemplateCommand = async (
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
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
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

export const serializeAws_restJson1CreateRecommenderConfigurationCommand = async (
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
    body = serializeAws_restJson1CreateRecommenderConfigurationShape(input.CreateRecommenderConfiguration, context);
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

export const serializeAws_restJson1CreateSegmentCommand = async (
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
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
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

export const serializeAws_restJson1CreateSmsTemplateCommand = async (
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
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
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

export const serializeAws_restJson1CreateVoiceTemplateCommand = async (
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
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
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

export const serializeAws_restJson1DeleteAdmChannelCommand = async (
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

export const serializeAws_restJson1DeleteApnsChannelCommand = async (
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

export const serializeAws_restJson1DeleteApnsSandboxChannelCommand = async (
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

export const serializeAws_restJson1DeleteApnsVoipChannelCommand = async (
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

export const serializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (
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

export const serializeAws_restJson1DeleteAppCommand = async (
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

export const serializeAws_restJson1DeleteBaiduChannelCommand = async (
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

export const serializeAws_restJson1DeleteCampaignCommand = async (
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

export const serializeAws_restJson1DeleteEmailChannelCommand = async (
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

export const serializeAws_restJson1DeleteEmailTemplateCommand = async (
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

export const serializeAws_restJson1DeleteEndpointCommand = async (
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

export const serializeAws_restJson1DeleteEventStreamCommand = async (
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

export const serializeAws_restJson1DeleteGcmChannelCommand = async (
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

export const serializeAws_restJson1DeleteInAppTemplateCommand = async (
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

export const serializeAws_restJson1DeleteJourneyCommand = async (
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

export const serializeAws_restJson1DeletePushTemplateCommand = async (
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

export const serializeAws_restJson1DeleteRecommenderConfigurationCommand = async (
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

export const serializeAws_restJson1DeleteSegmentCommand = async (
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

export const serializeAws_restJson1DeleteSmsChannelCommand = async (
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

export const serializeAws_restJson1DeleteSmsTemplateCommand = async (
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

export const serializeAws_restJson1DeleteUserEndpointsCommand = async (
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

export const serializeAws_restJson1DeleteVoiceChannelCommand = async (
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

export const serializeAws_restJson1DeleteVoiceTemplateCommand = async (
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

export const serializeAws_restJson1GetAdmChannelCommand = async (
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

export const serializeAws_restJson1GetApnsChannelCommand = async (
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

export const serializeAws_restJson1GetApnsSandboxChannelCommand = async (
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

export const serializeAws_restJson1GetApnsVoipChannelCommand = async (
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

export const serializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (
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

export const serializeAws_restJson1GetAppCommand = async (
  input: GetAppCommandInput,
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
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetApplicationDateRangeKpiCommand = async (
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

export const serializeAws_restJson1GetApplicationSettingsCommand = async (
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

export const serializeAws_restJson1GetAppsCommand = async (
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

export const serializeAws_restJson1GetBaiduChannelCommand = async (
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

export const serializeAws_restJson1GetCampaignCommand = async (
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

export const serializeAws_restJson1GetCampaignActivitiesCommand = async (
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

export const serializeAws_restJson1GetCampaignDateRangeKpiCommand = async (
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

export const serializeAws_restJson1GetCampaignsCommand = async (
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

export const serializeAws_restJson1GetCampaignVersionCommand = async (
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

export const serializeAws_restJson1GetCampaignVersionsCommand = async (
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

export const serializeAws_restJson1GetChannelsCommand = async (
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

export const serializeAws_restJson1GetEmailChannelCommand = async (
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

export const serializeAws_restJson1GetEmailTemplateCommand = async (
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

export const serializeAws_restJson1GetEndpointCommand = async (
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

export const serializeAws_restJson1GetEventStreamCommand = async (
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

export const serializeAws_restJson1GetExportJobCommand = async (
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

export const serializeAws_restJson1GetExportJobsCommand = async (
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

export const serializeAws_restJson1GetGcmChannelCommand = async (
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

export const serializeAws_restJson1GetImportJobCommand = async (
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

export const serializeAws_restJson1GetImportJobsCommand = async (
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

export const serializeAws_restJson1GetInAppMessagesCommand = async (
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

export const serializeAws_restJson1GetInAppTemplateCommand = async (
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

export const serializeAws_restJson1GetJourneyCommand = async (
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

export const serializeAws_restJson1GetJourneyDateRangeKpiCommand = async (
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

export const serializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (
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

export const serializeAws_restJson1GetJourneyExecutionMetricsCommand = async (
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

export const serializeAws_restJson1GetPushTemplateCommand = async (
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

export const serializeAws_restJson1GetRecommenderConfigurationCommand = async (
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

export const serializeAws_restJson1GetRecommenderConfigurationsCommand = async (
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

export const serializeAws_restJson1GetSegmentCommand = async (
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

export const serializeAws_restJson1GetSegmentExportJobsCommand = async (
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

export const serializeAws_restJson1GetSegmentImportJobsCommand = async (
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

export const serializeAws_restJson1GetSegmentsCommand = async (
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

export const serializeAws_restJson1GetSegmentVersionCommand = async (
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

export const serializeAws_restJson1GetSegmentVersionsCommand = async (
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

export const serializeAws_restJson1GetSmsChannelCommand = async (
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

export const serializeAws_restJson1GetSmsTemplateCommand = async (
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

export const serializeAws_restJson1GetUserEndpointsCommand = async (
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

export const serializeAws_restJson1GetVoiceChannelCommand = async (
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

export const serializeAws_restJson1GetVoiceTemplateCommand = async (
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

export const serializeAws_restJson1ListJourneysCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTemplatesCommand = async (
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

export const serializeAws_restJson1ListTemplateVersionsCommand = async (
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

export const serializeAws_restJson1PhoneNumberValidateCommand = async (
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
    body = serializeAws_restJson1NumberValidateRequest(input.NumberValidateRequest, context);
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

export const serializeAws_restJson1PutEventsCommand = async (
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
    body = serializeAws_restJson1EventsRequest(input.EventsRequest, context);
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

export const serializeAws_restJson1PutEventStreamCommand = async (
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
    body = serializeAws_restJson1WriteEventStream(input.WriteEventStream, context);
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

export const serializeAws_restJson1RemoveAttributesCommand = async (
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
    body = serializeAws_restJson1UpdateAttributesRequest(input.UpdateAttributesRequest, context);
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

export const serializeAws_restJson1SendMessagesCommand = async (
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
    body = serializeAws_restJson1MessageRequest(input.MessageRequest, context);
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

export const serializeAws_restJson1SendOTPMessageCommand = async (
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
    body = serializeAws_restJson1SendOTPMessageRequestParameters(input.SendOTPMessageRequestParameters, context);
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

export const serializeAws_restJson1SendUsersMessagesCommand = async (
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
    body = serializeAws_restJson1SendUsersMessageRequest(input.SendUsersMessageRequest, context);
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    body = serializeAws_restJson1TagsModel(input.TagsModel, context);
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateAdmChannelCommand = async (
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
    body = serializeAws_restJson1ADMChannelRequest(input.ADMChannelRequest, context);
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

export const serializeAws_restJson1UpdateApnsChannelCommand = async (
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
    body = serializeAws_restJson1APNSChannelRequest(input.APNSChannelRequest, context);
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

export const serializeAws_restJson1UpdateApnsSandboxChannelCommand = async (
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
    body = serializeAws_restJson1APNSSandboxChannelRequest(input.APNSSandboxChannelRequest, context);
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

export const serializeAws_restJson1UpdateApnsVoipChannelCommand = async (
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
    body = serializeAws_restJson1APNSVoipChannelRequest(input.APNSVoipChannelRequest, context);
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

export const serializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (
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
    body = serializeAws_restJson1APNSVoipSandboxChannelRequest(input.APNSVoipSandboxChannelRequest, context);
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

export const serializeAws_restJson1UpdateApplicationSettingsCommand = async (
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
    body = serializeAws_restJson1WriteApplicationSettingsRequest(input.WriteApplicationSettingsRequest, context);
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

export const serializeAws_restJson1UpdateBaiduChannelCommand = async (
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
    body = serializeAws_restJson1BaiduChannelRequest(input.BaiduChannelRequest, context);
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

export const serializeAws_restJson1UpdateCampaignCommand = async (
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
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
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

export const serializeAws_restJson1UpdateEmailChannelCommand = async (
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
    body = serializeAws_restJson1EmailChannelRequest(input.EmailChannelRequest, context);
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

export const serializeAws_restJson1UpdateEmailTemplateCommand = async (
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
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
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

export const serializeAws_restJson1UpdateEndpointCommand = async (
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
    body = serializeAws_restJson1EndpointRequest(input.EndpointRequest, context);
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

export const serializeAws_restJson1UpdateEndpointsBatchCommand = async (
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
    body = serializeAws_restJson1EndpointBatchRequest(input.EndpointBatchRequest, context);
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

export const serializeAws_restJson1UpdateGcmChannelCommand = async (
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
    body = serializeAws_restJson1GCMChannelRequest(input.GCMChannelRequest, context);
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

export const serializeAws_restJson1UpdateInAppTemplateCommand = async (
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
    body = serializeAws_restJson1InAppTemplateRequest(input.InAppTemplateRequest, context);
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

export const serializeAws_restJson1UpdateJourneyCommand = async (
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
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
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

export const serializeAws_restJson1UpdateJourneyStateCommand = async (
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
    body = serializeAws_restJson1JourneyStateRequest(input.JourneyStateRequest, context);
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

export const serializeAws_restJson1UpdatePushTemplateCommand = async (
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
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
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

export const serializeAws_restJson1UpdateRecommenderConfigurationCommand = async (
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
    body = serializeAws_restJson1UpdateRecommenderConfigurationShape(input.UpdateRecommenderConfiguration, context);
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

export const serializeAws_restJson1UpdateSegmentCommand = async (
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
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
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

export const serializeAws_restJson1UpdateSmsChannelCommand = async (
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
    body = serializeAws_restJson1SMSChannelRequest(input.SMSChannelRequest, context);
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

export const serializeAws_restJson1UpdateSmsTemplateCommand = async (
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
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
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

export const serializeAws_restJson1UpdateTemplateActiveVersionCommand = async (
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
    body = serializeAws_restJson1TemplateActiveVersionRequest(input.TemplateActiveVersionRequest, context);
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

export const serializeAws_restJson1UpdateVoiceChannelCommand = async (
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
    body = serializeAws_restJson1VoiceChannelRequest(input.VoiceChannelRequest, context);
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

export const serializeAws_restJson1UpdateVoiceTemplateCommand = async (
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
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
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

export const serializeAws_restJson1VerifyOTPMessageCommand = async (
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
    body = serializeAws_restJson1VerifyOTPMessageRequestParameters(input.VerifyOTPMessageRequestParameters, context);
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

export const deserializeAws_restJson1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateAppCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateCampaignCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1CreateEmailTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateExportJobCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateImportJobCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInAppTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplateCreateMessageBody = deserializeAws_restJson1TemplateCreateMessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1CreateInAppTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateJourneyCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1CreatePushTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateRecommenderConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return contents;
};

const deserializeAws_restJson1CreateSegmentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1CreateSmsTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1CreateVoiceTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteAdmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteApnsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteApnsSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteApnsVoipChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteAppCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteBaiduChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteCampaignCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteEmailChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteEventStreamCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteGcmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInAppTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteInAppTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteJourneyCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1DeletePushTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteRecommenderConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteSegmentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteSmsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteSmsTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteUserEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1DeleteVoiceTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetAdmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetApnsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetApnsSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetApnsVoipChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApplicationDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationDateRangeKpiResponse = deserializeAws_restJson1ApplicationDateRangeKpiResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetApplicationDateRangeKpiCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApplicationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return contents;
};

const deserializeAws_restJson1GetApplicationSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationsResponse = deserializeAws_restJson1ApplicationsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetAppsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetBaiduChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignActivitiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ActivitiesResponse = deserializeAws_restJson1ActivitiesResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignActivitiesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignDateRangeKpiResponse = deserializeAws_restJson1CampaignDateRangeKpiResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignDateRangeKpiCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCampaignVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCampaignVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetCampaignVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ChannelsResponse = deserializeAws_restJson1ChannelsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetChannelsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetEmailChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailTemplateResponse = deserializeAws_restJson1EmailTemplateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetEmailTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return contents;
};

const deserializeAws_restJson1GetEventStreamCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetExportJobCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetExportJobsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetGcmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetImportJobCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetImportJobsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInAppMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInAppMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InAppMessagesResponse = deserializeAws_restJson1InAppMessagesResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetInAppMessagesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInAppTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.InAppTemplateResponse = deserializeAws_restJson1InAppTemplateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetInAppTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetJourneyCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJourneyDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyDateRangeKpiCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyDateRangeKpiResponse = deserializeAws_restJson1JourneyDateRangeKpiResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetJourneyDateRangeKpiCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyExecutionActivityMetricsResponse = deserializeAws_restJson1JourneyExecutionActivityMetricsResponse(
    data,
    context
  );
  return contents;
};

const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJourneyExecutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJourneyExecutionMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyExecutionMetricsResponse = deserializeAws_restJson1JourneyExecutionMetricsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetJourneyExecutionMetricsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.PushNotificationTemplateResponse = deserializeAws_restJson1PushNotificationTemplateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetPushTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetRecommenderConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetRecommenderConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecommenderConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ListRecommenderConfigurationsResponse = deserializeAws_restJson1ListRecommenderConfigurationsResponse(
    data,
    context
  );
  return contents;
};

const deserializeAws_restJson1GetRecommenderConfigurationsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentExportJobsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentImportJobsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSegmentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSegmentVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSmsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSTemplateResponse = deserializeAws_restJson1SMSTemplateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetSmsTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUserEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetUserEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetVoiceChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceTemplateResponse = deserializeAws_restJson1VoiceTemplateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1GetVoiceTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListJourneysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJourneysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneysResponse = deserializeAws_restJson1JourneysResponse(data, context);
  return contents;
};

const deserializeAws_restJson1ListJourneysCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TagsModel = deserializeAws_restJson1TagsModel(data, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplatesResponse = deserializeAws_restJson1TemplatesResponse(data, context);
  return contents;
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.TemplateVersionsResponse = deserializeAws_restJson1TemplateVersionsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1ListTemplateVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PhoneNumberValidateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PhoneNumberValidateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.NumberValidateResponse = deserializeAws_restJson1NumberValidateResponse(data, context);
  return contents;
};

const deserializeAws_restJson1PhoneNumberValidateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventsResponse = deserializeAws_restJson1EventsResponse(data, context);
  return contents;
};

const deserializeAws_restJson1PutEventsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEventStreamCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return contents;
};

const deserializeAws_restJson1PutEventStreamCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveAttributesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.AttributesResource = deserializeAws_restJson1AttributesResource(data, context);
  return contents;
};

const deserializeAws_restJson1RemoveAttributesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageResponse = deserializeAws_restJson1MessageResponse(data, context);
  return contents;
};

const deserializeAws_restJson1SendMessagesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendOTPMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendOTPMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendOTPMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageResponse = deserializeAws_restJson1MessageResponse(data, context);
  return contents;
};

const deserializeAws_restJson1SendOTPMessageCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendUsersMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendUsersMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SendUsersMessageResponse = deserializeAws_restJson1SendUsersMessageResponse(data, context);
  return contents;
};

const deserializeAws_restJson1SendUsersMessagesCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UpdateAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAdmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateAdmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateApnsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateApnsSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsVoipChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateApnsVoipChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApplicationSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateApplicationSettingsCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBaiduChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateBaiduChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCampaignCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateCampaignCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateEmailChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEndpointsBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEndpointsBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateEndpointsBatchCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGcmChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateGcmChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateInAppTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInAppTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInAppTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateInAppTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJourneyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateJourneyCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.pinpoint#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateJourneyStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateJourneyStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateJourneyStateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePushTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdatePushTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecommenderConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateRecommenderConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateSegmentCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSmsChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateSmsChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSmsTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateSmsTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTemplateActiveVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateActiveVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateTemplateActiveVersionCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVoiceChannelCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVoiceTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return contents;
};

const deserializeAws_restJson1UpdateVoiceTemplateCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1VerifyOTPMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyOTPMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1VerifyOTPMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.VerificationResponse = deserializeAws_restJson1VerificationResponse(data, context);
  return contents;
};

const deserializeAws_restJson1VerifyOTPMessageCommandError = async (
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
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      throw await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      throw await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      throw await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
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

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
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

const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const serializeAws_restJson1Activity = (input: Activity, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM != null && { CUSTOM: serializeAws_restJson1CustomMessageActivity(input.CUSTOM, context) }),
    ...(input.ConditionalSplit != null && {
      ConditionalSplit: serializeAws_restJson1ConditionalSplitActivity(input.ConditionalSplit, context),
    }),
    ...(input.ContactCenter != null && {
      ContactCenter: serializeAws_restJson1ContactCenterActivity(input.ContactCenter, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EMAIL != null && { EMAIL: serializeAws_restJson1EmailMessageActivity(input.EMAIL, context) }),
    ...(input.Holdout != null && { Holdout: serializeAws_restJson1HoldoutActivity(input.Holdout, context) }),
    ...(input.MultiCondition != null && {
      MultiCondition: serializeAws_restJson1MultiConditionalSplitActivity(input.MultiCondition, context),
    }),
    ...(input.PUSH != null && { PUSH: serializeAws_restJson1PushMessageActivity(input.PUSH, context) }),
    ...(input.RandomSplit != null && {
      RandomSplit: serializeAws_restJson1RandomSplitActivity(input.RandomSplit, context),
    }),
    ...(input.SMS != null && { SMS: serializeAws_restJson1SMSMessageActivity(input.SMS, context) }),
    ...(input.Wait != null && { Wait: serializeAws_restJson1WaitActivity(input.Wait, context) }),
  };
};

const serializeAws_restJson1AddressConfiguration = (input: AddressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BodyOverride != null && { BodyOverride: input.BodyOverride }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Context != null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TitleOverride != null && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1ADMChannelRequest = (input: ADMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientSecret != null && { ClientSecret: input.ClientSecret }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1ADMMessage = (input: ADMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.ConsolidationKey != null && { ConsolidationKey: input.ConsolidationKey }),
    ...(input.Data != null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.ExpiresAfter != null && { ExpiresAfter: input.ExpiresAfter }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.MD5 != null && { MD5: input.MD5 }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1AndroidPushNotificationTemplate = (
  input: AndroidPushNotificationTemplate,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1APNSChannelRequest = (input: APNSChannelRequest, context: __SerdeContext): any => {
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

const serializeAws_restJson1APNSMessage = (input: APNSMessage, context: __SerdeContext): any => {
  return {
    ...(input.APNSPushType != null && { APNSPushType: input.APNSPushType }),
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Badge != null && { Badge: input.Badge }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Category != null && { Category: input.Category }),
    ...(input.CollapseId != null && { CollapseId: input.CollapseId }),
    ...(input.Data != null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.PreferredAuthenticationMethod != null && {
      PreferredAuthenticationMethod: input.PreferredAuthenticationMethod,
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.ThreadId != null && { ThreadId: input.ThreadId }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSPushNotificationTemplate = (
  input: APNSPushNotificationTemplate,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1APNSSandboxChannelRequest = (
  input: APNSSandboxChannelRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1APNSVoipChannelRequest = (input: APNSVoipChannelRequest, context: __SerdeContext): any => {
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

const serializeAws_restJson1APNSVoipSandboxChannelRequest = (
  input: APNSVoipSandboxChannelRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1AttributeDimension = (input: AttributeDimension, context: __SerdeContext): any => {
  return {
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
    ...(input.Values != null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1BaiduChannelRequest = (input: BaiduChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey != null && { ApiKey: input.ApiKey }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SecretKey != null && { SecretKey: input.SecretKey }),
  };
};

const serializeAws_restJson1BaiduMessage = (input: BaiduMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Data != null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1CampaignCustomMessage = (input: CampaignCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: input.Data }),
  };
};

const serializeAws_restJson1CampaignEmailMessage = (input: CampaignEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.HtmlBody != null && { HtmlBody: input.HtmlBody }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_restJson1CampaignEventFilter = (input: CampaignEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType != null && { FilterType: input.FilterType }),
  };
};

const serializeAws_restJson1CampaignHook = (input: CampaignHook, context: __SerdeContext): any => {
  return {
    ...(input.LambdaFunctionName != null && { LambdaFunctionName: input.LambdaFunctionName }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.WebUrl != null && { WebUrl: input.WebUrl }),
  };
};

const serializeAws_restJson1CampaignInAppMessage = (input: CampaignInAppMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Content != null && { Content: serializeAws_restJson1ListOfInAppMessageContent(input.Content, context) }),
    ...(input.CustomConfig != null && {
      CustomConfig: serializeAws_restJson1MapOf__string(input.CustomConfig, context),
    }),
    ...(input.Layout != null && { Layout: input.Layout }),
  };
};

const serializeAws_restJson1CampaignLimits = (input: CampaignLimits, context: __SerdeContext): any => {
  return {
    ...(input.Daily != null && { Daily: input.Daily }),
    ...(input.MaximumDuration != null && { MaximumDuration: input.MaximumDuration }),
    ...(input.MessagesPerSecond != null && { MessagesPerSecond: input.MessagesPerSecond }),
    ...(input.Session != null && { Session: input.Session }),
    ...(input.Total != null && { Total: input.Total }),
  };
};

const serializeAws_restJson1CampaignSmsMessage = (input: CampaignSmsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1ClosedDays = (input: ClosedDays, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM != null && { CUSTOM: serializeAws_restJson1ListOfClosedDaysRules(input.CUSTOM, context) }),
    ...(input.EMAIL != null && { EMAIL: serializeAws_restJson1ListOfClosedDaysRules(input.EMAIL, context) }),
    ...(input.PUSH != null && { PUSH: serializeAws_restJson1ListOfClosedDaysRules(input.PUSH, context) }),
    ...(input.SMS != null && { SMS: serializeAws_restJson1ListOfClosedDaysRules(input.SMS, context) }),
    ...(input.VOICE != null && { VOICE: serializeAws_restJson1ListOfClosedDaysRules(input.VOICE, context) }),
  };
};

const serializeAws_restJson1ClosedDaysRule = (input: ClosedDaysRule, context: __SerdeContext): any => {
  return {
    ...(input.EndDateTime != null && { EndDateTime: input.EndDateTime }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.StartDateTime != null && { StartDateTime: input.StartDateTime }),
  };
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Conditions != null && {
      Conditions: serializeAws_restJson1ListOfSimpleCondition(input.Conditions, context),
    }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

const serializeAws_restJson1ConditionalSplitActivity = (
  input: ConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition != null && { Condition: serializeAws_restJson1Condition(input.Condition, context) }),
    ...(input.EvaluationWaitTime != null && {
      EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
    }),
    ...(input.FalseActivity != null && { FalseActivity: input.FalseActivity }),
    ...(input.TrueActivity != null && { TrueActivity: input.TrueActivity }),
  };
};

const serializeAws_restJson1ContactCenterActivity = (input: ContactCenterActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
  };
};

const serializeAws_restJson1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1CreateRecommenderConfigurationShape = (
  input: CreateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
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

const serializeAws_restJson1CustomDeliveryConfiguration = (
  input: CustomDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryUri != null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes != null && {
      EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
  };
};

const serializeAws_restJson1CustomMessageActivity = (input: CustomMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryUri != null && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes != null && {
      EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
    ...(input.MessageConfig != null && {
      MessageConfig: serializeAws_restJson1JourneyCustomMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1DefaultButtonConfiguration = (
  input: DefaultButtonConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackgroundColor != null && { BackgroundColor: input.BackgroundColor }),
    ...(input.BorderRadius != null && { BorderRadius: input.BorderRadius }),
    ...(input.ButtonAction != null && { ButtonAction: input.ButtonAction }),
    ...(input.Link != null && { Link: input.Link }),
    ...(input.Text != null && { Text: input.Text }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

const serializeAws_restJson1DefaultMessage = (input: DefaultMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
  };
};

const serializeAws_restJson1DefaultPushNotificationMessage = (
  input: DefaultPushNotificationMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Data != null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1DefaultPushNotificationTemplate = (
  input: DefaultPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1DirectMessageConfiguration = (
  input: DirectMessageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADMMessage != null && { ADMMessage: serializeAws_restJson1ADMMessage(input.ADMMessage, context) }),
    ...(input.APNSMessage != null && { APNSMessage: serializeAws_restJson1APNSMessage(input.APNSMessage, context) }),
    ...(input.BaiduMessage != null && {
      BaiduMessage: serializeAws_restJson1BaiduMessage(input.BaiduMessage, context),
    }),
    ...(input.DefaultMessage != null && {
      DefaultMessage: serializeAws_restJson1DefaultMessage(input.DefaultMessage, context),
    }),
    ...(input.DefaultPushNotificationMessage != null && {
      DefaultPushNotificationMessage: serializeAws_restJson1DefaultPushNotificationMessage(
        input.DefaultPushNotificationMessage,
        context
      ),
    }),
    ...(input.EmailMessage != null && {
      EmailMessage: serializeAws_restJson1EmailMessage(input.EmailMessage, context),
    }),
    ...(input.GCMMessage != null && { GCMMessage: serializeAws_restJson1GCMMessage(input.GCMMessage, context) }),
    ...(input.SMSMessage != null && { SMSMessage: serializeAws_restJson1SMSMessage(input.SMSMessage, context) }),
    ...(input.VoiceMessage != null && {
      VoiceMessage: serializeAws_restJson1VoiceMessage(input.VoiceMessage, context),
    }),
  };
};

const serializeAws_restJson1EmailChannelRequest = (input: EmailChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSet != null && { ConfigurationSet: input.ConfigurationSet }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.Identity != null && { Identity: input.Identity }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1EmailMessage = (input: EmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.FeedbackForwardingAddress != null && { FeedbackForwardingAddress: input.FeedbackForwardingAddress }),
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
    ...(input.RawEmail != null && { RawEmail: serializeAws_restJson1RawEmail(input.RawEmail, context) }),
    ...(input.ReplyToAddresses != null && {
      ReplyToAddresses: serializeAws_restJson1ListOf__string(input.ReplyToAddresses, context),
    }),
    ...(input.SimpleEmail != null && { SimpleEmail: serializeAws_restJson1SimpleEmail(input.SimpleEmail, context) }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
  };
};

const serializeAws_restJson1EmailMessageActivity = (input: EmailMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && {
      MessageConfig: serializeAws_restJson1JourneyEmailMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1EmailTemplateRequest = (input: EmailTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.HtmlPart != null && { HtmlPart: input.HtmlPart }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.TextPart != null && { TextPart: input.TextPart }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1EndpointBatchItem = (input: EndpointBatchItem, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Location != null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointBatchRequest = (input: EndpointBatchRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item != null && { Item: serializeAws_restJson1ListOfEndpointBatchItem(input.Item, context) }),
  };
};

const serializeAws_restJson1EndpointDemographic = (input: EndpointDemographic, context: __SerdeContext): any => {
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

const serializeAws_restJson1EndpointLocation = (input: EndpointLocation, context: __SerdeContext): any => {
  return {
    ...(input.City != null && { City: input.City }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.Latitude != null && { Latitude: __serializeFloat(input.Latitude) }),
    ...(input.Longitude != null && { Longitude: __serializeFloat(input.Longitude) }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

const serializeAws_restJson1EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location != null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointSendConfiguration = (
  input: EndpointSendConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BodyOverride != null && { BodyOverride: input.BodyOverride }),
    ...(input.Context != null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TitleOverride != null && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1EndpointUser = (input: EndpointUser, context: __SerdeContext): any => {
  return {
    ...(input.UserAttributes != null && {
      UserAttributes: serializeAws_restJson1MapOfListOf__string(input.UserAttributes, context),
    }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.AppPackageName != null && { AppPackageName: input.AppPackageName }),
    ...(input.AppTitle != null && { AppTitle: input.AppTitle }),
    ...(input.AppVersionCode != null && { AppVersionCode: input.AppVersionCode }),
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
    ...(input.ClientSdkVersion != null && { ClientSdkVersion: input.ClientSdkVersion }),
    ...(input.EventType != null && { EventType: input.EventType }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.SdkName != null && { SdkName: input.SdkName }),
    ...(input.Session != null && { Session: serializeAws_restJson1Session(input.Session, context) }),
    ...(input.Timestamp != null && { Timestamp: input.Timestamp }),
  };
};

const serializeAws_restJson1EventCondition = (input: EventCondition, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.MessageActivity != null && { MessageActivity: input.MessageActivity }),
  };
};

const serializeAws_restJson1EventDimensions = (input: EventDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
    }),
    ...(input.EventType != null && { EventType: serializeAws_restJson1SetDimension(input.EventType, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
  };
};

const serializeAws_restJson1EventFilter = (input: EventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context) }),
    ...(input.FilterType != null && { FilterType: input.FilterType }),
  };
};

const serializeAws_restJson1EventsBatch = (input: EventsBatch, context: __SerdeContext): any => {
  return {
    ...(input.Endpoint != null && { Endpoint: serializeAws_restJson1PublicEndpoint(input.Endpoint, context) }),
    ...(input.Events != null && { Events: serializeAws_restJson1MapOfEvent(input.Events, context) }),
  };
};

const serializeAws_restJson1EventsRequest = (input: EventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BatchItem != null && { BatchItem: serializeAws_restJson1MapOfEventsBatch(input.BatchItem, context) }),
  };
};

const serializeAws_restJson1EventStartCondition = (input: EventStartCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventFilter != null && { EventFilter: serializeAws_restJson1EventFilter(input.EventFilter, context) }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
  };
};

const serializeAws_restJson1ExportJobRequest = (input: ExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3UrlPrefix != null && { S3UrlPrefix: input.S3UrlPrefix }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion != null && { SegmentVersion: input.SegmentVersion }),
  };
};

const serializeAws_restJson1GCMChannelRequest = (input: GCMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey != null && { ApiKey: input.ApiKey }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1GCMMessage = (input: GCMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.CollapseKey != null && { CollapseKey: input.CollapseKey }),
    ...(input.Data != null && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference != null && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl != null && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RawContent != null && { RawContent: input.RawContent }),
    ...(input.RestrictedPackageName != null && { RestrictedPackageName: input.RestrictedPackageName }),
    ...(input.SilentPush != null && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl != null && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound != null && { Sound: input.Sound }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1GPSCoordinates = (input: GPSCoordinates, context: __SerdeContext): any => {
  return {
    ...(input.Latitude != null && { Latitude: __serializeFloat(input.Latitude) }),
    ...(input.Longitude != null && { Longitude: __serializeFloat(input.Longitude) }),
  };
};

const serializeAws_restJson1GPSPointDimension = (input: GPSPointDimension, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates != null && { Coordinates: serializeAws_restJson1GPSCoordinates(input.Coordinates, context) }),
    ...(input.RangeInKilometers != null && { RangeInKilometers: __serializeFloat(input.RangeInKilometers) }),
  };
};

const serializeAws_restJson1HoldoutActivity = (input: HoldoutActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.Percentage != null && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1ImportJobRequest = (input: ImportJobRequest, context: __SerdeContext): any => {
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

const serializeAws_restJson1InAppMessageBodyConfig = (input: InAppMessageBodyConfig, context: __SerdeContext): any => {
  return {
    ...(input.Alignment != null && { Alignment: input.Alignment }),
    ...(input.Body != null && { Body: input.Body }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

const serializeAws_restJson1InAppMessageButton = (input: InAppMessageButton, context: __SerdeContext): any => {
  return {
    ...(input.Android != null && {
      Android: serializeAws_restJson1OverrideButtonConfiguration(input.Android, context),
    }),
    ...(input.DefaultConfig != null && {
      DefaultConfig: serializeAws_restJson1DefaultButtonConfiguration(input.DefaultConfig, context),
    }),
    ...(input.IOS != null && { IOS: serializeAws_restJson1OverrideButtonConfiguration(input.IOS, context) }),
    ...(input.Web != null && { Web: serializeAws_restJson1OverrideButtonConfiguration(input.Web, context) }),
  };
};

const serializeAws_restJson1InAppMessageContent = (input: InAppMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.BackgroundColor != null && { BackgroundColor: input.BackgroundColor }),
    ...(input.BodyConfig != null && {
      BodyConfig: serializeAws_restJson1InAppMessageBodyConfig(input.BodyConfig, context),
    }),
    ...(input.HeaderConfig != null && {
      HeaderConfig: serializeAws_restJson1InAppMessageHeaderConfig(input.HeaderConfig, context),
    }),
    ...(input.ImageUrl != null && { ImageUrl: input.ImageUrl }),
    ...(input.PrimaryBtn != null && {
      PrimaryBtn: serializeAws_restJson1InAppMessageButton(input.PrimaryBtn, context),
    }),
    ...(input.SecondaryBtn != null && {
      SecondaryBtn: serializeAws_restJson1InAppMessageButton(input.SecondaryBtn, context),
    }),
  };
};

const serializeAws_restJson1InAppMessageHeaderConfig = (
  input: InAppMessageHeaderConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alignment != null && { Alignment: input.Alignment }),
    ...(input.Header != null && { Header: input.Header }),
    ...(input.TextColor != null && { TextColor: input.TextColor }),
  };
};

const serializeAws_restJson1InAppTemplateRequest = (input: InAppTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: serializeAws_restJson1ListOfInAppMessageContent(input.Content, context) }),
    ...(input.CustomConfig != null && {
      CustomConfig: serializeAws_restJson1MapOf__string(input.CustomConfig, context),
    }),
    ...(input.Layout != null && { Layout: input.Layout }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1JourneyChannelSettings = (input: JourneyChannelSettings, context: __SerdeContext): any => {
  return {
    ...(input.ConnectCampaignArn != null && { ConnectCampaignArn: input.ConnectCampaignArn }),
    ...(input.ConnectCampaignExecutionRoleArn != null && {
      ConnectCampaignExecutionRoleArn: input.ConnectCampaignExecutionRoleArn,
    }),
  };
};

const serializeAws_restJson1JourneyCustomMessage = (input: JourneyCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: input.Data }),
  };
};

const serializeAws_restJson1JourneyEmailMessage = (input: JourneyEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.FromAddress != null && { FromAddress: input.FromAddress }),
  };
};

const serializeAws_restJson1JourneyLimits = (input: JourneyLimits, context: __SerdeContext): any => {
  return {
    ...(input.DailyCap != null && { DailyCap: input.DailyCap }),
    ...(input.EndpointReentryCap != null && { EndpointReentryCap: input.EndpointReentryCap }),
    ...(input.EndpointReentryInterval != null && { EndpointReentryInterval: input.EndpointReentryInterval }),
    ...(input.MessagesPerSecond != null && { MessagesPerSecond: input.MessagesPerSecond }),
  };
};

const serializeAws_restJson1JourneyPushMessage = (input: JourneyPushMessage, context: __SerdeContext): any => {
  return {
    ...(input.TimeToLive != null && { TimeToLive: input.TimeToLive }),
  };
};

const serializeAws_restJson1JourneySchedule = (input: JourneySchedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime.toISOString().split(".")[0] + "Z" }),
    ...(input.StartTime != null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1JourneySMSMessage = (input: JourneySMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1JourneyStateRequest = (input: JourneyStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1ListOf__EndpointTypesElement = (
  input: (__EndpointTypesElement | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ListOfClosedDaysRules = (input: ClosedDaysRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ClosedDaysRule(entry, context);
    });
};

const serializeAws_restJson1ListOfEndpointBatchItem = (input: EndpointBatchItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EndpointBatchItem(entry, context);
    });
};

const serializeAws_restJson1ListOfInAppMessageContent = (
  input: InAppMessageContent[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InAppMessageContent(entry, context);
    });
};

const serializeAws_restJson1ListOfMultiConditionalBranch = (
  input: MultiConditionalBranch[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MultiConditionalBranch(entry, context);
    });
};

const serializeAws_restJson1ListOfOpenHoursRules = (input: OpenHoursRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1OpenHoursRule(entry, context);
    });
};

const serializeAws_restJson1ListOfRandomSplitEntry = (input: RandomSplitEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RandomSplitEntry(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentDimensions = (input: SegmentDimensions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentDimensions(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentGroup = (input: SegmentGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentGroup(entry, context);
    });
};

const serializeAws_restJson1ListOfSegmentReference = (input: SegmentReference[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentReference(entry, context);
    });
};

const serializeAws_restJson1ListOfSimpleCondition = (input: SimpleCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SimpleCondition(entry, context);
    });
};

const serializeAws_restJson1ListOfWriteTreatmentResource = (
  input: WriteTreatmentResource[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WriteTreatmentResource(entry, context);
    });
};

const serializeAws_restJson1MapOf__double = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __serializeFloat(value);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfActivity = (input: Record<string, Activity>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Activity(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfAddressConfiguration = (
  input: Record<string, AddressConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1AddressConfiguration(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfAttributeDimension = (
  input: Record<string, AttributeDimension>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1AttributeDimension(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfEndpointSendConfiguration = (
  input: Record<string, EndpointSendConfiguration>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1EndpointSendConfiguration(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfEvent = (input: Record<string, Event>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Event(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfEventsBatch = (input: Record<string, EventsBatch>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1EventsBatch(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfListOf__string = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ListOf__string(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfListOfOpenHoursRules = (
  input: Record<string, OpenHoursRule[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [DayOfWeek | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ListOfOpenHoursRules(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MapOfMetricDimension = (
  input: Record<string, MetricDimension>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1MetricDimension(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
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

const serializeAws_restJson1MessageConfiguration = (input: MessageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ADMMessage != null && { ADMMessage: serializeAws_restJson1Message(input.ADMMessage, context) }),
    ...(input.APNSMessage != null && { APNSMessage: serializeAws_restJson1Message(input.APNSMessage, context) }),
    ...(input.BaiduMessage != null && { BaiduMessage: serializeAws_restJson1Message(input.BaiduMessage, context) }),
    ...(input.CustomMessage != null && {
      CustomMessage: serializeAws_restJson1CampaignCustomMessage(input.CustomMessage, context),
    }),
    ...(input.DefaultMessage != null && {
      DefaultMessage: serializeAws_restJson1Message(input.DefaultMessage, context),
    }),
    ...(input.EmailMessage != null && {
      EmailMessage: serializeAws_restJson1CampaignEmailMessage(input.EmailMessage, context),
    }),
    ...(input.GCMMessage != null && { GCMMessage: serializeAws_restJson1Message(input.GCMMessage, context) }),
    ...(input.InAppMessage != null && {
      InAppMessage: serializeAws_restJson1CampaignInAppMessage(input.InAppMessage, context),
    }),
    ...(input.SMSMessage != null && {
      SMSMessage: serializeAws_restJson1CampaignSmsMessage(input.SMSMessage, context),
    }),
  };
};

const serializeAws_restJson1MessageRequest = (input: MessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses != null && {
      Addresses: serializeAws_restJson1MapOfAddressConfiguration(input.Addresses, context),
    }),
    ...(input.Context != null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.Endpoints != null && {
      Endpoints: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Endpoints, context),
    }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId != null && { TraceId: input.TraceId }),
  };
};

const serializeAws_restJson1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

const serializeAws_restJson1MultiConditionalBranch = (input: MultiConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: serializeAws_restJson1SimpleCondition(input.Condition, context) }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
  };
};

const serializeAws_restJson1MultiConditionalSplitActivity = (
  input: MultiConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Branches != null && {
      Branches: serializeAws_restJson1ListOfMultiConditionalBranch(input.Branches, context),
    }),
    ...(input.DefaultActivity != null && { DefaultActivity: input.DefaultActivity }),
    ...(input.EvaluationWaitTime != null && {
      EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
    }),
  };
};

const serializeAws_restJson1NumberValidateRequest = (input: NumberValidateRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode != null && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_restJson1OpenHours = (input: OpenHours, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM != null && { CUSTOM: serializeAws_restJson1MapOfListOfOpenHoursRules(input.CUSTOM, context) }),
    ...(input.EMAIL != null && { EMAIL: serializeAws_restJson1MapOfListOfOpenHoursRules(input.EMAIL, context) }),
    ...(input.PUSH != null && { PUSH: serializeAws_restJson1MapOfListOfOpenHoursRules(input.PUSH, context) }),
    ...(input.SMS != null && { SMS: serializeAws_restJson1MapOfListOfOpenHoursRules(input.SMS, context) }),
    ...(input.VOICE != null && { VOICE: serializeAws_restJson1MapOfListOfOpenHoursRules(input.VOICE, context) }),
  };
};

const serializeAws_restJson1OpenHoursRule = (input: OpenHoursRule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
  };
};

const serializeAws_restJson1OverrideButtonConfiguration = (
  input: OverrideButtonConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ButtonAction != null && { ButtonAction: input.ButtonAction }),
    ...(input.Link != null && { Link: input.Link }),
  };
};

const serializeAws_restJson1PublicEndpoint = (input: PublicEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType != null && { ChannelType: input.ChannelType }),
    ...(input.Demographic != null && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate != null && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus != null && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location != null && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut != null && { OptOut: input.OptOut }),
    ...(input.RequestId != null && { RequestId: input.RequestId }),
    ...(input.User != null && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1PushMessageActivity = (input: PushMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && {
      MessageConfig: serializeAws_restJson1JourneyPushMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1PushNotificationTemplateRequest = (
  input: PushNotificationTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADM != null && { ADM: serializeAws_restJson1AndroidPushNotificationTemplate(input.ADM, context) }),
    ...(input.APNS != null && { APNS: serializeAws_restJson1APNSPushNotificationTemplate(input.APNS, context) }),
    ...(input.Baidu != null && { Baidu: serializeAws_restJson1AndroidPushNotificationTemplate(input.Baidu, context) }),
    ...(input.Default != null && {
      Default: serializeAws_restJson1DefaultPushNotificationTemplate(input.Default, context),
    }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.GCM != null && { GCM: serializeAws_restJson1AndroidPushNotificationTemplate(input.GCM, context) }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1QuietTime = (input: QuietTime, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
  };
};

const serializeAws_restJson1RandomSplitActivity = (input: RandomSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Branches != null && { Branches: serializeAws_restJson1ListOfRandomSplitEntry(input.Branches, context) }),
  };
};

const serializeAws_restJson1RandomSplitEntry = (input: RandomSplitEntry, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.Percentage != null && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1RawEmail = (input: RawEmail, context: __SerdeContext): any => {
  return {
    ...(input.Data != null && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_restJson1RecencyDimension = (input: RecencyDimension, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.RecencyType != null && { RecencyType: input.RecencyType }),
  };
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: input.EndTime }),
    ...(input.EventFilter != null && {
      EventFilter: serializeAws_restJson1CampaignEventFilter(input.EventFilter, context),
    }),
    ...(input.Frequency != null && { Frequency: input.Frequency }),
    ...(input.IsLocalTime != null && { IsLocalTime: input.IsLocalTime }),
    ...(input.QuietTime != null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.StartTime != null && { StartTime: input.StartTime }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1SegmentBehaviors = (input: SegmentBehaviors, context: __SerdeContext): any => {
  return {
    ...(input.Recency != null && { Recency: serializeAws_restJson1RecencyDimension(input.Recency, context) }),
  };
};

const serializeAws_restJson1SegmentCondition = (input: SegmentCondition, context: __SerdeContext): any => {
  return {
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
  };
};

const serializeAws_restJson1SegmentDemographics = (input: SegmentDemographics, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion != null && { AppVersion: serializeAws_restJson1SetDimension(input.AppVersion, context) }),
    ...(input.Channel != null && { Channel: serializeAws_restJson1SetDimension(input.Channel, context) }),
    ...(input.DeviceType != null && { DeviceType: serializeAws_restJson1SetDimension(input.DeviceType, context) }),
    ...(input.Make != null && { Make: serializeAws_restJson1SetDimension(input.Make, context) }),
    ...(input.Model != null && { Model: serializeAws_restJson1SetDimension(input.Model, context) }),
    ...(input.Platform != null && { Platform: serializeAws_restJson1SetDimension(input.Platform, context) }),
  };
};

const serializeAws_restJson1SegmentDimensions = (input: SegmentDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
    }),
    ...(input.Behavior != null && { Behavior: serializeAws_restJson1SegmentBehaviors(input.Behavior, context) }),
    ...(input.Demographic != null && {
      Demographic: serializeAws_restJson1SegmentDemographics(input.Demographic, context),
    }),
    ...(input.Location != null && { Location: serializeAws_restJson1SegmentLocation(input.Location, context) }),
    ...(input.Metrics != null && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
    ...(input.UserAttributes != null && {
      UserAttributes: serializeAws_restJson1MapOfAttributeDimension(input.UserAttributes, context),
    }),
  };
};

const serializeAws_restJson1SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && {
      Dimensions: serializeAws_restJson1ListOfSegmentDimensions(input.Dimensions, context),
    }),
    ...(input.SourceSegments != null && {
      SourceSegments: serializeAws_restJson1ListOfSegmentReference(input.SourceSegments, context),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SegmentGroupList = (input: SegmentGroupList, context: __SerdeContext): any => {
  return {
    ...(input.Groups != null && { Groups: serializeAws_restJson1ListOfSegmentGroup(input.Groups, context) }),
    ...(input.Include != null && { Include: input.Include }),
  };
};

const serializeAws_restJson1SegmentLocation = (input: SegmentLocation, context: __SerdeContext): any => {
  return {
    ...(input.Country != null && { Country: serializeAws_restJson1SetDimension(input.Country, context) }),
    ...(input.GPSPoint != null && { GPSPoint: serializeAws_restJson1GPSPointDimension(input.GPSPoint, context) }),
  };
};

const serializeAws_restJson1SegmentReference = (input: SegmentReference, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1SendOTPMessageRequestParameters = (
  input: SendOTPMessageRequestParameters,
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1SendUsersMessageRequest = (
  input: SendUsersMessageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context != null && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId != null && { TraceId: input.TraceId }),
    ...(input.Users != null && { Users: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Users, context) }),
  };
};

const serializeAws_restJson1Session = (input: Session, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.StartTimestamp != null && { StartTimestamp: input.StartTimestamp }),
    ...(input.StopTimestamp != null && { StopTimestamp: input.StopTimestamp }),
  };
};

const serializeAws_restJson1SetDimension = (input: SetDimension, context: __SerdeContext): any => {
  return {
    ...(input.DimensionType != null && { DimensionType: input.DimensionType }),
    ...(input.Values != null && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1SimpleCondition = (input: SimpleCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventCondition != null && {
      EventCondition: serializeAws_restJson1EventCondition(input.EventCondition, context),
    }),
    ...(input.SegmentCondition != null && {
      SegmentCondition: serializeAws_restJson1SegmentCondition(input.SegmentCondition, context),
    }),
    ...(input.SegmentDimensions != null && {
      segmentDimensions: serializeAws_restJson1SegmentDimensions(input.SegmentDimensions, context),
    }),
  };
};

const serializeAws_restJson1SimpleEmail = (input: SimpleEmail, context: __SerdeContext): any => {
  return {
    ...(input.HtmlPart != null && { HtmlPart: serializeAws_restJson1SimpleEmailPart(input.HtmlPart, context) }),
    ...(input.Subject != null && { Subject: serializeAws_restJson1SimpleEmailPart(input.Subject, context) }),
    ...(input.TextPart != null && { TextPart: serializeAws_restJson1SimpleEmailPart(input.TextPart, context) }),
  };
};

const serializeAws_restJson1SimpleEmailPart = (input: SimpleEmailPart, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.Data != null && { Data: input.Data }),
  };
};

const serializeAws_restJson1SMSChannelRequest = (input: SMSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.ShortCode != null && { ShortCode: input.ShortCode }),
  };
};

const serializeAws_restJson1SMSMessage = (input: SMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.MediaUrl != null && { MediaUrl: input.MediaUrl }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId != null && { SenderId: input.SenderId }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TemplateId != null && { TemplateId: input.TemplateId }),
  };
};

const serializeAws_restJson1SMSMessageActivity = (input: SMSMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig != null && {
      MessageConfig: serializeAws_restJson1JourneySMSMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.TemplateName != null && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion != null && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1SMSTemplateRequest = (input: SMSTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.RecommenderId != null && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1StartCondition = (input: StartCondition, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventStartCondition != null && {
      EventStartCondition: serializeAws_restJson1EventStartCondition(input.EventStartCondition, context),
    }),
    ...(input.SegmentStartCondition != null && {
      SegmentStartCondition: serializeAws_restJson1SegmentCondition(input.SegmentStartCondition, context),
    }),
  };
};

const serializeAws_restJson1TagsModel = (input: TagsModel, context: __SerdeContext): any => {
  return {
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateActiveVersionRequest = (
  input: TemplateActiveVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EmailTemplate != null && { EmailTemplate: serializeAws_restJson1Template(input.EmailTemplate, context) }),
    ...(input.PushTemplate != null && { PushTemplate: serializeAws_restJson1Template(input.PushTemplate, context) }),
    ...(input.SMSTemplate != null && { SMSTemplate: serializeAws_restJson1Template(input.SMSTemplate, context) }),
    ...(input.VoiceTemplate != null && { VoiceTemplate: serializeAws_restJson1Template(input.VoiceTemplate, context) }),
  };
};

const serializeAws_restJson1UpdateAttributesRequest = (
  input: UpdateAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blacklist != null && { Blacklist: serializeAws_restJson1ListOf__string(input.Blacklist, context) }),
  };
};

const serializeAws_restJson1UpdateRecommenderConfigurationShape = (
  input: UpdateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context) }),
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

const serializeAws_restJson1VerifyOTPMessageRequestParameters = (
  input: VerifyOTPMessageRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationIdentity != null && { DestinationIdentity: input.DestinationIdentity }),
    ...(input.Otp != null && { Otp: input.Otp }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
  };
};

const serializeAws_restJson1VoiceChannelRequest = (input: VoiceChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1VoiceMessage = (input: VoiceMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.OriginationNumber != null && { OriginationNumber: input.OriginationNumber }),
    ...(input.Substitutions != null && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
  };
};

const serializeAws_restJson1VoiceTemplateRequest = (input: VoiceTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body != null && { Body: input.Body }),
    ...(input.DefaultSubstitutions != null && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.TemplateDescription != null && { TemplateDescription: input.TemplateDescription }),
    ...(input.VoiceId != null && { VoiceId: input.VoiceId }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WaitActivity = (input: WaitActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity != null && { NextActivity: input.NextActivity }),
    ...(input.WaitTime != null && { WaitTime: serializeAws_restJson1WaitTime(input.WaitTime, context) }),
  };
};

const serializeAws_restJson1WaitTime = (input: WaitTime, context: __SerdeContext): any => {
  return {
    ...(input.WaitFor != null && { WaitFor: input.WaitFor }),
    ...(input.WaitUntil != null && { WaitUntil: input.WaitUntil }),
  };
};

const serializeAws_restJson1WriteApplicationSettingsRequest = (
  input: WriteApplicationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CampaignHook != null && {
      CampaignHook: serializeAws_restJson1CampaignHook(input.CampaignHook, context),
    }),
    ...(input.CloudWatchMetricsEnabled != null && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.EventTaggingEnabled != null && { EventTaggingEnabled: input.EventTaggingEnabled }),
    ...(input.Limits != null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.QuietTime != null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
  };
};

const serializeAws_restJson1WriteCampaignRequest = (input: WriteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalTreatments != null && {
      AdditionalTreatments: serializeAws_restJson1ListOfWriteTreatmentResource(input.AdditionalTreatments, context),
    }),
    ...(input.CustomDeliveryConfiguration != null && {
      CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
        input.CustomDeliveryConfiguration,
        context
      ),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HoldoutPercent != null && { HoldoutPercent: input.HoldoutPercent }),
    ...(input.Hook != null && { Hook: serializeAws_restJson1CampaignHook(input.Hook, context) }),
    ...(input.IsPaused != null && { IsPaused: input.IsPaused }),
    ...(input.Limits != null && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.Schedule != null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SegmentId != null && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion != null && { SegmentVersion: input.SegmentVersion }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription != null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName != null && { TreatmentName: input.TreatmentName }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteEventStream = (input: WriteEventStream, context: __SerdeContext): any => {
  return {
    ...(input.DestinationStreamArn != null && { DestinationStreamArn: input.DestinationStreamArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1WriteJourneyRequest = (input: WriteJourneyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Activities != null && { Activities: serializeAws_restJson1MapOfActivity(input.Activities, context) }),
    ...(input.ClosedDays != null && { ClosedDays: serializeAws_restJson1ClosedDays(input.ClosedDays, context) }),
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.JourneyChannelSettings != null && {
      JourneyChannelSettings: serializeAws_restJson1JourneyChannelSettings(input.JourneyChannelSettings, context),
    }),
    ...(input.LastModifiedDate != null && { LastModifiedDate: input.LastModifiedDate }),
    ...(input.Limits != null && { Limits: serializeAws_restJson1JourneyLimits(input.Limits, context) }),
    ...(input.LocalTime != null && { LocalTime: input.LocalTime }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OpenHours != null && { OpenHours: serializeAws_restJson1OpenHours(input.OpenHours, context) }),
    ...(input.QuietTime != null && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.RefreshFrequency != null && { RefreshFrequency: input.RefreshFrequency }),
    ...(input.RefreshOnSegmentUpdate != null && { RefreshOnSegmentUpdate: input.RefreshOnSegmentUpdate }),
    ...(input.Schedule != null && { Schedule: serializeAws_restJson1JourneySchedule(input.Schedule, context) }),
    ...(input.SendingSchedule != null && { SendingSchedule: input.SendingSchedule }),
    ...(input.StartActivity != null && { StartActivity: input.StartActivity }),
    ...(input.StartCondition != null && {
      StartCondition: serializeAws_restJson1StartCondition(input.StartCondition, context),
    }),
    ...(input.State != null && { State: input.State }),
    ...(input.WaitForQuietTime != null && { WaitForQuietTime: input.WaitForQuietTime }),
  };
};

const serializeAws_restJson1WriteSegmentRequest = (input: WriteSegmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1SegmentDimensions(input.Dimensions, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SegmentGroups != null && {
      SegmentGroups: serializeAws_restJson1SegmentGroupList(input.SegmentGroups, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteTreatmentResource = (input: WriteTreatmentResource, context: __SerdeContext): any => {
  return {
    ...(input.CustomDeliveryConfiguration != null && {
      CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
        input.CustomDeliveryConfiguration,
        context
      ),
    }),
    ...(input.MessageConfiguration != null && {
      MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Schedule != null && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SizePercent != null && { SizePercent: input.SizePercent }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription != null && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName != null && { TreatmentName: input.TreatmentName }),
  };
};

const deserializeAws_restJson1ActivitiesResponse = (output: any, context: __SerdeContext): ActivitiesResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfActivityResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    CUSTOM: output.CUSTOM != null ? deserializeAws_restJson1CustomMessageActivity(output.CUSTOM, context) : undefined,
    ConditionalSplit:
      output.ConditionalSplit != null
        ? deserializeAws_restJson1ConditionalSplitActivity(output.ConditionalSplit, context)
        : undefined,
    ContactCenter:
      output.ContactCenter != null
        ? deserializeAws_restJson1ContactCenterActivity(output.ContactCenter, context)
        : undefined,
    Description: __expectString(output.Description),
    EMAIL: output.EMAIL != null ? deserializeAws_restJson1EmailMessageActivity(output.EMAIL, context) : undefined,
    Holdout: output.Holdout != null ? deserializeAws_restJson1HoldoutActivity(output.Holdout, context) : undefined,
    MultiCondition:
      output.MultiCondition != null
        ? deserializeAws_restJson1MultiConditionalSplitActivity(output.MultiCondition, context)
        : undefined,
    PUSH: output.PUSH != null ? deserializeAws_restJson1PushMessageActivity(output.PUSH, context) : undefined,
    RandomSplit:
      output.RandomSplit != null ? deserializeAws_restJson1RandomSplitActivity(output.RandomSplit, context) : undefined,
    SMS: output.SMS != null ? deserializeAws_restJson1SMSMessageActivity(output.SMS, context) : undefined,
    Wait: output.Wait != null ? deserializeAws_restJson1WaitActivity(output.Wait, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ActivityResponse = (output: any, context: __SerdeContext): ActivityResponse => {
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

const deserializeAws_restJson1ADMChannelResponse = (output: any, context: __SerdeContext): ADMChannelResponse => {
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

const deserializeAws_restJson1AndroidPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): AndroidPushNotificationTemplate => {
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

const deserializeAws_restJson1APNSChannelResponse = (output: any, context: __SerdeContext): APNSChannelResponse => {
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

const deserializeAws_restJson1APNSPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): APNSPushNotificationTemplate => {
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

const deserializeAws_restJson1APNSSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSSandboxChannelResponse => {
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

const deserializeAws_restJson1APNSVoipChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipChannelResponse => {
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

const deserializeAws_restJson1APNSVoipSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipSandboxChannelResponse => {
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

const deserializeAws_restJson1ApplicationDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): ApplicationDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationSettingsResource = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignHook:
      output.CampaignHook != null ? deserializeAws_restJson1CampaignHook(output.CampaignHook, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? deserializeAws_restJson1CampaignLimits(output.Limits, context) : undefined,
    QuietTime: output.QuietTime != null ? deserializeAws_restJson1QuietTime(output.QuietTime, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationsResponse = (output: any, context: __SerdeContext): ApplicationsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfApplicationResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1AttributeDimension = (output: any, context: __SerdeContext): AttributeDimension => {
  return {
    AttributeType: __expectString(output.AttributeType),
    Values: output.Values != null ? deserializeAws_restJson1ListOf__string(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AttributesResource = (output: any, context: __SerdeContext): AttributesResource => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    AttributeType: __expectString(output.AttributeType),
    Attributes:
      output.Attributes != null ? deserializeAws_restJson1ListOf__string(output.Attributes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BaiduChannelResponse = (output: any, context: __SerdeContext): BaiduChannelResponse => {
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

const deserializeAws_restJson1BaseKpiResult = (output: any, context: __SerdeContext): BaseKpiResult => {
  return {
    Rows: output.Rows != null ? deserializeAws_restJson1ListOfResultRow(output.Rows, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignCustomMessage = (output: any, context: __SerdeContext): CampaignCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

const deserializeAws_restJson1CampaignDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): CampaignDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CampaignId: __expectString(output.CampaignId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignEmailMessage = (output: any, context: __SerdeContext): CampaignEmailMessage => {
  return {
    Body: __expectString(output.Body),
    FromAddress: __expectString(output.FromAddress),
    HtmlBody: __expectString(output.HtmlBody),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_restJson1CampaignEventFilter = (output: any, context: __SerdeContext): CampaignEventFilter => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_restJson1EventDimensions(output.Dimensions, context) : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

const deserializeAws_restJson1CampaignHook = (output: any, context: __SerdeContext): CampaignHook => {
  return {
    LambdaFunctionName: __expectString(output.LambdaFunctionName),
    Mode: __expectString(output.Mode),
    WebUrl: __expectString(output.WebUrl),
  } as any;
};

const deserializeAws_restJson1CampaignInAppMessage = (output: any, context: __SerdeContext): CampaignInAppMessage => {
  return {
    Body: __expectString(output.Body),
    Content:
      output.Content != null ? deserializeAws_restJson1ListOfInAppMessageContent(output.Content, context) : undefined,
    CustomConfig:
      output.CustomConfig != null ? deserializeAws_restJson1MapOf__string(output.CustomConfig, context) : undefined,
    Layout: __expectString(output.Layout),
  } as any;
};

const deserializeAws_restJson1CampaignLimits = (output: any, context: __SerdeContext): CampaignLimits => {
  return {
    Daily: __expectInt32(output.Daily),
    MaximumDuration: __expectInt32(output.MaximumDuration),
    MessagesPerSecond: __expectInt32(output.MessagesPerSecond),
    Session: __expectInt32(output.Session),
    Total: __expectInt32(output.Total),
  } as any;
};

const deserializeAws_restJson1CampaignResponse = (output: any, context: __SerdeContext): CampaignResponse => {
  return {
    AdditionalTreatments:
      output.AdditionalTreatments != null
        ? deserializeAws_restJson1ListOfTreatmentResource(output.AdditionalTreatments, context)
        : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration != null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    DefaultState:
      output.DefaultState != null ? deserializeAws_restJson1CampaignState(output.DefaultState, context) : undefined,
    Description: __expectString(output.Description),
    HoldoutPercent: __expectInt32(output.HoldoutPercent),
    Hook: output.Hook != null ? deserializeAws_restJson1CampaignHook(output.Hook, context) : undefined,
    Id: __expectString(output.Id),
    IsPaused: __expectBoolean(output.IsPaused),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? deserializeAws_restJson1CampaignLimits(output.Limits, context) : undefined,
    MessageConfiguration:
      output.MessageConfiguration != null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
    Schedule: output.Schedule != null ? deserializeAws_restJson1Schedule(output.Schedule, context) : undefined,
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectInt32(output.SegmentVersion),
    State: output.State != null ? deserializeAws_restJson1CampaignState(output.State, context) : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
    Version: __expectInt32(output.Version),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignSmsMessage = (output: any, context: __SerdeContext): CampaignSmsMessage => {
  return {
    Body: __expectString(output.Body),
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1CampaignsResponse = (output: any, context: __SerdeContext): CampaignsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfCampaignResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1CampaignState = (output: any, context: __SerdeContext): CampaignState => {
  return {
    CampaignStatus: __expectString(output.CampaignStatus),
  } as any;
};

const deserializeAws_restJson1ChannelResponse = (output: any, context: __SerdeContext): ChannelResponse => {
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

const deserializeAws_restJson1ChannelsResponse = (output: any, context: __SerdeContext): ChannelsResponse => {
  return {
    Channels:
      output.Channels != null ? deserializeAws_restJson1MapOfChannelResponse(output.Channels, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClosedDays = (output: any, context: __SerdeContext): ClosedDays => {
  return {
    CUSTOM: output.CUSTOM != null ? deserializeAws_restJson1ListOfClosedDaysRules(output.CUSTOM, context) : undefined,
    EMAIL: output.EMAIL != null ? deserializeAws_restJson1ListOfClosedDaysRules(output.EMAIL, context) : undefined,
    PUSH: output.PUSH != null ? deserializeAws_restJson1ListOfClosedDaysRules(output.PUSH, context) : undefined,
    SMS: output.SMS != null ? deserializeAws_restJson1ListOfClosedDaysRules(output.SMS, context) : undefined,
    VOICE: output.VOICE != null ? deserializeAws_restJson1ListOfClosedDaysRules(output.VOICE, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClosedDaysRule = (output: any, context: __SerdeContext): ClosedDaysRule => {
  return {
    EndDateTime: __expectString(output.EndDateTime),
    Name: __expectString(output.Name),
    StartDateTime: __expectString(output.StartDateTime),
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    Conditions:
      output.Conditions != null ? deserializeAws_restJson1ListOfSimpleCondition(output.Conditions, context) : undefined,
    Operator: __expectString(output.Operator),
  } as any;
};

const deserializeAws_restJson1ConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): ConditionalSplitActivity => {
  return {
    Condition: output.Condition != null ? deserializeAws_restJson1Condition(output.Condition, context) : undefined,
    EvaluationWaitTime:
      output.EvaluationWaitTime != null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
    FalseActivity: __expectString(output.FalseActivity),
    TrueActivity: __expectString(output.TrueActivity),
  } as any;
};

const deserializeAws_restJson1ContactCenterActivity = (output: any, context: __SerdeContext): ContactCenterActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
  } as any;
};

const deserializeAws_restJson1CreateTemplateMessageBody = (
  output: any,
  context: __SerdeContext
): CreateTemplateMessageBody => {
  return {
    Arn: __expectString(output.Arn),
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1CustomDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDeliveryConfiguration => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes != null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomMessageActivity = (output: any, context: __SerdeContext): CustomMessageActivity => {
  return {
    DeliveryUri: __expectString(output.DeliveryUri),
    EndpointTypes:
      output.EndpointTypes != null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
    MessageConfig:
      output.MessageConfig != null
        ? deserializeAws_restJson1JourneyCustomMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1DefaultButtonConfiguration = (
  output: any,
  context: __SerdeContext
): DefaultButtonConfiguration => {
  return {
    BackgroundColor: __expectString(output.BackgroundColor),
    BorderRadius: __expectInt32(output.BorderRadius),
    ButtonAction: __expectString(output.ButtonAction),
    Link: __expectString(output.Link),
    Text: __expectString(output.Text),
    TextColor: __expectString(output.TextColor),
  } as any;
};

const deserializeAws_restJson1DefaultPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): DefaultPushNotificationTemplate => {
  return {
    Action: __expectString(output.Action),
    Body: __expectString(output.Body),
    Sound: __expectString(output.Sound),
    Title: __expectString(output.Title),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1EmailChannelResponse = (output: any, context: __SerdeContext): EmailChannelResponse => {
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

const deserializeAws_restJson1EmailMessageActivity = (output: any, context: __SerdeContext): EmailMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig != null
        ? deserializeAws_restJson1JourneyEmailMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1EmailTemplateResponse = (output: any, context: __SerdeContext): EmailTemplateResponse => {
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
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointDemographic = (output: any, context: __SerdeContext): EndpointDemographic => {
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

const deserializeAws_restJson1EndpointItemResponse = (output: any, context: __SerdeContext): EndpointItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1EndpointLocation = (output: any, context: __SerdeContext): EndpointLocation => {
  return {
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    Latitude: __limitedParseDouble(output.Latitude),
    Longitude: __limitedParseDouble(output.Longitude),
    PostalCode: __expectString(output.PostalCode),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1EndpointMessageResult = (output: any, context: __SerdeContext): EndpointMessageResult => {
  return {
    Address: __expectString(output.Address),
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectInt32(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

const deserializeAws_restJson1EndpointResponse = (output: any, context: __SerdeContext): EndpointResponse => {
  return {
    Address: __expectString(output.Address),
    ApplicationId: __expectString(output.ApplicationId),
    Attributes:
      output.Attributes != null ? deserializeAws_restJson1MapOfListOf__string(output.Attributes, context) : undefined,
    ChannelType: __expectString(output.ChannelType),
    CohortId: __expectString(output.CohortId),
    CreationDate: __expectString(output.CreationDate),
    Demographic:
      output.Demographic != null ? deserializeAws_restJson1EndpointDemographic(output.Demographic, context) : undefined,
    EffectiveDate: __expectString(output.EffectiveDate),
    EndpointStatus: __expectString(output.EndpointStatus),
    Id: __expectString(output.Id),
    Location: output.Location != null ? deserializeAws_restJson1EndpointLocation(output.Location, context) : undefined,
    Metrics: output.Metrics != null ? deserializeAws_restJson1MapOf__double(output.Metrics, context) : undefined,
    OptOut: __expectString(output.OptOut),
    RequestId: __expectString(output.RequestId),
    User: output.User != null ? deserializeAws_restJson1EndpointUser(output.User, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointsResponse = (output: any, context: __SerdeContext): EndpointsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfEndpointResponse(output.Item, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointUser = (output: any, context: __SerdeContext): EndpointUser => {
  return {
    UserAttributes:
      output.UserAttributes != null
        ? deserializeAws_restJson1MapOfListOf__string(output.UserAttributes, context)
        : undefined,
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_restJson1EventCondition = (output: any, context: __SerdeContext): EventCondition => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_restJson1EventDimensions(output.Dimensions, context) : undefined,
    MessageActivity: __expectString(output.MessageActivity),
  } as any;
};

const deserializeAws_restJson1EventDimensions = (output: any, context: __SerdeContext): EventDimensions => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    EventType: output.EventType != null ? deserializeAws_restJson1SetDimension(output.EventType, context) : undefined,
    Metrics: output.Metrics != null ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EventFilter = (output: any, context: __SerdeContext): EventFilter => {
  return {
    Dimensions:
      output.Dimensions != null ? deserializeAws_restJson1EventDimensions(output.Dimensions, context) : undefined,
    FilterType: __expectString(output.FilterType),
  } as any;
};

const deserializeAws_restJson1EventItemResponse = (output: any, context: __SerdeContext): EventItemResponse => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectInt32(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1EventsResponse = (output: any, context: __SerdeContext): EventsResponse => {
  return {
    Results: output.Results != null ? deserializeAws_restJson1MapOfItemResponse(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EventStartCondition = (output: any, context: __SerdeContext): EventStartCondition => {
  return {
    EventFilter:
      output.EventFilter != null ? deserializeAws_restJson1EventFilter(output.EventFilter, context) : undefined,
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

const deserializeAws_restJson1EventStream = (output: any, context: __SerdeContext): EventStream => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    DestinationStreamArn: __expectString(output.DestinationStreamArn),
    ExternalId: __expectString(output.ExternalId),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    LastUpdatedBy: __expectString(output.LastUpdatedBy),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1ExportJobResource = (output: any, context: __SerdeContext): ExportJobResource => {
  return {
    RoleArn: __expectString(output.RoleArn),
    S3UrlPrefix: __expectString(output.S3UrlPrefix),
    SegmentId: __expectString(output.SegmentId),
    SegmentVersion: __expectInt32(output.SegmentVersion),
  } as any;
};

const deserializeAws_restJson1ExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectInt32(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition:
      output.Definition != null ? deserializeAws_restJson1ExportJobResource(output.Definition, context) : undefined,
    FailedPieces: __expectInt32(output.FailedPieces),
    Failures: output.Failures != null ? deserializeAws_restJson1ListOf__string(output.Failures, context) : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectInt32(output.TotalFailures),
    TotalPieces: __expectInt32(output.TotalPieces),
    TotalProcessed: __expectInt32(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ExportJobsResponse = (output: any, context: __SerdeContext): ExportJobsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfExportJobResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1GCMChannelResponse = (output: any, context: __SerdeContext): GCMChannelResponse => {
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

const deserializeAws_restJson1GPSCoordinates = (output: any, context: __SerdeContext): GPSCoordinates => {
  return {
    Latitude: __limitedParseDouble(output.Latitude),
    Longitude: __limitedParseDouble(output.Longitude),
  } as any;
};

const deserializeAws_restJson1GPSPointDimension = (output: any, context: __SerdeContext): GPSPointDimension => {
  return {
    Coordinates:
      output.Coordinates != null ? deserializeAws_restJson1GPSCoordinates(output.Coordinates, context) : undefined,
    RangeInKilometers: __limitedParseDouble(output.RangeInKilometers),
  } as any;
};

const deserializeAws_restJson1HoldoutActivity = (output: any, context: __SerdeContext): HoldoutActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectInt32(output.Percentage),
  } as any;
};

const deserializeAws_restJson1ImportJobResource = (output: any, context: __SerdeContext): ImportJobResource => {
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

const deserializeAws_restJson1ImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    CompletedPieces: __expectInt32(output.CompletedPieces),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    Definition:
      output.Definition != null ? deserializeAws_restJson1ImportJobResource(output.Definition, context) : undefined,
    FailedPieces: __expectInt32(output.FailedPieces),
    Failures: output.Failures != null ? deserializeAws_restJson1ListOf__string(output.Failures, context) : undefined,
    Id: __expectString(output.Id),
    JobStatus: __expectString(output.JobStatus),
    TotalFailures: __expectInt32(output.TotalFailures),
    TotalPieces: __expectInt32(output.TotalPieces),
    TotalProcessed: __expectInt32(output.TotalProcessed),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ImportJobsResponse = (output: any, context: __SerdeContext): ImportJobsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfImportJobResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1InAppCampaignSchedule = (output: any, context: __SerdeContext): InAppCampaignSchedule => {
  return {
    EndDate: __expectString(output.EndDate),
    EventFilter:
      output.EventFilter != null ? deserializeAws_restJson1CampaignEventFilter(output.EventFilter, context) : undefined,
    QuietTime: output.QuietTime != null ? deserializeAws_restJson1QuietTime(output.QuietTime, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InAppMessage = (output: any, context: __SerdeContext): InAppMessage => {
  return {
    Content:
      output.Content != null ? deserializeAws_restJson1ListOfInAppMessageContent(output.Content, context) : undefined,
    CustomConfig:
      output.CustomConfig != null ? deserializeAws_restJson1MapOf__string(output.CustomConfig, context) : undefined,
    Layout: __expectString(output.Layout),
  } as any;
};

const deserializeAws_restJson1InAppMessageBodyConfig = (
  output: any,
  context: __SerdeContext
): InAppMessageBodyConfig => {
  return {
    Alignment: __expectString(output.Alignment),
    Body: __expectString(output.Body),
    TextColor: __expectString(output.TextColor),
  } as any;
};

const deserializeAws_restJson1InAppMessageButton = (output: any, context: __SerdeContext): InAppMessageButton => {
  return {
    Android:
      output.Android != null ? deserializeAws_restJson1OverrideButtonConfiguration(output.Android, context) : undefined,
    DefaultConfig:
      output.DefaultConfig != null
        ? deserializeAws_restJson1DefaultButtonConfiguration(output.DefaultConfig, context)
        : undefined,
    IOS: output.IOS != null ? deserializeAws_restJson1OverrideButtonConfiguration(output.IOS, context) : undefined,
    Web: output.Web != null ? deserializeAws_restJson1OverrideButtonConfiguration(output.Web, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InAppMessageCampaign = (output: any, context: __SerdeContext): InAppMessageCampaign => {
  return {
    CampaignId: __expectString(output.CampaignId),
    DailyCap: __expectInt32(output.DailyCap),
    InAppMessage:
      output.InAppMessage != null ? deserializeAws_restJson1InAppMessage(output.InAppMessage, context) : undefined,
    Priority: __expectInt32(output.Priority),
    Schedule:
      output.Schedule != null ? deserializeAws_restJson1InAppCampaignSchedule(output.Schedule, context) : undefined,
    SessionCap: __expectInt32(output.SessionCap),
    TotalCap: __expectInt32(output.TotalCap),
    TreatmentId: __expectString(output.TreatmentId),
  } as any;
};

const deserializeAws_restJson1InAppMessageContent = (output: any, context: __SerdeContext): InAppMessageContent => {
  return {
    BackgroundColor: __expectString(output.BackgroundColor),
    BodyConfig:
      output.BodyConfig != null
        ? deserializeAws_restJson1InAppMessageBodyConfig(output.BodyConfig, context)
        : undefined,
    HeaderConfig:
      output.HeaderConfig != null
        ? deserializeAws_restJson1InAppMessageHeaderConfig(output.HeaderConfig, context)
        : undefined,
    ImageUrl: __expectString(output.ImageUrl),
    PrimaryBtn:
      output.PrimaryBtn != null ? deserializeAws_restJson1InAppMessageButton(output.PrimaryBtn, context) : undefined,
    SecondaryBtn:
      output.SecondaryBtn != null
        ? deserializeAws_restJson1InAppMessageButton(output.SecondaryBtn, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InAppMessageHeaderConfig = (
  output: any,
  context: __SerdeContext
): InAppMessageHeaderConfig => {
  return {
    Alignment: __expectString(output.Alignment),
    Header: __expectString(output.Header),
    TextColor: __expectString(output.TextColor),
  } as any;
};

const deserializeAws_restJson1InAppMessagesResponse = (output: any, context: __SerdeContext): InAppMessagesResponse => {
  return {
    InAppMessageCampaigns:
      output.InAppMessageCampaigns != null
        ? deserializeAws_restJson1ListOfInAppMessageCampaign(output.InAppMessageCampaigns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InAppTemplateResponse = (output: any, context: __SerdeContext): InAppTemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    Content:
      output.Content != null ? deserializeAws_restJson1ListOfInAppMessageContent(output.Content, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    CustomConfig:
      output.CustomConfig != null ? deserializeAws_restJson1MapOf__string(output.CustomConfig, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Layout: __expectString(output.Layout),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    EndpointItemResponse:
      output.EndpointItemResponse != null
        ? deserializeAws_restJson1EndpointItemResponse(output.EndpointItemResponse, context)
        : undefined,
    EventsItemResponse:
      output.EventsItemResponse != null
        ? deserializeAws_restJson1MapOfEventItemResponse(output.EventsItemResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyChannelSettings = (
  output: any,
  context: __SerdeContext
): JourneyChannelSettings => {
  return {
    ConnectCampaignArn: __expectString(output.ConnectCampaignArn),
    ConnectCampaignExecutionRoleArn: __expectString(output.ConnectCampaignExecutionRoleArn),
  } as any;
};

const deserializeAws_restJson1JourneyCustomMessage = (output: any, context: __SerdeContext): JourneyCustomMessage => {
  return {
    Data: __expectString(output.Data),
  } as any;
};

const deserializeAws_restJson1JourneyDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): JourneyDateRangeKpiResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    JourneyId: __expectString(output.JourneyId),
    KpiName: __expectString(output.KpiName),
    KpiResult: output.KpiResult != null ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context) : undefined,
    NextToken: __expectString(output.NextToken),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyEmailMessage = (output: any, context: __SerdeContext): JourneyEmailMessage => {
  return {
    FromAddress: __expectString(output.FromAddress),
  } as any;
};

const deserializeAws_restJson1JourneyExecutionActivityMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionActivityMetricsResponse => {
  return {
    ActivityType: __expectString(output.ActivityType),
    ApplicationId: __expectString(output.ApplicationId),
    JourneyActivityId: __expectString(output.JourneyActivityId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics: output.Metrics != null ? deserializeAws_restJson1MapOf__string(output.Metrics, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyExecutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionMetricsResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    JourneyId: __expectString(output.JourneyId),
    LastEvaluatedTime: __expectString(output.LastEvaluatedTime),
    Metrics: output.Metrics != null ? deserializeAws_restJson1MapOf__string(output.Metrics, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyLimits = (output: any, context: __SerdeContext): JourneyLimits => {
  return {
    DailyCap: __expectInt32(output.DailyCap),
    EndpointReentryCap: __expectInt32(output.EndpointReentryCap),
    EndpointReentryInterval: __expectString(output.EndpointReentryInterval),
    MessagesPerSecond: __expectInt32(output.MessagesPerSecond),
  } as any;
};

const deserializeAws_restJson1JourneyPushMessage = (output: any, context: __SerdeContext): JourneyPushMessage => {
  return {
    TimeToLive: __expectString(output.TimeToLive),
  } as any;
};

const deserializeAws_restJson1JourneyResponse = (output: any, context: __SerdeContext): JourneyResponse => {
  return {
    Activities:
      output.Activities != null ? deserializeAws_restJson1MapOfActivity(output.Activities, context) : undefined,
    ApplicationId: __expectString(output.ApplicationId),
    ClosedDays: output.ClosedDays != null ? deserializeAws_restJson1ClosedDays(output.ClosedDays, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    Id: __expectString(output.Id),
    JourneyChannelSettings:
      output.JourneyChannelSettings != null
        ? deserializeAws_restJson1JourneyChannelSettings(output.JourneyChannelSettings, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Limits: output.Limits != null ? deserializeAws_restJson1JourneyLimits(output.Limits, context) : undefined,
    LocalTime: __expectBoolean(output.LocalTime),
    Name: __expectString(output.Name),
    OpenHours: output.OpenHours != null ? deserializeAws_restJson1OpenHours(output.OpenHours, context) : undefined,
    QuietTime: output.QuietTime != null ? deserializeAws_restJson1QuietTime(output.QuietTime, context) : undefined,
    RefreshFrequency: __expectString(output.RefreshFrequency),
    RefreshOnSegmentUpdate: __expectBoolean(output.RefreshOnSegmentUpdate),
    Schedule: output.Schedule != null ? deserializeAws_restJson1JourneySchedule(output.Schedule, context) : undefined,
    SendingSchedule: __expectBoolean(output.SendingSchedule),
    StartActivity: __expectString(output.StartActivity),
    StartCondition:
      output.StartCondition != null
        ? deserializeAws_restJson1StartCondition(output.StartCondition, context)
        : undefined,
    State: __expectString(output.State),
    WaitForQuietTime: __expectBoolean(output.WaitForQuietTime),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneySchedule = (output: any, context: __SerdeContext): JourneySchedule => {
  return {
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_restJson1JourneySMSMessage = (output: any, context: __SerdeContext): JourneySMSMessage => {
  return {
    EntityId: __expectString(output.EntityId),
    MessageType: __expectString(output.MessageType),
    OriginationNumber: __expectString(output.OriginationNumber),
    SenderId: __expectString(output.SenderId),
    TemplateId: __expectString(output.TemplateId),
  } as any;
};

const deserializeAws_restJson1JourneysResponse = (output: any, context: __SerdeContext): JourneysResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfJourneyResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1ListOf__EndpointTypesElement = (
  output: any,
  context: __SerdeContext
): (__EndpointTypesElement | string)[] => {
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

const deserializeAws_restJson1ListOf__string = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ListOfActivityResponse = (output: any, context: __SerdeContext): ActivityResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActivityResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfApplicationResponse = (
  output: any,
  context: __SerdeContext
): ApplicationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfCampaignResponse = (output: any, context: __SerdeContext): CampaignResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CampaignResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfClosedDaysRules = (output: any, context: __SerdeContext): ClosedDaysRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClosedDaysRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfEndpointResponse = (output: any, context: __SerdeContext): EndpointResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EndpointResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExportJobResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportJobResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfInAppMessageCampaign = (
  output: any,
  context: __SerdeContext
): InAppMessageCampaign[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InAppMessageCampaign(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfInAppMessageContent = (
  output: any,
  context: __SerdeContext
): InAppMessageContent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InAppMessageContent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfJourneyResponse = (output: any, context: __SerdeContext): JourneyResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JourneyResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfMultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MultiConditionalBranch(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfOpenHoursRules = (output: any, context: __SerdeContext): OpenHoursRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OpenHoursRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RandomSplitEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfRecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommenderConfigurationResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfResultRow = (output: any, context: __SerdeContext): ResultRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfResultRowValue = (output: any, context: __SerdeContext): ResultRowValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRowValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentDimensions(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSegmentGroup = (output: any, context: __SerdeContext): SegmentGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSegmentReference = (output: any, context: __SerdeContext): SegmentReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentReference(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSegmentResponse = (output: any, context: __SerdeContext): SegmentResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfSimpleCondition = (output: any, context: __SerdeContext): SimpleCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimpleCondition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfTemplateResponse = (output: any, context: __SerdeContext): TemplateResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfTemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateVersionResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListOfTreatmentResource = (output: any, context: __SerdeContext): TreatmentResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TreatmentResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListRecommenderConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListRecommenderConfigurationsResponse => {
  return {
    Item:
      output.Item != null
        ? deserializeAws_restJson1ListOfRecommenderConfigurationResponse(output.Item, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1MapOf__double = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOf__integer = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfActivity = (output: any, context: __SerdeContext): Record<string, Activity> => {
  return Object.entries(output).reduce((acc: Record<string, Activity>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Activity(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfAttributeDimension = (
  output: any,
  context: __SerdeContext
): Record<string, AttributeDimension> => {
  return Object.entries(output).reduce((acc: Record<string, AttributeDimension>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1AttributeDimension(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfChannelResponse = (
  output: any,
  context: __SerdeContext
): Record<string, ChannelResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ChannelResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ChannelResponse(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): Record<string, EndpointMessageResult> => {
  return Object.entries(output).reduce((acc: Record<string, EndpointMessageResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1EndpointMessageResult(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfEventItemResponse = (
  output: any,
  context: __SerdeContext
): Record<string, EventItemResponse> => {
  return Object.entries(output).reduce((acc: Record<string, EventItemResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1EventItemResponse(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfItemResponse = (
  output: any,
  context: __SerdeContext
): Record<string, ItemResponse> => {
  return Object.entries(output).reduce((acc: Record<string, ItemResponse>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ItemResponse(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfListOf__string = (
  output: any,
  context: __SerdeContext
): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ListOf__string(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfListOfOpenHoursRules = (
  output: any,
  context: __SerdeContext
): Record<string, OpenHoursRule[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, OpenHoursRule[]>, [key, value]: [DayOfWeek | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1ListOfOpenHoursRules(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1MapOfMapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, EndpointMessageResult>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, EndpointMessageResult>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1MapOfEndpointMessageResult(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1MapOfMessageResult = (
  output: any,
  context: __SerdeContext
): Record<string, MessageResult> => {
  return Object.entries(output).reduce((acc: Record<string, MessageResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1MessageResult(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1MapOfMetricDimension = (
  output: any,
  context: __SerdeContext
): Record<string, MetricDimension> => {
  return Object.entries(output).reduce((acc: Record<string, MetricDimension>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1MetricDimension(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
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

const deserializeAws_restJson1MessageBody = (output: any, context: __SerdeContext): MessageBody => {
  return {
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1MessageConfiguration = (output: any, context: __SerdeContext): MessageConfiguration => {
  return {
    ADMMessage: output.ADMMessage != null ? deserializeAws_restJson1Message(output.ADMMessage, context) : undefined,
    APNSMessage: output.APNSMessage != null ? deserializeAws_restJson1Message(output.APNSMessage, context) : undefined,
    BaiduMessage:
      output.BaiduMessage != null ? deserializeAws_restJson1Message(output.BaiduMessage, context) : undefined,
    CustomMessage:
      output.CustomMessage != null
        ? deserializeAws_restJson1CampaignCustomMessage(output.CustomMessage, context)
        : undefined,
    DefaultMessage:
      output.DefaultMessage != null ? deserializeAws_restJson1Message(output.DefaultMessage, context) : undefined,
    EmailMessage:
      output.EmailMessage != null
        ? deserializeAws_restJson1CampaignEmailMessage(output.EmailMessage, context)
        : undefined,
    GCMMessage: output.GCMMessage != null ? deserializeAws_restJson1Message(output.GCMMessage, context) : undefined,
    InAppMessage:
      output.InAppMessage != null
        ? deserializeAws_restJson1CampaignInAppMessage(output.InAppMessage, context)
        : undefined,
    SMSMessage:
      output.SMSMessage != null ? deserializeAws_restJson1CampaignSmsMessage(output.SMSMessage, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResponse = (output: any, context: __SerdeContext): MessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    EndpointResult:
      output.EndpointResult != null
        ? deserializeAws_restJson1MapOfEndpointMessageResult(output.EndpointResult, context)
        : undefined,
    RequestId: __expectString(output.RequestId),
    Result: output.Result != null ? deserializeAws_restJson1MapOfMessageResult(output.Result, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResult = (output: any, context: __SerdeContext): MessageResult => {
  return {
    DeliveryStatus: __expectString(output.DeliveryStatus),
    MessageId: __expectString(output.MessageId),
    StatusCode: __expectInt32(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    UpdatedToken: __expectString(output.UpdatedToken),
  } as any;
};

const deserializeAws_restJson1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1MultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch => {
  return {
    Condition:
      output.Condition != null ? deserializeAws_restJson1SimpleCondition(output.Condition, context) : undefined,
    NextActivity: __expectString(output.NextActivity),
  } as any;
};

const deserializeAws_restJson1MultiConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): MultiConditionalSplitActivity => {
  return {
    Branches:
      output.Branches != null
        ? deserializeAws_restJson1ListOfMultiConditionalBranch(output.Branches, context)
        : undefined,
    DefaultActivity: __expectString(output.DefaultActivity),
    EvaluationWaitTime:
      output.EvaluationWaitTime != null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NumberValidateResponse = (
  output: any,
  context: __SerdeContext
): NumberValidateResponse => {
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

const deserializeAws_restJson1OpenHours = (output: any, context: __SerdeContext): OpenHours => {
  return {
    CUSTOM:
      output.CUSTOM != null ? deserializeAws_restJson1MapOfListOfOpenHoursRules(output.CUSTOM, context) : undefined,
    EMAIL: output.EMAIL != null ? deserializeAws_restJson1MapOfListOfOpenHoursRules(output.EMAIL, context) : undefined,
    PUSH: output.PUSH != null ? deserializeAws_restJson1MapOfListOfOpenHoursRules(output.PUSH, context) : undefined,
    SMS: output.SMS != null ? deserializeAws_restJson1MapOfListOfOpenHoursRules(output.SMS, context) : undefined,
    VOICE: output.VOICE != null ? deserializeAws_restJson1MapOfListOfOpenHoursRules(output.VOICE, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OpenHoursRule = (output: any, context: __SerdeContext): OpenHoursRule => {
  return {
    EndTime: __expectString(output.EndTime),
    StartTime: __expectString(output.StartTime),
  } as any;
};

const deserializeAws_restJson1OverrideButtonConfiguration = (
  output: any,
  context: __SerdeContext
): OverrideButtonConfiguration => {
  return {
    ButtonAction: __expectString(output.ButtonAction),
    Link: __expectString(output.Link),
  } as any;
};

const deserializeAws_restJson1PushMessageActivity = (output: any, context: __SerdeContext): PushMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig != null
        ? deserializeAws_restJson1JourneyPushMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1PushNotificationTemplateResponse = (
  output: any,
  context: __SerdeContext
): PushNotificationTemplateResponse => {
  return {
    ADM: output.ADM != null ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.ADM, context) : undefined,
    APNS: output.APNS != null ? deserializeAws_restJson1APNSPushNotificationTemplate(output.APNS, context) : undefined,
    Arn: __expectString(output.Arn),
    Baidu:
      output.Baidu != null ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.Baidu, context) : undefined,
    CreationDate: __expectString(output.CreationDate),
    Default:
      output.Default != null
        ? deserializeAws_restJson1DefaultPushNotificationTemplate(output.Default, context)
        : undefined,
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    GCM: output.GCM != null ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.GCM, context) : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    RecommenderId: __expectString(output.RecommenderId),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1QuietTime = (output: any, context: __SerdeContext): QuietTime => {
  return {
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

const deserializeAws_restJson1RandomSplitActivity = (output: any, context: __SerdeContext): RandomSplitActivity => {
  return {
    Branches:
      output.Branches != null ? deserializeAws_restJson1ListOfRandomSplitEntry(output.Branches, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry => {
  return {
    NextActivity: __expectString(output.NextActivity),
    Percentage: __expectInt32(output.Percentage),
  } as any;
};

const deserializeAws_restJson1RecencyDimension = (output: any, context: __SerdeContext): RecencyDimension => {
  return {
    Duration: __expectString(output.Duration),
    RecencyType: __expectString(output.RecencyType),
  } as any;
};

const deserializeAws_restJson1RecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_restJson1MapOf__string(output.Attributes, context) : undefined,
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

const deserializeAws_restJson1ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    GroupedBys:
      output.GroupedBys != null ? deserializeAws_restJson1ListOfResultRowValue(output.GroupedBys, context) : undefined,
    Values: output.Values != null ? deserializeAws_restJson1ListOfResultRowValue(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResultRowValue = (output: any, context: __SerdeContext): ResultRowValue => {
  return {
    Key: __expectString(output.Key),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    EndTime: __expectString(output.EndTime),
    EventFilter:
      output.EventFilter != null ? deserializeAws_restJson1CampaignEventFilter(output.EventFilter, context) : undefined,
    Frequency: __expectString(output.Frequency),
    IsLocalTime: __expectBoolean(output.IsLocalTime),
    QuietTime: output.QuietTime != null ? deserializeAws_restJson1QuietTime(output.QuietTime, context) : undefined,
    StartTime: __expectString(output.StartTime),
    Timezone: __expectString(output.Timezone),
  } as any;
};

const deserializeAws_restJson1SegmentBehaviors = (output: any, context: __SerdeContext): SegmentBehaviors => {
  return {
    Recency: output.Recency != null ? deserializeAws_restJson1RecencyDimension(output.Recency, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentCondition = (output: any, context: __SerdeContext): SegmentCondition => {
  return {
    SegmentId: __expectString(output.SegmentId),
  } as any;
};

const deserializeAws_restJson1SegmentDemographics = (output: any, context: __SerdeContext): SegmentDemographics => {
  return {
    AppVersion:
      output.AppVersion != null ? deserializeAws_restJson1SetDimension(output.AppVersion, context) : undefined,
    Channel: output.Channel != null ? deserializeAws_restJson1SetDimension(output.Channel, context) : undefined,
    DeviceType:
      output.DeviceType != null ? deserializeAws_restJson1SetDimension(output.DeviceType, context) : undefined,
    Make: output.Make != null ? deserializeAws_restJson1SetDimension(output.Make, context) : undefined,
    Model: output.Model != null ? deserializeAws_restJson1SetDimension(output.Model, context) : undefined,
    Platform: output.Platform != null ? deserializeAws_restJson1SetDimension(output.Platform, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    Behavior: output.Behavior != null ? deserializeAws_restJson1SegmentBehaviors(output.Behavior, context) : undefined,
    Demographic:
      output.Demographic != null ? deserializeAws_restJson1SegmentDemographics(output.Demographic, context) : undefined,
    Location: output.Location != null ? deserializeAws_restJson1SegmentLocation(output.Location, context) : undefined,
    Metrics: output.Metrics != null ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context) : undefined,
    UserAttributes:
      output.UserAttributes != null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.UserAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return {
    Dimensions:
      output.Dimensions != null
        ? deserializeAws_restJson1ListOfSegmentDimensions(output.Dimensions, context)
        : undefined,
    SourceSegments:
      output.SourceSegments != null
        ? deserializeAws_restJson1ListOfSegmentReference(output.SourceSegments, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1SegmentGroupList = (output: any, context: __SerdeContext): SegmentGroupList => {
  return {
    Groups: output.Groups != null ? deserializeAws_restJson1ListOfSegmentGroup(output.Groups, context) : undefined,
    Include: __expectString(output.Include),
  } as any;
};

const deserializeAws_restJson1SegmentImportResource = (output: any, context: __SerdeContext): SegmentImportResource => {
  return {
    ChannelCounts:
      output.ChannelCounts != null ? deserializeAws_restJson1MapOf__integer(output.ChannelCounts, context) : undefined,
    ExternalId: __expectString(output.ExternalId),
    Format: __expectString(output.Format),
    RoleArn: __expectString(output.RoleArn),
    S3Url: __expectString(output.S3Url),
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1SegmentLocation = (output: any, context: __SerdeContext): SegmentLocation => {
  return {
    Country: output.Country != null ? deserializeAws_restJson1SetDimension(output.Country, context) : undefined,
    GPSPoint: output.GPSPoint != null ? deserializeAws_restJson1GPSPointDimension(output.GPSPoint, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentReference = (output: any, context: __SerdeContext): SegmentReference => {
  return {
    Id: __expectString(output.Id),
    Version: __expectInt32(output.Version),
  } as any;
};

const deserializeAws_restJson1SegmentResponse = (output: any, context: __SerdeContext): SegmentResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    Dimensions:
      output.Dimensions != null ? deserializeAws_restJson1SegmentDimensions(output.Dimensions, context) : undefined,
    Id: __expectString(output.Id),
    ImportDefinition:
      output.ImportDefinition != null
        ? deserializeAws_restJson1SegmentImportResource(output.ImportDefinition, context)
        : undefined,
    LastModifiedDate: __expectString(output.LastModifiedDate),
    Name: __expectString(output.Name),
    SegmentGroups:
      output.SegmentGroups != null
        ? deserializeAws_restJson1SegmentGroupList(output.SegmentGroups, context)
        : undefined,
    SegmentType: __expectString(output.SegmentType),
    Version: __expectInt32(output.Version),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentsResponse = (output: any, context: __SerdeContext): SegmentsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfSegmentResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1SendUsersMessageResponse = (
  output: any,
  context: __SerdeContext
): SendUsersMessageResponse => {
  return {
    ApplicationId: __expectString(output.ApplicationId),
    RequestId: __expectString(output.RequestId),
    Result:
      output.Result != null
        ? deserializeAws_restJson1MapOfMapOfEndpointMessageResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SetDimension = (output: any, context: __SerdeContext): SetDimension => {
  return {
    DimensionType: __expectString(output.DimensionType),
    Values: output.Values != null ? deserializeAws_restJson1ListOf__string(output.Values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleCondition = (output: any, context: __SerdeContext): SimpleCondition => {
  return {
    EventCondition:
      output.EventCondition != null
        ? deserializeAws_restJson1EventCondition(output.EventCondition, context)
        : undefined,
    SegmentCondition:
      output.SegmentCondition != null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentCondition, context)
        : undefined,
    SegmentDimensions:
      output.segmentDimensions != null
        ? deserializeAws_restJson1SegmentDimensions(output.segmentDimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SMSChannelResponse = (output: any, context: __SerdeContext): SMSChannelResponse => {
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

const deserializeAws_restJson1SMSMessageActivity = (output: any, context: __SerdeContext): SMSMessageActivity => {
  return {
    MessageConfig:
      output.MessageConfig != null
        ? deserializeAws_restJson1JourneySMSMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: __expectString(output.NextActivity),
    TemplateName: __expectString(output.TemplateName),
    TemplateVersion: __expectString(output.TemplateVersion),
  } as any;
};

const deserializeAws_restJson1SMSTemplateResponse = (output: any, context: __SerdeContext): SMSTemplateResponse => {
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
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StartCondition = (output: any, context: __SerdeContext): StartCondition => {
  return {
    Description: __expectString(output.Description),
    EventStartCondition:
      output.EventStartCondition != null
        ? deserializeAws_restJson1EventStartCondition(output.EventStartCondition, context)
        : undefined,
    SegmentStartCondition:
      output.SegmentStartCondition != null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentStartCondition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagsModel = (output: any, context: __SerdeContext): TagsModel => {
  return {
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Template = (output: any, context: __SerdeContext): Template => {
  return {
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return {
    EmailTemplate:
      output.EmailTemplate != null ? deserializeAws_restJson1Template(output.EmailTemplate, context) : undefined,
    PushTemplate:
      output.PushTemplate != null ? deserializeAws_restJson1Template(output.PushTemplate, context) : undefined,
    SMSTemplate: output.SMSTemplate != null ? deserializeAws_restJson1Template(output.SMSTemplate, context) : undefined,
    VoiceTemplate:
      output.VoiceTemplate != null ? deserializeAws_restJson1Template(output.VoiceTemplate, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateCreateMessageBody = (
  output: any,
  context: __SerdeContext
): TemplateCreateMessageBody => {
  return {
    Arn: __expectString(output.Arn),
    Message: __expectString(output.Message),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1TemplateResponse = (output: any, context: __SerdeContext): TemplateResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate: __expectString(output.CreationDate),
    DefaultSubstitutions: __expectString(output.DefaultSubstitutions),
    LastModifiedDate: __expectString(output.LastModifiedDate),
    TemplateDescription: __expectString(output.TemplateDescription),
    TemplateName: __expectString(output.TemplateName),
    TemplateType: __expectString(output.TemplateType),
    Version: __expectString(output.Version),
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TemplatesResponse = (output: any, context: __SerdeContext): TemplatesResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfTemplateResponse(output.Item, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_restJson1TemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse => {
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

const deserializeAws_restJson1TemplateVersionsResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionsResponse => {
  return {
    Item: output.Item != null ? deserializeAws_restJson1ListOfTemplateVersionResponse(output.Item, context) : undefined,
    Message: __expectString(output.Message),
    NextToken: __expectString(output.NextToken),
    RequestID: __expectString(output.RequestID),
  } as any;
};

const deserializeAws_restJson1TreatmentResource = (output: any, context: __SerdeContext): TreatmentResource => {
  return {
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration != null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
    MessageConfiguration:
      output.MessageConfiguration != null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Schedule: output.Schedule != null ? deserializeAws_restJson1Schedule(output.Schedule, context) : undefined,
    SizePercent: __expectInt32(output.SizePercent),
    State: output.State != null ? deserializeAws_restJson1CampaignState(output.State, context) : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription: __expectString(output.TreatmentDescription),
    TreatmentName: __expectString(output.TreatmentName),
  } as any;
};

const deserializeAws_restJson1VerificationResponse = (output: any, context: __SerdeContext): VerificationResponse => {
  return {
    Valid: __expectBoolean(output.Valid),
  } as any;
};

const deserializeAws_restJson1VoiceChannelResponse = (output: any, context: __SerdeContext): VoiceChannelResponse => {
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

const deserializeAws_restJson1VoiceTemplateResponse = (output: any, context: __SerdeContext): VoiceTemplateResponse => {
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
    tags: output.tags != null ? deserializeAws_restJson1MapOf__string(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1WaitActivity = (output: any, context: __SerdeContext): WaitActivity => {
  return {
    NextActivity: __expectString(output.NextActivity),
    WaitTime: output.WaitTime != null ? deserializeAws_restJson1WaitTime(output.WaitTime, context) : undefined,
  } as any;
};

const deserializeAws_restJson1WaitTime = (output: any, context: __SerdeContext): WaitTime => {
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
