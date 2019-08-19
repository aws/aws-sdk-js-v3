import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResendValidationEmailInput shape
 */
export interface ResendValidationEmailInput {
  /**
   * <p>String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the <a>RequestCertificate</a> action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form: </p> <p> <code>arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p>
   */
  CertificateArn: string;

  /**
   * <p>The fully qualified domain name (FQDN) of the certificate that needs to be validated.</p>
   */
  Domain: string;

  /**
   * <p>The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the <code>Domain</code> value or a superdomain of the <code>Domain</code> value. For example, if you requested a certificate for <code>site.subdomain.example.com</code> and specify a <b>ValidationDomain</b> of <code>subdomain.example.com</code>, ACM sends email to the domain registrant, technical contact, and administrative contact in WHOIS and the following five addresses:</p> <ul> <li> <p>admin@subdomain.example.com</p> </li> <li> <p>administrator@subdomain.example.com</p> </li> <li> <p>hostmaster@subdomain.example.com</p> </li> <li> <p>postmaster@subdomain.example.com</p> </li> <li> <p>webmaster@subdomain.example.com</p> </li> </ul>
   */
  ValidationDomain: string;

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
