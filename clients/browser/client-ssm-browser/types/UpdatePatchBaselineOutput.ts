import { _UnmarshalledPatchFilterGroup } from "./_PatchFilterGroup";
import { _UnmarshalledPatchRuleGroup } from "./_PatchRuleGroup";
import { _UnmarshalledPatchSource } from "./_PatchSource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePatchBaselineOutput shape
 */
export interface UpdatePatchBaselineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the deleted patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch baseline.</p>
   */
  Name?: string;

  /**
   * <p>The operating system rule used by the updated patch baseline.</p>
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
   * <p>A set of global filters used to exclude patches from the baseline.</p>
   */
  GlobalFilters?: _UnmarshalledPatchFilterGroup;

  /**
   * <p>A set of rules used to include patches in the baseline.</p>
   */
  ApprovalRules?: _UnmarshalledPatchRuleGroup;

  /**
   * <p>A list of explicitly approved patches for the baseline.</p>
   */
  ApprovedPatches?: Array<string>;

  /**
   * <p>The compliance severity level assigned to the patch baseline after the update completed.</p>
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
   * <p>A list of explicitly rejected patches for the baseline.</p>
   */
  RejectedPatches?: Array<string>;

  /**
   * <p>The action specified to take on patches included in the RejectedPatches list. A patch can be allowed only if it is a dependency of another package, or blocked entirely along with packages that include it as a dependency.</p>
   */
  RejectedPatchesAction?: "ALLOW_AS_DEPENDENCY" | "BLOCK" | string;

  /**
   * <p>The date when the patch baseline was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The date when the patch baseline was last modified.</p>
   */
  ModifiedDate?: Date;

  /**
   * <p>A description of the Patch Baseline.</p>
   */
  Description?: string;

  /**
   * <p>Information about the patches to use to update the instances, including target operating systems and source repositories. Applies to Linux instances only.</p>
   */
  Sources?: Array<_UnmarshalledPatchSource>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
