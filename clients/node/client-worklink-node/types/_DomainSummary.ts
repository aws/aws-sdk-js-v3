/**
 * <p>The summary of the domain.</p>
 */
export interface _DomainSummary {
  /**
   * <p>The name of the domain.</p>
   */
  DomainName: string;

  /**
   * <p>The name to display.</p>
   */
  DisplayName?: string;

  /**
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date | string | number;

  /**
   * <p>The status of the domain.</p>
   */
  DomainStatus:
    | "PENDING_VALIDATION"
    | "ASSOCIATING"
    | "ACTIVE"
    | "INACTIVE"
    | "DISASSOCIATING"
    | "DISASSOCIATED"
    | "FAILED_TO_ASSOCIATE"
    | "FAILED_TO_DISASSOCIATE"
    | string;
}

export interface _UnmarshalledDomainSummary extends _DomainSummary {
  /**
   * <p>The time that the domain was created.</p>
   */
  CreatedTime: Date;
}
