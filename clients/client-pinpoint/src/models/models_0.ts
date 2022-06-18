// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  ActivitiesResponse,
  Activity,
  AddressConfiguration,
  AndroidPushNotificationTemplate,
  APNSPushNotificationTemplate,
  ApplicationDateRangeKpiResponse,
  ApplicationSettingsResource,
  ApplicationsResponse,
  AttributesResource,
  CampaignDateRangeKpiResponse,
  CampaignHook,
  CampaignLimits,
  CampaignsResponse,
  CampaignState,
  ChannelsResponse,
  ChannelType,
  CustomDeliveryConfiguration,
  DefaultPushNotificationTemplate,
  DirectMessageConfiguration,
  EmailTemplateResponse,
  EndpointBatchItem,
  EndpointDemographic,
  EndpointLocation,
  EndpointSendConfiguration,
  EndpointsResponse,
  EndpointUser,
  EventsBatch,
  EventsResponse,
  ExportJobResource,
  ExportJobsResponse,
  Format,
  ImportJobResource,
  ImportJobsResponse,
  InAppMessageContent,
  InAppMessagesResponse,
  InAppTemplateResponse,
  JobStatus,
  JourneyChannelSettings,
  JourneyDateRangeKpiResponse,
  JourneyExecutionActivityMetricsResponse,
  JourneyExecutionMetricsResponse,
  JourneyLimits,
  JourneySchedule,
  JourneysResponse,
  Layout,
  ListRecommenderConfigurationsResponse,
  MessageConfiguration,
  MessageResponse,
  NumberValidateResponse,
  PushNotificationTemplateResponse,
  QuietTime,
  Schedule,
  SegmentDimensions,
  SegmentGroupList,
  SegmentImportResource,
  SegmentsResponse,
  SegmentType,
  SendUsersMessageResponse,
  SMSChannelResponse,
  SMSTemplateResponse,
  StartCondition,
  State,
  TemplateConfiguration,
  TemplatesResponse,
  TemplateVersionsResponse,
  TreatmentResource,
  VerificationResponse,
  VoiceChannelResponse,
  VoiceTemplateResponse,
  WriteTreatmentResource,
} from "./models_1";
import { PinpointServiceException as __BaseException } from "./PinpointServiceException";

/**
 * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelRequest {
  /**
   * <p>The Client ID that you received from Amazon to send messages by using ADM.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The Client Secret that you received from Amazon to send messages by using ADM.</p>
   */
  ClientSecret: string | undefined;

  /**
   * <p>Specifies whether to enable the ADM channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace ADMChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ADMChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
 */
export interface ADMChannelResponse {
  /**
   * <p>The unique identifier for the application that the ADM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the ADM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the ADM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the ADM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the ADM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the ADM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the ADM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the ADM channel, this value is ADM.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the ADM channel.</p>
   */
  Version?: number;
}

export namespace ADMChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ADMChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether to enable the APNs channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
 */
export interface APNSChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs channel, this value is APNS.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs channel.</p>
   */
  Version?: number;
}

export namespace APNSChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether to enable the APNs sandbox channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSSandboxChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
 */
export interface APNSSandboxChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs sandbox channel, this value is APNS_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs sandbox channel.</p>
   */
  Version?: number;
}

export namespace APNSSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSSandboxChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with APNs by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with APNs, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether to enable the APNs VoIP channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with APNs.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with APNs by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSVoipChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSVoipChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
 */
export interface APNSVoipChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs VoIP channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs VoIP channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with APNs for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs VoIP channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs VoIP channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs VoIP channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs VoIP channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP channel, this value is APNS_VOIP.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP channel.</p>
   */
  Version?: number;
}

export namespace APNSVoipChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSVoipChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelRequest {
  /**
   * <p>The bundle identifier that's assigned to your iOS app. This identifier is used for APNs tokens.</p>
   */
  BundleId?: string;

  /**
   * <p>The APNs client certificate that you received from Apple, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using an APNs certificate.</p>
   */
  Certificate?: string;

  /**
   * <p>The default authentication method that you want Amazon Pinpoint to use when authenticating with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The private key for the APNs client certificate that you want Amazon Pinpoint to use to communicate with the APNs sandbox environment.</p>
   */
  PrivateKey?: string;

  /**
   * <p>The identifier that's assigned to your Apple developer account team. This identifier is used for APNs tokens.</p>
   */
  TeamId?: string;

  /**
   * <p>The authentication key to use for APNs tokens.</p>
   */
  TokenKey?: string;

  /**
   * <p>The key identifier that's assigned to your APNs signing key, if you want Amazon Pinpoint to communicate with the APNs sandbox environment by using APNs tokens.</p>
   */
  TokenKeyId?: string;
}

export namespace APNSVoipSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSVoipSandboxChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
 */
export interface APNSVoipSandboxChannelResponse {
  /**
   * <p>The unique identifier for the application that the APNs VoIP sandbox channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The default authentication method that Amazon Pinpoint uses to authenticate with the APNs sandbox environment for this channel, key or certificate.</p>
   */
  DefaultAuthenticationMethod?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is configured to communicate with APNs by using APNs tokens. To provide an authentication key for APNs tokens, set the TokenKey property of the channel.</p>
   */
  HasTokenKey?: boolean;

  /**
   * <p>(Deprecated) An identifier for the APNs VoIP sandbox channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the APNs VoIP sandbox channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the APNs VoIP sandbox channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the APNs VoIP sandbox channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the APNs VoIP sandbox channel, this value is APNS_VOIP_SANDBOX.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the APNs VoIP sandbox channel.</p>
   */
  Version?: number;
}

export namespace APNSVoipSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: APNSVoipSandboxChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an application.</p>
 */
export interface ApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  Id: string | undefined;

  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The date and time when the Application was created.</p>
   */
  CreationDate?: string;
}

export namespace ApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelRequest {
  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  ApiKey: string | undefined;

  /**
   * <p>Specifies whether to enable the Baidu channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The secret key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  SecretKey: string | undefined;
}

export namespace BaiduChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaiduChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
 */
export interface BaiduChannelResponse {
  /**
   * <p>The unique identifier for the application that the Baidu channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the Baidu channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The API key that you received from the Baidu Cloud Push service to communicate with the service.</p>
   */
  Credential: string | undefined;

  /**
   * <p>Specifies whether the Baidu channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the Baidu channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the Baidu channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the Baidu channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the Baidu channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the Baidu channel, this value is BAIDU.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the Baidu channel.</p>
   */
  Version?: number;
}

export namespace BaiduChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BaiduChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
 */
export interface CampaignResponse {
  /**
   * <p>An array of responses, one for each treatment that you defined for the campaign, in addition to the default treatment.</p>
   */
  AdditionalTreatments?: TreatmentResource[];

  /**
   * <p>The unique identifier for the application that the campaign applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The delivery configuration settings for sending the campaign through a custom channel.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * <p>The current status of the campaign's default treatment. This value exists only for campaigns that have more than one treatment.</p>
   */
  DefaultState?: CampaignState;

  /**
   * <p>The custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * <p>The settings for the AWS Lambda function to use as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies whether the campaign is paused. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The date, in ISO 8601 format, when the campaign was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>The name of the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The unique identifier for the segment that's associated with the campaign.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The version number of the segment that's associated with the campaign.</p>
   */
  SegmentVersion: number | undefined;

  /**
   * <p>The current status of the campaign.</p>
   */
  State?: CampaignState;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The message template that’s used for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The custom description of the default treatment for the campaign.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>The custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * <p>The version number of the campaign.</p>
   */
  Version?: number;

  /**
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   */
  Priority?: number;
}

export namespace CampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CampaignResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the display name of an application and the tags to associate with the application.</p>
 */
export interface CreateApplicationRequest {
  /**
   * <p>The display name of the application. This name is displayed as the <b>Project name</b> on the Amazon Pinpoint console.</p>
   */
  Name: string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the application. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
}

export interface CreateAppRequest {
  /**
   * <p>Specifies the display name of an application and the tags to associate with the application.</p>
   */
  CreateApplicationRequest: CreateApplicationRequest | undefined;
}

export namespace CreateAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppRequest): any => ({
    ...obj,
  });
}

