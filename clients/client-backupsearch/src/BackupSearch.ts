// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BackupSearchClient } from "./BackupSearchClient";
import {
  GetSearchJobCommand,
  GetSearchJobCommandInput,
  GetSearchJobCommandOutput,
} from "./commands/GetSearchJobCommand";
import {
  GetSearchResultExportJobCommand,
  GetSearchResultExportJobCommandInput,
  GetSearchResultExportJobCommandOutput,
} from "./commands/GetSearchResultExportJobCommand";
import {
  ListSearchJobBackupsCommand,
  ListSearchJobBackupsCommandInput,
  ListSearchJobBackupsCommandOutput,
} from "./commands/ListSearchJobBackupsCommand";
import {
  ListSearchJobResultsCommand,
  ListSearchJobResultsCommandInput,
  ListSearchJobResultsCommandOutput,
} from "./commands/ListSearchJobResultsCommand";
import {
  ListSearchJobsCommand,
  ListSearchJobsCommandInput,
  ListSearchJobsCommandOutput,
} from "./commands/ListSearchJobsCommand";
import {
  ListSearchResultExportJobsCommand,
  ListSearchResultExportJobsCommandInput,
  ListSearchResultExportJobsCommandOutput,
} from "./commands/ListSearchResultExportJobsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartSearchJobCommand,
  StartSearchJobCommandInput,
  StartSearchJobCommandOutput,
} from "./commands/StartSearchJobCommand";
import {
  StartSearchResultExportJobCommand,
  StartSearchResultExportJobCommandInput,
  StartSearchResultExportJobCommandOutput,
} from "./commands/StartSearchResultExportJobCommand";
import {
  StopSearchJobCommand,
  StopSearchJobCommandInput,
  StopSearchJobCommandOutput,
} from "./commands/StopSearchJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

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

export interface BackupSearch {
  /**
   * @see {@link GetSearchJobCommand}
   */
  getSearchJob(
    args: GetSearchJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSearchJobCommandOutput>;
  getSearchJob(
    args: GetSearchJobCommandInput,
    cb: (err: any, data?: GetSearchJobCommandOutput) => void
  ): void;
  getSearchJob(
    args: GetSearchJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSearchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSearchResultExportJobCommand}
   */
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSearchResultExportJobCommandOutput>;
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    cb: (err: any, data?: GetSearchResultExportJobCommandOutput) => void
  ): void;
  getSearchResultExportJob(
    args: GetSearchResultExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSearchResultExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobBackupsCommand}
   */
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSearchJobBackupsCommandOutput>;
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    cb: (err: any, data?: ListSearchJobBackupsCommandOutput) => void
  ): void;
  listSearchJobBackups(
    args: ListSearchJobBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSearchJobBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobResultsCommand}
   */
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSearchJobResultsCommandOutput>;
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    cb: (err: any, data?: ListSearchJobResultsCommandOutput) => void
  ): void;
  listSearchJobResults(
    args: ListSearchJobResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSearchJobResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchJobsCommand}
   */
  listSearchJobs(): Promise<ListSearchJobsCommandOutput>;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSearchJobsCommandOutput>;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    cb: (err: any, data?: ListSearchJobsCommandOutput) => void
  ): void;
  listSearchJobs(
    args: ListSearchJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSearchJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSearchResultExportJobsCommand}
   */
  listSearchResultExportJobs(): Promise<ListSearchResultExportJobsCommandOutput>;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSearchResultExportJobsCommandOutput>;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    cb: (err: any, data?: ListSearchResultExportJobsCommandOutput) => void
  ): void;
  listSearchResultExportJobs(
    args: ListSearchResultExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSearchResultExportJobsCommandOutput) => void
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
   * @see {@link StartSearchJobCommand}
   */
  startSearchJob(
    args: StartSearchJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSearchJobCommandOutput>;
  startSearchJob(
    args: StartSearchJobCommandInput,
    cb: (err: any, data?: StartSearchJobCommandOutput) => void
  ): void;
  startSearchJob(
    args: StartSearchJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSearchJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSearchResultExportJobCommand}
   */
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSearchResultExportJobCommandOutput>;
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    cb: (err: any, data?: StartSearchResultExportJobCommandOutput) => void
  ): void;
  startSearchResultExportJob(
    args: StartSearchResultExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSearchResultExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSearchJobCommand}
   */
  stopSearchJob(
    args: StopSearchJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSearchJobCommandOutput>;
  stopSearchJob(
    args: StopSearchJobCommandInput,
    cb: (err: any, data?: StopSearchJobCommandOutput) => void
  ): void;
  stopSearchJob(
    args: StopSearchJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSearchJobCommandOutput) => void
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
}

/**
 * <fullname>Backup Search</fullname> <p>Backup Search is the recovery point and item level search for Backup.</p> <p>For additional information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/api-reference.html">Backup API Reference</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html">Backup Developer Guide</a> </p> </li> </ul>
 * @public
 */
export class BackupSearch extends BackupSearchClient implements BackupSearch {}
createAggregatedClient(commands, BackupSearch);
