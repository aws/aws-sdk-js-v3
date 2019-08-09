/**
 * <p>Summary information about one domain.</p>
 */
export interface _DomainSummary {
  /**
   * <p>The name of the domain that the summary information applies to.</p>
   */
  DomainName: string;

  /**
   * <p>Indicates whether the domain is automatically renewed upon expiration.</p>
   */
  AutoRenew?: boolean;

  /**
   * <p>Indicates whether a domain is locked from unauthorized transfer to another party.</p>
   */
  TransferLock?: boolean;

  /**
   * <p>Expiration date of the domain in Coordinated Universal Time (UTC).</p>
   */
  Expiry?: Date | string | number;
}

export interface _UnmarshalledDomainSummary extends _DomainSummary {
  /**
   * <p>Expiration date of the domain in Coordinated Universal Time (UTC).</p>
   */
  Expiry?: Date;
}