export interface CreateAppResponse {
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace CreateAppResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class PayloadTooLargeException extends __BaseException {
  readonly name: "PayloadTooLargeException" = "PayloadTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PayloadTooLargeException, __BaseException>) {
    super({
      name: "PayloadTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PayloadTooLargeException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
    this.RequestID = opts.RequestID;
  }
}

/**
 * <p>Specifies the configuration and other settings for a campaign.</p>
 */
export interface WriteCampaignRequest {
  /**
   * <p>An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign.</p>
   */
  AdditionalTreatments?: WriteTreatmentResource[];

  /**
   * <p>The delivery configuration settings for sending the campaign through a custom channel. This object is required if the MessageConfiguration object for the campaign specifies a CustomMessage object.</p>
   */
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

  /**
   * <p>A custom description of the campaign.</p>
   */
  Description?: string;

  /**
   * <p>The allocated percentage of users (segment members) who shouldn't receive messages from the campaign.</p>
   */
  HoldoutPercent?: number;

  /**
   * <p>The settings for the AWS Lambda function to invoke as a code hook for the campaign. You can use this hook to customize the segment that's used by the campaign.</p>
   */
  Hook?: CampaignHook;

  /**
   * <p>Specifies whether to pause the campaign. A paused campaign doesn't run unless you resume it by changing this value to false.</p>
   */
  IsPaused?: boolean;

  /**
   * <p>The messaging limits for the campaign.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The message configuration settings for the campaign.</p>
   */
  MessageConfiguration?: MessageConfiguration;

  /**
   * <p>A custom name for the campaign.</p>
   */
  Name?: string;

  /**
   * <p>The schedule settings for the campaign.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The unique identifier for the segment to associate with the campaign.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to associate with the campaign.</p>
   */
  SegmentVersion?: number;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the campaign. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The message template to use for the campaign.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>A custom description of the default treatment for the campaign.</p>
   */
  TreatmentDescription?: string;

  /**
   * <p>A custom name of the default treatment for the campaign, if the campaign has multiple treatments. A <i>treatment</i> is a variation of a campaign that's used for A/B testing.</p>
   */
  TreatmentName?: string;

  /**
   * <p>Defines the priority of the campaign, used to decide the order of messages displayed to user if there are multiple messages scheduled to be displayed at the same moment.</p>
   */
  Priority?: number;
}

export namespace WriteCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteCampaignRequest): any => ({
    ...obj,
  });
}

export interface CreateCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

export namespace CreateCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCampaignRequest): any => ({
    ...obj,
  });
}

export interface CreateCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace CreateCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateCampaignResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
 */
export interface EmailTemplateRequest {
  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: string;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * <p>The subject line, or title, to use in email messages that are based on the message template.</p>
   */
  Subject?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: string;
}

export namespace EmailTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateEmailTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateEmailTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEmailTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a request to create a message template.</p>
 */
export interface CreateTemplateMessageBody {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   */
  Arn?: string;

  /**
   * <p>The message that's returned from the API for the request to create the message template.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request to create the message template.</p>
   */
  RequestID?: string;
}

export namespace CreateTemplateMessageBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTemplateMessageBody): any => ({
    ...obj,
  });
}

export interface CreateEmailTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateEmailTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEmailTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location where you want to export endpoint definitions to.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the location in an Amazon Simple Storage Service (Amazon S3) bucket where you want to export endpoint definitions to. This location is typically a folder that contains multiple files. The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/.</p>
   */
  S3UrlPrefix: string | undefined;

  /**
   * <p>The identifier for the segment to export endpoint definitions from. If you don't specify this value, Amazon Pinpoint exports definitions for all the endpoints that are associated with the application.</p>
   */
  SegmentId?: string;

  /**
   * <p>The version of the segment to export endpoint definitions from, if specified.</p>
   */
  SegmentVersion?: number;
}

export namespace ExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportJobRequest): any => ({
    ...obj,
  });
}

export interface CreateExportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ExportJobRequest: ExportJobRequest | undefined;
}

export namespace CreateExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface ExportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the export job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the export job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the export job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the export job.</p>
   */
  Definition: ExportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   */
  Failures?: string[];

  /**
   * <p>The unique identifier for the export job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the export job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is EXPORT for export jobs.</p>
   */
  Type: string | undefined;
}

export namespace ExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportJobResponse): any => ({
    ...obj,
  });
}

export interface CreateExportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

export namespace CreateExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExportJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
 */
export interface ImportJobRequest {
  /**
   * <p>Specifies whether to create a segment that contains the endpoints, when the endpoint definitions are imported.</p>
   */
  DefineSegment?: boolean;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when importing endpoint definitions, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The format of the files that contain the endpoint definitions to import. Valid values are: CSV, for comma-separated values format; and, JSON, for newline-delimited JSON format. If the Amazon S3 location stores multiple files that use different formats, Amazon Pinpoint imports data only from the files that use the specified format.</p>
   */
  Format: Format | string | undefined;

  /**
   * <p>Specifies whether to register the endpoints with Amazon Pinpoint, when the endpoint definitions are imported.</p>
   */
  RegisterEndpoints?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to access the Amazon S3 location to import endpoint definitions from.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the Amazon Simple Storage Service (Amazon S3) bucket that contains the endpoint definitions to import. This location can be a folder or a single file. If the location is a folder, Amazon Pinpoint imports endpoint definitions from the files in this location, including any subfolders that the folder contains.</p> <p>The URL should be in the following format: s3://<replaceable>bucket-name</replaceable>/<replaceable>folder-name</replaceable>/<replaceable>file-name</replaceable>. The location can end with the key for an individual object or a prefix that qualifies multiple objects.</p>
   */
  S3Url: string | undefined;

  /**
   * <p>The identifier for the segment to update or add the imported endpoint definitions to, if the import job is meant to update an existing segment.</p>
   */
  SegmentId?: string;

  /**
   * <p>A custom name for the segment that's created by the import job, if the value of the DefineSegment property is true.</p>
   */
  SegmentName?: string;
}

export namespace ImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportJobRequest): any => ({
    ...obj,
  });
}

export interface CreateImportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.</p>
   */
  ImportJobRequest: ImportJobRequest | undefined;
}

export namespace CreateImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface ImportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the import job.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the import job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the import job was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The resource settings that apply to the import job.</p>
   */
  Definition: ImportJobResource | undefined;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   */
  Failures?: string[];

  /**
   * <p>The unique identifier for the import job.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus: JobStatus | string | undefined;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the import job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is IMPORT for import jobs.</p>
   */
  Type: string | undefined;
}

export namespace ImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportJobResponse): any => ({
    ...obj,
  });
}

export interface CreateImportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

export namespace CreateImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateImportJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>InApp Template Request.</p>
 */
export interface InAppTemplateRequest {
  /**
   * <p>The content of the message, can include up to 5 modals. Each modal must contain a message, a header, and background color. ImageUrl and buttons are optional.</p>
   */
  Content?: InAppMessageContent[];

  /**
   * <p>Custom config to be sent to client.</p>
   */
  CustomConfig?: Record<string, string>;

  /**
   * <p>The layout of the message.</p>
   */
  Layout?: Layout | string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The description of the template.</p>
   */
  TemplateDescription?: string;
}

export namespace InAppTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InAppTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateInAppTemplateRequest {
  /**
   * <p>InApp Template Request.</p>
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateInAppTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInAppTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a request to create a message template.</p>
 */
export interface TemplateCreateMessageBody {
  /**
   * <p>The Amazon Resource Name (ARN) of the message template that was created.</p>
   */
  Arn?: string;

  /**
   * <p>The message that's returned from the API for the request to create the message template.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request to create the message template.</p>
   */
  RequestID?: string;
}

export namespace TemplateCreateMessageBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateCreateMessageBody): any => ({
    ...obj,
  });
}

export interface CreateInAppTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  TemplateCreateMessageBody: TemplateCreateMessageBody | undefined;
}

export namespace CreateInAppTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInAppTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration and other settings for a journey.</p>
 */
export interface WriteJourneyRequest {
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity. An activity identifier can contain a maximum of 100 characters. The characters must be alphanumeric characters.</p>
   */
  Activities?: Record<string, Activity>;

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. To base the schedule on each participant's local time, set this value to true.</p>
   */
  LocalTime?: boolean;

  /**
   * <p>The name of the journey. A journey name can contain a maximum of 150 characters. The characters can be alphanumeric characters or symbols, such as underscores (_) or hyphens (-). A journey name can't contain any spaces.</p>
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * <p>The unique identifier for the first activity in the journey. The identifier for this activity can contain a maximum of 128 characters. The characters must be alphanumeric characters.</p>
   */
  StartActivity?: string;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * <p>The status of the journey. Valid values are:</p> <ul><li><p>DRAFT - Saves the journey and doesn't publish it.</p></li> <li><p>ACTIVE - Saves and publishes the journey. Depending on the journey's schedule, the journey starts running immediately or at the scheduled start time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li></ul> <p>PAUSED, CANCELLED, COMPLETED, and CLOSED states are not supported in requests to create or update a journey. To cancel, pause, or resume a journey, use the <link  linkend="apps-application-id-journeys-journey-id-state">Journey State</link> resource.</p>
   */
  State?: State | string;

  /**
   * <p>Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.</p>
   */
  WaitForQuietTime?: boolean;

  /**
   * <p>Specifies whether a journey should be refreshed on segment update.</p>
   */
  RefreshOnSegmentUpdate?: boolean;

  /**
   * <p>The channel-specific configurations for the journey.</p>
   */
  JourneyChannelSettings?: JourneyChannelSettings;
}

export namespace WriteJourneyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteJourneyRequest): any => ({
    ...obj,
  });
}

export interface CreateJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

