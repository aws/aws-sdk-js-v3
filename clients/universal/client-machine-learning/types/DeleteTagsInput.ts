import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTagsInput shape
 */
export interface DeleteTagsInput {
  /**
   * <p>One or more tags to delete.</p>
   */
  TagKeys: Array<string> | Iterable<string>;

  /**
   * <p>The ID of the tagged ML object. For example, <code>exampleModelId</code>.</p>
   */
  ResourceId: string;

  /**
   * <p>The type of the tagged ML object.</p>
   */
  ResourceType:
    | "BatchPrediction"
    | "DataSource"
    | "Evaluation"
    | "MLModel"
    | string;

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
