import {
  _OptionRestrictionRegex,
  _UnmarshalledOptionRestrictionRegex
} from "./_OptionRestrictionRegex";

/**
 * <p>Describes the possible values for a configuration option.</p>
 */
export interface _ConfigurationOptionDescription {
  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  Name?: string;

  /**
   * <p>The default value for this configuration option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>An indication of which action is required if the value for this configuration option changes:</p> <ul> <li> <p> <code>NoInterruption</code> : There is no interruption to the environment or application availability.</p> </li> <li> <p> <code>RestartEnvironment</code> : The environment is entirely restarted, all AWS resources are deleted and recreated, and the environment is unavailable during the process.</p> </li> <li> <p> <code>RestartApplicationServer</code> : The environment is available the entire time. However, a short application outage occurs when the application servers on the running Amazon EC2 instances are restarted.</p> </li> </ul>
   */
  ChangeSeverity?: string;

  /**
   * <p>An indication of whether the user defined this configuration option:</p> <ul> <li> <p> <code>true</code> : This configuration option was defined by the user. It is a valid choice for specifying if this as an <code>Option to Remove</code> when updating configuration settings. </p> </li> <li> <p> <code>false</code> : This configuration was not defined by the user.</p> </li> </ul> <p> Constraint: You can remove only <code>UserDefined</code> options from a configuration. </p> <p> Valid Values: <code>true</code> | <code>false</code> </p>
   */
  UserDefined?: boolean;

  /**
   * <p>An indication of which type of values this option has and whether it is allowable to select one or more than one of the possible values:</p> <ul> <li> <p> <code>Scalar</code> : Values for this option are a single selection from the possible values, or an unformatted string, or numeric value governed by the <code>MIN/MAX/Regex</code> constraints.</p> </li> <li> <p> <code>List</code> : Values for this option are multiple selections from the possible values.</p> </li> <li> <p> <code>Boolean</code> : Values for this option are either <code>true</code> or <code>false</code> .</p> </li> <li> <p> <code>Json</code> : Values for this option are a JSON representation of a <code>ConfigDocument</code>.</p> </li> </ul>
   */
  ValueType?: "Scalar" | "List" | string;

  /**
   * <p>If specified, values for the configuration option are selected from this list.</p>
   */
  ValueOptions?: Array<string> | Iterable<string>;

  /**
   * <p>If specified, the configuration option must be a numeric value greater than this value.</p>
   */
  MinValue?: number;

  /**
   * <p>If specified, the configuration option must be a numeric value less than this value.</p>
   */
  MaxValue?: number;

  /**
   * <p>If specified, the configuration option must be a string value no longer than this value.</p>
   */
  MaxLength?: number;

  /**
   * <p>If specified, the configuration option must be a string value that satisfies this regular expression.</p>
   */
  Regex?: _OptionRestrictionRegex;
}

export interface _UnmarshalledConfigurationOptionDescription
  extends _ConfigurationOptionDescription {
  /**
   * <p>If specified, values for the configuration option are selected from this list.</p>
   */
  ValueOptions?: Array<string>;

  /**
   * <p>If specified, the configuration option must be a string value that satisfies this regular expression.</p>
   */
  Regex?: _UnmarshalledOptionRestrictionRegex;
}
