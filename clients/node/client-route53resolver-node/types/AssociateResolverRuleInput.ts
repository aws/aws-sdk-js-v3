import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateResolverRuleInput shape
 */
export interface AssociateResolverRuleInput {
  /**
   * <p>The ID of the resolver rule that you want to associate with the VPC. To list the existing resolver rules, use <a>ListResolverRules</a>.</p>
   */
  ResolverRuleId: string;

  /**
   * <p>A name for the association that you're creating between a resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC that you want to associate the resolver rule with.</p>
   */
  VPCId: string;

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
