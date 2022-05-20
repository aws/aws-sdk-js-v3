// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AbortMultipartUploadCommand,
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import {
  AbortVaultLockCommand,
  AbortVaultLockCommandInput,
  AbortVaultLockCommandOutput,
} from "./commands/AbortVaultLockCommand";
import {
  AddTagsToVaultCommand,
  AddTagsToVaultCommandInput,
  AddTagsToVaultCommandOutput,
} from "./commands/AddTagsToVaultCommand";
import {
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import {
  CompleteVaultLockCommand,
  CompleteVaultLockCommandInput,
  CompleteVaultLockCommandOutput,
} from "./commands/CompleteVaultLockCommand";
import { CreateVaultCommand, CreateVaultCommandInput, CreateVaultCommandOutput } from "./commands/CreateVaultCommand";
import {
  DeleteArchiveCommand,
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
} from "./commands/DeleteArchiveCommand";
import {
  DeleteVaultAccessPolicyCommand,
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput,
} from "./commands/DeleteVaultAccessPolicyCommand";
import { DeleteVaultCommand, DeleteVaultCommandInput, DeleteVaultCommandOutput } from "./commands/DeleteVaultCommand";
import {
  DeleteVaultNotificationsCommand,
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput,
} from "./commands/DeleteVaultNotificationsCommand";
import { DescribeJobCommand, DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import {
  DescribeVaultCommand,
  DescribeVaultCommandInput,
  DescribeVaultCommandOutput,
} from "./commands/DescribeVaultCommand";
import {
  GetDataRetrievalPolicyCommand,
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
} from "./commands/GetDataRetrievalPolicyCommand";
import {
  GetJobOutputCommand,
  GetJobOutputCommandInput,
  GetJobOutputCommandOutput,
} from "./commands/GetJobOutputCommand";
import {
  GetVaultAccessPolicyCommand,
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput,
} from "./commands/GetVaultAccessPolicyCommand";
import {
  GetVaultLockCommand,
  GetVaultLockCommandInput,
  GetVaultLockCommandOutput,
} from "./commands/GetVaultLockCommand";
import {
  GetVaultNotificationsCommand,
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput,
} from "./commands/GetVaultNotificationsCommand";
import { InitiateJobCommand, InitiateJobCommandInput, InitiateJobCommandOutput } from "./commands/InitiateJobCommand";
import {
  InitiateMultipartUploadCommand,
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput,
} from "./commands/InitiateMultipartUploadCommand";
import {
  InitiateVaultLockCommand,
  InitiateVaultLockCommandInput,
  InitiateVaultLockCommandOutput,
} from "./commands/InitiateVaultLockCommand";
import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListMultipartUploadsCommand,
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import { ListPartsCommand, ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import {
  ListProvisionedCapacityCommand,
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
} from "./commands/ListProvisionedCapacityCommand";
import {
  ListTagsForVaultCommand,
  ListTagsForVaultCommandInput,
  ListTagsForVaultCommandOutput,
} from "./commands/ListTagsForVaultCommand";
import { ListVaultsCommand, ListVaultsCommandInput, ListVaultsCommandOutput } from "./commands/ListVaultsCommand";
import {
  PurchaseProvisionedCapacityCommand,
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput,
} from "./commands/PurchaseProvisionedCapacityCommand";
import {
  RemoveTagsFromVaultCommand,
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput,
} from "./commands/RemoveTagsFromVaultCommand";
import {
  SetDataRetrievalPolicyCommand,
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
} from "./commands/SetDataRetrievalPolicyCommand";
import {
  SetVaultAccessPolicyCommand,
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
} from "./commands/SetVaultAccessPolicyCommand";
import {
  SetVaultNotificationsCommand,
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
} from "./commands/SetVaultNotificationsCommand";
import {
  UploadArchiveCommand,
  UploadArchiveCommandInput,
  UploadArchiveCommandOutput,
} from "./commands/UploadArchiveCommand";
import {
  UploadMultipartPartCommand,
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
} from "./commands/UploadMultipartPartCommand";
import { GlacierClient } from "./GlacierClient";

/**
 * <p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>
 *
 *          <p>Glacier is an extremely low-cost storage service that provides secure,
 *          durable, and easy-to-use storage for data backup and archival. With Glacier,
 *          customers can store their data cost effectively for months, years, or decades.
 *          Glacier also enables customers to offload the administrative burdens of operating and
 *          scaling storage to AWS, so they don't have to worry about capacity planning, hardware
 *          provisioning, data replication, hardware failure and recovery, or time-consuming hardware
 *          migrations.</p>
 *
 *          <p>Glacier is a great storage choice when low storage cost is paramount and your
 *          data is rarely retrieved. If your
 *          application requires fast or frequent access to your data, consider using Amazon S3. For
 *          more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
 *             (Amazon S3)</a>.</p>
 *
 *          <p>You can store any kind of data in any format. There is no maximum limit on the total
 *          amount of data you can store in Glacier.</p>
 *
 *          <p>If you are a first-time user of Glacier, we recommend that you begin by
 *          reading the following sections in the <i>Amazon S3 Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon S3 Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon S3 Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
 */
export class Glacier extends GlacierClient {
  /**
   * <p>This operation aborts a multipart upload identified by the upload ID.</p>
   *
   *
   *          <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts
   *          to the multipart upload or complete the multipart upload. Aborting a completed upload
   *          fails. However, aborting an already-aborted upload will succeed, for a short time. For more
   *          information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p>
   *
   *          <p>This operation is idempotent.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
   *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
   *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortMultipartUploadCommandOutput>;
  public abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;
  public abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;
  public abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AbortMultipartUploadCommandOutput) => void),
    cb?: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): Promise<AbortMultipartUploadCommandOutput> | void {
    const command = new AbortMultipartUploadCommand(args);
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
   * <p>This operation aborts the vault locking process if the vault lock is not in the
   *             <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when
   *          this operation is requested, the operation returns an <code>AccessDeniedException</code>
   *          error. Aborting the vault locking process removes the vault lock policy from the specified
   *          vault. </p>
   *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
   *          calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by
   *          calling <a>GetVaultLock</a>. For more information about the vault locking
   *          process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
   *             Glacier Access Control with Vault Lock Policies</a>. </p>
   *          <p>This operation is idempotent. You can successfully invoke this operation multiple
   *          times, if the vault lock is in the <code>InProgress</code> state or if there is no policy
   *          associated with the vault.</p>
   */
  public abortVaultLock(
    args: AbortVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortVaultLockCommandOutput>;
  public abortVaultLock(
    args: AbortVaultLockCommandInput,
    cb: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): void;
  public abortVaultLock(
    args: AbortVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): void;
  public abortVaultLock(
    args: AbortVaultLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AbortVaultLockCommandOutput) => void),
    cb?: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): Promise<AbortVaultLockCommandOutput> | void {
    const command = new AbortVaultLockCommand(args);
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
   * <p>This operation adds the specified tags to a vault. Each tag is composed of a key and
   *          a value. Each vault can have up to 10 tags. If your request would cause the tag limit for
   *          the vault to be exceeded, the operation throws the <code>LimitExceededException</code>
   *          error. If a tag already exists on the vault under a specified key, the existing key value
   *          will be overwritten. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
   *       </p>
   */
  public addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToVaultCommandOutput>;
  public addTagsToVault(
    args: AddTagsToVaultCommandInput,
    cb: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): void;
  public addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): void;
  public addTagsToVault(
    args: AddTagsToVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToVaultCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): Promise<AddTagsToVaultCommandOutput> | void {
    const command = new AddTagsToVaultCommand(args);
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
   * <p>You call this operation to inform Amazon S3 Glacier (Glacier) that all the archive parts have been
   *          uploaded and that Glacier can now assemble the archive from the uploaded parts.
   *          After assembling and saving the archive to the vault, Glacier returns the URI path
   *          of the newly created archive resource. Using the URI path, you can then access the archive.
   *          After you upload an archive, you should save the archive ID returned to retrieve the
   *          archive at a later point. You can also get the vault inventory to obtain a list of archive
   *          IDs in a vault. For more information, see <a>InitiateJob</a>.</p>
   *
   *          <p>In the request, you must include the computed SHA256 tree hash of the entire archive
   *          you have uploaded. For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing
   *             Checksums</a>. On the server side, Glacier also constructs the SHA256 tree
   *          hash of the assembled archive. If the values match, Glacier saves the archive to the
   *          vault; otherwise, it returns an error, and the operation fails. The <a>ListParts</a> operation returns a list of parts uploaded for a specific
   *          multipart upload. It includes checksum information for each uploaded part that can be used
   *          to debug a bad checksum issue.</p>
   *
   *          <p>Additionally, Glacier also checks for any missing content ranges when
   *          assembling the archive, if missing content ranges are found, Glacier returns an
   *          error and the operation fails.</p>
   *
   *          <p>Complete Multipart Upload is an idempotent operation. After your first successful
   *          complete multipart upload, if you call the operation again within a short period, the
   *          operation will succeed and return the same archive ID. This is useful in the event you
   *          experience a network issue that causes an aborted connection or receive a 500 server error,
   *          in which case you can repeat your Complete Multipart Upload request and get the same
   *          archive ID without creating duplicate archives. Note, however, that after the multipart
   *          upload completes, you cannot call the List Parts operation and the multipart upload will
   *          not appear in List Multipart Uploads response, even if idempotent complete is
   *          possible.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
   *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-complete-upload.html">Complete Multipart
   *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMultipartUploadCommandOutput>;
  public completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;
  public completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;
  public completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteMultipartUploadCommandOutput) => void),
    cb?: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): Promise<CompleteMultipartUploadCommandOutput> | void {
    const command = new CompleteMultipartUploadCommand(args);
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
   * <p>This operation completes the vault locking process by transitioning the vault lock
   *          from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the
   *          vault lock policy to become unchangeable. A vault lock is put into the
   *             <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can
   *          obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more
   *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p>
   *          <p>This operation is idempotent. This request is always successful if the vault lock is
   *          in the <code>Locked</code> state and the provided lock ID matches the lock ID originally
   *          used to lock the vault.</p>
   *          <p>If an invalid lock ID is passed in the request when the vault lock is in the
   *             <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code>
   *          error. If an invalid lock ID is passed in the request when the vault lock is in the
   *             <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code>
   *          error.</p>
   */
  public completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteVaultLockCommandOutput>;
  public completeVaultLock(
    args: CompleteVaultLockCommandInput,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;
  public completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;
  public completeVaultLock(
    args: CompleteVaultLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteVaultLockCommandOutput) => void),
    cb?: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): Promise<CompleteVaultLockCommandOutput> | void {
    const command = new CompleteVaultLockCommand(args);
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
   * <p>This operation creates a new vault with the specified name. The name of the vault
   *          must be unique within a region for an AWS account. You can create up to 1,000 vaults per
   *          account. If you need to create more vaults, contact Amazon S3 Glacier.</p>
   *          <p>You must use the following guidelines when naming a vault.</p>
   *          <ul>
   *             <li>
   *                <p>Names can be between 1 and 255 characters long.</p>
   *             </li>
   *             <li>
   *                <p>Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), and '.'
   *                (period).</p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/creating-vaults.html">Creating a Vault in Amazon
   *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-put.html">Create Vault </a> in the
   *             <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public createVault(args: CreateVaultCommandInput, options?: __HttpHandlerOptions): Promise<CreateVaultCommandOutput>;
  public createVault(args: CreateVaultCommandInput, cb: (err: any, data?: CreateVaultCommandOutput) => void): void;
  public createVault(
    args: CreateVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVaultCommandOutput) => void
  ): void;
  public createVault(
    args: CreateVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVaultCommandOutput) => void),
    cb?: (err: any, data?: CreateVaultCommandOutput) => void
  ): Promise<CreateVaultCommandOutput> | void {
    const command = new CreateVaultCommand(args);
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
   * <p>This operation deletes an archive from a vault. Subsequent requests to initiate a
   *          retrieval of this archive will fail. Archive retrievals that are in progress for this
   *          archive ID may or may not succeed according to the following scenarios:</p>
   *          <ul>
   *             <li>
   *                <p>If the archive retrieval job is actively preparing the data for download when
   *                Amazon S3 Glacier receives the delete archive request, the archival retrieval operation
   *                might fail.</p>
   *             </li>
   *             <li>
   *                <p>If the archive retrieval job has successfully prepared the archive for download
   *                when Amazon S3 Glacier receives the delete archive request, you will be able to download
   *                the output.</p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent. Attempting to delete an already-deleted archive does
   *          not result in an error.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon
   *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the
   *             <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveCommandOutput>;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  public deleteArchive(
    args: DeleteArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteArchiveCommandOutput) => void),
    cb?: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): Promise<DeleteArchiveCommandOutput> | void {
    const command = new DeleteArchiveCommand(args);
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
   * <p>This operation deletes a vault. Amazon S3 Glacier will delete a vault only if there are
   *          no archives in the vault as of the last inventory and there have been no writes to the
   *          vault since the last inventory. If either of these conditions is not satisfied, the vault
   *          deletion fails (that is, the vault is not removed) and Amazon S3 Glacier returns an error. You
   *          can use <a>DescribeVault</a> to return the number of archives in a vault, and
   *          you can use <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate a Job (POST
   *             jobs)</a> to initiate a new inventory retrieval for a vault. The inventory contains
   *          the archive IDs you use to delete archives using <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive (DELETE
   *             archive)</a>.</p>
   *
   *          <p>This operation is idempotent.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults.html">Deleting a Vault in Amazon
   *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-delete.html">Delete Vault </a> in the
   *             <i>Amazon S3 Glacier Developer Guide</i>. </p>
   */
  public deleteVault(args: DeleteVaultCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVaultCommandOutput>;
  public deleteVault(args: DeleteVaultCommandInput, cb: (err: any, data?: DeleteVaultCommandOutput) => void): void;
  public deleteVault(
    args: DeleteVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultCommandOutput) => void
  ): void;
  public deleteVault(
    args: DeleteVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVaultCommandOutput) => void),
    cb?: (err: any, data?: DeleteVaultCommandOutput) => void
  ): Promise<DeleteVaultCommandOutput> | void {
    const command = new DeleteVaultCommand(args);
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
   * <p>This operation deletes the access policy associated with the specified vault. The
   *          operation is eventually consistent; that is, it might take some time for Amazon S3 Glacier to
   *          completely remove the access policy, and you might still see the effect of the policy for a
   *          short time after you send the delete request.</p>
   *          <p>This operation is idempotent. You can invoke delete multiple times, even if there is
   *          no policy associated with the vault. For more information about vault access policies, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
   */
  public deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVaultAccessPolicyCommandOutput>;
  public deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;
  public deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;
  public deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): Promise<DeleteVaultAccessPolicyCommandOutput> | void {
    const command = new DeleteVaultAccessPolicyCommand(args);
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
   * <p>This operation deletes the notification configuration set for a vault. The operation
   *          is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely
   *          disable the notifications and you might still receive some notifications for a short time
   *          after you send the delete request.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *          <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access
   *             Control Using AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
   *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault
   *             Notification Configuration </a> in the Amazon S3 Glacier Developer Guide. </p>
   */
  public deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVaultNotificationsCommandOutput>;
  public deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;
  public deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;
  public deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): Promise<DeleteVaultNotificationsCommandOutput> | void {
    const command = new DeleteVaultNotificationsCommand(args);
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
   * <p>This operation returns information about a job you previously initiated, including
   *          the job initiation date, the user who initiated the job, the job status code/message and
   *          the Amazon SNS topic to notify after Amazon S3 Glacier (Glacier) completes the job. For more information
   *          about initiating a job, see <a>InitiateJob</a>. </p>
   *
   *          <note>
   *             <p>This operation enables you to check the status of your job. However, it is
   *             strongly recommended that you set up an Amazon SNS topic and specify it in your initiate
   *             job request so that Glacier can notify the topic after it completes the
   *             job.</p>
   *          </note>
   *
   *          <p>A job ID will not expire for at least 24 hours after Glacier completes the
   *          job.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *
   *          <p> For more information about using this operation,
   *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-describe-job-get.html">Describe Job</a>
   *          in the <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  public describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  public describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  public describeJob(
    args: DescribeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeJobCommandOutput) => void
  ): Promise<DescribeJobCommandOutput> | void {
    const command = new DescribeJobCommand(args);
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
   * <p>This operation returns information about a vault, including the vault's Amazon
   *          Resource Name (ARN), the date the vault was created, the number of archives it contains,
   *          and the total size of all the archives in the vault. The number of archives and their total
   *          size are as of the last inventory generation. This means that if you add or remove an
   *          archive from a vault, and then immediately use Describe Vault, the change in contents will
   *          not be immediately reflected. If you want to retrieve the latest inventory of the vault,
   *          use <a>InitiateJob</a>. Amazon S3 Glacier generates vault inventories approximately
   *          daily. For more information, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a Vault Inventory in
   *             Amazon S3 Glacier</a>. </p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
   *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-get.html">Describe Vault </a> in the
   *             <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public describeVault(
    args: DescribeVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVaultCommandOutput>;
  public describeVault(
    args: DescribeVaultCommandInput,
    cb: (err: any, data?: DescribeVaultCommandOutput) => void
  ): void;
  public describeVault(
    args: DescribeVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVaultCommandOutput) => void
  ): void;
  public describeVault(
    args: DescribeVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVaultCommandOutput) => void),
    cb?: (err: any, data?: DescribeVaultCommandOutput) => void
  ): Promise<DescribeVaultCommandOutput> | void {
    const command = new DescribeVaultCommand(args);
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
   * <p>This operation returns the current data retrieval policy for the account and region
   *          specified in the GET request. For more information about data retrieval policies, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
   */
  public getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataRetrievalPolicyCommandOutput>;
  public getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;
  public getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;
  public getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataRetrievalPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): Promise<GetDataRetrievalPolicyCommandOutput> | void {
    const command = new GetDataRetrievalPolicyCommand(args);
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
   * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the
   *          job, the output will be either the content of an archive or a vault inventory.</p>
   *
   *          <p>You can download all the job output or download a portion of the output by specifying
   *          a byte range. In the case of an archive retrieval job, depending on the byte range you
   *          specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the
   *          checksum on the client and verify that the values match to ensure the portion you downloaded
   *          is the correct data.</p>
   *          <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That
   *          a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded
   *          size against the size returned in the headers from the
   *          <b>Get Job Output</b> response.</p>
   *          <p>For archive retrieval jobs, you should also verify that the size is what you expected. If
   *          you download a portion of the output, the expected size is based on the range of bytes
   *          you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should
   *          verify your download size is 1,048,576 bytes. If you download an entire archive, the
   *          expected size is the size of the archive when you uploaded it to Amazon S3 Glacier
   *          The expected size is also returned in the headers from the
   *          <b>Get Job Output</b> response.</p>
   *          <p>In the case of an archive retrieval job, depending on the byte range you
   *          specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded
   *          is the correct data, compute the checksum on the client, verify that the values match,
   *          and verify that the size is what you expected.</p>
   *
   *          <p>A job ID does not expire for at least 24 hours after Glacier completes the
   *          job. That is, you can download the job output within the 24 hours period after Amazon
   *          Glacier completes the job.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a
   *             Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an
   *             Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a>
   *          </p>
   */
  public getJobOutput(
    args: GetJobOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobOutputCommandOutput>;
  public getJobOutput(args: GetJobOutputCommandInput, cb: (err: any, data?: GetJobOutputCommandOutput) => void): void;
  public getJobOutput(
    args: GetJobOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobOutputCommandOutput) => void
  ): void;
  public getJobOutput(
    args: GetJobOutputCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobOutputCommandOutput) => void),
    cb?: (err: any, data?: GetJobOutputCommandOutput) => void
  ): Promise<GetJobOutputCommandOutput> | void {
    const command = new GetJobOutputCommand(args);
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
   * <p>This operation retrieves the <code>access-policy</code> subresource set on the vault;
   *          for more information on setting this subresource, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-SetVaultAccessPolicy.html">Set Vault Access Policy
   *             (PUT access-policy)</a>. If there is no access policy set on the vault, the
   *          operation returns a <code>404 Not found</code> error. For more information about vault
   *          access policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control
   *             with Vault Access Policies</a>.</p>
   */
  public getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVaultAccessPolicyCommandOutput>;
  public getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;
  public getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;
  public getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): Promise<GetVaultAccessPolicyCommandOutput> | void {
    const command = new GetVaultAccessPolicyCommand(args);
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
   * <p>This operation retrieves the following attributes from the <code>lock-policy</code>
   *          subresource set on the specified vault: </p>
   *          <ul>
   *             <li>
   *                <p>The vault lock policy set on the vault.</p>
   *             </li>
   *             <li>
   *                <p>The state of the vault lock, which is either <code>InProgess</code> or
   *                   <code>Locked</code>.</p>
   *             </li>
   *             <li>
   *                <p>When the lock ID expires. The lock ID is used to complete the vault locking
   *                process.</p>
   *             </li>
   *             <li>
   *                <p>When the vault lock was initiated and put into the <code>InProgress</code>
   *                state.</p>
   *             </li>
   *          </ul>
   *
   *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
   *          calling <a>CompleteVaultLock</a>. You can abort the vault locking process by
   *          calling <a>AbortVaultLock</a>. For more information about the vault locking
   *          process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon
   *             Glacier Vault Lock</a>. </p>
   *          <p>If there is no vault lock policy set on the vault, the operation returns a <code>404
   *             Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
   *             Glacier Access Control with Vault Lock Policies</a>. </p>
   */
  public getVaultLock(
    args: GetVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVaultLockCommandOutput>;
  public getVaultLock(args: GetVaultLockCommandInput, cb: (err: any, data?: GetVaultLockCommandOutput) => void): void;
  public getVaultLock(
    args: GetVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultLockCommandOutput) => void
  ): void;
  public getVaultLock(
    args: GetVaultLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVaultLockCommandOutput) => void),
    cb?: (err: any, data?: GetVaultLockCommandOutput) => void
  ): Promise<GetVaultLockCommandOutput> | void {
    const command = new GetVaultLockCommand(args);
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
   * <p>This operation retrieves the <code>notification-configuration</code> subresource of
   *          the specified vault.</p>
   *
   *          <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not
   *          set, the operation returns a <code>404 Not Found</code> error. For more information about
   *          vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
   *             Notifications in Amazon S3 Glacier</a>. </p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
   *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification
   *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVaultNotificationsCommandOutput>;
  public getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;
  public getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;
  public getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): Promise<GetVaultNotificationsCommandOutput> | void {
    const command = new GetVaultNotificationsCommand(args);
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
   * <p>This operation initiates a job of the specified type, which can be a select, an archival retrieval,
   *          or a vault retrieval. For more information about using this operation,
   *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-initiate-job-post.html">Initiate
   *             a Job</a>.
   *       </p>
   */
  public initiateJob(args: InitiateJobCommandInput, options?: __HttpHandlerOptions): Promise<InitiateJobCommandOutput>;
  public initiateJob(args: InitiateJobCommandInput, cb: (err: any, data?: InitiateJobCommandOutput) => void): void;
  public initiateJob(
    args: InitiateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateJobCommandOutput) => void
  ): void;
  public initiateJob(
    args: InitiateJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateJobCommandOutput) => void),
    cb?: (err: any, data?: InitiateJobCommandOutput) => void
  ): Promise<InitiateJobCommandOutput> | void {
    const command = new InitiateJobCommand(args);
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
   * <p>This operation initiates a multipart upload. Amazon S3 Glacier creates a multipart
   *          upload resource and returns its ID in the response. The multipart upload ID is used in
   *          subsequent requests to upload parts of an archive (see <a>UploadMultipartPart</a>).</p>
   *
   *          <p>When you initiate a multipart upload, you specify the part size in number of bytes.
   *          The part size must be a megabyte (1024 KB) multiplied by a power of 2-for example, 1048576
   *          (1 MB), 2097152 (2 MB), 4194304 (4 MB), 8388608 (8 MB), and so on. The minimum allowable
   *          part size is 1 MB, and the maximum is 4 GB.</p>
   *
   *          <p>Every part you upload to this resource (see <a>UploadMultipartPart</a>),
   *          except the last one, must have the same size. The last one can be the same size or smaller.
   *          For example, suppose you want to upload a 16.2 MB file. If you initiate the multipart
   *          upload with a part size of 4 MB, you will upload four parts of 4 MB each and one part of
   *          0.2 MB. </p>
   *
   *          <note>
   *             <p>You don't need to know the size of the archive when you start a multipart upload
   *             because Amazon S3 Glacier does not require you to specify the overall archive
   *             size.</p>
   *          </note>
   *
   *          <p>After you complete the multipart upload, Amazon S3 Glacier (Glacier) removes the multipart upload
   *          resource referenced by the ID. Glacier also removes the multipart upload resource if
   *          you cancel the multipart upload or it may be removed if there is no activity for a period
   *          of 24 hours.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
   *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-initiate-upload.html">Initiate Multipart
   *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>.</p>
   */
  public initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateMultipartUploadCommandOutput>;
  public initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;
  public initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;
  public initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateMultipartUploadCommandOutput) => void),
    cb?: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): Promise<InitiateMultipartUploadCommandOutput> | void {
    const command = new InitiateMultipartUploadCommand(args);
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
   * <p>This operation initiates the vault locking process by doing the following:</p>
   *          <ul>
   *             <li>
   *                <p>Installing a vault lock policy on the specified vault.</p>
   *             </li>
   *             <li>
   *                <p>Setting the lock state of vault lock to <code>InProgress</code>.</p>
   *             </li>
   *             <li>
   *                <p>Returning a lock ID, which is used to complete the vault locking
   *                process.</p>
   *             </li>
   *          </ul>
   *
   *          <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB
   *          in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with
   *             Vault Lock Policies</a>. </p>
   *          <p>You must complete the vault locking process within 24 hours after the vault lock
   *          enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID
   *          expires, the vault automatically exits the <code>InProgress</code> state, and the vault
   *          lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to
   *          complete the vault locking process by setting the state of the vault lock to
   *             <code>Locked</code>. </p>
   *          <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new
   *          vault lock for the vault.</p>
   *
   *          <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>.
   *          You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more
   *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault
   *          Lock</a>.</p>
   *
   *          <p>If this operation is called when the vault lock is in the <code>InProgress</code>
   *          state, the operation returns an <code>AccessDeniedException</code> error. When the vault
   *          lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a>
   *          before you can initiate a new vault lock policy. </p>
   */
  public initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateVaultLockCommandOutput>;
  public initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;
  public initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;
  public initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InitiateVaultLockCommandOutput) => void),
    cb?: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): Promise<InitiateVaultLockCommandOutput> | void {
    const command = new InitiateVaultLockCommand(args);
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
   * <p>This operation lists jobs for a vault, including jobs that are in-progress and jobs
   *          that have recently finished. The List Job operation returns a list of these jobs sorted by job initiation
   *          time.</p>
   *
   *          <note>
   *             <p>Amazon Glacier retains recently completed jobs for a period before deleting them;
   *             however, it eventually removes completed jobs. The output of completed jobs can be
   *             retrieved. Retaining completed jobs for a period of time after they have completed
   *             enables you to get a job output in the event you miss the job completion notification or
   *             your first attempt to download it fails. For example, suppose you start an archive
   *             retrieval job to download an archive. After the job completes, you start to download the
   *             archive but encounter a network error. In this scenario, you can retry and download the
   *             archive while the job exists.</p>
   *          </note>
   *
   *          <p>The List Jobs operation supports pagination. You should always check the response <code>Marker</code> field.
   *          If there are no more jobs to list, the <code>Marker</code> field is set to <code>null</code>. If there are more jobs to list,
   *          the <code>Marker</code> field is set to a non-null value, which you can use to continue the pagination of the list.
   *          To return a list of jobs that begins at a specific job,
   *          set the marker request parameter to the <code>Marker</code> value for that job that you obtained from a previous List Jobs request.</p>
   *
   *          <p>You can set a maximum limit for the number of jobs returned in the response by
   *          specifying the <code>limit</code> parameter in the request. The default limit is 50. The
   *          number of jobs returned might be fewer than the limit, but the number of returned jobs
   *          never exceeds the limit.</p>
   *
   *         <p>Additionally, you can filter the jobs list returned by specifying the optional
   *             <code>statuscode</code> parameter or <code>completed</code> parameter, or both. Using
   *          the <code>statuscode</code> parameter, you can specify to return only jobs that match
   *          either the <code>InProgress</code>, <code>Succeeded</code>, or <code>Failed</code> status.
   *          Using the <code>completed</code> parameter, you can specify to return only jobs that were
   *          completed (<code>true</code>) or jobs that were not completed
   *          (<code>false</code>).</p>
   *
   *          <p>For more information about using this operation,
   *          see the documentation for the underlying REST API <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-jobs-get.html">List Jobs</a>. </p>
   */
  public listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  public listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  public listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  public listJobs(
    args: ListJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListJobsCommandOutput) => void),
    cb?: (err: any, data?: ListJobsCommandOutput) => void
  ): Promise<ListJobsCommandOutput> | void {
    const command = new ListJobsCommand(args);
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
   * <p>This operation lists in-progress multipart uploads for the specified vault. An
   *          in-progress multipart upload is a multipart upload that has been initiated by an <a>InitiateMultipartUpload</a> request, but has not yet been completed or aborted.
   *          The list returned in the List Multipart Upload response has no guaranteed order. </p>
   *
   *          <p>The List Multipart Uploads operation supports pagination. By default, this operation
   *          returns up to 50 multipart uploads in the response. You should always check the response
   *          for a <code>marker</code> at which to continue the list; if there are no more items the
   *             <code>marker</code> is <code>null</code>. To return a list of multipart uploads that
   *          begins at a specific upload, set the <code>marker</code> request parameter to the value you
   *          obtained from a previous List Multipart Upload request. You can also limit the number of
   *          uploads returned in the response by specifying the <code>limit</code> parameter in the
   *          request.</p>
   *
   *          <p>Note the difference between this operation and listing parts (<a>ListParts</a>). The List Multipart Uploads operation lists all multipart uploads
   *          for a vault and does not require a multipart upload ID. The List Parts operation requires a
   *          multipart upload ID since parts are associated with a single upload.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *
   *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
   *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-uploads.html">List Multipart Uploads
   *          </a> in the <i>Amazon Glacier Developer Guide</i>.</p>
   */
  public listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultipartUploadsCommandOutput>;
  public listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;
  public listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;
  public listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMultipartUploadsCommandOutput) => void),
    cb?: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): Promise<ListMultipartUploadsCommandOutput> | void {
    const command = new ListMultipartUploadsCommand(args);
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
   * <p>This operation lists the parts of an archive that have been uploaded in a specific
   *          multipart upload. You can make this request at any time during an in-progress multipart
   *          upload before you complete the upload (see <a>CompleteMultipartUpload</a>. List
   *          Parts returns an error for completed uploads. The list returned in the List Parts response
   *          is sorted by part range. </p>
   *
   *          <p>The List Parts operation supports pagination. By default, this operation returns up
   *          to 50 uploaded parts in the response. You should always check the response for a
   *             <code>marker</code> at which to continue the list; if there are no more items the
   *             <code>marker</code> is <code>null</code>. To return a list of parts that begins at a
   *          specific part, set the <code>marker</code> request parameter to the value you obtained from
   *          a previous List Parts request. You can also limit the number of parts returned in the
   *          response by specifying the <code>limit</code> parameter in the request. </p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working
   *             with Archives in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-list-parts.html">List Parts</a> in the
   *             <i>Amazon Glacier Developer Guide</i>.</p>
   */
  public listParts(args: ListPartsCommandInput, options?: __HttpHandlerOptions): Promise<ListPartsCommandOutput>;
  public listParts(args: ListPartsCommandInput, cb: (err: any, data?: ListPartsCommandOutput) => void): void;
  public listParts(
    args: ListPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartsCommandOutput) => void
  ): void;
  public listParts(
    args: ListPartsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPartsCommandOutput) => void),
    cb?: (err: any, data?: ListPartsCommandOutput) => void
  ): Promise<ListPartsCommandOutput> | void {
    const command = new ListPartsCommand(args);
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
   * <p>This operation lists the provisioned capacity units for the specified AWS
   *          account.</p>
   */
  public listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedCapacityCommandOutput>;
  public listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;
  public listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;
  public listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProvisionedCapacityCommandOutput) => void),
    cb?: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): Promise<ListProvisionedCapacityCommandOutput> | void {
    const command = new ListProvisionedCapacityCommand(args);
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
   * <p>This operation lists all the tags attached to a vault. The operation returns an empty
   *          map if there are no tags. For more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier
   *          Resources</a>.</p>
   */
  public listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForVaultCommandOutput>;
  public listTagsForVault(
    args: ListTagsForVaultCommandInput,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;
  public listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;
  public listTagsForVault(
    args: ListTagsForVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForVaultCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): Promise<ListTagsForVaultCommandOutput> | void {
    const command = new ListTagsForVaultCommand(args);
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
   * <p>This operation lists all vaults owned by the calling user's account. The list
   *          returned in the response is ASCII-sorted by vault name.</p>
   *
   *          <p>By default, this operation returns up to 10 items. If there are more vaults to
   *          list, the response <code>marker</code> field contains the vault Amazon Resource Name (ARN)
   *          at which to continue the list with a new List Vaults request; otherwise, the
   *             <code>marker</code> field is <code>null</code>. To return a list of vaults that begins
   *          at a specific vault, set the <code>marker</code> request parameter to the vault ARN you
   *          obtained from a previous List Vaults request. You can also limit the number of vaults
   *          returned in the response by specifying the <code>limit</code> parameter in the request. </p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/retrieving-vault-info.html">Retrieving Vault Metadata in
   *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vaults-get.html">List Vaults </a> in the
   *             <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public listVaults(args: ListVaultsCommandInput, options?: __HttpHandlerOptions): Promise<ListVaultsCommandOutput>;
  public listVaults(args: ListVaultsCommandInput, cb: (err: any, data?: ListVaultsCommandOutput) => void): void;
  public listVaults(
    args: ListVaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVaultsCommandOutput) => void
  ): void;
  public listVaults(
    args: ListVaultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVaultsCommandOutput) => void),
    cb?: (err: any, data?: ListVaultsCommandOutput) => void
  ): Promise<ListVaultsCommandOutput> | void {
    const command = new ListVaultsCommand(args);
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
   * <p>This operation purchases a provisioned capacity unit for an AWS account. </p>
   */
  public purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseProvisionedCapacityCommandOutput>;
  public purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;
  public purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;
  public purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void),
    cb?: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): Promise<PurchaseProvisionedCapacityCommandOutput> | void {
    const command = new PurchaseProvisionedCapacityCommand(args);
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
   * <p>This operation removes one or more tags from the set of tags attached to a vault. For
   *          more information about tags, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/tagging.html">Tagging Amazon S3 Glacier Resources</a>.
   *          This operation is idempotent. The operation will be successful, even if there are no tags
   *          attached to the vault. </p>
   */
  public removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromVaultCommandOutput>;
  public removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;
  public removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;
  public removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromVaultCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): Promise<RemoveTagsFromVaultCommandOutput> | void {
    const command = new RemoveTagsFromVaultCommand(args);
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
   * <p>This operation sets and then enacts a data retrieval policy in the region specified
   *          in the PUT request. You can set one policy per region for an AWS account. The policy is
   *          enacted within a few minutes of a successful PUT operation.</p>
   *          <p>The set policy operation does not affect retrieval jobs that were in progress before
   *          the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon
   *             Glacier Data Retrieval Policies</a>. </p>
   */
  public setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDataRetrievalPolicyCommandOutput>;
  public setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;
  public setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;
  public setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetDataRetrievalPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): Promise<SetDataRetrievalPolicyCommandOutput> | void {
    const command = new SetDataRetrievalPolicyCommand(args);
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
   * <p>This operation configures an access policy for a vault and will overwrite an existing
   *          policy. To configure a vault access policy, send a PUT request to the
   *             <code>access-policy</code> subresource of the vault. An access policy is specific to a
   *          vault and is also called a vault subresource. You can set one access policy per vault and
   *          the policy can be up to 20 KB in size. For more information about vault access policies,
   *          see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
   */
  public setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVaultAccessPolicyCommandOutput>;
  public setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;
  public setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;
  public setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): Promise<SetVaultAccessPolicyCommandOutput> | void {
    const command = new SetVaultAccessPolicyCommand(args);
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
   * <p>This operation configures notifications that will be sent when specific events happen
   *          to a vault. By default, you don't get any notifications.</p>
   *
   *          <p>To configure vault notifications, send a PUT request to the
   *             <code>notification-configuration</code> subresource of the vault. The request should
   *          include a JSON document that provides an Amazon SNS topic and specific events for which you
   *          want Amazon S3 Glacier to send notifications to the topic.</p>
   *
   *          <p>Amazon SNS topics must grant permission to the vault to be allowed to publish
   *          notifications to the topic. You can configure a vault to publish a notification for the
   *          following vault events:</p>
   *
   *          <ul>
   *             <li>
   *                 <p>
   *                   <b>ArchiveRetrievalCompleted</b> This event occurs when a
   *                job that was initiated for an archive retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
   *                "Failed". The notification sent to the SNS topic is the same output as returned from
   *                   <a>DescribeJob</a>. </p>
   *             </li>
   *             <li>
   *
   *                <p>
   *                   <b>InventoryRetrievalCompleted</b> This event occurs when a
   *                job that was initiated for an inventory retrieval is completed (<a>InitiateJob</a>). The status of the completed job can be "Succeeded" or
   *                "Failed". The notification sent to the SNS topic is the same output as returned from
   *                   <a>DescribeJob</a>. </p>
   *             </li>
   *          </ul>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
   *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html">Set Vault Notification
   *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVaultNotificationsCommandOutput>;
  public setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;
  public setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;
  public setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): Promise<SetVaultNotificationsCommandOutput> | void {
    const command = new SetVaultNotificationsCommand(args);
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
   * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a
   *          successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in
   *          the <code>x-amz-archive-id</code> header of the response. </p>
   *
   *          <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload
   *          an archive, you should save the archive ID returned so that you can retrieve or delete the
   *          archive later. Besides saving the archive ID, you can also index it and give it a friendly
   *          name to allow for better searching. You can also use the optional archive description field
   *          to specify how the archive is referred to in an external index of archives, such as you
   *          might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of
   *          archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p>
   *
   *          <p>You must provide a SHA256 tree hash of the data you are uploading. For information
   *          about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p>
   *
   *          <p>You can optionally specify an archive description of up to 1,024 printable ASCII
   *          characters. You can get the archive description when you either retrieve the archive or get
   *          the vault inventory. For more information, see <a>InitiateJob</a>. Amazon
   *          Glacier does not interpret the description in any way. An archive description does not need
   *          to be unique. You cannot use the description to retrieve or sort the archive list. </p>
   *
   *          <p>Archives are immutable. After you upload an archive, you cannot edit the archive or
   *          its description.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon
   *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the
   *             <i>Amazon Glacier Developer Guide</i>. </p>
   */
  public uploadArchive(
    args: UploadArchiveCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadArchiveCommandOutput>;
  public uploadArchive(
    args: UploadArchiveCommandInput,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;
  public uploadArchive(
    args: UploadArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;
  public uploadArchive(
    args: UploadArchiveCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadArchiveCommandOutput) => void),
    cb?: (err: any, data?: UploadArchiveCommandOutput) => void
  ): Promise<UploadArchiveCommandOutput> | void {
    const command = new UploadArchiveCommand(args);
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
   * <p>This operation uploads a part of an archive. You can upload archive parts in any
   *          order. You can also upload them in parallel. You can upload up to 10,000 parts for a
   *          multipart upload.</p>
   *
   *          <p>Amazon Glacier rejects your upload part request if any of the following conditions is
   *          true:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SHA256 tree hash does not match</b>To ensure that part
   *                data is not corrupted in transmission, you compute a SHA256 tree hash of the part and
   *                include it in your request. Upon receiving the part data, Amazon S3 Glacier also
   *                computes a SHA256 tree hash. If these hash values don't match, the operation fails.
   *                For information about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing
   *                   Checksums</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Part size does not match</b>The size of each part except
   *                the last must match the size specified in the corresponding <a>InitiateMultipartUpload</a> request. The size of the last part must be the
   *                same size as, or smaller than, the specified size.</p>
   *                <note>
   *                   <p>If you upload a part whose size is smaller than the part size you specified
   *                   in your initiate multipart upload request and that part is not the last part, then
   *                   the upload part request will succeed. However, the subsequent Complete Multipart
   *                   Upload request will fail.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Range does not align</b>The byte range value in the
   *                request does not align with the part size specified in the corresponding initiate
   *                request. For example, if you specify a part size of 4194304 bytes (4 MB), then 0 to
   *                4194303 bytes (4 MB - 1) and 4194304 (4 MB) to 8388607 (8 MB - 1) are valid part
   *                ranges. However, if you set a range value of 2 MB to 6 MB, the range does not align
   *                with the part size and the upload will fail. </p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent. If you upload the same part multiple times, the data
   *          included in the most recent request overwrites the previously uploaded data.</p>
   *
   *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
   *          Identity and Access Management (IAM) users don't have any permissions by default. You must
   *          grant them explicit permission to perform specific actions. For more information, see
   *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
   *             AWS Identity and Access Management (IAM)</a>.</p>
   *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-archive-mpu.html">Uploading Large Archives in
   *             Parts (Multipart Upload)</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-upload-part.html">Upload Part </a> in the
   *             <i>Amazon Glacier Developer Guide</i>.</p>
   */
  public uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadMultipartPartCommandOutput>;
  public uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
  public uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
  public uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UploadMultipartPartCommandOutput) => void),
    cb?: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): Promise<UploadMultipartPartCommandOutput> | void {
    const command = new UploadMultipartPartCommand(args);
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
