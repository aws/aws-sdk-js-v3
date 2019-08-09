/**
 * <p>Contains a DNS record value that you can use to can use to validate ownership or control of a domain. This is used by the <a>DescribeCertificate</a> action. </p>
 */
export interface _ResourceRecord {
  /**
   * <p>The name of the DNS record to create in your domain. This is supplied by ACM.</p>
   */
  Name: string;

  /**
   * <p>The type of DNS record. Currently this can be <code>CNAME</code>.</p>
   */
  Type: "CNAME" | string;

  /**
   * <p>The value of the CNAME record to add to your DNS database. This is supplied by ACM.</p>
   */
  Value: string;
}

export type _UnmarshalledResourceRecord = _ResourceRecord;
