// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
  CreateSubnetGroupCommand,
  CreateSubnetGroupCommandInput,
  CreateSubnetGroupCommandOutput,
} from "./commands/CreateSubnetGroupCommand";
import {
  DecreaseReplicationFactorCommand,
  DecreaseReplicationFactorCommandInput,
  DecreaseReplicationFactorCommandOutput,
} from "./commands/DecreaseReplicationFactorCommand";
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
  DeleteSubnetGroupCommand,
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput,
} from "./commands/DeleteSubnetGroupCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  DescribeDefaultParametersCommand,
  DescribeDefaultParametersCommandInput,
  DescribeDefaultParametersCommandOutput,
} from "./commands/DescribeDefaultParametersCommand";
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
  DescribeSubnetGroupsCommand,
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand";
import {
  IncreaseReplicationFactorCommand,
  IncreaseReplicationFactorCommandInput,
  IncreaseReplicationFactorCommandOutput,
} from "./commands/IncreaseReplicationFactorCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { RebootNodeCommand, RebootNodeCommandInput, RebootNodeCommandOutput } from "./commands/RebootNodeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
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
import { DAXClient } from "./DAXClient";

/**
 * <p>DAX is a managed caching service engineered for Amazon DynamoDB. DAX
 *             dramatically speeds up database reads by caching frequently-accessed data from DynamoDB, so
 *             applications can access that data with sub-millisecond latency. You can create a DAX
 *             cluster easily, using the AWS Management Console. With a few simple modifications to
 *             your code, your application can begin taking advantage of the DAX cluster and realize
 *             significant improvements in read performance.</p>
 */
export class DAX extends DAXClient {
  /**
   * <p>Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.</p>
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
   * <p>Creates a new parameter group. A parameter group is a collection of parameters that
   *             you apply to all of the nodes in a DAX cluster.</p>
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
   * <p>Creates a new subnet group.</p>
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
   * <p>Removes one or more nodes from a DAX cluster.</p>
   *         <note>
   *             <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p>
   *          </note>
   */
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseReplicationFactorCommandOutput>;
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;
  public decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DecreaseReplicationFactorCommandOutput) => void),
    cb?: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): Promise<DecreaseReplicationFactorCommandOutput> | void {
    const command = new DecreaseReplicationFactorCommand(args);
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
   * <p>Deletes a previously provisioned DAX cluster.
   *                 <i>DeleteCluster</i> deletes all associated nodes, node endpoints
   *             and the DAX cluster itself. When you receive a successful response from this action,
   *             DAX immediately begins deleting the cluster; you cannot cancel or revert this
   *             action.</p>
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
   * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is
   *             associated with any DAX clusters.</p>
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
   * <p>Deletes a subnet group.</p>
   *         <note>
   *             <p>You cannot delete a subnet group if it is associated with any DAX
   *                 clusters.</p>
   *         </note>
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
   * <p>Returns information about all provisioned DAX clusters if no cluster identifier
   *             is specified, or about a specific DAX cluster if a cluster identifier is
   *             supplied.</p>
   *         <p>If the cluster is in the CREATING state, only cluster level information will be
   *             displayed until all of the nodes are successfully provisioned.</p>
   *         <p>If the cluster is in the DELETING state, only cluster level information will be
   *             displayed.</p>
   *         <p>If nodes are currently being added to the DAX cluster, node endpoint information
   *             and creation time for the additional nodes will not be displayed until they are
   *             completely provisioned. When the DAX cluster state is <i>available</i>,
   *             the cluster is ready for use.</p>
   *         <p>If nodes are currently being removed from the DAX cluster, no endpoint
   *             information for the removed nodes is displayed.</p>
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
   * <p>Returns the default system parameter information for the DAX caching
   *             software.</p>
   */
  public describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultParametersCommandOutput>;
  public describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;
  public describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;
  public describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDefaultParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): Promise<DescribeDefaultParametersCommandOutput> | void {
    const command = new DescribeDefaultParametersCommand(args);
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
   * <p>Returns events related to DAX clusters and parameter groups. You can obtain
   *             events specific to a particular DAX cluster or parameter group by providing the name
   *             as a parameter.</p>
   *         <p>By default, only the events occurring within the last 24 hours are returned; however,
   *             you can retrieve up to 14 days' worth of events if necessary.</p>
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
   * <p>Returns a list of parameter group descriptions. If a parameter group name is
   *             specified, the list will contain only the descriptions for that group.</p>
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
   * <p>Returns a list of subnet group descriptions. If a subnet group name is specified,
   *             the list will contain only the description of that group.</p>
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
   * <p>Adds one or more nodes to a DAX cluster.</p>
   */
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseReplicationFactorCommandOutput>;
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;
  public increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IncreaseReplicationFactorCommandOutput) => void),
    cb?: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): Promise<IncreaseReplicationFactorCommandOutput> | void {
    const command = new IncreaseReplicationFactorCommand(args);
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
   * <p>List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to
   *             10 times per second, per account.</p>
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
   * <p>Reboots a single node of a DAX cluster. The reboot action takes place
   *             as soon as possible. During the
   *             reboot, the node status is set to REBOOTING.</p>
   *         <note>
   *             <p>
   *                <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache.  </p>
   *         </note>
   */
  public rebootNode(args: RebootNodeCommandInput, options?: __HttpHandlerOptions): Promise<RebootNodeCommandOutput>;
  public rebootNode(args: RebootNodeCommandInput, cb: (err: any, data?: RebootNodeCommandOutput) => void): void;
  public rebootNode(
    args: RebootNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootNodeCommandOutput) => void
  ): void;
  public rebootNode(
    args: RebootNodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RebootNodeCommandOutput) => void),
    cb?: (err: any, data?: RebootNodeCommandOutput) => void
  ): Promise<RebootNodeCommandOutput> | void {
    const command = new RebootNodeCommand(args);
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
   * <p>Associates a set of tags with a DAX resource.  You can call <code>TagResource</code> up to 5 times per second, per
   *             account. </p>
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
   * <p>Removes the association of tags from a DAX resource. You can call
   *             <code>UntagResource</code> up to 5 times per second, per account. </p>
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
   * <p>Modifies the settings for a DAX cluster. You can use this action to change one or
   *             more cluster configuration parameters by specifying the parameters and the new
   *             values.</p>
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
   * <p>Modifies the parameters of a parameter group. You can modify up to 20
   *             parameters in a single request by submitting a list parameter name and value
   *             pairs.</p>
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
   * <p>Modifies an existing subnet group.</p>
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
}
