// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribePullThroughCacheRulesCommand,
  DescribePullThroughCacheRulesCommandInput,
  DescribePullThroughCacheRulesCommandOutput,
} from "../commands/DescribePullThroughCacheRulesCommand";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribePullThroughCacheRulesCommandInput,
  ...args: any
): Promise<DescribePullThroughCacheRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePullThroughCacheRulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribePullThroughCacheRules(
  config: ECRPaginationConfiguration,
  input: DescribePullThroughCacheRulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePullThroughCacheRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePullThroughCacheRulesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
