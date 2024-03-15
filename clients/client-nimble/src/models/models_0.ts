// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { NimbleServiceException as __BaseException } from "./NimbleServiceException";

/**
 * @public
 */
export interface AcceptEulasRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The EULA ID.</p>
   * @public
   */
  eulaIds?: string[];

  /**
   * <p>The studio ID.</p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * <p>The acceptance of a EULA, required to use Amazon-provided streaming images.</p>
 * @public
 */
export interface EulaAcceptance {
  /**
   * <p>The ISO timestamp in seconds for when the EULA was accepted.</p>
   * @public
   */
  acceptedAt?: Date;

  /**
   * <p>The ID of the person who accepted the EULA.</p>
   * @public
   */
  acceptedBy?: string;

  /**
   * <p>The ID of the acceptee.</p>
   * @public
   */
  accepteeId?: string;

  /**
   * <p>The EULA acceptance ID.</p>
   * @public
   */
  eulaAcceptanceId?: string;

  /**
   * <p>The EULA ID.</p>
   * @public
   */
  eulaId?: string;
}

/**
 * @public
 */
export interface AcceptEulasResponse {
  /**
   * <p>A collection of EULA acceptances.</p>
   * @public
   */
  eulaAcceptances?: EulaAcceptance[];
}

/**
 * <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A more specific error code.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The exception context.</p>
   * @public
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
 * @public
 */
export interface ActiveDirectoryComputerAttribute {
  /**
   * <p>The name for the LDAP attribute.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The value for the LDAP attribute.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
 * @public
 */
export interface ActiveDirectoryConfiguration {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   * @public
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this studio
   *             component.</p>
   * @public
   */
  directoryId?: string;

  /**
   * <p>The distinguished name (DN) and organizational unit (OU) of an Active Directory
   *             computer.</p>
   * @public
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
 * <p>The configuration for a render farm that is associated with a studio resource.</p>
 * @public
 */
export interface ComputeFarmConfiguration {
  /**
   * <p>The name of an Active Directory user that is used on ComputeFarm worker
   *             instances.</p>
   * @public
   */
  activeDirectoryUser?: string;

  /**
   * <p>The endpoint of the ComputeFarm that is accessed by the studio component
   *             resource.</p>
   * @public
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
 * <p>Configures how streaming sessions are backed up when launched from this launch
 *             profile.</p>
 * @public
 */
export interface StreamConfigurationSessionBackup {
  /**
   * <p>Specifies how artists sessions are backed up.</p>
   *         <p>Configures backups for streaming sessions launched with this launch profile. The
   *             default value is <code>DEACTIVATED</code>, which means that backups are deactivated. To
   *             allow backups, set this value to <code>AUTOMATIC</code>.</p>
   * @public
   */
  mode?: SessionBackupMode;

  /**
   * <p>The maximum number of backups that each streaming session created from this launch
   *             profile can have.</p>
   * @public
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
 * <p>The upload storage root location (folder) on streaming workstations where files are
 *             uploaded.</p>
 * @public
 */
export interface StreamingSessionStorageRoot {
  /**
   * <p>The folder path in Linux workstations where files are uploaded.</p>
   * @public
   */
  linux?: string;

  /**
   * <p>The folder path in Windows workstations where files are uploaded.</p>
   * @public
   */
  windows?: string;
}

/**
 * <p>The configuration for a streaming session’s upload storage.</p>
 * @public
 */
export interface StreamConfigurationSessionStorage {
  /**
   * <p>The configuration for the upload storage root of the streaming session.</p>
   * @public
   */
  root?: StreamingSessionStorageRoot;

  /**
   * <p>Allows artists to upload files to their workstations. The only valid option is
   *                 <code>UPLOAD</code>.</p>
   * @public
   */
  mode: StreamingSessionStorageMode[] | undefined;
}

/**
 * <p>Custom volume configuration for the root volumes that are attached to streaming
 *             sessions.</p>
 *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
 *                 <code>ACTIVATED</code>.</p>
 * @public
 */
export interface VolumeConfiguration {
  /**
   * <p>The size of the root volume that is attached to the streaming session. The root volume
   *             size is measured in GiBs.</p>
   * @public
   */
  size?: number;

  /**
   * <p>The throughput to provision for the root volume that is attached to the streaming
   *             session. The throughput is measured in MiB/s.</p>
   * @public
   */
  throughput?: number;

  /**
   * <p>The number of I/O operations per second for the root volume that is attached to
   *             streaming session.</p>
   * @public
   */
  iops?: number;
}

/**
 * <p>Configuration for streaming workstations created using this launch profile.</p>
 * @public
 */
export interface StreamConfigurationCreate {
  /**
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   * @public
   */
  clipboardMode: StreamingClipboardMode | undefined;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   * @public
   */
  ec2InstanceTypes: StreamingInstanceType[] | undefined;

  /**
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   * @public
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   * @public
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
   * @public
   */
  maxStoppedSessionLengthInMinutes?: number;

