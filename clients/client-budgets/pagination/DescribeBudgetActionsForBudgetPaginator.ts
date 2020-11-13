import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetActionsForBudgetCommand(input), ...args);
};
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...args: any
): Promise<DescribeBudgetActionsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgetActionsForBudget(input, ...args);
};
export async function* describeBudgetActionsForBudgetPaginate(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionsForBudgetCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
