// smithy-typescript generated code
import {
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
 * <p>Describes the maintenance window for a thin client device.</p>
 * @public
 */
export interface MaintenanceWindow {
  /**
   * <p>An option to select the default or custom maintenance window.</p>
   * @public
   */
  type: MaintenanceWindowType | undefined;

  /**
   * <p>The hour for the maintenance window start (<code>00</code>-<code>23</code>).</p>
   * @public
   */
  startTimeHour?: number | undefined;

  /**
   * <p>The minutes past the hour for the maintenance window start (<code>00</code>-<code>59</code>).</p>
   * @public
   */
  startTimeMinute?: number | undefined;

  /**
   * <p>The hour for the maintenance window end (<code>00</code>-<code>23</code>).</p>
   * @public
   */
  endTimeHour?: number | undefined;

  /**
   * <p>The minutes for the maintenance window end (<code>00</code>-<code>59</code>).</p>
   * @public
   */
  endTimeMinute?: number | undefined;

  /**
   * <p>The days of the week during which the maintenance window is open.</p>
   * @public
   */
  daysOfTheWeek?: DayOfWeek[] | undefined;

  /**
   * <p>The option to set the maintenance window during the device local time or Universal Coordinated Time (UTC).</p>
   * @public
   */
  applyTimeOf?: ApplyTimeOf | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The name for the environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.</p>
   * @public
   */
  desktopArn: string | undefined;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key to use to encrypt the environment.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.</p>
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
}

/**
 * <p>Describes an environment.</p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * <p>The type of streaming desktop for the environment.</p>
   * @public
   */
  desktopType?: DesktopType | undefined;

  /**
   * <p>The activation code to register a device to the environment.</p>
   * @public
   */
  activationCode?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>The ID of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>Describes an environment.</p>
   * @public
   */
  environment?: EnvironmentSummary | undefined;
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
 */
export interface DeleteDeviceRequest {
  /**
   * <p>The ID of the device to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>The ID of the environment to delete.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
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
   * <p>The ID of the device to deregister.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The desired new status for the device.</p>
   * @public
   */
  targetDeviceStatus?: TargetDeviceStatus | undefined;

  /**
   * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterDeviceResponse {}

/**
 * <p>Describes a thin client device.</p>
 * @public
 */
export interface Device {
  /**
   * <p>The ID of the device.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The hardware serial number of the device.</p>
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The model number of the device.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The ID of the environment the device is associated with.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  status?: DeviceStatus | undefined;

  /**
   * <p>The ID of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetId?: string | undefined;

  /**
   * <p>The version of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetVersion?: string | undefined;

  /**
   * <p>The ID of the software set which the device has been set to.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * <p>The version of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetVersion?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>Describes if the software currently installed on the device is a supported version.</p>
   * @public
   */
  softwareSetComplianceStatus?: DeviceSoftwareSetComplianceStatus | undefined;

  /**
   * <p>Describes if the device has a supported version of software installed.</p>
   * @public
   */
  softwareSetUpdateStatus?: SoftwareSetUpdateStatus | undefined;

  /**
   * <p>The timestamp of the most recent session on the device.</p>
   * @public
   */
  lastConnectedAt?: Date | undefined;

  /**
   * <p>The timestamp of the most recent check-in of the device.</p>
   * @public
   */
  lastPostureAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the device.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The user ID of the most recent session on the device.</p>
   * @public
   */
  lastUserId?: string | undefined;
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
  id?: string | undefined;

  /**
   * <p>The hardware serial number of the device.</p>
   * @public
   */
  serialNumber?: string | undefined;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The model number of the device.</p>
   * @public
   */
  model?: string | undefined;

  /**
   * <p>The ID of the environment the device is associated with.</p>
   * @public
   */
  environmentId?: string | undefined;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  status?: DeviceStatus | undefined;

  /**
   * <p>The ID of the software set currently installed on the device.</p>
   * @public
   */
  currentSoftwareSetId?: string | undefined;

  /**
   * <p>The ID of the software set which the device has been set to.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>The ID of the software set that is pending to be installed on the device.</p>
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>The timestamp of the most recent session on the device.</p>
   * @public
   */
  lastConnectedAt?: Date | undefined;

  /**
   * <p>The timestamp of the most recent check-in of the device.</p>
   * @public
   */
  lastPostureAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The user ID of the most recent session on the device.</p>
   * @public
   */
  lastUserId?: string | undefined;
}

/**
 * <p>Describes an environment.</p>
 * @public
 */
export interface Environment {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * <p>The type of streaming desktop for the environment.</p>
   * @public
   */
  desktopType?: DesktopType | undefined;

  /**
   * <p>The activation code to register a device to the environment.</p>
   * @public
   */
  activationCode?: string | undefined;

  /**
   * <p>The number of devices registered to the environment.</p>
   * @public
   */
  registeredDevicesCount?: number | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>The ID of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetId?: string | undefined;

  /**
   * <p>The version of the software set that is pending to be installed.</p>
   * @public
   */
  pendingSoftwareSetVersion?: string | undefined;

  /**
   * <p>Describes if the software currently installed on all devices in the environment is a supported version.</p>
   * @public
   */
  softwareSetComplianceStatus?: EnvironmentSoftwareSetComplianceStatus | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp of when the device was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the environment.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The tag keys and optional values for the newly created devices for this environment.</p>
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
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
  device?: Device | undefined;
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
  environment?: Environment | undefined;
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
  name?: string | undefined;

  /**
   * <p>The version of the software component.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Describes a software set.</p>
 * @public
 */
export interface SoftwareSet {
  /**
   * <p>The ID of the software set.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The version of the software set.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp of when the software set was released.</p>
   * @public
   */
  releasedAt?: Date | undefined;

  /**
   * <p>The timestamp of the end of support for the software set.</p>
   * @public
   */
  supportedUntil?: Date | undefined;

  /**
   * <p>An option to define if the software set has been validated.</p>
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus | undefined;

  /**
   * <p>A list of the software components in the software set.</p>
   * @public
   */
  software?: Software[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface GetSoftwareSetResponse {
  /**
   * <p>Describes a software set.</p>
   * @public
   */
  softwareSet?: SoftwareSet | undefined;
}

/**
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>Describes devices.</p>
   * @public
   */
  devices?: DeviceSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>Describes environments.</p>
   * @public
   */
  environments?: EnvironmentSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSoftwareSetsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results that are returned per call. You can use <code>nextToken</code> to obtain further pages of results.</p> <p>This is only an upper limit. The actual number of results returned per call might be fewer than the specified maximum.</p>
   * @public
   */
  maxResults?: number | undefined;
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
  id?: string | undefined;

  /**
   * <p>The version of the software set.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The timestamp of when the software set was released.</p>
   * @public
   */
  releasedAt?: Date | undefined;

  /**
   * <p>The timestamp of the end of support for the software set.</p>
   * @public
   */
  supportedUntil?: Date | undefined;

  /**
   * <p>An option to define if the software set has been validated.</p>
   * @public
   */
  validationStatus?: SoftwareSetValidationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the software set.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface ListSoftwareSetsResponse {
  /**
   * <p>Describes software sets.</p>
   * @public
   */
  softwareSets?: SoftwareSetSummary[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken error</i>.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to retrieve tags.</p>
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
  tags?: Record<string, string> | undefined;
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
   * <p>The keys of the key-value pairs for the tag or tags you want to remove from the specified resource.</p>
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
  name?: string | undefined;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;
}

/**
 * @public
 */
export interface UpdateDeviceResponse {
  /**
   * <p>Describes a device.</p>
   * @public
   */
  device?: DeviceSummary | undefined;
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
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Secure Browser, or AppStream 2.0.</p>
   * @public
   */
  desktopArn?: string | undefined;

  /**
   * <p>The URL for the identity provider login (only for environments that use AppStream 2.0).</p>
   * @public
   */
  desktopEndpoint?: string | undefined;

  /**
   * <p>An option to define if software updates should be applied within a maintenance window.</p>
   * @public
   */
  softwareSetUpdateSchedule?: SoftwareSetUpdateSchedule | undefined;

  /**
   * <p>A specification for a time window to apply software updates.</p>
   * @public
   */
  maintenanceWindow?: MaintenanceWindow | undefined;

  /**
   * <p>An option to define which software updates to apply.</p>
   * @public
   */
  softwareSetUpdateMode?: SoftwareSetUpdateMode | undefined;

  /**
   * <p>The ID of the software set to apply.</p>
   * @public
   */
  desiredSoftwareSetId?: string | undefined;

  /**
   * <p>A map of the key-value pairs of the tag or tags to assign to the newly created devices for this environment.</p>
   * @public
   */
  deviceCreationTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEnvironmentResponse {
  /**
   * <p>Describes an environment.</p>
   * @public
   */
  environment?: EnvironmentSummary | undefined;
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
