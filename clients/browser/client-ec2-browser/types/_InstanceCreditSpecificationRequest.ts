/**
 * <p>Describes the credit option for CPU usage of a T2 or T3 instance.</p>
 */
export interface _InstanceCreditSpecificationRequest {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The credit option for CPU usage of the instance. Valid values are <code>standard</code> and <code>unlimited</code>.</p>
   */
  CpuCredits?: string;
}

export type _UnmarshalledInstanceCreditSpecificationRequest = _InstanceCreditSpecificationRequest;
