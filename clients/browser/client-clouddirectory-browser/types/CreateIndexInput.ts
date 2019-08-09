import { _AttributeKey } from "./_AttributeKey";
import { _ObjectReference } from "./_ObjectReference";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIndexInput shape
 */
export interface CreateIndexInput {
  /**
   * <p>The ARN of the directory where the index should be created.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Specifies the attributes that should be indexed on. Currently only a single attribute is supported.</p>
   */
  OrderedIndexedAttributeList: Array<_AttributeKey> | Iterable<_AttributeKey>;

  /**
   * <p>Indicates whether the attribute that is being indexed has unique values or not.</p>
   */
  IsUnique: boolean;

  /**
   * <p>A reference to the parent object that contains the index object.</p>
   */
  ParentReference?: _ObjectReference;

  /**
   * <p>The name of the link between the parent object and the index object.</p>
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
