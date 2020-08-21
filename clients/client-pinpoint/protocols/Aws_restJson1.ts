import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "../commands/CreateEmailTemplateCommand";
import { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "../commands/CreateExportJobCommand";
import { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "../commands/CreateImportJobCommand";
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
import { GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput } from "../commands/GetCampaignVersionCommand";
import {
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "../commands/GetCampaignVersionsCommand";
import { GetCampaignsCommandInput, GetCampaignsCommandOutput } from "../commands/GetCampaignsCommand";
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
import { GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput } from "../commands/GetSegmentVersionCommand";
import { GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput } from "../commands/GetSegmentVersionsCommand";
import { GetSegmentsCommandInput, GetSegmentsCommandOutput } from "../commands/GetSegmentsCommand";
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
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "../commands/ListTemplateVersionsCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "../commands/PhoneNumberValidateCommand";
import { PutEventStreamCommandInput, PutEventStreamCommandOutput } from "../commands/PutEventStreamCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { RemoveAttributesCommandInput, RemoveAttributesCommandOutput } from "../commands/RemoveAttributesCommand";
import { SendMessagesCommandInput, SendMessagesCommandOutput } from "../commands/SendMessagesCommand";
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
import {
  ADMChannelRequest,
  ADMChannelResponse,
  ADMMessage,
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
  ActivitiesResponse,
  Activity,
  ActivityResponse,
  AddressConfiguration,
  AndroidPushNotificationTemplate,
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
  CampaignLimits,
  CampaignResponse,
  CampaignSmsMessage,
  CampaignState,
  CampaignsResponse,
  ChannelResponse,
  ChannelsResponse,
  Condition,
  ConditionalSplitActivity,
  CreateApplicationRequest,
  CreateRecommenderConfigurationShape,
  CreateTemplateMessageBody,
  CustomDeliveryConfiguration,
  CustomMessageActivity,
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
  EndpointUser,
  EndpointsResponse,
  Event,
  EventCondition,
  EventDimensions,
  EventItemResponse,
  EventStream,
  EventsBatch,
  EventsRequest,
  EventsResponse,
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
  ImportJobsResponse,
  InternalServerErrorException,
  ItemResponse,
  JourneyCustomMessage,
  JourneyDateRangeKpiResponse,
  JourneyEmailMessage,
  JourneyExecutionActivityMetricsResponse,
  JourneyExecutionMetricsResponse,
  JourneyLimits,
  JourneyPushMessage,
  JourneyResponse,
  JourneySMSMessage,
  JourneySchedule,
  JourneyStateRequest,
  JourneysResponse,
  ListRecommenderConfigurationsResponse,
  Message,
  MessageBody,
  MessageConfiguration,
  MessageRequest,
  MessageResponse,
  MessageResult,
  MethodNotAllowedException,
  MetricDimension,
  MultiConditionalBranch,
  MultiConditionalSplitActivity,
  NotFoundException,
  NumberValidateRequest,
  NumberValidateResponse,
  PayloadTooLargeException,
  PublicEndpoint,
  PushMessageActivity,
  PushNotificationTemplateRequest,
  PushNotificationTemplateResponse,
  QuietTime,
  RandomSplitActivity,
  RandomSplitEntry,
  RawEmail,
  RecencyDimension,
  RecommenderConfigurationResponse,
  ResultRow,
  ResultRowValue,
  SMSChannelRequest,
  SMSChannelResponse,
  SMSMessage,
  SMSMessageActivity,
  SMSTemplateRequest,
  SMSTemplateResponse,
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
  SegmentsResponse,
  SendUsersMessageRequest,
  SendUsersMessageResponse,
  Session,
  SetDimension,
  SimpleCondition,
  SimpleEmail,
  SimpleEmailPart,
  StartCondition,
  TagsModel,
  Template,
  TemplateActiveVersionRequest,
  TemplateConfiguration,
  TemplateResponse,
  TemplateVersionResponse,
  TemplateVersionsResponse,
  TemplatesResponse,
  TooManyRequestsException,
  TreatmentResource,
  UpdateAttributesRequest,
  UpdateRecommenderConfigurationShape,
  VoiceChannelRequest,
  VoiceChannelResponse,
  VoiceMessage,
  VoiceTemplateRequest,
  VoiceTemplateResponse,
  WaitActivity,
  WaitTime,
  WriteApplicationSettingsRequest,
  WriteCampaignRequest,
  WriteEventStream,
  WriteJourneyRequest,
  WriteSegmentRequest,
  WriteTreatmentResource,
  __EndpointTypesElement,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps";
  let body: any;
  if (input.CreateApplicationRequest !== undefined) {
    body = serializeAws_restJson1CreateApplicationRequest(input.CreateApplicationRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ExportJobRequest !== undefined) {
    body = serializeAws_restJson1ExportJobRequest(input.ExportJobRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ImportJobRequest !== undefined) {
    body = serializeAws_restJson1ImportJobRequest(input.ImportJobRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/recommenders";
  let body: any;
  if (input.CreateRecommenderConfiguration !== undefined) {
    body = serializeAws_restJson1CreateRecommenderConfigurationShape(input.CreateRecommenderConfiguration, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteJourneyCommand = async (
  input: DeleteJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/kpis/daterange/{KpiName}";
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/settings";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps";
  const query: any = {
    ...(input.Token !== undefined && { token: input.Token }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/activities";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/kpis/daterange/{KpiName}";
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.Token !== undefined && { token: input.Token }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions/{Version}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
  }
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}/versions";
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export/{JobId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/jobs/import";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.Token !== undefined && { token: input.Token }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/kpis/daterange/{KpiName}";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.KpiName !== undefined) {
    const labelValue: string = input.KpiName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: KpiName.");
    }
    resolvedPath = resolvedPath.replace("{KpiName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: KpiName.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.EndTime !== undefined && { "end-time": (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.StartTime !== undefined && {
      "start-time": (input.StartTime.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/activities/{JourneyActivityId}/execution-metrics";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.JourneyActivityId !== undefined) {
    const labelValue: string = input.JourneyActivityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyActivityId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyActivityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyActivityId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/execution-metrics";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/recommenders";
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/export";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/jobs/import";
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions/{Version}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  if (input.Version !== undefined) {
    const labelValue: string = input.Version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Version.");
    }
    resolvedPath = resolvedPath.replace("{Version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Version.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}/versions";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  const query: any = {
    ...(input.Token !== undefined && { token: input.Token }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/users/{UserId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.UserId !== undefined) {
    const labelValue: string = input.UserId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UserId.");
    }
    resolvedPath = resolvedPath.replace("{UserId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: UserId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  const query: any = {
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
    ...(input.Token !== undefined && { token: input.Token }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates";
  const query: any = {
    ...(input.Prefix !== undefined && { prefix: input.Prefix }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.TemplateType !== undefined && { "template-type": input.TemplateType }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/versions";
  if (input.TemplateType !== undefined) {
    const labelValue: string = input.TemplateType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateType.");
    }
    resolvedPath = resolvedPath.replace("{TemplateType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateType.");
  }
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
    ...(input.PageSize !== undefined && { "page-size": input.PageSize }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/phone/number/validate";
  let body: any;
  if (input.NumberValidateRequest !== undefined) {
    body = serializeAws_restJson1NumberValidateRequest(input.NumberValidateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/events";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EventsRequest !== undefined) {
    body = serializeAws_restJson1EventsRequest(input.EventsRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/eventstream";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteEventStream !== undefined) {
    body = serializeAws_restJson1WriteEventStream(input.WriteEventStream, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/attributes/{AttributeType}";
  if (input.AttributeType !== undefined) {
    const labelValue: string = input.AttributeType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AttributeType.");
    }
    resolvedPath = resolvedPath.replace("{AttributeType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AttributeType.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.UpdateAttributesRequest !== undefined) {
    body = serializeAws_restJson1UpdateAttributesRequest(input.UpdateAttributesRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/messages";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.MessageRequest !== undefined) {
    body = serializeAws_restJson1MessageRequest(input.MessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/users-messages";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.SendUsersMessageRequest !== undefined) {
    body = serializeAws_restJson1SendUsersMessageRequest(input.SendUsersMessageRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  if (input.TagsModel !== undefined) {
    body = serializeAws_restJson1TagsModel(input.TagsModel, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/adm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.ADMChannelRequest !== undefined) {
    body = serializeAws_restJson1ADMChannelRequest(input.ADMChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSChannelRequest(input.APNSChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSSandboxChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSSandboxChannelRequest(input.APNSSandboxChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSVoipChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSVoipChannelRequest(input.APNSVoipChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/apns_voip_sandbox";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.APNSVoipSandboxChannelRequest !== undefined) {
    body = serializeAws_restJson1APNSVoipSandboxChannelRequest(input.APNSVoipSandboxChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/settings";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteApplicationSettingsRequest !== undefined) {
    body = serializeAws_restJson1WriteApplicationSettingsRequest(input.WriteApplicationSettingsRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/baidu";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.BaiduChannelRequest !== undefined) {
    body = serializeAws_restJson1BaiduChannelRequest(input.BaiduChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/campaigns/{CampaignId}";
  if (input.CampaignId !== undefined) {
    const labelValue: string = input.CampaignId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CampaignId.");
    }
    resolvedPath = resolvedPath.replace("{CampaignId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CampaignId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteCampaignRequest !== undefined) {
    body = serializeAws_restJson1WriteCampaignRequest(input.WriteCampaignRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/email";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EmailChannelRequest !== undefined) {
    body = serializeAws_restJson1EmailChannelRequest(input.EmailChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/email";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.EmailTemplateRequest !== undefined) {
    body = serializeAws_restJson1EmailTemplateRequest(input.EmailTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints/{EndpointId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.EndpointId !== undefined) {
    const labelValue: string = input.EndpointId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EndpointId.");
    }
    resolvedPath = resolvedPath.replace("{EndpointId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EndpointId.");
  }
  let body: any;
  if (input.EndpointRequest !== undefined) {
    body = serializeAws_restJson1EndpointRequest(input.EndpointRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/endpoints";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.EndpointBatchRequest !== undefined) {
    body = serializeAws_restJson1EndpointBatchRequest(input.EndpointBatchRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/gcm";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.GCMChannelRequest !== undefined) {
    body = serializeAws_restJson1GCMChannelRequest(input.GCMChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdateJourneyCommand = async (
  input: UpdateJourneyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  let body: any;
  if (input.WriteJourneyRequest !== undefined) {
    body = serializeAws_restJson1WriteJourneyRequest(input.WriteJourneyRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/journeys/{JourneyId}/state";
  if (input.JourneyId !== undefined) {
    const labelValue: string = input.JourneyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JourneyId.");
    }
    resolvedPath = resolvedPath.replace("{JourneyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JourneyId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.JourneyStateRequest !== undefined) {
    body = serializeAws_restJson1JourneyStateRequest(input.JourneyStateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/push";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.Version !== undefined && { version: input.Version }),
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
  };
  let body: any;
  if (input.PushNotificationTemplateRequest !== undefined) {
    body = serializeAws_restJson1PushNotificationTemplateRequest(input.PushNotificationTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/recommenders/{RecommenderId}";
  if (input.RecommenderId !== undefined) {
    const labelValue: string = input.RecommenderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecommenderId.");
    }
    resolvedPath = resolvedPath.replace("{RecommenderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecommenderId.");
  }
  let body: any;
  if (input.UpdateRecommenderConfiguration !== undefined) {
    body = serializeAws_restJson1UpdateRecommenderConfigurationShape(input.UpdateRecommenderConfiguration, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/segments/{SegmentId}";
  if (input.SegmentId !== undefined) {
    const labelValue: string = input.SegmentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SegmentId.");
    }
    resolvedPath = resolvedPath.replace("{SegmentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SegmentId.");
  }
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.WriteSegmentRequest !== undefined) {
    body = serializeAws_restJson1WriteSegmentRequest(input.WriteSegmentRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/sms";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.SMSChannelRequest !== undefined) {
    body = serializeAws_restJson1SMSChannelRequest(input.SMSChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/sms";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.SMSTemplateRequest !== undefined) {
    body = serializeAws_restJson1SMSTemplateRequest(input.SMSTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/{TemplateType}/active-version";
  if (input.TemplateType !== undefined) {
    const labelValue: string = input.TemplateType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateType.");
    }
    resolvedPath = resolvedPath.replace("{TemplateType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateType.");
  }
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  let body: any;
  if (input.TemplateActiveVersionRequest !== undefined) {
    body = serializeAws_restJson1TemplateActiveVersionRequest(input.TemplateActiveVersionRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/apps/{ApplicationId}/channels/voice";
  if (input.ApplicationId !== undefined) {
    const labelValue: string = input.ApplicationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationId.");
  }
  let body: any;
  if (input.VoiceChannelRequest !== undefined) {
    body = serializeAws_restJson1VoiceChannelRequest(input.VoiceChannelRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/templates/{TemplateName}/voice";
  if (input.TemplateName !== undefined) {
    const labelValue: string = input.TemplateName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TemplateName.");
    }
    resolvedPath = resolvedPath.replace("{TemplateName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TemplateName.");
  }
  const query: any = {
    ...(input.CreateNewVersion !== undefined && { "create-new-version": input.CreateNewVersion.toString() }),
    ...(input.Version !== undefined && { version: input.Version }),
  };
  let body: any;
  if (input.VoiceTemplateRequest !== undefined) {
    body = serializeAws_restJson1VoiceTemplateRequest(input.VoiceTemplateRequest, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateAppCommandError(output, context);
  }
  const contents: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAppResponse",
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateCampaignCommandError(output, context);
  }
  const contents: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCampaignResponse",
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateEmailTemplateCommandError(output, context);
  }
  const contents: CreateEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEmailTemplateResponse",
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateExportJobCommandError(output, context);
  }
  const contents: CreateExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateExportJobResponse",
    ExportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateImportJobCommandError(output, context);
  }
  const contents: CreateImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImportJobResponse",
    ImportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateJourneyCommandError(output, context);
  }
  const contents: CreateJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJourneyResponse",
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreatePushTemplateCommandError(output, context);
  }
  const contents: CreatePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePushTemplateResponse",
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateRecommenderConfigurationCommandError(output, context);
  }
  const contents: CreateRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRecommenderConfigurationResponse",
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSegmentCommandError(output, context);
  }
  const contents: CreateSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSegmentResponse",
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSmsTemplateCommandError(output, context);
  }
  const contents: CreateSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSmsTemplateResponse",
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateVoiceTemplateCommandError(output, context);
  }
  const contents: CreateVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVoiceTemplateResponse",
    CreateTemplateMessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CreateTemplateMessageBody = deserializeAws_restJson1CreateTemplateMessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAdmChannelCommandError(output, context);
  }
  const contents: DeleteAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAdmChannelResponse",
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteApnsChannelCommandError(output, context);
  }
  const contents: DeleteApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApnsChannelResponse",
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteApnsSandboxChannelCommandError(output, context);
  }
  const contents: DeleteApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApnsSandboxChannelResponse",
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteApnsVoipChannelCommandError(output, context);
  }
  const contents: DeleteApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApnsVoipChannelResponse",
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: DeleteApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApnsVoipSandboxChannelResponse",
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAppCommandError(output, context);
  }
  const contents: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAppResponse",
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteBaiduChannelCommandError(output, context);
  }
  const contents: DeleteBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBaiduChannelResponse",
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteCampaignCommandError(output, context);
  }
  const contents: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteCampaignResponse",
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteEmailChannelCommandError(output, context);
  }
  const contents: DeleteEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEmailChannelResponse",
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteEmailTemplateCommandError(output, context);
  }
  const contents: DeleteEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEmailTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteEndpointCommandError(output, context);
  }
  const contents: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEndpointResponse",
    EndpointResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteEventStreamCommandError(output, context);
  }
  const contents: DeleteEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteEventStreamResponse",
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteGcmChannelCommandError(output, context);
  }
  const contents: DeleteGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGcmChannelResponse",
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteJourneyCommandError(output, context);
  }
  const contents: DeleteJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteJourneyResponse",
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeletePushTemplateCommandError(output, context);
  }
  const contents: DeletePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePushTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteRecommenderConfigurationCommandError(output, context);
  }
  const contents: DeleteRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRecommenderConfigurationResponse",
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSegmentCommandError(output, context);
  }
  const contents: DeleteSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSegmentResponse",
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSmsChannelCommandError(output, context);
  }
  const contents: DeleteSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSmsChannelResponse",
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSmsTemplateCommandError(output, context);
  }
  const contents: DeleteSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSmsTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteUserEndpointsCommandError(output, context);
  }
  const contents: DeleteUserEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUserEndpointsResponse",
    EndpointsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteVoiceChannelCommandError(output, context);
  }
  const contents: DeleteVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVoiceChannelResponse",
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteVoiceTemplateCommandError(output, context);
  }
  const contents: DeleteVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVoiceTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAdmChannelCommandError(output, context);
  }
  const contents: GetAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAdmChannelResponse",
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApnsChannelCommandError(output, context);
  }
  const contents: GetApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApnsChannelResponse",
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApnsSandboxChannelCommandError(output, context);
  }
  const contents: GetApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApnsSandboxChannelResponse",
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApnsVoipChannelCommandError(output, context);
  }
  const contents: GetApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApnsVoipChannelResponse",
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: GetApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApnsVoipSandboxChannelResponse",
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAppCommandError(output, context);
  }
  const contents: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppResponse",
    ApplicationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationResponse = deserializeAws_restJson1ApplicationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApplicationDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApplicationDateRangeKpiCommandError(output, context);
  }
  const contents: GetApplicationDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationDateRangeKpiResponse",
    ApplicationDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationDateRangeKpiResponse = deserializeAws_restJson1ApplicationDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetApplicationSettingsCommandError(output, context);
  }
  const contents: GetApplicationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetApplicationSettingsResponse",
    ApplicationSettingsResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAppsCommandError(output, context);
  }
  const contents: GetAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppsResponse",
    ApplicationsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationsResponse = deserializeAws_restJson1ApplicationsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetBaiduChannelCommandError(output, context);
  }
  const contents: GetBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBaiduChannelResponse",
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignCommandError(output, context);
  }
  const contents: GetCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignResponse",
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignActivitiesCommandError(output, context);
  }
  const contents: GetCampaignActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignActivitiesResponse",
    ActivitiesResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ActivitiesResponse = deserializeAws_restJson1ActivitiesResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignDateRangeKpiCommandError(output, context);
  }
  const contents: GetCampaignDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignDateRangeKpiResponse",
    CampaignDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignDateRangeKpiResponse = deserializeAws_restJson1CampaignDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignsCommandError(output, context);
  }
  const contents: GetCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignsResponse",
    CampaignsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignVersionCommandError(output, context);
  }
  const contents: GetCampaignVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignVersionResponse",
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCampaignVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetCampaignVersionsCommandError(output, context);
  }
  const contents: GetCampaignVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCampaignVersionsResponse",
    CampaignsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignsResponse = deserializeAws_restJson1CampaignsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCampaignVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCampaignVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetChannelsCommandError(output, context);
  }
  const contents: GetChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetChannelsResponse",
    ChannelsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ChannelsResponse = deserializeAws_restJson1ChannelsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEmailChannelCommandError(output, context);
  }
  const contents: GetEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEmailChannelResponse",
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEmailTemplateCommandError(output, context);
  }
  const contents: GetEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEmailTemplateResponse",
    EmailTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailTemplateResponse = deserializeAws_restJson1EmailTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEndpointCommandError(output, context);
  }
  const contents: GetEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEndpointResponse",
    EndpointResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointResponse = deserializeAws_restJson1EndpointResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEventStreamCommandError(output, context);
  }
  const contents: GetEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEventStreamResponse",
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetExportJobCommandError(output, context);
  }
  const contents: GetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExportJobResponse",
    ExportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobResponse = deserializeAws_restJson1ExportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetExportJobsCommandError(output, context);
  }
  const contents: GetExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExportJobsResponse",
    ExportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetGcmChannelCommandError(output, context);
  }
  const contents: GetGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGcmChannelResponse",
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetImportJobCommandError(output, context);
  }
  const contents: GetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImportJobResponse",
    ImportJobResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobResponse = deserializeAws_restJson1ImportJobResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetImportJobsCommandError(output, context);
  }
  const contents: GetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImportJobsResponse",
    ImportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJourneyCommandError(output, context);
  }
  const contents: GetJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJourneyResponse",
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyDateRangeKpiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJourneyDateRangeKpiCommandError(output, context);
  }
  const contents: GetJourneyDateRangeKpiCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJourneyDateRangeKpiResponse",
    JourneyDateRangeKpiResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyDateRangeKpiResponse = deserializeAws_restJson1JourneyDateRangeKpiResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyDateRangeKpiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyDateRangeKpiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError(output, context);
  }
  const contents: GetJourneyExecutionActivityMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJourneyExecutionActivityMetricsResponse",
    JourneyExecutionActivityMetricsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyExecutionActivityMetricsResponse = deserializeAws_restJson1JourneyExecutionActivityMetricsResponse(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyExecutionActivityMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionActivityMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJourneyExecutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetJourneyExecutionMetricsCommandError(output, context);
  }
  const contents: GetJourneyExecutionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJourneyExecutionMetricsResponse",
    JourneyExecutionMetricsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyExecutionMetricsResponse = deserializeAws_restJson1JourneyExecutionMetricsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJourneyExecutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJourneyExecutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetPushTemplateCommandError(output, context);
  }
  const contents: GetPushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPushTemplateResponse",
    PushNotificationTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.PushNotificationTemplateResponse = deserializeAws_restJson1PushNotificationTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRecommenderConfigurationCommandError(output, context);
  }
  const contents: GetRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecommenderConfigurationResponse",
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRecommenderConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRecommenderConfigurationsCommandError(output, context);
  }
  const contents: GetRecommenderConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecommenderConfigurationsResponse",
    ListRecommenderConfigurationsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ListRecommenderConfigurationsResponse = deserializeAws_restJson1ListRecommenderConfigurationsResponse(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecommenderConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommenderConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentCommandError(output, context);
  }
  const contents: GetSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentResponse",
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentExportJobsCommandError(output, context);
  }
  const contents: GetSegmentExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentExportJobsResponse",
    ExportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ExportJobsResponse = deserializeAws_restJson1ExportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentImportJobsCommandError(output, context);
  }
  const contents: GetSegmentImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentImportJobsResponse",
    ImportJobsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ImportJobsResponse = deserializeAws_restJson1ImportJobsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentsCommandError(output, context);
  }
  const contents: GetSegmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentsResponse",
    SegmentsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentVersionCommandError(output, context);
  }
  const contents: GetSegmentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentVersionResponse",
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSegmentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSegmentVersionsCommandError(output, context);
  }
  const contents: GetSegmentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSegmentVersionsResponse",
    SegmentsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentsResponse = deserializeAws_restJson1SegmentsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSegmentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSmsChannelCommandError(output, context);
  }
  const contents: GetSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSmsChannelResponse",
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSmsTemplateCommandError(output, context);
  }
  const contents: GetSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSmsTemplateResponse",
    SMSTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSTemplateResponse = deserializeAws_restJson1SMSTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetUserEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetUserEndpointsCommandError(output, context);
  }
  const contents: GetUserEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUserEndpointsResponse",
    EndpointsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EndpointsResponse = deserializeAws_restJson1EndpointsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUserEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetVoiceChannelCommandError(output, context);
  }
  const contents: GetVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVoiceChannelResponse",
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetVoiceTemplateCommandError(output, context);
  }
  const contents: GetVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVoiceTemplateResponse",
    VoiceTemplateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceTemplateResponse = deserializeAws_restJson1VoiceTemplateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJourneysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJourneysCommandError(output, context);
  }
  const contents: ListJourneysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJourneysResponse",
    JourneysResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneysResponse = deserializeAws_restJson1JourneysResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJourneysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJourneysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    TagsModel: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TagsModel = deserializeAws_restJson1TagsModel(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: ListTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTemplatesResponse",
    TemplatesResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TemplatesResponse = deserializeAws_restJson1TemplatesResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
  }
  const contents: ListTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTemplateVersionsResponse",
    TemplateVersionsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.TemplateVersionsResponse = deserializeAws_restJson1TemplateVersionsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PhoneNumberValidateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PhoneNumberValidateCommandError(output, context);
  }
  const contents: PhoneNumberValidateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PhoneNumberValidateResponse",
    NumberValidateResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.NumberValidateResponse = deserializeAws_restJson1NumberValidateResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PhoneNumberValidateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PhoneNumberValidateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutEventsCommandError(output, context);
  }
  const contents: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEventsResponse",
    EventsResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventsResponse = deserializeAws_restJson1EventsResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutEventStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutEventStreamCommandError(output, context);
  }
  const contents: PutEventStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEventStreamResponse",
    EventStream: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EventStream = deserializeAws_restJson1EventStream(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEventStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveAttributesCommandError(output, context);
  }
  const contents: RemoveAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveAttributesResponse",
    AttributesResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.AttributesResource = deserializeAws_restJson1AttributesResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SendMessagesCommandError(output, context);
  }
  const contents: SendMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendMessagesResponse",
    MessageResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageResponse = deserializeAws_restJson1MessageResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SendUsersMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SendUsersMessagesCommandError(output, context);
  }
  const contents: SendUsersMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendUsersMessagesResponse",
    SendUsersMessageResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SendUsersMessageResponse = deserializeAws_restJson1SendUsersMessageResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendUsersMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendUsersMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAdmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateAdmChannelCommandError(output, context);
  }
  const contents: UpdateAdmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateAdmChannelResponse",
    ADMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ADMChannelResponse = deserializeAws_restJson1ADMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAdmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApnsChannelCommandError(output, context);
  }
  const contents: UpdateApnsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApnsChannelResponse",
    APNSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSChannelResponse = deserializeAws_restJson1APNSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApnsSandboxChannelCommandError(output, context);
  }
  const contents: UpdateApnsSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApnsSandboxChannelResponse",
    APNSSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSSandboxChannelResponse = deserializeAws_restJson1APNSSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsVoipChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApnsVoipChannelCommandError(output, context);
  }
  const contents: UpdateApnsVoipChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApnsVoipChannelResponse",
    APNSVoipChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipChannelResponse = deserializeAws_restJson1APNSVoipChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsVoipChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError(output, context);
  }
  const contents: UpdateApnsVoipSandboxChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApnsVoipSandboxChannelResponse",
    APNSVoipSandboxChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.APNSVoipSandboxChannelResponse = deserializeAws_restJson1APNSVoipSandboxChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApnsVoipSandboxChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApnsVoipSandboxChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateApplicationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateApplicationSettingsCommandError(output, context);
  }
  const contents: UpdateApplicationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApplicationSettingsResponse",
    ApplicationSettingsResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.ApplicationSettingsResource = deserializeAws_restJson1ApplicationSettingsResource(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateApplicationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateBaiduChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateBaiduChannelCommandError(output, context);
  }
  const contents: UpdateBaiduChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBaiduChannelResponse",
    BaiduChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.BaiduChannelResponse = deserializeAws_restJson1BaiduChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBaiduChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBaiduChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateCampaignCommandError(output, context);
  }
  const contents: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCampaignResponse",
    CampaignResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.CampaignResponse = deserializeAws_restJson1CampaignResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEmailChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateEmailChannelCommandError(output, context);
  }
  const contents: UpdateEmailChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEmailChannelResponse",
    EmailChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.EmailChannelResponse = deserializeAws_restJson1EmailChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEmailChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEmailTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateEmailTemplateCommandError(output, context);
  }
  const contents: UpdateEmailTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEmailTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEmailTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmailTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateEndpointCommandError(output, context);
  }
  const contents: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEndpointResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateEndpointsBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateEndpointsBatchCommandError(output, context);
  }
  const contents: UpdateEndpointsBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEndpointsBatchResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateEndpointsBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointsBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGcmChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateGcmChannelCommandError(output, context);
  }
  const contents: UpdateGcmChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGcmChannelResponse",
    GCMChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.GCMChannelResponse = deserializeAws_restJson1GCMChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGcmChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGcmChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateJourneyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateJourneyCommandError(output, context);
  }
  const contents: UpdateJourneyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJourneyResponse",
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJourneyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateJourneyStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateJourneyStateCommandError(output, context);
  }
  const contents: UpdateJourneyStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJourneyStateResponse",
    JourneyResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.JourneyResponse = deserializeAws_restJson1JourneyResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateJourneyStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJourneyStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdatePushTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdatePushTemplateCommandError(output, context);
  }
  const contents: UpdatePushTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePushTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePushTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePushTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRecommenderConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateRecommenderConfigurationCommandError(output, context);
  }
  const contents: UpdateRecommenderConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRecommenderConfigurationResponse",
    RecommenderConfigurationResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.RecommenderConfigurationResponse = deserializeAws_restJson1RecommenderConfigurationResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecommenderConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSegmentCommandError(output, context);
  }
  const contents: UpdateSegmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSegmentResponse",
    SegmentResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SegmentResponse = deserializeAws_restJson1SegmentResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSmsChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSmsChannelCommandError(output, context);
  }
  const contents: UpdateSmsChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSmsChannelResponse",
    SMSChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.SMSChannelResponse = deserializeAws_restJson1SMSChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSmsChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSmsTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSmsTemplateCommandError(output, context);
  }
  const contents: UpdateSmsTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSmsTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSmsTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSmsTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateTemplateActiveVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateTemplateActiveVersionCommandError(output, context);
  }
  const contents: UpdateTemplateActiveVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTemplateActiveVersionResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTemplateActiveVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateActiveVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVoiceChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateVoiceChannelCommandError(output, context);
  }
  const contents: UpdateVoiceChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVoiceChannelResponse",
    VoiceChannelResponse: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.VoiceChannelResponse = deserializeAws_restJson1VoiceChannelResponse(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVoiceChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateVoiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateVoiceTemplateCommandError(output, context);
  }
  const contents: UpdateVoiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVoiceTemplateResponse",
    MessageBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  contents.MessageBody = deserializeAws_restJson1MessageBody(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateVoiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVoiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.pinpoint#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.pinpoint#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MethodNotAllowedException":
    case "com.amazonaws.pinpoint#MethodNotAllowedException":
      response = {
        ...(await deserializeAws_restJson1MethodNotAllowedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PayloadTooLargeException":
    case "com.amazonaws.pinpoint#PayloadTooLargeException":
      response = {
        ...(await deserializeAws_restJson1PayloadTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1MethodNotAllowedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MethodNotAllowedException> => {
  const contents: MethodNotAllowedException = {
    name: "MethodNotAllowedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1PayloadTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PayloadTooLargeException> => {
  const contents: PayloadTooLargeException = {
    name: "PayloadTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RequestID: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.RequestID !== undefined && data.RequestID !== null) {
    contents.RequestID = data.RequestID;
  }
  return contents;
};

const serializeAws_restJson1Activity = (input: Activity, context: __SerdeContext): any => {
  return {
    ...(input.CUSTOM !== undefined && { CUSTOM: serializeAws_restJson1CustomMessageActivity(input.CUSTOM, context) }),
    ...(input.ConditionalSplit !== undefined && {
      ConditionalSplit: serializeAws_restJson1ConditionalSplitActivity(input.ConditionalSplit, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.EMAIL !== undefined && { EMAIL: serializeAws_restJson1EmailMessageActivity(input.EMAIL, context) }),
    ...(input.Holdout !== undefined && { Holdout: serializeAws_restJson1HoldoutActivity(input.Holdout, context) }),
    ...(input.MultiCondition !== undefined && {
      MultiCondition: serializeAws_restJson1MultiConditionalSplitActivity(input.MultiCondition, context),
    }),
    ...(input.PUSH !== undefined && { PUSH: serializeAws_restJson1PushMessageActivity(input.PUSH, context) }),
    ...(input.RandomSplit !== undefined && {
      RandomSplit: serializeAws_restJson1RandomSplitActivity(input.RandomSplit, context),
    }),
    ...(input.SMS !== undefined && { SMS: serializeAws_restJson1SMSMessageActivity(input.SMS, context) }),
    ...(input.Wait !== undefined && { Wait: serializeAws_restJson1WaitActivity(input.Wait, context) }),
  };
};

const serializeAws_restJson1AddressConfiguration = (input: AddressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BodyOverride !== undefined && { BodyOverride: input.BodyOverride }),
    ...(input.ChannelType !== undefined && { ChannelType: input.ChannelType }),
    ...(input.Context !== undefined && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TitleOverride !== undefined && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1ADMChannelRequest = (input: ADMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId !== undefined && { ClientId: input.ClientId }),
    ...(input.ClientSecret !== undefined && { ClientSecret: input.ClientSecret }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1ADMMessage = (input: ADMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.ConsolidationKey !== undefined && { ConsolidationKey: input.ConsolidationKey }),
    ...(input.Data !== undefined && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.ExpiresAfter !== undefined && { ExpiresAfter: input.ExpiresAfter }),
    ...(input.IconReference !== undefined && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && { ImageUrl: input.ImageUrl }),
    ...(input.MD5 !== undefined && { MD5: input.MD5 }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1AndroidPushNotificationTemplate = (
  input: AndroidPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.ImageIconUrl !== undefined && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.SmallImageIconUrl !== undefined && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSChannelRequest = (input: APNSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSMessage = (input: APNSMessage, context: __SerdeContext): any => {
  return {
    ...(input.APNSPushType !== undefined && { APNSPushType: input.APNSPushType }),
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Badge !== undefined && { Badge: input.Badge }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Category !== undefined && { Category: input.Category }),
    ...(input.CollapseId !== undefined && { CollapseId: input.CollapseId }),
    ...(input.Data !== undefined && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.MediaUrl !== undefined && { MediaUrl: input.MediaUrl }),
    ...(input.PreferredAuthenticationMethod !== undefined && {
      PreferredAuthenticationMethod: input.PreferredAuthenticationMethod,
    }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.ThreadId !== undefined && { ThreadId: input.ThreadId }),
    ...(input.TimeToLive !== undefined && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSPushNotificationTemplate = (
  input: APNSPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.MediaUrl !== undefined && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1APNSSandboxChannelRequest = (
  input: APNSSandboxChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId !== undefined && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSVoipChannelRequest = (input: APNSVoipChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.BundleId !== undefined && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1APNSVoipSandboxChannelRequest = (
  input: APNSVoipSandboxChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BundleId !== undefined && { BundleId: input.BundleId }),
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.DefaultAuthenticationMethod !== undefined && {
      DefaultAuthenticationMethod: input.DefaultAuthenticationMethod,
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.PrivateKey !== undefined && { PrivateKey: input.PrivateKey }),
    ...(input.TeamId !== undefined && { TeamId: input.TeamId }),
    ...(input.TokenKey !== undefined && { TokenKey: input.TokenKey }),
    ...(input.TokenKeyId !== undefined && { TokenKeyId: input.TokenKeyId }),
  };
};

const serializeAws_restJson1AttributeDimension = (input: AttributeDimension, context: __SerdeContext): any => {
  return {
    ...(input.AttributeType !== undefined && { AttributeType: input.AttributeType }),
    ...(input.Values !== undefined && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1BaiduChannelRequest = (input: BaiduChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey !== undefined && { ApiKey: input.ApiKey }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.SecretKey !== undefined && { SecretKey: input.SecretKey }),
  };
};

const serializeAws_restJson1BaiduMessage = (input: BaiduMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Data !== undefined && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference !== undefined && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && { ImageUrl: input.ImageUrl }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TimeToLive !== undefined && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1CampaignCustomMessage = (input: CampaignCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && { Data: input.Data }),
  };
};

const serializeAws_restJson1CampaignEmailMessage = (input: CampaignEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.FromAddress !== undefined && { FromAddress: input.FromAddress }),
    ...(input.HtmlBody !== undefined && { HtmlBody: input.HtmlBody }),
    ...(input.Title !== undefined && { Title: input.Title }),
  };
};

const serializeAws_restJson1CampaignEventFilter = (input: CampaignEventFilter, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context),
    }),
    ...(input.FilterType !== undefined && { FilterType: input.FilterType }),
  };
};

const serializeAws_restJson1CampaignHook = (input: CampaignHook, context: __SerdeContext): any => {
  return {
    ...(input.LambdaFunctionName !== undefined && { LambdaFunctionName: input.LambdaFunctionName }),
    ...(input.Mode !== undefined && { Mode: input.Mode }),
    ...(input.WebUrl !== undefined && { WebUrl: input.WebUrl }),
  };
};

const serializeAws_restJson1CampaignLimits = (input: CampaignLimits, context: __SerdeContext): any => {
  return {
    ...(input.Daily !== undefined && { Daily: input.Daily }),
    ...(input.MaximumDuration !== undefined && { MaximumDuration: input.MaximumDuration }),
    ...(input.MessagesPerSecond !== undefined && { MessagesPerSecond: input.MessagesPerSecond }),
    ...(input.Total !== undefined && { Total: input.Total }),
  };
};

const serializeAws_restJson1CampaignSmsMessage = (input: CampaignSmsMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.MessageType !== undefined && { MessageType: input.MessageType }),
    ...(input.SenderId !== undefined && { SenderId: input.SenderId }),
  };
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Conditions !== undefined && {
      Conditions: serializeAws_restJson1ListOfSimpleCondition(input.Conditions, context),
    }),
    ...(input.Operator !== undefined && { Operator: input.Operator }),
  };
};

const serializeAws_restJson1ConditionalSplitActivity = (
  input: ConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined && { Condition: serializeAws_restJson1Condition(input.Condition, context) }),
    ...(input.EvaluationWaitTime !== undefined && {
      EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
    }),
    ...(input.FalseActivity !== undefined && { FalseActivity: input.FalseActivity }),
    ...(input.TrueActivity !== undefined && { TrueActivity: input.TrueActivity }),
  };
};

const serializeAws_restJson1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1CreateRecommenderConfigurationShape = (
  input: CreateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RecommendationProviderIdType !== undefined && {
      RecommendationProviderIdType: input.RecommendationProviderIdType,
    }),
    ...(input.RecommendationProviderRoleArn !== undefined && {
      RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
    }),
    ...(input.RecommendationProviderUri !== undefined && {
      RecommendationProviderUri: input.RecommendationProviderUri,
    }),
    ...(input.RecommendationTransformerUri !== undefined && {
      RecommendationTransformerUri: input.RecommendationTransformerUri,
    }),
    ...(input.RecommendationsDisplayName !== undefined && {
      RecommendationsDisplayName: input.RecommendationsDisplayName,
    }),
    ...(input.RecommendationsPerMessage !== undefined && {
      RecommendationsPerMessage: input.RecommendationsPerMessage,
    }),
  };
};

const serializeAws_restJson1CustomDeliveryConfiguration = (
  input: CustomDeliveryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryUri !== undefined && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes !== undefined && {
      EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
  };
};

const serializeAws_restJson1CustomMessageActivity = (input: CustomMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryUri !== undefined && { DeliveryUri: input.DeliveryUri }),
    ...(input.EndpointTypes !== undefined && {
      EndpointTypes: serializeAws_restJson1ListOf__EndpointTypesElement(input.EndpointTypes, context),
    }),
    ...(input.MessageConfig !== undefined && {
      MessageConfig: serializeAws_restJson1JourneyCustomMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1DefaultMessage = (input: DefaultMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
  };
};

const serializeAws_restJson1DefaultPushNotificationMessage = (
  input: DefaultPushNotificationMessage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Data !== undefined && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1DefaultPushNotificationTemplate = (
  input: DefaultPushNotificationTemplate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1DirectMessageConfiguration = (
  input: DirectMessageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADMMessage !== undefined && { ADMMessage: serializeAws_restJson1ADMMessage(input.ADMMessage, context) }),
    ...(input.APNSMessage !== undefined && {
      APNSMessage: serializeAws_restJson1APNSMessage(input.APNSMessage, context),
    }),
    ...(input.BaiduMessage !== undefined && {
      BaiduMessage: serializeAws_restJson1BaiduMessage(input.BaiduMessage, context),
    }),
    ...(input.DefaultMessage !== undefined && {
      DefaultMessage: serializeAws_restJson1DefaultMessage(input.DefaultMessage, context),
    }),
    ...(input.DefaultPushNotificationMessage !== undefined && {
      DefaultPushNotificationMessage: serializeAws_restJson1DefaultPushNotificationMessage(
        input.DefaultPushNotificationMessage,
        context
      ),
    }),
    ...(input.EmailMessage !== undefined && {
      EmailMessage: serializeAws_restJson1EmailMessage(input.EmailMessage, context),
    }),
    ...(input.GCMMessage !== undefined && { GCMMessage: serializeAws_restJson1GCMMessage(input.GCMMessage, context) }),
    ...(input.SMSMessage !== undefined && { SMSMessage: serializeAws_restJson1SMSMessage(input.SMSMessage, context) }),
    ...(input.VoiceMessage !== undefined && {
      VoiceMessage: serializeAws_restJson1VoiceMessage(input.VoiceMessage, context),
    }),
  };
};

const serializeAws_restJson1EmailChannelRequest = (input: EmailChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSet !== undefined && { ConfigurationSet: input.ConfigurationSet }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.FromAddress !== undefined && { FromAddress: input.FromAddress }),
    ...(input.Identity !== undefined && { Identity: input.Identity }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1EmailMessage = (input: EmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.FeedbackForwardingAddress !== undefined && {
      FeedbackForwardingAddress: input.FeedbackForwardingAddress,
    }),
    ...(input.FromAddress !== undefined && { FromAddress: input.FromAddress }),
    ...(input.RawEmail !== undefined && { RawEmail: serializeAws_restJson1RawEmail(input.RawEmail, context) }),
    ...(input.ReplyToAddresses !== undefined && {
      ReplyToAddresses: serializeAws_restJson1ListOf__string(input.ReplyToAddresses, context),
    }),
    ...(input.SimpleEmail !== undefined && {
      SimpleEmail: serializeAws_restJson1SimpleEmail(input.SimpleEmail, context),
    }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
  };
};

const serializeAws_restJson1EmailMessageActivity = (input: EmailMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined && {
      MessageConfig: serializeAws_restJson1JourneyEmailMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1EmailTemplateRequest = (input: EmailTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultSubstitutions !== undefined && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.HtmlPart !== undefined && { HtmlPart: input.HtmlPart }),
    ...(input.RecommenderId !== undefined && { RecommenderId: input.RecommenderId }),
    ...(input.Subject !== undefined && { Subject: input.Subject }),
    ...(input.TemplateDescription !== undefined && { TemplateDescription: input.TemplateDescription }),
    ...(input.TextPart !== undefined && { TextPart: input.TextPart }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1EndpointBatchItem = (input: EndpointBatchItem, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && { Address: input.Address }),
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType !== undefined && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate !== undefined && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined && { EndpointStatus: input.EndpointStatus }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Location !== undefined && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && { RequestId: input.RequestId }),
    ...(input.User !== undefined && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointBatchRequest = (input: EndpointBatchRequest, context: __SerdeContext): any => {
  return {
    ...(input.Item !== undefined && { Item: serializeAws_restJson1ListOfEndpointBatchItem(input.Item, context) }),
  };
};

const serializeAws_restJson1EndpointDemographic = (input: EndpointDemographic, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion !== undefined && { AppVersion: input.AppVersion }),
    ...(input.Locale !== undefined && { Locale: input.Locale }),
    ...(input.Make !== undefined && { Make: input.Make }),
    ...(input.Model !== undefined && { Model: input.Model }),
    ...(input.ModelVersion !== undefined && { ModelVersion: input.ModelVersion }),
    ...(input.Platform !== undefined && { Platform: input.Platform }),
    ...(input.PlatformVersion !== undefined && { PlatformVersion: input.PlatformVersion }),
    ...(input.Timezone !== undefined && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1EndpointLocation = (input: EndpointLocation, context: __SerdeContext): any => {
  return {
    ...(input.City !== undefined && { City: input.City }),
    ...(input.Country !== undefined && { Country: input.Country }),
    ...(input.Latitude !== undefined && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && { Longitude: input.Longitude }),
    ...(input.PostalCode !== undefined && { PostalCode: input.PostalCode }),
    ...(input.Region !== undefined && { Region: input.Region }),
  };
};

const serializeAws_restJson1EndpointRequest = (input: EndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && { Address: input.Address }),
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType !== undefined && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate !== undefined && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location !== undefined && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && { RequestId: input.RequestId }),
    ...(input.User !== undefined && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1EndpointSendConfiguration = (
  input: EndpointSendConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BodyOverride !== undefined && { BodyOverride: input.BodyOverride }),
    ...(input.Context !== undefined && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TitleOverride !== undefined && { TitleOverride: input.TitleOverride }),
  };
};

const serializeAws_restJson1EndpointUser = (input: EndpointUser, context: __SerdeContext): any => {
  return {
    ...(input.UserAttributes !== undefined && {
      UserAttributes: serializeAws_restJson1MapOfListOf__string(input.UserAttributes, context),
    }),
    ...(input.UserId !== undefined && { UserId: input.UserId }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.AppPackageName !== undefined && { AppPackageName: input.AppPackageName }),
    ...(input.AppTitle !== undefined && { AppTitle: input.AppTitle }),
    ...(input.AppVersionCode !== undefined && { AppVersionCode: input.AppVersionCode }),
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context),
    }),
    ...(input.ClientSdkVersion !== undefined && { ClientSdkVersion: input.ClientSdkVersion }),
    ...(input.EventType !== undefined && { EventType: input.EventType }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.SdkName !== undefined && { SdkName: input.SdkName }),
    ...(input.Session !== undefined && { Session: serializeAws_restJson1Session(input.Session, context) }),
    ...(input.Timestamp !== undefined && { Timestamp: input.Timestamp }),
  };
};

const serializeAws_restJson1EventCondition = (input: EventCondition, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_restJson1EventDimensions(input.Dimensions, context),
    }),
    ...(input.MessageActivity !== undefined && { MessageActivity: input.MessageActivity }),
  };
};

