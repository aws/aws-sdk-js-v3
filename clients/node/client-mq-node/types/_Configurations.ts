import {
  _ConfigurationId,
  _UnmarshalledConfigurationId
} from "./_ConfigurationId";

/**
 * Broker configuration information
 */
export interface _Configurations {
  /**
   * The current configuration of the broker.
   */
  Current?: _ConfigurationId;

  /**
   * The history of configurations applied to the broker.
   */
  History?: Array<_ConfigurationId> | Iterable<_ConfigurationId>;

  /**
   * The pending configuration of the broker.
   */
  Pending?: _ConfigurationId;
}

export interface _UnmarshalledConfigurations extends _Configurations {
  /**
   * The current configuration of the broker.
   */
  Current?: _UnmarshalledConfigurationId;

  /**
   * The history of configurations applied to the broker.
   */
  History?: Array<_UnmarshalledConfigurationId>;

  /**
   * The pending configuration of the broker.
   */
  Pending?: _UnmarshalledConfigurationId;
}
