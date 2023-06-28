// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaPackageV2ServiceException as __BaseException } from "./MediaPackageV2ServiceException";

/**
 * @public
 * <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
export const AdMarkerHls = {
  DATERANGE: "DATERANGE",
} as const;

/**
 * @public
 */
export type AdMarkerHls = (typeof AdMarkerHls)[keyof typeof AdMarkerHls];

/**
 * @public
 * <p>The configuration of the channel group.</p>
 */
export interface ChannelGroupListConfiguration {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel group for future identification purposes.</p>
   */
  Description?: string;
}

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
 * @public
 * <p>Updating or deleting this resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of ConflictException.</p>
   */
  ConflictExceptionType?: ConflictExceptionType | string;
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
 * @public
 */
export interface DeleteChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelPolicyResponse {}

/**
 * @public
 * <p>Indicates that an error from the service occurred while trying to process a request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * <p>The request throughput limit was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  CENC_IV_INCOMPATIBLE: "CENC_IV_INCOMPATIBLE",
  CONTAINER_TYPE_IMMUTABLE: "CONTAINER_TYPE_IMMUTABLE",
  DRM_SYSTEMS_ENCRYPTION_METHOD_INCOMPATIBLE: "DRM_SYSTEMS_ENCRYPTION_METHOD_INCOMPATIBLE",
  ENCRYPTION_CONTRACT_SHARED: "ENCRYPTION_CONTRACT_SHARED",
  ENCRYPTION_CONTRACT_UNENCRYPTED: "ENCRYPTION_CONTRACT_UNENCRYPTED",
  ENCRYPTION_CONTRACT_WITHOUT_AUDIO_RENDITION_INCOMPATIBLE: "ENCRYPTION_CONTRACT_WITHOUT_AUDIO_RENDITION_INCOMPATIBLE",
  ENCRYPTION_METHOD_CONTAINER_TYPE_MISMATCH: "ENCRYPTION_METHOD_CONTAINER_TYPE_MISMATCH",
  INVALID_PAGINATION_MAX_RESULTS: "INVALID_PAGINATION_MAX_RESULTS",
  INVALID_PAGINATION_TOKEN: "INVALID_PAGINATION_TOKEN",
  INVALID_POLICY: "INVALID_POLICY",
  INVALID_ROLE_ARN: "INVALID_ROLE_ARN",
  MANIFEST_NAME_COLLISION: "MANIFEST_NAME_COLLISION",
  MEMBER_DOES_NOT_MATCH_PATTERN: "MEMBER_DOES_NOT_MATCH_PATTERN",
  MEMBER_INVALID: "MEMBER_INVALID",
  MEMBER_INVALID_ENUM_VALUE: "MEMBER_INVALID_ENUM_VALUE",
  MEMBER_MAX_LENGTH: "MEMBER_MAX_LENGTH",
  MEMBER_MAX_VALUE: "MEMBER_MAX_VALUE",
  MEMBER_MIN_LENGTH: "MEMBER_MIN_LENGTH",
  MEMBER_MIN_VALUE: "MEMBER_MIN_VALUE",
  MEMBER_MISSING: "MEMBER_MISSING",
  NUM_MANIFESTS_HIGH: "NUM_MANIFESTS_HIGH",
  NUM_MANIFESTS_LOW: "NUM_MANIFESTS_LOW",
  ROLE_ARN_INVALID_FORMAT: "ROLE_ARN_INVALID_FORMAT",
  ROLE_ARN_LENGTH_OUT_OF_RANGE: "ROLE_ARN_LENGTH_OUT_OF_RANGE",
  ROLE_ARN_NOT_ASSUMABLE: "ROLE_ARN_NOT_ASSUMABLE",
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
 * @public
 * <p>The input failed to meet the constraints specified by the AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of ValidationException.</p>
   */
  ValidationExceptionType?: ValidationExceptionType | string;
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
 * @public
 */
export interface GetChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelPolicyResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The policy assigned to the channel.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceTypeNotFound = {
  CHANNEL: "CHANNEL",
  CHANNEL_GROUP: "CHANNEL_GROUP",
  ORIGIN_ENDPOINT: "ORIGIN_ENDPOINT",
} as const;

/**
 * @public
 */
export type ResourceTypeNotFound = (typeof ResourceTypeNotFound)[keyof typeof ResourceTypeNotFound];

/**
 * @public
 * <p>The specified resource doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The specified resource type wasn't found.</p>
   */
  ResourceTypeNotFound?: ResourceTypeNotFound | string;
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
 * @public
 */
export interface PutChannelPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The policy to attach to the specified channel.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutChannelPolicyResponse {}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. You can't change the name after you create the channel.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Enter any descriptive text that helps you to identify the channel.</p>
   */
  Description?: string;

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The ingest domain URL where the source stream should be sent.</p>
 */
export interface IngestEndpoint {
  /**
   * <p>The system-generated unique identifier for the IngestEndpoint.</p>
   */
  Id?: string;

  /**
   * <p>The ingest domain URL where the source stream should be sent.</p>
   */
  Url?: string;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   */
  Description?: string;

