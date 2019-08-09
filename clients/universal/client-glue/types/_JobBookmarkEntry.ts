/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface _JobBookmarkEntry {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * <p>The version of the job.</p>
   */
  Version?: number;

  /**
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;

  /**
   * <p>The unique run identifier associated with the previous job run..</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;

  /**
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;
}

export type _UnmarshalledJobBookmarkEntry = _JobBookmarkEntry;
