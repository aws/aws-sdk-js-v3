// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type AbortMultipartUploadCommandInput,
  type AbortMultipartUploadCommandOutput,
  AbortMultipartUploadCommand,
} from "./commands/AbortMultipartUploadCommand";
import {
  type AbortVaultLockCommandInput,
  type AbortVaultLockCommandOutput,
  AbortVaultLockCommand,
} from "./commands/AbortVaultLockCommand";
import {
  type AddTagsToVaultCommandInput,
  type AddTagsToVaultCommandOutput,
  AddTagsToVaultCommand,
} from "./commands/AddTagsToVaultCommand";
import {
  type CompleteMultipartUploadCommandInput,
  type CompleteMultipartUploadCommandOutput,
  CompleteMultipartUploadCommand,
} from "./commands/CompleteMultipartUploadCommand";
import {
  type CompleteVaultLockCommandInput,
  type CompleteVaultLockCommandOutput,
  CompleteVaultLockCommand,
} from "./commands/CompleteVaultLockCommand";
import {
  type CreateVaultCommandInput,
  type CreateVaultCommandOutput,
  CreateVaultCommand,
} from "./commands/CreateVaultCommand";
import {
  type DeleteArchiveCommandInput,
  type DeleteArchiveCommandOutput,
  DeleteArchiveCommand,
} from "./commands/DeleteArchiveCommand";
import {
  type DeleteVaultAccessPolicyCommandInput,
  type DeleteVaultAccessPolicyCommandOutput,
  DeleteVaultAccessPolicyCommand,
} from "./commands/DeleteVaultAccessPolicyCommand";
import {
  type DeleteVaultCommandInput,
  type DeleteVaultCommandOutput,
  DeleteVaultCommand,
} from "./commands/DeleteVaultCommand";
import {
  type DeleteVaultNotificationsCommandInput,
  type DeleteVaultNotificationsCommandOutput,
  DeleteVaultNotificationsCommand,
} from "./commands/DeleteVaultNotificationsCommand";
import {
  type DescribeJobCommandInput,
  type DescribeJobCommandOutput,
  DescribeJobCommand,
} from "./commands/DescribeJobCommand";
import {
  type DescribeVaultCommandInput,
  type DescribeVaultCommandOutput,
  DescribeVaultCommand,
} from "./commands/DescribeVaultCommand";
import {
  type GetDataRetrievalPolicyCommandInput,
  type GetDataRetrievalPolicyCommandOutput,
  GetDataRetrievalPolicyCommand,
} from "./commands/GetDataRetrievalPolicyCommand";
import {
  type GetJobOutputCommandInput,
  type GetJobOutputCommandOutput,
  GetJobOutputCommand,
} from "./commands/GetJobOutputCommand";
import {
  type GetVaultAccessPolicyCommandInput,
  type GetVaultAccessPolicyCommandOutput,
  GetVaultAccessPolicyCommand,
} from "./commands/GetVaultAccessPolicyCommand";
import {
  type GetVaultLockCommandInput,
  type GetVaultLockCommandOutput,
  GetVaultLockCommand,
} from "./commands/GetVaultLockCommand";
import {
  type GetVaultNotificationsCommandInput,
  type GetVaultNotificationsCommandOutput,
  GetVaultNotificationsCommand,
} from "./commands/GetVaultNotificationsCommand";
import {
  type InitiateJobCommandInput,
  type InitiateJobCommandOutput,
  InitiateJobCommand,
} from "./commands/InitiateJobCommand";
import {
  type InitiateMultipartUploadCommandInput,
  type InitiateMultipartUploadCommandOutput,
  InitiateMultipartUploadCommand,
} from "./commands/InitiateMultipartUploadCommand";
import {
  type InitiateVaultLockCommandInput,
  type InitiateVaultLockCommandOutput,
  InitiateVaultLockCommand,
} from "./commands/InitiateVaultLockCommand";
import { type ListJobsCommandInput, type ListJobsCommandOutput, ListJobsCommand } from "./commands/ListJobsCommand";
import {
  type ListMultipartUploadsCommandInput,
  type ListMultipartUploadsCommandOutput,
  ListMultipartUploadsCommand,
} from "./commands/ListMultipartUploadsCommand";
import { type ListPartsCommandInput, type ListPartsCommandOutput, ListPartsCommand } from "./commands/ListPartsCommand";
import {
  type ListProvisionedCapacityCommandInput,
  type ListProvisionedCapacityCommandOutput,
  ListProvisionedCapacityCommand,
} from "./commands/ListProvisionedCapacityCommand";
import {
  type ListTagsForVaultCommandInput,
  type ListTagsForVaultCommandOutput,
  ListTagsForVaultCommand,
} from "./commands/ListTagsForVaultCommand";
import {
  type ListVaultsCommandInput,
  type ListVaultsCommandOutput,
  ListVaultsCommand,
} from "./commands/ListVaultsCommand";
import {
  type PurchaseProvisionedCapacityCommandInput,
  type PurchaseProvisionedCapacityCommandOutput,
  PurchaseProvisionedCapacityCommand,
} from "./commands/PurchaseProvisionedCapacityCommand";
import {
  type RemoveTagsFromVaultCommandInput,
  type RemoveTagsFromVaultCommandOutput,
  RemoveTagsFromVaultCommand,
} from "./commands/RemoveTagsFromVaultCommand";
import {
  type SetDataRetrievalPolicyCommandInput,
  type SetDataRetrievalPolicyCommandOutput,
  SetDataRetrievalPolicyCommand,
} from "./commands/SetDataRetrievalPolicyCommand";
import {
  type SetVaultAccessPolicyCommandInput,
  type SetVaultAccessPolicyCommandOutput,
  SetVaultAccessPolicyCommand,
} from "./commands/SetVaultAccessPolicyCommand";
import {
  type SetVaultNotificationsCommandInput,
  type SetVaultNotificationsCommandOutput,
  SetVaultNotificationsCommand,
} from "./commands/SetVaultNotificationsCommand";
import {
  type UploadArchiveCommandInput,
  type UploadArchiveCommandOutput,
  UploadArchiveCommand,
} from "./commands/UploadArchiveCommand";
import {
  type UploadMultipartPartCommandInput,
  type UploadMultipartPartCommandOutput,
  UploadMultipartPartCommand,
} from "./commands/UploadMultipartPartCommand";
import { GlacierClient } from "./GlacierClient";

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
 * <p> Amazon Glacier (Glacier) is a storage solution for "cold data."</p>
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
 *          reading the following sections in the <i>Amazon Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class Glacier extends GlacierClient implements Glacier {}
createAggregatedClient(commands, Glacier);
