import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DiscoverInstancesInput shape
 */
export interface DiscoverInstancesInput {
  /**
   * <p>The name of the namespace that you specified when you registered the instance.</p>
   */
  NamespaceName: string;

  /**
   * <p>The name of the service that you specified when you registered the instance.</p>
   */
  ServiceName: string;

  /**
   * <p>The maximum number of instances that you want Cloud Map to return in the response to a <code>DiscoverInstances</code> request. If you don't specify a value for <code>MaxResults</code>, Cloud Map returns up to 100 instances.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all the specified key/value pairs will be returned.</p>
   */
  QueryParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The health status of the instances that you want to discover.</p>
   */
  HealthStatus?: "HEALTHY" | "UNHEALTHY" | "ALL" | string;

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
