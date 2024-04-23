// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { NimbleServiceException as __BaseException } from "./NimbleServiceException";

/**
 * @public
 */
export interface AcceptEulasRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The EULA ID.</p>
   */
  eulaIds?: string[];

  /**
   * @public
   * <p>The studio ID.</p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * <p>The acceptance of a EULA, required to use Amazon-provided streaming images.</p>
 */
export interface EulaAcceptance {
  /**
   * @public
   * <p>The ISO timestamp in seconds for when the EULA was accepted.</p>
   */
  acceptedAt?: Date;

  /**
   * @public
   * <p>The ID of the person who accepted the EULA.</p>
   */
  acceptedBy?: string;

  /**
   * @public
   * <p>The ID of the acceptee.</p>
   */
  accepteeId?: string;

  /**
   * @public
   * <p>The EULA acceptance ID.</p>
   */
  eulaAcceptanceId?: string;

  /**
   * @public
   * <p>The EULA ID.</p>
   */
  eulaId?: string;
}

/**
 * @public
 */
export interface AcceptEulasResponse {
  /**
   * @public
   * <p>A collection of EULA acceptances.</p>
   */
  eulaAcceptances?: EulaAcceptance[];
}

/**
 * @public
 * <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>Another operation is in progress. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>An internal error has occurred. Please retry your request.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>The specified resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>The request throughput limit was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>One of the parameters in the request is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A more specific error code.</p>
   */
  code?: string;

  /**
   * @public
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
 * @public
 * <p>An LDAP attribute of an Active Directory computer account, in the form of a name:value
 *             pair.</p>
 */
export interface ActiveDirectoryComputerAttribute {
  /**
   * @public
   * <p>The name for the LDAP attribute.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value for the LDAP attribute.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
 */
export interface ActiveDirectoryConfiguration {
  /**
   * @public
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * @public
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this studio
   *             component.</p>
   */
  directoryId?: string;

  /**
   * @public
   * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory
   *             computer.</p>
   */
  organizationalUnitDistinguishedName?: string;
}

/**
 * @public
 * @enum
 */
export const AutomaticTerminationMode = {
  ACTIVATED: "ACTIVATED",
  DEACTIVATED: "DEACTIVATED",
} as const;

/**
 * @public
 */
export type AutomaticTerminationMode = (typeof AutomaticTerminationMode)[keyof typeof AutomaticTerminationMode];

/**
 * @public
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 */
export interface ComputeFarmConfiguration {
  /**
   * @public
   * <p>The name of an Active Directory user that is used on ComputeFarm worker
   *             instances.</p>
   */
  activeDirectoryUser?: string;

  /**
   * @public
   * <p>The endpoint of the ComputeFarm that is accessed by the studio component
   *             resource.</p>
   */
  endpoint?: string;
}

/**
 * @public
 * @enum
 */
export const StreamingClipboardMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type StreamingClipboardMode = (typeof StreamingClipboardMode)[keyof typeof StreamingClipboardMode];

/**
 * @public
 * @enum
 */
export const StreamingInstanceType = {
  g3_4xlarge: "g3.4xlarge",
  g3s_xlarge: "g3s.xlarge",
  g4dn_12xlarge: "g4dn.12xlarge",
  g4dn_16xlarge: "g4dn.16xlarge",
  g4dn_2xlarge: "g4dn.2xlarge",
  g4dn_4xlarge: "g4dn.4xlarge",
  g4dn_8xlarge: "g4dn.8xlarge",
  g4dn_xlarge: "g4dn.xlarge",
  g5_16xlarge: "g5.16xlarge",
  g5_2xlarge: "g5.2xlarge",
  g5_4xlarge: "g5.4xlarge",
  g5_8xlarge: "g5.8xlarge",
  g5_xlarge: "g5.xlarge",
} as const;

/**
 * @public
 */
export type StreamingInstanceType = (typeof StreamingInstanceType)[keyof typeof StreamingInstanceType];

/**
 * @public
 * @enum
 */
export const SessionBackupMode = {
  AUTOMATIC: "AUTOMATIC",
  DEACTIVATED: "DEACTIVATED",
} as const;

/**
 * @public
 */
export type SessionBackupMode = (typeof SessionBackupMode)[keyof typeof SessionBackupMode];

/**
 * @public
 * <p>Configures how streaming sessions are backed up when launched from this launch
 *             profile.</p>
 */
export interface StreamConfigurationSessionBackup {
  /**
   * @public
   * <p>Specifies how artists sessions are backed up.</p>
   *         <p>Configures backups for streaming sessions launched with this launch profile. The
   *             default value is <code>DEACTIVATED</code>, which means that backups are deactivated. To
   *             allow backups, set this value to <code>AUTOMATIC</code>.</p>
   */
  mode?: SessionBackupMode;

  /**
   * @public
   * <p>The maximum number of backups that each streaming session created from this launch
   *             profile can have.</p>
   */
  maxBackupsToRetain?: number;
}

/**
 * @public
 * @enum
 */
export const SessionPersistenceMode = {
  ACTIVATED: "ACTIVATED",
  DEACTIVATED: "DEACTIVATED",
} as const;

/**
 * @public
 */
export type SessionPersistenceMode = (typeof SessionPersistenceMode)[keyof typeof SessionPersistenceMode];

/**
 * @public
 * @enum
 */
export const StreamingSessionStorageMode = {
  UPLOAD: "UPLOAD",
} as const;

/**
 * @public
 */
export type StreamingSessionStorageMode =
  (typeof StreamingSessionStorageMode)[keyof typeof StreamingSessionStorageMode];

/**
 * @public
 * <p>The upload storage root location (folder) on streaming workstations where files are
 *             uploaded.</p>
 */
export interface StreamingSessionStorageRoot {
  /**
   * @public
   * <p>The folder path in Linux workstations where files are uploaded.</p>
   */
  linux?: string;

  /**
   * @public
   * <p>The folder path in Windows workstations where files are uploaded.</p>
   */
  windows?: string;
}

/**
 * @public
 * <p>The configuration for a streaming session’s upload storage.</p>
 */
export interface StreamConfigurationSessionStorage {
  /**
   * @public
   * <p>The configuration for the upload storage root of the streaming session.</p>
   */
  root?: StreamingSessionStorageRoot;

