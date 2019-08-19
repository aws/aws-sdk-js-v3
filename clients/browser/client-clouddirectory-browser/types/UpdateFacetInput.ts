import { _FacetAttributeUpdate } from "./_FacetAttributeUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFacetInput shape
 */
export interface UpdateFacetInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Facet</a>. For more information, see <a>arns</a>.</p>
   */
  SchemaArn: string;

  /**
   * <p>The name of the facet.</p>
   */
  Name: string;

  /**
   * <p>List of attributes that need to be updated in a given schema <a>Facet</a>. Each attribute is followed by <code>AttributeAction</code>, which specifies the type of update operation to perform. </p>
   */
  AttributeUpdates?:
    | Array<_FacetAttributeUpdate>
    | Iterable<_FacetAttributeUpdate>;

  /**
   * <p>The object type that is associated with the facet. See <a>CreateFacetRequest$ObjectType</a> for more details.</p>
   */
  ObjectType?: "NODE" | "LEAF_NODE" | "POLICY" | "INDEX" | string;

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
