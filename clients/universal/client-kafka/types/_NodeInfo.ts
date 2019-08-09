import {
  _BrokerNodeInfo,
  _UnmarshalledBrokerNodeInfo
} from "./_BrokerNodeInfo";
import {
  _ZookeeperNodeInfo,
  _UnmarshalledZookeeperNodeInfo
} from "./_ZookeeperNodeInfo";

/**
 *
 *             <p>The node information object.</p>
 *
 */
export interface _NodeInfo {
  /**
   *
   *             <p>The start time.</p>
   *
   */
  AddedToClusterTime?: string;

  /**
   *
   *             <p>The broker node info.</p>
   *
   */
  BrokerNodeInfo?: _BrokerNodeInfo;

  /**
   *
   *             <p>The instance type.</p>
   *
   */
  InstanceType?: string;

  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the node.</p>
   *
   */
  NodeARN?: string;

  /**
   *
   *             <p>The node type.</p>
   *
   */
  NodeType?: "BROKER" | string;

  /**
   *
   *             <p>The ZookeeperNodeInfo.</p>
   *
   */
  ZookeeperNodeInfo?: _ZookeeperNodeInfo;
}

export interface _UnmarshalledNodeInfo extends _NodeInfo {
  /**
   *
   *             <p>The broker node info.</p>
   *
   */
  BrokerNodeInfo?: _UnmarshalledBrokerNodeInfo;

  /**
   *
   *             <p>The ZookeeperNodeInfo.</p>
   *
   */
  ZookeeperNodeInfo?: _UnmarshalledZookeeperNodeInfo;
}