const serializeAws_restJson1EventDimensions = (input: EventDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
    }),
    ...(input.EventType !== undefined && { EventType: serializeAws_restJson1SetDimension(input.EventType, context) }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
  };
};

const serializeAws_restJson1EventsBatch = (input: EventsBatch, context: __SerdeContext): any => {
  return {
    ...(input.Endpoint !== undefined && { Endpoint: serializeAws_restJson1PublicEndpoint(input.Endpoint, context) }),
    ...(input.Events !== undefined && { Events: serializeAws_restJson1MapOfEvent(input.Events, context) }),
  };
};

const serializeAws_restJson1EventsRequest = (input: EventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BatchItem !== undefined && {
      BatchItem: serializeAws_restJson1MapOfEventsBatch(input.BatchItem, context),
    }),
  };
};

const serializeAws_restJson1ExportJobRequest = (input: ExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.S3UrlPrefix !== undefined && { S3UrlPrefix: input.S3UrlPrefix }),
    ...(input.SegmentId !== undefined && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion !== undefined && { SegmentVersion: input.SegmentVersion }),
  };
};

const serializeAws_restJson1GCMChannelRequest = (input: GCMChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApiKey !== undefined && { ApiKey: input.ApiKey }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1GCMMessage = (input: GCMMessage, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.CollapseKey !== undefined && { CollapseKey: input.CollapseKey }),
    ...(input.Data !== undefined && { Data: serializeAws_restJson1MapOf__string(input.Data, context) }),
    ...(input.IconReference !== undefined && { IconReference: input.IconReference }),
    ...(input.ImageIconUrl !== undefined && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageUrl !== undefined && { ImageUrl: input.ImageUrl }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.RestrictedPackageName !== undefined && { RestrictedPackageName: input.RestrictedPackageName }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.SmallImageIconUrl !== undefined && { SmallImageIconUrl: input.SmallImageIconUrl }),
    ...(input.Sound !== undefined && { Sound: input.Sound }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.TimeToLive !== undefined && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1GPSCoordinates = (input: GPSCoordinates, context: __SerdeContext): any => {
  return {
    ...(input.Latitude !== undefined && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && { Longitude: input.Longitude }),
  };
};

const serializeAws_restJson1GPSPointDimension = (input: GPSPointDimension, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates !== undefined && {
      Coordinates: serializeAws_restJson1GPSCoordinates(input.Coordinates, context),
    }),
    ...(input.RangeInKilometers !== undefined && { RangeInKilometers: input.RangeInKilometers }),
  };
};

