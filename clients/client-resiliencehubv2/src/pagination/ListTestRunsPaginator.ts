// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRunsCommand,
  ListTestRunsCommandInput,
  ListTestRunsCommandOutput,
} from "../commands/ListTestRunsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRuns: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestRunsCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestRunsCommandInput,
  ListTestRunsCommandOutput
>(Resiliencehubv2Client, ListTestRunsCommand, "nextToken", "nextToken", "maxResults");
