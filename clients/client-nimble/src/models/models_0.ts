// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { NimbleServiceException as __BaseException } from "./NimbleServiceException";

export interface AcceptEulasRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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

/**
 * <p>The acceptance of a EULA, required to use Amazon-provided streaming images.</p>
 */
export interface EulaAcceptance {
  /**
   * <p>The ISO timestamp in seconds for when the EULA was accepted.</p>
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

export interface AcceptEulasResponse {
  /**
   * <p>A collection of EULA acceptances.</p>
   */
  eulaAcceptances?: EulaAcceptance[];
}

/**
 * <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>Another operation is in progress. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>An internal error has occurred. Please retry your request.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>The request throughput limit was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>One of the parameters in the request is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   */
  context?: Record<string, string>;

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
    this.code = opts.code;
    this.context = opts.context;
  }
}

/**
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value
 *             pair.</p>
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

/**
 * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
 */
export interface ActiveDirectoryConfiguration {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this studio
   *             component.</p>
   */
  directoryId?: string;

  /**
   * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory
   *             computer.</p>
   */
  organizationalUnitDistinguishedName?: string;
}

export enum AutomaticTerminationMode {
  ACTIVATED = "ACTIVATED",
  DEACTIVATED = "DEACTIVATED",
}

/**
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 */
export interface ComputeFarmConfiguration {
  /**
   * <p>The name of an Active Directory user that is used on ComputeFarm worker
   *             instances.</p>
   */
  activeDirectoryUser?: string;

  /**
   * <p>The endpoint of the ComputeFarm that is accessed by the studio component
   *             resource.</p>
   */
  endpoint?: string;
}

export enum StreamingClipboardMode {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum StreamingInstanceType {
  g3_4xlarge = "g3.4xlarge",
  g3s_xlarge = "g3s.xlarge",
  g4dn_12xlarge = "g4dn.12xlarge",
  g4dn_16xlarge = "g4dn.16xlarge",
  g4dn_2xlarge = "g4dn.2xlarge",
  g4dn_4xlarge = "g4dn.4xlarge",
  g4dn_8xlarge = "g4dn.8xlarge",
  g4dn_xlarge = "g4dn.xlarge",
  g5_16xlarge = "g5.16xlarge",
  g5_2xlarge = "g5.2xlarge",
  g5_4xlarge = "g5.4xlarge",
  g5_8xlarge = "g5.8xlarge",
  g5_xlarge = "g5.xlarge",
}

export enum SessionBackupMode {
  AUTOMATIC = "AUTOMATIC",
  DEACTIVATED = "DEACTIVATED",
}

/**
 * <p>Configures how streaming sessions are backed up when launched from this launch
 *             profile.</p>
 */
export interface StreamConfigurationSessionBackup {
  /**
   * <p>Specifies how artists sessions are backed up.</p>
   *         <p>Configures backups for streaming sessions launched with this launch profile. The
   *             default value is <code>DEACTIVATED</code>, which means that backups are deactivated. To
   *             allow backups, set this value to <code>AUTOMATIC</code>.</p>
   */
  mode?: SessionBackupMode | string;

  /**
   * <p>The maximum number of backups that each streaming session created from this launch
   *             profile can have.</p>
   */
  maxBackupsToRetain?: number;
}

export enum SessionPersistenceMode {
  ACTIVATED = "ACTIVATED",
  DEACTIVATED = "DEACTIVATED",
}

export enum StreamingSessionStorageMode {
  UPLOAD = "UPLOAD",
}

/**
 * <p>The upload storage root location (folder) on streaming workstations where files are
 *             uploaded.</p>
 */
export interface StreamingSessionStorageRoot {
  /**
   * <p>The folder path in Linux workstations where files are uploaded.</p>
   */
  linux?: string;

  /**
   * <p>The folder path in Windows workstations where files are uploaded.</p>
   */
  windows?: string;
}

/**
 * <p>The configuration for a streaming session’s upload storage.</p>
 */
export interface StreamConfigurationSessionStorage {
  /**
   * <p>The configuration for the upload storage root of the streaming session.</p>
   */
  root?: StreamingSessionStorageRoot;

  /**
   * <p>Allows artists to upload files to their workstations. The only valid option is
   *                 <code>UPLOAD</code>.</p>
   */
  mode: (StreamingSessionStorageMode | string)[] | undefined;
}

/**
 * <p>Custom volume configuration for the root volumes that are attached to streaming
 *             sessions.</p>
 *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
 *                 <code>ACTIVATED</code>.</p>
 */
export interface VolumeConfiguration {
  /**
   * <p>The size of the root volume that is attached to the streaming session. The root volume
   *             size is measured in GiBs.</p>
   */
  size?: number;

  /**
   * <p>The throughput to provision for the root volume that is attached to the streaming
   *             session. The throughput is measured in MiB/s.</p>
   */
  throughput?: number;

  /**
   * <p>The number of I/O operations per second for the root volume that is attached to
   *             streaming session.</p>
   */
  iops?: number;
}

/**
 * <p>Configuration for streaming workstations created using this launch profile.</p>
 */
export interface StreamConfigurationCreate {
  /**
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   */
  clipboardMode: StreamingClipboardMode | string | undefined;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  ec2InstanceTypes: (StreamingInstanceType | string)[] | undefined;

  /**
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  streamingImageIds: string[] | undefined;

  /**
   * <p>Integer that determines if you can start and stop your sessions and how long a session
   *             can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is
   *             5760.</p>
   *         <p>This field is allowed only when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   *         <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then
   *             call <code>StopStreamingSession</code>, the session fails. If the time that a session
   *             stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code>
   *             value, the session will automatically be terminated (instead of
   *             <code>STOPPED</code>).</p>
   *         <p>If the value is set to a positive number, the session can be stopped. You can call
   *                 <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state.
   *             If the time that a session stays in the <code>READY</code> state exceeds the
   *                 <code>maxSessionLengthInMinutes</code> value, the session will automatically be
   *             stopped (instead of terminated).</p>
   */
  maxStoppedSessionLengthInMinutes?: number;

