/**
 * <p>Describes the credit option for CPU usage of a T2 or T3 instance.</p>
 */
export interface _CreditSpecification {
  /**
   * <p>The credit option for CPU usage of a T2 or T3 instance. Valid values are <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export type _UnmarshalledCreditSpecification = _CreditSpecification;
