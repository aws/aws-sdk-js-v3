import { FSxClient } from "./FSxClient";
import {
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
} from "./commands/CreateBackupCommand";
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
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "./commands/TagResourceCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 *
 *         <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 *
 */
export class FSx extends FSxClient {
  /**
   *
   *         <p>Creates a backup of an existing Amazon FSx for Windows File Server file system.
   *             Creating regular backups for your file system is a best practice that complements the
   *             replication that Amazon FSx for Windows File Server performs for your file system. It
   *             also enables you to restore from user modification of data.</p>
   *
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
   *         <p>The <code>CreateFileSystem</code> operation returns while the backup's
   *             lifecycle state is still <code>CREATING</code>. You can check the file system creation
   *             status by calling the <a>DescribeBackups</a> operation, which returns the
   *             backup state along with other information.</p>
   *
   *         <note>
   *             <p></p>
   *         </note>
   *
   *
   *
   */
  public createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<CreateBackupCommandOutput>;
  public createBackup(
    args: CreateBackupCommandInput,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Creates a new, empty Amazon FSx file system.</p>
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
   *
   *
   */
  public createFileSystem(
    args: CreateFileSystemCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File
   *             Server backup.</p>
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
   *
   *
   */
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Deletes an Amazon FSx for Windows File Server backup, deleting its contents. After
   *             deletion, the backup no longer exists, and its data is gone.</p>
   *
   *         <p>The <code>DeleteBackup</code> call returns instantly. The backup will not show up
   *             in later <code>DescribeBackups</code> calls.</p>
   *
   *         <important>
   *             <p>The data in a deleted backup is also deleted and can't be recovered by any
   *                 means.</p>
   *         </important>
   *
   *
   */
  public deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<DeleteBackupCommandOutput>;
  public deleteBackup(
    args: DeleteBackupCommandInput,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Deletes a file system, deleting its contents. After deletion, the file system no
   *             longer exists, and its data is gone. Any existing automatic backups will also be
   *             deleted.</p>
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
   *         <important>
   *             <p>The data in a deleted file system is also deleted and can't be recovered by
   *                 any means.</p>
   *         </important>
   *
   *
   */
  public deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Returns the description of specific Amazon FSx for Windows File Server backups, if
   *             a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all
   *             backups owned by your AWS account in the AWS Region of the endpoint that you're
   *             calling.</p>
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
   *                 <p>The implementation might return fewer than <code>MaxResults</code> file
   *                     system descriptions while still including a <code>NextToken</code>
   *                     value.</p>
   *
   *             </li>
   *             <li>
   *                 <p>The order of backups returned in the response of one
   *                         <code>DescribeBackups</code> call and the order of backups returned across
   *                     the responses of a multi-call iteration is unspecified.</p>
   *             </li>
   *          </ul>
   *
   *
   */
  public describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Returns the description of specific Amazon FSx file systems, if a
   *                 <code>FileSystemIds</code> value is provided for that file system. Otherwise, it
   *             returns descriptions of all file systems owned by your AWS account in the AWS Region of
   *             the endpoint that you're calling.</p>
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
   *
   *
   */
  public describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for
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
   *
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>Tags an Amazon FSx resource.</p>
   *
   *
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions,
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *         <p>This action removes a tag from an Amazon FSx resource.</p>
   *
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   *
   *          <p>Updates a file system configuration.</p>
   *
   *
   */
  public updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options?: __HttpHandlerOptions,
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
      this.send(command, optionsOrCb)
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`)
      this.send(command, optionsOrCb || {}, cb)
    } else {
      return this.send(command, optionsOrCb);
    }
  }

}
