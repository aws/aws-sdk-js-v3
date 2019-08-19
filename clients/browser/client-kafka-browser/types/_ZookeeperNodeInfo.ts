/**
 *
 *             <p>Zookeeper node information.</p>
 *
 */
export interface _ZookeeperNodeInfo {
  /**
   *
   *             <p>The attached elastic network interface of the broker.</p>
   *
   */
  AttachedENIId?: string;

  /**
   *
   *             <p>The virtual private cloud (VPC) IP address of the client.</p>
   *
   */
  ClientVpcIpAddress?: string;

  /**
   *
   *             <p>Endpoints for accessing the ZooKeeper.</p>
   *
   */
  Endpoints?: Array<string> | Iterable<string>;

  /**
   *
   *             <p>The role-specific ID for Zookeeper.</p>
   *
   */
  ZookeeperId?: number;

  /**
   *
   *             <p>The version of Zookeeper.</p>
   *
   */
  ZookeeperVersion?: string;
}

export interface _UnmarshalledZookeeperNodeInfo extends _ZookeeperNodeInfo {
  /**
   *
   *             <p>Endpoints for accessing the ZooKeeper.</p>
   *
   */
  Endpoints?: Array<string>;
}
