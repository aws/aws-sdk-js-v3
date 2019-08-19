import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the <a>SignalResource</a> action.</p>
 */
export interface SignalResourceInput {
  /**
   * <p>The stack name or unique stack ID that includes the resource that you want to signal.</p>
   */
  StackName: string;

  /**
   * <p>The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.</p>
   */
  LogicalResourceId: string;

  /**
   * <p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.</p>
   */
  UniqueId: string;

  /**
   * <p>The status of the signal, which is either success or failure. A failure signal causes AWS CloudFormation to immediately fail the stack creation or update.</p>
   */
  Status: "SUCCESS" | "FAILURE" | string;

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
