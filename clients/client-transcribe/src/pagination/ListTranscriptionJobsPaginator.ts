// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTranscriptionJobs: (
  config: TranscribePaginationConfiguration,
  input: ListTranscriptionJobsCommandInput,
  ...rest: any[]
) => Paginator<ListTranscriptionJobsCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput
>(TranscribeClient, ListTranscriptionJobsCommand, "NextToken", "NextToken", "MaxResults");
