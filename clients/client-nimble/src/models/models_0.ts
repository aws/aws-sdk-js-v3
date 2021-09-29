import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>A collection of EULA acceptances.</p>
 */
export interface AcceptEulasRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The EULA ID.</p>
   */
  eulaIds?: string[];

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace AcceptEulasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptEulasRequest): any => ({
    ...obj,
  });
}

export interface EulaAcceptance {
  /**
   * <p>The Unix epoch timestamp in seconds for when the EULA was accepted.</p>
   */
  acceptedAt?: Date;

  /**
   * <p>The ID of the person who accepted the EULA.</p>
   */
  acceptedBy?: string;

  /**
   * <p>The ID of the acceptee.</p>
   */
  accepteeId?: string;

  /**
   * <p>The EULA acceptance ID.</p>
   */
  eulaAcceptanceId?: string;

  /**
   * <p>The EULA ID.</p>
   */
  eulaId?: string;
}

export namespace EulaAcceptance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EulaAcceptance): any => ({
    ...obj,
  });
}

export interface AcceptEulasResponse {
  /**
   * <p>A collection of EULA acceptances.</p>
   */
  eulaAcceptances?: EulaAcceptance[];
}

export namespace AcceptEulasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptEulasResponse): any => ({
    ...obj,
  });
}

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace InternalServerErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: { [key: string]: string };

  /**
   * <p>A human-readable description of the error.</p>
   */
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.</p>
 */
export interface ActiveDirectoryComputerAttribute {
  /**
   * <p>The name for the LDAP attribute.</p>
   */
  name?: string;

  /**
   * <p>The value for the LDAP attribute.</p>
   */
  value?: string;
}

export namespace ActiveDirectoryComputerAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveDirectoryComputerAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.</p>
 */
export interface ActiveDirectoryConfiguration {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this studio component.</p>
   */
  directoryId?: string;

  /**
   * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.</p>
   */
  organizationalUnitDistinguishedName?: string;
}

export namespace ActiveDirectoryConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActiveDirectoryConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 */
export interface ComputeFarmConfiguration {
  /**
   * <p>The name of an Active Directory user that is used on ComputeFarm worker instances.</p>
   */
  activeDirectoryUser?: string;

  /**
   * <p>The endpoint of the ComputeFarm that is accessed by the studio component resource.</p>
   */
  endpoint?: string;
}

export namespace ComputeFarmConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComputeFarmConfiguration): any => ({
    ...obj,
  });
}

export enum StreamingClipboardMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum StreamingInstanceType {
  g4dn_12xlarge = "g4dn.12xlarge",
  g4dn_16xlarge = "g4dn.16xlarge",
  g4dn_2xlarge = "g4dn.2xlarge",
  g4dn_4xlarge = "g4dn.4xlarge",
  g4dn_8xlarge = "g4dn.8xlarge",
  g4dn_xlarge = "g4dn.xlarge",
}

export interface StreamConfigurationCreate {
  /**
   * <p>Enable or disable the use of the system clipboard to copy and paste between the streaming session and streaming client.</p>
   */
  clipboardMode: StreamingClipboardMode | string | undefined;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session with this launch profile.</p>
   */
  ec2InstanceTypes: (StreamingInstanceType | string)[] | undefined;

  /**
   * <p>The length of time, in minutes, that a streaming session can run. After this point, Nimble Studio automatically terminates the session.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session with this launch profile.</p>
   */
  streamingImageIds: string[] | undefined;
}

export namespace StreamConfigurationCreate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamConfigurationCreate): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of launch profiles.</p>
 */
export interface CreateLaunchProfileRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  ec2SubnetIds: string[] | undefined;
  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * <p>The name for the launch profile.</p>
   */
  name: string | undefined;

  /**
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration: StreamConfigurationCreate | undefined;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
   */
  studioComponentIds: string[] | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateLaunchProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchProfileRequest): any => ({
    ...obj,
  });
}

export enum LaunchProfileState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

export enum LaunchProfileStatusCode {
  ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_SUBNETS_PROVIDED = "INVALID_SUBNETS_PROVIDED",
  LAUNCH_PROFILE_CREATED = "LAUNCH_PROFILE_CREATED",
  LAUNCH_PROFILE_CREATE_IN_PROGRESS = "LAUNCH_PROFILE_CREATE_IN_PROGRESS",
  LAUNCH_PROFILE_DELETED = "LAUNCH_PROFILE_DELETED",
  LAUNCH_PROFILE_DELETE_IN_PROGRESS = "LAUNCH_PROFILE_DELETE_IN_PROGRESS",
  LAUNCH_PROFILE_UPDATED = "LAUNCH_PROFILE_UPDATED",
  LAUNCH_PROFILE_UPDATE_IN_PROGRESS = "LAUNCH_PROFILE_UPDATE_IN_PROGRESS",
  LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED = "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED",
  STREAMING_IMAGE_NOT_FOUND = "STREAMING_IMAGE_NOT_FOUND",
  STREAMING_IMAGE_NOT_READY = "STREAMING_IMAGE_NOT_READY",
}

