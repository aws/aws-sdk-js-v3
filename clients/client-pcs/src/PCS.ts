// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateComputeNodeGroupCommand,
  CreateComputeNodeGroupCommandInput,
  CreateComputeNodeGroupCommandOutput,
} from "./commands/CreateComputeNodeGroupCommand";
import { CreateQueueCommand, CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteComputeNodeGroupCommand,
  DeleteComputeNodeGroupCommandInput,
  DeleteComputeNodeGroupCommandOutput,
} from "./commands/DeleteComputeNodeGroupCommand";
import { DeleteQueueCommand, DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import { GetClusterCommand, GetClusterCommandInput, GetClusterCommandOutput } from "./commands/GetClusterCommand";
import {
  GetComputeNodeGroupCommand,
  GetComputeNodeGroupCommandInput,
  GetComputeNodeGroupCommandOutput,
} from "./commands/GetComputeNodeGroupCommand";
import { GetQueueCommand, GetQueueCommandInput, GetQueueCommandOutput } from "./commands/GetQueueCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListComputeNodeGroupsCommand,
  ListComputeNodeGroupsCommandInput,
  ListComputeNodeGroupsCommandOutput,
} from "./commands/ListComputeNodeGroupsCommand";
import { ListQueuesCommand, ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterComputeNodeGroupInstanceCommand,
  RegisterComputeNodeGroupInstanceCommandInput,
  RegisterComputeNodeGroupInstanceCommandOutput,
} from "./commands/RegisterComputeNodeGroupInstanceCommand";
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
  UpdateComputeNodeGroupCommand,
  UpdateComputeNodeGroupCommandInput,
  UpdateComputeNodeGroupCommandOutput,
} from "./commands/UpdateComputeNodeGroupCommand";
import { UpdateQueueCommand, UpdateQueueCommandInput, UpdateQueueCommandOutput } from "./commands/UpdateQueueCommand";
import { PCSClient } from "./PCSClient";

const commands = {
  CreateClusterCommand,
  CreateComputeNodeGroupCommand,
  CreateQueueCommand,
  DeleteClusterCommand,
  DeleteComputeNodeGroupCommand,
  DeleteQueueCommand,
  GetClusterCommand,
  GetComputeNodeGroupCommand,
  GetQueueCommand,
  ListClustersCommand,
  ListComputeNodeGroupsCommand,
  ListQueuesCommand,
  ListTagsForResourceCommand,
  RegisterComputeNodeGroupInstanceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateComputeNodeGroupCommand,
  UpdateQueueCommand,
};

