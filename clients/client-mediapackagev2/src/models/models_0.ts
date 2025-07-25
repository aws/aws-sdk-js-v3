// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaPackageV2ServiceException as __BaseException } from "./MediaPackageV2ServiceException";

/**
 * <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least
 *          one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception
 *          if MediaPackage receives a throttling error from Secrets Manager.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const AdMarkerDash = {
  BINARY: "BINARY",
  XML: "XML",
} as const;

/**
 * @public
 */
export type AdMarkerDash = (typeof AdMarkerDash)[keyof typeof AdMarkerDash];

/**
 * @public
 * @enum
 */
export const AdMarkerHls = {
  DATERANGE: "DATERANGE",
} as const;

/**
 * @public
 */
export type AdMarkerHls = (typeof AdMarkerHls)[keyof typeof AdMarkerHls];

/**
 * @public
 */
export interface CancelHarvestJobRequest {
  /**
   * <p>The name of the channel group containing the channel from which the harvest job is running.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel from which the harvest job is running.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint that the harvest job is harvesting from. This cannot be changed after the harvest job is submitted.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The name of the harvest job to cancel. This name must be unique within the channel and cannot be changed after the harvest job is submitted.</p>
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with the harvest job. Used for concurrency control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface CancelHarvestJobResponse {}

/**
 * @public
 * @enum
 */
export const ConflictExceptionType = {
  CONFLICTING_OPERATION: "CONFLICTING_OPERATION",
  IDEMPOTENT_PARAMETER_MISMATCH: "IDEMPOTENT_PARAMETER_MISMATCH",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_IN_USE: "RESOURCE_IN_USE",
} as const;

/**
 * @public
 */
export type ConflictExceptionType = (typeof ConflictExceptionType)[keyof typeof ConflictExceptionType];

/**
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of ConflictException.</p>
   * @public
   */
  ConflictExceptionType?: ConflictExceptionType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.ConflictExceptionType = opts.ConflictExceptionType;
  }
}

/**
 * <p>Indicates that an error from the service occurred while trying to process a request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceTypeNotFound = {
  CHANNEL: "CHANNEL",
  CHANNEL_GROUP: "CHANNEL_GROUP",
  HARVEST_JOB: "HARVEST_JOB",
  ORIGIN_ENDPOINT: "ORIGIN_ENDPOINT",
} as const;

/**
 * @public
 */
export type ResourceTypeNotFound = (typeof ResourceTypeNotFound)[keyof typeof ResourceTypeNotFound];

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The specified resource type wasn't found.</p>
   * @public
   */
  ResourceTypeNotFound?: ResourceTypeNotFound | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceTypeNotFound = opts.ResourceTypeNotFound;
  }
}

