// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

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

/**
 * @public
 */
export interface DAXRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface DAX {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(
    args: CreateClusterCommandInput,
    options?: DAXRequestOptions
  ): Promise<CreateClusterCommandOutput>;
  createCluster(
    args: CreateClusterCommandInput,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateParameterGroupCommand}
   */
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<CreateParameterGroupCommandOutput>;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;
  createParameterGroup(
    args: CreateParameterGroupCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: CreateParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubnetGroupCommand}
   */
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<CreateSubnetGroupCommandOutput>;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;
  createSubnetGroup(
    args: CreateSubnetGroupCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: CreateSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DecreaseReplicationFactorCommand}
   */
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options?: DAXRequestOptions
  ): Promise<DecreaseReplicationFactorCommandOutput>;
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;
  decreaseReplicationFactor(
    args: DecreaseReplicationFactorCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DecreaseReplicationFactorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(
    args: DeleteClusterCommandInput,
    options?: DAXRequestOptions
  ): Promise<DeleteClusterCommandOutput>;
  deleteCluster(
    args: DeleteClusterCommandInput,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteParameterGroupCommand}
   */
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<DeleteParameterGroupCommandOutput>;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;
  deleteParameterGroup(
    args: DeleteParameterGroupCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DeleteParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubnetGroupCommand}
   */
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<DeleteSubnetGroupCommandOutput>;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;
  deleteSubnetGroup(
    args: DeleteSubnetGroupCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DeleteSubnetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClustersCommand}
   */
  describeClusters(): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeClustersCommandOutput>;
  describeClusters(
    args: DescribeClustersCommandInput,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;
  describeClusters(
    args: DescribeClustersCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultParametersCommand}
   */
  describeDefaultParameters(): Promise<DescribeDefaultParametersCommandOutput>;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeDefaultParametersCommandOutput>;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;
  describeDefaultParameters(
    args: DescribeDefaultParametersCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeDefaultParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEventsCommand}
   */
  describeEvents(): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeEventsCommandOutput>;
  describeEvents(
    args: DescribeEventsCommandInput,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;
  describeEvents(
    args: DescribeEventsCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParameterGroupsCommand}
   */
  describeParameterGroups(): Promise<DescribeParameterGroupsCommandOutput>;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeParameterGroupsCommandOutput>;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;
  describeParameterGroups(
    args: DescribeParameterGroupsCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeParameterGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeParametersCommand}
   */
  describeParameters(
    args: DescribeParametersCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeParametersCommandOutput>;
  describeParameters(
    args: DescribeParametersCommandInput,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;
  describeParameters(
    args: DescribeParametersCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubnetGroupsCommand}
   */
  describeSubnetGroups(): Promise<DescribeSubnetGroupsCommandOutput>;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options?: DAXRequestOptions
  ): Promise<DescribeSubnetGroupsCommandOutput>;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;
  describeSubnetGroups(
    args: DescribeSubnetGroupsCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: DescribeSubnetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link IncreaseReplicationFactorCommand}
   */
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options?: DAXRequestOptions
  ): Promise<IncreaseReplicationFactorCommandOutput>;
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;
  increaseReplicationFactor(
    args: IncreaseReplicationFactorCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: IncreaseReplicationFactorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: DAXRequestOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootNodeCommand}
   */
  rebootNode(
    args: RebootNodeCommandInput,
    options?: DAXRequestOptions
  ): Promise<RebootNodeCommandOutput>;
  rebootNode(
    args: RebootNodeCommandInput,
    cb: (err: any, data?: RebootNodeCommandOutput) => void
  ): void;
  rebootNode(
    args: RebootNodeCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: RebootNodeCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: DAXRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: DAXRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(
    args: UpdateClusterCommandInput,
    options?: DAXRequestOptions
  ): Promise<UpdateClusterCommandOutput>;
  updateCluster(
    args: UpdateClusterCommandInput,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateParameterGroupCommand}
   */
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<UpdateParameterGroupCommandOutput>;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;
  updateParameterGroup(
    args: UpdateParameterGroupCommandInput,
    options: DAXRequestOptions,
    cb: (err: any, data?: UpdateParameterGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubnetGroupCommand}
   */
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options?: DAXRequestOptions
  ): Promise<UpdateSubnetGroupCommandOutput>;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    cb: (err: any, data?: UpdateSubnetGroupCommandOutput) => void
  ): void;
  updateSubnetGroup(
    args: UpdateSubnetGroupCommandInput,
    options: DAXRequestOptions,
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
