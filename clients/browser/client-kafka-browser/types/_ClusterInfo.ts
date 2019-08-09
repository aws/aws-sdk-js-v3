import {
  _BrokerNodeGroupInfo,
  _UnmarshalledBrokerNodeGroupInfo
} from "./_BrokerNodeGroupInfo";
import {
  _ClientAuthentication,
  _UnmarshalledClientAuthentication
} from "./_ClientAuthentication";
import {
  _BrokerSoftwareInfo,
  _UnmarshalledBrokerSoftwareInfo
} from "./_BrokerSoftwareInfo";
import {
  _EncryptionInfo,
  _UnmarshalledEncryptionInfo
} from "./_EncryptionInfo";

/**
 *
 *             <p>Returns information about a cluster.</p>
 *
 */
export interface _ClusterInfo {
  /**
   *
   *             <p>Arn of active cluster operation.</p>
   *
   */
  ActiveOperationArn?: string;

  /**
   *
   *             <p>Information about the broker nodes.</p>
   *
   */
  BrokerNodeGroupInfo?: _BrokerNodeGroupInfo;

  /**
   *
   *             <p>Includes all client authentication information.</p>
   *
   */
  ClientAuthentication?: _ClientAuthentication;

  /**
   *
   *             <p>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</p>
   *
   */
  ClusterArn?: string;

  /**
   *
   *             <p>The name of the cluster.</p>
   *
   */
  ClusterName?: string;

  /**
   *
   *             <p>The time when the cluster was created.</p>
   *
   */
  CreationTime?: Date | string | number;

  /**
   *
   *             <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   *
   */
  CurrentBrokerSoftwareInfo?: _BrokerSoftwareInfo;

  /**
   *
   *             <p>The current version of the MSK cluster.</p>
   *
   */
  CurrentVersion?: string;

  /**
   *
   *             <p>Includes all encryption-related information.</p>
   *
   */
  EncryptionInfo?: _EncryptionInfo;

  /**
   *
   *             <p>Specifies which metrics are gathered for the MSK cluster. This property has three possible values: DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER. For a list of the metrics associated with each of these three levels of monitoring, see <a href="https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html">Monitoring</a>.</p>
   *
   */
  EnhancedMonitoring?:
    | "DEFAULT"
    | "PER_BROKER"
    | "PER_TOPIC_PER_BROKER"
    | string;

  /**
   *
   *             <p>The number of broker nodes in the cluster.</p>
   *
   */
  NumberOfBrokerNodes?: number;

  /**
   *
   *             <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   *
   */
  State?: "ACTIVE" | "CREATING" | "UPDATING" | "DELETING" | "FAILED" | string;

  /**
   *
   *             <p>Tags attached to the cluster.</p>
   *
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   *
   *             <p>The connection string to use to connect to the Apache ZooKeeper cluster.</p>
   *
   */
  ZookeeperConnectString?: string;
}

export interface _UnmarshalledClusterInfo extends _ClusterInfo {
  /**
   *
   *             <p>Information about the broker nodes.</p>
   *
   */
  BrokerNodeGroupInfo?: _UnmarshalledBrokerNodeGroupInfo;

  /**
   *
   *             <p>Includes all client authentication information.</p>
   *
   */
  ClientAuthentication?: _UnmarshalledClientAuthentication;

  /**
   *
   *             <p>The time when the cluster was created.</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *             <p>Information about the version of software currently deployed on the Kafka brokers in the cluster.</p>
   *
   */
  CurrentBrokerSoftwareInfo?: _UnmarshalledBrokerSoftwareInfo;

  /**
   *
   *             <p>Includes all encryption-related information.</p>
   *
   */
  EncryptionInfo?: _UnmarshalledEncryptionInfo;

  /**
   *
   *             <p>Tags attached to the cluster.</p>
   *
   */
  Tags?: { [key: string]: string };
}
