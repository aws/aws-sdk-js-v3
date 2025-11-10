// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectCampaignsServiceException as __BaseException } from "./ConnectCampaignsServiceException";

/**
 * You do not have sufficient access to perform this action.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * Agentless Dialer config
 * @public
 */
export interface AgentlessDialerConfig {
  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns
   * @public
   */
  dialingCapacity?: number | undefined;
}

/**
 * The request could not be processed because of conflict in the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export interface PredictiveDialerConfig {
  /**
   * The bandwidth allocation of a queue resource.
   * @public
   */
  bandwidthAllocation: number | undefined;

  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns
   * @public
   */
  dialingCapacity?: number | undefined;
}

/**
 * Progressive Dialer config
 * @public
 */
export interface ProgressiveDialerConfig {
  /**
   * The bandwidth allocation of a queue resource.
   * @public
   */
  bandwidthAllocation: number | undefined;

  /**
   * Allocates dialing capacity for this campaign between multiple active campaigns
   * @public
   */
  dialingCapacity?: number | undefined;
}

/**
 * The possible types of dialer config parameters
 * @public
 */
export type DialerConfig =
  | DialerConfig.AgentlessDialerConfigMember
  | DialerConfig.PredictiveDialerConfigMember
  | DialerConfig.ProgressiveDialerConfigMember
  | DialerConfig.$UnknownMember;

/**
 * @public
 */
export namespace DialerConfig {
  /**
   * Progressive Dialer config
   * @public
   */
  export interface ProgressiveDialerConfigMember {
    progressiveDialerConfig: ProgressiveDialerConfig;
    predictiveDialerConfig?: never;
    agentlessDialerConfig?: never;
    $unknown?: never;
  }

  /**
   * Predictive Dialer config
   * @public
   */
  export interface PredictiveDialerConfigMember {
    progressiveDialerConfig?: never;
    predictiveDialerConfig: PredictiveDialerConfig;
    agentlessDialerConfig?: never;
    $unknown?: never;
  }

