// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { WorkSpacesThinClientServiceException as __BaseException } from "./WorkSpacesThinClientServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const ApplyTimeOf = {
  DEVICE: "DEVICE",
  UTC: "UTC",
} as const;

/**
 * @public
 */
export type ApplyTimeOf = (typeof ApplyTimeOf)[keyof typeof ApplyTimeOf];

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource associated with the request.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource associated with the request.</p>
   * @public
   */
  resourceType?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const MaintenanceWindowType = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type MaintenanceWindowType = (typeof MaintenanceWindowType)[keyof typeof MaintenanceWindowType];

/**
 * <p>Describes the maintenance window for a thin client device.</p>
 * @public
 */
export interface MaintenanceWindow {
  /**
   * <p>An option to select the default or custom maintenance window.</p>
   * @public
   */
  type?: MaintenanceWindowType;

  /**
   * <p>The hour for the maintenance window start (<code>00</code>-<code>23</code>).</p>
   * @public
   */
  startTimeHour?: number;

  /**
   * <p>The minutes past the hour for the maintenance window start
   *                 (<code>00</code>-<code>59</code>).</p>
   * @public
   */
  startTimeMinute?: number;

  /**
   * <p>The hour for the maintenance window end (<code>00</code>-<code>23</code>).</p>
   * @public
   */
  endTimeHour?: number;

  /**
   * <p>The minutes for the maintenance window end (<code>00</code>-<code>59</code>).</p>
   * @public
   */
  endTimeMinute?: number;

  /**
   * <p>The days of the week during which the maintenance window is open.</p>
   * @public
   */
  daysOfTheWeek?: DayOfWeek[];

  /**
   * <p>The option to set the maintenance window during the device local time or Universal
   *             Coordinated Time (UTC).</p>
   * @public
   */
  applyTimeOf?: ApplyTimeOf;
}

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateMode = {
  USE_DESIRED: "USE_DESIRED",
  USE_LATEST: "USE_LATEST",
} as const;

/**
 * @public
 */
export type SoftwareSetUpdateMode = (typeof SoftwareSetUpdateMode)[keyof typeof SoftwareSetUpdateMode];

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateSchedule = {
  APPLY_IMMEDIATELY: "APPLY_IMMEDIATELY",
  USE_MAINTENANCE_WINDOW: "USE_MAINTENANCE_WINDOW",
} as const;

/**
 * @public
 */
export type SoftwareSetUpdateSchedule = (typeof SoftwareSetUpdateSchedule)[keyof typeof SoftwareSetUpdateSchedule];

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The name for the environment.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   * @public
   */
  desktopArn: string | undefined;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key to use to encrypt the
   *             environment.</p>
   * @public
   */
  kmsKeyArn?: string;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.</p>
   * @public
   */
  deviceCreationTags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const DesktopType = {
  APPSTREAM: "appstream",
  WORKSPACES: "workspaces",
  WORKSPACES_WEB: "workspaces-web",
} as const;

/**
 * @public
 */
export type DesktopType = (typeof DesktopType)[keyof typeof DesktopType];

/**
 * <p>Describes an environment.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string;

  /**
   * <p>The type of streaming desktop for the environment.</p>
   * @public
   */
  desktopType?: DesktopType;

  /**
   * <p>The activation code to register a device to the environment.</p>
   * @public
   */
  activationCode?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>The ID of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetId?: string;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>Describes an environment.</p>
   * @public
   */
  environment?: EnvironmentSummary;
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The number of seconds to wait before retrying the next request.</p>
   * @public
   */
  retryAfterSeconds?: number;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource specified in the request was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource associated with the request.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource associated with the request.</p>
   * @public
   */
  resourceType?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Your request exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that exceeds the service quota.</p>
   * @public
   */
  resourceId?: string;

  /**
   * <p>The type of the resource that exceeds the service quota.</p>
   * @public
   */
  resourceType?: string;

  /**
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  quotaCode?: string;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  serviceCode?: string;

  /**
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds to wait before retrying the next request.</p>
   * @public
   */
  retryAfterSeconds?: number;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Describes a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message that describes the reason for the exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the specified constraints.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason;

  /**
   * <p>A list of fields that didn't validate.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the device to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteDeviceResponse {}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {}

/**
 * @public
 * @enum
 */
export const TargetDeviceStatus = {
  ARCHIVED: "ARCHIVED",
  DEREGISTERED: "DEREGISTERED",
} as const;

/**
 * @public
 */
export type TargetDeviceStatus = (typeof TargetDeviceStatus)[keyof typeof TargetDeviceStatus];

/**
 * @public
 */
