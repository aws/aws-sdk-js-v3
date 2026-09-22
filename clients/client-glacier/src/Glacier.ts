// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

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
import type { ResourceNotFoundException } from "./models/errors";
import type { GlacierServiceException } from "./models/GlacierServiceException";
import { paginateListJobs } from "./pagination/ListJobsPaginator";
import { paginateListMultipartUploads } from "./pagination/ListMultipartUploadsPaginator";
import { paginateListParts } from "./pagination/ListPartsPaginator";
import { paginateListVaults } from "./pagination/ListVaultsPaginator";
import { waitUntilVaultExists } from "./waiters/waitForVaultExists";
import { waitUntilVaultNotExists } from "./waiters/waitForVaultNotExists";

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
const paginators = {
  paginateListJobs,
  paginateListMultipartUploads,
  paginateListParts,
  paginateListVaults,
};
const waiters = {
  waitUntilVaultExists,
  waitUntilVaultNotExists,
};

/**
 * @public
 */
export interface GlacierRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Glacier {
  /**
   * @see {@link AbortMultipartUploadCommand}
   */
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options?: GlacierRequestOptions
  ): Promise<AbortMultipartUploadCommandOutput>;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;
  abortMultipartUpload(
    args: AbortMultipartUploadCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: AbortMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link AbortVaultLockCommand}
   */
  abortVaultLock(
    args: AbortVaultLockCommandInput,
    options?: GlacierRequestOptions
  ): Promise<AbortVaultLockCommandOutput>;
  abortVaultLock(
    args: AbortVaultLockCommandInput,
    cb: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): void;
  abortVaultLock(
    args: AbortVaultLockCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: AbortVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsToVaultCommand}
   */
  addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<AddTagsToVaultCommandOutput>;
  addTagsToVault(
    args: AddTagsToVaultCommandInput,
    cb: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): void;
  addTagsToVault(
    args: AddTagsToVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: AddTagsToVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteMultipartUploadCommand}
   */
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options?: GlacierRequestOptions
  ): Promise<CompleteMultipartUploadCommandOutput>;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;
  completeMultipartUpload(
    args: CompleteMultipartUploadCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: CompleteMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link CompleteVaultLockCommand}
   */
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options?: GlacierRequestOptions
  ): Promise<CompleteVaultLockCommandOutput>;
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;
  completeVaultLock(
    args: CompleteVaultLockCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: CompleteVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVaultCommand}
   */
  createVault(
    args: CreateVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<CreateVaultCommandOutput>;
  createVault(
    args: CreateVaultCommandInput,
    cb: (err: any, data?: CreateVaultCommandOutput) => void
  ): void;
  createVault(
    args: CreateVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: CreateVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveCommand}
   */
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DeleteArchiveCommandOutput>;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;
  deleteArchive(
    args: DeleteArchiveCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DeleteArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultCommand}
   */
  deleteVault(
    args: DeleteVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DeleteVaultCommandOutput>;
  deleteVault(
    args: DeleteVaultCommandInput,
    cb: (err: any, data?: DeleteVaultCommandOutput) => void
  ): void;
  deleteVault(
    args: DeleteVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DeleteVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultAccessPolicyCommand}
   */
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DeleteVaultAccessPolicyCommandOutput>;
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;
  deleteVaultAccessPolicy(
    args: DeleteVaultAccessPolicyCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DeleteVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVaultNotificationsCommand}
   */
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DeleteVaultNotificationsCommandOutput>;
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;
  deleteVaultNotifications(
    args: DeleteVaultNotificationsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DeleteVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeJobCommand}
   */
  describeJob(
    args: DescribeJobCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DescribeJobCommandOutput>;
  describeJob(
    args: DescribeJobCommandInput,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;
  describeJob(
    args: DescribeJobCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DescribeJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVaultCommand}
   */
  describeVault(
    args: DescribeVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<DescribeVaultCommandOutput>;
  describeVault(
    args: DescribeVaultCommandInput,
    cb: (err: any, data?: DescribeVaultCommandOutput) => void
  ): void;
  describeVault(
    args: DescribeVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: DescribeVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataRetrievalPolicyCommand}
   */
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options?: GlacierRequestOptions
  ): Promise<GetDataRetrievalPolicyCommandOutput>;
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;
  getDataRetrievalPolicy(
    args: GetDataRetrievalPolicyCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: GetDataRetrievalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetJobOutputCommand}
   */
  getJobOutput(
    args: GetJobOutputCommandInput,
    options?: GlacierRequestOptions
  ): Promise<GetJobOutputCommandOutput>;
  getJobOutput(
    args: GetJobOutputCommandInput,
    cb: (err: any, data?: GetJobOutputCommandOutput) => void
  ): void;
  getJobOutput(
    args: GetJobOutputCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: GetJobOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultAccessPolicyCommand}
   */
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options?: GlacierRequestOptions
  ): Promise<GetVaultAccessPolicyCommandOutput>;
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;
  getVaultAccessPolicy(
    args: GetVaultAccessPolicyCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: GetVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultLockCommand}
   */
  getVaultLock(
    args: GetVaultLockCommandInput,
    options?: GlacierRequestOptions
  ): Promise<GetVaultLockCommandOutput>;
  getVaultLock(
    args: GetVaultLockCommandInput,
    cb: (err: any, data?: GetVaultLockCommandOutput) => void
  ): void;
  getVaultLock(
    args: GetVaultLockCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: GetVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVaultNotificationsCommand}
   */
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<GetVaultNotificationsCommandOutput>;
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;
  getVaultNotifications(
    args: GetVaultNotificationsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: GetVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateJobCommand}
   */
  initiateJob(
    args: InitiateJobCommandInput,
    options?: GlacierRequestOptions
  ): Promise<InitiateJobCommandOutput>;
  initiateJob(
    args: InitiateJobCommandInput,
    cb: (err: any, data?: InitiateJobCommandOutput) => void
  ): void;
  initiateJob(
    args: InitiateJobCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: InitiateJobCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateMultipartUploadCommand}
   */
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options?: GlacierRequestOptions
  ): Promise<InitiateMultipartUploadCommandOutput>;
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;
  initiateMultipartUpload(
    args: InitiateMultipartUploadCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: InitiateMultipartUploadCommandOutput) => void
  ): void;

  /**
   * @see {@link InitiateVaultLockCommand}
   */
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options?: GlacierRequestOptions
  ): Promise<InitiateVaultLockCommandOutput>;
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;
  initiateVaultLock(
    args: InitiateVaultLockCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: InitiateVaultLockCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   */
  listJobs(
    args: ListJobsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListJobsCommandOutput>;
  listJobs(
    args: ListJobsCommandInput,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;
  listJobs(
    args: ListJobsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMultipartUploadsCommand}
   */
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListMultipartUploadsCommandOutput>;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;
  listMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListMultipartUploadsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPartsCommand}
   */
  listParts(
    args: ListPartsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListPartsCommandOutput>;
  listParts(
    args: ListPartsCommandInput,
    cb: (err: any, data?: ListPartsCommandOutput) => void
  ): void;
  listParts(
    args: ListPartsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListPartsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisionedCapacityCommand}
   */
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListProvisionedCapacityCommandOutput>;
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;
  listProvisionedCapacity(
    args: ListProvisionedCapacityCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListProvisionedCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForVaultCommand}
   */
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListTagsForVaultCommandOutput>;
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;
  listTagsForVault(
    args: ListTagsForVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListTagsForVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVaultsCommand}
   */
  listVaults(
    args: ListVaultsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<ListVaultsCommandOutput>;
  listVaults(
    args: ListVaultsCommandInput,
    cb: (err: any, data?: ListVaultsCommandOutput) => void
  ): void;
  listVaults(
    args: ListVaultsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: ListVaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link PurchaseProvisionedCapacityCommand}
   */
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options?: GlacierRequestOptions
  ): Promise<PurchaseProvisionedCapacityCommandOutput>;
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;
  purchaseProvisionedCapacity(
    args: PurchaseProvisionedCapacityCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: PurchaseProvisionedCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromVaultCommand}
   */
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options?: GlacierRequestOptions
  ): Promise<RemoveTagsFromVaultCommandOutput>;
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;
  removeTagsFromVault(
    args: RemoveTagsFromVaultCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: RemoveTagsFromVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDataRetrievalPolicyCommand}
   */
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options?: GlacierRequestOptions
  ): Promise<SetDataRetrievalPolicyCommandOutput>;
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;
  setDataRetrievalPolicy(
    args: SetDataRetrievalPolicyCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: SetDataRetrievalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVaultAccessPolicyCommand}
   */
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options?: GlacierRequestOptions
  ): Promise<SetVaultAccessPolicyCommandOutput>;
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;
  setVaultAccessPolicy(
    args: SetVaultAccessPolicyCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: SetVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SetVaultNotificationsCommand}
   */
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options?: GlacierRequestOptions
  ): Promise<SetVaultNotificationsCommandOutput>;
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;
  setVaultNotifications(
    args: SetVaultNotificationsCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: SetVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadArchiveCommand}
   */
  uploadArchive(
    args: UploadArchiveCommandInput,
    options?: GlacierRequestOptions
  ): Promise<UploadArchiveCommandOutput>;
  uploadArchive(
    args: UploadArchiveCommandInput,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;
  uploadArchive(
    args: UploadArchiveCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: UploadArchiveCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadMultipartPartCommand}
   */
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options?: GlacierRequestOptions
  ): Promise<UploadMultipartPartCommandOutput>;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;
  uploadMultipartPart(
    args: UploadMultipartPartCommandInput,
    options: GlacierRequestOptions,
    cb: (err: any, data?: UploadMultipartPartCommandOutput) => void
  ): void;

  /**
   * @see {@link ListJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListJobsCommandOutput}.
   */
  paginateListJobs(
    args: ListJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListJobsCommandOutput>;

  /**
   * @see {@link ListMultipartUploadsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMultipartUploadsCommandOutput}.
   */
  paginateListMultipartUploads(
    args: ListMultipartUploadsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMultipartUploadsCommandOutput>;

  /**
   * @see {@link ListPartsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPartsCommandOutput}.
   */
  paginateListParts(
    args: ListPartsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPartsCommandOutput>;

  /**
   * @see {@link ListVaultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVaultsCommandOutput}.
   */
  paginateListVaults(
    args: ListVaultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVaultsCommandOutput>;

  /**
   * @see {@link DescribeVaultCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilVaultExists(
    args: DescribeVaultCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Glacier>, "client">
  ): Promise<WaiterResult<DescribeVaultCommandOutput>>;

  /**
   * @see {@link DescribeVaultCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilVaultNotExists(
    args: DescribeVaultCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Glacier>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;
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
createAggregatedClient(commands, Glacier, { paginators, waiters });
