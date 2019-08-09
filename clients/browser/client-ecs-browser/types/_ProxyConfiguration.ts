import { _KeyValuePair, _UnmarshalledKeyValuePair } from "./_KeyValuePair";

/**
 * <p>The configuration details for the App Mesh proxy.</p> <p>For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the <code>ecs-init</code> package to enable a proxy configuration. If your container instances are launched from the Amazon ECS-optimized AMI version <code>20190301</code> or later, then they contain the required versions of the container agent and <code>ecs-init</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html">Amazon ECS-optimized Linux AMI</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>For tasks using the Fargate launch type, the task or service requires platform version 1.3.0 or later.</p>
 */
export interface _ProxyConfiguration {
  /**
   * <p>The proxy type. The only supported value is <code>APPMESH</code>.</p>
   */
  type?: "APPMESH" | string;

  /**
   * <p>The name of the container that will serve as the App Mesh proxy.</p>
   */
  containerName: string;

  /**
   * <p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul>
   */
  properties?: Array<_KeyValuePair> | Iterable<_KeyValuePair>;
}

export interface _UnmarshalledProxyConfiguration extends _ProxyConfiguration {
  /**
   * <p>The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.</p> <ul> <li> <p> <code>IgnoredUID</code> - (Required) The user ID (UID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredGID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>IgnoredGID</code> - (Required) The group ID (GID) of the proxy container as defined by the <code>user</code> parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If <code>IgnoredUID</code> is specified, this field can be empty.</p> </li> <li> <p> <code>AppPorts</code> - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the <code>ProxyIngressPort</code> and <code>ProxyEgressPort</code>.</p> </li> <li> <p> <code>ProxyIngressPort</code> - (Required) Specifies the port that incoming traffic to the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>ProxyEgressPort</code> - (Required) Specifies the port that outgoing traffic from the <code>AppPorts</code> is directed to.</p> </li> <li> <p> <code>EgressIgnoredPorts</code> - (Required) The egress traffic going to the specified ports is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> <li> <p> <code>EgressIgnoredIPs</code> - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the <code>ProxyEgressPort</code>. It can be an empty list.</p> </li> </ul>
   */
  properties?: Array<_UnmarshalledKeyValuePair>;
}
