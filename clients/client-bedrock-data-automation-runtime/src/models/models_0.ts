// smithy-typescript generated code
import {
  AutomationJobStatus,
  BlueprintStage,
  CustomOutputStatus,
  DataAutomationStage,
  SemanticModality,
} from "./enums";

/**
 * Structure for request of GetDataAutomationStatus API.
 * @public
 */
export interface GetDataAutomationStatusRequest {
  /**
   * Invocation arn.
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * Output configuration.
 * @public
 */
export interface OutputConfiguration {
  /**
   * S3 uri.
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Response of GetDataAutomationStatus API.
 * @public
 */
export interface GetDataAutomationStatusResponse {
  /**
   * Job Status.
   * @public
   */
  status?: AutomationJobStatus | undefined;

  /**
   * Error Type.
   * @public
   */
  errorType?: string | undefined;

  /**
   * Error Message.
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Output configuration.
   * @public
   */
  outputConfiguration?: OutputConfiguration | undefined;

  /**
   * Job Submission time.
   * @public
   */
  jobSubmissionTime?: Date | undefined;

  /**
   * Job completion time.
   * @public
   */
  jobCompletionTime?: Date | undefined;

  /**
   * Job duration in seconds.
   * @public
   */
  jobDurationInSeconds?: number | undefined;
}

/**
 * Structure for single blueprint entity.
 * @public
 */
export interface Blueprint {
  /**
   * Arn of blueprint.
   * @public
   */
  blueprintArn: string | undefined;

  /**
   * Version of blueprint.
   * @public
   */
  version?: string | undefined;

  /**
   * Stage of blueprint.
   * @public
   */
  stage?: BlueprintStage | undefined;
}

/**
 * Data automation configuration.
 * @public
 */
export interface DataAutomationConfiguration {
  /**
   * Data automation project arn.
   * @public
   */
  dataAutomationProjectArn: string | undefined;

  /**
   * Data automation stage.
   * @public
   */
  stage?: DataAutomationStage | undefined;
}

/**
 * Encryption configuration.
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Customer KMS key used for encryption
   * @public
   */
  kmsKeyId: string | undefined;

  /**
   * KMS encryption context.
   * @public
   */
  kmsEncryptionContext?: Record<string, string> | undefined;
}

/**
 * Timestamp segment
 * @public
 */
export interface TimestampSegment {
  /**
   * Start timestamp in milliseconds
   * @public
   */
  startTimeMillis: number | undefined;

  /**
   * End timestamp in milliseconds
   * @public
   */
  endTimeMillis: number | undefined;
}

/**
 * Delimits the segment of the input that will be processed
 * @public
 */
export type VideoSegmentConfiguration =
  | VideoSegmentConfiguration.TimestampSegmentMember
  | VideoSegmentConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace VideoSegmentConfiguration {
  /**
   * Timestamp segment
   * @public
   */
  export interface TimestampSegmentMember {
    timestampSegment: TimestampSegment;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    timestampSegment?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    timestampSegment: (value: TimestampSegment) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Video asset processing configuration
 * @public
 */
export interface VideoAssetProcessingConfiguration {
  /**
   * Delimits the segment of the input that will be processed
   * @public
   */
  segmentConfiguration?: VideoSegmentConfiguration | undefined;
}

/**
 * Config containing asset processing related knobs for all modalities
 * @public
 */
export interface AssetProcessingConfiguration {
  /**
   * Video asset processing configuration
   * @public
   */
  video?: VideoAssetProcessingConfiguration | undefined;
}

/**
 * Input configuration.
 * @public
 */
export interface InputConfiguration {
  /**
   * S3 uri.
   * @public
   */
  s3Uri: string | undefined;

  /**
   * Asset processing configuration
   * @public
   */
  assetProcessingConfiguration?: AssetProcessingConfiguration | undefined;
}

/**
 * Event bridge configuration.
 * @public
 */
export interface EventBridgeConfiguration {
  /**
   * Event bridge flag.
   * @public
   */
  eventBridgeEnabled: boolean | undefined;
}

/**
 * Notification configuration.
 * @public
 */
export interface NotificationConfiguration {
  /**
   * Event bridge configuration.
   * @public
   */
  eventBridgeConfiguration: EventBridgeConfiguration | undefined;
}

/**
 * Key value pair of a tag
 * @public
 */
export interface Tag {
  /**
   * Defines the context of the tag.
   * @public
   */
  key: string | undefined;

  /**
   * Defines the value within the context. e.g. <key=reason, value=training>.
   * @public
   */
  value: string | undefined;
}

/**
 * Invoke Data Automation Async Request
 * @public
 */
export interface InvokeDataAutomationAsyncRequest {
  /**
   * Idempotency token.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Input configuration.
   * @public
   */
  inputConfiguration: InputConfiguration | undefined;

  /**
   * Output configuration.
   * @public
   */
  outputConfiguration: OutputConfiguration | undefined;

  /**
   * Data automation configuration.
   * @public
   */
  dataAutomationConfiguration?: DataAutomationConfiguration | undefined;

  /**
   * Encryption configuration.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Notification configuration.
   * @public
   */
  notificationConfiguration?: NotificationConfiguration | undefined;

  /**
   * Blueprint list.
   * @public
   */
  blueprints?: Blueprint[] | undefined;

  /**
   * Data automation profile ARN
   * @public
   */
  dataAutomationProfileArn: string | undefined;

  /**
   * List of tags.
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Invoke Data Automation Async Response
 * @public
 */
export interface InvokeDataAutomationAsyncResponse {
  /**
   * ARN of the automation job
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * Input configuration for synchronous API
 * @public
 */
export interface SyncInputConfiguration {
  /**
   * Input data as bytes
   * @public
   */
  bytes?: Uint8Array | undefined;

  /**
   * S3 URI of the input data
   * @public
   */
  s3Uri?: string | undefined;
}

/**
 * Invoke Data Automation Request
 * @public
 */
export interface InvokeDataAutomationRequest {
  /**
   * Input configuration.
   * @public
   */
  inputConfiguration: SyncInputConfiguration | undefined;

  /**
   * Data automation configuration.
   * @public
   */
  dataAutomationConfiguration?: DataAutomationConfiguration | undefined;

  /**
   * Blueprint list.
   * @public
   */
  blueprints?: Blueprint[] | undefined;

  /**
   * Data automation profile ARN
   * @public
   */
  dataAutomationProfileArn: string | undefined;

  /**
   * Encryption configuration.
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * Results for an output segment
 * @public
 */
export interface OutputSegment {
  /**
   * Status of blueprint match
   * @public
   */
  customOutputStatus?: CustomOutputStatus | undefined;

  /**
   * Custom output response
   * @public
   */
  customOutput?: string | undefined;

  /**
   * Standard output response
   * @public
   */
  standardOutput?: string | undefined;
}

/**
 * Invoke Data Automation Response
 * @public
 */
export interface InvokeDataAutomationResponse {
  /**
   * Detected semantic modality
   * @public
   */
  semanticModality: SemanticModality | undefined;

  /**
   * List of outputs for each logical sub-doc
   * @public
   */
  outputSegments: OutputSegment[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * List of tags
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;

  /**
   * List of tags
   * @public
   */
  tags: Tag[] | undefined;
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
   * ARN of a taggable resource
   * @public
   */
  resourceARN: string | undefined;

  /**
   * List of tag keys
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
