import { _DomainValidationOption } from "./_DomainValidationOption";
import { _CertificateOptions } from "./_CertificateOptions";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RequestCertificateInput shape
 */
export interface RequestCertificateInput {
  /**
   * <p> Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com. </p> <p> The first domain name you enter cannot exceed 63 octets, including periods. Each subsequent Subject Alternative Name (SAN), however, can be up to 253 octets in length. </p>
   */
  DomainName: string;

  /**
   * <p>The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">validate with DNS</a> or <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html">validate with email</a>. We recommend that you use DNS validation. </p>
   */
  ValidationMethod?: "EMAIL" | "DNS" | string;

  /**
   * <p>Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the <code>DomainName</code> field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial limit is 10 domain names. If you need more than 10 names, you must request a limit increase. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-limits.html">Limits</a>.</p> <p> The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples: </p> <ul> <li> <p> <code>(63 octets).(63 octets).(63 octets).(61 octets)</code> is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.</p> </li> <li> <p> <code>(64 octets).(63 octets).(63 octets).(61 octets)</code> is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.</p> </li> <li> <p> <code>(63 octets).(63 octets).(63 octets).(62 octets)</code> is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.</p> </li> </ul>
   */
  SubjectAlternativeNames?: Array<string> | Iterable<string>;

  /**
   * <p>Customer chosen string that can be used to distinguish between calls to <code>RequestCertificate</code>. Idempotency tokens time out after one hour. Therefore, if you call <code>RequestCertificate</code> multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>The domain name that you want ACM to use to send you emails so that you can validate domain ownership.</p>
   */
  DomainValidationOptions?:
    | Array<_DomainValidationOption>
    | Iterable<_DomainValidationOption>;

  /**
   * <p>Currently, you can use this parameter to specify whether to add the certificate to a certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-bestpractices.html#best-practices-transparency">Opting Out of Certificate Transparency Logging</a>.</p>
   */
  Options?: _CertificateOptions;

  /**
   * <p>The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the <a href="https://docs.aws.amazon.com/acm-pca/latest/userguide/PcaWelcome.html">AWS Certificate Manager Private Certificate Authority (PCA)</a> user guide. The ARN must have the following form: </p> <p> <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> </p>
   */
  CertificateAuthorityArn?: string;

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
