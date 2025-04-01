// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";

import { FlywheelProperties, JobStatus, Tag, VpcConfig } from "./models_0";

/**
 * @public
 */
export interface StopEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the entities detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopEntitiesDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobRequest {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopEventsDetectionJobResponse {
  /**
   * <p>The identifier of the events detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The status of the events detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobRequest {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopKeyPhrasesDetectionJobResponse {
  /**
   * <p>The identifier of the key phrases detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopKeyPhrasesDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * <p>The identifier of the PII entities detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The status of the PII entities detection job.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the sentiment detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *       <code>STOPPED</code> if the job was previously stopped with the
   *       <code>StopSentimentDetectionJob</code> operation.</p>
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier currently being
   *       trained.</p>
   * @public
   */
  DocumentClassifierArn: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierResponse {}

/**
 * @public
 */
export interface StopTrainingEntityRecognizerRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer currently being
   *       trained.</p>
   * @public
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingEntityRecognizerResponse {}

/**
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not
 *       supported. </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want
   *       to associate the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags being associated with a specific Amazon Comprehend resource. There can be a maximum
   *       of 50 tags (both existing and pending) associated with a specific resource. </p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per
 *       resource).</p>
 * @public
 */
export class TooManyTagKeysException extends __BaseException {
  readonly name: "TooManyTagKeysException" = "TooManyTagKeysException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagKeysException, __BaseException>) {
    super({
      name: "TooManyTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagKeysException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you
   *       want to remove the tags. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *       For example, a tag with "Sales" as the key might be added to a resource to indicate its use by
   *       the sales department. Keys must be unique and cannot be duplicated for a particular resource.
   *     </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateEndpointRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The ARN of the new model to use when updating an existing endpoint.</p>
   * @public
   */
  DesiredModelArn?: string | undefined;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   * @public
   */
  DesiredInferenceUnits?: number | undefined;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer CMK.</p>
   * @public
   */
  DesiredDataAccessRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   * @public
   */
  FlywheelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the new model.</p>
   * @public
   */
  DesiredModelArn?: string | undefined;
}

/**
 * <p>Data security configuration.</p>
 * @public
 */
export interface UpdateDataSecurityConfig {
  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt
   *       trained custom models. The ModelKmsKeyId can be either of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>KMS Key ID: <code>"1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Resource Name (ARN) of a KMS Key:
   *             <code>"arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ModelKmsKeyId?: string | undefined;

  /**
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   * @public
   */
  VolumeKmsKeyId?: string | undefined;

  /**
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel to update.</p>
   * @public
   */
  FlywheelArn: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   * @public
   */
  ActiveModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Flywheel data security configuration.</p>
   * @public
   */
  DataSecurityConfig?: UpdateDataSecurityConfig | undefined;
}

/**
 * @public
 */
export interface UpdateFlywheelResponse {
  /**
   * <p>The flywheel properties.</p>
   * @public
   */
  FlywheelProperties?: FlywheelProperties | undefined;
}
