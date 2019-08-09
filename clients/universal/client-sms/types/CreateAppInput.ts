import { _ServerGroup } from "./_ServerGroup";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAppInput shape
 */
export interface CreateAppInput {
  /**
   * <p>Name of the new application.</p>
   */
  name?: string;

  /**
   * <p>Description of the new application</p>
   */
  description?: string;

  /**
   * <p>Name of service role in customer's account to be used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure idempotency of application creation.</p>
   */
  clientToken?: string;

  /**
   * <p>List of server groups to include in the application.</p>
   */
  serverGroups?: Array<_ServerGroup> | Iterable<_ServerGroup>;

  /**
   * <p>List of tags to be associated with the application.</p>
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
