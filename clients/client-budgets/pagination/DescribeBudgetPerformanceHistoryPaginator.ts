import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
