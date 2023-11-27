// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { WorkSpacesThinClientServiceException as __BaseException } from "./WorkSpacesThinClientServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * @public
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource associated with the request.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource associated with the request.</p>
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
 * @public
 * <p>Describes the maintenance window for a thin client device.</p>
 */
export interface MaintenanceWindow {
  /**
   * @public
   * <p>An option to select the default or custom maintenance window.</p>
   */
  type?: MaintenanceWindowType;

  /**
   * @public
   * <p>The hour for the maintenance window start (<code>00</code>-<code>23</code>).</p>
   */
  startTimeHour?: number;

  /**
   * @public
   * <p>The minutes past the hour for the maintenance window start
   *                 (<code>00</code>-<code>59</code>).</p>
   */
  startTimeMinute?: number;

  /**
   * @public
   * <p>The hour for the maintenance window end (<code>00</code>-<code>23</code>).</p>
   */
  endTimeHour?: number;

  /**
   * @public
   * <p>The minutes for the maintenance window end (<code>00</code>-<code>59</code>).</p>
   */
  endTimeMinute?: number;

  /**
   * @public
   * <p>The days of the week during which the maintenance window is open.</p>
   */
  daysOfTheWeek?: DayOfWeek[];

  /**
   * @public
   * <p>The option to set the maintenance window during the device local time or Universal
   *             Coordinated Time (UTC).</p>
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
   * @public
   * <p>The name for the environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   */
  desktopArn: string | undefined;

  /**
   * @public
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   */
  desktopEndpoint?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>A specification for a time window to apply software updates.</p>
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * @public
   * <p>An option to define which software updates to apply.</p>
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * @public
   * <p>The ID of the software set to apply.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key to use to encrypt the
   *             environment.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
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
   */
  clientToken?: string;

  /**
   * @public
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   */
  tags?: Record<string, string>;
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
 * @public
 * <p>The resource and internal ID of a resource to tag.</p>
 */
export interface EmbeddedTag {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a resource to tag.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The internal ID of a resource to tag.</p>
   */
  internalId?: string;
}

/**
 * @public
 * <p>Describes an environment.</p>
 */
export interface EnvironmentSummary {
  /**
   * @public
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   */
  desktopArn?: string;

  /**
   * @public
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   */
  desktopEndpoint?: string;

  /**
   * @public
   * <p>The type of streaming desktop for the environment.</p>
   */
  desktopType?: DesktopType;

  /**
   * @public
   * <p>The activation code to register a device to the environment.</p>
   */
  activationCode?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>A specification for a time window to apply software updates.</p>
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * @public
   * <p>An option to define which software updates to apply.</p>
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * @public
   * <p>The ID of the software set to apply.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>The ID of the software set that is pending to be installed.</p>
   */
  pendingSoftwareSetId?: string;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource.</p>
   */
  tags?: EmbeddedTag;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * @public
   * <p>Describes an environment.</p>
   */
  environment?: EnvironmentSummary;
}

/**
 * @public
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The number of seconds to wait before retrying the next request.</p>
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
 * @public
 * <p>The resource specified in the request was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource associated with the request.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource associated with the request.</p>
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
 * @public
 * <p>Your request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that exceeds the service quota.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The type of the resource that exceeds the service quota.</p>
   */
  resourceType?: string;

  /**
   * @public
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>The number of seconds to wait before retrying the next request.</p>
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
 * @public
 * <p>Describes a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message that describes the reason for the exception.</p>
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
 * @public
 * <p>The input fails to satisfy the specified constraints.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the exception.</p>
   */
  reason?: ValidationExceptionReason;

  /**
   * @public
   * <p>A list of fields that didn't validate.</p>
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
   * @public
   * <p>The ID of the device to delete.</p>
   */
  id: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The ID of the environment to delete.</p>
   */
  id: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The ID of the device to deregister.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The desired new status for the device.</p>
   */
  targetDeviceStatus?: TargetDeviceStatus;

  /**
   * @public
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
 * @public
 * <p>Describes a thin client device.</p>
 */
export interface Device {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The hardware serial number of the device.</p>
   */
  serialNumber?: string;