  /**
   * <p>The upload storage for a streaming workstation that is created using this launch
   *             profile.</p>
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * <p>Configures how streaming sessions are backed up when launched from this launch
   *             profile.</p>
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode | string;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * <p>Indicates if a streaming session created from this launch profile should be terminated
   *             automatically or retained without termination after being in a <code>STOPPED</code>
   *             state.</p>
   *         <ul>
   *             <li>
   *                 <p>When <code>ACTIVATED</code>, the streaming session is scheduled for
   *                     termination after being in the <code>STOPPED</code> state for the time specified
   *                     in <code>maxStoppedSessionLengthInMinutes</code>.</p>
   *             </li>
   *             <li>
   *                 <p>When <code>DEACTIVATED</code>, the streaming session can remain in the
   *                         <code>STOPPED</code> state indefinitely.</p>
   *             </li>
   *          </ul>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>. When allowed, the default value for this parameter is
   *                 <code>DEACTIVATED</code>.</p>
   */
  automaticTerminationMode?: AutomaticTerminationMode | string;
}

export interface CreateLaunchProfileRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
   *             These subnets must support the specified instance types. </p>
   */
  ec2SubnetIds: string[] | undefined;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
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
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds: string[] | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
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
  INVALID_INSTANCE_TYPES_PROVIDED = "INVALID_INSTANCE_TYPES_PROVIDED",
  INVALID_SUBNETS_COMBINATION = "INVALID_SUBNETS_COMBINATION",
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
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   */
  clipboardMode: StreamingClipboardMode | string | undefined;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  ec2InstanceTypes: (StreamingInstanceType | string)[] | undefined;

  /**
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  streamingImageIds: string[] | undefined;

  /**
   * <p>Integer that determines if you can start and stop your sessions and how long a session
   *             can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is
   *             5760.</p>
   *         <p>This field is allowed only when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   *         <p>If the value is set to 0, your sessions can’t be <code>STOPPED</code>. If you then
   *             call <code>StopStreamingSession</code>, the session fails. If the time that a session
   *             stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code>
   *             value, the session will automatically be terminated (instead of
   *             <code>STOPPED</code>).</p>
   *         <p>If the value is set to a positive number, the session can be stopped. You can call
   *                 <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state.
   *             If the time that a session stays in the <code>READY</code> state exceeds the
   *                 <code>maxSessionLengthInMinutes</code> value, the session will automatically be
   *             stopped (instead of terminated).</p>
   */
  maxStoppedSessionLengthInMinutes?: number;

  /**
   * <p>The upload storage for a streaming session.</p>
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * <p>Information about the streaming session backup.</p>
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode | string;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * <p>Indicates if a streaming session created from this launch profile should be terminated
   *             automatically or retained without termination after being in a <code>STOPPED</code>
   *             state.</p>
   *         <ul>
   *             <li>
   *                 <p>When <code>ACTIVATED</code>, the streaming session is scheduled for
   *                     termination after being in the <code>STOPPED</code> state for the time specified
   *                     in <code>maxStoppedSessionLengthInMinutes</code>.</p>
   *             </li>
   *             <li>
   *                 <p>When <code>DEACTIVATED</code>, the streaming session can remain in the
   *                         <code>STOPPED</code> state indefinitely.</p>
   *             </li>
   *          </ul>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>. When allowed, the default value for this parameter is
   *                 <code>DEACTIVATED</code>.</p>
   */
  automaticTerminationMode?: AutomaticTerminationMode | string;
}

export enum LaunchProfileValidationState {
  VALIDATION_FAILED = "VALIDATION_FAILED",
  VALIDATION_FAILED_INTERNAL_SERVER_ERROR = "VALIDATION_FAILED_INTERNAL_SERVER_ERROR",
  VALIDATION_IN_PROGRESS = "VALIDATION_IN_PROGRESS",
  VALIDATION_NOT_STARTED = "VALIDATION_NOT_STARTED",
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
}

export enum LaunchProfileValidationStatusCode {
  VALIDATION_FAILED_INTERNAL_SERVER_ERROR = "VALIDATION_FAILED_INTERNAL_SERVER_ERROR",
  VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY = "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY",
  VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION = "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION",
  VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION = "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION",
  VALIDATION_FAILED_SUBNET_NOT_FOUND = "VALIDATION_FAILED_SUBNET_NOT_FOUND",
  VALIDATION_FAILED_UNAUTHORIZED = "VALIDATION_FAILED_UNAUTHORIZED",
  VALIDATION_IN_PROGRESS = "VALIDATION_IN_PROGRESS",
  VALIDATION_NOT_STARTED = "VALIDATION_NOT_STARTED",
  VALIDATION_SUCCESS = "VALIDATION_SUCCESS",
}

export enum LaunchProfileValidationType {
  VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT = "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT",
  VALIDATE_NETWORK_ACL_ASSOCIATION = "VALIDATE_NETWORK_ACL_ASSOCIATION",
  VALIDATE_SECURITY_GROUP_ASSOCIATION = "VALIDATE_SECURITY_GROUP_ASSOCIATION",
  VALIDATE_SUBNET_ASSOCIATION = "VALIDATE_SUBNET_ASSOCIATION",
}

/**
 * <p>The launch profile validation result.</p>
 */
export interface ValidationResult {
  /**
   * <p>The type of the validation result.</p>
   */
  type: LaunchProfileValidationType | string | undefined;

  /**
   * <p>The current state.</p>
   */
  state: LaunchProfileValidationState | string | undefined;

  /**
   * <p>The status code. This will contain the failure reason if the state is
   *                 <code>VALIDATION_FAILED</code>.</p>
   */
  statusCode: LaunchProfileValidationStatusCode | string | undefined;

  /**
   * <p>The status message for the validation result.</p>
   */
  statusMessage: string | undefined;
}

/**
 * <p>A launch profile controls your artist workforce’s access to studio components, like
 *             compute farms, shared file systems, managed file systems, and license server
 *             configurations, as well as instance types and Amazon Machine Images (AMIs). </p>
 *         <p>Studio administrators create launch profiles in the Nimble Studio console.
 *             Artists can use their launch profiles to launch an instance from the Nimble Studio
 *             portal. Each user’s launch profile defines how they can launch a streaming session. By
 *             default, studio admins can use all launch profiles.</p>
 */
export interface LaunchProfile {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
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
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * <p>The list of the latest validation results.</p>
   */
  validationResults?: ValidationResult[];
}

export interface CreateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export interface CreateStreamingImageRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

export enum StreamingImageEncryptionConfigurationKeyType {
  CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY",
}

