import {
  Action,
  Alignment,
  AttributeType,
  ButtonAction,
  CampaignStatus,
  ChannelType,
  CreateAppCommand,
  CreateCampaignCommand,
  CreateEmailTemplateCommand,
  CreateExportJobCommand,
  CreateImportJobCommand,
  CreateInAppTemplateCommand,
  CreateJourneyCommand,
  CreatePushTemplateCommand,
  CreateRecommenderConfigurationCommand,
  CreateSegmentCommand,
  CreateSmsTemplateCommand,
  CreateVoiceTemplateCommand,
  DayOfWeek,
  DeleteAdmChannelCommand,
  DeleteApnsChannelCommand,
  DeleteApnsSandboxChannelCommand,
  DeleteApnsVoipChannelCommand,
  DeleteApnsVoipSandboxChannelCommand,
  DeleteAppCommand,
  DeleteBaiduChannelCommand,
  DeleteCampaignCommand,
  DeleteEmailChannelCommand,
  DeleteEmailTemplateCommand,
  DeleteEndpointCommand,
  DeleteEventStreamCommand,
  DeleteGcmChannelCommand,
  DeleteInAppTemplateCommand,
  DeleteJourneyCommand,
  DeletePushTemplateCommand,
  DeleteRecommenderConfigurationCommand,
  DeleteSegmentCommand,
  DeleteSmsChannelCommand,
  DeleteSmsTemplateCommand,
  DeleteUserEndpointsCommand,
  DeleteVoiceChannelCommand,
  DeleteVoiceTemplateCommand,
  DeliveryStatus,
  DimensionType,
  Duration,
  FilterType,
  Format,
  Frequency,
  GetAdmChannelCommand,
  GetApnsChannelCommand,
  GetApnsSandboxChannelCommand,
  GetApnsVoipChannelCommand,
  GetApnsVoipSandboxChannelCommand,
  GetAppCommand,
  GetApplicationDateRangeKpiCommand,
  GetApplicationSettingsCommand,
  GetAppsCommand,
  GetBaiduChannelCommand,
  GetCampaignActivitiesCommand,
  GetCampaignCommand,
  GetCampaignDateRangeKpiCommand,
  GetCampaignVersionCommand,
  GetCampaignVersionsCommand,
  GetCampaignsCommand,
  GetChannelsCommand,
  GetEmailChannelCommand,
  GetEmailTemplateCommand,
  GetEndpointCommand,
  GetEventStreamCommand,
  GetExportJobCommand,
  GetExportJobsCommand,
  GetGcmChannelCommand,
  GetImportJobCommand,
  GetImportJobsCommand,
  GetInAppMessagesCommand,
  GetInAppTemplateCommand,
  GetJourneyCommand,
  GetJourneyDateRangeKpiCommand,
  GetJourneyExecutionActivityMetricsCommand,
  GetJourneyExecutionMetricsCommand,
  GetJourneyRunExecutionActivityMetricsCommand,
  GetJourneyRunExecutionMetricsCommand,
  GetJourneyRunsCommand,
  GetPushTemplateCommand,
  GetRecommenderConfigurationCommand,
  GetRecommenderConfigurationsCommand,
  GetSegmentCommand,
  GetSegmentExportJobsCommand,
  GetSegmentImportJobsCommand,
  GetSegmentVersionCommand,
  GetSegmentVersionsCommand,
  GetSegmentsCommand,
  GetSmsChannelCommand,
  GetSmsTemplateCommand,
  GetUserEndpointsCommand,
  GetVoiceChannelCommand,
  GetVoiceTemplateCommand,
  Include,
  JobStatus,
  JourneyRunStatus,
  Layout,
  ListJourneysCommand,
  ListTagsForResourceCommand,
  ListTemplateVersionsCommand,
  ListTemplatesCommand,
  MessageType,
  Mode,
  Operator,
  PhoneNumberValidateCommand,
  Pinpoint,
  PinpointClient,
  PinpointServiceException,
  PutEventStreamCommand,
  PutEventsCommand,
  RecencyType,
  RemoveAttributesCommand,
  SegmentType,
  SendMessagesCommand,
  SendOTPMessageCommand,
  SendUsersMessagesCommand,
  SourceType,
  State,
  TagResourceCommand,
  TemplateType,
  Type,
  UntagResourceCommand,
  UpdateAdmChannelCommand,
  UpdateApnsChannelCommand,
  UpdateApnsSandboxChannelCommand,
  UpdateApnsVoipChannelCommand,
  UpdateApnsVoipSandboxChannelCommand,
  UpdateApplicationSettingsCommand,
  UpdateBaiduChannelCommand,
  UpdateCampaignCommand,
  UpdateEmailChannelCommand,
  UpdateEmailTemplateCommand,
  UpdateEndpointCommand,
  UpdateEndpointsBatchCommand,
  UpdateGcmChannelCommand,
  UpdateInAppTemplateCommand,
  UpdateJourneyCommand,
  UpdateJourneyStateCommand,
  UpdatePushTemplateCommand,
  UpdateRecommenderConfigurationCommand,
  UpdateSegmentCommand,
  UpdateSmsChannelCommand,
  UpdateSmsTemplateCommand,
  UpdateTemplateActiveVersionCommand,
  UpdateVoiceChannelCommand,
  UpdateVoiceTemplateCommand,
  VerifyOTPMessageCommand,
  __EndpointTypesElement,
  __TimezoneEstimationMethodsElement,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PinpointClient === "function")
