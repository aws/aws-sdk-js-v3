// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateCampaignCommand,
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput,
} from "./commands/CreateCampaignCommand";
import {
  CreateEmailTemplateCommand,
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "./commands/CreateEmailTemplateCommand";
import {
  CreateExportJobCommand,
  CreateExportJobCommandInput,
  CreateExportJobCommandOutput,
} from "./commands/CreateExportJobCommand";
import {
  CreateImportJobCommand,
  CreateImportJobCommandInput,
  CreateImportJobCommandOutput,
} from "./commands/CreateImportJobCommand";
import {
  CreateInAppTemplateCommand,
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
} from "./commands/CreateInAppTemplateCommand";
import {
  CreateJourneyCommand,
  CreateJourneyCommandInput,
  CreateJourneyCommandOutput,
} from "./commands/CreateJourneyCommand";
import {
  CreatePushTemplateCommand,
  CreatePushTemplateCommandInput,
  CreatePushTemplateCommandOutput,
} from "./commands/CreatePushTemplateCommand";
import {
  CreateRecommenderConfigurationCommand,
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
} from "./commands/CreateRecommenderConfigurationCommand";
import {
  CreateSegmentCommand,
  CreateSegmentCommandInput,
  CreateSegmentCommandOutput,
} from "./commands/CreateSegmentCommand";
import {
  CreateSmsTemplateCommand,
  CreateSmsTemplateCommandInput,
  CreateSmsTemplateCommandOutput,
} from "./commands/CreateSmsTemplateCommand";
import {
  CreateVoiceTemplateCommand,
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
} from "./commands/CreateVoiceTemplateCommand";
import {
  DeleteAdmChannelCommand,
  DeleteAdmChannelCommandInput,
  DeleteAdmChannelCommandOutput,
} from "./commands/DeleteAdmChannelCommand";
import {
  DeleteApnsChannelCommand,
  DeleteApnsChannelCommandInput,
  DeleteApnsChannelCommandOutput,
} from "./commands/DeleteApnsChannelCommand";
import {
  DeleteApnsSandboxChannelCommand,
  DeleteApnsSandboxChannelCommandInput,
  DeleteApnsSandboxChannelCommandOutput,
} from "./commands/DeleteApnsSandboxChannelCommand";
import {
  DeleteApnsVoipChannelCommand,
  DeleteApnsVoipChannelCommandInput,
  DeleteApnsVoipChannelCommandOutput,
} from "./commands/DeleteApnsVoipChannelCommand";
import {
  DeleteApnsVoipSandboxChannelCommand,
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
} from "./commands/DeleteApnsVoipSandboxChannelCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteBaiduChannelCommand,
  DeleteBaiduChannelCommandInput,
  DeleteBaiduChannelCommandOutput,
} from "./commands/DeleteBaiduChannelCommand";
import {
  DeleteCampaignCommand,
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput,
} from "./commands/DeleteCampaignCommand";
import {
  DeleteEmailChannelCommand,
  DeleteEmailChannelCommandInput,
  DeleteEmailChannelCommandOutput,
} from "./commands/DeleteEmailChannelCommand";
import {
  DeleteEmailTemplateCommand,
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "./commands/DeleteEmailTemplateCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEventStreamCommand,
  DeleteEventStreamCommandInput,
  DeleteEventStreamCommandOutput,
} from "./commands/DeleteEventStreamCommand";
import {
  DeleteGcmChannelCommand,
  DeleteGcmChannelCommandInput,
  DeleteGcmChannelCommandOutput,
} from "./commands/DeleteGcmChannelCommand";
import {
  DeleteInAppTemplateCommand,
  DeleteInAppTemplateCommandInput,
  DeleteInAppTemplateCommandOutput,
} from "./commands/DeleteInAppTemplateCommand";
import {
  DeleteJourneyCommand,
  DeleteJourneyCommandInput,
  DeleteJourneyCommandOutput,
} from "./commands/DeleteJourneyCommand";
import {
  DeletePushTemplateCommand,
  DeletePushTemplateCommandInput,
  DeletePushTemplateCommandOutput,
} from "./commands/DeletePushTemplateCommand";
import {
  DeleteRecommenderConfigurationCommand,
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
} from "./commands/DeleteRecommenderConfigurationCommand";
import {
  DeleteSegmentCommand,
  DeleteSegmentCommandInput,
  DeleteSegmentCommandOutput,
} from "./commands/DeleteSegmentCommand";
import {
  DeleteSmsChannelCommand,
  DeleteSmsChannelCommandInput,
  DeleteSmsChannelCommandOutput,
} from "./commands/DeleteSmsChannelCommand";
import {
  DeleteSmsTemplateCommand,
  DeleteSmsTemplateCommandInput,
  DeleteSmsTemplateCommandOutput,
} from "./commands/DeleteSmsTemplateCommand";
import {
  DeleteUserEndpointsCommand,
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
} from "./commands/DeleteUserEndpointsCommand";
import {
  DeleteVoiceChannelCommand,
  DeleteVoiceChannelCommandInput,
  DeleteVoiceChannelCommandOutput,
} from "./commands/DeleteVoiceChannelCommand";
import {
  DeleteVoiceTemplateCommand,
  DeleteVoiceTemplateCommandInput,
  DeleteVoiceTemplateCommandOutput,
} from "./commands/DeleteVoiceTemplateCommand";
import {
  GetAdmChannelCommand,
  GetAdmChannelCommandInput,
  GetAdmChannelCommandOutput,
} from "./commands/GetAdmChannelCommand";
import {
  GetApnsChannelCommand,
  GetApnsChannelCommandInput,
  GetApnsChannelCommandOutput,
} from "./commands/GetApnsChannelCommand";
import {
  GetApnsSandboxChannelCommand,
  GetApnsSandboxChannelCommandInput,
  GetApnsSandboxChannelCommandOutput,
} from "./commands/GetApnsSandboxChannelCommand";
import {
  GetApnsVoipChannelCommand,
  GetApnsVoipChannelCommandInput,
  GetApnsVoipChannelCommandOutput,
} from "./commands/GetApnsVoipChannelCommand";
import {
  GetApnsVoipSandboxChannelCommand,
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
} from "./commands/GetApnsVoipSandboxChannelCommand";
import { GetAppCommand, GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetApplicationDateRangeKpiCommand,
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
} from "./commands/GetApplicationDateRangeKpiCommand";
import {
  GetApplicationSettingsCommand,
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
} from "./commands/GetApplicationSettingsCommand";
import { GetAppsCommand, GetAppsCommandInput, GetAppsCommandOutput } from "./commands/GetAppsCommand";
import {
  GetBaiduChannelCommand,
  GetBaiduChannelCommandInput,
  GetBaiduChannelCommandOutput,
} from "./commands/GetBaiduChannelCommand";
import {
  GetCampaignActivitiesCommand,
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
} from "./commands/GetCampaignActivitiesCommand";
import { GetCampaignCommand, GetCampaignCommandInput, GetCampaignCommandOutput } from "./commands/GetCampaignCommand";
import {
  GetCampaignDateRangeKpiCommand,
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
} from "./commands/GetCampaignDateRangeKpiCommand";
import {
  GetCampaignsCommand,
  GetCampaignsCommandInput,
  GetCampaignsCommandOutput,
} from "./commands/GetCampaignsCommand";
import {
  GetCampaignVersionCommand,
  GetCampaignVersionCommandInput,
  GetCampaignVersionCommandOutput,
} from "./commands/GetCampaignVersionCommand";
import {
  GetCampaignVersionsCommand,
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "./commands/GetCampaignVersionsCommand";
import { GetChannelsCommand, GetChannelsCommandInput, GetChannelsCommandOutput } from "./commands/GetChannelsCommand";
import {
  GetEmailChannelCommand,
  GetEmailChannelCommandInput,
  GetEmailChannelCommandOutput,
} from "./commands/GetEmailChannelCommand";
import {
  GetEmailTemplateCommand,
  GetEmailTemplateCommandInput,
  GetEmailTemplateCommandOutput,
} from "./commands/GetEmailTemplateCommand";
import { GetEndpointCommand, GetEndpointCommandInput, GetEndpointCommandOutput } from "./commands/GetEndpointCommand";
import {
  GetEventStreamCommand,
  GetEventStreamCommandInput,
  GetEventStreamCommandOutput,
} from "./commands/GetEventStreamCommand";
import {
  GetExportJobCommand,
  GetExportJobCommandInput,
  GetExportJobCommandOutput,
} from "./commands/GetExportJobCommand";
import {
  GetExportJobsCommand,
  GetExportJobsCommandInput,
  GetExportJobsCommandOutput,
} from "./commands/GetExportJobsCommand";
import {
  GetGcmChannelCommand,
  GetGcmChannelCommandInput,
  GetGcmChannelCommandOutput,
} from "./commands/GetGcmChannelCommand";
import {
  GetImportJobCommand,
  GetImportJobCommandInput,
  GetImportJobCommandOutput,
} from "./commands/GetImportJobCommand";
import {
  GetImportJobsCommand,
  GetImportJobsCommandInput,
  GetImportJobsCommandOutput,
} from "./commands/GetImportJobsCommand";
import {
  GetInAppMessagesCommand,
  GetInAppMessagesCommandInput,
  GetInAppMessagesCommandOutput,
} from "./commands/GetInAppMessagesCommand";
import {
  GetInAppTemplateCommand,
  GetInAppTemplateCommandInput,
  GetInAppTemplateCommandOutput,
} from "./commands/GetInAppTemplateCommand";
import { GetJourneyCommand, GetJourneyCommandInput, GetJourneyCommandOutput } from "./commands/GetJourneyCommand";
import {
  GetJourneyDateRangeKpiCommand,
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
} from "./commands/GetJourneyDateRangeKpiCommand";
import {
  GetJourneyExecutionActivityMetricsCommand,
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
} from "./commands/GetJourneyExecutionActivityMetricsCommand";
import {
  GetJourneyExecutionMetricsCommand,
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
} from "./commands/GetJourneyExecutionMetricsCommand";
import {
  GetJourneyRunExecutionActivityMetricsCommand,
  GetJourneyRunExecutionActivityMetricsCommandInput,
  GetJourneyRunExecutionActivityMetricsCommandOutput,
} from "./commands/GetJourneyRunExecutionActivityMetricsCommand";
import {
  GetJourneyRunExecutionMetricsCommand,
  GetJourneyRunExecutionMetricsCommandInput,
  GetJourneyRunExecutionMetricsCommandOutput,
} from "./commands/GetJourneyRunExecutionMetricsCommand";
import {
  GetJourneyRunsCommand,
  GetJourneyRunsCommandInput,
  GetJourneyRunsCommandOutput,
} from "./commands/GetJourneyRunsCommand";
import {
  GetPushTemplateCommand,
  GetPushTemplateCommandInput,
  GetPushTemplateCommandOutput,
} from "./commands/GetPushTemplateCommand";
import {
  GetRecommenderConfigurationCommand,
  GetRecommenderConfigurationCommandInput,
  GetRecommenderConfigurationCommandOutput,
} from "./commands/GetRecommenderConfigurationCommand";
import {
  GetRecommenderConfigurationsCommand,
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
} from "./commands/GetRecommenderConfigurationsCommand";
import { GetSegmentCommand, GetSegmentCommandInput, GetSegmentCommandOutput } from "./commands/GetSegmentCommand";
import {
  GetSegmentExportJobsCommand,
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
} from "./commands/GetSegmentExportJobsCommand";
import {
  GetSegmentImportJobsCommand,
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
} from "./commands/GetSegmentImportJobsCommand";
import { GetSegmentsCommand, GetSegmentsCommandInput, GetSegmentsCommandOutput } from "./commands/GetSegmentsCommand";
import {
  GetSegmentVersionCommand,
  GetSegmentVersionCommandInput,
  GetSegmentVersionCommandOutput,
} from "./commands/GetSegmentVersionCommand";
import {
  GetSegmentVersionsCommand,
  GetSegmentVersionsCommandInput,
  GetSegmentVersionsCommandOutput,
} from "./commands/GetSegmentVersionsCommand";
import {
  GetSmsChannelCommand,
  GetSmsChannelCommandInput,
  GetSmsChannelCommandOutput,
} from "./commands/GetSmsChannelCommand";
import {
  GetSmsTemplateCommand,
  GetSmsTemplateCommandInput,
  GetSmsTemplateCommandOutput,
} from "./commands/GetSmsTemplateCommand";
import {
  GetUserEndpointsCommand,
  GetUserEndpointsCommandInput,
  GetUserEndpointsCommandOutput,
} from "./commands/GetUserEndpointsCommand";
import {
  GetVoiceChannelCommand,
  GetVoiceChannelCommandInput,
  GetVoiceChannelCommandOutput,
} from "./commands/GetVoiceChannelCommand";
import {
  GetVoiceTemplateCommand,
  GetVoiceTemplateCommandInput,
  GetVoiceTemplateCommandOutput,
} from "./commands/GetVoiceTemplateCommand";
import {
  ListJourneysCommand,
  ListJourneysCommandInput,
  ListJourneysCommandOutput,
} from "./commands/ListJourneysCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommand,
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import {
  PhoneNumberValidateCommand,
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "./commands/PhoneNumberValidateCommand";
import { PutEventsCommand, PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import {
  PutEventStreamCommand,
  PutEventStreamCommandInput,
  PutEventStreamCommandOutput,
} from "./commands/PutEventStreamCommand";
import {
  RemoveAttributesCommand,
  RemoveAttributesCommandInput,
  RemoveAttributesCommandOutput,
} from "./commands/RemoveAttributesCommand";
import {
  SendMessagesCommand,
  SendMessagesCommandInput,
  SendMessagesCommandOutput,
} from "./commands/SendMessagesCommand";
import {
  SendOTPMessageCommand,
  SendOTPMessageCommandInput,
  SendOTPMessageCommandOutput,
} from "./commands/SendOTPMessageCommand";
import {
  SendUsersMessagesCommand,
  SendUsersMessagesCommandInput,
  SendUsersMessagesCommandOutput,
} from "./commands/SendUsersMessagesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAdmChannelCommand,
  UpdateAdmChannelCommandInput,
  UpdateAdmChannelCommandOutput,
} from "./commands/UpdateAdmChannelCommand";
import {
  UpdateApnsChannelCommand,
  UpdateApnsChannelCommandInput,
  UpdateApnsChannelCommandOutput,
} from "./commands/UpdateApnsChannelCommand";
import {
  UpdateApnsSandboxChannelCommand,
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
} from "./commands/UpdateApnsSandboxChannelCommand";
import {
  UpdateApnsVoipChannelCommand,
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
} from "./commands/UpdateApnsVoipChannelCommand";
import {
  UpdateApnsVoipSandboxChannelCommand,
  UpdateApnsVoipSandboxChannelCommandInput,
  UpdateApnsVoipSandboxChannelCommandOutput,
} from "./commands/UpdateApnsVoipSandboxChannelCommand";
import {
  UpdateApplicationSettingsCommand,
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "./commands/UpdateApplicationSettingsCommand";
import {
  UpdateBaiduChannelCommand,
  UpdateBaiduChannelCommandInput,
  UpdateBaiduChannelCommandOutput,
} from "./commands/UpdateBaiduChannelCommand";
import {
  UpdateCampaignCommand,
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput,
} from "./commands/UpdateCampaignCommand";
import {
  UpdateEmailChannelCommand,
  UpdateEmailChannelCommandInput,
  UpdateEmailChannelCommandOutput,
} from "./commands/UpdateEmailChannelCommand";
import {
  UpdateEmailTemplateCommand,
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "./commands/UpdateEmailTemplateCommand";
import {
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
} from "./commands/UpdateEndpointCommand";
import {
  UpdateEndpointsBatchCommand,
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
} from "./commands/UpdateEndpointsBatchCommand";
import {
  UpdateGcmChannelCommand,
  UpdateGcmChannelCommandInput,
  UpdateGcmChannelCommandOutput,
} from "./commands/UpdateGcmChannelCommand";
import {
  UpdateInAppTemplateCommand,
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
} from "./commands/UpdateInAppTemplateCommand";
import {
  UpdateJourneyCommand,
  UpdateJourneyCommandInput,
  UpdateJourneyCommandOutput,
} from "./commands/UpdateJourneyCommand";
import {
  UpdateJourneyStateCommand,
  UpdateJourneyStateCommandInput,
  UpdateJourneyStateCommandOutput,
} from "./commands/UpdateJourneyStateCommand";
import {
  UpdatePushTemplateCommand,
  UpdatePushTemplateCommandInput,
  UpdatePushTemplateCommandOutput,
} from "./commands/UpdatePushTemplateCommand";
import {
  UpdateRecommenderConfigurationCommand,
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
} from "./commands/UpdateRecommenderConfigurationCommand";
import {
  UpdateSegmentCommand,
  UpdateSegmentCommandInput,
  UpdateSegmentCommandOutput,
} from "./commands/UpdateSegmentCommand";
import {
  UpdateSmsChannelCommand,
  UpdateSmsChannelCommandInput,
  UpdateSmsChannelCommandOutput,
} from "./commands/UpdateSmsChannelCommand";
import {
  UpdateSmsTemplateCommand,
  UpdateSmsTemplateCommandInput,
  UpdateSmsTemplateCommandOutput,
} from "./commands/UpdateSmsTemplateCommand";
import {
  UpdateTemplateActiveVersionCommand,
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
} from "./commands/UpdateTemplateActiveVersionCommand";
import {
  UpdateVoiceChannelCommand,
  UpdateVoiceChannelCommandInput,
  UpdateVoiceChannelCommandOutput,
} from "./commands/UpdateVoiceChannelCommand";
import {
  UpdateVoiceTemplateCommand,
  UpdateVoiceTemplateCommandInput,
  UpdateVoiceTemplateCommandOutput,
} from "./commands/UpdateVoiceTemplateCommand";
import {
  VerifyOTPMessageCommand,
  VerifyOTPMessageCommandInput,
  VerifyOTPMessageCommandOutput,
} from "./commands/VerifyOTPMessageCommand";
import { PinpointClient, PinpointClientConfig } from "./PinpointClient";

const commands = {
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
  GetCampaignCommand,
  GetCampaignActivitiesCommand,
  GetCampaignDateRangeKpiCommand,
  GetCampaignsCommand,
  GetCampaignVersionCommand,
  GetCampaignVersionsCommand,
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
  GetSegmentsCommand,
  GetSegmentVersionCommand,
  GetSegmentVersionsCommand,
  GetSmsChannelCommand,
  GetSmsTemplateCommand,
  GetUserEndpointsCommand,
  GetVoiceChannelCommand,
  GetVoiceTemplateCommand,
  ListJourneysCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  ListTemplateVersionsCommand,
  PhoneNumberValidateCommand,
  PutEventsCommand,
  PutEventStreamCommand,
  RemoveAttributesCommand,
  SendMessagesCommand,
  SendOTPMessageCommand,
  SendUsersMessagesCommand,
  TagResourceCommand,
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
};

export interface Pinpoint {
  /**
   * @see {@link CreateAppCommand}
   */
  createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(args: CreateCampaignCommandInput, cb: (err: any, data?: CreateCampaignCommandOutput) => void): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailTemplateCommand}
   */
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEmailTemplateCommandOutput>;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportJobCommand}
   */
  createExportJob(
    args: CreateExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportJobCommandOutput>;
  createExportJob(args: CreateExportJobCommandInput, cb: (err: any, data?: CreateExportJobCommandOutput) => void): void;
  createExportJob(
    args: CreateExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportJobCommand}
   */
  createImportJob(
    args: CreateImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImportJobCommandOutput>;
  createImportJob(args: CreateImportJobCommandInput, cb: (err: any, data?: CreateImportJobCommandOutput) => void): void;
  createImportJob(
    args: CreateImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInAppTemplateCommand}
   */
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInAppTemplateCommandOutput>;
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    cb: (err: any, data?: CreateInAppTemplateCommandOutput) => void
  ): void;
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJourneyCommand}
   */
  createJourney(args: CreateJourneyCommandInput, options?: __HttpHandlerOptions): Promise<CreateJourneyCommandOutput>;
  createJourney(args: CreateJourneyCommandInput, cb: (err: any, data?: CreateJourneyCommandOutput) => void): void;
  createJourney(
    args: CreateJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePushTemplateCommand}
   */
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePushTemplateCommandOutput>;
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    cb: (err: any, data?: CreatePushTemplateCommandOutput) => void
  ): void;
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecommenderConfigurationCommand}
   */
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRecommenderConfigurationCommandOutput>;
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    cb: (err: any, data?: CreateRecommenderConfigurationCommandOutput) => void
  ): void;
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentCommand}
   */
  createSegment(args: CreateSegmentCommandInput, options?: __HttpHandlerOptions): Promise<CreateSegmentCommandOutput>;
  createSegment(args: CreateSegmentCommandInput, cb: (err: any, data?: CreateSegmentCommandOutput) => void): void;
  createSegment(
    args: CreateSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSmsTemplateCommand}
   */
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSmsTemplateCommandOutput>;
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    cb: (err: any, data?: CreateSmsTemplateCommandOutput) => void
  ): void;
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceTemplateCommand}
   */
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceTemplateCommandOutput>;
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    cb: (err: any, data?: CreateVoiceTemplateCommandOutput) => void
  ): void;
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdmChannelCommand}
   */
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAdmChannelCommandOutput>;
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    cb: (err: any, data?: DeleteAdmChannelCommandOutput) => void
  ): void;
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsChannelCommand}
   */
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApnsChannelCommandOutput>;
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    cb: (err: any, data?: DeleteApnsChannelCommandOutput) => void
  ): void;
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsSandboxChannelCommand}
   */
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApnsSandboxChannelCommandOutput>;
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    cb: (err: any, data?: DeleteApnsSandboxChannelCommandOutput) => void
  ): void;
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsVoipChannelCommand}
   */
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApnsVoipChannelCommandOutput>;
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    cb: (err: any, data?: DeleteApnsVoipChannelCommandOutput) => void
  ): void;
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsVoipSandboxChannelCommand}
   */
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApnsVoipSandboxChannelCommandOutput>;
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: DeleteApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBaiduChannelCommand}
   */
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBaiduChannelCommandOutput>;
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    cb: (err: any, data?: DeleteBaiduChannelCommandOutput) => void
  ): void;
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(args: DeleteCampaignCommandInput, cb: (err: any, data?: DeleteCampaignCommandOutput) => void): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailChannelCommand}
   */
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailChannelCommandOutput>;
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    cb: (err: any, data?: DeleteEmailChannelCommandOutput) => void
  ): void;
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailTemplateCommand}
   */
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailTemplateCommandOutput>;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventStreamCommand}
   */
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEventStreamCommandOutput>;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGcmChannelCommand}
   */
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGcmChannelCommandOutput>;
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    cb: (err: any, data?: DeleteGcmChannelCommandOutput) => void
  ): void;
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInAppTemplateCommand}
   */
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInAppTemplateCommandOutput>;
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    cb: (err: any, data?: DeleteInAppTemplateCommandOutput) => void
  ): void;
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJourneyCommand}
   */
  deleteJourney(args: DeleteJourneyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJourneyCommandOutput>;
  deleteJourney(args: DeleteJourneyCommandInput, cb: (err: any, data?: DeleteJourneyCommandOutput) => void): void;
  deleteJourney(
    args: DeleteJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePushTemplateCommand}
   */
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePushTemplateCommandOutput>;
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    cb: (err: any, data?: DeletePushTemplateCommandOutput) => void
  ): void;
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecommenderConfigurationCommand}
   */
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecommenderConfigurationCommandOutput>;
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    cb: (err: any, data?: DeleteRecommenderConfigurationCommandOutput) => void
  ): void;
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSegmentCommand}
   */
  deleteSegment(args: DeleteSegmentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSegmentCommandOutput>;
  deleteSegment(args: DeleteSegmentCommandInput, cb: (err: any, data?: DeleteSegmentCommandOutput) => void): void;
  deleteSegment(
    args: DeleteSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSmsChannelCommand}
   */
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSmsChannelCommandOutput>;
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    cb: (err: any, data?: DeleteSmsChannelCommandOutput) => void
  ): void;
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSmsTemplateCommand}
   */
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSmsTemplateCommandOutput>;
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    cb: (err: any, data?: DeleteSmsTemplateCommandOutput) => void
  ): void;
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserEndpointsCommand}
   */
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserEndpointsCommandOutput>;
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    cb: (err: any, data?: DeleteUserEndpointsCommandOutput) => void
  ): void;
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceChannelCommand}
   */
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceChannelCommandOutput>;
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    cb: (err: any, data?: DeleteVoiceChannelCommandOutput) => void
  ): void;
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceTemplateCommand}
   */
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceTemplateCommandOutput>;
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    cb: (err: any, data?: DeleteVoiceTemplateCommandOutput) => void
  ): void;
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdmChannelCommand}
   */
  getAdmChannel(args: GetAdmChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetAdmChannelCommandOutput>;
  getAdmChannel(args: GetAdmChannelCommandInput, cb: (err: any, data?: GetAdmChannelCommandOutput) => void): void;
  getAdmChannel(
    args: GetAdmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsChannelCommand}
   */
  getApnsChannel(
    args: GetApnsChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApnsChannelCommandOutput>;
  getApnsChannel(args: GetApnsChannelCommandInput, cb: (err: any, data?: GetApnsChannelCommandOutput) => void): void;
  getApnsChannel(
    args: GetApnsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsSandboxChannelCommand}
   */
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApnsSandboxChannelCommandOutput>;
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    cb: (err: any, data?: GetApnsSandboxChannelCommandOutput) => void
  ): void;
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsVoipChannelCommand}
   */
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApnsVoipChannelCommandOutput>;
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    cb: (err: any, data?: GetApnsVoipChannelCommandOutput) => void
  ): void;
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsVoipSandboxChannelCommand}
   */
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApnsVoipSandboxChannelCommandOutput>;
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: GetApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppCommand}
   */
  getApp(args: GetAppCommandInput, options?: __HttpHandlerOptions): Promise<GetAppCommandOutput>;
  getApp(args: GetAppCommandInput, cb: (err: any, data?: GetAppCommandOutput) => void): void;
  getApp(
    args: GetAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationDateRangeKpiCommand}
   */
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationDateRangeKpiCommandOutput>;
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    cb: (err: any, data?: GetApplicationDateRangeKpiCommandOutput) => void
  ): void;
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationSettingsCommand}
   */
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationSettingsCommandOutput>;
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    cb: (err: any, data?: GetApplicationSettingsCommandOutput) => void
  ): void;
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppsCommand}
   */
  getApps(args: GetAppsCommandInput, options?: __HttpHandlerOptions): Promise<GetAppsCommandOutput>;
  getApps(args: GetAppsCommandInput, cb: (err: any, data?: GetAppsCommandOutput) => void): void;
  getApps(
    args: GetAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaiduChannelCommand}
   */
  getBaiduChannel(
    args: GetBaiduChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBaiduChannelCommandOutput>;
  getBaiduChannel(args: GetBaiduChannelCommandInput, cb: (err: any, data?: GetBaiduChannelCommandOutput) => void): void;
  getBaiduChannel(
    args: GetBaiduChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignCommand}
   */
  getCampaign(args: GetCampaignCommandInput, options?: __HttpHandlerOptions): Promise<GetCampaignCommandOutput>;
  getCampaign(args: GetCampaignCommandInput, cb: (err: any, data?: GetCampaignCommandOutput) => void): void;
  getCampaign(
    args: GetCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignActivitiesCommand}
   */
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignActivitiesCommandOutput>;
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    cb: (err: any, data?: GetCampaignActivitiesCommandOutput) => void
  ): void;
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignDateRangeKpiCommand}
   */
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignDateRangeKpiCommandOutput>;
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    cb: (err: any, data?: GetCampaignDateRangeKpiCommandOutput) => void
  ): void;
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignsCommand}
   */
  getCampaigns(args: GetCampaignsCommandInput, options?: __HttpHandlerOptions): Promise<GetCampaignsCommandOutput>;
  getCampaigns(args: GetCampaignsCommandInput, cb: (err: any, data?: GetCampaignsCommandOutput) => void): void;
  getCampaigns(
    args: GetCampaignsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignVersionCommand}
   */
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignVersionCommandOutput>;
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    cb: (err: any, data?: GetCampaignVersionCommandOutput) => void
  ): void;
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignVersionsCommand}
   */
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCampaignVersionsCommandOutput>;
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    cb: (err: any, data?: GetCampaignVersionsCommandOutput) => void
  ): void;
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCampaignVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelsCommand}
   */
  getChannels(args: GetChannelsCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelsCommandOutput>;
  getChannels(args: GetChannelsCommandInput, cb: (err: any, data?: GetChannelsCommandOutput) => void): void;
  getChannels(
    args: GetChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailChannelCommand}
   */
  getEmailChannel(
    args: GetEmailChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailChannelCommandOutput>;
  getEmailChannel(args: GetEmailChannelCommandInput, cb: (err: any, data?: GetEmailChannelCommandOutput) => void): void;
  getEmailChannel(
    args: GetEmailChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailTemplateCommand}
   */
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEmailTemplateCommandOutput>;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointCommand}
   */
  getEndpoint(args: GetEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetEndpointCommandOutput>;
  getEndpoint(args: GetEndpointCommandInput, cb: (err: any, data?: GetEndpointCommandOutput) => void): void;
  getEndpoint(
    args: GetEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventStreamCommand}
   */
  getEventStream(
    args: GetEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEventStreamCommandOutput>;
  getEventStream(args: GetEventStreamCommandInput, cb: (err: any, data?: GetEventStreamCommandOutput) => void): void;
  getEventStream(
    args: GetEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportJobCommand}
   */
  getExportJob(args: GetExportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetExportJobCommandOutput>;
  getExportJob(args: GetExportJobCommandInput, cb: (err: any, data?: GetExportJobCommandOutput) => void): void;
  getExportJob(
    args: GetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportJobsCommand}
   */
  getExportJobs(args: GetExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetExportJobsCommandOutput>;
  getExportJobs(args: GetExportJobsCommandInput, cb: (err: any, data?: GetExportJobsCommandOutput) => void): void;
  getExportJobs(
    args: GetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGcmChannelCommand}
   */
  getGcmChannel(args: GetGcmChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetGcmChannelCommandOutput>;
  getGcmChannel(args: GetGcmChannelCommandInput, cb: (err: any, data?: GetGcmChannelCommandOutput) => void): void;
  getGcmChannel(
    args: GetGcmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobCommand}
   */
  getImportJob(args: GetImportJobCommandInput, options?: __HttpHandlerOptions): Promise<GetImportJobCommandOutput>;
  getImportJob(args: GetImportJobCommandInput, cb: (err: any, data?: GetImportJobCommandOutput) => void): void;
  getImportJob(
    args: GetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobsCommand}
   */
  getImportJobs(args: GetImportJobsCommandInput, options?: __HttpHandlerOptions): Promise<GetImportJobsCommandOutput>;
  getImportJobs(args: GetImportJobsCommandInput, cb: (err: any, data?: GetImportJobsCommandOutput) => void): void;
  getImportJobs(
    args: GetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInAppMessagesCommand}
   */
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInAppMessagesCommandOutput>;
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    cb: (err: any, data?: GetInAppMessagesCommandOutput) => void
  ): void;
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInAppMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInAppTemplateCommand}
   */
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInAppTemplateCommandOutput>;
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    cb: (err: any, data?: GetInAppTemplateCommandOutput) => void
  ): void;
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyCommand}
   */
  getJourney(args: GetJourneyCommandInput, options?: __HttpHandlerOptions): Promise<GetJourneyCommandOutput>;
  getJourney(args: GetJourneyCommandInput, cb: (err: any, data?: GetJourneyCommandOutput) => void): void;
  getJourney(
    args: GetJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyDateRangeKpiCommand}
   */
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyDateRangeKpiCommandOutput>;
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    cb: (err: any, data?: GetJourneyDateRangeKpiCommandOutput) => void
  ): void;
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyExecutionActivityMetricsCommand}
   */
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyExecutionActivityMetricsCommandOutput>;
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    cb: (err: any, data?: GetJourneyExecutionActivityMetricsCommandOutput) => void
  ): void;
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyExecutionActivityMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyExecutionMetricsCommand}
   */
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyExecutionMetricsCommandOutput>;
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    cb: (err: any, data?: GetJourneyExecutionMetricsCommandOutput) => void
  ): void;
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyExecutionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunExecutionActivityMetricsCommand}
   */
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyRunExecutionActivityMetricsCommandOutput>;
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    cb: (err: any, data?: GetJourneyRunExecutionActivityMetricsCommandOutput) => void
  ): void;
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyRunExecutionActivityMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunExecutionMetricsCommand}
   */
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyRunExecutionMetricsCommandOutput>;
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    cb: (err: any, data?: GetJourneyRunExecutionMetricsCommandOutput) => void
  ): void;
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyRunExecutionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunsCommand}
   */
  getJourneyRuns(
    args: GetJourneyRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJourneyRunsCommandOutput>;
  getJourneyRuns(args: GetJourneyRunsCommandInput, cb: (err: any, data?: GetJourneyRunsCommandOutput) => void): void;
  getJourneyRuns(
    args: GetJourneyRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJourneyRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPushTemplateCommand}
   */
  getPushTemplate(
    args: GetPushTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPushTemplateCommandOutput>;
  getPushTemplate(args: GetPushTemplateCommandInput, cb: (err: any, data?: GetPushTemplateCommandOutput) => void): void;
  getPushTemplate(
    args: GetPushTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderConfigurationCommand}
   */
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommenderConfigurationCommandOutput>;
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    cb: (err: any, data?: GetRecommenderConfigurationCommandOutput) => void
  ): void;
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderConfigurationsCommand}
   */
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecommenderConfigurationsCommandOutput>;
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    cb: (err: any, data?: GetRecommenderConfigurationsCommandOutput) => void
  ): void;
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecommenderConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentCommand}
   */
  getSegment(args: GetSegmentCommandInput, options?: __HttpHandlerOptions): Promise<GetSegmentCommandOutput>;
  getSegment(args: GetSegmentCommandInput, cb: (err: any, data?: GetSegmentCommandOutput) => void): void;
  getSegment(
    args: GetSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentExportJobsCommand}
   */
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentExportJobsCommandOutput>;
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    cb: (err: any, data?: GetSegmentExportJobsCommandOutput) => void
  ): void;
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentImportJobsCommand}
   */
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentImportJobsCommandOutput>;
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    cb: (err: any, data?: GetSegmentImportJobsCommandOutput) => void
  ): void;
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentsCommand}
   */
  getSegments(args: GetSegmentsCommandInput, options?: __HttpHandlerOptions): Promise<GetSegmentsCommandOutput>;
  getSegments(args: GetSegmentsCommandInput, cb: (err: any, data?: GetSegmentsCommandOutput) => void): void;
  getSegments(
    args: GetSegmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentVersionCommand}
   */
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentVersionCommandOutput>;
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    cb: (err: any, data?: GetSegmentVersionCommandOutput) => void
  ): void;
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentVersionsCommand}
   */
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSegmentVersionsCommandOutput>;
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    cb: (err: any, data?: GetSegmentVersionsCommandOutput) => void
  ): void;
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSegmentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSmsChannelCommand}
   */
  getSmsChannel(args: GetSmsChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetSmsChannelCommandOutput>;
  getSmsChannel(args: GetSmsChannelCommandInput, cb: (err: any, data?: GetSmsChannelCommandOutput) => void): void;
  getSmsChannel(
    args: GetSmsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSmsTemplateCommand}
   */
  getSmsTemplate(
    args: GetSmsTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSmsTemplateCommandOutput>;
  getSmsTemplate(args: GetSmsTemplateCommandInput, cb: (err: any, data?: GetSmsTemplateCommandOutput) => void): void;
  getSmsTemplate(
    args: GetSmsTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserEndpointsCommand}
   */
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUserEndpointsCommandOutput>;
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    cb: (err: any, data?: GetUserEndpointsCommandOutput) => void
  ): void;
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceChannelCommand}
   */
  getVoiceChannel(
    args: GetVoiceChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceChannelCommandOutput>;
  getVoiceChannel(args: GetVoiceChannelCommandInput, cb: (err: any, data?: GetVoiceChannelCommandOutput) => void): void;
  getVoiceChannel(
    args: GetVoiceChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceTemplateCommand}
   */
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceTemplateCommandOutput>;
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    cb: (err: any, data?: GetVoiceTemplateCommandOutput) => void
  ): void;
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJourneysCommand}
   */
  listJourneys(args: ListJourneysCommandInput, options?: __HttpHandlerOptions): Promise<ListJourneysCommandOutput>;
  listJourneys(args: ListJourneysCommandInput, cb: (err: any, data?: ListJourneysCommandOutput) => void): void;
  listJourneys(
    args: ListJourneysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJourneysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
  listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateVersionsCommand}
   */
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateVersionsCommandOutput>;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PhoneNumberValidateCommand}
   */
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PhoneNumberValidateCommandOutput>;
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    cb: (err: any, data?: PhoneNumberValidateCommandOutput) => void
  ): void;
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PhoneNumberValidateCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(args: PutEventsCommandInput, options?: __HttpHandlerOptions): Promise<PutEventsCommandOutput>;
  putEvents(args: PutEventsCommandInput, cb: (err: any, data?: PutEventsCommandOutput) => void): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventStreamCommand}
   */
  putEventStream(
    args: PutEventStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventStreamCommandOutput>;
  putEventStream(args: PutEventStreamCommandInput, cb: (err: any, data?: PutEventStreamCommandOutput) => void): void;
  putEventStream(
    args: PutEventStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAttributesCommand}
   */
  removeAttributes(
    args: RemoveAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAttributesCommandOutput>;
  removeAttributes(
    args: RemoveAttributesCommandInput,
    cb: (err: any, data?: RemoveAttributesCommandOutput) => void
  ): void;
  removeAttributes(
    args: RemoveAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessagesCommand}
   */
  sendMessages(args: SendMessagesCommandInput, options?: __HttpHandlerOptions): Promise<SendMessagesCommandOutput>;
  sendMessages(args: SendMessagesCommandInput, cb: (err: any, data?: SendMessagesCommandOutput) => void): void;
  sendMessages(
    args: SendMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendOTPMessageCommand}
   */
  sendOTPMessage(
    args: SendOTPMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendOTPMessageCommandOutput>;
  sendOTPMessage(args: SendOTPMessageCommandInput, cb: (err: any, data?: SendOTPMessageCommandOutput) => void): void;
  sendOTPMessage(
    args: SendOTPMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendOTPMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SendUsersMessagesCommand}
   */
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendUsersMessagesCommandOutput>;
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    cb: (err: any, data?: SendUsersMessagesCommandOutput) => void
  ): void;
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendUsersMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAdmChannelCommand}
   */
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAdmChannelCommandOutput>;
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    cb: (err: any, data?: UpdateAdmChannelCommandOutput) => void
  ): void;
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsChannelCommand}
   */
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApnsChannelCommandOutput>;
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    cb: (err: any, data?: UpdateApnsChannelCommandOutput) => void
  ): void;
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsSandboxChannelCommand}
   */
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApnsSandboxChannelCommandOutput>;
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    cb: (err: any, data?: UpdateApnsSandboxChannelCommandOutput) => void
  ): void;
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsVoipChannelCommand}
   */
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApnsVoipChannelCommandOutput>;
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    cb: (err: any, data?: UpdateApnsVoipChannelCommandOutput) => void
  ): void;
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsVoipSandboxChannelCommand}
   */
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApnsVoipSandboxChannelCommandOutput>;
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: UpdateApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationSettingsCommand}
   */
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationSettingsCommandOutput>;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBaiduChannelCommand}
   */
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBaiduChannelCommandOutput>;
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    cb: (err: any, data?: UpdateBaiduChannelCommandOutput) => void
  ): void;
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(args: UpdateCampaignCommandInput, cb: (err: any, data?: UpdateCampaignCommandOutput) => void): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailChannelCommand}
   */
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailChannelCommandOutput>;
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    cb: (err: any, data?: UpdateEmailChannelCommandOutput) => void
  ): void;
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailTemplateCommand}
   */
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmailTemplateCommandOutput>;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointCommandOutput>;
  updateEndpoint(args: UpdateEndpointCommandInput, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointsBatchCommand}
   */
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointsBatchCommandOutput>;
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    cb: (err: any, data?: UpdateEndpointsBatchCommandOutput) => void
  ): void;
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointsBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGcmChannelCommand}
   */
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGcmChannelCommandOutput>;
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    cb: (err: any, data?: UpdateGcmChannelCommandOutput) => void
  ): void;
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInAppTemplateCommand}
   */
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInAppTemplateCommandOutput>;
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    cb: (err: any, data?: UpdateInAppTemplateCommandOutput) => void
  ): void;
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJourneyCommand}
   */
  updateJourney(args: UpdateJourneyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateJourneyCommandOutput>;
  updateJourney(args: UpdateJourneyCommandInput, cb: (err: any, data?: UpdateJourneyCommandOutput) => void): void;
  updateJourney(
    args: UpdateJourneyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJourneyStateCommand}
   */
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateJourneyStateCommandOutput>;
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    cb: (err: any, data?: UpdateJourneyStateCommandOutput) => void
  ): void;
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateJourneyStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePushTemplateCommand}
   */
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePushTemplateCommandOutput>;
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    cb: (err: any, data?: UpdatePushTemplateCommandOutput) => void
  ): void;
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommenderConfigurationCommand}
   */
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecommenderConfigurationCommandOutput>;
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    cb: (err: any, data?: UpdateRecommenderConfigurationCommandOutput) => void
  ): void;
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSegmentCommand}
   */
  updateSegment(args: UpdateSegmentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSegmentCommandOutput>;
  updateSegment(args: UpdateSegmentCommandInput, cb: (err: any, data?: UpdateSegmentCommandOutput) => void): void;
  updateSegment(
    args: UpdateSegmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSmsChannelCommand}
   */
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSmsChannelCommandOutput>;
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    cb: (err: any, data?: UpdateSmsChannelCommandOutput) => void
  ): void;
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSmsTemplateCommand}
   */
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSmsTemplateCommandOutput>;
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    cb: (err: any, data?: UpdateSmsTemplateCommandOutput) => void
  ): void;
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateActiveVersionCommand}
   */
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateActiveVersionCommandOutput>;
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    cb: (err: any, data?: UpdateTemplateActiveVersionCommandOutput) => void
  ): void;
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateActiveVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceChannelCommand}
   */
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceChannelCommandOutput>;
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    cb: (err: any, data?: UpdateVoiceChannelCommandOutput) => void
  ): void;
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceTemplateCommand}
   */
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceTemplateCommandOutput>;
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    cb: (err: any, data?: UpdateVoiceTemplateCommandOutput) => void
  ): void;
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyOTPMessageCommand}
   */
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyOTPMessageCommandOutput>;
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    cb: (err: any, data?: VerifyOTPMessageCommandOutput) => void
  ): void;
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyOTPMessageCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Doc Engage API - Amazon Pinpoint API</p>
 */
export class Pinpoint extends PinpointClient implements Pinpoint {}
createAggregatedClient(commands, Pinpoint);