export namespace CreateJourneyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJourneyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status, configuration, and other settings for a journey.</p>
 */
export interface JourneyResponse {
  /**
   * <p>A map that contains a set of Activity objects, one object for each activity in the journey. For each Activity object, the key is the unique identifier (string) for an activity and the value is the settings for the activity.</p>
   */
  Activities?: Record<string, Activity>;

  /**
   * <p>The unique identifier for the application that the journey applies to.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date, in ISO 8601 format, when the journey was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The messaging and entry limits for the journey.</p>
   */
  Limits?: JourneyLimits;

  /**
   * <p>Specifies whether the journey's scheduled start and end times use each participant's local time. If this value is true, the schedule uses each participant's local time.</p>
   */
  LocalTime?: boolean;

  /**
   * <p>The name of the journey.</p>
   */
  Name: string | undefined;

  /**
   * <p>The quiet time settings for the journey. Quiet time is a specific time range when a journey doesn't send messages to participants, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint for the participant is set to a valid value.</p></li> <li><p>The current time in the participant's time zone is later than or equal to the time specified by the QuietTime.Start property for the journey.</p></li> <li><p>The current time in the participant's time zone is earlier than or equal to the time specified by the QuietTime.End property for the journey.</p></li></ul> <p>If any of the preceding conditions isn't met, the participant will receive messages from the journey, even if quiet time is enabled.</p>
   */
  QuietTime?: QuietTime;

  /**
   * <p>The frequency with which Amazon Pinpoint evaluates segment and event data for the journey, as a duration in ISO 8601 format.</p>
   */
  RefreshFrequency?: string;

  /**
   * <p>The schedule settings for the journey.</p>
   */
  Schedule?: JourneySchedule;

  /**
   * <p>The unique identifier for the first activity in the journey.</p>
   */
  StartActivity?: string;

  /**
   * <p>The segment that defines which users are participants in the journey.</p>
   */
  StartCondition?: StartCondition;

  /**
   * <p>The current status of the journey. Possible values are:</p> <ul><li><p>DRAFT - The journey is being developed and hasn't been published yet.</p></li> <li><p>ACTIVE - The journey has been developed and published. Depending on the journey's schedule, the journey may currently be running or scheduled to start running at a later time. If a journey's status is ACTIVE, you can't add, change, or remove activities from it.</p></li> <li><p>COMPLETED - The journey has been published and has finished running. All participants have entered the journey and no participants are waiting to complete the journey or any activities in the journey.</p></li> <li><p>CANCELLED - The journey has been stopped. If a journey's status is CANCELLED, you can't add, change, or remove activities or segment settings from the journey.</p></li> <li><p>CLOSED - The journey has been published and has started running. It may have also passed its scheduled end time, or passed its scheduled start time and a refresh frequency hasn't been specified for it. If a journey's status is CLOSED, you can't add participants to it, and no existing participants can enter the journey for the first time. However, any existing participants who are currently waiting to start an activity may continue the journey.</p></li></ul>
   */
  State?: State | string;

  /**
   * <p>This object is not used or supported.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Specifies whether endpoints in quiet hours should enter a wait till the end of their quiet hours.</p>
   */
  WaitForQuietTime?: boolean;

  /**
   * <p>Specifies whether a journey should be refreshed on segment update.</p>
   */
  RefreshOnSegmentUpdate?: boolean;

  /**
   * <p>The channel-specific configurations for the journey.</p>
   */
  JourneyChannelSettings?: JourneyChannelSettings;
}

export namespace JourneyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JourneyResponse): any => ({
    ...obj,
  });
}

export interface CreateJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace CreateJourneyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateJourneyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
 */
export interface PushNotificationTemplateRequest {
  /**
   * <p>The message template to use for the ADM (Amazon Device Messaging) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  ADM?: AndroidPushNotificationTemplate;

  /**
   * <p>The message template to use for the APNs (Apple Push Notification service) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  APNS?: APNSPushNotificationTemplate;

  /**
   * <p>The message template to use for the Baidu (Baidu Cloud Push) channel. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  Baidu?: AndroidPushNotificationTemplate;

  /**
   * <p>The default message template to use for push notification channels.</p>
   */
  Default?: DefaultPushNotificationTemplate;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The message template to use for the GCM channel, which is used to send notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. This message template overrides the default template for push notification channels (DefaultPushNotificationTemplate).</p>
   */
  GCM?: AndroidPushNotificationTemplate;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;
}

export namespace PushNotificationTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PushNotificationTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreatePushTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreatePushTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePushTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreatePushTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreatePushTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePushTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 */
export interface CreateRecommenderConfigurationShape {
  /**
   * <p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.</p>
   */
  Description?: string;

  /**
   * <p>A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p>
   */
  Name?: string;

  /**
   * <p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * <p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * <p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsPerMessage?: number;
}

export namespace CreateRecommenderConfigurationShape {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecommenderConfigurationShape): any => ({
    ...obj,
  });
}

export interface CreateRecommenderConfigurationRequest {
  /**
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   */
  CreateRecommenderConfiguration: CreateRecommenderConfigurationShape | undefined;
}

export namespace CreateRecommenderConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecommenderConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
 */
export interface RecommenderConfigurationResponse {
  /**
   * <p>A map that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The date, in extended ISO 8601 format, when the configuration was created for the recommender model.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The custom description of the configuration for the recommender model.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier for the recommender model configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date, in extended ISO 8601 format, when the configuration for the recommender model was last modified.</p>
   */
  LastModifiedDate: string | undefined;

  /**
   * <p>The custom name of the configuration for the recommender model.</p>
   */
  Name?: string;

  /**
   * <p>The type of Amazon Pinpoint ID that's associated with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Possible values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Each user in the model is associated with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Each user in the model is associated with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If this value is specified, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model that Amazon Pinpoint retrieves the recommendation data from. This value is the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to perform additional processing of recommendation data that it retrieves from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * <p>The custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console.</p> <p>This value is null if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * <p>The number of recommended items that are retrieved from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables.</p>
   */
  RecommendationsPerMessage?: number;
}

export namespace RecommenderConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommenderConfigurationResponse): any => ({
    ...obj,
  });
}

export interface CreateRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

export namespace CreateRecommenderConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecommenderConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
 */
export interface WriteSegmentRequest {
  /**
   * <p>The criteria that define the dimensions for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;
}

export namespace WriteSegmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteSegmentRequest): any => ({
    ...obj,
  });
}

export interface CreateSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

export namespace CreateSegmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSegmentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
 */
export interface SegmentResponse {
  /**
   * <p>The unique identifier for the application that the segment is associated with.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the segment.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time when the segment was created.</p>
   */
  CreationDate: string | undefined;

  /**
   * <p>The dimension settings for the segment.</p>
   */
  Dimensions?: SegmentDimensions;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  Id: string | undefined;

  /**
   * <p>The settings for the import job that's associated with the segment.</p>
   */
  ImportDefinition?: SegmentImportResource;

  /**
   * <p>The date and time when the segment was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The name of the segment.</p>
   */
  Name?: string;

  /**
   * <p>A list of one or more segment groups that apply to the segment. Each segment group consists of zero or more base segments and the dimensions that are applied to those base segments.</p>
   */
  SegmentGroups?: SegmentGroupList;

  /**
   * <p>The segment type. Valid values are:</p> <ul><li><p>DIMENSIONAL - A dynamic segment, which is a segment that uses selection criteria that you specify and is based on endpoint data that's reported by your app. Dynamic segments can change over time.</p></li> <li><p>IMPORT - A static segment, which is a segment that uses selection criteria that you specify and is based on endpoint definitions that you import from a file. Imported segments are static; they don't change over time.</p></li></ul>
   */
  SegmentType: SegmentType | string | undefined;

  /**
   * <p>A string-to-string map of key-value pairs that identifies the tags that are associated with the segment. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The version number of the segment.</p>
   */
  Version?: number;
}

export namespace SegmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SegmentResponse): any => ({
    ...obj,
  });
}

export interface CreateSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace CreateSegmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSegmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
 */
export interface SMSTemplateRequest {
  /**
   * <p>The message body to use in text messages that are based on the message template.</p>
   */
  Body?: string;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The unique identifier for the recommender model to use for the message template. Amazon Pinpoint uses this value to determine how to retrieve and process data from a recommender model when it sends messages that use the template, if the template contains message variables for recommendation data.</p>
   */
  RecommenderId?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;
}

export namespace SMSTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SMSTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateSmsTemplateRequest {
  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateSmsTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSmsTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateSmsTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateSmsTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSmsTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
 */
export interface VoiceTemplateRequest {
  /**
   * <p>The text of the script to use in messages that are based on the message template, in plain text format.</p>
   */
  Body?: string;

  /**
   * <p>A JSON object that specifies the default values to use for message variables in the message template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the default value for that variable. When you create a message that's based on the template, you can override these defaults with message-specific and address-specific variables and values.</p>
   */
  DefaultSubstitutions?: string;

