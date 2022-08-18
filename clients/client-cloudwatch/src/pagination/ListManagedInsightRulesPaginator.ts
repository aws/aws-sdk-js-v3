// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudWatch } from "../CloudWatch";
import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListManagedInsightRulesCommand,
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "../commands/ListManagedInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListManagedInsightRulesCommandInput,
  ...args: any
): Promise<ListManagedInsightRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedInsightRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudWatch,
  input: ListManagedInsightRulesCommandInput,
  ...args: any
): Promise<ListManagedInsightRulesCommandOutput> => {
  // @ts-ignore
  return await client.listManagedInsightRules(input, ...args);
};
export async function* paginateListManagedInsightRules(
  config: CloudWatchPaginationConfiguration,
  input: ListManagedInsightRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedInsightRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedInsightRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
