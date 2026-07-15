// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CreateDataTransformationProfileCommandInput,
  type CreateDataTransformationProfileCommandOutput,
  CreateDataTransformationProfileCommand,
} from "./commands/CreateDataTransformationProfileCommand";
import {
  type CreateFHIRDatastoreCommandInput,
  type CreateFHIRDatastoreCommandOutput,
  CreateFHIRDatastoreCommand,
} from "./commands/CreateFHIRDatastoreCommand";
import {
  type DeleteDataTransformationProfileCommandInput,
  type DeleteDataTransformationProfileCommandOutput,
  DeleteDataTransformationProfileCommand,
} from "./commands/DeleteDataTransformationProfileCommand";
import {
  type DeleteFHIRDatastoreCommandInput,
  type DeleteFHIRDatastoreCommandOutput,
  DeleteFHIRDatastoreCommand,
} from "./commands/DeleteFHIRDatastoreCommand";
import {
  type DescribeDataTransformationJobCommandInput,
  type DescribeDataTransformationJobCommandOutput,
  DescribeDataTransformationJobCommand,
} from "./commands/DescribeDataTransformationJobCommand";
import {
  type DescribeFHIRDatastoreCommandInput,
  type DescribeFHIRDatastoreCommandOutput,
  DescribeFHIRDatastoreCommand,
} from "./commands/DescribeFHIRDatastoreCommand";
import {
  type DescribeFHIRExportJobCommandInput,
  type DescribeFHIRExportJobCommandOutput,
  DescribeFHIRExportJobCommand,
} from "./commands/DescribeFHIRExportJobCommand";
import {
  type DescribeFHIRImportJobCommandInput,
  type DescribeFHIRImportJobCommandOutput,
  DescribeFHIRImportJobCommand,
} from "./commands/DescribeFHIRImportJobCommand";
import {
  type GetDataTransformationProfileCommandInput,
  type GetDataTransformationProfileCommandOutput,
  GetDataTransformationProfileCommand,
} from "./commands/GetDataTransformationProfileCommand";
import {
  type ListDataTransformationJobsCommandInput,
  type ListDataTransformationJobsCommandOutput,
  ListDataTransformationJobsCommand,
} from "./commands/ListDataTransformationJobsCommand";
import {
  type ListDataTransformationProfilesCommandInput,
  type ListDataTransformationProfilesCommandOutput,
  ListDataTransformationProfilesCommand,
} from "./commands/ListDataTransformationProfilesCommand";
import {
  type ListDataTransformationProfileVersionsCommandInput,
  type ListDataTransformationProfileVersionsCommandOutput,
  ListDataTransformationProfileVersionsCommand,
} from "./commands/ListDataTransformationProfileVersionsCommand";
import {
  type ListFHIRDatastoresCommandInput,
  type ListFHIRDatastoresCommandOutput,
  ListFHIRDatastoresCommand,
} from "./commands/ListFHIRDatastoresCommand";
import {
  type ListFHIRExportJobsCommandInput,
  type ListFHIRExportJobsCommandOutput,
  ListFHIRExportJobsCommand,
} from "./commands/ListFHIRExportJobsCommand";
import {
  type ListFHIRImportJobsCommandInput,
  type ListFHIRImportJobsCommandOutput,
  ListFHIRImportJobsCommand,
} from "./commands/ListFHIRImportJobsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PublishDataTransformationProfileCommandInput,
  type PublishDataTransformationProfileCommandOutput,
  PublishDataTransformationProfileCommand,
} from "./commands/PublishDataTransformationProfileCommand";
import {
  type StartDataTransformationJobCommandInput,
  type StartDataTransformationJobCommandOutput,
  StartDataTransformationJobCommand,
} from "./commands/StartDataTransformationJobCommand";
import {
  type StartFHIRExportJobCommandInput,
  type StartFHIRExportJobCommandOutput,
  StartFHIRExportJobCommand,
} from "./commands/StartFHIRExportJobCommand";
import {
  type StartFHIRImportJobCommandInput,
  type StartFHIRImportJobCommandOutput,
  StartFHIRImportJobCommand,
} from "./commands/StartFHIRImportJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDataTransformationProfileCommandInput,
  type UpdateDataTransformationProfileCommandOutput,
  UpdateDataTransformationProfileCommand,
} from "./commands/UpdateDataTransformationProfileCommand";
import {
  type UpdateFHIRDatastoreCommandInput,
  type UpdateFHIRDatastoreCommandOutput,
  UpdateFHIRDatastoreCommand,
} from "./commands/UpdateFHIRDatastoreCommand";
import {
  type UpdateProfileWithAgentCommandInput,
  type UpdateProfileWithAgentCommandOutput,
  UpdateProfileWithAgentCommand,
} from "./commands/UpdateProfileWithAgentCommand";
import { HealthLakeClient } from "./HealthLakeClient";
import type { HealthLakeServiceException } from "./models/HealthLakeServiceException";
import { paginateListDataTransformationJobs } from "./pagination/ListDataTransformationJobsPaginator";
import { paginateListDataTransformationProfiles } from "./pagination/ListDataTransformationProfilesPaginator";
import {
  paginateListDataTransformationProfileVersions,
} from "./pagination/ListDataTransformationProfileVersionsPaginator";
import { paginateListFHIRDatastores } from "./pagination/ListFHIRDatastoresPaginator";
import { paginateListFHIRExportJobs } from "./pagination/ListFHIRExportJobsPaginator";
import { paginateListFHIRImportJobs } from "./pagination/ListFHIRImportJobsPaginator";
import { waitUntilDataTransformationJobCompleted } from "./waiters/waitForDataTransformationJobCompleted";
import { waitUntilFHIRDatastoreActive } from "./waiters/waitForFHIRDatastoreActive";
import { waitUntilFHIRDatastoreDeleted } from "./waiters/waitForFHIRDatastoreDeleted";
import { waitUntilFHIRExportJobCompleted } from "./waiters/waitForFHIRExportJobCompleted";
import { waitUntilFHIRImportJobCompleted } from "./waiters/waitForFHIRImportJobCompleted";

