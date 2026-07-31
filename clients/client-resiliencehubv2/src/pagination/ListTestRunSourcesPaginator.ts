// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestRunSourcesCommand,
  ListTestRunSourcesCommandInput,
  ListTestRunSourcesCommandOutput,
} from "../commands/ListTestRunSourcesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestRunSources: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestRunSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListTestRunSourcesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestRunSourcesCommandInput,
  ListTestRunSourcesCommandOutput
>(Resiliencehubv2Client, ListTestRunSourcesCommand, "nextToken", "nextToken", "maxResults");
