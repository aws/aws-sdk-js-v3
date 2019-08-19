import { _ServerGroup } from "./_ServerGroup";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateAppInput shape
 */
export interface UpdateAppInput {
  /**
   * <p>ID of the application to update.</p>
   */
  appId?: string;

  /**
   * <p>New name of the application.</p>
   */
  name?: string;

  /**
   * <p>New description of the application.</p>
   */
  description?: string;

  /**
   * <p>Name of the service role in the customer's account used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>List of server groups in the application to update.</p>
   */
  serverGroups?: Array<_ServerGroup> | Iterable<_ServerGroup>;

  /**
   * <p>List of tags to associate with the application.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
