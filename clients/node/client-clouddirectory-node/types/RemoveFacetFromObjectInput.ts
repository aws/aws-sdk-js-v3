import { _SchemaFacet } from "./_SchemaFacet";
import { _ObjectReference } from "./_ObjectReference";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveFacetFromObjectInput shape
 */
export interface RemoveFacetFromObjectInput {
  /**
   * <p>The ARN of the directory in which the object resides.</p>
   */
  DirectoryArn: string;

  /**
   * <p>The facet to remove. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>A reference to the object to remove the facet from.</p>
   */
  ObjectReference: _ObjectReference;

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
