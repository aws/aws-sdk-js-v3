import {
  CreateAppRequest,
  CreateAppResponse,
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateEmailTemplateRequest,
  CreateEmailTemplateResponse,
  CreateExportJobRequest,
  CreateExportJobResponse,
  CreateImportJobRequest,
  CreateImportJobResponse,
  CreateJourneyRequest,
  CreateJourneyResponse,
  CreatePushTemplateRequest,
  CreatePushTemplateResponse,
  CreateSegmentRequest,
  CreateSegmentResponse,
  CreateSmsTemplateRequest,
  CreateSmsTemplateResponse,
  CreateVoiceTemplateRequest,
  CreateVoiceTemplateResponse,
  DeleteAdmChannelRequest,
  DeleteAdmChannelResponse,
  DeleteApnsChannelRequest,
  DeleteApnsChannelResponse,
  DeleteApnsSandboxChannelRequest,
  DeleteApnsSandboxChannelResponse,
  DeleteApnsVoipChannelRequest,
  DeleteApnsVoipChannelResponse,
  DeleteApnsVoipSandboxChannelRequest,
  DeleteApnsVoipSandboxChannelResponse,
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteBaiduChannelRequest,
  DeleteBaiduChannelResponse,
  DeleteCampaignRequest,
  DeleteCampaignResponse,
  DeleteEmailChannelRequest,
  DeleteEmailChannelResponse,
  DeleteEmailTemplateRequest,
  DeleteEmailTemplateResponse,
  DeleteEndpointRequest,
  DeleteEndpointResponse,
  DeleteEventStreamRequest,
  DeleteEventStreamResponse,
  DeleteGcmChannelRequest,
  DeleteGcmChannelResponse,
  DeleteJourneyRequest,
  DeleteJourneyResponse,
  DeletePushTemplateRequest,
  DeletePushTemplateResponse,
  DeleteSegmentRequest,
  DeleteSegmentResponse,
  DeleteSmsChannelRequest,
  DeleteSmsChannelResponse,
  DeleteSmsTemplateRequest,
  DeleteSmsTemplateResponse,
  DeleteUserEndpointsRequest,
  DeleteUserEndpointsResponse,
  DeleteVoiceChannelRequest,
  DeleteVoiceChannelResponse,
  DeleteVoiceTemplateRequest,
  DeleteVoiceTemplateResponse,
  GetAdmChannelRequest,
  GetAdmChannelResponse,
  GetApnsChannelRequest,
  GetApnsChannelResponse,
  GetApnsSandboxChannelRequest,
  GetApnsSandboxChannelResponse,
  GetApnsVoipChannelRequest,
  GetApnsVoipChannelResponse,
  GetApnsVoipSandboxChannelRequest,
  GetApnsVoipSandboxChannelResponse,
  GetAppRequest,
  GetAppResponse,
  GetApplicationDateRangeKpiRequest,
  GetApplicationDateRangeKpiResponse,
  GetApplicationSettingsRequest,
  GetApplicationSettingsResponse,
  GetAppsRequest,
  GetAppsResponse,
  GetBaiduChannelRequest,
  GetBaiduChannelResponse,
  GetCampaignActivitiesRequest,
  GetCampaignActivitiesResponse,
  GetCampaignDateRangeKpiRequest,
  GetCampaignDateRangeKpiResponse,
  GetCampaignRequest,
  GetCampaignResponse,
  GetCampaignVersionRequest,
  GetCampaignVersionResponse,
  GetCampaignVersionsRequest,
  GetCampaignVersionsResponse,
  GetCampaignsRequest,
  GetCampaignsResponse,
  GetChannelsRequest,
  GetChannelsResponse,
  GetEmailChannelRequest,
  GetEmailChannelResponse,
  GetEmailTemplateRequest,
  GetEmailTemplateResponse,
  GetEndpointRequest,
  GetEndpointResponse,
  GetEventStreamRequest,
  GetEventStreamResponse,
  GetExportJobRequest,
  GetExportJobResponse,
  GetExportJobsRequest,
  GetExportJobsResponse,
  GetGcmChannelRequest,
  GetGcmChannelResponse,
  GetImportJobRequest,
  GetImportJobResponse,
  GetImportJobsRequest,
  GetImportJobsResponse,
  GetJourneyDateRangeKpiRequest,
  GetJourneyDateRangeKpiResponse,
  GetJourneyExecutionActivityMetricsRequest,
  GetJourneyExecutionActivityMetricsResponse,
  GetJourneyExecutionMetricsRequest,
  GetJourneyExecutionMetricsResponse,
  GetJourneyRequest,
  GetJourneyResponse,
  GetPushTemplateRequest,
  GetPushTemplateResponse,
  GetSegmentExportJobsRequest,
  GetSegmentExportJobsResponse,
  GetSegmentImportJobsRequest,
  GetSegmentImportJobsResponse,
  GetSegmentRequest,
  GetSegmentResponse,
  GetSegmentVersionRequest,
  GetSegmentVersionResponse,
  GetSegmentVersionsRequest,
  GetSegmentVersionsResponse,
  GetSegmentsRequest,
  GetSegmentsResponse,
  GetSmsChannelRequest,
  GetSmsChannelResponse,
  GetSmsTemplateRequest,
  GetSmsTemplateResponse,
  GetUserEndpointsRequest,
  GetUserEndpointsResponse,
  GetVoiceChannelRequest,
  GetVoiceChannelResponse,
  GetVoiceTemplateRequest,
  GetVoiceTemplateResponse,
  ListJourneysRequest,
  ListJourneysResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTemplateVersionsRequest,
  ListTemplateVersionsResponse,
  ListTemplatesRequest,
  ListTemplatesResponse,
  PhoneNumberValidateRequest,
  PhoneNumberValidateResponse,
  PutEventStreamRequest,
  PutEventStreamResponse,
  PutEventsRequest,
  PutEventsResponse,
  RemoveAttributesRequest,
  RemoveAttributesResponse,
  SendMessagesRequest,
  SendMessagesResponse,
  SendUsersMessagesRequest,
  SendUsersMessagesResponse,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateAdmChannelRequest,
  UpdateAdmChannelResponse,
  UpdateApnsChannelRequest,
  UpdateApnsChannelResponse,
  UpdateApnsSandboxChannelRequest,
  UpdateApnsSandboxChannelResponse,
  UpdateApnsVoipChannelRequest,
  UpdateApnsVoipChannelResponse,
  UpdateApnsVoipSandboxChannelRequest,
  UpdateApnsVoipSandboxChannelResponse,
  UpdateApplicationSettingsRequest,
  UpdateApplicationSettingsResponse,
  UpdateBaiduChannelRequest,
  UpdateBaiduChannelResponse,
  UpdateCampaignRequest,
  UpdateCampaignResponse,
  UpdateEmailChannelRequest,
  UpdateEmailChannelResponse,
  UpdateEmailTemplateRequest,
  UpdateEmailTemplateResponse,
  UpdateEndpointRequest,
  UpdateEndpointResponse,
  UpdateEndpointsBatchRequest,
  UpdateEndpointsBatchResponse,
  UpdateGcmChannelRequest,
  UpdateGcmChannelResponse,
  UpdateJourneyRequest,
  UpdateJourneyResponse,
  UpdateJourneyStateRequest,
  UpdateJourneyStateResponse,
  UpdatePushTemplateRequest,
  UpdatePushTemplateResponse,
  UpdateSegmentRequest,
  UpdateSegmentResponse,
  UpdateSmsChannelRequest,
  UpdateSmsChannelResponse,
  UpdateSmsTemplateRequest,
  UpdateSmsTemplateResponse,
  UpdateTemplateActiveVersionRequest,
  UpdateTemplateActiveVersionResponse,
  UpdateVoiceChannelRequest,
  UpdateVoiceChannelResponse,
  UpdateVoiceTemplateRequest,
  UpdateVoiceTemplateResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateAppRequest
  | CreateCampaignRequest
  | CreateEmailTemplateRequest
  | CreateExportJobRequest
  | CreateImportJobRequest
  | CreateJourneyRequest
  | CreatePushTemplateRequest
  | CreateSegmentRequest
  | CreateSmsTemplateRequest
  | CreateVoiceTemplateRequest
  | DeleteAdmChannelRequest
  | DeleteApnsChannelRequest
  | DeleteApnsSandboxChannelRequest
  | DeleteApnsVoipChannelRequest
  | DeleteApnsVoipSandboxChannelRequest
  | DeleteAppRequest
  | DeleteBaiduChannelRequest
  | DeleteCampaignRequest
  | DeleteEmailChannelRequest
  | DeleteEmailTemplateRequest
  | DeleteEndpointRequest
  | DeleteEventStreamRequest
  | DeleteGcmChannelRequest
  | DeleteJourneyRequest
  | DeletePushTemplateRequest
  | DeleteSegmentRequest
  | DeleteSmsChannelRequest
  | DeleteSmsTemplateRequest
  | DeleteUserEndpointsRequest
  | DeleteVoiceChannelRequest
  | DeleteVoiceTemplateRequest
  | GetAdmChannelRequest
  | GetApnsChannelRequest
  | GetApnsSandboxChannelRequest
  | GetApnsVoipChannelRequest
  | GetApnsVoipSandboxChannelRequest
  | GetAppRequest
  | GetApplicationDateRangeKpiRequest
  | GetApplicationSettingsRequest
  | GetAppsRequest
  | GetBaiduChannelRequest
  | GetCampaignActivitiesRequest
  | GetCampaignDateRangeKpiRequest
  | GetCampaignRequest
  | GetCampaignVersionRequest
  | GetCampaignVersionsRequest
  | GetCampaignsRequest
  | GetChannelsRequest
  | GetEmailChannelRequest
  | GetEmailTemplateRequest
  | GetEndpointRequest
  | GetEventStreamRequest
  | GetExportJobRequest
  | GetExportJobsRequest
  | GetGcmChannelRequest
  | GetImportJobRequest
  | GetImportJobsRequest
  | GetJourneyDateRangeKpiRequest
  | GetJourneyExecutionActivityMetricsRequest
  | GetJourneyExecutionMetricsRequest
  | GetJourneyRequest
  | GetPushTemplateRequest
  | GetSegmentExportJobsRequest
  | GetSegmentImportJobsRequest
  | GetSegmentRequest
  | GetSegmentVersionRequest
  | GetSegmentVersionsRequest
  | GetSegmentsRequest
  | GetSmsChannelRequest
  | GetSmsTemplateRequest
  | GetUserEndpointsRequest
  | GetVoiceChannelRequest
  | GetVoiceTemplateRequest
  | ListJourneysRequest
  | ListTagsForResourceRequest
  | ListTemplateVersionsRequest
  | ListTemplatesRequest
  | PhoneNumberValidateRequest
  | PutEventStreamRequest
  | PutEventsRequest
  | RemoveAttributesRequest
  | SendMessagesRequest
  | SendUsersMessagesRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateAdmChannelRequest
  | UpdateApnsChannelRequest
  | UpdateApnsSandboxChannelRequest
  | UpdateApnsVoipChannelRequest
  | UpdateApnsVoipSandboxChannelRequest
  | UpdateApplicationSettingsRequest
  | UpdateBaiduChannelRequest
  | UpdateCampaignRequest
  | UpdateEmailChannelRequest
  | UpdateEmailTemplateRequest
  | UpdateEndpointRequest
  | UpdateEndpointsBatchRequest
  | UpdateGcmChannelRequest
  | UpdateJourneyRequest
  | UpdateJourneyStateRequest
  | UpdatePushTemplateRequest
  | UpdateSegmentRequest
  | UpdateSmsChannelRequest
  | UpdateSmsTemplateRequest
  | UpdateTemplateActiveVersionRequest
  | UpdateVoiceChannelRequest
  | UpdateVoiceTemplateRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateAppResponse
  | CreateCampaignResponse
  | CreateEmailTemplateResponse
  | CreateExportJobResponse
  | CreateImportJobResponse
  | CreateJourneyResponse
  | CreatePushTemplateResponse
  | CreateSegmentResponse
  | CreateSmsTemplateResponse
  | CreateVoiceTemplateResponse
  | DeleteAdmChannelResponse
  | DeleteApnsChannelResponse
  | DeleteApnsSandboxChannelResponse
  | DeleteApnsVoipChannelResponse
  | DeleteApnsVoipSandboxChannelResponse
  | DeleteAppResponse
  | DeleteBaiduChannelResponse
  | DeleteCampaignResponse
  | DeleteEmailChannelResponse
  | DeleteEmailTemplateResponse
  | DeleteEndpointResponse
  | DeleteEventStreamResponse
  | DeleteGcmChannelResponse
  | DeleteJourneyResponse
  | DeletePushTemplateResponse
  | DeleteSegmentResponse
  | DeleteSmsChannelResponse
  | DeleteSmsTemplateResponse
  | DeleteUserEndpointsResponse
  | DeleteVoiceChannelResponse
  | DeleteVoiceTemplateResponse
  | GetAdmChannelResponse
  | GetApnsChannelResponse
  | GetApnsSandboxChannelResponse
  | GetApnsVoipChannelResponse
  | GetApnsVoipSandboxChannelResponse
  | GetAppResponse
  | GetApplicationDateRangeKpiResponse
  | GetApplicationSettingsResponse
  | GetAppsResponse
  | GetBaiduChannelResponse
  | GetCampaignActivitiesResponse
  | GetCampaignDateRangeKpiResponse
  | GetCampaignResponse
  | GetCampaignVersionResponse
  | GetCampaignVersionsResponse
  | GetCampaignsResponse
  | GetChannelsResponse
  | GetEmailChannelResponse
  | GetEmailTemplateResponse
  | GetEndpointResponse
  | GetEventStreamResponse
  | GetExportJobResponse
  | GetExportJobsResponse
  | GetGcmChannelResponse
  | GetImportJobResponse
  | GetImportJobsResponse
  | GetJourneyDateRangeKpiResponse
  | GetJourneyExecutionActivityMetricsResponse
  | GetJourneyExecutionMetricsResponse
  | GetJourneyResponse
  | GetPushTemplateResponse
  | GetSegmentExportJobsResponse
  | GetSegmentImportJobsResponse
  | GetSegmentResponse
  | GetSegmentVersionResponse
  | GetSegmentVersionsResponse
  | GetSegmentsResponse
  | GetSmsChannelResponse
  | GetSmsTemplateResponse
  | GetUserEndpointsResponse
  | GetVoiceChannelResponse
  | GetVoiceTemplateResponse
  | ListJourneysResponse
  | ListTagsForResourceResponse
  | ListTemplateVersionsResponse
  | ListTemplatesResponse
  | PhoneNumberValidateResponse
  | PutEventStreamResponse
  | PutEventsResponse
  | RemoveAttributesResponse
  | SendMessagesResponse
  | SendUsersMessagesResponse
  | UpdateAdmChannelResponse
  | UpdateApnsChannelResponse
  | UpdateApnsSandboxChannelResponse
  | UpdateApnsVoipChannelResponse
  | UpdateApnsVoipSandboxChannelResponse
  | UpdateApplicationSettingsResponse
  | UpdateBaiduChannelResponse
  | UpdateCampaignResponse
  | UpdateEmailChannelResponse
  | UpdateEmailTemplateResponse
  | UpdateEndpointResponse
  | UpdateEndpointsBatchResponse
  | UpdateGcmChannelResponse
  | UpdateJourneyResponse
  | UpdateJourneyStateResponse
  | UpdatePushTemplateResponse
  | UpdateSegmentResponse
  | UpdateSmsChannelResponse
  | UpdateSmsTemplateResponse
  | UpdateTemplateActiveVersionResponse
  | UpdateVoiceChannelResponse
  | UpdateVoiceTemplateResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type PinpointClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type PinpointClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Doc Engage API - Amazon Pinpoint API</p>
 */
export class PinpointClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PinpointClientResolvedConfig
> {
  readonly config: PinpointClientResolvedConfig;

  constructor(configuration: PinpointClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
