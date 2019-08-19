import {
  _PatchFilterGroup,
  _UnmarshalledPatchFilterGroup
} from "./_PatchFilterGroup";

/**
 * <p>Defines an approval rule for a patch baseline.</p>
 */
export interface _PatchRule {
  /**
   * <p>The patch filter group that defines the criteria for the rule.</p>
   */
  PatchFilterGroup: _PatchFilterGroup;

  /**
   * <p>A compliance severity level for all approved patches in a patch baseline. Valid compliance severity levels include the following: Unspecified, Critical, High, Medium, Low, and Informational.</p>
   */
  ComplianceLevel?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of <code>7</code> means that patches are approved seven days after they are released. </p>
   */
  ApproveAfterDays: number;

  /**
   * <p>For instances identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is 'false'. Applies to Linux instances only.</p>
   */
  EnableNonSecurity?: boolean;
}

export interface _UnmarshalledPatchRule extends _PatchRule {
  /**
   * <p>The patch filter group that defines the criteria for the rule.</p>
   */
  PatchFilterGroup: _UnmarshalledPatchFilterGroup;
}
