import {
  _PatchBaselineIdentity,
  _UnmarshalledPatchBaselineIdentity
} from "./_PatchBaselineIdentity";

/**
 * <p>The mapping between a patch group and the patch baseline the patch group is registered with.</p>
 */
export interface _PatchGroupPatchBaselineMapping {
  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;

  /**
   * <p>The patch baseline the patch group is registered with.</p>
   */
  BaselineIdentity?: _PatchBaselineIdentity;
}

export interface _UnmarshalledPatchGroupPatchBaselineMapping
  extends _PatchGroupPatchBaselineMapping {
  /**
   * <p>The patch baseline the patch group is registered with.</p>
   */
  BaselineIdentity?: _UnmarshalledPatchBaselineIdentity;
}
