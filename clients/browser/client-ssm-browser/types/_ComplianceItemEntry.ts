/**
 * <p>Information about a compliance item.</p>
 */
export interface _ComplianceItemEntry {
  /**
   * <p>The compliance item ID. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article.</p>
   */
  Id?: string;

  /**
   * <p>The title of the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services. </p>
   */
  Title?: string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.</p>
   */
  Severity:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   */
  Status: "COMPLIANT" | "NON_COMPLIANT" | string;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledComplianceItemEntry extends _ComplianceItemEntry {
  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string };
}