  /**
   * <p>The upload storage for a streaming workstation that is created using this launch
   *             profile.</p>
   * @public
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * <p>Configures how streaming sessions are backed up when launched from this launch
   *             profile.</p>
   * @public
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   * @public
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   * @public
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
   * @public
   */
  automaticTerminationMode?: AutomaticTerminationMode;
}

/**
 * @public
 */
export interface CreateLaunchProfileRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
   *             These subnets must support the specified instance types. </p>
   * @public
   */
  ec2SubnetIds: string[] | undefined;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   * @public
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * <p>The name for the launch profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A configuration for a streaming session.</p>
   * @public
   */
  streamConfiguration: StreamConfigurationCreate | undefined;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   * @public
   */
  studioComponentIds: string[] | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
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
 * <p>A configuration for a streaming session.</p>
 * @public
 */
export interface StreamConfiguration {
  /**
   * <p>Allows or deactivates the use of the system clipboard to copy and paste between the
   *             streaming session and streaming client.</p>
   * @public
   */
  clipboardMode: StreamingClipboardMode | undefined;

  /**
   * <p>The EC2 instance types that users can select from when launching a streaming session
   *             with this launch profile.</p>
   * @public
   */
  ec2InstanceTypes: StreamingInstanceType[] | undefined;

  /**
   * <p>The length of time, in minutes, that a streaming session can be active before it is
   *             stopped or terminated. After this point, Nimble Studio automatically terminates or
   *             stops the session. The default length of time is 690 minutes, and the maximum length of
   *             time is 30 days.</p>
   * @public
   */
  maxSessionLengthInMinutes?: number;

  /**
   * <p>The streaming images that users can select from when launching a streaming session
   *             with this launch profile.</p>
   * @public
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
   * @public
   */
  maxStoppedSessionLengthInMinutes?: number;

  /**
   * <p>The upload storage for a streaming session.</p>
   * @public
   */
  sessionStorage?: StreamConfigurationSessionStorage;

  /**
   * <p>Information about the streaming session backup.</p>
   * @public
   */
  sessionBackup?: StreamConfigurationSessionBackup;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   * @public
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   * @public
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
   * @public
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
 * <p>The launch profile validation result.</p>
 * @public
 */
export interface ValidationResult {
  /**
   * <p>The type of the validation result.</p>
   * @public
   */
  type: LaunchProfileValidationType | undefined;

  /**
   * <p>The current state.</p>
   * @public
   */
  state: LaunchProfileValidationState | undefined;

  /**
   * <p>The status code. This will contain the failure reason if the state is
   *                 <code>VALIDATION_FAILED</code>.</p>
   * @public
   */
  statusCode: LaunchProfileValidationStatusCode | undefined;

  /**
   * <p>The status message for the validation result.</p>
   * @public
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
 * @public
 */
export interface LaunchProfile {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the launch profile.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>A human-readable description of the launch profile.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Unique identifiers for a collection of EC2 subnets.</p>
   * @public
   */
  ec2SubnetIds?: string[];

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   * @public
   */
  launchProfileProtocolVersions?: string[];

  /**
   * <p>A friendly name for the launch profile.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: LaunchProfileState;

  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: LaunchProfileStatusCode;

  /**
   * <p>The status message for the launch profile.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>A configuration for a streaming session.</p>
   * @public
   */
  streamConfiguration?: StreamConfiguration;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   * @public
   */
  studioComponentIds?: string[];

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The list of the latest validation results.</p>
   * @public
   */
  validationResults?: ValidationResult[];
}

/**
 * @public
 */
export interface CreateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   * @public
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface CreateStreamingImageRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A human-readable description of the streaming image.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of an EC2 machine image with which to create this streaming image.</p>
   * @public
   */
  ec2ImageId: string | undefined;

  /**
   * <p>A friendly name for a streaming image resource.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
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
 * <p>Specifies how a streaming image is encrypted.</p>
 * @public
 */
export interface StreamingImageEncryptionConfiguration {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   * @public
   */
  keyArn?: string;

  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   * @public
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
 * <p>Represents a streaming image resource.</p>
 *         <p>Streaming images are used by studio users to select which operating system and
 *             software they want to use in a Nimble Studio streaming session.</p>
 *         <p>Amazon provides a number of streaming images that include popular 3rd-party
 *             software.</p>
 *         <p>You can create your own streaming images using an Amazon EC2 machine image
 *             that you create for this purpose. You can also include software that your users
 *             require.</p>
 * @public
 */
export interface StreamingImage {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>A human-readable description of the streaming image.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of an EC2 machine image with which to create the streaming image.</p>
   * @public
   */
  ec2ImageId?: string;

  /**
   * <p>The encryption configuration.</p>
   * @public
   */
  encryptionConfiguration?: StreamingImageEncryptionConfiguration;

  /**
   * <p>The list of EULAs that must be accepted before a Streaming Session can be started
   *             using this streaming image.</p>
   * @public
   */
  eulaIds?: string[];

