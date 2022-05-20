// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudHSMV2Client } from "./CloudHSMV2Client";
import {
  CopyBackupToRegionCommand,
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput,
} from "./commands/CopyBackupToRegionCommand";
import {
  CreateClusterCommand,
  CreateClusterCommandInput,
  CreateClusterCommandOutput,
} from "./commands/CreateClusterCommand";
import { CreateHsmCommand, CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import {
  DeleteClusterCommand,
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput,
} from "./commands/DeleteClusterCommand";
import { DeleteHsmCommand, DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeClustersCommand,
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput,
} from "./commands/DescribeClustersCommand";
import {
  InitializeClusterCommand,
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput,
} from "./commands/InitializeClusterCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ModifyBackupAttributesCommand,
  ModifyBackupAttributesCommandInput,
  ModifyBackupAttributesCommandOutput,
} from "./commands/ModifyBackupAttributesCommand";
import {
  ModifyClusterCommand,
  ModifyClusterCommandInput,
  ModifyClusterCommandOutput,
} from "./commands/ModifyClusterCommand";
import {
  RestoreBackupCommand,
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput,
} from "./commands/RestoreBackupCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

/**
 * <p>For more information about AWS CloudHSM, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a> and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS
 *       CloudHSM User Guide</a>.</p>
 */
export class CloudHSMV2 extends CloudHSMV2Client {
  /**
   * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
   */
  public copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyBackupToRegionCommandOutput>;
  public copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;
  public copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): void;
  public copyBackupToRegion(
    args: CopyBackupToRegionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyBackupToRegionCommandOutput) => void),
    cb?: (err: any, data?: CopyBackupToRegionCommandOutput) => void
  ): Promise<CopyBackupToRegionCommandOutput> | void {
    const command = new CopyBackupToRegionCommand(args);
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
   * <p>Creates a new AWS CloudHSM cluster.</p>
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
   * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
   *       cluster.</p>
   */
  public createHsm(args: CreateHsmCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmCommandOutput>;
  public createHsm(args: CreateHsmCommandInput, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
  public createHsm(
    args: CreateHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;
  public createHsm(
    args: CreateHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHsmCommandOutput) => void),
    cb?: (err: any, data?: CreateHsmCommandOutput) => void
  ): Promise<CreateHsmCommandOutput> | void {
    const command = new CreateHsmCommand(args);
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
   * <p>Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days
   *             after the DeleteBackup request is made. For more information on restoring a backup, see
   *                 <a>RestoreBackup</a>.</p>
   */
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  public deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupCommandOutput) => void
  ): Promise<DeleteBackupCommandOutput> | void {
    const command = new DeleteBackupCommand(args);
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
   * <p>Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must
   *       delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.</p>
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
   * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
   *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
   *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
   */
  public deleteHsm(args: DeleteHsmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmCommandOutput>;
  public deleteHsm(args: DeleteHsmCommandInput, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
  public deleteHsm(
    args: DeleteHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;
  public deleteHsm(
    args: DeleteHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHsmCommandOutput) => void),
    cb?: (err: any, data?: DeleteHsmCommandOutput) => void
  ): Promise<DeleteHsmCommandOutput> | void {
    const command = new DeleteHsmCommand(args);
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
   * <p>Gets information about backups of AWS CloudHSM clusters.</p>
   *          <p>This is a paginated operation, which means that each response might contain only a
   *       subset of all the backups. When the response contains only a subset of backups, it includes a
   *         <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code>
   *       request to get more backups. When you receive a response with no <code>NextToken</code> (or an
   *       empty or null value), that means there are no more backups to get.</p>
   */
  public describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): Promise<DescribeBackupsCommandOutput> | void {
    const command = new DescribeBackupsCommand(args);
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
   * <p>Gets information about AWS CloudHSM clusters.</p>
   *          <p>This is a paginated operation, which means that each response might contain only a
   *       subset of all the clusters. When the response contains only a subset of clusters, it includes
   *       a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code>
   *       request to get more clusters. When you receive a response with no <code>NextToken</code> (or
   *       an empty or null value), that means there are no more clusters to get.</p>
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
   * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your
   *       issuing certificate authority (CA) and the CA's root certificate. Before you can claim a
   *       cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA.
   *       To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
   */
  public initializeCluster(
    args: InitializeClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitializeClusterCommandOutput>;
  public initializeCluster(
    args: InitializeClusterCommandInput,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;
  public initializeCluster(
    args: InitializeClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitializeClusterCommandOutput) => void
  ): void;
  public initializeCluster(
    args: InitializeClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitializeClusterCommandOutput) => void),
    cb?: (err: any, data?: InitializeClusterCommandOutput) => void
  ): Promise<InitializeClusterCommandOutput> | void {
    const command = new InitializeClusterCommand(args);
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
   * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p>
   *          <p>This is a paginated operation, which means that each response might contain only a
   *       subset of all the tags. When the response contains only a subset of tags, it includes a
   *       <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to
   *       get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null
   *       value), that means there are no more tags to get.</p>
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
   * <p>Modifies attributes for AWS CloudHSM backup.</p>
   */
  public modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyBackupAttributesCommandOutput>;
  public modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;
  public modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): void;
  public modifyBackupAttributes(
    args: ModifyBackupAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyBackupAttributesCommandOutput) => void),
    cb?: (err: any, data?: ModifyBackupAttributesCommandOutput) => void
  ): Promise<ModifyBackupAttributesCommandOutput> | void {
    const command = new ModifyBackupAttributesCommand(args);
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
   * <p>Modifies AWS CloudHSM cluster.</p>
   */
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClusterCommandOutput>;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClusterCommandOutput) => void
  ): void;
  public modifyCluster(
    args: ModifyClusterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyClusterCommandOutput) => void),
    cb?: (err: any, data?: ModifyClusterCommandOutput) => void
  ): Promise<ModifyClusterCommandOutput> | void {
    const command = new ModifyClusterCommand(args);
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
   * <p>Restores a specified AWS CloudHSM backup that is in the
   *                 <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see
   *                 <a>DeleteBackup</a>.</p>
   */
  public restoreBackup(
    args: RestoreBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreBackupCommandOutput>;
  public restoreBackup(
    args: RestoreBackupCommandInput,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;
  public restoreBackup(
    args: RestoreBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreBackupCommandOutput) => void
  ): void;
  public restoreBackup(
    args: RestoreBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreBackupCommandOutput) => void),
    cb?: (err: any, data?: RestoreBackupCommandOutput) => void
  ): Promise<RestoreBackupCommandOutput> | void {
    const command = new RestoreBackupCommand(args);
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
   * <p>Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.</p>
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
   * <p>Removes the specified tag or tags from the specified AWS CloudHSM cluster.</p>
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
}
