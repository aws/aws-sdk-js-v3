import { _Image } from "./_Image";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchFacesByImageInput shape
 */
export interface SearchFacesByImageInput {
  /**
   * <p>ID of the collection to search.</p>
   */
  CollectionId: string;

  /**
   * <p>The input image as base64-encoded bytes or an S3 object. If you use the AWS CLI to call Amazon Rekognition operations, passing base64-encoded image bytes is not supported. </p> <p>If you are using an AWS SDK to call Amazon Rekognition, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. For more information, see Images in the Amazon Rekognition developer guide.</p>
   */
  Image: _Image;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.</p>
   */
  MaxFaces?: number;

  /**
   * <p>(Optional) Specifies the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.</p>
   */
  FaceMatchThreshold?: number;

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
