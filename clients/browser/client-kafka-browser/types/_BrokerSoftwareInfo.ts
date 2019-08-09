/**
 *
 *             <p>Information about the current software installed on the cluster.</p>
 *
 */
export interface _BrokerSoftwareInfo {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the configuration used for the cluster. This field isn't visible in this preview release.</p>
   *
   */
  ConfigurationArn?: string;

  /**
   *
   *             <p>The revision of the configuration to use. This field isn't visible in this preview release.</p>
   *
   */
  ConfigurationRevision?: number;

  /**
   *
   *             <p>The version of Apache Kafka.</p>
   *
   */
  KafkaVersion?: string;
}

export type _UnmarshalledBrokerSoftwareInfo = _BrokerSoftwareInfo;
