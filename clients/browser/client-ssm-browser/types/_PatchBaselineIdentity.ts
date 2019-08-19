/**
 * <p>Defines the basic information about a patch baseline.</p>
 */
export interface _PatchBaselineIdentity {
  /**
   * <p>The ID of the patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  BaselineName?: string;

  /**
   * <p>Defines the operating system the patch baseline applies to. The Default value is WINDOWS. </p>
   */
  OperatingSystem?:
    | "WINDOWS"
    | "AMAZON_LINUX"
    | "AMAZON_LINUX_2"
    | "UBUNTU"
    | "REDHAT_ENTERPRISE_LINUX"
    | "SUSE"
    | "CENTOS"
    | string;

  /**
   * <p>The description of the patch baseline.</p>
   */
  BaselineDescription?: string;

  /**
   * <p>Whether this is the default baseline. Note that Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.</p>
   */
  DefaultBaseline?: boolean;
}

export type _UnmarshalledPatchBaselineIdentity = _PatchBaselineIdentity;