export interface PCS {
  /**
   * @see {@link CreateClusterCommand}
   */
  createCluster(args: CreateClusterCommandInput, options?: __HttpHandlerOptions): Promise<CreateClusterCommandOutput>;
  createCluster(args: CreateClusterCommandInput, cb: (err: any, data?: CreateClusterCommandOutput) => void): void;
  createCluster(
    args: CreateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComputeNodeGroupCommand}
   */
  createComputeNodeGroup(
    args: CreateComputeNodeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputeNodeGroupCommandOutput>;
  createComputeNodeGroup(
    args: CreateComputeNodeGroupCommandInput,
    cb: (err: any, data?: CreateComputeNodeGroupCommandOutput) => void
  ): void;
  createComputeNodeGroup(
    args: CreateComputeNodeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputeNodeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateQueueCommand}
   */
  createQueue(args: CreateQueueCommandInput, options?: __HttpHandlerOptions): Promise<CreateQueueCommandOutput>;
  createQueue(args: CreateQueueCommandInput, cb: (err: any, data?: CreateQueueCommandOutput) => void): void;
  createQueue(
    args: CreateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClusterCommand}
   */
  deleteCluster(args: DeleteClusterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteClusterCommandOutput>;
  deleteCluster(args: DeleteClusterCommandInput, cb: (err: any, data?: DeleteClusterCommandOutput) => void): void;
  deleteCluster(
    args: DeleteClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComputeNodeGroupCommand}
   */
  deleteComputeNodeGroup(
    args: DeleteComputeNodeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComputeNodeGroupCommandOutput>;
  deleteComputeNodeGroup(
    args: DeleteComputeNodeGroupCommandInput,
    cb: (err: any, data?: DeleteComputeNodeGroupCommandOutput) => void
  ): void;
  deleteComputeNodeGroup(
    args: DeleteComputeNodeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComputeNodeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteQueueCommand}
   */
  deleteQueue(args: DeleteQueueCommandInput, options?: __HttpHandlerOptions): Promise<DeleteQueueCommandOutput>;
  deleteQueue(args: DeleteQueueCommandInput, cb: (err: any, data?: DeleteQueueCommandOutput) => void): void;
  deleteQueue(
    args: DeleteQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClusterCommand}
   */
  getCluster(args: GetClusterCommandInput, options?: __HttpHandlerOptions): Promise<GetClusterCommandOutput>;
  getCluster(args: GetClusterCommandInput, cb: (err: any, data?: GetClusterCommandOutput) => void): void;
  getCluster(
    args: GetClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComputeNodeGroupCommand}
   */
  getComputeNodeGroup(
    args: GetComputeNodeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComputeNodeGroupCommandOutput>;
  getComputeNodeGroup(
    args: GetComputeNodeGroupCommandInput,
    cb: (err: any, data?: GetComputeNodeGroupCommandOutput) => void
  ): void;
  getComputeNodeGroup(
    args: GetComputeNodeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComputeNodeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueueCommand}
   */
  getQueue(args: GetQueueCommandInput, options?: __HttpHandlerOptions): Promise<GetQueueCommandOutput>;
  getQueue(args: GetQueueCommandInput, cb: (err: any, data?: GetQueueCommandOutput) => void): void;
  getQueue(
    args: GetQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueueCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComputeNodeGroupsCommand}
   */
  listComputeNodeGroups(
    args: ListComputeNodeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComputeNodeGroupsCommandOutput>;
  listComputeNodeGroups(
    args: ListComputeNodeGroupsCommandInput,
    cb: (err: any, data?: ListComputeNodeGroupsCommandOutput) => void
  ): void;
  listComputeNodeGroups(
    args: ListComputeNodeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComputeNodeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListQueuesCommand}
   */
  listQueues(args: ListQueuesCommandInput, options?: __HttpHandlerOptions): Promise<ListQueuesCommandOutput>;
  listQueues(args: ListQueuesCommandInput, cb: (err: any, data?: ListQueuesCommandOutput) => void): void;
  listQueues(
    args: ListQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueuesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterComputeNodeGroupInstanceCommand}
   */
  registerComputeNodeGroupInstance(
    args: RegisterComputeNodeGroupInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterComputeNodeGroupInstanceCommandOutput>;
  registerComputeNodeGroupInstance(
    args: RegisterComputeNodeGroupInstanceCommandInput,
    cb: (err: any, data?: RegisterComputeNodeGroupInstanceCommandOutput) => void
  ): void;
  registerComputeNodeGroupInstance(
    args: RegisterComputeNodeGroupInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterComputeNodeGroupInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClusterCommand}
   */
  updateCluster(args: UpdateClusterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateClusterCommandOutput>;
  updateCluster(args: UpdateClusterCommandInput, cb: (err: any, data?: UpdateClusterCommandOutput) => void): void;
  updateCluster(
    args: UpdateClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComputeNodeGroupCommand}
   */
  updateComputeNodeGroup(
    args: UpdateComputeNodeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComputeNodeGroupCommandOutput>;
  updateComputeNodeGroup(
    args: UpdateComputeNodeGroupCommandInput,
    cb: (err: any, data?: UpdateComputeNodeGroupCommandOutput) => void
  ): void;
  updateComputeNodeGroup(
    args: UpdateComputeNodeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComputeNodeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateQueueCommand}
   */
  updateQueue(args: UpdateQueueCommandInput, options?: __HttpHandlerOptions): Promise<UpdateQueueCommandOutput>;
  updateQueue(args: UpdateQueueCommandInput, cb: (err: any, data?: UpdateQueueCommandOutput) => void): void;
  updateQueue(
    args: UpdateQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQueueCommandOutput) => void
  ): void;
}

/**
 * <p>Parallel Computing Service (PCS) is a managed service that makes it easier for you to run and scale your high performance computing (HPC) workloads, and build scientific and engineering models on Amazon Web Services using Slurm. For more information, see the <a href="https://docs.aws.amazon.com/pcs/latest/userguide">Parallel Computing Service User Guide</a>.</p> <p>This reference describes the actions and data types of the service management API. You can use the Amazon Web Services SDKs to call the API actions in software, or use the Command Line Interface (CLI) to call the API actions manually. These API actions manage the service through an Amazon Web Services account.</p> <p>The API actions operate on PCS resources. A <i>resource</i> is an entity in Amazon Web Services that you can work with. Amazon Web Services services create resources when you use the features of the service. Examples of PCS resources include clusters, compute node groups, and queues. For more information about resources in Amazon Web Services, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-resource">Resource</a> in the <i>Resource Explorer User Guide</i>. </p> <p>An PCS <i>compute node</i> is an Amazon EC2 instance. You don't launch compute nodes directly. PCS uses configuration information that you provide to launch compute nodes in your Amazon Web Services account. You receive billing charges for your running compute nodes. PCS automatically terminates your compute nodes when you delete the PCS resources related to those compute nodes.</p>
 * @public
 */
export class PCS extends PCSClient implements PCS {}
createAggregatedClient(commands, PCS);
