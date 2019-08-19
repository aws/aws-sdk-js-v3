import { FSxClient } from "./FSxClient";
import { ActiveDirectoryError } from "./types/ActiveDirectoryError";
import { BackupInProgress } from "./types/BackupInProgress";
import { BackupNotFound } from "./types/BackupNotFound";
import { BackupRestoring } from "./types/BackupRestoring";
import { BadRequest } from "./types/BadRequest";
import { CreateBackupInput } from "./types/CreateBackupInput";
import { CreateBackupOutput } from "./types/CreateBackupOutput";
import { CreateFileSystemFromBackupInput } from "./types/CreateFileSystemFromBackupInput";
import { CreateFileSystemFromBackupOutput } from "./types/CreateFileSystemFromBackupOutput";
import { CreateFileSystemInput } from "./types/CreateFileSystemInput";
import { CreateFileSystemOutput } from "./types/CreateFileSystemOutput";
import { DeleteBackupInput } from "./types/DeleteBackupInput";
import { DeleteBackupOutput } from "./types/DeleteBackupOutput";
import { DeleteFileSystemInput } from "./types/DeleteFileSystemInput";
import { DeleteFileSystemOutput } from "./types/DeleteFileSystemOutput";
import { DescribeBackupsInput } from "./types/DescribeBackupsInput";
import { DescribeBackupsOutput } from "./types/DescribeBackupsOutput";
import { DescribeFileSystemsInput } from "./types/DescribeFileSystemsInput";
import { DescribeFileSystemsOutput } from "./types/DescribeFileSystemsOutput";
import { FileSystemNotFound } from "./types/FileSystemNotFound";
import { IncompatibleParameterError } from "./types/IncompatibleParameterError";
import { InternalServerError } from "./types/InternalServerError";
import { InvalidExportPath } from "./types/InvalidExportPath";
import { InvalidImportPath } from "./types/InvalidImportPath";
import { InvalidNetworkSettings } from "./types/InvalidNetworkSettings";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { MissingFileSystemConfiguration } from "./types/MissingFileSystemConfiguration";
import { NotServiceResourceError } from "./types/NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "./types/ResourceDoesNotSupportTagging";
import { ResourceNotFound } from "./types/ResourceNotFound";
import { ServiceLimitExceeded } from "./types/ServiceLimitExceeded";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnsupportedOperation } from "./types/UnsupportedOperation";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateFileSystemInput } from "./types/UpdateFileSystemInput";
import { UpdateFileSystemOutput } from "./types/UpdateFileSystemOutput";
import { CreateBackupCommand } from "./commands/CreateBackupCommand";
import { CreateFileSystemCommand } from "./commands/CreateFileSystemCommand";
import { CreateFileSystemFromBackupCommand } from "./commands/CreateFileSystemFromBackupCommand";
import { DeleteBackupCommand } from "./commands/DeleteBackupCommand";
import { DeleteFileSystemCommand } from "./commands/DeleteFileSystemCommand";
import { DescribeBackupsCommand } from "./commands/DescribeBackupsCommand";
import { DescribeFileSystemsCommand } from "./commands/DescribeFileSystemsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateFileSystemCommand } from "./commands/UpdateFileSystemCommand";

