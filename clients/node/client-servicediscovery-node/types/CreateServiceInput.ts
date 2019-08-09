import { _DnsConfig } from "./_DnsConfig";
import { _HealthCheckConfig } from "./_HealthCheckConfig";
import { _HealthCheckCustomConfig } from "./_HealthCheckCustomConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceInput shape
 */
export interface CreateServiceInput {
  /**
   * <p>The name that you want to assign to the service.</p>
   */
  Name: string;

  /**
   * <p>The ID of the namespace that you want to use to create the service.</p>
   */
  NamespaceId?: string;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>CreateService</code> requests to be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A description for the service.</p>
   */
  Description?: string;

  /**
   * <p>A complex type that contains information about the Amazon Route 53 records that you want AWS Cloud Map to create when you register an instance. </p>
   */
  DnsConfig?: _DnsConfig;

  /**
   * <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional Route 53 health check. If you specify settings for a health check, AWS Cloud Map associates the health check with all the Route 53 DNS records that you specify in <code>DnsConfig</code>.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/cloud-map/pricing/">AWS Cloud Map Pricing</a>.</p>
   */
  HealthCheckConfig?: _HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important>
   */
  HealthCheckCustomConfig?: _HealthCheckCustomConfig;

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
