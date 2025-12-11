// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReceivedDataGrantsCommand,
  ListReceivedDataGrantsCommandInput,
  ListReceivedDataGrantsCommandOutput,
} from "../commands/ListReceivedDataGrantsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReceivedDataGrants: (
  config: DataExchangePaginationConfiguration,
  input: ListReceivedDataGrantsCommandInput,
  ...rest: any[]
) => Paginator<ListReceivedDataGrantsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListReceivedDataGrantsCommandInput,
  ListReceivedDataGrantsCommandOutput
>(DataExchangeClient, ListReceivedDataGrantsCommand, "NextToken", "NextToken", "MaxResults");
