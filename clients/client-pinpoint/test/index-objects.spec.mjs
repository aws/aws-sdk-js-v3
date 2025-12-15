import {
  ADMChannelRequest$,
  ADMChannelResponse$,
  ADMMessage$,
  APNSChannelRequest$,
  APNSChannelResponse$,
  APNSMessage$,
  APNSPushNotificationTemplate$,
  APNSSandboxChannelRequest$,
  APNSSandboxChannelResponse$,
  APNSVoipChannelRequest$,
  APNSVoipChannelResponse$,
  APNSVoipSandboxChannelRequest$,
  APNSVoipSandboxChannelResponse$,
  Action,
  ActivitiesResponse$,
  Activity$,
  ActivityResponse$,
  AddressConfiguration$,
  Alignment,
  AndroidPushNotificationTemplate$,
  ApplicationDateRangeKpiResponse$,
  ApplicationResponse$,
  ApplicationSettingsJourneyLimits$,
  ApplicationSettingsResource$,
  ApplicationsResponse$,
  AttributeDimension$,
  AttributeType,
  AttributesResource$,
  BadRequestException,
  BadRequestException$,
  BaiduChannelRequest$,
  BaiduChannelResponse$,
  BaiduMessage$,
  BaseKpiResult$,
  ButtonAction,
  CampaignCustomMessage$,
  CampaignDateRangeKpiResponse$,
  CampaignEmailMessage$,
  CampaignEventFilter$,
  CampaignHook$,
  CampaignInAppMessage$,
  CampaignLimits$,
  CampaignResponse$,
  CampaignSmsMessage$,
  CampaignState$,
  CampaignStatus,
  CampaignsResponse$,
  ChannelResponse$,
  ChannelType,
  ChannelsResponse$,
  ClosedDays$,
  ClosedDaysRule$,
  Condition$,
  ConditionalSplitActivity$,
  ConflictException,
  ConflictException$,
  ContactCenterActivity$,
  CreateApp$,
  CreateAppCommand,
  CreateAppRequest$,
  CreateAppResponse$,
  CreateApplicationRequest$,
  CreateCampaign$,
  CreateCampaignCommand,
  CreateCampaignRequest$,
  CreateCampaignResponse$,
  CreateEmailTemplate$,
  CreateEmailTemplateCommand,
  CreateEmailTemplateRequest$,
  CreateEmailTemplateResponse$,
  CreateExportJob$,
  CreateExportJobCommand,
  CreateExportJobRequest$,
  CreateExportJobResponse$,
  CreateImportJob$,
  CreateImportJobCommand,
  CreateImportJobRequest$,
  CreateImportJobResponse$,
  CreateInAppTemplate$,
  CreateInAppTemplateCommand,
  CreateInAppTemplateRequest$,
  CreateInAppTemplateResponse$,
  CreateJourney$,
  CreateJourneyCommand,
  CreateJourneyRequest$,
  CreateJourneyResponse$,
  CreatePushTemplate$,
  CreatePushTemplateCommand,
  CreatePushTemplateRequest$,
  CreatePushTemplateResponse$,
  CreateRecommenderConfiguration$,
  CreateRecommenderConfigurationCommand,
  CreateRecommenderConfigurationRequest$,
  CreateRecommenderConfigurationResponse$,
  CreateRecommenderConfigurationShape$,
  CreateSegment$,
  CreateSegmentCommand,
  CreateSegmentRequest$,
  CreateSegmentResponse$,
  CreateSmsTemplate$,
  CreateSmsTemplateCommand,
  CreateSmsTemplateRequest$,
  CreateSmsTemplateResponse$,
  CreateTemplateMessageBody$,
  CreateVoiceTemplate$,
  CreateVoiceTemplateCommand,
  CreateVoiceTemplateRequest$,
  CreateVoiceTemplateResponse$,
  CustomDeliveryConfiguration$,
  CustomMessageActivity$,
  DayOfWeek,
  DefaultButtonConfiguration$,
  DefaultMessage$,
  DefaultPushNotificationMessage$,
  DefaultPushNotificationTemplate$,
  DeleteAdmChannel$,
  DeleteAdmChannelCommand,
  DeleteAdmChannelRequest$,
  DeleteAdmChannelResponse$,
  DeleteApnsChannel$,
  DeleteApnsChannelCommand,
  DeleteApnsChannelRequest$,
  DeleteApnsChannelResponse$,
  DeleteApnsSandboxChannel$,
  DeleteApnsSandboxChannelCommand,
  DeleteApnsSandboxChannelRequest$,
  DeleteApnsSandboxChannelResponse$,
  DeleteApnsVoipChannel$,
  DeleteApnsVoipChannelCommand,
  DeleteApnsVoipChannelRequest$,
  DeleteApnsVoipChannelResponse$,
  DeleteApnsVoipSandboxChannel$,
  DeleteApnsVoipSandboxChannelCommand,
  DeleteApnsVoipSandboxChannelRequest$,
  DeleteApnsVoipSandboxChannelResponse$,
  DeleteApp$,
  DeleteAppCommand,
  DeleteAppRequest$,
  DeleteAppResponse$,
  DeleteBaiduChannel$,
  DeleteBaiduChannelCommand,
  DeleteBaiduChannelRequest$,
  DeleteBaiduChannelResponse$,
  DeleteCampaign$,
  DeleteCampaignCommand,
  DeleteCampaignRequest$,
  DeleteCampaignResponse$,
  DeleteEmailChannel$,
  DeleteEmailChannelCommand,
  DeleteEmailChannelRequest$,
  DeleteEmailChannelResponse$,
  DeleteEmailTemplate$,
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateRequest$,
  DeleteEmailTemplateResponse$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointRequest$,
  DeleteEndpointResponse$,
  DeleteEventStream$,
  DeleteEventStreamCommand,
  DeleteEventStreamRequest$,
  DeleteEventStreamResponse$,
  DeleteGcmChannel$,
  DeleteGcmChannelCommand,
  DeleteGcmChannelRequest$,
  DeleteGcmChannelResponse$,
  DeleteInAppTemplate$,
  DeleteInAppTemplateCommand,
  DeleteInAppTemplateRequest$,
  DeleteInAppTemplateResponse$,
  DeleteJourney$,
  DeleteJourneyCommand,
  DeleteJourneyRequest$,
  DeleteJourneyResponse$,
  DeletePushTemplate$,
  DeletePushTemplateCommand,
  DeletePushTemplateRequest$,
  DeletePushTemplateResponse$,
  DeleteRecommenderConfiguration$,
  DeleteRecommenderConfigurationCommand,
  DeleteRecommenderConfigurationRequest$,
  DeleteRecommenderConfigurationResponse$,
  DeleteSegment$,
  DeleteSegmentCommand,
  DeleteSegmentRequest$,
  DeleteSegmentResponse$,
  DeleteSmsChannel$,
  DeleteSmsChannelCommand,
  DeleteSmsChannelRequest$,
  DeleteSmsChannelResponse$,
  DeleteSmsTemplate$,
  DeleteSmsTemplateCommand,
  DeleteSmsTemplateRequest$,
  DeleteSmsTemplateResponse$,
  DeleteUserEndpoints$,
  DeleteUserEndpointsCommand,
  DeleteUserEndpointsRequest$,
  DeleteUserEndpointsResponse$,
  DeleteVoiceChannel$,
  DeleteVoiceChannelCommand,
  DeleteVoiceChannelRequest$,
  DeleteVoiceChannelResponse$,
  DeleteVoiceTemplate$,
  DeleteVoiceTemplateCommand,
  DeleteVoiceTemplateRequest$,
  DeleteVoiceTemplateResponse$,
  DeliveryStatus,
  DimensionType,
  DirectMessageConfiguration$,
  Duration,
  EmailChannelRequest$,
  EmailChannelResponse$,
  EmailMessage$,
  EmailMessageActivity$,
  EmailTemplateRequest$,
  EmailTemplateResponse$,
  EndpointBatchItem$,
  EndpointBatchRequest$,
  EndpointDemographic$,
  EndpointItemResponse$,
  EndpointLocation$,
  EndpointMessageResult$,
  EndpointRequest$,
  EndpointResponse$,
  EndpointSendConfiguration$,
  EndpointUser$,
  EndpointsResponse$,
  Event$,
  EventCondition$,
  EventDimensions$,
  EventFilter$,
  EventItemResponse$,
  EventStartCondition$,
  EventStream$,
  EventsBatch$,
  EventsRequest$,
  EventsResponse$,
  ExportJobRequest$,
  ExportJobResource$,
  ExportJobResponse$,
  ExportJobsResponse$,
  FilterType,
  ForbiddenException,
  ForbiddenException$,
  Format,
  Frequency,
  GCMChannelRequest$,
  GCMChannelResponse$,
  GCMMessage$,
  GPSCoordinates$,
  GPSPointDimension$,
  GetAdmChannel$,
  GetAdmChannelCommand,
  GetAdmChannelRequest$,
  GetAdmChannelResponse$,
  GetApnsChannel$,
  GetApnsChannelCommand,
  GetApnsChannelRequest$,
  GetApnsChannelResponse$,
  GetApnsSandboxChannel$,
  GetApnsSandboxChannelCommand,
  GetApnsSandboxChannelRequest$,
  GetApnsSandboxChannelResponse$,
  GetApnsVoipChannel$,
  GetApnsVoipChannelCommand,
  GetApnsVoipChannelRequest$,
  GetApnsVoipChannelResponse$,
  GetApnsVoipSandboxChannel$,
  GetApnsVoipSandboxChannelCommand,
  GetApnsVoipSandboxChannelRequest$,
  GetApnsVoipSandboxChannelResponse$,
  GetApp$,
  GetAppCommand,
  GetAppRequest$,
  GetAppResponse$,
  GetApplicationDateRangeKpi$,
  GetApplicationDateRangeKpiCommand,
  GetApplicationDateRangeKpiRequest$,
  GetApplicationDateRangeKpiResponse$,
  GetApplicationSettings$,
  GetApplicationSettingsCommand,
  GetApplicationSettingsRequest$,
  GetApplicationSettingsResponse$,
  GetApps$,
  GetAppsCommand,
  GetAppsRequest$,
  GetAppsResponse$,
  GetBaiduChannel$,
  GetBaiduChannelCommand,
  GetBaiduChannelRequest$,
  GetBaiduChannelResponse$,
  GetCampaign$,
  GetCampaignActivities$,
  GetCampaignActivitiesCommand,
  GetCampaignActivitiesRequest$,
  GetCampaignActivitiesResponse$,
  GetCampaignCommand,
  GetCampaignDateRangeKpi$,
  GetCampaignDateRangeKpiCommand,
  GetCampaignDateRangeKpiRequest$,
  GetCampaignDateRangeKpiResponse$,
  GetCampaignRequest$,
  GetCampaignResponse$,
  GetCampaignVersion$,
  GetCampaignVersionCommand,
  GetCampaignVersionRequest$,
  GetCampaignVersionResponse$,
  GetCampaignVersions$,
  GetCampaignVersionsCommand,
  GetCampaignVersionsRequest$,
  GetCampaignVersionsResponse$,
  GetCampaigns$,
  GetCampaignsCommand,
  GetCampaignsRequest$,
  GetCampaignsResponse$,
  GetChannels$,
  GetChannelsCommand,
  GetChannelsRequest$,
  GetChannelsResponse$,
  GetEmailChannel$,
  GetEmailChannelCommand,
  GetEmailChannelRequest$,
  GetEmailChannelResponse$,
  GetEmailTemplate$,
  GetEmailTemplateCommand,
  GetEmailTemplateRequest$,
  GetEmailTemplateResponse$,
  GetEndpoint$,
  GetEndpointCommand,
  GetEndpointRequest$,
  GetEndpointResponse$,
  GetEventStream$,
  GetEventStreamCommand,
  GetEventStreamRequest$,
  GetEventStreamResponse$,
  GetExportJob$,
  GetExportJobCommand,
  GetExportJobRequest$,
  GetExportJobResponse$,
  GetExportJobs$,
  GetExportJobsCommand,
  GetExportJobsRequest$,
  GetExportJobsResponse$,
  GetGcmChannel$,
  GetGcmChannelCommand,
  GetGcmChannelRequest$,
  GetGcmChannelResponse$,
  GetImportJob$,
  GetImportJobCommand,
  GetImportJobRequest$,
  GetImportJobResponse$,
  GetImportJobs$,
  GetImportJobsCommand,
  GetImportJobsRequest$,
  GetImportJobsResponse$,
  GetInAppMessages$,
  GetInAppMessagesCommand,
  GetInAppMessagesRequest$,
  GetInAppMessagesResponse$,
  GetInAppTemplate$,
  GetInAppTemplateCommand,
  GetInAppTemplateRequest$,
  GetInAppTemplateResponse$,
  GetJourney$,
  GetJourneyCommand,
  GetJourneyDateRangeKpi$,
  GetJourneyDateRangeKpiCommand,
  GetJourneyDateRangeKpiRequest$,
  GetJourneyDateRangeKpiResponse$,
  GetJourneyExecutionActivityMetrics$,
  GetJourneyExecutionActivityMetricsCommand,
  GetJourneyExecutionActivityMetricsRequest$,
  GetJourneyExecutionActivityMetricsResponse$,
  GetJourneyExecutionMetrics$,
  GetJourneyExecutionMetricsCommand,
  GetJourneyExecutionMetricsRequest$,
  GetJourneyExecutionMetricsResponse$,
  GetJourneyRequest$,
  GetJourneyResponse$,
  GetJourneyRunExecutionActivityMetrics$,
  GetJourneyRunExecutionActivityMetricsCommand,
  GetJourneyRunExecutionActivityMetricsRequest$,
  GetJourneyRunExecutionActivityMetricsResponse$,
  GetJourneyRunExecutionMetrics$,
  GetJourneyRunExecutionMetricsCommand,
  GetJourneyRunExecutionMetricsRequest$,
  GetJourneyRunExecutionMetricsResponse$,
  GetJourneyRuns$,
  GetJourneyRunsCommand,
  GetJourneyRunsRequest$,
  GetJourneyRunsResponse$,
  GetPushTemplate$,
  GetPushTemplateCommand,
  GetPushTemplateRequest$,
  GetPushTemplateResponse$,
  GetRecommenderConfiguration$,
  GetRecommenderConfigurationCommand,
  GetRecommenderConfigurationRequest$,
  GetRecommenderConfigurationResponse$,
  GetRecommenderConfigurations$,
  GetRecommenderConfigurationsCommand,
  GetRecommenderConfigurationsRequest$,
  GetRecommenderConfigurationsResponse$,
  GetSegment$,
  GetSegmentCommand,
  GetSegmentExportJobs$,
  GetSegmentExportJobsCommand,
  GetSegmentExportJobsRequest$,
  GetSegmentExportJobsResponse$,
  GetSegmentImportJobs$,
  GetSegmentImportJobsCommand,
  GetSegmentImportJobsRequest$,
  GetSegmentImportJobsResponse$,
  GetSegmentRequest$,
  GetSegmentResponse$,
  GetSegmentVersion$,
  GetSegmentVersionCommand,
  GetSegmentVersionRequest$,
  GetSegmentVersionResponse$,
  GetSegmentVersions$,
  GetSegmentVersionsCommand,
  GetSegmentVersionsRequest$,
  GetSegmentVersionsResponse$,
  GetSegments$,
  GetSegmentsCommand,
  GetSegmentsRequest$,
  GetSegmentsResponse$,
  GetSmsChannel$,
  GetSmsChannelCommand,
  GetSmsChannelRequest$,
  GetSmsChannelResponse$,
  GetSmsTemplate$,
  GetSmsTemplateCommand,
  GetSmsTemplateRequest$,
  GetSmsTemplateResponse$,
  GetUserEndpoints$,
  GetUserEndpointsCommand,
  GetUserEndpointsRequest$,
  GetUserEndpointsResponse$,
  GetVoiceChannel$,
  GetVoiceChannelCommand,
  GetVoiceChannelRequest$,
  GetVoiceChannelResponse$,
  GetVoiceTemplate$,
  GetVoiceTemplateCommand,
  GetVoiceTemplateRequest$,
  GetVoiceTemplateResponse$,
  HoldoutActivity$,
  ImportJobRequest$,
  ImportJobResource$,
  ImportJobResponse$,
  ImportJobsResponse$,
  InAppCampaignSchedule$,
  InAppMessage$,
  InAppMessageBodyConfig$,
  InAppMessageButton$,
  InAppMessageCampaign$,
  InAppMessageContent$,
  InAppMessageHeaderConfig$,
  InAppMessagesResponse$,
  InAppTemplateRequest$,
  InAppTemplateResponse$,
  Include,
  InternalServerErrorException,
  InternalServerErrorException$,
  ItemResponse$,
  JobStatus,
  JourneyChannelSettings$,
  JourneyCustomMessage$,
  JourneyDateRangeKpiResponse$,
  JourneyEmailMessage$,
  JourneyExecutionActivityMetricsResponse$,
  JourneyExecutionMetricsResponse$,
  JourneyLimits$,
  JourneyPushMessage$,
  JourneyResponse$,
  JourneyRunExecutionActivityMetricsResponse$,
  JourneyRunExecutionMetricsResponse$,
  JourneyRunResponse$,
  JourneyRunStatus,
  JourneyRunsResponse$,
  JourneySMSMessage$,
  JourneySchedule$,
  JourneyStateRequest$,
  JourneyTimeframeCap$,
  JourneysResponse$,
  Layout,
  ListJourneys$,
  ListJourneysCommand,
  ListJourneysRequest$,
  ListJourneysResponse$,
  ListRecommenderConfigurationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTemplateVersions$,
  ListTemplateVersionsCommand,
  ListTemplateVersionsRequest$,
  ListTemplateVersionsResponse$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplatesRequest$,
  ListTemplatesResponse$,
  Message$,
  MessageBody$,
  MessageConfiguration$,
  MessageHeader$,
  MessageRequest$,
  MessageResponse$,
  MessageResult$,
  MessageType,
  MethodNotAllowedException,
  MethodNotAllowedException$,
  MetricDimension$,
  Mode,
  MultiConditionalBranch$,
  MultiConditionalSplitActivity$,
  NotFoundException,
  NotFoundException$,
  NumberValidateRequest$,
  NumberValidateResponse$,
  OpenHours$,
  OpenHoursRule$,
  Operator,
  OverrideButtonConfiguration$,
  PayloadTooLargeException,
  PayloadTooLargeException$,
  PhoneNumberValidate$,
  PhoneNumberValidateCommand,
  PhoneNumberValidateRequest$,
  PhoneNumberValidateResponse$,
  Pinpoint,
  PinpointClient,
  PinpointServiceException,
  PublicEndpoint$,
  PushMessageActivity$,
  PushNotificationTemplateRequest$,
  PushNotificationTemplateResponse$,
  PutEventStream$,
  PutEventStreamCommand,
  PutEventStreamRequest$,
  PutEventStreamResponse$,
  PutEvents$,
  PutEventsCommand,
  PutEventsRequest$,
  PutEventsResponse$,
  QuietTime$,
  RandomSplitActivity$,
  RandomSplitEntry$,
  RawEmail$,
  RecencyDimension$,
  RecencyType,
  RecommenderConfigurationResponse$,
  RemoveAttributes$,
  RemoveAttributesCommand,
  RemoveAttributesRequest$,
  RemoveAttributesResponse$,
  ResultRow$,
  ResultRowValue$,
  SMSChannelRequest$,
  SMSChannelResponse$,
  SMSMessage$,
  SMSMessageActivity$,
  SMSTemplateRequest$,
  SMSTemplateResponse$,
  Schedule$,
  SegmentBehaviors$,
  SegmentCondition$,
  SegmentDemographics$,
  SegmentDimensions$,
  SegmentGroup$,
  SegmentGroupList$,
  SegmentImportResource$,
  SegmentLocation$,
  SegmentReference$,
  SegmentResponse$,
  SegmentType,
  SegmentsResponse$,
  SendMessages$,
  SendMessagesCommand,
  SendMessagesRequest$,
  SendMessagesResponse$,
  SendOTPMessage$,
  SendOTPMessageCommand,
  SendOTPMessageRequest$,
  SendOTPMessageRequestParameters$,
  SendOTPMessageResponse$,
  SendUsersMessageRequest$,
  SendUsersMessageResponse$,
  SendUsersMessages$,
  SendUsersMessagesCommand,
  SendUsersMessagesRequest$,
  SendUsersMessagesResponse$,
  Session$,
  SetDimension$,
  SimpleCondition$,
  SimpleEmail$,
  SimpleEmailPart$,
  SourceType,
  StartCondition$,
  State,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagsModel$,
  Template$,
  TemplateActiveVersionRequest$,
  TemplateConfiguration$,
  TemplateCreateMessageBody$,
  TemplateResponse$,
  TemplateType,
  TemplateVersionResponse$,
  TemplateVersionsResponse$,
  TemplatesResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TreatmentResource$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAdmChannel$,
  UpdateAdmChannelCommand,
  UpdateAdmChannelRequest$,
  UpdateAdmChannelResponse$,
  UpdateApnsChannel$,
  UpdateApnsChannelCommand,
  UpdateApnsChannelRequest$,
  UpdateApnsChannelResponse$,
  UpdateApnsSandboxChannel$,
  UpdateApnsSandboxChannelCommand,
  UpdateApnsSandboxChannelRequest$,
  UpdateApnsSandboxChannelResponse$,
  UpdateApnsVoipChannel$,
  UpdateApnsVoipChannelCommand,
  UpdateApnsVoipChannelRequest$,
  UpdateApnsVoipChannelResponse$,
  UpdateApnsVoipSandboxChannel$,
  UpdateApnsVoipSandboxChannelCommand,
  UpdateApnsVoipSandboxChannelRequest$,
  UpdateApnsVoipSandboxChannelResponse$,
  UpdateApplicationSettings$,
  UpdateApplicationSettingsCommand,
  UpdateApplicationSettingsRequest$,
  UpdateApplicationSettingsResponse$,
  UpdateAttributesRequest$,
  UpdateBaiduChannel$,
  UpdateBaiduChannelCommand,
  UpdateBaiduChannelRequest$,
  UpdateBaiduChannelResponse$,
  UpdateCampaign$,
  UpdateCampaignCommand,
  UpdateCampaignRequest$,
  UpdateCampaignResponse$,
  UpdateEmailChannel$,
  UpdateEmailChannelCommand,
  UpdateEmailChannelRequest$,
  UpdateEmailChannelResponse$,
  UpdateEmailTemplate$,
  UpdateEmailTemplateCommand,
  UpdateEmailTemplateRequest$,
  UpdateEmailTemplateResponse$,
  UpdateEndpoint$,
  UpdateEndpointCommand,
  UpdateEndpointRequest$,
  UpdateEndpointResponse$,
  UpdateEndpointsBatch$,
  UpdateEndpointsBatchCommand,
  UpdateEndpointsBatchRequest$,
  UpdateEndpointsBatchResponse$,
  UpdateGcmChannel$,
  UpdateGcmChannelCommand,
  UpdateGcmChannelRequest$,
  UpdateGcmChannelResponse$,
  UpdateInAppTemplate$,
  UpdateInAppTemplateCommand,
  UpdateInAppTemplateRequest$,
  UpdateInAppTemplateResponse$,
  UpdateJourney$,
  UpdateJourneyCommand,
  UpdateJourneyRequest$,
  UpdateJourneyResponse$,
  UpdateJourneyState$,
  UpdateJourneyStateCommand,
  UpdateJourneyStateRequest$,
  UpdateJourneyStateResponse$,
  UpdatePushTemplate$,
  UpdatePushTemplateCommand,
  UpdatePushTemplateRequest$,
  UpdatePushTemplateResponse$,
  UpdateRecommenderConfiguration$,
  UpdateRecommenderConfigurationCommand,
  UpdateRecommenderConfigurationRequest$,
  UpdateRecommenderConfigurationResponse$,
  UpdateRecommenderConfigurationShape$,
  UpdateSegment$,
  UpdateSegmentCommand,
  UpdateSegmentRequest$,
  UpdateSegmentResponse$,
  UpdateSmsChannel$,
  UpdateSmsChannelCommand,
  UpdateSmsChannelRequest$,
  UpdateSmsChannelResponse$,
  UpdateSmsTemplate$,
  UpdateSmsTemplateCommand,
  UpdateSmsTemplateRequest$,
  UpdateSmsTemplateResponse$,
  UpdateTemplateActiveVersion$,
  UpdateTemplateActiveVersionCommand,
  UpdateTemplateActiveVersionRequest$,
  UpdateTemplateActiveVersionResponse$,
  UpdateVoiceChannel$,
  UpdateVoiceChannelCommand,
  UpdateVoiceChannelRequest$,
  UpdateVoiceChannelResponse$,
  UpdateVoiceTemplate$,
  UpdateVoiceTemplateCommand,
  UpdateVoiceTemplateRequest$,
  UpdateVoiceTemplateResponse$,
  VerificationResponse$,
  VerifyOTPMessage$,
  VerifyOTPMessageCommand,
  VerifyOTPMessageRequest$,
  VerifyOTPMessageRequestParameters$,
  VerifyOTPMessageResponse$,
  VoiceChannelRequest$,
  VoiceChannelResponse$,
  VoiceMessage$,
  VoiceTemplateRequest$,
  VoiceTemplateResponse$,
  WaitActivity$,
  WaitTime$,
  WriteApplicationSettingsRequest$,
  WriteCampaignRequest$,
  WriteEventStream$,
  WriteJourneyRequest$,
  WriteSegmentRequest$,
  WriteTreatmentResource$,
  __EndpointTypesElement,
  __TimezoneEstimationMethodsElement,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointClient === "function");
