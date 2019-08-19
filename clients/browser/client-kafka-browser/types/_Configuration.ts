import {
  _ConfigurationRevision,
  _UnmarshalledConfigurationRevision
} from "./_ConfigurationRevision";

/**
 *
 *             <p>Represents an MSK Configuration.</p>
 *
 */
export interface _Configuration {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the configuration.</p>
   *
   */
  Arn: string;

  /**
   *
   *             <p>The time when the configuration was created.</p>
   *
   */
  CreationTime: Date | string | number;

  /**
   *
   *             <p>The description of the configuration.</p>
   *
   */
  Description: string;

  /**
   *
   *             <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   *
   */
  KafkaVersions: Array<string> | Iterable<string>;

  /**
   *
   *             <p>Latest revision of the configuration.</p>
   *
   */
  LatestRevision: _ConfigurationRevision;

  /**
   *
   *             <p>The name of the configuration.</p>
   *
   */
  Name: string;
}

export interface _UnmarshalledConfiguration extends _Configuration {
  /**
   *
   *             <p>The time when the configuration was created.</p>
   *
   */
  CreationTime: Date;

  /**
   *
   *             <p>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</p>
   *
   */
  KafkaVersions: Array<string>;

  /**
   *
   *             <p>Latest revision of the configuration.</p>
   *
   */
  LatestRevision: _UnmarshalledConfigurationRevision;
}
