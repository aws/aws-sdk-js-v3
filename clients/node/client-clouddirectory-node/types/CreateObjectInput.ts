import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeKeyAndValue } from "./_AttributeKeyAndValue";
import { _ObjectReference } from "./_ObjectReference";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateObjectInput shape
 */
export interface CreateObjectInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> in which the object will be created. For more information, see <a>arns</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacets: Array<_SchemaFacet> | Iterable<_SchemaFacet>;

  /**
   * <p>The attribute map whose attribute ARN contains the key and attribute value as the map value.</p>
   */
  ObjectAttributeList?:
    | Array<_AttributeKeyAndValue>
    | Iterable<_AttributeKeyAndValue>;

  /**
   * <p>If specified, the parent reference to which this object will be attached.</p>
   */
  ParentReference?: _ObjectReference;

  /**
   * <p>The name of link that is used to attach this object to a parent.</p>
   */
  LinkName?: string;

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