/**
 * <p>A configuration for a streaming session.</p>
 */
export interface StreamConfiguration {
  /**
   * <p>Enable or disable the use of the system clipboard to copy and paste between the streaming session and streaming client.</p>
   */
  clipboardMode?: StreamingClipboardMode | string;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session with this launch profile.</p>
   */
  ec2InstanceTypes?: (StreamingInstanceType | string)[];

  /**
   * <p>The length of time, in minutes, that a streaming session can run. After this point, Nimble Studio automatically terminates the session.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session with this launch profile.</p>
   */
  streamingImageIds?: string[];
}

export namespace StreamConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamConfiguration): any => ({
    ...obj,
  });
}

export interface LaunchProfile {
  /**
   * <p>The ARN of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the launch profile.</p>
   */
  createdBy?: string;

  /**
   * <p>A human-readable description of the launch profile.</p>
   */
  description?: string;

  /**
   * <p>Unique identifiers for a collection of EC2 subnets.</p>
   */
  ec2SubnetIds?: string[];

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions?: string[];

  /**
   * <p>A friendly name for the launch profile.</p>
   */
  name?: string;

  /**
   * <p>The current state.</p>
   */
  state?: LaunchProfileState | string;

  /**
   * <p>The status code.</p>
   */
  statusCode?: LaunchProfileStatusCode | string;

  /**
   * <p>The status message for the launch profile.</p>
   */
  statusMessage?: string;

  /**
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration?: StreamConfiguration;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
}

export namespace LaunchProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchProfile): any => ({
    ...obj,
  });
}

export interface CreateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export namespace CreateLaunchProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateLaunchProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of streaming images.</p>
 */
export interface CreateStreamingImageRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>A human-readable description of the streaming image.</p>
   */
  description?: string;

  /**
   * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
   */
  ec2ImageId: string | undefined;

  /**
   * <p>A friendly name for a streaming image resource.</p>
   */
  name: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStreamingImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingImageRequest): any => ({
    ...obj,
  });
}

export enum StreamingImageEncryptionConfigurationKeyType {
  CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY",
}

export interface StreamingImageEncryptionConfiguration {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   */
  keyArn?: string;

  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  keyType: StreamingImageEncryptionConfigurationKeyType | string | undefined;
}

export namespace StreamingImageEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingImageEncryptionConfiguration): any => ({
    ...obj,
  });
}

export enum StreamingImageState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

export enum StreamingImageStatusCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STREAMING_IMAGE_CREATE_IN_PROGRESS = "STREAMING_IMAGE_CREATE_IN_PROGRESS",
  STREAMING_IMAGE_DELETED = "STREAMING_IMAGE_DELETED",
  STREAMING_IMAGE_DELETE_IN_PROGRESS = "STREAMING_IMAGE_DELETE_IN_PROGRESS",
  STREAMING_IMAGE_READY = "STREAMING_IMAGE_READY",
  STREAMING_IMAGE_UPDATE_IN_PROGRESS = "STREAMING_IMAGE_UPDATE_IN_PROGRESS",
}

export interface StreamingImage {
  /**
   * <p>The ARN of the resource.</p>
   */
  arn?: string;

  /**
   * <p>A human-readable description of the streaming image.</p>
   */
  description?: string;

  /**
   * <p>The ID of an EC2 machine image with which to create the streaming image.</p>
   */
  ec2ImageId?: string;

  /**
   * <p>The encryption configuration.</p>
   */
  encryptionConfiguration?: StreamingImageEncryptionConfiguration;

  /**
   * <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
   */
  eulaIds?: string[];

  /**
   * <p>A friendly name for a streaming image resource.</p>
   */
  name?: string;

  /**
   * <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that are provided by Amazon Nimble Studio.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
   */
  platform?: string;

  /**
   * <p>The current state.</p>
   */
  state?: StreamingImageState | string;

  /**
   * <p>The status code.</p>
   */
  statusCode?: StreamingImageStatusCode | string;

  /**
   * <p>The status message for the streaming image.</p>
   */
  statusMessage?: string;

  /**
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace StreamingImage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingImage): any => ({
    ...obj,
  });
}

export interface CreateStreamingImageResponse {
  streamingImage?: StreamingImage;
}

export namespace CreateStreamingImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingImageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of streaming sessions.</p>
 */
export interface CreateStreamingSessionRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The EC2 Instance type used for the streaming session.</p>
   */
  ec2InstanceType?: StreamingInstanceType | string;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateStreamingSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingSessionRequest): any => ({
    ...obj,
  });
}

