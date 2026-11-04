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
 * Specifies an attribute to create for a brand profile.
 *
 * @public
 */
export interface BrandProfileAttributeInput {
  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.
   *
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * The text value for the attribute. This value applies to attributes of type TEXT. For attributes of type IMAGE or DOCUMENT, provide the media through the attachment body instead.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * The binary content for an attribute of type IMAGE or DOCUMENT. The content is base64-encoded when it is sent over the wire.
   *
   * @public
   */
  attachmentBody?: Uint8Array | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category of the attribute.
   *
   * @public
   */
  category?: string | undefined;
}

/**
 * Contains information about an attribute that was created for a brand profile.
 *
 * @public
 */
export interface BrandProfileAttributeOutput {
  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.
   *
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * A presigned Amazon S3 URL that you can use to download the attribute media. The URL is valid for one hour and is present only for attributes of type IMAGE or DOCUMENT.
   *
   * @public
   */
  mediaDownloadUrl?: string | undefined;
}

/**
 * Contains summary information about a brand profile attribute in a list response.
 *
 * @public
 */
export interface BrandProfileAttributeSummary {
  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.
   *
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category of the attribute.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains information about a brand profile.
 *
 * @public
 */
export interface BrandProfileInfo {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand profile.
   *
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * The current lifecycle status of the brand profile.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The delivery parameters for the preapproved notify-template route over the SMS or voice channels.
 *
 * @public
 */
export interface NotifyParameters {
  /**
   * The identifier of a preapproved notify template for the SMS or voice channels.
   *
   * @public
   */
  notifyTemplateId?: string | undefined;

  /**
   * The Amazon Polly voice ID used when the notify template is delivered over the voice channel.
   *
   * @public
   */
  voiceId?: string | undefined;
}

/**
 * The delivery parameters for the text channel, which delivers over SMS or RCS.
 *
 * @public
 */
export interface TextParameters {
  /**
   * The freeform message template used to render the one-time passcode for the SMS or RCS channels. The template must contain the code placeholder.
   *
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * A map of country-specific parameters that control one-time passcode delivery.
   *
   * @public
   */
  destinationCountryParameters?: Record<string, string> | undefined;
}

/**
 * The delivery parameters for the voice channel.
 *
 * @public
 */
export interface VoiceParameters {
  /**
   * The freeform message template used to render the one-time passcode for the voice channel. The template must contain the code placeholder.
   *
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * The BCP 47 language code used to render the voice message.
   *
   * @public
   */
  languageCode?: string | undefined;

  /**
   * The Amazon Polly voice ID used for the voice channel.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * The format of the voice message body. Valid values are TEXT and SSML.
   *
   * @public
   */
  voiceMessageBodyTextType?: VoiceMessageBodyTextType | undefined;
}

/**
 * The delivery parameters for the WhatsApp channel.
 *
 * @public
 */
export interface WhatsAppParameters {
  /**
   * The name of the Meta-approved WhatsApp authentication template.
   *
   * @public
   */
  whatsAppTemplateName?: string | undefined;

  /**
   * The BCP 47 language code used to render the template. This value is required for the WhatsApp channel.
   *
   * @public
   */
  languageCode?: string | undefined;
}

/**
 * The channel-specific parameters used to render and deliver a one-time passcode. Each member configures the parameters for one delivery route. Populate only the channels that a configuration or send request supports. A notify code configuration can carry every channel at once, and a send request resolves to a single route that selects the matching channel at send time.
 *
 * @public
 */
export interface ChannelParameters {
  /**
   * The parameters for the text channel, which delivers over SMS or RCS.
   *
   * @public
   */
  text?: TextParameters | undefined;

  /**
   * The parameters for the voice channel.
   *
   * @public
   */
  voice?: VoiceParameters | undefined;

  /**
   * The parameters for the preapproved notify-template route over the SMS or voice channels.
   *
   * @public
   */
  notify?: NotifyParameters | undefined;

