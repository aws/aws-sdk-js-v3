import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeKeyAndValue } from "./_AttributeKeyAndValue";
import { _ObjectReference } from "./_ObjectReference";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddFacetToObjectInput shape
 */
export interface AddFacetToObjectInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Identifiers for the facet that you are adding to the object. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>Attributes on the facet that you are adding to the object.</p>
   */
  ObjectAttributeList?:
    | Array<_AttributeKeyAndValue>
    | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>A reference to the object you are adding the specified facet to.</p>
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
