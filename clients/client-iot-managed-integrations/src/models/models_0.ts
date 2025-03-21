// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { IoTManagedIntegrationsServiceException as __BaseException } from "./IoTManagedIntegrationsServiceException";

/**
 * @public
 * @enum
 */
export const AbortCriteriaAction = {
  CANCEL: "CANCEL",
} as const;

/**
 * @public
 */
export type AbortCriteriaAction = (typeof AbortCriteriaAction)[keyof typeof AbortCriteriaAction];

/**
 * @public
 * @enum
 */
export const AbortCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type AbortCriteriaFailureType = (typeof AbortCriteriaFailureType)[keyof typeof AbortCriteriaFailureType];

/**
 * <p>Structure representing one abort config criteria.</p>
 * @public
 */
export interface AbortConfigCriteria {
  /**
   * <p>The action taken by the abort configuration.</p>
   * @public
   */
  Action?: AbortCriteriaAction | undefined;

  /**
   * <p>Over-the-air (OTA) task abort criteria failure type.</p>
   * @public
   */
  FailureType?: AbortCriteriaFailureType | undefined;

  /**
   * <p>The minimum number of things that must receive task execution notifications before the
   *          task can be aborted.</p>
   * @public
   */
  MinNumberOfExecutedThings?: number | undefined;

  /**
   * <p>The minimum percentage of over-the-air (OTA) task execution failures that must occur to
   *          initiate the last abort.</p>
   * @public
   */
  ThresholdPercentage?: number | undefined;
}

/**
 * <p>User is not authorized.</p>
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
export const AuthMaterialType = {
  WIFI_SETUP_QR_BAR_CODE: "WIFI_SETUP_QR_BAR_CODE",
  ZIGBEE_QR_BAR_CODE: "ZIGBEE_QR_BAR_CODE",
  ZWAVE_QR_BAR_CODE: "ZWAVE_QR_BAR_CODE",
} as const;

/**
 * @public
 */
export type AuthMaterialType = (typeof AuthMaterialType)[keyof typeof AuthMaterialType];

/**
 * <p>Action for an Amazon Web Services capability, containing the action parameters for control.</p>
 * @public
 */
export interface CapabilityAction {
  /**
   * <p>Describe a capability action with a name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describe a capability action with an reference.</p>
   * @public
   */
  ref?: string | undefined;

  /**
   * <p>Describe a capability action with an <code>actionTraceId</code> for a response
   *          command.</p>
   * @public
   */
  actionTraceId?: string | undefined;

  /**
   * <p>Describe a capability action with a capability property.</p>
   * @public
   */
  parameters?: __DocumentType | undefined;
}

/**
 * <p>The capability used in capability report.</p>
 * @public
 */
export interface CapabilityReportCapability {
  /**
   * <p>The id of the schema version.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the capability.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The capability properties used in the capability report.</p>
   * @public
   */
  properties: string[] | undefined;

  /**
   * <p>The capability actions used in the capability report.</p>
   * @public
   */
  actions: string[] | undefined;

  /**
   * <p>The capability events used in the capability report.</p>
   * @public
   */
  events: string[] | undefined;
}

/**
 * <p>The endpoint used in the capability report.</p>
 * @public
 */
export interface CapabilityReportEndpoint {
  /**
   * <p>The id of the endpoint used in the capability report.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of device.</p>
   * @public
   */
  deviceTypes: string[] | undefined;

  /**
   * <p>The capabilities used in the capability report.</p>
   * @public
   */
  capabilities: CapabilityReportCapability[] | undefined;
}

/**
 * <p>Report of all capabilities supported by the device.</p>
 * @public
 */
export interface CapabilityReport {
  /**
   * <p>The version of the capability report.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The numeric identifier of the node.</p>
   * @public
   */
  nodeId?: string | undefined;

  /**
   * <p>The endpoints used in the capability report.</p>
   * @public
   */
  endpoints: CapabilityReportEndpoint[] | undefined;
}

/**
 * <p>The command capabilities added for the managed thing</p>
 * @public
 */
export interface CommandCapability {
  /**
   * <p>Describe the capability with an id.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Describe the capability with an name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Describe the capability with a version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>Describe the command capability with the actions it supports.</p>
   * @public
   */
  actions: CapabilityAction[] | undefined;
}

/**
 * <p>The endpoint for a managed thing when sending a command.</p>
 * @public
 */
export interface CommandEndpoint {
  /**
   * <p>The id of the endpoint for a managed thing.</p>
   * @public
   */
  endpointId: string | undefined;

  /**
   * <p>Describe the endpoint with an id, a name, and the relevant capabilities for sending
   *          commands.</p>
   * @public
   */
  capabilities: CommandCapability[] | undefined;
}

/**
 * <p>Provides the default encryption configuration error update details.</p>
 * @public
 */
export interface ConfigurationError {
  /**
   * <p>The error code returned when the default encryption configuration update fails.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The error message returned when the default encryption configuration update
   *          fails.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
 * @public
 */
export interface ConfigurationStatus {
  /**
   * <p>The error details describing a failed default encryption configuration update.</p>
   * @public
   */
  error?: ConfigurationError | undefined;