assert(typeof Pinpoint === "function");
// commands
assert(typeof CreateAppCommand === "function");
assert(typeof CreateApp$ === "object");
assert(typeof CreateCampaignCommand === "function");
assert(typeof CreateCampaign$ === "object");
assert(typeof CreateEmailTemplateCommand === "function");
assert(typeof CreateEmailTemplate$ === "object");
assert(typeof CreateExportJobCommand === "function");
assert(typeof CreateExportJob$ === "object");
assert(typeof CreateImportJobCommand === "function");
assert(typeof CreateImportJob$ === "object");
assert(typeof CreateInAppTemplateCommand === "function");
assert(typeof CreateInAppTemplate$ === "object");
assert(typeof CreateJourneyCommand === "function");
assert(typeof CreateJourney$ === "object");
assert(typeof CreatePushTemplateCommand === "function");
assert(typeof CreatePushTemplate$ === "object");
assert(typeof CreateRecommenderConfigurationCommand === "function");
assert(typeof CreateRecommenderConfiguration$ === "object");
assert(typeof CreateSegmentCommand === "function");
assert(typeof CreateSegment$ === "object");
assert(typeof CreateSmsTemplateCommand === "function");
assert(typeof CreateSmsTemplate$ === "object");
assert(typeof CreateVoiceTemplateCommand === "function");
assert(typeof CreateVoiceTemplate$ === "object");
assert(typeof DeleteAdmChannelCommand === "function");
assert(typeof DeleteAdmChannel$ === "object");
assert(typeof DeleteApnsChannelCommand === "function");
assert(typeof DeleteApnsChannel$ === "object");
assert(typeof DeleteApnsSandboxChannelCommand === "function");
assert(typeof DeleteApnsSandboxChannel$ === "object");
assert(typeof DeleteApnsVoipChannelCommand === "function");
assert(typeof DeleteApnsVoipChannel$ === "object");
assert(typeof DeleteApnsVoipSandboxChannelCommand === "function");
assert(typeof DeleteApnsVoipSandboxChannel$ === "object");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteApp$ === "object");
assert(typeof DeleteBaiduChannelCommand === "function");
assert(typeof DeleteBaiduChannel$ === "object");
assert(typeof DeleteCampaignCommand === "function");
assert(typeof DeleteCampaign$ === "object");
assert(typeof DeleteEmailChannelCommand === "function");
assert(typeof DeleteEmailChannel$ === "object");
assert(typeof DeleteEmailTemplateCommand === "function");
assert(typeof DeleteEmailTemplate$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeleteEventStreamCommand === "function");
assert(typeof DeleteEventStream$ === "object");
assert(typeof DeleteGcmChannelCommand === "function");
assert(typeof DeleteGcmChannel$ === "object");
assert(typeof DeleteInAppTemplateCommand === "function");
assert(typeof DeleteInAppTemplate$ === "object");
assert(typeof DeleteJourneyCommand === "function");
assert(typeof DeleteJourney$ === "object");
assert(typeof DeletePushTemplateCommand === "function");
assert(typeof DeletePushTemplate$ === "object");
assert(typeof DeleteRecommenderConfigurationCommand === "function");
assert(typeof DeleteRecommenderConfiguration$ === "object");
assert(typeof DeleteSegmentCommand === "function");
assert(typeof DeleteSegment$ === "object");
assert(typeof DeleteSmsChannelCommand === "function");
assert(typeof DeleteSmsChannel$ === "object");
assert(typeof DeleteSmsTemplateCommand === "function");
assert(typeof DeleteSmsTemplate$ === "object");
assert(typeof DeleteUserEndpointsCommand === "function");
assert(typeof DeleteUserEndpoints$ === "object");
assert(typeof DeleteVoiceChannelCommand === "function");
assert(typeof DeleteVoiceChannel$ === "object");
assert(typeof DeleteVoiceTemplateCommand === "function");
assert(typeof DeleteVoiceTemplate$ === "object");
assert(typeof GetAdmChannelCommand === "function");
assert(typeof GetAdmChannel$ === "object");
assert(typeof GetApnsChannelCommand === "function");
assert(typeof GetApnsChannel$ === "object");
assert(typeof GetApnsSandboxChannelCommand === "function");
assert(typeof GetApnsSandboxChannel$ === "object");
assert(typeof GetApnsVoipChannelCommand === "function");
assert(typeof GetApnsVoipChannel$ === "object");
assert(typeof GetApnsVoipSandboxChannelCommand === "function");
assert(typeof GetApnsVoipSandboxChannel$ === "object");
assert(typeof GetAppCommand === "function");
assert(typeof GetApp$ === "object");
assert(typeof GetApplicationDateRangeKpiCommand === "function");
assert(typeof GetApplicationDateRangeKpi$ === "object");
assert(typeof GetApplicationSettingsCommand === "function");
assert(typeof GetApplicationSettings$ === "object");
assert(typeof GetAppsCommand === "function");
assert(typeof GetApps$ === "object");
assert(typeof GetBaiduChannelCommand === "function");
assert(typeof GetBaiduChannel$ === "object");
assert(typeof GetCampaignCommand === "function");
assert(typeof GetCampaign$ === "object");
assert(typeof GetCampaignActivitiesCommand === "function");
assert(typeof GetCampaignActivities$ === "object");
assert(typeof GetCampaignDateRangeKpiCommand === "function");
assert(typeof GetCampaignDateRangeKpi$ === "object");
assert(typeof GetCampaignsCommand === "function");
assert(typeof GetCampaigns$ === "object");
assert(typeof GetCampaignVersionCommand === "function");
assert(typeof GetCampaignVersion$ === "object");
assert(typeof GetCampaignVersionsCommand === "function");
assert(typeof GetCampaignVersions$ === "object");
assert(typeof GetChannelsCommand === "function");
assert(typeof GetChannels$ === "object");
assert(typeof GetEmailChannelCommand === "function");
assert(typeof GetEmailChannel$ === "object");
assert(typeof GetEmailTemplateCommand === "function");
assert(typeof GetEmailTemplate$ === "object");
assert(typeof GetEndpointCommand === "function");
assert(typeof GetEndpoint$ === "object");
assert(typeof GetEventStreamCommand === "function");
assert(typeof GetEventStream$ === "object");
assert(typeof GetExportJobCommand === "function");
assert(typeof GetExportJob$ === "object");
assert(typeof GetExportJobsCommand === "function");
assert(typeof GetExportJobs$ === "object");
assert(typeof GetGcmChannelCommand === "function");
assert(typeof GetGcmChannel$ === "object");
assert(typeof GetImportJobCommand === "function");
assert(typeof GetImportJob$ === "object");
assert(typeof GetImportJobsCommand === "function");
assert(typeof GetImportJobs$ === "object");
assert(typeof GetInAppMessagesCommand === "function");
assert(typeof GetInAppMessages$ === "object");
assert(typeof GetInAppTemplateCommand === "function");
assert(typeof GetInAppTemplate$ === "object");
assert(typeof GetJourneyCommand === "function");
assert(typeof GetJourney$ === "object");
assert(typeof GetJourneyDateRangeKpiCommand === "function");
assert(typeof GetJourneyDateRangeKpi$ === "object");
assert(typeof GetJourneyExecutionActivityMetricsCommand === "function");
assert(typeof GetJourneyExecutionActivityMetrics$ === "object");
assert(typeof GetJourneyExecutionMetricsCommand === "function");
assert(typeof GetJourneyExecutionMetrics$ === "object");
assert(typeof GetJourneyRunExecutionActivityMetricsCommand === "function");
assert(typeof GetJourneyRunExecutionActivityMetrics$ === "object");
assert(typeof GetJourneyRunExecutionMetricsCommand === "function");
assert(typeof GetJourneyRunExecutionMetrics$ === "object");
assert(typeof GetJourneyRunsCommand === "function");
assert(typeof GetJourneyRuns$ === "object");
assert(typeof GetPushTemplateCommand === "function");
assert(typeof GetPushTemplate$ === "object");
assert(typeof GetRecommenderConfigurationCommand === "function");
assert(typeof GetRecommenderConfiguration$ === "object");
assert(typeof GetRecommenderConfigurationsCommand === "function");
assert(typeof GetRecommenderConfigurations$ === "object");
assert(typeof GetSegmentCommand === "function");
assert(typeof GetSegment$ === "object");
assert(typeof GetSegmentExportJobsCommand === "function");
assert(typeof GetSegmentExportJobs$ === "object");
assert(typeof GetSegmentImportJobsCommand === "function");
assert(typeof GetSegmentImportJobs$ === "object");
assert(typeof GetSegmentsCommand === "function");
assert(typeof GetSegments$ === "object");
assert(typeof GetSegmentVersionCommand === "function");
assert(typeof GetSegmentVersion$ === "object");
assert(typeof GetSegmentVersionsCommand === "function");
assert(typeof GetSegmentVersions$ === "object");
assert(typeof GetSmsChannelCommand === "function");
assert(typeof GetSmsChannel$ === "object");
assert(typeof GetSmsTemplateCommand === "function");
assert(typeof GetSmsTemplate$ === "object");
assert(typeof GetUserEndpointsCommand === "function");
assert(typeof GetUserEndpoints$ === "object");
assert(typeof GetVoiceChannelCommand === "function");
assert(typeof GetVoiceChannel$ === "object");
assert(typeof GetVoiceTemplateCommand === "function");
assert(typeof GetVoiceTemplate$ === "object");
assert(typeof ListJourneysCommand === "function");
assert(typeof ListJourneys$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof ListTemplateVersionsCommand === "function");
assert(typeof ListTemplateVersions$ === "object");
assert(typeof PhoneNumberValidateCommand === "function");
assert(typeof PhoneNumberValidate$ === "object");
assert(typeof PutEventsCommand === "function");
assert(typeof PutEvents$ === "object");
assert(typeof PutEventStreamCommand === "function");
assert(typeof PutEventStream$ === "object");
assert(typeof RemoveAttributesCommand === "function");
assert(typeof RemoveAttributes$ === "object");
assert(typeof SendMessagesCommand === "function");
assert(typeof SendMessages$ === "object");
assert(typeof SendOTPMessageCommand === "function");
assert(typeof SendOTPMessage$ === "object");
assert(typeof SendUsersMessagesCommand === "function");
assert(typeof SendUsersMessages$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAdmChannelCommand === "function");
assert(typeof UpdateAdmChannel$ === "object");
assert(typeof UpdateApnsChannelCommand === "function");
assert(typeof UpdateApnsChannel$ === "object");
assert(typeof UpdateApnsSandboxChannelCommand === "function");
assert(typeof UpdateApnsSandboxChannel$ === "object");
assert(typeof UpdateApnsVoipChannelCommand === "function");
assert(typeof UpdateApnsVoipChannel$ === "object");
assert(typeof UpdateApnsVoipSandboxChannelCommand === "function");
assert(typeof UpdateApnsVoipSandboxChannel$ === "object");
assert(typeof UpdateApplicationSettingsCommand === "function");
assert(typeof UpdateApplicationSettings$ === "object");
assert(typeof UpdateBaiduChannelCommand === "function");
assert(typeof UpdateBaiduChannel$ === "object");
assert(typeof UpdateCampaignCommand === "function");
assert(typeof UpdateCampaign$ === "object");
assert(typeof UpdateEmailChannelCommand === "function");
assert(typeof UpdateEmailChannel$ === "object");
assert(typeof UpdateEmailTemplateCommand === "function");
assert(typeof UpdateEmailTemplate$ === "object");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateEndpoint$ === "object");
assert(typeof UpdateEndpointsBatchCommand === "function");
assert(typeof UpdateEndpointsBatch$ === "object");
assert(typeof UpdateGcmChannelCommand === "function");
assert(typeof UpdateGcmChannel$ === "object");
assert(typeof UpdateInAppTemplateCommand === "function");
assert(typeof UpdateInAppTemplate$ === "object");
assert(typeof UpdateJourneyCommand === "function");
assert(typeof UpdateJourney$ === "object");
assert(typeof UpdateJourneyStateCommand === "function");
assert(typeof UpdateJourneyState$ === "object");
assert(typeof UpdatePushTemplateCommand === "function");
assert(typeof UpdatePushTemplate$ === "object");
assert(typeof UpdateRecommenderConfigurationCommand === "function");
assert(typeof UpdateRecommenderConfiguration$ === "object");
assert(typeof UpdateSegmentCommand === "function");
assert(typeof UpdateSegment$ === "object");
assert(typeof UpdateSmsChannelCommand === "function");
assert(typeof UpdateSmsChannel$ === "object");
assert(typeof UpdateSmsTemplateCommand === "function");
assert(typeof UpdateSmsTemplate$ === "object");
assert(typeof UpdateTemplateActiveVersionCommand === "function");
assert(typeof UpdateTemplateActiveVersion$ === "object");
assert(typeof UpdateVoiceChannelCommand === "function");
assert(typeof UpdateVoiceChannel$ === "object");
assert(typeof UpdateVoiceTemplateCommand === "function");
assert(typeof UpdateVoiceTemplate$ === "object");
assert(typeof VerifyOTPMessageCommand === "function");
assert(typeof VerifyOTPMessage$ === "object");
// structural schemas
assert(typeof ActivitiesResponse$ === "object");
assert(typeof Activity$ === "object");
assert(typeof ActivityResponse$ === "object");
assert(typeof AddressConfiguration$ === "object");
assert(typeof ADMChannelRequest$ === "object");
assert(typeof ADMChannelResponse$ === "object");
assert(typeof ADMMessage$ === "object");
assert(typeof AndroidPushNotificationTemplate$ === "object");
assert(typeof APNSChannelRequest$ === "object");
assert(typeof APNSChannelResponse$ === "object");
assert(typeof APNSMessage$ === "object");
assert(typeof APNSPushNotificationTemplate$ === "object");
assert(typeof APNSSandboxChannelRequest$ === "object");
assert(typeof APNSSandboxChannelResponse$ === "object");
assert(typeof APNSVoipChannelRequest$ === "object");
assert(typeof APNSVoipChannelResponse$ === "object");
assert(typeof APNSVoipSandboxChannelRequest$ === "object");
assert(typeof APNSVoipSandboxChannelResponse$ === "object");
assert(typeof ApplicationDateRangeKpiResponse$ === "object");
assert(typeof ApplicationResponse$ === "object");
assert(typeof ApplicationSettingsJourneyLimits$ === "object");
assert(typeof ApplicationSettingsResource$ === "object");
assert(typeof ApplicationsResponse$ === "object");
assert(typeof AttributeDimension$ === "object");
assert(typeof AttributesResource$ === "object");
assert(typeof BaiduChannelRequest$ === "object");
assert(typeof BaiduChannelResponse$ === "object");
assert(typeof BaiduMessage$ === "object");
assert(typeof BaseKpiResult$ === "object");
assert(typeof CampaignCustomMessage$ === "object");
assert(typeof CampaignDateRangeKpiResponse$ === "object");
assert(typeof CampaignEmailMessage$ === "object");
assert(typeof CampaignEventFilter$ === "object");
assert(typeof CampaignHook$ === "object");
assert(typeof CampaignInAppMessage$ === "object");
assert(typeof CampaignLimits$ === "object");
assert(typeof CampaignResponse$ === "object");
assert(typeof CampaignSmsMessage$ === "object");
assert(typeof CampaignsResponse$ === "object");
assert(typeof CampaignState$ === "object");
assert(typeof ChannelResponse$ === "object");
assert(typeof ChannelsResponse$ === "object");
assert(typeof ClosedDays$ === "object");
assert(typeof ClosedDaysRule$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionalSplitActivity$ === "object");
assert(typeof ContactCenterActivity$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateAppRequest$ === "object");
assert(typeof CreateAppResponse$ === "object");
assert(typeof CreateCampaignRequest$ === "object");
assert(typeof CreateCampaignResponse$ === "object");
assert(typeof CreateEmailTemplateRequest$ === "object");
assert(typeof CreateEmailTemplateResponse$ === "object");
assert(typeof CreateExportJobRequest$ === "object");
assert(typeof CreateExportJobResponse$ === "object");
assert(typeof CreateImportJobRequest$ === "object");
assert(typeof CreateImportJobResponse$ === "object");
assert(typeof CreateInAppTemplateRequest$ === "object");
assert(typeof CreateInAppTemplateResponse$ === "object");
assert(typeof CreateJourneyRequest$ === "object");
assert(typeof CreateJourneyResponse$ === "object");
assert(typeof CreatePushTemplateRequest$ === "object");
assert(typeof CreatePushTemplateResponse$ === "object");
assert(typeof CreateRecommenderConfigurationRequest$ === "object");
assert(typeof CreateRecommenderConfigurationResponse$ === "object");
assert(typeof CreateRecommenderConfigurationShape$ === "object");
assert(typeof CreateSegmentRequest$ === "object");
assert(typeof CreateSegmentResponse$ === "object");
assert(typeof CreateSmsTemplateRequest$ === "object");
assert(typeof CreateSmsTemplateResponse$ === "object");
assert(typeof CreateTemplateMessageBody$ === "object");
assert(typeof CreateVoiceTemplateRequest$ === "object");
assert(typeof CreateVoiceTemplateResponse$ === "object");
assert(typeof CustomDeliveryConfiguration$ === "object");
assert(typeof CustomMessageActivity$ === "object");
assert(typeof DefaultButtonConfiguration$ === "object");
assert(typeof DefaultMessage$ === "object");
assert(typeof DefaultPushNotificationMessage$ === "object");
assert(typeof DefaultPushNotificationTemplate$ === "object");
assert(typeof DeleteAdmChannelRequest$ === "object");
assert(typeof DeleteAdmChannelResponse$ === "object");
assert(typeof DeleteApnsChannelRequest$ === "object");
assert(typeof DeleteApnsChannelResponse$ === "object");
assert(typeof DeleteApnsSandboxChannelRequest$ === "object");
assert(typeof DeleteApnsSandboxChannelResponse$ === "object");
assert(typeof DeleteApnsVoipChannelRequest$ === "object");
assert(typeof DeleteApnsVoipChannelResponse$ === "object");
assert(typeof DeleteApnsVoipSandboxChannelRequest$ === "object");
assert(typeof DeleteApnsVoipSandboxChannelResponse$ === "object");
assert(typeof DeleteAppRequest$ === "object");
assert(typeof DeleteAppResponse$ === "object");
assert(typeof DeleteBaiduChannelRequest$ === "object");
assert(typeof DeleteBaiduChannelResponse$ === "object");
assert(typeof DeleteCampaignRequest$ === "object");
assert(typeof DeleteCampaignResponse$ === "object");
assert(typeof DeleteEmailChannelRequest$ === "object");
assert(typeof DeleteEmailChannelResponse$ === "object");
assert(typeof DeleteEmailTemplateRequest$ === "object");
assert(typeof DeleteEmailTemplateResponse$ === "object");
assert(typeof DeleteEndpointRequest$ === "object");
assert(typeof DeleteEndpointResponse$ === "object");
assert(typeof DeleteEventStreamRequest$ === "object");
assert(typeof DeleteEventStreamResponse$ === "object");
assert(typeof DeleteGcmChannelRequest$ === "object");
assert(typeof DeleteGcmChannelResponse$ === "object");
assert(typeof DeleteInAppTemplateRequest$ === "object");
assert(typeof DeleteInAppTemplateResponse$ === "object");
assert(typeof DeleteJourneyRequest$ === "object");
assert(typeof DeleteJourneyResponse$ === "object");
assert(typeof DeletePushTemplateRequest$ === "object");
assert(typeof DeletePushTemplateResponse$ === "object");
assert(typeof DeleteRecommenderConfigurationRequest$ === "object");
assert(typeof DeleteRecommenderConfigurationResponse$ === "object");
assert(typeof DeleteSegmentRequest$ === "object");
assert(typeof DeleteSegmentResponse$ === "object");
assert(typeof DeleteSmsChannelRequest$ === "object");
assert(typeof DeleteSmsChannelResponse$ === "object");
assert(typeof DeleteSmsTemplateRequest$ === "object");
assert(typeof DeleteSmsTemplateResponse$ === "object");
assert(typeof DeleteUserEndpointsRequest$ === "object");
assert(typeof DeleteUserEndpointsResponse$ === "object");
assert(typeof DeleteVoiceChannelRequest$ === "object");
assert(typeof DeleteVoiceChannelResponse$ === "object");
assert(typeof DeleteVoiceTemplateRequest$ === "object");
assert(typeof DeleteVoiceTemplateResponse$ === "object");
assert(typeof DirectMessageConfiguration$ === "object");
assert(typeof EmailChannelRequest$ === "object");
assert(typeof EmailChannelResponse$ === "object");
assert(typeof EmailMessage$ === "object");
assert(typeof EmailMessageActivity$ === "object");
assert(typeof EmailTemplateRequest$ === "object");
assert(typeof EmailTemplateResponse$ === "object");
assert(typeof EndpointBatchItem$ === "object");
assert(typeof EndpointBatchRequest$ === "object");
assert(typeof EndpointDemographic$ === "object");
assert(typeof EndpointItemResponse$ === "object");
assert(typeof EndpointLocation$ === "object");
assert(typeof EndpointMessageResult$ === "object");
assert(typeof EndpointRequest$ === "object");
assert(typeof EndpointResponse$ === "object");
assert(typeof EndpointSendConfiguration$ === "object");
assert(typeof EndpointsResponse$ === "object");
assert(typeof EndpointUser$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventCondition$ === "object");
assert(typeof EventDimensions$ === "object");
assert(typeof EventFilter$ === "object");
assert(typeof EventItemResponse$ === "object");
assert(typeof EventsBatch$ === "object");
assert(typeof EventsRequest$ === "object");
assert(typeof EventsResponse$ === "object");
assert(typeof EventStartCondition$ === "object");
assert(typeof EventStream$ === "object");
assert(typeof ExportJobRequest$ === "object");
assert(typeof ExportJobResource$ === "object");
assert(typeof ExportJobResponse$ === "object");
assert(typeof ExportJobsResponse$ === "object");
assert(typeof GCMChannelRequest$ === "object");
assert(typeof GCMChannelResponse$ === "object");
assert(typeof GCMMessage$ === "object");
assert(typeof GetAdmChannelRequest$ === "object");
assert(typeof GetAdmChannelResponse$ === "object");
assert(typeof GetApnsChannelRequest$ === "object");
assert(typeof GetApnsChannelResponse$ === "object");
assert(typeof GetApnsSandboxChannelRequest$ === "object");
assert(typeof GetApnsSandboxChannelResponse$ === "object");
assert(typeof GetApnsVoipChannelRequest$ === "object");
assert(typeof GetApnsVoipChannelResponse$ === "object");
assert(typeof GetApnsVoipSandboxChannelRequest$ === "object");
assert(typeof GetApnsVoipSandboxChannelResponse$ === "object");
assert(typeof GetApplicationDateRangeKpiRequest$ === "object");
assert(typeof GetApplicationDateRangeKpiResponse$ === "object");
assert(typeof GetApplicationSettingsRequest$ === "object");
assert(typeof GetApplicationSettingsResponse$ === "object");
assert(typeof GetAppRequest$ === "object");
assert(typeof GetAppResponse$ === "object");
assert(typeof GetAppsRequest$ === "object");
assert(typeof GetAppsResponse$ === "object");
assert(typeof GetBaiduChannelRequest$ === "object");
assert(typeof GetBaiduChannelResponse$ === "object");
assert(typeof GetCampaignActivitiesRequest$ === "object");
assert(typeof GetCampaignActivitiesResponse$ === "object");
assert(typeof GetCampaignDateRangeKpiRequest$ === "object");
assert(typeof GetCampaignDateRangeKpiResponse$ === "object");
assert(typeof GetCampaignRequest$ === "object");
assert(typeof GetCampaignResponse$ === "object");
assert(typeof GetCampaignsRequest$ === "object");
assert(typeof GetCampaignsResponse$ === "object");
assert(typeof GetCampaignVersionRequest$ === "object");
assert(typeof GetCampaignVersionResponse$ === "object");
assert(typeof GetCampaignVersionsRequest$ === "object");
assert(typeof GetCampaignVersionsResponse$ === "object");
assert(typeof GetChannelsRequest$ === "object");
assert(typeof GetChannelsResponse$ === "object");
assert(typeof GetEmailChannelRequest$ === "object");
assert(typeof GetEmailChannelResponse$ === "object");
assert(typeof GetEmailTemplateRequest$ === "object");
assert(typeof GetEmailTemplateResponse$ === "object");
assert(typeof GetEndpointRequest$ === "object");
assert(typeof GetEndpointResponse$ === "object");
assert(typeof GetEventStreamRequest$ === "object");
assert(typeof GetEventStreamResponse$ === "object");
assert(typeof GetExportJobRequest$ === "object");
assert(typeof GetExportJobResponse$ === "object");
assert(typeof GetExportJobsRequest$ === "object");
assert(typeof GetExportJobsResponse$ === "object");
assert(typeof GetGcmChannelRequest$ === "object");
assert(typeof GetGcmChannelResponse$ === "object");
assert(typeof GetImportJobRequest$ === "object");
assert(typeof GetImportJobResponse$ === "object");
assert(typeof GetImportJobsRequest$ === "object");
assert(typeof GetImportJobsResponse$ === "object");
assert(typeof GetInAppMessagesRequest$ === "object");
assert(typeof GetInAppMessagesResponse$ === "object");
assert(typeof GetInAppTemplateRequest$ === "object");
assert(typeof GetInAppTemplateResponse$ === "object");
assert(typeof GetJourneyDateRangeKpiRequest$ === "object");
assert(typeof GetJourneyDateRangeKpiResponse$ === "object");
assert(typeof GetJourneyExecutionActivityMetricsRequest$ === "object");
assert(typeof GetJourneyExecutionActivityMetricsResponse$ === "object");
assert(typeof GetJourneyExecutionMetricsRequest$ === "object");
assert(typeof GetJourneyExecutionMetricsResponse$ === "object");
assert(typeof GetJourneyRequest$ === "object");
assert(typeof GetJourneyResponse$ === "object");
assert(typeof GetJourneyRunExecutionActivityMetricsRequest$ === "object");
assert(typeof GetJourneyRunExecutionActivityMetricsResponse$ === "object");
assert(typeof GetJourneyRunExecutionMetricsRequest$ === "object");
assert(typeof GetJourneyRunExecutionMetricsResponse$ === "object");
assert(typeof GetJourneyRunsRequest$ === "object");
assert(typeof GetJourneyRunsResponse$ === "object");
assert(typeof GetPushTemplateRequest$ === "object");
assert(typeof GetPushTemplateResponse$ === "object");
assert(typeof GetRecommenderConfigurationRequest$ === "object");
assert(typeof GetRecommenderConfigurationResponse$ === "object");
assert(typeof GetRecommenderConfigurationsRequest$ === "object");
assert(typeof GetRecommenderConfigurationsResponse$ === "object");
assert(typeof GetSegmentExportJobsRequest$ === "object");
assert(typeof GetSegmentExportJobsResponse$ === "object");
assert(typeof GetSegmentImportJobsRequest$ === "object");
assert(typeof GetSegmentImportJobsResponse$ === "object");
assert(typeof GetSegmentRequest$ === "object");
assert(typeof GetSegmentResponse$ === "object");
assert(typeof GetSegmentsRequest$ === "object");
assert(typeof GetSegmentsResponse$ === "object");
assert(typeof GetSegmentVersionRequest$ === "object");
assert(typeof GetSegmentVersionResponse$ === "object");
assert(typeof GetSegmentVersionsRequest$ === "object");
assert(typeof GetSegmentVersionsResponse$ === "object");
assert(typeof GetSmsChannelRequest$ === "object");
assert(typeof GetSmsChannelResponse$ === "object");
assert(typeof GetSmsTemplateRequest$ === "object");
assert(typeof GetSmsTemplateResponse$ === "object");
assert(typeof GetUserEndpointsRequest$ === "object");
assert(typeof GetUserEndpointsResponse$ === "object");
assert(typeof GetVoiceChannelRequest$ === "object");
assert(typeof GetVoiceChannelResponse$ === "object");
assert(typeof GetVoiceTemplateRequest$ === "object");
assert(typeof GetVoiceTemplateResponse$ === "object");
assert(typeof GPSCoordinates$ === "object");
assert(typeof GPSPointDimension$ === "object");
assert(typeof HoldoutActivity$ === "object");
assert(typeof ImportJobRequest$ === "object");
assert(typeof ImportJobResource$ === "object");
assert(typeof ImportJobResponse$ === "object");
assert(typeof ImportJobsResponse$ === "object");
assert(typeof InAppCampaignSchedule$ === "object");
assert(typeof InAppMessage$ === "object");
assert(typeof InAppMessageBodyConfig$ === "object");
assert(typeof InAppMessageButton$ === "object");
assert(typeof InAppMessageCampaign$ === "object");
assert(typeof InAppMessageContent$ === "object");
assert(typeof InAppMessageHeaderConfig$ === "object");
assert(typeof InAppMessagesResponse$ === "object");
assert(typeof InAppTemplateRequest$ === "object");
assert(typeof InAppTemplateResponse$ === "object");
assert(typeof ItemResponse$ === "object");
assert(typeof JourneyChannelSettings$ === "object");
assert(typeof JourneyCustomMessage$ === "object");
assert(typeof JourneyDateRangeKpiResponse$ === "object");
assert(typeof JourneyEmailMessage$ === "object");
assert(typeof JourneyExecutionActivityMetricsResponse$ === "object");
assert(typeof JourneyExecutionMetricsResponse$ === "object");
assert(typeof JourneyLimits$ === "object");
assert(typeof JourneyPushMessage$ === "object");
assert(typeof JourneyResponse$ === "object");
assert(typeof JourneyRunExecutionActivityMetricsResponse$ === "object");
assert(typeof JourneyRunExecutionMetricsResponse$ === "object");
assert(typeof JourneyRunResponse$ === "object");
assert(typeof JourneyRunsResponse$ === "object");
assert(typeof JourneySchedule$ === "object");
assert(typeof JourneySMSMessage$ === "object");
assert(typeof JourneysResponse$ === "object");
assert(typeof JourneyStateRequest$ === "object");
assert(typeof JourneyTimeframeCap$ === "object");
assert(typeof ListJourneysRequest$ === "object");
assert(typeof ListJourneysResponse$ === "object");
assert(typeof ListRecommenderConfigurationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTemplatesRequest$ === "object");
assert(typeof ListTemplatesResponse$ === "object");
assert(typeof ListTemplateVersionsRequest$ === "object");
assert(typeof ListTemplateVersionsResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof MessageBody$ === "object");
assert(typeof MessageConfiguration$ === "object");
assert(typeof MessageHeader$ === "object");
assert(typeof MessageRequest$ === "object");
assert(typeof MessageResponse$ === "object");
assert(typeof MessageResult$ === "object");
assert(typeof MetricDimension$ === "object");
assert(typeof MultiConditionalBranch$ === "object");
assert(typeof MultiConditionalSplitActivity$ === "object");
assert(typeof NumberValidateRequest$ === "object");
assert(typeof NumberValidateResponse$ === "object");
assert(typeof OpenHours$ === "object");
assert(typeof OpenHoursRule$ === "object");
assert(typeof OverrideButtonConfiguration$ === "object");
assert(typeof PhoneNumberValidateRequest$ === "object");
assert(typeof PhoneNumberValidateResponse$ === "object");
assert(typeof PublicEndpoint$ === "object");
assert(typeof PushMessageActivity$ === "object");
assert(typeof PushNotificationTemplateRequest$ === "object");
assert(typeof PushNotificationTemplateResponse$ === "object");
assert(typeof PutEventsRequest$ === "object");
assert(typeof PutEventsResponse$ === "object");
assert(typeof PutEventStreamRequest$ === "object");
assert(typeof PutEventStreamResponse$ === "object");
assert(typeof QuietTime$ === "object");
assert(typeof RandomSplitActivity$ === "object");
assert(typeof RandomSplitEntry$ === "object");
assert(typeof RawEmail$ === "object");
assert(typeof RecencyDimension$ === "object");
assert(typeof RecommenderConfigurationResponse$ === "object");
assert(typeof RemoveAttributesRequest$ === "object");
assert(typeof RemoveAttributesResponse$ === "object");
assert(typeof ResultRow$ === "object");
assert(typeof ResultRowValue$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SegmentBehaviors$ === "object");
assert(typeof SegmentCondition$ === "object");
assert(typeof SegmentDemographics$ === "object");
assert(typeof SegmentDimensions$ === "object");
assert(typeof SegmentGroup$ === "object");
assert(typeof SegmentGroupList$ === "object");
assert(typeof SegmentImportResource$ === "object");
assert(typeof SegmentLocation$ === "object");
assert(typeof SegmentReference$ === "object");
assert(typeof SegmentResponse$ === "object");
assert(typeof SegmentsResponse$ === "object");
assert(typeof SendMessagesRequest$ === "object");
assert(typeof SendMessagesResponse$ === "object");
assert(typeof SendOTPMessageRequest$ === "object");
assert(typeof SendOTPMessageRequestParameters$ === "object");
assert(typeof SendOTPMessageResponse$ === "object");
assert(typeof SendUsersMessageRequest$ === "object");
assert(typeof SendUsersMessageResponse$ === "object");
assert(typeof SendUsersMessagesRequest$ === "object");
assert(typeof SendUsersMessagesResponse$ === "object");
assert(typeof Session$ === "object");
assert(typeof SetDimension$ === "object");
assert(typeof SimpleCondition$ === "object");
assert(typeof SimpleEmail$ === "object");
assert(typeof SimpleEmailPart$ === "object");
assert(typeof SMSChannelRequest$ === "object");
assert(typeof SMSChannelResponse$ === "object");
assert(typeof SMSMessage$ === "object");
assert(typeof SMSMessageActivity$ === "object");
assert(typeof SMSTemplateRequest$ === "object");
assert(typeof SMSTemplateResponse$ === "object");
assert(typeof StartCondition$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagsModel$ === "object");
assert(typeof Template$ === "object");
assert(typeof TemplateActiveVersionRequest$ === "object");
assert(typeof TemplateConfiguration$ === "object");
assert(typeof TemplateCreateMessageBody$ === "object");
assert(typeof TemplateResponse$ === "object");
assert(typeof TemplatesResponse$ === "object");
assert(typeof TemplateVersionResponse$ === "object");
assert(typeof TemplateVersionsResponse$ === "object");
assert(typeof TreatmentResource$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAdmChannelRequest$ === "object");
assert(typeof UpdateAdmChannelResponse$ === "object");
assert(typeof UpdateApnsChannelRequest$ === "object");
assert(typeof UpdateApnsChannelResponse$ === "object");
assert(typeof UpdateApnsSandboxChannelRequest$ === "object");
assert(typeof UpdateApnsSandboxChannelResponse$ === "object");
assert(typeof UpdateApnsVoipChannelRequest$ === "object");
assert(typeof UpdateApnsVoipChannelResponse$ === "object");
assert(typeof UpdateApnsVoipSandboxChannelRequest$ === "object");
assert(typeof UpdateApnsVoipSandboxChannelResponse$ === "object");
assert(typeof UpdateApplicationSettingsRequest$ === "object");
assert(typeof UpdateApplicationSettingsResponse$ === "object");
assert(typeof UpdateAttributesRequest$ === "object");
assert(typeof UpdateBaiduChannelRequest$ === "object");
assert(typeof UpdateBaiduChannelResponse$ === "object");
assert(typeof UpdateCampaignRequest$ === "object");
assert(typeof UpdateCampaignResponse$ === "object");
assert(typeof UpdateEmailChannelRequest$ === "object");
assert(typeof UpdateEmailChannelResponse$ === "object");
assert(typeof UpdateEmailTemplateRequest$ === "object");
assert(typeof UpdateEmailTemplateResponse$ === "object");
assert(typeof UpdateEndpointRequest$ === "object");
assert(typeof UpdateEndpointResponse$ === "object");
assert(typeof UpdateEndpointsBatchRequest$ === "object");
assert(typeof UpdateEndpointsBatchResponse$ === "object");
assert(typeof UpdateGcmChannelRequest$ === "object");
assert(typeof UpdateGcmChannelResponse$ === "object");
assert(typeof UpdateInAppTemplateRequest$ === "object");
assert(typeof UpdateInAppTemplateResponse$ === "object");
assert(typeof UpdateJourneyRequest$ === "object");
assert(typeof UpdateJourneyResponse$ === "object");
assert(typeof UpdateJourneyStateRequest$ === "object");
assert(typeof UpdateJourneyStateResponse$ === "object");
assert(typeof UpdatePushTemplateRequest$ === "object");
assert(typeof UpdatePushTemplateResponse$ === "object");
assert(typeof UpdateRecommenderConfigurationRequest$ === "object");
assert(typeof UpdateRecommenderConfigurationResponse$ === "object");
assert(typeof UpdateRecommenderConfigurationShape$ === "object");
assert(typeof UpdateSegmentRequest$ === "object");
assert(typeof UpdateSegmentResponse$ === "object");
assert(typeof UpdateSmsChannelRequest$ === "object");
assert(typeof UpdateSmsChannelResponse$ === "object");
assert(typeof UpdateSmsTemplateRequest$ === "object");
assert(typeof UpdateSmsTemplateResponse$ === "object");
assert(typeof UpdateTemplateActiveVersionRequest$ === "object");
assert(typeof UpdateTemplateActiveVersionResponse$ === "object");
assert(typeof UpdateVoiceChannelRequest$ === "object");
assert(typeof UpdateVoiceChannelResponse$ === "object");
assert(typeof UpdateVoiceTemplateRequest$ === "object");
assert(typeof UpdateVoiceTemplateResponse$ === "object");
assert(typeof VerificationResponse$ === "object");
assert(typeof VerifyOTPMessageRequest$ === "object");
assert(typeof VerifyOTPMessageRequestParameters$ === "object");
assert(typeof VerifyOTPMessageResponse$ === "object");
assert(typeof VoiceChannelRequest$ === "object");
assert(typeof VoiceChannelResponse$ === "object");
assert(typeof VoiceMessage$ === "object");
assert(typeof VoiceTemplateRequest$ === "object");
assert(typeof VoiceTemplateResponse$ === "object");
assert(typeof WaitActivity$ === "object");
assert(typeof WaitTime$ === "object");
assert(typeof WriteApplicationSettingsRequest$ === "object");
assert(typeof WriteCampaignRequest$ === "object");
assert(typeof WriteEventStream$ === "object");
assert(typeof WriteJourneyRequest$ === "object");
assert(typeof WriteSegmentRequest$ === "object");
assert(typeof WriteTreatmentResource$ === "object");
// enums
assert(typeof __EndpointTypesElement === "object");
assert(typeof __TimezoneEstimationMethodsElement === "object");
assert(typeof Action === "object");
assert(typeof Alignment === "object");
assert(typeof AttributeType === "object");
assert(typeof ButtonAction === "object");
assert(typeof CampaignStatus === "object");
assert(typeof ChannelType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof DeliveryStatus === "object");
assert(typeof DimensionType === "object");
assert(typeof Duration === "object");
assert(typeof FilterType === "object");
assert(typeof Format === "object");
assert(typeof Frequency === "object");
assert(typeof Include === "object");
assert(typeof JobStatus === "object");
assert(typeof JourneyRunStatus === "object");
assert(typeof Layout === "object");
assert(typeof MessageType === "object");
assert(typeof Mode === "object");
assert(typeof Operator === "object");
assert(typeof RecencyType === "object");
assert(typeof SegmentType === "object");
assert(typeof SourceType === "object");
assert(typeof State === "object");
assert(typeof TemplateType === "object");
assert(typeof Type === "object");
// errors
assert(BadRequestException.prototype instanceof PinpointServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof PinpointServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof PinpointServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof PinpointServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(MethodNotAllowedException.prototype instanceof PinpointServiceException);
assert(typeof MethodNotAllowedException$ === "object");
assert(NotFoundException.prototype instanceof PinpointServiceException);
assert(typeof NotFoundException$ === "object");
assert(PayloadTooLargeException.prototype instanceof PinpointServiceException);
assert(typeof PayloadTooLargeException$ === "object");
assert(TooManyRequestsException.prototype instanceof PinpointServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(PinpointServiceException.prototype instanceof Error);
console.log(`Pinpoint index test passed.`);
