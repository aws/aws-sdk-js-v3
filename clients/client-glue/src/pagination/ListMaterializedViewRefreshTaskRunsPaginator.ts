// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMaterializedViewRefreshTaskRunsCommand,
  ListMaterializedViewRefreshTaskRunsCommandInput,
  ListMaterializedViewRefreshTaskRunsCommandOutput,
} from "../commands/ListMaterializedViewRefreshTaskRunsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMaterializedViewRefreshTaskRuns: (
  config: GluePaginationConfiguration,
  input: ListMaterializedViewRefreshTaskRunsCommandInput,
  ...rest: any[]
) => Paginator<ListMaterializedViewRefreshTaskRunsCommandOutput> = createPaginator<
  GluePaginationConfiguration,
  ListMaterializedViewRefreshTaskRunsCommandInput,
  ListMaterializedViewRefreshTaskRunsCommandOutput
>(GlueClient, ListMaterializedViewRefreshTaskRunsCommand, "NextToken", "NextToken", "MaxResults");
