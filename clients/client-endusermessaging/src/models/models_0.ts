// smithy-typescript generated code
import type {
  BrandProfileAttributeType,
  CodeType,
  JobResourceType,
  JobStatus,
  NotifyChannel,
  OnAttributeConflict,
  Status,
  VerificationStatus,
  VoiceMessageBodyTextType,
} from "./enums";

/**
 * <p>Specifies an attribute to create for a brand profile.</p>
 * @public
 */
export interface BrandProfileAttributeInput {
  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.</p>
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * <p>The text value for the attribute. This value applies to attributes of type TEXT. For attributes of type IMAGE or DOCUMENT, provide the media through the attachment body instead.</p>
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * <p>The binary content for an attribute of type IMAGE or DOCUMENT. The content is base64-encoded when it is sent over the wire.</p>
   * @public
   */
  attachmentBody?: Uint8Array | undefined;

  /**
   * <p>A description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The category of the attribute.</p>
   * @public
   */
  category?: string | undefined;
}

/**
 * <p>Contains information about an attribute that was created for a brand profile.</p>
 * @public
 */
export interface BrandProfileAttributeOutput {
  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.</p>
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * <p>A presigned Amazon S3 URL that you can use to download the attribute media. The URL is valid for one hour and is present only for attributes of type IMAGE or DOCUMENT.</p>
   * @public
   */
  mediaDownloadUrl?: string | undefined;
}

/**
 * <p>Contains summary information about a brand profile attribute in a list response.</p>
 * @public
 */
export interface BrandProfileAttributeSummary {
  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.</p>
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * <p>A description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The category of the attribute.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Contains information about a brand profile.</p>
 * @public
 */
export interface BrandProfileInfo {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand profile.</p>
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>The current lifecycle status of the brand profile.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The delivery parameters for the preapproved notify-template route over the SMS or voice channels.</p>
 * @public
 */
export interface NotifyParameters {
  /**
   * <p>The identifier of a preapproved notify template for the SMS or voice channels.</p>
   * @public
   */
  notifyTemplateId?: string | undefined;

  /**
   * <p>The Amazon Polly voice ID used when the notify template is delivered over the voice channel.</p>
   * @public
   */
  voiceId?: string | undefined;
}

/**
 * <p>The delivery parameters for the text channel, which delivers over SMS or RCS.</p>
 * @public
 */
export interface TextParameters {
  /**
   * <p>The freeform message template used to render the one-time passcode for the SMS or RCS channels. The template must contain the code placeholder.</p>
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * <p>A map of country-specific parameters that control one-time passcode delivery.</p>
   * @public
   */
  destinationCountryParameters?: Record<string, string> | undefined;
}

/**
 * <p>The delivery parameters for the voice channel.</p>
 * @public
 */
export interface VoiceParameters {
  /**
   * <p>The freeform message template used to render the one-time passcode for the voice channel. The template must contain the code placeholder.</p>
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * <p>The BCP 47 language code used to render the voice message.</p>
   * @public
   */
  languageCode?: string | undefined;

  /**
   * <p>The Amazon Polly voice ID used for the voice channel.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>The format of the voice message body. Valid values are TEXT and SSML.</p>
   * @public
   */
  voiceMessageBodyTextType?: VoiceMessageBodyTextType | undefined;
}

/**
 * <p>The delivery parameters for the WhatsApp channel.</p>
 * @public
 */
export interface WhatsAppParameters {
  /**
   * <p>The name of the Meta-approved WhatsApp authentication template.</p>
   * @public
   */
  whatsAppTemplateName?: string | undefined;

  /**
   * <p>The BCP 47 language code used to render the template. This value is required for the WhatsApp channel.</p>
   * @public
   */
  languageCode?: string | undefined;
}

/**
 * <p>The channel-specific parameters used to render and deliver a one-time passcode. Each member configures the parameters for one delivery route. Populate only the channels that a configuration or send request supports. A notify code configuration can carry every channel at once, and a send request resolves to a single route that selects the matching channel at send time.</p>
 * @public
 */
export interface ChannelParameters {
  /**
   * <p>The parameters for the text channel, which delivers over SMS or RCS.</p>
   * @public
   */
  text?: TextParameters | undefined;

