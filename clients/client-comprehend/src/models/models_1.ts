// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";
import { FlywheelProperties, JobStatus, Tag, VpcConfig } from "./models_0";

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobRequest {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopTargetedSentimentDetectionJobResponse {
  /**
   * <p>The identifier of the targeted sentiment detection job to stop.</p>
   */
  JobId?: string;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the given Amazon Comprehend resource to which you want
   *       to associate the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
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
   * <p> The Amazon Resource Name (ARN) of the given Amazon Comprehend resource from which you
   *       want to remove the tags. </p>
   */
  ResourceArn: string | undefined;

  /**
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
   * <p>The Amazon Resource Number (ARN) of the endpoint being updated.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The ARN of the new model to use when updating an existing endpoint.</p>
   */
  DesiredModelArn?: string;

  /**
   * <p> The desired number of inference units to be used by the model using this endpoint.
   *
   *       Each inference unit represents of a throughput of 100 characters per second.</p>
   */
  DesiredInferenceUnits?: number;

  /**
   * <p>Data access role ARN to use in case the new model is encrypted with a customer CMK.</p>
   */
  DesiredDataAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the flywheel</p>
   */
  FlywheelArn?: string;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
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
   * <p>ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt
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
   * <p>ID for the KMS key that Amazon Comprehend uses to encrypt the volume.</p>
   */
  VolumeKmsKeyId?: string;

  /**
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
   * <p>The Amazon Resource Number (ARN) of the flywheel to update.</p>
   */
  FlywheelArn: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the active model version.</p>
   */
  ActiveModelArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *       grants Amazon Comprehend permission to access the flywheel data.</p>
   */
  DataAccessRoleArn?: string;

  /**
   * <p>Flywheel data security configuration.</p>
   */
  DataSecurityConfig?: UpdateDataSecurityConfig;
}

/**
 * @public
 */
export interface UpdateFlywheelResponse {
  /**
   * <p>The flywheel properties.</p>
   */
  FlywheelProperties?: FlywheelProperties;
}

/**
 * @internal
 */
export const StopTargetedSentimentDetectionJobRequestFilterSensitiveLog = (
  obj: StopTargetedSentimentDetectionJobRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTargetedSentimentDetectionJobResponseFilterSensitiveLog = (
  obj: StopTargetedSentimentDetectionJobResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTrainingDocumentClassifierRequestFilterSensitiveLog = (
  obj: StopTrainingDocumentClassifierRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTrainingDocumentClassifierResponseFilterSensitiveLog = (
  obj: StopTrainingDocumentClassifierResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTrainingEntityRecognizerRequestFilterSensitiveLog = (
  obj: StopTrainingEntityRecognizerRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopTrainingEntityRecognizerResponseFilterSensitiveLog = (
  obj: StopTrainingEntityRecognizerResponse
): any => ({
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
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
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointRequestFilterSensitiveLog = (obj: UpdateEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointResponseFilterSensitiveLog = (obj: UpdateEndpointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataSecurityConfigFilterSensitiveLog = (obj: UpdateDataSecurityConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlywheelRequestFilterSensitiveLog = (obj: UpdateFlywheelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFlywheelResponseFilterSensitiveLog = (obj: UpdateFlywheelResponse): any => ({
  ...obj,
});
