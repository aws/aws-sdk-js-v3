import { _TypedLinkSpecifier } from "./_TypedLinkSpecifier";
import { _LinkAttributeUpdate } from "./_LinkAttributeUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateLinkAttributesInput shape
 */
export interface UpdateLinkAttributesInput {
  /**
   * <p>The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  DirectoryArn: string;

  /**
   * <p>Allows a typed link specifier to be accepted as input.</p>
   */
  TypedLinkSpecifier: _TypedLinkSpecifier;

  /**
   * <p>The attributes update structure.</p>
   */
  AttributeUpdates:
    | Array<_LinkAttributeUpdate>
    | Iterable<_LinkAttributeUpdate>;

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
