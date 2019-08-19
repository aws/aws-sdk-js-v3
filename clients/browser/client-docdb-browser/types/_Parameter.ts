/**
 * <p>Detailed information about an individual parameter.</p>
 */
export interface _Parameter {
  /**
   * <p>Specifies the name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Indicates the source of the parameter value.</p>
   */
  Source?: string;

  /**
   * <p>Specifies the engine-specific parameters type.</p>
   */
  ApplyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. </p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Indicates when to apply parameter updates.</p>
   */
  ApplyMethod?: "immediate" | "pending-reboot" | string;
}

export type _UnmarshalledParameter = _Parameter;
