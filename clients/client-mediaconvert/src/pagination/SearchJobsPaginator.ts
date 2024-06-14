// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { SearchJobsCommand, SearchJobsCommandInput, SearchJobsCommandOutput } from "../commands/SearchJobsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchJobs: (
  config: MediaConvertPaginationConfiguration,
  input: SearchJobsCommandInput,
  ...rest: any[]
) => Paginator<SearchJobsCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  SearchJobsCommandInput,
  SearchJobsCommandOutput
>(MediaConvertClient, SearchJobsCommand, "NextToken", "NextToken", "MaxResults");
