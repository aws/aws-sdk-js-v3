import { CloudHSMV2Client } from "./CloudHSMV2Client";
import { CloudHsmAccessDeniedException } from "./types/CloudHsmAccessDeniedException";
import { CloudHsmInternalFailureException } from "./types/CloudHsmInternalFailureException";
import { CloudHsmInvalidRequestException } from "./types/CloudHsmInvalidRequestException";
import { CloudHsmResourceNotFoundException } from "./types/CloudHsmResourceNotFoundException";
import { CloudHsmServiceException } from "./types/CloudHsmServiceException";
import { CopyBackupToRegionInput } from "./types/CopyBackupToRegionInput";
import { CopyBackupToRegionOutput } from "./types/CopyBackupToRegionOutput";
import { CreateClusterInput } from "./types/CreateClusterInput";
import { CreateClusterOutput } from "./types/CreateClusterOutput";
import { CreateHsmInput } from "./types/CreateHsmInput";
import { CreateHsmOutput } from "./types/CreateHsmOutput";
import { DeleteBackupInput } from "./types/DeleteBackupInput";
import { DeleteBackupOutput } from "./types/DeleteBackupOutput";
import { DeleteClusterInput } from "./types/DeleteClusterInput";
import { DeleteClusterOutput } from "./types/DeleteClusterOutput";
import { DeleteHsmInput } from "./types/DeleteHsmInput";
import { DeleteHsmOutput } from "./types/DeleteHsmOutput";
import { DescribeBackupsInput } from "./types/DescribeBackupsInput";
import { DescribeBackupsOutput } from "./types/DescribeBackupsOutput";
import { DescribeClustersInput } from "./types/DescribeClustersInput";
import { DescribeClustersOutput } from "./types/DescribeClustersOutput";
import { InitializeClusterInput } from "./types/InitializeClusterInput";
import { InitializeClusterOutput } from "./types/InitializeClusterOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { RestoreBackupInput } from "./types/RestoreBackupInput";
import { RestoreBackupOutput } from "./types/RestoreBackupOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { CopyBackupToRegionCommand } from "./commands/CopyBackupToRegionCommand";
import { CreateClusterCommand } from "./commands/CreateClusterCommand";
import { CreateHsmCommand } from "./commands/CreateHsmCommand";
import { DeleteBackupCommand } from "./commands/DeleteBackupCommand";
import { DeleteClusterCommand } from "./commands/DeleteClusterCommand";
import { DeleteHsmCommand } from "./commands/DeleteHsmCommand";
import { DescribeBackupsCommand } from "./commands/DescribeBackupsCommand";
import { DescribeClustersCommand } from "./commands/DescribeClustersCommand";
import { InitializeClusterCommand } from "./commands/InitializeClusterCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { RestoreBackupCommand } from "./commands/RestoreBackupCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class CloudHSMV2 extends CloudHSMV2Client {
  /**
   * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copyBackupToRegion(
    args: CopyBackupToRegionInput
  ): Promise<CopyBackupToRegionOutput>;
  public copyBackupToRegion(
    args: CopyBackupToRegionInput,
    cb: (err: any, data?: CopyBackupToRegionOutput) => void
  ): void;
  public copyBackupToRegion(
    args: CopyBackupToRegionInput,
    cb?: (err: any, data?: CopyBackupToRegionOutput) => void
  ): Promise<CopyBackupToRegionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopyBackupToRegionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new AWS CloudHSM cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCluster(args: CreateClusterInput): Promise<CreateClusterOutput>;
  public createCluster(
    args: CreateClusterInput,
    cb: (err: any, data?: CreateClusterOutput) => void
  ): void;
  public createCluster(
    args: CreateClusterInput,
    cb?: (err: any, data?: CreateClusterOutput) => void
  ): Promise<CreateClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHsm(args: CreateHsmInput): Promise<CreateHsmOutput>;
  public createHsm(
    args: CreateHsmInput,
    cb: (err: any, data?: CreateHsmOutput) => void
  ): void;
  public createHsm(
    args: CreateHsmInput,
    cb?: (err: any, data?: CreateHsmOutput) => void
  ): Promise<CreateHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request. For more information on restoring a backup, see <a>RestoreBackup</a> </p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
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
   * <p>Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCluster(args: DeleteClusterInput): Promise<DeleteClusterOutput>;
  public deleteCluster(
    args: DeleteClusterInput,
    cb: (err: any, data?: DeleteClusterOutput) => void
  ): void;
  public deleteCluster(
    args: DeleteClusterInput,
    cb?: (err: any, data?: DeleteClusterOutput) => void
  ): Promise<DeleteClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHsm(args: DeleteHsmInput): Promise<DeleteHsmOutput>;
  public deleteHsm(
    args: DeleteHsmInput,
    cb: (err: any, data?: DeleteHsmOutput) => void
  ): void;
  public deleteHsm(
    args: DeleteHsmInput,
    cb?: (err: any, data?: DeleteHsmOutput) => void
  ): Promise<DeleteHsmOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHsmCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
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
   * <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeClusters(
    args: DescribeClustersInput
  ): Promise<DescribeClustersOutput>;
  public describeClusters(
    args: DescribeClustersInput,
    cb: (err: any, data?: DescribeClustersOutput) => void
  ): void;
  public describeClusters(
    args: DescribeClustersInput,
    cb?: (err: any, data?: DescribeClustersOutput) => void
  ): Promise<DescribeClustersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeClustersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public initializeCluster(
    args: InitializeClusterInput
  ): Promise<InitializeClusterOutput>;
  public initializeCluster(
    args: InitializeClusterInput,
    cb: (err: any, data?: InitializeClusterOutput) => void
  ): void;
  public initializeCluster(
    args: InitializeClusterInput,
    cb?: (err: any, data?: InitializeClusterOutput) => void
  ): Promise<InitializeClusterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new InitializeClusterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For more information on deleting a backup, see <a>DeleteBackup</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreBackup(args: RestoreBackupInput): Promise<RestoreBackupOutput>;
  public restoreBackup(
    args: RestoreBackupInput,
    cb: (err: any, data?: RestoreBackupOutput) => void
  ): void;
  public restoreBackup(
    args: RestoreBackupInput,
    cb?: (err: any, data?: RestoreBackupOutput) => void
  ): Promise<RestoreBackupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreBackupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
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
   * <p>Removes the specified tag or tags from the specified AWS CloudHSM cluster.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CloudHsmInternalFailureException} <p>The request was rejected because of an AWS CloudHSM internal failure. The request can be retried.</p>
   *   - {CloudHsmServiceException} <p>The request was rejected because an error occurred.</p>
   *   - {CloudHsmResourceNotFoundException} <p>The request was rejected because it refers to a resource that cannot be found.</p>
   *   - {CloudHsmInvalidRequestException} <p>The request was rejected because it is not a valid request.</p>
   *   - {CloudHsmAccessDeniedException} <p>The request was rejected because the requester does not have permission to perform the requested operation.</p>
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
}
