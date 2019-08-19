import { _EngineVersion, _UnmarshalledEngineVersion } from "./_EngineVersion";

/**
 * Types of broker engines.
 */
export interface _BrokerEngineType {
  /**
   * The type of broker engine.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * The list of engine versions.
   */
  EngineVersions?: Array<_EngineVersion> | Iterable<_EngineVersion>;
}

export interface _UnmarshalledBrokerEngineType extends _BrokerEngineType {
  /**
   * The list of engine versions.
   */
  EngineVersions?: Array<_UnmarshalledEngineVersion>;
}