/**
 * <p>Specifies how a streaming image is encrypted.</p>
 */
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
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STREAMING_IMAGE_CREATE_IN_PROGRESS = "STREAMING_IMAGE_CREATE_IN_PROGRESS",
  STREAMING_IMAGE_DELETED = "STREAMING_IMAGE_DELETED",
  STREAMING_IMAGE_DELETE_IN_PROGRESS = "STREAMING_IMAGE_DELETE_IN_PROGRESS",
  STREAMING_IMAGE_READY = "STREAMING_IMAGE_READY",
  STREAMING_IMAGE_UPDATE_IN_PROGRESS = "STREAMING_IMAGE_UPDATE_IN_PROGRESS",
}

/**
 * <p>Represents a streaming image resource.</p>
 *         <p>Streaming images are used by studio users to select which operating system and
 *             software they want to use in a Nimble Studio streaming session.</p>
 *         <p>Amazon provides a number of streaming images that include popular 3rd-party
 *             software.</p>
 *         <p>You can create your own streaming images using an Amazon EC2 machine image
 *             that you create for this purpose. You can also include software that your users
 *             require.</p>
 */
export interface StreamingImage {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
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
   * <p>The list of EULAs that must be accepted before a Streaming Session can be started
   *             using this streaming image.</p>
   */
  eulaIds?: string[];

  /**
   * <p>A friendly name for a streaming image resource.</p>
   */
  name?: string;

  /**
   * <p>The owner of the streaming image, either the <code>studioId</code> that contains the
   *             streaming image, or <code>amazon</code> for images that are provided by Amazon Nimble Studio.</p>
   */
  owner?: string;

  /**
   * <p>The platform of the streaming image, either Windows or Linux.</p>
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
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

export interface CreateStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The EC2 Instance type used for the streaming session.</p>
   */
  ec2InstanceType?: StreamingInstanceType | string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   */
  ownedBy?: string;

  /**
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

export enum StreamingSessionState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  READY = "READY",
  START_FAILED = "START_FAILED",
  START_IN_PROGRESS = "START_IN_PROGRESS",
  STOPPED = "STOPPED",
  STOP_FAILED = "STOP_FAILED",
  STOP_IN_PROGRESS = "STOP_IN_PROGRESS",
}

export enum StreamingSessionStatusCode {
  ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR = "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR",
  AMI_VALIDATION_ERROR = "AMI_VALIDATION_ERROR",
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
  STREAMING_SESSION_STARTED = "STREAMING_SESSION_STARTED",
  STREAMING_SESSION_START_IN_PROGRESS = "STREAMING_SESSION_START_IN_PROGRESS",
  STREAMING_SESSION_STOPPED = "STREAMING_SESSION_STOPPED",
  STREAMING_SESSION_STOP_IN_PROGRESS = "STREAMING_SESSION_STOP_IN_PROGRESS",
}

export enum VolumeRetentionMode {
  DELETE = "DELETE",
  RETAIN = "RETAIN",
}

/**
 * <p>A streaming session is a virtual workstation created using a particular launch
 *             profile.</p>
 */
export interface StreamingSession {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
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
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The time the streaming session will automatically terminate if not terminated by the
   *             user.</p>
   */
  terminateAt?: Date;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * <p>The time the session entered <code>STOP_IN_PROGRESS</code> state.</p>
   */
  stoppedAt?: Date;

  /**
   * <p>The user ID of the user that stopped the streaming session.</p>
   */
  stoppedBy?: string;

  /**
   * <p>The time the session entered <code>START_IN_PROGRESS</code> state.</p>
   */
  startedAt?: Date;

  /**
   * <p>The user ID of the user that started the streaming session.</p>
   */
  startedBy?: string;

  /**
   * <p>The time the streaming session will automatically be stopped if the user doesn’t stop
   *             the session themselves. </p>
   */
  stopAt?: Date;

  /**
   * <p>The backup ID used to restore a streaming session.</p>
   */
  startedFromBackupId?: string;

  /**
   * <p>Shows the current backup setting of the session.</p>
   */
  backupMode?: SessionBackupMode | string;

  /**
   * <p>The maximum number of backups of a streaming session that you can have. When the
   *             maximum number of backups is reached, the oldest backup is deleted.</p>
   */
  maxBackupsToRetain?: number;

  /**
   * <p>Determine if an EBS volume created from this streaming session will be backed
   *             up.</p>
   */
  volumeRetentionMode?: VolumeRetentionMode | string;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode | string;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * <p>Indicates if a streaming session created from this launch profile should be terminated
   *             automatically or retained without termination after being in a <code>STOPPED</code>
   *             state.</p>
   *         <ul>
   *             <li>
   *                 <p>When <code>ACTIVATED</code>, the streaming session is scheduled for
   *                     termination after being in the <code>STOPPED</code> state for the time specified
   *                     in <code>maxStoppedSessionLengthInMinutes</code>.</p>
   *             </li>
   *             <li>
   *                 <p>When <code>DEACTIVATED</code>, the streaming session can remain in the
   *                         <code>STOPPED</code> state indefinitely.</p>
   *             </li>
   *          </ul>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>. When allowed, the default value for this parameter is
   *                 <code>DEACTIVATED</code>.</p>
   */
  automaticTerminationMode?: AutomaticTerminationMode | string;
}

export interface CreateStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export interface CreateStreamingSessionStreamRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The expiration time in seconds.</p>
   */
  expirationInSeconds?: number;

  /**
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

/**
 * <p>A stream is an active connection to a streaming session, enabling a studio user to
 *             control the streaming session using a compatible client. Streaming session streams are
 *             compatible with the NICE DCV web client, included in the Nimble Studio portal, or
 *             the NICE DCV desktop client.</p>
 */
export interface StreamingSessionStream {
  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the streaming session stream.</p>
   */
  createdBy?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource expires.</p>
   */
  expiresAt?: Date;

