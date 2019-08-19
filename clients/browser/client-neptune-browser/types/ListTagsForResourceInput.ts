import { _Filter } from "./_Filter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTagsForResourceInput shape
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<_Filter> | Iterable<_Filter>;

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