  /**
   * @public
   * <p>Allows artists to upload files to their workstations. The only valid option is
   *                 <code>UPLOAD</code>.</p>
   */
  mode: StreamingSessionStorageMode[] | undefined;
}

/**
 * @public
 * <p>Custom volume configuration for the root volumes that are attached to streaming
 *             sessions.</p>
 *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
 *                 <code>ACTIVATED</code>.</p>
 */
export interface VolumeConfiguration {
  /**
   * @public
   * <p>The size of the root volume that is attached to the streaming session. The root volume
   *             size is measured in GiBs.</p>
   */
  size?: number;

  /**
   * @public
   * <p>The throughput to provision for the root volume that is attached to the streaming
   *             session. The throughput is measured in MiB/s.</p>
   */
  throughput?: number;

  /**
   * @public
   * <p>The number of I/O operations per second for the root volume that is attached to
   *             streaming session.</p>
   */
  iops?: number;
}

/**
 * @public
 * <p>Configuration for streaming workstations created using this launch profile.</p>
 */
export interface StreamConfigurationCreate {
  /**
   * @public
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   */
  clipboardMode: StreamingClipboardMode | undefined;

  /**
   * @public
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  ec2InstanceTypes: StreamingInstanceType[] | undefined;

  /**
   * @public
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * @public
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  streamingImageIds: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>The upload storage for a streaming workstation that is created using this launch
   *             profile.</p>
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * @public
   * <p>Configures how streaming sessions are backed up when launched from this launch
   *             profile.</p>
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * @public
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * @public
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * @public
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
  automaticTerminationMode?: AutomaticTerminationMode;
}

/**
 * @public
 */
export interface CreateLaunchProfileRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
   *             These subnets must support the specified instance types. </p>
   */
  ec2SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * @public
   * <p>The name for the launch profile.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration: StreamConfigurationCreate | undefined;

  /**
   * @public
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds: string[] | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const LaunchProfileState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type LaunchProfileState = (typeof LaunchProfileState)[keyof typeof LaunchProfileState];

/**
 * @public
 * @enum
 */
export const LaunchProfileStatusCode = {
  ENCRYPTION_KEY_ACCESS_DENIED: "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND: "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INSTANCE_TYPES_PROVIDED: "INVALID_INSTANCE_TYPES_PROVIDED",
  INVALID_SUBNETS_COMBINATION: "INVALID_SUBNETS_COMBINATION",
  INVALID_SUBNETS_PROVIDED: "INVALID_SUBNETS_PROVIDED",
  LAUNCH_PROFILE_CREATED: "LAUNCH_PROFILE_CREATED",
  LAUNCH_PROFILE_CREATE_IN_PROGRESS: "LAUNCH_PROFILE_CREATE_IN_PROGRESS",
  LAUNCH_PROFILE_DELETED: "LAUNCH_PROFILE_DELETED",
  LAUNCH_PROFILE_DELETE_IN_PROGRESS: "LAUNCH_PROFILE_DELETE_IN_PROGRESS",
  LAUNCH_PROFILE_UPDATED: "LAUNCH_PROFILE_UPDATED",
  LAUNCH_PROFILE_UPDATE_IN_PROGRESS: "LAUNCH_PROFILE_UPDATE_IN_PROGRESS",
  LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED: "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED",
  STREAMING_IMAGE_NOT_FOUND: "STREAMING_IMAGE_NOT_FOUND",
  STREAMING_IMAGE_NOT_READY: "STREAMING_IMAGE_NOT_READY",
} as const;

/**
 * @public
 */
export type LaunchProfileStatusCode = (typeof LaunchProfileStatusCode)[keyof typeof LaunchProfileStatusCode];

/**
 * @public
 * <p>A configuration for a streaming session.</p>
 */
export interface StreamConfiguration {
  /**
   * @public
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   */
  clipboardMode: StreamingClipboardMode | undefined;

  /**
   * @public
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  ec2InstanceTypes: StreamingInstanceType[] | undefined;

  /**
   * @public
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   */
  maxSessionLengthInMinutes?: number;

  /**
   * @public
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   */
  streamingImageIds: string[] | undefined;

  /**
   * @public
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
   * @public
   * <p>The upload storage for a streaming session.</p>
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * @public
   * <p>Information about the streaming session backup.</p>
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * @public
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * @public
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * @public
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
  automaticTerminationMode?: AutomaticTerminationMode;
}

/**
 * @public
 * @enum
 */
export const LaunchProfileValidationState = {
  VALIDATION_FAILED: "VALIDATION_FAILED",
  VALIDATION_FAILED_INTERNAL_SERVER_ERROR: "VALIDATION_FAILED_INTERNAL_SERVER_ERROR",
  VALIDATION_IN_PROGRESS: "VALIDATION_IN_PROGRESS",
  VALIDATION_NOT_STARTED: "VALIDATION_NOT_STARTED",
  VALIDATION_SUCCESS: "VALIDATION_SUCCESS",
} as const;

/**
 * @public
 */
export type LaunchProfileValidationState =
  (typeof LaunchProfileValidationState)[keyof typeof LaunchProfileValidationState];

/**
 * @public
 * @enum
 */
export const LaunchProfileValidationStatusCode = {
  VALIDATION_FAILED_INTERNAL_SERVER_ERROR: "VALIDATION_FAILED_INTERNAL_SERVER_ERROR",
  VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY: "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY",
  VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION: "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION",
  VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION: "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION",
  VALIDATION_FAILED_SUBNET_NOT_FOUND: "VALIDATION_FAILED_SUBNET_NOT_FOUND",
  VALIDATION_FAILED_UNAUTHORIZED: "VALIDATION_FAILED_UNAUTHORIZED",
  VALIDATION_IN_PROGRESS: "VALIDATION_IN_PROGRESS",
  VALIDATION_NOT_STARTED: "VALIDATION_NOT_STARTED",
  VALIDATION_SUCCESS: "VALIDATION_SUCCESS",
} as const;

/**
 * @public
 */
export type LaunchProfileValidationStatusCode =
  (typeof LaunchProfileValidationStatusCode)[keyof typeof LaunchProfileValidationStatusCode];

/**
 * @public
 * @enum
 */
export const LaunchProfileValidationType = {
  VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT: "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT",
  VALIDATE_NETWORK_ACL_ASSOCIATION: "VALIDATE_NETWORK_ACL_ASSOCIATION",
  VALIDATE_SECURITY_GROUP_ASSOCIATION: "VALIDATE_SECURITY_GROUP_ASSOCIATION",
  VALIDATE_SUBNET_ASSOCIATION: "VALIDATE_SUBNET_ASSOCIATION",
} as const;

/**
 * @public
 */
export type LaunchProfileValidationType =
  (typeof LaunchProfileValidationType)[keyof typeof LaunchProfileValidationType];

/**
 * @public
 * <p>The launch profile validation result.</p>
 */
export interface ValidationResult {
  /**
   * @public
   * <p>The type of the validation result.</p>
   */
  type: LaunchProfileValidationType | undefined;

