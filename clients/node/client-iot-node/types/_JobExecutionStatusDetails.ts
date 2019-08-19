/**
 * <p>Details of the job execution status.</p>
 */
export interface _JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledJobExecutionStatusDetails
  extends _JobExecutionStatusDetails {
  /**
   * <p>The job execution status.</p>
   */
  detailsMap?: { [key: string]: string };
}