  /**
   * <p>The code for the language to use when synthesizing the text of the script in messages that are based on the message template. For a list of supported languages and the code for each one, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  LanguageCode?: string;

  /**
   * <p>A string-to-string map of key-value pairs that defines the tags to associate with the message template. Each tag consists of a required tag key and an associated tag value.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A custom description of the message template.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The name of the voice to use when delivering messages that are based on the message template. For a list of supported voices, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/what-is.html">Amazon Polly Developer Guide</a>.</p>
   */
  VoiceId?: string;
}

export namespace VoiceTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

export namespace CreateVoiceTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceTemplateRequest): any => ({
    ...obj,
  });
}

export interface CreateVoiceTemplateResponse {
  /**
   * <p>Provides information about a request to create a message template.</p>
   */
  CreateTemplateMessageBody: CreateTemplateMessageBody | undefined;
}

export namespace CreateVoiceTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteAdmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteAdmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAdmChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace DeleteAdmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAdmChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteApnsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace DeleteApnsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteApnsSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace DeleteApnsSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsSandboxChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteApnsVoipChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsVoipChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsVoipChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace DeleteApnsVoipChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsVoipChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteApnsVoipSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteApnsVoipSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace DeleteApnsVoipSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppResponse {
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace DeleteAppResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppResponse): any => ({
    ...obj,
  });
}

export interface DeleteBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteBaiduChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBaiduChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace DeleteBaiduChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBaiduChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

export namespace DeleteCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
    ...obj,
  });
}

export interface DeleteCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace DeleteCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCampaignResponse): any => ({
    ...obj,
  });
}

export interface DeleteEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteEmailChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEmailChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelResponse {
  /**
   * <p>The unique identifier for the application that the email channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that's applied to messages that are sent through the channel.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>Specifies whether the email channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The verified email address that email is sent from when you send email through the channel.</p>
   */
  FromAddress?: string;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the email channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that's used when you send email through the channel.</p>
   */
  Identity?: string;

  /**
   * <p>Specifies whether the email channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the email channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the email channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The maximum number of emails that can be sent through the channel each second.</p>
   */
  MessagesPerSecond?: number;

  /**
   * <p>The type of messaging or notification platform for the channel. For the email channel, this value is EMAIL.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Pinpoint uses to submit email-related event data for the channel.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current version of the email channel.</p>
   */
  Version?: number;
}

export namespace EmailChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace DeleteEmailChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEmailChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteEmailTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteEmailTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEmailTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an API request or response.</p>
 */
export interface MessageBody {
  /**
   * <p>The message that's returned from the API.</p>
   */
  Message?: string;

  /**
   * <p>The unique identifier for the request or response.</p>
   */
  RequestID?: string;
}

export namespace MessageBody {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageBody): any => ({
    ...obj,
  });
}

export interface DeleteEmailTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteEmailTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEmailTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

export namespace DeleteEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the channel type and other settings for an endpoint.</p>
 */
export interface EndpointResponse {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.</p>
   */
  Address?: string;

  /**
   * <p>The unique identifier for the application that's associated with the endpoint.</p>
   */
  ApplicationId?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * <p>The channel that's used when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.</p>
   */
  CohortId?: string;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was created.</p>
   */
  CreationDate?: string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint was last updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</p>
   */
  Id?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace EndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteEndpointResponse {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

export namespace DeleteEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteEventStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventStreamRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
 */
export interface EventStream {
  /**
   * <p>The unique identifier for the application to publish event data for.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>(Deprecated) Your AWS account ID, which you assigned to an external ID key in an IAM trust policy. Amazon Pinpoint previously used this value to assume an IAM role when publishing event data, but we removed this requirement. We don't recommend use of external IDs for IAM roles that are assumed by Amazon Pinpoint.</p>
   */
  ExternalId?: string;

  /**
   * <p>The date, in ISO 8601 format, when the event stream was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The IAM user who last modified the event stream.</p>
   */
  LastUpdatedBy?: string;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

export namespace EventStream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventStream): any => ({
    ...obj,
  });
}

export interface DeleteEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace DeleteEventStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventStreamResponse): any => ({
    ...obj,
  });
}

export interface DeleteGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteGcmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGcmChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelResponse {
  /**
   * <p>The unique identifier for the application that the GCM channel applies to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time when the GCM channel was enabled.</p>
   */
  CreationDate?: string;

  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  Credential: string | undefined;

  /**
   * <p>Specifies whether the GCM channel is enabled for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>(Not used) This property is retained only for backward compatibility.</p>
   */
  HasCredential?: boolean;

  /**
   * <p>(Deprecated) An identifier for the GCM channel. This property is retained only for backward compatibility.</p>
   */
  Id?: string;

  /**
   * <p>Specifies whether the GCM channel is archived.</p>
   */
  IsArchived?: boolean;

  /**
   * <p>The user who last modified the GCM channel.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the GCM channel was last modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The type of messaging or notification platform for the channel. For the GCM channel, this value is GCM.</p>
   */
  Platform: string | undefined;

  /**
   * <p>The current version of the GCM channel.</p>
   */
  Version?: number;
}

export namespace GCMChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GCMChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace DeleteGcmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGcmChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteInAppTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteInAppTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInAppTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteInAppTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteInAppTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInAppTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

export namespace DeleteJourneyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJourneyRequest): any => ({
    ...obj,
  });
}

export interface DeleteJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace DeleteJourneyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJourneyResponse): any => ({
    ...obj,
  });
}

export interface DeletePushTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeletePushTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePushTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeletePushTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeletePushTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePushTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;
}

export namespace DeleteRecommenderConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecommenderConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

export namespace DeleteRecommenderConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecommenderConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

export namespace DeleteSegmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSegmentRequest): any => ({
    ...obj,
  });
}

export interface DeleteSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace DeleteSegmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSegmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteSmsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSmsChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace DeleteSmsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSmsChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteSmsTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteSmsTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSmsTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteSmsTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteSmsTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSmsTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserEndpointsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserEndpointsRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserEndpointsResponse {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

export namespace DeleteUserEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserEndpointsResponse): any => ({
    ...obj,
  });
}

export interface DeleteVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DeleteVoiceChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace DeleteVoiceChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceChannelResponse): any => ({
    ...obj,
  });
}

export interface DeleteVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace DeleteVoiceTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace DeleteVoiceTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the email channel for an application.</p>
 */
export interface EmailChannelRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_ConfigurationSet.html">Amazon SES configuration set</a> that you want to apply to messages that you send through the channel.</p>
   */
  ConfigurationSet?: string;

  /**
   * <p>Specifies whether to enable the email channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The verified email address that you want to send email from when you send email through the channel.</p>
   */
  FromAddress: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity, verified with Amazon Simple Email Service (Amazon SES), that you want to use when you send email through the channel.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that you want Amazon Pinpoint to use when it submits email-related event data for the channel.</p>
   */
  RoleArn?: string;
}

export namespace EmailChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailChannelRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
 */
export interface EndpointBatchRequest {
  /**
   * <p>An array that defines the endpoints to create or update and, for each endpoint, the property values to set or change. An array can contain a maximum of 100 items.</p>
   */
  Item: EndpointBatchItem[] | undefined;
}

export namespace EndpointBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointBatchRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the channel type and other settings for an endpoint.</p>
 */
export interface EndpointRequest {
  /**
   * <p>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For a push-notification channel, use the token provided by the push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. For the SMS channel, use a phone number in E.164 format, such as +12065550100. For the email channel, use an email address.</p>
   */
  Address?: string;

  /**
   * <p>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: ["Science", "Music", "Travel"]. You can use these attributes as filter criteria when you create segments. Attribute names are case sensitive.</p> <p>An attribute name can contain up to 50 characters. An attribute value can contain up to 100 characters. When you define the name of a custom attribute, avoid using the following characters: number sign (#), colon (:), question mark (?), backslash (\), and slash (/). The Amazon Pinpoint console can't display attribute names that contain these characters. This restriction doesn't apply to attribute values.</p>
   */
  Attributes?: Record<string, string[]>;

  /**
   * <p>The channel to use when sending messages or push notifications to the endpoint.</p>
   */
  ChannelType?: ChannelType | string;

  /**
   * <p>The demographic information for the endpoint, such as the time zone and platform.</p>
   */
  Demographic?: EndpointDemographic;

  /**
   * <p>The date and time, in ISO 8601 format, when the endpoint is updated.</p>
   */
  EffectiveDate?: string;

  /**
   * <p>Specifies whether to send messages or push notifications to the endpoint. Valid values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint.</p> <p>Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</p>
   */
  EndpointStatus?: string;

  /**
   * <p>The geographic information for the endpoint.</p>
   */
  Location?: EndpointLocation;

  /**
   * <p>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</p>
   */
  Metrics?: Record<string, number>;

  /**
   * <p>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</p>
   */
  OptOut?: string;

  /**
   * <p>The unique identifier for the most recent request to update the endpoint.</p>
   */
  RequestId?: string;

