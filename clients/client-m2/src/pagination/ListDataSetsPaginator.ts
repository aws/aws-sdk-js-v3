// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "../commands/ListDataSetsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSets: (
  config: M2PaginationConfiguration,
  input: ListDataSetsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
>(M2Client, ListDataSetsCommand, "nextToken", "nextToken", "maxResults");