/**
 * <p>The request throughput limit was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionType = {
  BATCH_GET_SECRET_VALUE_DENIED: "BATCH_GET_SECRET_VALUE_DENIED",
  CENC_IV_INCOMPATIBLE: "CENC_IV_INCOMPATIBLE",
  CLIP_START_TIME_WITH_START_OR_END: "CLIP_START_TIME_WITH_START_OR_END",
  CMAF_CONTAINER_TYPE_WITH_MSS_MANIFEST: "CMAF_CONTAINER_TYPE_WITH_MSS_MANIFEST",
  CMAF_EXCLUDE_SEGMENT_DRM_METADATA_INCOMPATIBLE_CONTAINER_TYPE:
    "CMAF_EXCLUDE_SEGMENT_DRM_METADATA_INCOMPATIBLE_CONTAINER_TYPE",
  CONTAINER_TYPE_IMMUTABLE: "CONTAINER_TYPE_IMMUTABLE",
  DASH_DVB_ATTRIBUTES_WITHOUT_DVB_DASH_PROFILE: "DASH_DVB_ATTRIBUTES_WITHOUT_DVB_DASH_PROFILE",
  DECRYPT_SECRET_FAILED: "DECRYPT_SECRET_FAILED",
  DESCRIBE_SECRET_DENIED: "DESCRIBE_SECRET_DENIED",
  DIRECT_MODE_WITH_TIMING_SOURCE: "DIRECT_MODE_WITH_TIMING_SOURCE",
  DRM_SIGNALING_MISMATCH_SEGMENT_ENCRYPTION_STATUS: "DRM_SIGNALING_MISMATCH_SEGMENT_ENCRYPTION_STATUS",
  DRM_SYSTEMS_ENCRYPTION_METHOD_INCOMPATIBLE: "DRM_SYSTEMS_ENCRYPTION_METHOD_INCOMPATIBLE",
  DUPLICATED_SECRET: "DUPLICATED_SECRET",
  ENCRYPTION_CONTRACT_SHARED: "ENCRYPTION_CONTRACT_SHARED",
  ENCRYPTION_CONTRACT_UNENCRYPTED: "ENCRYPTION_CONTRACT_UNENCRYPTED",
  ENCRYPTION_CONTRACT_WITHOUT_AUDIO_RENDITION_INCOMPATIBLE: "ENCRYPTION_CONTRACT_WITHOUT_AUDIO_RENDITION_INCOMPATIBLE",
  ENCRYPTION_CONTRACT_WITH_ISM_CONTAINER_INCOMPATIBLE: "ENCRYPTION_CONTRACT_WITH_ISM_CONTAINER_INCOMPATIBLE",
  ENCRYPTION_METHOD_CONTAINER_TYPE_MISMATCH: "ENCRYPTION_METHOD_CONTAINER_TYPE_MISMATCH",
  END_TIME_EARLIER_THAN_START_TIME: "END_TIME_EARLIER_THAN_START_TIME",
  GET_SECRET_VALUE_DENIED: "GET_SECRET_VALUE_DENIED",
  HARVESTED_MANIFEST_HAS_START_END_FILTER_CONFIGURATION: "HARVESTED_MANIFEST_HAS_START_END_FILTER_CONFIGURATION",
  HARVESTED_MANIFEST_NOT_FOUND_ON_ENDPOINT: "HARVESTED_MANIFEST_NOT_FOUND_ON_ENDPOINT",
  HARVEST_JOB_CUSTOMER_ENDPOINT_READ_ACCESS_DENIED: "HARVEST_JOB_CUSTOMER_ENDPOINT_READ_ACCESS_DENIED",
  HARVEST_JOB_INELIGIBLE_FOR_CANCELLATION: "HARVEST_JOB_INELIGIBLE_FOR_CANCELLATION",
  HARVEST_JOB_S3_DESTINATION_MISSING_OR_INCOMPLETE: "HARVEST_JOB_S3_DESTINATION_MISSING_OR_INCOMPLETE",
  HARVEST_JOB_UNABLE_TO_WRITE_TO_S3_DESTINATION: "HARVEST_JOB_UNABLE_TO_WRITE_TO_S3_DESTINATION",
  INCOMPATIBLE_DASH_COMPACTNESS_CONFIGURATION: "INCOMPATIBLE_DASH_COMPACTNESS_CONFIGURATION",
  INCOMPATIBLE_DASH_PROFILE_DVB_DASH_CONFIGURATION: "INCOMPATIBLE_DASH_PROFILE_DVB_DASH_CONFIGURATION",
  INCOMPATIBLE_XML_ENCODING: "INCOMPATIBLE_XML_ENCODING",
  INVALID_HARVEST_JOB_DURATION: "INVALID_HARVEST_JOB_DURATION",
  INVALID_MANIFEST_FILTER: "INVALID_MANIFEST_FILTER",
  INVALID_PAGINATION_MAX_RESULTS: "INVALID_PAGINATION_MAX_RESULTS",
  INVALID_PAGINATION_TOKEN: "INVALID_PAGINATION_TOKEN",
  INVALID_POLICY: "INVALID_POLICY",
  INVALID_ROLE_ARN: "INVALID_ROLE_ARN",
  INVALID_SECRET: "INVALID_SECRET",
  INVALID_SECRET_FORMAT: "INVALID_SECRET_FORMAT",
  INVALID_SECRET_KEY: "INVALID_SECRET_KEY",
  INVALID_SECRET_VALUE: "INVALID_SECRET_VALUE",
  INVALID_TIME_DELAY_SECONDS: "INVALID_TIME_DELAY_SECONDS",
  ISM_CONTAINER_TYPE_WITH_DASH_MANIFEST: "ISM_CONTAINER_TYPE_WITH_DASH_MANIFEST",
  ISM_CONTAINER_TYPE_WITH_HLS_MANIFEST: "ISM_CONTAINER_TYPE_WITH_HLS_MANIFEST",
  ISM_CONTAINER_TYPE_WITH_LL_HLS_MANIFEST: "ISM_CONTAINER_TYPE_WITH_LL_HLS_MANIFEST",
  ISM_CONTAINER_TYPE_WITH_SCTE: "ISM_CONTAINER_TYPE_WITH_SCTE",
  ISM_CONTAINER_WITH_KEY_ROTATION: "ISM_CONTAINER_WITH_KEY_ROTATION",
  MALFORMED_SECRET_ARN: "MALFORMED_SECRET_ARN",
  MANIFEST_DRM_SYSTEMS_INCOMPATIBLE: "MANIFEST_DRM_SYSTEMS_INCOMPATIBLE",
  MANIFEST_NAME_COLLISION: "MANIFEST_NAME_COLLISION",
  MEMBER_DOES_NOT_MATCH_PATTERN: "MEMBER_DOES_NOT_MATCH_PATTERN",
  MEMBER_INVALID: "MEMBER_INVALID",
  MEMBER_INVALID_ENUM_VALUE: "MEMBER_INVALID_ENUM_VALUE",
  MEMBER_MAX_LENGTH: "MEMBER_MAX_LENGTH",
  MEMBER_MAX_VALUE: "MEMBER_MAX_VALUE",
  MEMBER_MIN_LENGTH: "MEMBER_MIN_LENGTH",
  MEMBER_MIN_VALUE: "MEMBER_MIN_VALUE",
  MEMBER_MISSING: "MEMBER_MISSING",
  NONE_MODE_WITH_TIMING_SOURCE: "NONE_MODE_WITH_TIMING_SOURCE",
  NUM_MANIFESTS_HIGH: "NUM_MANIFESTS_HIGH",
  NUM_MANIFESTS_LOW: "NUM_MANIFESTS_LOW",
  ONLY_CMAF_INPUT_TYPE_ALLOW_FORCE_ENDPOINT_ERROR_CONFIGURATION:
    "ONLY_CMAF_INPUT_TYPE_ALLOW_FORCE_ENDPOINT_ERROR_CONFIGURATION",
  ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_INPUT_SWITCHING: "ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_INPUT_SWITCHING",
  ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_OUTPUT_CONFIGURATION: "ONLY_CMAF_INPUT_TYPE_ALLOW_MQCS_OUTPUT_CONFIGURATION",
  ONLY_CMAF_INPUT_TYPE_ALLOW_PREFERRED_INPUT_CONFIGURATION: "ONLY_CMAF_INPUT_TYPE_ALLOW_PREFERRED_INPUT_CONFIGURATION",
  PERIOD_TRIGGERS_NONE_SPECIFIED_WITH_ADDITIONAL_VALUES: "PERIOD_TRIGGERS_NONE_SPECIFIED_WITH_ADDITIONAL_VALUES",
  ROLE_ARN_INVALID_FORMAT: "ROLE_ARN_INVALID_FORMAT",
  ROLE_ARN_LENGTH_OUT_OF_RANGE: "ROLE_ARN_LENGTH_OUT_OF_RANGE",
  ROLE_ARN_NOT_ASSUMABLE: "ROLE_ARN_NOT_ASSUMABLE",
  SECRET_ARN_RESOURCE_NOT_FOUND: "SECRET_ARN_RESOURCE_NOT_FOUND",
  SECRET_FROM_DIFFERENT_ACCOUNT: "SECRET_FROM_DIFFERENT_ACCOUNT",
  SECRET_FROM_DIFFERENT_REGION: "SECRET_FROM_DIFFERENT_REGION",
  SECRET_IS_NOT_ONE_KEY_VALUE_PAIR: "SECRET_IS_NOT_ONE_KEY_VALUE_PAIR",
  SOURCE_DISRUPTIONS_ENABLED_INCORRECTLY: "SOURCE_DISRUPTIONS_ENABLED_INCORRECTLY",
  START_TAG_TIME_OFFSET_INVALID: "START_TAG_TIME_OFFSET_INVALID",
  TIMING_SOURCE_MISSING: "TIMING_SOURCE_MISSING",
  TOO_MANY_IN_PROGRESS_HARVEST_JOBS: "TOO_MANY_IN_PROGRESS_HARVEST_JOBS",
  TOO_MANY_SECRETS: "TOO_MANY_SECRETS",
  TS_CONTAINER_TYPE_WITH_DASH_MANIFEST: "TS_CONTAINER_TYPE_WITH_DASH_MANIFEST",
  TS_CONTAINER_TYPE_WITH_MSS_MANIFEST: "TS_CONTAINER_TYPE_WITH_MSS_MANIFEST",
  UPDATE_PERIOD_SMALLER_THAN_SEGMENT_DURATION: "UPDATE_PERIOD_SMALLER_THAN_SEGMENT_DURATION",
  URL_INVALID: "URL_INVALID",
  URL_LINK_LOCAL_ADDRESS: "URL_LINK_LOCAL_ADDRESS",
  URL_LOCAL_ADDRESS: "URL_LOCAL_ADDRESS",
  URL_LOOPBACK_ADDRESS: "URL_LOOPBACK_ADDRESS",
  URL_MULTICAST_ADDRESS: "URL_MULTICAST_ADDRESS",
  URL_PORT: "URL_PORT",
  URL_SCHEME: "URL_SCHEME",
  URL_UNKNOWN_HOST: "URL_UNKNOWN_HOST",
  URL_USER_INFO: "URL_USER_INFO",
} as const;

/**
 * @public
 */
export type ValidationExceptionType = (typeof ValidationExceptionType)[keyof typeof ValidationExceptionType];

/**
 * <p>The input failed to meet the constraints specified by the AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of ValidationException.</p>
   * @public
   */
  ValidationExceptionType?: ValidationExceptionType | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.ValidationExceptionType = opts.ValidationExceptionType;
  }
}

/**
 * <p>The settings to enable CDN authorization headers in MediaPackage.</p>
 * @public
 */