  /**
   * <p>The status state describing the default encryption configuration update.</p>
   * @public
   */
  state: ConfigurationState | undefined;
}

/**
 * <p>There is a conflict with the request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * @public
 */
export interface CreateCredentialLockerRequest {
  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the credential locker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCredentialLockerResponse {
  /**
   * <p>The identifier of the credential locker creation request.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp value of when the credential locker request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
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
 * <p>The service quota has been exceeded for this request.</p>
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
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The rate exceeds the limit.</p>
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
 * <p>A validation error occurred when performing the API request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * @public
 * @enum
 */
export const DeliveryDestinationType = {
  KINESIS: "KINESIS",
} as const;

/**
 * @public
 */
export type DeliveryDestinationType = (typeof DeliveryDestinationType)[keyof typeof DeliveryDestinationType];

/**
 * @public
 */
export interface CreateDestinationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the destination.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDestinationResponse {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 */
export interface CreateEventLogConfigurationRequest {
  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel: LogLevel | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventLogConfigurationResponse {
  /**
   * <p>The identifier of the event log configuration request.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Role = {
  CONTROLLER: "CONTROLLER",
  DEVICE: "DEVICE",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

/**
 * @public
 */
export interface CreateManagedThingRequest {
  /**
   * <p>The type of device used. This will be the hub controller, cloud device, or AWS IoT
   *          device.</p>
   * @public
   */
  Role: Role | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value
   *          should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The authentication material defining the device connectivity setup requests. The
   *          authentication materials used are the device bar code.</p>
   * @public
   */
  AuthenticationMaterial: string | undefined;

  /**
   * <p>The type of authentication material used for device connectivity setup requests.</p>
   * @public
   */
  AuthenticationMaterialType: AuthMaterialType | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the managed thing.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateManagedThingResponse {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * <p>You are not authorized to perform this operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const EventType = {
  CONNECTOR_ASSOCIATION: "CONNECTOR_ASSOCIATION",
  CONNECTOR_ERROR_REPORT: "CONNECTOR_ERROR_REPORT",
  DEVICE_COMMAND: "DEVICE_COMMAND",
  DEVICE_COMMAND_REQUEST: "DEVICE_COMMAND_REQUEST",
  DEVICE_EVENT: "DEVICE_EVENT",
  DEVICE_LIFE_CYCLE: "DEVICE_LIFE_CYCLE",
  DEVICE_OTA: "DEVICE_OTA",
  DEVICE_STATE: "DEVICE_STATE",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 */
export interface CreateNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the notification configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateNotificationConfigurationResponse {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType?: EventType | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaMechanism = {
  PUSH: "PUSH",
} as const;

/**
 * @public
 */
export type OtaMechanism = (typeof OtaMechanism)[keyof typeof OtaMechanism];

/**
 * @public
 * @enum
 */
export const SchedulingConfigEndBehavior = {
  CANCEL: "CANCEL",
  FORCE_CANCEL: "FORCE_CANCEL",
  STOP_ROLLOUT: "STOP_ROLLOUT",
} as const;

/**
 * @public
 */
export type SchedulingConfigEndBehavior =
  (typeof SchedulingConfigEndBehavior)[keyof typeof SchedulingConfigEndBehavior];

/**
 * <p>Structure representing scheduling maintenance window.</p>
 * @public
 */
export interface ScheduleMaintenanceWindow {
  /**
   * <p>Displays the duration of the next maintenance window.</p>
   * @public
   */
  DurationInMinutes?: number | undefined;

  /**
   * <p>Displays the start time of the next maintenance window.</p>
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * <p>Over-the-air (OTA) task scheduling config.</p>
 * @public
 */
export interface OtaTaskSchedulingConfig {
  /**
   * <p>Specifies the end behavior for all task executions after a task reaches the selected
   *             <code>endTime</code>. If <code>endTime</code> is not selected when creating the task,
   *          then <code>endBehavior</code> does not apply.</p>
   * @public
   */
  EndBehavior?: SchedulingConfigEndBehavior | undefined;

  /**
   * <p>The time an over-the-air (OTA) task will stop.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>Maintenance window list for over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  MaintenanceWindows?: ScheduleMaintenanceWindow[] | undefined;

  /**
   * <p>The time an over-the-air (OTA) task will start.</p>
   * @public
   */
  StartTime?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetryCriteriaFailureType = {
  ALL: "ALL",
  FAILED: "FAILED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type RetryCriteriaFailureType = (typeof RetryCriteriaFailureType)[keyof typeof RetryCriteriaFailureType];

/**
 * <p>Structure representing one retry config criteria.</p>
 * @public
 */
export interface RetryConfigCriteria {
  /**
   * <p>Over-the-air (OTA) retry criteria failure type.</p>
   * @public
   */
  FailureType?: RetryCriteriaFailureType | undefined;

  /**
   * <p>The number of retries allowed for a failure type for the over-the-air (OTA) task.</p>
   * @public
   */
  MinNumberOfRetries?: number | undefined;
}

/**
 * <p>Over-the-air (OTA) task retry config.</p>
 * @public
 */
export interface OtaTaskExecutionRetryConfig {
  /**
   * <p>The list of retry config criteria.</p>
   * @public
   */
  RetryConfigCriteria?: RetryConfigCriteria[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaType = {
  CONTINUOUS: "CONTINUOUS",
  ONE_TIME: "ONE_TIME",
} as const;

/**
 * @public
 */
export type OtaType = (typeof OtaType)[keyof typeof OtaType];

/**
 * @public
 * @enum
 */
export const OtaProtocol = {
  HTTP: "HTTP",
} as const;

/**
 * @public
 */
export type OtaProtocol = (typeof OtaProtocol)[keyof typeof OtaProtocol];

/**
 * @public
 */
export interface CreateOtaTaskRequest {
  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.</p>
   * @public
   */
  S3Url: string | undefined;

  /**
   * <p>The connection protocol the over-the-air (OTA) task uses to update the device.</p>
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * <p>The device targeted for the over-the-air (OTA) task.</p>
   * @public
   */
  Target?: string[] | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The deployment mechanism for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * <p>The frequency type for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaType: OtaType | undefined;

  /**
   * <p>The query string to add things to the thing group.</p>
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * <p>Over-the-air (OTA) task retry config.</p>
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the over-the-air (OTA) task.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskResponse {
  /**
   * <p>The identifier of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>A description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>Over-the-air (OTA) task abort config.</p>
 * @public
 */
export interface OtaTaskAbortConfig {
  /**
   * <p>The list of criteria for the abort config.</p>
   * @public
   */
  AbortConfigCriteriaList?: AbortConfigCriteria[] | undefined;
}

/**
 * <p>Structure representing rollout config criteria.</p>
 * @public
 */
export interface RolloutRateIncreaseCriteria {
  /**
   * <p>The threshold for number of notified things that will initiate the increase in rate of
   *          rollout.</p>
   * @public
   */
  numberOfNotifiedThings?: number | undefined;

  /**
   * <p>The threshold for number of succeeded things that will initiate the increase in rate of
   *          rollout.</p>
   * @public
   */
  numberOfSucceededThings?: number | undefined;
}

/**
 * <p>Structure representing exponential rate of rollout for an over-the-air (OTA)
 *          task.</p>
 * @public
 */
export interface ExponentialRolloutRate {
  /**
   * <p>The base rate per minute for the rollout of an over-the-air (OTA) task.</p>
   * @public
   */
  BaseRatePerMinute?: number | undefined;

  /**
   * <p>The incremental factor for increasing the rollout rate of an over-the-air (OTA)
   *          task.</p>
   * @public
   */
  IncrementFactor?: number | undefined;

  /**
   * <p>The criteria for increasing the rollout rate of an over-the-air (OTA) task.</p>
   * @public
   */
  RateIncreaseCriteria?: RolloutRateIncreaseCriteria | undefined;
}

/**
 * <p>Over-the-air (OTA) task rollout config.</p>
 * @public
 */
export interface OtaTaskExecutionRolloutConfig {
  /**
   * <p>Structure representing exponential rate of rollout for an over-the-air (OTA)
   *          task.</p>
   * @public
   */
  ExponentialRolloutRate?: ExponentialRolloutRate | undefined;

  /**
   * <p>The maximum number of things that will be notified of a pending task, per minute.</p>
   * @public
   */
  MaximumPerMinute?: number | undefined;
}

/**
 * <p>Over-the-air (OTA) task timeout config.</p>
 * @public
 */
export interface OtaTaskTimeoutConfig {
  /**
   * <p>Specifies the amount of time the device has to finish execution of this task. The
   *          timeout interval can be anywhere between 1 minute and 7 days.</p>
   * @public
   */
  InProgressTimeoutInMinutes?: number | undefined;
}

/**
 * <p>Structure representing a push config.</p>
 * @public
 */
export interface PushConfig {
  /**
   * <p>Structure representing one abort config.</p>
   * @public
   */
  AbortConfig?: OtaTaskAbortConfig | undefined;

  /**
   * <p>Structure representing one rollout config.</p>
   * @public
   */
  RolloutConfig?: OtaTaskExecutionRolloutConfig | undefined;

  /**
   * <p>Structure representing one timeout config.</p>
   * @public
   */
  TimeoutConfig?: OtaTaskTimeoutConfig | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationRequest {
  /**
   * <p>A description of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes the type of configuration used for the over-the-air (OTA) task.</p>
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateOtaTaskConfigurationResponse {
  /**
   * <p>The identifier of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisioningType = {
  FLEET_PROVISIONING: "FLEET_PROVISIONING",
  JITR: "JITR",
} as const;

/**
 * @public
 */
export type ProvisioningType = (typeof ProvisioningType)[keyof typeof ProvisioningType];

/**
 * @public
 */
export interface CreateProvisioningProfileRequest {
  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType: ProvisioningType | undefined;

  /**
   * <p>The id of the certificate authority (CA) certificate.</p>
   * @public
   */
  CaCertificate?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the provisioning profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProvisioningProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning
   *          profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The identifier of the provisioning profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The id of the claim certificate.</p>
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * <p>The private key of the claim certificate. This is stored securely on the device for
   *          validating the connection endpoint with IoT managed integrations using the public key.</p>
   * @public
   */
  ClaimCertificatePrivateKey?: string | undefined;
}

/**
 * <p>Structure describing one Credential Locker.</p>
 * @public
 */
export interface CredentialLockerSummary {
  /**
   * <p>The id of the credential locker.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestampe value of when the credential locker was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCredentialLockerRequest {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerRequest {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialLockerResponse {
  /**
   * <p>The identifier of the credential locker.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the credential locker.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the credential locker.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp value of when the credential locker requset occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the credential locker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCredentialLockersResponse {
  /**
   * <p>The list of credential lockers.</p>
   * @public
   */
  Items?: CredentialLockerSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDestinationRequest {
  /**
   * <p>The id of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventLogConfigurationRequest {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>When set to <code>TRUE</code>, a forceful deteletion of the managed thing will occur.
   *          When set to <code>FALSE</code>, a non-forceful deletion of the managed thing will
   *          occur.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface DeleteOtaTaskRequest {
  /**
   * <p>The identifier of the over-the-air (OTA) task.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteOtaTaskConfigurationRequest {
  /**
   * <p>The identifier of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisioningProfileRequest {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>Structure describing a destination for IoT managed integrations to deliver notifications for a
 *          device.</p>
 * @public
 */
export interface DestinationSummary {
  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationRequest {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDestinationResponse {
  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The timestamp value of when the destination creation requset occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the destination update requset occurred.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the customer-managed
   *          destination.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDestinationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDestinationsResponse {
  /**
   * <p>The list of destinations.</p>
   * @public
   */
  DestinationList?: DestinationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDestinationRequest {
  /**
   * <p>The name of the customer-managed destination.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationArn?: string | undefined;

  /**
   * <p>The destination type for the customer-managed destination.</p>
   * @public
   */
  DeliveryDestinationType?: DeliveryDestinationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the delivery destination role.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The description of the customer-managed destination.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceDiscoveryRequest {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryType = {
  CLOUD: "CLOUD",
  ZIGBEE: "ZIGBEE",
  ZWAVE: "ZWAVE",
} as const;

/**
 * @public
 */
export type DiscoveryType = (typeof DiscoveryType)[keyof typeof DiscoveryType];

/**
 * @public
 * @enum
 */
export const DeviceDiscoveryStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type DeviceDiscoveryStatus = (typeof DeviceDiscoveryStatus)[keyof typeof DeviceDiscoveryStatus];

/**
 * @public
 */
export interface GetDeviceDiscoveryResponse {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device discovery job request.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The discovery type supporting the type of device to be discovered in the device
   *          discovery job request.</p>
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * <p>The status of the device discovery job request.</p>
   * @public
   */
  Status: DeviceDiscoveryStatus | undefined;

  /**
   * <p>The timestamp value for the start time of the device discovery.</p>
   * @public
   */
  StartedAt: Date | undefined;

  /**
   * <p>The id of the end-user's IoT hub.</p>
   * @public
   */
  ControllerId?: string | undefined;

  /**
   * <p>The ID tracking the current discovery process for one connector association.</p>
   * @public
   */
  ConnectorAssociationId?: string | undefined;

  /**
   * <p>The timestamp value for the completion time of the device discovery.</p>
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the device discovery request.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const DiscoveryAuthMaterialType = {
  ZWAVE_INSTALL_CODE: "ZWAVE_INSTALL_CODE",
} as const;

/**
 * @public
 */
export type DiscoveryAuthMaterialType = (typeof DiscoveryAuthMaterialType)[keyof typeof DiscoveryAuthMaterialType];

/**
 * @public
 */
export interface StartDeviceDiscoveryRequest {
  /**
   * <p>The discovery type supporting the type of device to be discovered in the device
   *          discovery job request.</p>
   * @public
   */
  DiscoveryType: DiscoveryType | undefined;

  /**
   * <p>The id of the end-user's IoT hub.</p>
   * @public
   */
  ControllerIdentifier?: string | undefined;

  /**
   * <p>The id of the connector association.</p>
   * @public
   */
  ConnectorAssociationIdentifier?: string | undefined;

  /**
   * <p>The authentication material required to start the local device discovery job
   *          request.</p>
   * @public
   */
  AuthenticationMaterial?: string | undefined;

  /**
   * <p>The type of authentication material used for device discovery jobs.</p>
   * @public
   */
  AuthenticationMaterialType?: DiscoveryAuthMaterialType | undefined;

  /**
   * <p>An idempotency token. If you retry a request that completed successfully initially using
   *          the same client token and parameters, then the retry attempt will succeed without
   *          performing any further actions.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the device discovery request.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartDeviceDiscoveryResponse {
  /**
   * <p>The id of the device discovery job request.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp value for the start time of the device discovery.</p>
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const DisconnectReasonValue = {
  AUTH_ERROR: "AUTH_ERROR",
  CLIENT_ERROR: "CLIENT_ERROR",
  CLIENT_INITIATED_DISCONNECT: "CLIENT_INITIATED_DISCONNECT",
  CONNECTION_LOST: "CONNECTION_LOST",
  CUSTOMAUTH_TTL_EXPIRATION: "CUSTOMAUTH_TTL_EXPIRATION",
  DUPLICATE_CLIENTID: "DUPLICATE_CLIENTID",
  FORBIDDEN_ACCESS: "FORBIDDEN_ACCESS",
  MQTT_KEEP_ALIVE_TIMEOUT: "MQTT_KEEP_ALIVE_TIMEOUT",
  NONE: "NONE",
  SERVER_ERROR: "SERVER_ERROR",
  SERVER_INITIATED_DISCONNECT: "SERVER_INITIATED_DISCONNECT",
  THROTTLED: "THROTTLED",
  UNKNOWN: "UNKNOWN",
  WEBSOCKET_TTL_EXPIRATION: "WEBSOCKET_TTL_EXPIRATION",
} as const;

/**
 * @public
 */
export type DisconnectReasonValue = (typeof DisconnectReasonValue)[keyof typeof DisconnectReasonValue];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  CUSTOMER_KEY_ENCRYPTION: "CUSTOMER_KEY_ENCRYPTION",
  MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION: "MANAGED_INTEGRATIONS_DEFAULT_ENCRYPTION",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * <p>List of event log configurations.</p>
 * @public
 */
export interface EventLogConfigurationSummary {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationRequest {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface GetEventLogConfigurationResponse {
  /**
   * <p>The identifier of the event log configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of resource for the event log configuration.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the resource for the event log configuration.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The logging level for the event log configuration.</p>
   * @public
   */
  EventLogLevel?: LogLevel | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEventLogConfigurationsResponse {
  /**
   * <p>A list of each event log configuration and pertinent information.</p>
   * @public
   */
  EventLogConfigurationList?: EventLogConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventLogConfigurationRequest {
  /**
   * <p>The log configuration id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The log level for the event in terms of severity.</p>
   * @public
   */
  EventLogLevel: LogLevel | undefined;
}

/**
 * @public
 */
export interface GetCustomEndpointRequest {}

/**
 * @public
 */
export interface GetCustomEndpointResponse {
  /**
   * <p>The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.</p>
   * @public
   */
  EndpointAddress: string | undefined;
}

/**
 * @public
 */
export interface GetDefaultEncryptionConfigurationRequest {}

/**
 * @public
 */
export interface GetDefaultEncryptionConfigurationResponse {
  /**
   * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use
   *             <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>An unexpected error has occurred.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetHubConfigurationRequest {}

/**
 * @public
 */
export interface GetHubConfigurationResponse {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in
   *          seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;

  /**
   * <p>The timestamp value of when the hub configuration was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HubNetworkMode = {
  NETWORK_WIDE_EXCLUSION: "NETWORK_WIDE_EXCLUSION",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type HubNetworkMode = (typeof HubNetworkMode)[keyof typeof HubNetworkMode];

/**
 * @public
 * @enum
 */
export const ProvisioningStatus = {
  ACTIVATED: "ACTIVATED",
  DELETED: "DELETED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  DISCOVERED: "DISCOVERED",
  ISOLATED: "ISOLATED",
  PRE_ASSOCIATED: "PRE_ASSOCIATED",
  UNASSOCIATED: "UNASSOCIATED",
} as const;

/**
 * @public
 */
export type ProvisioningStatus = (typeof ProvisioningStatus)[keyof typeof ProvisioningStatus];

/**
 * @public
 */
export interface GetManagedThingResponse {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value
   *          should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential locker for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The id of the advertised product.</p>
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * <p>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT
   *          device.</p>
   * @public
   */
  Role?: Role | undefined;

  /**
   * <p>The provisioning status of the device in the provisioning workflow for onboarding to
   *          IoT managed integrations.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The universal product code (UPC) of the device model. The UPC is typically used in the
   *          United States of America and Canada.</p>
   * @public
   */
  UniversalProductCode?: string | undefined;

  /**
   * <p>The unique 13 digit number that identifies the managed thing.</p>
   * @public
   */
  InternationalArticleNumber?: string | undefined;

  /**
   * <p>The id of the connector policy.</p>
   *          <note>
   *             <p>This parameter is used for cloud-to-cloud devices only.</p>
   *          </note>
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * <p>The third-party device id as defined by the connector. This device id must not contain
   *          personal identifiable information (PII).</p>
   *          <note>
   *             <p>This parameter is used for cloud-to-cloud devices only.</p>
   *          </note>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>A Zwave device-specific key used during device activation.</p>
   *          <note>
   *             <p>This parameter is used for Zwave devices only.</p>
   *          </note>
   * @public
   */
  DeviceSpecificKey?: string | undefined;

  /**
   * <p>The media access control (MAC) address for the device represented by the managed
   *          thing.</p>
   *          <note>
   *             <p>This parameter is used for Zigbee devices only.</p>
   *          </note>
   * @public
   */
  MacAddress?: string | undefined;

  /**
   * <p>Id of the controller device used for the discovery job.</p>
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the managed thing was last updated at.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestampe value of when the device was activated.</p>
   * @public
   */
  ActivatedAt?: Date | undefined;

  /**
   * <p>The network mode for the hub-connected device.</p>
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the managed thing.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingCapabilitiesResponse {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataRequest {
  /**
   * <p>The identifier of a managed thing.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingConnectivityDataResponse {
  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The connectivity status for a managed thing.</p>
   * @public
   */
  Connected?: boolean | undefined;

  /**
   * <p>The timestamp value of when the connectivity status for a managed thing was last
   *          taken.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The reason for the connectivity disconnect with the managed thing.</p>
   * @public
   */
  DisconnectReason?: DisconnectReasonValue | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataRequest {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetManagedThingMetaDataResponse {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * <p>State capabilities added for the managed thing.</p>
 * @public
 */
export interface StateCapability {
  /**
   * <p>The id of the managed thing in the capability report.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name for the Amazon Web Services capability.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Version for the Amazon Web Services capability.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>Describe the command capability with the properties it supports.</p>
   * @public
   */
  properties?: __DocumentType | undefined;
}

/**
 * <p>Describe the endpoint with an Id, a name, and the relevant capabilities for reporting
 *          state</p>
 * @public
 */
export interface StateEndpoint {
  /**
   * <p>Numeric identifier of the endpoint</p>
   * @public
   */
  endpointId: string | undefined;

  /**
   * <p>Describe the endpoint with an id, a name, and the relevant capabilities for the
   *          reporting state.</p>
   * @public
   */
  capabilities: StateCapability[] | undefined;
}

/**
 * @public
 */
export interface GetManagedThingStateResponse {
  /**
   * <p>The device endpoint.</p>
   * @public
   */
  Endpoints: StateEndpoint[] | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType: EventType | undefined;
}

/**
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName?: string | undefined;

  /**
   * <p>The timestamp value of when the notification configuration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the notification configuration was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the notification configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaStatus = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type OtaStatus = (typeof OtaStatus)[keyof typeof OtaStatus];

/**
 * <p>Details about the over-the-air (OTA) task process.</p>
 * @public
 */
export interface TaskProcessingDetails {
  /**
   * <p>The number of canceled things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfCanceledThings?: number | undefined;

  /**
   * <p>The number of failed things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfFailedThings?: number | undefined;

  /**
   * <p>The number of in progress things in an over-the-air (OTA) task.</p>
   * @public
   */
  NumberOfInProgressThings?: number | undefined;

  /**
   * <p>The number of queued things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfQueuedThings?: number | undefined;

  /**
   * <p>The number of rejected things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfRejectedThings?: number | undefined;

  /**
   * <p>The number of removed things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfRemovedThings?: number | undefined;

  /**
   * <p>The number of succeeded things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfSucceededThings?: number | undefined;

  /**
   * <p>The number of timed out things in an over-the-air (OTA) task.</p>
   * @public
   */
  numberOfTimedOutThings?: number | undefined;

  /**
   * <p>The targets of the over-the-air (OTA) task.</p>
   * @public
   */
  processingTargets?: string[] | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskResponse {
  /**
   * <p>The id of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URL to the Amazon S3 bucket where the over-the-air (OTA) task is stored.</p>
   * @public
   */
  S3Url?: string | undefined;

  /**
   * <p>The connection protocol the over-the-air (OTA) task uses to update the device.</p>
   * @public
   */
  Protocol?: OtaProtocol | undefined;

  /**
   * <p>The frequency type for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaType?: OtaType | undefined;

  /**
   * <p>The query string to add things to the thing group.</p>
   * @public
   */
  OtaTargetQueryString?: string | undefined;

  /**
   * <p>The deployment mechanism for the over-the-air (OTA) task.</p>
   * @public
   */
  OtaMechanism?: OtaMechanism | undefined;

  /**
   * <p>The device targeted for the over-the-air (OTA) task.</p>
   * @public
   */
  Target?: string[] | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was last updated at.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The processing details of all over-the-air (OTA) tasks.</p>
   * @public
   */
  TaskProcessingDetails?: TaskProcessingDetails | undefined;

  /**
   * <p>Over-the-air (OTA) task scheduling config.</p>
   * @public
   */
  OtaSchedulingConfig?: OtaTaskSchedulingConfig | undefined;

  /**
   * <p>Over-the-air (OTA) task retry config.</p>
   * @public
   */
  OtaTaskExecutionRetryConfig?: OtaTaskExecutionRetryConfig | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task.</p>
   * @public
   */
  Status?: OtaStatus | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationRequest {
  /**
   * <p>The over-the-air (OTA) task configuration id.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetOtaTaskConfigurationResponse {
  /**
   * <p>The over-the-air (OTA) task configuration id.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes the type of configuration used for the over-the-air (OTA) task.</p>
   * @public
   */
  PushConfig?: PushConfig | undefined;

  /**
   * <p>A description of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task configuration was created
   *          at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileRequest {
  /**
   * <p>The provisioning template the device uses for the provisioning process.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProvisioningProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning
   *          profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The provisioning profile id..</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The id of the claim certificate.</p>
   * @public
   */
  ClaimCertificate?: string | undefined;

  /**
   * <p>A set of key/value pairs that are used to manage the provisioning profile.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationRequest {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * <p>The different configurations for runtime logs.</p>
 * @public
 */
export interface RuntimeLogConfigurations {
  /**
   * <p>The different log levels available for configuration.</p>
   * @public
   */
  LogLevel?: LogLevel | undefined;

  /**
   * <p>The different log levels available for configuration.</p>
   * @public
   */
  LogFlushLevel?: LogLevel | undefined;

  /**
   * <p>Configuration of where to store runtime logs in the device.</p>
   * @public
   */
  LocalStoreLocation?: string | undefined;

  /**
   * <p>Configuration to set the maximum number of runtime log files that can be stored on the
   *          device before the oldest files are deleted or overwritten.</p>
   * @public
   */
  LocalStoreFileRotationMaxFiles?: number | undefined;

  /**
   * <p>Configuration to set the maximum bytes of runtime logs that can be stored on the device
   *          before the oldest logs are deleted or overwritten.</p>
   * @public
   */
  LocalStoreFileRotationMaxBytes?: number | undefined;

  /**
   * <p>Configuration to enable or disable uploading of runtime logs to the cloud.</p>
   * @public
   */
  UploadLog?: boolean | undefined;

  /**
   * <p>Configuration to set the time interval in minutes between each batch of runtime logs
   *          that the device uploads to the cloud.</p>
   * @public
   */
  UploadPeriodMinutes?: number | undefined;

  /**
   * <p>Configuration to enable or disable deleting of runtime logs in the device once uploaded
   *          to the cloud.</p>
   * @public
   */
  DeleteLocalStoreAfterUpload?: boolean | undefined;
}

/**
 * @public
 */
export interface GetRuntimeLogConfigurationResponse {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;

  /**
   * <p>The runtime log configuration for a managed thing.</p>
   * @public
   */
  RuntimeLogConfigurations?: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaVersionFormat = {
  AWS: "AWS",
  CONNECTOR: "CONNECTOR",
  ZCL: "ZCL",
} as const;

/**
 * @public
 */
export type SchemaVersionFormat = (typeof SchemaVersionFormat)[keyof typeof SchemaVersionFormat];

/**
 * @public
 * @enum
 */
export const SchemaVersionType = {
  CAPABILITY: "capability",
  DEFINITION: "definition",
} as const;

/**
 * @public
 */
export type SchemaVersionType = (typeof SchemaVersionType)[keyof typeof SchemaVersionType];

/**
 * @public
 */
export interface GetSchemaVersionRequest {
  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * <p>Schema id with a version specified. If the version is missing, it defaults to latest
   *          version.</p>
   * @public
   */
  SchemaVersionedId: string | undefined;

  /**
   * <p>The format of the schema version.</p>
   * @public
   */
  Format?: SchemaVersionFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const SchemaVersionVisibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type SchemaVersionVisibility = (typeof SchemaVersionVisibility)[keyof typeof SchemaVersionVisibility];

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * <p>The id of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * <p>The description of the schema version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * <p>The schema of the schema version.</p>
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationRequest {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in
   *          seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds: number | undefined;
}

/**
 * @public
 */
export interface PutHubConfigurationResponse {
  /**
   * <p>A user-defined integer value that represents the hub token timer expiry setting in
   *          seconds.</p>
   * @public
   */
  HubTokenTimerExpirySettingInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use
   *             <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>Provides the status of the default encryption configuration for an Amazon Web Services account.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key Amazon Resource Name (ARN) of the AWS KMS key used for KMS encryption if you use
   *             <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandRequest {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The device endpoint.</p>
   * @public
   */
  Endpoints: CommandEndpoint[] | undefined;

  /**
   * <p>The ID tracking the current discovery process for one connector association.</p>
   * @public
   */
  ConnectorAssociationId?: string | undefined;
}

/**
 * @public
 */
export interface SendManagedThingCommandResponse {
  /**
   * <p>The trace request identifier. This is specified by the device owner, but will be
   *          generated by IoT managed integrations if not provided by the device owner.</p>
   * @public
   */
  TraceId?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsRequest {
  /**
   * <p>Filter on device owners when listing managed things.</p>
   * @public
   */
  OwnerFilter?: string | undefined;

  /**
   * <p>Filter on a credential locker for a managed thing.</p>
   * @public
   */
  CredentialLockerFilter?: string | undefined;

  /**
   * <p>Filter on the type of device used. This will be the Amazon Web Services hub controller, cloud device,
   *          or IoT device.</p>
   * @public
   */
  RoleFilter?: Role | undefined;

  /**
   * <p>Filter on a parent controller id for a managed thing.</p>
   * @public
   */
  ParentControllerIdentifierFilter?: string | undefined;

  /**
   * <p>Filter on a connector policy id for a managed thing.</p>
   * @public
   */
  ConnectorPolicyIdFilter?: string | undefined;

  /**
   * <p>Filter on the serial number of the device.</p>
   * @public
   */
  SerialNumberFilter?: string | undefined;

  /**
   * <p>Filter on the status of the device.</p>
   * @public
   */
  ProvisioningStatusFilter?: ProvisioningStatus | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one managed thing.</p>
 * @public
 */
export interface ManagedThingSummary {
  /**
   * <p>The id of the device.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the managed thing.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The id of the advertised product.</p>
   * @public
   */
  AdvertisedProductId?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The third-party device id as defined by the connector. This device id must not contain
   *          personal identifiable information (PII).</p>
   *          <note>
   *             <p>This parameter is used for cloud-to-cloud devices only.</p>
   *          </note>
   * @public
   */
  ConnectorDeviceId?: string | undefined;

  /**
   * <p>The id of the connector policy.</p>
   *          <note>
   *             <p>This parameter is used for cloud-to-cloud devices only.</p>
   *          </note>
   * @public
   */
  ConnectorPolicyId?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value
   *          should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential locker for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>Id of the controller device used for the discovery job.</p>
   * @public
   */
  ParentControllerId?: string | undefined;

  /**
   * <p>The provisioning status of the device in the provisioning workflow for onboarding to
   *          IoT managed integrations.</p>
   * @public
   */
  ProvisioningStatus?: ProvisioningStatus | undefined;

  /**
   * <p>The type of device used. This will be the Amazon Web Services hub controller, cloud device, or IoT
   *          device.</p>
   * @public
   */
  Role?: Role | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The timestamp value of when the device creation request occurred.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the managed thing was last updated at.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The timestampe value of when the managed thing was activated at.</p>
   * @public
   */
  ActivatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedThingsResponse {
  /**
   * <p>The list of managed things.</p>
   * @public
   */
  Items?: ManagedThingSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasRequest {
  /**
   * <p>The managed thing id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Filter on an endpoint id.</p>
   * @public
   */
  EndpointIdFilter?: string | undefined;

  /**
   * <p>Filter on a capability id.</p>
   * @public
   */
  CapabilityIdFilter?: string | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one schema item associated with a managed thing.</p>
 * @public
 */
export interface ManagedThingSchemaListItem {
  /**
   * <p>The id of the endpoint for a managed thing.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The id of the capability for a managed thing.</p>
   * @public
   */
  CapabilityId?: string | undefined;

  /**
   * <p>The validation schema for one schema item associated with a managed thing.</p>
   * @public
   */
  Schema?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface ListManagedThingSchemasResponse {
  /**
   * <p>The list of managed thing schemas.</p>
   * @public
   */
  Items?: ManagedThingSchemaListItem[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateManagedThingRequest {
  /**
   * <p>The id of the managed thing.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Owner of the device, usually an indication of whom the device belongs to. This value
   *          should not contain personal identifiable information.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>The identifier of the credential for the managed thing.</p>
   * @public
   */
  CredentialLockerId?: string | undefined;

  /**
   * <p>The serial number of the device.</p>
   * @public
   */
  SerialNumber?: string | undefined;

  /**
   * <p>The brand of the device.</p>
   * @public
   */
  Brand?: string | undefined;

  /**
   * <p>The model of the device.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>The name of the managed thing representing the physical device.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A report of the capabilities for the managed thing.</p>
   * @public
   */
  CapabilityReport?: CapabilityReport | undefined;

  /**
   * <p>The capabilities of the device such as light bulb.</p>
   * @public
   */
  Capabilities?: string | undefined;

  /**
   * <p>The classification of the managed thing such as light bulb or thermostat.</p>
   * @public
   */
  Classification?: string | undefined;

  /**
   * <p>The network mode for the hub-connected device.</p>
   * @public
   */
  HubNetworkMode?: HubNetworkMode | undefined;

  /**
   * <p>The metadata for the managed thing.</p>
   * @public
   */
  MetaData?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsRequest {
  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Structure describing a notification configuration.</p>
 * @public
 */
export interface NotificationConfigurationSummary {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName?: string | undefined;
}

/**
 * @public
 */
export interface ListNotificationConfigurationsResponse {
  /**
   * <p>The list of notification configurations.</p>
   * @public
   */
  NotificationConfigurationList?: NotificationConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNotificationConfigurationRequest {
  /**
   * <p>The type of event triggering a device notification to the customer-managed
   *          destination.</p>
   * @public
   */
  EventType: EventType | undefined;

  /**
   * <p>The name of the destination for the notification configuration.</p>
   * @public
   */
  DestinationName: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one over-the-air (OTA) task configuration.</p>
 * @public
 */
export interface OtaTaskConfigurationSummary {
  /**
   * <p>The id of the over-the-air (OTA) task configuration</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The name of the over-the-air (OTA) task configuration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task configuration was created
   *          at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskConfigurationsResponse {
  /**
   * <p>The list of the over-the-air (OTA) task configurations.</p>
   * @public
   */
  Items?: OtaTaskConfigurationSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OtaTaskExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type OtaTaskExecutionStatus = (typeof OtaTaskExecutionStatus)[keyof typeof OtaTaskExecutionStatus];

/**
 * <p>Structure representing one over-the-air (OTA) task execution summary.</p>
 * @public
 */
export interface OtaTaskExecutionSummary {
  /**
   * <p>The execution number of the over-the-air (OTA) task execution summary.</p>
   * @public
   */
  ExecutionNumber?: number | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary was last
   *          updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary is targeted to
   *          start.</p>
   * @public
   */
  QueuedAt?: Date | undefined;

  /**
   * <p>The number of retry attempts for starting the over-the-air (OTA) task execution summary
   *          after a failed attempt.</p>
   * @public
   */
  RetryAttempt?: number | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task execution summary
   *          started.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task execution summary.</p>
   * @public
   */
  Status?: OtaTaskExecutionStatus | undefined;
}

/**
 * <p>Structure representing one execution summary.</p>
 * @public
 */
export interface OtaTaskExecutionSummaries {
  /**
   * <p>Structure representing one over-the-air (OTA) task execution summary</p>
   * @public
   */
  TaskExecutionSummary?: OtaTaskExecutionSummary | undefined;

  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTaskExecutionsResponse {
  /**
   * <p>A list of all of the over-the-air (OTA) task executions.</p>
   * @public
   */
  ExecutionSummaries?: OtaTaskExecutionSummaries[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure representing one over-the-air (OTA) task.</p>
 * @public
 */
export interface OtaTaskSummary {
  /**
   * <p>The id of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the over-the-air (OTA) task.</p>
   * @public
   */
  TaskArn?: string | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp value of when the over-the-air (OTA) task was last updated at.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;

  /**
   * <p>The status of the over-the-air (OTA) task summary.</p>
   * @public
   */
  Status?: OtaStatus | undefined;
}

/**
 * @public
 */
export interface ListOtaTasksResponse {
  /**
   * <p>A list of all of the over-the-air (OTA) tasks.</p>
   * @public
   */
  Tasks?: OtaTaskSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOtaTaskRequest {
  /**
   * <p>The over-the-air (OTA) task id.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The description of the over-the-air (OTA) task.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier for the over-the-air (OTA) task configuration.</p>
   * @public
   */
  TaskConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesRequest {
  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Structure describing a provisioning profile. </p>
 * @public
 */
export interface ProvisioningProfileSummary {
  /**
   * <p>The name of the provisioning template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the provisioning profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the provisioning template used in the provisioning
   *          profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The type of provisioning workflow the device uses for onboarding to IoT managed integrations.</p>
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;
}

/**
 * @public
 */
export interface ListProvisioningProfilesResponse {
  /**
   * <p>The list of provisioning profiles.</p>
   * @public
   */
  Items?: ProvisioningProfileSummary[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterCustomEndpointRequest {}

/**
 * @public
 */
export interface RegisterCustomEndpointResponse {
  /**
   * <p>The IoT managed integrations dedicated, custom endpoint for the device to route traffic through.</p>
   * @public
   */
  EndpointAddress: string | undefined;
}

/**
 * @public
 */
export interface PutRuntimeLogConfigurationRequest {
  /**
   * <p>The id for a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;

  /**
   * <p>The runtime log configuration for a managed thing.</p>
   * @public
   */
  RuntimeLogConfigurations: RuntimeLogConfigurations | undefined;
}

/**
 * @public
 */
export interface ResetRuntimeLogConfigurationRequest {
  /**
   * <p>The id of a managed thing.</p>
   * @public
   */
  ManagedThingId: string | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsRequest {
  /**
   * <p>Filter on the type of schema version.</p>
   * @public
   */
  Type: SchemaVersionType | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter on the id of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>Filter on the name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;
}

/**
 * <p>List item describing a schema version.</p>
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * <p>The identifier of the schema version.</p>
   * @public
   */
  SchemaId?: string | undefined;

  /**
   * <p>The type of schema version.</p>
   * @public
   */
  Type?: SchemaVersionType | undefined;

  /**
   * <p>A description of the schema version.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the schema version.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The schema version. If this is left blank, it defaults to the latest version.</p>
   * @public
   */
  SemanticVersion?: string | undefined;

  /**
   * <p>The visibility of the schema version.</p>
   * @public
   */
  Visibility?: SchemaVersionVisibility | undefined;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>The list of schema versions.</p>
   * @public
   */
  Items?: SchemaVersionListItem[] | undefined;

  /**
   * <p>A token that can be used to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @internal
 */
export const CapabilityActionFilterSensitiveLog = (obj: CapabilityAction): any => ({
  ...obj,
  ...(obj.parameters && { parameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CommandCapabilityFilterSensitiveLog = (obj: CommandCapability): any => ({
  ...obj,
  ...(obj.actions && { actions: obj.actions.map((item) => CapabilityActionFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CommandEndpointFilterSensitiveLog = (obj: CommandEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCredentialLockerRequestFilterSensitiveLog = (obj: CreateCredentialLockerRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDestinationRequestFilterSensitiveLog = (obj: CreateDestinationRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateManagedThingRequestFilterSensitiveLog = (obj: CreateManagedThingRequest): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.AuthenticationMaterial && { AuthenticationMaterial: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNotificationConfigurationRequestFilterSensitiveLog = (
  obj: CreateNotificationConfigurationRequest
): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateOtaTaskRequestFilterSensitiveLog = (obj: CreateOtaTaskRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateOtaTaskConfigurationRequestFilterSensitiveLog = (obj: CreateOtaTaskConfigurationRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProvisioningProfileRequestFilterSensitiveLog = (obj: CreateProvisioningProfileRequest): any => ({
  ...obj,
  ...(obj.CaCertificate && { CaCertificate: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProvisioningProfileResponseFilterSensitiveLog = (obj: CreateProvisioningProfileResponse): any => ({
  ...obj,
  ...(obj.ClaimCertificate && { ClaimCertificate: SENSITIVE_STRING }),
  ...(obj.ClaimCertificatePrivateKey && { ClaimCertificatePrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CredentialLockerSummaryFilterSensitiveLog = (obj: CredentialLockerSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCredentialLockerResponseFilterSensitiveLog = (obj: GetCredentialLockerResponse): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCredentialLockersResponseFilterSensitiveLog = (obj: ListCredentialLockersResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => CredentialLockerSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDestinationResponseFilterSensitiveLog = (obj: GetDestinationResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeviceDiscoveryResponseFilterSensitiveLog = (obj: GetDeviceDiscoveryResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDeviceDiscoveryRequestFilterSensitiveLog = (obj: StartDeviceDiscoveryRequest): any => ({
  ...obj,
  ...(obj.AuthenticationMaterial && { AuthenticationMaterial: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetManagedThingResponseFilterSensitiveLog = (obj: GetManagedThingResponse): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.UniversalProductCode && { UniversalProductCode: SENSITIVE_STRING }),
  ...(obj.InternationalArticleNumber && { InternationalArticleNumber: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.DeviceSpecificKey && { DeviceSpecificKey: SENSITIVE_STRING }),
  ...(obj.MacAddress && { MacAddress: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StateCapabilityFilterSensitiveLog = (obj: StateCapability): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StateEndpointFilterSensitiveLog = (obj: StateEndpoint): any => ({
  ...obj,
  ...(obj.capabilities && { capabilities: obj.capabilities.map((item) => StateCapabilityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetManagedThingStateResponseFilterSensitiveLog = (obj: GetManagedThingStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetNotificationConfigurationResponseFilterSensitiveLog = (
  obj: GetNotificationConfigurationResponse
): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetOtaTaskConfigurationResponseFilterSensitiveLog = (obj: GetOtaTaskConfigurationResponse): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProvisioningProfileResponseFilterSensitiveLog = (obj: GetProvisioningProfileResponse): any => ({
  ...obj,
  ...(obj.ClaimCertificate && { ClaimCertificate: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendManagedThingCommandRequestFilterSensitiveLog = (obj: SendManagedThingCommandRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedThingsRequestFilterSensitiveLog = (obj: ListManagedThingsRequest): any => ({
  ...obj,
  ...(obj.OwnerFilter && { OwnerFilter: SENSITIVE_STRING }),
  ...(obj.SerialNumberFilter && { SerialNumberFilter: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ManagedThingSummaryFilterSensitiveLog = (obj: ManagedThingSummary): any => ({
  ...obj,
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
  ...(obj.ConnectorDeviceId && { ConnectorDeviceId: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListManagedThingsResponseFilterSensitiveLog = (obj: ListManagedThingsResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ManagedThingSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateManagedThingRequestFilterSensitiveLog = (obj: UpdateManagedThingRequest): any => ({
  ...obj,
  ...(obj.Owner && { Owner: SENSITIVE_STRING }),
  ...(obj.SerialNumber && { SerialNumber: SENSITIVE_STRING }),
  ...(obj.Brand && { Brand: SENSITIVE_STRING }),
  ...(obj.Model && { Model: SENSITIVE_STRING }),
  ...(obj.Classification && { Classification: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OtaTaskConfigurationSummaryFilterSensitiveLog = (obj: OtaTaskConfigurationSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListOtaTaskConfigurationsResponseFilterSensitiveLog = (obj: ListOtaTaskConfigurationsResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => OtaTaskConfigurationSummaryFilterSensitiveLog(item)) }),
});
