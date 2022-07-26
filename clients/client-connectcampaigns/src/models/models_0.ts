// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ConnectCampaignsServiceException as __BaseException } from "./ConnectCampaignsServiceException";

/**
 * You do not have sufficient access to perform this action.
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The request could not be processed because of conflict in the current state of the resource.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Predictive Dialer config
 */
export interface PredictiveDialerConfig {
  /**
   * The bandwidth allocation of a queue resource.
   */
  bandwidthAllocation: number | undefined;
}

/**
 * Progressive Dialer config
 */
export interface ProgressiveDialerConfig {
  /**
   * The bandwidth allocation of a queue resource.
   */
  bandwidthAllocation: number | undefined;
}

/**
 * The possible types of dialer config parameters
 */
export type DialerConfig =
  | DialerConfig.PredictiveDialerConfigMember
  | DialerConfig.ProgressiveDialerConfigMember
  | DialerConfig.$UnknownMember;

export namespace DialerConfig {
  /**
   * Progressive Dialer config
   */
  export interface ProgressiveDialerConfigMember {
    progressiveDialerConfig: ProgressiveDialerConfig;
    predictiveDialerConfig?: never;
    $unknown?: never;
  }

  /**
   * Predictive Dialer config
   */
  export interface PredictiveDialerConfigMember {
    progressiveDialerConfig?: never;
    predictiveDialerConfig: PredictiveDialerConfig;
    $unknown?: never;
  }

  export interface $UnknownMember {
    progressiveDialerConfig?: never;
    predictiveDialerConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    progressiveDialerConfig: (value: ProgressiveDialerConfig) => T;
    predictiveDialerConfig: (value: PredictiveDialerConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DialerConfig, visitor: Visitor<T>): T => {
    if (value.progressiveDialerConfig !== undefined)
      return visitor.progressiveDialerConfig(value.progressiveDialerConfig);
    if (value.predictiveDialerConfig !== undefined) return visitor.predictiveDialerConfig(value.predictiveDialerConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Answering Machine Detection config
 */
export interface AnswerMachineDetectionConfig {
  /**
   * Enable or disable answering machine detection
   */
  enableAnswerMachineDetection: boolean | undefined;
}

/**
 * The configuration used for outbound calls.
 */
export interface OutboundCallConfig {
  /**
   * The identifier of the contact flow for the outbound call.
   */
  connectContactFlowId: string | undefined;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   */
  connectSourcePhoneNumber?: string;

  /**
   * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
   */
  connectQueueId: string | undefined;

  /**
   * Answering Machine Detection config
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}

/**
 * The request for Create Campaign API.
 */
export interface CreateCampaignRequest {
  /**
   * The name of an Amazon Connect Campaign name.
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;

  /**
   * The possible types of dialer config parameters
   */
  dialerConfig: DialerConfig | undefined;

  /**
   * The configuration used for outbound calls.
   */
  outboundCallConfig: OutboundCallConfig | undefined;

  /**
   * Tag map with key and value.
   */
  tags?: Record<string, string>;
}

/**
 * The response for Create Campaign API
 */
export interface CreateCampaignResponse {
  /**
   * Identifier representing a Campaign
   */
  id?: string;

  /**
   * The resource name of an Amazon Connect campaign.
   */
  arn?: string;

  /**
   * Tag map with key and value.
   */
  tags?: Record<string, string>;
}

/**
 * Request processing failed because of an error or failure with the service.
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The specified resource was not found.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Request would cause a service quota to be exceeded.
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The request was denied due to request throttling.
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * DeleteCampaignRequest
 */
export interface DeleteCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * DeleteCampaignRequest
 */
export interface DeleteConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;
}

/**
 * The request could not be processed because of conflict in the current state.
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The request for DeleteInstanceOnboardingJob API.
 */
export interface DeleteInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;
}

/**
 * DescribeCampaignRequests
 */
export interface DescribeCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * An Amazon Connect campaign.
 */
export interface Campaign {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;

  /**
   * The possible types of dialer config parameters
   */
  dialerConfig: DialerConfig | undefined;

  /**
   * The configuration used for outbound calls.
   */
  outboundCallConfig: OutboundCallConfig | undefined;

  /**
   * Tag map with key and value.
   */
  tags?: Record<string, string>;
}

/**
 * DescribeCampaignResponse
 */
export interface DescribeCampaignResponse {
  /**
   * An Amazon Connect campaign.
   */
  campaign?: Campaign;
}

/**
 * GetCampaignStateRequest
 */
export interface GetCampaignStateRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

export enum CampaignState {
  /**
   * Campaign is in failed state
   */
  FAILED = "Failed",
  /**
   * Campaign is in initialized state
   */
  INITIALIZED = "Initialized",
  /**
   * Campaign is in paused state
   */
  PAUSED = "Paused",
  /**
   * Campaign is in running state
   */
  RUNNING = "Running",
  /**
   * Campaign is in stopped state
   */
  STOPPED = "Stopped",
}

/**
 * GetCampaignStateResponse
 */
export interface GetCampaignStateResponse {
  /**
   * State of a campaign
   */
  state?: CampaignState | string;
}

/**
 * GetCampaignStateBatchRequest
 */
export interface GetCampaignStateBatchRequest {
  /**
   * List of CampaignId
   */
  campaignIds: string[] | undefined;
}

export enum GetCampaignStateBatchFailureCode {
  /**
   * The specified resource was not found
   */
  RESOURCE_NOT_FOUND = "ResourceNotFound",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR = "UnknownError",
}

/**
 * Failed response of campaign state
 */
export interface FailedCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   */
  campaignId?: string;

  /**
   * A predefined code indicating the error that caused the failure in getting state of campaigns
   */
  failureCode?: GetCampaignStateBatchFailureCode | string;
}

/**
 * Successful response of campaign state
 */
export interface SuccessfulCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   */
  campaignId?: string;

