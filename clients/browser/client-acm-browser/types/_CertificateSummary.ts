/**
 * <p>This structure is returned in the response object of <a>ListCertificates</a> action. </p>
 */
export interface _CertificateSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the certificate. This is of the form:</p> <p> <code>arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012</code> </p> <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a>. </p>
   */
  CertificateArn?: string;

  /**
   * <p>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.</p>
   */
  DomainName?: string;
}

export type _UnmarshalledCertificateSummary = _CertificateSummary;