  /**
   * <p>A friendly name for a streaming image resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The owner of the streaming image, either the <code>studioId</code> that contains the
   *             streaming image, or <code>amazon</code> for images that are provided by Amazon Nimble Studio.</p>
   * @public
   */
  owner?: string;

  /**
   * <p>The platform of the streaming image, either Windows or Linux.</p>
   * @public
   */
  platform?: string;

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: StreamingImageState;

  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: StreamingImageStatusCode;

  /**
   * <p>The status message for the streaming image.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The ID of the streaming image.</p>
   * @public
   */
  streamingImageId?: string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   * @public
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface CreateStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The EC2 Instance type used for the streaming session.</p>
   * @public
   */
  ec2InstanceType?: StreamingInstanceType;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>The ID of the streaming image.</p>
   * @public
   */
  streamingImageId?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
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
 * <p>A streaming session is a virtual workstation created using a particular launch
 *             profile.</p>
 * @public
 */
export interface StreamingSession {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the streaming session.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The EC2 Instance type used for the streaming session.</p>
   * @public
   */
  ec2InstanceType?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId?: string;

  /**
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: StreamingSessionState;

  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: StreamingSessionStatusCode;

  /**
   * <p>The status message for the streaming session.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The ID of the streaming image.</p>
   * @public
   */
  streamingImageId?: string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The time the streaming session will automatically terminate if not terminated by the
   *             user.</p>
   * @public
   */
  terminateAt?: Date;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The time the session entered <code>STOP_IN_PROGRESS</code> state.</p>
   * @public
   */
  stoppedAt?: Date;

  /**
   * <p>The user ID of the user that stopped the streaming session.</p>
   * @public
   */
  stoppedBy?: string;

  /**
   * <p>The time the session entered <code>START_IN_PROGRESS</code> state.</p>
   * @public
   */
  startedAt?: Date;

  /**
   * <p>The user ID of the user that started the streaming session.</p>
   * @public
   */
  startedBy?: string;

  /**
   * <p>The time the streaming session will automatically be stopped if the user doesn’t stop
   *             the session themselves. </p>
   * @public
   */
  stopAt?: Date;

  /**
   * <p>The backup ID used to restore a streaming session.</p>
   * @public
   */
  startedFromBackupId?: string;

  /**
   * <p>Shows the current backup setting of the session.</p>
   * @public
   */
  backupMode?: SessionBackupMode;

  /**
   * <p>The maximum number of backups of a streaming session that you can have. When the
   *             maximum number of backups is reached, the oldest backup is deleted.</p>
   * @public
   */
  maxBackupsToRetain?: number;

  /**
   * <p>Determine if an EBS volume created from this streaming session will be backed
   *             up.</p>
   * @public
   */
  volumeRetentionMode?: VolumeRetentionMode;

  /**
   * <p>Determine if a streaming session created from this launch profile can configure
   *             persistent storage. This means that <code>volumeConfiguration</code> and
   *                 <code>automaticTerminationMode</code> are configured.</p>
   * @public
   */
  sessionPersistenceMode?: SessionPersistenceMode;

  /**
   * <p>Custom volume configuration for the root volumes that are attached to streaming
   *             sessions.</p>
   *         <p>This parameter is only allowed when <code>sessionPersistenceMode</code> is
   *                 <code>ACTIVATED</code>.</p>
   * @public
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
   * @public
   */
  automaticTerminationMode?: AutomaticTerminationMode;
}

/**
 * @public
 */
export interface CreateStreamingSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface CreateStreamingSessionStreamRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The expiration time in seconds.</p>
   * @public
   */
  expirationInSeconds?: number;

  /**
   * <p>The streaming session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
 * <p>A stream is an active connection to a streaming session, enabling a studio user to
 *             control the streaming session using a compatible client. Streaming session streams are
 *             compatible with the NICE DCV web client, included in the Nimble Studio portal, or
 *             the NICE DCV desktop client.</p>
 * @public
 */
export interface StreamingSessionStream {
  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the streaming session stream.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource expires.</p>
   * @public
   */
  expiresAt?: Date;

  /**
   * <p>The user ID of the user that owns the streaming session. The user that owns the
   *             session will be logging into the session and interacting with the virtual
   *             workstation.</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: StreamingSessionStreamState;

  /**
   * <p>The streaming session stream status code.</p>
   * @public
   */
  statusCode?: StreamingSessionStreamStatusCode;

  /**
   * <p>The stream ID.</p>
   * @public
   */
  streamId?: string;

  /**
   * <p>The URL to connect to this stream using the DCV client.</p>
   * @public
   */
  url?: string;
}

/**
 * @public
 */
export interface CreateStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   * @public
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
 * <p>Configuration of the encryption method that is used for the studio.</p>
 * @public
 */
export interface StudioEncryptionConfiguration {
  /**
   * <p>The ARN for a KMS key that is used to encrypt studio data.</p>
   * @public
   */
  keyArn?: string;