export class FSx extends FSxClient {
  /**
   * <p>Creates a backup of an existing Amazon FSx for Windows File Server file system. Creating regular backups for your file system is a best practice that complements the replication that Amazon FSx for Windows File Server performs for your file system. It also enables you to restore from user modification of data.</p> <p>If a backup with the specified client request token exists, and the parameters match, this operation returns the description of the existing backup. If a backup specified client request token exists, and the parameters don't match, this operation returns <code>IncompatibleParameterError</code>. If a backup with the specified client request token doesn't exist, <code>CreateBackup</code> does the following: </p> <ul> <li> <p>Creates a new Amazon FSx backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the backup.</p> </li> </ul> <p>By using the idempotent operation, you can retry a <code>CreateBackup</code> operation without the risk of creating an extra backup. This approach can be useful when an initial call fails in a way that makes it unclear whether a backup was created. If you use the same client request token and the initial call created a backup, the operation returns a successful result because all the parameters are the same.</p> <p>The <code>CreateFileSystem</code> operation returns while the backup's lifecycle state is still <code>CREATING</code>. You can check the file system creation status by calling the <a>DescribeBackups</a> operation, which returns the backup state along with other information.</p> <note> <p/> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {UnsupportedOperation} <p>An error occured.</p>
   *   - {FileSystemNotFound} <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
   *   - {BackupInProgress} <p>Another backup is already under way. Wait for completion before initiating additional backups of this file system.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {ServiceLimitExceeded} <p>An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting AWS Support. </p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackup(args: CreateBackupInput): Promise<CreateBackupOutput>;
  public createBackup(
    args: CreateBackupInput,
    cb: (err: any, data?: CreateBackupOutput) => void
  ): void;
  public createBackup(
    args: CreateBackupInput,
    cb?: (err: any, data?: CreateBackupOutput) => void
  ): Promise<CreateBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new, empty Amazon FSx file system.</p> <p>If a file system with the specified client request token exists and the parameters match, <code>CreateFileSystem</code> returns the description of the existing file system. If a file system specified client request token exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, <code>CreateFileSystem</code> does the following: </p> <ul> <li> <p>Creates a new, empty Amazon FSx file system with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>This operation requires a client request token in the request that Amazon FSx uses to ensure idempotent creation. This means that calling the operation multiple times with the same client request token has no effect. By using the idempotent operation, you can retry a <code>CreateFileSystem</code> operation without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystem</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a>DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {ActiveDirectoryError} <p>An Active Directory error.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {InvalidImportPath} <p>The path provided for data repository import isn't valid.</p>
   *   - {InvalidExportPath} <p>The path provided for data repository export isn't valid.</p>
   *   - {InvalidNetworkSettings} <p>One or more network settings specified in the request are invalid. <code>InvalidVpcId</code> means that the ID passed for the virtual private cloud (VPC) is invalid. <code>InvalidSubnetIds</code> returns the list of IDs for subnets that are either invalid or not part of the VPC specified. <code>InvalidSecurityGroupIds</code> returns the list of IDs for security groups that are either invalid or not part of the VPC specified.</p>
   *   - {ServiceLimitExceeded} <p>An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting AWS Support. </p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {MissingFileSystemConfiguration} <p>File system configuration is required for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFileSystem(
    args: CreateFileSystemInput
  ): Promise<CreateFileSystemOutput>;
  public createFileSystem(
    args: CreateFileSystemInput,
    cb: (err: any, data?: CreateFileSystemOutput) => void
  ): void;
  public createFileSystem(
    args: CreateFileSystemInput,
    cb?: (err: any, data?: CreateFileSystemOutput) => void
  ): Promise<CreateFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new Amazon FSx file system from an existing Amazon FSx for Windows File Server backup.</p> <p>If a file system with the specified client request token exists and the parameters match, this operation returns the description of the file system. If a client request token specified by the file system exists and the parameters don't match, this call returns <code>IncompatibleParameterError</code>. If a file system with the specified client request token doesn't exist, this operation does the following:</p> <ul> <li> <p>Creates a new Amazon FSx file system from backup with an assigned ID, and an initial lifecycle state of <code>CREATING</code>.</p> </li> <li> <p>Returns the description of the file system.</p> </li> </ul> <p>Parameters like Active Directory, default share name, automatic backup, and backup settings default to the parameters of the file system that was backed up, unless overridden. You can explicitly supply other settings.</p> <p>By using the idempotent operation, you can retry a <code>CreateFileSystemFromBackup</code> call without the risk of creating an extra file system. This approach can be useful when an initial call fails in a way that makes it unclear whether a file system was created. Examples are if a transport level timeout occurred, or your connection was reset. If you use the same client request token and the initial call created a file system, the client receives success as long as the parameters are the same.</p> <note> <p>The <code>CreateFileSystemFromBackup</code> call returns while the file system's lifecycle state is still <code>CREATING</code>. You can check the file-system creation status by calling the <a>DescribeFileSystems</a> operation, which returns the file system state along with other information.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {ActiveDirectoryError} <p>An Active Directory error.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {InvalidNetworkSettings} <p>One or more network settings specified in the request are invalid. <code>InvalidVpcId</code> means that the ID passed for the virtual private cloud (VPC) is invalid. <code>InvalidSubnetIds</code> returns the list of IDs for subnets that are either invalid or not part of the VPC specified. <code>InvalidSecurityGroupIds</code> returns the list of IDs for security groups that are either invalid or not part of the VPC specified.</p>
   *   - {ServiceLimitExceeded} <p>An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting AWS Support. </p>
   *   - {BackupNotFound} <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {MissingFileSystemConfiguration} <p>File system configuration is required for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupInput
  ): Promise<CreateFileSystemFromBackupOutput>;
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupInput,
    cb: (err: any, data?: CreateFileSystemFromBackupOutput) => void
  ): void;
  public createFileSystemFromBackup(
    args: CreateFileSystemFromBackupInput,
    cb?: (err: any, data?: CreateFileSystemFromBackupOutput) => void
  ): Promise<CreateFileSystemFromBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFileSystemFromBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an Amazon FSx for Windows File Server backup, deleting its contents. After deletion, the backup no longer exists, and its data is gone.</p> <p>The <code>DeleteBackup</code> call returns instantly. The backup will not show up in later <code>DescribeBackups</code> calls.</p> <important> <p>The data in a deleted backup is also deleted and can't be recovered by any means.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {BackupInProgress} <p>Another backup is already under way. Wait for completion before initiating additional backups of this file system.</p>
   *   - {BackupNotFound} <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
   *   - {BackupRestoring} <p>You can't delete a backup while it's being used to restore a file system.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackup(args: DeleteBackupInput): Promise<DeleteBackupOutput>;
  public deleteBackup(
    args: DeleteBackupInput,
    cb: (err: any, data?: DeleteBackupOutput) => void
  ): void;
  public deleteBackup(
    args: DeleteBackupInput,
    cb?: (err: any, data?: DeleteBackupOutput) => void
  ): Promise<DeleteBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a file system, deleting its contents. After deletion, the file system no longer exists, and its data is gone. Any existing automatic backups will also be deleted.</p> <p>By default, when you delete an Amazon FSx for Windows File Server file system, a final backup is created upon deletion. This final backup is not subject to the file system's retention policy, and must be manually deleted.</p> <p>The <code>DeleteFileSystem</code> action returns while the file system has the <code>DELETING</code> status. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> action, which returns a list of file systems in your account. If you pass the file system ID for a deleted file system, the <a>DescribeFileSystems</a> returns a <code>FileSystemNotFound</code> error.</p> <important> <p>The data in a deleted file system is also deleted and can't be recovered by any means.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {FileSystemNotFound} <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
   *   - {ServiceLimitExceeded} <p>An error indicating that a particular service limit was exceeded. You can increase some service limits by contacting AWS Support. </p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFileSystem(
    args: DeleteFileSystemInput
  ): Promise<DeleteFileSystemOutput>;
  public deleteFileSystem(
    args: DeleteFileSystemInput,
    cb: (err: any, data?: DeleteFileSystemOutput) => void
  ): void;
  public deleteFileSystem(
    args: DeleteFileSystemInput,
    cb?: (err: any, data?: DeleteFileSystemOutput) => void
  ): Promise<DeleteFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of specific Amazon FSx for Windows File Server backups, if a <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all backups owned by your AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code> parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your backups. <code>DescribeBackups</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of backups returned in the response of one <code>DescribeBackups</code> call and the order of backups returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {FileSystemNotFound} <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
   *   - {BackupNotFound} <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBackups(
    args: DescribeBackupsInput
  ): Promise<DescribeBackupsOutput>;
  public describeBackups(
    args: DescribeBackupsInput,
    cb: (err: any, data?: DescribeBackupsOutput) => void
  ): void;
  public describeBackups(
    args: DescribeBackupsInput,
    cb?: (err: any, data?: DescribeBackupsOutput) => void
  ): Promise<DescribeBackupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBackupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of specific Amazon FSx file systems, if a <code>FileSystemIds</code> value is provided for that file system. Otherwise, it returns descriptions of all file systems owned by your AWS account in the AWS Region of the endpoint that you're calling.</p> <p>When retrieving all file system descriptions, you can optionally specify the <code>MaxResults</code> parameter to limit the number of descriptions in a response. If more file system descriptions remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your file system descriptions. <code>DescribeFileSystems</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of file systems returned in the response of one <code>DescribeFileSystems</code> call and the order of file systems returned across the responses of a multicall iteration is unspecified.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {FileSystemNotFound} <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFileSystems(
    args: DescribeFileSystemsInput
  ): Promise<DescribeFileSystemsOutput>;
  public describeFileSystems(
    args: DescribeFileSystemsInput,
    cb: (err: any, data?: DescribeFileSystemsOutput) => void
  ): void;
  public describeFileSystems(
    args: DescribeFileSystemsInput,
    cb?: (err: any, data?: DescribeFileSystemsOutput) => void
  ): Promise<DescribeFileSystemsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFileSystemsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for Windows File Server.</p> <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code> parameter to limit the number of tags in a response. If more tags remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case, send a later request with the <code>NextToken</code> request parameter set to the value of <code>NextToken</code> from the last response.</p> <p>This action is used in an iterative process to retrieve a list of your tags. <code>ListTagsForResource</code> is called first without a <code>NextToken</code>value. Then the action continues to be called with the <code>NextToken</code> parameter set to the value of the last <code>NextToken</code> value until a response has no <code>NextToken</code>.</p> <p>When using this action, keep the following in mind:</p> <ul> <li> <p>The implementation might return fewer than <code>MaxResults</code> file system descriptions while still including a <code>NextToken</code> value.</p> </li> <li> <p>The order of tags returned in the response of one <code>ListTagsForResource</code> call and the order of tags returned across the responses of a multi-call iteration is unspecified.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {ResourceNotFound} <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
   *   - {NotServiceResourceError} <p>The resource specified for the tagging operation is not a resource type owned by Amazon FSx. Use the API of the relevant service to perform the operation. </p>
   *   - {ResourceDoesNotSupportTagging} <p>The resource specified does not support tagging. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tags an Amazon FSx resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {ResourceNotFound} <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
   *   - {NotServiceResourceError} <p>The resource specified for the tagging operation is not a resource type owned by Amazon FSx. Use the API of the relevant service to perform the operation. </p>
   *   - {ResourceDoesNotSupportTagging} <p>The resource specified does not support tagging. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>This action removes a tag from an Amazon FSx resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {ResourceNotFound} <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
   *   - {NotServiceResourceError} <p>The resource specified for the tagging operation is not a resource type owned by Amazon FSx. Use the API of the relevant service to perform the operation. </p>
   *   - {ResourceDoesNotSupportTagging} <p>The resource specified does not support tagging. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a file system configuration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequest} <p>A generic error indicating a failure with a client request.</p>
   *   - {UnsupportedOperation} <p>An error occured.</p>
   *   - {IncompatibleParameterError} <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
   *   - {InternalServerError} <p>A generic error indicating a server-side failure.</p>
   *   - {FileSystemNotFound} <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
   *   - {MissingFileSystemConfiguration} <p>File system configuration is required for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFileSystem(
    args: UpdateFileSystemInput
  ): Promise<UpdateFileSystemOutput>;
  public updateFileSystem(
    args: UpdateFileSystemInput,
    cb: (err: any, data?: UpdateFileSystemOutput) => void
  ): void;
  public updateFileSystem(
    args: UpdateFileSystemInput,
    cb?: (err: any, data?: UpdateFileSystemOutput) => void
  ): Promise<UpdateFileSystemOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFileSystemCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
