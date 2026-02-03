// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  CreateFHIRDatastoreCommand,
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
} from "./commands/CreateFHIRDatastoreCommand";
import {
  DeleteFHIRDatastoreCommand,
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
} from "./commands/DeleteFHIRDatastoreCommand";
import {
  DescribeFHIRDatastoreCommand,
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
} from "./commands/DescribeFHIRDatastoreCommand";
import {
  DescribeFHIRExportJobCommand,
  DescribeFHIRExportJobCommandInput,
  DescribeFHIRExportJobCommandOutput,
} from "./commands/DescribeFHIRExportJobCommand";
import {
  DescribeFHIRImportJobCommand,
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
} from "./commands/DescribeFHIRImportJobCommand";
import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "./commands/ListFHIRDatastoresCommand";
import {
  ListFHIRExportJobsCommand,
  ListFHIRExportJobsCommandInput,
  ListFHIRExportJobsCommandOutput,
} from "./commands/ListFHIRExportJobsCommand";
import {
  ListFHIRImportJobsCommand,
  ListFHIRImportJobsCommandInput,
  ListFHIRImportJobsCommandOutput,
} from "./commands/ListFHIRImportJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartFHIRExportJobCommand,
  StartFHIRExportJobCommandInput,
  StartFHIRExportJobCommandOutput,
} from "./commands/StartFHIRExportJobCommand";
import {
  StartFHIRImportJobCommand,
  StartFHIRImportJobCommandInput,
  StartFHIRImportJobCommandOutput,
} from "./commands/StartFHIRImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HealthLakeClient } from "./HealthLakeClient";
import { paginateListFHIRDatastores } from "./pagination/ListFHIRDatastoresPaginator";
import { paginateListFHIRExportJobs } from "./pagination/ListFHIRExportJobsPaginator";
import { paginateListFHIRImportJobs } from "./pagination/ListFHIRImportJobsPaginator";
import { waitUntilFHIRDatastoreActive } from "./waiters/waitForFHIRDatastoreActive";
import { waitUntilFHIRDatastoreDeleted } from "./waiters/waitForFHIRDatastoreDeleted";
import { waitUntilFHIRExportJobCompleted } from "./waiters/waitForFHIRExportJobCompleted";
import { waitUntilFHIRImportJobCompleted } from "./waiters/waitForFHIRImportJobCompleted";

const commands = {
  CreateFHIRDatastoreCommand,
  DeleteFHIRDatastoreCommand,
  DescribeFHIRDatastoreCommand,
  DescribeFHIRExportJobCommand,
  DescribeFHIRImportJobCommand,
  ListFHIRDatastoresCommand,
  ListFHIRExportJobsCommand,
  ListFHIRImportJobsCommand,
  ListTagsForResourceCommand,
  StartFHIRExportJobCommand,
  StartFHIRImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListFHIRDatastores,
  paginateListFHIRExportJobs,
  paginateListFHIRImportJobs,
};
const waiters = {
  waitUntilFHIRDatastoreActive,
  waitUntilFHIRDatastoreDeleted,
  waitUntilFHIRExportJobCompleted,
  waitUntilFHIRImportJobCompleted,
};

export interface HealthLake {
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
   * @see {@link DescribeFHIRDatastoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRDatastoreActive(
    args: DescribeFHIRDatastoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeFHIRDatastoreCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRDatastoreDeleted(
    args: DescribeFHIRDatastoreCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeFHIRExportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRExportJobCompleted(
    args: DescribeFHIRExportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeFHIRImportJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFHIRImportJobCompleted(
    args: DescribeFHIRImportJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<HealthLake>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>This is the <i>AWS HealthLake API Reference</i>. For an introduction to
 *          the service, see <a href="https://docs.aws.amazon.com/healthlake/latest/devguide/what-is.html">What is AWS HealthLake?</a> in the <i>AWS HealthLake Developer
 *             Guide</i>.</p>
 * @public
 */
export class HealthLake extends HealthLakeClient implements HealthLake {}
createAggregatedClient(commands, HealthLake, { paginators, waiters });
