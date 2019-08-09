import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { _AttributeNameAndValue } from "./_AttributeNameAndValue";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AttachTypedLinkInput shape
 */
export interface AttachTypedLinkInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Identifies the source object that the typed link will attach to.</p>
   */
  SourceObjectReference: _ObjectReference;

  /**
   * <p>Identifies the target object that the typed link will attach to.</p>
   */
  TargetObjectReference: _ObjectReference;

  /**
   * <p>Identifies the typed link facet that is associated with the typed link.</p>
   */
  TypedLinkFacet: _TypedLinkSchemaAndFacetName;

  /**
   * <p>A set of attributes that are associated with the typed link.</p>
   */
  Attributes: Array<_AttributeNameAndValue> | Iterable<_AttributeNameAndValue>;

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
