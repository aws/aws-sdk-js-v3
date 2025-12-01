// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListJobRunsCommand, ListJobRunsCommandInput, ListJobRunsCommandOutput } from "../commands/ListJobRunsCommand";
import { DataBrewClient } from "../DataBrewClient";
import { DataBrewPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListJobRuns: (
  config: DataBrewPaginationConfiguration,
  input: ListJobRunsCommandInput,
  ...rest: any[]
) => Paginator<ListJobRunsCommandOutput> = createPaginator<
  DataBrewPaginationConfiguration,
  ListJobRunsCommandInput,
  ListJobRunsCommandOutput
>(DataBrewClient, ListJobRunsCommand, "NextToken", "NextToken", "MaxResults");
