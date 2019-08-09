/**
 * <p>Information for one billing record.</p>
 */
export interface _BillingRecord {
  /**
   * <p>The name of the domain that the billing record applies to. If the domain name contains characters other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode. For more information, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html">DNS Domain Name Format</a> in the <i>Amazon Route 53 Developer Guidezzz</i>.</p>
   */
  DomainName?: string;

  /**
   * <p>The operation that you were charged for.</p>
   */
  Operation?:
    | "REGISTER_DOMAIN"
    | "DELETE_DOMAIN"
    | "TRANSFER_IN_DOMAIN"
    | "UPDATE_DOMAIN_CONTACT"
    | "UPDATE_NAMESERVER"
    | "CHANGE_PRIVACY_PROTECTION"
    | "DOMAIN_LOCK"
    | "ENABLE_AUTORENEW"
    | "DISABLE_AUTORENEW"
    | "ADD_DNSSEC"
    | "REMOVE_DNSSEC"
    | "EXPIRE_DOMAIN"
    | "TRANSFER_OUT_DOMAIN"
    | "CHANGE_DOMAIN_OWNER"
    | "RENEW_DOMAIN"
    | "PUSH_DOMAIN"
    | string;

  /**
   * <p>The ID of the invoice that is associated with the billing record.</p>
   */
  InvoiceId?: string;

  /**
   * <p>The date that the operation was billed, in Unix format.</p>
   */
  BillDate?: Date | string | number;

  /**
   * <p>The price that you were charged for the operation, in US dollars.</p> <p>Example value: 12.0</p>
   */
  Price?: number;
}

export interface _UnmarshalledBillingRecord extends _BillingRecord {
  /**
   * <p>The date that the operation was billed, in Unix format.</p>
   */
  BillDate?: Date;
}