  /**
   * @public
   * <p>The name of the device.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The model number of the device.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The ID of the environment the device is associated with.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The status of the device.</p>
   */
  status?: DeviceStatus;

  /**
   * @public
   * <p>The ID of the software set currently installed on the device.</p>
   */
  currentSoftwareSetId?: string;

  /**
   * @public
   * <p>The version of the software set currently installed on the device.</p>
   */
  currentSoftwareSetVersion?: string;

  /**
   * @public
   * <p>The ID of the software set which the device has been set to.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   */
  pendingSoftwareSetId?: string;

  /**
   * @public
   * <p>The version of the software set that is pending to be installed on the device.</p>
   */
  pendingSoftwareSetVersion?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>Describes if the software currently installed on the device is a supported
   *             version.</p>
   */
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus;

  /**
   * @public
   * <p>Describes if the device has a supported version of software installed.</p>
   */
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus;

  /**
   * @public
   * <p>The timestamp of the most recent session on the device.</p>
   */
  lastConnectedAt?: Date;

  /**
   * @public
   * <p>The timestamp of the most recent check-in of the device.</p>
   */
  lastPostureAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the
   *             device.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource.</p>
   */
  tags?: EmbeddedTag;
}

/**
 * @public
 * <p>Describes a thin client device.</p>
 */
export interface DeviceSummary {
  /**
   * @public
   * <p>The ID of the device.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The hardware serial number of the device.</p>
   */
  serialNumber?: string;

  /**
   * @public
   * <p>The name of the device.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The model number of the device.</p>
   */
  model?: string;

  /**
   * @public
   * <p>The ID of the environment the device is associated with.</p>
   */
  environmentId?: string;

  /**
   * @public
   * <p>The status of the device.</p>
   */
  status?: DeviceStatus;

  /**
   * @public
   * <p>The ID of the software set currently installed on the device.</p>
   */
  currentSoftwareSetId?: string;

  /**
   * @public
   * <p>The ID of the software set which the device has been set to.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   */
  pendingSoftwareSetId?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>The timestamp of the most recent session on the device.</p>
   */
  lastConnectedAt?: Date;

  /**
   * @public
   * <p>The timestamp of the most recent check-in of the device.</p>
   */
  lastPostureAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource.</p>
   */
  tags?: EmbeddedTag;
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
 * @public
 * <p>Describes an environment.</p>
 */
export interface Environment {
  /**
   * @public
   * <p>The ID of the environment.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the environment.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   */
  desktopArn?: string;

  /**
   * @public
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   */
  desktopEndpoint?: string;

  /**
   * @public
   * <p>The type of streaming desktop for the environment.</p>
   */
  desktopType?: DesktopType;

  /**
   * @public
   * <p>The activation code to register a device to the environment.</p>
   */
  activationCode?: string;

  /**
   * @public
   * <p>The number of devices registered to the environment.</p>
   */
  registeredDevicesCount?: number;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>A specification for a time window to apply software updates.</p>
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * @public
   * <p>An option to define which software updates to apply.</p>
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * @public
   * <p>The ID of the software set to apply.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>The ID of the software set that is pending to be installed.</p>
   */
  pendingSoftwareSetId?: string;

  /**
   * @public
   * <p>The version of the software set that is pending to be installed.</p>
   */
  pendingSoftwareSetVersion?: string;

  /**
   * @public
   * <p>Describes if the software currently installed on all devices in the environment is a
   *             supported version.</p>
   */
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus;

  /**
   * @public
   * <p>The timestamp of when the environment was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The timestamp of when the device was updated.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the
   *             environment.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The tag keys and optional values for the resource.</p>
   */
  tags?: EmbeddedTag;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * @public
   * <p>The ID of the device for which to return information.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * @public
   * <p>Describes an device.</p>
   */
  device?: Device;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * @public
   * <p>The ID of the environment for which to return information.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * @public
   * <p>Describes an environment.</p>
   */
  environment?: Environment;
}

/**
 * @public
 */
export interface GetSoftwareSetRequest {
  /**
   * @public
   * <p>The ID of the software set for which to return information.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Describes software.</p>
 */
export interface Software {
  /**
   * @public
   * <p>The name of the software component.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The version of the software component.</p>
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
 * @public
 * <p>Describes a software set.</p>
 */
export interface SoftwareSet {
  /**
   * @public
   * <p>The ID of the software set.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The version of the software set.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The timestamp of when the software set was released.</p>
   */
  releasedAt?: Date;

