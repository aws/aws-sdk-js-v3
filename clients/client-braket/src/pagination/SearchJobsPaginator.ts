// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BraketClient } from "../BraketClient";
import { SearchJobsCommand, SearchJobsCommandInput, SearchJobsCommandOutput } from "../commands/SearchJobsCommand";
import type { BraketPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchJobs: (
  config: BraketPaginationConfiguration,
  input: SearchJobsCommandInput,
  ...rest: any[]
) => Paginator<SearchJobsCommandOutput> = createPaginator<
  BraketPaginationConfiguration,
  SearchJobsCommandInput,
  SearchJobsCommandOutput
>(BraketClient, SearchJobsCommand, "nextToken", "nextToken", "maxResults");
