import { _WebhookFilter } from "./_WebhookFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateWebhookInput shape
 */
export interface UpdateWebhookInput {
  /**
   * <p>The name of the AWS CodeBuild project.</p>
   */
  projectName: string;

  /**
   * <p>A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If <code>branchFilter</code> is empty, then all branches are built.</p> <note> <p> It is recommended that you use <code>filterGroups</code> instead of <code>branchFilter</code>. </p> </note>
   */
  branchFilter?: string;

  /**
   * <p> A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p>
   */
  rotateSecret?: boolean;

  /**
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine if a webhook event can trigger a build. A filter group must pcontain at least one <code>EVENT</code> <code>WebhookFilter</code>. </p>
   */
  filterGroups?:
    | Array<Array<_WebhookFilter> | Iterable<_WebhookFilter>>
    | Iterable<Array<_WebhookFilter> | Iterable<_WebhookFilter>>;

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
