import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServicesInput shape
 */
export interface DescribeServicesInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN)the cluster that hosts the service to describe. If you do not specify a cluster, the default cluster is assumed. This parameter is required if the service or services you are describing were launched in any cluster other than the default cluster.</p>
   */
  cluster?: string;

  /**
   * <p>A list of services to describe. You may specify up to 10 services to describe in a single operation.</p>
   */
  services: Array<string> | Iterable<string>;

  /**
   * <p>Specifies whether you want to see the resource tags for the service. If <code>TAGS</code> is specified, the tags are included in the response. If this field is omitted, tags are not included in the response.</p>
   */
  include?: Array<"TAGS" | string> | Iterable<"TAGS" | string>;

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
