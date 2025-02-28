// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BedrockDataAutomationRuntimeServiceException as __BaseException } from "./BedrockDataAutomationRuntimeServiceException";

/**
 * This exception will be thrown when customer does not have access to API.
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
 * @public
 * @enum
 */
export const AutomationJobStatus = {
  CLIENT_ERROR: "ClientError",
  CREATED: "Created",
  IN_PROGRESS: "InProgress",
  SERVICE_ERROR: "ServiceError",
  SUCCESS: "Success",
} as const;

/**
 * @public
 */
export type AutomationJobStatus = (typeof AutomationJobStatus)[keyof typeof AutomationJobStatus];

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
}

/**
 * This exception is for any internal un-expected service errors.
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * This exception will be thrown when resource provided from customer not found.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * This exception will be thrown when customer reached API TPS limit.
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * This exception will be thrown when customer provided invalid parameters.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const BlueprintStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;

/**
 * @public
 */
export type BlueprintStage = (typeof BlueprintStage)[keyof typeof BlueprintStage];

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
 * @public
 * @enum
 */
export const DataAutomationStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;

/**
 * @public
 */
export type DataAutomationStage = (typeof DataAutomationStage)[keyof typeof DataAutomationStage];

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
 * Input configuration.
 * @public
 */
export interface InputConfiguration {
  /**
   * S3 uri.
   * @public
   */
  s3Uri: string | undefined;
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
 * This exception will be thrown when service quota is exceeded.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
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
