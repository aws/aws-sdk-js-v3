// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { BackupSearchClient } from "./BackupSearchClient";
import {
  type GetSearchJobCommandInput,
  type GetSearchJobCommandOutput,
  GetSearchJobCommand,
} from "./commands/GetSearchJobCommand";
import {
  type GetSearchResultExportJobCommandInput,
  type GetSearchResultExportJobCommandOutput,
  GetSearchResultExportJobCommand,
} from "./commands/GetSearchResultExportJobCommand";
import {
  type ListSearchJobBackupsCommandInput,
  type ListSearchJobBackupsCommandOutput,
  ListSearchJobBackupsCommand,
} from "./commands/ListSearchJobBackupsCommand";
import {
  type ListSearchJobResultsCommandInput,
  type ListSearchJobResultsCommandOutput,
  ListSearchJobResultsCommand,
} from "./commands/ListSearchJobResultsCommand";
import {
  type ListSearchJobsCommandInput,
  type ListSearchJobsCommandOutput,
  ListSearchJobsCommand,
} from "./commands/ListSearchJobsCommand";
import {
  type ListSearchResultExportJobsCommandInput,
  type ListSearchResultExportJobsCommandOutput,
  ListSearchResultExportJobsCommand,
} from "./commands/ListSearchResultExportJobsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartSearchJobCommandInput,
  type StartSearchJobCommandOutput,
  StartSearchJobCommand,
} from "./commands/StartSearchJobCommand";
import {
  type StartSearchResultExportJobCommandInput,
  type StartSearchResultExportJobCommandOutput,
  StartSearchResultExportJobCommand,
} from "./commands/StartSearchResultExportJobCommand";
import {
  type StopSearchJobCommandInput,
  type StopSearchJobCommandOutput,
  StopSearchJobCommand,
} from "./commands/StopSearchJobCommand";
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
import { paginateListSearchJobBackups } from "./pagination/ListSearchJobBackupsPaginator";
import { paginateListSearchJobResults } from "./pagination/ListSearchJobResultsPaginator";
import { paginateListSearchJobs } from "./pagination/ListSearchJobsPaginator";
import { paginateListSearchResultExportJobs } from "./pagination/ListSearchResultExportJobsPaginator";

const commands = {
  GetSearchJobCommand,
  GetSearchResultExportJobCommand,
  ListSearchJobBackupsCommand,
  ListSearchJobResultsCommand,
  ListSearchJobsCommand,
  ListSearchResultExportJobsCommand,
  ListTagsForResourceCommand,
  StartSearchJobCommand,
  StartSearchResultExportJobCommand,
  StopSearchJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListSearchJobBackups,
  paginateListSearchJobResults,
  paginateListSearchJobs,
  paginateListSearchResultExportJobs,
};

/**
 * @public
 */
export interface BackupSearchRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface BackupSearch {
  /**
   * @see {@link GetSearchJobCommand}
   */
  getSearchJob(
    args: GetSearchJobCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<GetSearchJobCommandOutput>;
  getSearchJob(
    args: GetSearchJobCommandInput,
    cb: (err: any, data?: GetSearchJobCommandOutput) => void
  ): void;
  getSearchJob(
    args: GetSearchJobCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: GetSearchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSearchResultExportJobCommand}
   */
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<GetSearchResultExportJobCommandOutput>;
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    cb: (err: any, data?: GetSearchResultExportJobCommandOutput) => void
  ): void;
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: GetSearchResultExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobBackupsCommand}
   */
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<ListSearchJobBackupsCommandOutput>;
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    cb: (err: any, data?: ListSearchJobBackupsCommandOutput) => void
  ): void;
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: ListSearchJobBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobResultsCommand}
   */
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<ListSearchJobResultsCommandOutput>;
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    cb: (err: any, data?: ListSearchJobResultsCommandOutput) => void
  ): void;
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: ListSearchJobResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobsCommand}
   */
  listSearchJobs(): Promise<ListSearchJobsCommandOutput>;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<ListSearchJobsCommandOutput>;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    cb: (err: any, data?: ListSearchJobsCommandOutput) => void
  ): void;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: ListSearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchResultExportJobsCommand}
   */
  listSearchResultExportJobs(): Promise<ListSearchResultExportJobsCommandOutput>;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<ListSearchResultExportJobsCommandOutput>;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    cb: (err: any, data?: ListSearchResultExportJobsCommandOutput) => void
  ): void;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: ListSearchResultExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSearchJobCommand}
   */
  startSearchJob(
    args: StartSearchJobCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<StartSearchJobCommandOutput>;
  startSearchJob(
    args: StartSearchJobCommandInput,
    cb: (err: any, data?: StartSearchJobCommandOutput) => void
  ): void;
  startSearchJob(
    args: StartSearchJobCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: StartSearchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSearchResultExportJobCommand}
   */
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<StartSearchResultExportJobCommandOutput>;
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    cb: (err: any, data?: StartSearchResultExportJobCommandOutput) => void
  ): void;
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: StartSearchResultExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSearchJobCommand}
   */
  stopSearchJob(
    args: StopSearchJobCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<StopSearchJobCommandOutput>;
  stopSearchJob(
    args: StopSearchJobCommandInput,
    cb: (err: any, data?: StopSearchJobCommandOutput) => void
  ): void;
  stopSearchJob(
    args: StopSearchJobCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: StopSearchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BackupSearchRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BackupSearchRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSearchJobBackupsCommandOutput}.
   */
  paginateListSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSearchJobBackupsCommandOutput>;

  /**
   * @see {@link ListSearchJobResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSearchJobResultsCommandOutput}.
   */
  paginateListSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSearchJobResultsCommandOutput>;

  /**
   * @see {@link ListSearchJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSearchJobsCommandOutput}.
   */
  paginateListSearchJobs(
    args?: ListSearchJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSearchJobsCommandOutput>;

  /**
   * @see {@link ListSearchResultExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSearchResultExportJobsCommandOutput}.
   */
  paginateListSearchResultExportJobs(
    args?: ListSearchResultExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSearchResultExportJobsCommandOutput>;
}

/**
 * <fullname>Backup Search</fullname> <p>Backup Search is the recovery point and item level search for Backup.</p> <p>For additional information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/api-reference.html">Backup API Reference</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html">Backup Developer Guide</a> </p> </li> </ul>
 * @public
 */
export class BackupSearch extends BackupSearchClient implements BackupSearch {}
createAggregatedClient(commands, BackupSearch, { paginators });
