/**
 * <p>Describes the parameters of a database.</p>
 */
export interface _RelationalDatabaseParameter {
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  allowedValues?: string;

  /**
   * <p>Indicates when parameter updates are applied.</p> <p>Can be <code>immediate</code> or <code>pending-reboot</code>.</p>
   */
  applyMethod?: string;

  /**
   * <p>Specifies the engine-specific parameter type.</p>
   */
  applyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  dataType?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  description?: string;

  /**
   * <p>A Boolean value indicating whether the parameter can be modified.</p>
   */
  isModifiable?: boolean;

  /**
   * <p>Specifies the name of the parameter.</p>
   */
  parameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  parameterValue?: string;
}

export type _UnmarshalledRelationalDatabaseParameter = _RelationalDatabaseParameter;
