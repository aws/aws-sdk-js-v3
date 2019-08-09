import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface CreateTrustInput {
  /**
   * <p>The Directory ID of the AWS Managed Microsoft AD directory for which to establish the trust relationship.</p>
   */
  DirectoryId: string;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain for which to create the trust relationship.</p>
   */
  RemoteDomainName: string;

  /**
   * <p>The trust password. The must be the same password that was used when creating the trust relationship on the external domain.</p>
   */
  TrustPassword: string;

  /**
   * <p>The direction of the trust relationship.</p>
   */
  TrustDirection:
    | "One-Way: Outgoing"
    | "One-Way: Incoming"
    | "Two-Way"
    | string;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: "Forest" | "External" | string;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName.</p>
   */
  ConditionalForwarderIpAddrs?: Array<string> | Iterable<string>;

  /**
   * <p>Optional parameter to enable selective authentication for the trust.</p>
   */
  SelectiveAuth?: "Enabled" | "Disabled" | string;

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