  /**
   * @public
   * <p>The timestamp of the end of support for the software set.</p>
   */
  supportedUntil?: Date;

  /**
   * @public
   * <p>An option to define if the software set has been validated.</p>
   */
  validationStatus?: SoftwareSetValidationStatus;

  /**
   * @public
   * <p>A list of the software components in the software set.</p>
   */
  software?: Software[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetSoftwareSetResponse {
  /**
   * @public
   * <p>Describes a software set.</p>
   */
  softwareSet?: SoftwareSet;
}

/**
 * @public
 * <p>Request processing failed due to some unknown error, exception, or failure.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The number of seconds to wait before retrying the next request.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * @public
   * <p>Describes devices.</p>
   */
  devices?: DeviceSummary[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * @public
   * <p>Describes environments.</p>
   */
  environments?: EnvironmentSummary[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSoftwareSetsRequest {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results that are returned per call. You can use
   *                 <code>nextToken</code> to obtain further pages of results.</p>
   *          <p>This is only an upper limit. The actual number of results returned per call might be
   *             fewer than the specified maximum.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Describes a software set.</p>
 */
export interface SoftwareSetSummary {
  /**
   * @public
   * <p>The ID of the software set.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The version of the software set.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The timestamp of when the software set was released.</p>
   */
  releasedAt?: Date;

  /**
   * @public
   * <p>The timestamp of the end of support for the software set.</p>
   */
  supportedUntil?: Date;

  /**
   * @public
   * <p>An option to define if the software set has been validated.</p>
   */
  validationStatus?: SoftwareSetValidationStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface ListSoftwareSetsResponse {
  /**
   * @public
   * <p>Describes software sets.</p>
   */
  softwareSets?: SoftwareSetSummary[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of
   *             <code>nextToken</code> is a unique pagination token for each page. Make the call again
   *          using the returned token to retrieve the next page. Keep all other arguments unchanged.
   *          Each pagination token expires after 24 hours. Using an expired pagination token will return
   *          an <i>HTTP 400 InvalidToken error</i>.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve
   *             tags.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A map of the key-value pairs for the tag or tags assigned to the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the
   *             specified resource.</p>
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
   * @public
   * <p>The ID of the device to update.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the device to update.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ID of the software set to apply.</p>
   */
  desiredSoftwareSetId?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key to use for the
   *             update.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * @public
   * <p>Describes a device.</p>
   */
  device?: DeviceSummary;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * @public
   * <p>The ID of the environment to update.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the environment to update.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces,
   *                 WorkSpaces Web, or AppStream 2.0.</p>
   */
  desktopArn?: string;

  /**
   * @public
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   */
  desktopEndpoint?: string;

  /**
   * @public
   * <p>An option to define if software updates should be applied within a maintenance
   *             window.</p>
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule;

  /**
   * @public
   * <p>A specification for a time window to apply software updates.</p>
   */
  maintenanceWindow?: MaintenanceWindow;

  /**
   * @public
   * <p>An option to define which software updates to apply.</p>
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode;

  /**
   * @public
   * <p>The ID of the software set to apply.</p>
   */
  desiredSoftwareSetId?: string;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * @public
   * <p>Describes an environment.</p>
   */
  environment?: EnvironmentSummary;
}

/**
 * @public
 */
export interface UpdateSoftwareSetRequest {
  /**
   * @public
   * <p>The ID of the software set to update.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>An option to define if the software set has been validated.</p>
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
});

/**
 * @internal
 */
export const EmbeddedTagFilterSensitiveLog = (obj: EmbeddedTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentFilterSensitiveLog = (obj: Environment): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.desktopEndpoint && { desktopEndpoint: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
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
});

/**
 * @internal
 */
export const UpdateEnvironmentResponseFilterSensitiveLog = (obj: UpdateEnvironmentResponse): any => ({
  ...obj,
  ...(obj.environment && { environment: EnvironmentSummaryFilterSensitiveLog(obj.environment) }),
});