  /**
   * <p>The list of ingest endpoints.</p>
   */
  IngestEndpoints?: IngestEndpoint[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
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
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   */
  Description?: string;

  /**
   * <p>The list of ingest endpoints.</p>
   */
  IngestEndpoints?: IngestEndpoint[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The configuration of the channel.</p>
 */
export interface ChannelListConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel for future identification purposes.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>The objects being returned.</p>
   */
  Items?: ChannelListConfiguration[];

  /**
   * <p>The pagination token from the GET list request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ContainerType = {
  CMAF: "CMAF",
  TS: "TS",
} as const;

/**
 * @public
 */
export type ContainerType = (typeof ContainerType)[keyof typeof ContainerType];

/**
 * @public
 * <p>The SCTE configuration.</p>
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
   */
  AdMarkerHls?: AdMarkerHls | string;
}

/**
 * @public
 * <p>Create an HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface CreateHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *          ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;
}

/**
 * @public
 * <p>Create a low-latency HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface CreateLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index, with an added suffix to distinguish it from the manifest name. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *          ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;
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
export const TsEncryptionMethod = {
  AES_128: "AES_128",
  SAMPLE_AES: "SAMPLE_AES",
} as const;

/**
 * @public
 */
export type TsEncryptionMethod = (typeof TsEncryptionMethod)[keyof typeof TsEncryptionMethod];

/**
 * @public
 * <p>The encryption type.</p>
 */
export interface EncryptionMethod {
  /**
   * <p>The encryption method to use.</p>
   */
  TsEncryptionMethod?: TsEncryptionMethod | string;

  /**
   * <p>The encryption method to use.</p>
   */
  CmafEncryptionMethod?: CmafEncryptionMethod | string;
}

/**
 * @public
 * @enum
 */
export const DrmSystem = {
  CLEAR_KEY_AES_128: "CLEAR_KEY_AES_128",
  FAIRPLAY: "FAIRPLAY",
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
 * @public
 * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
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
   */
  PresetSpeke20Audio: PresetSpeke20Audio | string | undefined;

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
   */
  PresetSpeke20Video: PresetSpeke20Video | string | undefined;
}

/**
 * @public
 * <p>The parameters for the SPEKE key provider.</p>
 */
export interface SpekeKeyProvider {
  /**
   * <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>
   */
  EncryptionContractConfiguration: EncryptionContractConfiguration | undefined;

  /**
   * <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p>
   *          <p>The following example shows a resource ID: <code>MovieNight20171126093045</code>
   *          </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The DRM solution provider you're using to protect your content during distribution.</p>
   */
  DrmSystems: (DrmSystem | string)[] | undefined;

  /**
   * <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p>
   *          <p>Valid format: <code>arn:aws:iam::\{accountID\}:role/\{name\}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code>
   *          </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p>
   *          <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code>
   *          </p>
   */
  Url: string | undefined;
}

/**
 * @public
 * <p>The parameters for encrypting content.</p>
 */
export interface Encryption {
  /**
   * <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
   */
  ConstantInitializationVector?: string;

  /**
   * <p>The encryption method to use.</p>
   */
  EncryptionMethod: EncryptionMethod | undefined;

  /**
   * <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p>
   *          <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code>
   *          </p>
   */
  KeyRotationIntervalSeconds?: number;

  /**
   * <p>The parameters for the SPEKE key provider.</p>
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
 * @public
 * <p>The SCTE configuration.</p>
 */
export interface Scte {
  /**
   * <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
   */
  ScteFilter?: (ScteFilter | string)[];
}

/**
 * @public
 * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
 */
export interface Segment {
  /**
   * <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
   */
  SegmentDurationSeconds?: number;

  /**
   * <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
   */
  SegmentName?: string;

  /**
   * <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>
   */
  TsUseAudioRenditionGroup?: boolean;

  /**
   * <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
   */
  IncludeIframeOnlyStreams?: boolean;

  /**
   * <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
   */
  TsIncludeDvbSubtitles?: boolean;

  /**
   * <p>The SCTE configuration options in the segment settings.</p>
   */
  Scte?: Scte;

  /**
   * <p>The parameters for encrypting content.</p>
   */
  Encryption?: Encryption;
}

/**
 * @public
 */
export interface CreateOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and must be unique for your account in the AWS Region and channel. You can't use spaces in the name. You can't change the name after you create the endpoint.</p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container to attach to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. You can't change the container type after you create the endpoint.</p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment?: Segment;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
   */
  StartoverWindowSeconds?: number;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: CreateHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[];

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Retrieve the HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface GetHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   */
  Url: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *          ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
}

/**
 * @public
 * <p>Retrieve the low-latency HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface GetLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   */
  Url: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The total duration (in seconds) of the manifest's content.</p>
   */
  ManifestWindowSeconds?: number;

  /**
   * <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval,
   *          EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest.
   *          The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.
   *          ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
   *          <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
   */
  ProgramDateTimeIntervalSeconds?: number;

  /**
   * <p>The SCTE configuration.</p>
   */
  ScteHls?: ScteHls;
}

/**
 * @public
 */
export interface CreateOriginEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your origin endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   */
  StartoverWindowSeconds?: number;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: GetHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
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
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your origin endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   */
  StartoverWindowSeconds?: number;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: GetHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListOriginEndpointsRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>List the HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface ListHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>List the low-latency HTTP live streaming (HLS) manifest configuration.</p>
 */
export interface ListLowLatencyHlsManifestConfiguration {
  /**
   * <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ManifestName: string | undefined;

  /**
   * <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
   */
  ChildManifestName?: string;

