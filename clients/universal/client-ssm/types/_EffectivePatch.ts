import { _Patch, _UnmarshalledPatch } from "./_Patch";
import { _PatchStatus, _UnmarshalledPatchStatus } from "./_PatchStatus";

/**
 * <p>The EffectivePatch structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.</p>
 */
export interface _EffectivePatch {
  /**
   * <p>Provides metadata for a patch, including information such as the KB ID, severity, classification and a URL for where more information can be obtained about the patch.</p>
   */
  Patch?: _Patch;

  /**
   * <p>The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.</p>
   */
  PatchStatus?: _PatchStatus;
}

export interface _UnmarshalledEffectivePatch extends _EffectivePatch {
  /**
   * <p>Provides metadata for a patch, including information such as the KB ID, severity, classification and a URL for where more information can be obtained about the patch.</p>
   */
  Patch?: _UnmarshalledPatch;

  /**
   * <p>The status of the patch in a patch baseline. This includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.</p>
   */
  PatchStatus?: _UnmarshalledPatchStatus;
}
