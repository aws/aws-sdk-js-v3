import {
  _ResourceRecord,
  _UnmarshalledResourceRecord
} from "./_ResourceRecord";

/**
 * <p>Contains information about the validation of each domain name in the certificate.</p>
 */
export interface _DomainValidation {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate. For example, <code>www.example.com</code> or <code>example.com</code>. </p>
   */
  DomainName: string;

  /**
   * <p>A list of email addresses that ACM used to send domain validation emails.</p>
   */
  ValidationEmails?: Array<string> | Iterable<string>;

  /**
   * <p>The domain name that ACM used to send domain validation emails.</p>
   */
  ValidationDomain?: string;

  /**
   * <p>The validation status of the domain name. This can be one of the following values:</p> <ul> <li> <p> <code>PENDING_VALIDATION</code> </p> </li> <li> <p> <code/>SUCCESS</p> </li> <li> <p> <code/>FAILED</p> </li> </ul>
   */
  ValidationStatus?: "PENDING_VALIDATION" | "SUCCESS" | "FAILED" | string;

  /**
   * <p>Contains the CNAME record that you add to your DNS database for domain validation. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p>
   */
  ResourceRecord?: _ResourceRecord;

  /**
   * <p>Specifies the domain validation method.</p>
   */
  ValidationMethod?: "EMAIL" | "DNS" | string;
}

export interface _UnmarshalledDomainValidation extends _DomainValidation {
  /**
   * <p>A list of email addresses that ACM used to send domain validation emails.</p>
   */
  ValidationEmails?: Array<string>;

  /**
   * <p>Contains the CNAME record that you add to your DNS database for domain validation. For more information, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html">Use DNS to Validate Domain Ownership</a>.</p>
   */
  ResourceRecord?: _UnmarshalledResourceRecord;
}
