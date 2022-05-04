// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetPerformanceHistoryCommandInput,
  ...args: any
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetPerformanceHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetPerformanceHistoryCommandInput,
  ...args: any
): Promise<DescribeBudgetPerformanceHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgetPerformanceHistory(input, ...args);
};
export async function* paginateDescribeBudgetPerformanceHistory(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetPerformanceHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetPerformanceHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetPerformanceHistoryCommandOutput;
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