export interface CdnAuthConfiguration {
  /**
   * <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>
   * @public
   */
  CdnIdentifierSecretArns: string[] | undefined;

  /**
   * <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>
   * @public
   */
  SecretsRoleArn: string | undefined;
}

/**
 * <p>The configuration of the channel group.</p>
 * @public
 */
export interface ChannelGroupListConfiguration {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel group for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyResponse {}

/**
 * @public
 */
export interface GetChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelPolicyResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The policy assigned to the channel.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The policy to attach to the specified channel.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyResponse {}

/**
 * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>
 * @public
 */
export interface InputSwitchConfiguration {
  /**
   * <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is true. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  MQCSInputSwitching?: boolean | undefined;

  /**
   * <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>
   * @public
   */
  PreferredInput?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const InputType = {
  CMAF: "CMAF",
  HLS: "HLS",
} as const;

/**
 * @public
 */
export type InputType = (typeof InputType)[keyof typeof InputType];

/**
 * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>
 * @public
 */
export interface OutputHeaderConfiguration {
  /**
   * <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  PublishMQCS?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior.</p>
   *          <p>The allowed values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HLS</code> - The HLS streaming specification (which defines M3U8 manifests and TS segments).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CMAF</code> - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * <p>Enter any descriptive text that helps you to identify the channel.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The ingest domain URL where the source stream should be sent.</p>
 * @public
 */
export interface IngestEndpoint {
  /**
   * <p>The system-generated unique identifier for the IngestEndpoint.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ingest domain URL where the source stream should be sent.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of ingest endpoints.</p>
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * <p>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior.</p>
   *          <p>The allowed values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HLS</code> - The HLS streaming specification (which defines M3U8 manifests and TS segments).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CMAF</code> - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelResponse {}

/**
 * @public
 */
export interface GetChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The time that the channel was last reset.</p>
   * @public
   */
  ResetAt?: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of ingest endpoints.</p>
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * <p>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior.</p>
   *          <p>The allowed values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HLS</code> - The HLS streaming specification (which defines M3U8 manifests and TS segments).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CMAF</code> - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The configuration of the channel.</p>
 * @public
 */
export interface ChannelListConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior.</p>
   *          <p>The allowed values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HLS</code> - The HLS streaming specification (which defines M3U8 manifests and TS segments).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CMAF</code> - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>The objects being returned.</p>
   * @public
   */
  Items?: ChannelListConfiguration[] | undefined;

  /**
   * <p>The pagination token from the GET list request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContainerType = {
  CMAF: "CMAF",
  ISM: "ISM",
  TS: "TS",
} as const;

/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * <p>The base URLs to use for retrieving segments. You can specify multiple locations and indicate the priority and weight for when each should be used, for use in mutli-CDN workflows.</p>
 * @public
 */
export interface DashBaseUrl {
  /**
   * <p>A source location for segments.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The name of the source location.</p>
   * @public
   */
  ServiceLocation?: string | undefined;

  /**
   * <p>For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.</p>
   * @public
   */
  DvbPriority?: number | undefined;

