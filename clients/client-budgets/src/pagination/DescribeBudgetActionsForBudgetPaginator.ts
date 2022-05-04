// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgetActionsForBudget(input, ...args);
};
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
    if (config.client instanceof Budgets) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BudgetsClient) {
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