export interface DeregisterDeviceRequest {
  /**
   * <p>The ID of the device to deregister.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The desired new status for the device.</p>
   * @public
   */
  targetDeviceStatus?: TargetDeviceStatus;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency
   *          of the request. This lets you safely retry the request without accidentally performing the
   *          same operation a second time. Passing the same value to a later call to an operation
   *          requires that you also pass the same value for all other parameters. We recommend that you
   *          use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of
   *             value</a>.</p>
   *          <p>If you don't provide this value, then Amazon Web Services generates a random one for
   *          you.</p>
   *          <p>If you retry the operation with the same <code>ClientToken</code>, but with different
   *          parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeregisterDeviceResponse {}

/**
 * @public
 * @enum
 */
export const DeviceSoftwareSetComplianceStatus = {
  COMPLIANT: "COMPLIANT",
  NONE: "NONE",
  NOT_COMPLIANT: "NOT_COMPLIANT",
} as const;

/**
 * @public
 */
export type DeviceSoftwareSetComplianceStatus =
  (typeof DeviceSoftwareSetComplianceStatus)[keyof typeof DeviceSoftwareSetComplianceStatus];

/**
 * @public
 * @enum
 */
export const SoftwareSetUpdateStatus = {
  AVAILABLE: "AVAILABLE",
  IN_PROGRESS: "IN_PROGRESS",
  UP_TO_DATE: "UP_TO_DATE",
} as const;

/**
 * @public
 */
export type SoftwareSetUpdateStatus = (typeof SoftwareSetUpdateStatus)[keyof typeof SoftwareSetUpdateStatus];

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  ARCHIVED: "ARCHIVED",
  DEREGISTERED: "DEREGISTERED",
  DEREGISTERING: "DEREGISTERING",
  REGISTERED: "REGISTERED",
} as const;

/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * <p>Describes a thin client device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The hardware serial number of the device.</p>
   * @public
   */
  serialNumber?: string;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The model number of the device.</p>
   * @public
   */
  model?: string;

  /**
   * <p>The ID of the environment the device is associated with.</p>
   * @public
   */
  environmentId?: string;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  status?: DeviceStatus;

  /**
   * <p>The ID of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetId?: string;

  /**
   * <p>The version of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetVersion?: string;

  /**
   * <p>The ID of the software set which the device has been set to.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetId?: string;

  /**
   * <p>The version of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetVersion?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>Describes if the software currently installed on the device is a supported
   *             version.</p>
   * @public
   */
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus;

  /**
   * <p>Describes if the device has a supported version of software installed.</p>
   * @public
   */
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus;

  /**
   * <p>The timestamp of the most recent session on the device.</p>
   * @public
   */
  lastConnectedAt?: Date;

  /**
   * <p>The timestamp of the most recent check-in of the device.</p>
   * @public
   */
  lastPostureAt?: Date;

  /**
   * <p>The timestamp of when the device was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the
   *             device.</p>
   * @public
   */
  kmsKeyArn?: string;

  /**
   * <p>The tag keys and optional values for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Describes a thin client device.</p>
 * @public
 */
export interface DeviceSummary {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The hardware serial number of the device.</p>
   * @public
   */
  serialNumber?: string;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The model number of the device.</p>
   * @public
   */
  model?: string;

  /**
   * <p>The ID of the environment the device is associated with.</p>
   * @public
   */
  environmentId?: string;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  status?: DeviceStatus;

  /**
   * <p>The ID of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetId?: string;

  /**
   * <p>The ID of the software set which the device has been set to.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetId?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>The timestamp of the most recent session on the device.</p>
   * @public
   */
  lastConnectedAt?: Date;

  /**
   * <p>The timestamp of the most recent check-in of the device.</p>
   * @public
   */
  lastPostureAt?: Date;

  /**
   * <p>The timestamp of when the device was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const EnvironmentSoftwareSetComplianceStatus = {
  COMPLIANT: "COMPLIANT",
  NOT_COMPLIANT: "NOT_COMPLIANT",
  NO_REGISTERED_DEVICES: "NO_REGISTERED_DEVICES",
} as const;

/**
 * @public
 */
export type EnvironmentSoftwareSetComplianceStatus =
  (typeof EnvironmentSoftwareSetComplianceStatus)[keyof typeof EnvironmentSoftwareSetComplianceStatus];

/**
 * <p>Describes an environment.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string;

  /**
   * <p>The type of streaming desktop for the environment.</p>
   * @public
   */
  desktopType?: DesktopType;

  /**
   * <p>The activation code to register a device to the environment.</p>
   * @public
   */
  activationCode?: string;

  /**
   * <p>The number of devices registered to the environment.</p>
   * @public
   */
  registeredDevicesCount?: number;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>The ID of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetId?: string;

  /**
   * <p>The version of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetVersion?: string;

  /**
   * <p>Describes if the software currently installed on all devices in the environment is a
   *             supported version.</p>
   * @public
   */
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the
   *             environment.</p>
   * @public
   */
  kmsKeyArn?: string;

