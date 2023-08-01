// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";
import { FlywheelProperties, JobStatus, Tag, VpcConfig } from "./models_0";

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobRequest {
  /**
   * @public
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopPiiEntitiesDetectionJobResponse {
  /**
   * @public
   * <p>The identifier of the PII entities detection job to stop.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The status of the PII entities detection job.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobRequest {
  /**
   * @public
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopSentimentDetectionJobResponse {
  /**
   * @public
   * <p>The identifier of the sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *         <code>STOPPED</code> if the job was previously stopped with the
   *         <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * @public
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * @public
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>Either <code>STOP_REQUESTED</code> if the job is currently running, or
   *       <code>STOPPED</code> if the job was previously stopped with the
   *       <code>StopSentimentDetectionJob</code> operation.</p>
   */
  JobStatus?: JobStatus | string;
}

/**
 * @public
 */
export interface StopTrainingDocumentClassifierRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the document classifier currently being
   *       trained.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the entity recognizer currently being
   *       trained.</p>
   */
  EntityRecognizerArn: string | undefined;
}

/**
 * @public
 */
export interface StopTrainingEntityRecognizerResponse {}

/**
 * @public
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not
 *       supported. </p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want
   *       to associate the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Tags being associated with a specific Amazon Comprehend resource. There can be a maximum
   *       of 50 tags (both existing and pending) associated with a specific resource. </p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per
 *       resource).</p>
 */
export class TooManyTagKeysException extends __BaseException {
  readonly name: "TooManyTagKeysException" = "TooManyTagKeysException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you
   *       want to remove the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The initial part of a key-value pair that forms a tag being removed from a given resource.
   *       For example, a tag with "Sales" as the key might be added to a resource to indicate its use by
   *       the sales department. Keys must be unique and cannot be duplicated for a particular resource.
   *     </p>
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
   * @public
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the new model to use when updating an existing endpoint.</p>
   */
  DesiredModelArn?: string;

  /**
   * @public
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * @public
   * <p>Data access role ARN to use in case the new model is encrypted with a customer CMK.</p>
   */
  DesiredDataAccessRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the new model.</p>
   */
  DesiredModelArn?: string;
}

/**
 * @public
 * <p>Data security configuration.</p>
 */
export interface UpdateDataSecurityConfig {
  /**
   * @public
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
   */
  ModelKmsKeyId?: string;

  /**
   * @public
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   */
  VolumeKmsKeyId?: string;

  /**
   * @public
   * <p> Configuration parameters for an optional private Virtual Private Cloud (VPC) containing
   *       the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon
   *         VPC</a>. </p>
   */
  VpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface UpdateFlywheelRequest {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the flywheel to update.</p>
   */
  FlywheelArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   */
  ActiveModelArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * @public
   * <p>Flywheel data security configuration.</p>
   */
  DataSecurityConfig?: UpdateDataSecurityConfig;
}

/**
 * @public
 */
export interface UpdateFlywheelResponse {
  /**
   * @public
   * <p>The flywheel properties.</p>
   */
  FlywheelProperties?: FlywheelProperties;
}
