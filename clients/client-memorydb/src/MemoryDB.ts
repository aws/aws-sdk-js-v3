// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchUpdateClusterCommand,
  BatchUpdateClusterCommandInput,
  BatchUpdateClusterCommandOutput,
} from "./commands/BatchUpdateClusterCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput,
} from "./commands/CopySnapshotCommand";
import { CreateACLCommand, CreateACLCommandInput, CreateACLCommandOutput } from "./commands/CreateACLCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateParameterGroupCommand,
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "./commands/CreateParameterGroupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateSubnetGroupCommand,
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput,
} from "./commands/CreateSubnetGroupCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteACLCommand, DeleteACLCommandInput, DeleteACLCommandOutput } from "./commands/DeleteACLCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteParameterGroupCommand,
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "./commands/DeleteParameterGroupCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteSubnetGroupCommand,
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput,
} from "./commands/DeleteSubnetGroupCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeACLsCommand,
  DescribeACLsCommandInput,
  DescribeACLsCommandOutput,
} from "./commands/DescribeACLsCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeEngineVersionsCommand,
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "./commands/DescribeEventsCommand";
import {
  DescribeParameterGroupsCommand,
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "./commands/DescribeParameterGroupsCommand";
import {
  DescribeParametersCommand,
  DescribeParametersCommandInput,
  DescribeParametersCommandOutput,
} from "./commands/DescribeParametersCommand";
import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import {
  DescribeReservedNodesOfferingsCommand,
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommand,
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "./commands/DescribeUsersCommand";
import {
  FailoverShardCommand,
  FailoverShardCommandInput,
  FailoverShardCommandOutput,
} from "./commands/FailoverShardCommand";
import {
  ListAllowedNodeTypeUpdatesCommand,
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
} from "./commands/ListAllowedNodeTypeUpdatesCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PurchaseReservedNodesOfferingCommand,
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedNodesOfferingCommand";
import {
  ResetParameterGroupCommand,
  ResetParameterGroupCommandInput,
  ResetParameterGroupCommandOutput,
} from "./commands/ResetParameterGroupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateACLCommand, UpdateACLCommandInput, UpdateACLCommandOutput } from "./commands/UpdateACLCommand";
import {
  UpdateClusterCommand,
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput,
} from "./commands/UpdateClusterCommand";
import {
  UpdateParameterGroupCommand,
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "./commands/UpdateParameterGroupCommand";
import {
  UpdateSubnetGroupCommand,
  UpdateSubnetGroupCommandInput,
  UpdateSubnetGroupCommandOutput,
} from "./commands/UpdateSubnetGroupCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { MemoryDBClient } from "./MemoryDBClient";

/**
 * <p>MemoryDB for Redis is a fully managed, Redis-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.
 *
 *        MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis, a popular open source data store, enabling you to leverage Redis’ flexible and friendly data structures, APIs, and commands.</p>
 */
export class MemoryDB extends MemoryDBClient {
  /**
   * <p>Apply the service update to a list of clusters supplied. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/managing-updates.html#applying-updates">Applying the service updates</a>.</p>
   */
  public batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateClusterCommandOutput>;
  public batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    cb: (err: any, data?: BatchUpdateClusterCommandOutput) => void
  ): void;
  public batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateClusterCommandOutput) => void
  ): void;
  public batchUpdateCluster(
    args: BatchUpdateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateClusterCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateClusterCommandOutput) => void
  ): Promise<BatchUpdateClusterCommandOutput> | void {
    const command = new BatchUpdateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Makes a copy of an existing snapshot.</p>
   */
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotCommandOutput>;
  public copySnapshot(args: CopySnapshotCommandInput, cb: (err: any, data?: CopySnapshotCommandOutput) => void): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopySnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopySnapshotCommandOutput) => void
  ): Promise<CopySnapshotCommandOutput> | void {
    const command = new CopySnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Access Control List. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
   */
  public createACL(args: CreateACLCommandInput, options?: __HttpHandlerOptions): Promise<CreateACLCommandOutput>;
  public createACL(args: CreateACLCommandInput, cb: (err: any, data?: CreateACLCommandOutput) => void): void;
  public createACL(
    args: CreateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateACLCommandOutput) => void
  ): void;
  public createACL(
    args: CreateACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateACLCommandOutput) => void),
    cb?: (err: any, data?: CreateACLCommandOutput) => void
  ): Promise<CreateACLCommandOutput> | void {
    const command = new CreateACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant engine software.</p>
   */
  public createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  public createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterCommandOutput) => void
  ): Promise<CreateClusterCommandOutput> | void {
    const command = new CreateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new MemoryDB parameter group. A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster. For
   *          more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/parametergroups.html">Configuring engine parameters using parameter groups</a>.
   *
   *          </p>
   */
  public createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParameterGroupCommandOutput>;
  public createParameterGroup(
    args: CreateParameterGroupCommandInput,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;
  public createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;
  public createParameterGroup(
    args: CreateParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): Promise<CreateParameterGroupCommandOutput> | void {
    const command = new CreateParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a copy of an entire cluster at a specific moment in time.</p>
   */
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  public createSnapshot(
    args: CreateSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): Promise<CreateSnapshotCommandOutput> | void {
    const command = new CreateSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a subnet group. A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.
   *
   *          When you create a cluster in an Amazon VPC, you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes.
   *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/subnetgroups.html">Subnets and subnet groups</a>.</p>
   */
  public createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubnetGroupCommandOutput>;
  public createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;
  public createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;
  public createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): Promise<CreateSubnetGroupCommandOutput> | void {
    const command = new CreateSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a MemoryDB user. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Access Control List. The ACL must first be disassociated from the cluster before it can be deleted. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/clusters.acls.html">Authenticating users with Access Contol Lists (ACLs)</a>.</p>
   */
  public deleteACL(args: DeleteACLCommandInput, options?: __HttpHandlerOptions): Promise<DeleteACLCommandOutput>;
  public deleteACL(args: DeleteACLCommandInput, cb: (err: any, data?: DeleteACLCommandOutput) => void): void;
  public deleteACL(
    args: DeleteACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteACLCommandOutput) => void
  ): void;
  public deleteACL(
    args: DeleteACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteACLCommandOutput) => void),
    cb?: (err: any, data?: DeleteACLCommandOutput) => void
  ): Promise<DeleteACLCommandOutput> | void {
    const command = new DeleteACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a cluster. It also deletes all associated nodes and node endpoints</p>
   */
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterCommandOutput) => void
  ): Promise<DeleteClusterCommandOutput> | void {
    const command = new DeleteClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters.
   *          You cannot delete the default parameter groups in your account.</p>
   */
  public deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParameterGroupCommandOutput>;
  public deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;
  public deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;
  public deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): Promise<DeleteParameterGroupCommandOutput> | void {
    const command = new DeleteParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing snapshot. When you receive a successful response from this operation, MemoryDB immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p>
   */
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  public deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): Promise<DeleteSnapshotCommandOutput> | void {
    const command = new DeleteSnapshotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.</p>
   */
  public deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubnetGroupCommandOutput>;
  public deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;
  public deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;
  public deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): Promise<DeleteSubnetGroupCommandOutput> | void {
    const command = new DeleteSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user. The user will be removed from all ACLs and in turn removed from all clusters.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of ACLs</p>
   */
  public describeACLs(
    args: DescribeACLsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeACLsCommandOutput>;
  public describeACLs(args: DescribeACLsCommandInput, cb: (err: any, data?: DescribeACLsCommandOutput) => void): void;
  public describeACLs(
    args: DescribeACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeACLsCommandOutput) => void
  ): void;
  public describeACLs(
    args: DescribeACLsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeACLsCommandOutput) => void),
    cb?: (err: any, data?: DescribeACLsCommandOutput) => void
  ): Promise<DescribeACLsCommandOutput> | void {
    const command = new DescribeACLsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cluster if a cluster name is supplied.</p>
   */
  public describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  public describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeClustersCommandOutput) => void),
    cb?: (err: any, data?: DescribeClustersCommandOutput) => void
  ): Promise<DescribeClustersCommandOutput> | void {
    const command = new DescribeClustersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the available Redis engine versions.</p>
   */
  public describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEngineVersionsCommandOutput>;
  public describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    cb: (err: any, data?: DescribeEngineVersionsCommandOutput) => void
  ): void;
  public describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEngineVersionsCommandOutput) => void
  ): void;
  public describeEngineVersions(
    args: DescribeEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEngineVersionsCommandOutput) => void
  ): Promise<DescribeEngineVersionsCommandOutput> | void {
    const command = new DescribeEngineVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns events related to clusters, security groups, and parameter groups. You can obtain events specific to a particular cluster, security group, or parameter group by providing the name as a parameter.
   *
   *          By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
   */
  public describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  public describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  public describeEvents(
    args: DescribeEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEventsCommandOutput) => void
  ): Promise<DescribeEventsCommandOutput> | void {
    const command = new DescribeEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of parameter group descriptions. If a parameter group name is specified, the list contains only the descriptions for that group.</p>
   */
  public describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParameterGroupsCommandOutput>;
  public describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;
  public describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;
  public describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeParameterGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): Promise<DescribeParameterGroupsCommandOutput> | void {
    const command = new DescribeParameterGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the detailed parameter list for a particular parameter group.</p>
   */
  public describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParametersCommandOutput>;
  public describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  public describeParameters(
    args: DescribeParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeParametersCommandOutput) => void
  ): Promise<DescribeParametersCommandOutput> | void {
    const command = new DescribeParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
   */
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesCommandOutput>;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): void;
  public describeReservedNodes(
    args: DescribeReservedNodesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedNodesCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedNodesCommandOutput) => void
  ): Promise<DescribeReservedNodesCommandOutput> | void {
    const command = new DescribeReservedNodesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists available reserved node offerings.</p>
   */
  public describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReservedNodesOfferingsCommandOutput>;
  public describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    cb: (err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void
  ): void;
  public describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void
  ): void;
  public describeReservedNodesOfferings(
    args: DescribeReservedNodesOfferingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeReservedNodesOfferingsCommandOutput) => void
  ): Promise<DescribeReservedNodesOfferingsCommandOutput> | void {
    const command = new DescribeReservedNodesOfferingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns details of the service updates</p>
   */
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceUpdatesCommandOutput>;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): void;
  public describeServiceUpdates(
    args: DescribeServiceUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceUpdatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceUpdatesCommandOutput) => void
  ): Promise<DescribeServiceUpdatesCommandOutput> | void {
    const command = new DescribeServiceUpdatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about cluster snapshots. By default, DescribeSnapshots lists all of your snapshots; it can optionally describe a single snapshot,
   *          or just the snapshots associated with a particular cluster.</p>
   */
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  public describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): Promise<DescribeSnapshotsCommandOutput> | void {
    const command = new DescribeSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group.</p>
   */
  public describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubnetGroupsCommandOutput>;
  public describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;
  public describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;
  public describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSubnetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): Promise<DescribeSubnetGroupsCommandOutput> | void {
    const command = new DescribeSubnetGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of users.</p>
   */
  public describeUsers(
    args: DescribeUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUsersCommandOutput>;
  public describeUsers(
    args: DescribeUsersCommandInput,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUsersCommandOutput) => void
  ): void;
  public describeUsers(
    args: DescribeUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUsersCommandOutput) => void),
    cb?: (err: any, data?: DescribeUsersCommandOutput) => void
  ): Promise<DescribeUsersCommandOutput> | void {
    const command = new DescribeUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Used to failover a shard. This API is designed for testing the behavior of your application in case of MemoryDB failover. It is not designed to be used as a production-level tool for initiating
   *          a failover to overcome a problem you may have with the cluster. Moreover, in certain conditions such as large scale operational events, Amazon may block this API. </p>
   */
  public failoverShard(
    args: FailoverShardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FailoverShardCommandOutput>;
  public failoverShard(
    args: FailoverShardCommandInput,
    cb: (err: any, data?: FailoverShardCommandOutput) => void
  ): void;
  public failoverShard(
    args: FailoverShardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FailoverShardCommandOutput) => void
  ): void;
  public failoverShard(
    args: FailoverShardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FailoverShardCommandOutput) => void),
    cb?: (err: any, data?: FailoverShardCommandOutput) => void
  ): Promise<FailoverShardCommandOutput> | void {
    const command = new FailoverShardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all available node types that you can scale to from your cluster's current node type.
   *
   *          When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.</p>
   */
  public listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowedNodeTypeUpdatesCommandOutput>;
  public listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    cb: (err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void
  ): void;
  public listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void
  ): void;
  public listAllowedNodeTypeUpdates(
    args: ListAllowedNodeTypeUpdatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void),
    cb?: (err: any, data?: ListAllowedNodeTypeUpdatesCommandOutput) => void
  ): Promise<ListAllowedNodeTypeUpdatesCommandOutput> | void {
    const command = new ListAllowedNodeTypeUpdatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags currently on a named resource.
   *
   *          A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track your MemoryDB resources.
   *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/Tagging-Resources.html">Tagging your MemoryDB resources</a>
   *          </p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows you to purchase a reserved  node offering. Reserved nodes are not eligible for cancellation and are non-refundable.</p>
   */
  public purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseReservedNodesOfferingCommandOutput>;
  public purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    cb: (err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void
  ): void;
  public purchaseReservedNodesOffering(
    args: PurchaseReservedNodesOfferingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void),
    cb?: (err: any, data?: PurchaseReservedNodesOfferingCommandOutput) => void
  ): Promise<PurchaseReservedNodesOfferingCommandOutput> | void {
    const command = new PurchaseReservedNodesOfferingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.</p>
   */
  public resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetParameterGroupCommandOutput>;
  public resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    cb: (err: any, data?: ResetParameterGroupCommandOutput) => void
  ): void;
  public resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetParameterGroupCommandOutput) => void
  ): void;
  public resetParameterGroup(
    args: ResetParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: ResetParameterGroupCommandOutput) => void
  ): Promise<ResetParameterGroupCommandOutput> | void {
    const command = new ResetParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your MemoryDB resources.
   *
   *          When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. For more information, see
   *
   *          <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/iam.resourcelevelpermissions.html">Resource-level permissions</a>.</p>
   *          <p>For example, you can use cost-allocation tags to your MemoryDB resources, Amazon generates a cost allocation report as a comma-separated value
   *           (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories
   *           (such as cost centers, application names, or owners) to organize your costs across multiple services.
   *
   *          For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging.html">Using Cost Allocation Tags</a>.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this operation to remove tags on a resource</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes the list of users that belong to the Access Control List.</p>
   */
  public updateACL(args: UpdateACLCommandInput, options?: __HttpHandlerOptions): Promise<UpdateACLCommandOutput>;
  public updateACL(args: UpdateACLCommandInput, cb: (err: any, data?: UpdateACLCommandOutput) => void): void;
  public updateACL(
    args: UpdateACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateACLCommandOutput) => void
  ): void;
  public updateACL(
    args: UpdateACLCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateACLCommandOutput) => void),
    cb?: (err: any, data?: UpdateACLCommandOutput) => void
  ): Promise<UpdateACLCommandOutput> | void {
    const command = new UpdateACLCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration settings by specifying the settings and the new values.</p>
   */
  public updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  public updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  public updateCluster(
    args: UpdateClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClusterCommandOutput) => void),
    cb?: (err: any, data?: UpdateClusterCommandOutput) => void
  ): Promise<UpdateClusterCommandOutput> | void {
    const command = new UpdateClusterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
   */
  public updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParameterGroupCommandOutput>;
  public updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;
  public updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;
  public updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateParameterGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): Promise<UpdateParameterGroupCommandOutput> | void {
    const command = new UpdateParameterGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a subnet group. For more information, see <a href="https://docs.aws.amazon.com/MemoryDB/latest/devguide/ubnetGroups.Modifying.html">Updating a subnet group</a>
   *          </p>
   */
  public updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubnetGroupCommandOutput>;
  public updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
  public updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
  public updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubnetGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): Promise<UpdateSubnetGroupCommandOutput> | void {
    const command = new UpdateSubnetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Changes user password(s) and/or access string.</p>
   */
  public updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  public updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  public updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUserCommandOutput) => void),
    cb?: (err: any, data?: UpdateUserCommandOutput) => void
  ): Promise<UpdateUserCommandOutput> | void {
    const command = new UpdateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
