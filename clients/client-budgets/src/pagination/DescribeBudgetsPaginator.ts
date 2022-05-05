// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetsCommand,
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
} from "../commands/DescribeBudgetsCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetsCommandInput,
  ...args: any
): Promise<DescribeBudgetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Budgets,
  input: DescribeBudgetsCommandInput,
  ...args: any
): Promise<DescribeBudgetsCommandOutput> => {
  // @ts-ignore
  return await client.describeBudgets(input, ...args);
};
export async function* paginateDescribeBudgets(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetsCommandOutput;
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