  /**
   * <p>One or more custom attributes that describe the user who's associated with the endpoint.</p>
   */
  User?: EndpointUser;
}

export namespace EndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a batch of events to process.</p>
 */
export interface EventsRequest {
  /**
   * <p>The batch of events to process. For each item in a batch, the endpoint ID acts as a key that has an EventsBatch object as its value.</p>
   */
  BatchItem: Record<string, EventsBatch> | undefined;
}

export namespace EventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
 */
export interface GCMChannelRequest {
  /**
   * <p>The Web API Key, also referred to as an <i>API_KEY</i> or <i>server key</i>, that you received from Google to communicate with Google services.</p>
   */
  ApiKey: string | undefined;

  /**
   * <p>Specifies whether to enable the GCM channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace GCMChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GCMChannelRequest): any => ({
    ...obj,
  });
}

export interface GetAdmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetAdmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdmChannelRequest): any => ({
    ...obj,
  });
}

export interface GetAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace GetAdmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAdmChannelResponse): any => ({
    ...obj,
  });
}

export interface GetApnsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsChannelRequest): any => ({
    ...obj,
  });
}

export interface GetApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace GetApnsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsChannelResponse): any => ({
    ...obj,
  });
}

export interface GetApnsSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface GetApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace GetApnsSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsSandboxChannelResponse): any => ({
    ...obj,
  });
}

export interface GetApnsVoipChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsVoipChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsVoipChannelRequest): any => ({
    ...obj,
  });
}

export interface GetApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace GetApnsVoipChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsVoipChannelResponse): any => ({
    ...obj,
  });
}

export interface GetApnsVoipSandboxChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApnsVoipSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface GetApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace GetApnsVoipSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
}

export interface GetAppRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetAppRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppRequest): any => ({
    ...obj,
  });
}

export interface GetAppResponse {
  /**
   * <p>Provides information about an application.</p>
   */
  ApplicationResponse: ApplicationResponse | undefined;
}

export namespace GetAppResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppResponse): any => ({
    ...obj,
  });
}

export interface GetApplicationDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

export namespace GetApplicationDateRangeKpiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationDateRangeKpiRequest): any => ({
    ...obj,
  });
}

export interface GetApplicationDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.</p>
   */
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse | undefined;
}

export namespace GetApplicationDateRangeKpiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationDateRangeKpiResponse): any => ({
    ...obj,
  });
}

export interface GetApplicationSettingsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetApplicationSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetApplicationSettingsResponse {
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

export namespace GetApplicationSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAppsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetAppsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppsRequest): any => ({
    ...obj,
  });
}

export interface GetAppsResponse {
  /**
   * <p>Provides information about all of your applications.</p>
   */
  ApplicationsResponse: ApplicationsResponse | undefined;
}

export namespace GetAppsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppsResponse): any => ({
    ...obj,
  });
}

export interface GetBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetBaiduChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBaiduChannelRequest): any => ({
    ...obj,
  });
}

export interface GetBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace GetBaiduChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBaiduChannelResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;
}

export namespace GetCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace GetCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignActivitiesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignActivitiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignActivitiesRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignActivitiesResponse {
  /**
   * <p>Provides information about the activities that were performed by a campaign.</p>
   */
  ActivitiesResponse: ActivitiesResponse | undefined;
}

export namespace GetCampaignActivitiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignActivitiesResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

export namespace GetCampaignDateRangeKpiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignDateRangeKpiRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
   */
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse | undefined;
}

export namespace GetCampaignDateRangeKpiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignDateRangeKpiResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignsRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignsResponse {
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

export namespace GetCampaignsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignsResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignVersionRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}

export namespace GetCampaignVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignVersionRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignVersionResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace GetCampaignVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignVersionResponse): any => ({
    ...obj,
  });
}

export interface GetCampaignVersionsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetCampaignVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetCampaignVersionsResponse {
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: CampaignsResponse | undefined;
}

export namespace GetCampaignVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCampaignVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetChannelsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelsRequest): any => ({
    ...obj,
  });
}

export interface GetChannelsResponse {
  /**
   * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
   */
  ChannelsResponse: ChannelsResponse | undefined;
}

export namespace GetChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelsResponse): any => ({
    ...obj,
  });
}

export interface GetEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetEmailChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEmailChannelRequest): any => ({
    ...obj,
  });
}

export interface GetEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace GetEmailChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEmailChannelResponse): any => ({
    ...obj,
  });
}

export interface GetEmailTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetEmailTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEmailTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetEmailTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateResponse: EmailTemplateResponse | undefined;
}

export namespace GetEmailTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEmailTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

export namespace GetEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetEndpointResponse {
  /**
   * <p>Provides information about the channel type and other settings for an endpoint.</p>
   */
  EndpointResponse: EndpointResponse | undefined;
}

export namespace GetEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetEventStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventStreamRequest): any => ({
    ...obj,
  });
}

export interface GetEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace GetEventStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventStreamResponse): any => ({
    ...obj,
  });
}

export interface GetExportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

export namespace GetExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportJobRequest): any => ({
    ...obj,
  });
}

export interface GetExportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: ExportJobResponse | undefined;
}

export namespace GetExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportJobResponse): any => ({
    ...obj,
  });
}

export interface GetExportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportJobsRequest): any => ({
    ...obj,
  });
}

export interface GetExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

export namespace GetExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetExportJobsResponse): any => ({
    ...obj,
  });
}

export interface GetGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetGcmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGcmChannelRequest): any => ({
    ...obj,
  });
}

export interface GetGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace GetGcmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGcmChannelResponse): any => ({
    ...obj,
  });
}

export interface GetImportJobRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the job.</p>
   */
  JobId: string | undefined;
}

export namespace GetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImportJobRequest): any => ({
    ...obj,
  });
}

export interface GetImportJobResponse {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: ImportJobResponse | undefined;
}

export namespace GetImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImportJobResponse): any => ({
    ...obj,
  });
}

export interface GetImportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImportJobsRequest): any => ({
    ...obj,
  });
}

export interface GetImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

export namespace GetImportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetImportJobsResponse): any => ({
    ...obj,
  });
}

export interface GetInAppMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;
}

export namespace GetInAppMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInAppMessagesRequest): any => ({
    ...obj,
  });
}

export interface GetInAppMessagesResponse {
  /**
   * <p>Get in-app messages response object.</p>
   */
  InAppMessagesResponse: InAppMessagesResponse | undefined;
}

export namespace GetInAppMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInAppMessagesResponse): any => ({
    ...obj,
  });
}

export interface GetInAppTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetInAppTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInAppTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetInAppTemplateResponse {
  /**
   * <p>In-App Template Response.</p>
   */
  InAppTemplateResponse: InAppTemplateResponse | undefined;
}

export namespace GetInAppTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInAppTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;
}

export namespace GetJourneyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyRequest): any => ({
    ...obj,
  });
}

export interface GetJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace GetJourneyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyResponse): any => ({
    ...obj,
  });
}

export interface GetJourneyDateRangeKpiRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</p>
   */
  EndTime?: Date;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.</p>
   */
  KpiName: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</p>
   */
  StartTime?: Date;
}

export namespace GetJourneyDateRangeKpiRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyDateRangeKpiRequest): any => ({
    ...obj,
  });
}

export interface GetJourneyDateRangeKpiResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse | undefined;
}

export namespace GetJourneyDateRangeKpiResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyDateRangeKpiResponse): any => ({
    ...obj,
  });
}

export interface GetJourneyExecutionActivityMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey activity.</p>
   */
  JourneyActivityId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

export namespace GetJourneyExecutionActivityMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyExecutionActivityMetricsRequest): any => ({
    ...obj,
  });
}

export interface GetJourneyExecutionActivityMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.</p>
   */
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse | undefined;
}

export namespace GetJourneyExecutionActivityMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyExecutionActivityMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetJourneyExecutionMetricsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;
}

export namespace GetJourneyExecutionMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyExecutionMetricsRequest): any => ({
    ...obj,
  });
}

export interface GetJourneyExecutionMetricsResponse {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.</p>
   */
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse | undefined;
}

export namespace GetJourneyExecutionMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJourneyExecutionMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetPushTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetPushTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPushTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetPushTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateResponse: PushNotificationTemplateResponse | undefined;
}

export namespace GetPushTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPushTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;
}

export namespace GetRecommenderConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommenderConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

export namespace GetRecommenderConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommenderConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetRecommenderConfigurationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetRecommenderConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommenderConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetRecommenderConfigurationsResponse {
  /**
   * <p>Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
   */
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse | undefined;
}

export namespace GetRecommenderConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommenderConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;
}

export namespace GetSegmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace GetSegmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentExportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentExportJobsRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentExportJobsResponse {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: ExportJobsResponse | undefined;
}

