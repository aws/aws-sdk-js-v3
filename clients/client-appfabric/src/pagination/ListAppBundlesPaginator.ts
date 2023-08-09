// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppFabricClient } from "../AppFabricClient";
import {
  ListAppBundlesCommand,
  ListAppBundlesCommandInput,
  ListAppBundlesCommandOutput,
} from "../commands/ListAppBundlesCommand";
import { AppFabricPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppFabricClient,
  input: ListAppBundlesCommandInput,
  ...args: any
): Promise<ListAppBundlesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppBundlesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppBundles(
  config: AppFabricPaginationConfiguration,
  input: ListAppBundlesCommandInput,
  ...additionalArguments: any
): Paginator<ListAppBundlesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppBundlesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AppFabricClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppFabric | AppFabricClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
