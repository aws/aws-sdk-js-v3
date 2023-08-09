// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchQuickConnectsCommand,
  SearchQuickConnectsCommandInput,
  SearchQuickConnectsCommandOutput,
} from "../commands/SearchQuickConnectsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: SearchQuickConnectsCommandInput,
  ...args: any
): Promise<SearchQuickConnectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchQuickConnectsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchQuickConnects(
  config: ConnectPaginationConfiguration,
  input: SearchQuickConnectsCommandInput,
  ...additionalArguments: any
): Paginator<SearchQuickConnectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchQuickConnectsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
