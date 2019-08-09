import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to create a new domain name.</p>
 */
export interface CreateDomainNameInput {
  /**
   * <p>[Required] The name of the <a>DomainName</a> resource.</p>
   */
  domainName: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>[Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.</p>
   */
  certificateBody?: string;

  /**
   * <p>[Deprecated] Your edge-optimized endpoint's domain name certificate's private key.</p>
   */
  certificatePrivateKey?: string;

  /**
   * <p>[Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.</p>
   */
  certificateChain?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>The user-friendly name of the certificate that will be used by regional endpoint for this domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>
   */
  endpointConfiguration?: _EndpointConfiguration;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: "TLS_1_0" | "TLS_1_2" | string;

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
