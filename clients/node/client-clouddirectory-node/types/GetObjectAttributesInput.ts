import { _ObjectReference } from "./_ObjectReference";
import { _SchemaFacet } from "./_SchemaFacet";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectAttributesInput shape
 */
export interface GetObjectAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where the object resides.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Reference that identifies the object whose attributes will be retrieved.</p>
   */
  ObjectReference: _ObjectReference;

  /**
   * <p>The consistency level at which to retrieve the attributes on an object.</p>
   */
  ConsistencyLevel?: "SERIALIZABLE" | "EVENTUAL" | string;

  /**
   * <p>Identifier for the facet whose attributes will be retrieved. See <a>SchemaFacet</a> for details.</p>
   */
  SchemaFacet: _SchemaFacet;

  /**
   * <p>List of attribute names whose values will be retrieved.</p>
   */
  AttributeNames: Array<string> | Iterable<string>;

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
