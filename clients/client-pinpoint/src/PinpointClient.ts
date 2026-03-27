// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultPinpointHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import type { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import type {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "./commands/CreateEmailTemplateCommand";
import type { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "./commands/CreateExportJobCommand";
import type { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "./commands/CreateImportJobCommand";
import type {
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
} from "./commands/CreateInAppTemplateCommand";
import type { CreateJourneyCommandInput, CreateJourneyCommandOutput } from "./commands/CreateJourneyCommand";
import type {
  CreatePushTemplateCommandInput,
  CreatePushTemplateCommandOutput,
} from "./commands/CreatePushTemplateCommand";
import type {
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
} from "./commands/CreateRecommenderConfigurationCommand";
import type { CreateSegmentCommandInput, CreateSegmentCommandOutput } from "./commands/CreateSegmentCommand";
import type {
  CreateSmsTemplateCommandInput,
  CreateSmsTemplateCommandOutput,
} from "./commands/CreateSmsTemplateCommand";
import type {
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
} from "./commands/CreateVoiceTemplateCommand";
import type { DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput } from "./commands/DeleteAdmChannelCommand";
import type {
  DeleteApnsChannelCommandInput,
  DeleteApnsChannelCommandOutput,
} from "./commands/DeleteApnsChannelCommand";
import type {
  DeleteApnsSandboxChannelCommandInput,
  DeleteApnsSandboxChannelCommandOutput,
} from "./commands/DeleteApnsSandboxChannelCommand";
import type {
  DeleteApnsVoipChannelCommandInput,
  DeleteApnsVoipChannelCommandOutput,
} from "./commands/DeleteApnsVoipChannelCommand";
import type {
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
} from "./commands/DeleteApnsVoipSandboxChannelCommand";
import type { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import type {
  DeleteBaiduChannelCommandInput,
  DeleteBaiduChannelCommandOutput,
} from "./commands/DeleteBaiduChannelCommand";
import type { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import type {
  DeleteEmailChannelCommandInput,
  DeleteEmailChannelCommandOutput,
} from "./commands/DeleteEmailChannelCommand";
import type {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "./commands/DeleteEmailTemplateCommand";
import type { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import type {
  DeleteEventStreamCommandInput,
  DeleteEventStreamCommandOutput,
} from "./commands/DeleteEventStreamCommand";
import type { DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput } from "./commands/DeleteGcmChannelCommand";
import type {
  DeleteInAppTemplateCommandInput,
  DeleteInAppTemplateCommandOutput,
} from "./commands/DeleteInAppTemplateCommand";
import type { DeleteJourneyCommandInput, DeleteJourneyCommandOutput } from "./commands/DeleteJourneyCommand";
import type {
  DeletePushTemplateCommandInput,
  DeletePushTemplateCommandOutput,
} from "./commands/DeletePushTemplateCommand";
import type {
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
} from "./commands/DeleteRecommenderConfigurationCommand";
import type { DeleteSegmentCommandInput, DeleteSegmentCommandOutput } from "./commands/DeleteSegmentCommand";
import type { DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput } from "./commands/DeleteSmsChannelCommand";
import type {
  DeleteSmsTemplateCommandInput,
  DeleteSmsTemplateCommandOutput,
} from "./commands/DeleteSmsTemplateCommand";
import type {
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
} from "./commands/DeleteUserEndpointsCommand";
import type {
  DeleteVoiceChannelCommandInput,
  DeleteVoiceChannelCommandOutput,
} from "./commands/DeleteVoiceChannelCommand";
import type {
  DeleteVoiceTemplateCommandInput,
  DeleteVoiceTemplateCommandOutput,
} from "./commands/DeleteVoiceTemplateCommand";
import type { GetAdmChannelCommandInput, GetAdmChannelCommandOutput } from "./commands/GetAdmChannelCommand";
import type { GetApnsChannelCommandInput, GetApnsChannelCommandOutput } from "./commands/GetApnsChannelCommand";
import type {
  GetApnsSandboxChannelCommandInput,
  GetApnsSandboxChannelCommandOutput,
} from "./commands/GetApnsSandboxChannelCommand";
import type {
  GetApnsVoipChannelCommandInput,
  GetApnsVoipChannelCommandOutput,
} from "./commands/GetApnsVoipChannelCommand";
import type {
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
} from "./commands/GetApnsVoipSandboxChannelCommand";
import type { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import type {
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
} from "./commands/GetApplicationDateRangeKpiCommand";
import type {
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
} from "./commands/GetApplicationSettingsCommand";
import type { GetAppsCommandInput, GetAppsCommandOutput } from "./commands/GetAppsCommand";
import type { GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput } from "./commands/GetBaiduChannelCommand";
import type {
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
} from "./commands/GetCampaignActivitiesCommand";
import type { GetCampaignCommandInput, GetCampaignCommandOutput } from "./commands/GetCampaignCommand";
import type {
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
} from "./commands/GetCampaignDateRangeKpiCommand";
import type { GetCampaignsCommandInput, GetCampaignsCommandOutput } from "./commands/GetCampaignsCommand";
import type {
  GetCampaignVersionCommandInput,
  GetCampaignVersionCommandOutput,
} from "./commands/GetCampaignVersionCommand";
import type {
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "./commands/GetCampaignVersionsCommand";
import type { GetChannelsCommandInput, GetChannelsCommandOutput } from "./commands/GetChannelsCommand";
import type { GetEmailChannelCommandInput, GetEmailChannelCommandOutput } from "./commands/GetEmailChannelCommand";
import type { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "./commands/GetEmailTemplateCommand";
import type { GetEndpointCommandInput, GetEndpointCommandOutput } from "./commands/GetEndpointCommand";
import type { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "./commands/GetEventStreamCommand";
import type { GetExportJobCommandInput, GetExportJobCommandOutput } from "./commands/GetExportJobCommand";
import type { GetExportJobsCommandInput, GetExportJobsCommandOutput } from "./commands/GetExportJobsCommand";
import type { GetGcmChannelCommandInput, GetGcmChannelCommandOutput } from "./commands/GetGcmChannelCommand";
import type { GetImportJobCommandInput, GetImportJobCommandOutput } from "./commands/GetImportJobCommand";
import type { GetImportJobsCommandInput, GetImportJobsCommandOutput } from "./commands/GetImportJobsCommand";
import type { GetInAppMessagesCommandInput, GetInAppMessagesCommandOutput } from "./commands/GetInAppMessagesCommand";
import type { GetInAppTemplateCommandInput, GetInAppTemplateCommandOutput } from "./commands/GetInAppTemplateCommand";
import type { GetJourneyCommandInput, GetJourneyCommandOutput } from "./commands/GetJourneyCommand";
import type {
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
} from "./commands/GetJourneyDateRangeKpiCommand";
import type {
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
} from "./commands/GetJourneyExecutionActivityMetricsCommand";
import type {
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
} from "./commands/GetJourneyExecutionMetricsCommand";
import type {
  GetJourneyRunExecutionActivityMetricsCommandInput,
  GetJourneyRunExecutionActivityMetricsCommandOutput,
} from "./commands/GetJourneyRunExecutionActivityMetricsCommand";
import type {
  GetJourneyRunExecutionMetricsCommandInput,
  GetJourneyRunExecutionMetricsCommandOutput,
} from "./commands/GetJourneyRunExecutionMetricsCommand";
import type { GetJourneyRunsCommandInput, GetJourneyRunsCommandOutput } from "./commands/GetJourneyRunsCommand";
import type { GetPushTemplateCommandInput, GetPushTemplateCommandOutput } from "./commands/GetPushTemplateCommand";
import type {
  GetRecommenderConfigurationCommandInput,
  GetRecommenderConfigurationCommandOutput,
} from "./commands/GetRecommenderConfigurationCommand";
import type {
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
} from "./commands/GetRecommenderConfigurationsCommand";
import type { GetSegmentCommandInput, GetSegmentCommandOutput } from "./commands/GetSegmentCommand";
import type {
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
} from "./commands/GetSegmentExportJobsCommand";
import type {
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
} from "./commands/GetSegmentImportJobsCommand";
import type { GetSegmentsCommandInput, GetSegmentsCommandOutput } from "./commands/GetSegmentsCommand";
import type {
  GetSegmentVersionCommandInput,
  GetSegmentVersionCommandOutput,
} from "./commands/GetSegmentVersionCommand";
import type {
  GetSegmentVersionsCommandInput,
  GetSegmentVersionsCommandOutput,
} from "./commands/GetSegmentVersionsCommand";
import type { GetSmsChannelCommandInput, GetSmsChannelCommandOutput } from "./commands/GetSmsChannelCommand";
import type { GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput } from "./commands/GetSmsTemplateCommand";
import type { GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput } from "./commands/GetUserEndpointsCommand";
import type { GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput } from "./commands/GetVoiceChannelCommand";
import type { GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput } from "./commands/GetVoiceTemplateCommand";
import type { ListJourneysCommandInput, ListJourneysCommandOutput } from "./commands/ListJourneysCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import type {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import type {
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "./commands/PhoneNumberValidateCommand";
import type { PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import type { PutEventStreamCommandInput, PutEventStreamCommandOutput } from "./commands/PutEventStreamCommand";
import type { RemoveAttributesCommandInput, RemoveAttributesCommandOutput } from "./commands/RemoveAttributesCommand";
import type { SendMessagesCommandInput, SendMessagesCommandOutput } from "./commands/SendMessagesCommand";
import type { SendOTPMessageCommandInput, SendOTPMessageCommandOutput } from "./commands/SendOTPMessageCommand";
import type {
  SendUsersMessagesCommandInput,
  SendUsersMessagesCommandOutput,
} from "./commands/SendUsersMessagesCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput } from "./commands/UpdateAdmChannelCommand";
import type {
  UpdateApnsChannelCommandInput,
  UpdateApnsChannelCommandOutput,
} from "./commands/UpdateApnsChannelCommand";
import type {
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
} from "./commands/UpdateApnsSandboxChannelCommand";
import type {
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
} from "./commands/UpdateApnsVoipChannelCommand";
import type {
  UpdateApnsVoipSandboxChannelCommandInput,
  UpdateApnsVoipSandboxChannelCommandOutput,
} from "./commands/UpdateApnsVoipSandboxChannelCommand";
import type {
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "./commands/UpdateApplicationSettingsCommand";
import type {
  UpdateBaiduChannelCommandInput,
  UpdateBaiduChannelCommandOutput,
} from "./commands/UpdateBaiduChannelCommand";
import type { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import type {
  UpdateEmailChannelCommandInput,
  UpdateEmailChannelCommandOutput,
} from "./commands/UpdateEmailChannelCommand";
import type {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "./commands/UpdateEmailTemplateCommand";
import type { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import type {
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
} from "./commands/UpdateEndpointsBatchCommand";
import type { UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput } from "./commands/UpdateGcmChannelCommand";
import type {
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
} from "./commands/UpdateInAppTemplateCommand";
import type { UpdateJourneyCommandInput, UpdateJourneyCommandOutput } from "./commands/UpdateJourneyCommand";
import type {
  UpdateJourneyStateCommandInput,
  UpdateJourneyStateCommandOutput,
} from "./commands/UpdateJourneyStateCommand";
import type {
  UpdatePushTemplateCommandInput,
  UpdatePushTemplateCommandOutput,
} from "./commands/UpdatePushTemplateCommand";
import type {
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
} from "./commands/UpdateRecommenderConfigurationCommand";
import type { UpdateSegmentCommandInput, UpdateSegmentCommandOutput } from "./commands/UpdateSegmentCommand";
import type { UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput } from "./commands/UpdateSmsChannelCommand";
import type {
  UpdateSmsTemplateCommandInput,
  UpdateSmsTemplateCommandOutput,
} from "./commands/UpdateSmsTemplateCommand";
import type {
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
} from "./commands/UpdateTemplateActiveVersionCommand";
import type {
  UpdateVoiceChannelCommandInput,
  UpdateVoiceChannelCommandOutput,
} from "./commands/UpdateVoiceChannelCommand";
import type {
  UpdateVoiceTemplateCommandInput,
  UpdateVoiceTemplateCommandOutput,
} from "./commands/UpdateVoiceTemplateCommand";
import type { VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput } from "./commands/VerifyOTPMessageCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateAppCommandInput
  | CreateCampaignCommandInput
  | CreateEmailTemplateCommandInput
  | CreateExportJobCommandInput
  | CreateImportJobCommandInput
  | CreateInAppTemplateCommandInput
  | CreateJourneyCommandInput
  | CreatePushTemplateCommandInput
  | CreateRecommenderConfigurationCommandInput
  | CreateSegmentCommandInput
  | CreateSmsTemplateCommandInput
  | CreateVoiceTemplateCommandInput
  | DeleteAdmChannelCommandInput
  | DeleteApnsChannelCommandInput
  | DeleteApnsSandboxChannelCommandInput
  | DeleteApnsVoipChannelCommandInput
  | DeleteApnsVoipSandboxChannelCommandInput
  | DeleteAppCommandInput
  | DeleteBaiduChannelCommandInput
  | DeleteCampaignCommandInput
  | DeleteEmailChannelCommandInput
  | DeleteEmailTemplateCommandInput
  | DeleteEndpointCommandInput
  | DeleteEventStreamCommandInput
  | DeleteGcmChannelCommandInput
  | DeleteInAppTemplateCommandInput
  | DeleteJourneyCommandInput
  | DeletePushTemplateCommandInput
  | DeleteRecommenderConfigurationCommandInput
  | DeleteSegmentCommandInput
  | DeleteSmsChannelCommandInput
  | DeleteSmsTemplateCommandInput
  | DeleteUserEndpointsCommandInput
  | DeleteVoiceChannelCommandInput
  | DeleteVoiceTemplateCommandInput
  | GetAdmChannelCommandInput
  | GetApnsChannelCommandInput
  | GetApnsSandboxChannelCommandInput
  | GetApnsVoipChannelCommandInput
  | GetApnsVoipSandboxChannelCommandInput
  | GetAppCommandInput
  | GetApplicationDateRangeKpiCommandInput
  | GetApplicationSettingsCommandInput
  | GetAppsCommandInput
  | GetBaiduChannelCommandInput
  | GetCampaignActivitiesCommandInput
  | GetCampaignCommandInput
  | GetCampaignDateRangeKpiCommandInput
  | GetCampaignVersionCommandInput
  | GetCampaignVersionsCommandInput
  | GetCampaignsCommandInput
  | GetChannelsCommandInput
  | GetEmailChannelCommandInput
  | GetEmailTemplateCommandInput
  | GetEndpointCommandInput
  | GetEventStreamCommandInput
  | GetExportJobCommandInput
  | GetExportJobsCommandInput
  | GetGcmChannelCommandInput
  | GetImportJobCommandInput
  | GetImportJobsCommandInput
  | GetInAppMessagesCommandInput
  | GetInAppTemplateCommandInput
  | GetJourneyCommandInput
  | GetJourneyDateRangeKpiCommandInput
  | GetJourneyExecutionActivityMetricsCommandInput
  | GetJourneyExecutionMetricsCommandInput
  | GetJourneyRunExecutionActivityMetricsCommandInput
  | GetJourneyRunExecutionMetricsCommandInput
  | GetJourneyRunsCommandInput
  | GetPushTemplateCommandInput
  | GetRecommenderConfigurationCommandInput
  | GetRecommenderConfigurationsCommandInput
  | GetSegmentCommandInput
  | GetSegmentExportJobsCommandInput
  | GetSegmentImportJobsCommandInput
  | GetSegmentVersionCommandInput
  | GetSegmentVersionsCommandInput
  | GetSegmentsCommandInput
  | GetSmsChannelCommandInput
  | GetSmsTemplateCommandInput
  | GetUserEndpointsCommandInput
  | GetVoiceChannelCommandInput
  | GetVoiceTemplateCommandInput
  | ListJourneysCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateVersionsCommandInput
  | ListTemplatesCommandInput
  | PhoneNumberValidateCommandInput
  | PutEventStreamCommandInput
  | PutEventsCommandInput
  | RemoveAttributesCommandInput
  | SendMessagesCommandInput
  | SendOTPMessageCommandInput
  | SendUsersMessagesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAdmChannelCommandInput
  | UpdateApnsChannelCommandInput
  | UpdateApnsSandboxChannelCommandInput
  | UpdateApnsVoipChannelCommandInput
  | UpdateApnsVoipSandboxChannelCommandInput
  | UpdateApplicationSettingsCommandInput
  | UpdateBaiduChannelCommandInput
  | UpdateCampaignCommandInput
  | UpdateEmailChannelCommandInput
  | UpdateEmailTemplateCommandInput
  | UpdateEndpointCommandInput
  | UpdateEndpointsBatchCommandInput
  | UpdateGcmChannelCommandInput
  | UpdateInAppTemplateCommandInput
  | UpdateJourneyCommandInput
  | UpdateJourneyStateCommandInput
  | UpdatePushTemplateCommandInput
  | UpdateRecommenderConfigurationCommandInput
  | UpdateSegmentCommandInput
  | UpdateSmsChannelCommandInput
  | UpdateSmsTemplateCommandInput
  | UpdateTemplateActiveVersionCommandInput
  | UpdateVoiceChannelCommandInput
  | UpdateVoiceTemplateCommandInput
  | VerifyOTPMessageCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAppCommandOutput
  | CreateCampaignCommandOutput
  | CreateEmailTemplateCommandOutput
  | CreateExportJobCommandOutput
  | CreateImportJobCommandOutput
  | CreateInAppTemplateCommandOutput
  | CreateJourneyCommandOutput
  | CreatePushTemplateCommandOutput
  | CreateRecommenderConfigurationCommandOutput
  | CreateSegmentCommandOutput
  | CreateSmsTemplateCommandOutput
  | CreateVoiceTemplateCommandOutput
  | DeleteAdmChannelCommandOutput
  | DeleteApnsChannelCommandOutput
  | DeleteApnsSandboxChannelCommandOutput
  | DeleteApnsVoipChannelCommandOutput
  | DeleteApnsVoipSandboxChannelCommandOutput
  | DeleteAppCommandOutput
  | DeleteBaiduChannelCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteEmailChannelCommandOutput
  | DeleteEmailTemplateCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEventStreamCommandOutput
  | DeleteGcmChannelCommandOutput
  | DeleteInAppTemplateCommandOutput
  | DeleteJourneyCommandOutput
  | DeletePushTemplateCommandOutput
  | DeleteRecommenderConfigurationCommandOutput
  | DeleteSegmentCommandOutput
  | DeleteSmsChannelCommandOutput
  | DeleteSmsTemplateCommandOutput
  | DeleteUserEndpointsCommandOutput
  | DeleteVoiceChannelCommandOutput
  | DeleteVoiceTemplateCommandOutput
  | GetAdmChannelCommandOutput
  | GetApnsChannelCommandOutput
  | GetApnsSandboxChannelCommandOutput
  | GetApnsVoipChannelCommandOutput
  | GetApnsVoipSandboxChannelCommandOutput
  | GetAppCommandOutput
  | GetApplicationDateRangeKpiCommandOutput
  | GetApplicationSettingsCommandOutput
  | GetAppsCommandOutput
  | GetBaiduChannelCommandOutput
  | GetCampaignActivitiesCommandOutput
  | GetCampaignCommandOutput
  | GetCampaignDateRangeKpiCommandOutput
  | GetCampaignVersionCommandOutput
  | GetCampaignVersionsCommandOutput
  | GetCampaignsCommandOutput
  | GetChannelsCommandOutput
  | GetEmailChannelCommandOutput
  | GetEmailTemplateCommandOutput
  | GetEndpointCommandOutput
  | GetEventStreamCommandOutput
  | GetExportJobCommandOutput
  | GetExportJobsCommandOutput
  | GetGcmChannelCommandOutput
  | GetImportJobCommandOutput
  | GetImportJobsCommandOutput
  | GetInAppMessagesCommandOutput
  | GetInAppTemplateCommandOutput
  | GetJourneyCommandOutput
  | GetJourneyDateRangeKpiCommandOutput
  | GetJourneyExecutionActivityMetricsCommandOutput
  | GetJourneyExecutionMetricsCommandOutput
  | GetJourneyRunExecutionActivityMetricsCommandOutput
  | GetJourneyRunExecutionMetricsCommandOutput
  | GetJourneyRunsCommandOutput
  | GetPushTemplateCommandOutput
  | GetRecommenderConfigurationCommandOutput
  | GetRecommenderConfigurationsCommandOutput
  | GetSegmentCommandOutput
  | GetSegmentExportJobsCommandOutput
  | GetSegmentImportJobsCommandOutput
  | GetSegmentVersionCommandOutput
  | GetSegmentVersionsCommandOutput
  | GetSegmentsCommandOutput
  | GetSmsChannelCommandOutput
  | GetSmsTemplateCommandOutput
  | GetUserEndpointsCommandOutput
  | GetVoiceChannelCommandOutput
  | GetVoiceTemplateCommandOutput
  | ListJourneysCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateVersionsCommandOutput
  | ListTemplatesCommandOutput
  | PhoneNumberValidateCommandOutput
  | PutEventStreamCommandOutput
  | PutEventsCommandOutput
  | RemoveAttributesCommandOutput
  | SendMessagesCommandOutput
  | SendOTPMessageCommandOutput
  | SendUsersMessagesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAdmChannelCommandOutput
  | UpdateApnsChannelCommandOutput
  | UpdateApnsSandboxChannelCommandOutput
  | UpdateApnsVoipChannelCommandOutput
  | UpdateApnsVoipSandboxChannelCommandOutput
  | UpdateApplicationSettingsCommandOutput
  | UpdateBaiduChannelCommandOutput
  | UpdateCampaignCommandOutput
  | UpdateEmailChannelCommandOutput
  | UpdateEmailTemplateCommandOutput
  | UpdateEndpointCommandOutput
  | UpdateEndpointsBatchCommandOutput
  | UpdateGcmChannelCommandOutput
  | UpdateInAppTemplateCommandOutput
  | UpdateJourneyCommandOutput
  | UpdateJourneyStateCommandOutput
  | UpdatePushTemplateCommandOutput
  | UpdateRecommenderConfigurationCommandOutput
  | UpdateSegmentCommandOutput
  | UpdateSmsChannelCommandOutput
  | UpdateSmsTemplateCommandOutput
  | UpdateTemplateActiveVersionCommandOutput
  | UpdateVoiceChannelCommandOutput
  | UpdateVoiceTemplateCommandOutput
  | VerifyOTPMessageCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type PinpointClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of PinpointClient class constructor that set the region, credentials and other options.
 */
export interface PinpointClientConfig extends PinpointClientConfigType {}

/**
 * @public
 */
export type PinpointClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of PinpointClient class. This is resolved and normalized from the {@link PinpointClientConfig | constructor configuration interface}.
 */
export interface PinpointClientResolvedConfig extends PinpointClientResolvedConfigType {}

/**
 * <p>Doc Engage API - Amazon Pinpoint API</p>
 * @public
 */
export class PinpointClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PinpointClientResolvedConfig
> {
  /**
   * The resolved configuration of PinpointClient class. This is resolved and normalized from the {@link PinpointClientConfig | constructor configuration interface}.
   */
  readonly config: PinpointClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PinpointClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultPinpointHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: PinpointClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
