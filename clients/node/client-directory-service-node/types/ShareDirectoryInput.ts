import { _ShareTarget } from "./_ShareTarget";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ShareDirectoryInput shape
 */
export interface ShareDirectoryInput {
  /**
   * <p>Identifier of the AWS Managed Microsoft AD directory that you want to share with other AWS accounts.</p>
   */
  DirectoryId: string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>Identifier for the directory consumer account with whom the directory is to be shared.</p>
   */
  ShareTarget: _ShareTarget;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by sending a directory sharing request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod: "ORGANIZATIONS" | "HANDSHAKE" | string;

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
