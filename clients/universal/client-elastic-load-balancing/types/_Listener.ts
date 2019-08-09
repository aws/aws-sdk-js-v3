/**
 * <p>Information about a listener.</p> <p>For information about the protocols and the ports supported by Elastic Load Balancing, see <a href="http://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
 */
export interface _Listener {
  /**
   * <p>The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.</p>
   */
  Protocol: string;

  /**
   * <p>The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.</p>
   */
  LoadBalancerPort: number;

  /**
   * <p>The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.</p> <p>If the front-end protocol is HTTP, HTTPS, TCP, or SSL, <code>InstanceProtocol</code> must be at the same protocol.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is secure, (HTTPS or SSL), the listener's <code>InstanceProtocol</code> must also be secure.</p> <p>If there is another listener with the same <code>InstancePort</code> whose <code>InstanceProtocol</code> is HTTP or TCP, the listener's <code>InstanceProtocol</code> must be HTTP or TCP.</p>
   */
  InstanceProtocol?: string;

  /**
   * <p>The port on which the instance is listening.</p>
   */
  InstancePort: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the server certificate.</p>
   */
  SSLCertificateId?: string;
}

export type _UnmarshalledListener = _Listener;