  /**
   * The parameters for the WhatsApp channel.
   *
   * @public
   */
  whatsApp?: WhatsAppParameters | undefined;
}

/**
 * The passcode policy parameters that are grouped for reuse across a notify code configuration and its create request. Each member is optional. When you omit a member on a create request, no value is applied at create time and the default is applied when a passcode is sent.
 *
 * @public
 */
export interface CodeConfigurationParameters {
  /**
   * The character set used to generate the one-time passcode. Valid values are NUMERIC (digits only), ALPHA (uppercase letters only), and ALPHANUMERIC (uppercase letters and digits). When you do not specify a value, the default is applied when a passcode is sent.
   *
   * @public
   */
  codeType?: CodeType | undefined;

  /**
   * The number of characters in the one-time passcode. Valid values range from 4 through 8. When you do not specify a value, the default is applied when a passcode is sent.
   *
   * @public
   */
  codeLength?: number | undefined;

  /**
   * The length of time, in minutes, that the one-time passcode remains valid. Valid values range from 1 through 60. When you do not specify a value, the default is applied when a passcode is sent.
   *
   * @public
   */
  validityPeriodMinutes?: number | undefined;

  /**
   * The maximum number of validation attempts that are allowed before the verification is locked. Valid values range from 1 through 5. When you do not specify a value, the default is applied when a passcode is sent.
   *
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * Describes a tag as a key and value pair that you can associate with a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileInput {
  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileOutput {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand profile.
   *
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * The current lifecycle status of the brand profile.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The number of default attributes that were created for the brand profile.
   *
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
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The brand profile attributes.
   *
   * @public
   */
  attributes: BrandProfileAttributeInput[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileAttributesOutput {
  /**
   * The brand profile attributes.
   *
   * @public
   */
  attributes: BrandProfileAttributeOutput[] | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileFromRegistrationInput {
  /**
   * The identifier or Amazon Resource Name (ARN) of the registration to populate the brand profile from.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.
   *
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Pairs an asynchronous job with the resource identifier from your request that the job processes.
 *
 * @public
 */
export interface JobResult {
  /**
   * The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The identifier from your request that this job is processing.
   *
   * @public
   */
  resourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateBrandProfileFromRegistrationOutput {
  /**
   * The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.
   *
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface CreateNotifyCodeConfigurationInput {
  /**
   * The name of the notify code configuration.
   *
   * @public
   */
  notifyCodeConfigurationName: string | undefined;

  /**
   * The passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. Each member is optional. When you omit a member, no value is applied at create time and the default is applied when a passcode is sent.
   *
   * @public
   */
  codeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * The channel-specific parameters used to render and deliver the one-time passcode. Provide parameters for any subset of channels. Each member configures one delivery route, and the route that is selected at send time uses the matching channel.
   *
   * @public
   */
  channelParameters?: ChannelParameters | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains the settings of a notify code configuration, which is a reusable one-time passcode policy.
 *
 * @public
 */
export interface NotifyCodeConfiguration {
  /**
   * The unique identifier of the notify code configuration.
   *
   * @public
   */
  notifyCodeConfigurationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notify code configuration.
   *
   * @public
   */
  notifyCodeConfigurationArn: string | undefined;

  /**
   * The name of the notify code configuration.
   *
   * @public
   */
  notifyCodeConfigurationName: string | undefined;

  /**
   * The passcode policy parameters, including the code type, length, validity period, and maximum number of attempts.
   *
   * @public
   */
  codeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * The channel-specific parameters used to render and deliver the one-time passcode. A configuration can carry parameters for every channel at once, and the send route selects the matching channel at send time.
   *
   * @public
   */
  channelParameters?: ChannelParameters | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateNotifyCodeConfigurationOutput {
  /**
   * The notify code configuration resource.
   *
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationsFromBrandProfileInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The registration types to create, for example US_TOLL_FREE_REGISTRATION or SENDER_ID.
   *
   * @public
   */
  registrationTypes: string[] | undefined;

  /**
   * Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.
   *
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistrationsFromBrandProfileOutput {
  /**
   * The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.
   *
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileOutput {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand profile.
   *
   * @public
   */
  brandProfileArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileAttributeInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrandProfileAttributeOutput {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotifyCodeConfigurationInput {
  /**
   * The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
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
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileOutput {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand profile.
   *
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * The current lifecycle status of the brand profile.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileAttributeInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;
}

/**
 * @public
 */
export interface GetBrandProfileAttributeOutput {
  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.
   *
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * The text value of the attribute. This value applies to attributes of type TEXT.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category of the attribute.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * The MIME content type of the attribute media.
   *
   * @public
   */
  mediaContentType?: string | undefined;

  /**
   * The size of the attribute media, in bytes.
   *
   * @public
   */
  mediaSizeBytes?: number | undefined;

  /**
   * A presigned Amazon S3 URL that you can use to download the attribute media. The URL is valid for one hour and is present only for attributes of type IMAGE or DOCUMENT.
   *
   * @public
   */
  mediaDownloadUrl?: string | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetJobInput {
  /**
   * The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Contains information about a resource that was created or updated by an asynchronous job.
 *
 * @public
 */
export interface JobResource {
  /**
   * The type of the resource that the job created or updated.
   *
   * @public
   */
  resourceType: JobResourceType | undefined;

  /**
   * The identifier of the resource that the job created or updated.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
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
   * The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current lifecycle status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The type of mutating operation that created the job.
   *
   * @public
   */
  operationType: string | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The brand profile that the job operates on. This value is absent for operations that create a brand profile.
   *
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * A machine-readable code that identifies why the job failed. This value is present only when the job status is FAILED.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * A human-readable description of why the job failed. This value is present only when the job status is FAILED.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The resources that were created or updated by the job.
   *
   * @public
   */
  resources?: JobResource[] | undefined;
}

/**
 * @public
 */
export interface GetNotifyCodeConfigurationInput {
  /**
   * The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  notifyCodeConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface GetNotifyCodeConfigurationOutput {
  /**
   * The notify code configuration resource.
   *
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface ListBrandProfileAttributesInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandProfileAttributesOutput {
  /**
   * The list of brand profile attributes.
   *
   * @public
   */
  brandProfileAttributes: BrandProfileAttributeSummary[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrandProfilesInput {
  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListBrandProfilesOutput {
  /**
   * The list of brand profiles.
   *
   * @public
   */
  brandProfiles: BrandProfileInfo[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsInput {
  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the results to jobs that have the specified status.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * Filters the results to jobs for the specified brand profile.
   *
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * Filters the results to jobs of the specified operation type.
   *
   * @public
   */
  operationType?: string | undefined;
}

/**
 * Contains summary information about an asynchronous job in a list response.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The unique identifier of the asynchronous job. Use the GetJob operation to check the status of the job and to retrieve its results.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The current lifecycle status of the job.
   *
   * @public
   */
  status: JobStatus | undefined;

  /**
   * The type of mutating operation that created the job.
   *
   * @public
   */
  operationType: string | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The brand profile that the job operates on. This value is absent for operations that create a brand profile.
   *
   * @public
   */
  brandProfileId?: string | undefined;

  /**
   * A machine-readable code that identifies why the job failed. This value is present only when the job status is FAILED.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * A human-readable description of why the job failed. This value is present only when the job status is FAILED.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The resources that were created or updated by the job.
   *
   * @public
   */
  resources?: JobResource[] | undefined;
}

/**
 * @public
 */
export interface ListJobsOutput {
  /**
   * The list of asynchronous jobs.
   *
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotifyCodeConfigurationsInput {
  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNotifyCodeConfigurationsOutput {
  /**
   * The list of notify code configurations.
   *
   * @public
   */
  notifyCodeConfigurations: NotifyCodeConfiguration[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRegistrationsFromBrandProfileInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a registration that is associated with a brand profile.
 *
 * @public
 */
export interface RegistrationAssociationSummary {
  /**
   * The identifier of the registration.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * The type of the registration, for example US_TOLL_FREE_REGISTRATION or SENDER_ID.
   *
   * @public
   */
  registrationType: string | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Specifies whether smart matching was used to create the association.
   *
   * @public
   */
  smartMatchUsed: boolean | undefined;
}

/**
 * @public
 */
export interface ListRegistrationsFromBrandProfileOutput {
  /**
   * The list of registrations that are associated with the brand profile.
   *
   * @public
   */
  registrationAssociations: RegistrationAssociationSummary[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is returned when more results are available, and is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * An array of key and value pair tags that are associated with the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface SendNotifyCodeVerificationInput {
  /**
   * The channel used to deliver the one-time passcode to the recipient.
   *
   * @public
   */
  channel: NotifyChannel | undefined;

  /**
   * The recipient identifier. For the TEXT and VOICE channels, specify an E.164 phone number. For the WhatsApp channel, specify a WhatsApp address.
   *
   * @public
   */
  destinationIdentity: string | undefined;

  /**
   * The identity used to send the message, such as a phone number, sender ID, or pool that is owned by your account.
   *
   * @public
   */
  originationIdentity: string | undefined;

  /**
   * The identifier or Amazon Resource Name (ARN) of the notify code configuration that supplies the passcode policy and template defaults. When you do not specify a configuration, you must supply the template in the request.
   *
   * @public
   */
  notifyCodeConfiguration?: string | undefined;

  /**
   * The channel-specific parameters used to render and deliver the one-time passcode for this request. The route that is derived from the channel and the origination identity selects the matching channel. When you do not specify channel parameters, the service uses the parameters from the referenced notify code configuration.
   *
   * @public
   */
  overrideChannelParameters?: ChannelParameters | undefined;

  /**
   * The per-send overrides for the passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. These values override the values from the referenced notify code configuration. When you do not specify a value, the value from the configuration is used, and if neither is set, the service default applies.
   *
   * @public
   */
  overrideCodeConfigurationParameters?: CodeConfigurationParameters | undefined;

  /**
   * The name of the configuration set used to control how delivery events for the message are handled.
   *
   * @public
   */
  configurationSetName?: string | undefined;

  /**
   * A map of custom key and value pairs that are propagated to the delivery events for this verification.
   *
   * @public
   */
  context?: Record<string, string> | undefined;

  /**
   * A caller-supplied reference identifier that binds a send request to a later validate request. Specify the same value in both requests.
   *
   * @public
   */
  referenceId?: string | undefined;
}

/**
 * @public
 */
export interface SendNotifyCodeVerificationOutput {
  /**
   * The service-generated identifier for the verification.
   *
   * @public
   */
  verificationId: string | undefined;

  /**
   * The service-generated identifier for the message that delivers the one-time passcode.
   *
   * @public
   */
  messageId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An array of key and value pair tags that are associated with the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
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
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName?: string | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileOutput {
  /**
   * The unique identifier of the brand profile.
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the brand profile.
   *
   * @public
   */
  brandProfileArn: string | undefined;

  /**
   * The name of the brand profile. The name can contain alphanumeric characters, underscores, hyphens, and spaces.
   *
   * @public
   */
  brandProfileName: string | undefined;

  /**
   * The current lifecycle status of the brand profile.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileAttributeInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The text value of the attribute. This value applies to attributes of type TEXT.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * The binary content for an attribute of type IMAGE or DOCUMENT. The content is base64-encoded when it is sent over the wire.
   *
   * @public
   */
  attachmentBody?: Uint8Array | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category of the attribute.
   *
   * @public
   */
  category?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileAttributeOutput {
  /**
   * The name of the brand profile attribute. The name is unique within a brand profile.
   *
   * @public
   */
  attributeName: string | undefined;

  /**
   * The type of the attribute. TEXT stores an inline value. IMAGE and DOCUMENT store binary media that you upload.
   *
   * @public
   */
  attributeType: BrandProfileAttributeType | undefined;

  /**
   * The text value of the attribute. This value applies to attributes of type TEXT.
   *
   * @public
   */
  attributeValue?: string | undefined;

  /**
   * A description of the attribute.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The category of the attribute.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * The MIME content type of the attribute media.
   *
   * @public
   */
  mediaContentType?: string | undefined;

  /**
   * The size of the attribute media, in bytes.
   *
   * @public
   */
  mediaSizeBytes?: number | undefined;

  /**
   * The time when the resource was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time when the resource was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileFromRegistrationInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The identifier or Amazon Resource Name (ARN) of the registration to import attributes from.
   *
   * @public
   */
  registrationId: string | undefined;

  /**
   * Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.
   *
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * Specifies how the service resolves an attribute that already exists. REPLACE overwrites the existing value with the incoming value. PRESERVE keeps the existing value.
   *
   * @public
   */
  onAttributeConflict?: OnAttributeConflict | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrandProfileFromRegistrationOutput {
  /**
   * The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.
   *
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * The updated delivery parameters for the preapproved notify-template route. Absent members preserve the current value, and the empty sentinel on a member clears it.
 *
 * @public
 */
export interface UpdateNotifyParameters {
  /**
   * The updated identifier of a preapproved notify template for the SMS or voice channels. An empty string clears the previously stored value.
   *
   * @public
   */
  notifyTemplateId?: string | undefined;

  /**
   * The updated Amazon Polly voice ID. An empty string clears the previously stored value.
   *
   * @public
   */
  voiceId?: string | undefined;
}

/**
 * The updated delivery parameters for the text channel. Absent members preserve the current value, and the empty sentinel on a member clears it.
 *
 * @public
 */
export interface UpdateTextParameters {
  /**
   * The updated freeform SMS or RCS template body. An empty string clears the previously stored value.
   *
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * The updated map of country-specific parameters that control one-time passcode delivery. An empty map clears the previously stored value.
   *
   * @public
   */
  destinationCountryParameters?: Record<string, string> | undefined;
}

/**
 * The updated delivery parameters for the voice channel. Absent members preserve the current value, and the empty sentinel on a member clears it.
 *
 * @public
 */
export interface UpdateVoiceParameters {
  /**
   * The updated freeform voice template body. An empty string clears the previously stored value.
   *
   * @public
   */
  inlineTemplateBody?: string | undefined;

  /**
   * The updated BCP 47 language code. An empty string clears the previously stored value.
   *
   * @public
   */
  languageCode?: string | undefined;

  /**
   * The updated Amazon Polly voice ID. An empty string clears the previously stored value.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * The updated format of the voice message body. Valid values are TEXT and SSML. Omit this member to preserve the current value.
   *
   * @public
   */
  voiceMessageBodyTextType?: VoiceMessageBodyTextType | undefined;
}

/**
 * The updated delivery parameters for the WhatsApp channel. Absent members preserve the current value, and the empty sentinel on a member clears it.
 *
 * @public
 */
export interface UpdateWhatsAppParameters {
  /**
   * The updated name of the Meta-approved WhatsApp authentication template. An empty string clears the previously stored value.
   *
   * @public
   */
  whatsAppTemplateName?: string | undefined;

  /**
   * The updated BCP 47 language code. An empty string clears the previously stored value.
   *
   * @public
   */
  languageCode?: string | undefined;
}

/**
 * The updated channel-specific parameters used only when you update a notify code configuration. When you omit a channel, that channel's parameters remain unchanged. When you supply a channel, you can clear individual fields by using the empty-string or empty-map sentinel on a member, or drop the whole channel's parameters by clearing every member. These sentinels apply only when you update a configuration; a create request rejects empty values with a validation error.
 *
 * @public
 */
export interface UpdateChannelParameters {
  /**
   * The text-channel parameters to update. Omit this member to leave the text-channel parameters unchanged.
   *
   * @public
   */
  text?: UpdateTextParameters | undefined;

  /**
   * The voice-channel parameters to update. Omit this member to leave the voice-channel parameters unchanged.
   *
   * @public
   */
  voice?: UpdateVoiceParameters | undefined;

  /**
   * The notify-template-route parameters to update. Omit this member to leave them unchanged.
   *
   * @public
   */
  notify?: UpdateNotifyParameters | undefined;

  /**
   * The WhatsApp-channel parameters to update. Omit this member to leave the WhatsApp-channel parameters unchanged.
   *
   * @public
   */
  whatsApp?: UpdateWhatsAppParameters | undefined;
}

/**
 * The loose variant of the passcode policy parameters that is used only when you update a notify code configuration. When you omit a member, its current value is preserved.
 *
 * @public
 */
export interface UpdateCodeConfigurationParameters {
  /**
   * The updated character set used to generate the one-time passcode. Omit this member to preserve the current value.
   *
   * @public
   */
  codeType?: CodeType | undefined;

  /**
   * The updated number of characters in the one-time passcode. Valid values range from 4 through 8. Omit this member to preserve the current value.
   *
   * @public
   */
  codeLength?: number | undefined;

  /**
   * The updated length of time, in minutes, that the one-time passcode remains valid. Valid values range from 1 through 60. Omit this member to preserve the current value.
   *
   * @public
   */
  validityPeriodMinutes?: number | undefined;

  /**
   * The updated maximum number of validation attempts that are allowed before the verification is locked. Valid values range from 1 through 5. Omit this member to preserve the current value.
   *
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyCodeConfigurationInput {
  /**
   * The unique identifier of the notify code configuration. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  notifyCodeConfigurationId: string | undefined;

  /**
   * The name of the notify code configuration.
   *
   * @public
   */
  notifyCodeConfigurationName?: string | undefined;

  /**
   * The updated passcode policy parameters, including the code type, length, validity period, and maximum number of attempts. When you omit a member, its current value is preserved.
   *
   * @public
   */
  codeConfigurationParameters?: UpdateCodeConfigurationParameters | undefined;

  /**
   * The updated channel-specific parameters used to render and deliver the one-time passcode. This is a loose, nested update: when you omit a channel, that channel's parameters remain unchanged. Within a supplied channel, an empty string on a string member, or an empty map on the destination-country parameters, clears the currently stored value, and absent members preserve the current value.
   *
   * @public
   */
  channelParameters?: UpdateChannelParameters | undefined;

  /**
   * Specifies whether deletion protection is enabled. When enabled, the resource cannot be deleted until deletion protection is turned off.
   *
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateNotifyCodeConfigurationOutput {
  /**
   * The notify code configuration resource.
   *
   * @public
   */
  notifyCodeConfiguration: NotifyCodeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistrationsFromBrandProfileInput {
  /**
   * The unique identifier of the brand profile. You can specify either the bare ID or the full Amazon Resource Name (ARN).
   *
   * @public
   */
  brandProfileId: string | undefined;

  /**
   * The identifiers of the registrations.
   *
   * @public
   */
  registrationIds: string[] | undefined;

  /**
   * Specifies whether to use semantic field mapping between brand profile attributes and registration fields. The default is true. When false, the service maps fields using a fixed set of standard field types.
   *
   * @public
   */
  smartMatch?: boolean | undefined;

  /**
   * Specifies how the service resolves an attribute that already exists. REPLACE overwrites the existing value with the incoming value. PRESERVE keeps the existing value.
   *
   * @public
   */
  onAttributeConflict?: OnAttributeConflict | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you do not specify a client token, the AWS SDK automatically generates one.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistrationsFromBrandProfileOutput {
  /**
   * The results of the operation. Each result pairs a requested item with the asynchronous job that processes it.
   *
   * @public
   */
  results: JobResult[] | undefined;
}

/**
 * @public
 */
export interface ValidateNotifyCodeVerificationInput {
  /**
   * The recipient identifier. For the TEXT and VOICE channels, specify an E.164 phone number. For the WhatsApp channel, specify a WhatsApp address.
   *
   * @public
   */
  destinationIdentity: string | undefined;

  /**
   * The caller-supplied reference identifier used to locate the verification. This value must match the value that you supplied to the SendNotifyCodeVerification operation.
   *
   * @public
   */
  referenceId?: string | undefined;

  /**
   * The one-time passcode that the recipient submitted for validation.
   *
   * @public
   */
  code: string | undefined;
}

/**
 * @public
 */
export interface ValidateNotifyCodeVerificationOutput {
  /**
   * The outcome of the validation attempt. VALID indicates that the submitted passcode matched an active verification. INVALID indicates that the passcode did not match, expired, or exceeded its attempt limit.
   *
   * @public
   */
  status: VerificationStatus | undefined;
}
