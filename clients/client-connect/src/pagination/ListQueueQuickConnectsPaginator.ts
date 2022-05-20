// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListQueueQuickConnectsCommand,
  ListQueueQuickConnectsCommandInput,
  ListQueueQuickConnectsCommandOutput,
} from "../commands/ListQueueQuickConnectsCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListQueueQuickConnectsCommandInput,
  ...args: any
): Promise<ListQueueQuickConnectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueueQuickConnectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListQueueQuickConnectsCommandInput,
  ...args: any
): Promise<ListQueueQuickConnectsCommandOutput> => {
  // @ts-ignore
  return await client.listQueueQuickConnects(input, ...args);
};
export async function* paginateListQueueQuickConnects(
  config: ConnectPaginationConfiguration,
  input: ListQueueQuickConnectsCommandInput,
  ...additionalArguments: any
): Paginator<ListQueueQuickConnectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueueQuickConnectsCommandOutput;
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
