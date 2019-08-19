/**
 * Returns information about all brokers.
 */
export interface _BrokerInstance {
  /**
   * The URL of the broker's ActiveMQ Web Console.
   */
  ConsoleURL?: string;

  /**
   * The broker's wire-level protocol endpoints.
   */
  Endpoints?: Array<string> | Iterable<string>;

  /**
   * The IP address of the Elastic Network Interface (ENI) attached to the broker.
   */
  IpAddress?: string;
}

export interface _UnmarshalledBrokerInstance extends _BrokerInstance {
  /**
   * The broker's wire-level protocol endpoints.
   */
  Endpoints?: Array<string>;
}
