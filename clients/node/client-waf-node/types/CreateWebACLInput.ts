import { _WafAction } from "./_WafAction";
import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateWebACLInput shape
 */
export interface CreateWebACLInput {
  /**
   * <p>A friendly name or description of the <a>WebACL</a>. You can't change <code>Name</code> after you create the <code>WebACL</code>.</p>
   */
  Name: string;

  /**
   * <p>A friendly name or description for the metrics for this <code>WebACL</code>.The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change <code>MetricName</code> after you create the <code>WebACL</code>.</p>
   */
  MetricName: string;

  /**
   * <p>The action that you want AWS WAF to take when a request doesn't match the criteria specified in any of the <code>Rule</code> objects that are associated with the <code>WebACL</code>.</p>
   */
  DefaultAction: _WafAction;

  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string;

  /**
   * _TagList shape
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