export enum StreamingSessionState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
}

export enum StreamingSessionStatusCode {
  ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR = "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR",
  DECRYPT_STREAMING_IMAGE_ERROR = "DECRYPT_STREAMING_IMAGE_ERROR",
  INITIALIZATION_SCRIPT_ERROR = "INITIALIZATION_SCRIPT_ERROR",
  INSUFFICIENT_CAPACITY = "INSUFFICIENT_CAPACITY",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NETWORK_CONNECTION_ERROR = "NETWORK_CONNECTION_ERROR",
  NETWORK_INTERFACE_ERROR = "NETWORK_INTERFACE_ERROR",
  STREAMING_SESSION_CREATE_IN_PROGRESS = "STREAMING_SESSION_CREATE_IN_PROGRESS",
  STREAMING_SESSION_DELETED = "STREAMING_SESSION_DELETED",
  STREAMING_SESSION_DELETE_IN_PROGRESS = "STREAMING_SESSION_DELETE_IN_PROGRESS",
  STREAMING_SESSION_READY = "STREAMING_SESSION_READY",
}

export interface StreamingSession {
  /**
   * <p>The ARN of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the streaming session.</p>
   */
  createdBy?: string;

  /**
   * <p>The EC2 Instance type used for the streaming session.</p>
   */
  ec2InstanceType?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>The session ID.</p>
   */
  sessionId?: string;

  /**
   * <p>The current state.</p>
   */
  state?: StreamingSessionState | string;

  /**
   * <p>The status code.</p>
   */
  statusCode?: StreamingSessionStatusCode | string;

  /**
   * <p>The status message for the streaming session.</p>
   */
  statusMessage?: string;

  /**
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The time the streaming session will automatically terminate if not terminated by the user.</p>
   */
  terminateAt?: Date;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
}

export namespace StreamingSession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingSession): any => ({
    ...obj,
  });
}

export interface CreateStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export namespace CreateStreamingSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingSessionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A list collection streams.</p>
 */
export interface CreateStreamingSessionStreamRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The expiration time in seconds.</p>
   */
  expirationInSeconds?: number;

  /**
   * <p>The session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace CreateStreamingSessionStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingSessionStreamRequest): any => ({
    ...obj,
  });
}

export enum StreamingSessionStreamState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
}

export enum StreamingSessionStreamStatusCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NETWORK_CONNECTION_ERROR = "NETWORK_CONNECTION_ERROR",
  STREAM_CREATE_IN_PROGRESS = "STREAM_CREATE_IN_PROGRESS",
  STREAM_DELETED = "STREAM_DELETED",
  STREAM_DELETE_IN_PROGRESS = "STREAM_DELETE_IN_PROGRESS",
  STREAM_READY = "STREAM_READY",
}

export interface StreamingSessionStream {
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the streaming session stream.</p>
   */
  createdBy?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource expires.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>The current state.</p>
   */
  state?: StreamingSessionStreamState | string;

  /**
   * <p>The streaming session stream status code.</p>
   */
  statusCode?: StreamingSessionStreamStatusCode | string;

  /**
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * <p>The URL to connect to this stream using the DCV client.</p>
   */
  url?: string;
}

export namespace StreamingSessionStream {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingSessionStream): any => ({
    ...obj,
  });
}

export interface CreateStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
}

export namespace CreateStreamingSessionStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStreamingSessionStreamResponse): any => ({
    ...obj,
  });
}

export enum StudioEncryptionConfigurationKeyType {
  AWS_OWNED_KEY = "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY",
}

/**
 * <p>Configuration of the encryption method that is used for the studio.</p>
 */
export interface StudioEncryptionConfiguration {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   */
  keyArn?: string;

  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  keyType: StudioEncryptionConfigurationKeyType | string | undefined;
}

export namespace StudioEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioEncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of studio resources.</p>
 */
export interface CreateStudioRequest {
  /**
   * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
   */
  adminRoleArn: string | undefined;

  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>A friendly name for the studio.</p>
   */
  displayName: string | undefined;

  /**
   * <p>The studio encryption configuration.</p>
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>
   */
  studioName: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
   */
  userRoleArn: string | undefined;
}

export namespace CreateStudioRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioRequest): any => ({
    ...obj,
  });
}

export enum StudioState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

