/**
 * <p>Information about a target group attribute.</p>
 */
export interface _TargetGroupAttribute {
  /**
   * <p>The name of the attribute.</p> <p>The following attribute is supported by both Application Load Balancers and Network Load Balancers:</p> <ul> <li> <p> <code>deregistration_delay.timeout_seconds</code> - The amount of time, in seconds, for Elastic Load Balancing to wait before changing the state of a deregistering target from <code>draining</code> to <code>unused</code>. The range is 0-3600 seconds. The default value is 300 seconds. If the target is a Lambda function, this attribute is not supported.</p> </li> </ul> <p>The following attributes are supported by Application Load Balancers if the target is not a Lambda function:</p> <ul> <li> <p> <code>slow_start.duration_seconds</code> - The time period, in seconds, during which a newly registered target receives a linearly increasing share of the traffic to the target group. After this time period ends, the target receives its full share of traffic. The range is 30-900 seconds (15 minutes). Slow start mode is disabled by default.</p> </li> <li> <p> <code>stickiness.enabled</code> - Indicates whether sticky sessions are enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> <li> <p> <code>stickiness.type</code> - The type of sticky sessions. The possible value is <code>lb_cookie</code>.</p> </li> <li> <p> <code>stickiness.lb_cookie.duration_seconds</code> - The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds).</p> </li> </ul> <p>The following attribute is supported only if the target is a Lambda function.</p> <ul> <li> <p> <code>lambda.multi_value_headers.enabled</code> - Indicates whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>. If the value is <code>false</code> and the request contains a duplicate header field name or query parameter key, the load balancer uses the last value sent by the client.</p> </li> </ul> <p>The following attribute is supported only by Network Load Balancers:</p> <ul> <li> <p> <code>proxy_protocol_v2.enabled</code> - Indicates whether Proxy Protocol version 2 is enabled. The value is <code>true</code> or <code>false</code>. The default is <code>false</code>.</p> </li> </ul>
   */
  Key?: string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export type _UnmarshalledTargetGroupAttribute = _TargetGroupAttribute;