const serializeAws_restJson1HoldoutActivity = (input: HoldoutActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.Percentage !== undefined && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1ImportJobRequest = (input: ImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefineSegment !== undefined && { DefineSegment: input.DefineSegment }),
    ...(input.ExternalId !== undefined && { ExternalId: input.ExternalId }),
    ...(input.Format !== undefined && { Format: input.Format }),
    ...(input.RegisterEndpoints !== undefined && { RegisterEndpoints: input.RegisterEndpoints }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.S3Url !== undefined && { S3Url: input.S3Url }),
    ...(input.SegmentId !== undefined && { SegmentId: input.SegmentId }),
    ...(input.SegmentName !== undefined && { SegmentName: input.SegmentName }),
  };
};

const serializeAws_restJson1JourneyCustomMessage = (input: JourneyCustomMessage, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && { Data: input.Data }),
  };
};

const serializeAws_restJson1JourneyEmailMessage = (input: JourneyEmailMessage, context: __SerdeContext): any => {
  return {
    ...(input.FromAddress !== undefined && { FromAddress: input.FromAddress }),
  };
};

const serializeAws_restJson1JourneyLimits = (input: JourneyLimits, context: __SerdeContext): any => {
  return {
    ...(input.DailyCap !== undefined && { DailyCap: input.DailyCap }),
    ...(input.EndpointReentryCap !== undefined && { EndpointReentryCap: input.EndpointReentryCap }),
    ...(input.MessagesPerSecond !== undefined && { MessagesPerSecond: input.MessagesPerSecond }),
  };
};

