// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { GlacierClient, GlacierClientConfig } from "./GlacierClient";

const commands = {
  AbortMultipartUploadCommand,
  AbortVaultLockCommand,
  AddTagsToVaultCommand,
  CompleteMultipartUploadCommand,
  CompleteVaultLockCommand,
  CreateVaultCommand,
  DeleteArchiveCommand,
  DeleteVaultCommand,
  DeleteVaultAccessPolicyCommand,
  DeleteVaultNotificationsCommand,
  DescribeJobCommand,
  DescribeVaultCommand,
  GetDataRetrievalPolicyCommand,
  GetJobOutputCommand,
  GetVaultAccessPolicyCommand,
  GetVaultLockCommand,
  GetVaultNotificationsCommand,
  InitiateJobCommand,
  InitiateMultipartUploadCommand,
  InitiateVaultLockCommand,
  ListJobsCommand,
  ListMultipartUploadsCommand,
  ListPartsCommand,
  ListProvisionedCapacityCommand,
  ListTagsForVaultCommand,
  ListVaultsCommand,
  PurchaseProvisionedCapacityCommand,
  RemoveTagsFromVaultCommand,
  SetDataRetrievalPolicyCommand,
  SetVaultAccessPolicyCommand,
  SetVaultNotificationsCommand,
  UploadArchiveCommand,
  UploadMultipartPartCommand,
};

export interface Glacier {
  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortMultipartUploadCommandOutput>;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link AbortVaultLockCommand}
   */
  abortVaultLock(
    args: AbortVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AbortVaultLockCommandOutput>;
  abortVaultLock(args: AbortVaultLockCommandInput, cb: (err: any, data?: AbortVaultLockCommandOutput) => void): void;
  abortVaultLock(
    args: AbortVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToVaultCommand}
   */
  addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToVaultCommandOutput>;
  addTagsToVault(args: AddTagsToVaultCommandInput, cb: (err: any, data?: AddTagsToVaultCommandOutput) => void): void;
  addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteMultipartUploadCommandOutput>;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteVaultLockCommand}
   */
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteVaultLockCommandOutput>;
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVaultCommand}
   */
  createVault(args: CreateVaultCommandInput, options?: __HttpHandlerOptions): Promise<CreateVaultCommandOutput>;
  createVault(args: CreateVaultCommandInput, cb: (err: any, data?: CreateVaultCommandOutput) => void): void;
  createVault(
    args: CreateVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(args: DeleteArchiveCommandInput, options?: __HttpHandlerOptions): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(args: DeleteArchiveCommandInput, cb: (err: any, data?: DeleteArchiveCommandOutput) => void): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultCommand}
   */
  deleteVault(args: DeleteVaultCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVaultCommandOutput>;
  deleteVault(args: DeleteVaultCommandInput, cb: (err: any, data?: DeleteVaultCommandOutput) => void): void;
  deleteVault(
    args: DeleteVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultAccessPolicyCommand}
   */
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVaultAccessPolicyCommandOutput>;
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultNotificationsCommand}
   */
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVaultNotificationsCommandOutput>;
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
  describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVaultCommand}
   */
  describeVault(args: DescribeVaultCommandInput, options?: __HttpHandlerOptions): Promise<DescribeVaultCommandOutput>;
  describeVault(args: DescribeVaultCommandInput, cb: (err: any, data?: DescribeVaultCommandOutput) => void): void;
  describeVault(
    args: DescribeVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataRetrievalPolicyCommand}
   */
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataRetrievalPolicyCommandOutput>;
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobOutputCommand}
   */
  getJobOutput(args: GetJobOutputCommandInput, options?: __HttpHandlerOptions): Promise<GetJobOutputCommandOutput>;
  getJobOutput(args: GetJobOutputCommandInput, cb: (err: any, data?: GetJobOutputCommandOutput) => void): void;
  getJobOutput(
    args: GetJobOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultAccessPolicyCommand}
   */
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVaultAccessPolicyCommandOutput>;
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultLockCommand}
   */
  getVaultLock(args: GetVaultLockCommandInput, options?: __HttpHandlerOptions): Promise<GetVaultLockCommandOutput>;
  getVaultLock(args: GetVaultLockCommandInput, cb: (err: any, data?: GetVaultLockCommandOutput) => void): void;
  getVaultLock(
    args: GetVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultNotificationsCommand}
   */
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVaultNotificationsCommandOutput>;
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateJobCommand}
   */
  initiateJob(args: InitiateJobCommandInput, options?: __HttpHandlerOptions): Promise<InitiateJobCommandOutput>;
  initiateJob(args: InitiateJobCommandInput, cb: (err: any, data?: InitiateJobCommandOutput) => void): void;
  initiateJob(
    args: InitiateJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateMultipartUploadCommand}
   */
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateMultipartUploadCommandOutput>;
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateVaultLockCommand}
   */
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InitiateVaultLockCommandOutput>;
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
  listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
  listJobs(
    args: ListJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMultipartUploadsCommandOutput>;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartsCommand}
   */
  listParts(args: ListPartsCommandInput, options?: __HttpHandlerOptions): Promise<ListPartsCommandOutput>;
  listParts(args: ListPartsCommandInput, cb: (err: any, data?: ListPartsCommandOutput) => void): void;
  listParts(
    args: ListPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisionedCapacityCommand}
   */
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedCapacityCommandOutput>;
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForVaultCommand}
   */
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForVaultCommandOutput>;
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVaultsCommand}
   */
  listVaults(args: ListVaultsCommandInput, options?: __HttpHandlerOptions): Promise<ListVaultsCommandOutput>;
  listVaults(args: ListVaultsCommandInput, cb: (err: any, data?: ListVaultsCommandOutput) => void): void;
  listVaults(
    args: ListVaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseProvisionedCapacityCommand}
   */
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PurchaseProvisionedCapacityCommandOutput>;
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromVaultCommand}
   */
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromVaultCommandOutput>;
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDataRetrievalPolicyCommand}
   */
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDataRetrievalPolicyCommandOutput>;
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVaultAccessPolicyCommand}
   */
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVaultAccessPolicyCommandOutput>;
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVaultNotificationsCommand}
   */
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetVaultNotificationsCommandOutput>;
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadArchiveCommand}
   */
  uploadArchive(args: UploadArchiveCommandInput, options?: __HttpHandlerOptions): Promise<UploadArchiveCommandOutput>;
  uploadArchive(args: UploadArchiveCommandInput, cb: (err: any, data?: UploadArchiveCommandOutput) => void): void;
  uploadArchive(
    args: UploadArchiveCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadMultipartPartCommand}
   */
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadMultipartPartCommandOutput>;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class Glacier extends GlacierClient implements Glacier {}
createAggregatedClient(commands, Glacier);
