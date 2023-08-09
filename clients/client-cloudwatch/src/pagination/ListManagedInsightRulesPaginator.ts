// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudWatchClient } from "../CloudWatchClient";
import {
  ListManagedInsightRulesCommand,
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "../commands/ListManagedInsightRulesCommand";
import { CloudWatchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof CloudWatchClient) {
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
