// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBudgetsCommand, ListBudgetsCommandInput, ListBudgetsCommandOutput } from "../commands/ListBudgetsCommand";
import { DeadlineClient } from "../DeadlineClient";
import { DeadlinePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBudgets: (
  config: DeadlinePaginationConfiguration,
  input: ListBudgetsCommandInput,
  ...rest: any[]
) => Paginator<ListBudgetsCommandOutput> = createPaginator<
  DeadlinePaginationConfiguration,
  ListBudgetsCommandInput,
  ListBudgetsCommandOutput
>(DeadlineClient, ListBudgetsCommand, "nextToken", "nextToken", "maxResults");
