// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import {
  CreateClusterSnapshotCommand,
  CreateClusterSnapshotCommandInput,
  CreateClusterSnapshotCommandOutput,
} from "./commands/CreateClusterSnapshotCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import {
  DeleteClusterSnapshotCommand,
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
} from "./commands/DeleteClusterSnapshotCommand";
import { GetClusterCommand, GetClusterCommandInput, GetClusterCommandOutput } from "./commands/GetClusterCommand";
import {
  GetClusterSnapshotCommand,
  GetClusterSnapshotCommandInput,
  GetClusterSnapshotCommandOutput,
} from "./commands/GetClusterSnapshotCommand";
import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "./commands/ListClustersCommand";
import {
  ListClusterSnapshotsCommand,
  ListClusterSnapshotsCommandInput,
  ListClusterSnapshotsCommandOutput,
} from "./commands/ListClusterSnapshotsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RestoreClusterFromSnapshotCommand,
  RestoreClusterFromSnapshotCommandInput,
  RestoreClusterFromSnapshotCommandOutput,
} from "./commands/RestoreClusterFromSnapshotCommand";
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
import { DocDBElasticClient, DocDBElasticClientConfig } from "./DocDBElasticClient";

const commands = {
  CreateClusterCommand,
  CreateClusterSnapshotCommand,
  DeleteClusterCommand,
  DeleteClusterSnapshotCommand,
  GetClusterCommand,
  GetClusterSnapshotCommand,
  ListClustersCommand,
  ListClusterSnapshotsCommand,
  ListTagsForResourceCommand,
  RestoreClusterFromSnapshotCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
};

export interface DocDBElastic {
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
   * @see {@link CreateClusterSnapshotCommand}
   */
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSnapshotCommandOutput>;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
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
   * @see {@link DeleteClusterSnapshotCommand}
   */
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSnapshotCommandOutput>;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
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
   * @see {@link GetClusterSnapshotCommand}
   */
  getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterSnapshotCommandOutput>;
  getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    cb: (err: any, data?: GetClusterSnapshotCommandOutput) => void
  ): void;
  getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(args: ListClustersCommandInput, options?: __HttpHandlerOptions): Promise<ListClustersCommandOutput>;
  listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterSnapshotsCommand}
   */
  listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterSnapshotsCommandOutput>;
  listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    cb: (err: any, data?: ListClusterSnapshotsCommandOutput) => void
  ): void;
  listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterSnapshotsCommandOutput) => void
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
   * @see {@link RestoreClusterFromSnapshotCommand}
   */
  restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreClusterFromSnapshotCommandOutput>;
  restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void
  ): void;
  restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void
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
}

/**
 * @public
 * <p>The new Amazon Elastic DocumentDB service endpoint.</p>
 */
export class DocDBElastic extends DocDBElasticClient implements DocDBElastic {}
createAggregatedClient(commands, DocDBElastic);
