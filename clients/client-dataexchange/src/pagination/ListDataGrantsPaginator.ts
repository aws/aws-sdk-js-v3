// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataGrantsCommand,
  ListDataGrantsCommandInput,
  ListDataGrantsCommandOutput,
} from "../commands/ListDataGrantsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataGrants: (
  config: DataExchangePaginationConfiguration,
  input: ListDataGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListDataGrantsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListDataGrantsCommandInput,
  ListDataGrantsCommandOutput
>(DataExchangeClient, ListDataGrantsCommand, "NextToken", "NextToken", "MaxResults");
