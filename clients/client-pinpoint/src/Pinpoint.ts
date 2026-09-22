// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { type CreateAppCommandInput, type CreateAppCommandOutput, CreateAppCommand } from "./commands/CreateAppCommand";
import {
  type CreateCampaignCommandInput,
  type CreateCampaignCommandOutput,
  CreateCampaignCommand,
} from "./commands/CreateCampaignCommand";
import {
  type CreateEmailTemplateCommandInput,
  type CreateEmailTemplateCommandOutput,
  CreateEmailTemplateCommand,
} from "./commands/CreateEmailTemplateCommand";
import {
  type CreateExportJobCommandInput,
  type CreateExportJobCommandOutput,
  CreateExportJobCommand,
} from "./commands/CreateExportJobCommand";
import {
  type CreateImportJobCommandInput,
  type CreateImportJobCommandOutput,
  CreateImportJobCommand,
} from "./commands/CreateImportJobCommand";
import {
  type CreateInAppTemplateCommandInput,
  type CreateInAppTemplateCommandOutput,
  CreateInAppTemplateCommand,
} from "./commands/CreateInAppTemplateCommand";
import {
  type CreateJourneyCommandInput,
  type CreateJourneyCommandOutput,
  CreateJourneyCommand,
} from "./commands/CreateJourneyCommand";
import {
  type CreatePushTemplateCommandInput,
  type CreatePushTemplateCommandOutput,
  CreatePushTemplateCommand,
} from "./commands/CreatePushTemplateCommand";
import {
  type CreateRecommenderConfigurationCommandInput,
  type CreateRecommenderConfigurationCommandOutput,
  CreateRecommenderConfigurationCommand,
} from "./commands/CreateRecommenderConfigurationCommand";
import {
  type CreateSegmentCommandInput,
  type CreateSegmentCommandOutput,
  CreateSegmentCommand,
} from "./commands/CreateSegmentCommand";
import {
  type CreateSmsTemplateCommandInput,
  type CreateSmsTemplateCommandOutput,
  CreateSmsTemplateCommand,
} from "./commands/CreateSmsTemplateCommand";
import {
  type CreateVoiceTemplateCommandInput,
  type CreateVoiceTemplateCommandOutput,
  CreateVoiceTemplateCommand,
} from "./commands/CreateVoiceTemplateCommand";
import {
  type DeleteAdmChannelCommandInput,
  type DeleteAdmChannelCommandOutput,
  DeleteAdmChannelCommand,
} from "./commands/DeleteAdmChannelCommand";
import {
  type DeleteApnsChannelCommandInput,
  type DeleteApnsChannelCommandOutput,
  DeleteApnsChannelCommand,
} from "./commands/DeleteApnsChannelCommand";
import {
  type DeleteApnsSandboxChannelCommandInput,
  type DeleteApnsSandboxChannelCommandOutput,
  DeleteApnsSandboxChannelCommand,
} from "./commands/DeleteApnsSandboxChannelCommand";
import {
  type DeleteApnsVoipChannelCommandInput,
  type DeleteApnsVoipChannelCommandOutput,
  DeleteApnsVoipChannelCommand,
} from "./commands/DeleteApnsVoipChannelCommand";
import {
  type DeleteApnsVoipSandboxChannelCommandInput,
  type DeleteApnsVoipSandboxChannelCommandOutput,
  DeleteApnsVoipSandboxChannelCommand,
} from "./commands/DeleteApnsVoipSandboxChannelCommand";
import { type DeleteAppCommandInput, type DeleteAppCommandOutput, DeleteAppCommand } from "./commands/DeleteAppCommand";
import {
  type DeleteBaiduChannelCommandInput,
  type DeleteBaiduChannelCommandOutput,
  DeleteBaiduChannelCommand,
} from "./commands/DeleteBaiduChannelCommand";
import {
  type DeleteCampaignCommandInput,
  type DeleteCampaignCommandOutput,
  DeleteCampaignCommand,
} from "./commands/DeleteCampaignCommand";
import {
  type DeleteEmailChannelCommandInput,
  type DeleteEmailChannelCommandOutput,
  DeleteEmailChannelCommand,
} from "./commands/DeleteEmailChannelCommand";
import {
  type DeleteEmailTemplateCommandInput,
  type DeleteEmailTemplateCommandOutput,
  DeleteEmailTemplateCommand,
} from "./commands/DeleteEmailTemplateCommand";
import {
  type DeleteEndpointCommandInput,
  type DeleteEndpointCommandOutput,
  DeleteEndpointCommand,
} from "./commands/DeleteEndpointCommand";
import {
  type DeleteEventStreamCommandInput,
  type DeleteEventStreamCommandOutput,
  DeleteEventStreamCommand,
} from "./commands/DeleteEventStreamCommand";
import {
  type DeleteGcmChannelCommandInput,
  type DeleteGcmChannelCommandOutput,
  DeleteGcmChannelCommand,
} from "./commands/DeleteGcmChannelCommand";
import {
  type DeleteInAppTemplateCommandInput,
  type DeleteInAppTemplateCommandOutput,
  DeleteInAppTemplateCommand,
} from "./commands/DeleteInAppTemplateCommand";
import {
  type DeleteJourneyCommandInput,
  type DeleteJourneyCommandOutput,
  DeleteJourneyCommand,
} from "./commands/DeleteJourneyCommand";
import {
  type DeletePushTemplateCommandInput,
  type DeletePushTemplateCommandOutput,
  DeletePushTemplateCommand,
} from "./commands/DeletePushTemplateCommand";
import {
  type DeleteRecommenderConfigurationCommandInput,
  type DeleteRecommenderConfigurationCommandOutput,
  DeleteRecommenderConfigurationCommand,
} from "./commands/DeleteRecommenderConfigurationCommand";
import {
  type DeleteSegmentCommandInput,
  type DeleteSegmentCommandOutput,
  DeleteSegmentCommand,
} from "./commands/DeleteSegmentCommand";
import {
  type DeleteSmsChannelCommandInput,
  type DeleteSmsChannelCommandOutput,
  DeleteSmsChannelCommand,
} from "./commands/DeleteSmsChannelCommand";
import {
  type DeleteSmsTemplateCommandInput,
  type DeleteSmsTemplateCommandOutput,
  DeleteSmsTemplateCommand,
} from "./commands/DeleteSmsTemplateCommand";
import {
  type DeleteUserEndpointsCommandInput,
  type DeleteUserEndpointsCommandOutput,
  DeleteUserEndpointsCommand,
} from "./commands/DeleteUserEndpointsCommand";
import {
  type DeleteVoiceChannelCommandInput,
  type DeleteVoiceChannelCommandOutput,
  DeleteVoiceChannelCommand,
} from "./commands/DeleteVoiceChannelCommand";
import {
  type DeleteVoiceTemplateCommandInput,
  type DeleteVoiceTemplateCommandOutput,
  DeleteVoiceTemplateCommand,
} from "./commands/DeleteVoiceTemplateCommand";
import {
  type GetAdmChannelCommandInput,
  type GetAdmChannelCommandOutput,
  GetAdmChannelCommand,
} from "./commands/GetAdmChannelCommand";
import {
  type GetApnsChannelCommandInput,
  type GetApnsChannelCommandOutput,
  GetApnsChannelCommand,
} from "./commands/GetApnsChannelCommand";
import {
  type GetApnsSandboxChannelCommandInput,
  type GetApnsSandboxChannelCommandOutput,
  GetApnsSandboxChannelCommand,
} from "./commands/GetApnsSandboxChannelCommand";
import {
  type GetApnsVoipChannelCommandInput,
  type GetApnsVoipChannelCommandOutput,
  GetApnsVoipChannelCommand,
} from "./commands/GetApnsVoipChannelCommand";
import {
  type GetApnsVoipSandboxChannelCommandInput,
  type GetApnsVoipSandboxChannelCommandOutput,
  GetApnsVoipSandboxChannelCommand,
} from "./commands/GetApnsVoipSandboxChannelCommand";
import { type GetAppCommandInput, type GetAppCommandOutput, GetAppCommand } from "./commands/GetAppCommand";
import {
  type GetApplicationDateRangeKpiCommandInput,
  type GetApplicationDateRangeKpiCommandOutput,
  GetApplicationDateRangeKpiCommand,
} from "./commands/GetApplicationDateRangeKpiCommand";
import {
  type GetApplicationSettingsCommandInput,
  type GetApplicationSettingsCommandOutput,
  GetApplicationSettingsCommand,
} from "./commands/GetApplicationSettingsCommand";
import { type GetAppsCommandInput, type GetAppsCommandOutput, GetAppsCommand } from "./commands/GetAppsCommand";
import {
  type GetBaiduChannelCommandInput,
  type GetBaiduChannelCommandOutput,
  GetBaiduChannelCommand,
} from "./commands/GetBaiduChannelCommand";
import {
  type GetCampaignActivitiesCommandInput,
  type GetCampaignActivitiesCommandOutput,
  GetCampaignActivitiesCommand,
} from "./commands/GetCampaignActivitiesCommand";
import {
  type GetCampaignCommandInput,
  type GetCampaignCommandOutput,
  GetCampaignCommand,
} from "./commands/GetCampaignCommand";
import {
  type GetCampaignDateRangeKpiCommandInput,
  type GetCampaignDateRangeKpiCommandOutput,
  GetCampaignDateRangeKpiCommand,
} from "./commands/GetCampaignDateRangeKpiCommand";
import {
  type GetCampaignsCommandInput,
  type GetCampaignsCommandOutput,
  GetCampaignsCommand,
} from "./commands/GetCampaignsCommand";
import {
  type GetCampaignVersionCommandInput,
  type GetCampaignVersionCommandOutput,
  GetCampaignVersionCommand,
} from "./commands/GetCampaignVersionCommand";
import {
  type GetCampaignVersionsCommandInput,
  type GetCampaignVersionsCommandOutput,
  GetCampaignVersionsCommand,
} from "./commands/GetCampaignVersionsCommand";
import {
  type GetChannelsCommandInput,
  type GetChannelsCommandOutput,
  GetChannelsCommand,
} from "./commands/GetChannelsCommand";
import {
  type GetEmailChannelCommandInput,
  type GetEmailChannelCommandOutput,
  GetEmailChannelCommand,
} from "./commands/GetEmailChannelCommand";
import {
  type GetEmailTemplateCommandInput,
  type GetEmailTemplateCommandOutput,
  GetEmailTemplateCommand,
} from "./commands/GetEmailTemplateCommand";
import {
  type GetEndpointCommandInput,
  type GetEndpointCommandOutput,
  GetEndpointCommand,
} from "./commands/GetEndpointCommand";
import {
  type GetEventStreamCommandInput,
  type GetEventStreamCommandOutput,
  GetEventStreamCommand,
} from "./commands/GetEventStreamCommand";
import {
  type GetExportJobCommandInput,
  type GetExportJobCommandOutput,
  GetExportJobCommand,
} from "./commands/GetExportJobCommand";
import {
  type GetExportJobsCommandInput,
  type GetExportJobsCommandOutput,
  GetExportJobsCommand,
} from "./commands/GetExportJobsCommand";
import {
  type GetGcmChannelCommandInput,
  type GetGcmChannelCommandOutput,
  GetGcmChannelCommand,
} from "./commands/GetGcmChannelCommand";
import {
  type GetImportJobCommandInput,
  type GetImportJobCommandOutput,
  GetImportJobCommand,
} from "./commands/GetImportJobCommand";
import {
  type GetImportJobsCommandInput,
  type GetImportJobsCommandOutput,
  GetImportJobsCommand,
} from "./commands/GetImportJobsCommand";
import {
  type GetInAppMessagesCommandInput,
  type GetInAppMessagesCommandOutput,
  GetInAppMessagesCommand,
} from "./commands/GetInAppMessagesCommand";
import {
  type GetInAppTemplateCommandInput,
  type GetInAppTemplateCommandOutput,
  GetInAppTemplateCommand,
} from "./commands/GetInAppTemplateCommand";
import {
  type GetJourneyCommandInput,
  type GetJourneyCommandOutput,
  GetJourneyCommand,
} from "./commands/GetJourneyCommand";
import {
  type GetJourneyDateRangeKpiCommandInput,
  type GetJourneyDateRangeKpiCommandOutput,
  GetJourneyDateRangeKpiCommand,
} from "./commands/GetJourneyDateRangeKpiCommand";
import {
  type GetJourneyExecutionActivityMetricsCommandInput,
  type GetJourneyExecutionActivityMetricsCommandOutput,
  GetJourneyExecutionActivityMetricsCommand,
} from "./commands/GetJourneyExecutionActivityMetricsCommand";
import {
  type GetJourneyExecutionMetricsCommandInput,
  type GetJourneyExecutionMetricsCommandOutput,
  GetJourneyExecutionMetricsCommand,
} from "./commands/GetJourneyExecutionMetricsCommand";
import {
  type GetJourneyRunExecutionActivityMetricsCommandInput,
  type GetJourneyRunExecutionActivityMetricsCommandOutput,
  GetJourneyRunExecutionActivityMetricsCommand,
} from "./commands/GetJourneyRunExecutionActivityMetricsCommand";
import {
  type GetJourneyRunExecutionMetricsCommandInput,
  type GetJourneyRunExecutionMetricsCommandOutput,
  GetJourneyRunExecutionMetricsCommand,
} from "./commands/GetJourneyRunExecutionMetricsCommand";
import {
  type GetJourneyRunsCommandInput,
  type GetJourneyRunsCommandOutput,
  GetJourneyRunsCommand,
} from "./commands/GetJourneyRunsCommand";
import {
  type GetPushTemplateCommandInput,
  type GetPushTemplateCommandOutput,
  GetPushTemplateCommand,
} from "./commands/GetPushTemplateCommand";
import {
  type GetRecommenderConfigurationCommandInput,
  type GetRecommenderConfigurationCommandOutput,
  GetRecommenderConfigurationCommand,
} from "./commands/GetRecommenderConfigurationCommand";
import {
  type GetRecommenderConfigurationsCommandInput,
  type GetRecommenderConfigurationsCommandOutput,
  GetRecommenderConfigurationsCommand,
} from "./commands/GetRecommenderConfigurationsCommand";
import {
  type GetSegmentCommandInput,
  type GetSegmentCommandOutput,
  GetSegmentCommand,
} from "./commands/GetSegmentCommand";
import {
  type GetSegmentExportJobsCommandInput,
  type GetSegmentExportJobsCommandOutput,
  GetSegmentExportJobsCommand,
} from "./commands/GetSegmentExportJobsCommand";
import {
  type GetSegmentImportJobsCommandInput,
  type GetSegmentImportJobsCommandOutput,
  GetSegmentImportJobsCommand,
} from "./commands/GetSegmentImportJobsCommand";
import {
  type GetSegmentsCommandInput,
  type GetSegmentsCommandOutput,
  GetSegmentsCommand,
} from "./commands/GetSegmentsCommand";
import {
  type GetSegmentVersionCommandInput,
  type GetSegmentVersionCommandOutput,
  GetSegmentVersionCommand,
} from "./commands/GetSegmentVersionCommand";
import {
  type GetSegmentVersionsCommandInput,
  type GetSegmentVersionsCommandOutput,
  GetSegmentVersionsCommand,
} from "./commands/GetSegmentVersionsCommand";
import {
  type GetSmsChannelCommandInput,
  type GetSmsChannelCommandOutput,
  GetSmsChannelCommand,
} from "./commands/GetSmsChannelCommand";
import {
  type GetSmsTemplateCommandInput,
  type GetSmsTemplateCommandOutput,
  GetSmsTemplateCommand,
} from "./commands/GetSmsTemplateCommand";
import {
  type GetUserEndpointsCommandInput,
  type GetUserEndpointsCommandOutput,
  GetUserEndpointsCommand,
} from "./commands/GetUserEndpointsCommand";
import {
  type GetVoiceChannelCommandInput,
  type GetVoiceChannelCommandOutput,
  GetVoiceChannelCommand,
} from "./commands/GetVoiceChannelCommand";
import {
  type GetVoiceTemplateCommandInput,
  type GetVoiceTemplateCommandOutput,
  GetVoiceTemplateCommand,
} from "./commands/GetVoiceTemplateCommand";
import {
  type ListJourneysCommandInput,
  type ListJourneysCommandOutput,
  ListJourneysCommand,
} from "./commands/ListJourneysCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type ListTemplateVersionsCommandInput,
  type ListTemplateVersionsCommandOutput,
  ListTemplateVersionsCommand,
} from "./commands/ListTemplateVersionsCommand";
import {
  type PhoneNumberValidateCommandInput,
  type PhoneNumberValidateCommandOutput,
  PhoneNumberValidateCommand,
} from "./commands/PhoneNumberValidateCommand";
import { type PutEventsCommandInput, type PutEventsCommandOutput, PutEventsCommand } from "./commands/PutEventsCommand";
import {
  type PutEventStreamCommandInput,
  type PutEventStreamCommandOutput,
  PutEventStreamCommand,
} from "./commands/PutEventStreamCommand";
import {
  type RemoveAttributesCommandInput,
  type RemoveAttributesCommandOutput,
  RemoveAttributesCommand,
} from "./commands/RemoveAttributesCommand";
import {
  type SendMessagesCommandInput,
  type SendMessagesCommandOutput,
  SendMessagesCommand,
} from "./commands/SendMessagesCommand";
import {
  type SendOTPMessageCommandInput,
  type SendOTPMessageCommandOutput,
  SendOTPMessageCommand,
} from "./commands/SendOTPMessageCommand";
import {
  type SendUsersMessagesCommandInput,
  type SendUsersMessagesCommandOutput,
  SendUsersMessagesCommand,
} from "./commands/SendUsersMessagesCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAdmChannelCommandInput,
  type UpdateAdmChannelCommandOutput,
  UpdateAdmChannelCommand,
} from "./commands/UpdateAdmChannelCommand";
import {
  type UpdateApnsChannelCommandInput,
  type UpdateApnsChannelCommandOutput,
  UpdateApnsChannelCommand,
} from "./commands/UpdateApnsChannelCommand";
import {
  type UpdateApnsSandboxChannelCommandInput,
  type UpdateApnsSandboxChannelCommandOutput,
  UpdateApnsSandboxChannelCommand,
} from "./commands/UpdateApnsSandboxChannelCommand";
import {
  type UpdateApnsVoipChannelCommandInput,
  type UpdateApnsVoipChannelCommandOutput,
  UpdateApnsVoipChannelCommand,
} from "./commands/UpdateApnsVoipChannelCommand";
import {
  type UpdateApnsVoipSandboxChannelCommandInput,
  type UpdateApnsVoipSandboxChannelCommandOutput,
  UpdateApnsVoipSandboxChannelCommand,
} from "./commands/UpdateApnsVoipSandboxChannelCommand";
import {
  type UpdateApplicationSettingsCommandInput,
  type UpdateApplicationSettingsCommandOutput,
  UpdateApplicationSettingsCommand,
} from "./commands/UpdateApplicationSettingsCommand";
import {
  type UpdateBaiduChannelCommandInput,
  type UpdateBaiduChannelCommandOutput,
  UpdateBaiduChannelCommand,
} from "./commands/UpdateBaiduChannelCommand";
import {
  type UpdateCampaignCommandInput,
  type UpdateCampaignCommandOutput,
  UpdateCampaignCommand,
} from "./commands/UpdateCampaignCommand";
import {
  type UpdateEmailChannelCommandInput,
  type UpdateEmailChannelCommandOutput,
  UpdateEmailChannelCommand,
} from "./commands/UpdateEmailChannelCommand";
import {
  type UpdateEmailTemplateCommandInput,
  type UpdateEmailTemplateCommandOutput,
  UpdateEmailTemplateCommand,
} from "./commands/UpdateEmailTemplateCommand";
import {
  type UpdateEndpointCommandInput,
  type UpdateEndpointCommandOutput,
  UpdateEndpointCommand,
} from "./commands/UpdateEndpointCommand";
import {
  type UpdateEndpointsBatchCommandInput,
  type UpdateEndpointsBatchCommandOutput,
  UpdateEndpointsBatchCommand,
} from "./commands/UpdateEndpointsBatchCommand";
import {
  type UpdateGcmChannelCommandInput,
  type UpdateGcmChannelCommandOutput,
  UpdateGcmChannelCommand,
} from "./commands/UpdateGcmChannelCommand";
import {
  type UpdateInAppTemplateCommandInput,
  type UpdateInAppTemplateCommandOutput,
  UpdateInAppTemplateCommand,
} from "./commands/UpdateInAppTemplateCommand";
import {
  type UpdateJourneyCommandInput,
  type UpdateJourneyCommandOutput,
  UpdateJourneyCommand,
} from "./commands/UpdateJourneyCommand";
import {
  type UpdateJourneyStateCommandInput,
  type UpdateJourneyStateCommandOutput,
  UpdateJourneyStateCommand,
} from "./commands/UpdateJourneyStateCommand";
import {
  type UpdatePushTemplateCommandInput,
  type UpdatePushTemplateCommandOutput,
  UpdatePushTemplateCommand,
} from "./commands/UpdatePushTemplateCommand";
import {
  type UpdateRecommenderConfigurationCommandInput,
  type UpdateRecommenderConfigurationCommandOutput,
  UpdateRecommenderConfigurationCommand,
} from "./commands/UpdateRecommenderConfigurationCommand";
import {
  type UpdateSegmentCommandInput,
  type UpdateSegmentCommandOutput,
  UpdateSegmentCommand,
} from "./commands/UpdateSegmentCommand";
import {
  type UpdateSmsChannelCommandInput,
  type UpdateSmsChannelCommandOutput,
  UpdateSmsChannelCommand,
} from "./commands/UpdateSmsChannelCommand";
import {
  type UpdateSmsTemplateCommandInput,
  type UpdateSmsTemplateCommandOutput,
  UpdateSmsTemplateCommand,
} from "./commands/UpdateSmsTemplateCommand";
import {
  type UpdateTemplateActiveVersionCommandInput,
  type UpdateTemplateActiveVersionCommandOutput,
  UpdateTemplateActiveVersionCommand,
} from "./commands/UpdateTemplateActiveVersionCommand";
import {
  type UpdateVoiceChannelCommandInput,
  type UpdateVoiceChannelCommandOutput,
  UpdateVoiceChannelCommand,
} from "./commands/UpdateVoiceChannelCommand";
import {
  type UpdateVoiceTemplateCommandInput,
  type UpdateVoiceTemplateCommandOutput,
  UpdateVoiceTemplateCommand,
} from "./commands/UpdateVoiceTemplateCommand";
import {
  type VerifyOTPMessageCommandInput,
  type VerifyOTPMessageCommandOutput,
  VerifyOTPMessageCommand,
} from "./commands/VerifyOTPMessageCommand";
import { PinpointClient } from "./PinpointClient";

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

