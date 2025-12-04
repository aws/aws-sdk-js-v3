// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListEventActionsCommand,
  ListEventActionsCommandInput,
  ListEventActionsCommandOutput,
} from "../commands/ListEventActionsCommand";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEventActions: (
  config: DataExchangePaginationConfiguration,
  input: ListEventActionsCommandInput,
  ...rest: any[]
) => Paginator<ListEventActionsCommandOutput> = createPaginator<
  DataExchangePaginationConfiguration,
  ListEventActionsCommandInput,
  ListEventActionsCommandOutput
>(DataExchangeClient, ListEventActionsCommand, "NextToken", "NextToken", "MaxResults");
