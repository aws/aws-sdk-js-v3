import { FSxClient } from "./FSxClient";
import {
  AssociateFileSystemAliasesCommand,
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
} from "./commands/AssociateFileSystemAliasesCommand";
import {
  CancelDataRepositoryTaskCommand,
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
} from "./commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommand, CopyBackupCommandInput, CopyBackupCommandOutput } from "./commands/CopyBackupCommand";
import {
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
} from "./commands/CreateBackupCommand";
import {
  CreateDataRepositoryTaskCommand,
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
} from "./commands/CreateDataRepositoryTaskCommand";
import {
  CreateFileSystemCommand,
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
} from "./commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommand,
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
} from "./commands/CreateFileSystemFromBackupCommand";
import {
  CreateStorageVirtualMachineCommand,
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
} from "./commands/CreateStorageVirtualMachineCommand";
import {
  CreateVolumeCommand,
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
} from "./commands/CreateVolumeCommand";
import {
  CreateVolumeFromBackupCommand,
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
} from "./commands/CreateVolumeFromBackupCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import {
  DeleteFileSystemCommand,
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
} from "./commands/DeleteFileSystemCommand";
import {
  DeleteStorageVirtualMachineCommand,
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
} from "./commands/DeleteStorageVirtualMachineCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "./commands/DescribeDataRepositoryTasksCommand";
import {
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "./commands/DescribeFileSystemAliasesCommand";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeStorageVirtualMachinesCommand,
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "./commands/DescribeStorageVirtualMachinesCommand";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "./commands/DescribeVolumesCommand";
import {
  DisassociateFileSystemAliasesCommand,
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
} from "./commands/DisassociateFileSystemAliasesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFileSystemCommand,
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
} from "./commands/UpdateFileSystemCommand";
import {
  UpdateStorageVirtualMachineCommand,
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
} from "./commands/UpdateStorageVirtualMachineCommand";
import {
  UpdateVolumeCommand,
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
} from "./commands/UpdateVolumeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 */
export class FSx extends FSxClient {
  /**
   * <p>Use this action to associate one or more Domain Name Server (DNS) aliases with an existing Amazon FSx for Windows File Server file system.
   *         A file system can have a maximum of 50 DNS aliases associated with it at any one time. If you try to
   *         associate a DNS alias that is already associated with the file system, FSx takes no action on that alias in the request.
   *         For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a> and
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/walkthrough05-file-system-custom-CNAME.html">Walkthrough 5: Using DNS aliases to access your file system</a>, including
   *              additional steps you must take to be able to access your file system using a DNS alias.</p>
   *         <p>The system response shows the DNS aliases that
   *             Amazon FSx is attempting to associate with the file system.
   *             Use the  API
   *             operation to monitor the status of the aliases Amazon FSx is
   *             associating with the file system.</p>
   */
  public associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFileSystemAliasesCommandOutput>;
  public associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    cb: (err: any, data?: AssociateFileSystemAliasesCommandOutput) => void
  ): void;
  public associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFileSystemAliasesCommandOutput) => void
  ): void;
  public associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFileSystemAliasesCommandOutput) => void),
    cb?: (err: any, data?: AssociateFileSystemAliasesCommandOutput) => void
  ): Promise<AssociateFileSystemAliasesCommandOutput> | void {
    const command = new AssociateFileSystemAliasesCommand(args);
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
   * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the
   *             <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p>
   *             <ul>
   *             <li>
   *                <p>Any files that FSx has already exported are not reverted.</p>
   *             </li>
   *             <li>
   *                <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p>
   *             </li>
   *             <li>
   *                <p>FSx does not export any files that have not yet been exported.</p>
   *             </li>
   *          </ul>
   */
  public cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataRepositoryTaskCommandOutput>;
  public cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    cb: (err: any, data?: CancelDataRepositoryTaskCommandOutput) => void
  ): void;
  public cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataRepositoryTaskCommandOutput) => void
  ): void;
  public cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelDataRepositoryTaskCommandOutput) => void),
    cb?: (err: any, data?: CancelDataRepositoryTaskCommandOutput) => void
  ): Promise<CancelDataRepositoryTaskCommandOutput> | void {
    const command = new CancelDataRepositoryTaskCommand(args);
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
   * <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region
   *          (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five
   *          backup copy requests in progress to a single destination Region per account.</p>
   *          <p>You can use cross-Region backup copies for cross-region disaster recovery.
   *          You periodically take backups and copy them to another Region so that in the
   *          event of a disaster in the primary Region, you can restore from backup and recover
   *          availability quickly in the other Region. You can make cross-Region copies
   *          only within your Amazon Web Services partition.</p>
   *          <p> You can also use backup copies to clone your file data set to another Region
   *          or within the same Region.</p>
   *          <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region
   *          from which the backup will be copied. For example, if you make the call from the
   *          <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code>
   *          Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter
   *          to make a cross-Region copy. If you don't specify a Region, the backup copy is
   *          created in the same Region where the request is sent from (in-Region copy).</p>
   *          <p>For more information on creating backup copies, see
   *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups">
   *             Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i> and
   *          <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a>
   *          in the <i>Amazon FSx for Lustre User Guide</i>.</p>
   */
  public copyBackup(args: CopyBackupCommandInput, options?: __HttpHandlerOptions): Promise<CopyBackupCommandOutput>;
  public copyBackup(args: CopyBackupCommandInput, cb: (err: any, data?: CopyBackupCommandOutput) => void): void;
  public copyBackup(
    args: CopyBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBackupCommandOutput) => void
  ): void;
  public copyBackup(
    args: CopyBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyBackupCommandOutput) => void),
    cb?: (err: any, data?: CopyBackupCommandOutput) => void
  ): Promise<CopyBackupCommandOutput> | void {
    const command = new CopyBackupCommand(args);
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
   * <p>Creates a backup of an existing Amazon FSx for Windows File Server
   *             or Amazon FSx for Lustre file system, or of an Amazon FSx for NetApp ONTAP
   *             volume. Creating regular backups is a best practice, enabling you to restore
   *             a file system or volume from a backup if an issue arises with the original
   *             file system or volume.</p>
   *         <p>For Amazon FSx for Lustre file systems, you can create a backup only
   *             for file systems with the following configuration:</p>
   *         <ul>
   *             <li>
   *                <p>a Persistent deployment type</p>
   *             </li>
   *             <li>
   *                <p>is <i>not</i> linked to a data repository.</p>
   *             </li>
   *          </ul>
   *             <p>For more information about backups, see the following:</p>
   *         <ul>
   *             <li>
   *                <p>For Amazon FSx for Lustre,
   *                 see <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html">Working with FSx for Lustre backups</a>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon FSx for Windows,
   *                 see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html">Working with FSx for Windows backups</a>.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon FSx for NetApp ONTAP,
   *                 see <a href="https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/using-backups.html">Working with FSx for NetApp ONTAP backups</a>.</p>
   *             </li>
   *          </ul>
   *         <p>If a backup with the specified client request token exists, and the parameters
   *             match, this operation returns the description of the existing backup. If a backup
   *             specified client request token exists, and the parameters don't match, this
   *             operation returns <code>IncompatibleParameterError</code>. If a backup with the
   *             specified client request token doesn't exist, <code>CreateBackup</code> does the
   *             following: </p>
   *         <ul>
   *             <li>
   *                 <p>Creates a new Amazon FSx backup with an assigned ID, and an initial
   *                     lifecycle state of <code>CREATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Returns the description of the backup.</p>
   *             </li>
   *          </ul>
   *
   *         <p>By using the idempotent operation, you can retry a <code>CreateBackup</code>
   *             operation without the risk of creating an extra backup. This approach can be useful when
   *             an initial call fails in a way that makes it unclear whether a backup was created. If
   *             you use the same client request token and the initial call created a backup, the
   *             operation returns a successful result because all the parameters are the same.</p>
   *
   *         <p>The <code>CreateBackup</code> operation returns while the backup's
   *             lifecycle state is still <code>CREATING</code>. You can check the backup creation
   *             status by calling the <a>DescribeBackups</a> operation, which returns the
   *             backup state along with other information.</p>
   */
  public createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupCommandOutput>;
  public createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
  public createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupCommandOutput) => void
  ): Promise<CreateBackupCommandOutput> | void {
    const command = new CreateBackupCommand(args);
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
   * <p>Creates an Amazon FSx for Lustre data repository task. You use data repository tasks
   *             to perform bulk operations between your Amazon FSx file system and its linked data
   *             repository. An example of a data repository task is
   *             exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A
   *                 <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not
   *             linked to the FSx file system. To learn more about data repository tasks, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
   *             To learn more about linking a data repository to your file system, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
   */
  public createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataRepositoryTaskCommandOutput>;
  public createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    cb: (err: any, data?: CreateDataRepositoryTaskCommandOutput) => void
  ): void;
  public createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataRepositoryTaskCommandOutput) => void
  ): void;
  public createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataRepositoryTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateDataRepositoryTaskCommandOutput) => void
  ): Promise<CreateDataRepositoryTaskCommandOutput> | void {
    const command = new CreateDataRepositoryTaskCommand(args);
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
   * <p>Creates a new, empty Amazon FSx file system.</p>
   *
   *         <p>If a file system with the specified client request token exists and the parameters
   *             match, <code>CreateFileSystem</code> returns the description of the existing file
   *             system. If a file system specified client request token exists and the parameters
   *             don't match, this call returns <code>IncompatibleParameterError</code>. If a file
   *             system with the specified client request token doesn't exist,
   *                 <code>CreateFileSystem</code> does the following: </p>
   *         <ul>
   *             <li>
   *                 <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an
   *                     initial lifecycle state of <code>CREATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Returns the description of the file system.</p>
   *             </li>
   *          </ul>
   *
   *         <p>This operation requires a client request token in the request that Amazon FSx uses
   *             to ensure idempotent creation. This means that calling the operation multiple times with
   *             the same client request token has no effect. By using the idempotent operation, you can
   *             retry a <code>CreateFileSystem</code> operation without the risk of creating an extra
   *             file system. This approach can be useful when an initial call fails in a way that makes
   *             it unclear whether a file system was created. Examples are if a transport level timeout
   *             occurred, or your connection was reset. If you use the same client request token and the
   *             initial call created a file system, the client receives success as long as the
   *             parameters are the same.</p>
   *         <note>
   *             <p>The <code>CreateFileSystem</code> call returns while the file system's
   *                 lifecycle state is still <code>CREATING</code>. You can check the file-system
   *                 creation status by calling the <a>DescribeFileSystems</a> operation,
   *                 which returns the file system state along with other information.</p>
   *         </note>
   */
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemCommandOutput>;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): Promise<CreateFileSystemCommandOutput> | void {
    const command = new CreateFileSystemCommand(args);
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
   * <p>Creates a new Amazon FSx for Lustre or Amazon FSx for Windows File Server file system
   *             from an existing Amazon FSx backup.</p>
   *
   *         <p>If a file system with the specified client request token exists and the parameters
   *             match, this operation returns the description of the file system. If a client
   *             request token specified by the file system exists and the parameters don't match,
   *             this call returns <code>IncompatibleParameterError</code>. If a file system with the
   *             specified client request token doesn't exist, this operation does the following:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>Creates a new Amazon FSx file system from backup with an assigned ID, and
   *                     an initial lifecycle state of <code>CREATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Returns the description of the file system.</p>
   *             </li>
   *          </ul>
   *
   *         <p>Parameters like Active Directory, default share name, automatic backup, and backup
   *             settings default to the parameters of the file system that was backed up, unless
   *             overridden. You can explicitly supply other settings.</p>
   *
   *         <p>By using the idempotent operation, you can retry a
   *                 <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra
   *             file system. This approach can be useful when an initial call fails in a way that makes
   *             it unclear whether a file system was created. Examples are if a transport level timeout
   *             occurred, or your connection was reset. If you use the same client request token and the
   *             initial call created a file system, the client receives success as long as the
   *             parameters are the same.</p>
   *         <note>
   *             <p>The <code>CreateFileSystemFromBackup</code> call returns while the file
   *                 system's lifecycle state is still <code>CREATING</code>. You can check the
   *                 file-system creation status by calling the <a>DescribeFileSystems</a>
   *                 operation, which returns the file system state along with other
   *                 information.</p>
   *         </note>
   */
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemFromBackupCommandOutput>;
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    cb: (err: any, data?: CreateFileSystemFromBackupCommandOutput) => void
  ): void;
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemFromBackupCommandOutput) => void
  ): void;
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFileSystemFromBackupCommandOutput) => void),
    cb?: (err: any, data?: CreateFileSystemFromBackupCommandOutput) => void
  ): Promise<CreateFileSystemFromBackupCommandOutput> | void {
    const command = new CreateFileSystemFromBackupCommand(args);
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
   * <p>Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.</p>
   */
  public createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageVirtualMachineCommandOutput>;
  public createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    cb: (err: any, data?: CreateStorageVirtualMachineCommandOutput) => void
  ): void;
  public createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageVirtualMachineCommandOutput) => void
  ): void;
  public createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStorageVirtualMachineCommandOutput) => void),
    cb?: (err: any, data?: CreateStorageVirtualMachineCommandOutput) => void
  ): Promise<CreateStorageVirtualMachineCommandOutput> | void {
    const command = new CreateStorageVirtualMachineCommand(args);
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
   * <p>Creates an Amazon FSx for NetApp ONTAP storage volume.</p>
   */
  public createVolume(
    args: CreateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeCommandOutput>;
  public createVolume(args: CreateVolumeCommandInput, cb: (err: any, data?: CreateVolumeCommandOutput) => void): void;
  public createVolume(
    args: CreateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;
  public createVolume(
    args: CreateVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVolumeCommandOutput) => void),
    cb?: (err: any, data?: CreateVolumeCommandOutput) => void
  ): Promise<CreateVolumeCommandOutput> | void {
    const command = new CreateVolumeCommand(args);
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
   * <p>Creates a new Amazon FSx for NetApp ONTAP volume from an
   *             existing Amazon FSx volume backup.</p>
   */
  public createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeFromBackupCommandOutput>;
  public createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    cb: (err: any, data?: CreateVolumeFromBackupCommandOutput) => void
  ): void;
  public createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeFromBackupCommandOutput) => void
  ): void;
  public createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVolumeFromBackupCommandOutput) => void),
    cb?: (err: any, data?: CreateVolumeFromBackupCommandOutput) => void
  ): Promise<CreateVolumeFromBackupCommandOutput> | void {
    const command = new CreateVolumeFromBackupCommand(args);
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
   * <p>Deletes an Amazon FSx backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.</p>
   *
   *         <p>The <code>DeleteBackup</code> call returns instantly. The backup will not show up
   *             in later <code>DescribeBackups</code> calls.</p>
   *
   *         <important>
   *             <p>The data in a deleted backup is also deleted and can't be recovered by any
   *                 means.</p>
   *         </important>
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
   * <p>Deletes a file system, deleting its contents. After deletion, the file system no
   *             longer exists, and its data is gone. Any existing automatic backups will also be
   *             deleted.</p>
   *         <p>To delete an Amazon FSx for NetApp ONTAP file system, first delete all the volumes
   *             and SVMs on the file system. Then provide a <code>FileSystemId</code> value to the
   *             <code>DeleFileSystem</code> operation.</p>
   *
   *         <p>By default, when you delete an Amazon FSx for Windows File Server file system, a
   *             final backup is created upon deletion. This final backup is not subject to the file
   *             system's retention policy, and must be manually deleted.</p>
   *
   *         <p>The <code>DeleteFileSystem</code> action returns while the file system has the
   *                 <code>DELETING</code> status. You can check the file system deletion status by
   *             calling the <a>DescribeFileSystems</a> action, which returns a list of file
   *             systems in your account. If you pass the file system ID for a deleted file system, the
   *                 <a>DescribeFileSystems</a> returns a <code>FileSystemNotFound</code>
   *             error.</p>
   *         <note>
   *             <p>Deleting an Amazon FSx for Lustre file system will fail with a 400 BadRequest if
   *             a data repository task is in a <code>PENDING</code> or <code>EXECUTING</code>
   *             state.</p>
   *          </note>
   *         <important>
   *             <p>The data in a deleted file system is also deleted and can't be recovered by
   *                 any means.</p>
   *         </important>
   */
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemCommandOutput>;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFileSystemCommandOutput) => void),
    cb?: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): Promise<DeleteFileSystemCommandOutput> | void {
    const command = new DeleteFileSystemCommand(args);
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
   * <p>Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior
   *         to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.</p>
   */
  public deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageVirtualMachineCommandOutput>;
  public deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    cb: (err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void
  ): void;
  public deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void
  ): void;
  public deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void),
    cb?: (err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void
  ): Promise<DeleteStorageVirtualMachineCommandOutput> | void {
    const command = new DeleteStorageVirtualMachineCommand(args);
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
   * <p>Deletes an Amazon FSx for NetApp ONTAP volume. When deleting a volume,
   *         you have the option of creating a final backup. If you create a final backup, you have the option to
   *         apply Tags to the backup. You need to have <code>fsx:TagResource</code>
   *             permission in order to apply tags to the backup.</p>
   */
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVolumeCommandOutput>;
  public deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  public deleteVolume(
    args: DeleteVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVolumeCommandOutput) => void),
    cb?: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): Promise<DeleteVolumeCommandOutput> | void {
    const command = new DeleteVolumeCommand(args);
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
   * <p>Returns the description of specific Amazon FSx backups, if
   *             a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all
   *             backups owned by your Amazon Web Services account  in the Amazon Web Services Region
   *             of the endpoint that you're calling.</p>
   *
   *         <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code>
   *             parameter to limit the number of backups in a response. If more backups remain, Amazon
   *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
   *             request with the <code>NextToken</code> request parameter set to the value of
   *                 <code>NextToken</code> from the last response.</p>
   *
   *         <p>This action is used in an iterative process to retrieve a list of your backups.
   *                 <code>DescribeBackups</code> is called first without a <code>NextToken</code>value.
   *             Then the action continues to be called with the <code>NextToken</code> parameter set to
   *             the value of the last <code>NextToken</code> value until a response has no
   *                 <code>NextToken</code>.</p>
   *
   *         <p>When using this action, keep the following in mind:</p>
   *         <ul>
   *             <li>
   *                 <p>The implementation might return fewer than <code>MaxResults</code>
   *                     backup descriptions while still including a <code>NextToken</code>
   *                     value.</p>
   *             </li>
   *             <li>
   *                 <p>The order of backups returned in the response of one
   *                         <code>DescribeBackups</code> call and the order of backups returned across
   *                     the responses of a multi-call iteration is unspecified.</p>
   *             </li>
   *          </ul>
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
   * <p>Returns the description of specific Amazon FSx for Lustre data repository tasks, if
   *             one or more <code>TaskIds</code> values are provided in the request, or if filters are used in the request.
   *             You can use filters to narrow the response to include just tasks for specific file systems,
   *             or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned
   *             by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling.</p>
   *
   *         <p>When retrieving all tasks, you can paginate the response by using  the optional <code>MaxResults</code>
   *             parameter to limit the number of tasks returned in a response. If more tasks remain, Amazon
   *             FSx returns a <code>NextToken</code> value in the response. In this case, send a later
   *             request with the <code>NextToken</code> request parameter set to the value of
   *             <code>NextToken</code> from the last response.</p>
   */
  public describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataRepositoryTasksCommandOutput>;
  public describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    cb: (err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void
  ): void;
  public describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void
  ): void;
  public describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void
  ): Promise<DescribeDataRepositoryTasksCommandOutput> | void {
    const command = new DescribeDataRepositoryTasksCommand(args);
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
   * <p>Returns the DNS aliases that are associated with the specified Amazon FSx for Windows File Server file system. A history of
   *             all DNS aliases that have been associated with and disassociated from the file system is available in the list of <a>AdministrativeAction</a>
   *         provided in the <a>DescribeFileSystems</a> operation response.</p>
   */
  public describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemAliasesCommandOutput>;
  public describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    cb: (err: any, data?: DescribeFileSystemAliasesCommandOutput) => void
  ): void;
  public describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemAliasesCommandOutput) => void
  ): void;
  public describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFileSystemAliasesCommandOutput) => void),
    cb?: (err: any, data?: DescribeFileSystemAliasesCommandOutput) => void
  ): Promise<DescribeFileSystemAliasesCommandOutput> | void {
    const command = new DescribeFileSystemAliasesCommand(args);
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
   * <p>Returns the description of specific Amazon FSx file systems, if a
   *                 <code>FileSystemIds</code> value is provided for that file system. Otherwise, it
   *             returns descriptions of all file systems owned by your Amazon Web Services account in
   *             the Amazon Web Services Region of the endpoint that you're calling.</p>
   *
   *         <p>When retrieving all file system descriptions, you can optionally specify the
   *                 <code>MaxResults</code> parameter to limit the number of descriptions in a response.
   *             If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code>
   *             value in the response. In this case, send a later request with the
   *                 <code>NextToken</code> request parameter set to the value of <code>NextToken</code>
   *             from the last response.</p>
   *
   *         <p>This action is used in an iterative process to retrieve a list of your file system
   *             descriptions. <code>DescribeFileSystems</code> is called first without a
   *                 <code>NextToken</code>value. Then the action continues to be called with the
   *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
   *             value until a response has no <code>NextToken</code>.</p>
   *
   *         <p>When using this action, keep the following in mind:</p>
   *         <ul>
   *             <li>
   *                 <p>The implementation might return fewer than <code>MaxResults</code> file
   *                     system descriptions while still including a <code>NextToken</code>
   *                     value.</p>
   *
   *             </li>
   *             <li>
   *                 <p>The order of file systems returned in the response of one
   *                         <code>DescribeFileSystems</code> call and the order of file systems returned
   *                     across the responses of a multicall iteration is unspecified.</p>
   *             </li>
   *          </ul>
   */
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemsCommandOutput>;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFileSystemsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): Promise<DescribeFileSystemsCommandOutput> | void {
    const command = new DescribeFileSystemsCommand(args);
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
   * <p>Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).</p>
   */
  public describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageVirtualMachinesCommandOutput>;
  public describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    cb: (err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void
  ): void;
  public describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void
  ): void;
  public describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void),
    cb?: (err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void
  ): Promise<DescribeStorageVirtualMachinesCommandOutput> | void {
    const command = new DescribeStorageVirtualMachinesCommand(args);
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
   * <p>Describes one or more Amazon FSx for NetApp ONTAP volumes.</p>
   */
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  public describeVolumes(
    args: DescribeVolumesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVolumesCommandOutput) => void),
    cb?: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): Promise<DescribeVolumesCommandOutput> | void {
    const command = new DescribeVolumesCommand(args);
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
   * <p>Use this action to disassociate, or remove, one or more Domain Name Service (DNS) aliases
   *             from an Amazon FSx for Windows File Server file system. If you attempt to disassociate a DNS alias that is not
   *             associated with the file system, Amazon FSx responds with a 400 Bad Request. For more information, see
   *             <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">Working with DNS Aliases</a>.</p>
   *         <p>The system generated response showing the DNS aliases that
   *             Amazon FSx is attempting to disassociate from the file system.
   *             Use the  API
   *             operation to monitor the status of the aliases Amazon FSx is
   *             disassociating with the file system.</p>
   */
  public disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFileSystemAliasesCommandOutput>;
  public disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    cb: (err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void
  ): void;
  public disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void
  ): void;
  public disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void),
    cb?: (err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void
  ): Promise<DisassociateFileSystemAliasesCommandOutput> | void {
    const command = new DisassociateFileSystemAliasesCommand(args);
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
   * <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for
   *             Windows File Server.</p>
   *
   *         <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code>
   *             parameter to limit the number of tags in a response. If more tags remain, Amazon FSx
   *             returns a <code>NextToken</code> value in the response. In this case, send a later
   *             request with the <code>NextToken</code> request parameter set to the value of
   *                 <code>NextToken</code> from the last response.</p>
   *
   *         <p>This action is used in an iterative process to retrieve a list of your tags.
   *                 <code>ListTagsForResource</code> is called first without a
   *             <code>NextToken</code>value. Then the action continues to be called with the
   *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
   *             value until a response has no <code>NextToken</code>.</p>
   *
   *         <p>When using this action, keep the following in mind:</p>
   *         <ul>
   *             <li>
   *                 <p>The implementation might return fewer than <code>MaxResults</code> file
   *                     system descriptions while still including a <code>NextToken</code>
   *                     value.</p>
   *
   *             </li>
   *             <li>
   *                 <p>The order of tags returned in the response of one
   *                         <code>ListTagsForResource</code> call and the order of tags returned across
   *                     the responses of a multi-call iteration is unspecified.</p>
   *             </li>
   *          </ul>
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
   * <p>Tags an Amazon FSx resource.</p>
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
   * <p>This action removes a tag from an Amazon FSx resource.</p>
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
   * <p>Use this operation to update the configuration of an existing Amazon FSx file system.
   *       You can update multiple properties in a single request.</p>
   *          <p>For Amazon FSx for Windows File Server file systems, you can update the following
   *     properties:</p>
   *          <ul>
   *             <li>
   *                <p>AuditLogConfiguration</p>
   *             </li>
   *             <li>
   *                <p>AutomaticBackupRetentionDays</p>
   *             </li>
   *             <li>
   *                <p>DailyAutomaticBackupStartTime</p>
   *             </li>
   *             <li>
   *                <p>SelfManagedActiveDirectoryConfiguration</p>
   *             </li>
   *             <li>
   *                <p>StorageCapacity</p>
   *             </li>
   *             <li>
   *                <p>ThroughputCapacity</p>
   *             </li>
   *             <li>
   *                <p>WeeklyMaintenanceStartTime</p>
   *             </li>
   *          </ul>
   *          <p>For Amazon FSx for Lustre file systems, you can update the following
   *       properties:</p>
   *          <ul>
   *             <li>
   *                <p>AutoImportPolicy</p>
   *             </li>
   *             <li>
   *                <p>AutomaticBackupRetentionDays</p>
   *             </li>
   *             <li>
   *                <p>DailyAutomaticBackupStartTime</p>
   *             </li>
   *             <li>
   *                <p>DataCompressionType</p>
   *             </li>
   *             <li>
   *                <p>StorageCapacity</p>
   *             </li>
   *             <li>
   *                <p>WeeklyMaintenanceStartTime</p>
   *             </li>
   *          </ul>
   *          <p>For Amazon FSx for NetApp ONTAP file systems, you can update the following
   *       properties:</p>
   *          <ul>
   *             <li>
   *                <p>AutomaticBackupRetentionDays</p>
   *             </li>
   *             <li>
   *                <p>DailyAutomaticBackupStartTime</p>
   *             </li>
   *             <li>
   *                <p>FsxAdminPassword</p>
   *             </li>
   *             <li>
   *                <p>WeeklyMaintenanceStartTime</p>
   *             </li>
   *          </ul>
   */
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemCommandOutput>;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFileSystemCommandOutput) => void),
    cb?: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): Promise<UpdateFileSystemCommandOutput> | void {
    const command = new UpdateFileSystemCommand(args);
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
   * <p>Updates an Amazon FSx for ONTAP storage virtual machine (SVM).</p>
   */
  public updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageVirtualMachineCommandOutput>;
  public updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    cb: (err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void
  ): void;
  public updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void
  ): void;
  public updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void),
    cb?: (err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void
  ): Promise<UpdateStorageVirtualMachineCommandOutput> | void {
    const command = new UpdateStorageVirtualMachineCommand(args);
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
   * <p>Updates an Amazon FSx for NetApp ONTAP volume's configuration.</p>
   */
  public updateVolume(
    args: UpdateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVolumeCommandOutput>;
  public updateVolume(args: UpdateVolumeCommandInput, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
  public updateVolume(
    args: UpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;
  public updateVolume(
    args: UpdateVolumeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVolumeCommandOutput) => void),
    cb?: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): Promise<UpdateVolumeCommandOutput> | void {
    const command = new UpdateVolumeCommand(args);
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