export enum StudioStatusCode {
  AWS_SSO_ACCESS_DENIED = "AWS_SSO_ACCESS_DENIED",
  AWS_SSO_CONFIGURATION_REPAIRED = "AWS_SSO_CONFIGURATION_REPAIRED",
  AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS = "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS",
  AWS_SSO_NOT_ENABLED = "AWS_SSO_NOT_ENABLED",
  ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  ROLE_COULD_NOT_BE_ASSUMED = "ROLE_COULD_NOT_BE_ASSUMED",
  ROLE_NOT_OWNED_BY_STUDIO_OWNER = "ROLE_NOT_OWNED_BY_STUDIO_OWNER",
  STUDIO_CREATED = "STUDIO_CREATED",
  STUDIO_CREATE_IN_PROGRESS = "STUDIO_CREATE_IN_PROGRESS",
  STUDIO_DELETED = "STUDIO_DELETED",
  STUDIO_DELETE_IN_PROGRESS = "STUDIO_DELETE_IN_PROGRESS",
  STUDIO_UPDATED = "STUDIO_UPDATED",
  STUDIO_UPDATE_IN_PROGRESS = "STUDIO_UPDATE_IN_PROGRESS",
  STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED = "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED",
  STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED = "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED",
  STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED = "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED",
}

export interface Studio {
  /**
   * <p>The IAM role that studio admins assume when logging in to the Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>A friendly name for the studio.</p>
   */
  displayName?: string;

  /**
   * <p>The Amazon Web Services Region where the studio resource is located.</p>
   */
  homeRegion?: string;

  /**
   * <p>The Amazon Web Services SSO application client ID used to integrate with Amazon Web Services SSO to enable Amazon Web Services SSO users to log in to Nimble portal.</p>
   */
  ssoClientId?: string;

  /**
   * <p>The current state of the studio resource.</p>
   */
  state?: StudioState | string;

  /**
   * <p>Status codes that provide additional detail on the studio state.</p>
   */
  statusCode?: StudioStatusCode | string;

  /**
   * <p>Additional detail on the studio state.</p>
   */
  statusMessage?: string;

  /**
   * <p>Configuration of the encryption method that is used for the studio.</p>
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * <p>The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.</p>
   */
  studioId?: string;

  /**
   * <p>The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.</p>
   */
  studioName?: string;

  /**
   * <p>The address of the web page for the studio.</p>
   */
  studioUrl?: string;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The IAM role that studio users assume when logging in to the Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

export namespace Studio {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Studio): any => ({
    ...obj,
  });
}

export interface CreateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

export namespace CreateStudioResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a license service that is associated with a studio resource.</p>
 */
export interface LicenseServiceConfiguration {
  /**
   * <p>The endpoint of the license service that is accessed by the studio component resource.</p>
   */
  endpoint?: string;
}

export namespace LicenseServiceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LicenseServiceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a shared file storage system that is associated with a studio resource.</p>
 */
export interface SharedFileSystemConfiguration {
  /**
   * <p>The endpoint of the shared file system that is accessed by the studio component resource.</p>
   */
  endpoint?: string;

  /**
   * <p>The unique identifier for a file system.</p>
   */
  fileSystemId?: string;

  /**
   * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
   */
  linuxMountPoint?: string;

  /**
   * <p>The name of the file share.</p>
   */
  shareName?: string;

  /**
   * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
   */
  windowsMountDrive?: string;
}

export namespace SharedFileSystemConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharedFileSystemConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of the studio component, based on component type.</p>
 */
export interface StudioComponentConfiguration {
  /**
   * <p>The configuration for a Microsoft Active Directory (Microsoft AD) studio resource.</p>
   */
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  /**
   * <p>The configuration for a render farm that is associated with a studio resource.</p>
   */
  computeFarmConfiguration?: ComputeFarmConfiguration;

  /**
   * <p>The configuration for a license service that is associated with a studio resource.</p>
   */
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  /**
   * <p>The configuration for a shared file storage system that is associated with a studio resource.</p>
   */
  sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}

export namespace StudioComponentConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioComponentConfiguration): any => ({
    ...obj,
  });
}

export enum LaunchProfilePlatform {
  LINUX = "LINUX",
  WINDOWS = "WINDOWS",
}

export enum StudioComponentInitializationScriptRunContext {
  SYSTEM_INITIALIZATION = "SYSTEM_INITIALIZATION",
  USER_INITIALIZATION = "USER_INITIALIZATION",
}

/**
 * <p>Initialization scripts for studio components.</p>
 */
export interface StudioComponentInitializationScript {
  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
   */
  launchProfileProtocolVersion?: string;

  /**
   * <p>The platform of the initialization script, either WINDOWS or LINUX.</p>
   */
  platform?: LaunchProfilePlatform | string;

  /**
   * <p>The method to use when running the initialization script.</p>
   */
  runContext?: StudioComponentInitializationScriptRunContext | string;

  /**
   * <p>The initialization script.</p>
   */
  script?: string;
}

export namespace StudioComponentInitializationScript {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioComponentInitializationScript): any => ({
    ...obj,
  });
}

