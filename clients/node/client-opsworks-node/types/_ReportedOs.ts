/**
 * <p>A registered instance's reported operating system.</p>
 */
export interface _ReportedOs {
  /**
   * <p>The operating system family.</p>
   */
  Family?: string;

  /**
   * <p>The operating system name.</p>
   */
  Name?: string;

  /**
   * <p>The operating system version.</p>
   */
  Version?: string;
}

export type _UnmarshalledReportedOs = _ReportedOs;
