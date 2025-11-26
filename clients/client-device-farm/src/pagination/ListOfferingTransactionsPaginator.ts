// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOfferingTransactionsCommand,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "../commands/ListOfferingTransactionsCommand";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOfferingTransactions: (
  config: DeviceFarmPaginationConfiguration,
  input: ListOfferingTransactionsCommandInput,
  ...rest: any[]
) => Paginator<ListOfferingTransactionsCommandOutput> = createPaginator<
  DeviceFarmPaginationConfiguration,
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput
>(DeviceFarmClient, ListOfferingTransactionsCommand, "nextToken", "nextToken", "");