const serializeAws_restJson1JourneyPushMessage = (input: JourneyPushMessage, context: __SerdeContext): any => {
  return {
    ...(input.TimeToLive !== undefined && { TimeToLive: input.TimeToLive }),
  };
};

const serializeAws_restJson1JourneySchedule = (input: JourneySchedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined && { EndTime: input.EndTime.toISOString().split(".")[0] + "Z" }),
    ...(input.StartTime !== undefined && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
    ...(input.Timezone !== undefined && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1JourneySMSMessage = (input: JourneySMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.MessageType !== undefined && { MessageType: input.MessageType }),
    ...(input.SenderId !== undefined && { SenderId: input.SenderId }),
  };
};

const serializeAws_restJson1JourneyStateRequest = (input: JourneyStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.State !== undefined && { State: input.State }),
  };
};

const serializeAws_restJson1ListOf__EndpointTypesElement = (
  input: (__EndpointTypesElement | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1ListOf__string = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1ListOfEndpointBatchItem = (input: EndpointBatchItem[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1EndpointBatchItem(entry, context));
};

const serializeAws_restJson1ListOfMultiConditionalBranch = (
  input: MultiConditionalBranch[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1MultiConditionalBranch(entry, context));
};

const serializeAws_restJson1ListOfRandomSplitEntry = (input: RandomSplitEntry[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1RandomSplitEntry(entry, context));
};

const serializeAws_restJson1ListOfSegmentDimensions = (input: SegmentDimensions[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SegmentDimensions(entry, context));
};

const serializeAws_restJson1ListOfSegmentGroup = (input: SegmentGroup[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SegmentGroup(entry, context));
};

const serializeAws_restJson1ListOfSegmentReference = (input: SegmentReference[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SegmentReference(entry, context));
};

const serializeAws_restJson1ListOfSimpleCondition = (input: SimpleCondition[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1SimpleCondition(entry, context));
};

const serializeAws_restJson1ListOfWriteTreatmentResource = (
  input: WriteTreatmentResource[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_restJson1WriteTreatmentResource(entry, context));
};

const serializeAws_restJson1MapOf__double = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1MapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1MapOfActivity = (input: { [key: string]: Activity }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: Activity }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1Activity(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfAddressConfiguration = (
  input: { [key: string]: AddressConfiguration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: AddressConfiguration }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1AddressConfiguration(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfAttributeDimension = (
  input: { [key: string]: AttributeDimension },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: AttributeDimension }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1AttributeDimension(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfEndpointSendConfiguration = (
  input: { [key: string]: EndpointSendConfiguration },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: EndpointSendConfiguration }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1EndpointSendConfiguration(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfEvent = (input: { [key: string]: Event }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: Event }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1Event(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfEventsBatch = (
  input: { [key: string]: EventsBatch },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: EventsBatch }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1EventsBatch(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfListOf__string = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1ListOf__string(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1MapOfMetricDimension = (
  input: { [key: string]: MetricDimension },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: MetricDimension }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_restJson1MetricDimension(value, context),
    }),
    {}
  );
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.ImageIconUrl !== undefined && { ImageIconUrl: input.ImageIconUrl }),
    ...(input.ImageSmallIconUrl !== undefined && { ImageSmallIconUrl: input.ImageSmallIconUrl }),
    ...(input.ImageUrl !== undefined && { ImageUrl: input.ImageUrl }),
    ...(input.JsonBody !== undefined && { JsonBody: input.JsonBody }),
    ...(input.MediaUrl !== undefined && { MediaUrl: input.MediaUrl }),
    ...(input.RawContent !== undefined && { RawContent: input.RawContent }),
    ...(input.SilentPush !== undefined && { SilentPush: input.SilentPush }),
    ...(input.TimeToLive !== undefined && { TimeToLive: input.TimeToLive }),
    ...(input.Title !== undefined && { Title: input.Title }),
    ...(input.Url !== undefined && { Url: input.Url }),
  };
};

const serializeAws_restJson1MessageConfiguration = (input: MessageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ADMMessage !== undefined && { ADMMessage: serializeAws_restJson1Message(input.ADMMessage, context) }),
    ...(input.APNSMessage !== undefined && { APNSMessage: serializeAws_restJson1Message(input.APNSMessage, context) }),
    ...(input.BaiduMessage !== undefined && {
      BaiduMessage: serializeAws_restJson1Message(input.BaiduMessage, context),
    }),
    ...(input.CustomMessage !== undefined && {
      CustomMessage: serializeAws_restJson1CampaignCustomMessage(input.CustomMessage, context),
    }),
    ...(input.DefaultMessage !== undefined && {
      DefaultMessage: serializeAws_restJson1Message(input.DefaultMessage, context),
    }),
    ...(input.EmailMessage !== undefined && {
      EmailMessage: serializeAws_restJson1CampaignEmailMessage(input.EmailMessage, context),
    }),
    ...(input.GCMMessage !== undefined && { GCMMessage: serializeAws_restJson1Message(input.GCMMessage, context) }),
    ...(input.SMSMessage !== undefined && {
      SMSMessage: serializeAws_restJson1CampaignSmsMessage(input.SMSMessage, context),
    }),
  };
};

const serializeAws_restJson1MessageRequest = (input: MessageRequest, context: __SerdeContext): any => {
  return {
    ...(input.Addresses !== undefined && {
      Addresses: serializeAws_restJson1MapOfAddressConfiguration(input.Addresses, context),
    }),
    ...(input.Context !== undefined && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.Endpoints !== undefined && {
      Endpoints: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Endpoints, context),
    }),
    ...(input.MessageConfiguration !== undefined && {
      MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration !== undefined && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId !== undefined && { TraceId: input.TraceId }),
  };
};

const serializeAws_restJson1MetricDimension = (input: MetricDimension, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_restJson1MultiConditionalBranch = (input: MultiConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && {
      Condition: serializeAws_restJson1SimpleCondition(input.Condition, context),
    }),
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
  };
};

const serializeAws_restJson1MultiConditionalSplitActivity = (
  input: MultiConditionalSplitActivity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Branches !== undefined && {
      Branches: serializeAws_restJson1ListOfMultiConditionalBranch(input.Branches, context),
    }),
    ...(input.DefaultActivity !== undefined && { DefaultActivity: input.DefaultActivity }),
    ...(input.EvaluationWaitTime !== undefined && {
      EvaluationWaitTime: serializeAws_restJson1WaitTime(input.EvaluationWaitTime, context),
    }),
  };
};

const serializeAws_restJson1NumberValidateRequest = (input: NumberValidateRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsoCountryCode !== undefined && { IsoCountryCode: input.IsoCountryCode }),
    ...(input.PhoneNumber !== undefined && { PhoneNumber: input.PhoneNumber }),
  };
};

const serializeAws_restJson1PublicEndpoint = (input: PublicEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && { Address: input.Address }),
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOfListOf__string(input.Attributes, context),
    }),
    ...(input.ChannelType !== undefined && { ChannelType: input.ChannelType }),
    ...(input.Demographic !== undefined && {
      Demographic: serializeAws_restJson1EndpointDemographic(input.Demographic, context),
    }),
    ...(input.EffectiveDate !== undefined && { EffectiveDate: input.EffectiveDate }),
    ...(input.EndpointStatus !== undefined && { EndpointStatus: input.EndpointStatus }),
    ...(input.Location !== undefined && { Location: serializeAws_restJson1EndpointLocation(input.Location, context) }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOf__double(input.Metrics, context) }),
    ...(input.OptOut !== undefined && { OptOut: input.OptOut }),
    ...(input.RequestId !== undefined && { RequestId: input.RequestId }),
    ...(input.User !== undefined && { User: serializeAws_restJson1EndpointUser(input.User, context) }),
  };
};

const serializeAws_restJson1PushMessageActivity = (input: PushMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined && {
      MessageConfig: serializeAws_restJson1JourneyPushMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1PushNotificationTemplateRequest = (
  input: PushNotificationTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ADM !== undefined && { ADM: serializeAws_restJson1AndroidPushNotificationTemplate(input.ADM, context) }),
    ...(input.APNS !== undefined && { APNS: serializeAws_restJson1APNSPushNotificationTemplate(input.APNS, context) }),
    ...(input.Baidu !== undefined && {
      Baidu: serializeAws_restJson1AndroidPushNotificationTemplate(input.Baidu, context),
    }),
    ...(input.Default !== undefined && {
      Default: serializeAws_restJson1DefaultPushNotificationTemplate(input.Default, context),
    }),
    ...(input.DefaultSubstitutions !== undefined && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.GCM !== undefined && { GCM: serializeAws_restJson1AndroidPushNotificationTemplate(input.GCM, context) }),
    ...(input.RecommenderId !== undefined && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription !== undefined && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1QuietTime = (input: QuietTime, context: __SerdeContext): any => {
  return {
    ...(input.End !== undefined && { End: input.End }),
    ...(input.Start !== undefined && { Start: input.Start }),
  };
};

const serializeAws_restJson1RandomSplitActivity = (input: RandomSplitActivity, context: __SerdeContext): any => {
  return {
    ...(input.Branches !== undefined && {
      Branches: serializeAws_restJson1ListOfRandomSplitEntry(input.Branches, context),
    }),
  };
};

const serializeAws_restJson1RandomSplitEntry = (input: RandomSplitEntry, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.Percentage !== undefined && { Percentage: input.Percentage }),
  };
};

const serializeAws_restJson1RawEmail = (input: RawEmail, context: __SerdeContext): any => {
  return {
    ...(input.Data !== undefined && { Data: context.base64Encoder(input.Data) }),
  };
};

const serializeAws_restJson1RecencyDimension = (input: RecencyDimension, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && { Duration: input.Duration }),
    ...(input.RecencyType !== undefined && { RecencyType: input.RecencyType }),
  };
};

const serializeAws_restJson1Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined && { EndTime: input.EndTime }),
    ...(input.EventFilter !== undefined && {
      EventFilter: serializeAws_restJson1CampaignEventFilter(input.EventFilter, context),
    }),
    ...(input.Frequency !== undefined && { Frequency: input.Frequency }),
    ...(input.IsLocalTime !== undefined && { IsLocalTime: input.IsLocalTime }),
    ...(input.QuietTime !== undefined && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.StartTime !== undefined && { StartTime: input.StartTime }),
    ...(input.Timezone !== undefined && { Timezone: input.Timezone }),
  };
};

const serializeAws_restJson1SegmentBehaviors = (input: SegmentBehaviors, context: __SerdeContext): any => {
  return {
    ...(input.Recency !== undefined && { Recency: serializeAws_restJson1RecencyDimension(input.Recency, context) }),
  };
};

const serializeAws_restJson1SegmentCondition = (input: SegmentCondition, context: __SerdeContext): any => {
  return {
    ...(input.SegmentId !== undefined && { SegmentId: input.SegmentId }),
  };
};

const serializeAws_restJson1SegmentDemographics = (input: SegmentDemographics, context: __SerdeContext): any => {
  return {
    ...(input.AppVersion !== undefined && {
      AppVersion: serializeAws_restJson1SetDimension(input.AppVersion, context),
    }),
    ...(input.Channel !== undefined && { Channel: serializeAws_restJson1SetDimension(input.Channel, context) }),
    ...(input.DeviceType !== undefined && {
      DeviceType: serializeAws_restJson1SetDimension(input.DeviceType, context),
    }),
    ...(input.Make !== undefined && { Make: serializeAws_restJson1SetDimension(input.Make, context) }),
    ...(input.Model !== undefined && { Model: serializeAws_restJson1SetDimension(input.Model, context) }),
    ...(input.Platform !== undefined && { Platform: serializeAws_restJson1SetDimension(input.Platform, context) }),
  };
};

const serializeAws_restJson1SegmentDimensions = (input: SegmentDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOfAttributeDimension(input.Attributes, context),
    }),
    ...(input.Behavior !== undefined && { Behavior: serializeAws_restJson1SegmentBehaviors(input.Behavior, context) }),
    ...(input.Demographic !== undefined && {
      Demographic: serializeAws_restJson1SegmentDemographics(input.Demographic, context),
    }),
    ...(input.Location !== undefined && { Location: serializeAws_restJson1SegmentLocation(input.Location, context) }),
    ...(input.Metrics !== undefined && { Metrics: serializeAws_restJson1MapOfMetricDimension(input.Metrics, context) }),
    ...(input.UserAttributes !== undefined && {
      UserAttributes: serializeAws_restJson1MapOfAttributeDimension(input.UserAttributes, context),
    }),
  };
};

const serializeAws_restJson1SegmentGroup = (input: SegmentGroup, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_restJson1ListOfSegmentDimensions(input.Dimensions, context),
    }),
    ...(input.SourceSegments !== undefined && {
      SourceSegments: serializeAws_restJson1ListOfSegmentReference(input.SourceSegments, context),
    }),
    ...(input.SourceType !== undefined && { SourceType: input.SourceType }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_restJson1SegmentGroupList = (input: SegmentGroupList, context: __SerdeContext): any => {
  return {
    ...(input.Groups !== undefined && { Groups: serializeAws_restJson1ListOfSegmentGroup(input.Groups, context) }),
    ...(input.Include !== undefined && { Include: input.Include }),
  };
};

const serializeAws_restJson1SegmentLocation = (input: SegmentLocation, context: __SerdeContext): any => {
  return {
    ...(input.Country !== undefined && { Country: serializeAws_restJson1SetDimension(input.Country, context) }),
    ...(input.GPSPoint !== undefined && { GPSPoint: serializeAws_restJson1GPSPointDimension(input.GPSPoint, context) }),
  };
};

const serializeAws_restJson1SegmentReference = (input: SegmentReference, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1SendUsersMessageRequest = (
  input: SendUsersMessageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Context !== undefined && { Context: serializeAws_restJson1MapOf__string(input.Context, context) }),
    ...(input.MessageConfiguration !== undefined && {
      MessageConfiguration: serializeAws_restJson1DirectMessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.TemplateConfiguration !== undefined && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TraceId !== undefined && { TraceId: input.TraceId }),
    ...(input.Users !== undefined && {
      Users: serializeAws_restJson1MapOfEndpointSendConfiguration(input.Users, context),
    }),
  };
};

const serializeAws_restJson1Session = (input: Session, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && { Duration: input.Duration }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.StartTimestamp !== undefined && { StartTimestamp: input.StartTimestamp }),
    ...(input.StopTimestamp !== undefined && { StopTimestamp: input.StopTimestamp }),
  };
};

const serializeAws_restJson1SetDimension = (input: SetDimension, context: __SerdeContext): any => {
  return {
    ...(input.DimensionType !== undefined && { DimensionType: input.DimensionType }),
    ...(input.Values !== undefined && { Values: serializeAws_restJson1ListOf__string(input.Values, context) }),
  };
};

const serializeAws_restJson1SimpleCondition = (input: SimpleCondition, context: __SerdeContext): any => {
  return {
    ...(input.EventCondition !== undefined && {
      EventCondition: serializeAws_restJson1EventCondition(input.EventCondition, context),
    }),
    ...(input.SegmentCondition !== undefined && {
      SegmentCondition: serializeAws_restJson1SegmentCondition(input.SegmentCondition, context),
    }),
    ...(input.SegmentDimensions !== undefined && {
      segmentDimensions: serializeAws_restJson1SegmentDimensions(input.SegmentDimensions, context),
    }),
  };
};

const serializeAws_restJson1SimpleEmail = (input: SimpleEmail, context: __SerdeContext): any => {
  return {
    ...(input.HtmlPart !== undefined && { HtmlPart: serializeAws_restJson1SimpleEmailPart(input.HtmlPart, context) }),
    ...(input.Subject !== undefined && { Subject: serializeAws_restJson1SimpleEmailPart(input.Subject, context) }),
    ...(input.TextPart !== undefined && { TextPart: serializeAws_restJson1SimpleEmailPart(input.TextPart, context) }),
  };
};

