// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { MediaConvertClient } from "../MediaConvertClient";
import { MediaConvertPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: MediaConvertPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  MediaConvertPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(MediaConvertClient, ListJobsCommand, "NextToken", "NextToken", "MaxResults");
