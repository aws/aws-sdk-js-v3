// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { DocDBElasticClient } from "./DocDBElasticClient";

/**
 * <p>The new Amazon Elastic DocumentDB service endpoint.</p>
 */
export class DocDBElastic extends DocDBElasticClient {
  /**
   * <p>Creates a new Elastic DocumentDB cluster and returns its Cluster structure.</p>
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
   * <p>Creates a snapshot of a cluster.</p>
   */
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClusterSnapshotCommandOutput>;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): void;
  public createClusterSnapshot(
    args: CreateClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateClusterSnapshotCommandOutput) => void
  ): Promise<CreateClusterSnapshotCommandOutput> | void {
    const command = new CreateClusterSnapshotCommand(args);
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
   * <p>Delete a Elastic DocumentDB cluster.</p>
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
   * <p>Delete a Elastic DocumentDB snapshot.</p>
   */
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClusterSnapshotCommandOutput>;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): void;
  public deleteClusterSnapshot(
    args: DeleteClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteClusterSnapshotCommandOutput) => void
  ): Promise<DeleteClusterSnapshotCommandOutput> | void {
    const command = new DeleteClusterSnapshotCommand(args);
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
   * <p>Returns information about a specific Elastic DocumentDB cluster.</p>
   */
  public getCluster(args: GetClusterCommandInput, options?: __HttpHandlerOptions): Promise<GetClusterCommandOutput>;
  public getCluster(args: GetClusterCommandInput, cb: (err: any, data?: GetClusterCommandOutput) => void): void;
  public getCluster(
    args: GetClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterCommandOutput) => void
  ): void;
  public getCluster(
    args: GetClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClusterCommandOutput) => void),
    cb?: (err: any, data?: GetClusterCommandOutput) => void
  ): Promise<GetClusterCommandOutput> | void {
    const command = new GetClusterCommand(args);
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
   * <p>Returns information about a specific Elastic DocumentDB snapshot</p>
   */
  public getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClusterSnapshotCommandOutput>;
  public getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    cb: (err: any, data?: GetClusterSnapshotCommandOutput) => void
  ): void;
  public getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClusterSnapshotCommandOutput) => void
  ): void;
  public getClusterSnapshot(
    args: GetClusterSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClusterSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetClusterSnapshotCommandOutput) => void
  ): Promise<GetClusterSnapshotCommandOutput> | void {
    const command = new GetClusterSnapshotCommand(args);
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
   * <p>Returns information about provisioned Elastic DocumentDB clusters.</p>
   */
  public listClusters(
    args: ListClustersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClustersCommandOutput>;
  public listClusters(args: ListClustersCommandInput, cb: (err: any, data?: ListClustersCommandOutput) => void): void;
  public listClusters(
    args: ListClustersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClustersCommandOutput) => void
  ): void;
  public listClusters(
    args: ListClustersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClustersCommandOutput) => void),
    cb?: (err: any, data?: ListClustersCommandOutput) => void
  ): Promise<ListClustersCommandOutput> | void {
    const command = new ListClustersCommand(args);
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
   * <p>Returns information about Elastic DocumentDB snapshots for a specified cluster.</p>
   */
  public listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClusterSnapshotsCommandOutput>;
  public listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    cb: (err: any, data?: ListClusterSnapshotsCommandOutput) => void
  ): void;
  public listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClusterSnapshotsCommandOutput) => void
  ): void;
  public listClusterSnapshots(
    args: ListClusterSnapshotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClusterSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: ListClusterSnapshotsCommandOutput) => void
  ): Promise<ListClusterSnapshotsCommandOutput> | void {
    const command = new ListClusterSnapshotsCommand(args);
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
   * <p>Lists all tags on a Elastic DocumentDB resource</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Restores a Elastic DocumentDB cluster from a snapshot.</p>
   */
  public restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreClusterFromSnapshotCommandOutput>;
  public restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void
  ): void;
  public restoreClusterFromSnapshot(
    args: RestoreClusterFromSnapshotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: RestoreClusterFromSnapshotCommandOutput) => void
  ): Promise<RestoreClusterFromSnapshotCommandOutput> | void {
    const command = new RestoreClusterFromSnapshotCommand(args);
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
   * <p>Adds metadata tags to a Elastic DocumentDB resource</p>
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
   * <p>Removes metadata tags to a Elastic DocumentDB resource</p>
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
   * <p>Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password,
   *     upgrading API version setting up a backup window and maintenance window</p>
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
}