  /**
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
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

export interface CreateStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
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

export interface CreateStudioRequest {
  /**
   * <p>The IAM role that studio admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  adminRoleArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed
   *             by Nimble Studio users.</p>
   */
  studioName: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The IAM role that studio users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  userRoleArn: string | undefined;
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
  AWS_STS_REGION_DISABLED = "AWS_STS_REGION_DISABLED",
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

/**
 * <p>Represents a studio resource.</p>
 *         <p>A studio is the core resource used with Nimble Studio. You must create a studio
 *             first, before any other resource type can be created. All other resources you create and
 *             manage in Nimble Studio are contained within a studio.</p>
 *         <p>When creating a studio, you must provides two IAM roles for use with
 *             the Nimble Studio portal. These roles are assumed by your users when they log in to
 *             the Nimble Studio portal via IAM Identity Center and your identity source.</p>
 *         <p>The user role must have the <code>AmazonNimbleStudio-StudioUser</code> managed policy
 *             attached for the portal to function properly.</p>
 *         <p>The admin role must have the <code>AmazonNimbleStudio-StudioAdmin</code> managed
 *             policy attached for the portal to function properly.</p>
 *         <p>Your studio roles must trust the <code>identity.nimble.amazonaws.com</code> service
 *             principal to function properly.</p>
 */
export interface Studio {
  /**
   * <p>The IAM role that studio admins assume when logging in to the Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>The IAM Identity Center application client ID used to integrate with IAM Identity Center. This ID allows IAM Identity Center users to log in to Nimble Studio
   *             portal.</p>
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
   * <p>The unique identifier for a studio resource. In Nimble Studio, all other
   *             resources are contained in a studio resource.</p>
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
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The IAM role that studio users assume when logging in to the Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

export interface CreateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

/**
 * <p>The configuration for a license service that is associated with a studio
 *             resource.</p>
 */
export interface LicenseServiceConfiguration {
  /**
   * <p>The endpoint of the license service that is accessed by the studio component
   *             resource.</p>
   */
  endpoint?: string;
}

/**
 * <p>The configuration for a shared file storage system that is associated with a studio
 *             resource.</p>
 */
export interface SharedFileSystemConfiguration {
  /**
   * <p>The endpoint of the shared file system that is accessed by the studio component
   *             resource.</p>
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

/**
 * <p>The configuration of the studio component, based on component type.</p>
 */
export interface StudioComponentConfiguration {
  /**
   * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
   */
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  /**
   * <p>The configuration for a render farm that is associated with a studio resource.</p>
   */
  computeFarmConfiguration?: ComputeFarmConfiguration;

  /**
   * <p>The configuration for a license service that is associated with a studio
   *             resource.</p>
   */
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  /**
   * <p>The configuration for a shared file storage system that is associated with a studio
   *             resource.</p>
   */
  sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
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
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersion?: string;

  /**
   * <p>The platform of the initialization script, either Windows or Linux.</p>
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

/**
 * <p>A parameter for a studio component script, in the form of a key-value pair.</p>
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

export interface CreateStudioComponentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype | string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The type of the studio component.</p>
   */
  type: StudioComponentType | string | undefined;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
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
 * <p>A studio component represents a network resource to be used by a studio's users and
 *             workflows. A typical studio contains studio components for each of the following: render
 *             farm, Active Directory, licensing, and file system.</p>
 *         <p>Access to a studio component is managed by specifying security groups for the
 *             resource, as well as its endpoint.</p>
 *         <p>A studio component also has a set of initialization scripts that are returned by
 *                 <code>GetLaunchProfileInitialization</code>. These initialization scripts run on
 *             streaming sessions when they start. They provide users with flexibility in controlling
 *             how the studio resources are configured on a streaming session.</p>
 */
export interface StudioComponent {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType | string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

export interface CreateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export interface DeleteLaunchProfileRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export interface DeleteLaunchProfileMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteLaunchProfileMemberResponse {}

export interface DeleteStreamingImageRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

export interface DeleteStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export interface DeleteStudioRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

export interface DeleteStudioComponentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export interface DeleteStudioMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface DeleteStudioMemberResponse {}

/**
 * <p>Represents a EULA resource.</p>
 */
export interface Eula {
  /**
   * <p>The EULA content.</p>
   */
  content?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;
}

export interface ListEulaAcceptancesRequest {
  /**
   * <p>The list of EULA IDs that have been previously accepted.</p>
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

export interface GetEulaRequest {
  /**
   * <p>The EULA ID.</p>
   */
  eulaId: string | undefined;
}

export interface GetEulaResponse {
  /**
   * <p>The EULA.</p>
   */
  eula?: Eula;
}

export interface ListEulasRequest {
  /**
   * <p>The list of EULA IDs that should be returned</p>
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
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

export interface GetLaunchProfileRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export interface GetLaunchProfileDetailsRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * <p>The studio component's summary.</p>
 */
export interface StudioComponentSummary {
  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
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
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
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

export interface GetLaunchProfileInitializationRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The launch profile protocol versions supported by the client.</p>
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * <p>The launch purpose.</p>
   */
  launchPurpose: string | undefined;

  /**
   * <p>The platform where this Launch Profile will be used, either Windows or Linux.</p>
   */
  platform: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * <p>The launch profile initialization Active Directory contains information required for
 *             the launch profile to connect to the Active Directory.</p>
 */
export interface LaunchProfileInitializationActiveDirectory {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this launch
   *             profile.</p>
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

/**
 * <p>The launch profile initialization script is used when start streaming session
 *             runs.</p>
 */
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

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

/**
 * <p>A launch profile initialization contains information required for a workstation or
 *             server to connect to a launch profile.</p>
 *         <p>This includes scripts, endpoints, security groups, subnets, and other
 *             configuration.</p>
 */
export interface LaunchProfileInitialization {
  /**
   * <p>A <code>LaunchProfileInitializationActiveDirectory</code> resource.</p>
   */
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
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
   * <p>The platform of the launch platform, either Windows or Linux.</p>
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

export interface GetLaunchProfileInitializationResponse {
  /**
   * <p>The launch profile initialization.</p>
   */
  launchProfileInitialization?: LaunchProfileInitialization;
}

export interface GetLaunchProfileMemberRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export enum LaunchProfilePersona {
  USER = "USER",
}

/**
 * <p>Studio admins can use launch profile membership to delegate launch profile access to
 *             studio users in the Nimble Studio portal without writing or maintaining complex
 *                 IAM policies. A launch profile member is a user association from your
 *             studio identity source who is granted permissions to a launch profile.</p>
 *         <p>A launch profile member (type USER) provides the following permissions to that launch
 *             profile:</p>
 *         <ul>
 *             <li>
 *                 <p>GetLaunchProfile</p>
 *             </li>
 *             <li>
 *                 <p>GetLaunchProfileInitialization</p>
 *             </li>
 *             <li>
 *                 <p>GetLaunchProfileMembers</p>
 *             </li>
 *             <li>
 *                 <p>GetLaunchProfileMember</p>
 *             </li>
 *             <li>
 *                 <p>CreateStreamingSession</p>
 *             </li>
 *             <li>
 *                 <p>GetLaunchProfileDetails</p>
 *             </li>
 *          </ul>
 */
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

