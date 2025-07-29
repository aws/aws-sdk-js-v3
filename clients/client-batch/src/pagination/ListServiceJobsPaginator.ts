// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BatchClient } from "../BatchClient";
import {
  ListServiceJobsCommand,
  ListServiceJobsCommandInput,
  ListServiceJobsCommandOutput,
} from "../commands/ListServiceJobsCommand";
import { BatchPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServiceJobs: (
  config: BatchPaginationConfiguration,
  input: ListServiceJobsCommandInput,
  ...rest: any[]
) => Paginator<ListServiceJobsCommandOutput> = createPaginator<
  BatchPaginationConfiguration,
  ListServiceJobsCommandInput,
  ListServiceJobsCommandOutput
>(BatchClient, ListServiceJobsCommand, "nextToken", "nextToken", "maxResults");
