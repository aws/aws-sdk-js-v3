/**
 * <p>Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.</p>
 */
export interface _PatchComplianceData {
  /**
   * <p>The title of the patch.</p>
   */
  Title: string;

  /**
   * <p>The operating system-specific ID of the patch.</p>
   */
  KBId: string;

  /**
   * <p>The classification of the patch (for example, SecurityUpdates, Updates, CriticalUpdates).</p>
   */
  Classification: string;

  /**
   * <p>The severity of the patch (for example, Critical, Important, Moderate).</p>
   */
  Severity: string;

  /**
   * <p>The state of the patch on the instance, such as INSTALLED or FAILED.</p> <p>For descriptions of each patch state, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-compliance-about.html#sysman-compliance-monitor-patch">About Patch Compliance</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  State:
    | "INSTALLED"
    | "INSTALLED_OTHER"
    | "INSTALLED_REJECTED"
    | "MISSING"
    | "NOT_APPLICABLE"
    | "FAILED"
    | string;

  /**
   * <p>The date/time the patch was installed on the instance. Note that not all operating systems provide this level of information.</p>
   */
  InstalledTime: Date | string | number;
}

export interface _UnmarshalledPatchComplianceData extends _PatchComplianceData {
  /**
   * <p>The date/time the patch was installed on the instance. Note that not all operating systems provide this level of information.</p>
   */
  InstalledTime: Date;
}