  /**
   * <p>The parameters for the voice channel.</p>
   * @public
   */
  voice?: VoiceParameters | undefined;

  /**
   * <p>The parameters for the preapproved notify-template route over the SMS or voice channels.</p>
   * @public
   */
  notify?: NotifyParameters | undefined;

  /**
   * <p>The parameters for the WhatsApp channel.</p>
   * @public
   */
  whatsApp?: WhatsAppParameters | undefined;
}

/**
 * <p>The passcode policy parameters that are grouped for reuse across a notify code configuration and its create request. Each member is optional. When you omit a member on a create request, no value is applied at create time and the default is applied when a passcode is sent.</p>
 * @public
 */
export interface CodeConfigurationParameters {
  /**
   * <p>The character set used to generate the one-time passcode. Valid values are NUMERIC (digits only), ALPHA (uppercase letters only), and ALPHANUMERIC (uppercase letters and digits). When you do not specify a value, the default is applied when a passcode is sent.</p>
   * @public
   */
  codeType?: CodeType | undefined;

  /**
   * <p>The number of characters in the one-time passcode. Valid values range from 4 through 8. When you do not specify a value, the default is applied when a passcode is sent.</p>
   * @public
   */
  codeLength?: number | undefined;

  /**
   * <p>The length of time, in minutes, that the one-time passcode remains valid. Valid values range from 1 through 60. When you do not specify a value, the default is applied when a passcode is sent.</p>
   * @public
   */
  validityPeriodMinutes?: number | undefined;

