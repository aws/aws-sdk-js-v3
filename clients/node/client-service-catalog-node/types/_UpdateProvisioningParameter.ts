/**
 * <p>The parameter key-value pair used to update a provisioned product.</p>
 */
export interface _UpdateProvisioningParameter {
  /**
   * <p>The parameter key.</p>
   */
  Key?: string;

  /**
   * <p>The parameter value.</p>
   */
  Value?: string;

  /**
   * <p>If set to true, <code>Value</code> is ignored and the previous parameter value is kept.</p>
   */
  UsePreviousValue?: boolean;
}

export type _UnmarshalledUpdateProvisioningParameter = _UpdateProvisioningParameter;