const commands = {
  CreateDataTransformationProfileCommand,
  CreateFHIRDatastoreCommand,
  DeleteDataTransformationProfileCommand,
  DeleteFHIRDatastoreCommand,
  DescribeDataTransformationJobCommand,
  DescribeFHIRDatastoreCommand,
  DescribeFHIRExportJobCommand,
  DescribeFHIRImportJobCommand,
  GetDataTransformationProfileCommand,
  ListDataTransformationJobsCommand,
  ListDataTransformationProfilesCommand,
  ListDataTransformationProfileVersionsCommand,
  ListFHIRDatastoresCommand,
  ListFHIRExportJobsCommand,
  ListFHIRImportJobsCommand,
  ListTagsForResourceCommand,
  PublishDataTransformationProfileCommand,
  StartDataTransformationJobCommand,
  StartFHIRExportJobCommand,
  StartFHIRImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDataTransformationProfileCommand,
  UpdateFHIRDatastoreCommand,
  UpdateProfileWithAgentCommand,
};
const paginators = {
  paginateListDataTransformationJobs,
  paginateListDataTransformationProfiles,
  paginateListDataTransformationProfileVersions,
  paginateListFHIRDatastores,
  paginateListFHIRExportJobs,
  paginateListFHIRImportJobs,
};
const waiters = {
  waitUntilDataTransformationJobCompleted,
  waitUntilFHIRDatastoreActive,
  waitUntilFHIRDatastoreDeleted,
  waitUntilFHIRExportJobCompleted,
  waitUntilFHIRImportJobCompleted,
};