  /**
   * <p>The type of KMS key that is used to encrypt studio data.</p>
   * @public
   */
  keyType: StudioEncryptionConfigurationKeyType | undefined;
}

/**
 * @public
 */
export interface CreateStudioRequest {
  /**
   * <p>The IAM role that studio admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   * @public
   */
  adminRoleArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A friendly name for the studio.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The studio encryption configuration.</p>
   * @public
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * <p>The studio name that is used in the URL of the Nimble Studio portal when accessed
   *             by Nimble Studio users.</p>
   * @public
   */
  studioName: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The IAM role that studio users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   * @public
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
 * @public
 */
export interface Studio {
  /**
   * <p>The IAM role that studio admins assume when logging in to the Nimble Studio portal.</p>
   * @public
   */
  adminRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>A friendly name for the studio.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The Amazon Web Services Region where the studio resource is located.</p>
   * @public
   */
  homeRegion?: string;

  /**
   * <p>The IAM Identity Center application client ID used to integrate with IAM Identity Center. This ID allows IAM Identity Center users to log in to Nimble Studio
   *             portal.</p>
   * @public
   */
  ssoClientId?: string;

  /**
   * <p>The current state of the studio resource.</p>
   * @public
   */
  state?: StudioState;

  /**
   * <p>Status codes that provide additional detail on the studio state.</p>
   * @public
   */
  statusCode?: StudioStatusCode;

  /**
   * <p>Additional detail on the studio state.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>Configuration of the encryption method that is used for the studio.</p>
   * @public
   */
  studioEncryptionConfiguration?: StudioEncryptionConfiguration;

  /**
   * <p>The unique identifier for a studio resource. In Nimble Studio, all other
   *             resources are contained in a studio resource.</p>
   * @public
   */
  studioId?: string;

  /**
   * <p>The name of the studio, as included in the URL when accessing it in the Nimble Studio portal.</p>
   * @public
   */
  studioName?: string;

  /**
   * <p>The address of the web page for the studio.</p>
   * @public
   */
  studioUrl?: string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The IAM role that studio users assume when logging in to the Nimble Studio portal.</p>
   * @public
   */
  userRoleArn?: string;
}

/**
 * @public
 */
export interface CreateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   * @public
   */
  studio?: Studio;
}

/**
 * <p>The configuration for a license service that is associated with a studio
 *             resource.</p>
 * @public
 */
export interface LicenseServiceConfiguration {
  /**
   * <p>The endpoint of the license service that is accessed by the studio component
   *             resource.</p>
   * @public
   */
  endpoint?: string;
}

/**
 * <p>The configuration for a shared file storage system that is associated with a studio
 *             resource.</p>
 * @public
 */
export interface SharedFileSystemConfiguration {
  /**
   * <p>The endpoint of the shared file system that is accessed by the studio component
   *             resource.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The unique identifier for a file system.</p>
   * @public
   */
  fileSystemId?: string;

  /**
   * <p>The mount location for a shared file system on a Linux virtual workstation.</p>
   * @public
   */
  linuxMountPoint?: string;

  /**
   * <p>The name of the file share.</p>
   * @public
   */
  shareName?: string;

  /**
   * <p>The mount location for a shared file system on a Windows virtual workstation.</p>
   * @public
   */
  windowsMountDrive?: string;
}

/**
 * <p>The configuration of the studio component, based on component type.</p>
 * @public
 */
export interface StudioComponentConfiguration {
  /**
   * <p>The configuration for a Directory Service for Microsoft Active Directory studio resource.</p>
   * @public
   */
  activeDirectoryConfiguration?: ActiveDirectoryConfiguration;

  /**
   * <p>The configuration for a render farm that is associated with a studio resource.</p>
   * @public
   */
  computeFarmConfiguration?: ComputeFarmConfiguration;

  /**
   * <p>The configuration for a license service that is associated with a studio
   *             resource.</p>
   * @public
   */
  licenseServiceConfiguration?: LicenseServiceConfiguration;

  /**
   * <p>The configuration for a shared file storage system that is associated with a studio
   *             resource.</p>
   * @public
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
 * <p>Initialization scripts for studio components.</p>
 * @public
 */
export interface StudioComponentInitializationScript {
  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   * @public
   */
  launchProfileProtocolVersion?: string;

  /**
   * <p>The platform of the initialization script, either Windows or Linux.</p>
   * @public
   */
  platform?: LaunchProfilePlatform;

  /**
   * <p>The method to use when running the initialization script.</p>
   * @public
   */
  runContext?: StudioComponentInitializationScriptRunContext;

  /**
   * <p>The initialization script.</p>
   * @public
   */
  script?: string;
}

/**
 * <p>A parameter for a studio component script, in the form of a key-value pair.</p>
 * @public
 */
export interface ScriptParameterKeyValue {
  /**
   * <p>A script parameter key.</p>
   * @public
   */
  key?: string;

