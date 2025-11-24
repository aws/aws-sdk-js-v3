// smithy-typescript generated code
import {
  CampaignState,
  EncryptionType,
  FailureCode,
  GetCampaignStateBatchFailureCode,
  InstanceIdFilterOperator,
  InstanceOnboardingJobFailureCode,
  InstanceOnboardingJobStatusCode,
} from "./enums";

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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    progressiveDialerConfig: (value: ProgressiveDialerConfig) => T;
    predictiveDialerConfig: (value: PredictiveDialerConfig) => T;
    agentlessDialerConfig: (value: AgentlessDialerConfig) => T;
    _: (name: string, value: any) => T;
  }
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
