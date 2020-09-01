import {
  SENSITIVE_STRING,
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException,
  isa as __isa,
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccessDeniedException => __isa(o, "AccessDeniedException");
}

export enum CancellationStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
}

export interface CancelQuantumTaskRequest {
  __type?: "CancelQuantumTaskRequest";
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
  export const filterSensitiveLog = (obj: CancelQuantumTaskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelQuantumTaskRequest => __isa(o, "CancelQuantumTaskRequest");
}

export interface CancelQuantumTaskResponse {
  __type?: "CancelQuantumTaskResponse";
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
  export const filterSensitiveLog = (obj: CancelQuantumTaskResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CancelQuantumTaskResponse => __isa(o, "CancelQuantumTaskResponse");
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export interface CreateQuantumTaskRequest {
  __type?: "CreateQuantumTaskRequest";
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
}

export namespace CreateQuantumTaskRequest {
  export const filterSensitiveLog = (obj: CreateQuantumTaskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateQuantumTaskRequest => __isa(o, "CreateQuantumTaskRequest");
}

export interface CreateQuantumTaskResponse {
  __type?: "CreateQuantumTaskResponse";
  /**
   * <p>The ARN of the task created by the request.</p>
   */
  quantumTaskArn: string | undefined;
}

export namespace CreateQuantumTaskResponse {
  export const filterSensitiveLog = (obj: CreateQuantumTaskResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateQuantumTaskResponse => __isa(o, "CreateQuantumTaskResponse");
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
  export const filterSensitiveLog = (obj: DeviceOfflineException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceOfflineException => __isa(o, "DeviceOfflineException");
}

export enum DeviceStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
}

/**
 * <p>Includes information about the device.</p>
 */
export interface DeviceSummary {
  __type?: "DeviceSummary";
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
  export const filterSensitiveLog = (obj: DeviceSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeviceSummary => __isa(o, "DeviceSummary");
}

export enum DeviceType {
  QPU = "QPU",
  SIMULATOR = "SIMULATOR",
}

export interface GetDeviceRequest {
  __type?: "GetDeviceRequest";
  /**
   * <p>The ARN of the device to retrieve.</p>
   */
  deviceArn: string | undefined;
}

export namespace GetDeviceRequest {
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeviceRequest => __isa(o, "GetDeviceRequest");
}

export interface GetDeviceResponse {
  __type?: "GetDeviceResponse";
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
  export const filterSensitiveLog = (obj: GetDeviceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeviceResponse => __isa(o, "GetDeviceResponse");
}

export interface GetQuantumTaskRequest {
  __type?: "GetQuantumTaskRequest";
  /**
   * <p>the ARN of the task to retrieve.</p>
   */
  quantumTaskArn: string | undefined;
}

export namespace GetQuantumTaskRequest {
  export const filterSensitiveLog = (obj: GetQuantumTaskRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQuantumTaskRequest => __isa(o, "GetQuantumTaskRequest");
}

export interface GetQuantumTaskResponse {
  __type?: "GetQuantumTaskResponse";
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
}

export namespace GetQuantumTaskResponse {
  export const filterSensitiveLog = (obj: GetQuantumTaskResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQuantumTaskResponse => __isa(o, "GetQuantumTaskResponse");
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServiceException => __isa(o, "InternalServiceException");
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

/**
 * <p>Includes information about a quantum task.</p>
 */
export interface QuantumTaskSummary {
  __type?: "QuantumTaskSummary";
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
}

export namespace QuantumTaskSummary {
  export const filterSensitiveLog = (obj: QuantumTaskSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QuantumTaskSummary => __isa(o, "QuantumTaskSummary");
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The filter to use for searching devices.</p>
 */
export interface SearchDevicesFilter {
  __type?: "SearchDevicesFilter";
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
  export const filterSensitiveLog = (obj: SearchDevicesFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchDevicesFilter => __isa(o, "SearchDevicesFilter");
}

export interface SearchDevicesRequest {
  __type?: "SearchDevicesRequest";
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
  export const filterSensitiveLog = (obj: SearchDevicesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchDevicesRequest => __isa(o, "SearchDevicesRequest");
}

export interface SearchDevicesResponse {
  __type?: "SearchDevicesResponse";
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
  export const filterSensitiveLog = (obj: SearchDevicesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchDevicesResponse => __isa(o, "SearchDevicesResponse");
}

/**
 * <p>A filter to use to search for tasks.</p>
 */
export interface SearchQuantumTasksFilter {
  __type?: "SearchQuantumTasksFilter";
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
  export const filterSensitiveLog = (obj: SearchQuantumTasksFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchQuantumTasksFilter => __isa(o, "SearchQuantumTasksFilter");
}

export enum SearchQuantumTasksFilterOperator {
  BETWEEN = "BETWEEN",
  EQUAL = "EQUAL",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
}

export interface SearchQuantumTasksRequest {
  __type?: "SearchQuantumTasksRequest";
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
  export const filterSensitiveLog = (obj: SearchQuantumTasksRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchQuantumTasksRequest => __isa(o, "SearchQuantumTasksRequest");
}

export interface SearchQuantumTasksResponse {
  __type?: "SearchQuantumTasksResponse";
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
  export const filterSensitiveLog = (obj: SearchQuantumTasksResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SearchQuantumTasksResponse => __isa(o, "SearchQuantumTasksResponse");
}

/**
 * <p>The request failed because a service quota is met.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ServiceQuotaExceededException => __isa(o, "ServiceQuotaExceededException");
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
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ThrottlingException => __isa(o, "ThrottlingException");
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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ValidationException => __isa(o, "ValidationException");
}
