// smithy-typescript generated code
import type {
  ApplyTimeOf,
  DayOfWeek,
  DesktopType,
  DeviceSoftwareSetComplianceStatus,
  DeviceStatus,
  EnvironmentSoftwareSetComplianceStatus,
  MaintenanceWindowType,
  SoftwareSetUpdateMode,
  SoftwareSetUpdateSchedule,
  SoftwareSetUpdateStatus,
  SoftwareSetValidationStatus,
  TargetDeviceStatus,
} from "./enums";

/**
 * Describes the maintenance window for a thin client device.
 *
 * @public
 */
export interface MaintenanceWindow {
  /**
   * An option to select the default or custom maintenance window.
   *
   * @public
   */
  type: MaintenanceWindowType | undefined;

  /**
   * The hour for the maintenance window start (`00`-`23`).
   *
   * @public
   */
  startTimeHour?: number | undefined;

  /**
   * The minutes past the hour for the maintenance window start (`00`-`59`).
   *
   * @public
   */
  startTimeMinute?: number | undefined;

  /**
   * The hour for the maintenance window end (`00`-`23`).
   *
   * @public
   */
  endTimeHour?: number | undefined;

  /**
   * The minutes for the maintenance window end (`00`-`59`).
   *
   * @public
   */
  endTimeMinute?: number | undefined;

  /**
   * The days of the week during which the maintenance window is open.
   *
   * @public
   */
  daysOfTheWeek?: DayOfWeek[] | undefined;

  /**
   * The option to set the maintenance window during the device local time or Universal Coordinated Time (UTC).
   *
   * @public
   */
  applyTimeOf?: ApplyTimeOf | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * The name for the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.
   *
   * @public
   */
  desktopArn: string | undefined;

  /**
   * The URL for the identity provider login (only for environments that use AppStream 2.0).
   *
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * A specification for a time window to apply software updates.
   *
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * An option to define which software updates to apply.
   *
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * The ID of the software set to apply.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service key to use to encrypt the environment.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.
   *
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
}

/**
 * Describes an environment.
 *
 * @public
 */
export interface EnvironmentSummary {
  /**
   * The ID of the environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.
   *
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * The URL for the identity provider login (only for environments that use AppStream 2.0).
   *
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * The type of streaming desktop for the environment.
   *
   * @public
   */
  desktopType?: DesktopType | undefined;

  /**
   * The activation code to register a device to the environment.
   *
   * @public
   */
  activationCode?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * A specification for a time window to apply software updates.
   *
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * An option to define which software updates to apply.
   *
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * The ID of the software set to apply.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * The ID of the software set that is pending to be installed.
   *
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * The timestamp of when the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the device was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * Describes an environment.
   *
   * @public
   */
  environment?: EnvironmentSummary | undefined;
}

/**
 * Describes a validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message that describes the reason for the exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeviceRequest {
  /**
   * The ID of the device to delete.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
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
   * The ID of the environment to delete.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {}

/**
 * @public
 */
export interface DeregisterDeviceRequest {
  /**
   * The ID of the device to deregister.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The desired new status for the device.
   *
   * @public
   */
  targetDeviceStatus?: TargetDeviceStatus | undefined;

  /**
   * Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a [UUID type of value](https://wikipedia.org/wiki/Universally_unique_identifier).
   *
   * If you don't provide this value, then Amazon Web Services generates a random one for you.
   *
   * If you retry the operation with the same `ClientToken`, but with different parameters, the retry fails with an `IdempotentParameterMismatch` error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDeviceResponse {}

/**
 * Describes a thin client device.
 *
 * @public
 */
export interface Device {
  /**
   * The ID of the device.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The hardware serial number of the device.
   *
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * The name of the device.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The model number of the device.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The ID of the environment the device is associated with.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The status of the device.
   *
   * @public
   */
  status?: DeviceStatus | undefined;

  /**
   * The ID of the software set currently installed on the device.
   *
   * @public
   */
  currentSoftwareSetId?: string | undefined;

  /**
   * The version of the software set currently installed on the device.
   *
   * @public
   */
  currentSoftwareSetVersion?: string | undefined;

  /**
   * The ID of the software set which the device has been set to.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * The ID of the software set that is pending to be installed on the device.
   *
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * The version of the software set that is pending to be installed on the device.
   *
   * @public
   */
  pendingSoftwareSetVersion?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * Describes if the software currently installed on the device is a supported version.
   *
   * @public
   */
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus | undefined;

  /**
   * Describes if the device has a supported version of software installed.
   *
   * @public
   */
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus | undefined;

  /**
   * The timestamp of the most recent session on the device.
   *
   * @public
   */
  lastConnectedAt?: Date | undefined;

  /**
   * The timestamp of the most recent check-in of the device.
   *
   * @public
   */
  lastPostureAt?: Date | undefined;

  /**
   * The timestamp of when the device was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the device was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the device.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The user ID of the most recent session on the device.
   *
   * @public
   */
  lastUserId?: string | undefined;
}

/**
 * Describes a thin client device.
 *
 * @public
 */
export interface DeviceSummary {
  /**
   * The ID of the device.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The hardware serial number of the device.
   *
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * The name of the device.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The model number of the device.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The ID of the environment the device is associated with.
   *
   * @public
   */
  environmentId?: string | undefined;

