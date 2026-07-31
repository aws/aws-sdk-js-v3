// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTestSourcesCommand,
  ListTestSourcesCommandInput,
  ListTestSourcesCommandOutput,
} from "../commands/ListTestSourcesCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTestSources: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListTestSourcesCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestSourcesCommandInput,
  ListTestSourcesCommandOutput
>(Resiliencehubv2Client, ListTestSourcesCommand, "nextToken", "nextToken", "maxResults");
