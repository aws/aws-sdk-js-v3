import { _AbortCriteria, _UnmarshalledAbortCriteria } from "./_AbortCriteria";

/**
 * <p>Details of abort criteria to abort the job.</p>
 */
export interface _AbortConfig {
  /**
   * <p>The list of abort criteria to define rules to abort the job.</p>
   */
  criteriaList: Array<_AbortCriteria> | Iterable<_AbortCriteria>;
}

export interface _UnmarshalledAbortConfig extends _AbortConfig {
  /**
   * <p>The list of abort criteria to define rules to abort the job.</p>
   */
  criteriaList: Array<_UnmarshalledAbortCriteria>;
}
