import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGroupInput shape
 */
export interface UpdateGroupInput {
  /**
   * <p>The name of the group that you want to update.</p>
   */
  GroupName: string;

  /**
   * <p>The description for the group that you want to update.</p>
   */
  Description?: string;

  /**
   * <p>The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string;

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
