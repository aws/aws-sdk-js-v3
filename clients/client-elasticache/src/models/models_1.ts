// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElastiCacheServiceException as __BaseException } from "./ElastiCacheServiceException";

import { ReplicationGroup } from "./models_0";

/**
 * @public
 * <p>The targeted replication group is not available. </p>
 */
export class ReplicationGroupAlreadyUnderMigrationFault extends __BaseException {
  readonly name: "ReplicationGroupAlreadyUnderMigrationFault" = "ReplicationGroupAlreadyUnderMigrationFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplicationGroupAlreadyUnderMigrationFault, __BaseException>) {
    super({
      name: "ReplicationGroupAlreadyUnderMigrationFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplicationGroupAlreadyUnderMigrationFault.prototype);
  }
}

/**
 * @public
 * <p>The endpoint from which data should be migrated.</p>
 */
export interface CustomerNodeEndpoint {
  /**
   * @public
   * <p>The address of the node endpoint</p>
   */
  Address?: string;

  /**
   * @public
   * <p>The port of the node endpoint</p>
   */
  Port?: number;
}

/**
 * @public
 */
export interface StartMigrationMessage {
  /**
   * @public
   * <p>The ID of the replication group to which data should be migrated.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * @public
   * <p>List of endpoints from which data should be migrated. For Redis (cluster mode
   *             disabled), list should have only one element.</p>
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

/**
 * @public
 */
export interface StartMigrationResponse {
  /**
   * @public
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * @public
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 */
export class APICallRateForCustomerExceededFault extends __BaseException {
  readonly name: "APICallRateForCustomerExceededFault" = "APICallRateForCustomerExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<APICallRateForCustomerExceededFault, __BaseException>) {
    super({
      name: "APICallRateForCustomerExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, APICallRateForCustomerExceededFault.prototype);
  }
}

/**
 * @public
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the
 *                 <code>NodeGroupId</code> value correctly.</p>
 */
export class NodeGroupNotFoundFault extends __BaseException {
  readonly name: "NodeGroupNotFoundFault" = "NodeGroupNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NodeGroupNotFoundFault, __BaseException>) {
    super({
      name: "NodeGroupNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NodeGroupNotFoundFault.prototype);
  }
}

/**
 * @public
 */
export interface TestFailoverMessage {
  /**
   * @public
   * <p>The name of the replication group (console: cluster) whose automatic failover is being
   *             tested by this operation.</p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * @public
   * <p>The name of the node group (called shard in the console) in this replication group on
   *             which automatic failover is to be tested. You may test automatic failover on up to 5
   *             node groups in any rolling 24-hour period.</p>
   */
  NodeGroupId: string | undefined;
}

/**
 * @public
 * <p>The <code>TestFailover</code> action is not available.</p>
 */
export class TestFailoverNotAvailableFault extends __BaseException {
  readonly name: "TestFailoverNotAvailableFault" = "TestFailoverNotAvailableFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TestFailoverNotAvailableFault, __BaseException>) {
    super({
      name: "TestFailoverNotAvailableFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TestFailoverNotAvailableFault.prototype);
  }
}

/**
 * @public
 */
export interface TestFailoverResult {
  /**
   * @public
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}

/**
 * @public
 */
export interface TestMigrationMessage {
  /**
   * @public
   * <p> The ID of the replication group to which data is to be migrated. </p>
   */
  ReplicationGroupId: string | undefined;

  /**
   * @public
   * <p> List of endpoints from which data should be migrated. List should have only one
   *             element. </p>
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

/**
 * @public
 */
export interface TestMigrationResponse {
  /**
   * @public
   * <p>Contains all of the attributes of a specific Redis replication group.</p>
   */
  ReplicationGroup?: ReplicationGroup;
}
