import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServiceErrorsInput shape
 */
export interface DescribeServiceErrorsInput {
  /**
   * <p>The stack ID. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the errors associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>The instance ID. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the errors associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>An array of service error IDs. If you use this parameter, <code>DescribeServiceErrors</code> returns descriptions of the specified errors. Otherwise, it returns a description of every error.</p>
   */
  ServiceErrorIds?: Array<string> | Iterable<string>;

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
