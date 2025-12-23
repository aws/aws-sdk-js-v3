// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
} from "./commands/ApplyPendingMaintenanceActionCommand";
import {
  CopyClusterSnapshotCommand,
  CopyClusterSnapshotCommandInput,
  CopyClusterSnapshotCommandOutput,
} from "./commands/CopyClusterSnapshotCommand";
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
  GetPendingMaintenanceActionCommand,
  GetPendingMaintenanceActionCommandInput,
  GetPendingMaintenanceActionCommandOutput,
} from "./commands/GetPendingMaintenanceActionCommand";
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
  ListPendingMaintenanceActionsCommand,
  ListPendingMaintenanceActionsCommandInput,
  ListPendingMaintenanceActionsCommandOutput,
} from "./commands/ListPendingMaintenanceActionsCommand";
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
import {
  StartClusterCommand,
  StartClusterCommandInput,
  StartClusterCommandOutput,
} from "./commands/StartClusterCommand";
import { StopClusterCommand, StopClusterCommandInput, StopClusterCommandOutput } from "./commands/StopClusterCommand";
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
import { DocDBElasticClient } from "./DocDBElasticClient";

const commands = {
  ApplyPendingMaintenanceActionCommand,
  CopyClusterSnapshotCommand,
  CreateClusterCommand,
  CreateClusterSnapshotCommand,
  DeleteClusterCommand,
  DeleteClusterSnapshotCommand,
  GetClusterCommand,
  GetClusterSnapshotCommand,
  GetPendingMaintenanceActionCommand,
  ListClustersCommand,
  ListClusterSnapshotsCommand,
  ListPendingMaintenanceActionsCommand,
  ListTagsForResourceCommand,
  RestoreClusterFromSnapshotCommand,
  StartClusterCommand,
  StopClusterCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
};

export interface DocDBElastic {
  /**
   * @see {@link ApplyPendingMaintenanceActionCommand}
   */
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyPendingMaintenanceActionCommandOutput>;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;
  applyPendingMaintenanceAction(
    args: ApplyPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyClusterSnapshotCommand}
   */
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyClusterSnapshotCommandOutput>;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;
  copyClusterSnapshot(
    args: CopyClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyClusterSnapshotCommandOutput) => void
  ): void;

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
  getCluster(
    args: GetClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterCommandOutput>;
  getCluster(
    args: GetClusterCommandInput,
    cb: (err: any, data?: GetClusterCommandOutput) => void
  ): void;
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
   * @see {@link GetPendingMaintenanceActionCommand}
   */
  getPendingMaintenanceAction(
    args: GetPendingMaintenanceActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPendingMaintenanceActionCommandOutput>;
  getPendingMaintenanceAction(
    args: GetPendingMaintenanceActionCommandInput,
    cb: (err: any, data?: GetPendingMaintenanceActionCommandOutput) => void
  ): void;
  getPendingMaintenanceAction(
    args: GetPendingMaintenanceActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPendingMaintenanceActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClustersCommand}
   */
  listClusters(): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  listClusters(
    args: ListClustersCommandInput,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClusterSnapshotsCommand}
   */
  listClusterSnapshots(): Promise<ListClusterSnapshotsCommandOutput>;
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
   * @see {@link ListPendingMaintenanceActionsCommand}
   */
  listPendingMaintenanceActions(): Promise<ListPendingMaintenanceActionsCommandOutput>;
  listPendingMaintenanceActions(
    args: ListPendingMaintenanceActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPendingMaintenanceActionsCommandOutput>;
  listPendingMaintenanceActions(
    args: ListPendingMaintenanceActionsCommandInput,
    cb: (err: any, data?: ListPendingMaintenanceActionsCommandOutput) => void
  ): void;
  listPendingMaintenanceActions(
    args: ListPendingMaintenanceActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPendingMaintenanceActionsCommandOutput) => void
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
   * @see {@link StartClusterCommand}
   */
  startCluster(
    args: StartClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartClusterCommandOutput>;
  startCluster(
    args: StartClusterCommandInput,
    cb: (err: any, data?: StartClusterCommandOutput) => void
  ): void;
  startCluster(
    args: StartClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartClusterCommandOutput) => void
  ): void;

  /**
   * @see {@link StopClusterCommand}
   */
  stopCluster(
    args: StopClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopClusterCommandOutput>;
  stopCluster(
    args: StopClusterCommandInput,
    cb: (err: any, data?: StopClusterCommandOutput) => void
  ): void;
  stopCluster(
    args: StopClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopClusterCommandOutput) => void
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
}

/**
 * <fullname>Amazon DocumentDB elastic clusters</fullname>
 *          <p>Amazon DocumentDB elastic-clusters support workloads with millions of reads/writes per second and petabytes of storage capacity.
 *       Amazon DocumentDB elastic clusters also simplify how developers interact with Amazon DocumentDB elastic-clusters by eliminating the need to choose, manage or upgrade instances.</p>
 *          <p>Amazon DocumentDB elastic-clusters were created to:</p>
 *          <ul>
 *             <li>
 *                <p>provide a solution for customers looking for a database that provides virtually limitless scale with rich query capabilities and MongoDB API compatibility.</p>
 *             </li>
 *             <li>
 *                <p>give customers higher connection limits, and to reduce downtime from patching.</p>
 *             </li>
 *             <li>
 *                <p>continue investing in a cloud-native, elastic, and class leading architecture for JSON workloads.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class DocDBElastic extends DocDBElasticClient implements DocDBElastic {}
createAggregatedClient(commands, DocDBElastic);
