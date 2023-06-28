// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "../commands/ListVariantStoresCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListVariantStoresCommandInput,
  ...args: any
): Promise<ListVariantStoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVariantStoresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVariantStores(
  config: OmicsPaginationConfiguration,
  input: ListVariantStoresCommandInput,
  ...additionalArguments: any
): Paginator<ListVariantStoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVariantStoresCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