/**
 * <p>A parameter for a studio component script, in the form of a key:value pair.</p>
 */
export interface ScriptParameterKeyValue {
  /**
   * <p>A script parameter key.</p>
   */
  key?: string;

  /**
   * <p>A script parameter value.</p>
   */
  value?: string;
}

export namespace ScriptParameterKeyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScriptParameterKeyValue): any => ({
    ...obj,
  });
}

export enum StudioComponentSubtype {
  AMAZON_FSX_FOR_LUSTRE = "AMAZON_FSX_FOR_LUSTRE",
  AMAZON_FSX_FOR_WINDOWS = "AMAZON_FSX_FOR_WINDOWS",
  AWS_MANAGED_MICROSOFT_AD = "AWS_MANAGED_MICROSOFT_AD",
  CUSTOM = "CUSTOM",
}

export enum StudioComponentType {
  ACTIVE_DIRECTORY = "ACTIVE_DIRECTORY",
  COMPUTE_FARM = "COMPUTE_FARM",
  CUSTOM = "CUSTOM",
  LICENSE_SERVICE = "LICENSE_SERVICE",
  SHARED_FILE_SYSTEM = "SHARED_FILE_SYSTEM",
}

/**
 * <p>The studio components.</p>
 */
export interface CreateStudioComponentRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>The name for the studio component.</p>
   */
  name: string | undefined;

  /**
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype | string;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the studio component.</p>
   */
  type: StudioComponentType | string | undefined;
}

export namespace CreateStudioComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioComponentRequest): any => ({
    ...obj,
  });
}

export enum StudioComponentState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

export enum StudioComponentStatusCode {
  ACTIVE_DIRECTORY_ALREADY_EXISTS = "ACTIVE_DIRECTORY_ALREADY_EXISTS",
  ENCRYPTION_KEY_ACCESS_DENIED = "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND = "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STUDIO_COMPONENT_CREATED = "STUDIO_COMPONENT_CREATED",
  STUDIO_COMPONENT_CREATE_IN_PROGRESS = "STUDIO_COMPONENT_CREATE_IN_PROGRESS",
  STUDIO_COMPONENT_DELETED = "STUDIO_COMPONENT_DELETED",
  STUDIO_COMPONENT_DELETE_IN_PROGRESS = "STUDIO_COMPONENT_DELETE_IN_PROGRESS",
  STUDIO_COMPONENT_UPDATED = "STUDIO_COMPONENT_UPDATED",
  STUDIO_COMPONENT_UPDATE_IN_PROGRESS = "STUDIO_COMPONENT_UPDATE_IN_PROGRESS",
}

/**
 * <p>A network that is used by a studio’s users and workflows, including render farm, Active Directory, licensing, and file system.</p>
 */
export interface StudioComponent {
  /**
   * <p>The ARN of the resource.</p>
   */
  arn?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the studio component.</p>
   */
  createdBy?: string;

  /**
   * <p>A human-readable description for the studio component resource.</p>
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>A friendly name for the studio component resource.</p>
   */
  name?: string;

  /**
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The current state.</p>
   */
  state?: StudioComponentState | string;

  /**
   * <p>The status code.</p>
   */
  statusCode?: StudioComponentStatusCode | string;

  /**
   * <p>The status message for the studio component.</p>
   */
  statusMessage?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype | string;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType | string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
}

export namespace StudioComponent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioComponent): any => ({
    ...obj,
  });
}

export interface CreateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export namespace CreateStudioComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStudioComponentResponse): any => ({
    ...obj,
  });
}

export interface DeleteLaunchProfileRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteLaunchProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export namespace DeleteLaunchProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteLaunchProfileMemberRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteLaunchProfileMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchProfileMemberRequest): any => ({
    ...obj,
  });
}

export interface DeleteLaunchProfileMemberResponse {}

export namespace DeleteLaunchProfileMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteLaunchProfileMemberResponse): any => ({
    ...obj,
  });
}

export interface DeleteStreamingImageRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteStreamingImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamingImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

export namespace DeleteStreamingImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamingImageResponse): any => ({
    ...obj,
  });
}

export interface DeleteStreamingSessionRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteStreamingSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamingSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export namespace DeleteStreamingSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStreamingSessionResponse): any => ({
    ...obj,
  });
}

export interface DeleteStudioRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteStudioRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioRequest): any => ({
    ...obj,
  });
}

export interface DeleteStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

export namespace DeleteStudioResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioResponse): any => ({
    ...obj,
  });
}

export interface DeleteStudioComponentRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteStudioComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioComponentRequest): any => ({
    ...obj,
  });
}

export interface DeleteStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export namespace DeleteStudioComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioComponentResponse): any => ({
    ...obj,
  });
}