  /**
   * @public
   * <p>The current state.</p>
   */
  state: LaunchProfileValidationState | undefined;

  /**
   * @public
   * <p>The status code. This will contain the failure reason if the state is
   *                 <code>VALIDATION_FAILED</code>.</p>
   */
  statusCode: LaunchProfileValidationStatusCode | undefined;

  /**
   * @public
   * <p>The status message for the validation result.</p>
   */
  statusMessage: string | undefined;
}

/**
 * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that created the launch profile.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>A human-readable description of the launch profile.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Unique identifiers for a collection of EC2 subnets.</p>
   */
  ec2SubnetIds?: string[];

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * @public
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions?: string[];

  /**
   * @public
   * <p>A friendly name for the launch profile.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The current state.</p>
   */
  state?: LaunchProfileState;

  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: LaunchProfileStatusCode;

  /**
   * @public
   * <p>The status message for the launch profile.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration?: StreamConfiguration;

  /**
   * @public
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The list of the latest validation results.</p>
   */
  validationResults?: ValidationResult[];
}

/**
 * @public
 */
export interface CreateLaunchProfileResponse {
  /**
   * @public
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface CreateStreamingImageRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A human-readable description of the streaming image.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
   */
  ec2ImageId: string | undefined;

  /**
   * @public
   * <p>A friendly name for a streaming image resource.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const StreamingImageEncryptionConfigurationKeyType = {
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;

/**
 * @public
 */
export type StreamingImageEncryptionConfigurationKeyType =
  (typeof StreamingImageEncryptionConfigurationKeyType)[keyof typeof StreamingImageEncryptionConfigurationKeyType];

/**
 * @public
 * <p>Specifies how a streaming image is encrypted.</p>
 */
export interface StreamingImageEncryptionConfiguration {
  /**
   * @public
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   */
  keyArn?: string;

  /**
   * @public
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  keyType: StreamingImageEncryptionConfigurationKeyType | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamingImageState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StreamingImageState = (typeof StreamingImageState)[keyof typeof StreamingImageState];

/**
 * @public
 * @enum
 */
export const StreamingImageStatusCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STREAMING_IMAGE_CREATE_IN_PROGRESS: "STREAMING_IMAGE_CREATE_IN_PROGRESS",
  STREAMING_IMAGE_DELETED: "STREAMING_IMAGE_DELETED",
  STREAMING_IMAGE_DELETE_IN_PROGRESS: "STREAMING_IMAGE_DELETE_IN_PROGRESS",
  STREAMING_IMAGE_READY: "STREAMING_IMAGE_READY",
  STREAMING_IMAGE_UPDATE_IN_PROGRESS: "STREAMING_IMAGE_UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StreamingImageStatusCode = (typeof StreamingImageStatusCode)[keyof typeof StreamingImageStatusCode];

/**
 * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A human-readable description of the streaming image.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of an EC2 machine image with which to create the streaming image.</p>
   */
  ec2ImageId?: string;

  /**
   * @public
   * <p>The encryption configuration.</p>
   */
  encryptionConfiguration?: StreamingImageEncryptionConfiguration;

  /**
   * @public
   * <p>The list of EULAs that must be accepted before a Streaming Session can be started
   *             using this streaming image.</p>
   */
  eulaIds?: string[];

  /**
   * @public
   * <p>A friendly name for a streaming image resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The owner of the streaming image, either the <code>studioId</code> that contains the
   *             streaming image, or <code>amazon</code> for images that are provided by Amazon Nimble Studio.</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The platform of the streaming image, either Windows or Linux.</p>
   */
  platform?: string;

  /**
   * @public
   * <p>The current state.</p>
   */
  state?: StreamingImageState;

  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: StreamingImageStatusCode;

