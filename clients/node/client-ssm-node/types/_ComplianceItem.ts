import {
  _ComplianceExecutionSummary,
  _UnmarshalledComplianceExecutionSummary
} from "./_ComplianceExecutionSummary";

/**
 * <p>Information about the compliance as defined by the resource type. For example, for a patch resource type, <code>Items</code> includes information about the PatchSeverity, Classification, etc.</p>
 */
export interface _ComplianceItem {
  /**
   * <p>The compliance type. For example, Association (for a State Manager association), Patch, or Custom:<code>string</code> are all valid compliance types.</p>
   */
  ComplianceType?: string;

  /**
   * <p>The type of resource. <code>ManagedInstance</code> is currently the only supported resource type.</p>
   */
  ResourceType?: string;

  /**
   * <p>An ID for the resource. For a managed instance, this is the instance ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>An ID for the compliance item. For example, if the compliance item is a Windows patch, the ID could be the number of the KB article; for example: KB4010320.</p>
   */
  Id?: string;

  /**
   * <p>A title for the compliance item. For example, if the compliance item is a Windows patch, the title could be the title of the KB article for the patch; for example: Security Update for Active Directory Federation Services.</p>
   */
  Title?: string;

  /**
   * <p>The status of the compliance item. An item is either COMPLIANT or NON_COMPLIANT.</p>
   */
  Status?: "COMPLIANT" | "NON_COMPLIANT" | string;

  /**
   * <p>The severity of the compliance status. Severity can be one of the following: Critical, High, Medium, Low, Informational, Unspecified.</p>
   */
  Severity?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time.</p>
   */
  ExecutionSummary?: _ComplianceExecutionSummary;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledComplianceItem extends _ComplianceItem {
  /**
   * <p>A summary for the compliance item. The summary includes an execution ID, the execution type (for example, command), and the execution time.</p>
   */
  ExecutionSummary?: _UnmarshalledComplianceExecutionSummary;

  /**
   * <p>A "Key": "Value" tag combination for the compliance item.</p>
   */
  Details?: { [key: string]: string };
}
