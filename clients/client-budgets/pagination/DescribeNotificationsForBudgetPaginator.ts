import { Budgets } from "../Budgets";
import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeNotificationsForBudgetCommand,
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BudgetsClient,
  input: DescribeNotificationsForBudgetCommandInput,
  ...args: any
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNotificationsForBudgetCommand(input), ...args);
};
const makePagedRequest = async (
  client: Budgets,
  input: DescribeNotificationsForBudgetCommandInput,
  ...args: any
): Promise<DescribeNotificationsForBudgetCommandOutput> => {
  // @ts-ignore
  return await client.describeNotificationsForBudget(input, ...args);
};
export async function* paginateDescribeNotificationsForBudget(
  config: BudgetsPaginationConfiguration,
  input: DescribeNotificationsForBudgetCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNotificationsForBudgetCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNotificationsForBudgetCommandOutput;
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
