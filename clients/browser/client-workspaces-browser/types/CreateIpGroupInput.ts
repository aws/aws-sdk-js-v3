import { _IpRuleItem } from "./_IpRuleItem";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIpGroupInput shape
 */
export interface CreateIpGroupInput {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string;

  /**
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: Array<_IpRuleItem> | Iterable<_IpRuleItem>;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
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
