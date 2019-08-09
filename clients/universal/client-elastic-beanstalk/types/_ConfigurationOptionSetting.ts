/**
 * <p> A specification identifying an individual configuration option along with its current value. For a list of possible option values, go to <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>. </p>
 */
export interface _ConfigurationOptionSetting {
  /**
   * <p>A unique resource name for a time-based scaling configuration option.</p>
   */
  ResourceName?: string;

  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  OptionName?: string;

  /**
   * <p>The current value for the configuration option.</p>
   */
  Value?: string;
}

export type _UnmarshalledConfigurationOptionSetting = _ConfigurationOptionSetting;
