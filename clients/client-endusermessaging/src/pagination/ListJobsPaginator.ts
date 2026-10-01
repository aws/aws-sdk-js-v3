// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobsCommand, ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import { EndUserMessagingClient } from "../EndUserMessagingClient";
import type { EndUserMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobs: (
  config: EndUserMessagingPaginationConfiguration,
  input: ListJobsCommandInput,
  ...rest: any[]
) => Paginator<ListJobsCommandOutput> = createPaginator<
  EndUserMessagingPaginationConfiguration,
  ListJobsCommandInput,
  ListJobsCommandOutput
>(EndUserMessagingClient, ListJobsCommand, "nextToken", "nextToken", "maxResults");
