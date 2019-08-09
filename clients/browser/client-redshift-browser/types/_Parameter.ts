/**
 * <p>Describes a parameter in a cluster parameter group.</p>
 */
export interface _Parameter {
  /**
   * <p>The name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>The value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>A description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The source of the parameter value, such as "engine-default" or "user".</p>
   */
  Source?: string;

  /**
   * <p>The data type of the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>The valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Specifies how to apply the WLM configuration parameter. Some properties can be applied dynamically, while other properties require that any associated clusters be rebooted for the configuration changes to be applied. For more information about parameters and parameter groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  ApplyType?: "static" | "dynamic" | string;

  /**
   * <p>If <code>true</code>, the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed. </p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;
}

export type _UnmarshalledParameter = _Parameter;
