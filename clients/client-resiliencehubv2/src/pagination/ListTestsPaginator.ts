// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTestsCommand, ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTests: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListTestsCommandInput,
  ...rest: any[]
) => Paginator<ListTestsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListTestsCommandInput,
  ListTestsCommandOutput
>(Resiliencehubv2Client, ListTestsCommand, "nextToken", "nextToken", "maxResults");