  /**
   * The status of the device.
   *
   * @public
   */
  status?: DeviceStatus | undefined;

  /**
   * The ID of the software set currently installed on the device.
   *
   * @public
   */
  currentSoftwareSetId?: string | undefined;

  /**
   * The ID of the software set which the device has been set to.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * The ID of the software set that is pending to be installed on the device.
   *
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * The timestamp of the most recent session on the device.
   *
   * @public
   */
  lastConnectedAt?: Date | undefined;

  /**
   * The timestamp of the most recent check-in of the device.
   *
   * @public
   */
  lastPostureAt?: Date | undefined;

  /**
   * The timestamp of when the device was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the device was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the device.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The user ID of the most recent session on the device.
   *
   * @public
   */
  lastUserId?: string | undefined;
}

/**
 * Describes an environment.
 *
 * @public
 */
export interface Environment {
  /**
   * The ID of the environment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the environment.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.
   *
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * The URL for the identity provider login (only for environments that use AppStream 2.0).
   *
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * The type of streaming desktop for the environment.
   *
   * @public
   */
  desktopType?: DesktopType | undefined;

  /**
   * The activation code to register a device to the environment.
   *
   * @public
   */
  activationCode?: string | undefined;

  /**
   * The number of devices registered to the environment.
   *
   * @public
   */
  registeredDevicesCount?: number | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * A specification for a time window to apply software updates.
   *
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * An option to define which software updates to apply.
   *
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * The ID of the software set to apply.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * The ID of the software set that is pending to be installed.
   *
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * The version of the software set that is pending to be installed.
   *
   * @public
   */
  pendingSoftwareSetVersion?: string | undefined;

  /**
   * Describes if the software currently installed on all devices in the environment is a supported version.
   *
   * @public
   */
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus | undefined;

  /**
   * The timestamp of when the environment was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp of when the device was updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the environment.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The tag keys and optional values for the newly created devices for this environment.
   *
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * The ID of the device for which to return information.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * Describes an device.
   *
   * @public
   */
  device?: Device | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * The ID of the environment for which to return information.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * Describes an environment.
   *
   * @public
   */
  environment?: Environment | undefined;
}

/**
 * @public
 */
export interface GetSoftwareSetRequest {
  /**
   * The ID of the software set for which to return information.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Describes software.
 *
 * @public
 */
export interface Software {
  /**
   * The name of the software component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the software component.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Describes a software set.
 *
 * @public
 */
export interface SoftwareSet {
  /**
   * The ID of the software set.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The version of the software set.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp of when the software set was released.
   *
   * @public
   */
  releasedAt?: Date | undefined;

  /**
   * The timestamp of the end of support for the software set.
   *
   * @public
   */
  supportedUntil?: Date | undefined;

  /**
   * An option to define if the software set has been validated.
   *
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus | undefined;

  /**
   * A list of the software components in the software set.
   *
   * @public
   */
  software?: Software[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the software set.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetSoftwareSetResponse {
  /**
   * Describes a software set.
   *
   * @public
   */
  softwareSet?: SoftwareSet | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * Describes devices.
   *
   * @public
   */
  devices?: DeviceSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * Describes environments.
   *
   * @public
   */
  environments?: EnvironmentSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSoftwareSetsRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results that are returned per call. You can use `nextToken` to obtain further pages of results.
   *
   * This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes a software set.
 *
 * @public
 */
export interface SoftwareSetSummary {
  /**
   * The ID of the software set.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The version of the software set.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The timestamp of when the software set was released.
   *
   * @public
   */
  releasedAt?: Date | undefined;

  /**
   * The timestamp of the end of support for the software set.
   *
   * @public
   */
  supportedUntil?: Date | undefined;

  /**
   * An option to define if the software set has been validated.
   *
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the software set.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListSoftwareSetsResponse {
  /**
   * Describes software sets.
   *
   * @public
   */
  softwareSets?: SoftwareSetSummary[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken error*.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of the key-value pairs for the tag or tags assigned to the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.
   *
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
   * The ID of the device to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the device to update.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the software set to apply.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * Describes a device.
   *
   * @public
   */
  device?: DeviceSummary | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentRequest {
  /**
   * The ID of the environment to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the environment to update.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.
   *
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * The URL for the identity provider login (only for environments that use AppStream 2.0).
   *
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * An option to define if software updates should be applied within a maintenance window.
   *
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * A specification for a time window to apply software updates.
   *
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * An option to define which software updates to apply.
   *
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * The ID of the software set to apply.
   *
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.
   *
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * Describes an environment.
   *
   * @public
   */
  environment?: EnvironmentSummary | undefined;
}

/**
 * @public
 */
export interface UpdateSoftwareSetRequest {
  /**
   * The ID of the software set to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An option to define if the software set has been validated.
   *
   * @public
   */
  validationStatus: SoftwareSetValidationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSoftwareSetResponse {}
