import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTaskDefinitionInput shape
 */
export interface DescribeTaskDefinitionInput {
  /**
   * <p>The <code>family</code> for the latest <code>ACTIVE</code> revision, <code>family</code> and <code>revision</code> (<code>family:revision</code>) for a specific revision in the family, or full Amazon Resource Name (ARN) of the task definition to describe.</p>
   */
  taskDefinition: string;

  /**
   * <p>Specifies whether to see the resource tags for the task definition. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.</p>
   */
  include?: Array<"TAGS" | string> | Iterable<"TAGS" | string>;

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
