/**
 * <p>Information about pipeline reprocessing.</p>
 */
export interface _ReprocessingSummary {
  /**
   * <p>The 'reprocessingId' returned by "StartPipelineReprocessing".</p>
   */
  id?: string;

  /**
   * <p>The status of the pipeline reprocessing.</p>
   */
  status?: "RUNNING" | "SUCCEEDED" | "CANCELLED" | "FAILED" | string;

  /**
   * <p>The time the pipeline reprocessing was created.</p>
   */
  creationTime?: Date | string | number;
}

export interface _UnmarshalledReprocessingSummary extends _ReprocessingSummary {
  /**
   * <p>The time the pipeline reprocessing was created.</p>
   */
  creationTime?: Date;
}