const serializeAws_restJson1SimpleEmailPart = (input: SimpleEmailPart, context: __SerdeContext): any => {
  return {
    ...(input.Charset !== undefined && { Charset: input.Charset }),
    ...(input.Data !== undefined && { Data: input.Data }),
  };
};

const serializeAws_restJson1SMSChannelRequest = (input: SMSChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.SenderId !== undefined && { SenderId: input.SenderId }),
    ...(input.ShortCode !== undefined && { ShortCode: input.ShortCode }),
  };
};

const serializeAws_restJson1SMSMessage = (input: SMSMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.Keyword !== undefined && { Keyword: input.Keyword }),
    ...(input.MediaUrl !== undefined && { MediaUrl: input.MediaUrl }),
    ...(input.MessageType !== undefined && { MessageType: input.MessageType }),
    ...(input.OriginationNumber !== undefined && { OriginationNumber: input.OriginationNumber }),
    ...(input.SenderId !== undefined && { SenderId: input.SenderId }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
  };
};

const serializeAws_restJson1SMSMessageActivity = (input: SMSMessageActivity, context: __SerdeContext): any => {
  return {
    ...(input.MessageConfig !== undefined && {
      MessageConfig: serializeAws_restJson1JourneySMSMessage(input.MessageConfig, context),
    }),
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.TemplateName !== undefined && { TemplateName: input.TemplateName }),
    ...(input.TemplateVersion !== undefined && { TemplateVersion: input.TemplateVersion }),
  };
};

const serializeAws_restJson1SMSTemplateRequest = (input: SMSTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.DefaultSubstitutions !== undefined && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.RecommenderId !== undefined && { RecommenderId: input.RecommenderId }),
    ...(input.TemplateDescription !== undefined && { TemplateDescription: input.TemplateDescription }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1StartCondition = (input: StartCondition, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.SegmentStartCondition !== undefined && {
      SegmentStartCondition: serializeAws_restJson1SegmentCondition(input.SegmentStartCondition, context),
    }),
  };
};

const serializeAws_restJson1TagsModel = (input: TagsModel, context: __SerdeContext): any => {
  return {
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1Template = (input: Template, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateActiveVersionRequest = (
  input: TemplateActiveVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_restJson1TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EmailTemplate !== undefined && {
      EmailTemplate: serializeAws_restJson1Template(input.EmailTemplate, context),
    }),
    ...(input.PushTemplate !== undefined && {
      PushTemplate: serializeAws_restJson1Template(input.PushTemplate, context),
    }),
    ...(input.SMSTemplate !== undefined && { SMSTemplate: serializeAws_restJson1Template(input.SMSTemplate, context) }),
    ...(input.VoiceTemplate !== undefined && {
      VoiceTemplate: serializeAws_restJson1Template(input.VoiceTemplate, context),
    }),
  };
};

const serializeAws_restJson1UpdateAttributesRequest = (
  input: UpdateAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blacklist !== undefined && { Blacklist: serializeAws_restJson1ListOf__string(input.Blacklist, context) }),
  };
};

const serializeAws_restJson1UpdateRecommenderConfigurationShape = (
  input: UpdateRecommenderConfigurationShape,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1MapOf__string(input.Attributes, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RecommendationProviderIdType !== undefined && {
      RecommendationProviderIdType: input.RecommendationProviderIdType,
    }),
    ...(input.RecommendationProviderRoleArn !== undefined && {
      RecommendationProviderRoleArn: input.RecommendationProviderRoleArn,
    }),
    ...(input.RecommendationProviderUri !== undefined && {
      RecommendationProviderUri: input.RecommendationProviderUri,
    }),
    ...(input.RecommendationTransformerUri !== undefined && {
      RecommendationTransformerUri: input.RecommendationTransformerUri,
    }),
    ...(input.RecommendationsDisplayName !== undefined && {
      RecommendationsDisplayName: input.RecommendationsDisplayName,
    }),
    ...(input.RecommendationsPerMessage !== undefined && {
      RecommendationsPerMessage: input.RecommendationsPerMessage,
    }),
  };
};

const serializeAws_restJson1VoiceChannelRequest = (input: VoiceChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1VoiceMessage = (input: VoiceMessage, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.OriginationNumber !== undefined && { OriginationNumber: input.OriginationNumber }),
    ...(input.Substitutions !== undefined && {
      Substitutions: serializeAws_restJson1MapOfListOf__string(input.Substitutions, context),
    }),
    ...(input.VoiceId !== undefined && { VoiceId: input.VoiceId }),
  };
};

const serializeAws_restJson1VoiceTemplateRequest = (input: VoiceTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.Body !== undefined && { Body: input.Body }),
    ...(input.DefaultSubstitutions !== undefined && { DefaultSubstitutions: input.DefaultSubstitutions }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.TemplateDescription !== undefined && { TemplateDescription: input.TemplateDescription }),
    ...(input.VoiceId !== undefined && { VoiceId: input.VoiceId }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WaitActivity = (input: WaitActivity, context: __SerdeContext): any => {
  return {
    ...(input.NextActivity !== undefined && { NextActivity: input.NextActivity }),
    ...(input.WaitTime !== undefined && { WaitTime: serializeAws_restJson1WaitTime(input.WaitTime, context) }),
  };
};

const serializeAws_restJson1WaitTime = (input: WaitTime, context: __SerdeContext): any => {
  return {
    ...(input.WaitFor !== undefined && { WaitFor: input.WaitFor }),
    ...(input.WaitUntil !== undefined && { WaitUntil: input.WaitUntil }),
  };
};

const serializeAws_restJson1WriteApplicationSettingsRequest = (
  input: WriteApplicationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CampaignHook !== undefined && {
      CampaignHook: serializeAws_restJson1CampaignHook(input.CampaignHook, context),
    }),
    ...(input.CloudWatchMetricsEnabled !== undefined && { CloudWatchMetricsEnabled: input.CloudWatchMetricsEnabled }),
    ...(input.Limits !== undefined && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.QuietTime !== undefined && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
  };
};

