import { _WebACLUpdate } from "./_WebACLUpdate";
import { _WafAction } from "./_WafAction";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateWebACLInput shape
 */
export interface UpdateWebACLInput {
  /**
   * <p>The <code>WebACLId</code> of the <a>WebACL</a> that you want to update. <code>WebACLId</code> is returned by <a>CreateWebACL</a> and by <a>ListWebACLs</a>.</p>
   */
  WebACLId: string;

  /**
   * <p>The value returned by the most recent call to <a>GetChangeToken</a>.</p>
   */
  ChangeToken: string;

  /**
   * <p>An array of updates to make to the <a>WebACL</a>.</p> <p>An array of <code>WebACLUpdate</code> objects that you want to insert into or delete from a <a>WebACL</a>. For more information, see the applicable data types:</p> <ul> <li> <p> <a>WebACLUpdate</a>: Contains <code>Action</code> and <code>ActivatedRule</code> </p> </li> <li> <p> <a>ActivatedRule</a>: Contains <code>Action</code>, <code>OverrideAction</code>, <code>Priority</code>, <code>RuleId</code>, and <code>Type</code>. <code>ActivatedRule|OverrideAction</code> applies only when updating or adding a <code>RuleGroup</code> to a <code>WebACL</code>. In this case, you do not use <code>ActivatedRule|Action</code>. For all other update requests, <code>ActivatedRule|Action</code> is used instead of <code>ActivatedRule|OverrideAction</code>. </p> </li> <li> <p> <a>WafAction</a>: Contains <code>Type</code> </p> </li> </ul>
   */
  Updates?: Array<_WebACLUpdate> | Iterable<_WebACLUpdate>;

  /**
   * <p>A default action for the web ACL, either ALLOW or BLOCK. AWS WAF performs the default action if a request doesn't match the criteria in any of the rules in a web ACL.</p>
   */
  DefaultAction?: _WafAction;

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
