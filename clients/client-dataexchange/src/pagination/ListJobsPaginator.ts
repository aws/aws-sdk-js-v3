// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: DataExchangePaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(DataExchangeClient, ListJobsCommand, "NextToken", "NextToken", "MaxResults");
