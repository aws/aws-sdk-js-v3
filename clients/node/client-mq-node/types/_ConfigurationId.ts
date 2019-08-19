/**
 * A list of information about the configuration.
 */
export interface _ConfigurationId {
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * The revision number of the configuration.
   */
  Revision?: number;
}

export type _UnmarshalledConfigurationId = _ConfigurationId;
