import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourcesForWebACLInput shape
 */
export interface ListResourcesForWebACLInput {
  /**
   * <p>The unique identifier (ID) of the web ACL for which to list the associated resources.</p>
   */
  WebACLId: string;

  /**
   * <p>The type of resource to list, either an application load balancer or Amazon API Gateway.</p>
   */
  ResourceType?: "APPLICATION_LOAD_BALANCER" | "API_GATEWAY" | string;

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
