/**
 * <p>An object that contains information about the DKIM configuration for an email identity.</p>
 */
export interface _DkimAttributes {
  /**
   * <p>If the value is <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. If the value is <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;

  /**
   * <p>Describes whether or not Amazon Pinpoint has successfully located the DKIM records in the DNS records for the domain. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – Amazon Pinpoint hasn't yet located the DKIM records in the DNS configuration for the domain, but will continue to attempt to locate them.</p> </li> <li> <p> <code>SUCCESS</code> – Amazon Pinpoint located the DKIM records in the DNS configuration for the domain and determined that they're correct. Amazon Pinpoint can now send DKIM-signed email from the identity.</p> </li> <li> <p> <code>FAILED</code> – Amazon Pinpoint was unable to locate the DKIM records in the DNS settings for the domain, and won't continue to search for them.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which prevented Amazon Pinpoint from determining the DKIM status for the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – Amazon Pinpoint hasn't yet started searching for the DKIM records in the DKIM records for the domain.</p> </li> </ul>
   */
  Status?:
    | "PENDING"
    | "SUCCESS"
    | "FAILED"
    | "TEMPORARY_FAILURE"
    | "NOT_STARTED"
    | string;

  /**
   * <p>A set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon Pinpoint detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. Amazon Pinpoint usually detects these records within about 72 hours of adding them to the DNS configuration for your domain.</p>
   */
  Tokens?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDkimAttributes extends _DkimAttributes {
  /**
   * <p>A set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon Pinpoint detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. Amazon Pinpoint usually detects these records within about 72 hours of adding them to the DNS configuration for your domain.</p>
   */
  Tokens?: Array<string>;
}