/**
 * @public
 */
export interface PinpointRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Pinpoint {
  /**
   * @see {@link CreateAppCommand}
   */
  createApp(
    args: CreateAppCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateAppCommandOutput>;
  createApp(
    args: CreateAppCommandInput,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;
  createApp(
    args: CreateAppCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCampaignCommand}
   */
  createCampaign(
    args: CreateCampaignCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateCampaignCommandOutput>;
  createCampaign(
    args: CreateCampaignCommandInput,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;
  createCampaign(
    args: CreateCampaignCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEmailTemplateCommand}
   */
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateEmailTemplateCommandOutput>;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;
  createEmailTemplate(
    args: CreateEmailTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExportJobCommand}
   */
  createExportJob(
    args: CreateExportJobCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateExportJobCommandOutput>;
  createExportJob(
    args: CreateExportJobCommandInput,
    cb: (err: any, data?: CreateExportJobCommandOutput) => void
  ): void;
  createExportJob(
    args: CreateExportJobCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImportJobCommand}
   */
  createImportJob(
    args: CreateImportJobCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateImportJobCommandOutput>;
  createImportJob(
    args: CreateImportJobCommandInput,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;
  createImportJob(
    args: CreateImportJobCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInAppTemplateCommand}
   */
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateInAppTemplateCommandOutput>;
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    cb: (err: any, data?: CreateInAppTemplateCommandOutput) => void
  ): void;
  createInAppTemplate(
    args: CreateInAppTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateJourneyCommand}
   */
  createJourney(
    args: CreateJourneyCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateJourneyCommandOutput>;
  createJourney(
    args: CreateJourneyCommandInput,
    cb: (err: any, data?: CreateJourneyCommandOutput) => void
  ): void;
  createJourney(
    args: CreateJourneyCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePushTemplateCommand}
   */
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreatePushTemplateCommandOutput>;
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    cb: (err: any, data?: CreatePushTemplateCommandOutput) => void
  ): void;
  createPushTemplate(
    args: CreatePushTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreatePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRecommenderConfigurationCommand}
   */
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateRecommenderConfigurationCommandOutput>;
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    cb: (err: any, data?: CreateRecommenderConfigurationCommandOutput) => void
  ): void;
  createRecommenderConfiguration(
    args: CreateRecommenderConfigurationCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSegmentCommand}
   */
  createSegment(
    args: CreateSegmentCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateSegmentCommandOutput>;
  createSegment(
    args: CreateSegmentCommandInput,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;
  createSegment(
    args: CreateSegmentCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSmsTemplateCommand}
   */
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateSmsTemplateCommandOutput>;
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    cb: (err: any, data?: CreateSmsTemplateCommandOutput) => void
  ): void;
  createSmsTemplate(
    args: CreateSmsTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceTemplateCommand}
   */
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<CreateVoiceTemplateCommandOutput>;
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    cb: (err: any, data?: CreateVoiceTemplateCommandOutput) => void
  ): void;
  createVoiceTemplate(
    args: CreateVoiceTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: CreateVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAdmChannelCommand}
   */
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteAdmChannelCommandOutput>;
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    cb: (err: any, data?: DeleteAdmChannelCommandOutput) => void
  ): void;
  deleteAdmChannel(
    args: DeleteAdmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsChannelCommand}
   */
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteApnsChannelCommandOutput>;
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    cb: (err: any, data?: DeleteApnsChannelCommandOutput) => void
  ): void;
  deleteApnsChannel(
    args: DeleteApnsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsSandboxChannelCommand}
   */
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteApnsSandboxChannelCommandOutput>;
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    cb: (err: any, data?: DeleteApnsSandboxChannelCommandOutput) => void
  ): void;
  deleteApnsSandboxChannel(
    args: DeleteApnsSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsVoipChannelCommand}
   */
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteApnsVoipChannelCommandOutput>;
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    cb: (err: any, data?: DeleteApnsVoipChannelCommandOutput) => void
  ): void;
  deleteApnsVoipChannel(
    args: DeleteApnsVoipChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApnsVoipSandboxChannelCommand}
   */
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteApnsVoipSandboxChannelCommandOutput>;
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: DeleteApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  deleteApnsVoipSandboxChannel(
    args: DeleteApnsVoipSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(
    args: DeleteAppCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteAppCommandOutput>;
  deleteApp(
    args: DeleteAppCommandInput,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBaiduChannelCommand}
   */
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteBaiduChannelCommandOutput>;
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    cb: (err: any, data?: DeleteBaiduChannelCommandOutput) => void
  ): void;
  deleteBaiduChannel(
    args: DeleteBaiduChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCampaignCommand}
   */
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteCampaignCommandOutput>;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;
  deleteCampaign(
    args: DeleteCampaignCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailChannelCommand}
   */
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteEmailChannelCommandOutput>;
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    cb: (err: any, data?: DeleteEmailChannelCommandOutput) => void
  ): void;
  deleteEmailChannel(
    args: DeleteEmailChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailTemplateCommand}
   */
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteEmailTemplateCommandOutput>;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;
  deleteEmailTemplate(
    args: DeleteEmailTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEventStreamCommand}
   */
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteEventStreamCommandOutput>;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;
  deleteEventStream(
    args: DeleteEventStreamCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGcmChannelCommand}
   */
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteGcmChannelCommandOutput>;
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    cb: (err: any, data?: DeleteGcmChannelCommandOutput) => void
  ): void;
  deleteGcmChannel(
    args: DeleteGcmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInAppTemplateCommand}
   */
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteInAppTemplateCommandOutput>;
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    cb: (err: any, data?: DeleteInAppTemplateCommandOutput) => void
  ): void;
  deleteInAppTemplate(
    args: DeleteInAppTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteJourneyCommand}
   */
  deleteJourney(
    args: DeleteJourneyCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteJourneyCommandOutput>;
  deleteJourney(
    args: DeleteJourneyCommandInput,
    cb: (err: any, data?: DeleteJourneyCommandOutput) => void
  ): void;
  deleteJourney(
    args: DeleteJourneyCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePushTemplateCommand}
   */
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeletePushTemplateCommandOutput>;
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    cb: (err: any, data?: DeletePushTemplateCommandOutput) => void
  ): void;
  deletePushTemplate(
    args: DeletePushTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeletePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecommenderConfigurationCommand}
   */
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteRecommenderConfigurationCommandOutput>;
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    cb: (err: any, data?: DeleteRecommenderConfigurationCommandOutput) => void
  ): void;
  deleteRecommenderConfiguration(
    args: DeleteRecommenderConfigurationCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSegmentCommand}
   */
  deleteSegment(
    args: DeleteSegmentCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteSegmentCommandOutput>;
  deleteSegment(
    args: DeleteSegmentCommandInput,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;
  deleteSegment(
    args: DeleteSegmentCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSmsChannelCommand}
   */
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteSmsChannelCommandOutput>;
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    cb: (err: any, data?: DeleteSmsChannelCommandOutput) => void
  ): void;
  deleteSmsChannel(
    args: DeleteSmsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSmsTemplateCommand}
   */
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteSmsTemplateCommandOutput>;
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    cb: (err: any, data?: DeleteSmsTemplateCommandOutput) => void
  ): void;
  deleteSmsTemplate(
    args: DeleteSmsTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserEndpointsCommand}
   */
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteUserEndpointsCommandOutput>;
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    cb: (err: any, data?: DeleteUserEndpointsCommandOutput) => void
  ): void;
  deleteUserEndpoints(
    args: DeleteUserEndpointsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteUserEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceChannelCommand}
   */
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteVoiceChannelCommandOutput>;
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    cb: (err: any, data?: DeleteVoiceChannelCommandOutput) => void
  ): void;
  deleteVoiceChannel(
    args: DeleteVoiceChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceTemplateCommand}
   */
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<DeleteVoiceTemplateCommandOutput>;
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    cb: (err: any, data?: DeleteVoiceTemplateCommandOutput) => void
  ): void;
  deleteVoiceTemplate(
    args: DeleteVoiceTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: DeleteVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdmChannelCommand}
   */
  getAdmChannel(
    args: GetAdmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetAdmChannelCommandOutput>;
  getAdmChannel(
    args: GetAdmChannelCommandInput,
    cb: (err: any, data?: GetAdmChannelCommandOutput) => void
  ): void;
  getAdmChannel(
    args: GetAdmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsChannelCommand}
   */
  getApnsChannel(
    args: GetApnsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApnsChannelCommandOutput>;
  getApnsChannel(
    args: GetApnsChannelCommandInput,
    cb: (err: any, data?: GetApnsChannelCommandOutput) => void
  ): void;
  getApnsChannel(
    args: GetApnsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsSandboxChannelCommand}
   */
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApnsSandboxChannelCommandOutput>;
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    cb: (err: any, data?: GetApnsSandboxChannelCommandOutput) => void
  ): void;
  getApnsSandboxChannel(
    args: GetApnsSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsVoipChannelCommand}
   */
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApnsVoipChannelCommandOutput>;
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    cb: (err: any, data?: GetApnsVoipChannelCommandOutput) => void
  ): void;
  getApnsVoipChannel(
    args: GetApnsVoipChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApnsVoipSandboxChannelCommand}
   */
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApnsVoipSandboxChannelCommandOutput>;
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: GetApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  getApnsVoipSandboxChannel(
    args: GetApnsVoipSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppCommand}
   */
  getApp(
    args: GetAppCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetAppCommandOutput>;
  getApp(
    args: GetAppCommandInput,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;
  getApp(
    args: GetAppCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetAppCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationDateRangeKpiCommand}
   */
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApplicationDateRangeKpiCommandOutput>;
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    cb: (err: any, data?: GetApplicationDateRangeKpiCommandOutput) => void
  ): void;
  getApplicationDateRangeKpi(
    args: GetApplicationDateRangeKpiCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApplicationDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationSettingsCommand}
   */
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetApplicationSettingsCommandOutput>;
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    cb: (err: any, data?: GetApplicationSettingsCommandOutput) => void
  ): void;
  getApplicationSettings(
    args: GetApplicationSettingsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetApplicationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppsCommand}
   */
  getApps(): Promise<GetAppsCommandOutput>;
  getApps(
    args: GetAppsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetAppsCommandOutput>;
  getApps(
    args: GetAppsCommandInput,
    cb: (err: any, data?: GetAppsCommandOutput) => void
  ): void;
  getApps(
    args: GetAppsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBaiduChannelCommand}
   */
  getBaiduChannel(
    args: GetBaiduChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetBaiduChannelCommandOutput>;
  getBaiduChannel(
    args: GetBaiduChannelCommandInput,
    cb: (err: any, data?: GetBaiduChannelCommandOutput) => void
  ): void;
  getBaiduChannel(
    args: GetBaiduChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignCommand}
   */
  getCampaign(
    args: GetCampaignCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignCommandOutput>;
  getCampaign(
    args: GetCampaignCommandInput,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;
  getCampaign(
    args: GetCampaignCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignActivitiesCommand}
   */
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignActivitiesCommandOutput>;
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    cb: (err: any, data?: GetCampaignActivitiesCommandOutput) => void
  ): void;
  getCampaignActivities(
    args: GetCampaignActivitiesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignDateRangeKpiCommand}
   */
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignDateRangeKpiCommandOutput>;
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    cb: (err: any, data?: GetCampaignDateRangeKpiCommandOutput) => void
  ): void;
  getCampaignDateRangeKpi(
    args: GetCampaignDateRangeKpiCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignsCommand}
   */
  getCampaigns(
    args: GetCampaignsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignsCommandOutput>;
  getCampaigns(
    args: GetCampaignsCommandInput,
    cb: (err: any, data?: GetCampaignsCommandOutput) => void
  ): void;
  getCampaigns(
    args: GetCampaignsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignVersionCommand}
   */
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignVersionCommandOutput>;
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    cb: (err: any, data?: GetCampaignVersionCommandOutput) => void
  ): void;
  getCampaignVersion(
    args: GetCampaignVersionCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCampaignVersionsCommand}
   */
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetCampaignVersionsCommandOutput>;
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    cb: (err: any, data?: GetCampaignVersionsCommandOutput) => void
  ): void;
  getCampaignVersions(
    args: GetCampaignVersionsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetCampaignVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelsCommand}
   */
  getChannels(
    args: GetChannelsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetChannelsCommandOutput>;
  getChannels(
    args: GetChannelsCommandInput,
    cb: (err: any, data?: GetChannelsCommandOutput) => void
  ): void;
  getChannels(
    args: GetChannelsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailChannelCommand}
   */
  getEmailChannel(
    args: GetEmailChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetEmailChannelCommandOutput>;
  getEmailChannel(
    args: GetEmailChannelCommandInput,
    cb: (err: any, data?: GetEmailChannelCommandOutput) => void
  ): void;
  getEmailChannel(
    args: GetEmailChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEmailTemplateCommand}
   */
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetEmailTemplateCommandOutput>;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;
  getEmailTemplate(
    args: GetEmailTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEndpointCommand}
   */
  getEndpoint(
    args: GetEndpointCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetEndpointCommandOutput>;
  getEndpoint(
    args: GetEndpointCommandInput,
    cb: (err: any, data?: GetEndpointCommandOutput) => void
  ): void;
  getEndpoint(
    args: GetEndpointCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEventStreamCommand}
   */
  getEventStream(
    args: GetEventStreamCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetEventStreamCommandOutput>;
  getEventStream(
    args: GetEventStreamCommandInput,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;
  getEventStream(
    args: GetEventStreamCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportJobCommand}
   */
  getExportJob(
    args: GetExportJobCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetExportJobCommandOutput>;
  getExportJob(
    args: GetExportJobCommandInput,
    cb: (err: any, data?: GetExportJobCommandOutput) => void
  ): void;
  getExportJob(
    args: GetExportJobCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportJobsCommand}
   */
  getExportJobs(
    args: GetExportJobsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetExportJobsCommandOutput>;
  getExportJobs(
    args: GetExportJobsCommandInput,
    cb: (err: any, data?: GetExportJobsCommandOutput) => void
  ): void;
  getExportJobs(
    args: GetExportJobsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGcmChannelCommand}
   */
  getGcmChannel(
    args: GetGcmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetGcmChannelCommandOutput>;
  getGcmChannel(
    args: GetGcmChannelCommandInput,
    cb: (err: any, data?: GetGcmChannelCommandOutput) => void
  ): void;
  getGcmChannel(
    args: GetGcmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobCommand}
   */
  getImportJob(
    args: GetImportJobCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetImportJobCommandOutput>;
  getImportJob(
    args: GetImportJobCommandInput,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;
  getImportJob(
    args: GetImportJobCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportJobsCommand}
   */
  getImportJobs(
    args: GetImportJobsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetImportJobsCommandOutput>;
  getImportJobs(
    args: GetImportJobsCommandInput,
    cb: (err: any, data?: GetImportJobsCommandOutput) => void
  ): void;
  getImportJobs(
    args: GetImportJobsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInAppMessagesCommand}
   */
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetInAppMessagesCommandOutput>;
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    cb: (err: any, data?: GetInAppMessagesCommandOutput) => void
  ): void;
  getInAppMessages(
    args: GetInAppMessagesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetInAppMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInAppTemplateCommand}
   */
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetInAppTemplateCommandOutput>;
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    cb: (err: any, data?: GetInAppTemplateCommandOutput) => void
  ): void;
  getInAppTemplate(
    args: GetInAppTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyCommand}
   */
  getJourney(
    args: GetJourneyCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyCommandOutput>;
  getJourney(
    args: GetJourneyCommandInput,
    cb: (err: any, data?: GetJourneyCommandOutput) => void
  ): void;
  getJourney(
    args: GetJourneyCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyDateRangeKpiCommand}
   */
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyDateRangeKpiCommandOutput>;
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    cb: (err: any, data?: GetJourneyDateRangeKpiCommandOutput) => void
  ): void;
  getJourneyDateRangeKpi(
    args: GetJourneyDateRangeKpiCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyDateRangeKpiCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyExecutionActivityMetricsCommand}
   */
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyExecutionActivityMetricsCommandOutput>;
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    cb: (err: any, data?: GetJourneyExecutionActivityMetricsCommandOutput) => void
  ): void;
  getJourneyExecutionActivityMetrics(
    args: GetJourneyExecutionActivityMetricsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyExecutionActivityMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyExecutionMetricsCommand}
   */
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyExecutionMetricsCommandOutput>;
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    cb: (err: any, data?: GetJourneyExecutionMetricsCommandOutput) => void
  ): void;
  getJourneyExecutionMetrics(
    args: GetJourneyExecutionMetricsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyExecutionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunExecutionActivityMetricsCommand}
   */
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyRunExecutionActivityMetricsCommandOutput>;
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    cb: (err: any, data?: GetJourneyRunExecutionActivityMetricsCommandOutput) => void
  ): void;
  getJourneyRunExecutionActivityMetrics(
    args: GetJourneyRunExecutionActivityMetricsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyRunExecutionActivityMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunExecutionMetricsCommand}
   */
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyRunExecutionMetricsCommandOutput>;
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    cb: (err: any, data?: GetJourneyRunExecutionMetricsCommandOutput) => void
  ): void;
  getJourneyRunExecutionMetrics(
    args: GetJourneyRunExecutionMetricsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyRunExecutionMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJourneyRunsCommand}
   */
  getJourneyRuns(
    args: GetJourneyRunsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetJourneyRunsCommandOutput>;
  getJourneyRuns(
    args: GetJourneyRunsCommandInput,
    cb: (err: any, data?: GetJourneyRunsCommandOutput) => void
  ): void;
  getJourneyRuns(
    args: GetJourneyRunsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetJourneyRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPushTemplateCommand}
   */
  getPushTemplate(
    args: GetPushTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetPushTemplateCommandOutput>;
  getPushTemplate(
    args: GetPushTemplateCommandInput,
    cb: (err: any, data?: GetPushTemplateCommandOutput) => void
  ): void;
  getPushTemplate(
    args: GetPushTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetPushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderConfigurationCommand}
   */
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetRecommenderConfigurationCommandOutput>;
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    cb: (err: any, data?: GetRecommenderConfigurationCommandOutput) => void
  ): void;
  getRecommenderConfiguration(
    args: GetRecommenderConfigurationCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecommenderConfigurationsCommand}
   */
  getRecommenderConfigurations(): Promise<GetRecommenderConfigurationsCommandOutput>;
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetRecommenderConfigurationsCommandOutput>;
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    cb: (err: any, data?: GetRecommenderConfigurationsCommandOutput) => void
  ): void;
  getRecommenderConfigurations(
    args: GetRecommenderConfigurationsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetRecommenderConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentCommand}
   */
  getSegment(
    args: GetSegmentCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentCommandOutput>;
  getSegment(
    args: GetSegmentCommandInput,
    cb: (err: any, data?: GetSegmentCommandOutput) => void
  ): void;
  getSegment(
    args: GetSegmentCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentExportJobsCommand}
   */
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentExportJobsCommandOutput>;
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    cb: (err: any, data?: GetSegmentExportJobsCommandOutput) => void
  ): void;
  getSegmentExportJobs(
    args: GetSegmentExportJobsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentImportJobsCommand}
   */
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentImportJobsCommandOutput>;
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    cb: (err: any, data?: GetSegmentImportJobsCommandOutput) => void
  ): void;
  getSegmentImportJobs(
    args: GetSegmentImportJobsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentsCommand}
   */
  getSegments(
    args: GetSegmentsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentsCommandOutput>;
  getSegments(
    args: GetSegmentsCommandInput,
    cb: (err: any, data?: GetSegmentsCommandOutput) => void
  ): void;
  getSegments(
    args: GetSegmentsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentVersionCommand}
   */
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentVersionCommandOutput>;
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    cb: (err: any, data?: GetSegmentVersionCommandOutput) => void
  ): void;
  getSegmentVersion(
    args: GetSegmentVersionCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSegmentVersionsCommand}
   */
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSegmentVersionsCommandOutput>;
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    cb: (err: any, data?: GetSegmentVersionsCommandOutput) => void
  ): void;
  getSegmentVersions(
    args: GetSegmentVersionsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSegmentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSmsChannelCommand}
   */
  getSmsChannel(
    args: GetSmsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSmsChannelCommandOutput>;
  getSmsChannel(
    args: GetSmsChannelCommandInput,
    cb: (err: any, data?: GetSmsChannelCommandOutput) => void
  ): void;
  getSmsChannel(
    args: GetSmsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSmsTemplateCommand}
   */
  getSmsTemplate(
    args: GetSmsTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetSmsTemplateCommandOutput>;
  getSmsTemplate(
    args: GetSmsTemplateCommandInput,
    cb: (err: any, data?: GetSmsTemplateCommandOutput) => void
  ): void;
  getSmsTemplate(
    args: GetSmsTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserEndpointsCommand}
   */
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetUserEndpointsCommandOutput>;
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    cb: (err: any, data?: GetUserEndpointsCommandOutput) => void
  ): void;
  getUserEndpoints(
    args: GetUserEndpointsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetUserEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceChannelCommand}
   */
  getVoiceChannel(
    args: GetVoiceChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetVoiceChannelCommandOutput>;
  getVoiceChannel(
    args: GetVoiceChannelCommandInput,
    cb: (err: any, data?: GetVoiceChannelCommandOutput) => void
  ): void;
  getVoiceChannel(
    args: GetVoiceChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceTemplateCommand}
   */
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<GetVoiceTemplateCommandOutput>;
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    cb: (err: any, data?: GetVoiceTemplateCommandOutput) => void
  ): void;
  getVoiceTemplate(
    args: GetVoiceTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: GetVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJourneysCommand}
   */
  listJourneys(
    args: ListJourneysCommandInput,
    options?: PinpointRequestOptions
  ): Promise<ListJourneysCommandOutput>;
  listJourneys(
    args: ListJourneysCommandInput,
    cb: (err: any, data?: ListJourneysCommandOutput) => void
  ): void;
  listJourneys(
    args: ListJourneysCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: ListJourneysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PinpointRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplateVersionsCommand}
   */
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<ListTemplateVersionsCommandOutput>;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;
  listTemplateVersions(
    args: ListTemplateVersionsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: ListTemplateVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PhoneNumberValidateCommand}
   */
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<PhoneNumberValidateCommandOutput>;
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    cb: (err: any, data?: PhoneNumberValidateCommandOutput) => void
  ): void;
  phoneNumberValidate(
    args: PhoneNumberValidateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: PhoneNumberValidateCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventsCommand}
   */
  putEvents(
    args: PutEventsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEventStreamCommand}
   */
  putEventStream(
    args: PutEventStreamCommandInput,
    options?: PinpointRequestOptions
  ): Promise<PutEventStreamCommandOutput>;
  putEventStream(
    args: PutEventStreamCommandInput,
    cb: (err: any, data?: PutEventStreamCommandOutput) => void
  ): void;
  putEventStream(
    args: PutEventStreamCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: PutEventStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAttributesCommand}
   */
  removeAttributes(
    args: RemoveAttributesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<RemoveAttributesCommandOutput>;
  removeAttributes(
    args: RemoveAttributesCommandInput,
    cb: (err: any, data?: RemoveAttributesCommandOutput) => void
  ): void;
  removeAttributes(
    args: RemoveAttributesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: RemoveAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendMessagesCommand}
   */
  sendMessages(
    args: SendMessagesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<SendMessagesCommandOutput>;
  sendMessages(
    args: SendMessagesCommandInput,
    cb: (err: any, data?: SendMessagesCommandOutput) => void
  ): void;
  sendMessages(
    args: SendMessagesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: SendMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link SendOTPMessageCommand}
   */
  sendOTPMessage(
    args: SendOTPMessageCommandInput,
    options?: PinpointRequestOptions
  ): Promise<SendOTPMessageCommandOutput>;
  sendOTPMessage(
    args: SendOTPMessageCommandInput,
    cb: (err: any, data?: SendOTPMessageCommandOutput) => void
  ): void;
  sendOTPMessage(
    args: SendOTPMessageCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: SendOTPMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link SendUsersMessagesCommand}
   */
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    options?: PinpointRequestOptions
  ): Promise<SendUsersMessagesCommandOutput>;
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    cb: (err: any, data?: SendUsersMessagesCommandOutput) => void
  ): void;
  sendUsersMessages(
    args: SendUsersMessagesCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: SendUsersMessagesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PinpointRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAdmChannelCommand}
   */
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateAdmChannelCommandOutput>;
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    cb: (err: any, data?: UpdateAdmChannelCommandOutput) => void
  ): void;
  updateAdmChannel(
    args: UpdateAdmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateAdmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsChannelCommand}
   */
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateApnsChannelCommandOutput>;
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    cb: (err: any, data?: UpdateApnsChannelCommandOutput) => void
  ): void;
  updateApnsChannel(
    args: UpdateApnsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateApnsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsSandboxChannelCommand}
   */
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateApnsSandboxChannelCommandOutput>;
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    cb: (err: any, data?: UpdateApnsSandboxChannelCommandOutput) => void
  ): void;
  updateApnsSandboxChannel(
    args: UpdateApnsSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateApnsSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsVoipChannelCommand}
   */
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateApnsVoipChannelCommandOutput>;
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    cb: (err: any, data?: UpdateApnsVoipChannelCommandOutput) => void
  ): void;
  updateApnsVoipChannel(
    args: UpdateApnsVoipChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateApnsVoipChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApnsVoipSandboxChannelCommand}
   */
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateApnsVoipSandboxChannelCommandOutput>;
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    cb: (err: any, data?: UpdateApnsVoipSandboxChannelCommandOutput) => void
  ): void;
  updateApnsVoipSandboxChannel(
    args: UpdateApnsVoipSandboxChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateApnsVoipSandboxChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationSettingsCommand}
   */
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateApplicationSettingsCommandOutput>;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;
  updateApplicationSettings(
    args: UpdateApplicationSettingsCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateApplicationSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBaiduChannelCommand}
   */
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateBaiduChannelCommandOutput>;
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    cb: (err: any, data?: UpdateBaiduChannelCommandOutput) => void
  ): void;
  updateBaiduChannel(
    args: UpdateBaiduChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateBaiduChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCampaignCommand}
   */
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateCampaignCommandOutput>;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;
  updateCampaign(
    args: UpdateCampaignCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateCampaignCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailChannelCommand}
   */
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateEmailChannelCommandOutput>;
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    cb: (err: any, data?: UpdateEmailChannelCommandOutput) => void
  ): void;
  updateEmailChannel(
    args: UpdateEmailChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateEmailChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEmailTemplateCommand}
   */
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateEmailTemplateCommandOutput>;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;
  updateEmailTemplate(
    args: UpdateEmailTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateEmailTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateEndpointCommandOutput>;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointsBatchCommand}
   */
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateEndpointsBatchCommandOutput>;
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    cb: (err: any, data?: UpdateEndpointsBatchCommandOutput) => void
  ): void;
  updateEndpointsBatch(
    args: UpdateEndpointsBatchCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateEndpointsBatchCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGcmChannelCommand}
   */
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateGcmChannelCommandOutput>;
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    cb: (err: any, data?: UpdateGcmChannelCommandOutput) => void
  ): void;
  updateGcmChannel(
    args: UpdateGcmChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateGcmChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInAppTemplateCommand}
   */
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateInAppTemplateCommandOutput>;
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    cb: (err: any, data?: UpdateInAppTemplateCommandOutput) => void
  ): void;
  updateInAppTemplate(
    args: UpdateInAppTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateInAppTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJourneyCommand}
   */
  updateJourney(
    args: UpdateJourneyCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateJourneyCommandOutput>;
  updateJourney(
    args: UpdateJourneyCommandInput,
    cb: (err: any, data?: UpdateJourneyCommandOutput) => void
  ): void;
  updateJourney(
    args: UpdateJourneyCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateJourneyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateJourneyStateCommand}
   */
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateJourneyStateCommandOutput>;
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    cb: (err: any, data?: UpdateJourneyStateCommandOutput) => void
  ): void;
  updateJourneyState(
    args: UpdateJourneyStateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateJourneyStateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePushTemplateCommand}
   */
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdatePushTemplateCommandOutput>;
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    cb: (err: any, data?: UpdatePushTemplateCommandOutput) => void
  ): void;
  updatePushTemplate(
    args: UpdatePushTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdatePushTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecommenderConfigurationCommand}
   */
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateRecommenderConfigurationCommandOutput>;
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    cb: (err: any, data?: UpdateRecommenderConfigurationCommandOutput) => void
  ): void;
  updateRecommenderConfiguration(
    args: UpdateRecommenderConfigurationCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateRecommenderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSegmentCommand}
   */
  updateSegment(
    args: UpdateSegmentCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateSegmentCommandOutput>;
  updateSegment(
    args: UpdateSegmentCommandInput,
    cb: (err: any, data?: UpdateSegmentCommandOutput) => void
  ): void;
  updateSegment(
    args: UpdateSegmentCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateSegmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSmsChannelCommand}
   */
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateSmsChannelCommandOutput>;
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    cb: (err: any, data?: UpdateSmsChannelCommandOutput) => void
  ): void;
  updateSmsChannel(
    args: UpdateSmsChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateSmsChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSmsTemplateCommand}
   */
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateSmsTemplateCommandOutput>;
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    cb: (err: any, data?: UpdateSmsTemplateCommandOutput) => void
  ): void;
  updateSmsTemplate(
    args: UpdateSmsTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateSmsTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateActiveVersionCommand}
   */
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateTemplateActiveVersionCommandOutput>;
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    cb: (err: any, data?: UpdateTemplateActiveVersionCommandOutput) => void
  ): void;
  updateTemplateActiveVersion(
    args: UpdateTemplateActiveVersionCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateTemplateActiveVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceChannelCommand}
   */
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateVoiceChannelCommandOutput>;
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    cb: (err: any, data?: UpdateVoiceChannelCommandOutput) => void
  ): void;
  updateVoiceChannel(
    args: UpdateVoiceChannelCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateVoiceChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceTemplateCommand}
   */
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    options?: PinpointRequestOptions
  ): Promise<UpdateVoiceTemplateCommandOutput>;
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    cb: (err: any, data?: UpdateVoiceTemplateCommandOutput) => void
  ): void;
  updateVoiceTemplate(
    args: UpdateVoiceTemplateCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: UpdateVoiceTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyOTPMessageCommand}
   */
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    options?: PinpointRequestOptions
  ): Promise<VerifyOTPMessageCommandOutput>;
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    cb: (err: any, data?: VerifyOTPMessageCommandOutput) => void
  ): void;
  verifyOTPMessage(
    args: VerifyOTPMessageCommandInput,
    options: PinpointRequestOptions,
    cb: (err: any, data?: VerifyOTPMessageCommandOutput) => void
  ): void;
}

/**
 * <p>Doc Engage API - Amazon Pinpoint API</p>
 * @public
 */
export class Pinpoint extends PinpointClient implements Pinpoint {}
createAggregatedClient(commands, Pinpoint);
