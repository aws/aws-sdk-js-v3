// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClusterJobsCommand,
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
} from "../commands/ListClusterJobsCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusterJobs: (
  config: SnowballPaginationConfiguration,
  input: ListClusterJobsCommandInput,
  ...rest: any[]
) => Paginator<ListClusterJobsCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput
>(SnowballClient, ListClusterJobsCommand, "NextToken", "NextToken", "MaxResults");