  /**
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   */
  sid?: string;
}

export interface GetLaunchProfileMemberResponse {
  /**
   * <p>The member.</p>
   */
  member?: LaunchProfileMembership;
}

export interface GetStreamingImageRequest {
  /**
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

export interface GetStreamingSessionRequest {
  /**
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetStreamingSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

export interface GetStreamingSessionBackupRequest {
  /**
   * <p>The ID of the backup.</p>
   */
  backupId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * <p>Information about the streaming session backup.</p>
 */
export interface StreamingSessionBackup {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the launch profile which allowed the backups for the streaming
   *             session.</p>
   */
  launchProfileId?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>The streaming session ID for the <code>StreamingSessionBackup</code>.</p>
   */
  sessionId?: string;

  /**
   * <p>The streaming session state.</p>
   */
  state?: StreamingSessionState | string;

  /**
   * <p>The status code.</p>
   */
  statusCode?: StreamingSessionStatusCode | string;

  /**
   * <p>The status message for the streaming session backup.</p>
   */
  statusMessage?: string;

  /**
   * <p>The ID of the backup.</p>
   */
  backupId?: string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

export interface GetStreamingSessionBackupResponse {
  /**
   * <p>Information about the streaming session backup.</p>
   */
  streamingSessionBackup?: StreamingSessionBackup;
}

export interface GetStreamingSessionStreamRequest {
  /**
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The streaming session stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
}

export interface GetStudioRequest {
  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

export interface GetStudioComponentRequest {
  /**
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface GetStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export interface GetStudioMemberRequest {
  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export enum StudioPersona {
  ADMINISTRATOR = "ADMINISTRATOR",
}

/**
 * <p>A studio member is an association of a user from your studio identity source to
 *             elevated permissions that they are granted in the studio.</p>
 *         <p>When you add a user to your studio using the Nimble Studio console, they are
 *             given access to the studio's IAM Identity Center application and are given access to log
 *             in to the Nimble Studio portal. These users have the permissions provided by the
 *             studio's user IAM role and do not appear in the studio membership
 *             collection. Only studio admins appear in studio membership.</p>
 *         <p>When you add a user to studio membership with the ADMIN persona, upon logging in to
 *             the Nimble Studio portal, they are granted permissions specified by the Studio's
 *             Admin IAM role.</p>
 */
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

  /**
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   */
  sid?: string;
}

export interface GetStudioMemberResponse {
  /**
   * <p>The member.</p>
   */
  member?: StudioMembership;
}

export interface ListLaunchProfileMembersRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

export interface ListLaunchProfilesRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId?: string;

  /**
   * <p>Filter this request to launch profiles in any of the given states.</p>
   */
  states?: (LaunchProfileState | string)[];

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

/**
 * <p>A new member that is added to a launch profile.</p>
 */
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

export interface PutLaunchProfileMembersRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>A list of members.</p>
   */
  members: NewLaunchProfileMember[] | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface PutLaunchProfileMembersResponse {}

export interface UpdateLaunchProfileRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
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
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface UpdateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

export interface UpdateLaunchProfileMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * <p>The persona.</p>
   */
  persona: LaunchProfilePersona | string | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface UpdateLaunchProfileMemberResponse {
  /**
   * <p>The updated member. </p>
   */
  member?: LaunchProfileMembership;
}

export interface ListStreamingImagesRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>Filter this request to streaming images with the given owner</p>
   */
  owner?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

export interface ListStreamingSessionBackupsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface ListStreamingSessionBackupsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>Information about the streaming session backups.</p>
   */
  streamingSessionBackups?: StreamingSessionBackup[];
}

export interface ListStreamingSessionsRequest {
  /**
   * <p>Filters the request to streaming sessions created by the given user.</p>
   */
  createdBy?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>Filters the request to streaming session owned by the given user</p>
   */
  ownedBy?: string;

  /**
   * <p>Filters the request to only the provided session IDs.</p>
   */
  sessionIds?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
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

export interface ListStudioComponentsRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>Filters the request to studio components that are in one of the given states. </p>
   */
  states?: (StudioComponentState | string)[];

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>Filters the request to studio components that are of one of the given types.</p>
   */
  types?: (StudioComponentType | string)[];
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

export interface ListStudioMembersRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface ListStudioMembersResponse {
  /**
   * <p>A list of admin members.</p>
   */
  members?: StudioMembership[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListStudiosRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

export interface ListStudiosResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A collection of studios.</p>
   */
  studios: Studio[] | undefined;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>A new studio user's membership.</p>
 */
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

export interface UpdateStreamingImageRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface UpdateStreamingImageResponse {
  /**
   * <p>Represents a streaming image resource.</p>
   *         <p>Streaming images are used by studio users to select which operating system and
   *             software they want to use in a Nimble Studio streaming session.</p>
   *         <p>Amazon provides a number of streaming images that include popular 3rd-party
   *             software.</p>
   *         <p>You can create your own streaming images using an Amazon EC2 machine image
   *             that you create for this purpose. You can also include software that your users
   *             require.</p>
   */
  streamingImage?: StreamingImage;
}

export interface StartStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID for the <code>StartStreamingSessionRequest</code>.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID for the StartStreamingSessionRequest.</p>
   */
  studioId: string | undefined;

  /**
   * <p>The ID of the backup.</p>
   */
  backupId?: string;
}

export interface StartStreamingSessionResponse {
  /**
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   */
  session?: StreamingSession;
}

export interface StopStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID for the <code>StopStreamingSessionRequest</code>.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The studioId for the StopStreamingSessionRequest.</p>
   */
  studioId: string | undefined;

  /**
   * <p>Adds additional instructions to a streaming session stop action to either retain the
   *             EBS volumes or delete the EBS volumes.</p>
   */
  volumeRetentionMode?: VolumeRetentionMode | string;
}

export interface StopStreamingSessionResponse {
  /**
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   */
  session?: StreamingSession;
}

export interface UpdateStudioComponentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio ID. </p>
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

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

export interface UpdateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

export interface PutStudioMembersRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
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
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface PutStudioMembersResponse {}

export interface StartStudioSSOConfigurationRepairRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

export interface StartStudioSSOConfigurationRepairResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

export interface UpdateStudioRequest {
  /**
   * <p>The IAM role that Studio Admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * <p>A friendly name for the studio.</p>
   */
  displayName?: string;