  /**
   * <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>
   * @public
   */
  DvbWeight?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DashCompactness = {
  NONE: "NONE",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type DashCompactness = (typeof DashCompactness)[keyof typeof DashCompactness];

/**
 * @public
 * @enum
 */
export const DashDrmSignaling = {
  INDIVIDUAL: "INDIVIDUAL",
  REFERENCED: "REFERENCED",
} as const;

/**
 * @public
 */
export type DashDrmSignaling = (typeof DashDrmSignaling)[keyof typeof DashDrmSignaling];

/**
 * <p>For use with DVB-DASH profiles only. The settings for error reporting from the playback device that you want Elemental MediaPackage to pass through to the manifest.</p>
 * @public
 */
export interface DashDvbMetricsReporting {
  /**
   * <p>The URL where playback devices send error reports.</p>
   * @public
   */
  ReportingUrl: string | undefined;

  /**
   * <p>The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.</p>
   * @public
   */
  Probability?: number | undefined;
}

/**
 * <p>For use with DVB-DASH profiles only. The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>
 * @public
 */
export interface DashDvbFontDownload {
  /**
   * <p>The URL for downloading fonts for subtitles.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The <code>mimeType</code> of the resource that's at the font download URL.</p>
   *          <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>
   * @public
   */
  MimeType?: string | undefined;

  /**
   * <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>
   * @public
   */
  FontFamily?: string | undefined;
}

/**
 * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
 * @public
 */
export interface DashDvbSettings {
  /**
   * <p>Subtitle font settings.</p>
   * @public
   */
  FontDownload?: DashDvbFontDownload | undefined;

  /**
   * <p>Playback device error reporting settings.</p>
   * @public
   */
  ErrorMetrics?: DashDvbMetricsReporting[] | undefined;
}

/**
 * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
 * @public
 */
export interface FilterConfiguration {
  /**
   * <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
   * @public
   */
  ManifestFilter?: string | undefined;

  /**
   * <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
   * @public
   */
  Start?: Date | undefined;

  /**
   * <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
   * @public
   */
  End?: Date | undefined;

  /**
   * <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>
   * @public
   */
  TimeDelaySeconds?: number | undefined;

  /**
   * <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
   * @public
   */
  ClipStartTime?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DashPeriodTrigger = {
  AVAILS: "AVAILS",
  DRM_KEY_ROTATION: "DRM_KEY_ROTATION",
  NONE: "NONE",
  SOURCE_CHANGES: "SOURCE_CHANGES",
  SOURCE_DISRUPTIONS: "SOURCE_DISRUPTIONS",
} as const;

/**
 * @public
 */
export type DashPeriodTrigger = (typeof DashPeriodTrigger)[keyof typeof DashPeriodTrigger];

/**
 * @public
 * @enum
 */
export const DashProfile = {
  DVB_DASH: "DVB_DASH",
} as const;

/**
 * @public
 */
export type DashProfile = (typeof DashProfile)[keyof typeof DashProfile];

/**
 * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
 * @public
 */
export interface DashProgramInformation {
  /**
   * <p>The title for the manifest.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Information about the content provider.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>A copyright statement about the content.</p>
   * @public
   */
  Copyright?: string | undefined;

  /**
   * <p>The language code for this manifest.</p>
   * @public
   */
  LanguageCode?: string | undefined;

  /**
   * <p>An absolute URL that contains more information about this content.</p>
   * @public
   */
  MoreInformationUrl?: string | undefined;
}

/**
 * <p>The SCTE configuration.</p>
 * @public
 */
export interface ScteDash {
  /**
   * <p>Choose how ad markers are included in the packaged content. If you include ad markers in the content stream in your upstream encoders, then you need to inform MediaPackage what to do with the ad markers in the output.</p>
   *          <p>Value description:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Binary</code> - The SCTE-35 marker is expressed as a hex-string (Base64 string) rather than full XML.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XML</code> - The SCTE marker is expressed fully in XML.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdMarkerDash?: AdMarkerDash | undefined;
}

/**
 * @public
 * @enum
 */
export const DashSegmentTemplateFormat = {
  NUMBER_WITH_TIMELINE: "NUMBER_WITH_TIMELINE",
} as const;

/**
 * @public
 */
export type DashSegmentTemplateFormat = (typeof DashSegmentTemplateFormat)[keyof typeof DashSegmentTemplateFormat];

/**
 * @public
 * @enum
 */
export const DashTtmlProfile = {
  EBU_TT_D_101: "EBU_TT_D_101",
  IMSC_1: "IMSC_1",
} as const;

/**
 * @public
 */
export type DashTtmlProfile = (typeof DashTtmlProfile)[keyof typeof DashTtmlProfile];

/**
 * <p>The settings for TTML subtitles.</p>
 * @public
 */
export interface DashTtmlConfiguration {
  /**
   * <p>The profile that MediaPackage uses when signaling subtitles in the manifest. <code>IMSC</code> is the default profile.
   *          <code>EBU-TT-D</code> produces subtitles that are compliant with the EBU-TT-D TTML profile.
   *          MediaPackage passes through subtitle styles to the manifest. For more information about EBU-TT-D subtitles, see <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>.</p>
   * @public
   */
  TtmlProfile: DashTtmlProfile | undefined;
}

/**
 * <p>The configuration for DASH subtitles.</p>
 * @public
 */
export interface DashSubtitleConfiguration {
  /**
   * <p>Settings for TTML subtitles.</p>
   * @public
   */
  TtmlConfiguration?: DashTtmlConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const DashUtcTimingMode = {
  HTTP_HEAD: "HTTP_HEAD",
  HTTP_ISO: "HTTP_ISO",
  HTTP_XSDATE: "HTTP_XSDATE",
  UTC_DIRECT: "UTC_DIRECT",
} as const;

/**
 * @public
 */
export type DashUtcTimingMode = (typeof DashUtcTimingMode)[keyof typeof DashUtcTimingMode];

/**
 * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
 * @public
 */
export interface DashUtcTiming {
  /**
   * <p>The UTC timing mode.</p>
   * @public
   */
  TimingMode?: DashUtcTimingMode | undefined;

  /**
   * <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>
   * @public
   */
  TimingSource?: string | undefined;
}

/**
 * <p>Create a DASH manifest configuration.</p>
 * @public
 */
export interface CreateDashManifestConfiguration {
  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;

  /**
   * <p>Determines the type of variable used in the <code>media</code> URL of the <code>SegmentTemplate</code> tag in the manifest. Also specifies if segment timeline information is included in <code>SegmentTimeline</code> or <code>SegmentTemplate</code>.</p>
   *          <p>Value description:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NUMBER_WITH_TIMELINE</code> - The <code>$Number$</code> variable is used in the <code>media</code> URL. The value of this variable is the sequential number of the segment. A full <code>SegmentTimeline</code> object is presented in each <code>SegmentTemplate</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SegmentTemplateFormat?: DashSegmentTemplateFormat | undefined;

  /**
   * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Type <code>ADS</code> to indicate that AWS Elemental MediaPackage must create periods in the output manifest that correspond to SCTE-35 ad markers in the input source. Leave this value empty to indicate that the manifest is contained all in one period.
   *          For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
   * @public
   */
  PeriodTriggers?: DashPeriodTrigger[] | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteDash?: ScteDash | undefined;

  /**
   * <p>Determines how the DASH manifest signals the DRM content.</p>
   * @public
   */
  DrmSignaling?: DashDrmSignaling | undefined;

  /**
   * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
   * @public
   */
  UtcTiming?: DashUtcTiming | undefined;

  /**
   * <p>The profile that the output is compliant with.</p>
   * @public
   */
  Profiles?: DashProfile[] | undefined;

  /**
   * <p>The base URLs to use for retrieving segments.</p>
   * @public
   */
  BaseUrls?: DashBaseUrl[] | undefined;

  /**
   * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
   * @public
   */
  ProgramInformation?: DashProgramInformation | undefined;

  /**
   * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
   * @public
   */
  DvbSettings?: DashDvbSettings | undefined;

  /**
   * <p>The layout of the DASH manifest that MediaPackage produces. <code>STANDARD</code> indicates a default manifest, which is compacted. <code>NONE</code> indicates a full manifest.</p>
   *          <p>For information about compactness, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/compacted.html">DASH manifest compactness</a> in the <i>Elemental MediaPackage v2 User Guide</i>.</p>
   * @public
   */
  Compactness?: DashCompactness | undefined;

  /**
   * <p>The configuration for DASH subtitles.</p>
   * @public
   */
  SubtitleConfiguration?: DashSubtitleConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointErrorCondition = {
  INCOMPLETE_MANIFEST: "INCOMPLETE_MANIFEST",
  MISSING_DRM_KEY: "MISSING_DRM_KEY",
  SLATE_INPUT: "SLATE_INPUT",
  STALE_MANIFEST: "STALE_MANIFEST",
} as const;

/**
 * @public
 */
export type EndpointErrorCondition = (typeof EndpointErrorCondition)[keyof typeof EndpointErrorCondition];

/**
 * <p>The failover settings for the endpoint.</p>
 * @public
 */
export interface ForceEndpointErrorConfiguration {
  /**
   * <p>The failover conditions for the endpoint. The options are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EndpointErrorConditions?: EndpointErrorCondition[] | undefined;
}

/**
 * <p>The SCTE configuration.</p>
 * @public
 */
export interface ScteHls {
  /**
   * <p>Ad markers indicate when ads should be inserted during playback. If you include ad markers in the content stream in your upstream encoders, then you need to inform MediaPackage what to do with the ad markers in the output. Choose what you want MediaPackage to do with the ad markers.</p>
   *          <p>Value description: </p>
   *          <ul>
   *             <li>
   *                <p>DATERANGE - Insert EXT-X-DATERANGE tags to signal ad and program transition events in TS and CMAF manifests. If you use DATERANGE, you must set a programDateTimeIntervalSeconds value of 1 or higher. To learn more about DATERANGE, see <a href="http://docs.aws.amazon.com/mediapackage/latest/ug/scte-35-ad-marker-ext-x-daterange.html">SCTE-35 Ad Marker EXT-X-DATERANGE</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AdMarkerHls?: AdMarkerHls | undefined;
}

/**
 * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
 * @public
 */
export interface StartTag {
  /**
   * <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>
   * @public
   */
  TimeOffset: number | undefined;

  /**
   * <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
   * @public
   */
  Precise?: boolean | undefined;
}

/**
 * <p>Create an HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface CreateHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.
   *          For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;
}

/**
 * <p>Create a low-latency HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface CreateLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.
   *          For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const MssManifestLayout = {
  COMPACT: "COMPACT",
  FULL: "FULL",
} as const;

/**
 * @public
 */
export type MssManifestLayout = (typeof MssManifestLayout)[keyof typeof MssManifestLayout];

/**
 * <p>Configuration parameters for creating a Microsoft Smooth Streaming (MSS) manifest. MSS is a streaming media format developed by Microsoft that delivers adaptive bitrate streaming content to compatible players and devices.</p>
 * @public
 */
export interface CreateMssManifestConfiguration {
  /**
   * <p>A short string that's appended to the endpoint URL to create a unique path to this MSS manifest. The manifest name must be unique within the origin endpoint and can contain letters, numbers, hyphens, and underscores.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest window. This determines how much content is available in the manifest at any given time. The manifest window slides forward as new segments become available, maintaining a consistent duration of content. The minimum value is 30 seconds.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Determines the layout format of the MSS manifest. This controls how the manifest is structured and presented to client players, affecting compatibility with different MSS-compatible devices and applications.</p>
   * @public
   */
  ManifestLayout?: MssManifestLayout | undefined;
}

/**
 * @public
 * @enum
 */
export const CmafEncryptionMethod = {
  CBCS: "CBCS",
  CENC: "CENC",
} as const;

/**
 * @public
 */
export type CmafEncryptionMethod = (typeof CmafEncryptionMethod)[keyof typeof CmafEncryptionMethod];

/**
 * @public
 * @enum
 */
export const IsmEncryptionMethod = {
  CENC: "CENC",
} as const;

/**
 * @public
 */
export type IsmEncryptionMethod = (typeof IsmEncryptionMethod)[keyof typeof IsmEncryptionMethod];

/**
 * @public
 * @enum
 */
export const TsEncryptionMethod = {
  AES_128: "AES_128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type TsEncryptionMethod = (typeof TsEncryptionMethod)[keyof typeof TsEncryptionMethod];

/**
 * <p>The encryption type.</p>
 * @public
 */
export interface EncryptionMethod {
  /**
   * <p>The encryption method to use.</p>
   * @public
   */
  TsEncryptionMethod?: TsEncryptionMethod | undefined;

  /**
   * <p>The encryption method to use.</p>
   * @public
   */
  CmafEncryptionMethod?: CmafEncryptionMethod | undefined;

  /**
   * <p>The encryption method used for Microsoft Smooth Streaming (MSS) content. This specifies how the MSS segments are encrypted to protect the content during delivery to client players.</p>
   * @public
   */
  IsmEncryptionMethod?: IsmEncryptionMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const DrmSystem = {
  CLEAR_KEY_AES_128: "CLEAR_KEY_AES_128",
  FAIRPLAY: "FAIRPLAY",
  IRDETO: "IRDETO",
  PLAYREADY: "PLAYREADY",
  WIDEVINE: "WIDEVINE",
} as const;

/**
 * @public
 */
export type DrmSystem = (typeof DrmSystem)[keyof typeof DrmSystem];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Audio = {
  PRESET_AUDIO_1: "PRESET_AUDIO_1",
  PRESET_AUDIO_2: "PRESET_AUDIO_2",
  PRESET_AUDIO_3: "PRESET_AUDIO_3",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;

/**
 * @public
 */
export type PresetSpeke20Audio = (typeof PresetSpeke20Audio)[keyof typeof PresetSpeke20Audio];

/**
 * @public
 * @enum
 */
export const PresetSpeke20Video = {
  PRESET_VIDEO_1: "PRESET_VIDEO_1",
  PRESET_VIDEO_2: "PRESET_VIDEO_2",
  PRESET_VIDEO_3: "PRESET_VIDEO_3",
  PRESET_VIDEO_4: "PRESET_VIDEO_4",
  PRESET_VIDEO_5: "PRESET_VIDEO_5",
  PRESET_VIDEO_6: "PRESET_VIDEO_6",
  PRESET_VIDEO_7: "PRESET_VIDEO_7",
  PRESET_VIDEO_8: "PRESET_VIDEO_8",
  SHARED: "SHARED",
  UNENCRYPTED: "UNENCRYPTED",
} as const;

/**
 * @public
 */
export type PresetSpeke20Video = (typeof PresetSpeke20Video)[keyof typeof PresetSpeke20Video];

/**
 * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
 * @public
 */
export interface EncryptionContractConfiguration {
  /**
   * <p>A collection of audio encryption presets.</p>
   *          <p>Value description: </p>
   *          <ul>
   *             <li>
   *                <p>PRESET-AUDIO-1 - Use one content key to encrypt all of the
   *                audio tracks in your stream.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-AUDIO-2 - Use one content key to encrypt all of the
   *                stereo audio tracks and one content key to encrypt all of the multichannel
   *                audio tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-AUDIO-3 - Use one content key to encrypt all of the
   *                stereo audio tracks, one content key to encrypt all of the multichannel audio
   *                tracks with 3 to 6 channels, and one content key to encrypt all of the
   *                multichannel audio tracks with more than 6 channels.</p>
   *             </li>
   *             <li>
   *                <p>SHARED - Use the same content key for all of the audio and
   *                video tracks in your stream.</p>
   *             </li>
   *             <li>
   *                <p>UNENCRYPTED - Don't encrypt any of the audio tracks in your
   *                stream.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PresetSpeke20Audio: PresetSpeke20Audio | undefined;

  /**
   * <p>A collection of video encryption presets.</p>
   *          <p>Value description: </p>
   *          <ul>
   *             <li>
   *                <p>PRESET-VIDEO-1 - Use one content key to encrypt all of the video
   *                tracks in your stream.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-2 - Use one content key to encrypt all of the SD
   *                video tracks and one content key for all HD and higher resolutions video
   *                tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-3 - Use one content key to encrypt all of the SD
   *                video tracks, one content key for HD video tracks and one content key for all
   *                UHD video tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-4 - Use one content key to encrypt all of the SD
   *                video tracks, one content key for HD video tracks, one content key for all UHD1
   *                video tracks and one content key for all UHD2 video tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-5 - Use one content key to encrypt all of the SD
   *                video tracks, one content key for HD1 video tracks, one content key for HD2
   *                video tracks, one content key for all UHD1 video tracks and one content key for
   *                all UHD2 video tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-6 - Use one content key to encrypt all of the SD
   *                video tracks, one content key for HD1 video tracks, one content key for HD2
   *                video tracks and one content key for all UHD video tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-7 - Use one content key to encrypt all of the SD+HD1
   *                video tracks, one content key for HD2 video tracks and one content key for all
   *                UHD video tracks.</p>
   *             </li>
   *             <li>
   *                <p>PRESET-VIDEO-8 - Use one content key to encrypt all of the SD+HD1
   *                video tracks, one content key for HD2 video tracks, one content key for all
   *                UHD1 video tracks and one content key for all UHD2 video tracks.</p>
   *             </li>
   *             <li>
   *                <p>SHARED - Use the same content key for all of the video and audio
   *                tracks in your stream.</p>
   *             </li>
   *             <li>
   *                <p>UNENCRYPTED - Don't encrypt any of the video tracks in your stream.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PresetSpeke20Video: PresetSpeke20Video | undefined;
}

/**
 * <p>The parameters for the SPEKE key provider.</p>
 * @public
 */
export interface SpekeKeyProvider {
  /**
   * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
   * @public
   */
  EncryptionContractConfiguration: EncryptionContractConfiguration | undefined;

  /**
   * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p>
   *          <p>The following example shows a resource ID: <code>MovieNight20171126093045</code>
   *          </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The DRM solution provider you're using to protect your content during distribution.</p>
   * @public
   */
  DrmSystems: DrmSystem[] | undefined;

  /**
   * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p>
   *          <p>Valid format: <code>arn:aws:iam::\{accountID\}:role/\{name\}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code>
   *          </p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p>
   *          <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code>
   *          </p>
   * @public
   */
  Url: string | undefined;
}

/**
 * <p>The parameters for encrypting content.</p>
 * @public
 */
export interface Encryption {
  /**
   * <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
   * @public
   */
  ConstantInitializationVector?: string | undefined;

  /**
   * <p>The encryption method to use.</p>
   * @public
   */
  EncryptionMethod: EncryptionMethod | undefined;

  /**
   * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p>
   *          <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code>
   *          </p>
   * @public
   */
  KeyRotationIntervalSeconds?: number | undefined;

  /**
   * <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p>
   *          <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p>
   *          <p>Important considerations:</p>
   *          <ul>
   *             <li>
   *                <p>This setting only affects CMAF container formats</p>
   *             </li>
   *             <li>
   *                <p>Key rotation can still be handled through media playlist signaling</p>
   *             </li>
   *             <li>
   *                <p>PSSH and TENC boxes remain unaffected</p>
   *             </li>
   *             <li>
   *                <p>Default behavior is preserved when this setting is disabled</p>
   *             </li>
   *          </ul>
   *          <p>Valid values: <code>true</code> | <code>false</code>
   *          </p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  CmafExcludeSegmentDrmMetadata?: boolean | undefined;

  /**
   * <p>The parameters for the SPEKE key provider.</p>
   * @public
   */
  SpekeKeyProvider: SpekeKeyProvider | undefined;
}

/**
 * @public
 * @enum
 */
export const ScteFilter = {
  BREAK: "BREAK",
  DISTRIBUTOR_ADVERTISEMENT: "DISTRIBUTOR_ADVERTISEMENT",
  DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY",
  DISTRIBUTOR_PLACEMENT_OPPORTUNITY: "DISTRIBUTOR_PLACEMENT_OPPORTUNITY",
  PROGRAM: "PROGRAM",
  PROVIDER_ADVERTISEMENT: "PROVIDER_ADVERTISEMENT",
  PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY: "PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY",
  PROVIDER_PLACEMENT_OPPORTUNITY: "PROVIDER_PLACEMENT_OPPORTUNITY",
  SPLICE_INSERT: "SPLICE_INSERT",
} as const;

/**
 * @public
 */
export type ScteFilter = (typeof ScteFilter)[keyof typeof ScteFilter];

/**
 * <p>The SCTE configuration.</p>
 * @public
 */
export interface Scte {
  /**
   * <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
   * @public
   */
  ScteFilter?: ScteFilter[] | undefined;
}

/**
 * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
   * @public
   */
  SegmentDurationSeconds?: number | undefined;

  /**
   * <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
   * @public
   */
  SegmentName?: string | undefined;

  /**
   * <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>
   * @public
   */
  TsUseAudioRenditionGroup?: boolean | undefined;

  /**
   * <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
   * @public
   */
  IncludeIframeOnlyStreams?: boolean | undefined;

  /**
   * <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
   * @public
   */
  TsIncludeDvbSubtitles?: boolean | undefined;

  /**
   * <p>The SCTE configuration options in the segment settings.</p>
   * @public
   */
  Scte?: Scte | undefined;

  /**
   * <p>The parameters for encrypting content.</p>
   * @public
   */
  Encryption?: Encryption | undefined;
}

/**
 * @public
 */
export interface CreateOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint.</p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: CreateHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: CreateDashManifestConfiguration[] | undefined;

  /**
   * <p>A list of Microsoft Smooth Streaming (MSS) manifest configurations for the origin endpoint. You can configure multiple MSS manifests to provide different streaming experiences or to support different client requirements.</p>
   * @public
   */
  MssManifests?: CreateMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Retrieve the DASH manifest configuration.</p>
 * @public
 */
export interface GetDashManifestConfiguration {
  /**
   * <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
   * @public
   */
  MinUpdatePeriodSeconds?: number | undefined;

  /**
   * <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
   * @public
   */
  MinBufferTimeSeconds?: number | undefined;

  /**
   * <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
   * @public
   */
  SuggestedPresentationDelaySeconds?: number | undefined;

  /**
   * <p>Determines the type of variable used in the <code>media</code> URL of the <code>SegmentTemplate</code> tag in the manifest. Also specifies if segment timeline information is included in <code>SegmentTimeline</code> or <code>SegmentTemplate</code>.</p>
   *          <p>Value description:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NUMBER_WITH_TIMELINE</code> - The <code>$Number$</code> variable is used in the <code>media</code> URL. The value of this variable is the sequential number of the segment. A full <code>SegmentTimeline</code> object is presented in each <code>SegmentTemplate</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SegmentTemplateFormat?: DashSegmentTemplateFormat | undefined;

  /**
   * <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period.
   *          For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
   * @public
   */
  PeriodTriggers?: DashPeriodTrigger[] | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteDash?: ScteDash | undefined;

  /**
   * <p>Determines how the DASH manifest signals the DRM content.</p>
   * @public
   */
  DrmSignaling?: DashDrmSignaling | undefined;

  /**
   * <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>
   * @public
   */
  UtcTiming?: DashUtcTiming | undefined;

  /**
   * <p>The profile that the output is compliant with.</p>
   * @public
   */
  Profiles?: DashProfile[] | undefined;

  /**
   * <p>The base URL to use for retrieving segments.</p>
   * @public
   */
  BaseUrls?: DashBaseUrl[] | undefined;

  /**
   * <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>
   * @public
   */
  ProgramInformation?: DashProgramInformation | undefined;

  /**
   * <p>For endpoints that use the DVB-DASH profile only. The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>
   * @public
   */
  DvbSettings?: DashDvbSettings | undefined;

  /**
   * <p>The layout of the DASH manifest that MediaPackage produces. <code>STANDARD</code> indicates a default manifest, which is compacted. <code>NONE</code> indicates a full manifest.</p>
   * @public
   */
  Compactness?: DashCompactness | undefined;

  /**
   * <p>The configuration for DASH subtitles.</p>
   * @public
   */
  SubtitleConfiguration?: DashSubtitleConfiguration | undefined;
}

/**
 * <p>Retrieve the HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface GetHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.
   *          For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;
}

/**
 * <p>Retrieve the low-latency HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface GetLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   * @public
   */
  ProgramDateTimeIntervalSeconds?: number | undefined;

  /**
   * <p>The SCTE configuration.</p>
   * @public
   */
  ScteHls?: ScteHls | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>
   * @public
   */
  StartTag?: StartTag | undefined;

  /**
   * <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.
   *          For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>
   * @public
   */
  UrlEncodeChildManifest?: boolean | undefined;
}

/**
 * <p>Configuration details for a Microsoft Smooth Streaming (MSS) manifest associated with an origin endpoint. This includes all the settings and properties that define how the MSS content is packaged and delivered.</p>
 * @public
 */
export interface GetMssManifestConfiguration {
  /**
   * <p>The name of the MSS manifest. This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The complete URL for accessing the MSS manifest. Client players use this URL to retrieve the manifest and begin streaming the Microsoft Smooth Streaming content.</p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. </p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>The duration (in seconds) of the manifest window. This represents the total amount of content available in the manifest at any given time.</p>
   * @public
   */
  ManifestWindowSeconds?: number | undefined;

  /**
   * <p>The layout format of the MSS manifest, which determines how the manifest is structured for client compatibility.</p>
   * @public
   */
  ManifestLayout?: MssManifestLayout | undefined;
}

/**
 * @public
 */
export interface CreateOriginEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   * @public
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your origin endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;

  /**
   * <p>The Microsoft Smooth Streaming (MSS) manifest configurations that were created for this origin endpoint.</p>
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointResponse {}

/**
 * @public
 */
export interface GetOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   * @public
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The time that the origin endpoint was last reset.</p>
   * @public
   */
  ResetAt?: Date | undefined;

  /**
   * <p>The description for your origin endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;

  /**
   * <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>List the DASH manifest configuration.</p>
 * @public
 */
export interface ListDashManifestConfiguration {
  /**
   * <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>List the HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface ListHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>List the low-latency HTTP live streaming (HLS) manifest configuration.</p>
 * @public
 */
export interface ListLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   * @public
   */
  ChildManifestName?: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Summary information about a Microsoft Smooth Streaming (MSS) manifest configuration. This provides key details about the MSS manifest without including all configuration parameters.</p>
 * @public
 */
export interface ListMssManifestConfiguration {
  /**
   * <p>The name of the MSS manifest configuration.</p>
   * @public
   */
  ManifestName: string | undefined;

  /**
   * <p>The URL for accessing the MSS manifest.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>The configuration of the origin endpoint.</p>
 * @public
 */
export interface OriginEndpointListConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. </p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>Any descriptive information that you want to add to the origin endpoint for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: ListHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: ListLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: ListDashManifestConfiguration[] | undefined;

  /**
   * <p>A list of Microsoft Smooth Streaming (MSS) manifest configurations associated with the origin endpoint. Each configuration represents a different MSS streaming option available from this endpoint.</p>
   * @public
   */
  MssManifests?: ListMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;
}

/**
 * @public
 */
export interface ListOriginEndpointsResponse {
  /**
   * <p>The objects being returned.</p>
   * @public
   */
  Items?: OriginEndpointListConfiguration[] | undefined;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteOriginEndpointPolicyResponse {}

/**
 * @public
 */
export interface GetOriginEndpointPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointPolicyResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The policy assigned to the origin endpoint.</p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>The settings for using authorization headers between the MediaPackage endpoint and your CDN. </p>
   *          <p>For information about CDN authorization, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/cdn-auth.html">CDN authorization
   *             in Elemental MediaPackage</a>  in the MediaPackage user guide.</p>
   * @public
   */
  CdnAuthConfiguration?: CdnAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The policy to attach to the specified origin endpoint.</p>
   * @public
   */
  Policy: string | undefined;

  /**
   * <p>The settings for using authorization headers between the MediaPackage endpoint and your CDN. </p>
   *          <p>For information about CDN authorization, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/cdn-auth.html">CDN authorization
   *             in Elemental MediaPackage</a>  in the MediaPackage user guide. </p>
   * @public
   */
  CdnAuthConfiguration?: CdnAuthConfiguration | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyResponse {}

/**
 * @public
 */
export interface ResetOriginEndpointStateRequest {
  /**
   * <p>The name of the channel group that contains the channel with the origin endpoint that you are resetting.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel with the origin endpoint that you are resetting.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint that you are resetting.</p>
   * @public
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface ResetOriginEndpointStateResponse {
  /**
   * <p>The name of the channel group that contains the channel with the origin endpoint that you just reset.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel with the origin endpoint that you just reset.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint that you just reset.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the endpoint that you just reset.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The time that the origin endpoint was last reset.</p>
   * @public
   */
  ResetAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. </p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   * @public
   */
  Segment?: Segment | undefined;

  /**
   * <p>Any descriptive information that you want to add to the origin endpoint for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: CreateHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: CreateDashManifestConfiguration[] | undefined;

  /**
   * <p>A list of Microsoft Smooth Streaming (MSS) manifest configurations to update for the origin endpoint. This replaces the existing MSS manifest configurations.</p>
   * @public
   */
  MssManifests?: CreateMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * <p>The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOriginEndpointResponse {
  /**
   * <p>The ARN associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   * @public
   */
  ContainerType: ContainerType | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   * @public
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description of the origin endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   * @public
   */
  StartoverWindowSeconds?: number | undefined;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   * @public
   */
  HlsManifests?: GetHlsManifestConfiguration[] | undefined;

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   * @public
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[] | undefined;

  /**
   * <p>The updated Microsoft Smooth Streaming (MSS) manifest configurations for this origin endpoint.</p>
   * @public
   */
  MssManifests?: GetMssManifestConfiguration[] | undefined;

  /**
   * <p>The failover settings for the endpoint.</p>
   * @public
   */
  ForceEndpointErrorConfiguration?: ForceEndpointErrorConfiguration | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A DASH manifest configuration.</p>
   * @public
   */
  DashManifests?: GetDashManifestConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ResetChannelStateRequest {
  /**
   * <p>The name of the channel group that contains the channel that you are resetting.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel that you are resetting.</p>
   * @public
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface ResetChannelStateResponse {
  /**
   * <p>The name of the channel group that contains the channel that you just reset.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel that you just reset.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the channel that you just reset.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The time that the channel was last reset.</p>
   * @public
   */
  ResetAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of ingest endpoints.</p>
   * @public
   */
  IngestEndpoints?: IngestEndpoint[] | undefined;

  /**
   * <p>The input type will be an immutable field which will be used to define whether the channel will allow CMAF ingest or HLS ingest. If unprovided, it will default to HLS to preserve current behavior.</p>
   *          <p>The allowed values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HLS</code> - The HLS streaming specification (which defines M3U8 manifests and TS segments).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CMAF</code> - The DASH-IF CMAF Ingest specification (which defines CMAF segments with optional DASH manifests).</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputType?: InputType | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  InputSwitchConfiguration?: InputSwitchConfiguration | undefined;

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
   * @public
   */
  OutputHeaderConfiguration?: OutputHeaderConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Enter any descriptive text that helps you to identify the channel group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream should be sent. Integrate the egress domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The description for your channel group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelGroupResponse {}

/**
 * @public
 */
export interface GetChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Configuration parameters for where in an S3 bucket to place the harvested content.</p>
 * @public
 */
export interface S3DestinationConfig {
  /**
   * <p>The name of an S3 bucket within which harvested content will be exported.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>The path within the specified S3 bucket where the harvested content will be placed.</p>
   * @public
   */
  DestinationPath: string | undefined;
}

/**
 * <p>The configuration for the destination where the harvested content will be exported.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The configuration for exporting harvested content to an S3 bucket. This includes details such as the bucket name and destination path within the bucket.</p>
   * @public
   */
  S3Destination: S3DestinationConfig | undefined;
}

/**
 * <p>Information about a harvested DASH manifest.</p>
 * @public
 */
export interface HarvestedDashManifest {
  /**
   * <p>The name of the harvested DASH manifest.</p>
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * <p>Information about a harvested HLS manifest.</p>
 * @public
 */
export interface HarvestedHlsManifest {
  /**
   * <p>The name of the harvested HLS manifest.</p>
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * <p>Information about a harvested Low-Latency HLS manifest.</p>
 * @public
 */
export interface HarvestedLowLatencyHlsManifest {
  /**
   * <p>The name of the harvested Low-Latency HLS manifest.</p>
   * @public
   */
  ManifestName: string | undefined;
}

/**
 * <p>A collection of harvested manifests of different types.</p>
 * @public
 */
export interface HarvestedManifests {
  /**
   * <p>A list of harvested HLS manifests.</p>
   * @public
   */
  HlsManifests?: HarvestedHlsManifest[] | undefined;

  /**
   * <p>A list of harvested DASH manifests.</p>
   * @public
   */
  DashManifests?: HarvestedDashManifest[] | undefined;

  /**
   * <p>A list of harvested Low-Latency HLS manifests.</p>
   * @public
   */
  LowLatencyHlsManifests?: HarvestedLowLatencyHlsManifest[] | undefined;
}

/**
 * <p>Defines the schedule configuration for a harvest job.</p>
 * @public
 */
export interface HarvesterScheduleConfiguration {
  /**
   * <p>The start time for the harvest job.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time for the harvest job.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * <p>The request object for creating a new harvest job.</p>
 * @public
 */
export interface CreateHarvestJobRequest {
  /**
   * <p>The name of the channel group containing the channel from which to harvest content.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel from which to harvest content.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint from which to harvest content.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>An optional description for the harvest job.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of manifests to be harvested.</p>
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * <p>The configuration for when the harvest job should run, including start and end times.</p>
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * <p>The S3 destination where the harvested content will be placed.</p>
   * @public
   */
  Destination: Destination | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A name for the harvest job. This name must be unique within the channel.</p>
   * @public
   */
  HarvestJobName?: string | undefined;

  /**
   * <p>A collection of tags associated with the harvest job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const HarvestJobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type HarvestJobStatus = (typeof HarvestJobStatus)[keyof typeof HarvestJobStatus];

/**
 * <p>The response object returned after creating a harvest job.</p>
 * @public
 */
export interface CreateHarvestJobResponse {
  /**
   * <p>The name of the channel group containing the channel from which content is being harvested.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel from which content is being harvested.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint from which content is being harvested.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The S3 destination where the harvested content will be placed.</p>
   * @public
   */
  Destination: Destination | undefined;

  /**
   * <p>The name of the created harvest job.</p>
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * <p>A list of manifests that will be harvested.</p>
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * <p>The description of the harvest job, if provided.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for when the harvest job will run, including start and end times.</p>
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created harvest job.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time the harvest job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the harvest job was last modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The current status of the harvest job (e.g., CREATED, IN_PROGRESS, ABORTED, COMPLETED, FAILED).</p>
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * <p>An error message if the harvest job creation failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The current version of the harvest job. Used for concurrency control.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>A collection of tags associated with the harvest job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The request object for retrieving a specific harvest job.</p>
 * @public
 */
export interface GetHarvestJobRequest {
  /**
   * <p>The name of the channel group containing the channel associated with the harvest job.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel associated with the harvest job.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint associated with the harvest job.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The name of the harvest job to retrieve.</p>
   * @public
   */
  HarvestJobName: string | undefined;
}

/**
 * <p>The response object containing the details of the requested harvest job.</p>
 * @public
 */
export interface GetHarvestJobResponse {
  /**
   * <p>The name of the channel group containing the channel associated with the harvest job.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel associated with the harvest job.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint associated with the harvest job.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The S3 destination where the harvested content is being placed.</p>
   * @public
   */
  Destination: Destination | undefined;

  /**
   * <p>The name of the harvest job.</p>
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * <p>A list of manifests that are being or have been harvested.</p>
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * <p>The description of the harvest job, if provided.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for when the harvest job is scheduled to run, including start and end times.</p>
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the harvest job.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time when the harvest job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the harvest job was last modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED).</p>
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * <p>An error message if the harvest job encountered any issues.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The current version of the harvest job. Used for concurrency control.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>A collection of tags associated with the harvest job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The request object for listing harvest jobs.</p>
 * @public
 */
export interface ListHarvestJobsRequest {
  /**
   * <p>The name of the channel group to filter the harvest jobs by. If specified, only harvest jobs associated with channels in this group will be returned.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel to filter the harvest jobs by. If specified, only harvest jobs associated with this channel will be returned.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The name of the origin endpoint to filter the harvest jobs by. If specified, only harvest jobs associated with this origin endpoint will be returned.</p>
   * @public
   */
  OriginEndpointName?: string | undefined;

  /**
   * <p>The status to filter the harvest jobs by. If specified, only harvest jobs with this status will be returned.</p>
   * @public
   */
  Status?: HarvestJobStatus | undefined;

  /**
   * <p>The maximum number of harvest jobs to return in a single request. If not specified, a default value will be used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token used for pagination. Provide this value in subsequent requests to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a harvest job resource in MediaPackage v2, which is used to export content from an origin endpoint to an S3 bucket.</p>
 * @public
 */
export interface HarvestJob {
  /**
   * <p>The name of the channel group containing the channel associated with this harvest job.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name of the channel associated with this harvest job.</p>
   * @public
   */
  ChannelName: string | undefined;

  /**
   * <p>The name of the origin endpoint associated with this harvest job.</p>
   * @public
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The S3 destination where the harvested content will be placed.</p>
   * @public
   */
  Destination: Destination | undefined;

  /**
   * <p>The name of the harvest job.</p>
   * @public
   */
  HarvestJobName: string | undefined;

  /**
   * <p>A list of manifests that are being or have been harvested.</p>
   * @public
   */
  HarvestedManifests: HarvestedManifests | undefined;

  /**
   * <p>An optional description of the harvest job.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for when the harvest job is scheduled to run.</p>
   * @public
   */
  ScheduleConfiguration: HarvesterScheduleConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the harvest job.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The date and time when the harvest job was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time when the harvest job was last modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The current status of the harvest job (e.g., QUEUED, IN_PROGRESS, CANCELLED, COMPLETED, FAILED).</p>
   * @public
   */
  Status: HarvestJobStatus | undefined;

  /**
   * <p>An error message if the harvest job encountered any issues.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The current version of the harvest job. Used for concurrency control.</p>
   * @public
   */
  ETag?: string | undefined;
}

/**
 * <p>The response object containing the list of harvest jobs that match the specified criteria.</p>
 * @public
 */
export interface ListHarvestJobsResponse {
  /**
   * <p>An array of harvest job objects that match the specified criteria.</p>
   * @public
   */
  Items?: HarvestJob[] | undefined;

  /**
   * <p>A token used for pagination. Include this value in subsequent requests to retrieve the next set of results. If null, there are no more results to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelGroupsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelGroupsResponse {
  /**
   * <p>The objects being returned.</p>
   * @public
   */
  Items?: ChannelGroupListConfiguration[] | undefined;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The expected current Entity Tag (ETag) for the resource. If the specified ETag does not match the resource's current entity tag, the update request will be rejected.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel group for future identification purposes.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   * @public
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream is sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   * @public
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   * @public
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current Entity Tag (ETag) associated with this resource. The entity tag can be used to safely make concurrent updates to the resource.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the CloudWatch resource that you want to view tags for.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the MediaPackage resource that you're adding tags to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the MediaPackage resource that you're removing tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}