export namespace GetSegmentExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentExportJobsResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentImportJobsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentImportJobsRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentImportJobsResponse {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: ImportJobsResponse | undefined;
}

export namespace GetSegmentImportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentImportJobsResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentsRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

export namespace GetSegmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentsResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentVersionRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The unique version number (Version property) for the campaign version.</p>
   */
  Version: string | undefined;
}

export namespace GetSegmentVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentVersionRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentVersionResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace GetSegmentVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentVersionResponse): any => ({
    ...obj,
  });
}

export interface GetSegmentVersionsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace GetSegmentVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetSegmentVersionsResponse {
  /**
   * <p>Provides information about all the segments that are associated with an application.</p>
   */
  SegmentsResponse: SegmentsResponse | undefined;
}

export namespace GetSegmentVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSegmentVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetSmsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSmsChannelRequest): any => ({
    ...obj,
  });
}

export interface GetSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace GetSmsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSmsChannelResponse): any => ({
    ...obj,
  });
}

export interface GetSmsTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetSmsTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSmsTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetSmsTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateResponse: SMSTemplateResponse | undefined;
}

export namespace GetSmsTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSmsTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetUserEndpointsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   */
  UserId: string | undefined;
}

export namespace GetUserEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserEndpointsRequest): any => ({
    ...obj,
  });
}

export interface GetUserEndpointsResponse {
  /**
   * <p>Provides information about all the endpoints that are associated with a user ID.</p>
   */
  EndpointsResponse: EndpointsResponse | undefined;
}

export namespace GetUserEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserEndpointsResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace GetVoiceChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceChannelRequest): any => ({
    ...obj,
  });
}

export interface GetVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace GetVoiceChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceChannelResponse): any => ({
    ...obj,
  });
}

export interface GetVoiceTemplateRequest {
  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace GetVoiceTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetVoiceTemplateResponse {
  /**
   * <p>Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateResponse: VoiceTemplateResponse | undefined;
}

export namespace GetVoiceTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetVoiceTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Changes the status of a journey.</p>
 */
export interface JourneyStateRequest {
  /**
   * <p>The status of the journey. Currently, Supported values are ACTIVE, PAUSED, and CANCELLED</p> <p>If you cancel a journey, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Amazon Pinpoint also continues to collect and aggregate analytics data for those activities, until they are complete, and any activities that were complete when you cancelled the journey.</p> <p>After you cancel a journey, you can't add, change, or remove any activities from the journey. In addition, Amazon Pinpoint stops evaluating the journey and doesn't perform any activities that haven't started.</p> <p>When the journey is paused, Amazon Pinpoint continues to perform activities that are currently in progress, until those activities are complete. Endpoints will stop entering journeys when the journey is paused and will resume entering the journey after the journey is resumed. For wait activities, wait time is paused when the journey is paused. Currently, PAUSED only supports journeys with a segment refresh interval.</p>
   */
  State?: State | string;
}

export namespace JourneyStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JourneyStateRequest): any => ({
    ...obj,
  });
}

export interface ListJourneysRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The NextToken string that specifies which page of results to return in a paginated response.</p>
   */
  Token?: string;
}

export namespace ListJourneysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJourneysRequest): any => ({
    ...obj,
  });
}

export interface ListJourneysResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.</p>
   */
  JourneysResponse: JourneysResponse | undefined;
}

export namespace ListJourneysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJourneysResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
 */
export interface TagsModel {
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, message template, or segment. Each of these resources can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace TagsModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagsModel): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTemplatesRequest {
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.</p>
   */
  Prefix?: string;

  /**
   * <p>The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.</p>
   */
  TemplateType?: string;
}

export namespace ListTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListTemplatesResponse {
  /**
   * <p>Provides information about all the message templates that are associated with your Amazon Pinpoint account.</p>
   */
  TemplatesResponse: TemplatesResponse | undefined;
}

export namespace ListTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTemplatesResponse): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsRequest {
  /**
   * <p>The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</p>
   */
  PageSize?: string;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

export namespace ListTemplateVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTemplateVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListTemplateVersionsResponse {
  /**
   * <p>Provides information about all the versions of a specific message template.</p>
   */
  TemplateVersionsResponse: TemplateVersionsResponse | undefined;
}

export namespace ListTemplateVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTemplateVersionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration and other settings for a message.</p>
 */
export interface MessageRequest {
  /**
   * <p>A map of key-value pairs, where each key is an address and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object. An address can be a push notification token, a phone number, or an email address. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-addressconfiguration">AddressConfiguration</a> object to tailor the message for an address by specifying settings such as content overrides and message variables.</p>
   */
  Addresses?: Record<string, AddressConfiguration>;

  /**
   * <p>A map of custom attributes to attach to the message. For a push notification, this payload is added to the data.pinpoint object. For an email or text message, this payload is added to email/SMS delivery receipt event attributes.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>A map of key-value pairs, where each key is an endpoint ID and each value is an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for an endpoint by specifying settings such as content overrides and message variables.</p>
   */
  Endpoints?: Record<string, EndpointSendConfiguration>;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;
}

export namespace MessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a phone number to validate and retrieve information about.</p>
 */
export interface NumberValidateRequest {
  /**
   * <p>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region where the phone number was originally registered.</p>
   */
  IsoCountryCode?: string;

  /**
   * <p>The phone number to retrieve information about. The phone number that you provide should include a valid numeric country code. Otherwise, the operation might result in an error.</p>
   */
  PhoneNumber?: string;
}

export namespace NumberValidateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberValidateRequest): any => ({
    ...obj,
  });
}

export interface PhoneNumberValidateRequest {
  /**
   * <p>Specifies a phone number to validate and retrieve information about.</p>
   */
  NumberValidateRequest: NumberValidateRequest | undefined;
}

export namespace PhoneNumberValidateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberValidateRequest): any => ({
    ...obj,
  });
}

export interface PhoneNumberValidateResponse {
  /**
   * <p>Provides information about a phone number.</p>
   */
  NumberValidateResponse: NumberValidateResponse | undefined;
}

export namespace PhoneNumberValidateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberValidateResponse): any => ({
    ...obj,
  });
}

export interface PutEventsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of events to process.</p>
   */
  EventsRequest: EventsRequest | undefined;
}

export namespace PutEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventsRequest): any => ({
    ...obj,
  });
}

export interface PutEventsResponse {
  /**
   * <p>Provides information about endpoints and the events that they're associated with.</p>
   */
  EventsResponse: EventsResponse | undefined;
}

export namespace PutEventsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
 */
export interface WriteEventStream {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis data stream or Amazon Kinesis Data Firehose delivery stream that you want to publish event data to.</p> <p>For a Kinesis data stream, the ARN format is: arn:aws:kinesis:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:stream/<replaceable>stream_name</replaceable>
   *                </p> <p>For a Kinesis Data Firehose delivery stream, the ARN format is: arn:aws:firehose:<replaceable>region</replaceable>:<replaceable>account-id</replaceable>:deliverystream/<replaceable>stream_name</replaceable>
   *                </p>
   */
  DestinationStreamArn: string | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.</p>
   */
  RoleArn: string | undefined;
}

export namespace WriteEventStream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteEventStream): any => ({
    ...obj,
  });
}

export interface PutEventStreamRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.</p>
   */
  WriteEventStream: WriteEventStream | undefined;
}

export namespace PutEventStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventStreamRequest): any => ({
    ...obj,
  });
}

export interface PutEventStreamResponse {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: EventStream | undefined;
}

export namespace PutEventStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEventStreamResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
 */
export interface UpdateAttributesRequest {
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   */
  Blacklist?: string[];
}

export namespace UpdateAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAttributesRequest): any => ({
    ...obj,
  });
}

export interface RemoveAttributesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
   */
  AttributeType: string | undefined;

  /**
   * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
   */
  UpdateAttributesRequest: UpdateAttributesRequest | undefined;
}

export namespace RemoveAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveAttributesRequest): any => ({
    ...obj,
  });
}

export interface RemoveAttributesResponse {
  /**
   * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
   */
  AttributesResource: AttributesResource | undefined;
}

export namespace RemoveAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveAttributesResponse): any => ({
    ...obj,
  });
}

export interface SendMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message.</p>
   */
  MessageRequest: MessageRequest | undefined;
}

export namespace SendMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessagesRequest): any => ({
    ...obj,
  });
}

export interface SendMessagesResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   */
  MessageResponse: MessageResponse | undefined;
}

export namespace SendMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendMessagesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Send OTP message request parameters.</p>
 */
export interface SendOTPMessageRequestParameters {
  /**
   * <p>The attempts allowed to validate an OTP.</p>
   */
  AllowedAttempts?: number;

  /**
   * <p>The brand name that will be substituted into the OTP message body. Should be owned by calling AWS account.</p>
   */
  BrandName: string | undefined;

  /**
   * <p>Channel type for the OTP message. Supported values: [SMS].</p>
   */
  Channel: string | undefined;

  /**
   * <p>The number of characters in the generated OTP.</p>
   */
  CodeLength?: number;