export interface DeleteStudioMemberRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace DeleteStudioMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioMemberRequest): any => ({
    ...obj,
  });
}

export interface DeleteStudioMemberResponse {}

export namespace DeleteStudioMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStudioMemberResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a EULA resource.</p>
 */
export interface Eula {
  /**
   * <p>The EULA content.</p>
   */
  content?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The EULA ID.</p>
   */
  eulaId?: string;

  /**
   * <p>The name for the EULA.</p>
   */
  name?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;
}

export namespace Eula {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Eula): any => ({
    ...obj,
  });
}

export interface GetEulaRequest {
  /**
   * <p>The EULA ID.</p>
   */
  eulaId: string | undefined;
}

export namespace GetEulaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEulaRequest): any => ({
    ...obj,
  });
}

export interface GetEulaResponse {
  /**
   * <p>The EULA.</p>
   */
  eula?: Eula;
}

export namespace GetEulaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEulaResponse): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileRequest {
  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetLaunchProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileRequest): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export namespace GetLaunchProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileResponse): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileDetailsRequest {
  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetLaunchProfileDetailsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileDetailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StudioComponentSummary {
  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the studio component.</p>
   */
  createdBy?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The name for the studio component.</p>
   */
  name?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype | string;

  /**
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType | string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
}

export namespace StudioComponentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioComponentSummary): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileDetailsResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;

  /**
   * <p>A collection of streaming images.</p>
   */
  streamingImages?: StreamingImage[];

  /**
   * <p>A collection of studio component summaries.</p>
   */
  studioComponentSummaries?: StudioComponentSummary[];
}

export namespace GetLaunchProfileDetailsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileInitializationRequest {
  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>A collection of launch profile protocol versions.</p>
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * <p>The launch purpose.</p>
   */
  launchPurpose: string | undefined;

  /**
   * <p>The platform.</p>
   */
  platform: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetLaunchProfileInitializationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileInitializationRequest): any => ({
    ...obj,
  });
}

export interface LaunchProfileInitializationActiveDirectory {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this launch profile.</p>
   */
  directoryId?: string;

  /**
   * <p>The directory name.</p>
   */
  directoryName?: string;

  /**
   * <p>The DNS IP address.</p>
   */
  dnsIpAddresses?: string[];

  /**
   * <p>The name for the organizational unit distinguished name.</p>
   */
  organizationalUnitDistinguishedName?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * <p>The name for the studio component.</p>
   */
  studioComponentName?: string;
}

export namespace LaunchProfileInitializationActiveDirectory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchProfileInitializationActiveDirectory): any => ({
    ...obj,
  });
}

export interface LaunchProfileInitializationScript {
  /**
   * <p>The initialization script.</p>
   */
  script?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * <p>The name for the studio component.</p>
   */
  studioComponentName?: string;
}

export namespace LaunchProfileInitializationScript {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchProfileInitializationScript): any => ({
    ...obj,
  });
}

export interface LaunchProfileInitialization {
  /**
   * <p>A LaunchProfileInitializationActiveDirectory resource.</p>
   */
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
   */
  launchProfileProtocolVersion?: string;

  /**
   * <p>The launch purpose.</p>
   */
  launchPurpose?: string;

  /**
   * <p>The name for the launch profile.</p>
   */
  name?: string;

  /**
   * <p>The platform of the launch platform, either WINDOWS or LINUX.</p>
   */
  platform?: LaunchProfilePlatform | string;

  /**
   * <p>The system initializtion scripts.</p>
   */
  systemInitializationScripts?: LaunchProfileInitializationScript[];

  /**
   * <p>The user initializtion scripts.</p>
   */
  userInitializationScripts?: LaunchProfileInitializationScript[];
}

export namespace LaunchProfileInitialization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchProfileInitialization): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileInitializationResponse {
  /**
   * <p>The launch profile initialization.</p>
   */
  launchProfileInitialization?: LaunchProfileInitialization;
}

export namespace GetLaunchProfileInitializationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileInitializationResponse): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileMemberRequest {
  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetLaunchProfileMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileMemberRequest): any => ({
    ...obj,
  });
}

export enum LaunchProfilePersona {
  USER = "USER",
}

export interface LaunchProfileMembership {
  /**
   * <p>The ID of the identity store.</p>
   */
  identityStoreId?: string;

  /**
   * <p>The persona.</p>
   */
  persona?: LaunchProfilePersona | string;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;
}

export namespace LaunchProfileMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LaunchProfileMembership): any => ({
    ...obj,
  });
}

export interface GetLaunchProfileMemberResponse {
  /**
   * <p>The member.</p>
   */
  member?: LaunchProfileMembership;
}

export namespace GetLaunchProfileMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLaunchProfileMemberResponse): any => ({
    ...obj,
  });
}

