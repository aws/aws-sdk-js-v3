// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListQuickConnectsCommand,
  ListQuickConnectsCommandInput,
  ListQuickConnectsCommandOutput,
} from "../commands/ListQuickConnectsCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListQuickConnectsCommandInput,
  ...args: any
): Promise<ListQuickConnectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQuickConnectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListQuickConnectsCommandInput,
  ...args: any
): Promise<ListQuickConnectsCommandOutput> => {
  // @ts-ignore
  return await client.listQuickConnects(input, ...args);
};
export async function* paginateListQuickConnects(
  config: ConnectPaginationConfiguration,
  input: ListQuickConnectsCommandInput,
  ...additionalArguments: any
): Paginator<ListQuickConnectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQuickConnectsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
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