const serializeAws_restJson1WriteCampaignRequest = (input: WriteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalTreatments !== undefined && {
      AdditionalTreatments: serializeAws_restJson1ListOfWriteTreatmentResource(input.AdditionalTreatments, context),
    }),
    ...(input.CustomDeliveryConfiguration !== undefined && {
      CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
        input.CustomDeliveryConfiguration,
        context
      ),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.HoldoutPercent !== undefined && { HoldoutPercent: input.HoldoutPercent }),
    ...(input.Hook !== undefined && { Hook: serializeAws_restJson1CampaignHook(input.Hook, context) }),
    ...(input.IsPaused !== undefined && { IsPaused: input.IsPaused }),
    ...(input.Limits !== undefined && { Limits: serializeAws_restJson1CampaignLimits(input.Limits, context) }),
    ...(input.MessageConfiguration !== undefined && {
      MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Schedule !== undefined && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SegmentId !== undefined && { SegmentId: input.SegmentId }),
    ...(input.SegmentVersion !== undefined && { SegmentVersion: input.SegmentVersion }),
    ...(input.TemplateConfiguration !== undefined && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription !== undefined && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName !== undefined && { TreatmentName: input.TreatmentName }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteEventStream = (input: WriteEventStream, context: __SerdeContext): any => {
  return {
    ...(input.DestinationStreamArn !== undefined && { DestinationStreamArn: input.DestinationStreamArn }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1WriteJourneyRequest = (input: WriteJourneyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Activities !== undefined && {
      Activities: serializeAws_restJson1MapOfActivity(input.Activities, context),
    }),
    ...(input.CreationDate !== undefined && { CreationDate: input.CreationDate }),
    ...(input.LastModifiedDate !== undefined && { LastModifiedDate: input.LastModifiedDate }),
    ...(input.Limits !== undefined && { Limits: serializeAws_restJson1JourneyLimits(input.Limits, context) }),
    ...(input.LocalTime !== undefined && { LocalTime: input.LocalTime }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.QuietTime !== undefined && { QuietTime: serializeAws_restJson1QuietTime(input.QuietTime, context) }),
    ...(input.RefreshFrequency !== undefined && { RefreshFrequency: input.RefreshFrequency }),
    ...(input.Schedule !== undefined && { Schedule: serializeAws_restJson1JourneySchedule(input.Schedule, context) }),
    ...(input.StartActivity !== undefined && { StartActivity: input.StartActivity }),
    ...(input.StartCondition !== undefined && {
      StartCondition: serializeAws_restJson1StartCondition(input.StartCondition, context),
    }),
    ...(input.State !== undefined && { State: input.State }),
  };
};

const serializeAws_restJson1WriteSegmentRequest = (input: WriteSegmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions !== undefined && {
      Dimensions: serializeAws_restJson1SegmentDimensions(input.Dimensions, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SegmentGroups !== undefined && {
      SegmentGroups: serializeAws_restJson1SegmentGroupList(input.SegmentGroups, context),
    }),
    ...(input.tags !== undefined && { tags: serializeAws_restJson1MapOf__string(input.tags, context) }),
  };
};

const serializeAws_restJson1WriteTreatmentResource = (input: WriteTreatmentResource, context: __SerdeContext): any => {
  return {
    ...(input.CustomDeliveryConfiguration !== undefined && {
      CustomDeliveryConfiguration: serializeAws_restJson1CustomDeliveryConfiguration(
        input.CustomDeliveryConfiguration,
        context
      ),
    }),
    ...(input.MessageConfiguration !== undefined && {
      MessageConfiguration: serializeAws_restJson1MessageConfiguration(input.MessageConfiguration, context),
    }),
    ...(input.Schedule !== undefined && { Schedule: serializeAws_restJson1Schedule(input.Schedule, context) }),
    ...(input.SizePercent !== undefined && { SizePercent: input.SizePercent }),
    ...(input.TemplateConfiguration !== undefined && {
      TemplateConfiguration: serializeAws_restJson1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.TreatmentDescription !== undefined && { TreatmentDescription: input.TreatmentDescription }),
    ...(input.TreatmentName !== undefined && { TreatmentName: input.TreatmentName }),
  };
};

const deserializeAws_restJson1ActivitiesResponse = (output: any, context: __SerdeContext): ActivitiesResponse => {
  return {
    __type: "ActivitiesResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfActivityResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1Activity = (output: any, context: __SerdeContext): Activity => {
  return {
    __type: "Activity",
    CUSTOM:
      output.CUSTOM !== undefined && output.CUSTOM !== null
        ? deserializeAws_restJson1CustomMessageActivity(output.CUSTOM, context)
        : undefined,
    ConditionalSplit:
      output.ConditionalSplit !== undefined && output.ConditionalSplit !== null
        ? deserializeAws_restJson1ConditionalSplitActivity(output.ConditionalSplit, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EMAIL:
      output.EMAIL !== undefined && output.EMAIL !== null
        ? deserializeAws_restJson1EmailMessageActivity(output.EMAIL, context)
        : undefined,
    Holdout:
      output.Holdout !== undefined && output.Holdout !== null
        ? deserializeAws_restJson1HoldoutActivity(output.Holdout, context)
        : undefined,
    MultiCondition:
      output.MultiCondition !== undefined && output.MultiCondition !== null
        ? deserializeAws_restJson1MultiConditionalSplitActivity(output.MultiCondition, context)
        : undefined,
    PUSH:
      output.PUSH !== undefined && output.PUSH !== null
        ? deserializeAws_restJson1PushMessageActivity(output.PUSH, context)
        : undefined,
    RandomSplit:
      output.RandomSplit !== undefined && output.RandomSplit !== null
        ? deserializeAws_restJson1RandomSplitActivity(output.RandomSplit, context)
        : undefined,
    SMS:
      output.SMS !== undefined && output.SMS !== null
        ? deserializeAws_restJson1SMSMessageActivity(output.SMS, context)
        : undefined,
    Wait:
      output.Wait !== undefined && output.Wait !== null
        ? deserializeAws_restJson1WaitActivity(output.Wait, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActivityResponse = (output: any, context: __SerdeContext): ActivityResponse => {
  return {
    __type: "ActivityResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CampaignId: output.CampaignId !== undefined && output.CampaignId !== null ? output.CampaignId : undefined,
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
    ScheduledStart:
      output.ScheduledStart !== undefined && output.ScheduledStart !== null ? output.ScheduledStart : undefined,
    Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    SuccessfulEndpointCount:
      output.SuccessfulEndpointCount !== undefined && output.SuccessfulEndpointCount !== null
        ? output.SuccessfulEndpointCount
        : undefined,
    TimezonesCompletedCount:
      output.TimezonesCompletedCount !== undefined && output.TimezonesCompletedCount !== null
        ? output.TimezonesCompletedCount
        : undefined,
    TimezonesTotalCount:
      output.TimezonesTotalCount !== undefined && output.TimezonesTotalCount !== null
        ? output.TimezonesTotalCount
        : undefined,
    TotalEndpointCount:
      output.TotalEndpointCount !== undefined && output.TotalEndpointCount !== null
        ? output.TotalEndpointCount
        : undefined,
    TreatmentId: output.TreatmentId !== undefined && output.TreatmentId !== null ? output.TreatmentId : undefined,
  } as any;
};

const deserializeAws_restJson1ADMChannelResponse = (output: any, context: __SerdeContext): ADMChannelResponse => {
  return {
    __type: "ADMChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1AndroidPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): AndroidPushNotificationTemplate => {
  return {
    __type: "AndroidPushNotificationTemplate",
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    ImageIconUrl: output.ImageIconUrl !== undefined && output.ImageIconUrl !== null ? output.ImageIconUrl : undefined,
    ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
    RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
    SmallImageIconUrl:
      output.SmallImageIconUrl !== undefined && output.SmallImageIconUrl !== null
        ? output.SmallImageIconUrl
        : undefined,
    Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1APNSChannelResponse = (output: any, context: __SerdeContext): APNSChannelResponse => {
  return {
    __type: "APNSChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultAuthenticationMethod:
      output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
        ? output.DefaultAuthenticationMethod
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1APNSPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): APNSPushNotificationTemplate => {
  return {
    __type: "APNSPushNotificationTemplate",
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    MediaUrl: output.MediaUrl !== undefined && output.MediaUrl !== null ? output.MediaUrl : undefined,
    RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
    Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1APNSSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSSandboxChannelResponse => {
  return {
    __type: "APNSSandboxChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultAuthenticationMethod:
      output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
        ? output.DefaultAuthenticationMethod
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1APNSVoipChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipChannelResponse => {
  return {
    __type: "APNSVoipChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultAuthenticationMethod:
      output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
        ? output.DefaultAuthenticationMethod
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1APNSVoipSandboxChannelResponse = (
  output: any,
  context: __SerdeContext
): APNSVoipSandboxChannelResponse => {
  return {
    __type: "APNSVoipSandboxChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultAuthenticationMethod:
      output.DefaultAuthenticationMethod !== undefined && output.DefaultAuthenticationMethod !== null
        ? output.DefaultAuthenticationMethod
        : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    HasTokenKey: output.HasTokenKey !== undefined && output.HasTokenKey !== null ? output.HasTokenKey : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): ApplicationDateRangeKpiResponse => {
  return {
    __type: "ApplicationDateRangeKpiResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationResponse = (output: any, context: __SerdeContext): ApplicationResponse => {
  return {
    __type: "ApplicationResponse",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationSettingsResource = (
  output: any,
  context: __SerdeContext
): ApplicationSettingsResource => {
  return {
    __type: "ApplicationSettingsResource",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CampaignHook:
      output.CampaignHook !== undefined && output.CampaignHook !== null
        ? deserializeAws_restJson1CampaignHook(output.CampaignHook, context)
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
        : undefined,
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationsResponse = (output: any, context: __SerdeContext): ApplicationsResponse => {
  return {
    __type: "ApplicationsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfApplicationResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1AttributeDimension = (output: any, context: __SerdeContext): AttributeDimension => {
  return {
    __type: "AttributeDimension",
    AttributeType:
      output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOf__string(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AttributesResource = (output: any, context: __SerdeContext): AttributesResource => {
  return {
    __type: "AttributesResource",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    AttributeType:
      output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1ListOf__string(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BaiduChannelResponse = (output: any, context: __SerdeContext): BaiduChannelResponse => {
  return {
    __type: "BaiduChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1BaseKpiResult = (output: any, context: __SerdeContext): BaseKpiResult => {
  return {
    __type: "BaseKpiResult",
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_restJson1ListOfResultRow(output.Rows, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignCustomMessage = (output: any, context: __SerdeContext): CampaignCustomMessage => {
  return {
    __type: "CampaignCustomMessage",
    Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): CampaignDateRangeKpiResponse => {
  return {
    __type: "CampaignDateRangeKpiResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CampaignId: output.CampaignId !== undefined && output.CampaignId !== null ? output.CampaignId : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignEmailMessage = (output: any, context: __SerdeContext): CampaignEmailMessage => {
  return {
    __type: "CampaignEmailMessage",
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
    HtmlBody: output.HtmlBody !== undefined && output.HtmlBody !== null ? output.HtmlBody : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignEventFilter = (output: any, context: __SerdeContext): CampaignEventFilter => {
  return {
    __type: "CampaignEventFilter",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
        : undefined,
    FilterType: output.FilterType !== undefined && output.FilterType !== null ? output.FilterType : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignHook = (output: any, context: __SerdeContext): CampaignHook => {
  return {
    __type: "CampaignHook",
    LambdaFunctionName:
      output.LambdaFunctionName !== undefined && output.LambdaFunctionName !== null
        ? output.LambdaFunctionName
        : undefined,
    Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    WebUrl: output.WebUrl !== undefined && output.WebUrl !== null ? output.WebUrl : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignLimits = (output: any, context: __SerdeContext): CampaignLimits => {
  return {
    __type: "CampaignLimits",
    Daily: output.Daily !== undefined && output.Daily !== null ? output.Daily : undefined,
    MaximumDuration:
      output.MaximumDuration !== undefined && output.MaximumDuration !== null ? output.MaximumDuration : undefined,
    MessagesPerSecond:
      output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
        ? output.MessagesPerSecond
        : undefined,
    Total: output.Total !== undefined && output.Total !== null ? output.Total : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignResponse = (output: any, context: __SerdeContext): CampaignResponse => {
  return {
    __type: "CampaignResponse",
    AdditionalTreatments:
      output.AdditionalTreatments !== undefined && output.AdditionalTreatments !== null
        ? deserializeAws_restJson1ListOfTreatmentResource(output.AdditionalTreatments, context)
        : undefined,
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    DefaultState:
      output.DefaultState !== undefined && output.DefaultState !== null
        ? deserializeAws_restJson1CampaignState(output.DefaultState, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    HoldoutPercent:
      output.HoldoutPercent !== undefined && output.HoldoutPercent !== null ? output.HoldoutPercent : undefined,
    Hook:
      output.Hook !== undefined && output.Hook !== null
        ? deserializeAws_restJson1CampaignHook(output.Hook, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsPaused: output.IsPaused !== undefined && output.IsPaused !== null ? output.IsPaused : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1CampaignLimits(output.Limits, context)
        : undefined,
    MessageConfiguration:
      output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1Schedule(output.Schedule, context)
        : undefined,
    SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
    SegmentVersion:
      output.SegmentVersion !== undefined && output.SegmentVersion !== null ? output.SegmentVersion : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1CampaignState(output.State, context)
        : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription:
      output.TreatmentDescription !== undefined && output.TreatmentDescription !== null
        ? output.TreatmentDescription
        : undefined,
    TreatmentName:
      output.TreatmentName !== undefined && output.TreatmentName !== null ? output.TreatmentName : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignSmsMessage = (output: any, context: __SerdeContext): CampaignSmsMessage => {
  return {
    __type: "CampaignSmsMessage",
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
    SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignsResponse = (output: any, context: __SerdeContext): CampaignsResponse => {
  return {
    __type: "CampaignsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfCampaignResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1CampaignState = (output: any, context: __SerdeContext): CampaignState => {
  return {
    __type: "CampaignState",
    CampaignStatus:
      output.CampaignStatus !== undefined && output.CampaignStatus !== null ? output.CampaignStatus : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelResponse = (output: any, context: __SerdeContext): ChannelResponse => {
  return {
    __type: "ChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1ChannelsResponse = (output: any, context: __SerdeContext): ChannelsResponse => {
  return {
    __type: "ChannelsResponse",
    Channels:
      output.Channels !== undefined && output.Channels !== null
        ? deserializeAws_restJson1MapOfChannelResponse(output.Channels, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    __type: "Condition",
    Conditions:
      output.Conditions !== undefined && output.Conditions !== null
        ? deserializeAws_restJson1ListOfSimpleCondition(output.Conditions, context)
        : undefined,
    Operator: output.Operator !== undefined && output.Operator !== null ? output.Operator : undefined,
  } as any;
};

const deserializeAws_restJson1ConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): ConditionalSplitActivity => {
  return {
    __type: "ConditionalSplitActivity",
    Condition:
      output.Condition !== undefined && output.Condition !== null
        ? deserializeAws_restJson1Condition(output.Condition, context)
        : undefined,
    EvaluationWaitTime:
      output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
    FalseActivity:
      output.FalseActivity !== undefined && output.FalseActivity !== null ? output.FalseActivity : undefined,
    TrueActivity: output.TrueActivity !== undefined && output.TrueActivity !== null ? output.TrueActivity : undefined,
  } as any;
};

const deserializeAws_restJson1CreateTemplateMessageBody = (
  output: any,
  context: __SerdeContext
): CreateTemplateMessageBody => {
  return {
    __type: "CreateTemplateMessageBody",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDeliveryConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDeliveryConfiguration => {
  return {
    __type: "CustomDeliveryConfiguration",
    DeliveryUri: output.DeliveryUri !== undefined && output.DeliveryUri !== null ? output.DeliveryUri : undefined,
    EndpointTypes:
      output.EndpointTypes !== undefined && output.EndpointTypes !== null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomMessageActivity = (output: any, context: __SerdeContext): CustomMessageActivity => {
  return {
    __type: "CustomMessageActivity",
    DeliveryUri: output.DeliveryUri !== undefined && output.DeliveryUri !== null ? output.DeliveryUri : undefined,
    EndpointTypes:
      output.EndpointTypes !== undefined && output.EndpointTypes !== null
        ? deserializeAws_restJson1ListOf__EndpointTypesElement(output.EndpointTypes, context)
        : undefined,
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyCustomMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateVersion:
      output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
  } as any;
};

const deserializeAws_restJson1DefaultPushNotificationTemplate = (
  output: any,
  context: __SerdeContext
): DefaultPushNotificationTemplate => {
  return {
    __type: "DefaultPushNotificationTemplate",
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    Sound: output.Sound !== undefined && output.Sound !== null ? output.Sound : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1EmailChannelResponse = (output: any, context: __SerdeContext): EmailChannelResponse => {
  return {
    __type: "EmailChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    ConfigurationSet:
      output.ConfigurationSet !== undefined && output.ConfigurationSet !== null ? output.ConfigurationSet : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Identity: output.Identity !== undefined && output.Identity !== null ? output.Identity : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    MessagesPerSecond:
      output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
        ? output.MessagesPerSecond
        : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1EmailMessageActivity = (output: any, context: __SerdeContext): EmailMessageActivity => {
  return {
    __type: "EmailMessageActivity",
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyEmailMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateVersion:
      output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
  } as any;
};

const deserializeAws_restJson1EmailTemplateResponse = (output: any, context: __SerdeContext): EmailTemplateResponse => {
  return {
    __type: "EmailTemplateResponse",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    HtmlPart: output.HtmlPart !== undefined && output.HtmlPart !== null ? output.HtmlPart : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    RecommenderId:
      output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
    Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    TextPart: output.TextPart !== undefined && output.TextPart !== null ? output.TextPart : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointDemographic = (output: any, context: __SerdeContext): EndpointDemographic => {
  return {
    __type: "EndpointDemographic",
    AppVersion: output.AppVersion !== undefined && output.AppVersion !== null ? output.AppVersion : undefined,
    Locale: output.Locale !== undefined && output.Locale !== null ? output.Locale : undefined,
    Make: output.Make !== undefined && output.Make !== null ? output.Make : undefined,
    Model: output.Model !== undefined && output.Model !== null ? output.Model : undefined,
    ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    PlatformVersion:
      output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointItemResponse = (output: any, context: __SerdeContext): EndpointItemResponse => {
  return {
    __type: "EndpointItemResponse",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointLocation = (output: any, context: __SerdeContext): EndpointLocation => {
  return {
    __type: "EndpointLocation",
    City: output.City !== undefined && output.City !== null ? output.City : undefined,
    Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
    Latitude: output.Latitude !== undefined && output.Latitude !== null ? output.Latitude : undefined,
    Longitude: output.Longitude !== undefined && output.Longitude !== null ? output.Longitude : undefined,
    PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointMessageResult = (output: any, context: __SerdeContext): EndpointMessageResult => {
  return {
    __type: "EndpointMessageResult",
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    DeliveryStatus:
      output.DeliveryStatus !== undefined && output.DeliveryStatus !== null ? output.DeliveryStatus : undefined,
    MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    UpdatedToken: output.UpdatedToken !== undefined && output.UpdatedToken !== null ? output.UpdatedToken : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointResponse = (output: any, context: __SerdeContext): EndpointResponse => {
  return {
    __type: "EndpointResponse",
    Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfListOf__string(output.Attributes, context)
        : undefined,
    ChannelType: output.ChannelType !== undefined && output.ChannelType !== null ? output.ChannelType : undefined,
    CohortId: output.CohortId !== undefined && output.CohortId !== null ? output.CohortId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Demographic:
      output.Demographic !== undefined && output.Demographic !== null
        ? deserializeAws_restJson1EndpointDemographic(output.Demographic, context)
        : undefined,
    EffectiveDate:
      output.EffectiveDate !== undefined && output.EffectiveDate !== null ? output.EffectiveDate : undefined,
    EndpointStatus:
      output.EndpointStatus !== undefined && output.EndpointStatus !== null ? output.EndpointStatus : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1EndpointLocation(output.Location, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__double(output.Metrics, context)
        : undefined,
    OptOut: output.OptOut !== undefined && output.OptOut !== null ? output.OptOut : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    User:
      output.User !== undefined && output.User !== null
        ? deserializeAws_restJson1EndpointUser(output.User, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointsResponse = (output: any, context: __SerdeContext): EndpointsResponse => {
  return {
    __type: "EndpointsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfEndpointResponse(output.Item, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointUser = (output: any, context: __SerdeContext): EndpointUser => {
  return {
    __type: "EndpointUser",
    UserAttributes:
      output.UserAttributes !== undefined && output.UserAttributes !== null
        ? deserializeAws_restJson1MapOfListOf__string(output.UserAttributes, context)
        : undefined,
    UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
  } as any;
};

const deserializeAws_restJson1EventCondition = (output: any, context: __SerdeContext): EventCondition => {
  return {
    __type: "EventCondition",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1EventDimensions(output.Dimensions, context)
        : undefined,
    MessageActivity:
      output.MessageActivity !== undefined && output.MessageActivity !== null ? output.MessageActivity : undefined,
  } as any;
};

const deserializeAws_restJson1EventDimensions = (output: any, context: __SerdeContext): EventDimensions => {
  return {
    __type: "EventDimensions",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    EventType:
      output.EventType !== undefined && output.EventType !== null
        ? deserializeAws_restJson1SetDimension(output.EventType, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventItemResponse = (output: any, context: __SerdeContext): EventItemResponse => {
  return {
    __type: "EventItemResponse",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
  } as any;
};

const deserializeAws_restJson1EventsResponse = (output: any, context: __SerdeContext): EventsResponse => {
  return {
    __type: "EventsResponse",
    Results:
      output.Results !== undefined && output.Results !== null
        ? deserializeAws_restJson1MapOfItemResponse(output.Results, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventStream = (output: any, context: __SerdeContext): EventStream => {
  return {
    __type: "EventStream",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    DestinationStreamArn:
      output.DestinationStreamArn !== undefined && output.DestinationStreamArn !== null
        ? output.DestinationStreamArn
        : undefined,
    ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    LastUpdatedBy:
      output.LastUpdatedBy !== undefined && output.LastUpdatedBy !== null ? output.LastUpdatedBy : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
  } as any;
};

const deserializeAws_restJson1ExportJobResource = (output: any, context: __SerdeContext): ExportJobResource => {
  return {
    __type: "ExportJobResource",
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    S3UrlPrefix: output.S3UrlPrefix !== undefined && output.S3UrlPrefix !== null ? output.S3UrlPrefix : undefined,
    SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
    SegmentVersion:
      output.SegmentVersion !== undefined && output.SegmentVersion !== null ? output.SegmentVersion : undefined,
  } as any;
};

const deserializeAws_restJson1ExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse => {
  return {
    __type: "ExportJobResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CompletedPieces:
      output.CompletedPieces !== undefined && output.CompletedPieces !== null ? output.CompletedPieces : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_restJson1ExportJobResource(output.Definition, context)
        : undefined,
    FailedPieces: output.FailedPieces !== undefined && output.FailedPieces !== null ? output.FailedPieces : undefined,
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_restJson1ListOf__string(output.Failures, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    TotalFailures:
      output.TotalFailures !== undefined && output.TotalFailures !== null ? output.TotalFailures : undefined,
    TotalPieces: output.TotalPieces !== undefined && output.TotalPieces !== null ? output.TotalPieces : undefined,
    TotalProcessed:
      output.TotalProcessed !== undefined && output.TotalProcessed !== null ? output.TotalProcessed : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ExportJobsResponse = (output: any, context: __SerdeContext): ExportJobsResponse => {
  return {
    __type: "ExportJobsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfExportJobResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1GCMChannelResponse = (output: any, context: __SerdeContext): GCMChannelResponse => {
  return {
    __type: "GCMChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1GPSCoordinates = (output: any, context: __SerdeContext): GPSCoordinates => {
  return {
    __type: "GPSCoordinates",
    Latitude: output.Latitude !== undefined && output.Latitude !== null ? output.Latitude : undefined,
    Longitude: output.Longitude !== undefined && output.Longitude !== null ? output.Longitude : undefined,
  } as any;
};

const deserializeAws_restJson1GPSPointDimension = (output: any, context: __SerdeContext): GPSPointDimension => {
  return {
    __type: "GPSPointDimension",
    Coordinates:
      output.Coordinates !== undefined && output.Coordinates !== null
        ? deserializeAws_restJson1GPSCoordinates(output.Coordinates, context)
        : undefined,
    RangeInKilometers:
      output.RangeInKilometers !== undefined && output.RangeInKilometers !== null
        ? output.RangeInKilometers
        : undefined,
  } as any;
};

const deserializeAws_restJson1HoldoutActivity = (output: any, context: __SerdeContext): HoldoutActivity => {
  return {
    __type: "HoldoutActivity",
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    Percentage: output.Percentage !== undefined && output.Percentage !== null ? output.Percentage : undefined,
  } as any;
};

const deserializeAws_restJson1ImportJobResource = (output: any, context: __SerdeContext): ImportJobResource => {
  return {
    __type: "ImportJobResource",
    DefineSegment:
      output.DefineSegment !== undefined && output.DefineSegment !== null ? output.DefineSegment : undefined,
    ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    RegisterEndpoints:
      output.RegisterEndpoints !== undefined && output.RegisterEndpoints !== null
        ? output.RegisterEndpoints
        : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    S3Url: output.S3Url !== undefined && output.S3Url !== null ? output.S3Url : undefined,
    SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
    SegmentName: output.SegmentName !== undefined && output.SegmentName !== null ? output.SegmentName : undefined,
  } as any;
};

const deserializeAws_restJson1ImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse => {
  return {
    __type: "ImportJobResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CompletedPieces:
      output.CompletedPieces !== undefined && output.CompletedPieces !== null ? output.CompletedPieces : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Definition:
      output.Definition !== undefined && output.Definition !== null
        ? deserializeAws_restJson1ImportJobResource(output.Definition, context)
        : undefined,
    FailedPieces: output.FailedPieces !== undefined && output.FailedPieces !== null ? output.FailedPieces : undefined,
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_restJson1ListOf__string(output.Failures, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    TotalFailures:
      output.TotalFailures !== undefined && output.TotalFailures !== null ? output.TotalFailures : undefined,
    TotalPieces: output.TotalPieces !== undefined && output.TotalPieces !== null ? output.TotalPieces : undefined,
    TotalProcessed:
      output.TotalProcessed !== undefined && output.TotalProcessed !== null ? output.TotalProcessed : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ImportJobsResponse = (output: any, context: __SerdeContext): ImportJobsResponse => {
  return {
    __type: "ImportJobsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfImportJobResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1ItemResponse = (output: any, context: __SerdeContext): ItemResponse => {
  return {
    __type: "ItemResponse",
    EndpointItemResponse:
      output.EndpointItemResponse !== undefined && output.EndpointItemResponse !== null
        ? deserializeAws_restJson1EndpointItemResponse(output.EndpointItemResponse, context)
        : undefined,
    EventsItemResponse:
      output.EventsItemResponse !== undefined && output.EventsItemResponse !== null
        ? deserializeAws_restJson1MapOfEventItemResponse(output.EventsItemResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyCustomMessage = (output: any, context: __SerdeContext): JourneyCustomMessage => {
  return {
    __type: "JourneyCustomMessage",
    Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyDateRangeKpiResponse = (
  output: any,
  context: __SerdeContext
): JourneyDateRangeKpiResponse => {
  return {
    __type: "JourneyDateRangeKpiResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
    KpiName: output.KpiName !== undefined && output.KpiName !== null ? output.KpiName : undefined,
    KpiResult:
      output.KpiResult !== undefined && output.KpiResult !== null
        ? deserializeAws_restJson1BaseKpiResult(output.KpiResult, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyEmailMessage = (output: any, context: __SerdeContext): JourneyEmailMessage => {
  return {
    __type: "JourneyEmailMessage",
    FromAddress: output.FromAddress !== undefined && output.FromAddress !== null ? output.FromAddress : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyExecutionActivityMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionActivityMetricsResponse => {
  return {
    __type: "JourneyExecutionActivityMetricsResponse",
    ActivityType: output.ActivityType !== undefined && output.ActivityType !== null ? output.ActivityType : undefined,
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    JourneyActivityId:
      output.JourneyActivityId !== undefined && output.JourneyActivityId !== null
        ? output.JourneyActivityId
        : undefined,
    JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
    LastEvaluatedTime:
      output.LastEvaluatedTime !== undefined && output.LastEvaluatedTime !== null
        ? output.LastEvaluatedTime
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyExecutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): JourneyExecutionMetricsResponse => {
  return {
    __type: "JourneyExecutionMetricsResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    JourneyId: output.JourneyId !== undefined && output.JourneyId !== null ? output.JourneyId : undefined,
    LastEvaluatedTime:
      output.LastEvaluatedTime !== undefined && output.LastEvaluatedTime !== null
        ? output.LastEvaluatedTime
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOf__string(output.Metrics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyLimits = (output: any, context: __SerdeContext): JourneyLimits => {
  return {
    __type: "JourneyLimits",
    DailyCap: output.DailyCap !== undefined && output.DailyCap !== null ? output.DailyCap : undefined,
    EndpointReentryCap:
      output.EndpointReentryCap !== undefined && output.EndpointReentryCap !== null
        ? output.EndpointReentryCap
        : undefined,
    MessagesPerSecond:
      output.MessagesPerSecond !== undefined && output.MessagesPerSecond !== null
        ? output.MessagesPerSecond
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyPushMessage = (output: any, context: __SerdeContext): JourneyPushMessage => {
  return {
    __type: "JourneyPushMessage",
    TimeToLive: output.TimeToLive !== undefined && output.TimeToLive !== null ? output.TimeToLive : undefined,
  } as any;
};

const deserializeAws_restJson1JourneyResponse = (output: any, context: __SerdeContext): JourneyResponse => {
  return {
    __type: "JourneyResponse",
    Activities:
      output.Activities !== undefined && output.Activities !== null
        ? deserializeAws_restJson1MapOfActivity(output.Activities, context)
        : undefined,
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_restJson1JourneyLimits(output.Limits, context)
        : undefined,
    LocalTime: output.LocalTime !== undefined && output.LocalTime !== null ? output.LocalTime : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
    RefreshFrequency:
      output.RefreshFrequency !== undefined && output.RefreshFrequency !== null ? output.RefreshFrequency : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1JourneySchedule(output.Schedule, context)
        : undefined,
    StartActivity:
      output.StartActivity !== undefined && output.StartActivity !== null ? output.StartActivity : undefined,
    StartCondition:
      output.StartCondition !== undefined && output.StartCondition !== null
        ? deserializeAws_restJson1StartCondition(output.StartCondition, context)
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JourneySchedule = (output: any, context: __SerdeContext): JourneySchedule => {
  return {
    __type: "JourneySchedule",
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(output.EndTime) : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? new Date(output.StartTime) : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
  } as any;
};

const deserializeAws_restJson1JourneySMSMessage = (output: any, context: __SerdeContext): JourneySMSMessage => {
  return {
    __type: "JourneySMSMessage",
    MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
    SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
  } as any;
};

const deserializeAws_restJson1JourneysResponse = (output: any, context: __SerdeContext): JourneysResponse => {
  return {
    __type: "JourneysResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfJourneyResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1ListOf__EndpointTypesElement = (
  output: any,
  context: __SerdeContext
): (__EndpointTypesElement | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ListOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ListOfActivityResponse = (output: any, context: __SerdeContext): ActivityResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ActivityResponse(entry, context));
};

const deserializeAws_restJson1ListOfApplicationResponse = (
  output: any,
  context: __SerdeContext
): ApplicationResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ApplicationResponse(entry, context));
};

const deserializeAws_restJson1ListOfCampaignResponse = (output: any, context: __SerdeContext): CampaignResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1CampaignResponse(entry, context));
};

const deserializeAws_restJson1ListOfEndpointResponse = (output: any, context: __SerdeContext): EndpointResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1EndpointResponse(entry, context));
};

const deserializeAws_restJson1ListOfExportJobResponse = (output: any, context: __SerdeContext): ExportJobResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ExportJobResponse(entry, context));
};

const deserializeAws_restJson1ListOfImportJobResponse = (output: any, context: __SerdeContext): ImportJobResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ImportJobResponse(entry, context));
};

const deserializeAws_restJson1ListOfJourneyResponse = (output: any, context: __SerdeContext): JourneyResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1JourneyResponse(entry, context));
};

const deserializeAws_restJson1ListOfMultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1MultiConditionalBranch(entry, context));
};

const deserializeAws_restJson1ListOfRandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RandomSplitEntry(entry, context));
};

const deserializeAws_restJson1ListOfRecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RecommenderConfigurationResponse(entry, context));
};

const deserializeAws_restJson1ListOfResultRow = (output: any, context: __SerdeContext): ResultRow[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ResultRow(entry, context));
};

const deserializeAws_restJson1ListOfResultRowValue = (output: any, context: __SerdeContext): ResultRowValue[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1ResultRowValue(entry, context));
};

const deserializeAws_restJson1ListOfSegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SegmentDimensions(entry, context));
};

const deserializeAws_restJson1ListOfSegmentGroup = (output: any, context: __SerdeContext): SegmentGroup[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SegmentGroup(entry, context));
};

const deserializeAws_restJson1ListOfSegmentReference = (output: any, context: __SerdeContext): SegmentReference[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SegmentReference(entry, context));
};

const deserializeAws_restJson1ListOfSegmentResponse = (output: any, context: __SerdeContext): SegmentResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SegmentResponse(entry, context));
};

const deserializeAws_restJson1ListOfSimpleCondition = (output: any, context: __SerdeContext): SimpleCondition[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1SimpleCondition(entry, context));
};

const deserializeAws_restJson1ListOfTemplateResponse = (output: any, context: __SerdeContext): TemplateResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1TemplateResponse(entry, context));
};

const deserializeAws_restJson1ListOfTemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1TemplateVersionResponse(entry, context));
};

const deserializeAws_restJson1ListOfTreatmentResource = (output: any, context: __SerdeContext): TreatmentResource[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1TreatmentResource(entry, context));
};

const deserializeAws_restJson1ListRecommenderConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListRecommenderConfigurationsResponse => {
  return {
    __type: "ListRecommenderConfigurationsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfRecommenderConfigurationResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1MapOf__double = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1MapOf__integer = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1MapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfActivity = (output: any, context: __SerdeContext): { [key: string]: Activity } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: Activity }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1Activity(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfAttributeDimension = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeDimension } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeDimension }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1AttributeDimension(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfChannelResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: ChannelResponse } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: ChannelResponse }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1ChannelResponse(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: EndpointMessageResult } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: EndpointMessageResult }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1EndpointMessageResult(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfEventItemResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: EventItemResponse } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: EventItemResponse }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1EventItemResponse(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfItemResponse = (
  output: any,
  context: __SerdeContext
): { [key: string]: ItemResponse } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: ItemResponse }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1ItemResponse(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfListOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1ListOf__string(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfMapOfEndpointMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: { [key: string]: EndpointMessageResult } } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: { [key: string]: EndpointMessageResult } }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1MapOfEndpointMessageResult(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfMessageResult = (
  output: any,
  context: __SerdeContext
): { [key: string]: MessageResult } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: MessageResult }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1MessageResult(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1MapOfMetricDimension = (
  output: any,
  context: __SerdeContext
): { [key: string]: MetricDimension } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: MetricDimension }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1MetricDimension(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    __type: "Message",
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    ImageIconUrl: output.ImageIconUrl !== undefined && output.ImageIconUrl !== null ? output.ImageIconUrl : undefined,
    ImageSmallIconUrl:
      output.ImageSmallIconUrl !== undefined && output.ImageSmallIconUrl !== null
        ? output.ImageSmallIconUrl
        : undefined,
    ImageUrl: output.ImageUrl !== undefined && output.ImageUrl !== null ? output.ImageUrl : undefined,
    JsonBody: output.JsonBody !== undefined && output.JsonBody !== null ? output.JsonBody : undefined,
    MediaUrl: output.MediaUrl !== undefined && output.MediaUrl !== null ? output.MediaUrl : undefined,
    RawContent: output.RawContent !== undefined && output.RawContent !== null ? output.RawContent : undefined,
    SilentPush: output.SilentPush !== undefined && output.SilentPush !== null ? output.SilentPush : undefined,
    TimeToLive: output.TimeToLive !== undefined && output.TimeToLive !== null ? output.TimeToLive : undefined,
    Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
  } as any;
};

const deserializeAws_restJson1MessageBody = (output: any, context: __SerdeContext): MessageBody => {
  return {
    __type: "MessageBody",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
  } as any;
};

const deserializeAws_restJson1MessageConfiguration = (output: any, context: __SerdeContext): MessageConfiguration => {
  return {
    __type: "MessageConfiguration",
    ADMMessage:
      output.ADMMessage !== undefined && output.ADMMessage !== null
        ? deserializeAws_restJson1Message(output.ADMMessage, context)
        : undefined,
    APNSMessage:
      output.APNSMessage !== undefined && output.APNSMessage !== null
        ? deserializeAws_restJson1Message(output.APNSMessage, context)
        : undefined,
    BaiduMessage:
      output.BaiduMessage !== undefined && output.BaiduMessage !== null
        ? deserializeAws_restJson1Message(output.BaiduMessage, context)
        : undefined,
    CustomMessage:
      output.CustomMessage !== undefined && output.CustomMessage !== null
        ? deserializeAws_restJson1CampaignCustomMessage(output.CustomMessage, context)
        : undefined,
    DefaultMessage:
      output.DefaultMessage !== undefined && output.DefaultMessage !== null
        ? deserializeAws_restJson1Message(output.DefaultMessage, context)
        : undefined,
    EmailMessage:
      output.EmailMessage !== undefined && output.EmailMessage !== null
        ? deserializeAws_restJson1CampaignEmailMessage(output.EmailMessage, context)
        : undefined,
    GCMMessage:
      output.GCMMessage !== undefined && output.GCMMessage !== null
        ? deserializeAws_restJson1Message(output.GCMMessage, context)
        : undefined,
    SMSMessage:
      output.SMSMessage !== undefined && output.SMSMessage !== null
        ? deserializeAws_restJson1CampaignSmsMessage(output.SMSMessage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResponse = (output: any, context: __SerdeContext): MessageResponse => {
  return {
    __type: "MessageResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    EndpointResult:
      output.EndpointResult !== undefined && output.EndpointResult !== null
        ? deserializeAws_restJson1MapOfEndpointMessageResult(output.EndpointResult, context)
        : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_restJson1MapOfMessageResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageResult = (output: any, context: __SerdeContext): MessageResult => {
  return {
    __type: "MessageResult",
    DeliveryStatus:
      output.DeliveryStatus !== undefined && output.DeliveryStatus !== null ? output.DeliveryStatus : undefined,
    MessageId: output.MessageId !== undefined && output.MessageId !== null ? output.MessageId : undefined,
    StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    UpdatedToken: output.UpdatedToken !== undefined && output.UpdatedToken !== null ? output.UpdatedToken : undefined,
  } as any;
};

const deserializeAws_restJson1MetricDimension = (output: any, context: __SerdeContext): MetricDimension => {
  return {
    __type: "MetricDimension",
    ComparisonOperator:
      output.ComparisonOperator !== undefined && output.ComparisonOperator !== null
        ? output.ComparisonOperator
        : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1MultiConditionalBranch = (
  output: any,
  context: __SerdeContext
): MultiConditionalBranch => {
  return {
    __type: "MultiConditionalBranch",
    Condition:
      output.Condition !== undefined && output.Condition !== null
        ? deserializeAws_restJson1SimpleCondition(output.Condition, context)
        : undefined,
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
  } as any;
};

const deserializeAws_restJson1MultiConditionalSplitActivity = (
  output: any,
  context: __SerdeContext
): MultiConditionalSplitActivity => {
  return {
    __type: "MultiConditionalSplitActivity",
    Branches:
      output.Branches !== undefined && output.Branches !== null
        ? deserializeAws_restJson1ListOfMultiConditionalBranch(output.Branches, context)
        : undefined,
    DefaultActivity:
      output.DefaultActivity !== undefined && output.DefaultActivity !== null ? output.DefaultActivity : undefined,
    EvaluationWaitTime:
      output.EvaluationWaitTime !== undefined && output.EvaluationWaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.EvaluationWaitTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NumberValidateResponse = (
  output: any,
  context: __SerdeContext
): NumberValidateResponse => {
  return {
    __type: "NumberValidateResponse",
    Carrier: output.Carrier !== undefined && output.Carrier !== null ? output.Carrier : undefined,
    City: output.City !== undefined && output.City !== null ? output.City : undefined,
    CleansedPhoneNumberE164:
      output.CleansedPhoneNumberE164 !== undefined && output.CleansedPhoneNumberE164 !== null
        ? output.CleansedPhoneNumberE164
        : undefined,
    CleansedPhoneNumberNational:
      output.CleansedPhoneNumberNational !== undefined && output.CleansedPhoneNumberNational !== null
        ? output.CleansedPhoneNumberNational
        : undefined,
    Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
    CountryCodeIso2:
      output.CountryCodeIso2 !== undefined && output.CountryCodeIso2 !== null ? output.CountryCodeIso2 : undefined,
    CountryCodeNumeric:
      output.CountryCodeNumeric !== undefined && output.CountryCodeNumeric !== null
        ? output.CountryCodeNumeric
        : undefined,
    County: output.County !== undefined && output.County !== null ? output.County : undefined,
    OriginalCountryCodeIso2:
      output.OriginalCountryCodeIso2 !== undefined && output.OriginalCountryCodeIso2 !== null
        ? output.OriginalCountryCodeIso2
        : undefined,
    OriginalPhoneNumber:
      output.OriginalPhoneNumber !== undefined && output.OriginalPhoneNumber !== null
        ? output.OriginalPhoneNumber
        : undefined,
    PhoneType: output.PhoneType !== undefined && output.PhoneType !== null ? output.PhoneType : undefined,
    PhoneTypeCode:
      output.PhoneTypeCode !== undefined && output.PhoneTypeCode !== null ? output.PhoneTypeCode : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
    ZipCode: output.ZipCode !== undefined && output.ZipCode !== null ? output.ZipCode : undefined,
  } as any;
};

const deserializeAws_restJson1PushMessageActivity = (output: any, context: __SerdeContext): PushMessageActivity => {
  return {
    __type: "PushMessageActivity",
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneyPushMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateVersion:
      output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
  } as any;
};

const deserializeAws_restJson1PushNotificationTemplateResponse = (
  output: any,
  context: __SerdeContext
): PushNotificationTemplateResponse => {
  return {
    __type: "PushNotificationTemplateResponse",
    ADM:
      output.ADM !== undefined && output.ADM !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.ADM, context)
        : undefined,
    APNS:
      output.APNS !== undefined && output.APNS !== null
        ? deserializeAws_restJson1APNSPushNotificationTemplate(output.APNS, context)
        : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Baidu:
      output.Baidu !== undefined && output.Baidu !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.Baidu, context)
        : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Default:
      output.Default !== undefined && output.Default !== null
        ? deserializeAws_restJson1DefaultPushNotificationTemplate(output.Default, context)
        : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    GCM:
      output.GCM !== undefined && output.GCM !== null
        ? deserializeAws_restJson1AndroidPushNotificationTemplate(output.GCM, context)
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    RecommenderId:
      output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1QuietTime = (output: any, context: __SerdeContext): QuietTime => {
  return {
    __type: "QuietTime",
    End: output.End !== undefined && output.End !== null ? output.End : undefined,
    Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
  } as any;
};

const deserializeAws_restJson1RandomSplitActivity = (output: any, context: __SerdeContext): RandomSplitActivity => {
  return {
    __type: "RandomSplitActivity",
    Branches:
      output.Branches !== undefined && output.Branches !== null
        ? deserializeAws_restJson1ListOfRandomSplitEntry(output.Branches, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RandomSplitEntry = (output: any, context: __SerdeContext): RandomSplitEntry => {
  return {
    __type: "RandomSplitEntry",
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    Percentage: output.Percentage !== undefined && output.Percentage !== null ? output.Percentage : undefined,
  } as any;
};

const deserializeAws_restJson1RecencyDimension = (output: any, context: __SerdeContext): RecencyDimension => {
  return {
    __type: "RecencyDimension",
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    RecencyType: output.RecencyType !== undefined && output.RecencyType !== null ? output.RecencyType : undefined,
  } as any;
};

const deserializeAws_restJson1RecommenderConfigurationResponse = (
  output: any,
  context: __SerdeContext
): RecommenderConfigurationResponse => {
  return {
    __type: "RecommenderConfigurationResponse",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOf__string(output.Attributes, context)
        : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RecommendationProviderIdType:
      output.RecommendationProviderIdType !== undefined && output.RecommendationProviderIdType !== null
        ? output.RecommendationProviderIdType
        : undefined,
    RecommendationProviderRoleArn:
      output.RecommendationProviderRoleArn !== undefined && output.RecommendationProviderRoleArn !== null
        ? output.RecommendationProviderRoleArn
        : undefined,
    RecommendationProviderUri:
      output.RecommendationProviderUri !== undefined && output.RecommendationProviderUri !== null
        ? output.RecommendationProviderUri
        : undefined,
    RecommendationTransformerUri:
      output.RecommendationTransformerUri !== undefined && output.RecommendationTransformerUri !== null
        ? output.RecommendationTransformerUri
        : undefined,
    RecommendationsDisplayName:
      output.RecommendationsDisplayName !== undefined && output.RecommendationsDisplayName !== null
        ? output.RecommendationsDisplayName
        : undefined,
    RecommendationsPerMessage:
      output.RecommendationsPerMessage !== undefined && output.RecommendationsPerMessage !== null
        ? output.RecommendationsPerMessage
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    __type: "ResultRow",
    GroupedBys:
      output.GroupedBys !== undefined && output.GroupedBys !== null
        ? deserializeAws_restJson1ListOfResultRowValue(output.GroupedBys, context)
        : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOfResultRowValue(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultRowValue = (output: any, context: __SerdeContext): ResultRowValue => {
  return {
    __type: "ResultRowValue",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    __type: "Schedule",
    EndTime: output.EndTime !== undefined && output.EndTime !== null ? output.EndTime : undefined,
    EventFilter:
      output.EventFilter !== undefined && output.EventFilter !== null
        ? deserializeAws_restJson1CampaignEventFilter(output.EventFilter, context)
        : undefined,
    Frequency: output.Frequency !== undefined && output.Frequency !== null ? output.Frequency : undefined,
    IsLocalTime: output.IsLocalTime !== undefined && output.IsLocalTime !== null ? output.IsLocalTime : undefined,
    QuietTime:
      output.QuietTime !== undefined && output.QuietTime !== null
        ? deserializeAws_restJson1QuietTime(output.QuietTime, context)
        : undefined,
    StartTime: output.StartTime !== undefined && output.StartTime !== null ? output.StartTime : undefined,
    Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentBehaviors = (output: any, context: __SerdeContext): SegmentBehaviors => {
  return {
    __type: "SegmentBehaviors",
    Recency:
      output.Recency !== undefined && output.Recency !== null
        ? deserializeAws_restJson1RecencyDimension(output.Recency, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentCondition = (output: any, context: __SerdeContext): SegmentCondition => {
  return {
    __type: "SegmentCondition",
    SegmentId: output.SegmentId !== undefined && output.SegmentId !== null ? output.SegmentId : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentDemographics = (output: any, context: __SerdeContext): SegmentDemographics => {
  return {
    __type: "SegmentDemographics",
    AppVersion:
      output.AppVersion !== undefined && output.AppVersion !== null
        ? deserializeAws_restJson1SetDimension(output.AppVersion, context)
        : undefined,
    Channel:
      output.Channel !== undefined && output.Channel !== null
        ? deserializeAws_restJson1SetDimension(output.Channel, context)
        : undefined,
    DeviceType:
      output.DeviceType !== undefined && output.DeviceType !== null
        ? deserializeAws_restJson1SetDimension(output.DeviceType, context)
        : undefined,
    Make:
      output.Make !== undefined && output.Make !== null
        ? deserializeAws_restJson1SetDimension(output.Make, context)
        : undefined,
    Model:
      output.Model !== undefined && output.Model !== null
        ? deserializeAws_restJson1SetDimension(output.Model, context)
        : undefined,
    Platform:
      output.Platform !== undefined && output.Platform !== null
        ? deserializeAws_restJson1SetDimension(output.Platform, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentDimensions = (output: any, context: __SerdeContext): SegmentDimensions => {
  return {
    __type: "SegmentDimensions",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.Attributes, context)
        : undefined,
    Behavior:
      output.Behavior !== undefined && output.Behavior !== null
        ? deserializeAws_restJson1SegmentBehaviors(output.Behavior, context)
        : undefined,
    Demographic:
      output.Demographic !== undefined && output.Demographic !== null
        ? deserializeAws_restJson1SegmentDemographics(output.Demographic, context)
        : undefined,
    Location:
      output.Location !== undefined && output.Location !== null
        ? deserializeAws_restJson1SegmentLocation(output.Location, context)
        : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_restJson1MapOfMetricDimension(output.Metrics, context)
        : undefined,
    UserAttributes:
      output.UserAttributes !== undefined && output.UserAttributes !== null
        ? deserializeAws_restJson1MapOfAttributeDimension(output.UserAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentGroup = (output: any, context: __SerdeContext): SegmentGroup => {
  return {
    __type: "SegmentGroup",
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1ListOfSegmentDimensions(output.Dimensions, context)
        : undefined,
    SourceSegments:
      output.SourceSegments !== undefined && output.SourceSegments !== null
        ? deserializeAws_restJson1ListOfSegmentReference(output.SourceSegments, context)
        : undefined,
    SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentGroupList = (output: any, context: __SerdeContext): SegmentGroupList => {
  return {
    __type: "SegmentGroupList",
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_restJson1ListOfSegmentGroup(output.Groups, context)
        : undefined,
    Include: output.Include !== undefined && output.Include !== null ? output.Include : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentImportResource = (output: any, context: __SerdeContext): SegmentImportResource => {
  return {
    __type: "SegmentImportResource",
    ChannelCounts:
      output.ChannelCounts !== undefined && output.ChannelCounts !== null
        ? deserializeAws_restJson1MapOf__integer(output.ChannelCounts, context)
        : undefined,
    ExternalId: output.ExternalId !== undefined && output.ExternalId !== null ? output.ExternalId : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    S3Url: output.S3Url !== undefined && output.S3Url !== null ? output.S3Url : undefined,
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentLocation = (output: any, context: __SerdeContext): SegmentLocation => {
  return {
    __type: "SegmentLocation",
    Country:
      output.Country !== undefined && output.Country !== null
        ? deserializeAws_restJson1SetDimension(output.Country, context)
        : undefined,
    GPSPoint:
      output.GPSPoint !== undefined && output.GPSPoint !== null
        ? deserializeAws_restJson1GPSPointDimension(output.GPSPoint, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentReference = (output: any, context: __SerdeContext): SegmentReference => {
  return {
    __type: "SegmentReference",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentResponse = (output: any, context: __SerdeContext): SegmentResponse => {
  return {
    __type: "SegmentResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Dimensions:
      output.Dimensions !== undefined && output.Dimensions !== null
        ? deserializeAws_restJson1SegmentDimensions(output.Dimensions, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ImportDefinition:
      output.ImportDefinition !== undefined && output.ImportDefinition !== null
        ? deserializeAws_restJson1SegmentImportResource(output.ImportDefinition, context)
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SegmentGroups:
      output.SegmentGroups !== undefined && output.SegmentGroups !== null
        ? deserializeAws_restJson1SegmentGroupList(output.SegmentGroups, context)
        : undefined,
    SegmentType: output.SegmentType !== undefined && output.SegmentType !== null ? output.SegmentType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentsResponse = (output: any, context: __SerdeContext): SegmentsResponse => {
  return {
    __type: "SegmentsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfSegmentResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1SendUsersMessageResponse = (
  output: any,
  context: __SerdeContext
): SendUsersMessageResponse => {
  return {
    __type: "SendUsersMessageResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    Result:
      output.Result !== undefined && output.Result !== null
        ? deserializeAws_restJson1MapOfMapOfEndpointMessageResult(output.Result, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SetDimension = (output: any, context: __SerdeContext): SetDimension => {
  return {
    __type: "SetDimension",
    DimensionType:
      output.DimensionType !== undefined && output.DimensionType !== null ? output.DimensionType : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_restJson1ListOf__string(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleCondition = (output: any, context: __SerdeContext): SimpleCondition => {
  return {
    __type: "SimpleCondition",
    EventCondition:
      output.EventCondition !== undefined && output.EventCondition !== null
        ? deserializeAws_restJson1EventCondition(output.EventCondition, context)
        : undefined,
    SegmentCondition:
      output.SegmentCondition !== undefined && output.SegmentCondition !== null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentCondition, context)
        : undefined,
    SegmentDimensions:
      output.segmentDimensions !== undefined && output.segmentDimensions !== null
        ? deserializeAws_restJson1SegmentDimensions(output.segmentDimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SMSChannelResponse = (output: any, context: __SerdeContext): SMSChannelResponse => {
  return {
    __type: "SMSChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    PromotionalMessagesPerSecond:
      output.PromotionalMessagesPerSecond !== undefined && output.PromotionalMessagesPerSecond !== null
        ? output.PromotionalMessagesPerSecond
        : undefined,
    SenderId: output.SenderId !== undefined && output.SenderId !== null ? output.SenderId : undefined,
    ShortCode: output.ShortCode !== undefined && output.ShortCode !== null ? output.ShortCode : undefined,
    TransactionalMessagesPerSecond:
      output.TransactionalMessagesPerSecond !== undefined && output.TransactionalMessagesPerSecond !== null
        ? output.TransactionalMessagesPerSecond
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1SMSMessageActivity = (output: any, context: __SerdeContext): SMSMessageActivity => {
  return {
    __type: "SMSMessageActivity",
    MessageConfig:
      output.MessageConfig !== undefined && output.MessageConfig !== null
        ? deserializeAws_restJson1JourneySMSMessage(output.MessageConfig, context)
        : undefined,
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateVersion:
      output.TemplateVersion !== undefined && output.TemplateVersion !== null ? output.TemplateVersion : undefined,
  } as any;
};

const deserializeAws_restJson1SMSTemplateResponse = (output: any, context: __SerdeContext): SMSTemplateResponse => {
  return {
    __type: "SMSTemplateResponse",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    RecommenderId:
      output.RecommenderId !== undefined && output.RecommenderId !== null ? output.RecommenderId : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StartCondition = (output: any, context: __SerdeContext): StartCondition => {
  return {
    __type: "StartCondition",
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    SegmentStartCondition:
      output.SegmentStartCondition !== undefined && output.SegmentStartCondition !== null
        ? deserializeAws_restJson1SegmentCondition(output.SegmentStartCondition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagsModel = (output: any, context: __SerdeContext): TagsModel => {
  return {
    __type: "TagsModel",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Template = (output: any, context: __SerdeContext): Template => {
  return {
    __type: "Template",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return {
    __type: "TemplateConfiguration",
    EmailTemplate:
      output.EmailTemplate !== undefined && output.EmailTemplate !== null
        ? deserializeAws_restJson1Template(output.EmailTemplate, context)
        : undefined,
    PushTemplate:
      output.PushTemplate !== undefined && output.PushTemplate !== null
        ? deserializeAws_restJson1Template(output.PushTemplate, context)
        : undefined,
    SMSTemplate:
      output.SMSTemplate !== undefined && output.SMSTemplate !== null
        ? deserializeAws_restJson1Template(output.SMSTemplate, context)
        : undefined,
    VoiceTemplate:
      output.VoiceTemplate !== undefined && output.VoiceTemplate !== null
        ? deserializeAws_restJson1Template(output.VoiceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateResponse = (output: any, context: __SerdeContext): TemplateResponse => {
  return {
    __type: "TemplateResponse",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TemplatesResponse = (output: any, context: __SerdeContext): TemplatesResponse => {
  return {
    __type: "TemplatesResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfTemplateResponse(output.Item, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateVersionResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionResponse => {
  return {
    __type: "TemplateVersionResponse",
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1TemplateVersionsResponse = (
  output: any,
  context: __SerdeContext
): TemplateVersionsResponse => {
  return {
    __type: "TemplateVersionsResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_restJson1ListOfTemplateVersionResponse(output.Item, context)
        : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    RequestID: output.RequestID !== undefined && output.RequestID !== null ? output.RequestID : undefined,
  } as any;
};

const deserializeAws_restJson1TreatmentResource = (output: any, context: __SerdeContext): TreatmentResource => {
  return {
    __type: "TreatmentResource",
    CustomDeliveryConfiguration:
      output.CustomDeliveryConfiguration !== undefined && output.CustomDeliveryConfiguration !== null
        ? deserializeAws_restJson1CustomDeliveryConfiguration(output.CustomDeliveryConfiguration, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    MessageConfiguration:
      output.MessageConfiguration !== undefined && output.MessageConfiguration !== null
        ? deserializeAws_restJson1MessageConfiguration(output.MessageConfiguration, context)
        : undefined,
    Schedule:
      output.Schedule !== undefined && output.Schedule !== null
        ? deserializeAws_restJson1Schedule(output.Schedule, context)
        : undefined,
    SizePercent: output.SizePercent !== undefined && output.SizePercent !== null ? output.SizePercent : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? deserializeAws_restJson1CampaignState(output.State, context)
        : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration !== undefined && output.TemplateConfiguration !== null
        ? deserializeAws_restJson1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    TreatmentDescription:
      output.TreatmentDescription !== undefined && output.TreatmentDescription !== null
        ? output.TreatmentDescription
        : undefined,
    TreatmentName:
      output.TreatmentName !== undefined && output.TreatmentName !== null ? output.TreatmentName : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceChannelResponse = (output: any, context: __SerdeContext): VoiceChannelResponse => {
  return {
    __type: "VoiceChannelResponse",
    ApplicationId:
      output.ApplicationId !== undefined && output.ApplicationId !== null ? output.ApplicationId : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    HasCredential:
      output.HasCredential !== undefined && output.HasCredential !== null ? output.HasCredential : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsArchived: output.IsArchived !== undefined && output.IsArchived !== null ? output.IsArchived : undefined,
    LastModifiedBy:
      output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    Platform: output.Platform !== undefined && output.Platform !== null ? output.Platform : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceTemplateResponse = (output: any, context: __SerdeContext): VoiceTemplateResponse => {
  return {
    __type: "VoiceTemplateResponse",
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Body: output.Body !== undefined && output.Body !== null ? output.Body : undefined,
    CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
    DefaultSubstitutions:
      output.DefaultSubstitutions !== undefined && output.DefaultSubstitutions !== null
        ? output.DefaultSubstitutions
        : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null ? output.LastModifiedDate : undefined,
    TemplateDescription:
      output.TemplateDescription !== undefined && output.TemplateDescription !== null
        ? output.TemplateDescription
        : undefined,
    TemplateName: output.TemplateName !== undefined && output.TemplateName !== null ? output.TemplateName : undefined,
    TemplateType: output.TemplateType !== undefined && output.TemplateType !== null ? output.TemplateType : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    VoiceId: output.VoiceId !== undefined && output.VoiceId !== null ? output.VoiceId : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1MapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WaitActivity = (output: any, context: __SerdeContext): WaitActivity => {
  return {
    __type: "WaitActivity",
    NextActivity: output.NextActivity !== undefined && output.NextActivity !== null ? output.NextActivity : undefined,
    WaitTime:
      output.WaitTime !== undefined && output.WaitTime !== null
        ? deserializeAws_restJson1WaitTime(output.WaitTime, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WaitTime = (output: any, context: __SerdeContext): WaitTime => {
  return {
    __type: "WaitTime",
    WaitFor: output.WaitFor !== undefined && output.WaitFor !== null ? output.WaitFor : undefined,
    WaitUntil: output.WaitUntil !== undefined && output.WaitUntil !== null ? output.WaitUntil : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
