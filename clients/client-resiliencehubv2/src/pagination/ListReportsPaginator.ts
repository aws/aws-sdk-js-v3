// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListReportsCommand, ListReportsCommandInput, ListReportsCommandOutput } from "../commands/ListReportsCommand";
import { Resiliencehubv2Client } from "../Resiliencehubv2Client";
import type { Resiliencehubv2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReports: (
  config: Resiliencehubv2PaginationConfiguration,
  input: ListReportsCommandInput,
  ...rest: any[]
) => Paginator<ListReportsCommandOutput> = createPaginator<
  Resiliencehubv2PaginationConfiguration,
  ListReportsCommandInput,
  ListReportsCommandOutput
>(Resiliencehubv2Client, ListReportsCommand, "nextToken", "nextToken", "maxResults");
