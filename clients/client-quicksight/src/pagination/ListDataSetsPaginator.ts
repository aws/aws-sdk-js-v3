// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "../commands/ListDataSetsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSets: (
  config: QuickSightPaginationConfiguration,
  input: ListDataSetsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetsCommandOutput> = createPaginator<
  QuickSightPaginationConfiguration,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
>(QuickSightClient, ListDataSetsCommand, "NextToken", "NextToken", "MaxResults");
