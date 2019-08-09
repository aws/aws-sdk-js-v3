/**
 * <p>The severity of the finding.</p>
 */
export interface _Severity {
  /**
   * <p>The native severity as defined by the AWS service or integrated partner product that generated the finding.</p>
   */
  Product?: number;

  /**
   * <p>The normalized severity of a finding.</p>
   */
  Normalized: number;
}

export type _UnmarshalledSeverity = _Severity;
