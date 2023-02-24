// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "../commands/ListVariantStoresCommand";
import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Omics,
  input: ListVariantStoresCommandInput,
  ...args: any
): Promise<ListVariantStoresCommandOutput> => {
  // @ts-ignore
  return await client.listVariantStores(input, ...args);
};
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
    if (config.client instanceof Omics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OmicsClient) {
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
