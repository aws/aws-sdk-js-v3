import { _PatchFilter, _UnmarshalledPatchFilter } from "./_PatchFilter";

/**
 * <p>A set of patch filters, typically used for approval rules.</p>
 */
export interface _PatchFilterGroup {
  /**
   * <p>The set of patch filters that make up the group.</p>
   */
  PatchFilters: Array<_PatchFilter> | Iterable<_PatchFilter>;
}

export interface _UnmarshalledPatchFilterGroup extends _PatchFilterGroup {
  /**
   * <p>The set of patch filters that make up the group.</p>
   */
  PatchFilters: Array<_UnmarshalledPatchFilter>;
}
