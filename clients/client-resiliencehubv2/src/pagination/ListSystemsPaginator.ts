// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListSystemsCommand, ListSystemsCommandInput, ListSystemsCommandOutput } from "../commands/ListSystemsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSystems: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListSystemsCommandInput,
  ...rest: any[]
) => Paginator<ListSystemsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListSystemsCommandInput,
  ListSystemsCommandOutput
>(Resiliencehubv2Client, ListSystemsCommand, "nextToken", "nextToken", "maxResults");
