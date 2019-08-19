import { _Certificate } from "./_Certificate";
import { _Action } from "./_Action";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateListenerInput shape
 */
export interface CreateListenerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the load balancer.</p>
   */
  LoadBalancerArn: string;

  /**
   * <p>The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP.</p>
   */
  Protocol: "HTTP" | "HTTPS" | "TCP" | "TLS" | "UDP" | "TCP_UDP" | string;

  /**
   * <p>The port on which the load balancer is listening.</p>
   */
  Port: number;

  /**
   * <p>[HTTPS and TLS listeners] The security policy that defines which ciphers and protocols are supported. The default is the current predefined security policy.</p>
   */
  SslPolicy?: string;

  /**
   * <p>[HTTPS and TLS listeners] The default certificate for the listener. You must provide exactly one certificate. Set <code>CertificateArn</code> to the certificate ARN but do not set <code>IsDefault</code>.</p> <p>To create a certificate list for the listener, use <a>AddListenerCertificates</a>.</p>
   */
  Certificates?: Array<_Certificate> | Iterable<_Certificate>;

  /**
   * <p>The actions for the default rule. The rule must include one forward action or one or more fixed-response actions.</p> <p>If the action type is <code>forward</code>, you specify a target group. The protocol of the target group must be HTTP or HTTPS for an Application Load Balancer. The protocol of the target group must be TCP, TLS, UDP, or TCP_UDP for a Network Load Balancer.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-oidc</code>, you authenticate users through an identity provider that is OpenID Connect (OIDC) compliant.</p> <p>[HTTPS listeners] If the action type is <code>authenticate-cognito</code>, you authenticate users through the user pools supported by Amazon Cognito.</p> <p>[Application Load Balancer] If the action type is <code>redirect</code>, you redirect specified client requests from one URL to another.</p> <p>[Application Load Balancer] If the action type is <code>fixed-response</code>, you drop specified client requests and return a custom HTTP response.</p>
   */
  DefaultActions: Array<_Action> | Iterable<_Action>;

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
