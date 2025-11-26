// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListUsageTotalsCommand,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
} from "../commands/ListUsageTotalsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListUsageTotals: (
  config: Inspector2PaginationConfiguration,
  input: ListUsageTotalsCommandInput,
  ...rest: any[]
) => Paginator<ListUsageTotalsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput
>(Inspector2Client, ListUsageTotalsCommand, "nextToken", "nextToken", "maxResults");
