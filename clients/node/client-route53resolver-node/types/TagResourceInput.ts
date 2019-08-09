import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TagResourceInput shape
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource that you want to add tags to. To get the ARN for a resource, use the applicable <code>Get</code> or <code>List</code> command: </p> <ul> <li> <p> <a>GetResolverEndpoint</a> </p> </li> <li> <p> <a>GetResolverRule</a> </p> </li> <li> <p> <a>GetResolverRuleAssociation</a> </p> </li> <li> <p> <a>ListResolverEndpoints</a> </p> </li> <li> <p> <a>ListResolverRuleAssociations</a> </p> </li> <li> <p> <a>ListResolverRules</a> </p> </li> </ul>
   */
  ResourceArn: string;

  /**
   * <p>The tags that you want to add to the specified resource.</p>
   */
  Tags: Array<_Tag> | Iterable<_Tag>;

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