  /**
   * State of a campaign
   */
  state?: CampaignState | string;
}

/**
 * GetCampaignStateBatchResponse
 */
export interface GetCampaignStateBatchResponse {
  /**
   * List of successful response of campaign state
   */
  successfulRequests?: SuccessfulCampaignStateResponse[];

  /**
   * List of failed requests of campaign state
   */
  failedRequests?: FailedCampaignStateResponse[];
}

/**
 * GetConnectInstanceConfigRequest
 */
export interface GetConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;
}

export enum EncryptionType {
  KMS = "KMS",
}

/**
 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
 * If disabled, service will perform encryption with its own key.
 * If enabled, a KMS key id needs to be provided and KMS charges will apply.
 * KMS is only type supported
 */
export interface EncryptionConfig {
  /**
   * Boolean to indicate if custom encryption has been enabled.
   */
  enabled: boolean | undefined;

  /**
   * Server-side encryption type.
   */
  encryptionType?: EncryptionType | string;

  /**
   * KMS key id/arn for encryption config.
   */
  keyArn?: string;
}

/**
 * Instance config object
 */
export interface InstanceConfig {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;

  /**
   * Service linked role arn
   */
  serviceLinkedRoleArn: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * GetConnectInstanceConfigResponse
 */
export interface GetConnectInstanceConfigResponse {
  /**
   * Instance config object
   */
  connectInstanceConfig?: InstanceConfig;
}

/**
 * GetInstanceOnboardingJobStatusRequest
 */
export interface GetInstanceOnboardingJobStatusRequest {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;
}

export enum InstanceOnboardingJobFailureCode {
  EVENT_BRIDGE_ACCESS_DENIED = "EVENT_BRIDGE_ACCESS_DENIED",
  EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED = "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED",
  IAM_ACCESS_DENIED = "IAM_ACCESS_DENIED",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  KMS_ACCESS_DENIED = "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND = "KMS_KEY_NOT_FOUND",
}

export enum InstanceOnboardingJobStatusCode {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * Instance onboarding job status object
 */
export interface InstanceOnboardingJobStatus {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;

  /**
   * Enumeration of the possible states for instance onboarding job
   */
  status: InstanceOnboardingJobStatusCode | string | undefined;

  /**
   * Enumeration of the possible failure codes for instance onboarding job
   */
  failureCode?: InstanceOnboardingJobFailureCode | string;
}

/**
 * GetInstanceOnboardingJobStatusResponse
 */
export interface GetInstanceOnboardingJobStatusResponse {
  /**
   * Instance onboarding job status object
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}

export enum InstanceIdFilterOperator {
  /**
   * Equals operator
   */
  EQ = "Eq",
}

/**
 * Connect instance identifier filter
 */
export interface InstanceIdFilter {
  /**
   * Amazon Connect Instance Id
   */
  value: string | undefined;

  /**
   * Operators for Connect instance identifier filter
   */
  operator: InstanceIdFilterOperator | string | undefined;
}

/**
 * Filter model by type
 */
export interface CampaignFilters {
  /**
   * Connect instance identifier filter
   */
  instanceIdFilter?: InstanceIdFilter;
}

/**
 * ListCampaignsRequest
 */
export interface ListCampaignsRequest {
  /**
   * The maximum number of results to return per page.
   */
  maxResults?: number;

  /**
   * The token for the next set of results.
   */
  nextToken?: string;

  /**
   * Filter model by type
   */
  filters?: CampaignFilters;
}

/**
 * An Amazon Connect campaign summary.
 */
export interface CampaignSummary {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;
}

/**
 * ListCampaignsResponse
 */
export interface ListCampaignsResponse {
  /**
   * The token for the next set of results.
   */
  nextToken?: string;

