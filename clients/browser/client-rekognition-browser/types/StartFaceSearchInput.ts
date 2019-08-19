import { _Video } from "./_Video";
import { _NotificationChannel } from "./_NotificationChannel";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartFaceSearchInput shape
 */
export interface StartFaceSearchInput {
  /**
   * <p>The video you want to search. The video must be stored in an Amazon S3 bucket. </p>
   */
  Video: _Video;

  /**
   * <p>Idempotent token used to identify the start request. If you use the same token with multiple <code>StartFaceSearch</code> requests, the same <code>JobId</code> is returned. Use <code>ClientRequestToken</code> to prevent the same job from being accidently started more than once. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The minimum confidence in the person match to return. For example, don't return any matches where confidence in matches is less than 70%. </p>
   */
  FaceMatchThreshold?: number;

  /**
   * <p>ID of the collection that contains the faces you want to search for.</p>
   */
  CollectionId: string;

  /**
   * <p>The ARN of the Amazon SNS topic to which you want Amazon Rekognition Video to publish the completion status of the search. </p>
   */
  NotificationChannel?: _NotificationChannel;

  /**
   * <p>Unique identifier you specify to identify the job in the completion status published to the Amazon Simple Notification Service topic. </p>
   */
  JobTag?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
