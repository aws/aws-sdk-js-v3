/**
 * <p>The termination health details, including the source IP address and timestamp of the last successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface _TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The source IP address.</p>
   */
  Source?: string;
}

export interface _UnmarshalledTerminationHealth extends _TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;
}
