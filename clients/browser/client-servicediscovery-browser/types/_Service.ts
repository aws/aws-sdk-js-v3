import { _DnsConfig, _UnmarshalledDnsConfig } from "./_DnsConfig";
import {
  _HealthCheckConfig,
  _UnmarshalledHealthCheckConfig
} from "./_HealthCheckConfig";
import {
  _HealthCheckCustomConfig,
  _UnmarshalledHealthCheckCustomConfig
} from "./_HealthCheckCustomConfig";

/**
 * <p>A complex type that contains information about the specified service.</p>
 */
export interface _Service {
  /**
   * <p>The ID that AWS Cloud Map assigned to the service when you created it.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that AWS Cloud Map assigns to the service when you create it.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the namespace that was used to create the service.</p>
   */
  NamespaceId?: string;

  /**
   * <p>The description of the service.</p>
   */
  Description?: string;

  /**
   * <p>The number of instances that are currently associated with the service. Instances that were previously associated with the service but that have been deleted are not included in the count.</p>
   */
  InstanceCount?: number;

  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: _DnsConfig;

  /**
   * <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: _HealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important>
   */
  HealthCheckCustomConfig?: _HealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>A unique string that identifies the request and that allows failed requests to be retried without the risk of executing the operation twice. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;
}

export interface _UnmarshalledService extends _Service {
  /**
   * <p>A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsConfig?: _UnmarshalledDnsConfig;

  /**
   * <p> <i>Public DNS namespaces only.</i> A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in <code>DnsConfig</code>.</p> <p>For information about the charges for health checks, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
   */
  HealthCheckConfig?: _UnmarshalledHealthCheckConfig;

  /**
   * <p>A complex type that contains information about an optional custom health check.</p> <important> <p>If you specify a health check configuration, you can specify either <code>HealthCheckCustomConfig</code> or <code>HealthCheckConfig</code> but not both.</p> </important>
   */
  HealthCheckCustomConfig?: _UnmarshalledHealthCheckCustomConfig;

  /**
   * <p>The date and time that the service was created, in Unix format and Coordinated Universal Time (UTC). The value of <code>CreateDate</code> is accurate to milliseconds. For example, the value <code>1516925490.087</code> represents Friday, January 26, 2018 12:11:30.087 AM.</p>
   */
  CreateDate?: Date;
}
