import { _Certificate, _UnmarshalledCertificate } from "./_Certificate";
import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Information about a listener.</p>
 */
export interface _Listener {
  /**
   * <p>The Amazon Resource Name (ARN) of the listener.</p>
   */
  ListenerArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn?: string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port?: number;

  /**
   * <p>The protocol for connections from clients to the load balancer.</p>
   */
  Protocol?: "HTTP" | "HTTPS" | "TCP" | "TLS" | "UDP" | "TCP_UDP" | string;

  /**
   * <p>[HTTPS or TLS listener] The default certificate for the listener.</p>
   */
  Certificates?: Array<_Certificate> | Iterable<_Certificate>;

  /**
   * <p>[HTTPS or TLS listener] The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.</p>
   */
  SslPolicy?: string;

  /**
   * <p>The default actions for the listener.</p>
   */
  DefaultActions?: Array<_Action> | Iterable<_Action>;
}

export interface _UnmarshalledListener extends _Listener {
  /**
   * <p>[HTTPS or TLS listener] The default certificate for the listener.</p>
   */
  Certificates?: Array<_UnmarshalledCertificate>;

  /**
   * <p>The default actions for the listener.</p>
   */
  DefaultActions?: Array<_UnmarshalledAction>;
}
