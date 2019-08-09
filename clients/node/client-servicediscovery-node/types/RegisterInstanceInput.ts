import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterInstanceInput shape
 */
export interface RegisterInstanceInput {
  /**
   * <p>The ID of the service that you want to use for settings for the instance.</p>
   */
  ServiceId: string;

  /**
   * <p>An identifier that you want to associate with the instance. Note the following:</p> <ul> <li> <p>If the service that is specified by <code>ServiceId</code> includes settings for an SRV record, the value of <code>InstanceId</code> is automatically included as part of the value for the SRV record. For more information, see <a>DnsRecord$Type</a>.</p> </li> <li> <p>You can use this value to update an existing instance.</p> </li> <li> <p>To register a new instance, you must specify a value that is unique among instances that you register by using the same service. </p> </li> <li> <p>If you specify an existing <code>InstanceId</code> and <code>ServiceId</code>, AWS Cloud Map updates the existing DNS records, if any. If there's also an existing health check, AWS Cloud Map deletes the old health check and creates a new one. </p> <note> <p>The health check isn't deleted immediately, so it will still appear for a while if you submit a <code>ListHealthChecks</code> request, for example.</p> </note> </li> </ul>
   */
  InstanceId: string;

  /**
   * <p>A unique string that identifies the request and that allows failed <code>RegisterInstance</code> requests to be retried without the risk of executing the operation twice. You must use a unique <code>CreatorRequestId</code> string every time you submit a <code>RegisterInstance</code> request if you're registering additional instances for the same namespace and service. <code>CreatorRequestId</code> can be any unique string, for example, a date/time stamp.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>A string map that contains the following information for the service that you specify in <code>ServiceId</code>:</p> <ul> <li> <p>The attributes that apply to the records that are defined in the service. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <p>Supported attribute keys include the following:</p> <p> <b>AWS_ALIAS_DNS_NAME</b> </p> <p> <b/> </p> <p>If you want AWS Cloud Map to create an Amazon Route 53 alias record that routes traffic to an Elastic Load Balancing load balancer, specify the DNS name that is associated with the load balancer. For information about how to get the DNS name, see "DNSName" in the topic <a href="http://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html">AliasTarget</a> in the <i>Route 53 API Reference</i>.</p> <p>Note the following:</p> <ul> <li> <p>The configuration for the service that is specified by <code>ServiceId</code> must include settings for an A record, an AAAA record, or both.</p> </li> <li> <p>In the service that is specified by <code>ServiceId</code>, the value of <code>RoutingPolicy</code> must be <code>WEIGHTED</code>.</p> </li> <li> <p>If the service that is specified by <code>ServiceId</code> includes <code>HealthCheckConfig</code> settings, AWS Cloud Map will create the Route 53 health check, but it won't associate the health check with the alias record.</p> </li> <li> <p>Auto naming currently doesn't support creating alias records that route traffic to AWS resources other than ELB load balancers.</p> </li> <li> <p>If you specify a value for <code>AWS_ALIAS_DNS_NAME</code>, don't specify values for any of the <code>AWS_INSTANCE</code> attributes.</p> </li> </ul> <p> <b>AWS_INIT_HEALTH_STATUS</b> </p> <p>If the service configuration includes <code>HealthCheckCustomConfig</code>, you can optionally use <code>AWS_INIT_HEALTH_STATUS</code> to specify the initial status of the custom health check, <code>HEALTHY</code> or <code>UNHEALTHY</code>. If you don't specify a value for <code>AWS_INIT_HEALTH_STATUS</code>, the initial status is <code>HEALTHY</code>.</p> <p> <b>AWS_INSTANCE_CNAME</b> </p> <p>If the service configuration includes a CNAME record, the domain name that you want Route 53 to return in response to DNS queries, for example, <code>example.com</code>.</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an CNAME record.</p> <p> <b>AWS_INSTANCE_IPV4</b> </p> <p>If the service configuration includes an A record, the IPv4 address that you want Route 53 to return in response to DNS queries, for example, <code>192.0.2.44</code>.</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an A record. If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> <p> <b>AWS_INSTANCE_IPV6</b> </p> <p>If the service configuration includes an AAAA record, the IPv6 address that you want Route 53 to return in response to DNS queries, for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p> <p>This value is required if the service specified by <code>ServiceId</code> includes settings for an AAAA record. If the service includes settings for an SRV record, you must specify a value for <code>AWS_INSTANCE_IPV4</code>, <code>AWS_INSTANCE_IPV6</code>, or both.</p> <p> <b>AWS_INSTANCE_PORT</b> </p> <p>If the service includes an SRV record, the value that you want Route 53 to return for the port.</p> <p>If the service includes <code>HealthCheckConfig</code>, the port on the endpoint that you want Route 53 to send requests to. </p> <p>This value is required if you specified settings for an SRV record when you created the service.</p> <p> <b>Custom attributes</b> </p> <p>You can add up to 30 custom attributes. For each key-value pair, the maximum length of the attribute name is 255 characters, and the maximum length of the attribute value is 1,024 characters. </p>
   */
  Attributes: { [key: string]: string } | Iterable<[string, string]>;

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