  /**
   * @public
   * <p>The status message for the streaming image.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStreamingImageResponse {
  /**
   * @public
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface CreateStreamingSessionRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The EC2 Instance type used for the streaming session.</p>
   */
  ec2InstanceType?: StreamingInstanceType;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const StreamingSessionState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  START_FAILED: "START_FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
  STOPPED: "STOPPED",
  STOP_FAILED: "STOP_FAILED",
  STOP_IN_PROGRESS: "STOP_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StreamingSessionState = (typeof StreamingSessionState)[keyof typeof StreamingSessionState];

/**
 * @public
 * @enum
 */
export const StreamingSessionStatusCode = {
  ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR: "ACTIVE_DIRECTORY_DOMAIN_JOIN_ERROR",
  AMI_VALIDATION_ERROR: "AMI_VALIDATION_ERROR",
  DECRYPT_STREAMING_IMAGE_ERROR: "DECRYPT_STREAMING_IMAGE_ERROR",
  INITIALIZATION_SCRIPT_ERROR: "INITIALIZATION_SCRIPT_ERROR",
  INSUFFICIENT_CAPACITY: "INSUFFICIENT_CAPACITY",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NETWORK_CONNECTION_ERROR: "NETWORK_CONNECTION_ERROR",
  NETWORK_INTERFACE_ERROR: "NETWORK_INTERFACE_ERROR",
  STREAMING_SESSION_CREATE_IN_PROGRESS: "STREAMING_SESSION_CREATE_IN_PROGRESS",
  STREAMING_SESSION_DELETED: "STREAMING_SESSION_DELETED",
  STREAMING_SESSION_DELETE_IN_PROGRESS: "STREAMING_SESSION_DELETE_IN_PROGRESS",
  STREAMING_SESSION_READY: "STREAMING_SESSION_READY",
  STREAMING_SESSION_STARTED: "STREAMING_SESSION_STARTED",
  STREAMING_SESSION_START_IN_PROGRESS: "STREAMING_SESSION_START_IN_PROGRESS",
  STREAMING_SESSION_STOPPED: "STREAMING_SESSION_STOPPED",
  STREAMING_SESSION_STOP_IN_PROGRESS: "STREAMING_SESSION_STOP_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StreamingSessionStatusCode = (typeof StreamingSessionStatusCode)[keyof typeof StreamingSessionStatusCode];

/**
 * @public
 * @enum
 */
export const VolumeRetentionMode = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type VolumeRetentionMode = (typeof VolumeRetentionMode)[keyof typeof VolumeRetentionMode];

/**
 * @public
 * <p>A streaming session is a virtual workstation created using a particular launch
 *             profile.</p>
 */
export interface StreamingSession {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that created the streaming session.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The EC2 Instance type used for the streaming session.</p>
   */
  ec2InstanceType?: string;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * @public
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>The session ID.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>The current state.</p>
   */
  state?: StreamingSessionState;

  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: StreamingSessionStatusCode;

  /**
   * @public
   * <p>The status message for the streaming session.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The ID of the streaming image.</p>
   */
  streamingImageId?: string;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The time the streaming session will automatically terminate if not terminated by the
   *             user.</p>
   */
  terminateAt?: Date;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>The time the session entered <code>STOP_IN_PROGRESS</code> state.</p>
   */
  stoppedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that stopped the streaming session.</p>
   */
  stoppedBy?: string;

  /**
   * @public
   * <p>The time the session entered <code>START_IN_PROGRESS</code> state.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that started the streaming session.</p>
   */
  startedBy?: string;

  /**
   * @public
   * <p>The time the streaming session will automatically be stopped if the user doesn’t stop
   *             the session themselves. </p>
   */
  stopAt?: Date;

  /**
   * @public
   * <p>The backup ID used to restore a streaming session.</p>
   */
  startedFromBackupId?: string;

  /**
   * @public
   * <p>Shows the current backup setting of the session.</p>
   */
  backupMode?: SessionBackupMode;

  /**
   * @public
   * <p>The maximum number of backups of a streaming session that you can have. When the
   *             maximum number of backups is reached, the oldest backup is deleted.</p>
   */
  maxBackupsToRetain?: number;

  /**
   * @public
   * <p>Determine if an EBS volume created from this streaming session will be backed
   *             up.</p>
   */
  volumeRetentionMode?: VolumeRetentionMode;

  /**
   * @public
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * @public
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   */
  volumeConfiguration?: VolumeConfiguration;

  /**
   * @public
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
  automaticTerminationMode?: AutomaticTerminationMode;
}

/**
 * @public
 */
export interface CreateStreamingSessionResponse {
  /**
   * @public
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface CreateStreamingSessionStreamRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The expiration time in seconds.</p>
   */
  expirationInSeconds?: number;

  /**
   * @public
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StreamingSessionStreamState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
} as const;

/**
 * @public
 */
export type StreamingSessionStreamState =
  (typeof StreamingSessionStreamState)[keyof typeof StreamingSessionStreamState];

/**
 * @public
 * @enum
 */
export const StreamingSessionStreamStatusCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NETWORK_CONNECTION_ERROR: "NETWORK_CONNECTION_ERROR",
  STREAM_CREATE_IN_PROGRESS: "STREAM_CREATE_IN_PROGRESS",
  STREAM_DELETED: "STREAM_DELETED",
  STREAM_DELETE_IN_PROGRESS: "STREAM_DELETE_IN_PROGRESS",
  STREAM_READY: "STREAM_READY",
} as const;

/**
 * @public
 */
export type StreamingSessionStreamStatusCode =
  (typeof StreamingSessionStreamStatusCode)[keyof typeof StreamingSessionStreamStatusCode];

/**
 * @public
 * <p>A stream is an active connection to a streaming session, enabling a studio user to
 *             control the streaming session using a compatible client. Streaming session streams are
 *             compatible with the NICE DCV web client, included in the Nimble Studio portal, or
 *             the NICE DCV desktop client.</p>
 */
export interface StreamingSessionStream {
  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that created the streaming session stream.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource expires.</p>
   */
  expiresAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>The current state.</p>
   */
  state?: StreamingSessionStreamState;

  /**
   * @public
   * <p>The streaming session stream status code.</p>
   */
  statusCode?: StreamingSessionStreamStatusCode;

  /**
   * @public
   * <p>The stream ID.</p>
   */
  streamId?: string;

  /**
   * @public
   * <p>The URL to connect to this stream using the DCV client.</p>
   */
  url?: string;
}

/**
 * @public
 */
export interface CreateStreamingSessionStreamResponse {
  /**
   * @public
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
}

/**
 * @public
 * @enum
 */
export const StudioEncryptionConfigurationKeyType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KEY: "CUSTOMER_MANAGED_KEY",
} as const;

/**
 * @public
 */
export type StudioEncryptionConfigurationKeyType =
  (typeof StudioEncryptionConfigurationKeyType)[keyof typeof StudioEncryptionConfigurationKeyType];

/**
 * @public
 * <p>Configuration of the encryption method that is used for the studio.</p>
 */
export interface StudioEncryptionConfiguration {
  /**
   * @public
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   */
  keyArn?: string;

  /**
   * @public
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   */
  keyType: StudioEncryptionConfigurationKeyType | undefined;
}

/**
 * @public
 */
export interface CreateStudioRequest {
  /**
   * @public
   * <p>The IAM role that studio admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  adminRoleArn: string | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A friendly name for the studio.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>The studio encryption configuration.</p>
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * @public
   * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed
   *             by Nimble Studio users.</p>
   */
  studioName: string | undefined;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The IAM role that studio users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  userRoleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StudioState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StudioState = (typeof StudioState)[keyof typeof StudioState];

/**
 * @public
 * @enum
 */
export const StudioStatusCode = {
  AWS_SSO_ACCESS_DENIED: "AWS_SSO_ACCESS_DENIED",
  AWS_SSO_CONFIGURATION_REPAIRED: "AWS_SSO_CONFIGURATION_REPAIRED",
  AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS: "AWS_SSO_CONFIGURATION_REPAIR_IN_PROGRESS",
  AWS_SSO_NOT_ENABLED: "AWS_SSO_NOT_ENABLED",
  AWS_STS_REGION_DISABLED: "AWS_STS_REGION_DISABLED",
  ENCRYPTION_KEY_ACCESS_DENIED: "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND: "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  ROLE_COULD_NOT_BE_ASSUMED: "ROLE_COULD_NOT_BE_ASSUMED",
  ROLE_NOT_OWNED_BY_STUDIO_OWNER: "ROLE_NOT_OWNED_BY_STUDIO_OWNER",
  STUDIO_CREATED: "STUDIO_CREATED",
  STUDIO_CREATE_IN_PROGRESS: "STUDIO_CREATE_IN_PROGRESS",
  STUDIO_DELETED: "STUDIO_DELETED",
  STUDIO_DELETE_IN_PROGRESS: "STUDIO_DELETE_IN_PROGRESS",
  STUDIO_UPDATED: "STUDIO_UPDATED",
  STUDIO_UPDATE_IN_PROGRESS: "STUDIO_UPDATE_IN_PROGRESS",
  STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED: "STUDIO_WITH_LAUNCH_PROFILES_NOT_DELETED",
  STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED: "STUDIO_WITH_STREAMING_IMAGES_NOT_DELETED",
  STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED: "STUDIO_WITH_STUDIO_COMPONENTS_NOT_DELETED",
} as const;

/**
 * @public
 */
export type StudioStatusCode = (typeof StudioStatusCode)[keyof typeof StudioStatusCode];

/**
 * @public
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
   * @public
   * <p>The IAM role that studio admins assume when logging in to the Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>A friendly name for the studio.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region where the studio resource is located.</p>
   */
  homeRegion?: string;

  /**
   * @public
   * <p>The IAM Identity Center application client ID used to integrate with IAM Identity Center. This ID allows IAM Identity Center users to log in to Nimble Studio
   *             portal.</p>
   */
  ssoClientId?: string;

  /**
   * @public
   * <p>The current state of the studio resource.</p>
   */
  state?: StudioState;

  /**
   * @public
   * <p>Status codes that provide additional detail on the studio state.</p>
   */
  statusCode?: StudioStatusCode;

  /**
   * @public
   * <p>Additional detail on the studio state.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>Configuration of the encryption method that is used for the studio.</p>
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * @public
   * <p>The unique identifier for a studio resource. In Nimble Studio, all other
   *             resources are contained in a studio resource.</p>
   */
  studioId?: string;

  /**
   * @public
   * <p>The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.</p>
   */
  studioName?: string;

  /**
   * @public
   * <p>The address of the web page for the studio.</p>
   */
  studioUrl?: string;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The IAM role that studio users assume when logging in to the Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

/**
 * @public
 */
export interface CreateStudioResponse {
  /**
   * @public
   * <p>Information about a studio.</p>
   */
  studio?: Studio;
}

/**
 * @public
 * <p>The configuration for a license service that is associated with a studio
 *             resource.</p>
 */
export interface LicenseServiceConfiguration {
  /**
   * @public
   * <p>The endpoint of the license service that is accessed by the studio component
   *             resource.</p>
   */
  endpoint?: string;
}

/**
 * @public
 * <p>The configuration for a shared file storage system that is associated with a studio
 *             resource.</p>
 */
export interface SharedFileSystemConfiguration {
  /**
   * @public
   * <p>The endpoint of the shared file system that is accessed by the studio component
   *             resource.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The unique identifier for a file system.</p>
   */
  fileSystemId?: string;

  /**
   * @public
   * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
   */
  linuxMountPoint?: string;

  /**
   * @public
   * <p>The name of the file share.</p>
   */
  shareName?: string;

  /**
   * @public
   * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
   */
  windowsMountDrive?: string;
}

/**
 * @public
 * <p>The configuration of the studio component, based on component type.</p>
 */
export interface StudioComponentConfiguration {
  /**
   * @public
   * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
   */
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  /**
   * @public
   * <p>The configuration for a render farm that is associated with a studio resource.</p>
   */
  computeFarmConfiguration?: ComputeFarmConfiguration;

  /**
   * @public
   * <p>The configuration for a license service that is associated with a studio
   *             resource.</p>
   */
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  /**
   * @public
   * <p>The configuration for a shared file storage system that is associated with a studio
   *             resource.</p>
   */
  sharedFileSystemConfiguration?: SharedFileSystemConfiguration;
}

/**
 * @public
 * @enum
 */
export const LaunchProfilePlatform = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type LaunchProfilePlatform = (typeof LaunchProfilePlatform)[keyof typeof LaunchProfilePlatform];

/**
 * @public
 * @enum
 */
export const StudioComponentInitializationScriptRunContext = {
  SYSTEM_INITIALIZATION: "SYSTEM_INITIALIZATION",
  USER_INITIALIZATION: "USER_INITIALIZATION",
} as const;

/**
 * @public
 */
export type StudioComponentInitializationScriptRunContext =
  (typeof StudioComponentInitializationScriptRunContext)[keyof typeof StudioComponentInitializationScriptRunContext];

/**
 * @public
 * <p>Initialization scripts for studio components.</p>
 */
export interface StudioComponentInitializationScript {
  /**
   * @public
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersion?: string;

  /**
   * @public
   * <p>The platform of the initialization script, either Windows or Linux.</p>
   */
  platform?: LaunchProfilePlatform;

  /**
   * @public
   * <p>The method to use when running the initialization script.</p>
   */
  runContext?: StudioComponentInitializationScriptRunContext;

  /**
   * @public
   * <p>The initialization script.</p>
   */
  script?: string;
}

/**
 * @public
 * <p>A parameter for a studio component script, in the form of a key-value pair.</p>
 */
export interface ScriptParameterKeyValue {
  /**
   * @public
   * <p>A script parameter key.</p>
   */
  key?: string;

  /**
   * @public
   * <p>A script parameter value.</p>
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const StudioComponentSubtype = {
  AMAZON_FSX_FOR_LUSTRE: "AMAZON_FSX_FOR_LUSTRE",
  AMAZON_FSX_FOR_WINDOWS: "AMAZON_FSX_FOR_WINDOWS",
  AWS_MANAGED_MICROSOFT_AD: "AWS_MANAGED_MICROSOFT_AD",
  CUSTOM: "CUSTOM",
} as const;

/**
 * @public
 */
export type StudioComponentSubtype = (typeof StudioComponentSubtype)[keyof typeof StudioComponentSubtype];

/**
 * @public
 * @enum
 */
export const StudioComponentType = {
  ACTIVE_DIRECTORY: "ACTIVE_DIRECTORY",
  COMPUTE_FARM: "COMPUTE_FARM",
  CUSTOM: "CUSTOM",
  LICENSE_SERVICE: "LICENSE_SERVICE",
  SHARED_FILE_SYSTEM: "SHARED_FILE_SYSTEM",
} as const;

/**
 * @public
 */
export type StudioComponentType = (typeof StudioComponentType)[keyof typeof StudioComponentType];

/**
 * @public
 */
export interface CreateStudioComponentRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * @public
   * <p>The name for the studio component.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of the studio component.</p>
   */
  type: StudioComponentType | undefined;

  /**
   * @public
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * @public
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const StudioComponentState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StudioComponentState = (typeof StudioComponentState)[keyof typeof StudioComponentState];

/**
 * @public
 * @enum
 */
export const StudioComponentStatusCode = {
  ACTIVE_DIRECTORY_ALREADY_EXISTS: "ACTIVE_DIRECTORY_ALREADY_EXISTS",
  ENCRYPTION_KEY_ACCESS_DENIED: "ENCRYPTION_KEY_ACCESS_DENIED",
  ENCRYPTION_KEY_NOT_FOUND: "ENCRYPTION_KEY_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STUDIO_COMPONENT_CREATED: "STUDIO_COMPONENT_CREATED",
  STUDIO_COMPONENT_CREATE_IN_PROGRESS: "STUDIO_COMPONENT_CREATE_IN_PROGRESS",
  STUDIO_COMPONENT_DELETED: "STUDIO_COMPONENT_DELETED",
  STUDIO_COMPONENT_DELETE_IN_PROGRESS: "STUDIO_COMPONENT_DELETE_IN_PROGRESS",
  STUDIO_COMPONENT_UPDATED: "STUDIO_COMPONENT_UPDATED",
  STUDIO_COMPONENT_UPDATE_IN_PROGRESS: "STUDIO_COMPONENT_UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StudioComponentStatusCode = (typeof StudioComponentStatusCode)[keyof typeof StudioComponentStatusCode];

/**
 * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that created the studio component.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>A human-readable description for the studio component resource.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * @public
   * <p>A friendly name for the studio component resource.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * @public
   * <p>The current state.</p>
   */
  state?: StudioComponentState;

  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: StudioComponentStatusCode;

  /**
   * @public
   * <p>The status message for the studio component.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * @public
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;

  /**
   * @public
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * @public
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 */
export interface CreateStudioComponentResponse {
  /**
   * @public
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface DeleteLaunchProfileRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchProfileResponse {
  /**
   * @public
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface DeleteLaunchProfileMemberRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchProfileMemberResponse {}

/**
 * @public
 */
export interface DeleteStreamingImageRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamingImageResponse {
  /**
   * @public
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface DeleteStreamingSessionRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamingSessionResponse {
  /**
   * @public
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface DeleteStudioRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioResponse {
  /**
   * @public
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface DeleteStudioComponentRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioComponentResponse {
  /**
   * @public
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface DeleteStudioMemberRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioMemberResponse {}

/**
 * @public
 * <p>Represents a EULA resource.</p>
 */
export interface Eula {
  /**
   * @public
   * <p>The EULA content.</p>
   */
  content?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The EULA ID.</p>
   */
  eulaId?: string;

  /**
   * @public
   * <p>The name for the EULA.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListEulaAcceptancesRequest {
  /**
   * @public
   * <p>The list of EULA IDs that have been previously accepted.</p>
   */
  eulaIds?: string[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListEulaAcceptancesResponse {
  /**
   * @public
   * <p>A collection of EULA acceptances.</p>
   */
  eulaAcceptances?: EulaAcceptance[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEulaRequest {
  /**
   * @public
   * <p>The EULA ID.</p>
   */
  eulaId: string | undefined;
}

/**
 * @public
 */
export interface GetEulaResponse {
  /**
   * @public
   * <p>The EULA.</p>
   */
  eula?: Eula;
}

/**
 * @public
 */
export interface ListEulasRequest {
  /**
   * @public
   * <p>The list of EULA IDs that should be returned</p>
   */
  eulaIds?: string[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEulasResponse {
  /**
   * @public
   * <p>A collection of EULA resources.</p>
   */
  eulas?: Eula[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileRequest {
  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchProfileResponse {
  /**
   * @public
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface GetLaunchProfileDetailsRequest {
  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * <p>The studio component's summary.</p>
 */
export interface StudioComponentSummary {
  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that created the studio component.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name for the studio component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * @public
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype;

  /**
   * @public
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType;

  /**
   * @public
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The user ID of the user that most recently updated the resource.</p>
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileDetailsResponse {
  /**
   * @public
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;

  /**
   * @public
   * <p>A collection of streaming images.</p>
   */
  streamingImages?: StreamingImage[];

  /**
   * @public
   * <p>A collection of studio component summaries.</p>
   */
  studioComponentSummaries?: StudioComponentSummary[];
}

/**
 * @public
 */
export interface GetLaunchProfileInitializationRequest {
  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The launch profile protocol versions supported by the client.</p>
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * @public
   * <p>The launch purpose.</p>
   */
  launchPurpose: string | undefined;

  /**
   * @public
   * <p>The platform where this Launch Profile will be used, either Windows or Linux.</p>
   */
  platform: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * <p>The launch profile initialization Active Directory contains information required for
 *             the launch profile to connect to the Active Directory.</p>
 */
export interface LaunchProfileInitializationActiveDirectory {
  /**
   * @public
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * @public
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this launch
   *             profile.</p>
   */
  directoryId?: string;

  /**
   * @public
   * <p>The directory name.</p>
   */
  directoryName?: string;

  /**
   * @public
   * <p>The DNS IP address.</p>
   */
  dnsIpAddresses?: string[];

  /**
   * @public
   * <p>The name for the organizational unit distinguished name.</p>
   */
  organizationalUnitDistinguishedName?: string;

  /**
   * @public
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * @public
   * <p>The name for the studio component.</p>
   */
  studioComponentName?: string;
}

/**
 * @public
 * <p>The launch profile initialization script is used when start streaming session
 *             runs.</p>
 */
export interface LaunchProfileInitializationScript {
  /**
   * @public
   * <p>The initialization script.</p>
   */
  script?: string;

  /**
   * @public
   * <p>The unique identifier for a studio component resource.</p>
   */
  studioComponentId?: string;

  /**
   * @public
   * <p>The name for the studio component.</p>
   */
  studioComponentName?: string;

  /**
   * @public
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * @public
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 * <p>A launch profile initialization contains information required for a workstation or
 *             server to connect to a launch profile.</p>
 *         <p>This includes scripts, endpoints, security groups, subnets, and other
 *             configuration.</p>
 */
export interface LaunchProfileInitialization {
  /**
   * @public
   * <p>A <code>LaunchProfileInitializationActiveDirectory</code> resource.</p>
   */
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  /**
   * @public
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId?: string;

  /**
   * @public
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersion?: string;

  /**
   * @public
   * <p>The launch purpose.</p>
   */
  launchPurpose?: string;

  /**
   * @public
   * <p>The name for the launch profile.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The platform of the launch platform, either Windows or Linux.</p>
   */
  platform?: LaunchProfilePlatform;

  /**
   * @public
   * <p>The system initializtion scripts.</p>
   */
  systemInitializationScripts?: LaunchProfileInitializationScript[];

  /**
   * @public
   * <p>The user initializtion scripts.</p>
   */
  userInitializationScripts?: LaunchProfileInitializationScript[];
}

/**
 * @public
 */
export interface GetLaunchProfileInitializationResponse {
  /**
   * @public
   * <p>The launch profile initialization.</p>
   */
  launchProfileInitialization?: LaunchProfileInitialization;
}

/**
 * @public
 */
export interface GetLaunchProfileMemberRequest {
  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LaunchProfilePersona = {
  USER: "USER",
} as const;

/**
 * @public
 */
export type LaunchProfilePersona = (typeof LaunchProfilePersona)[keyof typeof LaunchProfilePersona];

/**
 * @public
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
   * @public
   * <p>The ID of the identity store.</p>
   */
  identityStoreId?: string;

  /**
   * @public
   * <p>The persona.</p>
   */
  persona?: LaunchProfilePersona;

  /**
   * @public
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * @public
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   */
  sid?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileMemberResponse {
  /**
   * @public
   * <p>The member.</p>
   */
  member?: LaunchProfileMembership;
}

/**
 * @public
 */
export interface GetStreamingImageRequest {
  /**
   * @public
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingImageResponse {
  /**
   * @public
   * <p>The streaming image.</p>
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface GetStreamingSessionRequest {
  /**
   * @public
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingSessionResponse {
  /**
   * @public
   * <p>The session.</p>
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface GetStreamingSessionBackupRequest {
  /**
   * @public
   * <p>The ID of the backup.</p>
   */
  backupId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * <p>Information about the streaming session backup.</p>
 */
export interface StreamingSessionBackup {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The ISO timestamp in for when the resource was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The ID of the launch profile which allowed the backups for the streaming
   *             session.</p>
   */
  launchProfileId?: string;

  /**
   * @public
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>The streaming session ID for the <code>StreamingSessionBackup</code>.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>The streaming session state.</p>
   */
  state?: StreamingSessionState;

  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: StreamingSessionStatusCode;

  /**
   * @public
   * <p>The status message for the streaming session backup.</p>
   */
  statusMessage?: string;

  /**
   * @public
   * <p>The ID of the backup.</p>
   */
  backupId?: string;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetStreamingSessionBackupResponse {
  /**
   * @public
   * <p>Information about the streaming session backup.</p>
   */
  streamingSessionBackup?: StreamingSessionBackup;
}

/**
 * @public
 */
export interface GetStreamingSessionStreamRequest {
  /**
   * @public
   * <p>The streaming session ID.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The streaming session stream ID.</p>
   */
  streamId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingSessionStreamResponse {
  /**
   * @public
   * <p>The stream.</p>
   */
  stream?: StreamingSessionStream;
}

/**
 * @public
 */
export interface GetStudioRequest {
  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStudioResponse {
  /**
   * @public
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface GetStudioComponentRequest {
  /**
   * @public
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStudioComponentResponse {
  /**
   * @public
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface GetStudioMemberRequest {
  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StudioPersona = {
  ADMINISTRATOR: "ADMINISTRATOR",
} as const;

/**
 * @public
 */
export type StudioPersona = (typeof StudioPersona)[keyof typeof StudioPersona];

/**
 * @public
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
   * @public
   * <p>The ID of the identity store.</p>
   */
  identityStoreId?: string;

  /**
   * @public
   * <p>The persona.</p>
   */
  persona?: StudioPersona;

  /**
   * @public
   * <p>The principal ID.</p>
   */
  principalId?: string;

  /**
   * @public
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   */
  sid?: string;
}

/**
 * @public
 */
export interface GetStudioMemberResponse {
  /**
   * @public
   * <p>The member.</p>
   */
  member?: StudioMembership;
}

/**
 * @public
 */
export interface ListLaunchProfileMembersRequest {
  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchProfileMembersResponse {
  /**
   * @public
   * <p>A list of members.</p>
   */
  members?: LaunchProfileMembership[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListLaunchProfilesRequest {
  /**
   * @public
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId?: string;

  /**
   * @public
   * <p>Filter this request to launch profiles in any of the given states.</p>
   */
  states?: LaunchProfileState[];

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchProfilesResponse {
  /**
   * @public
   * <p>A collection of launch profiles.</p>
   */
  launchProfiles?: LaunchProfile[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>A new member that is added to a launch profile.</p>
 */
export interface NewLaunchProfileMember {
  /**
   * @public
   * <p>The persona.</p>
   */
  persona: LaunchProfilePersona | undefined;

  /**
   * @public
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface PutLaunchProfileMembersRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>A list of members.</p>
   */
  members: NewLaunchProfileMember[] | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface PutLaunchProfileMembersResponse {}

/**
 * @public
 */
export interface UpdateLaunchProfileRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   */
  launchProfileProtocolVersions?: string[];

  /**
   * @public
   * <p>The name for the launch profile.</p>
   */
  name?: string;

  /**
   * @public
   * <p>A configuration for a streaming session.</p>
   */
  streamConfiguration?: StreamConfigurationCreate;

  /**
   * @public
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   */
  studioComponentIds?: string[];

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchProfileResponse {
  /**
   * @public
   * <p>The launch profile.</p>
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface UpdateLaunchProfileMemberRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   */
  launchProfileId: string | undefined;

  /**
   * @public
   * <p>The persona.</p>
   */
  persona: LaunchProfilePersona | undefined;

  /**
   * @public
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchProfileMemberResponse {
  /**
   * @public
   * <p>The updated member. </p>
   */
  member?: LaunchProfileMembership;
}

/**
 * @public
 */
export interface ListStreamingImagesRequest {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Filter this request to streaming images with the given owner</p>
   */
  owner?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingImagesResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A collection of streaming images.</p>
   */
  streamingImages?: StreamingImage[];
}

/**
 * @public
 */
export interface ListStreamingSessionBackupsRequest {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The user ID of the user that owns the streaming session.</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingSessionBackupsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about the streaming session backups.</p>
   */
  streamingSessionBackups?: StreamingSessionBackup[];
}

/**
 * @public
 */
export interface ListStreamingSessionsRequest {
  /**
   * @public
   * <p>Filters the request to streaming sessions created by the given user.</p>
   */
  createdBy?: string;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Filters the request to streaming session owned by the given user</p>
   */
  ownedBy?: string;

  /**
   * @public
   * <p>Filters the request to only the provided session IDs.</p>
   */
  sessionIds?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingSessionsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A collection of streaming sessions.</p>
   */
  sessions?: StreamingSession[];
}

/**
 * @public
 */
export interface ListStudioComponentsRequest {
  /**
   * @public
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Filters the request to studio components that are in one of the given states. </p>
   */
  states?: StudioComponentState[];

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>Filters the request to studio components that are of one of the given types.</p>
   */
  types?: StudioComponentType[];
}

/**
 * @public
 */
export interface ListStudioComponentsResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A collection of studio components.</p>
   */
  studioComponents?: StudioComponent[];
}

/**
 * @public
 */
export interface ListStudioMembersRequest {
  /**
   * @public
   * <p>The max number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStudioMembersResponse {
  /**
   * @public
   * <p>A list of admin members.</p>
   */
  members?: StudioMembership[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStudiosRequest {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStudiosResponse {
  /**
   * @public
   * <p>The token for the next set of results, or null if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>A collection of studios.</p>
   */
  studios: Studio[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>A new studio user's membership.</p>
 */
export interface NewStudioMember {
  /**
   * @public
   * <p>The persona.</p>
   */
  persona: StudioPersona | undefined;

  /**
   * @public
   * <p>The principal ID.</p>
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamingImageRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The name for the streaming image.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The streaming image ID.</p>
   */
  streamingImageId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamingImageResponse {
  /**
   * @public
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

/**
 * @public
 */
export interface StartStreamingSessionRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The streaming session ID for the <code>StartStreamingSessionRequest</code>.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The studio ID for the StartStreamingSessionRequest.</p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>The ID of the backup.</p>
   */
  backupId?: string;
}

/**
 * @public
 */
export interface StartStreamingSessionResponse {
  /**
   * @public
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface StopStreamingSessionRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The streaming session ID for the <code>StopStreamingSessionRequest</code>.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The studioId for the StopStreamingSessionRequest.</p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>Adds additional instructions to a streaming session stop action to either retain the
   *             EBS volumes or delete the EBS volumes.</p>
   */
  volumeRetentionMode?: VolumeRetentionMode;
}

/**
 * @public
 */
export interface StopStreamingSessionResponse {
  /**
   * @public
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface UpdateStudioComponentRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The configuration of the studio component, based on component type.</p>
   */
  configuration?: StudioComponentConfiguration;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The EC2 security groups that control access to the studio component.</p>
   */
  ec2SecurityGroupIds?: string[];

  /**
   * @public
   * <p>Initialization scripts for studio components.</p>
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * @public
   * <p>The name for the studio component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>Parameters for the studio component scripts.</p>
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * @public
   * <p>The studio component ID.</p>
   */
  studioComponentId: string | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>The specific subtype of a studio component.</p>
   */
  subtype?: StudioComponentSubtype;

  /**
   * @public
   * <p>The type of the studio component.</p>
   */
  type?: StudioComponentType;

  /**
   * @public
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   */
  secureInitializationRoleArn?: string;

  /**
   * @public
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateStudioComponentResponse {
  /**
   * @public
   * <p>Information about the studio component.</p>
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface PutStudioMembersRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ID of the identity store.</p>
   */
  identityStoreId: string | undefined;

  /**
   * @public
   * <p>A list of members.</p>
   */
  members: NewStudioMember[] | undefined;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface PutStudioMembersResponse {}

/**
 * @public
 */
export interface StartStudioSSOConfigurationRepairRequest {
  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface StartStudioSSOConfigurationRepairResponse {
  /**
   * @public
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface UpdateStudioRequest {
  /**
   * @public
   * <p>The IAM role that Studio Admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  adminRoleArn?: string;

  /**
   * @public
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A friendly name for the studio.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The studio ID. </p>
   */
  studioId: string | undefined;

  /**
   * @public
   * <p>The IAM role that Studio Users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   */
  userRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateStudioResponse {
  /**
   * @public
   * <p>Information about a studio.</p>
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>Identifies the Amazon Resource Name(ARN) key from which you are removing tags. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

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
export const DeleteLaunchProfileResponseFilterSensitiveLog = (obj: DeleteLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
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
export const DeleteStudioResponseFilterSensitiveLog = (obj: DeleteStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
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
export const GetLaunchProfileResponseFilterSensitiveLog = (obj: GetLaunchProfileResponse): any => ({
  ...obj,
  ...(obj.launchProfile && { launchProfile: LaunchProfileFilterSensitiveLog(obj.launchProfile) }),
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
export const GetStreamingImageResponseFilterSensitiveLog = (obj: GetStreamingImageResponse): any => ({
  ...obj,
  ...(obj.streamingImage && { streamingImage: StreamingImageFilterSensitiveLog(obj.streamingImage) }),
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
export const GetStudioResponseFilterSensitiveLog = (obj: GetStudioResponse): any => ({
  ...obj,
  ...(obj.studio && { studio: StudioFilterSensitiveLog(obj.studio) }),
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
export const ListLaunchProfilesResponseFilterSensitiveLog = (obj: ListLaunchProfilesResponse): any => ({
  ...obj,
  ...(obj.launchProfiles && {
    launchProfiles: obj.launchProfiles.map((item) => LaunchProfileFilterSensitiveLog(item)),
  }),
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
export const ListStreamingImagesResponseFilterSensitiveLog = (obj: ListStreamingImagesResponse): any => ({
  ...obj,
  ...(obj.streamingImages && {
    streamingImages: obj.streamingImages.map((item) => StreamingImageFilterSensitiveLog(item)),
  }),
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
export const ListStudiosResponseFilterSensitiveLog = (obj: ListStudiosResponse): any => ({
  ...obj,
  ...(obj.studios && { studios: obj.studios.map((item) => StudioFilterSensitiveLog(item)) }),
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
