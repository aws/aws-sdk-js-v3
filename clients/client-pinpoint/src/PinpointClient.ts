// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import {
  CreateEmailTemplateCommandInput,
  CreateEmailTemplateCommandOutput,
} from "./commands/CreateEmailTemplateCommand";
import { CreateExportJobCommandInput, CreateExportJobCommandOutput } from "./commands/CreateExportJobCommand";
import { CreateImportJobCommandInput, CreateImportJobCommandOutput } from "./commands/CreateImportJobCommand";
import {
  CreateInAppTemplateCommandInput,
  CreateInAppTemplateCommandOutput,
} from "./commands/CreateInAppTemplateCommand";
import { CreateJourneyCommandInput, CreateJourneyCommandOutput } from "./commands/CreateJourneyCommand";
import { CreatePushTemplateCommandInput, CreatePushTemplateCommandOutput } from "./commands/CreatePushTemplateCommand";
import {
  CreateRecommenderConfigurationCommandInput,
  CreateRecommenderConfigurationCommandOutput,
} from "./commands/CreateRecommenderConfigurationCommand";
import { CreateSegmentCommandInput, CreateSegmentCommandOutput } from "./commands/CreateSegmentCommand";
import { CreateSmsTemplateCommandInput, CreateSmsTemplateCommandOutput } from "./commands/CreateSmsTemplateCommand";
import {
  CreateVoiceTemplateCommandInput,
  CreateVoiceTemplateCommandOutput,
} from "./commands/CreateVoiceTemplateCommand";
import { DeleteAdmChannelCommandInput, DeleteAdmChannelCommandOutput } from "./commands/DeleteAdmChannelCommand";
import { DeleteApnsChannelCommandInput, DeleteApnsChannelCommandOutput } from "./commands/DeleteApnsChannelCommand";
import {
  DeleteApnsSandboxChannelCommandInput,
  DeleteApnsSandboxChannelCommandOutput,
} from "./commands/DeleteApnsSandboxChannelCommand";
import {
  DeleteApnsVoipChannelCommandInput,
  DeleteApnsVoipChannelCommandOutput,
} from "./commands/DeleteApnsVoipChannelCommand";
import {
  DeleteApnsVoipSandboxChannelCommandInput,
  DeleteApnsVoipSandboxChannelCommandOutput,
} from "./commands/DeleteApnsVoipSandboxChannelCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteBaiduChannelCommandInput, DeleteBaiduChannelCommandOutput } from "./commands/DeleteBaiduChannelCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import { DeleteEmailChannelCommandInput, DeleteEmailChannelCommandOutput } from "./commands/DeleteEmailChannelCommand";
import {
  DeleteEmailTemplateCommandInput,
  DeleteEmailTemplateCommandOutput,
} from "./commands/DeleteEmailTemplateCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "./commands/DeleteEventStreamCommand";
import { DeleteGcmChannelCommandInput, DeleteGcmChannelCommandOutput } from "./commands/DeleteGcmChannelCommand";
import {
  DeleteInAppTemplateCommandInput,
  DeleteInAppTemplateCommandOutput,
} from "./commands/DeleteInAppTemplateCommand";
import { DeleteJourneyCommandInput, DeleteJourneyCommandOutput } from "./commands/DeleteJourneyCommand";
import { DeletePushTemplateCommandInput, DeletePushTemplateCommandOutput } from "./commands/DeletePushTemplateCommand";
import {
  DeleteRecommenderConfigurationCommandInput,
  DeleteRecommenderConfigurationCommandOutput,
} from "./commands/DeleteRecommenderConfigurationCommand";
import { DeleteSegmentCommandInput, DeleteSegmentCommandOutput } from "./commands/DeleteSegmentCommand";
import { DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput } from "./commands/DeleteSmsChannelCommand";
import { DeleteSmsTemplateCommandInput, DeleteSmsTemplateCommandOutput } from "./commands/DeleteSmsTemplateCommand";
import {
  DeleteUserEndpointsCommandInput,
  DeleteUserEndpointsCommandOutput,
} from "./commands/DeleteUserEndpointsCommand";
import { DeleteVoiceChannelCommandInput, DeleteVoiceChannelCommandOutput } from "./commands/DeleteVoiceChannelCommand";
import {
  DeleteVoiceTemplateCommandInput,
  DeleteVoiceTemplateCommandOutput,
} from "./commands/DeleteVoiceTemplateCommand";
import { GetAdmChannelCommandInput, GetAdmChannelCommandOutput } from "./commands/GetAdmChannelCommand";
import { GetApnsChannelCommandInput, GetApnsChannelCommandOutput } from "./commands/GetApnsChannelCommand";
import {
  GetApnsSandboxChannelCommandInput,
  GetApnsSandboxChannelCommandOutput,
} from "./commands/GetApnsSandboxChannelCommand";
import { GetApnsVoipChannelCommandInput, GetApnsVoipChannelCommandOutput } from "./commands/GetApnsVoipChannelCommand";
import {
  GetApnsVoipSandboxChannelCommandInput,
  GetApnsVoipSandboxChannelCommandOutput,
} from "./commands/GetApnsVoipSandboxChannelCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetApplicationDateRangeKpiCommandInput,
  GetApplicationDateRangeKpiCommandOutput,
} from "./commands/GetApplicationDateRangeKpiCommand";
import {
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
} from "./commands/GetApplicationSettingsCommand";
import { GetAppsCommandInput, GetAppsCommandOutput } from "./commands/GetAppsCommand";
import { GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput } from "./commands/GetBaiduChannelCommand";
import {
  GetCampaignActivitiesCommandInput,
  GetCampaignActivitiesCommandOutput,
} from "./commands/GetCampaignActivitiesCommand";
import { GetCampaignCommandInput, GetCampaignCommandOutput } from "./commands/GetCampaignCommand";
import {
  GetCampaignDateRangeKpiCommandInput,
  GetCampaignDateRangeKpiCommandOutput,
} from "./commands/GetCampaignDateRangeKpiCommand";
import { GetCampaignsCommandInput, GetCampaignsCommandOutput } from "./commands/GetCampaignsCommand";
import { GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput } from "./commands/GetCampaignVersionCommand";
import {
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
} from "./commands/GetCampaignVersionsCommand";
import { GetChannelsCommandInput, GetChannelsCommandOutput } from "./commands/GetChannelsCommand";
import { GetEmailChannelCommandInput, GetEmailChannelCommandOutput } from "./commands/GetEmailChannelCommand";
import { GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput } from "./commands/GetEmailTemplateCommand";
import { GetEndpointCommandInput, GetEndpointCommandOutput } from "./commands/GetEndpointCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "./commands/GetEventStreamCommand";
import { GetExportJobCommandInput, GetExportJobCommandOutput } from "./commands/GetExportJobCommand";
import { GetExportJobsCommandInput, GetExportJobsCommandOutput } from "./commands/GetExportJobsCommand";
import { GetGcmChannelCommandInput, GetGcmChannelCommandOutput } from "./commands/GetGcmChannelCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "./commands/GetImportJobCommand";
import { GetImportJobsCommandInput, GetImportJobsCommandOutput } from "./commands/GetImportJobsCommand";
import { GetInAppMessagesCommandInput, GetInAppMessagesCommandOutput } from "./commands/GetInAppMessagesCommand";
import { GetInAppTemplateCommandInput, GetInAppTemplateCommandOutput } from "./commands/GetInAppTemplateCommand";
import { GetJourneyCommandInput, GetJourneyCommandOutput } from "./commands/GetJourneyCommand";
import {
  GetJourneyDateRangeKpiCommandInput,
  GetJourneyDateRangeKpiCommandOutput,
} from "./commands/GetJourneyDateRangeKpiCommand";
import {
  GetJourneyExecutionActivityMetricsCommandInput,
  GetJourneyExecutionActivityMetricsCommandOutput,
} from "./commands/GetJourneyExecutionActivityMetricsCommand";
import {
  GetJourneyExecutionMetricsCommandInput,
  GetJourneyExecutionMetricsCommandOutput,
} from "./commands/GetJourneyExecutionMetricsCommand";
import { GetPushTemplateCommandInput, GetPushTemplateCommandOutput } from "./commands/GetPushTemplateCommand";
import {
  GetRecommenderConfigurationCommandInput,
  GetRecommenderConfigurationCommandOutput,
} from "./commands/GetRecommenderConfigurationCommand";
import {
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
} from "./commands/GetRecommenderConfigurationsCommand";
import { GetSegmentCommandInput, GetSegmentCommandOutput } from "./commands/GetSegmentCommand";
import {
  GetSegmentExportJobsCommandInput,
  GetSegmentExportJobsCommandOutput,
} from "./commands/GetSegmentExportJobsCommand";
import {
  GetSegmentImportJobsCommandInput,
  GetSegmentImportJobsCommandOutput,
} from "./commands/GetSegmentImportJobsCommand";
import { GetSegmentsCommandInput, GetSegmentsCommandOutput } from "./commands/GetSegmentsCommand";
import { GetSegmentVersionCommandInput, GetSegmentVersionCommandOutput } from "./commands/GetSegmentVersionCommand";
import { GetSegmentVersionsCommandInput, GetSegmentVersionsCommandOutput } from "./commands/GetSegmentVersionsCommand";
import { GetSmsChannelCommandInput, GetSmsChannelCommandOutput } from "./commands/GetSmsChannelCommand";
import { GetSmsTemplateCommandInput, GetSmsTemplateCommandOutput } from "./commands/GetSmsTemplateCommand";
import { GetUserEndpointsCommandInput, GetUserEndpointsCommandOutput } from "./commands/GetUserEndpointsCommand";
import { GetVoiceChannelCommandInput, GetVoiceChannelCommandOutput } from "./commands/GetVoiceChannelCommand";
import { GetVoiceTemplateCommandInput, GetVoiceTemplateCommandOutput } from "./commands/GetVoiceTemplateCommand";
import { ListJourneysCommandInput, ListJourneysCommandOutput } from "./commands/ListJourneysCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import {
  ListTemplateVersionsCommandInput,
  ListTemplateVersionsCommandOutput,
} from "./commands/ListTemplateVersionsCommand";
import {
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
} from "./commands/PhoneNumberValidateCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "./commands/PutEventsCommand";
import { PutEventStreamCommandInput, PutEventStreamCommandOutput } from "./commands/PutEventStreamCommand";
import { RemoveAttributesCommandInput, RemoveAttributesCommandOutput } from "./commands/RemoveAttributesCommand";
import { SendMessagesCommandInput, SendMessagesCommandOutput } from "./commands/SendMessagesCommand";
import { SendOTPMessageCommandInput, SendOTPMessageCommandOutput } from "./commands/SendOTPMessageCommand";
import { SendUsersMessagesCommandInput, SendUsersMessagesCommandOutput } from "./commands/SendUsersMessagesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAdmChannelCommandInput, UpdateAdmChannelCommandOutput } from "./commands/UpdateAdmChannelCommand";
import { UpdateApnsChannelCommandInput, UpdateApnsChannelCommandOutput } from "./commands/UpdateApnsChannelCommand";
import {
  UpdateApnsSandboxChannelCommandInput,
  UpdateApnsSandboxChannelCommandOutput,
} from "./commands/UpdateApnsSandboxChannelCommand";
import {
  UpdateApnsVoipChannelCommandInput,
  UpdateApnsVoipChannelCommandOutput,
} from "./commands/UpdateApnsVoipChannelCommand";
import {
  UpdateApnsVoipSandboxChannelCommandInput,
  UpdateApnsVoipSandboxChannelCommandOutput,
} from "./commands/UpdateApnsVoipSandboxChannelCommand";
import {
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
} from "./commands/UpdateApplicationSettingsCommand";
import { UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput } from "./commands/UpdateBaiduChannelCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import { UpdateEmailChannelCommandInput, UpdateEmailChannelCommandOutput } from "./commands/UpdateEmailChannelCommand";
import {
  UpdateEmailTemplateCommandInput,
  UpdateEmailTemplateCommandOutput,
} from "./commands/UpdateEmailTemplateCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import {
  UpdateEndpointsBatchCommandInput,
  UpdateEndpointsBatchCommandOutput,
} from "./commands/UpdateEndpointsBatchCommand";
import { UpdateGcmChannelCommandInput, UpdateGcmChannelCommandOutput } from "./commands/UpdateGcmChannelCommand";
import {
  UpdateInAppTemplateCommandInput,
  UpdateInAppTemplateCommandOutput,
} from "./commands/UpdateInAppTemplateCommand";
import { UpdateJourneyCommandInput, UpdateJourneyCommandOutput } from "./commands/UpdateJourneyCommand";
import { UpdateJourneyStateCommandInput, UpdateJourneyStateCommandOutput } from "./commands/UpdateJourneyStateCommand";
import { UpdatePushTemplateCommandInput, UpdatePushTemplateCommandOutput } from "./commands/UpdatePushTemplateCommand";
import {
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
} from "./commands/UpdateRecommenderConfigurationCommand";
import { UpdateSegmentCommandInput, UpdateSegmentCommandOutput } from "./commands/UpdateSegmentCommand";
import { UpdateSmsChannelCommandInput, UpdateSmsChannelCommandOutput } from "./commands/UpdateSmsChannelCommand";
import { UpdateSmsTemplateCommandInput, UpdateSmsTemplateCommandOutput } from "./commands/UpdateSmsTemplateCommand";
import {
  UpdateTemplateActiveVersionCommandInput,
  UpdateTemplateActiveVersionCommandOutput,
} from "./commands/UpdateTemplateActiveVersionCommand";
import { UpdateVoiceChannelCommandInput, UpdateVoiceChannelCommandOutput } from "./commands/UpdateVoiceChannelCommand";
import {
  UpdateVoiceTemplateCommandInput,
  UpdateVoiceTemplateCommandOutput,
} from "./commands/UpdateVoiceTemplateCommand";
import { VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput } from "./commands/VerifyOTPMessageCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

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

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type PinpointClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of PinpointClient class constructor that set the region, credentials and other options.
 */
export interface PinpointClientConfig extends PinpointClientConfigType {}

type PinpointClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of PinpointClient class. This is resolved and normalized from the {@link PinpointClientConfig | constructor configuration interface}.
 */
export interface PinpointClientResolvedConfig extends PinpointClientResolvedConfigType {}

/**
 * <p>Doc Engage API - Amazon Pinpoint API</p>
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

  constructor(configuration: PinpointClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