  /**
   * <p>The egress domain URL for stream delivery from MediaPackage.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>The configuration of the origin endpoint.</p>
 */
export interface OriginEndpointListConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. </p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>Any descriptive information that you want to add to the origin endpoint for future identification purposes.</p>
   */
  Description?: string;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   */
  ModifiedAt?: Date;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: ListHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: ListLowLatencyHlsManifestConfiguration[];
}

/**
 * @public
 */
export interface ListOriginEndpointsResponse {
  /**
   * <p>The objects being returned.</p>
   */
  Items?: OriginEndpointListConfiguration[];

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DeleteOriginEndpointPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
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
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   */
  OriginEndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetOriginEndpointPolicyResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The policy assigned to the origin endpoint.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The policy to attach to the specified origin endpoint.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutOriginEndpointPolicyResponse {}

/**
 * @public
 */
export interface UpdateOriginEndpointRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel. </p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint. A container type is a file format that encapsulates one or more media streams, such as audio and video, into a single file. </p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment?: Segment;

  /**
   * <p>Any descriptive information that you want to add to the origin endpoint for future identification purposes.</p>
   */
  Description?: string;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
   */
  StartoverWindowSeconds?: number;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: CreateHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: CreateLowLatencyHlsManifestConfiguration[];
}

/**
 * @public
 */
export interface UpdateOriginEndpointResponse {
  /**
   * <p>The ARN associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the origin endpoint. The name is the primary identifier for the origin endpoint, and and must be unique for your account in the AWS Region and channel.</p>
   */
  OriginEndpointName: string | undefined;

  /**
   * <p>The type of container attached to this origin endpoint.</p>
   */
  ContainerType: ContainerType | string | undefined;

  /**
   * <p>The segment configuration, including the segment name, duration, and other configuration values.</p>
   */
  Segment: Segment | undefined;

  /**
   * <p>The date and time the origin endpoint was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the origin endpoint was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description of the origin endpoint.</p>
   */
  Description?: string;

  /**
   * <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window.</p>
   */
  StartoverWindowSeconds?: number;

  /**
   * <p>An HTTP live streaming (HLS) manifest configuration.</p>
   */
  HlsManifests?: GetHlsManifestConfiguration[];

  /**
   * <p>A low-latency HLS manifest configuration.</p>
   */
  LowLatencyHlsManifests?: GetLowLatencyHlsManifestConfiguration[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the origin endpoint.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group. </p>
   */
  ChannelName: string | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel for future identification purposes.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name that describes the channel. The name is the primary identifier for the channel, and must be unique for your account in the AWS Region and channel group.</p>
   */
  ChannelName: string | undefined;

  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The date and time the channel was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel.</p>
   */
  Description?: string;

  /**
   * <p>The list of ingest endpoints.</p>
   */
  IngestEndpoints?: IngestEndpoint[];

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region. You can't use spaces in the name. You can't change the name after you create the channel group.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * <p>Enter any descriptive text that helps you to identify the channel group.</p>
   */
  Description?: string;

  /**
   * <p>A comma-separated list of tag key:value pairs that you define. For example:</p>
   *          <p>
   *             <code>"Key1": "Value1",</code>
   *          </p>
   *          <p>
   *             <code>"Key2": "Value2"</code>
   *          </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream should be sent. Integrate the egress domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel group.</p>
   */
  Description?: string;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DeleteChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
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
   */
  ChannelGroupName: string | undefined;
}

/**
 * @public
 */
export interface GetChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel group.</p>
   */
  Description?: string;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListChannelGroupsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelGroupsResponse {
  /**
   * <p>The objects being returned.</p>
   */
  Items?: ChannelGroupListConfiguration[];

  /**
   * <p>The pagination token from the GET list request. Use the token to fetch the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface UpdateChannelGroupRequest {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>Any descriptive information that you want to add to the channel group for future identification purposes.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateChannelGroupResponse {
  /**
   * <p>The name that describes the channel group. The name is the primary identifier for the channel group, and must be unique for your account in the AWS Region.</p>
   */
  ChannelGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The output domain where the source stream is sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
   */
  EgressDomain: string | undefined;

  /**
   * <p>The date and time the channel group was created.</p>
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The date and time the channel group was modified.</p>
   */
  ModifiedAt: Date | undefined;

  /**
   * <p>The description for your channel group.</p>
   */
  Description?: string;

  /**
   * <p>The comma-separated list of tag key:value pairs assigned to the channel group.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the CloudWatch resource that you want to view tags for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the MediaPackage resource that you're adding tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the MediaPackage resource that you're removing tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}
