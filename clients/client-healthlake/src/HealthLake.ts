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
  type RestoreFHIRDatastoreCommandInput,
  type RestoreFHIRDatastoreCommandOutput,
  RestoreFHIRDatastoreCommand,
} from "./commands/RestoreFHIRDatastoreCommand";
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
  RestoreFHIRDatastoreCommand,
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

/**
 * @public
 */
export interface HealthLakeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface HealthLake {
  /**
   * @see {@link CreateDataTransformationProfileCommand}
   */
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<CreateDataTransformationProfileCommandOutput>;
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    cb: (err: any, data?: CreateDataTransformationProfileCommandOutput) => void
  ): void;
  createDataTransformationProfile(
    args: CreateDataTransformationProfileCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: CreateDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFHIRDatastoreCommand}
   */
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<CreateFHIRDatastoreCommandOutput>;
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;
  createFHIRDatastore(
    args: CreateFHIRDatastoreCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: CreateFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataTransformationProfileCommand}
   */
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DeleteDataTransformationProfileCommandOutput>;
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    cb: (err: any, data?: DeleteDataTransformationProfileCommandOutput) => void
  ): void;
  deleteDataTransformationProfile(
    args: DeleteDataTransformationProfileCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DeleteDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFHIRDatastoreCommand}
   */
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DeleteFHIRDatastoreCommandOutput>;
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;
  deleteFHIRDatastore(
    args: DeleteFHIRDatastoreCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DeleteFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataTransformationJobCommand}
   */
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DescribeDataTransformationJobCommandOutput>;
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    cb: (err: any, data?: DescribeDataTransformationJobCommandOutput) => void
  ): void;
  describeDataTransformationJob(
    args: DescribeDataTransformationJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DescribeDataTransformationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRDatastoreCommand}
   */
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DescribeFHIRDatastoreCommandOutput>;
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;
  describeFHIRDatastore(
    args: DescribeFHIRDatastoreCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DescribeFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRExportJobCommand}
   */
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DescribeFHIRExportJobCommandOutput>;
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;
  describeFHIRExportJob(
    args: DescribeFHIRExportJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DescribeFHIRExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFHIRImportJobCommand}
   */
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<DescribeFHIRImportJobCommandOutput>;
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;
  describeFHIRImportJob(
    args: DescribeFHIRImportJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: DescribeFHIRImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataTransformationProfileCommand}
   */
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<GetDataTransformationProfileCommandOutput>;
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    cb: (err: any, data?: GetDataTransformationProfileCommandOutput) => void
  ): void;
  getDataTransformationProfile(
    args: GetDataTransformationProfileCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: GetDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationJobsCommand}
   */
  listDataTransformationJobs(): Promise<ListDataTransformationJobsCommandOutput>;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListDataTransformationJobsCommandOutput>;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    cb: (err: any, data?: ListDataTransformationJobsCommandOutput) => void
  ): void;
  listDataTransformationJobs(
    args: ListDataTransformationJobsCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListDataTransformationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationProfilesCommand}
   */
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListDataTransformationProfilesCommandOutput>;
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    cb: (err: any, data?: ListDataTransformationProfilesCommandOutput) => void
  ): void;
  listDataTransformationProfiles(
    args: ListDataTransformationProfilesCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListDataTransformationProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataTransformationProfileVersionsCommand}
   */
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListDataTransformationProfileVersionsCommandOutput>;
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    cb: (err: any, data?: ListDataTransformationProfileVersionsCommandOutput) => void
  ): void;
  listDataTransformationProfileVersions(
    args: ListDataTransformationProfileVersionsCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListDataTransformationProfileVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRDatastoresCommand}
   */
  listFHIRDatastores(): Promise<ListFHIRDatastoresCommandOutput>;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListFHIRDatastoresCommandOutput>;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;
  listFHIRDatastores(
    args: ListFHIRDatastoresCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListFHIRDatastoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRExportJobsCommand}
   */
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListFHIRExportJobsCommandOutput>;
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    cb: (err: any, data?: ListFHIRExportJobsCommandOutput) => void
  ): void;
  listFHIRExportJobs(
    args: ListFHIRExportJobsCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListFHIRExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFHIRImportJobsCommand}
   */
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListFHIRImportJobsCommandOutput>;
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    cb: (err: any, data?: ListFHIRImportJobsCommandOutput) => void
  ): void;
  listFHIRImportJobs(
    args: ListFHIRImportJobsCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListFHIRImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishDataTransformationProfileCommand}
   */
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<PublishDataTransformationProfileCommandOutput>;
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    cb: (err: any, data?: PublishDataTransformationProfileCommandOutput) => void
  ): void;
  publishDataTransformationProfile(
    args: PublishDataTransformationProfileCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: PublishDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreFHIRDatastoreCommand}
   */
  restoreFHIRDatastore(
    args: RestoreFHIRDatastoreCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<RestoreFHIRDatastoreCommandOutput>;
  restoreFHIRDatastore(
    args: RestoreFHIRDatastoreCommandInput,
    cb: (err: any, data?: RestoreFHIRDatastoreCommandOutput) => void
  ): void;
  restoreFHIRDatastore(
    args: RestoreFHIRDatastoreCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: RestoreFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDataTransformationJobCommand}
   */
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<StartDataTransformationJobCommandOutput>;
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    cb: (err: any, data?: StartDataTransformationJobCommandOutput) => void
  ): void;
  startDataTransformationJob(
    args: StartDataTransformationJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: StartDataTransformationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFHIRExportJobCommand}
   */
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<StartFHIRExportJobCommandOutput>;
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;
  startFHIRExportJob(
    args: StartFHIRExportJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: StartFHIRExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartFHIRImportJobCommand}
   */
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<StartFHIRImportJobCommandOutput>;
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;
  startFHIRImportJob(
    args: StartFHIRImportJobCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: StartFHIRImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataTransformationProfileCommand}
   */
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<UpdateDataTransformationProfileCommandOutput>;
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    cb: (err: any, data?: UpdateDataTransformationProfileCommandOutput) => void
  ): void;
  updateDataTransformationProfile(
    args: UpdateDataTransformationProfileCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: UpdateDataTransformationProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFHIRDatastoreCommand}
   */
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<UpdateFHIRDatastoreCommandOutput>;
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    cb: (err: any, data?: UpdateFHIRDatastoreCommandOutput) => void
  ): void;
  updateFHIRDatastore(
    args: UpdateFHIRDatastoreCommandInput,
    options: HealthLakeRequestOptions,
    cb: (err: any, data?: UpdateFHIRDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProfileWithAgentCommand}
   */
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    options?: HealthLakeRequestOptions
  ): Promise<UpdateProfileWithAgentCommandOutput>;
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    cb: (err: any, data?: UpdateProfileWithAgentCommandOutput) => void
  ): void;
  updateProfileWithAgent(
    args: UpdateProfileWithAgentCommandInput,
    options: HealthLakeRequestOptions,
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
 * <p>This is the <i>HealthLake API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/healthlake/latest/devguide/what-is.html">What is HealthLake?</a> in the <i>HealthLake Developer Guide</i>.</p>
 * @public
 */
export class HealthLake extends HealthLakeClient implements HealthLake {}
createAggregatedClient(commands, HealthLake, { paginators, waiters });
