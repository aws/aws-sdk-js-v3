// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "../commands/ListAccountsCommand";
import { ComputeOptimizerAutomationClient } from "../ComputeOptimizerAutomationClient";
import { ComputeOptimizerAutomationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccounts: (
  config: ComputeOptimizerAutomationPaginationConfiguration,
  input: ListAccountsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountsCommandOutput> = createPaginator<
  ComputeOptimizerAutomationPaginationConfiguration,
  ListAccountsCommandInput,
  ListAccountsCommandOutput
>(ComputeOptimizerAutomationClient, ListAccountsCommand, "nextToken", "nextToken", "maxResults");
