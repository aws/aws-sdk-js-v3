/**
 * <p>An indication of whether a project creation or deletion is failed or successful.</p>
 */
export interface _ProjectStatus {
  /**
   * <p>The phase of completion for a project creation or deletion.</p>
   */
  state: string;

  /**
   * <p>In the case of a project creation or deletion failure, a reason for the failure.</p>
   */
  reason?: string;
}

export type _UnmarshalledProjectStatus = _ProjectStatus;