  /**
   * Agentless Dialer config
   * @public
   */
  export interface AgentlessDialerConfigMember {
    progressiveDialerConfig?: never;
    predictiveDialerConfig?: never;
    agentlessDialerConfig: AgentlessDialerConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    progressiveDialerConfig?: never;
    predictiveDialerConfig?: never;
    agentlessDialerConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    progressiveDialerConfig: (value: ProgressiveDialerConfig) => T;
    predictiveDialerConfig: (value: PredictiveDialerConfig) => T;
    agentlessDialerConfig: (value: AgentlessDialerConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DialerConfig, visitor: Visitor<T>): T => {
    if (value.progressiveDialerConfig !== undefined)
      return visitor.progressiveDialerConfig(value.progressiveDialerConfig);
    if (value.predictiveDialerConfig !== undefined) return visitor.predictiveDialerConfig(value.predictiveDialerConfig);
    if (value.agentlessDialerConfig !== undefined) return visitor.agentlessDialerConfig(value.agentlessDialerConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Answering Machine Detection config
 * @public
 */
export interface AnswerMachineDetectionConfig {
  /**
   * Enable or disable answering machine detection
   * @public
   */
  enableAnswerMachineDetection: boolean | undefined;

  /**
   * Enable or disable await answer machine prompt
   * @public
   */
  awaitAnswerMachinePrompt?: boolean | undefined;
}

/**
 * The configuration used for outbound calls.
 * @public
 */
export interface OutboundCallConfig {
  /**
   * The identifier of the contact flow for the outbound call.
   * @public
   */
  connectContactFlowId: string | undefined;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @public
   */
  connectSourcePhoneNumber?: string | undefined;

  /**
   * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
   * @public
   */
  connectQueueId?: string | undefined;

  /**
   * Answering Machine Detection config
   * @public
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;
}

/**
 * The request for Create Campaign API.
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * The possible types of dialer config parameters
   * @public
   */
  dialerConfig: DialerConfig | undefined;

  /**
   * The configuration used for outbound calls.
   * @public
   */
  outboundCallConfig: OutboundCallConfig | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The response for Create Campaign API
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id?: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn?: string | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Request processing failed because of an error or failure with the service.
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * DeleteCampaignRequest
 * @public
 */
export interface DeleteConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * The request could not be processed because of conflict in the current state.
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export interface DeleteInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * DescribeCampaignRequests
 * @public
 */
export interface DescribeCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * An Amazon Connect campaign.
 * @public
 */
export interface Campaign {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * The possible types of dialer config parameters
   * @public
   */
  dialerConfig: DialerConfig | undefined;

  /**
   * The configuration used for outbound calls.
   * @public
   */
  outboundCallConfig: OutboundCallConfig | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * DescribeCampaignResponse
 * @public
 */
export interface DescribeCampaignResponse {
  /**
   * An Amazon Connect campaign.
   * @public
   */
  campaign?: Campaign | undefined;
}

/**
 * GetCampaignStateRequest
 * @public
 */
export interface GetCampaignStateRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CampaignState = {
  /**
   * Campaign is in failed state
   */
  FAILED: "Failed",
  /**
   * Campaign is in initialized state
   */
  INITIALIZED: "Initialized",
  /**
   * Campaign is in paused state
   */
  PAUSED: "Paused",
  /**
   * Campaign is in running state
   */
  RUNNING: "Running",
  /**
   * Campaign is in stopped state
   */
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type CampaignState = (typeof CampaignState)[keyof typeof CampaignState];

/**
 * GetCampaignStateResponse
 * @public
 */
export interface GetCampaignStateResponse {
  /**
   * State of a campaign
   * @public
   */
  state?: CampaignState | undefined;
}

/**
 * GetCampaignStateBatchRequest
 * @public
 */
export interface GetCampaignStateBatchRequest {
  /**
   * List of CampaignId
   * @public
   */
  campaignIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GetCampaignStateBatchFailureCode = {
  /**
   * The specified resource was not found
   */
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type GetCampaignStateBatchFailureCode =
  (typeof GetCampaignStateBatchFailureCode)[keyof typeof GetCampaignStateBatchFailureCode];

/**
 * Failed response of campaign state
 * @public
 */
export interface FailedCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  campaignId?: string | undefined;

  /**
   * A predefined code indicating the error that caused the failure in getting state of campaigns
   * @public
   */
  failureCode?: GetCampaignStateBatchFailureCode | undefined;
}

/**
 * Successful response of campaign state
 * @public
 */
export interface SuccessfulCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  campaignId?: string | undefined;

  /**
   * State of a campaign
   * @public
   */
  state?: CampaignState | undefined;
}

/**
 * GetCampaignStateBatchResponse
 * @public
 */
export interface GetCampaignStateBatchResponse {
  /**
   * List of successful response of campaign state
   * @public
   */
  successfulRequests?: SuccessfulCampaignStateResponse[] | undefined;

  /**
   * List of failed requests of campaign state
   * @public
   */
  failedRequests?: FailedCampaignStateResponse[] | undefined;
}

/**
 * GetConnectInstanceConfigRequest
 * @public
 */
export interface GetConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
 * If disabled, service will perform encryption with its own key.
 * If enabled, a KMS key id needs to be provided and KMS charges will apply.
 * KMS is only type supported
 * @public
 */
export interface EncryptionConfig {
  /**
   * Boolean to indicate if custom encryption has been enabled.
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Server-side encryption type.
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * KMS key id/arn for encryption config.
   * @public
   */
  keyArn?: string | undefined;
}

/**
 * Instance config object
 * @public
 */
export interface InstanceConfig {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Service linked role arn
   * @public
   */
  serviceLinkedRoleArn: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * GetConnectInstanceConfigResponse
 * @public
 */
export interface GetConnectInstanceConfigResponse {
  /**
   * Instance config object
   * @public
   */
  connectInstanceConfig?: InstanceConfig | undefined;
}

/**
 * GetInstanceOnboardingJobStatusRequest
 * @public
 */
export interface GetInstanceOnboardingJobStatusRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobFailureCode = {
  EVENT_BRIDGE_ACCESS_DENIED: "EVENT_BRIDGE_ACCESS_DENIED",
  EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED: "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED",
  IAM_ACCESS_DENIED: "IAM_ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
} as const;

/**
 * @public
 */
export type InstanceOnboardingJobFailureCode =
  (typeof InstanceOnboardingJobFailureCode)[keyof typeof InstanceOnboardingJobFailureCode];

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobStatusCode = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type InstanceOnboardingJobStatusCode =
  (typeof InstanceOnboardingJobStatusCode)[keyof typeof InstanceOnboardingJobStatusCode];

/**
 * Instance onboarding job status object
 * @public
 */
export interface InstanceOnboardingJobStatus {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Enumeration of the possible states for instance onboarding job
   * @public
   */
  status: InstanceOnboardingJobStatusCode | undefined;

  /**
   * Enumeration of the possible failure codes for instance onboarding job
   * @public
   */
  failureCode?: InstanceOnboardingJobFailureCode | undefined;
}

/**
 * GetInstanceOnboardingJobStatusResponse
 * @public
 */
export interface GetInstanceOnboardingJobStatusResponse {
  /**
   * Instance onboarding job status object
   * @public
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceIdFilterOperator = {
  /**
   * Equals operator
   */
  EQ: "Eq",
} as const;

/**
 * @public
 */
export type InstanceIdFilterOperator = (typeof InstanceIdFilterOperator)[keyof typeof InstanceIdFilterOperator];

/**
 * Connect instance identifier filter
 * @public
 */
export interface InstanceIdFilter {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  value: string | undefined;

  /**
   * Operators for Connect instance identifier filter
   * @public
   */
  operator: InstanceIdFilterOperator | undefined;
}

/**
 * Filter model by type
 * @public
 */
export interface CampaignFilters {
  /**
   * Connect instance identifier filter
   * @public
   */
  instanceIdFilter?: InstanceIdFilter | undefined;
}

/**
 * ListCampaignsRequest
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * The maximum number of results to return per page.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter model by type
   * @public
   */
  filters?: CampaignFilters | undefined;
}

/**
 * An Amazon Connect campaign summary.
 * @public
 */
export interface CampaignSummary {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * ListCampaignsResponse
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Amazon Connect campaigns.
   * @public
   */
  campaignSummaryList?: CampaignSummary[] | undefined;
}

/**
 * ListTagsForResource
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Arn
   * @public
   */
  arn: string | undefined;
}

/**
 * ListTagsForResponse
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request could not be processed because of conflict in the current state of the campaign.
 * @public
 */
export class InvalidCampaignStateException extends __BaseException {
  readonly name: "InvalidCampaignStateException" = "InvalidCampaignStateException";
  readonly $fault: "client" = "client";
  /**
   * State of a campaign
   * @public
   */
  state: CampaignState | undefined;

  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
 * @public
 */
export interface PauseCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * A dial request for a campaign.
 * @public
 */
export interface DialRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken: string | undefined;

  /**
   * The phone number of the customer, in E.164 format.
   * @public
   */
  phoneNumber: string | undefined;

  /**
   * Timestamp with no UTC offset or timezone
   * @public
   */
  expirationTime: Date | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
   * @public
   */
  attributes: Record<string, string> | undefined;
}

/**
 * PutDialRequestBatchRequest
 * @public
 */
export interface PutDialRequestBatchRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * A list of dial requests.
   * @public
   */
  dialRequests: DialRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureCode = {
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * Request throttled due to large number of pending dial requests
   */
  REQUEST_THROTTLED: "RequestThrottled",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type FailureCode = (typeof FailureCode)[keyof typeof FailureCode];

/**
 * A failed request identified by the unique client token.
 * @public
 */
export interface FailedRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier representing a Dial request
   * @public
   */
  id?: string | undefined;

  /**
   * A predefined code indicating the error that caused the failure.
   * @public
   */
  failureCode?: FailureCode | undefined;
}

/**
 * A successful request identified by the unique client token.
 * @public
 */
export interface SuccessfulRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier representing a Dial request
   * @public
   */
  id?: string | undefined;
}

/**
 * PutDialRequestBatchResponse
 * @public
 */
export interface PutDialRequestBatchResponse {
  /**
   * A list of successful requests identified by the unique client token.
   * @public
   */
  successfulRequests?: SuccessfulRequest[] | undefined;

  /**
   * A list of failed requests.
   * @public
   */
  failedRequests?: FailedRequest[] | undefined;
}

/**
 * ResumeCampaignRequest
 * @public
 */
export interface ResumeCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * StartCampaignRequest
 * @public
 */
export interface StartCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * The request for StartInstanceOnboardingJob API.
 * @public
 */
export interface StartInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * The response for StartInstanceOnboardingJob API.
 * @public
 */
export interface StartInstanceOnboardingJobResponse {
  /**
   * Instance onboarding job status object
   * @public
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus | undefined;
}

/**
 * StopCampaignRequest
 * @public
 */
export interface StopCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * TagResourceRequest
 * @public
 */
export interface TagResourceRequest {
  /**
   * Arn
   * @public
   */
  arn: string | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * UntagResourceRequest
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Arn
   * @public
   */
  arn: string | undefined;

  /**
   * List of tag keys.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * UpdateCampaignDialerConfigRequest
 * @public
 */
export interface UpdateCampaignDialerConfigRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The possible types of dialer config parameters
   * @public
   */
  dialerConfig: DialerConfig | undefined;
}

/**
 * UpdateCampaignNameRequest
 * @public
 */
export interface UpdateCampaignNameRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;
}

/**
 * UpdateCampaignOutboundCallConfigRequest
 * @public
 */
export interface UpdateCampaignOutboundCallConfigRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The identifier of the contact flow for the outbound call.
   * @public
   */
  connectContactFlowId?: string | undefined;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @public
   */
  connectSourcePhoneNumber?: string | undefined;

  /**
   * Answering Machine Detection config
   * @public
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;
}