export interface GetStreamingImageRequest {
  /**
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStreamingImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingImageRequest): any => ({
    ...obj,
  });
}

export interface GetStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

export namespace GetStreamingImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingImageResponse): any => ({
    ...obj,
  });
}

export interface GetStreamingSessionRequest {
  /**
   * <p>The session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStreamingSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingSessionRequest): any => ({
    ...obj,
  });
}

export interface GetStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export namespace GetStreamingSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingSessionResponse): any => ({
    ...obj,
  });
}

export interface GetStreamingSessionStreamRequest {
  /**
   * <p>The session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStreamingSessionStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingSessionStreamRequest): any => ({
    ...obj,
  });
}

export interface GetStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
}

export namespace GetStreamingSessionStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStreamingSessionStreamResponse): any => ({
    ...obj,
  });
}

export interface GetStudioRequest {
  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStudioRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioRequest): any => ({
    ...obj,
  });
}

export interface GetStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

export namespace GetStudioResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioResponse): any => ({
    ...obj,
  });
}

export interface GetStudioComponentRequest {
  /**
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStudioComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioComponentRequest): any => ({
    ...obj,
  });
}

export interface GetStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export namespace GetStudioComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioComponentResponse): any => ({
    ...obj,
  });
}

export interface GetStudioMemberRequest {
  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace GetStudioMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioMemberRequest): any => ({
    ...obj,
  });
}

export enum StudioPersona {
  ADMINISTRATOR = "ADMINISTRATOR",
}

export interface StudioMembership {
  /**
   * <p>The ID of the identity store.</p>
   */
  identityStoreId?: string;

  /**
   * <p>The persona.</p>
   */
  persona?: StudioPersona | string;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;
}

export namespace StudioMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StudioMembership): any => ({
    ...obj,
  });
}

export interface GetStudioMemberResponse {
  /**
   * <p>The member.</p>
   */
  member?: StudioMembership;
}

export namespace GetStudioMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStudioMemberResponse): any => ({
    ...obj,
  });
}

export interface ListEulaAcceptancesRequest {
  /**
   * <p>A collection of EULA IDs.</p>
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListEulaAcceptancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEulaAcceptancesRequest): any => ({
    ...obj,
  });
}

export interface ListEulaAcceptancesResponse {
  /**
   * <p>A collection of EULA acceptances.</p>
   */
  eulaAcceptances?: EulaAcceptance[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListEulaAcceptancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEulaAcceptancesResponse): any => ({
    ...obj,
  });
}

export interface ListEulasRequest {
  /**
   * <p>A collection of EULA IDs.</p>
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListEulasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEulasRequest): any => ({
    ...obj,
  });
}

export interface ListEulasResponse {
  /**
   * <p>A collection of EULA resources.</p>
   */
  eulas?: Eula[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListEulasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEulasResponse): any => ({
    ...obj,
  });
}

export interface ListLaunchProfileMembersRequest {
  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListLaunchProfileMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchProfileMembersRequest): any => ({
    ...obj,
  });
}

export interface ListLaunchProfileMembersResponse {
  /**
   * <p>A list of members.</p>
   */
  members?: LaunchProfileMembership[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListLaunchProfileMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchProfileMembersResponse): any => ({
    ...obj,
  });
}

export interface ListLaunchProfilesRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * <p>A list of states.</p>
   */
  states?: string[];

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListLaunchProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListLaunchProfilesResponse {
  /**
   * <p>A collection of launch profiles.</p>
   */
  launchProfiles?: LaunchProfile[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListLaunchProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLaunchProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListStreamingImagesRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The owner.</p>
   */
  owner?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListStreamingImagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingImagesRequest): any => ({
    ...obj,
  });
}

export interface ListStreamingImagesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A collection of streaming images.</p>
   */
  streamingImages?: StreamingImage[];
}

export namespace ListStreamingImagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingImagesResponse): any => ({
    ...obj,
  });
}

export interface ListStreamingSessionsRequest {
  /**
   * <p>The user ID of the user that created the streaming session.</p>
   */
  createdBy?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>A collection of session IDs.</p>
   */
  sessionIds?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListStreamingSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingSessionsRequest): any => ({
    ...obj,
  });
}

export interface ListStreamingSessionsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A collection of streaming sessions.</p>
   */
  sessions?: StreamingSession[];
}

export namespace ListStreamingSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStreamingSessionsResponse): any => ({
    ...obj,
  });
}

export interface ListStudioComponentsRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of states.</p>
   */
  states?: string[];

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>The types.</p>
   */
  types?: string[];
}

export namespace ListStudioComponentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioComponentsRequest): any => ({
    ...obj,
  });
}