  /**
   * <p>The destination identity to send OTP to.</p>
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>A unique Entity ID received from DLT after entity registration is approved.</p>
   */
  EntityId?: string;

  /**
   * <p>The language to be used for the outgoing message body containing the OTP.</p>
   */
  Language?: string;

  /**
   * <p>The origination identity used to send OTP from.</p>
   */
  OriginationIdentity: string | undefined;

  /**
   * <p>Developer-specified reference identifier. Required to match during OTP verification.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>A unique Template ID received from DLT after entity registration is approved.</p>
   */
  TemplateId?: string;

  /**
   * <p>The time in minutes before the OTP is no longer valid.</p>
   */
  ValidityPeriod?: number;
}

export namespace SendOTPMessageRequestParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendOTPMessageRequestParameters): any => ({
    ...obj,
  });
}

export interface SendOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Send OTP message request parameters.</p>
   */
  SendOTPMessageRequestParameters: SendOTPMessageRequestParameters | undefined;
}

export namespace SendOTPMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendOTPMessageRequest): any => ({
    ...obj,
  });
}

export interface SendOTPMessageResponse {
  /**
   * <p>Provides information about the results of a request to send a message to an endpoint address.</p>
   */
  MessageResponse: MessageResponse | undefined;
}

export namespace SendOTPMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendOTPMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
 */
export interface SendUsersMessageRequest {
  /**
   * <p>A map of custom attribute-value pairs. For a push notification, Amazon Pinpoint adds these attributes to the data.pinpoint object in the body of the notification payload. Amazon Pinpoint also provides these attributes in the events that it generates for users-messages deliveries.</p>
   */
  Context?: Record<string, string>;

  /**
   * <p>The settings and content for the default message and any default messages that you defined for specific channels.</p>
   */
  MessageConfiguration: DirectMessageConfiguration | undefined;

  /**
   * <p>The message template to use for the message.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;

  /**
   * <p>The unique identifier for tracing the message. This identifier is visible to message recipients.</p>
   */
  TraceId?: string;

  /**
   * <p>A map that associates user IDs with <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> objects. You can use an <a href="https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-messages.html#apps-application-id-messages-model-endpointsendconfiguration">EndpointSendConfiguration</a> object to tailor the message for a user by specifying settings such as content overrides and message variables.</p>
   */
  Users: Record<string, EndpointSendConfiguration> | undefined;
}

export namespace SendUsersMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendUsersMessageRequest): any => ({
    ...obj,
  });
}

export interface SendUsersMessagesRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.</p>
   */
  SendUsersMessageRequest: SendUsersMessageRequest | undefined;
}

export namespace SendUsersMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendUsersMessagesRequest): any => ({
    ...obj,
  });
}

export interface SendUsersMessagesResponse {
  /**
   * <p>Provides information about which users and endpoints a message was sent to.</p>
   */
  SendUsersMessageResponse: SendUsersMessageResponse | undefined;
}

export namespace SendUsersMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendUsersMessagesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the tags (keys and values) for an application, campaign, message template, or segment.</p>
   */
  TagsModel: TagsModel | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAdmChannelRequest {
  /**
   * <p>Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelRequest: ADMChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateAdmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAdmChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateAdmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.</p>
   */
  ADMChannelResponse: ADMChannelResponse | undefined;
}

export namespace UpdateAdmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAdmChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateApnsChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelRequest: APNSChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateApnsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: APNSChannelResponse | undefined;
}

export namespace UpdateApnsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateApnsSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelRequest: APNSSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateApnsSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.</p>
   */
  APNSSandboxChannelResponse: APNSSandboxChannelResponse | undefined;
}

export namespace UpdateApnsSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsSandboxChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateApnsVoipChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelRequest: APNSVoipChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsVoipChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsVoipChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateApnsVoipChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.</p>
   */
  APNSVoipChannelResponse: APNSVoipChannelResponse | undefined;
}

export namespace UpdateApnsVoipChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsVoipChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateApnsVoipSandboxChannelRequest {
  /**
   * <p>Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest | undefined;

  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;
}

export namespace UpdateApnsVoipSandboxChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsVoipSandboxChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateApnsVoipSandboxChannelResponse {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse | undefined;
}

export namespace UpdateApnsVoipSandboxChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApnsVoipSandboxChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default settings for an application.</p>
 */
export interface WriteApplicationSettingsRequest {
  /**
   * <p>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</p> <p>To override these settings and define custom settings for a specific campaign, use the CampaignHook object of the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource.</p>
   */
  CampaignHook?: CampaignHook;

  /**
   * <p>Specifies whether to enable application-related alarms in Amazon CloudWatch.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  EventTaggingEnabled?: boolean;
  /**
   * <p>The default sending limits for campaigns in the application. To override these limits and define custom limits for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource, respectively.</p>
   */
  Limits?: CampaignLimits;

  /**
   * <p>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met:</p> <ul><li><p>The EndpointDemographic.Timezone property of the endpoint is set to a valid value.</p></li> <li><p>The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings).</p></li> <li><p>The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings).</p></li></ul> <p>If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</p> <p>To override the default quiet time settings for a specific campaign or journey, use the <link  linkend="apps-application-id-campaigns-campaign-id">Campaign</link> resource or the <link  linkend="apps-application-id-journeys-journey-id">Journey</link> resource to define a custom quiet time for the campaign or journey.</p>
   */
  QuietTime?: QuietTime;
}

export namespace WriteApplicationSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WriteApplicationSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationSettingsRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the default settings for an application.</p>
   */
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest | undefined;
}

export namespace UpdateApplicationSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationSettingsResponse {
  /**
   * <p>Provides information about an application, including the default settings for an application.</p>
   */
  ApplicationSettingsResource: ApplicationSettingsResource | undefined;
}

export namespace UpdateApplicationSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateBaiduChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelRequest: BaiduChannelRequest | undefined;
}

export namespace UpdateBaiduChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBaiduChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateBaiduChannelResponse {
  /**
   * <p>Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.</p>
   */
  BaiduChannelResponse: BaiduChannelResponse | undefined;
}

export namespace UpdateBaiduChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBaiduChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateCampaignRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the campaign.</p>
   */
  CampaignId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a campaign.</p>
   */
  WriteCampaignRequest: WriteCampaignRequest | undefined;
}

export namespace UpdateCampaignRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCampaignRequest): any => ({
    ...obj,
  });
}

export interface UpdateCampaignResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: CampaignResponse | undefined;
}

export namespace UpdateCampaignResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateCampaignResponse): any => ({
    ...obj,
  });
}

export interface UpdateEmailChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the email channel for an application.</p>
   */
  EmailChannelRequest: EmailChannelRequest | undefined;
}

export namespace UpdateEmailChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEmailChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateEmailChannelResponse {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: EmailChannelResponse | undefined;
}

export namespace UpdateEmailChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEmailChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateEmailTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.</p>
   */
  EmailTemplateRequest: EmailTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdateEmailTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEmailTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateEmailTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEmailTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEmailTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateEndpointRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the endpoint.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>Specifies the channel type and other settings for an endpoint.</p>
   */
  EndpointRequest: EndpointRequest | undefined;
}

export namespace UpdateEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateEndpointResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointResponse): any => ({
    ...obj,
  });
}

export interface UpdateEndpointsBatchRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.</p>
   */
  EndpointBatchRequest: EndpointBatchRequest | undefined;
}

export namespace UpdateEndpointsBatchRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointsBatchRequest): any => ({
    ...obj,
  });
}

export interface UpdateEndpointsBatchResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateEndpointsBatchResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEndpointsBatchResponse): any => ({
    ...obj,
  });
}

export interface UpdateGcmChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelRequest: GCMChannelRequest | undefined;
}

export namespace UpdateGcmChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGcmChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateGcmChannelResponse {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: GCMChannelResponse | undefined;
}

export namespace UpdateGcmChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGcmChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateInAppTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>InApp Template Request.</p>
   */
  InAppTemplateRequest: InAppTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdateInAppTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInAppTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateInAppTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateInAppTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInAppTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateJourneyRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Specifies the configuration and other settings for a journey.</p>
   */
  WriteJourneyRequest: WriteJourneyRequest | undefined;
}

export namespace UpdateJourneyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJourneyRequest): any => ({
    ...obj,
  });
}

export interface UpdateJourneyResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace UpdateJourneyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJourneyResponse): any => ({
    ...obj,
  });
}

export interface UpdateJourneyStateRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the journey.</p>
   */
  JourneyId: string | undefined;

  /**
   * <p>Changes the status of a journey.</p>
   */
  JourneyStateRequest: JourneyStateRequest | undefined;
}

export namespace UpdateJourneyStateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJourneyStateRequest): any => ({
    ...obj,
  });
}

export interface UpdateJourneyStateResponse {
  /**
   * <p>Provides information about the status, configuration, and other settings for a journey.</p>
   */
  JourneyResponse: JourneyResponse | undefined;
}

