import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
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

/**
 * <p>The specified device is currently offline.</p>
 */
export interface DeviceOfflineException extends __SmithyException, $MetadataBearer {
  name: "DeviceOfflineException";
  $fault: "client";
  message?: string;
}

export namespace DeviceOfflineException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceOfflineException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified device has been retired.</p>
 */
export interface DeviceRetiredException extends __SmithyException, $MetadataBearer {
  name: "DeviceRetiredException";
  $fault: "client";
  message?: string;
}

export namespace DeviceRetiredException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceRetiredException): any => ({
    ...obj,
  });
}

export interface GetDeviceRequest {
  /**
   * <p>The ARN of the device to retrieve.</p>
   */
  deviceArn: string | undefined;
}

export namespace GetDeviceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj,
  });
}

export enum DeviceStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  RETIRED = "RETIRED",
}

export enum DeviceType {
  QPU = "QPU",
  SIMULATOR = "SIMULATOR",
}

export interface GetDeviceResponse {
  /**
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * <p>The name of the partner company for the device.</p>
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;

  /**
   * <p>Details about the capabilities of the device.</p>
   */
  deviceCapabilities: __LazyJsonString | string | undefined;
}

export namespace GetDeviceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
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

/**
 * <p>The throttling rate limit is met.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
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

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
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
 * <p>The filter to use for searching devices.</p>
 */
export interface SearchDevicesFilter {
  /**
   * <p>The name to use to filter results.</p>
   */
  name: string | undefined;

  /**
   * <p>The values to use to filter results.</p>
   */
  values: string[] | undefined;
}

export namespace SearchDevicesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchDevicesFilter): any => ({
    ...obj,
  });
}

export interface SearchDevicesRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The filter values to use to search for a device.</p>
   */
  filters: SearchDevicesFilter[] | undefined;
}

export namespace SearchDevicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchDevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Includes information about the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * <p>The provider of the device.</p>
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;
}

export namespace DeviceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
}

export interface SearchDevicesResponse {
  /**
   * <p>An array of <code>DeviceSummary</code> objects for devices that match the specified filter values.</p>
   */
  devices: DeviceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue results where the previous request ended.</p>
   */
  nextToken?: string;
}

export namespace SearchDevicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchDevicesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> for the resource whose tags to display.</p>
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
   * <p>Displays the key, value pairs of tags associated with this resource.</p>
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

export interface CancelQuantumTaskRequest {
  /**
   * <p>The ARN of the task to cancel.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;
}

export namespace CancelQuantumTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelQuantumTaskRequest): any => ({
    ...obj,
  });
}

export enum CancellationStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
}

export interface CancelQuantumTaskResponse {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the cancellation request.</p>
   */
  cancellationStatus: CancellationStatus | string | undefined;
}

export namespace CancelQuantumTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelQuantumTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred due to a conflict.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
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

export interface CreateQuantumTaskRequest {
  /**
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The ARN of the device to run the task on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device to run the task on.</p>
   */
  deviceParameters?: __LazyJsonString | string;

  /**
   * <p>The number of shots to use for the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket to store task result files in.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The key prefix for the location in the S3 bucket to store task results in.</p>
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * <p>The action associated with the task.</p>
   */
  action: __LazyJsonString | string | undefined;

  /**
   * <p>Tags to be added to the quantum task you're creating.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateQuantumTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQuantumTaskRequest): any => ({
    ...obj,
  });
}

export interface CreateQuantumTaskResponse {
  /**
   * <p>The ARN of the task created by the request.</p>
   */
  quantumTaskArn: string | undefined;
}

export namespace CreateQuantumTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQuantumTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because a service quota is exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
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

export interface GetQuantumTaskRequest {
  /**
   * <p>the ARN of the task to retrieve.</p>
   */
  quantumTaskArn: string | undefined;
}

export namespace GetQuantumTaskRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQuantumTaskRequest): any => ({
    ...obj,
  });
}

export enum QuantumTaskStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export interface GetQuantumTaskResponse {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * <p>The reason that a task failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The ARN of the device the task was run on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device on which the task ran.</p>
   */
  deviceParameters: __LazyJsonString | string | undefined;

  /**
   * <p>The number of shots used in the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where task results are stored.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where task results are stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task ended.</p>
   */
  endedAt?: Date;

  /**
   * <p>The tags that belong to this task.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetQuantumTaskResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetQuantumTaskResponse): any => ({
    ...obj,
  });
}

export enum SearchQuantumTasksFilterOperator {
  BETWEEN = "BETWEEN",
  EQUAL = "EQUAL",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
}

/**
 * <p>A filter to use to search for tasks.</p>
 */
export interface SearchQuantumTasksFilter {
  /**
   * <p>The name of the device used for the task.</p>
   */
  name: string | undefined;

  /**
   * <p>The values to use for the filter.</p>
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use in the filter.</p>
   */
  operator: SearchQuantumTasksFilterOperator | string | undefined;
}

export namespace SearchQuantumTasksFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchQuantumTasksFilter): any => ({
    ...obj,
  });
}

export interface SearchQuantumTasksRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>Array of <code>SearchQuantumTasksFilter</code> objects.</p>
   */
  filters: SearchQuantumTasksFilter[] | undefined;
}

export namespace SearchQuantumTasksRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchQuantumTasksRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Includes information about a quantum task.</p>
 */
export interface QuantumTaskSummary {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * <p>The ARN of the device the task ran on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The shots used for the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where the task result file is stored..</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where the task result file is stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task finished.</p>
   */
  endedAt?: Date;

  /**
   * <p>Displays the key, value pairs of tags associated with this quantum task.</p>
   */
  tags?: { [key: string]: string };
}

export namespace QuantumTaskSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuantumTaskSummary): any => ({
    ...obj,
  });
}

export interface SearchQuantumTasksResponse {
  /**
   * <p>An array of <code>QuantumTaskSummary</code> objects for tasks that match the specified filters.</p>
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue results where the previous request ended.</p>
   */
  nextToken?: string;
}

export namespace SearchQuantumTasksResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchQuantumTasksResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> of the resource to which a tag will be added.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the tags to add to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
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
   * <p>Specify the <code>resourceArn</code> for the resource from which to remove the tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the keys for the tags to remove from the resource.</p>
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
