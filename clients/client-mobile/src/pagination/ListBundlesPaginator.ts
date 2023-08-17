// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListBundlesCommand, ListBundlesCommandInput, ListBundlesCommandOutput } from "../commands/ListBundlesCommand";
import { MobileClient } from "../MobileClient";
import { MobilePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MobileClient,
  input: ListBundlesCommandInput,
  ...args: any
): Promise<ListBundlesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBundlesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBundles(
  config: MobilePaginationConfiguration,
  input: ListBundlesCommandInput,
  ...additionalArguments: any
): Paginator<ListBundlesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBundlesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MobileClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mobile | MobileClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