  /**
   * <p>A script parameter value.</p>
   * @public
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   * @public
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   * @public
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   * @public
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>The name for the studio component.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Parameters for the studio component scripts.</p>
   * @public
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>The specific subtype of a studio component.</p>
   * @public
   */
  subtype?: StudioComponentSubtype;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The type of the studio component.</p>
   * @public
   */
  type: StudioComponentType | undefined;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   * @public
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   * @public
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
 * <p>A studio component represents a network resource to be used by a studio's users and
 *             workflows. A typical studio contains studio components for each of the following: render
 *             farm, Active Directory, licensing, and file system.</p>
 *         <p>Access to a studio component is managed by specifying security groups for the
 *             resource, as well as its endpoint.</p>
 *         <p>A studio component also has a set of initialization scripts that are returned by
 *                 <code>GetLaunchProfileInitialization</code>. These initialization scripts run on
 *             streaming sessions when they start. They provide users with flexibility in controlling
 *             how the studio resources are configured on a streaming session.</p>
 * @public
 */
export interface StudioComponent {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   * @public
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the studio component.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>A human-readable description for the studio component resource.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   * @public
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   * @public
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>A friendly name for the studio component resource.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Parameters for the studio component scripts.</p>
   * @public
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The current state.</p>
   * @public
   */
  state?: StudioComponentState;

  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: StudioComponentStatusCode;

  /**
   * <p>The status message for the studio component.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   * @public
   */
  studioComponentId?: string;

