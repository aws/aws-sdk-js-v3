/**
 * <p>Defines a filter used in Patch Manager APIs.</p>
 */
export interface _PatchOrchestratorFilter {
  /**
   * <p>The key for the filter.</p>
   */
  Key?: string;

  /**
   * <p>The value for the filter.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledPatchOrchestratorFilter
  extends _PatchOrchestratorFilter {
  /**
   * <p>The value for the filter.</p>
   */
  Values?: Array<string>;
}
