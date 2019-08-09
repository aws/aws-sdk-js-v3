import {
  _BrokerSoftwareInfo,
  _UnmarshalledBrokerSoftwareInfo
} from "./_BrokerSoftwareInfo";

/**
 *
 *             <p>BrokerNodeInfo</p>
 *
 */
export interface _BrokerNodeInfo {
  /**
   *
   *             <p>The attached elastic network interface of the broker.</p>
   *
   */
  AttachedENIId?: string;

  /**
   *
   *             <p>The ID of the broker.</p>
   *
   */
  BrokerId?: number;

  /**
   *
   *             <p>The client subnet to which this broker node belongs.</p>
   *
   */
  ClientSubnet?: string;

  /**
   *
   *             <p>The virtual private cloud (VPC) of the client.</p>
   *
   */
  ClientVpcIpAddress?: string;

  /**
   *
   *             <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   *
   */
  CurrentBrokerSoftwareInfo?: _BrokerSoftwareInfo;

  /**
   *
   *             <p>Endpoints for accessing the broker.</p>
   *
   */
  Endpoints?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledBrokerNodeInfo extends _BrokerNodeInfo {
  /**
   *
   *             <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   *
   */
  CurrentBrokerSoftwareInfo?: _UnmarshalledBrokerSoftwareInfo;

  /**
   *
   *             <p>Endpoints for accessing the broker.</p>
   *
   */
  Endpoints?: Array<string>;
}