export interface HealthLake {
  /**
   * @see {@link CreateDataTransformationProfileCommand}
   */
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataTransformationProfileCommandOutput>;
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    cb: (err: any, data?: CreateDataTransformationProfileCommandOutput) => void
  ): void;
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFHIRDatastoreCommand}
   */
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFHIRDatastoreCommandOutput>;
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataTransformationProfileCommand}
   */
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataTransformationProfileCommandOutput>;
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    cb: (err: any, data?: DeleteDataTransformationProfileCommandOutput) => void
  ): void;
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFHIRDatastoreCommand}
   */
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFHIRDatastoreCommandOutput>;
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataTransformationJobCommand}
   */
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataTransformationJobCommandOutput>;
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    cb: (err: any, data?: DescribeDataTransformationJobCommandOutput) => void
  ): void;
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataTransformationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRDatastoreCommand}
   */
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRDatastoreCommandOutput>;
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRExportJobCommand}
   */
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRExportJobCommandOutput>;
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRImportJobCommand}
   */
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFHIRImportJobCommandOutput>;
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataTransformationProfileCommand}
   */
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataTransformationProfileCommandOutput>;
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    cb: (err: any, data?: GetDataTransformationProfileCommandOutput) => void
  ): void;
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationJobsCommand}
   */
  listDataTransformationJobs(): Promise<ListDataTransformationJobsCommandOutput>;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTransformationJobsCommandOutput>;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    cb: (err: any, data?: ListDataTransformationJobsCommandOutput) => void
  ): void;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTransformationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationProfilesCommand}
   */
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTransformationProfilesCommandOutput>;
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    cb: (err: any, data?: ListDataTransformationProfilesCommandOutput) => void
  ): void;
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTransformationProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationProfileVersionsCommand}
   */
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataTransformationProfileVersionsCommandOutput>;
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    cb: (err: any, data?: ListDataTransformationProfileVersionsCommandOutput) => void
  ): void;
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataTransformationProfileVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRDatastoresCommand}
   */
  listFHIRDatastores(): Promise<ListFHIRDatastoresCommandOutput>;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFHIRDatastoresCommandOutput>;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRExportJobsCommand}
   */
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFHIRExportJobsCommandOutput>;
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    cb: (err: any, data?: ListFHIRExportJobsCommandOutput) => void
  ): void;
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFHIRExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRImportJobsCommand}
   */
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFHIRImportJobsCommandOutput>;
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    cb: (err: any, data?: ListFHIRImportJobsCommandOutput) => void
  ): void;
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFHIRImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishDataTransformationProfileCommand}
   */
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishDataTransformationProfileCommandOutput>;
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    cb: (err: any, data?: PublishDataTransformationProfileCommandOutput) => void
  ): void;
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataTransformationJobCommand}
   */
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataTransformationJobCommandOutput>;
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    cb: (err: any, data?: StartDataTransformationJobCommandOutput) => void
  ): void;
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataTransformationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFHIRExportJobCommand}
   */
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFHIRExportJobCommandOutput>;
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFHIRImportJobCommand}
   */
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFHIRImportJobCommandOutput>;
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataTransformationProfileCommand}
   */
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataTransformationProfileCommandOutput>;
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    cb: (err: any, data?: UpdateDataTransformationProfileCommandOutput) => void
  ): void;
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFHIRDatastoreCommand}
   */
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFHIRDatastoreCommandOutput>;
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    cb: (err: any, data?: UpdateFHIRDatastoreCommandOutput) => void
  ): void;
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileWithAgentCommand}
   */
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProfileWithAgentCommandOutput>;
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    cb: (err: any, data?: UpdateProfileWithAgentCommandOutput) => void
  ): void;
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProfileWithAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTransformationJobsCommandOutput}.
   */
  paginateListDataTransformationJobs(
    args?: ListDataTransformationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTransformationJobsCommandOutput>;

  /**
   * @see {@link ListDataTransformationProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTransformationProfilesCommandOutput}.
   */
  paginateListDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTransformationProfilesCommandOutput>;

  /**
   * @see {@link ListDataTransformationProfileVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDataTransformationProfileVersionsCommandOutput}.
   */
  paginateListDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDataTransformationProfileVersionsCommandOutput>;

  /**
   * @see {@link ListFHIRDatastoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFHIRDatastoresCommandOutput}.
   */
  paginateListFHIRDatastores(
    args?: ListFHIRDatastoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFHIRDatastoresCommandOutput>;

  /**
   * @see {@link ListFHIRExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFHIRExportJobsCommandOutput}.
   */
  paginateListFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFHIRExportJobsCommandOutput>;

  /**
   * @see {@link ListFHIRImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFHIRImportJobsCommandOutput}.
   */
  paginateListFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFHIRImportJobsCommandOutput>;

  /**
   * @see {@link DescribeDataTransformationJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDataTransformationJobCompleted(
    args: DescribeDataTransformationJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult<DescribeDataTransformationJobCommandOutput>>;

  /**
   * @see {@link DescribeFHIRDatastoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRDatastoreActive(
    args: DescribeFHIRDatastoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult<DescribeFHIRDatastoreCommandOutput>>;

  /**
   * @see {@link DescribeFHIRDatastoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRDatastoreDeleted(
    args: DescribeFHIRDatastoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult<DescribeFHIRDatastoreCommandOutput>>;

  /**
   * @see {@link DescribeFHIRExportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRExportJobCompleted(
    args: DescribeFHIRExportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult<DescribeFHIRExportJobCommandOutput>>;

  /**
   * @see {@link DescribeFHIRImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRImportJobCompleted(
    args: DescribeFHIRImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult<DescribeFHIRImportJobCommandOutput>>;
}

/**
 * <p>This is the <i>AWS HealthLake API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/healthlake/latest/devguide/what-is.html">What is AWS HealthLake?</a> in the <i>AWS HealthLake Developer Guide</i>.</p>
 * @public
 */
export class HealthLake extends HealthLakeClient implements HealthLake {}
createAggregatedClient(commands, HealthLake, { paginators, waiters });
