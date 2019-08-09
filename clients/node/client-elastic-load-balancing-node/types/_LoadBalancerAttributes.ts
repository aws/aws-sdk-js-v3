import {
  _CrossZoneLoadBalancing,
  _UnmarshalledCrossZoneLoadBalancing
} from "./_CrossZoneLoadBalancing";
import { _AccessLog, _UnmarshalledAccessLog } from "./_AccessLog";
import {
  _ConnectionDraining,
  _UnmarshalledConnectionDraining
} from "./_ConnectionDraining";
import {
  _ConnectionSettings,
  _UnmarshalledConnectionSettings
} from "./_ConnectionSettings";
import {
  _AdditionalAttribute,
  _UnmarshalledAdditionalAttribute
} from "./_AdditionalAttribute";

/**
 * <p>The attributes for a load balancer.</p>
 */
export interface _LoadBalancerAttributes {
  /**
   * <p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CrossZoneLoadBalancing?: _CrossZoneLoadBalancing;

  /**
   * <p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  AccessLog?: _AccessLog;

  /**
   * <p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionDraining?: _ConnectionDraining;

  /**
   * <p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p> <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionSettings?: _ConnectionSettings;

  /**
   * <p>This parameter is reserved.</p>
   */
  AdditionalAttributes?:
    | Array<_AdditionalAttribute>
    | Iterable<_AdditionalAttribute>;
}

export interface _UnmarshalledLoadBalancerAttributes
  extends _LoadBalancerAttributes {
  /**
   * <p>If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Configure Cross-Zone Load Balancing</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  CrossZoneLoadBalancing?: _UnmarshalledCrossZoneLoadBalancing;

  /**
   * <p>If enabled, the load balancer captures detailed information of all requests and delivers the information to the Amazon S3 bucket that you specify.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-access-logs.html">Enable Access Logs</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  AccessLog?: _UnmarshalledAccessLog;

  /**
   * <p>If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Configure Connection Draining</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionDraining?: _UnmarshalledConnectionDraining;

  /**
   * <p>If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.</p> <p>By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Configure Idle Connection Timeout</a> in the <i>Classic Load Balancers Guide</i>.</p>
   */
  ConnectionSettings?: _UnmarshalledConnectionSettings;

  /**
   * <p>This parameter is reserved.</p>
   */
  AdditionalAttributes?: Array<_UnmarshalledAdditionalAttribute>;
}
