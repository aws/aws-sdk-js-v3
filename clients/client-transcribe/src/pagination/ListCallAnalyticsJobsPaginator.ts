// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCallAnalyticsJobsCommand,
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput,
} from "../commands/ListCallAnalyticsJobsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCallAnalyticsJobs: (
  config: TranscribePaginationConfiguration,
  input: ListCallAnalyticsJobsCommandInput,
  ...rest: any[]
) => Paginator<ListCallAnalyticsJobsCommandOutput> = createPaginator<
  TranscribePaginationConfiguration,
  ListCallAnalyticsJobsCommandInput,
  ListCallAnalyticsJobsCommandOutput
>(TranscribeClient, ListCallAnalyticsJobsCommand, "NextToken", "NextToken", "MaxResults");
