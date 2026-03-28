// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CreateClusterCommandInput,
  type CreateClusterCommandOutput,
  CreateClusterCommand,
} from "./commands/CreateClusterCommand";
import {
  type CreateParameterGroupCommandInput,
  type CreateParameterGroupCommandOutput,
  CreateParameterGroupCommand,
} from "./commands/CreateParameterGroupCommand";
import {
  type CreateSubnetGroupCommandInput,
  type CreateSubnetGroupCommandOutput,
  CreateSubnetGroupCommand,
} from "./commands/CreateSubnetGroupCommand";
import {
  type DecreaseReplicationFactorCommandInput,
  type DecreaseReplicationFactorCommandOutput,
  DecreaseReplicationFactorCommand,
} from "./commands/DecreaseReplicationFactorCommand";
import {
  type DeleteClusterCommandInput,
  type DeleteClusterCommandOutput,
  DeleteClusterCommand,
} from "./commands/DeleteClusterCommand";
import {
  type DeleteParameterGroupCommandInput,
  type DeleteParameterGroupCommandOutput,
  DeleteParameterGroupCommand,
} from "./commands/DeleteParameterGroupCommand";
import {
  type DeleteSubnetGroupCommandInput,
  type DeleteSubnetGroupCommandOutput,
  DeleteSubnetGroupCommand,
} from "./commands/DeleteSubnetGroupCommand";
import {
  type DescribeClustersCommandInput,
  type DescribeClustersCommandOutput,
  DescribeClustersCommand,
} from "./commands/DescribeClustersCommand";
import {
  type DescribeDefaultParametersCommandInput,
  type DescribeDefaultParametersCommandOutput,
  DescribeDefaultParametersCommand,
} from "./commands/DescribeDefaultParametersCommand";
import {
  type DescribeEventsCommandInput,
  type DescribeEventsCommandOutput,
  DescribeEventsCommand,
} from "./commands/DescribeEventsCommand";
import {
  type DescribeParameterGroupsCommandInput,
  type DescribeParameterGroupsCommandOutput,
  DescribeParameterGroupsCommand,
} from "./commands/DescribeParameterGroupsCommand";
import {
  type DescribeParametersCommandInput,
  type DescribeParametersCommandOutput,
  DescribeParametersCommand,
} from "./commands/DescribeParametersCommand";
import {
  type DescribeSubnetGroupsCommandInput,
  type DescribeSubnetGroupsCommandOutput,
  DescribeSubnetGroupsCommand,
} from "./commands/DescribeSubnetGroupsCommand";
import {
  type IncreaseReplicationFactorCommandInput,
  type IncreaseReplicationFactorCommandOutput,
  IncreaseReplicationFactorCommand,
} from "./commands/IncreaseReplicationFactorCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type RebootNodeCommandInput,
  type RebootNodeCommandOutput,
  RebootNodeCommand,
} from "./commands/RebootNodeCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateClusterCommandInput,
  type UpdateClusterCommandOutput,
  UpdateClusterCommand,
} from "./commands/UpdateClusterCommand";
import {
  type UpdateParameterGroupCommandInput,
  type UpdateParameterGroupCommandOutput,
  UpdateParameterGroupCommand,
} from "./commands/UpdateParameterGroupCommand";
import {
  type UpdateSubnetGroupCommandInput,
  type UpdateSubnetGroupCommandOutput,
  UpdateSubnetGroupCommand,
} from "./commands/UpdateSubnetGroupCommand";
import { DAXClient } from "./DAXClient";

const commands = {
  CreateClusterCommand,
  CreateParameterGroupCommand,
  CreateSubnetGroupCommand,
  DecreaseReplicationFactorCommand,
  DeleteClusterCommand,
  DeleteParameterGroupCommand,
  DeleteSubnetGroupCommand,
  DescribeClustersCommand,
  DescribeDefaultParametersCommand,
  DescribeEventsCommand,
  DescribeParameterGroupsCommand,
  DescribeParametersCommand,
  DescribeSubnetGroupsCommand,
  IncreaseReplicationFactorCommand,
  ListTagsCommand,
  RebootNodeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateParameterGroupCommand,
  UpdateSubnetGroupCommand,
};

export interface DAX {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParameterGroupCommand}
   */
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParameterGroupCommandOutput>;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubnetGroupCommand}
   */
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubnetGroupCommandOutput>;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DecreaseReplicationFactorCommand}
   */
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseReplicationFactorCommandOutput>;
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParameterGroupCommand}
   */
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteParameterGroupCommandOutput>;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubnetGroupCommand}
   */
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubnetGroupCommandOutput>;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultParametersCommand}
   */
  describeDefaultParameters(): Promise<DescribeDefaultParametersCommandOutput>;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultParametersCommandOutput>;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParameterGroupsCommand}
   */
  describeParameterGroups(): Promise<DescribeParameterGroupsCommandOutput>;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParameterGroupsCommandOutput>;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeParametersCommandOutput>;
  describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  describeParameters(
    args: DescribeParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubnetGroupsCommand}
   */
  describeSubnetGroups(): Promise<DescribeSubnetGroupsCommandOutput>;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubnetGroupsCommandOutput>;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link IncreaseReplicationFactorCommand}
   */
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseReplicationFactorCommandOutput>;
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootNodeCommand}
   */
  rebootNode(
    args: RebootNodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootNodeCommandOutput>;
  rebootNode(
    args: RebootNodeCommandInput,
    cb: (err: any, data?: RebootNodeCommandOutput) => void
  ): void;
  rebootNode(
    args: RebootNodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParameterGroupCommand}
   */
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateParameterGroupCommandOutput>;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubnetGroupCommand}
   */
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubnetGroupCommandOutput>;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
}

/**
 * <p>DAX is a managed caching service engineered for Amazon DynamoDB. DAX dramatically speeds up database reads by caching
 *             frequently-accessed data from DynamoDB, so applications can access that data
 *             with sub-millisecond latency. You can create a DAX cluster easily, using
 *             the Amazon Web Services Management Console. With a few simple modifications to your code, your
 *             application can begin taking advantage of the DAX cluster and realize
 *             significant improvements in read performance.</p>
 * @public
 */
export class DAX extends DAXClient implements DAX {}
createAggregatedClient(commands, DAX);
