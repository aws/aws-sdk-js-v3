// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetActionsForBudgetCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeBudgetActionsForBudget(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionsForBudgetCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetActionsForBudgetCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BudgetsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Budgets | BudgetsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
