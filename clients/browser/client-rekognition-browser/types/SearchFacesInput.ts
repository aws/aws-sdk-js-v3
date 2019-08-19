import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchFacesInput shape
 */
export interface SearchFacesInput {
  /**
   * <p>ID of the collection the face belongs to.</p>
   */
  CollectionId: string;

  /**
   * <p>ID of a face to find matches for in the collection.</p>
   */
  FaceId: string;

  /**
   * <p>Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.</p>
   */
  MaxFaces?: number;

  /**
   * <p>Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%.</p>
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
