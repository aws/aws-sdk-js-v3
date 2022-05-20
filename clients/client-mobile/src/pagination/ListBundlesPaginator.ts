// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListBundlesCommand, ListBundlesCommandInput, ListBundlesCommandOutput } from "../commands/ListBundlesCommand";
import { Mobile } from "../Mobile";
import { MobileClient } from "../MobileClient";
import { MobilePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Mobile,
  input: ListBundlesCommandInput,
  ...args: any
): Promise<ListBundlesCommandOutput> => {
  // @ts-ignore
  return await client.listBundles(input, ...args);
};
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
    if (config.client instanceof Mobile) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MobileClient) {
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
