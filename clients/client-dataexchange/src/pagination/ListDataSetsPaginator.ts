// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "../commands/ListDataSetsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSets: (
  config: DataExchangePaginationConfiguration,
  input: ListDataSetsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSetsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput
>(DataExchangeClient, ListDataSetsCommand, "NextToken", "NextToken", "MaxResults");
