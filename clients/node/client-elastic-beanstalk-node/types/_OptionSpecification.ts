/**
 * <p>A specification identifying an individual configuration option.</p>
 */
export interface _OptionSpecification {
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
}

export type _UnmarshalledOptionSpecification = _OptionSpecification;
