import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * Option for host instance type.
 */
export interface _BrokerInstanceOption {
  /**
   * The list of available az.
   */
  AvailabilityZones?: Array<_AvailabilityZone> | Iterable<_AvailabilityZone>;

  /**
   * The type of broker engine.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * The type of broker instance.
   */
  HostInstanceType?: string;

  /**
   * The list of supported engine versions.
   */
  SupportedEngineVersions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBrokerInstanceOption
  extends _BrokerInstanceOption {
  /**
   * The list of available az.
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;

  /**
   * The list of supported engine versions.
   */
  SupportedEngineVersions?: Array<string>;
}
