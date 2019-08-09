/**
 * <p>Contains information about the domain names that you want ACM to use to send you emails that enable you to validate domain ownership.</p>
 */
export interface _DomainValidationOption {
  /**
   * <p>A fully qualified domain name (FQDN) in the certificate request.</p>
   */
  DomainName: string;

  /**
   * <p>The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the <code>DomainName</code> value or a superdomain of the <code>DomainName</code> value. For example, if you request a certificate for <code>testing.example.com</code>, you can specify <code>example.com</code> for this value. In that case, ACM sends domain validation emails to the following five addresses:</p> <ul> <li> <p>admin@example.com</p> </li> <li> <p>administrator@example.com</p> </li> <li> <p>hostmaster@example.com</p> </li> <li> <p>postmaster@example.com</p> </li> <li> <p>webmaster@example.com</p> </li> </ul>
   */
  ValidationDomain: string;
}

export type _UnmarshalledDomainValidationOption = _DomainValidationOption;
