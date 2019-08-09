import { _PatchFilterGroup } from "./_PatchFilterGroup";
import { _PatchRuleGroup } from "./_PatchRuleGroup";
import { _PatchSource } from "./_PatchSource";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePatchBaselineInput shape
 */
export interface UpdatePatchBaselineInput {
  /**
   * <p>The ID of the patch baseline to update.</p>
   */
  BaselineId: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>A set of global filters used to include patches in the baseline.</p>
   */
  GlobalFilters?: _PatchFilterGroup;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: _PatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p> <p>For information about accepted formats for lists of approved patches and rejected patches, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  ApprovedPatches?: Array<string> | Iterable<string>;

  /**
   * <p>Assigns a new compliance severity level to an existing patch baseline.</p>
   */
  ApprovedPatchesComplianceLevel?:
    | "CRITICAL"
    | "HIGH"
    | "MEDIUM"
    | "LOW"
    | "INFORMATIONAL"
    | "UNSPECIFIED"
    | string;

  /**
   * <p>Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.</p>
   */
  ApprovedPatchesEnableNonSecurity?: boolean;

  /**
   * <p>A list of explicitly rejected patches for the baseline.</p> <p>For information about accepted formats for lists of approved patches and rejected patches, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html">Package Name Formats for Approved and Rejected Patch Lists</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  RejectedPatches?: Array<string> | Iterable<string>;

  /**
   * <p>The action for Patch Manager to take on patches included in the RejectedPackages list.</p> <ul> <li> <p> <b>ALLOW_AS_DEPENDENCY</b>: A package in the Rejected patches list is installed only if it is a dependency of another package. It is considered compliant with the patch baseline, and its status is reported as <i>InstalledOther</i>. This is the default action if no option is specified.</p> </li> <li> <p> <b>BLOCK</b>: Packages in the RejectedPatches list, and packages that include them as dependencies, are not installed under any circumstances. If a package was installed before it was added to the Rejected patches list, it is considered non-compliant with the patch baseline, and its status is reported as <i>InstalledRejected</i>.</p> </li> </ul>
   */
  RejectedPatchesAction?: "ALLOW_AS_DEPENDENCY" | "BLOCK" | string;

  /**
   * <p>A description of the patch baseline.</p>
   */
  Description?: string;

  /**
   * <p>Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: Array<_PatchSource> | Iterable<_PatchSource>;

  /**
   * <p>If True, then all fields that are required by the CreatePatchBaseline action are also required for this API request. Optional fields that are not specified are set to null.</p>
   */
  Replace?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