  /**
   * <p>The maximum number of validation attempts that are allowed before the verification is locked. Valid values range from 1 through 5. When you do not specify a value, the default is applied when a passcode is sent.</p>
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * <p>Describes a tag as a key and value pair that you can associate with a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileInput {
  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileOutput {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand profile.</p>
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>The current lifecycle status of the brand profile.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The number of default attributes that were created for the brand profile.</p>
   * @public
   */
  attributesCreated: number | undefined;
}

/**
 * Describes one specific validation failure for an input member.
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraints.
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileAttributesInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The brand profile attributes.</p>
   * @public
   */
  attributes: BrandProfileAttributeInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileAttributesOutput {
  /**
   * <p>The brand profile attributes.</p>
   * @public
   */
  attributes: BrandProfileAttributeOutput[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileFromRegistrationInput {
  /**
   * <p>The identifier or Amazon Resource Name (ARN) of the registration to populate the brand profile from.</p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.</p>
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Pairs an asynchronous job with the resource identifier from your request that the job processes.</p>
 * @public
 */
export interface JobResult {
  /**
   * <p>The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The identifier from your request that this job is processing.</p>
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileFromRegistrationOutput {
  /**
   * <p>The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.</p>
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface CreateNotifyCodeConfigurationInput {
  /**
   * <p>The name of the notify code configuration.</p>
   * @public
   */
  notifyCodeConfigurationName: string | undefined;

  /**
   * <p>The passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. Each member is optional. When you omit a member, no value is applied at create time and the default is applied when a passcode is sent.</p>
   * @public
   */
  codeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * <p>The channel-specific parameters used to render and deliver the one-time passcode. Provide parameters for any subset of channels. Each member configures one delivery route, and the route that is selected at send time uses the matching channel.</p>
   * @public
   */
  channelParameters?: ChannelParameters | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Contains the settings of a notify code configuration, which is a reusable one-time passcode policy.</p>
 * @public
 */
export interface NotifyCodeConfiguration {
  /**
   * <p>The unique identifier of the notify code configuration.</p>
   * @public
   */
  notifyCodeConfigurationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the notify code configuration.</p>
   * @public
   */
  notifyCodeConfigurationArn: string | undefined;

  /**
   * <p>The name of the notify code configuration.</p>
   * @public
   */
  notifyCodeConfigurationName: string | undefined;

  /**
   * <p>The passcode policy parameters, including the code type, length, validity period, and maximum number of attempts.</p>
   * @public
   */
  codeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * <p>The channel-specific parameters used to render and deliver the one-time passcode. A configuration can carry parameters for every channel at once, and the send route selects the matching channel at send time.</p>
   * @public
   */
  channelParameters?: ChannelParameters | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateNotifyCodeConfigurationOutput {
  /**
   * <p>The notify code configuration resource.</p>
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationsFromBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The registration types to create, for example US_TOLL_FREE_REGISTRATION or SENDER_ID.</p>
   * @public
   */
  registrationTypes: string[] | undefined;

  /**
   * <p>Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.</p>
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationsFromBrandProfileOutput {
  /**
   * <p>The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.</p>
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileOutput {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand profile.</p>
   * @public
   */
  brandProfileArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileAttributeInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileAttributeOutput {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyCodeConfigurationInput {
  /**
   * <p>The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  notifyCodeConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyCodeConfigurationOutput {}

/**
 * @public
 */
export interface GetBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileOutput {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand profile.</p>
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>The current lifecycle status of the brand profile.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileAttributeInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileAttributeOutput {
  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.</p>
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * <p>The text value of the attribute. This value applies to attributes of type TEXT.</p>
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * <p>A description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The category of the attribute.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>The MIME content type of the attribute media.</p>
   * @public
   */
  mediaContentType?: string | undefined;

  /**
   * <p>The size of the attribute media, in bytes.</p>
   * @public
   */
  mediaSizeBytes?: number | undefined;

  /**
   * <p>A presigned Amazon S3 URL that you can use to download the attribute media. The URL is valid for one hour and is present only for attributes of type IMAGE or DOCUMENT.</p>
   * @public
   */
  mediaDownloadUrl?: string | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetJobInput {
  /**
   * <p>The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Contains information about a resource that was created or updated by an asynchronous job.</p>
 * @public
 */
export interface JobResource {
  /**
   * <p>The type of the resource that the job created or updated.</p>
   * @public
   */
  resourceType: JobResourceType | undefined;

  /**
   * <p>The identifier of the resource that the job created or updated.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Information about an async job tracked by the service. GetJob returns
 * the full `Job`, which may grow detail-only fields that are not part of
 * the `JobSummary` list view.
 * @public
 */
export interface Job {
  /**
   * <p>The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current lifecycle status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The type of mutating operation that created the job.</p>
   * @public
   */
  operationType: string | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The brand profile that the job operates on. This value is absent for operations that create a brand profile.</p>
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * <p>A machine-readable code that identifies why the job failed. This value is present only when the job status is FAILED.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>A human-readable description of why the job failed. This value is present only when the job status is FAILED.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The resources that were created or updated by the job.</p>
   * @public
   */
  resources?: JobResource[] | undefined;
}

/**
 * @public
 */
export interface GetNotifyCodeConfigurationInput {
  /**
   * <p>The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  notifyCodeConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface GetNotifyCodeConfigurationOutput {
  /**
   * <p>The notify code configuration resource.</p>
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface ListBrandProfileAttributesInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandProfileAttributesOutput {
  /**
   * <p>The list of brand profile attributes.</p>
   * @public
   */
  brandProfileAttributes: BrandProfileAttributeSummary[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrandProfilesInput {
  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandProfilesOutput {
  /**
   * <p>The list of brand profiles.</p>
   * @public
   */
  brandProfiles: BrandProfileInfo[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsInput {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters the results to jobs that have the specified status.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>Filters the results to jobs for the specified brand profile.</p>
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * <p>Filters the results to jobs of the specified operation type.</p>
   * @public
   */
  operationType?: string | undefined;
}

/**
 * <p>Contains summary information about an asynchronous job in a list response.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The current lifecycle status of the job.</p>
   * @public
   */
  status: JobStatus | undefined;

  /**
   * <p>The type of mutating operation that created the job.</p>
   * @public
   */
  operationType: string | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The brand profile that the job operates on. This value is absent for operations that create a brand profile.</p>
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * <p>A machine-readable code that identifies why the job failed. This value is present only when the job status is FAILED.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>A human-readable description of why the job failed. This value is present only when the job status is FAILED.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The resources that were created or updated by the job.</p>
   * @public
   */
  resources?: JobResource[] | undefined;
}

/**
 * @public
 */
export interface ListJobsOutput {
  /**
   * <p>The list of asynchronous jobs.</p>
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotifyCodeConfigurationsInput {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotifyCodeConfigurationsOutput {
  /**
   * <p>The list of notify code configurations.</p>
   * @public
   */
  notifyCodeConfigurations: NotifyCodeConfiguration[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistrationsFromBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a registration that is associated with a brand profile.</p>
 * @public
 */
export interface RegistrationAssociationSummary {
  /**
   * <p>The identifier of the registration.</p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>The type of the registration, for example US_TOLL_FREE_REGISTRATION or SENDER_ID.</p>
   * @public
   */
  registrationType: string | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Specifies whether smart matching was used to create the association.</p>
   * @public
   */
  smartMatchUsed: boolean | undefined;
}

/**
 * @public
 */
export interface ListRegistrationsFromBrandProfileOutput {
  /**
   * <p>The list of registrations that are associated with the brand profile.</p>
   * @public
   */
  registrationAssociations: RegistrationAssociationSummary[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface SendNotifyCodeVerificationInput {
  /**
   * <p>The channel used to deliver the one-time passcode to the recipient.</p>
   * @public
   */
  channel: NotifyChannel | undefined;

  /**
   * <p>The recipient identifier. For the TEXT and VOICE channels, specify an E.164 phone number. For the WhatsApp channel, specify a WhatsApp address.</p>
   * @public
   */
  destinationIdentity: string | undefined;

  /**
   * <p>The identity used to send the message, such as a phone number, sender ID, or pool that is owned by your account.</p>
   * @public
   */
  originationIdentity: string | undefined;

  /**
   * <p>The identifier or Amazon Resource Name (ARN) of the notify code configuration that supplies the passcode policy and template defaults. When you do not specify a configuration, you must supply the template in the request.</p>
   * @public
   */
  notifyCodeConfiguration?: string | undefined;

  /**
   * <p>The channel-specific parameters used to render and deliver the one-time passcode for this request. The route that is derived from the channel and the origination identity selects the matching channel. When you do not specify channel parameters, the service uses the parameters from the referenced notify code configuration.</p>
   * @public
   */
  overrideChannelParameters?: ChannelParameters | undefined;

  /**
   * <p>The per-send overrides for the passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. These values override the values from the referenced notify code configuration. When you do not specify a value, the value from the configuration is used, and if neither is set, the service default applies.</p>
   * @public
   */
  overrideCodeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * <p>The name of the configuration set used to control how delivery events for the message are handled.</p>
   * @public
   */
  configurationSetName?: string | undefined;

  /**
   * <p>A map of custom key and value pairs that are propagated to the delivery events for this verification.</p>
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * <p>A caller-supplied reference identifier that binds a send request to a later validate request. Specify the same value in both requests.</p>
   * @public
   */
  referenceId?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyCodeVerificationOutput {
  /**
   * <p>The service-generated identifier for the verification.</p>
   * @public
   */
  verificationId: string | undefined;

  /**
   * <p>The service-generated identifier for the message that delivers the one-time passcode.</p>
   * @public
   */
  messageId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of key and value pair tags that are associated with the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}

/**
 * @public
 */
export interface UpdateBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName?: string | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileOutput {
  /**
   * <p>The unique identifier of the brand profile.</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the brand profile.</p>
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * <p>The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.</p>
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * <p>The current lifecycle status of the brand profile.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileAttributeInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The text value of the attribute. This value applies to attributes of type TEXT.</p>
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * <p>The binary content for an attribute of type IMAGE or DOCUMENT. The content is base64-encoded when it is sent over the wire.</p>
   * @public
   */
  attachmentBody?: Uint8Array | undefined;

  /**
   * <p>A description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The category of the attribute.</p>
   * @public
   */
  category?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileAttributeOutput {
  /**
   * <p>The name of the brand profile attribute. The name is unique within a brand profile.</p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p>The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.</p>
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * <p>The text value of the attribute. This value applies to attributes of type TEXT.</p>
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * <p>A description of the attribute.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The category of the attribute.</p>
   * @public
   */
  category?: string | undefined;

  /**
   * <p>The MIME content type of the attribute media.</p>
   * @public
   */
  mediaContentType?: string | undefined;

  /**
   * <p>The size of the attribute media, in bytes.</p>
   * @public
   */
  mediaSizeBytes?: number | undefined;

  /**
   * <p>The time when the resource was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time when the resource was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileFromRegistrationInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The identifier or Amazon Resource Name (ARN) of the registration to import attributes from.</p>
   * @public
   */
  registrationId: string | undefined;

  /**
   * <p>Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.</p>
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * <p>Specifies how the service resolves an attribute that already exists. REPLACE overwrites the existing value with the incoming value. PRESERVE keeps the existing value.</p>
   * @public
   */
  onAttributeConflict?: OnAttributeConflict | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileFromRegistrationOutput {
  /**
   * <p>The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.</p>
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * <p>The updated delivery parameters for the preapproved notify-template route. Absent members preserve the current value, and the empty sentinel on a member clears it.</p>
 * @public
 */
export interface UpdateNotifyParameters {
  /**
   * <p>The updated identifier of a preapproved notify template for the SMS or voice channels. An empty string clears the previously stored value.</p>
   * @public
   */
  notifyTemplateId?: string | undefined;

  /**
   * <p>The updated Amazon Polly voice ID. An empty string clears the previously stored value.</p>
   * @public
   */
  voiceId?: string | undefined;
}

/**
 * <p>The updated delivery parameters for the text channel. Absent members preserve the current value, and the empty sentinel on a member clears it.</p>
 * @public
 */
export interface UpdateTextParameters {
  /**
   * <p>The updated freeform SMS or RCS template body. An empty string clears the previously stored value.</p>
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * <p>The updated map of country-specific parameters that control one-time passcode delivery. An empty map clears the previously stored value.</p>
   * @public
   */
  destinationCountryParameters?: Record<string, string> | undefined;
}

/**
 * <p>The updated delivery parameters for the voice channel. Absent members preserve the current value, and the empty sentinel on a member clears it.</p>
 * @public
 */
export interface UpdateVoiceParameters {
  /**
   * <p>The updated freeform voice template body. An empty string clears the previously stored value.</p>
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * <p>The updated BCP 47 language code. An empty string clears the previously stored value.</p>
   * @public
   */
  languageCode?: string | undefined;

  /**
   * <p>The updated Amazon Polly voice ID. An empty string clears the previously stored value.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>The updated format of the voice message body. Valid values are TEXT and SSML. Omit this member to preserve the current value.</p>
   * @public
   */
  voiceMessageBodyTextType?: VoiceMessageBodyTextType | undefined;
}

/**
 * <p>The updated delivery parameters for the WhatsApp channel. Absent members preserve the current value, and the empty sentinel on a member clears it.</p>
 * @public
 */
export interface UpdateWhatsAppParameters {
  /**
   * <p>The updated name of the Meta-approved WhatsApp authentication template. An empty string clears the previously stored value.</p>
   * @public
   */
  whatsAppTemplateName?: string | undefined;

  /**
   * <p>The updated BCP 47 language code. An empty string clears the previously stored value.</p>
   * @public
   */
  languageCode?: string | undefined;
}

/**
 * <p>The updated channel-specific parameters used only when you update a notify code configuration. When you omit a channel, that channel's parameters remain unchanged. When you supply a channel, you can clear individual fields by using the empty-string or empty-map sentinel on a member, or drop the whole channel's parameters by clearing every member. These sentinels apply only when you update a configuration; a create request rejects empty values with a validation error.</p>
 * @public
 */
export interface UpdateChannelParameters {
  /**
   * <p>The text-channel parameters to update. Omit this member to leave the text-channel parameters unchanged.</p>
   * @public
   */
  text?: UpdateTextParameters | undefined;

  /**
   * <p>The voice-channel parameters to update. Omit this member to leave the voice-channel parameters unchanged.</p>
   * @public
   */
  voice?: UpdateVoiceParameters | undefined;

  /**
   * <p>The notify-template-route parameters to update. Omit this member to leave them unchanged.</p>
   * @public
   */
  notify?: UpdateNotifyParameters | undefined;

  /**
   * <p>The WhatsApp-channel parameters to update. Omit this member to leave the WhatsApp-channel parameters unchanged.</p>
   * @public
   */
  whatsApp?: UpdateWhatsAppParameters | undefined;
}

/**
 * <p>The loose variant of the passcode policy parameters that is used only when you update a notify code configuration. When you omit a member, its current value is preserved.</p>
 * @public
 */
export interface UpdateCodeConfigurationParameters {
  /**
   * <p>The updated character set used to generate the one-time passcode. Omit this member to preserve the current value.</p>
   * @public
   */
  codeType?: CodeType | undefined;

  /**
   * <p>The updated number of characters in the one-time passcode. Valid values range from 4 through 8. Omit this member to preserve the current value.</p>
   * @public
   */
  codeLength?: number | undefined;

  /**
   * <p>The updated length of time, in minutes, that the one-time passcode remains valid. Valid values range from 1 through 60. Omit this member to preserve the current value.</p>
   * @public
   */
  validityPeriodMinutes?: number | undefined;

  /**
   * <p>The updated maximum number of validation attempts that are allowed before the verification is locked. Valid values range from 1 through 5. Omit this member to preserve the current value.</p>
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyCodeConfigurationInput {
  /**
   * <p>The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  notifyCodeConfigurationId: string | undefined;

  /**
   * <p>The name of the notify code configuration.</p>
   * @public
   */
  notifyCodeConfigurationName?: string | undefined;

  /**
   * <p>The updated passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. When you omit a member, its current value is preserved.</p>
   * @public
   */
  codeConfigurationParameters?: UpdateCodeConfigurationParameters | undefined;

  /**
   * <p>The updated channel-specific parameters used to render and deliver the one-time passcode. This is a loose, nested update: when you omit a channel, that channel's parameters remain unchanged. Within a supplied channel, an empty string on a string member, or an empty map on the destination-country parameters, clears the currently stored value, and absent members preserve the current value.</p>
   * @public
   */
  channelParameters?: UpdateChannelParameters | undefined;

  /**
   * <p>Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyCodeConfigurationOutput {
  /**
   * <p>The notify code configuration resource.</p>
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistrationsFromBrandProfileInput {
  /**
   * <p>The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).</p>
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * <p>The identifiers of the registrations.</p>
   * @public
   */
  registrationIds: string[] | undefined;

  /**
   * <p>Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.</p>
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * <p>Specifies how the service resolves an attribute that already exists. REPLACE overwrites the existing value with the incoming value. PRESERVE keeps the existing value.</p>
   * @public
   */
  onAttributeConflict?: OnAttributeConflict | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistrationsFromBrandProfileOutput {
  /**
   * <p>The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.</p>
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface ValidateNotifyCodeVerificationInput {
  /**
   * <p>The recipient identifier. For the TEXT and VOICE channels, specify an E.164 phone number. For the WhatsApp channel, specify a WhatsApp address.</p>
   * @public
   */
  destinationIdentity: string | undefined;

  /**
   * <p>The caller-supplied reference identifier used to locate the verification. This value must match the value that you supplied to the SendNotifyCodeVerification operation.</p>
   * @public
   */
  referenceId?: string | undefined;

  /**
   * <p>The one-time passcode that the recipient submitted for validation.</p>
   * @public
   */
  code: string | undefined;
}

/**
 * @public
 */
export interface ValidateNotifyCodeVerificationOutput {
  /**
   * <p>The outcome of the validation attempt. VALID indicates that the submitted passcode matched an active verification. INVALID indicates that the passcode did not match, expired, or exceeded its attempt limit.</p>
   * @public
   */
  status: VerificationStatus | undefined;
}