assert(typeof Pinpoint === "function")
// commands
assert(typeof CreateAppCommand === "function")
assert(typeof CreateCampaignCommand === "function")
assert(typeof CreateEmailTemplateCommand === "function")
assert(typeof CreateExportJobCommand === "function")
assert(typeof CreateImportJobCommand === "function")
assert(typeof CreateInAppTemplateCommand === "function")
assert(typeof CreateJourneyCommand === "function")
assert(typeof CreatePushTemplateCommand === "function")
assert(typeof CreateRecommenderConfigurationCommand === "function")
assert(typeof CreateSegmentCommand === "function")
assert(typeof CreateSmsTemplateCommand === "function")
assert(typeof CreateVoiceTemplateCommand === "function")
assert(typeof DeleteAdmChannelCommand === "function")
assert(typeof DeleteApnsChannelCommand === "function")
assert(typeof DeleteApnsSandboxChannelCommand === "function")
assert(typeof DeleteApnsVoipChannelCommand === "function")
assert(typeof DeleteApnsVoipSandboxChannelCommand === "function")
assert(typeof DeleteAppCommand === "function")
assert(typeof DeleteBaiduChannelCommand === "function")
assert(typeof DeleteCampaignCommand === "function")
assert(typeof DeleteEmailChannelCommand === "function")
assert(typeof DeleteEmailTemplateCommand === "function")
assert(typeof DeleteEndpointCommand === "function")
assert(typeof DeleteEventStreamCommand === "function")
assert(typeof DeleteGcmChannelCommand === "function")
assert(typeof DeleteInAppTemplateCommand === "function")
assert(typeof DeleteJourneyCommand === "function")
assert(typeof DeletePushTemplateCommand === "function")
assert(typeof DeleteRecommenderConfigurationCommand === "function")
assert(typeof DeleteSegmentCommand === "function")
assert(typeof DeleteSmsChannelCommand === "function")
assert(typeof DeleteSmsTemplateCommand === "function")
assert(typeof DeleteUserEndpointsCommand === "function")
assert(typeof DeleteVoiceChannelCommand === "function")
assert(typeof DeleteVoiceTemplateCommand === "function")
assert(typeof GetAdmChannelCommand === "function")
assert(typeof GetApnsChannelCommand === "function")
assert(typeof GetApnsSandboxChannelCommand === "function")
assert(typeof GetApnsVoipChannelCommand === "function")
assert(typeof GetApnsVoipSandboxChannelCommand === "function")
assert(typeof GetAppCommand === "function")
assert(typeof GetApplicationDateRangeKpiCommand === "function")
assert(typeof GetApplicationSettingsCommand === "function")
assert(typeof GetAppsCommand === "function")
assert(typeof GetBaiduChannelCommand === "function")
assert(typeof GetCampaignCommand === "function")
assert(typeof GetCampaignActivitiesCommand === "function")
assert(typeof GetCampaignDateRangeKpiCommand === "function")
assert(typeof GetCampaignsCommand === "function")
assert(typeof GetCampaignVersionCommand === "function")
assert(typeof GetCampaignVersionsCommand === "function")
assert(typeof GetChannelsCommand === "function")
assert(typeof GetEmailChannelCommand === "function")
assert(typeof GetEmailTemplateCommand === "function")
assert(typeof GetEndpointCommand === "function")
assert(typeof GetEventStreamCommand === "function")
assert(typeof GetExportJobCommand === "function")
assert(typeof GetExportJobsCommand === "function")
assert(typeof GetGcmChannelCommand === "function")
assert(typeof GetImportJobCommand === "function")
assert(typeof GetImportJobsCommand === "function")
assert(typeof GetInAppMessagesCommand === "function")
assert(typeof GetInAppTemplateCommand === "function")
assert(typeof GetJourneyCommand === "function")
assert(typeof GetJourneyDateRangeKpiCommand === "function")
assert(typeof GetJourneyExecutionActivityMetricsCommand === "function")
assert(typeof GetJourneyExecutionMetricsCommand === "function")
assert(typeof GetJourneyRunExecutionActivityMetricsCommand === "function")
assert(typeof GetJourneyRunExecutionMetricsCommand === "function")
assert(typeof GetJourneyRunsCommand === "function")
assert(typeof GetPushTemplateCommand === "function")
assert(typeof GetRecommenderConfigurationCommand === "function")
assert(typeof GetRecommenderConfigurationsCommand === "function")
assert(typeof GetSegmentCommand === "function")
assert(typeof GetSegmentExportJobsCommand === "function")
assert(typeof GetSegmentImportJobsCommand === "function")
assert(typeof GetSegmentsCommand === "function")
assert(typeof GetSegmentVersionCommand === "function")
assert(typeof GetSegmentVersionsCommand === "function")
assert(typeof GetSmsChannelCommand === "function")
assert(typeof GetSmsTemplateCommand === "function")
assert(typeof GetUserEndpointsCommand === "function")
assert(typeof GetVoiceChannelCommand === "function")
assert(typeof GetVoiceTemplateCommand === "function")
assert(typeof ListJourneysCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTemplatesCommand === "function")
assert(typeof ListTemplateVersionsCommand === "function")
assert(typeof PhoneNumberValidateCommand === "function")
assert(typeof PutEventsCommand === "function")
assert(typeof PutEventStreamCommand === "function")
assert(typeof RemoveAttributesCommand === "function")
assert(typeof SendMessagesCommand === "function")
assert(typeof SendOTPMessageCommand === "function")
assert(typeof SendUsersMessagesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAdmChannelCommand === "function")
assert(typeof UpdateApnsChannelCommand === "function")
assert(typeof UpdateApnsSandboxChannelCommand === "function")
assert(typeof UpdateApnsVoipChannelCommand === "function")
assert(typeof UpdateApnsVoipSandboxChannelCommand === "function")
assert(typeof UpdateApplicationSettingsCommand === "function")
assert(typeof UpdateBaiduChannelCommand === "function")
assert(typeof UpdateCampaignCommand === "function")
assert(typeof UpdateEmailChannelCommand === "function")
assert(typeof UpdateEmailTemplateCommand === "function")
assert(typeof UpdateEndpointCommand === "function")
assert(typeof UpdateEndpointsBatchCommand === "function")
assert(typeof UpdateGcmChannelCommand === "function")
assert(typeof UpdateInAppTemplateCommand === "function")
assert(typeof UpdateJourneyCommand === "function")
assert(typeof UpdateJourneyStateCommand === "function")
assert(typeof UpdatePushTemplateCommand === "function")
assert(typeof UpdateRecommenderConfigurationCommand === "function")
assert(typeof UpdateSegmentCommand === "function")
assert(typeof UpdateSmsChannelCommand === "function")
assert(typeof UpdateSmsTemplateCommand === "function")
assert(typeof UpdateTemplateActiveVersionCommand === "function")
assert(typeof UpdateVoiceChannelCommand === "function")
assert(typeof UpdateVoiceTemplateCommand === "function")
assert(typeof VerifyOTPMessageCommand === "function")
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
assert(PinpointServiceException.prototype instanceof Error)
console.log(`Pinpoint index test passed.`);