export namespace UpdateJourneyStateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJourneyStateResponse): any => ({
    ...obj,
  });
}

export interface UpdatePushTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.</p>
   */
  PushNotificationTemplateRequest: PushNotificationTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdatePushTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePushTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdatePushTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdatePushTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePushTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
 */
export interface UpdateRecommenderConfigurationShape {
  /**
   * <p>A map of key-value pairs that defines 1-10 custom endpoint or user attributes, depending on the value for the RecommendationProviderIdType property. Each of these attributes temporarily stores a recommended item that's retrieved from the recommender model and sent to an AWS Lambda function for additional processing. Each attribute can be used as a message variable in a message template.</p> <p>In the map, the key is the name of a custom attribute and the value is a custom display name for that attribute. The display name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The following restrictions apply to these names:</p> <ul><li><p>An attribute name must start with a letter or number and it can contain up to 50 characters. The characters can be letters, numbers, underscores (_), or hyphens (-). Attribute names are case sensitive and must be unique.</p></li> <li><p>An attribute display name must start with a letter or number and it can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p></li></ul> <p>This object is required if the configuration invokes an AWS Lambda function (RecommendationTransformerUri) to process recommendation data. Otherwise, don't include this object in your request.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>A custom description of the configuration for the recommender model. The description can contain up to 128 characters. The characters can be letters, numbers, spaces, or the following symbols: _ ; () , ‐.</p>
   */
  Description?: string;

  /**
   * <p>A custom name of the configuration for the recommender model. The name must start with a letter or number and it can contain up to 128 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-).</p>
   */
  Name?: string;

  /**
   * <p>The type of Amazon Pinpoint ID to associate with unique user IDs in the recommender model. This value enables the model to use attribute and event data that’s specific to a particular endpoint or user in an Amazon Pinpoint application. Valid values are:</p> <ul><li><p>PINPOINT_ENDPOINT_ID - Associate each user in the model with a particular endpoint in Amazon Pinpoint. The data is correlated based on endpoint IDs in Amazon Pinpoint. This is the default value.</p></li> <li><p>PINPOINT_USER_ID - Associate each user in the model with a particular user and endpoint in Amazon Pinpoint. The data is correlated based on user IDs in Amazon Pinpoint. If you specify this value, an endpoint definition in Amazon Pinpoint has to specify both a user ID (UserId) and an endpoint ID. Otherwise, messages won’t be sent to the user's endpoint.</p></li></ul>
   */
  RecommendationProviderIdType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to retrieve recommendation data from the recommender model.</p>
   */
  RecommendationProviderRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommender model to retrieve recommendation data from. This value must match the ARN of an Amazon Personalize campaign.</p>
   */
  RecommendationProviderUri: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function to invoke for additional processing of recommendation data that's retrieved from the recommender model.</p>
   */
  RecommendationTransformerUri?: string;

  /**
   * <p>A custom display name for the standard endpoint or user attribute (RecommendationItems) that temporarily stores recommended items for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This value is required if the configuration doesn't invoke an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p> <p>This name appears in the <b>Attribute finder</b> of the template editor on the Amazon Pinpoint console. The name can contain up to 25 characters. The characters can be letters, numbers, spaces, underscores (_), or hyphens (-). These restrictions don't apply to attribute values.</p>
   */
  RecommendationsDisplayName?: string;

  /**
   * <p>The number of recommended items to retrieve from the model for each endpoint or user, depending on the value for the RecommendationProviderIdType property. This number determines how many recommended items are available for use in message variables. The minimum value is 1. The maximum value is 5. The default value is 5.</p> <p>To use multiple recommended items and custom attributes with message variables, you have to use an AWS Lambda function (RecommendationTransformerUri) to perform additional processing of recommendation data.</p>
   */
  RecommendationsPerMessage?: number;
}

export namespace UpdateRecommenderConfigurationShape {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecommenderConfigurationShape): any => ({
    ...obj,
  });
}

export interface UpdateRecommenderConfigurationRequest {
  /**
   * <p>The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.</p>
   */
  RecommenderId: string | undefined;

  /**
   * <p>Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.</p>
   */
  UpdateRecommenderConfiguration: UpdateRecommenderConfigurationShape | undefined;
}

export namespace UpdateRecommenderConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecommenderConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateRecommenderConfigurationResponse {
  /**
   * <p>Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.</p>
   */
  RecommenderConfigurationResponse: RecommenderConfigurationResponse | undefined;
}

export namespace UpdateRecommenderConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecommenderConfigurationResponse): any => ({
    ...obj,
  });
}

export interface UpdateSegmentRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The unique identifier for the segment.</p>
   */
  SegmentId: string | undefined;

  /**
   * <p>Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.</p>
   */
  WriteSegmentRequest: WriteSegmentRequest | undefined;
}

export namespace UpdateSegmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSegmentRequest): any => ({
    ...obj,
  });
}

export interface UpdateSegmentResponse {
  /**
   * <p>Provides information about the configuration, dimension, and other settings for a segment.</p>
   */
  SegmentResponse: SegmentResponse | undefined;
}

export namespace UpdateSegmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSegmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the SMS channel for an application.</p>
 */
export interface SMSChannelRequest {
  /**
   * <p>Specifies whether to enable the SMS channel for the application.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The identity that you want to display on recipients' devices when they receive messages from the SMS channel.</p>
   */
  SenderId?: string;

  /**
   * <p>The registered short code that you want to use when you send messages through the SMS channel.</p>
   */
  ShortCode?: string;
}

export namespace SMSChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SMSChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateSmsChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelRequest: SMSChannelRequest | undefined;
}

export namespace UpdateSmsChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSmsChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateSmsChannelResponse {
  /**
   * <p>Provides information about the status and settings of the SMS channel for an application.</p>
   */
  SMSChannelResponse: SMSChannelResponse | undefined;
}

export namespace UpdateSmsChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSmsChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateSmsTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.</p>
   */
  SMSTemplateRequest: SMSTemplateRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;
}

export namespace UpdateSmsTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSmsTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateSmsTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateSmsTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSmsTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies which version of a message template to use as the active version of the template.</p>
 */
export interface TemplateActiveVersionRequest {
  /**
   * <p>The version of the message template to use as the active version of the template. Valid values are: latest, for the most recent version of the template; or, the unique identifier for any existing version of the template. If you specify an identifier, the value must match the identifier for an existing template version. To retrieve a list of versions and version identifiers for a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p>
   */
  Version?: string;
}

export namespace TemplateActiveVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateActiveVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateActiveVersionRequest {
  /**
   * <p>Specifies which version of a message template to use as the active version of the template.</p>
   */
  TemplateActiveVersionRequest: TemplateActiveVersionRequest | undefined;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.</p>
   */
  TemplateType: string | undefined;
}

export namespace UpdateTemplateActiveVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTemplateActiveVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateTemplateActiveVersionResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateTemplateActiveVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTemplateActiveVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the status and settings of the voice channel for an application.</p>
 */
export interface VoiceChannelRequest {
  /**
   * <p>Specifies whether to enable the voice channel for the application.</p>
   */
  Enabled?: boolean;
}

export namespace VoiceChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceChannelRequest {
  /**
   * <p>The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specifies the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelRequest: VoiceChannelRequest | undefined;
}

export namespace UpdateVoiceChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceChannelResponse {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: VoiceChannelResponse | undefined;
}

export namespace UpdateVoiceChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateVoiceTemplateRequest {
  /**
   * <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * <p>The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
   */
  Version?: string;

  /**
   * <p>Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.</p>
   */
  VoiceTemplateRequest: VoiceTemplateRequest | undefined;
}

export namespace UpdateVoiceTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceTemplateResponse {
  /**
   * <p>Provides information about an API request or response.</p>
   */
  MessageBody: MessageBody | undefined;
}

export namespace UpdateVoiceTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Verify OTP message request.</p>
 */
export interface VerifyOTPMessageRequestParameters {
  /**
   * <p>The destination identity to send OTP to.</p>
   */
  DestinationIdentity: string | undefined;

  /**
   * <p>The OTP the end user provided for verification.</p>
   */
  Otp: string | undefined;

  /**
   * <p>The reference identifier provided when the OTP was previously sent.</p>
   */
  ReferenceId: string | undefined;
}

export namespace VerifyOTPMessageRequestParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyOTPMessageRequestParameters): any => ({
    ...obj,
  });
}

export interface VerifyOTPMessageRequest {
  /**
   * <p>The unique ID of your Amazon Pinpoint application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Verify OTP message request.</p>
   */
  VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters | undefined;
}

export namespace VerifyOTPMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyOTPMessageRequest): any => ({
    ...obj,
  });
}

export interface VerifyOTPMessageResponse {
  /**
   * <p>Verify OTP Message Response.</p>
   */
  VerificationResponse: VerificationResponse | undefined;
}

export namespace VerifyOTPMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VerifyOTPMessageResponse): any => ({
    ...obj,
  });
}