  /**
   * A list of Amazon Connect campaigns.
   */
  campaignSummaryList?: CampaignSummary[];
}

/**
 * ListTagsForResource
 */
export interface ListTagsForResourceRequest {
  /**
   * Arn
   */
  arn: string | undefined;
}

/**
 * ListTagsForResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * Tag map with key and value.
   */
  tags?: Record<string, string>;
}

/**
 * The request could not be processed because of conflict in the current state of the campaign.
 */
export class InvalidCampaignStateException extends __BaseException {
  readonly name: "InvalidCampaignStateException" = "InvalidCampaignStateException";
  readonly $fault: "client" = "client";
  /**
   * State of a campaign
   */
  state: CampaignState | string | undefined;

  /**
   * A header that defines the error encountered while processing the request.
   */
  xAmzErrorType?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCampaignStateException, __BaseException>) {
    super({
      name: "InvalidCampaignStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCampaignStateException.prototype);
    this.state = opts.state;
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * PauseCampaignRequest
 */
export interface PauseCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * A dial request for a campaign.
 */
export interface DialRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   */
  clientToken: string | undefined;

  /**
   * The phone number of the customer, in E.164 format.
   */
  phoneNumber: string | undefined;

  /**
   * Timestamp with no UTC offset or timezone
   */
  expirationTime: Date | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
   */
  attributes: Record<string, string> | undefined;
}

/**
 * PutDialRequestBatchRequest
 */
export interface PutDialRequestBatchRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * A list of dial requests.
   */
  dialRequests: DialRequest[] | undefined;
}

export enum FailureCode {
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT = "InvalidInput",
  /**
   * Request throttled due to large number of pending dial requests
   */
  REQUEST_THROTTLED = "RequestThrottled",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR = "UnknownError",
}

/**
 * A failed request identified by the unique client token.
 */
export interface FailedRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   */
  clientToken?: string;

  /**
   * Identifier representing a Dial request
   */
  id?: string;

  /**
   * A predefined code indicating the error that caused the failure.
   */
  failureCode?: FailureCode | string;
}

/**
 * A successful request identified by the unique client token.
 */
export interface SuccessfulRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   */
  clientToken?: string;

  /**
   * Identifier representing a Dial request
   */
  id?: string;
}

/**
 * PutDialRequestBatchResponse
 */
export interface PutDialRequestBatchResponse {
  /**
   * A list of successful requests identified by the unique client token.
   */
  successfulRequests?: SuccessfulRequest[];

  /**
   * A list of failed requests.
   */
  failedRequests?: FailedRequest[];
}

/**
 * ResumeCampaignRequest
 */
export interface ResumeCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * StartCampaignRequest
 */
export interface StartCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * The request for StartInstanceOnboardingJob API.
 */
export interface StartInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   */
  connectInstanceId: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * The response for StartInstanceOnboardingJob API.
 */
export interface StartInstanceOnboardingJobResponse {
  /**
   * Instance onboarding job status object
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}

/**
 * StopCampaignRequest
 */
export interface StopCampaignRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;
}

/**
 * TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * Arn
   */
  arn: string | undefined;

  /**
   * Tag map with key and value.
   */
  tags: Record<string, string> | undefined;
}

/**
 * UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * Arn
   */
  arn: string | undefined;

  /**
   * List of tag keys.
   */
  tagKeys: string[] | undefined;
}

/**
 * UpdateCampaignDialerConfigRequest
 */
export interface UpdateCampaignDialerConfigRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * The possible types of dialer config parameters
   */
  dialerConfig: DialerConfig | undefined;
}

/**
 * UpdateCampaignNameRequest
 */
export interface UpdateCampaignNameRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   */
  name: string | undefined;
}

/**
 * UpdateCampaignOutboundCallConfigRequest
 */
export interface UpdateCampaignOutboundCallConfigRequest {
  /**
   * Identifier representing a Campaign
   */
  id: string | undefined;

  /**
   * The identifier of the contact flow for the outbound call.
   */
  connectContactFlowId?: string;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   */
  connectSourcePhoneNumber?: string;

