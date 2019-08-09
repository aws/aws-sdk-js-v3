/**
 * <p>The list of supported product configurations which allow user-supplied arguments. EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.</p>
 */
export interface _SupportedProductConfig {
  /**
   * <p>The name of the product configuration.</p>
   */
  Name?: string;

  /**
   * <p>The list of user-supplied arguments.</p>
   */
  Args?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSupportedProductConfig
  extends _SupportedProductConfig {
  /**
   * <p>The list of user-supplied arguments.</p>
   */
  Args?: Array<string>;
}