  /**
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * <p>The IAM role that Studio Users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

export interface UpdateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>Identifies the Amazon Resource Name(ARN) key from which you are removing tags. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AcceptEulasRequestFilterSensitiveLog = (obj: AcceptEulasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EulaAcceptanceFilterSensitiveLog = (obj: EulaAcceptance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptEulasResponseFilterSensitiveLog = (obj: AcceptEulasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveDirectoryComputerAttributeFilterSensitiveLog = (obj: ActiveDirectoryComputerAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActiveDirectoryConfigurationFilterSensitiveLog = (obj: ActiveDirectoryConfiguration): any => ({
  ...obj,
  ...(obj.computerAttributes && { computerAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ComputeFarmConfigurationFilterSensitiveLog = (obj: ComputeFarmConfiguration): any => ({
  ...obj,
  ...(obj.endpoint && { endpoint: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StreamConfigurationSessionBackupFilterSensitiveLog = (obj: StreamConfigurationSessionBackup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingSessionStorageRootFilterSensitiveLog = (obj: StreamingSessionStorageRoot): any => ({
  ...obj,
  ...(obj.linux && { linux: SENSITIVE_STRING }),
  ...(obj.windows && { windows: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StreamConfigurationSessionStorageFilterSensitiveLog = (obj: StreamConfigurationSessionStorage): any => ({
  ...obj,
  ...(obj.root && { root: StreamingSessionStorageRootFilterSensitiveLog(obj.root) }),
});

/**
 * @internal
 */
export const VolumeConfigurationFilterSensitiveLog = (obj: VolumeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamConfigurationCreateFilterSensitiveLog = (obj: StreamConfigurationCreate): any => ({
  ...obj,
  ...(obj.sessionStorage && {
    sessionStorage: StreamConfigurationSessionStorageFilterSensitiveLog(obj.sessionStorage),
  }),
});

/**
 * @internal
 */
export const CreateLaunchProfileRequestFilterSensitiveLog = (obj: CreateLaunchProfileRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.streamConfiguration && {
    streamConfiguration: StreamConfigurationCreateFilterSensitiveLog(obj.streamConfiguration),
  }),
});

/**
 * @internal
 */
export const StreamConfigurationFilterSensitiveLog = (obj: StreamConfiguration): any => ({
  ...obj,
  ...(obj.sessionStorage && {
    sessionStorage: StreamConfigurationSessionStorageFilterSensitiveLog(obj.sessionStorage),
  }),
});

/**
 * @internal
 */
export const ValidationResultFilterSensitiveLog = (obj: ValidationResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchProfileFilterSensitiveLog = (obj: LaunchProfile): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.streamConfiguration && {
    streamConfiguration: StreamConfigurationFilterSensitiveLog(obj.streamConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateLaunchProfileResponseFilterSensitiveLog = (obj: CreateLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
});

/**
 * @internal
 */
export const CreateStreamingImageRequestFilterSensitiveLog = (obj: CreateStreamingImageRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StreamingImageEncryptionConfigurationFilterSensitiveLog = (
  obj: StreamingImageEncryptionConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingImageFilterSensitiveLog = (obj: StreamingImage): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStreamingImageResponseFilterSensitiveLog = (obj: CreateStreamingImageResponse): any => ({
  ...obj,
  ...(obj.streamingImage && { streamingImage: StreamingImageFilterSensitiveLog(obj.streamingImage) }),
});

/**
 * @internal
 */
export const CreateStreamingSessionRequestFilterSensitiveLog = (obj: CreateStreamingSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingSessionFilterSensitiveLog = (obj: StreamingSession): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamingSessionResponseFilterSensitiveLog = (obj: CreateStreamingSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStreamingSessionStreamRequestFilterSensitiveLog = (
  obj: CreateStreamingSessionStreamRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingSessionStreamFilterSensitiveLog = (obj: StreamingSessionStream): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStreamingSessionStreamResponseFilterSensitiveLog = (
  obj: CreateStreamingSessionStreamResponse
): any => ({
  ...obj,
  ...(obj.stream && { stream: StreamingSessionStreamFilterSensitiveLog(obj.stream) }),
});

/**
 * @internal
 */
export const StudioEncryptionConfigurationFilterSensitiveLog = (obj: StudioEncryptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStudioRequestFilterSensitiveLog = (obj: CreateStudioRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StudioFilterSensitiveLog = (obj: Studio): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStudioResponseFilterSensitiveLog = (obj: CreateStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
});

/**
 * @internal
 */
export const LicenseServiceConfigurationFilterSensitiveLog = (obj: LicenseServiceConfiguration): any => ({
  ...obj,
  ...(obj.endpoint && { endpoint: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SharedFileSystemConfigurationFilterSensitiveLog = (obj: SharedFileSystemConfiguration): any => ({
  ...obj,
  ...(obj.endpoint && { endpoint: SENSITIVE_STRING }),
  ...(obj.linuxMountPoint && { linuxMountPoint: SENSITIVE_STRING }),
  ...(obj.shareName && { shareName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StudioComponentConfigurationFilterSensitiveLog = (obj: StudioComponentConfiguration): any => ({
  ...obj,
  ...(obj.activeDirectoryConfiguration && {
    activeDirectoryConfiguration: ActiveDirectoryConfigurationFilterSensitiveLog(obj.activeDirectoryConfiguration),
  }),
  ...(obj.computeFarmConfiguration && {
    computeFarmConfiguration: ComputeFarmConfigurationFilterSensitiveLog(obj.computeFarmConfiguration),
  }),
  ...(obj.licenseServiceConfiguration && {
    licenseServiceConfiguration: LicenseServiceConfigurationFilterSensitiveLog(obj.licenseServiceConfiguration),
  }),
  ...(obj.sharedFileSystemConfiguration && {
    sharedFileSystemConfiguration: SharedFileSystemConfigurationFilterSensitiveLog(obj.sharedFileSystemConfiguration),
  }),
});

/**
 * @internal
 */
export const StudioComponentInitializationScriptFilterSensitiveLog = (
  obj: StudioComponentInitializationScript
): any => ({
  ...obj,
  ...(obj.script && { script: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ScriptParameterKeyValueFilterSensitiveLog = (obj: ScriptParameterKeyValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStudioComponentRequestFilterSensitiveLog = (obj: CreateStudioComponentRequest): any => ({
  ...obj,
  ...(obj.configuration && { configuration: StudioComponentConfigurationFilterSensitiveLog(obj.configuration) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.initializationScripts && {
    initializationScripts: obj.initializationScripts.map((item) =>
      StudioComponentInitializationScriptFilterSensitiveLog(item)
    ),
  }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.scriptParameters && { scriptParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StudioComponentFilterSensitiveLog = (obj: StudioComponent): any => ({
  ...obj,
  ...(obj.configuration && { configuration: StudioComponentConfigurationFilterSensitiveLog(obj.configuration) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.initializationScripts && {
    initializationScripts: obj.initializationScripts.map((item) =>
      StudioComponentInitializationScriptFilterSensitiveLog(item)
    ),
  }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.scriptParameters && { scriptParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateStudioComponentResponseFilterSensitiveLog = (obj: CreateStudioComponentResponse): any => ({
  ...obj,
  ...(obj.studioComponent && { studioComponent: StudioComponentFilterSensitiveLog(obj.studioComponent) }),
});

/**
 * @internal
 */
export const DeleteLaunchProfileRequestFilterSensitiveLog = (obj: DeleteLaunchProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchProfileResponseFilterSensitiveLog = (obj: DeleteLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
});

/**
 * @internal
 */
export const DeleteLaunchProfileMemberRequestFilterSensitiveLog = (obj: DeleteLaunchProfileMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLaunchProfileMemberResponseFilterSensitiveLog = (obj: DeleteLaunchProfileMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamingImageRequestFilterSensitiveLog = (obj: DeleteStreamingImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamingImageResponseFilterSensitiveLog = (obj: DeleteStreamingImageResponse): any => ({
  ...obj,
  ...(obj.streamingImage && { streamingImage: StreamingImageFilterSensitiveLog(obj.streamingImage) }),
});

/**
 * @internal
 */
export const DeleteStreamingSessionRequestFilterSensitiveLog = (obj: DeleteStreamingSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStreamingSessionResponseFilterSensitiveLog = (obj: DeleteStreamingSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStudioRequestFilterSensitiveLog = (obj: DeleteStudioRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStudioResponseFilterSensitiveLog = (obj: DeleteStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
});

/**
 * @internal
 */
export const DeleteStudioComponentRequestFilterSensitiveLog = (obj: DeleteStudioComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStudioComponentResponseFilterSensitiveLog = (obj: DeleteStudioComponentResponse): any => ({
  ...obj,
  ...(obj.studioComponent && { studioComponent: StudioComponentFilterSensitiveLog(obj.studioComponent) }),
});

/**
 * @internal
 */
export const DeleteStudioMemberRequestFilterSensitiveLog = (obj: DeleteStudioMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteStudioMemberResponseFilterSensitiveLog = (obj: DeleteStudioMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EulaFilterSensitiveLog = (obj: Eula): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEulaAcceptancesRequestFilterSensitiveLog = (obj: ListEulaAcceptancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEulaAcceptancesResponseFilterSensitiveLog = (obj: ListEulaAcceptancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEulaRequestFilterSensitiveLog = (obj: GetEulaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEulaResponseFilterSensitiveLog = (obj: GetEulaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEulasRequestFilterSensitiveLog = (obj: ListEulasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEulasResponseFilterSensitiveLog = (obj: ListEulasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchProfileRequestFilterSensitiveLog = (obj: GetLaunchProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchProfileResponseFilterSensitiveLog = (obj: GetLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
});

/**
 * @internal
 */
export const GetLaunchProfileDetailsRequestFilterSensitiveLog = (obj: GetLaunchProfileDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StudioComponentSummaryFilterSensitiveLog = (obj: StudioComponentSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLaunchProfileDetailsResponseFilterSensitiveLog = (obj: GetLaunchProfileDetailsResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
  ...(obj.streamingImages && {
    streamingImages: obj.streamingImages.map((item) => StreamingImageFilterSensitiveLog(item)),
  }),
  ...(obj.studioComponentSummaries && {
    studioComponentSummaries: obj.studioComponentSummaries.map((item) =>
      StudioComponentSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetLaunchProfileInitializationRequestFilterSensitiveLog = (
  obj: GetLaunchProfileInitializationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchProfileInitializationActiveDirectoryFilterSensitiveLog = (
  obj: LaunchProfileInitializationActiveDirectory
): any => ({
  ...obj,
  ...(obj.computerAttributes && { computerAttributes: SENSITIVE_STRING }),
  ...(obj.studioComponentName && { studioComponentName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchProfileInitializationScriptFilterSensitiveLog = (obj: LaunchProfileInitializationScript): any => ({
  ...obj,
  ...(obj.script && { script: SENSITIVE_STRING }),
  ...(obj.studioComponentName && { studioComponentName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LaunchProfileInitializationFilterSensitiveLog = (obj: LaunchProfileInitialization): any => ({
  ...obj,
  ...(obj.activeDirectory && {
    activeDirectory: LaunchProfileInitializationActiveDirectoryFilterSensitiveLog(obj.activeDirectory),
  }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.systemInitializationScripts && {
    systemInitializationScripts: obj.systemInitializationScripts.map((item) =>
      LaunchProfileInitializationScriptFilterSensitiveLog(item)
    ),
  }),
  ...(obj.userInitializationScripts && {
    userInitializationScripts: obj.userInitializationScripts.map((item) =>
      LaunchProfileInitializationScriptFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetLaunchProfileInitializationResponseFilterSensitiveLog = (
  obj: GetLaunchProfileInitializationResponse
): any => ({
  ...obj,
  ...(obj.launchProfileInitialization && {
    launchProfileInitialization: LaunchProfileInitializationFilterSensitiveLog(obj.launchProfileInitialization),
  }),
});

/**
 * @internal
 */
export const GetLaunchProfileMemberRequestFilterSensitiveLog = (obj: GetLaunchProfileMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchProfileMembershipFilterSensitiveLog = (obj: LaunchProfileMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLaunchProfileMemberResponseFilterSensitiveLog = (obj: GetLaunchProfileMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingImageRequestFilterSensitiveLog = (obj: GetStreamingImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingImageResponseFilterSensitiveLog = (obj: GetStreamingImageResponse): any => ({
  ...obj,
  ...(obj.streamingImage && { streamingImage: StreamingImageFilterSensitiveLog(obj.streamingImage) }),
});

/**
 * @internal
 */
export const GetStreamingSessionRequestFilterSensitiveLog = (obj: GetStreamingSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingSessionResponseFilterSensitiveLog = (obj: GetStreamingSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingSessionBackupRequestFilterSensitiveLog = (obj: GetStreamingSessionBackupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StreamingSessionBackupFilterSensitiveLog = (obj: StreamingSessionBackup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingSessionBackupResponseFilterSensitiveLog = (obj: GetStreamingSessionBackupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingSessionStreamRequestFilterSensitiveLog = (obj: GetStreamingSessionStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStreamingSessionStreamResponseFilterSensitiveLog = (obj: GetStreamingSessionStreamResponse): any => ({
  ...obj,
  ...(obj.stream && { stream: StreamingSessionStreamFilterSensitiveLog(obj.stream) }),
});

/**
 * @internal
 */
export const GetStudioRequestFilterSensitiveLog = (obj: GetStudioRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStudioResponseFilterSensitiveLog = (obj: GetStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
});

/**
 * @internal
 */
export const GetStudioComponentRequestFilterSensitiveLog = (obj: GetStudioComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStudioComponentResponseFilterSensitiveLog = (obj: GetStudioComponentResponse): any => ({
  ...obj,
  ...(obj.studioComponent && { studioComponent: StudioComponentFilterSensitiveLog(obj.studioComponent) }),
});

/**
 * @internal
 */
export const GetStudioMemberRequestFilterSensitiveLog = (obj: GetStudioMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StudioMembershipFilterSensitiveLog = (obj: StudioMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetStudioMemberResponseFilterSensitiveLog = (obj: GetStudioMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchProfileMembersRequestFilterSensitiveLog = (obj: ListLaunchProfileMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchProfileMembersResponseFilterSensitiveLog = (obj: ListLaunchProfileMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchProfilesRequestFilterSensitiveLog = (obj: ListLaunchProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLaunchProfilesResponseFilterSensitiveLog = (obj: ListLaunchProfilesResponse): any => ({
  ...obj,
  ...(obj.launchProfiles && {
    launchProfiles: obj.launchProfiles.map((item) => LaunchProfileFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const NewLaunchProfileMemberFilterSensitiveLog = (obj: NewLaunchProfileMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLaunchProfileMembersRequestFilterSensitiveLog = (obj: PutLaunchProfileMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLaunchProfileMembersResponseFilterSensitiveLog = (obj: PutLaunchProfileMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLaunchProfileRequestFilterSensitiveLog = (obj: UpdateLaunchProfileRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.streamConfiguration && {
    streamConfiguration: StreamConfigurationCreateFilterSensitiveLog(obj.streamConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateLaunchProfileResponseFilterSensitiveLog = (obj: UpdateLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
});

/**
 * @internal
 */
export const UpdateLaunchProfileMemberRequestFilterSensitiveLog = (obj: UpdateLaunchProfileMemberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLaunchProfileMemberResponseFilterSensitiveLog = (obj: UpdateLaunchProfileMemberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingImagesRequestFilterSensitiveLog = (obj: ListStreamingImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingImagesResponseFilterSensitiveLog = (obj: ListStreamingImagesResponse): any => ({
  ...obj,
  ...(obj.streamingImages && {
    streamingImages: obj.streamingImages.map((item) => StreamingImageFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListStreamingSessionBackupsRequestFilterSensitiveLog = (obj: ListStreamingSessionBackupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingSessionBackupsResponseFilterSensitiveLog = (
  obj: ListStreamingSessionBackupsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingSessionsRequestFilterSensitiveLog = (obj: ListStreamingSessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStreamingSessionsResponseFilterSensitiveLog = (obj: ListStreamingSessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudioComponentsRequestFilterSensitiveLog = (obj: ListStudioComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudioComponentsResponseFilterSensitiveLog = (obj: ListStudioComponentsResponse): any => ({
  ...obj,
  ...(obj.studioComponents && {
    studioComponents: obj.studioComponents.map((item) => StudioComponentFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListStudioMembersRequestFilterSensitiveLog = (obj: ListStudioMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudioMembersResponseFilterSensitiveLog = (obj: ListStudioMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudiosRequestFilterSensitiveLog = (obj: ListStudiosRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListStudiosResponseFilterSensitiveLog = (obj: ListStudiosResponse): any => ({
  ...obj,
  ...(obj.studios && { studios: obj.studios.map((item) => StudioFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NewStudioMemberFilterSensitiveLog = (obj: NewStudioMember): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStreamingImageRequestFilterSensitiveLog = (obj: UpdateStreamingImageRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStreamingImageResponseFilterSensitiveLog = (obj: UpdateStreamingImageResponse): any => ({
  ...obj,
  ...(obj.streamingImage && { streamingImage: StreamingImageFilterSensitiveLog(obj.streamingImage) }),
});

/**
 * @internal
 */
export const StartStreamingSessionRequestFilterSensitiveLog = (obj: StartStreamingSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStreamingSessionResponseFilterSensitiveLog = (obj: StartStreamingSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStreamingSessionRequestFilterSensitiveLog = (obj: StopStreamingSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopStreamingSessionResponseFilterSensitiveLog = (obj: StopStreamingSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateStudioComponentRequestFilterSensitiveLog = (obj: UpdateStudioComponentRequest): any => ({
  ...obj,
  ...(obj.configuration && { configuration: StudioComponentConfigurationFilterSensitiveLog(obj.configuration) }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.initializationScripts && {
    initializationScripts: obj.initializationScripts.map((item) =>
      StudioComponentInitializationScriptFilterSensitiveLog(item)
    ),
  }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.scriptParameters && { scriptParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStudioComponentResponseFilterSensitiveLog = (obj: UpdateStudioComponentResponse): any => ({
  ...obj,
  ...(obj.studioComponent && { studioComponent: StudioComponentFilterSensitiveLog(obj.studioComponent) }),
});

/**
 * @internal
 */
export const PutStudioMembersRequestFilterSensitiveLog = (obj: PutStudioMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStudioMembersResponseFilterSensitiveLog = (obj: PutStudioMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStudioSSOConfigurationRepairRequestFilterSensitiveLog = (
  obj: StartStudioSSOConfigurationRepairRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartStudioSSOConfigurationRepairResponseFilterSensitiveLog = (
  obj: StartStudioSSOConfigurationRepairResponse
): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
});

/**
 * @internal
 */
export const UpdateStudioRequestFilterSensitiveLog = (obj: UpdateStudioRequest): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateStudioResponseFilterSensitiveLog = (obj: UpdateStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