  /**
   * <p>The specific subtype of a studio component.</p>
   * @public
   */
  subtype?: StudioComponentSubtype;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The type of the studio component.</p>
   * @public
   */
  type?: StudioComponentType;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   * @public
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   * @public
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 */
export interface CreateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   * @public
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface DeleteLaunchProfileRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   * @public
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface DeleteLaunchProfileMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The streaming image ID.</p>
   * @public
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   * @public
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface DeleteStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStreamingSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface DeleteStudioRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioResponse {
  /**
   * <p>Information about a studio.</p>
   * @public
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface DeleteStudioComponentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The studio component ID.</p>
   * @public
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   * @public
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface DeleteStudioMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioMemberResponse {}

/**
 * <p>Represents a EULA resource.</p>
 * @public
 */
export interface Eula {
  /**
   * <p>The EULA content.</p>
   * @public
   */
  content?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The EULA ID.</p>
   * @public
   */
  eulaId?: string;

  /**
   * <p>The name for the EULA.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListEulaAcceptancesRequest {
  /**
   * <p>The list of EULA IDs that have been previously accepted.</p>
   * @public
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListEulaAcceptancesResponse {
  /**
   * <p>A collection of EULA acceptances.</p>
   * @public
   */
  eulaAcceptances?: EulaAcceptance[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetEulaRequest {
  /**
   * <p>The EULA ID.</p>
   * @public
   */
  eulaId: string | undefined;
}

/**
 * @public
 */
export interface GetEulaResponse {
  /**
   * <p>The EULA.</p>
   * @public
   */
  eula?: Eula;
}

/**
 * @public
 */
export interface ListEulasRequest {
  /**
   * <p>The list of EULA IDs that should be returned</p>
   * @public
   */
  eulaIds?: string[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEulasResponse {
  /**
   * <p>A collection of EULA resources.</p>
   * @public
   */
  eulas?: Eula[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   * @public
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface GetLaunchProfileDetailsRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * <p>The studio component's summary.</p>
 * @public
 */
export interface StudioComponentSummary {
  /**
   * <p>The ISO timestamp in seconds for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user ID of the user that created the studio component.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name for the studio component.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   * @public
   */
  studioComponentId?: string;

  /**
   * <p>The specific subtype of a studio component.</p>
   * @public
   */
  subtype?: StudioComponentSubtype;

  /**
   * <p>The type of the studio component.</p>
   * @public
   */
  type?: StudioComponentType;

  /**
   * <p>The ISO timestamp in seconds for when the resource was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user ID of the user that most recently updated the resource.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileDetailsResponse {
  /**
   * <p>The launch profile.</p>
   * @public
   */
  launchProfile?: LaunchProfile;

  /**
   * <p>A collection of streaming images.</p>
   * @public
   */
  streamingImages?: StreamingImage[];

  /**
   * <p>A collection of studio component summaries.</p>
   * @public
   */
  studioComponentSummaries?: StudioComponentSummary[];
}

/**
 * @public
 */
export interface GetLaunchProfileInitializationRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The launch profile protocol versions supported by the client.</p>
   * @public
   */
  launchProfileProtocolVersions: string[] | undefined;

  /**
   * <p>The launch purpose.</p>
   * @public
   */
  launchPurpose: string | undefined;

  /**
   * <p>The platform where this Launch Profile will be used, either Windows or Linux.</p>
   * @public
   */
  platform: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * <p>The launch profile initialization Active Directory contains information required for
 *             the launch profile to connect to the Active Directory.</p>
 * @public
 */
export interface LaunchProfileInitializationActiveDirectory {
  /**
   * <p>A collection of custom attributes for an Active Directory computer.</p>
   * @public
   */
  computerAttributes?: ActiveDirectoryComputerAttribute[];

  /**
   * <p>The directory ID of the Directory Service for Microsoft Active Directory to access using this launch
   *             profile.</p>
   * @public
   */
  directoryId?: string;

  /**
   * <p>The directory name.</p>
   * @public
   */
  directoryName?: string;

  /**
   * <p>The DNS IP address.</p>
   * @public
   */
  dnsIpAddresses?: string[];

  /**
   * <p>The name for the organizational unit distinguished name.</p>
   * @public
   */
  organizationalUnitDistinguishedName?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   * @public
   */
  studioComponentId?: string;

  /**
   * <p>The name for the studio component.</p>
   * @public
   */
  studioComponentName?: string;
}

/**
 * <p>The launch profile initialization script is used when start streaming session
 *             runs.</p>
 * @public
 */
export interface LaunchProfileInitializationScript {
  /**
   * <p>The initialization script.</p>
   * @public
   */
  script?: string;

  /**
   * <p>The unique identifier for a studio component resource.</p>
   * @public
   */
  studioComponentId?: string;

  /**
   * <p>The name for the studio component.</p>
   * @public
   */
  studioComponentName?: string;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   * @public
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   * @public
   */
  runtimeRoleArn?: string;
}

/**
 * <p>A launch profile initialization contains information required for a workstation or
 *             server to connect to a launch profile.</p>
 *         <p>This includes scripts, endpoints, security groups, subnets, and other
 *             configuration.</p>
 * @public
 */
export interface LaunchProfileInitialization {
  /**
   * <p>A <code>LaunchProfileInitializationActiveDirectory</code> resource.</p>
   * @public
   */
  activeDirectory?: LaunchProfileInitializationActiveDirectory;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   * @public
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId?: string;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   * @public
   */
  launchProfileProtocolVersion?: string;

  /**
   * <p>The launch purpose.</p>
   * @public
   */
  launchPurpose?: string;

  /**
   * <p>The name for the launch profile.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The platform of the launch platform, either Windows or Linux.</p>
   * @public
   */
  platform?: LaunchProfilePlatform;

  /**
   * <p>The system initializtion scripts.</p>
   * @public
   */
  systemInitializationScripts?: LaunchProfileInitializationScript[];

  /**
   * <p>The user initializtion scripts.</p>
   * @public
   */
  userInitializationScripts?: LaunchProfileInitializationScript[];
}

/**
 * @public
 */
export interface GetLaunchProfileInitializationResponse {
  /**
   * <p>The launch profile initialization.</p>
   * @public
   */
  launchProfileInitialization?: LaunchProfileInitialization;
}

/**
 * @public
 */
export interface GetLaunchProfileMemberRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
 * @public
 */
export interface LaunchProfileMembership {
  /**
   * <p>The ID of the identity store.</p>
   * @public
   */
  identityStoreId?: string;

  /**
   * <p>The persona.</p>
   * @public
   */
  persona?: LaunchProfilePersona;

  /**
   * <p>The principal ID.</p>
   * @public
   */
  principalId?: string;

  /**
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   * @public
   */
  sid?: string;
}

/**
 * @public
 */
export interface GetLaunchProfileMemberResponse {
  /**
   * <p>The member.</p>
   * @public
   */
  member?: LaunchProfileMembership;
}

/**
 * @public
 */
export interface GetStreamingImageRequest {
  /**
   * <p>The streaming image ID.</p>
   * @public
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingImageResponse {
  /**
   * <p>The streaming image.</p>
   * @public
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface GetStreamingSessionRequest {
  /**
   * <p>The streaming session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface GetStreamingSessionBackupRequest {
  /**
   * <p>The ID of the backup.</p>
   * @public
   */
  backupId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * <p>Information about the streaming session backup.</p>
 * @public
 */
export interface StreamingSessionBackup {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to a studio resource and uniquely
   *             identifies it. ARNs are unique across all Regions.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The ISO timestamp in for when the resource was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The ID of the launch profile which allowed the backups for the streaming
   *             session.</p>
   * @public
   */
  launchProfileId?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>The streaming session ID for the <code>StreamingSessionBackup</code>.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p>The streaming session state.</p>
   * @public
   */
  state?: StreamingSessionState;

  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: StreamingSessionStatusCode;

  /**
   * <p>The status message for the streaming session backup.</p>
   * @public
   */
  statusMessage?: string;

  /**
   * <p>The ID of the backup.</p>
   * @public
   */
  backupId?: string;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetStreamingSessionBackupResponse {
  /**
   * <p>Information about the streaming session backup.</p>
   * @public
   */
  streamingSessionBackup?: StreamingSessionBackup;
}

/**
 * @public
 */
export interface GetStreamingSessionStreamRequest {
  /**
   * <p>The streaming session ID.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The streaming session stream ID.</p>
   * @public
   */
  streamId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStreamingSessionStreamResponse {
  /**
   * <p>The stream.</p>
   * @public
   */
  stream?: StreamingSessionStream;
}

/**
 * @public
 */
export interface GetStudioRequest {
  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStudioResponse {
  /**
   * <p>Information about a studio.</p>
   * @public
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface GetStudioComponentRequest {
  /**
   * <p>The studio component ID.</p>
   * @public
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface GetStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   * @public
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface GetStudioMemberRequest {
  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
 * @public
 */
export interface StudioMembership {
  /**
   * <p>The ID of the identity store.</p>
   * @public
   */
  identityStoreId?: string;

  /**
   * <p>The persona.</p>
   * @public
   */
  persona?: StudioPersona;

  /**
   * <p>The principal ID.</p>
   * @public
   */
  principalId?: string;

  /**
   * <p>The Active Directory Security Identifier for this user, if available.</p>
   * @public
   */
  sid?: string;
}

/**
 * @public
 */
export interface GetStudioMemberResponse {
  /**
   * <p>The member.</p>
   * @public
   */
  member?: StudioMembership;
}

/**
 * @public
 */
export interface ListLaunchProfileMembersRequest {
  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The max number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchProfileMembersResponse {
  /**
   * <p>A list of members.</p>
   * @public
   */
  members?: LaunchProfileMembership[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListLaunchProfilesRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId?: string;

  /**
   * <p>Filter this request to launch profiles in any of the given states.</p>
   * @public
   */
  states?: LaunchProfileState[];

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListLaunchProfilesResponse {
  /**
   * <p>A collection of launch profiles.</p>
   * @public
   */
  launchProfiles?: LaunchProfile[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A new member that is added to a launch profile.</p>
 * @public
 */
export interface NewLaunchProfileMember {
  /**
   * <p>The persona.</p>
   * @public
   */
  persona: LaunchProfilePersona | undefined;

  /**
   * <p>The principal ID.</p>
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface PutLaunchProfileMembersRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the identity store.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>A list of members.</p>
   * @public
   */
  members: NewLaunchProfileMember[] | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The version number of the protocol that is used by the launch profile. The only valid
   *             version is "2021-03-31".</p>
   * @public
   */
  launchProfileProtocolVersions?: string[];

  /**
   * <p>The name for the launch profile.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A configuration for a streaming session.</p>
   * @public
   */
  streamConfiguration?: StreamConfigurationCreate;

  /**
   * <p>Unique identifiers for a collection of studio components that can be used with this
   *             launch profile.</p>
   * @public
   */
  studioComponentIds?: string[];

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchProfileResponse {
  /**
   * <p>The launch profile.</p>
   * @public
   */
  launchProfile?: LaunchProfile;
}

/**
 * @public
 */
export interface UpdateLaunchProfileMemberRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the launch profile used to control access from the streaming session.</p>
   * @public
   */
  launchProfileId: string | undefined;

  /**
   * <p>The persona.</p>
   * @public
   */
  persona: LaunchProfilePersona | undefined;

  /**
   * <p>The principal ID. This currently supports a IAM Identity Center UserId. </p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface UpdateLaunchProfileMemberResponse {
  /**
   * <p>The updated member. </p>
   * @public
   */
  member?: LaunchProfileMembership;
}

/**
 * @public
 */
export interface ListStreamingImagesRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Filter this request to streaming images with the given owner</p>
   * @public
   */
  owner?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingImagesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A collection of streaming images.</p>
   * @public
   */
  streamingImages?: StreamingImage[];
}

/**
 * @public
 */
export interface ListStreamingSessionBackupsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The user ID of the user that owns the streaming session.</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingSessionBackupsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Information about the streaming session backups.</p>
   * @public
   */
  streamingSessionBackups?: StreamingSessionBackup[];
}

/**
 * @public
 */
export interface ListStreamingSessionsRequest {
  /**
   * <p>Filters the request to streaming sessions created by the given user.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Filters the request to streaming session owned by the given user</p>
   * @public
   */
  ownedBy?: string;

  /**
   * <p>Filters the request to only the provided session IDs.</p>
   * @public
   */
  sessionIds?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStreamingSessionsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A collection of streaming sessions.</p>
   * @public
   */
  sessions?: StreamingSession[];
}

/**
 * @public
 */
export interface ListStudioComponentsRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Filters the request to studio components that are in one of the given states. </p>
   * @public
   */
  states?: StudioComponentState[];

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>Filters the request to studio components that are of one of the given types.</p>
   * @public
   */
  types?: StudioComponentType[];
}

/**
 * @public
 */
export interface ListStudioComponentsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A collection of studio components.</p>
   * @public
   */
  studioComponents?: StudioComponent[];
}

/**
 * @public
 */
export interface ListStudioMembersRequest {
  /**
   * <p>The max number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface ListStudioMembersResponse {
  /**
   * <p>A list of admin members.</p>
   * @public
   */
  members?: StudioMembership[];

  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStudiosRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListStudiosResponse {
  /**
   * <p>The token for the next set of results, or null if there are no more results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A collection of studios.</p>
   * @public
   */
  studios: Studio[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>A new studio user's membership.</p>
 * @public
 */
export interface NewStudioMember {
  /**
   * <p>The persona.</p>
   * @public
   */
  persona: StudioPersona | undefined;

  /**
   * <p>The principal ID.</p>
   * @public
   */
  principalId: string | undefined;
}

/**
 * @public
 */
export interface UpdateStreamingImageRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name for the streaming image.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The streaming image ID.</p>
   * @public
   */
  streamingImageId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  streamingImage?: StreamingImage;
}

/**
 * @public
 */
export interface StartStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID for the <code>StartStreamingSessionRequest</code>.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The studio ID for the StartStreamingSessionRequest.</p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>The ID of the backup.</p>
   * @public
   */
  backupId?: string;
}

/**
 * @public
 */
export interface StartStreamingSessionResponse {
  /**
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   * @public
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface StopStreamingSessionRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The streaming session ID for the <code>StopStreamingSessionRequest</code>.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The studioId for the StopStreamingSessionRequest.</p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>Adds additional instructions to a streaming session stop action to either retain the
   *             EBS volumes or delete the EBS volumes.</p>
   * @public
   */
  volumeRetentionMode?: VolumeRetentionMode;
}

/**
 * @public
 */
export interface StopStreamingSessionResponse {
  /**
   * <p>A streaming session is a virtual workstation created using a particular launch
   *             profile.</p>
   * @public
   */
  session?: StreamingSession;
}

/**
 * @public
 */
export interface UpdateStudioComponentRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The configuration of the studio component, based on component type.</p>
   * @public
   */
  configuration?: StudioComponentConfiguration;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The EC2 security groups that control access to the studio component.</p>
   * @public
   */
  ec2SecurityGroupIds?: string[];

  /**
   * <p>Initialization scripts for studio components.</p>
   * @public
   */
  initializationScripts?: StudioComponentInitializationScript[];

  /**
   * <p>The name for the studio component.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Parameters for the studio component scripts.</p>
   * @public
   */
  scriptParameters?: ScriptParameterKeyValue[];

  /**
   * <p>The studio component ID.</p>
   * @public
   */
  studioComponentId: string | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>The specific subtype of a studio component.</p>
   * @public
   */
  subtype?: StudioComponentSubtype;

  /**
   * <p>The type of the studio component.</p>
   * @public
   */
  type?: StudioComponentType;

  /**
   * <p>An IAM role attached to Studio Component when the system initialization
   *             script runs which give the studio component access to Amazon Web Services resources when
   *             the system initialization script runs.</p>
   * @public
   */
  secureInitializationRoleArn?: string;

  /**
   * <p>An IAM role attached to a Studio Component that gives the studio
   *             component access to Amazon Web Services resources at anytime while the instance is
   *             running. </p>
   * @public
   */
  runtimeRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateStudioComponentResponse {
  /**
   * <p>Information about the studio component.</p>
   * @public
   */
  studioComponent?: StudioComponent;
}

/**
 * @public
 */
export interface PutStudioMembersRequest {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The ID of the identity store.</p>
   * @public
   */
  identityStoreId: string | undefined;

  /**
   * <p>A list of members.</p>
   * @public
   */
  members: NewStudioMember[] | undefined;

  /**
   * <p>The studio ID. </p>
   * @public
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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;
}

/**
 * @public
 */
export interface StartStudioSSOConfigurationRepairResponse {
  /**
   * <p>Information about a studio.</p>
   * @public
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface UpdateStudioRequest {
  /**
   * <p>The IAM role that Studio Admins will assume when logging in to the
   *                 Nimble Studio portal.</p>
   * @public
   */
  adminRoleArn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If you don’t specify a client token, the Amazon Web Services SDK automatically
   *             generates a client token and uses it for the request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A friendly name for the studio.</p>
   * @public
   */
  displayName?: string;

  /**
   * <p>The studio ID. </p>
   * @public
   */
  studioId: string | undefined;

  /**
   * <p>The IAM role that Studio Users will assume when logging in to the
   *                 Nimble Studio portal.</p>
   * @public
   */
  userRoleArn?: string;
}

/**
 * @public
 */
export interface UpdateStudioResponse {
  /**
   * <p>Information about a studio.</p>
   * @public
   */
  studio: Studio | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to add tags to. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A collection of labels, in the form of key-value pairs, that apply to this
   *             resource.</p>
   * @public
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
   * <p>Identifies the Amazon Resource Name(ARN) key from which you are removing tags. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tag keys. Specify only the tag keys, not the tag values.</p>
   * @public
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