  /**
   * <p>The tag keys and optional values for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>"The tag keys and optional values for the newly created devices for this environment."</p>
   * @public
   */
  deviceCreationTags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * <p>The ID of the device for which to return information.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * <p>Describes an device.</p>
   * @public
   */
  device?: Device;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the environment for which to return information.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>Describes an environment.</p>
   * @public
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface GetSoftwareSetRequest {
  /**
   * <p>The ID of the software set for which to return information.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Describes software.</p>
 * @public
 */
export interface Software {
  /**
   * <p>The name of the software component.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The version of the software component.</p>
   * @public
   */
  version?: string;
}

/**
 * @public
 * @enum
 */
export const SoftwareSetValidationStatus = {
  NOT_VALIDATED: "NOT_VALIDATED",
  VALIDATED: "VALIDATED",
} as const;

/**
 * @public
 */
export type SoftwareSetValidationStatus =
  (typeof SoftwareSetValidationStatus)[keyof typeof SoftwareSetValidationStatus];

/**
 * <p>Describes a software set.</p>
 * @public
 */
export interface SoftwareSet {
  /**
   * <p>The ID of the software set.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The version of the software set.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The timestamp of when the software set was released.</p>
   * @public
   */
  releasedAt?: Date;

  /**
   * <p>The timestamp of the end of support for the software set.</p>
   * @public
   */
  supportedUntil?: Date;

  /**
   * <p>An option to define if the software set has been validated.</p>
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus;

  /**
   * <p>A list of the software components in the software set.</p>
   * @public
   */
  software?: Software[];

  /**
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The tag keys and optional values for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetSoftwareSetResponse {
  /**
   * <p>Describes a software set.</p>
   * @public
   */
  softwareSet?: SoftwareSet;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>Describes devices.</p>
   * @public
   */
  devices?: DeviceSummary[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>Describes environments.</p>
   * @public
   */
  environments?: EnvironmentSummary[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSoftwareSetsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>Describes a software set.</p>
 * @public
 */
export interface SoftwareSetSummary {
  /**
   * <p>The ID of the software set.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The version of the software set.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The timestamp of when the software set was released.</p>
   * @public
   */
  releasedAt?: Date;

  /**
   * <p>The timestamp of the end of support for the software set.</p>
   * @public
   */
  supportedUntil?: Date;

  /**
   * <p>An option to define if the software set has been validated.</p>
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus;

  /**
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListSoftwareSetsResponse {
  /**
   * <p>Describes software sets.</p>
   * @public
   */
  softwareSets?: SoftwareSetSummary[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve
   *             tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the
   *             specified resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDeviceRequest {
  /**
   * <p>The ID of the device to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the device to update.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * <p>Describes a device.</p>
   * @public
   */
  device?: DeviceSummary;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * <p>The ID of the environment to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment to update.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string;

  /**
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.</p>
   * @public
   */
  deviceCreationTags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * <p>Describes an environment.</p>
   * @public
   */
  environment?: EnvironmentSummary;
}

/**
 * @public
 */
export interface UpdateSoftwareSetRequest {
  /**
   * <p>The ID of the software set to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An option to define if the software set has been validated.</p>
   * @public
   */
  validationStatus: SoftwareSetValidationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSoftwareSetResponse {}

/**
 * @internal
 */
export const CreateEnvironmentRequestFilterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.deviceCreationTags && { deviceCreationTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentResponseFilterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentSummaryFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const DeviceFilterSensitiveLog = (obj: Device): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeviceSummaryFilterSensitiveLog = (obj: DeviceSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
  ...(obj.deviceCreationTags && { deviceCreationTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeviceResponseFilterSensitiveLog = (obj: GetDeviceResponse): any => ({
  ...obj,
  ...(obj.device && { device: DeviceFilterSensitiveLog(obj.device) }),
});

/**
 * @internal
 */
export const GetEnvironmentResponseFilterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentFilterSensitiveLog(obj.environment) }),
});

/**
 * @internal
 */
export const SoftwareSetFilterSensitiveLog = (obj: SoftwareSet): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSoftwareSetResponseFilterSensitiveLog = (obj: GetSoftwareSetResponse): any => ({
  ...obj,
  ...(obj.softwareSet && { softwareSet: SoftwareSetFilterSensitiveLog(obj.softwareSet) }),
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
  ...(obj.devices && { devices: obj.devices.map((item) => DeviceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListEnvironmentsResponseFilterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
  ...obj,
  ...(obj.environments && { environments: obj.environments.map((item) => EnvironmentSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.tagKeys && { tagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDeviceRequestFilterSensitiveLog = (obj: UpdateDeviceRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDeviceResponseFilterSensitiveLog = (obj: UpdateDeviceResponse): any => ({
  ...obj,
  ...(obj.device && { device: DeviceSummaryFilterSensitiveLog(obj.device) }),
});

/**
 * @internal
 */
export const UpdateEnvironmentRequestFilterSensitiveLog = (obj: UpdateEnvironmentRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
  ...(obj.deviceCreationTags && { deviceCreationTags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEnvironmentResponseFilterSensitiveLog = (obj: UpdateEnvironmentResponse): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentSummaryFilterSensitiveLog(obj.environment) }),
});