  /**
   * Answering Machine Detection config
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig;
}

/**
 * @internal
 */
export const PredictiveDialerConfigFilterSensitiveLog = (obj: PredictiveDialerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProgressiveDialerConfigFilterSensitiveLog = (obj: ProgressiveDialerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialerConfigFilterSensitiveLog = (obj: DialerConfig): any => {
  if (obj.progressiveDialerConfig !== undefined)
    return { progressiveDialerConfig: ProgressiveDialerConfigFilterSensitiveLog(obj.progressiveDialerConfig) };
  if (obj.predictiveDialerConfig !== undefined)
    return { predictiveDialerConfig: PredictiveDialerConfigFilterSensitiveLog(obj.predictiveDialerConfig) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AnswerMachineDetectionConfigFilterSensitiveLog = (obj: AnswerMachineDetectionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundCallConfigFilterSensitiveLog = (obj: OutboundCallConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCampaignRequestFilterSensitiveLog = (obj: CreateCampaignRequest): any => ({
  ...obj,
  ...(obj.dialerConfig && { dialerConfig: DialerConfigFilterSensitiveLog(obj.dialerConfig) }),
});

/**
 * @internal
 */
export const CreateCampaignResponseFilterSensitiveLog = (obj: CreateCampaignResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCampaignRequestFilterSensitiveLog = (obj: DeleteCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectInstanceConfigRequestFilterSensitiveLog = (obj: DeleteConnectInstanceConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInstanceOnboardingJobRequestFilterSensitiveLog = (obj: DeleteInstanceOnboardingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCampaignRequestFilterSensitiveLog = (obj: DescribeCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignFilterSensitiveLog = (obj: Campaign): any => ({
  ...obj,
  ...(obj.dialerConfig && { dialerConfig: DialerConfigFilterSensitiveLog(obj.dialerConfig) }),
});

/**
 * @internal
 */
export const DescribeCampaignResponseFilterSensitiveLog = (obj: DescribeCampaignResponse): any => ({
  ...obj,
  ...(obj.campaign && { campaign: CampaignFilterSensitiveLog(obj.campaign) }),
});

/**
 * @internal
 */
export const GetCampaignStateRequestFilterSensitiveLog = (obj: GetCampaignStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCampaignStateResponseFilterSensitiveLog = (obj: GetCampaignStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCampaignStateBatchRequestFilterSensitiveLog = (obj: GetCampaignStateBatchRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCampaignStateResponseFilterSensitiveLog = (obj: FailedCampaignStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessfulCampaignStateResponseFilterSensitiveLog = (obj: SuccessfulCampaignStateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCampaignStateBatchResponseFilterSensitiveLog = (obj: GetCampaignStateBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectInstanceConfigRequestFilterSensitiveLog = (obj: GetConnectInstanceConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionConfigFilterSensitiveLog = (obj: EncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceConfigFilterSensitiveLog = (obj: InstanceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConnectInstanceConfigResponseFilterSensitiveLog = (obj: GetConnectInstanceConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceOnboardingJobStatusRequestFilterSensitiveLog = (
  obj: GetInstanceOnboardingJobStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceOnboardingJobStatusFilterSensitiveLog = (obj: InstanceOnboardingJobStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInstanceOnboardingJobStatusResponseFilterSensitiveLog = (
  obj: GetInstanceOnboardingJobStatusResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIdFilterFilterSensitiveLog = (obj: InstanceIdFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignFiltersFilterSensitiveLog = (obj: CampaignFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCampaignsRequestFilterSensitiveLog = (obj: ListCampaignsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CampaignSummaryFilterSensitiveLog = (obj: CampaignSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCampaignsResponseFilterSensitiveLog = (obj: ListCampaignsResponse): any => ({
  ...obj,
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
export const PauseCampaignRequestFilterSensitiveLog = (obj: PauseCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialRequestFilterSensitiveLog = (obj: DialRequest): any => ({
  ...obj,
  ...(obj.phoneNumber && { phoneNumber: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutDialRequestBatchRequestFilterSensitiveLog = (obj: PutDialRequestBatchRequest): any => ({
  ...obj,
  ...(obj.dialRequests && { dialRequests: obj.dialRequests.map((item) => DialRequestFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const FailedRequestFilterSensitiveLog = (obj: FailedRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuccessfulRequestFilterSensitiveLog = (obj: SuccessfulRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDialRequestBatchResponseFilterSensitiveLog = (obj: PutDialRequestBatchResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeCampaignRequestFilterSensitiveLog = (obj: ResumeCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartCampaignRequestFilterSensitiveLog = (obj: StartCampaignRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstanceOnboardingJobRequestFilterSensitiveLog = (obj: StartInstanceOnboardingJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstanceOnboardingJobResponseFilterSensitiveLog = (obj: StartInstanceOnboardingJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopCampaignRequestFilterSensitiveLog = (obj: StopCampaignRequest): any => ({
  ...obj,
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
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignDialerConfigRequestFilterSensitiveLog = (obj: UpdateCampaignDialerConfigRequest): any => ({
  ...obj,
  ...(obj.dialerConfig && { dialerConfig: DialerConfigFilterSensitiveLog(obj.dialerConfig) }),
});

/**
 * @internal
 */
export const UpdateCampaignNameRequestFilterSensitiveLog = (obj: UpdateCampaignNameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCampaignOutboundCallConfigRequestFilterSensitiveLog = (
  obj: UpdateCampaignOutboundCallConfigRequest
): any => ({
  ...obj,
});