export interface ListStudioComponentsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A collection of studio components.</p>
   */
  studioComponents?: StudioComponent[];
}

export namespace ListStudioComponentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioComponentsResponse): any => ({
    ...obj,
  });
}

export interface ListStudioMembersRequest {
  /**
   * <p>The maximum number of results to be returned per request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace ListStudioMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioMembersRequest): any => ({
    ...obj,
  });
}

export interface ListStudioMembersResponse {
  /**
   * <p>A list of members.</p>
   */
  members?: StudioMembership[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListStudioMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudioMembersResponse): any => ({
    ...obj,
  });
}

export interface ListStudiosRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export namespace ListStudiosRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudiosRequest): any => ({
    ...obj,
  });
}

export interface ListStudiosResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A collection of studios.</p>
   */
  studios?: Studio[];
}

export namespace ListStudiosResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStudiosResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the target resource for tagging operations.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface NewLaunchProfileMember {
  /**
   * <p>The persona.</p>
   */
  persona: LaunchProfilePersona | string | undefined;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;
}

export namespace NewLaunchProfileMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewLaunchProfileMember): any => ({
    ...obj,
  });
}

export interface NewStudioMember {
  /**
   * <p>The persona.</p>
   */
  persona: StudioPersona | string | undefined;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;
}

export namespace NewStudioMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NewStudioMember): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a launch profile membership.</p>
 */
export interface PutLaunchProfileMembersRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>A list of members.</p>
   */
  members: NewLaunchProfileMember[] | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace PutLaunchProfileMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLaunchProfileMembersRequest): any => ({
    ...obj,
  });
}

export interface PutLaunchProfileMembersResponse {}

export namespace PutLaunchProfileMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLaunchProfileMembersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A launch profile membership collection.</p>
 */
export interface PutStudioMembersRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * <p>A list of members.</p>
   */
  members: NewStudioMember[] | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace PutStudioMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStudioMembersRequest): any => ({
    ...obj,
  });
}

export interface PutStudioMembersResponse {}

export namespace PutStudioMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStudioMembersResponse): any => ({
    ...obj,
  });
}

export interface StartStudioSSOConfigurationRepairRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace StartStudioSSOConfigurationRepairRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartStudioSSOConfigurationRepairRequest): any => ({
    ...obj,
  });
}

export interface StartStudioSSOConfigurationRepairResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

export namespace StartStudioSSOConfigurationRepairResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartStudioSSOConfigurationRepairResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ARN for the role that manages access.</p>
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the target resource for tagging operations.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of labels, in the form of key:value pairs, that apply to this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the target resource for tagging operations.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of tag keys to delete.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The launch profile ID.</p>
 */
export interface UpdateLaunchProfileRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions?: string[];

  /**
   * <p>The name for the launch profile.</p>
   */
  name?: string;

  /**
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration?: StreamConfigurationCreate;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace UpdateLaunchProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export namespace UpdateLaunchProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The principal ID.</p>
 */
export interface UpdateLaunchProfileMemberRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The launch profile ID.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The persona.</p>
   */
  persona: LaunchProfilePersona | string | undefined;

  /**
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace UpdateLaunchProfileMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchProfileMemberRequest): any => ({
    ...obj,
  });
}

export interface UpdateLaunchProfileMemberResponse {
  /**
   * <p>The member.</p>
   */
  member?: LaunchProfileMembership;
}

export namespace UpdateLaunchProfileMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateLaunchProfileMemberResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The streaming image ID.</p>
 */
export interface UpdateStreamingImageRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The name for the streaming image.</p>
   */
  name?: string;

  /**
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

export namespace UpdateStreamingImageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamingImageRequest): any => ({
    ...obj,
  });
}

export interface UpdateStreamingImageResponse {
  /**
   * <p></p>
   */
  streamingImage?: StreamingImage;
}

export namespace UpdateStreamingImageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStreamingImageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The studio ID.</p>
 */
export interface UpdateStudioRequest {
  /**
   * <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>A friendly name for the studio.</p>
   */
  displayName?: string;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

export namespace UpdateStudioRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStudioRequest): any => ({
    ...obj,
  });
}

export interface UpdateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

export namespace UpdateStudioResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStudioResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The studio component ID.</p>
 */
export interface UpdateStudioComponentRequest {
  /**
   * <p>To make an idempotent API request using one of these actions, specify a client token in the request. You should not reuse the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails with a ValidationException error.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>The name for the studio component.</p>
   */
  name?: string;

  /**
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;

  /**
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype | string;

  /**
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType | string;
}

export namespace UpdateStudioComponentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStudioComponentRequest): any => ({
    ...obj,
  });
}

export interface UpdateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export namespace UpdateStudioComponentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStudioComponentResponse): any => ({
    ...obj,
  });
}
