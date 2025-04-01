// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElastiCacheServiceException as __BaseException } from "./ElastiCacheServiceException";

import { ReplicationGroup } from "./models_0";

/**
 * <p>The targeted replication group is not available. </p>
 * @public
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
 * <p>The endpoint from which data should be migrated.</p>
 * @public
 */
export interface CustomerNodeEndpoint {
  /**
   * <p>The address of the node endpoint</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>The port of the node endpoint</p>
   * @public
   */
  Port?: number | undefined;
}

/**
 * @public
 */
export interface StartMigrationMessage {
  /**
   * <p>The ID of the replication group to which data should be migrated.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>List of endpoints from which data should be migrated. For Valkey or Redis OSS (cluster mode
   *             disabled), the list should have only one element.</p>
   * @public
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

/**
 * @public
 */
export interface StartMigrationResponse {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 * @public
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
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found.
 *             Please verify that the node group exists and that you spelled the
 *                 <code>NodeGroupId</code> value correctly.</p>
 * @public
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
   * <p>The name of the replication group (console: cluster) whose automatic failover is being
   *             tested by this operation.</p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p>The name of the node group (called shard in the console) in this replication group on
   *             which automatic failover is to be tested. You may test automatic failover on up to 15
   *             node groups in any rolling 24-hour period.</p>
   * @public
   */
  NodeGroupId: string | undefined;
}

/**
 * <p>The <code>TestFailover</code> action is not available.</p>
 * @public
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
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}

/**
 * @public
 */
export interface TestMigrationMessage {
  /**
   * <p> The ID of the replication group to which data is to be migrated. </p>
   * @public
   */
  ReplicationGroupId: string | undefined;

  /**
   * <p> List of endpoints from which data should be migrated. List should have only one
   *             element. </p>
   * @public
   */
  CustomerNodeEndpointList: CustomerNodeEndpoint[] | undefined;
}

/**
 * @public
 */
export interface TestMigrationResponse {
  /**
   * <p>Contains all of the attributes of a specific Valkey or Redis OSS replication group.</p>
   * @public
   */
  ReplicationGroup?: ReplicationGroup | undefined;
}
