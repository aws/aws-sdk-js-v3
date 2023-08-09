// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "../commands/DescribeBudgetActionHistoriesCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeBudgetActionHistoriesCommandInput,
  ...args: any
): Promise<DescribeBudgetActionHistoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBudgetActionHistoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeBudgetActionHistories(
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionHistoriesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBudgetActionHistoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBudgetActionHistoriesCommandOutput;
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
