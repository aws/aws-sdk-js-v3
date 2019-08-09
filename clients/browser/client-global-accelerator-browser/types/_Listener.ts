import { _PortRange, _UnmarshalledPortRange } from "./_PortRange";

/**
 * <p>A complex type for a listener.</p>
 */
export interface _Listener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: Array<_PortRange> | Iterable<_PortRange>;

  /**
   * <p>The protocol for the connections from clients to the accelerator.</p>
   */
  Protocol?: "TCP" | "UDP" | string;

  /**
   * <p>Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request. Clienty affinity gives you control over whether to always route each client to the same specific endpoint.</p> <p>AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is <code>NONE</code>, Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes. </p> <p>If you want a given client to always be routed to the same endpoint, set client affinity to <code>SOURCE_IP</code> instead. When you use the <code>SOURCE_IP</code> setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.</p> <p>The default value is <code>NONE</code>.</p>
   */
  ClientAffinity?: "NONE" | "SOURCE_IP" | string;
}

export interface _UnmarshalledListener extends _Listener {
  /**
   * <p>The list of port ranges for the connections from clients to the accelerator.</p>
   */
  PortRanges?: Array<_UnmarshalledPortRange>;
}
